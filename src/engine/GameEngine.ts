import * as THREE from 'three';
import {
  DownState,
  PlayDefinition,
  PlayPhase,
  Position,
  RagdollState,
  RouteType,
  TeamSide,
  ThrowType,
  DebugTelemetry,
} from '../types';
import { PlayerModel, OFFENSE_UNIFORM, DEFENSE_UNIFORM } from '../entities/PlayerModel';
import { FootballEntity } from '../entities/FootballEntity';
import { FieldEnvironment, YARD_TO_METER, FIELD_WIDTH_M } from '../entities/FieldEnvironment';
import { GameplayCamera, CameraPreset } from '../camera/GameplayCamera';
import {
  PLAYBOOK,
  OFFENSE_ALIGNMENTS,
  DEFENSE_ALIGNMENTS,
  getRouteWaypoints,
} from '../football/Playbook';
import {
  DEFAULT_OFFENSE_RATINGS,
  DEFAULT_DEFENSE_RATINGS,
  mapRatingsToPhysics,
  PhysicalAttributes,
} from '../ratings/RatingMapper';
import {
  calculateBallisticTrajectory,
  computeTackleImpact,
} from '../physics/PhysicsMath';
import { sounds } from '../audio/SoundEffects';

export interface PlayerEntity {
  id: string;
  position: Position;
  side: TeamSide;
  model: PlayerModel;
  physics: PhysicalAttributes;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  heading: number; // yaw angle in radians
  targetPos: THREE.Vector3;
  routeType?: RouteType;
  routeWaypoints?: THREE.Vector3[];
  currentWaypointIndex: number;
  assignedOpponentId?: string;
  hasBall: boolean;
  isEngagedWithBlocker: boolean;
  blockerTimer: number;
}

export class GameEngine {
  public scene: THREE.Scene;
  public renderer: THREE.WebGLRenderer;
  public cameraManager: GameplayCamera;
  public field: FieldEnvironment;
  public football: FootballEntity;

  // Players
  public players: Map<string, PlayerEntity> = new Map();
  public ballCarrierId: string | null = null;
  public controlledPlayerId: string = 'QB';

  // Game state
  public playPhase: PlayPhase = 'PRE_SNAP';
  public currentPlay: PlayDefinition = PLAYBOOK[0];
  public downState: DownState;
  public throwType: ThrowType = 'TOUCH';
  public throwChargeTime: number = 0;
  public isChargingThrow: boolean = false;
  public pendingThrowTarget: 'WR1' | 'WR2' | 'WR3' | null = null;

  // Timers
  public playClock: number = 0;
  public whistleTimer: number = 0;
  public resetTimer: number = 0;

  // Debug & Telemetry
  public debugMode: boolean = false;
  public debugLinesGroup: THREE.Group;
  public telemetry: DebugTelemetry;
  private carrierRing: THREE.Mesh;

  // Input states
  public input = {
    forward: 0, // -1 to 1
    lateral: 0, // -1 to 1
    sprint: false,
    action: false, // Juke/hurdle/snap
  };

  // Trajectory tracking
  public targetPassReceiverId: string | null = null;
  public passAirTime: number = 0;
  public lastTackleForce: number = 0;

  private lastTime: number = performance.now();
  private animationFrameId: number = 0;
  private isRunning: boolean = false;
  private destroyed: boolean = false;
  private onStateChangeCallback?: (downState: DownState, phase: PlayPhase, telemetry: DebugTelemetry) => void;

  constructor(container: HTMLElement) {
    // 1. Scene & Renderer
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0f172a); // Prime-time stadium night atmosphere
    this.scene.fog = new THREE.Fog(0x0f172a, 160, 380);

    const width = Number.isFinite(container.clientWidth) && container.clientWidth > 0
      ? container.clientWidth
      : 1;
    const height = Number.isFinite(container.clientHeight) && container.clientHeight > 0
      ? container.clientHeight
      : 1;
    const aspect = width / height;
    this.cameraManager = new GameplayCamera(aspect);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(width, height, false);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    // Make canvas fill container cleanly
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.display = 'block';
    container.appendChild(this.renderer.domElement);

    // Expose engine to window for console diagnostics if needed
    (window as unknown as { __engine: GameEngine }).__engine = this;

    // 2. Field & Football
    this.field = new FieldEnvironment();
    this.scene.add(this.field.group);

    this.football = new FootballEntity();
    this.scene.add(this.football.group);

