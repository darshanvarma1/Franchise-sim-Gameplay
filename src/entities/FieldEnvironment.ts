import * as THREE from 'three';

export const YARD_TO_METER = 0.9144;
export const FIELD_WIDTH_M = 53.33 * YARD_TO_METER; // ~48.8m
export const FIELD_LENGTH_M = 100 * YARD_TO_METER;  // 91.44m
export const ENDZONE_LENGTH_M = 10 * YARD_TO_METER; // 9.144m

export class FieldEnvironment {
  public group: THREE.Group;
  public losLineMesh: THREE.Mesh;
  public firstDownLineMesh: THREE.Mesh;

  constructor() {
    this.group = new THREE.Group();

    this.createField();
    this.createGoalPosts();
    this.createPylons();
    this.createStadiumStructure();
    this.createLighting();

    // Dynamic Line of Scrimmage (Blue) & 1st Down Line (Yellow)
    const lineGeo = new THREE.PlaneGeometry(FIELD_WIDTH_M, 0.45);
    const losMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb, // Bright Blue
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    this.losLineMesh = new THREE.Mesh(lineGeo, losMat);
    this.losLineMesh.rotation.x = -Math.PI / 2;
    this.losLineMesh.position.y = 0.02;
    this.group.add(this.losLineMesh);

    const fdMat = new THREE.MeshBasicMaterial({
      color: 0xfacc15, // Bright Yellow
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    this.firstDownLineMesh = new THREE.Mesh(lineGeo, fdMat);
    this.firstDownLineMesh.rotation.x = -Math.PI / 2;
    this.firstDownLineMesh.position.y = 0.022;
    this.group.add(this.firstDownLineMesh);
  }

  /**
   * Builds the football field texture with turf grass, yard markers, numbers and hash lines
   */
  private createField() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Base green turf
      ctx.fillStyle = '#2d6a4f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Alternating 5-yard grass mower stripe bands
      const totalYards = 120; // 100 + 20 endzones
      const pxPerYard = canvas.height / totalYards;

      for (let y = 0; y < totalYards; y += 5) {
        if ((y / 5) % 2 === 0) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
          ctx.fillRect(0, y * pxPerYard, canvas.width, 5 * pxPerYard);
        }
      }

      // End zones: North (Away) & South (Home)
      // South End Zone (Home - Blue)
      ctx.fillStyle = '#1e3a8a';
      ctx.fillRect(0, 0, canvas.width, 10 * pxPerYard);
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 72px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.save();
      ctx.translate(canvas.width / 2, 5 * pxPerYard);
      ctx.rotate(Math.PI);
      ctx.fillText('WILDCATS', 0, 0);
      ctx.restore();

      // North End Zone (Away - Crimson)
      ctx.fillStyle = '#881337';
      ctx.fillRect(0, (totalYards - 10) * pxPerYard, canvas.width, 10 * pxPerYard);
      ctx.fillStyle = '#f8fafc';
      ctx.fillText('GRIDIRON GM', canvas.width / 2, (totalYards - 5) * pxPerYard);

      // Yard lines (every 5 yards) and hash marks
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#ffffff';

      for (let y = 10; y <= 110; y++) {
        const py = y * pxPerYard;
        const yardNum = y <= 60 ? (y - 10) : (110 - y);

        if (y % 5 === 0) {
          // Major 5-yard line
          ctx.lineWidth = (y % 10 === 0) ? 6 : 3;
          ctx.beginPath();
          ctx.moveTo(canvas.width * 0.08, py);
          ctx.lineTo(canvas.width * 0.92, py);
          ctx.stroke();

          // Yard numbers (e.g. 10, 20, 30, 40, 50)
          if (y % 10 === 0 && yardNum > 0 && yardNum < 50) {
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 44px monospace';

            // Left sideline numbers
            ctx.save();
            ctx.translate(canvas.width * 0.16, py);
            ctx.rotate(Math.PI / 2);
            ctx.fillText(yardNum.toString(), 0, 0);
            ctx.restore();

            // Right sideline numbers
            ctx.save();
            ctx.translate(canvas.width * 0.84, py);
            ctx.rotate(-Math.PI / 2);
            ctx.fillText(yardNum.toString(), 0, 0);
            ctx.restore();
          } else if (y === 60) {
            // 50 yard line
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 44px monospace';
            ctx.save();
            ctx.translate(canvas.width * 0.16, py);
            ctx.rotate(Math.PI / 2);
            ctx.fillText('50', 0, 0);
            ctx.restore();

            ctx.save();
            ctx.translate(canvas.width * 0.84, py);
            ctx.rotate(-Math.PI / 2);
            ctx.fillText('50', 0, 0);
            ctx.restore();
          }
        } else {
          // Hash marks (NFL: 70ft 9in from sideline)
          ctx.lineWidth = 2;
          // Left hash
          ctx.beginPath();
          ctx.moveTo(canvas.width * 0.42, py);
          ctx.lineTo(canvas.width * 0.44, py);
          ctx.stroke();
          // Right hash
          ctx.beginPath();
          ctx.moveTo(canvas.width * 0.56, py);
          ctx.lineTo(canvas.width * 0.58, py);
          ctx.stroke();
          // Sideline ticks
          ctx.beginPath();
          ctx.moveTo(canvas.width * 0.08, py);
          ctx.lineTo(canvas.width * 0.09, py);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(canvas.width * 0.91, py);
          ctx.lineTo(canvas.width * 0.92, py);
          ctx.stroke();
        }
      }

      // White perimeter border / sidelines
      ctx.lineWidth = 8;
      ctx.strokeRect(canvas.width * 0.08, 10 * pxPerYard, canvas.width * 0.84, 100 * pxPerYard);
    }