    // 3. Player Focus Indicator Ring (underneath controlled player)
    const ringGeo = new THREE.RingGeometry(0.85, 1.15, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    this.carrierRing = new THREE.Mesh(ringGeo, ringMat);
    this.carrierRing.rotation.x = -Math.PI / 2;
    this.carrierRing.position.y = 0.06;
    this.scene.add(this.carrierRing);

    // 4. Debug visuals group
    this.debugLinesGroup = new THREE.Group();
    this.scene.add(this.debugLinesGroup);

    // 5. Down & Score State
    this.downState = {
      down: 1,
      distance: 10,
      lineOfScrimmage: 25, // Own 25 yard line
      firstDownLine: 35,   // 10 yards to gain
      quarter: 1,
      clockSeconds: 900,
      offenseScore: 0,
      defenseScore: 0,
      playResultText: '1st & 10 at Own 25',
    };

    this.telemetry = {
      fps: 60,
      activeRagdollCount: 0,
      ballCarrierId: 'QB',
      ballCarrierState: 'NORMAL',
      ballCarrierSpeed: 0,
      lastTackleForce: 0,
      passTarget: null,
      passAirTime: 0,
    };

    // 5. Build Players (10 Offense + 9 Defense)
    this.createPlayers();

    // 6. Setup Initial Play
    this.setPlay(PLAYBOOK[0]);
  }

  public setOnStateChange(cb: (downState: DownState, phase: PlayPhase, telemetry: DebugTelemetry) => void) {
    this.onStateChangeCallback = cb;
  }

  /**
   * Spawns all 19 athletes on field
   */
  private createPlayers() {
    // Offense
    const offPositions: Position[] = ['QB', 'RB', 'WR1', 'WR2', 'WR3', 'LT', 'LG', 'C', 'RG', 'RT'];
    offPositions.forEach((pos) => {
      const isLineman = ['LT', 'LG', 'C', 'RG', 'RT'].includes(pos);
      const isQB = pos === 'QB';
      const posType = isLineman ? 'LINEMAN' : isQB ? 'QB' : 'SKILL';
      const ratings = DEFAULT_OFFENSE_RATINGS[pos];
      const physics = mapRatingsToPhysics(ratings, posType);

      const model = new PlayerModel(pos, 'OFFENSE', OFFENSE_UNIFORM);
      this.scene.add(model.group);

      this.players.set(pos, {
        id: pos,
        position: pos,
        side: 'OFFENSE',
        model,
        physics,
        pos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
        heading: 0,
        targetPos: new THREE.Vector3(),
        currentWaypointIndex: 0,
        hasBall: false,
        isEngagedWithBlocker: false,
        blockerTimer: 0,
      });
    });

    // Defense
    const defPositions: Position[] = ['LE', 'DT1', 'DT2', 'RE', 'MLB', 'OLB', 'CB1', 'CB2', 'FS'];
    defPositions.forEach((pos) => {
      const isLineman = ['LE', 'DT1', 'DT2', 'RE'].includes(pos);
      const posType = isLineman ? 'LINEMAN' : 'SKILL';
      const ratings = DEFAULT_DEFENSE_RATINGS[pos];
      const physics = mapRatingsToPhysics(ratings, posType);

      const model = new PlayerModel(pos, 'DEFENSE', DEFENSE_UNIFORM);
      this.scene.add(model.group);

      this.players.set(pos, {
        id: pos,
        position: pos,
        side: 'DEFENSE',
        model,
        physics,
        pos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
        heading: Math.PI, // Facing offense
        targetPos: new THREE.Vector3(),
        currentWaypointIndex: 0,
        hasBall: false,
        isEngagedWithBlocker: false,
        blockerTimer: 0,
      });
    });
  }

  /**
   * Sets current play and positions all athletes at Line of Scrimmage
   */
  public setPlay(play: PlayDefinition) {
    this.currentPlay = play;
    this.resetToPreSnap();
  }

  /**
   * Aligns players pre-snap at the current Line of Scrimmage
   */
  public resetToPreSnap() {
    this.playPhase = 'PRE_SNAP';
    this.ballCarrierId = 'QB';
    this.controlledPlayerId = 'QB';
    this.targetPassReceiverId = null;
    this.passAirTime = 0;
    this.whistleTimer = 0;
    this.resetTimer = 0;

    const losZ = (this.downState.lineOfScrimmage - 50) * YARD_TO_METER;

    // Update field lines
    this.field.updateLines(this.downState.lineOfScrimmage, this.downState.firstDownLine);

    // Position Offensive Players
    Object.entries(OFFENSE_ALIGNMENTS).forEach(([pos, offset]) => {
      const player = this.players.get(pos);
      if (!player) return;

      const worldZ = losZ + offset.z * YARD_TO_METER;
      player.pos.set(offset.x, 0, worldZ);
      player.vel.set(0, 0, 0);
      player.heading = 0; // Facing downfield (+Z)
      player.hasBall = pos === 'QB';
      player.isEngagedWithBlocker = false;
      player.currentWaypointIndex = 0;
      player.model.resetRagdoll();
      player.model.group.position.copy(player.pos);
      player.model.group.rotation.y = player.heading;

      // Assign Route waypoints for receivers and RB
      if (pos === 'WR1' || pos === 'WR2' || pos === 'WR3' || pos === 'RB') {
        const routeType = this.currentPlay.routes[pos as keyof typeof this.currentPlay.routes];
        player.routeType = routeType;

        const side = pos === 'WR1' ? 'LEFT' : pos === 'WR2' ? 'SLOT' : 'RIGHT';
        const rawWaypoints = getRouteWaypoints(routeType, side);

        // Transform local route waypoints into world field coordinates
        player.routeWaypoints = rawWaypoints.map((wpt) => {
          return new THREE.Vector3(
            player.pos.x + wpt.x,
            0,
            losZ + wpt.z * YARD_TO_METER
          );
        });
      }
    });

    // Position Defensive Players
    Object.entries(DEFENSE_ALIGNMENTS).forEach(([pos, offset]) => {
      const player = this.players.get(pos);
      if (!player) return;

      const worldZ = losZ + offset.z * YARD_TO_METER;
      player.pos.set(offset.x, 0, worldZ);
      player.vel.set(0, 0, 0);
      player.heading = Math.PI; // Facing offense (-Z)
      player.hasBall = false;
      player.isEngagedWithBlocker = false;
      player.currentWaypointIndex = 0;
      player.model.resetRagdoll();
      player.model.group.position.copy(player.pos);
      player.model.group.rotation.y = player.heading;

      // Assignments
      if (pos === 'CB1') player.assignedOpponentId = 'WR1';
      if (pos === 'CB2') player.assignedOpponentId = 'WR3';
      if (pos === 'FS') player.assignedOpponentId = 'WR2';
      if (pos === 'LE') player.assignedOpponentId = 'RT';
      if (pos === 'DT1') player.assignedOpponentId = 'RG';
      if (pos === 'DT2') player.assignedOpponentId = 'LG';
      if (pos === 'RE') player.assignedOpponentId = 'LT';
      if (pos === 'MLB' || pos === 'OLB') player.assignedOpponentId = 'QB';
    });

    // Attach football to QB and snap camera immediately
    const qb = this.players.get('QB');
    if (qb) {
      qb.model.isHoldingBall = true;
      this.football.attachTo(qb.model.root);
      this.cameraManager.snapTo(qb.pos);
      this.carrierRing.position.set(qb.pos.x, 0.06, qb.pos.z);
    }

    // Update debug route lines
    this.updateDebugRouteLines();
    this.notifyState();
  }

  /**
   * Snaps the ball to start active play
   */
  public snapBall() {
    if (this.playPhase !== 'PRE_SNAP') return;
    this.playPhase = 'PLAY_ACTIVE';
    this.playClock = 0;
    sounds.playSnap();
    this.notifyState();
  }

  /**
   * Initiates throwing to a receiver
   */
  public throwToReceiver(receiverKey: 'WR1' | 'WR2' | 'WR3', throwType: ThrowType = this.throwType) {
    if (this.playPhase !== 'PLAY_ACTIVE' || this.controlledPlayerId !== 'QB') return;

    const qb = this.players.get('QB');
    const receiver = this.players.get(receiverKey);
    if (!qb || !receiver) return;

    this.playPhase = 'BALL_IN_AIR';
    this.targetPassReceiverId = receiverKey;
    this.passAirTime = 0;
    qb.model.isHoldingBall = false;

    // Release position at QB shoulder level
    const throwOrigin = qb.pos.clone().add(new THREE.Vector3(0.3, 1.9, 0.2));

    // Accuracy variation based on QB rating and whether QB is scrambling
    const qbSpeed = qb.vel.length();
    const throwVar = qb.physics.throwAccuracyVar * (1.0 + (qbSpeed > 2.0 ? 0.6 : 0));
    const accuracyOffset = new THREE.Vector3(
      (Math.random() - 0.5) * throwVar,
      (Math.random() - 0.5) * throwVar * 0.4,
      (Math.random() - 0.5) * throwVar
    );

    const trajectory = calculateBallisticTrajectory(
      throwOrigin,
      receiver.pos,
      receiver.vel,
      throwType,
      accuracyOffset,
      qb.physics.throwVelocity
    );

    this.football.launch(throwOrigin, trajectory.velocity);
    sounds.playThrow();
    this.notifyState();
  }

  /**
   * Core frame update loop (60 FPS)
   */
  public update(dt: number) {
    // Clamp delta time to avoid large physics steps
    const safeDt = Math.min(dt, 0.05);

    if (this.playPhase !== 'PRE_SNAP') {
      this.playClock += safeDt;
    }

    // 1. Update Controlled Player
    this.updateControlledPlayer(safeDt);

    // 2. Update AI Teammates and Opponents
    this.updateAIPlayers(safeDt);

    // 3. Update Football Physics
    this.updateFootballPhysics(safeDt);

    // 4. Update Collisions, Blocks & Tackles
    this.updatePhysicsCollisions(safeDt);

    // 5. Update Player Models & Procedural Animations
    this.updatePlayerModels(safeDt);

    // 6. Check End of Play Conditions (Whistle & Reset)
    this.checkPlayConditions(safeDt);

    // 7. Update Camera
    this.updateCamera(safeDt);

    // Update Player Focus Ring
    const controlledPlayer = this.players.get(this.controlledPlayerId);
    if (controlledPlayer) {
      this.carrierRing.position.set(controlledPlayer.pos.x, 0.06, controlledPlayer.pos.z);
      this.carrierRing.visible = true;
    }

    // 8. Update Telemetry
    this.updateTelemetry();
  }