    const fieldTexture = new THREE.CanvasTexture(canvas);
    fieldTexture.wrapS = THREE.ClampToEdgeWrapping;
    fieldTexture.wrapT = THREE.ClampToEdgeWrapping;
    fieldTexture.colorSpace = THREE.SRGBColorSpace;
    fieldTexture.anisotropy = 8;

    const totalLengthM = 120 * YARD_TO_METER;
    const fieldGeo = new THREE.PlaneGeometry(FIELD_WIDTH_M * 1.3, totalLengthM);
    const fieldMat = new THREE.MeshStandardMaterial({
      map: fieldTexture,
      roughness: 0.85,
    });

    const fieldMesh = new THREE.Mesh(fieldGeo, fieldMat);
    fieldMesh.rotation.x = -Math.PI / 2;
    fieldMesh.receiveShadow = true;
    this.group.add(fieldMesh);

    // Surrounding stadium turf / track apron
    const apronGeo = new THREE.PlaneGeometry(FIELD_WIDTH_M * 2.2, totalLengthM * 1.4);
    const apronMat = new THREE.MeshLambertMaterial({ color: 0x1e3a2b });
    const apronMesh = new THREE.Mesh(apronGeo, apronMat);
    apronMesh.rotation.x = -Math.PI / 2;
    apronMesh.position.y = -0.01;
    apronMesh.receiveShadow = true;
    this.group.add(apronMesh);
  }

  /**
   * Creates official NFL style yellow goal posts at both end lines
   */
  private createGoalPosts() {
    const postMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      metalness: 0.6,
      roughness: 0.2,
    });

    [-1, 1].forEach((end) => {
      const postGroup = new THREE.Group();
      const zPos = end * (60 * YARD_TO_METER);

      // Curved goose neck support base
      const baseGeo = new THREE.CylinderGeometry(0.16, 0.16, 3.05, 8);
      const baseMesh = new THREE.Mesh(baseGeo, postMat);
      baseMesh.position.set(0, 1.52, 0);
      postGroup.add(baseMesh);

      // Crossbar (18.5 feet wide = 5.64m) at 10 feet high (3.05m)
      const crossbarGeo = new THREE.CylinderGeometry(0.12, 0.12, 5.64, 8);
      const crossbar = new THREE.Mesh(crossbarGeo, postMat);
      crossbar.rotation.z = Math.PI / 2;
      crossbar.position.set(0, 3.05, 0);
      postGroup.add(crossbar);

      // Two uprights (35 feet = 10.6m tall)
      const uprightGeo = new THREE.CylinderGeometry(0.1, 0.1, 9.14, 8);
      const leftUpright = new THREE.Mesh(uprightGeo, postMat);
      leftUpright.position.set(-2.82, 3.05 + 4.57, 0);
      postGroup.add(leftUpright);

      const rightUpright = new THREE.Mesh(uprightGeo, postMat);
      rightUpright.position.set(2.82, 3.05 + 4.57, 0);
      postGroup.add(rightUpright);

      postGroup.position.set(0, 0, zPos);
      this.group.add(postGroup);
    });
  }

  /**
   * Creates bright fluorescent orange end zone pylons (4 per end zone = 8 total)
   */
  private createPylons() {
    const pylonMat = new THREE.MeshStandardMaterial({
      color: 0xf97316, // Safety orange
      roughness: 0.4,
    });
    const pylonGeo = new THREE.BoxGeometry(0.15, 0.45, 0.15);

    const halfW = FIELD_WIDTH_M * 0.42;
    const goalLines = [-50 * YARD_TO_METER, -60 * YARD_TO_METER, 50 * YARD_TO_METER, 60 * YARD_TO_METER];

    goalLines.forEach((z) => {
      [-halfW, halfW].forEach((x) => {
        const pylon = new THREE.Mesh(pylonGeo, pylonMat);
        pylon.position.set(x, 0.22, z);
        pylon.castShadow = true;
        this.group.add(pylon);
      });
    });
  }

  /**
   * Creates tiered stadium seating and floodlight towers for arena atmosphere
   */
  private createStadiumStructure() {
    const standMat = new THREE.MeshLambertMaterial({ color: 0x1f2937 });
    const seatMat = new THREE.MeshLambertMaterial({ color: 0x374151 });
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.5 }); // Padded stadium perimeter wall

    // West and East Sideline Stands
    [-1, 1].forEach((side) => {
      const standGeo = new THREE.BoxGeometry(18, 14, 134);
      const standMesh = new THREE.Mesh(standGeo, standMat);
      standMesh.position.set(side * (FIELD_WIDTH_M * 0.9 + 9), 7, 0);
      standMesh.receiveShadow = true;
      this.group.add(standMesh);

      // Seats tiers
      const seatGeo = new THREE.BoxGeometry(16, 0.6, 130);
      for (let i = 0; i < 5; i++) {
        const tier = new THREE.Mesh(seatGeo, seatMat);
        tier.position.set(side * (FIELD_WIDTH_M * 0.9 + 2 + i * 3.2), 1.5 + i * 2.6, 0);
        this.group.add(tier);
      }
    });

    // North (+Z Away) and South (-Z Home) End Zone Stands
    [-1, 1].forEach((end) => {
      const endStandGeo = new THREE.BoxGeometry(FIELD_WIDTH_M * 1.8, 16, 20);
      const endStandMesh = new THREE.Mesh(endStandGeo, standMat);
      endStandMesh.position.set(0, 8, end * 70);
      endStandMesh.receiveShadow = true;
      this.group.add(endStandMesh);

      // End zone seating tiers
      const endSeatGeo = new THREE.BoxGeometry(FIELD_WIDTH_M * 1.7, 0.6, 18);
      for (let i = 0; i < 5; i++) {
        const tier = new THREE.Mesh(endSeatGeo, seatMat);
        tier.position.set(0, 1.8 + i * 2.8, end * (62 + i * 3.4));
        this.group.add(tier);
      }
    });

    // Padded Field Perimeter Walls (surrounds the turf)
    const sideWallGeo = new THREE.BoxGeometry(0.5, 1.3, 122 * YARD_TO_METER);
    [-1, 1].forEach((side) => {
      const wall = new THREE.Mesh(sideWallGeo, wallMat);
      wall.position.set(side * (FIELD_WIDTH_M * 0.58), 0.65, 0);
      this.group.add(wall);
    });

    const endWallGeo = new THREE.BoxGeometry(FIELD_WIDTH_M * 1.16, 1.3, 0.5);
    [-1, 1].forEach((end) => {
      const wall = new THREE.Mesh(endWallGeo, wallMat);
      wall.position.set(0, 0.65, end * (61 * YARD_TO_METER));
      this.group.add(wall);
    });

    // Giant Stadium Scoreboard / Jumbotron above North End Zone (downfield)
    const jumbotronGroup = new THREE.Group();
    const frameGeo = new THREE.BoxGeometry(26, 12, 1.5);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.2 });
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    jumbotronGroup.add(frameMesh);

    // Scoreboard LED Screen
    const screenGeo = new THREE.PlaneGeometry(24, 10);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x0284c7 });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = -0.8;
    screenMesh.rotation.y = Math.PI; // Faces towards field (-Z)
    jumbotronGroup.add(screenMesh);

    jumbotronGroup.position.set(0, 24, 76);
    this.group.add(jumbotronGroup);

    // 4 Corner Stadium Floodlight Towers
    const towerMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 });
    const lampMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    [
      { x: -35, z: -55 },
      { x:  35, z: -55 },
      { x: -35, z:  55 },
      { x:  35, z:  55 },
    ].forEach((corner) => {
      const tower = new THREE.Group();
      const poleGeo = new THREE.CylinderGeometry(0.5, 0.9, 28, 8);
      const pole = new THREE.Mesh(poleGeo, towerMat);
      pole.position.y = 14;
      tower.add(pole);

      // Light bank fixture
      const bankGeo = new THREE.BoxGeometry(6, 3, 1);
      const bank = new THREE.Mesh(bankGeo, towerMat);
      bank.position.set(0, 27, 0);
      bank.lookAt(0, 0, 0);
      tower.add(bank);

      // Glow bulbs
      const bulbsGeo = new THREE.BoxGeometry(5.6, 2.6, 0.2);
      const bulbs = new THREE.Mesh(bulbsGeo, lampMat);
      bulbs.position.set(0, 27, 0.5);
      bulbs.lookAt(0, 0, 0);
      tower.add(bulbs);

      tower.position.set(corner.x, 0, corner.z);
      this.group.add(tower);
    });
  }

  /**
   * Sets up balanced stadium lighting
   */
  private createLighting() {
    // Ambient light with stadium glow
    const ambient = new THREE.AmbientLight(0xffffff, 0.85);
    this.group.add(ambient);

    // Natural sky/ground hemisphere light for crisp contrast and no dark dead zones
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1e293b, 0.65);
    this.group.add(hemiLight);

    // Main directional sunlight / stadium floodlight
    const dirLight = new THREE.DirectionalLight(0xfffaed, 1.4);
    dirLight.position.set(30, 50, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 5;
    dirLight.shadow.camera.far = 150;
    dirLight.shadow.camera.left = -50;
    dirLight.shadow.camera.right = 50;
    dirLight.shadow.camera.top = 70;
    dirLight.shadow.camera.bottom = -70;
    dirLight.shadow.bias = 0.0005;
    dirLight.shadow.normalBias = 0.05;
    this.group.add(dirLight);

    // Opposite fill light for softer shadows
    const fillLight = new THREE.DirectionalLight(0xa5c4d4, 0.5);
    fillLight.position.set(-30, 30, -20);
    this.group.add(fillLight);
  }

  /**
   * Updates position of dynamic line of scrimmage (blue) and 1st down line (yellow)
   * yardLine: 0 = own endzone, 50 = midfield, 100 = opponent endzone
   */
  public updateLines(losYard: number, firstDownYard: number) {
    // Center of field is yard 50 (z = 0)
    const losZ = (losYard - 50) * YARD_TO_METER;
    const firstDownZ = (firstDownYard - 50) * YARD_TO_METER;

    this.losLineMesh.position.z = losZ;
    this.firstDownLineMesh.position.z = firstDownZ;
  }
}