  /**
   * User movement controller for QB or Ball Carrier
   */
  private updateControlledPlayer(dt: number) {
    if (this.playPhase === 'PRE_SNAP' || this.playPhase === 'PLAY_OVER' || this.playPhase === 'TOUCHDOWN_CELEBRATION') {
      return;
    }

    const player = this.players.get(this.controlledPlayerId);
    if (!player || player.model.ragdollState !== 'NORMAL') return;

    // Movement direction from user input (WASD)
    const inputDir = new THREE.Vector3(this.input.lateral, 0, this.input.forward);
    const hasInput = inputDir.lengthSq() > 0.01;

    let targetSpeed = 0;
    if (hasInput) {
      inputDir.normalize();
      const sprintMult = this.input.sprint ? 1.25 : 1.0;
      targetSpeed = player.physics.maxSpeed * sprintMult;

      // Turning with agility limit (no instant 180 snap)
      const targetHeading = Math.atan2(inputDir.x, inputDir.z);
      const angleDiff = THREE.MathUtils.euclideanModulo(targetHeading - player.heading + Math.PI, Math.PI * 2) - Math.PI;
      const maxTurn = player.physics.turnRate * dt;
      player.heading += Math.max(-maxTurn, Math.min(maxTurn, angleDiff));

      // Accelerate towards heading
      const forwardVec = new THREE.Vector3(Math.sin(player.heading), 0, Math.cos(player.heading));
      player.vel.lerp(forwardVec.multiplyScalar(targetSpeed), dt * (player.physics.acceleration / 4.0));
    } else {
      // Decelerate
      player.vel.multiplyScalar(Math.pow(0.82, dt * 60));
    }

    // Integrate position
    player.pos.addScaledVector(player.vel, dt);
    // Keep in lateral bounds
    player.pos.x = Math.max(-FIELD_WIDTH_M * 0.46, Math.min(FIELD_WIDTH_M * 0.46, player.pos.x));

    player.model.group.position.copy(player.pos);
    player.model.group.rotation.y = player.heading;
  }

  /**
   * AI behavior for receivers, blockers, defensive line rushers, and secondary
   */
  private updateAIPlayers(dt: number) {
    if (this.playPhase === 'PRE_SNAP' || this.playPhase === 'PLAY_OVER') return;

    // Check Run Play inside zone handoff
    if (this.currentPlay.type === 'RUN' && this.playPhase === 'PLAY_ACTIVE') {
      const qb = this.players.get('QB');
      const rb = this.players.get('RB');
      if (qb && rb && this.controlledPlayerId === 'QB') {
        const dist = qb.pos.distanceTo(rb.pos);
        if (dist < 1.8 && this.playClock > 0.4) {
          // Automatic Handoff!
          qb.hasBall = false;
          qb.model.isHoldingBall = false;
          rb.hasBall = true;
          rb.model.isHoldingBall = true;
          this.ballCarrierId = 'RB';
          this.controlledPlayerId = 'RB';
          this.playPhase = 'RUN_AFTER_CATCH';
          this.football.attachTo(rb.model.root);
          sounds.playCatch();
          this.notifyState();
        }
      }
    }

    // Update each AI entity
    this.players.forEach((player) => {
      if (player.id === this.controlledPlayerId && player.model.ragdollState === 'NORMAL') {
        return; // Controlled by user
      }

      if (player.model.ragdollState !== 'NORMAL') {
        // In stumble or ragdoll, velocity slows down with turf friction
        player.vel.multiplyScalar(Math.pow(0.85, dt * 60));
        player.pos.addScaledVector(player.vel, dt);
        player.model.group.position.copy(player.pos);
        return;
      }

      // OFFENSE RECEIVERS: Route running
      if (player.side === 'OFFENSE' && player.routeWaypoints && player.routeWaypoints.length > 0) {
        this.updateReceiverRoute(player, dt);
      }

      // OFFENSE LINEMEN: Pass & run blocking
      if (player.side === 'OFFENSE' && ['LT', 'LG', 'C', 'RG', 'RT'].includes(player.position)) {
        this.updateOffensiveLineman(player, dt);
      }

      // DEFENSE LINEMEN: Pass rush & gap penetration
      if (player.side === 'DEFENSE' && ['LE', 'DT1', 'DT2', 'RE'].includes(player.position)) {
        this.updatePassRusher(player, dt);
      }

      // DEFENSE LINEBACKERS: Read run vs pass, drop or pursue
      if (player.side === 'DEFENSE' && ['MLB', 'OLB'].includes(player.position)) {
        this.updateLinebacker(player, dt);
      }

      // DEFENSE SECONDARY: Man coverage and ball tracking
      if (player.side === 'DEFENSE' && ['CB1', 'CB2', 'FS'].includes(player.position)) {
        this.updateDefensiveBack(player, dt);
      }
    });
  }

  /**
   * Receiver route execution
   */
  private updateReceiverRoute(player: PlayerEntity, dt: number) {
    if (!player.routeWaypoints || player.routeWaypoints.length === 0) return;

    // Once a pass is caught or run active, receivers block downfield
    if (this.playPhase === 'RUN_AFTER_CATCH') {
      // Find nearest defender to stalk block
      let nearestDef: PlayerEntity | null = null;
      let minDist = 8.0;
      this.players.forEach((other) => {
        if (other.side === 'DEFENSE') {
          const d = player.pos.distanceTo(other.pos);
          if (d < minDist) {
            minDist = d;
            nearestDef = other;
          }
        }
      });

      if (nearestDef) {
        this.steerToward(player, (nearestDef as PlayerEntity).pos, player.physics.maxSpeed * 0.75, dt);
      }
      return;
    }

    const currentTarget = player.routeWaypoints[player.currentWaypointIndex];
    if (!currentTarget) return;

    const distToWpt = player.pos.distanceTo(currentTarget);
    if (distToWpt < 1.0 && player.currentWaypointIndex < player.routeWaypoints.length - 1) {
      player.currentWaypointIndex++;
    }

    this.steerToward(player, currentTarget, player.physics.maxSpeed * 0.95, dt);
  }

  /**
   * Offensive Lineman blocking AI
   */
  private updateOffensiveLineman(player: PlayerEntity, dt: number) {
    const losZ = (this.downState.lineOfScrimmage - 50) * YARD_TO_METER;

    // Find assigned rusher
    let rusher: PlayerEntity | null = null;
    let minDist = 3.5;
    this.players.forEach((def) => {
      if (def.side === 'DEFENSE' && ['LE', 'DT1', 'DT2', 'RE'].includes(def.position)) {
        const d = player.pos.distanceTo(def.pos);
        if (d < minDist) {
          minDist = d;
          rusher = def;
        }
      }
    });

    if (rusher) {
      // Form a pocket wall
      const targetPos = (rusher as PlayerEntity).pos.clone().lerp(player.pos, 0.4);
      targetPos.z = Math.min(losZ + 0.2, targetPos.z);
      this.steerToward(player, targetPos, player.physics.maxSpeed * 0.5, dt);
    }
  }

  /**
   * Defensive Lineman pass rush AI
   */
  private updatePassRusher(player: PlayerEntity, dt: number) {
    const target = this.getBallCarrierOrQB();
    if (!target) return;

    // Navigate towards QB or ball carrier
    this.steerToward(player, target.pos, player.physics.maxSpeed * 0.85, dt);
  }

  /**
   * Linebacker AI
   */
  private updateLinebacker(player: PlayerEntity, dt: number) {
    const losZ = (this.downState.lineOfScrimmage - 50) * YARD_TO_METER;
    const carrier = this.getBallCarrierOrQB();

    if (this.currentPlay.type === 'RUN' || this.playPhase === 'RUN_AFTER_CATCH') {
      // Aggressive pursuit of runner
      if (carrier) {
        this.steerToward(player, carrier.pos, player.physics.maxSpeed * 0.95, dt);
      }
    } else {
      // Pass play: Drop into hook/curl zone at LOS + 4 yards, then break on throw
      if (this.playPhase === 'BALL_IN_AIR') {
        // React to pass target
        const targetRec = this.targetPassReceiverId ? this.players.get(this.targetPassReceiverId) : null;
        if (targetRec) {
          this.steerToward(player, targetRec.pos, player.physics.maxSpeed * 0.95, dt);
        }
      } else {
        const dropZ = losZ + 4.5 * YARD_TO_METER;
        const targetPos = new THREE.Vector3(player.pos.x * 0.7, 0, dropZ);
        this.steerToward(player, targetPos, player.physics.maxSpeed * 0.6, dt);
      }
    }
  }

  /**
   * Defensive Back AI (Man coverage with reaction delay)
   */
  private updateDefensiveBack(player: PlayerEntity, dt: number) {
    if (this.playPhase === 'BALL_IN_AIR') {
      // Pass is in flight: break on ball/receiver if pass is nearby
      const targetRec = this.targetPassReceiverId ? this.players.get(this.targetPassReceiverId) : null;
      if (targetRec) {
        this.steerToward(player, targetRec.pos, player.physics.maxSpeed * 1.0, dt);
      }
      return;
    }

    if (this.playPhase === 'RUN_AFTER_CATCH') {
      const carrier = this.getBallCarrier();
      if (carrier) {
        this.steerToward(player, carrier.pos, player.physics.maxSpeed * 1.0, dt);
      }
      return;
    }

    // Pre-pass man coverage on assigned WR
    if (player.assignedOpponentId) {
      const wr = this.players.get(player.assignedOpponentId);
      if (wr) {
        // Cushion distance: 1.5 - 2.5 yards off WR downfield
        const cushionZ = wr.pos.z + 1.8 * YARD_TO_METER;
        const targetPos = new THREE.Vector3(wr.pos.x, 0, cushionZ);
        this.steerToward(player, targetPos, player.physics.maxSpeed * 0.92, dt);
      }
    }
  }

  /**
   * Helper steering behavior with acceleration and turning limits
   */
  private steerToward(player: PlayerEntity, target: THREE.Vector3, speed: number, dt: number) {
    const toTarget = new THREE.Vector3().subVectors(target, player.pos).setY(0);
    const dist = toTarget.length();

    if (dist < 0.1) {
      player.vel.multiplyScalar(Math.pow(0.8, dt * 60));
      return;
    }

    toTarget.normalize();
    const targetHeading = Math.atan2(toTarget.x, toTarget.z);
    const angleDiff = THREE.MathUtils.euclideanModulo(targetHeading - player.heading + Math.PI, Math.PI * 2) - Math.PI;
    const maxTurn = player.physics.turnRate * dt;
    player.heading += Math.max(-maxTurn, Math.min(maxTurn, angleDiff));

    const forwardVec = new THREE.Vector3(Math.sin(player.heading), 0, Math.cos(player.heading));
    player.vel.lerp(forwardVec.multiplyScalar(speed), dt * (player.physics.acceleration / 4.0));

    player.pos.addScaledVector(player.vel, dt);
    player.pos.x = Math.max(-FIELD_WIDTH_M * 0.46, Math.min(FIELD_WIDTH_M * 0.46, player.pos.x));

    player.model.group.position.copy(player.pos);
    player.model.group.rotation.y = player.heading;
  }

  /**
   * Football physics & Catch detection
   */
  private updateFootballPhysics(dt: number) {
    this.football.update(dt);

    if (this.playPhase === 'BALL_IN_AIR' && this.football.isAirborne) {
      this.passAirTime += dt;

      // Check for receiver catch
      const targetReceiver = this.targetPassReceiverId ? this.players.get(this.targetPassReceiverId) : null;
      if (targetReceiver) {
        const dist = this.football.position.distanceTo(targetReceiver.pos);
        // Permissive, fun catch envelope (height 0.4m to 2.8m, dist < catchRadius)
        if (dist < targetReceiver.physics.catchRadius && this.football.position.y > 0.4 && this.football.position.y < 2.8) {
          // Complete Pass!
          sounds.playCatch();
          this.football.attachTo(targetReceiver.model.root);
          targetReceiver.hasBall = true;
          targetReceiver.model.isHoldingBall = true;
          this.ballCarrierId = targetReceiver.id;
          this.controlledPlayerId = targetReceiver.id;
          this.playPhase = 'RUN_AFTER_CATCH';
          this.notifyState();
          return;
        }
      }

      // Check for interception by nearby defender
      this.players.forEach((def) => {
        if (def.side === 'DEFENSE' && this.playPhase === 'BALL_IN_AIR') {
          const dist = this.football.position.distanceTo(def.pos);
          if (dist < 1.3 && this.football.position.y > 0.6 && this.football.position.y < 2.5 && this.passAirTime > 0.5) {
            // Interception!
            sounds.playCatch();
            this.football.attachTo(def.model.root);
            def.hasBall = true;
            def.model.isHoldingBall = true;
            this.ballCarrierId = def.id;
            this.controlledPlayerId = def.id;
            this.playPhase = 'RUN_AFTER_CATCH';
            this.downState.playResultText = 'INTERCEPTED!';
            this.notifyState();
          }
        }
      });

      // Check if ball hit turf (Incomplete)
      if (this.football.hasBounced && this.football.position.y <= 0.12) {
        this.playPhase = 'PLAY_OVER';
        sounds.playWhistle();
        this.downState.playResultText = 'INCOMPLETE PASS';
        this.notifyState();
      }
    }
  }

  /**
   * Physics Collisions, Blocking Trench, and Tackling
   */
  private updatePhysicsCollisions(dt: number) {
    const ballCarrier = this.getBallCarrier();

    // 1. Lineman vs Lineman Blocking Collisions
    const oLinemen = ['LT', 'LG', 'C', 'RG', 'RT'];
    const dLinemen = ['LE', 'DT1', 'DT2', 'RE'];

    oLinemen.forEach((oPos) => {
      const ol = this.players.get(oPos);
      if (!ol) return;

      dLinemen.forEach((dPos) => {
        const dl = this.players.get(dPos);
        if (!dl) return;

        const delta = new THREE.Vector3().subVectors(dl.pos, ol.pos).setY(0);
        const dist = delta.length();
        const contactRadius = 0.85;

        if (dist < contactRadius && dist > 0.001) {
          // Push back force
          const overlap = contactRadius - dist;
          const pushDir = delta.normalize();

          // Strength contest
          const oPush = (ol.physics.mass / (ol.physics.mass + dl.physics.mass)) * overlap * 0.5;
          const dPush = (dl.physics.mass / (ol.physics.mass + dl.physics.mass)) * overlap * 0.5;

          ol.pos.addScaledVector(pushDir, -oPush);
          dl.pos.addScaledVector(pushDir, dPush);

          // Friction damping
          ol.vel.multiplyScalar(0.7);
          dl.vel.multiplyScalar(0.7);

          ol.model.group.position.copy(ol.pos);
          dl.model.group.position.copy(dl.pos);
        }
      });
    });

    // 2. Tackling: Defenders vs Ball Carrier
    if (ballCarrier && ballCarrier.model.ragdollState !== 'FULL_RAGDOLL') {
      this.players.forEach((defender) => {
        if (defender.side !== ballCarrier.side && defender.model.ragdollState === 'NORMAL') {
          const delta = new THREE.Vector3().subVectors(ballCarrier.pos, defender.pos).setY(0);
          const dist = delta.length();
          const tackleReach = defender.physics.tackleReach;

          if (dist < tackleReach) {
            // Calculate physics tackle impact
            const tackle = computeTackleImpact(
              ballCarrier.pos,
              ballCarrier.vel,
              ballCarrier.physics.mass,
              ballCarrier.physics.strengthImpulse,
              defender.pos,
              defender.vel,
              defender.physics.mass,
              defender.physics.strengthImpulse
            );

            this.lastTackleForce = tackle.impactStrength;

            // Apply impulses
            ballCarrier.vel.add(tackle.impulseRunner);
            defender.vel.add(tackle.impulseDefender);

            // Audio & Camera Shake
            sounds.playTackle(tackle.impactStrength / 700);
            this.cameraManager.addTrauma(tackle.impactStrength / 900);

            // Apply active ragdoll transition
            ballCarrier.model.applyTackleImpulse(tackle.impulseRunner, tackle.nextState);

            if (tackle.severity === 'HIGH') {
              // Both players tumble to turf
              defender.model.applyTackleImpulse(tackle.impulseDefender, 'PARTIAL_RAGDOLL');
            }
          }
        }
      });
    }
  }

  /**
   * Procedural model updates and active ragdoll motors
   */
  private updatePlayerModels(dt: number) {
    this.players.forEach((player) => {
      const speed = player.vel.length();
      const isMoving = speed > 0.2;
      const turning = player.model.group.rotation.y - player.heading;
      player.model.update(dt, speed, turning, isMoving);
    });
  }

  /**
   * End of play detection (down by contact, out of bounds, touchdown)
   */
  private checkPlayConditions(dt: number) {
    if (this.playPhase === 'PRE_SNAP') return;

    if (this.playPhase === 'PLAY_OVER' || this.playPhase === 'TOUCHDOWN_CELEBRATION') {
      this.resetTimer += dt;
      if (this.resetTimer >= 1.6) {
        this.nextPlay();
      }
      return;
    }

    const carrier = this.getBallCarrier();

    if (carrier) {
      const carrierYard = 50 + carrier.pos.z / YARD_TO_METER;

      // 1. Touchdown! (Crossed opponent 100 yard goal line)
      if (carrierYard >= 100) {
        this.playPhase = 'TOUCHDOWN_CELEBRATION';
        sounds.playWhistle();
        sounds.playCrowdCheer();
        this.cameraManager.addTrauma(0.5);
        this.downState.offenseScore += 7;
        this.downState.playResultText = 'TOUCHDOWN! +7 PTS';
        this.notifyState();
        return;
      }

      // 2. Out of Bounds
      if (Math.abs(carrier.pos.x) >= FIELD_WIDTH_M * 0.44) {
        this.endPlay('Out of Bounds');
        return;
      }

      // 3. Down By Contact: Torso/Pelvis stayed on ground for >0.45s after contact
      if (
        (carrier.model.ragdollState === 'FULL_RAGDOLL' || carrier.model.ragdollState === 'PARTIAL_RAGDOLL') &&
        carrier.model.groundContactTime > 0.45
      ) {
        this.endPlay('Tackled');
        return;
      }
    }
  }

  /**
   * Whistle blown: calculate forward progress, update downs, advance game
   */
  private endPlay(reason: string) {
    this.playPhase = 'PLAY_OVER';
    sounds.playWhistle();

    const carrier = this.getBallCarrier();
    const oldLos = this.downState.lineOfScrimmage;

    let spotYard = oldLos;
    if (carrier) {
      spotYard = Math.round(50 + carrier.pos.z / YARD_TO_METER);
      spotYard = Math.max(1, Math.min(99, spotYard));
    }

    const yardsGained = spotYard - oldLos;
    const yardsToGain = this.downState.firstDownLine - spotYard;

    if (yardsToGain <= 0) {
      // FIRST DOWN!
      sounds.playCrowdCheer();
      this.downState.down = 1;
      this.downState.distance = 10;
      this.downState.lineOfScrimmage = spotYard;
      this.downState.firstDownLine = Math.min(100, spotYard + 10);
      this.downState.playResultText = `FIRST DOWN! +${yardsGained} YDS (${reason})`;
    } else {
      // Advance Down
      if (this.downState.down < 4) {
        this.downState.down++;
        this.downState.distance = yardsToGain;
        this.downState.lineOfScrimmage = spotYard;
        this.downState.playResultText = `${yardsGained >= 0 ? '+' : ''}${yardsGained} YDS (${reason})`;
      } else {
        // Turnover on Downs
        this.downState.down = 1;
        this.downState.distance = 10;
        this.downState.lineOfScrimmage = 25; // Reset to own 25
        this.downState.firstDownLine = 35;
        this.downState.playResultText = 'TURNOVER ON DOWNS — RESET TO 25';
      }
    }

    this.notifyState();
  }

  /**
   * Resets seamlessly for next snap
   */
  private nextPlay() {
    this.resetToPreSnap();
  }

  /**
   * Updates camera tracking
   */
  private updateCamera(dt: number) {
    const focusEntity = this.players.get(this.controlledPlayerId) || this.players.get('QB');
    const focusPos = focusEntity ? focusEntity.pos : new THREE.Vector3();

    const isPassAir = this.playPhase === 'BALL_IN_AIR';
    const ballPos = this.football.position;
    const receiver = this.targetPassReceiverId ? this.players.get(this.targetPassReceiverId) : null;
    const recPos = receiver ? receiver.pos : undefined;

    this.cameraManager.update(dt, focusPos, isPassAir, ballPos, recPos);
  }

  /**
   * Telemetry updates
   */
  private updateTelemetry() {
    let ragdollCount = 0;
    this.players.forEach((p) => {
      if (p.model.ragdollState !== 'NORMAL') ragdollCount++;
    });

    const carrier = this.getBallCarrier();
    this.telemetry = {
      fps: 60,
      activeRagdollCount: ragdollCount,
      ballCarrierId: carrier ? carrier.id : null,
      ballCarrierState: carrier ? carrier.model.ragdollState : 'NORMAL',
      ballCarrierSpeed: carrier ? carrier.vel.length() : 0,
      lastTackleForce: Math.round(this.lastTackleForce),
      passTarget: this.targetPassReceiverId,
      passAirTime: parseFloat(this.passAirTime.toFixed(2)),
    };
  }

  /**
   * Helper to draw route lines in debug mode
   */
  private updateDebugRouteLines() {
    // Clear existing debug lines
    while (this.debugLinesGroup.children.length > 0) {
      this.debugLinesGroup.remove(this.debugLinesGroup.children[0]);
    }

    if (!this.debugMode) return;

    ['WR1', 'WR2', 'WR3', 'RB'].forEach((pos) => {
      const player = this.players.get(pos);
      if (!player || !player.routeWaypoints || player.routeWaypoints.length === 0) return;

      const points = [player.pos.clone().setY(0.1), ...player.routeWaypoints.map((w) => w.clone().setY(0.1))];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: pos === 'WR1' ? 0x38bdf8 : pos === 'WR2' ? 0xf43f5e : 0xa855f7,
        linewidth: 3,
      });
      const line = new THREE.Line(geo, mat);
      this.debugLinesGroup.add(line);
    });
  }

  public toggleDebugMode() {
    this.debugMode = !this.debugMode;
    this.updateDebugRouteLines();
  }

  public cycleCameraMode(): CameraPreset {
    const newMode = this.cameraManager.cycleMode();
    const focusEntity = this.players.get(this.controlledPlayerId) || this.players.get('QB');
    if (focusEntity) {
      this.cameraManager.snapTo(focusEntity.pos);
    }
    return newMode;
  }

  public setCameraMode(mode: CameraPreset) {
    this.cameraManager.setMode(mode);
    const focusEntity = this.players.get(this.controlledPlayerId) || this.players.get('QB');
    if (focusEntity) {
      this.cameraManager.snapTo(focusEntity.pos);
    }
  }

  public getBallCarrier(): PlayerEntity | null {
    if (this.ballCarrierId) {
      return this.players.get(this.ballCarrierId) || null;
    }
    return null;
  }

  private getBallCarrierOrQB(): PlayerEntity | null {
    return this.getBallCarrier() || this.players.get('QB') || null;
  }

  private notifyState() {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(this.downState, this.playPhase, this.telemetry);
    }
  }

  /**
   * Start animation rendering loop
   */
  public start() {
    if (this.isRunning || this.destroyed) return;
    this.isRunning = true;
    this.lastTime = performance.now();

    const loop = (time: number) => {
      if (!this.isRunning) return;
      const dt = (time - this.lastTime) / 1000;
      this.lastTime = time;

      this.update(dt);
      this.renderer.render(this.scene, this.cameraManager.camera);
      this.animationFrameId = requestAnimationFrame(loop);
    };

    this.animationFrameId = requestAnimationFrame(loop);
  }

  public stop() {
    this.isRunning = false;
    cancelAnimationFrame(this.animationFrameId);
  }

  public resize(width: number, height: number) {
    if (
      this.destroyed ||
      !Number.isFinite(width) ||
      !Number.isFinite(height) ||
      width <= 0 ||
      height <= 0
    ) {
      return;
    }

    this.cameraManager.resize(width / height);
    this.renderer.setSize(width, height, false);
  }

  public destroy() {
    if (this.destroyed) return;
    this.destroyed = true;
    this.stop();
    this.onStateChangeCallback = undefined;

    const canvas = this.renderer.domElement;
    if (canvas.parentElement) {
      canvas.parentElement.removeChild(canvas);
    }

    this.renderer.dispose();

    const diagnosticsWindow = window as unknown as { __engine?: GameEngine };
    if (diagnosticsWindow.__engine === this) {
      delete diagnosticsWindow.__engine;
    }
  }
}
