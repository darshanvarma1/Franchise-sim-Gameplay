(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var yd={exports:{}},dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function eE(){if(Ev)return dl;Ev=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return dl.Fragment=t,dl.jsx=i,dl.jsxs=i,dl}var Tv;function nE(){return Tv||(Tv=1,yd.exports=eE()),yd.exports}var Et=nE(),Ed={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function iE(){if(bv)return le;bv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),y=Symbol.iterator;function T(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function N(z,mt,Rt){this.props=z,this.context=mt,this.refs=S,this.updater=Rt||w}N.prototype.isReactComponent={},N.prototype.setState=function(z,mt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,mt,"setState")},N.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function B(){}B.prototype=N.prototype;function C(z,mt,Rt){this.props=z,this.context=mt,this.refs=S,this.updater=Rt||w}var L=C.prototype=new B;L.constructor=C,M(L,N.prototype),L.isPureReactComponent=!0;var U=Array.isArray;function P(){}var b={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function F(z,mt,Rt){var j=Rt.ref;return{$$typeof:o,type:z,key:mt,ref:j!==void 0?j:null,props:Rt}}function V(z,mt){return F(z.type,mt,z.props)}function Q(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function rt(z){var mt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Rt){return mt[Rt]})}var Y=/\/+/g;function tt(z,mt){return typeof z=="object"&&z!==null&&z.key!=null?rt(""+z.key):mt.toString(36)}function X(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(mt){z.status==="pending"&&(z.status="fulfilled",z.value=mt)},function(mt){z.status==="pending"&&(z.status="rejected",z.reason=mt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function Z(z,mt,Rt,j,dt){var bt=typeof z;(bt==="undefined"||bt==="boolean")&&(z=null);var Bt=!1;if(z===null)Bt=!0;else switch(bt){case"bigint":case"string":case"number":Bt=!0;break;case"object":switch(z.$$typeof){case o:case t:Bt=!0;break;case v:return Bt=z._init,Z(Bt(z._payload),mt,Rt,j,dt)}}if(Bt)return dt=dt(z),Bt=j===""?"."+tt(z,0):j,U(dt)?(Rt="",Bt!=null&&(Rt=Bt.replace(Y,"$&/")+"/"),Z(dt,mt,Rt,"",function(Ve){return Ve})):dt!=null&&(Q(dt)&&(dt=V(dt,Rt+(dt.key==null||z&&z.key===dt.key?"":(""+dt.key).replace(Y,"$&/")+"/")+Bt)),mt.push(dt)),1;Bt=0;var _t=j===""?".":j+":";if(U(z))for(var wt=0;wt<z.length;wt++)j=z[wt],bt=_t+tt(j,wt),Bt+=Z(j,mt,Rt,bt,dt);else if(wt=T(z),typeof wt=="function")for(z=wt.call(z),wt=0;!(j=z.next()).done;)j=j.value,bt=_t+tt(j,wt++),Bt+=Z(j,mt,Rt,bt,dt);else if(bt==="object"){if(typeof z.then=="function")return Z(X(z),mt,Rt,j,dt);throw mt=String(z),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return Bt}function ht(z,mt,Rt){if(z==null)return z;var j=[],dt=0;return Z(z,j,"","",function(bt){return mt.call(Rt,bt,dt++)}),j}function at(z){if(z._status===-1){var mt=z._result,Rt=mt();Rt.then(function(j){(z._status===0||z._status===-1)&&(z._status=1,z._result=j,Rt.status===void 0&&(Rt.status="fulfilled",Rt.value=j))},function(j){(z._status===0||z._status===-1)&&(z._status=2,z._result=j,Rt.status===void 0&&(Rt.status="rejected",Rt.reason=j))}),z._status===-1&&(z._status=0,z._result=Rt)}if(z._status===1)return z._result.default;throw z._result}var nt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function xt(z){var mt=b.T,Rt={};Rt.types=mt!==null?mt.types:null,b.T=Rt;try{var j=z(),dt=b.S;dt!==null&&dt(Rt,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(P,nt)}catch(bt){nt(bt)}finally{mt!==null&&Rt.types!==null&&(mt.types=Rt.types),b.T=mt}}function Zt(z){var mt=b.T;if(mt!==null){var Rt=mt.types;Rt===null?mt.types=[z]:Rt.indexOf(z)===-1&&Rt.push(z)}else xt(Zt.bind(null,z))}var Kt={map:ht,forEach:function(z,mt,Rt){ht(z,function(){mt.apply(this,arguments)},Rt)},count:function(z){var mt=0;return ht(z,function(){mt++}),mt},toArray:function(z){return ht(z,function(mt){return mt})||[]},only:function(z){if(!Q(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return le.Activity=g,le.Children=Kt,le.Component=N,le.Fragment=i,le.Profiler=l,le.PureComponent=C,le.StrictMode=s,le.Suspense=p,le.ViewTransition=_,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,le.__COMPILER_RUNTIME={__proto__:null,c:function(z){return b.H.useMemoCache(z)}},le.addTransitionType=Zt,le.cache=function(z){return function(){return z.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(z,mt,Rt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var j=M({},z.props),dt=z.key;if(mt!=null)for(bt in mt.key!==void 0&&(dt=""+mt.key),mt)!D.call(mt,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&mt.ref===void 0||(j[bt]=mt[bt]);var bt=arguments.length-2;if(bt===1)j.children=Rt;else if(1<bt){for(var Bt=Array(bt),_t=0;_t<bt;_t++)Bt[_t]=arguments[_t+2];j.children=Bt}return F(z.type,dt,j)},le.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},le.createElement=function(z,mt,Rt){var j,dt={},bt=null;if(mt!=null)for(j in mt.key!==void 0&&(bt=""+mt.key),mt)D.call(mt,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(dt[j]=mt[j]);var Bt=arguments.length-2;if(Bt===1)dt.children=Rt;else if(1<Bt){for(var _t=Array(Bt),wt=0;wt<Bt;wt++)_t[wt]=arguments[wt+2];dt.children=_t}if(z&&z.defaultProps)for(j in Bt=z.defaultProps,Bt)dt[j]===void 0&&(dt[j]=Bt[j]);return F(z,bt,dt)},le.createRef=function(){return{current:null}},le.forwardRef=function(z){return{$$typeof:d,render:z}},le.isValidElement=Q,le.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:at}},le.memo=function(z,mt){return{$$typeof:m,type:z,compare:mt===void 0?null:mt}},le.startTransition=xt,le.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},le.use=function(z){return b.H.use(z)},le.useActionState=function(z,mt,Rt){return b.H.useActionState(z,mt,Rt)},le.useCallback=function(z,mt){return b.H.useCallback(z,mt)},le.useContext=function(z){return b.H.useContext(z)},le.useDebugValue=function(){},le.useDeferredValue=function(z,mt){return b.H.useDeferredValue(z,mt)},le.useEffect=function(z,mt){return b.H.useEffect(z,mt)},le.useEffectEvent=function(z){return b.H.useEffectEvent(z)},le.useId=function(){return b.H.useId()},le.useImperativeHandle=function(z,mt,Rt){return b.H.useImperativeHandle(z,mt,Rt)},le.useInsertionEffect=function(z,mt){return b.H.useInsertionEffect(z,mt)},le.useLayoutEffect=function(z,mt){return b.H.useLayoutEffect(z,mt)},le.useMemo=function(z,mt){return b.H.useMemo(z,mt)},le.useOptimistic=function(z,mt){return b.H.useOptimistic(z,mt)},le.useReducer=function(z,mt,Rt){return b.H.useReducer(z,mt,Rt)},le.useRef=function(z){return b.H.useRef(z)},le.useState=function(z){return b.H.useState(z)},le.useSyncExternalStore=function(z,mt,Rt){return b.H.useSyncExternalStore(z,mt,Rt)},le.useTransition=function(){return b.H.useTransition()},le.version="19.3.0",le}var Av;function jp(){return Av||(Av=1,Ed.exports=iE()),Ed.exports}var Cn=jp(),Td={exports:{}},pl={},bd={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function aE(){return Rv||(Rv=1,(function(o){function t(X,Z){var ht=X.length;X.push(Z);t:for(;0<ht;){var at=ht-1>>>1,nt=X[at];if(0<l(nt,Z))X[at]=Z,X[ht]=nt,ht=at;else break t}}function i(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var Z=X[0],ht=X.pop();if(ht!==Z){X[0]=ht;t:for(var at=0,nt=X.length,xt=nt>>>1;at<xt;){var Zt=2*(at+1)-1,Kt=X[Zt],z=Zt+1,mt=X[z];if(0>l(Kt,ht))z<nt&&0>l(mt,Kt)?(X[at]=mt,X[z]=ht,at=z):(X[at]=Kt,X[Zt]=ht,at=Zt);else if(z<nt&&0>l(mt,ht))X[at]=mt,X[z]=ht,at=z;else break t}}return Z}function l(X,Z){var ht=X.sortIndex-Z.sortIndex;return ht!==0?ht:X.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],v=1,g=null,_=3,y=!1,T=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(X){for(var Z=i(m);Z!==null;){if(Z.callback===null)s(m);else if(Z.startTime<=X)s(m),Z.sortIndex=Z.expirationTime,t(p,Z);else break;Z=i(m)}}function L(X){if(w=!1,C(X),!T)if(i(p)!==null)T=!0,U||(U=!0,Q());else{var Z=i(m);Z!==null&&tt(L,Z.startTime-X)}}var U=!1,P=-1,b=5,D=-1;function F(){return M?!0:!(o.unstable_now()-D<b)}function V(){if(M=!1,U){var X=o.unstable_now();D=X;var Z=!0;try{t:{T=!1,w&&(w=!1,N(P),P=-1),y=!0;var ht=_;try{e:{for(C(X),g=i(p);g!==null&&!(g.expirationTime>X&&F());){var at=g.callback;if(typeof at=="function"){g.callback=null,_=g.priorityLevel;var nt=at(g.expirationTime<=X);if(X=o.unstable_now(),typeof nt=="function"){g.callback=nt,C(X),Z=!0;break e}g===i(p)&&s(p),C(X)}else s(p);g=i(p)}if(g!==null)Z=!0;else{var xt=i(m);xt!==null&&tt(L,xt.startTime-X),Z=!1}}break t}finally{g=null,_=ht,y=!1}Z=void 0}}finally{Z?Q():U=!1}}}var Q;if(typeof B=="function")Q=function(){B(V)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Y=rt.port2;rt.port1.onmessage=V,Q=function(){Y.postMessage(null)}}else Q=function(){S(V,0)};function tt(X,Z){P=S(function(){X(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(X){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var ht=_;_=Z;try{return X()}finally{_=ht}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(X,Z){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ht=_;_=X;try{return Z()}finally{_=ht}},o.unstable_scheduleCallback=function(X,Z,ht){var at=o.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?at+ht:at):ht=at,X){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=ht+nt,X={id:v++,callback:Z,priorityLevel:X,startTime:ht,expirationTime:nt,sortIndex:-1},ht>at?(X.sortIndex=ht,t(m,X),i(p)===null&&X===i(m)&&(w?(N(P),P=-1):w=!0,tt(L,ht-at))):(X.sortIndex=nt,t(p,X),T||y||(T=!0,U||(U=!0,Q()))),X},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(X){var Z=_;return function(){var ht=_;_=Z;try{return X.apply(this,arguments)}finally{_=ht}}}})(Ad)),Ad}var wv;function sE(){return wv||(wv=1,bd.exports=aE()),bd.exports}var Rd={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function rE(){if(Cv)return Bn;Cv=1;var o=jp();function t(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,g,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:y===h?h:""+y,children:v,containerInfo:g,implementation:_}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.browser=function(v){return{$$typeof:u,_reason:v}},Bn.createPortal=function(v,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(v,g,null,_)},Bn.flushSync=function(v){var g=p.T,_=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=g,s.p=_,s.d.f()}},Bn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},Bn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Bn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var _=g.as,y=m(_,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:T,fetchPriority:w}):_==="script"&&s.d.X(v,{crossOrigin:y,integrity:T,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Bn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=m(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},Bn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,y=m(_,g.crossOrigin);s.d.L(v,_,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Bn.preloadModule=function(v,g){if(typeof v=="string")if(g){var _=m(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},Bn.requestFormReset=function(v){s.d.r(v)},Bn.unstable_batchedUpdates=function(v,g){return v(g)},Bn.useFormState=function(v,g,_){return p.H.useFormState(v,g,_)},Bn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Bn.version="19.3.0",Bn}var Dv;function oE(){if(Dv)return Rd.exports;Dv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Rd.exports=rE(),Rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function lE(){if(Nv)return pl;Nv=1;var o=sE(),t=jp(),i=oE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===r)return p(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var x=!1,R=c.child;R;){if(R===a){x=!0,a=c,r=f;break}if(R===r){x=!0,r=c,a=f;break}R=R.sibling}if(!x){for(R=f.child;R;){if(R===a){x=!0,a=f,r=c;break}if(R===r){x=!0,r=f,a=c;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,r,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,r,c,f))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function y(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],a=_(e);return a===null||w(n,e,a.child,{foundSelf:!1}),n}function w(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(e,n,a.child,r))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,N=null;function B(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function C(e,n,a){return e===a?(N=e,!1):e===n?(N!==null&&(S=e),!0):!1}function L(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function U(e,n,a){for(var r=0,c=e;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)e=a(e),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,b=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ht=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),xt=Symbol.for("react.activity"),Zt=Symbol.for("react.legacy_hidden"),Kt=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),Rt=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=Rt&&e[Rt]||e["@@iterator"],typeof e=="function"?e:null)}var dt=Symbol.for("react.client.reference");function bt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case rt:return"Profiler";case Q:return"StrictMode";case Z:return"Suspense";case ht:return"SuspenseList";case xt:return"Activity";case z:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case tt:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case at:return n=e.displayName||null,n!==null?n:bt(e.type)||"Memo";case nt:n=e._payload,e=e._init;try{return bt(e(n))}catch{}}return null}var Bt=Array.isArray,_t=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ve={pending:!1,data:null,method:null,action:null},me=[],_e=-1;function ye(e){return{current:e}}function ee(e){0>_e||(e.current=me[_e],me[_e]=null,_e--)}function ie(e,n){_e++,me[_e]=e.current,e.current=n}var ke=ye(null),mn=ye(null),Ie=ye(null),tn=ye(null);function q(e,n){switch(ie(Ie,n),ie(mn,e),ie(ke,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?L_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=L_(n),e=U_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ee(ke),ie(ke,e)}function nn(){ee(ke),ee(mn),ee(Ie)}function Pe(e){var n=e.memoizedState;n!==null&&(Yr._currentValue=n.memoizedState,ie(tn,e)),n=ke.current;var a=U_(n,e.type);n!==a&&(ie(mn,e),ie(ke,a))}function O(e){mn.current===e&&(ee(ke),ee(mn)),tn.current===e&&(ee(tn),Yr._currentValue=Ve)}var E,et;function ct(e){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+e+et}var pt=!1;function At(e,n){if(!e||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Ot){var K=Ot}Reflect.construct(e,[],St)}else{try{St.call()}catch(Ot){K=Ot}St=!1;try{var lt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new e}finally{St&&(lt!==void 0?Object.defineProperty(e.prototype,"props",lt):delete e.prototype.props)}}}else{try{throw Error()}catch(Ot){K=Ot}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Ot){if(Ot&&K&&typeof Ot.stack=="string")return[Ot.stack,K.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],R=f[1];if(x&&R){var I=x.split(`
`),$=R.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===$.length)for(r=I.length-1,c=$.length-1;1<=r&&0<=c&&I[r]!==$[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==$[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==$[c]){var ut=`
`+I[r].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=r&&0<=c);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ct(a):""}function Nt(e,n){switch(e.tag){case 26:case 27:case 5:return ct(e.type);case 16:return ct("Lazy");case 13:return e.child!==n&&n!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return At(e.type,!1);case 11:return At(e.type.render,!1);case 1:return At(e.type,!0);case 31:return ct("Activity");case 30:return ct("ViewTransition");default:return""}}function gt(e){try{var n="",a=null;do n+=Nt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var yt=Object.prototype.hasOwnProperty,Dt=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,It=o.unstable_shouldYield,Pt=o.unstable_requestPaint,kt=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,ce=o.unstable_ImmediatePriority,W=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,Vt=o.log,Tt=o.unstable_setDisableYieldValue,Jt=null,Gt=null;function Ne(e){if(typeof Vt=="function"&&Tt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Jt,e)}catch{}}var ue=Math.clz32?Math.clz32:Qu,ri=Math.log,Si=Math.LN2;function Qu(e){return e>>>=0,e===0?32:31-(ri(e)/Si|0)|0}var cr=256,As=262144,Xa=4194304;function va(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rs(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?c=va(r):(x&=R,x!==0?c=va(x):a||(a=R&~e,a!==0&&(c=va(a))))):(R=r&~f,R!==0?c=va(R):x!==0?c=va(x):a||(a=r&~e,a!==0&&(c=va(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Wa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Zi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-ue(a),c=1<<r;n|=e[r],a&=~c}return n}function xo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function So(){var e=Xa;return Xa<<=1,(Xa&62914560)===0&&(Xa=4194304),e}function ur(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ki(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Il(e,n,a,r,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(a=x&~a;0<a;){var ut=31-ue(a),St=1<<ut;R[ut]=0,I[ut]=-1;var K=$[ut];if(K!==null)for($[ut]=null,ut=0;ut<K.length;ut++){var lt=K[ut];lt!==null&&(lt.lane&=-536870913)}a&=~St}r!==0&&ws(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function ws(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ue(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Mo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ue(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function yo(e,n){var a=n&-n;return a=(a&42)!==0?1:Eo(a),(a&(e.suspendedLanes|n))!==0?0:a}function Eo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function To(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bl(){var e=wt.p;return e!==0?e:(e=window.event,e===void 0?32:gv(e.type))}function zl(e,n){var a=wt.p;try{return wt.p=e,n()}finally{wt.p=a}}var Mi=Math.random().toString(36).slice(2),A="__reactFiber$"+Mi,H="__reactProps$"+Mi,ft="__reactContainer$"+Mi,st="__reactEvents$"+Mi,ot="__reactListeners$"+Mi,zt="__reactHandles$"+Mi,Xt="__reactResources$"+Mi,Ut="__reactMarker$"+Mi,Yt="__reactLoad$"+Mi;function Qt(e){delete e[A],delete e[H],delete e[ot],delete e[zt]}function se(e){var n;if(n=e[A])return n;for(var a=e.parentNode;a;){if(n=a[ft]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Q_(e);e!==null;){if(a=e[A])return a;e=Q_(e)}return n}e=a,a=e.parentNode}return null}function fe(e){if(e=e[A]||e[ft]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Wt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ee(e){var n=e[Xt];return n||(n=e[Xt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ve(e){e[Ut]=!0}function Ze(e){e[Yt]=void 0}var He=new Set,Mn={};function Ft(e,n){ln(e,n),ln(e+"Capture",n)}function ln(e,n){for(Mn[e]=n,e=0;e<n.length;e++)He.add(n[e])}var Le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xn={},oi={};function Qi(e){return yt.call(oi,e)?!0:yt.call(Xn,e)?!1:Le.test(e)?oi[e]=!0:(Xn[e]=!0,!1)}var xe=!1;function ze(){var e=xe;return xe=!1,e}function je(e,n,a){if(Qi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function li(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Re(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function cn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fl(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ju(e){if(!e._valueTracker){var n=xa(e)?"checked":"value";e._valueTracker=Fl(e,n,""+e[n])}}function Sm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=xa(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var yS=/[\n"\\]/g;function yi(e){return e.replace(yS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ju(e,n,a,r,c,f,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+cn(n)):e.value!==""+cn(n)&&(e.value=""+cn(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?$u(e,cn(e.value)):$u(e,cn(n)):a!=null?$u(e,cn(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+cn(R):e.removeAttribute("name")}function Mm(e,n,a,r,c,f,x,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ju(e);return}a=a!=null?""+cn(a):"",n=n!=null?""+cn(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),ju(e)}function $u(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function fr(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+cn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function ym(e,n,a){if(n!=null&&(n=""+cn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+cn(a):""}function Em(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Bt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=cn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),ju(e)}function hr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ES=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||ES.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function bm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",xe=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Tm(e,c,r),xe=!0)}else for(var f in n)n.hasOwnProperty(f)&&Tm(e,f,n[f])}function tf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var TS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hl(e){return bS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var ef=null;function nf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dr=null,pr=null;function Am(e){var n=fe(e);if(n&&(e=n.stateNode)){var a=e[H]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ju(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[H]||null;if(!c)throw Error(s(90));Ju(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Sm(r)}break t;case"textarea":ym(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fr(e,!!a.multiple,n,!1)}}}var af=!1;function Rm(e,n,a){if(af)return e(n,a);af=!0;try{var r=e(n);return r}finally{if(af=!1,(dr!==null||pr!==null)&&(Hc(),dr&&(n=dr,e=pr,pr=dr=null,Am(n),e)))for(n=0;n<e.length;n++)Am(e[n])}}function bo(e,n){var a=e.stateNode;if(a===null)return null;var r=a[H]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=!1;if(Sa)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){sf=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{sf=!1}var qa=null,rf=null,Gl=null;function wm(){if(Gl)return Gl;var e,n=rf,a=n.length,r,c="value"in qa?qa.value:qa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===c[f-r];r++);return Gl=c.slice(e,1<r?1-r:void 0)}function Vl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kl(){return!0}function Cm(){return!1}function Wn(e){function n(a,r,c,f,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?kl:Cm,this.isPropagationStopped=Cm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Wn(Ya),Ro=P({},Ya,{view:0,detail:0}),AS=Wn(Ro),of,lf,wo,Wl=P({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wo&&(wo&&e.type==="mousemove"?(of=e.screenX-wo.screenX,lf=e.screenY-wo.screenY):lf=of=0,wo=e),of)},movementY:function(e){return"movementY"in e?e.movementY:lf}}),Dm=Wn(Wl),RS=P({},Wl,{dataTransfer:0}),wS=Wn(RS),CS=P({},Ro,{relatedTarget:0}),cf=Wn(CS),DS=P({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),NS=Wn(DS),LS=P({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),US=Wn(LS),OS=P({},Ya,{data:0}),Nm=Wn(OS),PS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=BS[e])?!!n[e]:!1}function uf(){return zS}var FS=P({},Ro,{key:function(e){if(e.key){var n=PS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?IS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(e){return e.type==="keypress"?Vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),HS=Wn(FS),GS=P({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=Wn(GS),VS=P({},Ya,{submitter:0}),kS=Wn(VS),XS=P({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),WS=Wn(XS),qS=P({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),YS=Wn(qS),ZS=P({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=Wn(ZS),QS=P({},Ya,{newState:0,oldState:0,source:0}),jS=Wn(QS),JS=[9,13,27,32],ff=Sa&&"CompositionEvent"in window,Co=null;Sa&&"documentMode"in document&&(Co=document.documentMode);var $S=Sa&&"TextEvent"in window&&!Co,Um=Sa&&(!ff||Co&&8<Co&&11>=Co),Om=" ",Pm=!1;function Im(e,n){switch(e){case"keyup":return JS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function tM(e,n){switch(e){case"compositionend":return Bm(n);case"keypress":return n.which!==32?null:(Pm=!0,Om);case"textInput":return e=n.data,e===Om&&Pm?null:e;default:return null}}function eM(e,n){if(mr)return e==="compositionend"||!ff&&Im(e,n)?(e=wm(),Gl=rf=qa=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Um&&n.locale!=="ko"?null:n.data;default:return null}}var nM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!nM[e.type]:n==="textarea"}function Fm(e,n,a,r){dr?pr?pr.push(r):pr=[r]:dr=r,n=qc(n,"onChange"),0<n.length&&(a=new Xl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Do=null,No=null;function iM(e){A_(e,0)}function ql(e){var n=Wt(e);if(Sm(n))return e}function Hm(e,n){if(e==="change")return n}var Gm=!1;if(Sa){var hf;if(Sa){var df="oninput"in document;if(!df){var Vm=document.createElement("div");Vm.setAttribute("oninput","return;"),df=typeof Vm.oninput=="function"}hf=df}else hf=!1;Gm=hf&&(!document.documentMode||9<document.documentMode)}function km(){Do&&(Do.detachEvent("onpropertychange",Xm),No=Do=null)}function Xm(e){if(e.propertyName==="value"&&ql(No)){var n=[];Fm(n,No,e,nf(e)),Rm(iM,n)}}function aM(e,n,a){e==="focusin"?(km(),Do=n,No=a,Do.attachEvent("onpropertychange",Xm)):e==="focusout"&&km()}function sM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ql(No)}function rM(e,n){if(e==="click")return ql(n)}function oM(e,n){if(e==="input"||e==="change")return ql(n)}function lM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ci=typeof Object.is=="function"?Object.is:lM;function Lo(e,n){if(ci(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!yt.call(n,c)||!ci(e[c],n[c]))return!1}return!0}function pf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qm(e,n){var a=Wm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Wm(a)}}function Ym(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ym(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pf(e.document)}return n}function mf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var cM=Sa&&"documentMode"in document&&11>=document.documentMode,gr=null,gf=null,Uo=null,_f=!1;function Km(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_f||gr==null||gr!==pf(r)||(r=gr,"selectionStart"in r&&mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&Lo(Uo,r)||(Uo=r,r=qc(gf,"onSelect"),0<r.length&&(n=new Xl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=gr)))}function Cs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var _r={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},vf={},Qm={};Sa&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Ds(e){if(vf[e])return vf[e];if(!_r[e])return e;var n=_r[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qm)return vf[e]=n[a];return e}var jm=Ds("animationend"),Jm=Ds("animationiteration"),$m=Ds("animationstart"),uM=Ds("transitionrun"),fM=Ds("transitionstart"),hM=Ds("transitioncancel"),t0=Ds("transitionend"),e0=new Map,xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xf.push("scrollEnd");function Oi(e,n){e0.set(e,n),Ft(n,[e])}var dM=0;function Ma(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=zi.identifierPrefix;var a=dM++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function n0(e){if(e==null||typeof e=="string")return e;var n=null,a=Br;if(a!==null)for(var r=0;r<a.length;r++){var c=e[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function ya(e,n){return e=n0(e),n=n0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ei=[],vr=0,Sf=0;function Zl(){for(var e=vr,n=Sf=vr=0;n<e;){var a=Ei[n];Ei[n++]=null;var r=Ei[n];Ei[n++]=null;var c=Ei[n];Ei[n++]=null;var f=Ei[n];if(Ei[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}f!==0&&i0(a,c,f)}}function Kl(e,n,a,r){Ei[vr++]=e,Ei[vr++]=n,Ei[vr++]=a,Ei[vr++]=r,Sf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Mf(e,n,a,r){return Kl(e,n,a,r),Ql(e)}function Ns(e,n){return Kl(e,null,null,n),Ql(e)}function i0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ue(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Ql(e){if(50<el)throw el=0,Fc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var xr={};function pM(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,r){return new pM(e,n,a,r)}function yf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function a0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function jl(e,n,a,r,c,f){var x=0;if(r=e,typeof r=="function")yf(r)&&(x=1);else if(typeof r=="string")x=Vy(e,a,ke.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(r){case xt:return e=$n(31,a,n,c),e.elementType=xt,e.lanes=f,e;case V:return Ls(a.children,c,f,n);case Q:x=8,c|=24;break;case rt:return e=$n(12,a,n,c|2),e.elementType=rt,e.lanes=f,e;case Z:return e=$n(13,a,n,c),e.elementType=Z,e.lanes=f,e;case ht:return e=$n(19,a,n,c),e.elementType=ht,e.lanes=f,e;case Zt:case z:return e=c|32,e=$n(30,a,n,e),e.elementType=z,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case tt:x=10;break t;case Y:x=9;break t;case X:x=11;break t;case at:x=14;break t;case nt:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=$n(x,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function Ls(e,n,a,r){return e=$n(7,e,r,n),e.lanes=a,e}function Ef(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function s0(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function Tf(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var r0=new WeakMap;function Ti(e,n){if(typeof e=="object"&&e!==null){var a=r0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:gt(n)},r0.set(e,n),n)}return{value:e,source:n,stack:gt(n)}}var Sr=[],Mr=0,Jl=null,Oo=0,bi=[],Ai=0,Za=null,Ji=1,$i="";function Ta(e,n){Sr[Mr++]=Oo,Sr[Mr++]=Jl,Jl=e,Oo=n}function o0(e,n,a){bi[Ai++]=Ji,bi[Ai++]=$i,bi[Ai++]=Za,Za=e;var r=Ji;e=$i;var c=32-ue(r)-1;r&=~(1<<c),a+=1;var f=32-ue(n)+c;if(30<f){var x=c-c%5;f=(r&(1<<x)-1).toString(32),r>>=x,c-=x,Ji=1<<32-ue(n)+c|a<<c|r,$i=f+e}else Ji=1<<f|a<<c|r,$i=e}function $l(e){e.return!==null&&(Ta(e,1),o0(e,1,0))}function bf(e){for(;e===Jl;)Jl=Sr[--Mr],Sr[Mr]=null,Oo=Sr[--Mr],Sr[Mr]=null;for(;e===Za;)Za=bi[--Ai],bi[Ai]=null,$i=bi[--Ai],bi[Ai]=null,Ji=bi[--Ai],bi[Ai]=null}function l0(e,n){bi[Ai++]=Ji,bi[Ai++]=$i,bi[Ai++]=Za,Ji=n.id,$i=n.overflow,Za=e}var bn=null,Je=null,Se=!1,Ka=null,Ri=!1,Af=Error(s(519));function Qa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Po(Ti(n,e)),Af}function c0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[A]=e,n[H]=r,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<il.length;a++)be(il[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),Mm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),Em(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||D_(n.textContent,a)?(r.popover!=null&&(be("beforetoggle",n),be("toggle",n)),r.onScroll!=null&&be("scroll",n),r.onScrollEnd!=null&&be("scrollend",n),r.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Qa(e,!0)}function tc(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:bn=bn.return}}function yr(e){if(e!==bn)return!1;if(!Se)return tc(e),Se=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||nd(e.type,e.memoizedProps)),a=!a),a&&Je&&Qa(e),tc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=K_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=K_(e)}else n===27?(n=Je,hs(e.type)?(e=fd,fd=null,Je=e):Je=n):Je=bn?Ci(e.stateNode.nextSibling):null;return!0}function Us(){Je=bn=null,Se=!1}function Rf(){var e=Ka;return e!==null&&(ni===null?ni=e:ni.push.apply(ni,e),Ka=null),e}function Po(e){Ka===null?Ka=[e]:Ka.push(e)}var wf=ye(null),Os=null,ba=null;function ja(e,n,a){ie(wf,n._currentValue),n._currentValue=a}function Aa(e){e._currentValue=wf.current,ee(wf)}function ec(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Cf(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var I=0;I<n.length;I++)if(R.context===n[I]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),ec(f.return,a,e),r||(x=null);break t}f=R.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),ec(x,a,e),x=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,x=c.alternate,x!==null&&(x.lanes|=a),ec(c.return,a,e),x=c.child,x=x!==null?x.sibling:null):x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Ps(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=c.type;ci(c.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(c===tn.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Yr):e=[Yr])}c=c.return}return e!==null&&Cf(n,e,a,r),n.flags|=262144,e!==null}function nc(e){for(e=e.firstContext;e!==null;){if(!ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Is(e){Os=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return u0(Os,e)}function ic(e,n){return Os===null&&Is(e),u0(e,n)}function u0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ba===null){if(e===null)throw Error(s(308));ba=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ba=ba.next=n;return a}var mM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},gM=o.unstable_scheduleCallback,_M=o.unstable_NormalPriority,gn={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Df(){return{controller:new mM,data:new Map,refCount:0}}function Io(e){e.refCount--,e.refCount===0&&gM(_M,function(){e.controller.abort()})}function f0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Bo=null;function vM(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var zo=null,Nf=0,Bs=0,Er=null;function xM(e,n){if(zo===null){var a=zo=[];Nf=0,Bs=Yh(),Er={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Nf++,n.then(h0,h0),n}function h0(){if(--Nf===0&&(Bo=null,zo!==null)){Er!==null&&(Er.status="fulfilled");var e=zo;zo=null,Bs=0,Er=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function SM(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var d0=_t.S;_t.S=function(e,n){if(s_=kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&xM(e,n),Bo!==null)for(var a=Gr;a!==null;)f0(a,Bo),a=a.next;if(a=e.types,a!==null){for(var r=Gr;r!==null;)f0(r,a),r=r.next;if(Bs!==0){r=Bo,r===null&&(r=Bo=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}d0!==null&&d0(e,n)};var zs=ye(null);function Lf(){var e=zs.current;return e!==null?e:Qe.pooledCache}function ac(e,n){n===null?ie(zs,zs.current):ie(zs,n.pool)}function p0(){var e=Lf();return e===null?null:{parent:gn._currentValue,pool:e}}var Tr=Error(s(460)),Uf=Error(s(474)),sc=Error(s(542)),rc={then:function(){}};function m0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function g0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,v0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,v0(e),e}throw Hs=n,Tr}}function Fs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Hs=a,Tr):a}}var Hs=null;function _0(){if(Hs===null)throw Error(s(459));var e=Hs;return Hs=null,e}function v0(e){if(e===Tr||e===sc)throw Error(s(483))}var br=null,Fo=0;function oc(e){var n=Fo;return Fo+=1,br===null&&(br=[]),g0(br,e,n)}function Ja(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function lc(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function x0(e){function n(J,G){if(e){var it=J.deletions;it===null?(J.deletions=[G],J.flags|=16):it.push(G)}}function a(J,G){if(!e)return null;for(;G!==null;)n(J,G),G=G.sibling;return null}function r(J){for(var G=new Map;J!==null;)J.key===null?G.set(J.index,J):G.set(J.key,J),J=J.sibling;return G}function c(J,G){return J=Ea(J,G),J.index=0,J.sibling=null,J}function f(J,G,it){return J.index=it,e?(it=J.alternate,it!==null?(it=it.index,it<G?(J.flags|=2,G):it):(J.flags|=134217730,G)):(J.flags|=1048576,G)}function x(J){return e&&J.alternate===null&&(J.flags|=134217730),J}function R(J,G,it,vt){return G===null||G.tag!==6?(G=Ef(it,J.mode,vt),G.return=J,G):(G=c(G,it),G.return=J,G)}function I(J,G,it,vt){var qt=it.type;return qt===V?(J=ut(J,G,it.props.children,vt,it.key),Ja(J,it),J):G!==null&&(G.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===nt&&Fs(qt)===G.type)?(G=c(G,it.props),Ja(G,it),G.return=J,G):(G=jl(it.type,it.key,it.props,null,J.mode,vt),Ja(G,it),G.return=J,G)}function $(J,G,it,vt){return G===null||G.tag!==4||G.stateNode.containerInfo!==it.containerInfo||G.stateNode.implementation!==it.implementation?(G=Tf(it,J.mode,vt),G.return=J,G):(G=c(G,it.children||[]),G.return=J,G)}function ut(J,G,it,vt,qt){return G===null||G.tag!==7?(G=Ls(it,J.mode,vt,qt),G.return=J,G):(G=c(G,it),G.return=J,G)}function St(J,G,it){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Ef(""+G,J.mode,it),G.return=J,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case D:return it=jl(G.type,G.key,G.props,null,J.mode,it),Ja(it,G),it.return=J,it;case F:return G=Tf(G,J.mode,it),G.return=J,G;case nt:return G=Fs(G),St(J,G,it)}if(Bt(G)||j(G))return G=Ls(G,J.mode,it,null),G.return=J,G;if(typeof G.then=="function")return St(J,oc(G),it);if(G.$$typeof===tt)return St(J,ic(J,G),it);lc(J,G)}return null}function K(J,G,it,vt){var qt=G!==null?G.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return qt!==null?null:R(J,G,""+it,vt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case D:return it.key===qt?I(J,G,it,vt):null;case F:return it.key===qt?$(J,G,it,vt):null;case nt:return it=Fs(it),K(J,G,it,vt)}if(Bt(it)||j(it))return qt!==null?null:ut(J,G,it,vt,null);if(typeof it.then=="function")return K(J,G,oc(it),vt);if(it.$$typeof===tt)return K(J,G,ic(J,it),vt);lc(J,it)}return null}function lt(J,G,it,vt,qt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(it)||null,R(G,J,""+vt,qt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case D:return J=J.get(vt.key===null?it:vt.key)||null,I(G,J,vt,qt);case F:return J=J.get(vt.key===null?it:vt.key)||null,$(G,J,vt,qt);case nt:return vt=Fs(vt),lt(J,G,it,vt,qt)}if(Bt(vt)||j(vt))return J=J.get(it)||null,ut(G,J,vt,qt,null);if(typeof vt.then=="function")return lt(J,G,it,oc(vt),qt);if(vt.$$typeof===tt)return lt(J,G,it,ic(G,vt),qt);lc(G,vt)}return null}function Ot(J,G,it,vt){for(var qt=null,Ce=null,te=G,ae=G=0,xn=null;te!==null&&ae<it.length;ae++){te.index>ae?(xn=te,te=null):xn=te.sibling;var Oe=K(J,te,it[ae],vt);if(Oe===null){te===null&&(te=xn);break}e&&te&&Oe.alternate===null&&n(J,te),G=f(Oe,G,ae),Ce===null?qt=Oe:Ce.sibling=Oe,Ce=Oe,te=xn}if(ae===it.length)return a(J,te),Se&&Ta(J,ae),qt;if(te===null){for(;ae<it.length;ae++)te=St(J,it[ae],vt),te!==null&&(G=f(te,G,ae),Ce===null?qt=te:Ce.sibling=te,Ce=te);return Se&&Ta(J,ae),qt}for(te=r(te);ae<it.length;ae++)xn=lt(te,J,ae,it[ae],vt),xn!==null&&(e&&(Oe=xn.alternate,Oe!==null&&te.delete(Oe.key===null?ae:Oe.key)),G=f(xn,G,ae),Ce===null?qt=xn:Ce.sibling=xn,Ce=xn);return e&&te.forEach(function(_s){return n(J,_s)}),Se&&Ta(J,ae),qt}function jt(J,G,it,vt){if(it==null)throw Error(s(151));for(var qt=null,Ce=null,te=G,ae=G=0,xn=null,Oe=it.next();te!==null&&!Oe.done;ae++,Oe=it.next()){te.index>ae?(xn=te,te=null):xn=te.sibling;var _s=K(J,te,Oe.value,vt);if(_s===null){te===null&&(te=xn);break}e&&te&&_s.alternate===null&&n(J,te),G=f(_s,G,ae),Ce===null?qt=_s:Ce.sibling=_s,Ce=_s,te=xn}if(Oe.done)return a(J,te),Se&&Ta(J,ae),qt;if(te===null){for(;!Oe.done;ae++,Oe=it.next())Oe=St(J,Oe.value,vt),Oe!==null&&(G=f(Oe,G,ae),Ce===null?qt=Oe:Ce.sibling=Oe,Ce=Oe);return Se&&Ta(J,ae),qt}for(te=r(te);!Oe.done;ae++,Oe=it.next())Oe=lt(te,J,ae,Oe.value,vt),Oe!==null&&(e&&(xn=Oe.alternate,xn!==null&&te.delete(xn.key===null?ae:xn.key)),G=f(Oe,G,ae),Ce===null?qt=Oe:Ce.sibling=Oe,Ce=Oe);return e&&te.forEach(function(tE){return n(J,tE)}),Se&&Ta(J,ae),qt}function pe(J,G,it,vt){if(typeof it=="object"&&it!==null&&it.type===V&&it.key===null&&it.props.ref===void 0&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case D:t:{for(var qt=it.key;G!==null;){if(G.key===qt){if(qt=it.type,qt===V){if(G.tag===7){a(J,G.sibling),vt=c(G,it.props.children),Ja(vt,it),vt.return=J,J=vt;break t}}else if(G.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===nt&&Fs(qt)===G.type){a(J,G.sibling),vt=c(G,it.props),Ja(vt,it),vt.return=J,J=vt;break t}a(J,G);break}else n(J,G);G=G.sibling}it.type===V?(vt=Ls(it.props.children,J.mode,vt,it.key),Ja(vt,it),vt.return=J,J=vt):(vt=jl(it.type,it.key,it.props,null,J.mode,vt),Ja(vt,it),vt.return=J,J=vt)}return x(J);case F:t:{for(qt=it.key;G!==null;){if(G.key===qt)if(G.tag===4&&G.stateNode.containerInfo===it.containerInfo&&G.stateNode.implementation===it.implementation){a(J,G.sibling),vt=c(G,it.children||[]),vt.return=J,J=vt;break t}else{a(J,G);break}else n(J,G);G=G.sibling}vt=Tf(it,J.mode,vt),vt.return=J,J=vt}return x(J);case nt:return it=Fs(it),pe(J,G,it,vt)}if(Bt(it))return Ot(J,G,it,vt);if(j(it)){if(qt=j(it),typeof qt!="function")throw Error(s(150));return it=qt.call(it),jt(J,G,it,vt)}if(typeof it.then=="function")return pe(J,G,oc(it),vt);if(it.$$typeof===tt)return pe(J,G,ic(J,it),vt);lc(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,G!==null&&G.tag===6?(a(J,G.sibling),vt=c(G,it),vt.return=J,J=vt):(a(J,G),vt=Ef(it,J.mode,vt),vt.return=J,J=vt),x(J)):a(J,G)}return function(J,G,it,vt){try{Fo=0;var qt=pe(J,G,it,vt);return br=null,qt}catch(te){if(te===Tr||te===sc)throw te;var Ce=$n(29,te,null,J.mode);return Ce.lanes=vt,Ce.return=J,Ce}finally{}}}var Gs=x0(!0),S0=x0(!1),$a=!1;function Of(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ts(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function es(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Ql(e),i0(e,null,a),n}return Kl(e,r,n,a),Ql(e)}function Ho(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Mo(e,a)}}function If(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bf=!1;function Go(){if(Bf){var e=Er;if(e!==null)throw e}}function Vo(e,n,a,r){Bf=!1;var c=e.updateQueue;$a=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var I=R,$=I.next;I.next=null,x===null?f=$:x.next=$,x=I;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,R=ut.lastBaseUpdate,R!==x&&(R===null?ut.firstBaseUpdate=$:R.next=$,ut.lastBaseUpdate=I))}if(f!==null){var St=c.baseState;x=0,ut=$=I=null,R=f;do{var K=R.lane&-536870913,lt=K!==R.lane;if(lt?(we&K)===K:(r&K)===K){K!==0&&K===Bs&&(Bf=!0),ut!==null&&(ut=ut.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Ot=e,jt=R;K=n;var pe=a;switch(jt.tag){case 1:if(Ot=jt.payload,typeof Ot=="function"){St=Ot.call(pe,St,K);break t}St=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=jt.payload,K=typeof Ot=="function"?Ot.call(pe,St,K):Ot,K==null)break t;St=P({},St,K);break t;case 2:$a=!0}}K=R.callback,K!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[K]:lt.push(K))}else lt={lane:K,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ut===null?($=ut=lt,I=St):ut=ut.next=lt,x|=K;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ut===null&&(I=St),c.baseState=I,c.firstBaseUpdate=$,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),ls|=x,e.lanes=x,e.memoizedState=St}}function M0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function y0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)M0(a[e],n)}var ns=ye(null),cc=ye(0);function E0(e,n){e=Na,ie(cc,e),ie(ns,n),Na=e|n.baseLanes}function zf(){ie(cc,Na),ie(ns,ns.current)}function Ff(){Na=cc.current,ee(ns),ee(cc)}var Un=ye(null),Fn=null;function is(e){var n=e.alternate;ie(On,On.current&1),ie(Un,e),Fn===null&&(n===null||ns.current!==null||n.memoizedState!==null)&&(Fn=e)}function Hf(e){ie(On,On.current),ie(Un,e),Fn===null&&(Fn=e)}function T0(e){e.tag===22?(ie(On,On.current),ie(Un,e),Fn===null&&(Fn=e)):as()}function as(){ie(On,On.current),ie(Un,Un.current)}function ui(e){ee(Un),Fn===e&&(Fn=null),ee(On)}var On=ye(0);function ko(e,n){ie(Un,Un.current),ie(On,n)}function Gf(e){ee(On),ee(Un),Fn===e&&(Fn=null)}function uc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||cd(a)||ud(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ra=0,de=null,Ke=null,_n=null,fc=!1,Ar=!1,Vs=!1,hc=0,Xo=0,Rr=null,MM=0;function un(){throw Error(s(321))}function Vf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ci(e[a],n[a]))return!1;return!0}function kf(e,n,a,r,c,f){return Ra=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_t.H=e===null||e.memoizedState===null?og:lg,Vs=!1,f=a(r,c),Vs=!1,Ar&&(f=A0(n,a,r,c)),b0(e),f}function b0(e){_t.H=xc;var n=Ke!==null&&Ke.next!==null;if(Ra=0,_n=Ke=de=null,fc=!1,Xo=0,Rr=null,n)throw Error(s(300));e===null||vn||(e=e.dependencies,e!==null&&nc(e)&&(vn=!0))}function A0(e,n,a,r){de=e;var c=0;do{if(Ar&&(Rr=null),Xo=0,Ar=!1,25<=c)throw Error(s(301));if(c+=1,_n=Ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}_t.H=CM,f=n(a,r)}while(Ar);return f}function yM(){var e=_t.H,n=e.useState()[0];return n=typeof n.then=="function"?Wo(n):n,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(de.flags|=1024),n}function Xf(){var e=hc!==0;return hc=0,e}function Wf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qf(e){if(fc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}fc=!1}Ra=0,_n=Ke=de=null,Ar=!1,Xo=hc=0,Rr=null}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?de.memoizedState=_n=e:_n=_n.next=e,_n}function dn(){if(Ke===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var n=_n===null?de.memoizedState:_n.next;if(n!==null)_n=n,Ke=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},_n===null?de.memoizedState=_n=e:_n=_n.next=e}return _n}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(e){var n=Xo;return Xo+=1,Rr===null&&(Rr=[]),e=g0(Rr,e,n),n=de,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,_t.H=n===null||n.memoizedState===null?og:lg),e}function pc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wo(e);if(e.$$typeof===mt)return;if(e.$$typeof===tt)return Ln(e)}throw Error(s(438,String(e)))}function Yf(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=de.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dc(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Kt;return n.index++,a}function wa(e,n){return typeof n=="function"?n(e):n}function mc(e){var n=dn();return Zf(n,Ke,e)}function Zf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var R=x=null,I=null,$=n,ut=!1;do{var St=$.lane&-536870913;if(St!==$.lane?(we&St)===St:(Ra&St)===St){var K=$.revertLane;if(K===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),St===Bs&&(ut=!0);else if((Ra&K)===K){$=$.next,K===Bs&&(ut=!0);continue}else St={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(R=I=St,x=f):I=I.next=St,de.lanes|=K,ls|=K;St=$.action,Vs&&a(f,St),f=$.hasEagerState?$.eagerState:a(f,St)}else K={lane:St,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(R=I=K,x=f):I=I.next=K,de.lanes|=St,ls|=St;$=$.next}while($!==null&&$!==n);if(I===null?x=f:I.next=R,!ci(f,e.memoizedState)&&(vn=!0,ut&&(a=Er,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Kf(e){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);ci(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function R0(e,n,a){var r=de,c=dn(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ci((Ke||c).memoizedState,a);if(x&&(c.memoizedState=a,vn=!0),c=c.queue,Jf(D0.bind(null,r,c,e),[e]),e=c.getSnapshot!==n||x||_n!==null&&(_n.memoizedState.tag&1)!==0,wr(e?9:8,{destroy:void 0},C0.bind(null,r,c,a,n),null),e){if(r.flags|=2048,Qe===null)throw Error(s(349));f||(Ra&127)!==0||w0(r,n,a)}return a}function w0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=dc(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function C0(e,n,a,r){n.value=a,n.getSnapshot=r,N0(n)&&L0(e)}function D0(e,n,a){return a(function(){N0(n)&&L0(e)})}function N0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ci(e,a)}catch{return!0}}function L0(e){var n=Ns(e,2);n!==null&&ii(n,e,2)}function Qf(e){var n=qn();if(typeof e=="function"){var a=e;if(e=a(),Vs){Ne(!0);try{a()}finally{Ne(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},n}function U0(e,n,a,r){return e.baseState=a,Zf(e,Ke,typeof r=="function"?r:wa)}function EM(e,n,a,r,c){if(vc(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};_t.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,O0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function O0(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=_t.T,x={};x.types=f!==null?f.types:null,_t.T=x;try{var R=a(c,r),I=_t.S;I!==null&&I(x,R),P0(e,n,R)}catch($){jf(e,n,$)}finally{f!==null&&x.types!==null&&(f.types=x.types),_t.T=f}}else try{f=a(c,r),P0(e,n,f)}catch($){jf(e,n,$)}}function P0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){I0(e,n,r)},function(r){return jf(e,n,r)}):I0(e,n,a)}function I0(e,n,a){n.status="fulfilled",n.value=a,B0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,O0(e,a)))}function jf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,B0(n),n=n.next;while(n!==r)}e.action=null}function B0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function z0(e,n){return n}function F0(e,n){if(Se){var a=Qe.formState;if(a!==null){t:{var r=de;if(Se){if(Je){e:{for(var c=Je,f=Ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Je=Ci(c.nextSibling),r=c.data==="F!";break t}}Qa(r)}r=!1}r&&(n=a[0])}}return a=qn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:z0,lastRenderedState:n},a.queue=r,a=ag.bind(null,de,r),r.dispatch=a,r=Qf(!1),f=ih.bind(null,de,!1,r.queue),r=qn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=EM.bind(null,de,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function H0(e){var n=dn();return G0(n,Ke,e)}function G0(e,n,a){if(n=Zf(e,n,z0)[0],e=mc(wa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Wo(n)}catch(x){throw x===Tr?sc:x}else r=n;n=dn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(de.flags|=2048,wr(9,{destroy:void 0},TM.bind(null,c,a),null)),[r,f,e]}function TM(e,n){e.action=n}function V0(e){var n=dn(),a=Ke;if(a!==null)return G0(n,a,e);dn(),n=n.memoizedState,a=dn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function wr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=de.updateQueue,n===null&&(n=dc(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function k0(){return dn().memoizedState}function gc(e,n,a,r){var c=qn();de.flags|=e,c.memoizedState=wr(1|n,{destroy:void 0},a,r===void 0?null:r)}function _c(e,n,a,r){var c=dn();r=r===void 0?null:r;var f=c.memoizedState.inst;Ke!==null&&r!==null&&Vf(r,Ke.memoizedState.deps)?c.memoizedState=wr(n,f,a,r):(de.flags|=e,c.memoizedState=wr(1|n,f,a,r))}function X0(e,n){gc(8390656,8,e,n)}function Jf(e,n){_c(2048,8,e,n)}function bM(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=dc(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function W0(e){var n=dn().memoizedState;return bM({ref:n,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function q0(e,n){return _c(4,2,e,n)}function Y0(e,n){return _c(4,4,e,n)}function Z0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function K0(e,n,a){a=a!=null?a.concat([e]):null,_c(4,4,Z0.bind(null,n,e),a)}function $f(){}function Q0(e,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Vf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function j0(e,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Vf(n,r[1]))return r[0];if(r=e(),Vs){Ne(!0);try{e()}finally{Ne(!1)}}return a.memoizedState=[r,n],r}function th(e,n,a){return a===void 0||(Ra&1073741824)!==0&&(we&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=o_(),de.lanes|=e,ls|=e,a)}function J0(e,n,a,r){return ci(a,n)?a:ns.current!==null?(e=th(e,a,r),ci(e,n)||(vn=!0),e):(Ra&106)===0||(Ra&1073741824)!==0&&(we&261930)===0?(vn=!0,e.memoizedState=a):(e=o_(),de.lanes|=e,ls|=e,n)}function $0(e,n,a,r,c){var f=wt.p;wt.p=f!==0&&8>f?f:8;var x=_t.T,R={};R.types=x!==null?x.types:null,_t.T=R,ih(e,!1,n,a);try{var I=c(),$=_t.S;if($!==null&&$(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ut=SM(I,r);qo(e,n,ut,pi(e))}else qo(e,n,r,pi(e))}catch(St){qo(e,n,{then:function(){},status:"rejected",reason:St},pi())}finally{wt.p=f,x!==null&&R.types!==null&&(x.types=R.types),_t.T=x}}function AM(){}function eh(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=tg(e).queue;$0(e,c,n,Ve,a===null?AM:function(){return eg(e),a(r)})}function tg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Ve,baseState:Ve,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:Ve},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function eg(e){var n=tg(e);n.next===null&&(n=e.alternate.memoizedState),qo(e,n.next.queue,{},pi())}function nh(){return Ln(Yr)}function ng(){return dn().memoizedState}function ig(){return dn().memoizedState}function RM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();e=ts(a);var r=es(n,e,a);r!==null&&(ii(r,n,a),Ho(r,n,a)),n={cache:Df()},e.payload=n;return}n=n.return}}function wM(e,n,a){var r=pi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vc(e)?sg(n,a):(a=Mf(e,n,a,r),a!==null&&(ii(a,e,r),rg(a,n,r)))}function ag(e,n,a){var r=pi();qo(e,n,a,r)}function qo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vc(e))sg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,R=f(x,a);if(c.hasEagerState=!0,c.eagerState=R,ci(R,x))return Kl(e,n,c,0),Qe===null&&Zl(),!1}catch{}finally{}if(a=Mf(e,n,c,r),a!==null)return ii(a,e,r),rg(a,n,r),!0}return!1}function ih(e,n,a,r){if(r={lane:2,revertLane:Yh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vc(e)){if(n)throw Error(s(479))}else n=Mf(e,a,r,2),n!==null&&ii(n,e,2)}function vc(e){var n=e.alternate;return e===de||n!==null&&n===de}function sg(e,n){Ar=fc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function rg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Mo(e,a)}}var xc={readContext:Ln,use:pc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},og={readContext:Ln,use:pc,useCallback:function(e,n){return qn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:X0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,gc(4194308,4,Z0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return gc(4194308,4,e,n)},useInsertionEffect:function(e,n){gc(4,2,e,n)},useMemo:function(e,n){var a=qn();n=n===void 0?null:n;var r=e();if(Vs){Ne(!0);try{e()}finally{Ne(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=qn();if(a!==void 0){var c=a(n);if(Vs){Ne(!0);try{a(n)}finally{Ne(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=wM.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var n=qn();return e={current:e},n.memoizedState=e},useState:function(e){e=Qf(e);var n=e.queue,a=ag.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$f,useDeferredValue:function(e,n){var a=qn();return th(a,e,n)},useTransition:function(){var e=Qf(!1);return e=$0.bind(null,de,e.queue,!0,!1),qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=de,c=qn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(we&127)!==0||w0(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,X0(D0.bind(null,r,f,e),[e]),r.flags|=2048,wr(9,{destroy:void 0},C0.bind(null,r,f,a,n),null),a},useId:function(){var e=qn(),n=Qe.identifierPrefix;if(Se){var a=$i,r=Ji;a=(r&~(1<<32-ue(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=MM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:nh,useFormState:F0,useActionState:F0,useOptimistic:function(e){var n=qn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ih.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yf,useCacheRefresh:function(){return qn().memoizedState=RM.bind(null,de)},useEffectEvent:function(e){var n=qn(),a={impl:e};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},lg={readContext:Ln,use:pc,useCallback:Q0,useContext:Ln,useEffect:Jf,useImperativeHandle:K0,useInsertionEffect:q0,useLayoutEffect:Y0,useMemo:j0,useReducer:mc,useRef:k0,useState:function(){return mc(wa)},useDebugValue:$f,useDeferredValue:function(e,n){var a=dn();return J0(a,Ke.memoizedState,e,n)},useTransition:function(){var e=mc(wa)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Wo(e),n]},useSyncExternalStore:R0,useId:ng,useHostTransitionStatus:nh,useFormState:H0,useActionState:H0,useOptimistic:function(e,n){var a=dn();return U0(a,Ke,e,n)},useMemoCache:Yf,useCacheRefresh:ig,useEffectEvent:W0},CM={readContext:Ln,use:pc,useCallback:Q0,useContext:Ln,useEffect:Jf,useImperativeHandle:K0,useInsertionEffect:q0,useLayoutEffect:Y0,useMemo:j0,useReducer:Kf,useRef:k0,useState:function(){return Kf(wa)},useDebugValue:$f,useDeferredValue:function(e,n){var a=dn();return Ke===null?th(a,e,n):J0(a,Ke.memoizedState,e,n)},useTransition:function(){var e=Kf(wa)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Wo(e),n]},useSyncExternalStore:R0,useId:ng,useHostTransitionStatus:nh,useFormState:V0,useActionState:V0,useOptimistic:function(e,n){var a=dn();return Ke!==null?U0(a,Ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yf,useCacheRefresh:ig,useEffectEvent:W0};function ah(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sh={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=pi(),c=ts(r);c.payload=n,a!=null&&(c.callback=a),n=es(e,c,r),n!==null&&(ii(n,e,r),Ho(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=pi(),c=ts(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=es(e,c,r),n!==null&&(ii(n,e,r),Ho(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=pi(),r=ts(a);r.tag=2,n!=null&&(r.callback=n),n=es(e,r,a),n!==null&&(ii(n,e,a),Ho(n,e,a))}};function cg(e,n,a,r,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!Lo(a,r)||!Lo(c,f):!0}function ug(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&sh.enqueueReplaceState(n,n.state,null)}function ks(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function fg(e){Yl(e)}function hg(e){console.error(e)}function dg(e){Yl(e)}function Sc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function pg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function rh(e,n,a){return a=ts(a),a.tag=3,a.payload={element:null},a.callback=function(){Sc(e,n)},a}function mg(e){return e=ts(e),e.tag=3,e}function gg(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){pg(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){pg(n,a,r),typeof c!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function DM(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ps(n,a,c,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Fn===null?Gc():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===rc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Xh(e,r,c)),!1;case 22:return a.flags|=65536,r===rc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Xh(e,r,c)),!1}throw Error(s(435,a.tag))}return Xh(e,r,c),Gc(),!1}if(Se)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Af&&(e=Error(s(422),{cause:r}),Po(Ti(e,a)))):(r!==Af&&(n=Error(s(423),{cause:r}),Po(Ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Ti(r,a),c=rh(e.stateNode,r,c),If(e,c),fn!==4&&(fn=2)),!1;var f=Error(s(520),{cause:r});if(f=Ti(f,a),tl===null?tl=[f]:tl.push(f),fn!==4&&(fn=2),n===null)return!0;r=Ti(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=rh(a.stateNode,r,e),If(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(cs===null||!cs.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=mg(c),gg(c,e,a,r),If(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var oh=Error(s(461)),vn=!1;function yn(e,n,a,r){n.child=e===null?S0(n,null,a,r):Gs(n,e.child,a,r)}function _g(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var R in r)R!=="ref"&&(x[R]=r[R])}else x=r;return Is(n),r=kf(e,n,a,x,f,c),R=Xf(),e!==null&&!vn?(Wf(e,n,c),Ca(e,n,c)):(Se&&R&&$l(n),n.flags|=1,yn(e,n,r,c),n.child)}function vg(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!yf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,xg(e,n,f,r,c)):(e=jl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!mh(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Lo,a(x,r)&&e.ref===n.ref)return Ca(e,n,c)}return n.flags|=1,e=Ea(f,r),e.ref=n.ref,e.return=n,n.child=e}function xg(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Lo(f,r)&&e.ref===n.ref)if(vn=!1,n.pendingProps=r=f,mh(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Ca(e,n,c)}return lh(e,n,a,r,c)}function Sg(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Mg(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ac(n,f!==null?f.cachePool:null),f!==null?E0(n,f):zf(),T0(n);else return r=n.lanes=536870912,Mg(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ac(n,f.cachePool),E0(n,f),as(),n.memoizedState=null):(e!==null&&ac(n,null),zf(),as());return yn(e,n,c,a),n.child}function Yo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Mg(e,n,a,r,c){var f=Lf();return f=f===null?null:{parent:gn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ac(n,null),zf(),T0(n),e!==null&&Ps(e,n,r,!0),n.childLanes=c,null}function Mc(e,n){return n=yc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function yg(e,n,a){return Gs(n,e.child,null,a),e=Mc(n,n.pendingProps),e.flags|=2,ui(n),n.memoizedState=null,e}function NM(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Se){if(r.mode==="hidden")return e=Mc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Yo(null,e);if(Hf(n),(e=Je)?(e=Z_(e,Ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Za!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},a=s0(e),a.return=n,n.child=a,bn=n,Je=null)):e=null,e===null)throw Qa(n);return n.lanes=536870912,null}return Mc(n,r)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Hf(n),c)if(n.flags&256)n.flags&=-257,n=yg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||Ps(e,n,a,!1),c=(a&e.childLanes)!==0,vn||c){if(ns.current===null){if(r=Qe,r!==null&&(x=yo(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Ns(e,x),ii(r,e,x),oh;Gc()}n=yg(e,n,a)}else e=f.treeContext,Je=Ci(x.nextSibling),bn=n,Se=!0,Ka=null,Ri=!1,e!==null&&l0(n,e),n=Mc(n,r),n.flags|=134221824;return n}return e=Ea(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Cr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function lh(e,n,a,r,c){return Is(n),a=kf(e,n,a,r,void 0,c),r=Xf(),e!==null&&!vn?(Wf(e,n,c),Ca(e,n,c)):(Se&&r&&$l(n),n.flags|=1,yn(e,n,a,c),n.child)}function Eg(e,n,a,r,c,f){return Is(n),n.updateQueue=null,a=A0(n,r,a,c),b0(e),r=Xf(),e!==null&&!vn?(Wf(e,n,f),Ca(e,n,f)):(Se&&r&&$l(n),n.flags|=1,yn(e,n,a,f),n.child)}function Tg(e,n,a,r,c){if(Is(n),n.stateNode===null){var f=xr,x=a.contextType;typeof x=="object"&&x!==null&&(f=Ln(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Of(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Ln(x):xr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(ah(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&sh.enqueueReplaceState(f,f.state,null),Vo(n,r,f,c),Go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,I=ks(a,R);f.props=I;var $=f.context,ut=a.contextType;x=xr,typeof ut=="object"&&ut!==null&&(x=Ln(ut));var St=a.getDerivedStateFromProps;ut=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||$!==x)&&ug(n,f,r,x),$a=!1;var K=n.memoizedState;f.state=K,Vo(n,r,f,c),Go(),$=n.memoizedState,R||K!==$||$a?(typeof St=="function"&&(ah(n,a,St,r),$=n.memoizedState),(I=$a||cg(n,a,I,r,K,$,x))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=x,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Pf(e,n),x=n.memoizedProps,ut=ks(a,x),f.props=ut,St=n.pendingProps,K=f.context,$=a.contextType,I=xr,typeof $=="object"&&$!==null&&(I=Ln($)),R=a.getDerivedStateFromProps,($=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==St||K!==I)&&ug(n,f,r,I),$a=!1,K=n.memoizedState,f.state=K,Vo(n,r,f,c),Go();var lt=n.memoizedState;x!==St||K!==lt||$a||e!==null&&e.dependencies!==null&&nc(e.dependencies)?(typeof R=="function"&&(ah(n,a,R,r),lt=n.memoizedState),(ut=$a||cg(n,a,ut,r,K,lt,I)||e!==null&&e.dependencies!==null&&nc(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=I,r=ut):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Cr(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Gs(n,e.child,null,c),n.child=Gs(n,null,a,c)):yn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ca(e,n,c),e}function bg(e,n,a,r){return Us(),n.flags|=256,yn(e,n,a,r),n.child}var ch={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uh(e){return{baseLanes:e,cachePool:p0()}}function fh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function Ag(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(c?is(n):as(),(e=Je)?(e=Z_(e,Ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Za!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},a=s0(e),a.return=n,n.child=a,bn=n,Je=null)):e=null,e===null)throw Qa(n);return ud(e)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(as(),c=n.mode,f=yc({mode:"hidden",children:f},c),r=Ls(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=uh(a),r.childLanes=fh(e,x,a),n.memoizedState=ch,Yo(null,r)):(is(n),hh(n,f))}var R=e.memoizedState;if(R!==null){var I=R.dehydrated;if(I!==null)return LM(e,n,f,x,r,I,R,a)}return c?(as(),c=r.fallback,f=n.mode,R=e.child,I=R.sibling,r=Ea(R,{mode:"hidden",children:r.children}),r.subtreeFlags=R.subtreeFlags&1206910976,I!==null?c=Ea(I,c):(c=Ls(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Yo(null,r),r=n.child,c=e.child.memoizedState,c===null?c=uh(a):(f=c.cachePool,f!==null?(R=gn._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=p0(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=fh(e,x,a),n.memoizedState=ch,Yo(e.child,r)):(is(n),a=e.child,e=a.sibling,a=Ea(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function hh(e,n){return n=yc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function yc(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function Ec(e,n,a){return Gs(n,e.child,null,a),e=hh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function LM(e,n,a,r,c,f,x,R){if(a)return n.flags&256?(is(n),n.flags&=-257,Ec(e,n,R)):n.memoizedState!==null?(as(),n.child=e.child,n.flags|=128,null):(as(),f=c.fallback,x=n.mode,c=yc({mode:"visible",children:c.children},x),f=Ls(f,x,R,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Gs(n,e.child,null,R),c=n.child,c.memoizedState=uh(R),c.childLanes=fh(e,r,R),n.memoizedState=ch,Yo(null,c));if(is(n),ud(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Po({value:c,source:null,stack:null})),Ec(e,n,R)}if(vn||Ps(e,n,R,!1),r=(R&e.childLanes)!==0,vn||r){if(ns.current!==null)return Ec(e,n,R);if(r=Qe,r!==null&&(c=yo(r,R),c!==0&&c!==x.retryLane))throw x.retryLane=c,Ns(e,c),ii(r,e,c),oh;return cd(f)||Gc(),Ec(e,n,R)}return cd(f)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,Je=Ci(f.nextSibling),bn=n,Se=!0,Ka=null,Ri=!1,e!==null&&l0(n,e),n=hh(n,c.children),n.flags|=134221824,n)}function Rg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ec(e.return,n,a)}function wg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&uc(a)===null&&(n=e),e=e.sibling}return n}function Tc(e,n,a,r,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function dh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function ph(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var x=On.current;if(n.flags&128)return ko(n,x),null;var R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,ko(n,x),c==="backwards"&&e!==null?(dh(e),yn(e,n,r,a),dh(e)):yn(e,n,r,a),r=Se?Oo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rg(e,a,n);else if(e.tag===19)Rg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=wg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,dh(n)),Tc(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&uc(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Tc(n,!0,a,null,f,r);break;case"together":Tc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=wg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Tc(n,!1,c,a,f,r)}return n.child}function Cg(e,n,a){var r=n.pendingProps;return ja(n,n.type,r.value),yn(e,n,r.children,a),n.child}function Ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ls|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ps(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function mh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&nc(e)))}function UM(e,n,a){switch(n.tag){case 3:q(n,n.stateNode.containerInfo),ja(n,gn,e.memoizedState.cache),Us();break;case 27:case 5:Pe(n);break;case 4:q(n,n.stateNode.containerInfo);break;case 10:ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return is(n),n.flags|=128,null;r=Ps(e,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Ag(e,n,a):(is(n),e=Ca(e,n,a),e!==null?e.sibling:null)}is(n);break;case 19:if(n.flags&128)return ph(e,n,a);if(c=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Ps(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return ph(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ko(n,On.current),r)break;return null;case 22:return n.lanes=0,Sg(e,n,a,n.pendingProps);case 24:ja(n,gn,e.memoizedState.cache)}return Ca(e,n,a)}function Dg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!mh(e,a)&&(n.flags&128)===0)return vn=!1,UM(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Se&&(n.flags&1048576)!==0&&o0(n,Oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Fs(n.elementType),n.type=e,typeof e=="function")yf(e)?(r=ks(e,r),n.tag=1,n=Tg(null,n,e,r,a)):(n.tag=0,n=lh(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===X){n.tag=11,n=_g(null,n,e,r,a);break t}else if(c===at){n.tag=14,n=vg(null,n,e,r,a);break t}else if(c===tt){n.tag=10,n.type=e,n=Cg(null,n,a);break t}}throw n=bt(e)||e,Error(s(306,n,""))}}return n;case 0:return lh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=ks(r,n.pendingProps),Tg(e,n,r,c,a);case 3:t:{if(q(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Pf(e,n),Vo(n,r,null,a);var x=n.memoizedState;if(r=x.cache,ja(n,gn,r),r!==f.cache&&Cf(n,[gn],a,!0),Go(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bg(e,n,r,a);break t}else if(r!==c){c=Ti(Error(s(424)),n),Po(c),n=bg(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=Ci(e.firstChild),bn=n,Se=!0,Ka=null,Ri=!0,a=S0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Us(),r===c){n=Ca(e,n,a);break t}yn(e,n,r,a)}n=n.child}return n;case 26:return Cr(e,n),e===null?(a=ev(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=O_(n.type,n.pendingProps,Ie.current,n)):n.memoizedState=ev(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pe(n),e===null&&Se&&(r=n.stateNode=j_(n.type,n.pendingProps,Ie.current),bn=n,Ri=!0,c=Je,hs(n.type)?(fd=c,Je=Ci(r.firstChild)):Je=c),yn(e,n,n.pendingProps.children,a),Cr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((c=r=Je)&&(r=Ry(r,n.type,n.pendingProps,Ri),r!==null?(n.stateNode=r,bn=n,Je=Ci(r.firstChild),Ri=!1,c=!0):c=!1),c||Qa(n)),Pe(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,r=f.children,nd(c,f)?r=null:x!==null&&nd(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=kf(e,n,yM,null,null,a),Yr._currentValue=c),Cr(e,n),yn(e,n,r,a),n.child;case 6:return e===null&&Se&&((e=a=Je)&&(a=wy(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,bn=n,Je=null,e=!0):e=!1),e||Qa(n)),null;case 13:return Ag(e,n,a);case 4:return q(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Gs(n,null,r,a):yn(e,n,r,a),n.child;case 11:return _g(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Cr(e,n),yn(e,n,r,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return Cg(e,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Is(n),c=Ln(c),r=r(c),n.flags|=1,yn(e,n,r,a),n.child;case 14:return vg(e,n,n.type,n.pendingProps,a);case 15:return xg(e,n,n.type,n.pendingProps,a);case 19:return ph(e,n,a);case 31:return NM(e,n,a);case 22:return Sg(e,n,a,n.pendingProps);case 24:return Is(n),r=Ln(gn),e===null?(c=Lf(),c===null&&(c=Qe,f=Df(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Of(n),ja(n,gn,c)):((e.lanes&a)!==0&&(Pf(e,n),Vo(n,null,null,a),Go()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ja(n,gn,r)):(r=f.cache,ja(n,gn,r),r!==c.cache&&Cf(n,[gn],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Se&&$l(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Cr(e,n),yn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Da(e){e.flags|=4}function gh(e,n,a,r,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?sv(n,r):sv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(f_())e.flags|=8192;else throw Hs=rc,Uf}else e.flags&=-16777217}function Ng(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rv(n))if(f_())e.flags|=8192;else throw Hs=rc,Uf}function bc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?So():536870912,e.lanes|=n,Or|=n)}function Zo(e,n){if(!Se)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function OM(e,n,a){var r=n.pendingProps;switch(bf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Aa(gn),nn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yr(n)?Da(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Rf())),$e(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Da(n),f!==null?($e(n),Ng(n,f)):($e(n),gh(n,c,null,r,a))):f?f!==e.memoizedState?(Da(n),$e(n),Ng(n,f)):($e(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Da(n),$e(n),gh(n,c,e,r,a)),null;case 27:if(O(n),a=Ie.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Da(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}e=ke.current,yr(n)?c0(n):(e=j_(c,r,a),n.stateNode=e,Da(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(O(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Da(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}if(f=ke.current,yr(n))c0(n);else{var x=sl(Ie.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(c,{is:r.is}):x.createElement(c)}}f[A]=n,f[H]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(In(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Da(n)}}return $e(n),n.subtreeFlags&=-33554433,gh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Da(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Ie.current,yr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=bn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[A]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||D_(e.nodeValue,a)),e||Qa(n,!0)}else e=sl(e).createTextNode(r),e[A]=n,n.stateNode=e}return $e(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=yr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[A]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),e=!1}else a=Rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=yr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[A]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),c=!1}else c=Rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),bc(n,n.updateQueue),$e(n),null);case 4:return nn(),e===null&&jh(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return Aa(n.type),$e(n),null;case 19:if(Gf(n),r=n.memoizedState,r===null)return $e(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Zo(r,!1);else{if(fn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=uc(e),f!==null){for(n.flags|=128,Zo(r,!1),e=f.updateQueue,n.updateQueue=e,bc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)a0(a,e),a=a.sibling;return ko(n,On.current&1|2),Se&&Ta(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&kt()>Bc&&(n.flags|=128,c=!0,Zo(r,!1),n.lanes=4194304)}else{if(!c)if(e=uc(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,bc(n,e),Zo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!Se)return $e(n),null}else 2*kt()-r.renderingStartTime>Bc&&a!==536870912&&(n.flags|=128,c=!0,Zo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){e=r.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=kt(),e.sibling=null,f=On.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Se?ko(n,f):(a=f,ie(Un,n),ie(On,a),Fn===null&&(Fn=n)),Se&&Ta(n,r.treeForkCount),e}return $e(n),null;case 22:case 23:return ui(n),Ff(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&bc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ee(zs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Aa(gn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(s(156,n.tag))}function PM(e,n){switch(bf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Aa(gn),nn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return O(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(s(340));Us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ui(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Gf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return nn(),null;case 10:return Aa(n.type),null;case 22:case 23:return ui(n),Ff(),e!==null&&ee(zs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Aa(gn),null;case 25:return null;default:return null}}function Lg(e,n){switch(bf(n),n.tag){case 3:Aa(gn),nn();break;case 26:case 27:case 5:O(n);break;case 4:nn();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:Gf(n);break;case 10:Aa(n.type);break;case 22:case 23:ui(n),Ff(),e!==null&&ee(zs);break;case 24:Aa(gn)}}function Ko(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==c)}}catch(R){We(n,n.return,R)}}function ss(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var x=r.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,c=n;var I=a,$=R;try{$()}catch(ut){We(c,I,ut)}}}r=r.next}while(r!==f)}}catch(ut){We(n,n.return,ut)}}function Ug(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{y0(n,a)}catch(r){We(e,e.return,r)}}}function Og(e,n,a){a.props=ks(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){We(e,n,r)}}function ta(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var c=e.stateNode,f=Ma(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=G_(f)),r=c.ref;break;case 7:if(e.stateNode===null){var x=new mi(e);g(e.child,!1,by,x,void 0,void 0),e.stateNode=x}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(R){We(e,n,R)}}function Pn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){We(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){We(e,n,c)}else a.current=null}function Ac(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Y_(e.stateNode,n[a])}function Pg(e){for(var n=e.return;n!==null&&(vh(n)&&Y_(e.stateNode,n.stateNode),!_h(n));)n=n.return}function Qo(e){for(var n=e.return;n!==null&&(vh(n)&&Ay(e.stateNode,n.stateNode),!_h(n));)n=n.return}function _h(e){return e.tag===5||e.tag===3||e.tag===27}function vh(e){return e&&e.tag===7&&e.stateNode!==null}function xh(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){We(e,e.return,c)}}function Sh(e,n,a){try{var r=e.stateNode;oy(r,e.type,a,n),r[H]=n}catch(c){We(e,e.return,c)}}function Ig(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hs(e.type)||e.tag===4}function Mh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yh(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji)),Ac(e,r),xe=!0;else if(c!==4&&(c===27&&(Ac(e,r),r=null,hs(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(yh(e,n,a,r),e=e.sibling;e!==null;)yh(e,n,a,r),e=e.sibling}function Rc(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Ac(e,r),xe=!0;else if(c!==4&&(c===27&&(Ac(e,r),r=null,hs(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Rc(e,n,a,r),e=e.sibling;e!==null;)Rc(e,n,a,r),e=e.sibling}function Bg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);In(n,r,a),n[A]=e,n[H]=a}catch(f){We(e,e.return,f)}}var wc=!1,fi=null;function zg(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(wc=!0)}var ea=null;function Fg(){var e=ea;return ea=null,e}var ti=0;function Dr(e,n,a,r,c){return ti=0,Hg(e.child,n,a,r,c)}function Hg(e,n,a,r,c){for(var f=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(r!==null){var R=sd(x);r.push(R),R.view&&(f=!0)}else f||sd(x).view&&(f=!0);wc=!0,F_(x,ti===0?n:n+"_"+ti,a),ti++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||Hg(e.child,n,a,r,c)&&(f=!0));e=e.sibling}return f}function na(e,n){for(;e!==null;)e.tag===5?H_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||na(e.child,n)),e=e.sibling}function Cc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Cc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ya(n.default,n.share),n!=="none"&&(Dr(e,a,n,null,!1)||na(e.child,!1))}e=e.sibling}}function Eh(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,c=Ma(r,a),f=ya(r.default,a.paired?r.share:r.enter);f!=="none"?Dr(e,c,f,null,!1)?(Cc(e),a.paired||n||zr(e,r.onEnter)):na(e.child,!1):Cc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Eh(e,n),e=e.sibling;else Cc(e)}function Th(e){if(fi!==null&&fi.size!==0){var n=fi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=ya(a.default,a.share);if(f!=="none"&&(Dr(e,r,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,zr(e,a.onShare)):na(e.child,!1)),n.delete(r),n.size===0)break}}}Th(e)}e=e.sibling}}}function bh(e){if(e.tag===30){var n=e.memoizedProps,a=Ma(n,e.stateNode),r=fi!==null?fi.get(a):void 0,c=ya(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Dr(e,a,c,null,!1)?r!==void 0?(c=e.stateNode,r.paired=c,c.paired=r,fi.delete(a),zr(e,n.onShare)):zr(e,n.onExit):na(e.child,!1)),fi!==null&&Th(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)bh(e),e=e.sibling;else fi!==null&&Th(e)}function Gg(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=Ma(n,e.stateNode);n=ya(n.default,n.update),e.flags&=-5,n!=="none"&&Dr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Gg(e);e=e.sibling}}function Ah(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,na(e.child,!1))}Ah(e)}e=e.sibling}}function Dc(e){if(e.tag===30)e.stateNode.paired=null,na(e.child,!1),Ah(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Dc(e),e=e.sibling;else Ah(e)}function Vg(e){for(e=e.child;e!==null;)e.tag===30?na(e.child,!1):(e.subtreeFlags&33554432)!==0&&Vg(e),e=e.sibling}function Rh(e,n,a,r,c,f,x){for(var R=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(f!==null&&ti<f.length){var $=f[ti],ut=sd(I);($.view||ut.view)&&(R=!0);var St;if(St=(e.flags&4)===0)if(ut.clip)St=!0;else{St=$.rect;var K=ut.rect;St=St.y!==K.y||St.x!==K.x||St.height!==K.height||St.width!==K.width}St&&(e.flags|=4),ut.abs?ut=!$.abs:($=$.rect,ut=ut.rect,ut=$.height!==ut.height||$.width!==ut.width),ut&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&F_(I,ti===0?a:a+"_"+ti,c),R&&(e.flags&4)!==0||(ea===null&&(ea=[]),ea.push(I,ti===0?r:r+"_"+ti,n.memoizedProps)),ti++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:Rh(e,n.child,a,r,c,f,x)&&(R=!0));n=n.sibling}return R}function kg(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,c=Ma(a,r),f=ya(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,r=e;var R=e.child;ti=0,c=Rh(r,R,c,c,f,x,!1),(e.flags&4)!==0&&c&&zr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&kg(e);e=e.sibling}}var An=!1,Ge=!1,ia=!1,wh=!1,Xg=typeof WeakSet=="function"?WeakSet:Set,Rn=null,aa=!1,jo=!1,Nc=!1,Ch=!1;function IM(e,n,a){if(e=e.containerInfo,td=Zr,e=Zm(e),mf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{r.nodeType,x.nodeType}catch{r=null;break t}var R=0,I=-1,$=-1,ut=0,St=0,K=e,lt=null;e:for(;;){for(var Ot;K!==r||f!==0&&K.nodeType!==3||(I=R+f),K!==x||c!==0&&K.nodeType!==3||($=R+c),K.nodeType===3&&(R+=K.nodeValue.length),(Ot=K.firstChild)!==null;)lt=K,K=Ot;for(;;){if(K===e)break e;if(lt===r&&++ut===f&&(I=R),lt===x&&++St===c&&($=R),(Ot=K.nextSibling)!==null)break;K=lt,lt=K.parentNode}K=Ot}r=I===-1||$===-1?null:{start:I,end:$}}else r=null}r=r||{start:0,end:0}}else r=null;for(ed={focusedElem:e,selectionRange:r},Zr=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(e=Rn,a&&(r=e.deletions,r!==null))for(f=0;f<r.length;f++)a&&bh(r[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&zg(e),Lc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&bh(r),Lc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&zg(e),Lc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Rn=r):(a&&Gg(e),Lc(a))}}fi=null}function Lc(e){for(;Rn!==null;){var n=Rn,a=e,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var x=ks(n.type,c);a=f.getSnapshotBeforeUpdate(x,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){We(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)ld(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":ld(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=Ma(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=ya(c.default,c.update),c!=="none"&&Dr(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Rn=r;break}Rn=n.return}}function Wg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),r&4&&Ko(5,a);break;case 1:if(sa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){We(a,a.return,x)}else{var c=ks(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){We(a,a.return,x)}}r&64&&Ug(a),r&512&&ta(a,a.return);break;case 3:if(sa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{y0(e,n)}catch(x){We(a,a.return,x)}}break;case 27:n===null&&r&4&&Bg(a);case 26:case 5:sa(e,a),n===null&&r&4&&xh(a),r&512&&ta(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),r&4&&Kg(e,a);break;case 13:sa(e,a),r&4&&Qg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ZM.bind(null,a),Cy(e,a))));break;case 22:if(r=a.memoizedState!==null||An,!r){var f=n!==null&&n.memoizedState!==null||Ge;n=An,c=Ge,An=r,(Ge=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Bi(e,a,r)):sa(e,a),An=n,Ge=c}break;case 30:sa(e,a),r&512&&ta(a,a.return);break;case 7:r&512&&ta(a,a.return);default:sa(e,a)}}function Dh(e,n){for(e=e.child;e!==null;)qg(e,n),e=e.sibling}function qg(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,x=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(I){We(e,e.return,I)}Nh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,xe=!0}catch(I){We(e,e.return,I)}break;case 18:try{var R=e.stateNode;n?z_(R,!0):z_(e.stateNode,!1)}catch(I){We(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&Dh(e,n);break;default:Dh(e,n)}}function Nh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,r=n;switch(a.tag){case 4:qg(a,r);break t;case 22:a.memoizedState===null&&Nh(a,r);break t;default:Nh(a,r)}}e=e.sibling}}function Yg(e){var n=e.alternate;n!==null&&(e.alternate=null,Yg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,ei=!1;function Pi(e,n,a){for(a=a.child;a!==null;)Zg(e,n,a),a=a.sibling}function Zg(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:Ge||Pn(a,n),Pi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Pn(a,n),Qo(a);var r=en,c=ei;hs(a.type)&&(en=a.stateNode,ei=!1),Pi(e,n,a),J_(a.stateNode,a.type,a.memoizedProps),en=r,ei=c;break;case 5:Ge||Pn(a,n),Qo(a);case 6:if(a.tag===6&&Qo(a),r=en,c=ei,en=null,Pi(e,n,a),en=r,ei=c,en!==null)if(ei)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),xe=!0}catch(f){We(a,n,f)}else try{en.removeChild(a.stateNode),xe=!0}catch(f){We(a,n,f)}break;case 18:en!==null&&(ei?(e=en,B_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Kr(e)):B_(en,a.stateNode));break;case 4:r=en,c=ei,en=a.stateNode.containerInfo,ei=!0,Pi(e,n,a),en=r,ei=c;break;case 0:case 11:case 14:case 15:ss(2,a,n),Ge||ss(4,a,n),Pi(e,n,a);break;case 1:Ge||(Pn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Og(a,n,r)),Pi(e,n,a);break;case 21:Pi(e,n,a);break;case 22:Ge=(r=Ge)||a.memoizedState!==null,Pi(e,n,a),Ge=r;break;case 30:Pn(a,n),Pi(e,n,a);break;case 7:Ge||Pn(a,n),Pi(e,n,a);break;default:Pi(e,n,a)}}function Kg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Kr(e)}catch(a){We(n,n.return,a)}}}function Qg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Kr(e)}catch(a){We(n,n.return,a)}}function BM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Xg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Xg),n;default:throw Error(s(435,e.tag))}}function Uc(e,n){var a=BM(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=KM.bind(null,e,r);r.then(c,c)}})}function Yn(e,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],x=e,R=n,I=R;t:for(;I!==null;){switch(I.tag){case 27:if(hs(I.type)){en=I.stateNode,ei=!1;break t}break;case 5:en=I.stateNode,ei=!1;break t;case 3:case 4:en=I.stateNode.containerInfo,ei=!0;break t}I=I.return}if(en===null)throw Error(s(160));Zg(x,R,f),en=null,ei=!1,x=f.alternate,x!==null&&(x.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)jg(n,e,a),n=n.sibling}var Ii=null;function jg(e,n,a){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var x=r[f];x.ref.impl=x.nextImpl}Yn(n,e,a),Zn(e),c&4&&(ss(3,e,e.return),Ko(3,e),ss(5,e,e.return));break;case 1:Yn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),c&64&&An&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ii,Yn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(An)e.stateNode=O_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Ut]||r[A]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),In(r,n,a),r[A]=e,ve(r),n=r;break t;case"link":if(f=av("link","href",c).get(n+(a.href||""))){for(x=0;x<f.length;x++)if(r=f[x],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(x,1);break e}}r=c.createElement(n),In(r,n,a),c.head.appendChild(r);break;case"meta":if(f=av("meta","content",c).get(n+(a.content||""))){for(x=0;x<f.length;x++)if(r=f[x],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(x,1);break e}}r=c.createElement(n),In(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[A]=e,ve(r),n=r}e.stateNode=n}else An||md(f,e.type,e.stateNode);else e.stateNode=iv(f,a,e.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):c.count--,a===null?An||md(f,e.type,e.stateNode):iv(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Sh(e,e.memoizedProps,r.memoizedProps);break;case 27:Yn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),r!==null&&c&4&&Sh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(f=ia,ia=!1,Yn(n,e,a),ia=f,Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),e.flags&32){n=e.stateNode;try{hr(n,""),xe=!0}catch(ut){We(e,e.return,ut)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Sh(e,n,r!==null?r.memoizedProps:n)),c&1024&&(wh=!0);break;case 6:if(Yn(n,e,a),Zn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,xe=!0}catch(ut){We(e,e.return,ut)}}break;case 3:if(xe=!1,Zc=null,f=Ii,Ii=rl(n.containerInfo),Yn(n,e,a),Ii=f,Zn(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Kr(n.containerInfo)}catch(ut){We(e,e.return,ut)}wh&&(wh=!1,Jg(e)),xe=!1;break;case 4:c=ia,ia=An,r=ze(),f=Ii,Ii=rl(e.stateNode.containerInfo),Yn(n,e,a),Zn(e),Ii=f,xe&&jo&&(Nc=!0),xe=r,ia=c;break;case 12:Yn(n,e,a),Zn(e);break;case 31:Yn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Uc(e,n)));break;case 13:Yn(n,e,a),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ic=kt()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Uc(e,n)));break;case 22:f=e.memoizedState!==null,x=r!==null&&r.memoizedState!==null;var R=An,I=Ge,$=ia;An=R||f,ia=$||f,Ge=I||x,Yn(n,e,a),Ge=I,ia=$,An=R,Zn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||x||An||Ge||(n=x||Ge,a=An,r=Ge,An=f||An,Ge=n,rs(e,2),An=a,Ge=r),!f&&ia||Dh(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Uc(e,a))));break;case 19:Yn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Uc(e,n)));break;case 30:c&512&&(Ge||r===null||Pn(r,r.return)),c=ze(),f=jo,x=(a&335544064)===a,R=e.memoizedProps,jo=x&&ya(R.default,R.update)!=="none",Yn(n,e,a),Zn(e),x&&r!==null&&xe&&(e.flags|=4),jo=f,xe=c;break;case 21:break;case 7:c&512&&(Ge||r===null||Pn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Yn(n,e,a),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Ig(r)){a=r;break}r=r.return}r=null;for(var c=e.return;c!==null;){if(vh(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(_h(c))break;c=c.return}var x=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var R=a.stateNode,I=Mh(e);Rc(e,I,R,x);break;case 5:var $=a.stateNode;a.flags&32&&(hr($,""),a.flags&=-33);var ut=Mh(e);Rc(e,ut,$,x);break;case 3:case 4:var St=a.stateNode.containerInfo,K=Mh(e);yh(e,K,St,x);break;default:throw Error(s(161))}}catch(lt){We(e,e.return,lt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Jg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Jg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Zr=!0,n.reset(),Zr=!1),e=e.sibling}}function Nr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)$g(n,e),n=n.sibling;else kg(n)}function $g(e,n){var a=e.alternate;if(a===null)Eh(e,!1);else switch(e.tag){case 3:if(Ch=aa=!1,Fg(),Nr(n,e),!aa&&!Nc){if(e=ea,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var c=e[r+1];H_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ch=!0}ea=null;break;case 5:Nr(n,e);break;case 4:r=aa,aa=!1,Nr(n,e),aa&&(Nc=!0),aa=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Eh(e,!1):Nr(n,e));break;case 30:r=aa,c=Fg(),aa=!1,Nr(n,e),aa&&(e.flags|=4);var f=e.memoizedProps,x=e.stateNode;n=Ma(f,x),x=Ma(a.memoizedProps,x);var R=ya(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,ti=0,n=Rh(e,a,n,x,R,f,!0),ti!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(zr(e,e.memoizedProps.onUpdate),ea=c):c!==null&&(c.push.apply(c,ea),ea=c),aa=(e.flags&32)!==0?!0:r;break;default:Nr(n,e)}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Wg(e,n.alternate,n),n=n.sibling}function rs(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:ss(4,a,a.return),rs(a,r);break;case 1:Pn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Og(a,a.return,c),rs(a,r);break;case 27:(r&2)!==0&&J_(a.stateNode,a.type,a.memoizedProps);case 5:Pn(a,a.return),a.tag!==5&&a.tag!==27||Qo(a),rs(a,r);break;case 6:Qo(a);break;case 26:Pn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Ge||c.parentNode.removeChild(c),rs(a,r);break;case 22:a.memoizedState===null&&rs(a,r);break;case 30:Pn(a,a.return),rs(a,r);break;case 7:Pn(a,a.return);default:rs(a,r)}e=e.sibling}}function Bi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,x=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Bi(c,f,a),Ko(4,f);break;case 1:if(Bi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ut){We(r,r.return,ut)}if(r=f,c=r.updateQueue,c!==null){var I=r.stateNode;try{var $=c.shared.hiddenCallbacks;if($!==null)for(c.shared.hiddenCallbacks=null,c=0;c<$.length;c++)M0($[c],I)}catch(ut){We(r,r.return,ut)}}R&&x&64&&Ug(f),ta(f,f.return);break;case 27:(a&2)!==0&&Bg(f);case 5:f.tag!==5&&f.tag!==27||Pg(f),Bi(c,f,a),R&&r===null&&x&4&&xh(f),ta(f,f.return);break;case 6:Pg(f);break;case 26:I=f.stateNode,f.memoizedState!==null||I===null||An||md(rl(I.ownerDocument),f.type,I),Bi(c,f,a),R&&r===null&&x&4&&xh(f),ta(f,f.return);break;case 12:Bi(c,f,a);break;case 31:Bi(c,f,a),R&&x&4&&Kg(c,f);break;case 13:Bi(c,f,a),R&&x&4&&Qg(c,f);break;case 22:f.memoizedState===null&&Bi(c,f,a),ta(f,f.return);break;case 30:Bi(c,f,a),ta(f,f.return);break;case 7:ta(f,f.return);default:Bi(c,f,a)}n=n.sibling}}function Lh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Io(a))}function Uh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Io(e))}function wi(e,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)t_(e,n,a,r),n=n.sibling;else c&&Vg(n)}function t_(e,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Dc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,r),f&2048&&Ko(9,n);break;case 1:wi(e,n,a,r);break;case 3:wi(e,n,a,r),c&&Ch&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Io(f)));break;case 12:if(f&2048){wi(e,n,a,r),f=n.stateNode;try{var x=n.memoizedProps,R=x.id,I=x.onPostCommit;typeof I=="function"&&I(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch($){We(n,n.return,$)}}else wi(e,n,a,r);break;case 31:wi(e,n,a,r);break;case 13:wi(e,n,a,r);break;case 23:break;case 22:x=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&Dc(R),x._visibility&2?wi(e,n,a,r):Jo(e,n)):(c&&R!==null&&R.memoizedState!==null&&Dc(n),x._visibility&2?wi(e,n,a,r):(x._visibility|=2,Lr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Lh(R,n);break;case 24:wi(e,n,a,r),f&2048&&Uh(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(na(f.child,!0),na(n.child,!0))),wi(e,n,a,r);break;default:wi(e,n,a,r)}}function Lr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,R=a,I=r,$=x.flags;switch(x.tag){case 0:case 11:case 15:Lr(f,x,R,I,c),Ko(8,x);break;case 23:break;case 22:var ut=x.stateNode;x.memoizedState!==null?ut._visibility&2?Lr(f,x,R,I,c):Jo(f,x):(ut._visibility|=2,Lr(f,x,R,I,c)),c&&$&2048&&Lh(x.alternate,x);break;case 24:Lr(f,x,R,I,c),c&&$&2048&&Uh(x.alternate,x);break;default:Lr(f,x,R,I,c)}n=n.sibling}}function Jo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:Jo(a,r),c&2048&&Lh(r.alternate,r);break;case 24:Jo(a,r),c&2048&&Uh(r.alternate,r);break;default:Jo(a,r)}n=n.sibling}}var Xs=8192;function Ws(e,n,a){if(e.subtreeFlags&Xs)for(e=e.child;e!==null;)e_(e,n,a),e=e.sibling}function e_(e,n,a){switch(e.tag){case 26:Ws(e,n,a),e.flags&Xs&&(e.memoizedState!==null?ky(a,Ii,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&lv(a,e)));break;case 5:Ws(e,n,a),e.flags&Xs&&(e=e.stateNode,(n&335544128)===n&&lv(a,e));break;case 3:case 4:var r=Ii;Ii=rl(e.stateNode.containerInfo),Ws(e,n,a),Ii=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Xs,Xs=16777216,Ws(e,n,a),Xs=r):Ws(e,n,a));break;case 30:if((e.flags&Xs)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var c=e.stateNode;c.paired=null,fi===null&&(fi=new Map),fi.set(r,c)}Ws(e,n,a);break;default:Ws(e,n,a)}}function n_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function $o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Rn=r,a_(r,e)}n_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i_(e),e=e.sibling}function i_(e){switch(e.tag){case 0:case 11:case 15:$o(e),e.flags&2048&&ss(9,e,e.return);break;case 3:$o(e);break;case 12:$o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Oc(e)):$o(e);break;default:$o(e)}}function Oc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Rn=r,a_(r,e)}n_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ss(8,n,n.return),Oc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Oc(n));break;default:Oc(n)}e=e.sibling}}function a_(e,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:ss(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Io(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Rn=r;else t:for(a=e;Rn!==null;){r=Rn;var c=r.sibling,f=r.return;if(Yg(r),r===a){Rn=null;break t}if(c!==null){c.return=f,Rn=c;break t}Rn=f}}}var zM={getCacheForType:function(e){var n=Ln(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Ln(gn).controller.signal}},FM=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Qe=null,Te=null,we=0,Xe=0,hi=null,os=!1,Ur=!1,Oh=!1,Na=0,fn=0,ls=0,qs=0,Pc=0,di=0,Or=0,tl=null,ni=null,Ph=!1,Ic=0,s_=0,Bc=1/0,zc=null,cs=null,an=0,zi=null,Ys=null,ra=0,Ih=0,Bh=null,r_=null,Pr=null,Ir=null,Br=null,el=0,Fc=null;function pi(){return(Fe&2)!==0&&we!==0?we&-we:_t.T!==null?Yh():Bl()}function o_(){if(di===0)if((we&536870912)===0||Se){var e=As;As<<=1,(As&3932160)===0&&(As=262144),di=e}else di=536870912;return e=Un.current,e!==null&&(e.flags|=32),di}function zr(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=G_(Ma(e.memoizedProps,a))),Ir===null&&(Ir=[]),Ir.push(n.bind(null,r))}}function ii(e,n,a){(e===Qe&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(Fr(e,0),us(e,we,di,!1)),Ki(e,a),((Fe&2)===0||e!==Qe)&&(e===Qe&&((Fe&2)===0&&(qs|=a),fn===4&&us(e,we,di,!1)),oa(e))}function l_(e,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Wa(e,n),c=r?VM(e,n):Fh(e,n,!0),f=r;do{if(c===0){Ur&&!r&&us(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!HM(a)){c=Fh(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var R=e;c=tl;var I=R.current.memoizedState.isDehydrated;if(I&&(Fr(R,x).flags|=256),x=Fh(R,x,!1),x!==2&&x!==6){if(Oh&&!I){R.errorRecoveryDisabledLanes|=f,qs|=f,c=4;break t}f=ni,ni=c,f!==null&&(ni===null?ni=f:ni.push.apply(ni,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Fr(e,0),us(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:us(r,n,di,!os);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ic+300-kt(),10<c)){if(us(r,n,di,!os),Rs(r,0,!0)!==0)break t;ra=n,r.timeoutHandle=ad(c_.bind(null,r,a,ni,zc,Ph,n,di,qs,Or,os,f,"Throttled",-0,0),c);break t}c_(r,a,ni,zc,Ph,n,di,qs,Or,os,f,null,-0,0)}}break}while(!0);oa(e)}function c_(e,n,a,r,c,f,x,R,I,$,ut,St,K,lt){e.timeoutHandle=-1;var Ot=n.subtreeFlags,jt=(f&335544064)===f;if(St=null,(jt||Ot&8192||(Ot&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},fi=null,e_(n,f,St),jt&&(Ot=St,jt=e.containerInfo,jt=(jt.nodeType===9?jt:jt.ownerDocument).__reactViewTransition,jt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=cl.bind(Ot),jt.finished.then(Ot,Ot))),Ot=(f&62914560)===f?Ic-kt():(f&4194048)===f?s_-kt():0,Ot=Xy(St,Ot),Ot!==null)){ra=f,e.cancelPendingCommit=Ot(__.bind(null,e,n,f,a,r,c,x,R,I,$,ut,St,null,K,lt)),us(e,f,x,!$);return}__(e,n,f,a,r,c,x,R,I,$,ut,St)}function HM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!ci(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function us(e,n,a,r){n=Zi(e,n),n&=~Pc,n&=~qs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-ue(c),x=1<<f;r[f]=-1,c&=~x}a!==0&&ws(e,a,n)}function Hc(){return(Fe&6)===0?(nl(0),!1):!0}function zh(){if(Te!==null){if(Xe===0)var e=Te.return;else e=Te,ba=Os=null,qf(e),br=null,Fo=0,e=Te;for(;e!==null;)Lg(e.alternate,e),e=e.return;Te=null}}function Fr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,uy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,zh(),Qe=e,Te=a=Ea(e.current,null),we=n,Xe=0,hi=null,os=!1,Ur=Wa(e,n),Oh=!1,Or=di=Pc=qs=ls=fn=0,ni=tl=null,Ph=!1,Na=Zi(e,n),Zl(),a}function u_(e,n){de=null,_t.H=xc,n===Tr||n===sc?(n=_0(),Xe=3):n===Uf?(n=_0(),Xe=4):Xe=n===oh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,Te===null&&(fn=1,Sc(e,Ti(n,e.current)))}function f_(){var e=Un.current;return e===null?!0:(we&4194048)===we?Fn===null:(we&62914560)===we||(we&536870912)!==0?e===Fn:!1}function h_(){var e=_t.H;return _t.H=xc,e===null?xc:e}function d_(){var e=_t.A;return _t.A=zM,e}function Gc(){fn=4,os||(we&4194048)!==we&&Un.current!==null||(Ur=!0),(ls&134217727)===0&&(qs&134217727)===0||Qe===null||us(Qe,we,di,!1)}function Fh(e,n,a){var r=Fe;Fe|=2;var c=h_(),f=d_();(Qe!==e||we!==n)&&(zc=null,Fr(e,n)),n=!1;var x=fn;t:do try{if(Xe!==0&&Te!==null){var R=Te,I=hi;switch(Xe){case 8:zh(),x=6;break t;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var $=Xe;if(Xe=0,hi=null,Hr(e,R,I,$),a&&Ur){x=0;break t}break;default:$=Xe,Xe=0,hi=null,Hr(e,R,I,$)}}GM(),x=fn;break}catch(ut){u_(e,ut)}while(!0);return n&&e.shellSuspendCounter++,ba=Os=null,Fe=r,_t.H=c,_t.A=f,Te===null&&(Qe=null,we=0,Zl()),x}function GM(){for(;Te!==null;)p_(Te)}function VM(e,n){var a=Fe;Fe|=2;var r=h_(),c=d_();Qe!==e||we!==n?(zc=null,Bc=kt()+500,Fr(e,n)):Ur=Wa(e,n);t:do try{if(Xe!==0&&Te!==null){n=Te;var f=hi;e:switch(Xe){case 1:Xe=0,hi=null,Hr(e,n,f,1);break;case 2:case 9:if(m0(f)){Xe=0,hi=null,m_(n);break}n=function(){Xe!==2&&Xe!==9||Qe!==e||(Xe=7),oa(e)},f.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:m0(f)?(Xe=0,hi=null,m_(n)):(Xe=0,hi=null,Hr(e,n,f,7));break;case 5:var x=null;switch(Te.tag){case 26:x=Te.memoizedState;case 5:case 27:var R=Te;if(x?rv(x):R.stateNode.complete){Xe=0,hi=null;var I=R.sibling;if(I!==null)Te=I;else{var $=R.return;$!==null?(Te=$,Vc($)):Te=null}break e}}Xe=0,hi=null,Hr(e,n,f,5);break;case 6:Xe=0,hi=null,Hr(e,n,f,6);break;case 8:zh(),fn=6;break t;default:throw Error(s(462))}}kM();break}catch(ut){u_(e,ut)}while(!0);return ba=Os=null,_t.H=r,_t.A=c,Fe=a,Te!==null?0:(Qe=null,we=0,Zl(),fn)}function kM(){for(;Te!==null&&!It();)p_(Te)}function p_(e){var n=Dg(e.alternate,e,Na);e.memoizedProps=e.pendingProps,n===null?Vc(e):Te=n}function m_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Eg(a,n,n.pendingProps,n.type,void 0,we);break;case 11:n=Eg(a,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:qf(n);var r=n;r===bn&&(Se?(tc(r),r.tag===5&&r.stateNode!=null&&(Je=r.stateNode)):(tc(r),Se=!0));default:Lg(a,n),n=Te=a0(n,Na),n=Dg(a,n,Na)}e.memoizedProps=e.pendingProps,n===null?Vc(e):Te=n}function Hr(e,n,a,r){ba=Os=null,qf(n),br=null,Fo=0;var c=n.return;try{if(DM(e,c,n,a,we)){fn=1,Sc(e,Ti(a,e.current)),Te=null;return}}catch(f){if(c!==null)throw Te=c,f;fn=1,Sc(e,Ti(a,e.current)),Te=null;return}n.flags&32768?(Se||r===1?e=!0:Ur||(we&536870912)!==0?e=!1:(os=e=!0,(r===2||r===9||r===3||r===6)&&(r=Un.current,r!==null&&r.tag===13&&(r.flags|=16384))),g_(n,e)):Vc(n)}function Vc(e){var n=e;do{if((n.flags&32768)!==0){g_(n,os);return}e=n.return;var a=OM(n.alternate,n,Na);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);fn===0&&(fn=5)}function g_(e,n){do{var a=PM(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);fn=6,Te=null}function __(e,n,a,r,c,f,x,R,I,$,ut,St){e.cancelPendingCommit=null;do kc();while(an!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Qe&&(Te=Qe=null,we=0),Ys=n,zi=e,ra=a,Bh=c,r_=r,XM(e,n,a,x,R,I,St)}}function XM(e,n,a,r,c,f,x){var R=n.lanes|n.childLanes;if(Ih=R,R|=Sf,Il(e,a,R,r,c,f),Ir=null,(a&335544064)===a?(Br=vM(e),r=10262):(Br=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,QM(Ct,function(){return kh(),null})):(e.callbackNode=null,e.callbackPriority=0),wc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null,c=wt.p,wt.p=2,f=Fe,Fe|=4;try{IM(e,n,a)}finally{Fe=f,wt.p=c,_t.T=r}}an=1,wc?Pr=gy(x,e.containerInfo,Br,Hh,Gh,qM,Vh,kh,WM):(Hh(),Gh(),Vh())}function WM(e){if(an!==0){var n=zi.onRecoverableError;n(e,{componentStack:null})}}function qM(){an===3&&(an=0,$g(Ys,zi),an=4)}function Hh(){if(an===1){an=0;var e=zi,n=Ys,a=ra,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null;var c=wt.p;wt.p=2;var f=Fe;Fe|=4;try{jo=Nc=!1,jg(n,e,a),a=ed;var x=Zm(e.containerInfo),R=a.focusedElem,I=a.selectionRange;if(x!==R&&R&&R.ownerDocument&&Ym(R.ownerDocument.documentElement,R)){if(I!==null&&mf(R)){var $=I.start,ut=I.end;if(ut===void 0&&(ut=$),"selectionStart"in R)R.selectionStart=$,R.selectionEnd=Math.min(ut,R.value.length);else{var St=R.ownerDocument||document,K=St&&St.defaultView||window;if(K.getSelection){var lt=K.getSelection(),Ot=R.textContent.length,jt=Math.min(I.start,Ot),pe=I.end===void 0?jt:Math.min(I.end,Ot);!lt.extend&&jt>pe&&(x=pe,pe=jt,jt=x);var J=qm(R,jt),G=qm(R,pe);if(J&&G&&(lt.rangeCount!==1||lt.anchorNode!==J.node||lt.anchorOffset!==J.offset||lt.focusNode!==G.node||lt.focusOffset!==G.offset)){var it=St.createRange();it.setStart(J.node,J.offset),lt.removeAllRanges(),jt>pe?(lt.addRange(it),lt.extend(G.node,G.offset)):(it.setEnd(G.node,G.offset),lt.addRange(it))}}}}for(St=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&St.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<St.length;R++){var vt=St[R];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Zr=!!td,ed=td=null}finally{Fe=f,wt.p=c,_t.T=r}}e.current=n,an=2}}function Gh(){if(an===2){an=0;var e=zi,n=Ys,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=_t.T,_t.T=null;var r=wt.p;wt.p=2;var c=Fe;Fe|=4;try{Wg(e,n.alternate,n)}finally{Fe=c,wt.p=r,_t.T=a}}an=3}}function Vh(){if(an===4||an===3){an=0;var e=Pr;Pr=null,Pt();var n=zi,a=Ys,r=ra,c=r_,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?an=5:(an=0,Ys=zi=null,v_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(cs=null),To(r),a=a.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=_t.T,f=wt.p,wt.p=2,_t.T=null;try{for(var x=n.onRecoverableError,R=0;R<c.length;R++){var I=c[R];x(I.value,{componentStack:I.stack})}}finally{_t.T=a,wt.p=f}}if(c=Ir,x=Br,Br=null,c!==null&&(Ir=null,x===null&&(x=[]),e!==null))for(I=0;I<c.length;I++)a=(0,c[I])(x),a!==void 0&&e.finished.finally(a);(ra&3)!==0&&kc(),oa(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Fc?el++:(el=0,Fc=n):(el=0,Fc=null),nl(0)}}function v_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Io(n)))}function kc(){return Pr!==null&&(Pr.skipTransition(),Pr=null),Hh(),Gh(),Vh(),kh()}function kh(){if(an!==5)return!1;var e=zi,n=Ih;Ih=0;var a=To(ra),r=_t.T,c=wt.p;try{wt.p=32>a?32:a,_t.T=null,a=Bh,Bh=null;var f=zi,x=ra;if(an=0,Ys=zi=null,ra=0,(Fe&6)!==0)throw Error(s(331));var R=Fe;if(Fe|=4,i_(f.current),t_(f,f.current,x,a),Fe=R,nl(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Jt,f)}catch{}return!0}finally{wt.p=c,_t.T=r,v_(e,n)}}function x_(e,n,a){n=Ti(a,n),n=rh(e.stateNode,n,2),e=es(e,n,2),e!==null&&(Ki(e,2),oa(e))}function We(e,n,a){if(e.tag===3)x_(e,e,a);else for(;n!==null;){if(n.tag===3){x_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cs===null||!cs.has(r))){e=Ti(a,e),a=mg(2),r=es(n,a,2),r!==null&&(gg(a,r,n,e),Ki(r,2),oa(r));break}}n=n.return}}function Xh(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new FM;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Oh=!0,c.add(a),e=YM.bind(null,e,n,a),n.then(e,e))}function YM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(we&a)===a&&((fn===4||fn===3&&(we&62914560)===we&&300>kt()-Ic)&&(Fe&2)===0?Fr(e,0):Pc|=a,Or===we&&(Or=0)),oa(e)}function S_(e,n){n===0&&(n=So()),e=Ns(e,n),e!==null&&(Ki(e,n),oa(e))}function ZM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),S_(e,a)}function KM(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),S_(e,a)}function QM(e,n){return Dt(e,n)}var Gr=null,Vr=null,Wh=!1,Xc=!1,qh=!1,fs=0;function oa(e){e!==Vr&&e.next===null&&(Vr===null?Gr=Vr=e:Vr=Vr.next=e),Xc=!0,Wh||(Wh=!0,JM())}function nl(e,n){if(!qh&&Xc){qh=!0;do for(var a=!1,r=Gr;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var x=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-ue(42|e)+1)-1,f&=c&~(x&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,T_(r,f))}else f=we,f=Rs(r,r===Qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Wa(r,f)||(a=!0,T_(r,f));r=r.next}while(a);qh=!1}}function jM(){M_()}function M_(){Xc=Wh=!1;var e=0;fs!==0&&cy()&&(e=fs);for(var n=kt(),a=null,r=Gr;r!==null;){var c=r.next,f=y_(r,n);f===0?(r.next=null,a===null?Gr=c:a.next=c,c===null&&(Vr=a)):(a=r,(e!==0||(f&3)!==0)&&(Xc=!0)),r=c}an!==0&&an!==5||nl(e),fs!==0&&(fs=0)}function y_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-ue(f),R=1<<x,I=c[x];I===-1?((R&a)===0||(R&r)!==0)&&(c[x]=xo(R,n)):I<=n&&(e.expiredLanes|=R),f&=~R}if(n=Qe,a=we,a=Rs(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&$t(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&$t(r),To(a)){case 2:case 8:a=W;break;case 32:a=Ct;break;case 268435456:a=Lt;break;default:a=Ct}return r=E_.bind(null,e),a=Dt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&$t(r),e.callbackPriority=2,e.callbackNode=null,2}function E_(e,n){if(an!==0&&an!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(kc()&&e.callbackNode!==a)return null;var r=we;return r=Rs(e,e===Qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(l_(e,r,n),y_(e,kt()),e.callbackNode!=null&&e.callbackNode===a?E_.bind(null,e):null)}function T_(e,n){if(kc())return null;l_(e,n,!0)}function JM(){fy(function(){(Fe&6)!==0?Dt(ce,jM):M_()})}function Yh(){if(fs===0){var e=Bs;e===0&&(e=cr,cr<<=1,(cr&261888)===0&&(cr=256)),fs=e}return fs}function b_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hl(e)}function $M(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=b_((c[H]||null).action),x=r.submitter;x&&(n=(n=x[H]||null)?b_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var R=new Xl("action","action",null,r,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(fs!==0){var I=new FormData(c,x);eh(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(R.preventDefault(),I=new FormData(c,x),eh(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Zh=0;Zh<xf.length;Zh++){var Kh=xf[Zh],ty=Kh.toLowerCase(),ey=Kh[0].toUpperCase()+Kh.slice(1);Oi(ty,"on"+ey)}Oi(jm,"onAnimationEnd"),Oi(Jm,"onAnimationIteration"),Oi($m,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(uM,"onTransitionRun"),Oi(fM,"onTransitionStart"),Oi(hM,"onTransitionCancel"),Oi(t0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function A_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var R=r[x],I=R.instance,$=R.currentTarget;if(R=R.listener,I!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=$;try{f(c)}catch(ut){Yl(ut)}c.currentTarget=null,f=I}else for(x=0;x<r.length;x++){if(R=r[x],I=R.instance,$=R.currentTarget,R=R.listener,I!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=$;try{f(c)}catch(ut){Yl(ut)}c.currentTarget=null,f=I}}}}function be(e,n){var a=n[st];a===void 0&&(a=n[st]=new Set);var r=e+"__bubble";a.has(r)||(R_(n,e,2,!1),a.add(r))}function Qh(e,n,a){var r=0;n&&(r|=4),R_(a,e,r,n)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function jh(e){if(!e[Wc]){e[Wc]=!0,He.forEach(function(a){a!=="selectionchange"&&(ny.has(a)||Qh(a,!1,e),Qh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wc]||(n[Wc]=!0,Qh("selectionchange",!1,n))}}function R_(e,n,a,r){switch(gv(n)){case 2:var c=Zy;break;case 8:c=Ky;break;default:c=_d}a=c.bind(null,n,a,e),c=void 0,!sf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Jh(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var R=r.stateNode.containerInfo;if(R===c)break;if(x===4)for(x=r.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;R!==null;){if(x=se(R),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){r=f=x;continue t}R=R.parentNode}}r=r.return}Rm(function(){var $=f,ut=nf(a),St=[];t:{var K=e0.get(e);if(K!==void 0){var lt=Xl,Ot=e;switch(e){case"keypress":if(Vl(a)===0)break t;case"keydown":case"keyup":lt=HS;break;case"focusin":Ot="focus",lt=cf;break;case"focusout":Ot="blur",lt=cf;break;case"beforeblur":case"afterblur":lt=cf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=wS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=WS;break;case jm:case Jm:case $m:lt=NS;break;case t0:lt=YS;break;case"scroll":case"scrollend":lt=AS;break;case"wheel":lt=KS;break;case"copy":case"cut":case"paste":lt=US;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Lm;break;case"submit":lt=kS;break;case"toggle":case"beforetoggle":lt=jS}var jt=(n&4)!==0,pe=!jt&&(e==="scroll"||e==="scrollend"),J=jt?K!==null?K+"Capture":null:K;jt=[];for(var G=$,it;G!==null;){var vt=G;if(it=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||it===null||J===null||(vt=bo(G,J),vt!=null&&jt.push(al(G,vt,it))),pe)break;G=G.return}0<jt.length&&(K=new lt(K,Ot,null,a,ut),St.push({event:K,listeners:jt}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",lt&&a!==ef&&(Ot=a.relatedTarget||a.fromElement)&&(se(Ot)||Ot[ft]))break t;(K||lt)&&(Ot=ut.window===ut?ut:(lt=ut.ownerDocument)?lt.defaultView||lt.parentWindow:window,K?(lt=a.relatedTarget||a.toElement,K=$,lt=lt?se(lt):null,lt!==null&&(pe=u(lt),jt=lt.tag,lt!==pe||jt!==5&&jt!==27&&jt!==6)&&(lt=null)):(K=null,lt=$),K!==lt&&(jt=Dm,vt="onMouseLeave",J="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(jt=Lm,vt="onPointerLeave",J="onPointerEnter",G="pointer"),pe=K==null?Ot:Wt(K),it=lt==null?Ot:Wt(lt),Ot=new jt(vt,G+"leave",K,a,ut),Ot.target=pe,Ot.relatedTarget=it,vt=null,se(ut)===$&&(jt=new jt(J,G+"enter",lt,a,ut),jt.target=it,jt.relatedTarget=pe,vt=jt),pe=vt,jt=K&&lt?U(K,lt,iy):null,K!==null&&w_(St,Ot,K,jt,!1),lt!==null&&pe!==null&&w_(St,pe,lt,jt,!0)))}t:{if(K=$?Wt($):window,lt=K.nodeName&&K.nodeName.toLowerCase(),lt==="select"||lt==="input"&&K.type==="file")var qt=Hm;else if(zm(K))if(Gm)qt=oM;else{qt=sM;var Ce=aM}else lt=K.nodeName,!lt||lt.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?$&&tf($.elementType)&&(qt=Hm):qt=rM;if(qt&&(qt=qt(e,$))){Fm(St,qt,a,ut);break t}Ce&&Ce(e,K,$)}switch(Ce=$?Wt($):window,e){case"focusin":(zm(Ce)||Ce.contentEditable==="true")&&(gr=Ce,gf=$,Uo=null);break;case"focusout":Uo=gf=gr=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,Km(St,a,ut);break;case"selectionchange":if(cM)break;case"keydown":case"keyup":Km(St,a,ut)}var te;if(ff)t:{switch(e){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else mr?Im(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Um&&a.locale!=="ko"&&(mr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&mr&&(te=wm()):(qa=ut,rf="value"in qa?qa.value:qa.textContent,mr=!0)),Ce=qc($,ae),0<Ce.length&&(ae=new Nm(ae,e,null,a,ut),St.push({event:ae,listeners:Ce}),te?ae.data=te:(te=Bm(a),te!==null&&(ae.data=te)))),(te=$S?tM(e,a):eM(e,a))&&(ae=qc($,"onBeforeInput"),0<ae.length&&(Ce=new Nm("onBeforeInput","beforeinput",null,a,ut),St.push({event:Ce,listeners:ae}),Ce.data=te)),$M(St,e,$,a,ut)}A_(St,n)})}function al(e,n,a){return{instance:e,listener:n,currentTarget:a}}function qc(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=bo(e,a),c!=null&&r.unshift(al(e,c,f)),c=bo(e,n),c!=null&&r.push(al(e,c,f))),e.tag===3)return r;e=e.return}return[]}function iy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function w_(e,n,a,r,c){for(var f=n._reactName,x=[];a!==null&&a!==r;){var R=a,I=R.alternate,$=R.stateNode;if(R=R.tag,I!==null&&I===r)break;R!==5&&R!==26&&R!==27||$===null||(I=$,c?($=bo(a,f),$!=null&&x.unshift(al(a,$,I))):c||($=bo(a,f),$!=null&&x.push(al(a,$,I)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var ay=/\r\n?/g,sy=/\u0000|\uFFFD/g;function C_(e){return(typeof e=="string"?e:""+e).replace(ay,`
`).replace(sy,"")}function D_(e,n){return n=C_(n),C_(e)===n}function qe(e,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||hr(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&hr(e,""+r);else return;break;case"className":li(e,"class",r);break;case"tabIndex":li(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":li(e,a,r);break;case"style":bm(e,r,f);return;case"data":if(n!=="object"){li(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Hl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qe(e,n,"name",c.name,c,null),qe(e,n,"formEncType",c.formEncType,c,null),qe(e,n,"formMethod",c.formMethod,c,null),qe(e,n,"formTarget",c.formTarget,c,null)):(qe(e,n,"encType",c.encType,c,null),qe(e,n,"method",c.method,c,null),qe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Hl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ji);return;case"onScroll":r!=null&&be("scroll",e);return;case"onScrollEnd":r!=null&&be("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Hl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":be("beforetoggle",e),be("toggle",e),je(e,"popover",r);break;case"xlinkActuate":Re(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Re(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Re(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Re(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Re(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Re(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Re(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Re(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Re(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":je(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=TS.get(a)||a,je(e,a,r);else return}xe=!0}function $h(e,n,a,r,c,f){switch(a){case"style":bm(e,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")hr(e,r);else if(typeof r=="number"||typeof r=="bigint")hr(e,""+r);else return;break;case"onScroll":r!=null&&be("scroll",e);return;case"onScrollEnd":r!=null&&be("scrollend",e);return;case"onClick":r!=null&&(e.onclick=ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Mn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[H]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,r,c);break t}xe=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):je(e,a,r)}return}xe=!0}function In(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,f,x,a,null)}}c&&qe(e,n,"srcSet",a.srcSet,a,null),r&&qe(e,n,"src",a.src,a,null);return;case"input":be("invalid",e);var R=f=x=c=null,I=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":x=ut;break;case"checked":I=ut;break;case"defaultChecked":$=ut;break;case"value":f=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:qe(e,n,r,ut,a,null)}}Mm(e,f,R,I,$,x,c,!1);return;case"select":be("invalid",e),r=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":x=R;break;case"multiple":r=R;default:qe(e,n,c,R,a,null)}n=f,a=x,e.multiple=!!r,n!=null?fr(e,!!r,n,!1):a!=null&&fr(e,!!r,a,!0);return;case"textarea":be("invalid",e),f=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":r=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:qe(e,n,x,R,a,null)}Em(e,r,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:qe(e,n,I,r,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(r=0;r<il.length;r++)be(il[r],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,$,r,a,null)}return;default:if(tf(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&$h(e,n,ut,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&qe(e,n,R,r,a,null))}var ry={};function oy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,R=null,I=null,$=null,ut=null;for(lt in a){var St=a[lt];if(a.hasOwnProperty(lt)&&St!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":I=St;default:r.hasOwnProperty(lt)||qe(e,n,lt,null,r,St)}}for(var K in r){var lt=r[K];if(St=a[K],r.hasOwnProperty(K)&&(lt!=null||St!=null))switch(K){case"type":lt!==St&&(xe=!0),f=lt;break;case"name":lt!==St&&(xe=!0),c=lt;break;case"checked":lt!==St&&(xe=!0),$=lt;break;case"defaultChecked":lt!==St&&(xe=!0),ut=lt;break;case"value":lt!==St&&(xe=!0),x=lt;break;case"defaultValue":lt!==St&&(xe=!0),R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==St&&qe(e,n,K,lt,r,St)}}Ju(e,x,R,I,$,ut,f,c);return;case"select":lt=x=R=K=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":lt=I;default:r.hasOwnProperty(f)||qe(e,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":f!==I&&(xe=!0),K=f;break;case"defaultValue":f!==I&&(xe=!0),R=f;break;case"multiple":f!==I&&(xe=!0),x=f;default:f!==I&&qe(e,n,c,f,r,I)}n=R,a=x,r=lt,K!=null?fr(e,!!a,K,!1):!!r!=!!a&&(n!=null?fr(e,!!a,n,!0):fr(e,!!a,a?[]:"",!1));return;case"textarea":lt=K=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:qe(e,n,R,null,r,c)}for(x in r)if(c=r[x],f=a[x],r.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":c!==f&&(xe=!0),K=c;break;case"defaultValue":c!==f&&(xe=!0),lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&qe(e,n,x,c,r,f)}ym(e,K,lt);return;case"option":for(var Ot in a)if(K=a[Ot],a.hasOwnProperty(Ot)&&K!=null&&!r.hasOwnProperty(Ot))switch(Ot){case"selected":e.selected=!1;break;default:qe(e,n,Ot,null,r,K)}for(I in r)if(K=r[I],lt=a[I],r.hasOwnProperty(I)&&K!==lt&&(K!=null||lt!=null))switch(I){case"selected":K!==lt&&(xe=!0),e.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:qe(e,n,I,K,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)K=a[jt],a.hasOwnProperty(jt)&&K!=null&&!r.hasOwnProperty(jt)&&qe(e,n,jt,null,r,K);for($ in r)if(K=r[$],lt=a[$],r.hasOwnProperty($)&&K!==lt&&(K!=null||lt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,n));break;default:qe(e,n,$,K,r,lt)}return;default:if(tf(n)){for(var pe in a)K=a[pe],a.hasOwnProperty(pe)&&K!==void 0&&!r.hasOwnProperty(pe)&&$h(e,n,pe,void 0,r,K);for(ut in r)K=r[ut],lt=a[ut],!r.hasOwnProperty(ut)||K===lt||K===void 0&&lt===void 0||$h(e,n,ut,K,r,lt);return}}for(var J in a)K=a[J],a.hasOwnProperty(J)&&K!=null&&!r.hasOwnProperty(J)&&qe(e,n,J,null,r,K);for(St in r)K=r[St],lt=a[St],!r.hasOwnProperty(St)||K===lt||K==null&&lt==null||qe(e,n,St,K,r,lt)}function N_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ly(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,x=c.initiatorType,R=c.duration;if(f&&R&&N_(x)){for(x=0,R=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],$=I.startTime;if($>R)break;var ut=I.transferSize,St=I.initiatorType;ut&&N_(St)&&(I=I.responseEnd,x+=ut*(I<R?1:(R-$)/(I-$)))}if(--r,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var td=null,ed=null;function sl(e){return e.nodeType===9?e:e.ownerDocument}function L_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function O_(e,n,a,r){return a=sl(a).createElement(e),a[A]=r,a[H]=n,In(a,e,n),ve(a),a}function nd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var id=null;function cy(){var e=window.event;return e&&e.type==="popstate"?e===id?!1:(id=e,!0):(id=null,!1)}var ad=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,P_=typeof Promise=="function"?Promise:void 0,I_=typeof requestAnimationFrame=="function"?requestAnimationFrame:ad,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof P_<"u"?function(e){return P_.resolve(null).then(e).catch(hy)}:ad;function hy(e){setTimeout(function(){throw e})}function hs(e){return e==="head"}function B_(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),Kr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")hd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,hd(a);for(var f=a.firstChild;f;){var x=f.nextSibling,R=f.nodeName;f[Ut]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&hd(e.ownerDocument.body);a=c}while(a);Kr(n)}function z_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function F_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function H_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function dy(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function sd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return dy(n,a,e)}function py(e){return e.documentElement.clientHeight}function my(e){this.addEventListener("load",e),this.addEventListener("error",e)}function gy(e,n,a,r,c,f,x,R,I){var $=n.nodeType===9?n:n.ownerDocument;try{var ut=$.startViewTransition({update:function(){var K=$.defaultView,lt=K.navigation&&K.navigation.transition,Ot=$.fonts.status;r();var jt=[];if(Ot==="loaded"&&(py($),$.fonts.status==="loading"&&jt.push($.fonts.ready)),Ot=jt.length,e!==null)for(var pe=e.suspenseyImages,J=0,G=0;G<pe.length;G++){var it=pe[G];if(!it.complete){var vt=it.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<K.innerHeight&&vt.left<K.innerWidth){if(J+=ov(it),J>Kc){jt.length=Ot;break}it=new Promise(my.bind(it)),jt.push(it)}}}if(0<jt.length)return K=Promise.race([Promise.all(jt),new Promise(function(qt){return setTimeout(qt,500)})]).then(c,c),(lt?Promise.allSettled([lt.finished,K]):K).then(f,f);if(c(),lt)return lt.finished.then(f,f);f()},types:a});$.__reactViewTransition=ut;var St=[];return ut.ready.then(function(){for(var K=$.documentElement.getAnimations({subtree:!0}),lt=0;lt<K.length;lt++){var Ot=K[lt],jt=Ot.effect,pe=jt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){St.push(Ot),Ot=jt.getKeyframes();for(var J=pe=void 0,G=!0,it=0;it<Ot.length;it++){var vt=Ot[it],qt=vt.width;if(pe===void 0)pe=qt;else if(pe!==qt){G=!1;break}if(qt=vt.height,J===void 0)J=qt;else if(J!==qt){G=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}G&&pe!==void 0&&J!==void 0&&(jt.setKeyframes(Ot),G=getComputedStyle(jt.target,jt.pseudoElement),G.width!==pe||G.height!==J)&&(G=Ot[0],G.width=pe,G.height=J,G=Ot[Ot.length-1],G.width=pe,G.height=J,jt.setKeyframes(Ot))}}x()},function(K){$.__reactViewTransition===ut&&($.__reactViewTransition=null);try{if(typeof K=="object"&&K!==null)switch(K.name){case"InvalidStateError":(K.message==="View transition was skipped because document visibility state is hidden."||K.message==="Skipping view transition because document visibility state has become hidden."||K.message==="Skipping view transition because viewport size changed."||K.message==="Transition was aborted because of invalid state")&&(K=null)}K!==null&&I(K)}finally{r(),c(),x()}}),ut.finished.finally(function(){for(var K=0;K<St.length;K++)St[K].cancel();$.__reactViewTransition===ut&&($.__reactViewTransition=null),R()}),ut}catch{return r(),c(),x(),null}}function Zs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Zs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Zs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&r.push(a[c])}return r},Zs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function G_(e){return{name:e,group:new Zs("group",e),imagePair:new Zs("image-pair",e),old:new Zs("old",e),new:new Zs("new",e)}}function mi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}mi.prototype.addEventListener=function(e,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(k_(f,e,n,a)===-1){var x=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(I){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(c=x.removeEventListener.bind(x,e,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=kr(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),g(this._fragmentFiber.child,!1,_y,e,R,r)}this._eventListeners=f}};function _y(e,n,a,r){return M(e).addEventListener(n,a,r),!1}mi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=k_(r,e,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=kr(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,vy,e,a,c),r.splice(n,1),f!==null&&f()}};function vy(e,n,a,r){return M(e).removeEventListener(n,a,r),!1}function kr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function V_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function k_(e,n,a,r){if(e.length===0)return-1;r=V_(r);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&V_(f.optionsOrUseCapture)===r)return c}return-1}mi.prototype.dispatchEvent=function(e){var n=_(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,kr(f.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,kr(f.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},mi.prototype.focus=function(e){g(this._fragmentFiber.child,!0,X_,e,void 0,void 0)};function X_(e,n){return e.tag===6?!1:(e=M(e),Dy(e,n))}mi.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,rd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!X_(n[a],e);a--);};function rd(e,n){return n.push(e),!1}mi.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=M(e),e=sl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,xy,e,void 0,void 0))};function xy(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}mi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,Sy,e,void 0,void 0)};function Sy(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}mi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,My,e,void 0,void 0);for(var a=n=0;a<Fi.length;a++){var r=Fi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Fi[n++]=r}Fi.length=n}};function My(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Fi=[],od=!1;function yy(e,n,a){Fi.push({fragmentInstance:e,observer:n,instance:a}),od||(od=!0,Ny(function(){od=!1;var r=Fi;Fi=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}mi.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,Ey,e,void 0,void 0),e};function Ey(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}mi.prototype.getRootNode=function(e){var n=_(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},mi.prototype.compareDocumentPosition=function(e){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,rd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=y(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),R=c.compareDocumentPosition(e),I=x&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=r&&f&&x&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||f&&c===e||I||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ty(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ty(e,n,a,r,c){var f=se(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=_(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=U(a,f,L),n===null?n=!1:(g(n,!0,B,f,a),f=S,S=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=U(r,f,L),n===null?n=!1:(g(n,!0,C,f,r),f=S,N=S=null,n=f!==null)),n):!1}function W_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}mi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,rd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=M(r),W_(e,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=M(c),W_(c,a)):M(c).scrollIntoView(e),r+=a?-1:1}};function by(e,n){return e=M(e),q_(e,n),!1}function q_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Y_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.addEventListener(c.type,c.attachedListener,kr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var x=0,R=0;R<Fi.length;R++){var I=Fi[R];(I.fragmentInstance!==n||I.observer!==f||I.instance!==e)&&(Fi[x++]=I)}Fi.length=x,f.observe(e)}),q_(e,n))}function Ay(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.removeEventListener(c.type,c.attachedListener,kr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?yy(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function ld(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),Qt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ry(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ut])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ci(e.nextSibling),e===null)break}return null}function wy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ci(e.nextSibling),e===null))return null;return e}function Z_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ci(e.nextSibling),e===null))return null;return e}function cd(e){return e.data==="$?"||e.data==="$~"}function ud(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var fd=null;function K_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Q_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Dy(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function Ny(e){I_(function(){I_(function(n){return e(n)})})}function j_(e,n,a){switch(n=sl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function J_(e,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&qe(e,n,r,null,ry,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ji&&(e.onclick=null),Qt(e)}function hd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qt(e)}var Di=new Map,$_=new Set;function rl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var La=wt.d;wt.d={f:Ly,r:Uy,D:Oy,C:Py,L:Iy,m:By,X:Fy,S:zy,M:Hy};function Ly(){var e=La.f(),n=Hc();return e||n}function Uy(e){var n=fe(e);n!==null&&n.tag===5&&n.type==="form"?eg(n):La.r(e)}var Xr=typeof document>"u"?null:document;function tv(e,n,a){var r=Xr;if(r&&typeof n=="string"&&n){var c=yi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),$_.has(c)||($_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),In(n,"link",e),ve(n),r.head.appendChild(n)))}}function Oy(e){La.D(e),tv("dns-prefetch",e,null)}function Py(e,n){La.C(e,n),tv("preconnect",e,n)}function Iy(e,n,a){La.L(e,n,a);var r=Xr;if(r&&e&&n){var c='link[rel="preload"][as="'+yi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+yi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+yi(a.imageSizes)+'"]')):c+='[href="'+yi(e)+'"]';var f=c;switch(n){case"style":f=Wr(e);break;case"script":f=qr(e)}if(!(Di.has(f)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Di.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(ol(f))||n==="script"&&r.querySelector(ll(f))))){var x=r.createElement("link");In(x,"link",e),n==="style"&&(x[Yt]=!0,x.onload=x.onerror=function(){Ze(x)}),ve(x),r.head.appendChild(x)}}}function By(e,n){La.m(e,n);var a=Xr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+yi(r)+'"][href="'+yi(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=qr(e)}if(!Di.has(f)&&(e=P({rel:"modulepreload",href:e},n),Di.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(f)))return}r=a.createElement("link"),In(r,"link",e),ve(r),a.head.appendChild(r)}}}function zy(e,n,a){La.S(e,n,a);var r=Xr;if(r&&e){var c=Ee(r).hoistableStyles,f=Wr(e);n=n||"default";var x=c.get(f);if(!x){var R={loading:0,preload:null};if(x=r.querySelector(ol(f)))R.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Di.get(f))&&dd(e,a);var I=x=r.createElement("link");ve(I),In(I,"link",e),I._p=new Promise(function($,ut){I.onload=$,I.onerror=ut}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Yc(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:R},c.set(f,x)}}}function Fy(e,n){La.X(e,n);var a=Xr;if(a&&e){var r=Ee(a).hoistableScripts,c=qr(e),f=r.get(c);f||(f=a.querySelector(ll(c)),f||(e=P({src:e,async:!0},n),(n=Di.get(c))&&pd(e,n),f=a.createElement("script"),ve(f),In(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Hy(e,n){La.M(e,n);var a=Xr;if(a&&e){var r=Ee(a).hoistableScripts,c=qr(e),f=r.get(c);f||(f=a.querySelector(ll(c)),f||(e=P({src:e,async:!0,type:"module"},n),(n=Di.get(c))&&pd(e,n),f=a.createElement("script"),ve(f),In(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function ev(e,n,a,r){var c=(c=Ie.current)?rl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Wr(a.href),n=Ee(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Wr(a.href);var f=Ee(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(ol(e)))?f._p||(x.instance=f,x.state.loading=5):(f=Di.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(e,f)),Gy(c,e,f,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=qr(a),n=Ee(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Wr(e){return'href="'+yi(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function nv(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function Gy(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Yt]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Yt]=!0,n.onload=n.onerror=Ze.bind(null,n),In(n,"link",a),ve(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function qr(e){return'[src="'+yi(e)+'"]'}function ll(e){return"script[async]"+e}function iv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+yi(a.href)+'"]');if(r)return n.instance=r,ve(r),r;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),ve(r),In(r,"style",c),Yc(r,a.precedence,e),n.instance=r;case"stylesheet":c=Wr(a.href);var f=e.querySelector(ol(c));if(f)return n.state.loading|=4,n.instance=f,ve(f),f;r=nv(a),(c=Di.get(c))&&dd(r,c),f=(e.ownerDocument||e).createElement("link"),ve(f);var x=f;return x._p=new Promise(function(R,I){x.onload=R,x.onerror=I}),In(f,"link",r),n.state.loading|=4,Yc(f,a.precedence,e),n.instance=f;case"script":return f=qr(a.src),(c=e.querySelector(ll(f)))?(n.instance=c,ve(c),c):(r=a,(c=Di.get(f))&&(r=P({},a),pd(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),ve(c),In(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Yc(r,a.precedence,e));return n.instance}function Yc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,x=0;x<r.length;x++){var R=r[x];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function dd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function pd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zc=null;function av(e,n,a){if(Zc===null){var r=new Map,c=Zc=new Map;c.set(a,r)}else c=Zc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ut]||f[A]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var R=r.get(x);R?R.push(f):r.set(x,[f])}}return r}function md(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Vy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function sv(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function rv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ov(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function lv(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=ov(n),e.suspenseyImages.push(n)),e=Wy.bind(e),n.decode().then(e,e))}function ky(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Wr(r.href),f=n.querySelector(ol(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=cl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,ve(f);return}f=n.ownerDocument||n,r=nv(r),(c=Di.get(c))&&dd(r,c),f=f.createElement("link"),ve(f);var x=f;x._p=new Promise(function(R,I){x.onload=R,x.onerror=I}),In(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=cl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Kc=0;function Xy(e,n){return e.stylesheets&&e.count===0&&jc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&jc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Kc===0&&(Kc=62500*ly());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&jc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Kc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function cv(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)jc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function cl(){this.count--,cv(this)}function Wy(){this.imgCount--,cv(this)}var Qc=null;function jc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qc=new Map,n.forEach(qy,e),Qc=null,cl.call(e))}function qy(e,n){if(!(n.state.loading&4)){var a=Qc.get(e);if(a)var r=a.get(null);else{a=new Map,Qc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,c),a.set(x,c),this.count++,r=cl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Yr={$$typeof:tt,Provider:null,Consumer:null,_currentValue:Ve,_currentValue2:Ve,_threadCount:0};function Yy(e,n,a,r,c,f,x,R,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ur(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ur(0),this.hiddenUpdates=ur(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function uv(e,n,a,r,c,f,x,R,I,$,ut,St){return e=new Yy(e,n,a,x,I,$,ut,St,R),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=Df(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Of(f),e}function fv(e){return e?(e=xr,e):xr}function hv(e,n,a,r,c,f){c=fv(c),r.context===null?r.context=c:r.pendingContext=c,r=ts(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=es(e,r,n),a!==null&&(ii(a,e,n),Ho(a,e,n))}function dv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function gd(e,n){dv(e,n),(e=e.alternate)&&dv(e,n)}function pv(e){if(e.tag===13||e.tag===31){var n=Ns(e,67108864);n!==null&&ii(n,e,67108864),gd(e,67108864)}}function mv(e){if(e.tag===13||e.tag===31){var n=pi();n=Eo(n);var a=Ns(e,n);a!==null&&ii(a,e,n),gd(e,n)}}var Zr=!0;function Zy(e,n,a,r){var c=_t.T;_t.T=null;var f=wt.p;try{wt.p=2,_d(e,n,a,r)}finally{wt.p=f,_t.T=c}}function Ky(e,n,a,r){var c=_t.T;_t.T=null;var f=wt.p;try{wt.p=8,_d(e,n,a,r)}finally{wt.p=f,_t.T=c}}function _d(e,n,a,r){if(Zr){var c=vd(r);if(c===null)Jh(e,n,r,Jc,a),_v(e,r);else if(jy(c,e,n,a,r))r.stopPropagation();else if(_v(e,r),n&4&&-1<Qy.indexOf(e)){for(;c!==null;){var f=fe(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=va(f.pendingLanes);if(x!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var I=1<<31-ue(x);R.entanglements[1]|=I,x&=~I}oa(f),(Fe&6)===0&&(Bc=kt()+500,nl(0))}}break;case 31:case 13:R=Ns(f,2),R!==null&&ii(R,f,2),Hc(),gd(f,2)}if(f=vd(r),f===null&&Jh(e,n,r,Jc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Jh(e,n,r,null,a)}}function vd(e){return e=nf(e),xd(e)}var Jc=null;function xd(e){if(Jc=null,e=se(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jc=e,null}function gv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case ce:return 2;case W:return 8;case Ct:case Mt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Sd=!1,ds=null,ps=null,ms=null,ul=new Map,fl=new Map,gs=[],Qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _v(e,n){switch(e){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":ps=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":ul.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(n.pointerId)}}function hl(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=fe(n),n!==null&&pv(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function jy(e,n,a,r,c){switch(n){case"focusin":return ds=hl(ds,e,n,a,r,c),!0;case"dragenter":return ps=hl(ps,e,n,a,r,c),!0;case"mouseover":return ms=hl(ms,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return ul.set(f,hl(ul.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,fl.set(f,hl(fl.get(f)||null,e,n,a,r,c)),!0}return!1}function vv(e){var n=se(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,zl(e.priority,function(){mv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,zl(e.priority,function(){mv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $c(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=vd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);ef=r,a.target.dispatchEvent(r),ef=null}else return n=fe(a),n!==null&&pv(n),e.blockedOn=a,!1;n.shift()}return!0}function xv(e,n,a){$c(e)&&a.delete(n)}function Jy(){Sd=!1,ds!==null&&$c(ds)&&(ds=null),ps!==null&&$c(ps)&&(ps=null),ms!==null&&$c(ms)&&(ms=null),ul.forEach(xv),fl.forEach(xv)}function tu(e,n){e.blockedOn===n&&(e.blockedOn=null,Sd||(Sd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Jy)))}var eu=null;function Sv(e){eu!==e&&(eu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){eu===e&&(eu=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(xd(r||a)===null)continue;break}var f=fe(a);f!==null&&(e.splice(n,3),n-=3,eh(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Kr(e){function n(I){return tu(I,e)}ds!==null&&tu(ds,e),ps!==null&&tu(ps,e),ms!==null&&tu(ms,e),ul.forEach(n),fl.forEach(n);for(var a=0;a<gs.length;a++){var r=gs[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<gs.length&&(a=gs[0],a.blockedOn===null);)vv(a),a.blockedOn===null&&gs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],x=c[H]||null;if(typeof f=="function")x||Sv(a);else if(x){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[H]||null)R=x.formAction;else if(xd(c)!==null)continue}else R=x.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Sv(a)}}}function Mv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Md(e){this._internalRoot=e}nu.prototype.render=Md.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=pi();hv(a,r,e,n,null,null)},nu.prototype.unmount=Md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;hv(e.current,2,null,e,null,null),Hc(),n[ft]=null}};function nu(e){this._internalRoot=e}nu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<gs.length&&n!==0&&n<gs[a].priority;a++);gs.splice(a,0,e),a===0&&vv(e)}};var yv=t.version;if(yv!=="19.3.0")throw Error(s(527,yv,"19.3.0"));wt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var $y={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{Jt=iu.inject($y),Gt=iu}catch{}}return pl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=fg,f=hg,x=dg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=uv(e,1,!1,null,null,a,r,null,c,f,x,Mv),e[ft]=n.current,jh(e),new Md(n)},pl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=fg,x=hg,R=dg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=uv(e,1,!0,n,a??null,r,c,I,f,x,R,Mv),n.context=fv(null),a=n.current,r=pi(),r=Eo(r),c=ts(r),c.callback=null,es(a,c,r),a=r,n.current.lanes=a,Ki(n,a),oa(n),e[ft]=n.current,jh(e),new nu(n)},pl.version="19.3.0",pl}var Lv;function cE(){if(Lv)return Td.exports;Lv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Td.exports=lE(),Td.exports}var uE=cE();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jp="186",fE=0,Uv=1,hE=2,Tl=1,dE=2,yl=3,nr=0,si=1,fa=2,Fa=0,bl=1,Ov=2,Pv=3,Iv=4,pE=5,co=100,mE=101,gE=102,_E=103,vE=104,xE=200,SE=201,ME=202,yE=203,zx=204,Fx=205,EE=206,TE=207,bE=208,AE=209,RE=210,wE=211,CE=212,DE=213,NE=214,lp=0,cp=1,up=2,wl=3,fp=4,hp=5,dp=6,pp=7,$p=0,LE=1,UE=2,pa=0,Hx=1,Gx=2,Vx=3,kx=4,Xx=5,Wx=6,qx=7,Yx=300,ir=301,mo=302,wd=303,Cd=304,Xu=306,mp=1e3,Wi=1001,gp=1002,zn=1003,OE=1004,au=1005,Vn=1006,Dd=1007,tr=1008,xi=1009,Zx=1010,Kx=1011,Cl=1012,tm=1013,ma=1014,ha=1015,ga=1016,em=1017,nm=1018,Dl=1020,Qx=35902,jx=35899,Jx=1021,$x=1022,qi=1023,Va=1026,er=1027,tS=1028,im=1029,ar=1030,am=1031,sm=1033,Cu=33776,Du=33777,Nu=33778,Lu=33779,_p=35840,vp=35841,xp=35842,Sp=35843,Mp=36196,yp=37492,Ep=37496,Tp=37488,bp=37489,Ou=37490,Ap=37491,Rp=37808,wp=37809,Cp=37810,Dp=37811,Np=37812,Lp=37813,Up=37814,Op=37815,Pp=37816,Ip=37817,Bp=37818,zp=37819,Fp=37820,Hp=37821,Gp=36492,Vp=36494,kp=36495,Xp=36283,Wp=36284,Pu=36285,qp=36286,PE=3200,Iu=0,IE=1,Ts="",vi="srgb",Bu="srgb-linear",zu="linear",Ye="srgb",Nd=7680,BE=519,zE=512,FE=513,HE=514,rm=515,GE=516,VE=517,om=518,kE=519,XE=35044,Bv="300 es",da=2e3,Nl=2001;function WE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Fu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function qE(){const o=Fu("canvas");return o.style.display="block",o}const zv={};function Fv(...o){const t="THREE."+o.shift();console.log(t,...o)}function eS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function oe(...o){o=eS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Be(...o){o=eS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function ho(...o){const t=o.join(" ");t in zv||(zv[t]=!0,oe(...o))}function YE(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const ZE={[lp]:cp,[up]:dp,[fp]:pp,[wl]:hp,[cp]:lp,[dp]:up,[pp]:fp,[hp]:wl};class sr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hv=1234567;const Al=Math.PI/180,Ll=180/Math.PI;function _o(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function De(o,t,i){return Math.max(t,Math.min(i,o))}function lm(o,t){return(o%t+t)%t}function KE(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function QE(o,t,i){return o!==t?(i-o)/(t-o):0}function Rl(o,t,i){return(1-i)*o+i*t}function jE(o,t,i,s){return Rl(o,t,1-Math.exp(-i*s))}function JE(o,t=1){return t-Math.abs(lm(o,t*2)-t)}function $E(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function tT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function eT(o,t){return o+Math.floor(Math.random()*(t-o+1))}function nT(o,t){return o+Math.random()*(t-o)}function iT(o){return o*(.5-Math.random())}function aT(o){o!==void 0&&(Hv=o);let t=Hv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sT(o){return o*Al}function rT(o){return o*Ll}function oT(o){return o>0&&Number.isInteger(o)&&2**Math.round(Math.log2(o))===o}function lT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function cT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function uT(o,t,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),m=u((t+s)/2),v=h((t+s)/2),g=u((t-s)/2),_=h((t-s)/2),y=u((s-t)/2),T=h((s-t)/2);switch(l){case"XYX":o.set(d*v,p*g,p*_,d*m);break;case"YZY":o.set(p*_,d*v,p*g,d*m);break;case"ZXZ":o.set(p*g,p*_,d*v,d*m);break;case"XZX":o.set(d*v,p*T,p*y,d*m);break;case"YXY":o.set(p*y,d*v,p*T,d*m);break;case"ZYZ":o.set(p*T,p*y,d*v,d*m);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function uo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ul={DEG2RAD:Al,RAD2DEG:Ll,generateUUID:_o,clamp:De,euclideanModulo:lm,mapLinear:KE,inverseLerp:QE,lerp:Rl,damp:jE,pingpong:JE,smoothstep:$E,smootherstep:tT,randInt:eT,randFloat:nT,randFloatSpread:iT,seededRandom:aT,degToRad:sT,radToDeg:rT,isPowerOfTwo:oT,ceilPowerOfTwo:lT,floorPowerOfTwo:cT,setQuaternionFromProperEuler:uT,normalize:Kn,denormalize:uo},mm=class mm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mm.prototype.isVector2=!0;let Ae=mm;class rr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let p=s[l+0],m=s[l+1],v=s[l+2],g=s[l+3],_=u[h+0],y=u[h+1],T=u[h+2],w=u[h+3];if(g!==w||p!==_||m!==y||v!==T){let M=p*_+m*y+v*T+g*w;M<0&&(_=-_,y=-y,T=-T,w=-w,M=-M);let S=1-d;if(M<.9995){const N=Math.acos(M),B=Math.sin(N);S=Math.sin(S*N)/B,d=Math.sin(d*N)/B,p=p*S+_*d,m=m*S+y*d,v=v*S+T*d,g=g*S+w*d}else{p=p*S+_*d,m=m*S+y*d,v=v*S+T*d,g=g*S+w*d;const N=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=N,m*=N,v*=N,g*=N}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],p=s[l+1],m=s[l+2],v=s[l+3],g=u[h],_=u[h+1],y=u[h+2],T=u[h+3];return t[i]=d*T+v*g+p*y-m*_,t[i+1]=p*T+v*_+m*g-d*y,t[i+2]=m*T+v*y+d*_-p*g,t[i+3]=v*T-d*g-p*_-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(l/2),g=d(u/2),_=p(s/2),y=p(l/2),T=p(u/2);switch(h){case"XYZ":this._x=_*v*g+m*y*T,this._y=m*y*g-_*v*T,this._z=m*v*T+_*y*g,this._w=m*v*g-_*y*T;break;case"YXZ":this._x=_*v*g+m*y*T,this._y=m*y*g-_*v*T,this._z=m*v*T-_*y*g,this._w=m*v*g+_*y*T;break;case"ZXY":this._x=_*v*g-m*y*T,this._y=m*y*g+_*v*T,this._z=m*v*T+_*y*g,this._w=m*v*g-_*y*T;break;case"ZYX":this._x=_*v*g-m*y*T,this._y=m*y*g+_*v*T,this._z=m*v*T-_*y*g,this._w=m*v*g+_*y*T;break;case"YZX":this._x=_*v*g+m*y*T,this._y=m*y*g+_*v*T,this._z=m*v*T-_*y*g,this._w=m*v*g-_*y*T;break;case"XZY":this._x=_*v*g-m*y*T,this._y=m*y*g-_*v*T,this._z=m*v*T+_*y*g,this._w=m*v*g+_*y*T;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],v=i[6],g=i[10],_=s+d+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(v-p)*y,this._y=(u-m)*y,this._z=(h-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(v-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+m)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(u-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(h-l)/y,this._x=(u+m)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+h*d+l*m-u*p,this._y=l*v+h*p+u*d-s*m,this._z=u*v+h*m+s*p-l*d,this._w=h*v-s*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,i=Math.sin(i*m)/v,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const gm=class gm{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Gv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Gv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),v=2*(d*i-u*l),g=2*(u*s-h*i);return this.x=i+p*m+h*g-d*v,this.y=s+p*v+d*m-u*g,this.z=l+p*g+u*v-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ld.copy(this).projectOnVector(t),this.sub(Ld)}reflect(t){return this.sub(Ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gm.prototype.isVector3=!0;let k=gm;const Ld=new k,Gv=new rr,_m=class _m{constructor(t,i,s,l,u,h,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,m)}set(t,i,s,l,u,h,d,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=s,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],v=s[4],g=s[7],_=s[2],y=s[5],T=s[8],w=l[0],M=l[3],S=l[6],N=l[1],B=l[4],C=l[7],L=l[2],U=l[5],P=l[8];return u[0]=h*w+d*N+p*L,u[3]=h*M+d*B+p*U,u[6]=h*S+d*C+p*P,u[1]=m*w+v*N+g*L,u[4]=m*M+v*B+g*U,u[7]=m*S+v*C+g*P,u[2]=_*w+y*N+T*L,u[5]=_*M+y*B+T*U,u[8]=_*S+y*C+T*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8];return i*h*v-i*d*m-s*u*v+s*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=v*h-d*m,_=d*p-v*u,y=m*u-h*p,T=i*g+s*_+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=g*w,t[1]=(l*m-v*s)*w,t[2]=(d*s-l*h)*w,t[3]=_*w,t[4]=(v*i-l*p)*w,t[5]=(l*u-d*i)*w,t[6]=y*w,t[7]=(s*p-m*i)*w,t[8]=(h*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ud.makeScale(t,i)),this}rotate(t){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ud.makeRotation(-t)),this}translate(t,i){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ud.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_m.prototype.isMatrix3=!0;let he=_m;const Ud=new he,Vv=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kv=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fT(){const o={enabled:!0,workingColorSpace:Bu,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ye&&(l.r=Ha(l.r),l.g=Ha(l.g),l.b=Ha(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ye&&(l.r=po(l.r),l.g=po(l.g),l.b=po(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ts?zu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Bu]:{primaries:t,whitePoint:s,transfer:zu,toXYZ:Vv,fromXYZ:kv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:t,whitePoint:s,transfer:Ye,toXYZ:Vv,fromXYZ:kv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),o}const Ue=fT();function Ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function po(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qr;class hT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Qr===void 0&&(Qr=Fu("canvas")),Qr.width=t.width,Qr.height=t.height;const l=Qr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Qr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Fu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ha(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ha(i[s]/255)*255):i[s]=Ha(i[s]);return{data:i,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dT=0;class cm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=_o(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Od(l[h].image)):u.push(Od(l[h]))}else u=Od(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Od(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let pT=0;const Pd=new k;class kn extends sr{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=Wi,l=Wi,u=Vn,h=tr,d=qi,p=xi,m=kn.DEFAULT_ANISOTROPY,v=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=_o(),this.name="",this.source=new cm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pd).x}get height(){return this.source.getSize(Pd).y}get depth(){return this.source.getSize(Pd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mp:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case gp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mp:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case gp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Yx;kn.DEFAULT_ANISOTROPY=1;const vm=class vm{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,m=p[0],v=p[4],g=p[8],_=p[1],y=p[5],T=p[9],w=p[2],M=p[6],S=p[10];if(Math.abs(v-_)<.01&&Math.abs(g-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+w)<.1&&Math.abs(T+M)<.1&&Math.abs(m+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(m+1)/2,C=(y+1)/2,L=(S+1)/2,U=(v+_)/4,P=(g+w)/4,b=(T+M)/4;return B>C&&B>L?B<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(B),l=U/s,u=P/s):C>L?C<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),s=U/l,u=b/l):L<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(L),s=P/u,l=b/u),this.set(s,l,u,i),this}let N=Math.sqrt((M-T)*(M-T)+(g-w)*(g-w)+(_-v)*(_-v));return Math.abs(N)<.001&&(N=1),this.x=(M-T)/N,this.y=(g-w)/N,this.z=(_-v)/N,this.w=Math.acos((m+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vm.prototype.isVector4=!0;let rn=vm;class mT extends sr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},u=new kn(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new cm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends mT{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class nS extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gT extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ku=class ku{constructor(t,i,s,l,u,h,d,p,m,v,g,_,y,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,m,v,g,_,y,T,w,M)}set(t,i,s,l,u,h,d,p,m,v,g,_,y,T,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=h,S[9]=d,S[13]=p,S[2]=m,S[6]=v,S[10]=g,S[14]=_,S[3]=y,S[7]=T,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ku().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/jr.setFromMatrixColumn(t,0).length(),u=1/jr.setFromMatrixColumn(t,1).length(),h=1/jr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const _=h*v,y=h*g,T=d*v,w=d*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=y+T*m,i[5]=_-w*m,i[9]=-d*p,i[2]=w-_*m,i[6]=T+y*m,i[10]=h*p}else if(t.order==="YXZ"){const _=p*v,y=p*g,T=m*v,w=m*g;i[0]=_+w*d,i[4]=T*d-y,i[8]=h*m,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=y*d-T,i[6]=w+_*d,i[10]=h*p}else if(t.order==="ZXY"){const _=p*v,y=p*g,T=m*v,w=m*g;i[0]=_-w*d,i[4]=-h*g,i[8]=T+y*d,i[1]=y+T*d,i[5]=h*v,i[9]=w-_*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const _=h*v,y=h*g,T=d*v,w=d*g;i[0]=p*v,i[4]=T*m-y,i[8]=_*m+w,i[1]=p*g,i[5]=w*m+_,i[9]=y*m-T,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const _=h*p,y=h*m,T=d*p,w=d*m;i[0]=p*v,i[4]=w-_*g,i[8]=T*g+y,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-m*v,i[6]=y*g+T,i[10]=_-w*g}else if(t.order==="XZY"){const _=h*p,y=h*m,T=d*p,w=d*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=_*g+w,i[5]=h*v,i[9]=y*g-T,i[2]=T*g-y,i[6]=d*v,i[10]=w*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_T,t,vT)}lookAt(t,i,s){const l=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),vs.crossVectors(s,gi),vs.lengthSq()===0&&(Math.abs(s.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),vs.crossVectors(s,gi)),vs.normalize(),su.crossVectors(gi,vs),l[0]=vs.x,l[4]=su.x,l[8]=gi.x,l[1]=vs.y,l[5]=su.y,l[9]=gi.y,l[2]=vs.z,l[6]=su.z,l[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],v=s[1],g=s[5],_=s[9],y=s[13],T=s[2],w=s[6],M=s[10],S=s[14],N=s[3],B=s[7],C=s[11],L=s[15],U=l[0],P=l[4],b=l[8],D=l[12],F=l[1],V=l[5],Q=l[9],rt=l[13],Y=l[2],tt=l[6],X=l[10],Z=l[14],ht=l[3],at=l[7],nt=l[11],xt=l[15];return u[0]=h*U+d*F+p*Y+m*ht,u[4]=h*P+d*V+p*tt+m*at,u[8]=h*b+d*Q+p*X+m*nt,u[12]=h*D+d*rt+p*Z+m*xt,u[1]=v*U+g*F+_*Y+y*ht,u[5]=v*P+g*V+_*tt+y*at,u[9]=v*b+g*Q+_*X+y*nt,u[13]=v*D+g*rt+_*Z+y*xt,u[2]=T*U+w*F+M*Y+S*ht,u[6]=T*P+w*V+M*tt+S*at,u[10]=T*b+w*Q+M*X+S*nt,u[14]=T*D+w*rt+M*Z+S*xt,u[3]=N*U+B*F+C*Y+L*ht,u[7]=N*P+B*V+C*tt+L*at,u[11]=N*b+B*Q+C*X+L*nt,u[15]=N*D+B*rt+C*Z+L*xt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],v=t[2],g=t[6],_=t[10],y=t[14],T=t[3],w=t[7],M=t[11],S=t[15],N=p*y-m*_,B=d*y-m*g,C=d*_-p*g,L=h*y-m*v,U=h*_-p*v,P=h*g-d*v;return i*(w*N-M*B+S*C)-s*(T*N-M*L+S*U)+l*(T*B-w*L+S*P)-u*(T*C-w*U+M*P)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[1],h=t[5],d=t[9],p=t[2],m=t[6],v=t[10];return i*(h*v-d*m)-s*(u*v-d*p)+l*(u*m-h*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=t[9],_=t[10],y=t[11],T=t[12],w=t[13],M=t[14],S=t[15],N=i*d-s*h,B=i*p-l*h,C=i*m-u*h,L=s*p-l*d,U=s*m-u*d,P=l*m-u*p,b=v*w-g*T,D=v*M-_*T,F=v*S-y*T,V=g*M-_*w,Q=g*S-y*w,rt=_*S-y*M,Y=N*rt-B*Q+C*V+L*F-U*D+P*b;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/Y;return t[0]=(d*rt-p*Q+m*V)*tt,t[1]=(l*Q-s*rt-u*V)*tt,t[2]=(w*P-M*U+S*L)*tt,t[3]=(_*U-g*P-y*L)*tt,t[4]=(p*F-h*rt-m*D)*tt,t[5]=(i*rt-l*F+u*D)*tt,t[6]=(M*C-T*P-S*B)*tt,t[7]=(v*P-_*C+y*B)*tt,t[8]=(h*Q-d*F+m*b)*tt,t[9]=(s*F-i*Q-u*b)*tt,t[10]=(T*U-w*C+S*N)*tt,t[11]=(g*C-v*U-y*N)*tt,t[12]=(d*D-h*V-p*b)*tt,t[13]=(i*V-s*D+l*b)*tt,t[14]=(w*B-T*L-M*N)*tt,t[15]=(v*L-g*B+_*N)*tt,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,p=t.z,m=u*h,v=u*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+s,v*p-l*h,0,m*p-l*d,v*p+l*h,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,v=h+h,g=d+d,_=u*m,y=u*v,T=u*g,w=h*v,M=h*g,S=d*g,N=p*m,B=p*v,C=p*g,L=s.x,U=s.y,P=s.z;return l[0]=(1-(w+S))*L,l[1]=(y+C)*L,l[2]=(T-B)*L,l[3]=0,l[4]=(y-C)*U,l[5]=(1-(_+S))*U,l[6]=(M+N)*U,l[7]=0,l[8]=(T+B)*P,l[9]=(M-N)*P,l[10]=(1-(_+w))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return s.set(1,1,1),i.identity(),this;let h=jr.set(l[0],l[1],l[2]).length();const d=jr.set(l[4],l[5],l[6]).length(),p=jr.set(l[8],l[9],l[10]).length();u<0&&(h=-h),Hi.copy(this);const m=1/h,v=1/d,g=1/p;return Hi.elements[0]*=m,Hi.elements[1]*=m,Hi.elements[2]*=m,Hi.elements[4]*=v,Hi.elements[5]*=v,Hi.elements[6]*=v,Hi.elements[8]*=g,Hi.elements[9]*=g,Hi.elements[10]*=g,i.setFromRotationMatrix(Hi),s.x=h,s.y=d,s.z=p,this}makePerspective(t,i,s,l,u,h,d=da,p=!1){const m=this.elements,v=2*u/(i-t),g=2*u/(s-l),_=(i+t)/(i-t),y=(s+l)/(s-l);let T,w;if(p)T=u/(h-u),w=h*u/(h-u);else if(d===da)T=-(h+u)/(h-u),w=-2*h*u/(h-u);else if(d===Nl)T=-h/(h-u),w=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=da,p=!1){const m=this.elements,v=2/(i-t),g=2/(s-l),_=-(i+t)/(i-t),y=-(s+l)/(s-l);let T,w;if(p)T=1/(h-u),w=h/(h-u);else if(d===da)T=-2/(h-u),w=-(h+u)/(h-u);else if(d===Nl)T=-1/(h-u),w=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=g,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};ku.prototype.isMatrix4=!0;let on=ku;const jr=new k,Hi=new on,_T=new k(0,0,0),vT=new k(1,1,1),vs=new k,su=new k,gi=new k,Xv=new on,Wv=new rr;class ka{constructor(t=0,i=0,s=0,l=ka.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],v=l[9],g=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-De(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(De(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-De(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Xv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Wv.setFromEuler(this),this.setFromQuaternion(Wv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ka.DEFAULT_ORDER="XYZ";class iS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xT=0;const qv=new k,Jr=new rr,Ua=new on,ru=new k,ml=new k,ST=new k,MT=new rr,Yv=new k(1,0,0),Zv=new k(0,1,0),Kv=new k(0,0,1),Qv={type:"added"},yT={type:"removed"},$r={type:"childadded",child:null},Id={type:"childremoved",child:null};class Nn extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new k,i=new ka,s=new rr,l=new k(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new he}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Jr.setFromAxisAngle(t,i),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,i){return Jr.setFromAxisAngle(t,i),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(Yv,t)}rotateY(t){return this.rotateOnAxis(Zv,t)}rotateZ(t){return this.rotateOnAxis(Kv,t)}translateOnAxis(t,i){return qv.copy(t).applyQuaternion(this.quaternion),this.position.add(qv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Yv,t)}translateY(t){return this.translateOnAxis(Zv,t)}translateZ(t){return this.translateOnAxis(Kv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?ru.copy(t):ru.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(ml,ru,this.up):Ua.lookAt(ru,ml,this.up),this.quaternion.setFromRotationMatrix(Ua),l&&(Ua.extractRotation(l.matrixWorld),Jr.setFromRotationMatrix(Ua),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qv),$r.child=t,this.dispatchEvent($r),$r.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(yT),Id.child=t,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qv),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,t,ST),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,MT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const u=this.children;for(let h=0,d=u.length;h<d;h++)u[h].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];u(t.shapes,g)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),v=h(t.images),g=h(t.shapes),_=h(t.skeletons),y=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Nn.DEFAULT_UP=new k(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sn extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ET={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(m,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],_=v.position.distanceTo(g.position),y=.02,T=.005;m.inputState.pinching&&_>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&_<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ET)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new sn;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const aS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},ou={h:0,s:0,l:0};function zd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ue.workingColorSpace){if(t=lm(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=zd(h,u,t+1/3),this.g=zd(h,u,t),this.b=zd(h,u,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,i=vi){function s(u){u!==void 0&&parseFloat(u)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:oe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=vi){const s=aS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}copyLinearToSRGB(t){return this.r=po(t.r),this.g=po(t.g),this.b=po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return Ue.workingToColorSpace(Gn.copy(this),t),Math.round(De(Gn.r*255,0,255))*65536+Math.round(De(Gn.g*255,0,255))*256+Math.round(De(Gn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,u=Gn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let p,m;const v=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=v<=.5?g/(h+d):g/(2-h-d),h){case s:p=(l-u)/g+(l<u?6:0);break;case l:p=(u-s)/g+2;break;case u:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Gn.copy(this),i),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=vi){Ue.workingToColorSpace(Gn.copy(this),t);const i=Gn.r,s=Gn.g,l=Gn.b;return t!==vi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+i,xs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(xs),t.getHSL(ou);const s=Rl(xs.h,ou.h,i),l=Rl(xs.s,ou.s,i),u=Rl(xs.l,ou.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Me;Me.NAMES=aS;class um{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Me(t),this.near=i,this.far=s}clone(){return new um(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class TT extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ka,this.environmentIntensity=1,this.environmentRotation=new ka,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Gi=new k,Oa=new k,Fd=new k,Pa=new k,to=new k,eo=new k,jv=new k,Hd=new k,Gd=new k,Vd=new k,kd=new rn,Xd=new rn,Wd=new rn;class Xi{constructor(t=new k,i=new k,s=new k){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Gi.subVectors(t,i),l.cross(Gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Gi.subVectors(l,i),Oa.subVectors(s,i),Fd.subVectors(t,i);const h=Gi.dot(Gi),d=Gi.dot(Oa),p=Gi.dot(Fd),m=Oa.dot(Oa),v=Oa.dot(Fd),g=h*m-d*d;if(g===0)return u.set(0,0,0),null;const _=1/g,y=(m*p-d*v)*_,T=(h*v-d*p)*_;return u.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(t,i,s,l,u,h,d,p){return this.getBarycoord(t,i,s,l,Pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Pa.x),p.addScaledVector(h,Pa.y),p.addScaledVector(d,Pa.z),p)}static getInterpolatedAttribute(t,i,s,l,u,h){return kd.setScalar(0),Xd.setScalar(0),Wd.setScalar(0),kd.fromBufferAttribute(t,i),Xd.fromBufferAttribute(t,s),Wd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(kd,u.x),h.addScaledVector(Xd,u.y),h.addScaledVector(Wd,u.z),h}static isFrontFacing(t,i,s,l){return Gi.subVectors(s,i),Oa.subVectors(t,i),Gi.cross(Oa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),Gi.cross(Oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Xi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;to.subVectors(l,s),eo.subVectors(u,s),Hd.subVectors(t,s);const p=to.dot(Hd),m=eo.dot(Hd);if(p<=0&&m<=0)return i.copy(s);Gd.subVectors(t,l);const v=to.dot(Gd),g=eo.dot(Gd);if(v>=0&&g<=v)return i.copy(l);const _=p*g-v*m;if(_<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(s).addScaledVector(to,h);Vd.subVectors(t,u);const y=to.dot(Vd),T=eo.dot(Vd);if(T>=0&&y<=T)return i.copy(u);const w=y*m-p*T;if(w<=0&&m>=0&&T<=0)return d=m/(m-T),i.copy(s).addScaledVector(eo,d);const M=v*T-y*g;if(M<=0&&g-v>=0&&y-T>=0)return jv.subVectors(u,l),d=(g-v)/(g-v+(y-T)),i.copy(l).addScaledVector(jv,d);const S=1/(M+w+_);return h=w*S,d=_*S,i.copy(s).addScaledVector(to,h).addScaledVector(eo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Pl{constructor(t=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Vi):Vi.fromBufferAttribute(u,h),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),lu.copy(s.boundingBox)),lu.applyMatrix4(t.matrixWorld),this.union(lu)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gl),cu.subVectors(this.max,gl),no.subVectors(t.a,gl),io.subVectors(t.b,gl),ao.subVectors(t.c,gl),Ss.subVectors(io,no),Ms.subVectors(ao,io),Ks.subVectors(no,ao);let i=[0,-Ss.z,Ss.y,0,-Ms.z,Ms.y,0,-Ks.z,Ks.y,Ss.z,0,-Ss.x,Ms.z,0,-Ms.x,Ks.z,0,-Ks.x,-Ss.y,Ss.x,0,-Ms.y,Ms.x,0,-Ks.y,Ks.x,0];return!qd(i,no,io,ao,cu)||(i=[1,0,0,0,1,0,0,0,1],!qd(i,no,io,ao,cu))?!1:(uu.crossVectors(Ss,Ms),i=[uu.x,uu.y,uu.z],qd(i,no,io,ao,cu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ia=[new k,new k,new k,new k,new k,new k,new k,new k],Vi=new k,lu=new Pl,no=new k,io=new k,ao=new k,Ss=new k,Ms=new k,Ks=new k,gl=new k,cu=new k,uu=new k,Qs=new k;function qd(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Qs.fromArray(o,u);const d=l.x*Math.abs(Qs.x)+l.y*Math.abs(Qs.y)+l.z*Math.abs(Qs.z),p=t.dot(Qs),m=i.dot(Qs),v=s.dot(Qs);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const Sn=new k,fu=new Ae;let bT=0;class Ga extends sr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=XE,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)fu.fromBufferAttribute(this,i),fu.applyMatrix3(t),this.setXY(i,fu.x,fu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=uo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),u=Kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class sS extends Ga{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class rS extends Ga{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class hn extends Ga{constructor(t,i,s){super(new Float32Array(t),i,s)}}const AT=new Pl,_l=new k,Yd=new k;class Wu{constructor(t=new k,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):AT.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_l.subVectors(t,this.center);const i=_l.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(_l,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_l.copy(t.center).add(Yd)),this.expandByPoint(_l.copy(t.center).sub(Yd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let RT=0;const Ni=new on,Zd=new Nn,so=new k,_i=new Pl,vl=new Pl,wn=new k;class Jn extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(WE(t)?rS:sS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new he().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ni.makeRotationFromQuaternion(t),this.applyMatrix4(Ni),this}rotateX(t){return Ni.makeRotationX(t),this.applyMatrix4(Ni),this}rotateY(t){return Ni.makeRotationY(t),this.applyMatrix4(Ni),this}rotateZ(t){return Ni.makeRotationZ(t),this.applyMatrix4(Ni),this}translate(t,i,s){return Ni.makeTranslation(t,i,s),this.applyMatrix4(Ni),this}scale(t,i,s){return Ni.makeScale(t,i,s),this.applyMatrix4(Ni),this}lookAt(t){return Zd.lookAt(t),Zd.updateMatrix(),this.applyMatrix4(Zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new hn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];_i.setFromBufferAttribute(u),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const s=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];vl.setFromBufferAttribute(d),this.morphTargetsRelative?(wn.addVectors(_i.min,vl.min),_i.expandByPoint(wn),wn.addVectors(_i.max,vl.max),_i.expandByPoint(wn)):(_i.expandByPoint(vl.min),_i.expandByPoint(vl.max))}_i.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)wn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(wn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)wn.fromBufferAttribute(d,m),p&&(so.fromBufferAttribute(t,m),wn.add(so)),l=Math.max(l,s.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new Ga(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const d=[],p=[];for(let b=0;b<s.count;b++)d[b]=new k,p[b]=new k;const m=new k,v=new k,g=new k,_=new Ae,y=new Ae,T=new Ae,w=new k,M=new k;function S(b,D,F){m.fromBufferAttribute(s,b),v.fromBufferAttribute(s,D),g.fromBufferAttribute(s,F),_.fromBufferAttribute(u,b),y.fromBufferAttribute(u,D),T.fromBufferAttribute(u,F),v.sub(m),g.sub(m),y.sub(_),T.sub(_);const V=1/(y.x*T.y-T.x*y.y);isFinite(V)&&(w.copy(v).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(V),M.copy(g).multiplyScalar(y.x).addScaledVector(v,-T.x).multiplyScalar(V),d[b].add(w),d[D].add(w),d[F].add(w),p[b].add(M),p[D].add(M),p[F].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let b=0,D=N.length;b<D;++b){const F=N[b],V=F.start,Q=F.count;for(let rt=V,Y=V+Q;rt<Y;rt+=3)S(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const B=new k,C=new k,L=new k,U=new k;function P(b){L.fromBufferAttribute(l,b),U.copy(L);const D=d[b];B.copy(D),B.sub(L.multiplyScalar(L.dot(D))).normalize(),C.crossVectors(U,D);const V=C.dot(p[b])<0?-1:1;h.setXYZW(b,B.x,B.y,B.z,V)}for(let b=0,D=N.length;b<D;++b){const F=N[b],V=F.start,Q=F.count;for(let rt=V,Y=V+Q;rt<Y;rt+=3)P(t.getX(rt+0)),P(t.getX(rt+1)),P(t.getX(rt+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ga(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const l=new k,u=new k,h=new k,d=new k,p=new k,m=new k,v=new k,g=new k;if(t)for(let _=0,y=t.count;_<y;_+=3){const T=t.getX(_+0),w=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),v.subVectors(h,u),g.subVectors(l,u),v.cross(g),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),d.add(v),p.add(v),m.add(v),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),v.subVectors(h,u),g.subVectors(l,u),v.cross(g),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)wn.fromBufferAttribute(t,i),wn.normalize(),t.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function t(d,p){const m=d.array,v=d.itemSize,g=d.normalized,_=new m.constructor(p.length*v);let y=0,T=0;for(let w=0,M=p.length;w<M;w++){d.isInterleavedBufferAttribute?y=p[w]*d.data.stride+d.offset:y=p[w]*v;for(let S=0;S<v;S++)_[T++]=m[y++]}return new Ga(_,v,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,g=m.length;v<g;v++){const _=m[v],y=t(_,s);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,_=m.length;g<_;g++){const y=m[g];v.push(y.toJSON(t.data))}v.length>0&&(l[p]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const u=t.morphAttributes;for(const m in u){const v=[],g=u[m];for(let _=0,y=g.length;_<y;_++)v.push(g[_].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,v=h.length;m<v;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kd=new k,wT=new k,CT=new he;class Es{constructor(t=new k(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Kd.subVectors(s,i).cross(wT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Kd),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/u;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||CT.getNormalMatrix(t),l=this.coplanarPoint(Kd).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let DT=0;class or extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=bl,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zx,this.blendDst=Fx,this.blendEquation=co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=BE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nd,this.stencilZFail=Nd,this.stencilZPass=Nd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new Es().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ae().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ba=new k,Qd=new k,hu=new k,du=new k;class oS{constructor(t=new k,i=new k(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ba)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ba.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ba.copy(this.origin).addScaledVector(this.direction,i),Ba.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Qd.copy(t).add(i).multiplyScalar(.5),hu.copy(i).sub(t).normalize(),du.copy(this.origin).sub(Qd);const u=t.distanceTo(i)*.5,h=-this.direction.dot(hu),d=du.dot(this.direction),p=-du.dot(hu),m=du.lengthSq(),v=Math.abs(1-h*h);let g,_,y,T;if(v>0)if(g=h*p-d,_=h*d-p,T=u*v,g>=0)if(_>=-T)if(_<=T){const w=1/v;g*=w,_*=w,y=g*(g+h*_+2*d)+_*(h*g+_+2*p)+m}else _=u,g=Math.max(0,-(h*_+d)),y=-g*g+_*(_+2*p)+m;else _=-u,g=Math.max(0,-(h*_+d)),y=-g*g+_*(_+2*p)+m;else _<=-T?(g=Math.max(0,-(-h*u+d)),_=g>0?-u:Math.min(Math.max(-u,-p),u),y=-g*g+_*(_+2*p)+m):_<=T?(g=0,_=Math.min(Math.max(-u,-p),u),y=_*(_+2*p)+m):(g=Math.max(0,-(h*u+d)),_=g>0?u:Math.min(Math.max(-u,-p),u),y=-g*g+_*(_+2*p)+m);else _=h>0?-u:u,g=Math.max(0,-(h*_+d)),y=-g*g+_*(_+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Qd).addScaledVector(hu,_),y}intersectSphere(t,i){if(t.radius<0)return null;Ba.subVectors(t.center,this.origin);const s=Ba.dot(this.direction),l=Ba.dot(Ba)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return m>=0?(s=(t.min.x-_.x)*m,l=(t.max.x-_.x)*m):(s=(t.max.x-_.x)*m,l=(t.min.x-_.x)*m),v>=0?(u=(t.min.y-_.y)*v,h=(t.max.y-_.y)*v):(u=(t.max.y-_.y)*v,h=(t.min.y-_.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-_.z)*g,p=(t.max.z-_.z)*g):(d=(t.max.z-_.z)*g,p=(t.min.z-_.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ba)!==null}intersectTriangle(t,i,s,l,u){const h=this.origin,d=this.direction,p=d.x,m=d.y,v=d.z,g=t.x-h.x,_=t.y-h.y,y=t.z-h.z,T=i.x-h.x,w=i.y-h.y,M=i.z-h.z,S=s.x-h.x,N=s.y-h.y,B=s.z-h.z,C=Math.abs(p),L=Math.abs(m),U=Math.abs(v);let P,b,D,F,V,Q,rt,Y,tt,X,Z,ht;if(C>=L&&C>=U?(D=p,Q=g,tt=T,ht=S,p>=0?(P=m,b=v,F=_,V=y,rt=w,Y=M,X=N,Z=B):(P=v,b=m,F=y,V=_,rt=M,Y=w,X=B,Z=N)):L>=U?(D=m,Q=_,tt=w,ht=N,m>=0?(P=v,b=p,F=y,V=g,rt=M,Y=T,X=B,Z=S):(P=p,b=v,F=g,V=y,rt=T,Y=M,X=S,Z=B)):(D=v,Q=y,tt=M,ht=B,v>=0?(P=p,b=m,F=g,V=_,rt=T,Y=w,X=S,Z=N):(P=m,b=p,F=_,V=g,rt=w,Y=T,X=N,Z=S)),D===0)return null;const at=P/D,nt=b/D,xt=1/D,Zt=F-at*Q,Kt=V-nt*Q,z=rt-at*tt,mt=Y-nt*tt,Rt=X-at*ht,j=Z-nt*ht,dt=Rt*mt-j*z,bt=Zt*j-Kt*Rt,Bt=z*Kt-mt*Zt;if(l){if(dt<0||bt<0||Bt<0)return null}else if((dt<0||bt<0||Bt<0)&&(dt>0||bt>0||Bt>0))return null;const _t=dt+bt+Bt;if(_t===0)return null;const wt=xt*(dt*Q+bt*tt+Bt*ht);return(_t>0?wt<0:wt>0)?null:this.at(wt/_t,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class za extends or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.combine=$p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Jv=new on,js=new oS,pu=new Wu,$v=new k,mu=new k,gu=new k,_u=new k,jd=new k,vu=new k,tx=new k,xu=new k;class re extends Nn{constructor(t=new Jn,i=new za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){vu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],g=u[p];v!==0&&(jd.fromBufferAttribute(g,t),h?vu.addScaledVector(jd,v):vu.addScaledVector(jd.sub(i),v))}i.add(vu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pu.copy(s.boundingSphere),pu.applyMatrix4(u),js.copy(t.ray).recast(t.near),!(pu.containsPoint(js.origin)===!1&&(js.intersectSphere(pu,$v)===null||js.origin.distanceToSquared($v)>(t.far-t.near)**2))&&(Jv.copy(u).invert(),js.copy(t.ray).applyMatrix4(Jv),!(s.boundingBox!==null&&js.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,js)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,_=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,w=_.length;T<w;T++){const M=_[T],S=h[M.materialIndex],N=Math.max(M.start,y.start),B=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let C=N,L=B;C<L;C+=3){const U=d.getX(C),P=d.getX(C+1),b=d.getX(C+2);l=Su(this,S,t,s,m,v,g,U,P,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=T,S=w;M<S;M+=3){const N=d.getX(M),B=d.getX(M+1),C=d.getX(M+2);l=Su(this,h,t,s,m,v,g,N,B,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,w=_.length;T<w;T++){const M=_[T],S=h[M.materialIndex],N=Math.max(M.start,y.start),B=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let C=N,L=B;C<L;C+=3){const U=C,P=C+1,b=C+2;l=Su(this,S,t,s,m,v,g,U,P,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=T,S=w;M<S;M+=3){const N=M,B=M+1,C=M+2;l=Su(this,h,t,s,m,v,g,N,B,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function NT(o,t,i,s,l,u,h,d){let p;if(t.side===si?p=s.intersectTriangle(h,u,l,!0,d):p=s.intersectTriangle(l,u,h,t.side===nr,d),p===null)return null;xu.copy(d),xu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(xu);return m<i.near||m>i.far?null:{distance:m,point:xu.clone(),object:o}}function Su(o,t,i,s,l,u,h,d,p,m){o.getVertexPosition(d,mu),o.getVertexPosition(p,gu),o.getVertexPosition(m,_u);const v=NT(o,t,i,s,mu,gu,_u,tx);if(v){const g=new k;Xi.getBarycoord(tx,mu,gu,_u,g),l&&(v.uv=Xi.getInterpolatedAttribute(l,d,p,m,g,new Ae)),u&&(v.uv1=Xi.getInterpolatedAttribute(u,d,p,m,g,new Ae)),h&&(v.normal=Xi.getInterpolatedAttribute(h,d,p,m,g,new k),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:p,c:m,normal:new k,materialIndex:0};Xi.getNormal(mu,gu,_u,_.normal),v.face=_,v.barycoord=g}return v}class LT extends kn{constructor(t=null,i=1,s=1,l,u,h,d,p,m=zn,v=zn,g,_){super(null,h,d,p,m,v,l,u,g,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Js=new Wu,UT=new Ae(.5,.5),Mu=new k;class fm{constructor(t=new Es,i=new Es,s=new Es,l=new Es,u=new Es,h=new Es){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=da,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],p=u[2],m=u[3],v=u[4],g=u[5],_=u[6],y=u[7],T=u[8],w=u[9],M=u[10],S=u[11],N=u[12],B=u[13],C=u[14],L=u[15];if(l[0].setComponents(m-h,y-v,S-T,L-N).normalize(),l[1].setComponents(m+h,y+v,S+T,L+N).normalize(),l[2].setComponents(m+d,y+g,S+w,L+B).normalize(),l[3].setComponents(m-d,y-g,S-w,L-B).normalize(),s)l[4].setComponents(p,_,M,C).normalize(),l[5].setComponents(m-p,y-_,S-M,L-C).normalize();else if(l[4].setComponents(m-p,y-_,S-M,L-C).normalize(),i===da)l[5].setComponents(m+p,y+_,S+M,L+C).normalize();else if(i===Nl)l[5].setComponents(p,_,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(t){Js.center.set(0,0,0);const i=UT.distanceTo(t.center);return Js.radius=.7071067811865476+i,Js.applyMatrix4(t.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Mu.x=l.normal.x>0?t.max.x:t.min.x,Mu.y=l.normal.y>0?t.max.y:t.min.y,Mu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lS extends or{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hu=new k,Gu=new k,ex=new on,xl=new oS,yu=new Wu,Jd=new k,nx=new k;class OT extends Nn{constructor(t=new Jn,i=new lS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Hu.fromBufferAttribute(i,l-1),Gu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Hu.distanceTo(Gu);t.setAttribute("lineDistance",new hn(s,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),yu.copy(s.boundingSphere),yu.applyMatrix4(l),yu.radius+=u,t.ray.intersectsSphere(yu)===!1)return;ex.copy(l).invert(),xl.copy(t.ray).applyMatrix4(ex);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=s.index,_=s.attributes.position;if(v!==null){const y=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let w=y,M=T-1;w<M;w+=m){const S=v.getX(w),N=v.getX(w+1),B=Eu(this,t,xl,p,S,N,w);B&&i.push(B)}if(this.isLineLoop){const w=v.getX(T-1),M=v.getX(y),S=Eu(this,t,xl,p,w,M,T-1);S&&i.push(S)}}else{const y=Math.max(0,h.start),T=Math.min(_.count,h.start+h.count);for(let w=y,M=T-1;w<M;w+=m){const S=Eu(this,t,xl,p,w,w+1,w);S&&i.push(S)}if(this.isLineLoop){const w=Eu(this,t,xl,p,T-1,y,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Eu(o,t,i,s,l,u,h){const d=o.geometry.attributes.position;if(Hu.fromBufferAttribute(d,l),Gu.fromBufferAttribute(d,u),i.distanceSqToSegment(Hu,Gu,Jd,nx)>s)return;Jd.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(Jd);if(!(m<t.near||m>t.far))return{distance:m,point:nx.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class cS extends kn{constructor(t=[],i=ir,s,l,u,h,d,p,m,v){super(t,i,s,l,u,h,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class PT extends kn{constructor(t,i,s,l,u,h,d,p,m){super(t,i,s,l,u,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ol extends kn{constructor(t,i,s=ma,l,u,h,d=zn,p=zn,m,v=Va,g=1){if(v!==Va&&v!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:g};super(_,l,u,h,d,p,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class IT extends Ol{constructor(t,i=ma,s=ir,l,u,h=zn,d=zn,p,m=Va){const v={width:t,height:t,depth:1},g=[v,v,v,v,v,v];super(t,t,i,s,l,u,h,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class uS extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Dn extends Jn{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],v=[],g=[];let _=0,y=0;T("z","y","x",-1,-1,s,i,t,h,u,0),T("z","y","x",1,-1,s,i,-t,h,u,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,u,4),T("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new hn(m,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(g,2));function T(w,M,S,N,B,C,L,U,P,b,D){const F=C/P,V=L/b,Q=C/2,rt=L/2,Y=U/2,tt=P+1,X=b+1;let Z=0,ht=0;const at=new k;for(let nt=0;nt<X;nt++){const xt=nt*V-rt;for(let Zt=0;Zt<tt;Zt++){const Kt=Zt*F-Q;at[w]=Kt*N,at[M]=xt*B,at[S]=Y,m.push(at.x,at.y,at.z),at[w]=0,at[M]=0,at[S]=U>0?1:-1,v.push(at.x,at.y,at.z),g.push(Zt/P),g.push(1-nt/b),Z+=1}}for(let nt=0;nt<b;nt++)for(let xt=0;xt<P;xt++){const Zt=_+xt+tt*nt,Kt=_+xt+tt*(nt+1),z=_+(xt+1)+tt*(nt+1),mt=_+(xt+1)+tt*nt;p.push(Zt,Kt,mt),p.push(Kt,z,mt),ht+=6}d.addGroup(y,ht,D),y+=ht,_+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Li extends Jn{constructor(t=1,i=1,s=1,l=32,u=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const v=[],g=[],_=[],y=[];let T=0;const w=[],M=s/2;let S=0;N(),h===!1&&(t>0&&B(!0),i>0&&B(!1)),this.setIndex(v),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(y,2));function N(){const C=new k,L=new k;let U=0;const P=(i-t)/s;for(let b=0;b<=u;b++){const D=[],F=b/u,V=F*(i-t)+t;for(let Q=0;Q<=l;Q++){const rt=Q/l,Y=rt*p+d,tt=Math.sin(Y),X=Math.cos(Y);L.x=V*tt,L.y=-F*s+M,L.z=V*X,g.push(L.x,L.y,L.z),C.set(tt,P,X).normalize(),_.push(C.x,C.y,C.z),y.push(rt,1-F),D.push(T++)}w.push(D)}for(let b=0;b<l;b++)for(let D=0;D<u;D++){const F=w[D][b],V=w[D+1][b],Q=w[D+1][b+1],rt=w[D][b+1];(t>0||D!==0)&&(v.push(F,V,rt),U+=3),(i>0||D!==u-1)&&(v.push(V,Q,rt),U+=3)}m.addGroup(S,U,0),S+=U}function B(C){const L=T,U=new Ae,P=new k;let b=0;const D=C===!0?t:i,F=C===!0?1:-1;for(let Q=1;Q<=l;Q++)g.push(0,M*F,0),_.push(0,F,0),y.push(.5,.5),T++;const V=T;for(let Q=0;Q<=l;Q++){const Y=Q/l*p+d,tt=Math.cos(Y),X=Math.sin(Y);P.x=D*X,P.y=M*F,P.z=D*tt,g.push(P.x,P.y,P.z),_.push(0,F,0),U.x=tt*.5+.5,U.y=X*.5*F+.5,y.push(U.x,U.y),T++}for(let Q=0;Q<l;Q++){const rt=L+Q,Y=V+Q;C===!0?v.push(Y,Y+1,rt):v.push(Y+1,Y,rt),b+=3}m.addGroup(S,b,C===!0?1:2),S+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bs extends Jn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,v=p+1,g=t/d,_=i/p,y=[],T=[],w=[],M=[];for(let S=0;S<v;S++){const N=S*_-h;for(let B=0;B<m;B++){const C=B*g-u;T.push(C,-N,0),w.push(0,0,1),M.push(B/d),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let N=0;N<d;N++){const B=N+m*S,C=N+m*(S+1),L=N+1+m*(S+1),U=N+1+m*S;y.push(B,C,U),y.push(C,L,U)}this.setIndex(y),this.setAttribute("position",new hn(T,3)),this.setAttribute("normal",new hn(w,3)),this.setAttribute("uv",new hn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.width,t.height,t.widthSegments,t.heightSegments)}}class hm extends Jn{constructor(t=.5,i=1,s=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let g=t;const _=(i-t)/l,y=new k,T=new Ae;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const S=u+M/s*h;y.x=g*Math.cos(S),y.y=g*Math.sin(S),p.push(y.x,y.y,y.z),m.push(0,0,1),T.x=(y.x/i+1)/2,T.y=(y.y/i+1)/2,v.push(T.x,T.y)}g+=_}for(let w=0;w<l;w++){const M=w*(s+1);for(let S=0;S<s;S++){const N=S+M,B=N,C=N+s+1,L=N+s+2,U=N+1;d.push(B,C,U),d.push(C,L,U)}}this.setIndex(d),this.setAttribute("position",new hn(p,3)),this.setAttribute("normal",new hn(m,3)),this.setAttribute("uv",new hn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class qu extends Jn{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let m=0;const v=[],g=new k,_=new k,y=[],T=[],w=[],M=[];for(let S=0;S<=s;S++){const N=[],B=S/s,C=h+B*d,L=t*Math.cos(C),U=Math.sqrt(t*t-L*L);let P=0;S===0&&h===0?P=.5/i:S===s&&p===Math.PI&&(P=-.5/i);for(let b=0;b<=i;b++){const D=b/i,F=l+D*u;g.x=-U*Math.cos(F),g.y=L,g.z=U*Math.sin(F),T.push(g.x,g.y,g.z),_.copy(g).normalize(),w.push(_.x,_.y,_.z),M.push(D+P,1-B),N.push(m++)}v.push(N)}for(let S=0;S<s;S++)for(let N=0;N<i;N++){const B=v[S][N+1],C=v[S][N],L=v[S+1][N],U=v[S+1][N+1];(S!==0||h>0)&&y.push(B,C,U),(S!==s-1||p<Math.PI)&&y.push(C,L,U)}this.setIndex(y),this.setAttribute("position",new hn(T,3)),this.setAttribute("normal",new hn(w,3)),this.setAttribute("uv",new hn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Yu extends Jn{constructor(t=1,i=.4,s=12,l=48,u=Math.PI*2,h=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:u,thetaStart:h,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const p=[],m=[],v=[],g=[],_=new k,y=new k,T=new k;for(let w=0;w<=s;w++){const M=h+w/s*d;for(let S=0;S<=l;S++){const N=S/l*u;y.x=(t+i*Math.cos(M))*Math.cos(N),y.y=(t+i*Math.cos(M))*Math.sin(N),y.z=i*Math.sin(M),m.push(y.x,y.y,y.z),_.x=t*Math.cos(N),_.y=t*Math.sin(N),T.subVectors(y,_).normalize(),v.push(T.x,T.y,T.z),g.push(S/l),g.push(w/s)}}for(let w=1;w<=s;w++)for(let M=1;M<=l;M++){const S=(l+1)*w+M-1,N=(l+1)*(w-1)+M-1,B=(l+1)*(w-1)+M,C=(l+1)*w+M;p.push(S,N,C),p.push(N,B,C)}this.setIndex(p),this.setAttribute("position",new hn(m,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function go(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(ix(l))l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(ix(l[0])){const u=[];for(let h=0,d=l.length;h<d;h++)u[h]=l[h].clone();t[i][s]=u}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Qn(o){const t={};for(let i=0;i<o.length;i++){const s=go(o[i]);for(const l in s)t[l]=s[l]}return t}function ix(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function BT(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function fS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const zT={clone:go,merge:Qn};var FT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _a extends or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FT,this.fragmentShader=HT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=go(t.uniforms),this.uniformsGroups=BT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Me().setHex(l.value);break;case"v2":this.uniforms[s].value=new Ae().fromArray(l.value);break;case"v3":this.uniforms[s].value=new k().fromArray(l.value);break;case"v4":this.uniforms[s].value=new rn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new he().fromArray(l.value);break;case"m4":this.uniforms[s].value=new on().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class GT extends _a{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ai extends or{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $d extends or{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.combine=$p,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class VT extends or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kT extends or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class dm extends Nn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class XT extends dm{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const tp=new on,ax=new k,sx=new k;class WT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fm,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;ax.setFromMatrixPosition(t.matrixWorld),i.position.copy(ax),sx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(sx),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,s,l){tp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),s.setFromProjectionMatrix(tp,t.coordinateSystem,t.reversedDepth);const u=this._frameExtents,h=l?l.z/u.x:1,d=l?l.w/u.y:1,p=l?l.x/u.x:0,m=l?l.y/u.y:0;t.coordinateSystem===Nl||t.reversedDepth?i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),i.multiply(tp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tu=new k,bu=new rr,la=new k;let hS=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Tu,bu,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tu,bu,la.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Tu,bu,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tu,bu,la.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const ys=new k,rx=new Ae,ox=new Ae;class Ui extends hS{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ll*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ll*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ys.x,ys.y).multiplyScalar(-t/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ys.x,ys.y).multiplyScalar(-t/ys.z)}getViewSize(t,i){return this.getViewBounds(t,rx,ox),i.subVectors(ox,rx)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Al*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class pm extends hS{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qT extends WT{constructor(){super(new pm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lx extends dm{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new qT}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class YT extends dm{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const ro=-90,oo=1;class ZT extends Nn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(ro,oo,t,i);l.layers=this.layers,this.add(l);const u=new Ui(ro,oo,t,i);u.layers=this.layers,this.add(u);const h=new Ui(ro,oo,t,i);h.layers=this.layers,this.add(h);const d=new Ui(ro,oo,t,i);d.layers=this.layers,this.add(d);const p=new Ui(ro,oo,t,i);p.layers=this.layers,this.add(p);const m=new Ui(ro,oo,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===da)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Nl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,v]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(g,_,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class KT extends Ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const xm=class xm{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=s,u[3]=l,this}};xm.prototype.isMatrix2=!0;let cx=xm;function ux(o,t,i,s){const l=QT(s);switch(i){case Jx:return o*t;case tS:return o*t/l.components*l.byteLength;case im:return o*t/l.components*l.byteLength;case ar:return o*t*2/l.components*l.byteLength;case am:return o*t*2/l.components*l.byteLength;case $x:return o*t*3/l.components*l.byteLength;case qi:return o*t*4/l.components*l.byteLength;case sm:return o*t*4/l.components*l.byteLength;case Cu:case Du:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Nu:case Lu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case vp:case Sp:return Math.max(o,16)*Math.max(t,8)/4;case _p:case xp:return Math.max(o,8)*Math.max(t,8)/2;case Mp:case yp:case Tp:case bp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ep:case Ou:case Ap:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Rp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case wp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Cp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Dp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Np:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Lp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Up:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Op:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case zp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Fp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Hp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Gp:case Vp:case kp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Xp:case Wp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Pu:case qp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function QT(o){switch(o){case xi:case Zx:return{byteLength:1,components:1};case Cl:case Kx:case ga:return{byteLength:2,components:1};case em:case nm:return{byteLength:2,components:4};case ma:case tm:case ha:return{byteLength:4,components:1};case Qx:case jx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jp}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dS(){let o=null,t=!1,i=null,s=null;function l(u,h){s=o.requestAnimationFrame(l),i(u,h)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function jT(o){const t=new WeakMap;function i(d,p){const m=d.array,v=d.usage,g=m.byteLength,_=o.createBuffer();o.bindBuffer(p,_),o.bufferData(p,m,v),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const v=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,v);else{g.sort((y,T)=>y.start-T.start);let _=0;for(let y=1;y<g.length;y++){const T=g[_],w=g[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++_,g[_]=w)}g.length=_+1;for(let y=0,T=g.length;y<T;y++){const w=g[y];o.bufferSubData(m,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var JT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$T=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,o1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,S1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,M1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,y1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w1="gl_FragColor = linearToOutputTexel( gl_FragColor );",C1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,U1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,X1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,W1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Q1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ub=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_b=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$b=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_A=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:JT,alphahash_pars_fragment:$T,alphamap_fragment:t1,alphamap_pars_fragment:e1,alphatest_fragment:n1,alphatest_pars_fragment:i1,aomap_fragment:a1,aomap_pars_fragment:s1,batching_pars_vertex:r1,batching_vertex:o1,begin_vertex:l1,beginnormal_vertex:c1,bsdfs:u1,iridescence_fragment:f1,bumpmap_pars_fragment:h1,clipping_planes_fragment:d1,clipping_planes_pars_fragment:p1,clipping_planes_pars_vertex:m1,clipping_planes_vertex:g1,color_fragment:_1,color_pars_fragment:v1,color_pars_vertex:x1,color_vertex:S1,common:M1,cube_uv_reflection_fragment:y1,defaultnormal_vertex:E1,displacementmap_pars_vertex:T1,displacementmap_vertex:b1,emissivemap_fragment:A1,emissivemap_pars_fragment:R1,colorspace_fragment:w1,colorspace_pars_fragment:C1,envmap_fragment:D1,envmap_common_pars_fragment:N1,envmap_pars_fragment:L1,envmap_pars_vertex:U1,envmap_physical_pars_fragment:X1,envmap_vertex:O1,fog_vertex:P1,fog_pars_vertex:I1,fog_fragment:B1,fog_pars_fragment:z1,gradientmap_pars_fragment:F1,lightmap_pars_fragment:H1,lights_lambert_fragment:G1,lights_lambert_pars_fragment:V1,lights_pars_begin:k1,lights_toon_fragment:W1,lights_toon_pars_fragment:q1,lights_phong_fragment:Y1,lights_phong_pars_fragment:Z1,lights_physical_fragment:K1,lights_physical_pars_fragment:Q1,lights_fragment_begin:j1,lights_fragment_maps:J1,lights_fragment_end:$1,lightprobes_pars_fragment:tb,logdepthbuf_fragment:eb,logdepthbuf_pars_fragment:nb,logdepthbuf_pars_vertex:ib,logdepthbuf_vertex:ab,map_fragment:sb,map_pars_fragment:rb,map_particle_fragment:ob,map_particle_pars_fragment:lb,metalnessmap_fragment:cb,metalnessmap_pars_fragment:ub,morphinstance_vertex:fb,morphcolor_vertex:hb,morphnormal_vertex:db,morphtarget_pars_vertex:pb,morphtarget_vertex:mb,normal_fragment_begin:gb,normal_fragment_maps:_b,normal_pars_fragment:vb,normal_pars_vertex:xb,normal_vertex:Sb,normalmap_pars_fragment:Mb,clearcoat_normal_fragment_begin:yb,clearcoat_normal_fragment_maps:Eb,clearcoat_pars_fragment:Tb,iridescence_pars_fragment:bb,opaque_fragment:Ab,packing:Rb,premultiplied_alpha_fragment:wb,project_vertex:Cb,dithering_fragment:Db,dithering_pars_fragment:Nb,roughnessmap_fragment:Lb,roughnessmap_pars_fragment:Ub,shadowmap_pars_fragment:Ob,shadowmap_pars_vertex:Pb,shadowmap_vertex:Ib,shadowmask_pars_fragment:Bb,skinbase_vertex:zb,skinning_pars_vertex:Fb,skinning_vertex:Hb,skinnormal_vertex:Gb,specularmap_fragment:Vb,specularmap_pars_fragment:kb,tonemapping_fragment:Xb,tonemapping_pars_fragment:Wb,transmission_fragment:qb,transmission_pars_fragment:Yb,uv_pars_fragment:Zb,uv_pars_vertex:Kb,uv_vertex:Qb,worldpos_vertex:jb,background_vert:Jb,background_frag:$b,backgroundCube_vert:tA,backgroundCube_frag:eA,cube_vert:nA,cube_frag:iA,depth_vert:aA,depth_frag:sA,distance_vert:rA,distance_frag:oA,equirect_vert:lA,equirect_frag:cA,linedashed_vert:uA,linedashed_frag:fA,meshbasic_vert:hA,meshbasic_frag:dA,meshlambert_vert:pA,meshlambert_frag:mA,meshmatcap_vert:gA,meshmatcap_frag:_A,meshnormal_vert:vA,meshnormal_frag:xA,meshphong_vert:SA,meshphong_frag:MA,meshphysical_vert:yA,meshphysical_frag:EA,meshtoon_vert:TA,meshtoon_frag:bA,points_vert:AA,points_frag:RA,shadow_vert:wA,shadow_frag:CA,sprite_vert:DA,sprite_frag:NA},Ht={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ua={basic:{uniforms:Qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Qn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Qn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Qn([Ht.points,Ht.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Qn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Qn([Ht.common,Ht.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Qn([Ht.sprite,Ht.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Qn([Ht.common,Ht.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Qn([Ht.lights,Ht.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};ua.physical={uniforms:Qn([ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Au={r:0,b:0,g:0},LA=new on,pS=new he;pS.set(-1,0,0,0,1,0,0,0,1);function UA(o,t,i,s,l,u){const h=new Me(0);let d=l===!0?0:1,p,m,v=null,g=0,_=null;function y(N){let B=N.isScene===!0?N.background:null;if(B&&B.isTexture){const C=N.backgroundBlurriness>0;B=t.get(B,C)}return B}function T(N){let B=!1;const C=y(N);C===null?M(h,d):C&&C.isColor&&(M(C,1),B=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(N,B){const C=y(B);C&&(C.isCubeTexture||C.mapping===Xu)?(m===void 0&&(m=new re(new Dn(1,1,1),new _a({name:"BackgroundCubeMaterial",uniforms:go(ua.backgroundCube.uniforms),vertexShader:ua.backgroundCube.vertexShader,fragmentShader:ua.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(LA.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(pS),m.material.toneMapped=Ue.getTransfer(C.colorSpace)!==Ye,(v!==C||g!==C.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,v=C,g=C.version,_=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new re(new bs(2,2),new _a({name:"BackgroundMaterial",uniforms:go(ua.background.uniforms),vertexShader:ua.background.vertexShader,fragmentShader:ua.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(C.colorSpace)!==Ye,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||g!==C.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,v=C,g=C.version,_=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function M(N,B){N.getRGB(Au,fS(o)),i.buffers.color.setClear(Au.r,Au.g,Au.b,B,u)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,B=1){h.set(N),d=B,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,M(h,d)},render:T,addToRenderList:w,dispose:S}}function OA(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,h=!1;function d(V,Q,rt,Y,tt){let X=!1;const Z=g(V,Y,rt,Q);u!==Z&&(u=Z,m(u.object)),X=y(V,Y,rt,tt),X&&T(V,Y,rt,tt),tt!==null&&t.update(tt,o.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,C(V,Q,rt,Y),tt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function p(){return o.createVertexArray()}function m(V){return o.bindVertexArray(V)}function v(V){return o.deleteVertexArray(V)}function g(V,Q,rt,Y){const tt=Y.wireframe===!0;let X=s[Q.id];X===void 0&&(X={},s[Q.id]=X);const Z=V.isInstancedMesh===!0?V.id:0;let ht=X[Z];ht===void 0&&(ht={},X[Z]=ht);let at=ht[rt.id];at===void 0&&(at={},ht[rt.id]=at);let nt=at[tt];return nt===void 0&&(nt=_(p()),at[tt]=nt),nt}function _(V){const Q=[],rt=[],Y=[];for(let tt=0;tt<i;tt++)Q[tt]=0,rt[tt]=0,Y[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:rt,attributeDivisors:Y,object:V,attributes:{},index:null}}function y(V,Q,rt,Y){const tt=u.attributes,X=Q.attributes;let Z=0;const ht=rt.getAttributes();for(const at in ht)if(ht[at].location>=0){const xt=tt[at];let Zt=X[at];if(Zt===void 0&&(at==="instanceMatrix"&&V.instanceMatrix&&(Zt=V.instanceMatrix),at==="instanceColor"&&V.instanceColor&&(Zt=V.instanceColor)),xt===void 0||xt.attribute!==Zt||Zt&&xt.data!==Zt.data)return!0;Z++}return u.attributesNum!==Z||u.index!==Y}function T(V,Q,rt,Y){const tt={},X=Q.attributes;let Z=0;const ht=rt.getAttributes();for(const at in ht)if(ht[at].location>=0){let xt=X[at];xt===void 0&&(at==="instanceMatrix"&&V.instanceMatrix&&(xt=V.instanceMatrix),at==="instanceColor"&&V.instanceColor&&(xt=V.instanceColor));const Zt={};Zt.attribute=xt,xt&&xt.data&&(Zt.data=xt.data),tt[at]=Zt,Z++}u.attributes=tt,u.attributesNum=Z,u.index=Y}function w(){const V=u.newAttributes;for(let Q=0,rt=V.length;Q<rt;Q++)V[Q]=0}function M(V){S(V,0)}function S(V,Q){const rt=u.newAttributes,Y=u.enabledAttributes,tt=u.attributeDivisors;rt[V]=1,Y[V]===0&&(o.enableVertexAttribArray(V),Y[V]=1),tt[V]!==Q&&(o.vertexAttribDivisor(V,Q),tt[V]=Q)}function N(){const V=u.newAttributes,Q=u.enabledAttributes;for(let rt=0,Y=Q.length;rt<Y;rt++)Q[rt]!==V[rt]&&(o.disableVertexAttribArray(rt),Q[rt]=0)}function B(V,Q,rt,Y,tt,X,Z){Z===!0?o.vertexAttribIPointer(V,Q,rt,tt,X):o.vertexAttribPointer(V,Q,rt,Y,tt,X)}function C(V,Q,rt,Y){w();const tt=Y.attributes,X=rt.getAttributes(),Z=Q.defaultAttributeValues;for(const ht in X){const at=X[ht];if(at.location>=0){let nt=tt[ht];if(nt===void 0&&(ht==="instanceMatrix"&&V.instanceMatrix&&(nt=V.instanceMatrix),ht==="instanceColor"&&V.instanceColor&&(nt=V.instanceColor)),nt!==void 0){const xt=nt.normalized,Zt=nt.itemSize,Kt=t.get(nt);if(Kt===void 0)continue;const z=Kt.buffer,mt=Kt.type,Rt=Kt.bytesPerElement,j=mt===o.INT||mt===o.UNSIGNED_INT||nt.gpuType===tm;if(nt.isInterleavedBufferAttribute){const dt=nt.data,bt=dt.stride,Bt=nt.offset;if(dt.isInstancedInterleavedBuffer){for(let _t=0;_t<at.locationSize;_t++)S(at.location+_t,dt.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let _t=0;_t<at.locationSize;_t++)M(at.location+_t);o.bindBuffer(o.ARRAY_BUFFER,z);for(let _t=0;_t<at.locationSize;_t++)B(at.location+_t,Zt/at.locationSize,mt,xt,bt*Rt,(Bt+Zt/at.locationSize*_t)*Rt,j)}else{if(nt.isInstancedBufferAttribute){for(let dt=0;dt<at.locationSize;dt++)S(at.location+dt,nt.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let dt=0;dt<at.locationSize;dt++)M(at.location+dt);o.bindBuffer(o.ARRAY_BUFFER,z);for(let dt=0;dt<at.locationSize;dt++)B(at.location+dt,Zt/at.locationSize,mt,xt,Zt*Rt,Zt/at.locationSize*dt*Rt,j)}}else if(Z!==void 0){const xt=Z[ht];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(at.location,xt);break;case 3:o.vertexAttrib3fv(at.location,xt);break;case 4:o.vertexAttrib4fv(at.location,xt);break;default:o.vertexAttrib1fv(at.location,xt)}}}}N()}function L(){D();for(const V in s){const Q=s[V];for(const rt in Q){const Y=Q[rt];for(const tt in Y){const X=Y[tt];for(const Z in X)v(X[Z].object),delete X[Z];delete Y[tt]}}delete s[V]}}function U(V){if(s[V.id]===void 0)return;const Q=s[V.id];for(const rt in Q){const Y=Q[rt];for(const tt in Y){const X=Y[tt];for(const Z in X)v(X[Z].object),delete X[Z];delete Y[tt]}}delete s[V.id]}function P(V){for(const Q in s){const rt=s[Q];for(const Y in rt){const tt=rt[Y];if(tt[V.id]===void 0)continue;const X=tt[V.id];for(const Z in X)v(X[Z].object),delete X[Z];delete tt[V.id]}}}function b(V){for(const Q in s){const rt=s[Q],Y=V.isInstancedMesh===!0?V.id:0,tt=rt[Y];if(tt!==void 0){for(const X in tt){const Z=tt[X];for(const ht in Z)v(Z[ht].object),delete Z[ht];delete tt[X]}delete rt[Y],Object.keys(rt).length===0&&delete s[Q]}}}function D(){F(),h=!0,u!==l&&(u=l,m(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:D,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:M,disableUnusedAttributes:N}}function PA(o,t,i){let s;function l(p){s=p}function u(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function h(p,m,v){v!==0&&(o.drawArraysInstanced(s,p,m,v),i.update(m,s,v))}function d(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,v);let _=0;for(let y=0;y<v;y++)_+=m[y];i.update(_,s,1)}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function IA(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==qi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const b=P===ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==xi&&P!==ha&&!b&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(oe("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:N,maxVaryings:B,maxFragmentUniforms:C,maxSamples:L,samples:U}}function BA(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Es,d=new he,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||s!==0||l;return l=_,s=g.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,_){i=v(g,_,0)},this.setState=function(g,_,y){const T=g.clippingPlanes,w=g.clipIntersection,M=g.clipShadows,S=o.get(g);if(!l||T===null||T.length===0||u&&!M)u?v(null):m();else{const N=u?0:s,B=N*4;let C=S.clippingState||null;p.value=C,C=v(T,_,B,y);for(let L=0;L!==B;++L)C[L]=i[L];S.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,_,y,T){const w=g!==null?g.length:0;let M=null;if(w!==0){if(M=p.value,T!==!0||M===null){const S=y+w*4,N=_.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<S)&&(M=new Float32Array(S));for(let B=0,C=y;B!==w;++B,C+=4)h.copy(g[B]).applyMatrix4(N,d),h.normal.toArray(M,C),M[C+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const fo=4,zA=6,FA=20,HA=256,Sl=new pm,fx=new Me;let ep=null,np=0,ip=0,ap=!1;const GA=new k,$s=new k;class hx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=GA}=u;ep=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=px(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ep,np,ip),this._renderer.xr.enabled=ap,t.scissorTest=!1,lo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ir||t.mapping===mo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ep=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ga,format:qi,colorSpace:Bu,depthBuffer:!1},l=dx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dx(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=VA(u)),this._blurMaterial=XA(u,t,i),this._ggxMaterial=kA(u,t,i)}return l}_compileMaterial(t){const i=new re(new Jn,t);this._renderer.compile(i,Sl)}_sceneToCubeUV(t,i,s,l,u){const p=new Ui(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(fx),g.toneMapping=pa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new re(new Dn,new za({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const N=t.background;N?N.isColor&&(M.color.copy(N),t.background=null,S=!0):(M.color.copy(fx),S=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(p.up.set(0,m[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[B],u.y,u.z)):C===1?(p.up.set(0,0,m[B]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[B],u.z)):(p.up.set(0,m[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[B]));const L=this._cubeSize;lo(l,C*L,B>2?L:0,L,L),g.setRenderTarget(l),S&&g.render(w,p),g.render(t,p)}g.toneMapping=y,g.autoClear=_,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===ir||t.mapping===mo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=mx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=px());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;lo(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Sl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const p=h.uniforms,m=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-v*v),_=m*1.25,y=g*_,{_lodMax:T}=this,w=this._sizeLods[s],M=3*w*(s>T-fo?s-T+fo:0),S=4*(this._cubeSize-w);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=T-i,lo(u,M,S,3*w,2*w),l.setRenderTarget(u),l.render(d,Sl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=T-s,lo(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(d,Sl)}_blur(t,i,s,l){const u=this._pingPongRenderTarget,h=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,u,i,s,h),this._blurPass(u,t,s,s,h)}_blurPass(t,i,s,l,u){const h=this._renderer,d=this._blurMaterial,p=this._lodMeshes[l];p.material=d;const m=d.uniforms;m.envMap.value=t.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-s;const v=this._sizeLods[l],g=3*v*(l>this._lodMax-fo?l-this._lodMax+fo:0),_=4*(this._cubeSize-v);lo(i,g,_,3*v,2*v),h.setRenderTarget(i),h.render(p,Sl)}}function VA(o){const t=[],i=[];let s=o;const l=o-fo+1+zA;for(let u=0;u<l;u++){const h=Math.pow(2,s);t.push(h);const d=1/(h-2),p=-d,m=1+d,v=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,_=6,y=3,T=new Float32Array(y*_*g),w=new Float32Array(y*_*g);for(let S=0;S<g;S++){const N=S%3*2/3-1,B=S>2?0:-1,C=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];T.set(C,y*_*S);for(let L=0;L<_;L++){const U=v[L*2]*2-1,P=v[L*2+1]*2-1;S===0?$s.set(1,P,U):S===1?$s.set(-U,1,-P):S===2?$s.set(-U,P,1):S===3?$s.set(-1,P,-U):S===4?$s.set(-U,-1,P):$s.set(U,P,-1),$s.toArray(w,(S*_+L)*y)}}const M=new Jn;M.setAttribute("position",new Ga(T,y)),M.setAttribute("outputDirection",new Ga(w,y)),i.push(new re(M,null)),s>fo&&s--}return{lodMeshes:i,sizeLods:t}}function dx(o,t,i){const s=new Yi(o,t,i);return s.texture.mapping=Xu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function lo(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function kA(o,t,i){return new _a({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function XA(o,t,i){return new _a({name:"SphericalGaussianBlur",defines:{SAMPLES:FA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function px(){return new _a({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function mx(){return new _a({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Zu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class mS extends Yi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new cS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Dn(5,5,5),u=new _a({name:"CubemapFromEquirect",uniforms:go(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:si,blending:Fa});u.uniforms.tEquirect.value=i;const h=new re(l,u),d=i.minFilter;return i.minFilter===tr&&(i.minFilter=Vn),new ZT(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}function WA(o){let t=new WeakMap,i=new WeakMap,s=null;function l(_,y=!1){return _==null?null:y?h(_):u(_)}function u(_){if(_&&_.isTexture){const y=_.mapping;if(y===wd||y===Cd)if(t.has(_)){const T=t.get(_).texture;return d(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const w=new mS(T.height);return w.fromEquirectangularTexture(o,_),t.set(_,w),_.addEventListener("dispose",m),d(w.texture,_.mapping)}else return null}}return _}function h(_){if(_&&_.isTexture){const y=_.mapping,T=y===wd||y===Cd,w=y===ir||y===mo;if(T||w){let M=i.get(_);const S=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return s===null&&(s=new hx(o)),M=T?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const N=_.image;return T&&N&&N.height>0||w&&N&&p(N)?(s===null&&(s=new hx(o)),M=T?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",v),M.texture):null}}}return _}function d(_,y){return y===wd?_.mapping=ir:y===Cd&&(_.mapping=mo),_}function p(_){let y=0;const T=6;for(let w=0;w<T;w++)_[w]!==void 0&&y++;return y===T}function m(_){const y=_.target;y.removeEventListener("dispose",m);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function v(_){const y=_.target;y.removeEventListener("dispose",v);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function g(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function qA(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ho("WebGLRenderer: "+s+" extension not supported."),l}}}function YA(o,t,i,s){const l={},u=new WeakMap;function h(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const T in _.attributes)t.remove(_.attributes[T]);_.removeEventListener("dispose",h),delete l[_.id];const y=u.get(_);y&&(t.remove(y),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(g,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function p(g){const _=g.attributes;for(const y in _)t.update(_[y],o.ARRAY_BUFFER)}function m(g){const _=[],y=g.index,T=g.attributes.position;let w=0;if(T===void 0)return;if(y!==null){const N=y.array;w=y.version;for(let B=0,C=N.length;B<C;B+=3){const L=N[B+0],U=N[B+1],P=N[B+2];_.push(L,U,U,P,P,L)}}else{const N=T.array;w=T.version;for(let B=0,C=N.length/3-1;B<C;B+=3){const L=B+0,U=B+1,P=B+2;_.push(L,U,U,P,P,L)}}const M=new(T.count>=65535?rS:sS)(_,1);M.version=w;const S=u.get(g);S&&t.remove(S),u.set(g,M)}function v(g){const _=u.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&m(g)}else m(g);return u.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function ZA(o,t,i){let s;function l(g){s=g}let u,h;function d(g){u=g.type,h=g.bytesPerElement}function p(g,_){o.drawElements(s,_,u,g*h),i.update(_,s,1)}function m(g,_,y){y!==0&&(o.drawElementsInstanced(s,_,u,g*h,y),i.update(_,s,y))}function v(g,_,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,u,g,0,y);let w=0;for(let M=0;M<y;M++)w+=_[M];i.update(w,s,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function KA(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Be("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function QA(o,t,i){const s=new WeakMap,l=new rn;function u(h,d,p){const m=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let _=s.get(d);if(_===void 0||_.count!==g){let F=function(){b.dispose(),s.delete(d),d.removeEventListener("dispose",F)};var y=F;_!==void 0&&_.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let L=d.attributes.position.count*C,U=1;L>t.maxTextureSize&&(U=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const P=new Float32Array(L*U*4*g),b=new nS(P,L,U,g);b.type=ha,b.needsUpdate=!0;const D=C*4;for(let V=0;V<g;V++){const Q=S[V],rt=N[V],Y=B[V],tt=L*U*4*V;for(let X=0;X<Q.count;X++){const Z=X*D;T===!0&&(l.fromBufferAttribute(Q,X),P[tt+Z+0]=l.x,P[tt+Z+1]=l.y,P[tt+Z+2]=l.z,P[tt+Z+3]=0),w===!0&&(l.fromBufferAttribute(rt,X),P[tt+Z+4]=l.x,P[tt+Z+5]=l.y,P[tt+Z+6]=l.z,P[tt+Z+7]=0),M===!0&&(l.fromBufferAttribute(Y,X),P[tt+Z+8]=l.x,P[tt+Z+9]=l.y,P[tt+Z+10]=l.z,P[tt+Z+11]=Y.itemSize===4?l.w:1)}}_={count:g,texture:b,size:new Ae(L,U)},s.set(d,_),d.addEventListener("dispose",F)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<m.length;M++)T+=m[M];const w=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function jA(o,t,i,s,l){let u=new WeakMap;function h(m){const v=l.render.frame,g=m.geometry,_=t.get(m,g);if(u.get(_)!==v&&(t.update(_),u.set(_,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==v&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,v))),m.isSkinnedMesh){const y=m.skeleton;u.get(y)!==v&&(y.update(),u.set(y,v))}return _}function d(){u=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:d}}const JA={[Hx]:"LINEAR_TONE_MAPPING",[Gx]:"REINHARD_TONE_MAPPING",[Vx]:"CINEON_TONE_MAPPING",[kx]:"ACES_FILMIC_TONE_MAPPING",[Wx]:"AGX_TONE_MAPPING",[qx]:"NEUTRAL_TONE_MAPPING",[Xx]:"CUSTOM_TONE_MAPPING"};function $A(o,t,i,s,l,u){const h=new Yi(t,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new Jn;m.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new hn([0,2,0,0,2,0],2));const v=new GT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new re(m,v),_=new pm(-1,1,1,-1,0,1);let y=null,T=null,w=!1,M,S=null,N=[],B=!1;this.setSize=function(C,L){h.setSize(C,L),d!==null&&d.setSize(C,L),p!==null&&p.setSize(C,L);for(let U=0;U<N.length;U++){const P=N[U];P.setSize&&P.setSize(C,L)}},this.setEffects=function(C){N=C,B=N.length>0&&N[0].isRenderPass===!0;const L=h.width,U=h.height;N.length>0&&d===null&&(d=new Yi(L,U,{type:ga,depthBuffer:!1,stencilBuffer:!1}),p=new Yi(L,U,{type:ga,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<N.length;P++){const b=N[P];b.setSize&&b.setSize(L,U)}},this.begin=function(C,L){if(w||C.toneMapping===pa&&N.length===0)return!1;if(S=L,L!==null){const U=L.width,P=L.height;(h.width!==U||h.height!==P)&&this.setSize(U,P)}return B===!1&&C.setRenderTarget(h),M=C.toneMapping,C.toneMapping=pa,!0},this.hasRenderPass=function(){return B},this.end=function(C,L){C.toneMapping=M,w=!0;let U=h,P=d;for(let b=0;b<N.length;b++){const D=N[b];D.enabled!==!1&&(D.render(C,P,U,L),D.needsSwap!==!1&&(U=P,P=P===d?p:d))}if(y!==C.outputColorSpace||T!==C.toneMapping){y=C.outputColorSpace,T=C.toneMapping,v.defines={},Ue.getTransfer(y)===Ye&&(v.defines.SRGB_TRANSFER="");const b=JA[T];b&&(v.defines[b]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(S),C.render(g,_),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){h.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),v.dispose()}}const gS=new kn,Yp=new Ol(1,1),_S=new nS,vS=new gT,xS=new cS,gx=[],_x=[],vx=new Float32Array(16),xx=new Float32Array(9),Sx=new Float32Array(4);function vo(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=gx[l];if(u===void 0&&(u=new Float32Array(l),gx[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function En(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Tn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Ku(o,t){let i=_x[t];i===void 0&&(i=new Int32Array(t),_x[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function tR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function eR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2fv(this.addr,t),Tn(i,t)}}function nR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(En(i,t))return;o.uniform3fv(this.addr,t),Tn(i,t)}}function iR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4fv(this.addr,t),Tn(i,t)}}function aR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(En(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,s))return;Sx.set(s),o.uniformMatrix2fv(this.addr,!1,Sx),Tn(i,s)}}function sR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(En(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,s))return;xx.set(s),o.uniformMatrix3fv(this.addr,!1,xx),Tn(i,s)}}function rR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(En(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,s))return;vx.set(s),o.uniformMatrix4fv(this.addr,!1,vx),Tn(i,s)}}function oR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function lR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2iv(this.addr,t),Tn(i,t)}}function cR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;o.uniform3iv(this.addr,t),Tn(i,t)}}function uR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4iv(this.addr,t),Tn(i,t)}}function fR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function hR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2uiv(this.addr,t),Tn(i,t)}}function dR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;o.uniform3uiv(this.addr,t),Tn(i,t)}}function pR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4uiv(this.addr,t),Tn(i,t)}}function mR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Yp.compareFunction=i.isReversedDepthBuffer()?om:rm,u=Yp):u=gS,i.setTexture2D(t||u,l)}function gR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||vS,l)}function _R(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||xS,l)}function vR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||_S,l)}function xR(o){switch(o){case 5126:return tR;case 35664:return eR;case 35665:return nR;case 35666:return iR;case 35674:return aR;case 35675:return sR;case 35676:return rR;case 5124:case 35670:return oR;case 35667:case 35671:return lR;case 35668:case 35672:return cR;case 35669:case 35673:return uR;case 5125:return fR;case 36294:return hR;case 36295:return dR;case 36296:return pR;case 35678:case 36198:case 36298:case 36306:case 35682:return mR;case 35679:case 36299:case 36307:return gR;case 35680:case 36300:case 36308:case 36293:return _R;case 36289:case 36303:case 36311:case 36292:return vR}}function SR(o,t){o.uniform1fv(this.addr,t)}function MR(o,t){const i=vo(t,this.size,2);o.uniform2fv(this.addr,i)}function yR(o,t){const i=vo(t,this.size,3);o.uniform3fv(this.addr,i)}function ER(o,t){const i=vo(t,this.size,4);o.uniform4fv(this.addr,i)}function TR(o,t){const i=vo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function bR(o,t){const i=vo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function AR(o,t){const i=vo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function RR(o,t){o.uniform1iv(this.addr,t)}function wR(o,t){o.uniform2iv(this.addr,t)}function CR(o,t){o.uniform3iv(this.addr,t)}function DR(o,t){o.uniform4iv(this.addr,t)}function NR(o,t){o.uniform1uiv(this.addr,t)}function LR(o,t){o.uniform2uiv(this.addr,t)}function UR(o,t){o.uniform3uiv(this.addr,t)}function OR(o,t){o.uniform4uiv(this.addr,t)}function PR(o,t,i){const s=this.cache,l=t.length,u=Ku(i,l);En(s,u)||(o.uniform1iv(this.addr,u),Tn(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Yp:h=gS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function IR(o,t,i){const s=this.cache,l=t.length,u=Ku(i,l);En(s,u)||(o.uniform1iv(this.addr,u),Tn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||vS,u[h])}function BR(o,t,i){const s=this.cache,l=t.length,u=Ku(i,l);En(s,u)||(o.uniform1iv(this.addr,u),Tn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||xS,u[h])}function zR(o,t,i){const s=this.cache,l=t.length,u=Ku(i,l);En(s,u)||(o.uniform1iv(this.addr,u),Tn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||_S,u[h])}function FR(o){switch(o){case 5126:return SR;case 35664:return MR;case 35665:return yR;case 35666:return ER;case 35674:return TR;case 35675:return bR;case 35676:return AR;case 5124:case 35670:return RR;case 35667:case 35671:return wR;case 35668:case 35672:return CR;case 35669:case 35673:return DR;case 5125:return NR;case 36294:return LR;case 36295:return UR;case 36296:return OR;case 35678:case 36198:case 36298:case 36306:case 35682:return PR;case 35679:case 36299:case 36307:return IR;case 35680:case 36300:case 36308:case 36293:return BR;case 36289:case 36303:case 36311:case 36292:return zR}}class HR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=xR(i.type)}}class GR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=FR(i.type)}}class VR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const sp=/(\w+)(\])?(\[|\.)?/g;function Mx(o,t){o.seq.push(t),o.map[t.id]=t}function kR(o,t,i){const s=o.name,l=s.length;for(sp.lastIndex=0;;){const u=sp.exec(s),h=sp.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){Mx(i,m===void 0?new HR(d,o,t):new GR(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new VR(d),Mx(i,g)),i=g}}}class Uu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),p=t.getUniformLocation(i,d.name);kR(d,p,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function yx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const XR=37297;let WR=0;function qR(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Ex=new he;function YR(o){Ue._getMatrix(Ex,Ue.workingColorSpace,o);const t=`mat3( ${Ex.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case zu:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Tx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+qR(o.getShaderSource(t),d)}else return u}function ZR(o,t){const i=YR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const KR={[Hx]:"Linear",[Gx]:"Reinhard",[Vx]:"Cineon",[kx]:"ACESFilmic",[Wx]:"AgX",[qx]:"Neutral",[Xx]:"Custom"};function QR(o,t){const i=KR[t];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ru=new k;function jR(){Ue.getLuminanceCoefficients(Ru);const o=Ru.x.toFixed(4),t=Ru.y.toFixed(4),i=Ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(El).join(`
`)}function $R(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function tw(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function El(o){return o!==""}function bx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ax(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ew=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(o){return o.replace(ew,iw)}const nw=new Map;function iw(o,t){let i=ge[t];if(i===void 0){const s=nw.get(t);if(s!==void 0)i=ge[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zp(i)}const aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rx(o){return o.replace(aw,sw)}function sw(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function wx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const rw={[Tl]:"SHADOWMAP_TYPE_PCF",[yl]:"SHADOWMAP_TYPE_VSM"};function ow(o){return rw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lw={[ir]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE",[Xu]:"ENVMAP_TYPE_CUBE_UV"};function cw(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":lw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const uw={[mo]:"ENVMAP_MODE_REFRACTION"};function fw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":uw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hw={[$p]:"ENVMAP_BLENDING_MULTIPLY",[LE]:"ENVMAP_BLENDING_MIX",[UE]:"ENVMAP_BLENDING_ADD"};function dw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":hw[o.combine]||"ENVMAP_BLENDING_NONE"}function pw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function mw(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=ow(i),m=cw(i),v=fw(i),g=dw(i),_=pw(i),y=JR(i),T=$R(u),w=l.createProgram();let M,S,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(El).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(El).join(`
`),S.length>0&&(S+=`
`)):(M=[wx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(El).join(`
`),S=[wx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==pa?"#define TONE_MAPPING":"",i.toneMapping!==pa?ge.tonemapping_pars_fragment:"",i.toneMapping!==pa?QR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,ZR("linearToOutputTexel",i.outputColorSpace),jR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(El).join(`
`)),h=Zp(h),h=bx(h,i),h=Ax(h,i),d=Zp(d),d=bx(d,i),d=Ax(d,i),h=Rx(h),d=Rx(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const B=N+M+h,C=N+S+d,L=yx(l,l.VERTEX_SHADER,B),U=yx(l,l.FRAGMENT_SHADER,C);l.attachShader(w,L),l.attachShader(w,U),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(V){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(w)||"",rt=l.getShaderInfoLog(L)||"",Y=l.getShaderInfoLog(U)||"",tt=Q.trim(),X=rt.trim(),Z=Y.trim();let ht=!0,at=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,L,U);else{const nt=Tx(l,L,"vertex"),xt=Tx(l,U,"fragment");Be("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+tt+`
`+nt+`
`+xt)}else tt!==""?oe("WebGLProgram: Program Info Log:",tt):(X===""||Z==="")&&(at=!1);at&&(V.diagnostics={runnable:ht,programLog:tt,vertexShader:{log:X,prefix:M},fragmentShader:{log:Z,prefix:S}})}l.deleteShader(L),l.deleteShader(U),b=new Uu(l,w),D=tw(l,w)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=l.getProgramParameter(w,XR)),F},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=WR++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=L,this.fragmentShader=U,this}let gw=0;class _w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new vw(t),i.set(t,s)),s}}class vw{constructor(t){this.id=gw++,this.code=t,this.usedTimes=0}}function xw(o){return o===ar||o===Ou||o===Pu}function Sw(o,t,i,s,l,u){const h=new iS,d=new _w,p=new Set,m=[],v=new Map,g=s.logarithmicDepthBuffer;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return p.add(b),b===0?"uv":`uv${b}`}function w(b,D,F,V,Q,rt){const Y=V.fog,tt=Q.geometry,X=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,Z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ht=t.get(b.envMap||X,Z),at=ht&&ht.mapping===Xu?ht.image.height:null,nt=y[b.type];b.precision!==null&&(_=s.getMaxPrecision(b.precision),_!==b.precision&&oe("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const xt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Zt=xt!==void 0?xt.length:0;let Kt=0;tt.morphAttributes.position!==void 0&&(Kt=1),tt.morphAttributes.normal!==void 0&&(Kt=2),tt.morphAttributes.color!==void 0&&(Kt=3);let z,mt,Rt,j;if(nt){const Ne=ua[nt];z=Ne.vertexShader,mt=Ne.fragmentShader}else{z=b.vertexShader,mt=b.fragmentShader;const Ne=d.getVertexShaderStage(b),ue=d.getFragmentShaderStage(b);d.update(b,Ne,ue),Rt=Ne.id,j=ue.id}const dt=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),Bt=Q.isInstancedMesh===!0,_t=Q.isBatchedMesh===!0,wt=!!b.map,Ve=!!b.matcap,me=!!ht,_e=!!b.aoMap,ye=!!b.lightMap,ee=!!b.bumpMap&&b.wireframe===!1,ie=!!b.normalMap,ke=!!b.displacementMap,mn=!!b.emissiveMap,Ie=!!b.metalnessMap,tn=!!b.roughnessMap,q=b.anisotropy>0,nn=b.clearcoat>0,Pe=b.dispersion>0,O=b.retroreflectivity>0,E=b.iridescence>0,et=b.sheen>0,ct=b.transmission>0,pt=q&&!!b.anisotropyMap,At=nn&&!!b.clearcoatMap,Nt=nn&&!!b.clearcoatNormalMap,gt=nn&&!!b.clearcoatRoughnessMap,yt=E&&!!b.iridescenceMap,Dt=E&&!!b.iridescenceThicknessMap,$t=et&&!!b.sheenColorMap,It=et&&!!b.sheenRoughnessMap,Pt=!!b.specularMap,kt=!!b.specularColorMap,ne=!!b.specularIntensityMap,ce=ct&&!!b.transmissionMap,W=ct&&!!b.thicknessMap,Ct=!!b.gradientMap,Mt=!!b.alphaMap,Lt=b.alphaTest>0,Vt=!!b.alphaHash,Tt=!!b.extensions;let Jt=pa;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Gt={shaderID:nt,shaderType:b.type,shaderName:b.name,vertexShader:z,fragmentShader:mt,defines:b.defines,customVertexShaderID:Rt,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:_t,batchingColor:_t&&Q._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&Q.instanceColor!==null,instancingMorph:Bt&&Q.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Ue.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:wt,matcap:Ve,envMap:me,envMapMode:me&&ht.mapping,envMapCubeUVHeight:at,aoMap:_e,lightMap:ye,bumpMap:ee,normalMap:ie,displacementMap:ke,emissiveMap:mn,normalMapObjectSpace:ie&&b.normalMapType===IE,normalMapTangentSpace:ie&&b.normalMapType===Iu,packedNormalMap:ie&&b.normalMapType===Iu&&xw(b.normalMap.format),metalnessMap:Ie,roughnessMap:tn,anisotropy:q,anisotropyMap:pt,clearcoat:nn,clearcoatMap:At,clearcoatNormalMap:Nt,clearcoatRoughnessMap:gt,dispersion:Pe,retroreflection:O,iridescence:E,iridescenceMap:yt,iridescenceThicknessMap:Dt,sheen:et,sheenColorMap:$t,sheenRoughnessMap:It,specularMap:Pt,specularColorMap:kt,specularIntensityMap:ne,transmission:ct,transmissionMap:ce,thicknessMap:W,gradientMap:Ct,opaque:b.transparent===!1&&b.blending===bl&&b.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Lt,alphaHash:Vt,combine:b.combine,mapUv:wt&&T(b.map.channel),aoMapUv:_e&&T(b.aoMap.channel),lightMapUv:ye&&T(b.lightMap.channel),bumpMapUv:ee&&T(b.bumpMap.channel),normalMapUv:ie&&T(b.normalMap.channel),displacementMapUv:ke&&T(b.displacementMap.channel),emissiveMapUv:mn&&T(b.emissiveMap.channel),metalnessMapUv:Ie&&T(b.metalnessMap.channel),roughnessMapUv:tn&&T(b.roughnessMap.channel),anisotropyMapUv:pt&&T(b.anisotropyMap.channel),clearcoatMapUv:At&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(b.sheenRoughnessMap.channel),specularMapUv:Pt&&T(b.specularMap.channel),specularColorMapUv:kt&&T(b.specularColorMap.channel),specularIntensityMapUv:ne&&T(b.specularIntensityMap.channel),transmissionMapUv:ce&&T(b.transmissionMap.channel),thicknessMapUv:W&&T(b.thicknessMap.channel),alphaMapUv:Mt&&T(b.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(ie||q),vertexNormals:!!tt.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!tt.attributes.uv&&(wt||Mt),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||tt.attributes.normal===void 0&&ie===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:bt,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:Kt,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:rt.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:wt&&b.map.isVideoTexture===!0&&Ue.getTransfer(b.map.colorSpace)===Ye,decodeVideoTextureEmissive:mn&&b.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(b.emissiveMap.colorSpace)===Ye,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fa,flipSided:b.side===si,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Tt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&b.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Gt.vertexUv1s=p.has(1),Gt.vertexUv2s=p.has(2),Gt.vertexUv3s=p.has(3),p.clear(),Gt}function M(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)D.push(F),D.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(S(D,b),N(D,b),D.push(o.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function S(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numSunLights),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numSunLightShadows),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function N(b,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.retroreflection&&h.enable(24),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),D.packedNormalMap&&h.enable(22),D.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),D.numLightProbeGrids>0&&h.enable(22),D.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function B(b){const D=y[b.type];let F;if(D){const V=ua[D];F=zT.clone(V.uniforms)}else F=b.uniforms;return F}function C(b,D){let F=v.get(D);return F!==void 0?++F.usedTimes:(F=new mw(o,D,b,l),m.push(F),v.set(D,F)),F}function L(b){if(--b.usedTimes===0){const D=m.indexOf(b);m[D]=m[m.length-1],m.pop(),v.delete(b.cacheKey),b.destroy()}}function U(b){d.remove(b)}function P(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:B,acquireProgram:C,releaseProgram:L,releaseShaderCache:U,programs:m,dispose:P}}function Mw(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function yw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function Cx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Dx(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(_){let y=0;return _.isInstancedMesh&&(y+=2),_.isSkinnedMesh&&(y+=1),y}function d(_,y,T,w,M,S){let N=o[t];return N===void 0?(N={id:_.id,object:_,geometry:y,material:T,materialVariant:h(_),groupOrder:w,renderOrder:_.renderOrder,z:M,group:S},o[t]=N):(N.id=_.id,N.object=_,N.geometry=y,N.material=T,N.materialVariant=h(_),N.groupOrder=w,N.renderOrder=_.renderOrder,N.z=M,N.group=S),t++,N}function p(_,y,T,w,M,S,N){N.reversedDepth===!0&&(M=-M);const B=d(_,y,T,w,M,S);T.transmission>0?s.push(B):T.transparent===!0?l.push(B):i.push(B)}function m(_,y,T,w,M,S){const N=d(_,y,T,w,M,S);T.transmission>0?s.unshift(N):T.transparent===!0?l.unshift(N):i.unshift(N)}function v(_,y){i.length>1&&i.sort(_||yw),s.length>1&&s.sort(y||Cx),l.length>1&&l.sort(y||Cx)}function g(){for(let _=t,y=o.length;_<y;_++){const T=o[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:p,unshift:m,finish:g,sort:v}}function Ew(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new Dx,o.set(s,[h])):l>=u.length?(h=new Dx,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Tw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new k,color:new Me};break;case"SpotLight":i={position:new k,direction:new k,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new k,halfWidth:new k,halfHeight:new k};break}return o[t.id]=i,i}}}function bw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Aw=0;function Rw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function ww(o){const t=new Tw,i=bw(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new k);const l=new k,u=new on,h=new on;function d(m){let v=0,g=0,_=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let y=0,T=0,w=0,M=0,S=0,N=0,B=0,C=0,L=0,U=0,P=0,b=0,D=0,F=0;m.sort(Rw);for(let Q=0,rt=m.length;Q<rt;Q++){const Y=m[Q],tt=Y.color,X=Y.intensity,Z=Y.distance;let ht=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===ar?ht=Y.shadow.map.texture:ht=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)v+=tt.r*X,g+=tt.g*X,_+=tt.b*X;else if(Y.isLightProbe){for(let at=0;at<9;at++)s.probe[at].addScaledVector(Y.sh.coefficients[at],X);F++}else if(Y.isSunLight){const at=t.get(Y);if(at.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const nt=Y.shadow,xt=i.get(Y);xt.shadowIntensity=nt.intensity,xt.shadowBias=nt.bias,xt.shadowNormalBias=nt.normalBias,xt.shadowRadius=nt.radius,xt.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),s.sunShadow[T]=xt,s.sunShadowMap[T]=ht;const Zt=nt.getViewportCount();for(let Kt=0;Kt<Zt;Kt++)s.sunShadowMatrix[w+Kt]=nt.getMatrix(Kt),s.sunShadowCascade[w+Kt]=nt._cascadeData[Kt];w+=Zt,T++}s.sun[y]=at,y++}else if(Y.isDirectionalLight){const at=t.get(Y);if(at.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const nt=Y.shadow,xt=i.get(Y);xt.shadowIntensity=nt.intensity,xt.shadowBias=nt.bias,xt.shadowNormalBias=nt.normalBias,xt.shadowRadius=nt.radius,xt.shadowMapSize=nt.mapSize,s.directionalShadow[M]=xt,s.directionalShadowMap[M]=ht,s.directionalShadowMatrix[M]=Y.shadow.matrix,L++}s.directional[M]=at,M++}else if(Y.isSpotLight){const at=t.get(Y);at.position.setFromMatrixPosition(Y.matrixWorld),at.color.copy(tt).multiplyScalar(X),at.distance=Z,at.coneCos=Math.cos(Y.angle),at.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),at.decay=Y.decay,s.spot[N]=at;const nt=Y.shadow;if(Y.map&&(s.spotLightMap[b]=Y.map,b++,nt.updateMatrices(Y),Y.castShadow&&D++),s.spotLightMatrix[N]=nt.matrix,Y.castShadow){const xt=i.get(Y);xt.shadowIntensity=nt.intensity,xt.shadowBias=nt.bias,xt.shadowNormalBias=nt.normalBias,xt.shadowRadius=nt.radius,xt.shadowMapSize=nt.mapSize,s.spotShadow[N]=xt,s.spotShadowMap[N]=ht,P++}N++}else if(Y.isRectAreaLight){const at=t.get(Y);at.color.copy(tt).multiplyScalar(X),at.halfWidth.set(Y.width*.5,0,0),at.halfHeight.set(0,Y.height*.5,0),s.rectArea[B]=at,B++}else if(Y.isPointLight){const at=t.get(Y);if(at.color.copy(Y.color).multiplyScalar(Y.intensity),at.distance=Y.distance,at.decay=Y.decay,Y.castShadow){const nt=Y.shadow,xt=i.get(Y);xt.shadowIntensity=nt.intensity,xt.shadowBias=nt.bias,xt.shadowNormalBias=nt.normalBias,xt.shadowRadius=nt.radius,xt.shadowMapSize=nt.mapSize,xt.shadowCameraNear=nt.camera.near,xt.shadowCameraFar=nt.camera.far,s.pointShadow[S]=xt,s.pointShadowMap[S]=ht,s.pointShadowMatrix[S]=Y.shadow.matrix,U++}s.point[S]=at,S++}else if(Y.isHemisphereLight){const at=t.get(Y);at.skyColor.copy(Y.color).multiplyScalar(X),at.groundColor.copy(Y.groundColor).multiplyScalar(X),s.hemi[C]=at,C++}}B>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=_;const V=s.hash;(V.sunLength!==y||V.directionalLength!==M||V.pointLength!==S||V.spotLength!==N||V.rectAreaLength!==B||V.hemiLength!==C||V.numSunShadows!==T||V.numDirectionalShadows!==L||V.numPointShadows!==U||V.numSpotShadows!==P||V.numSpotMaps!==b||V.numLightProbes!==F)&&(s.sun.length=y,s.directional.length=M,s.spot.length=N,s.rectArea.length=B,s.point.length=S,s.hemi.length=C,s.sunShadow.length=T,s.sunShadowMap.length=T,s.sunShadowMatrix.length=w,s.sunShadowCascade.length=w,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.directionalShadowMatrix.length=L,s.pointShadow.length=U,s.pointShadowMap.length=U,s.pointShadowMatrix.length=U,s.spotShadow.length=P,s.spotShadowMap.length=P,s.spotLightMatrix.length=P+b-D,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=F,V.sunLength=y,V.directionalLength=M,V.pointLength=S,V.spotLength=N,V.rectAreaLength=B,V.hemiLength=C,V.numSunShadows=T,V.numDirectionalShadows=L,V.numPointShadows=U,V.numSpotShadows=P,V.numSpotMaps=b,V.numLightProbes=F,s.version=Aw++)}function p(m,v){let g=0,_=0,y=0,T=0,w=0,M=0;const S=v.matrixWorldInverse;for(let N=0,B=m.length;N<B;N++){const C=m[N];if(C.isSunLight){const L=s.sun[g];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(S),g++}else if(C.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),_++}else if(C.isSpotLight){const L=s.spot[T];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),T++}else if(C.isRectAreaLight){const L=s.rectArea[w];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),h.identity(),u.copy(C.matrixWorld),u.premultiply(S),h.extractRotation(u),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),w++}else if(C.isPointLight){const L=s.point[y];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),y++}else if(C.isHemisphereLight){const L=s.hemi[M];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(S),M++}}}return{setup:d,setupView:p,state:s}}function Nx(o){const t=new ww(o),i=[],s=[],l=[];function u(_){g.camera=_,i.length=0,s.length=0,l.length=0}function h(_){i.push(_)}function d(_){s.push(_)}function p(_){l.push(_)}function m(){t.setup(i)}function v(_){t.setupView(i,_)}const g={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:g,setupLights:m,setupLightsView:v,pushLight:h,pushShadow:d,pushLightProbeGrid:p}}function Cw(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Nx(o),t.set(l,[d])):u>=h.length?(d=new Nx(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lw=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Uw=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Lx=new on,Ml=new k,rp=new k;function Ow(o,t,i){let s=new fm;const l=new Ae,u=new Ae,h=new rn,d=new VT,p=new kT,m={},v=i.maxTextureSize,g={[nr]:si,[si]:nr,[fa]:fa},_=new _a({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Dw,fragmentShader:Nw}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const T=new Jn;T.setAttribute("position",new Ga(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new re(T,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let S=this.type;this.render=function(U,P,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===dE&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tl);const D=o.getRenderTarget(),F=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(Fa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const rt=S!==this.type;rt&&P.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(tt=>tt.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,tt=U.length;Y<tt;Y++){const X=U[Y],Z=X.shadow;if(Z===void 0){oe("WebGLShadowMap:",X,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const ht=Z.getFrameExtents();l.multiply(ht),u.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ht.x),l.x=u.x*ht.x,Z.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ht.y),l.y=u.y*ht.y,Z.mapSize.y=u.y));const at=o.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=at,Z.map===null||rt===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===yl){if(X.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Yi(l.x,l.y,{format:ar,type:ga,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),Z.map.texture.name=X.name+".shadowMap",Z.map.depthTexture=new Ol(l.x,l.y,ha),Z.map.depthTexture.name=X.name+".shadowMapDepth",Z.map.depthTexture.format=Va,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=zn,Z.map.depthTexture.magFilter=zn}else X.isPointLight?(Z.map=new mS(l.x),Z.map.depthTexture=new IT(l.x,ma)):(Z.map=new Yi(l.x,l.y),Z.map.depthTexture=new Ol(l.x,l.y,ma)),Z.map.depthTexture.name=X.name+".shadowMap",Z.map.depthTexture.format=Va,this.type===Tl?(Z.map.depthTexture.compareFunction=at?om:rm,Z.map.depthTexture.minFilter=Vn,Z.map.depthTexture.magFilter=Vn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=zn,Z.map.depthTexture.magFilter=zn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==l.x||Z.map.height!==l.y)&&Z.map.setSize(l.x,l.y);const nt=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();X.isPointLight!==!0&&Z.updateMatrices(X,b);for(let xt=0;xt<nt;xt++){const Zt=Z.getCamera(xt);if(X.isPointLight){const Kt=Z.camera,z=Z.matrix,mt=X.distance||Kt.far;mt!==Kt.far&&(Kt.far=mt,Kt.updateProjectionMatrix()),Ml.setFromMatrixPosition(X.matrixWorld),Kt.position.copy(Ml),rp.copy(Kt.position),rp.add(Lw[xt]),Kt.up.copy(Uw[xt]),Kt.lookAt(rp),Kt.updateMatrixWorld(),z.makeTranslation(-Ml.x,-Ml.y,-Ml.z),Lx.multiplyMatrices(Kt.projectionMatrix,Kt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Lx,Kt.coordinateSystem,Kt.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)o.setRenderTarget(Z.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(Z.map),o.clear());const Kt=Z.getViewport(xt);h.set(u.x*Kt.x,u.y*Kt.y,u.x*Kt.z,u.y*Kt.w),Q.viewport(h)}s=Z.getFrustum(xt),C(P,b,Zt,X,this.type)}Z.isPointLightShadow!==!0&&this.type===yl&&N(Z,b),Z.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(D,F,V)};function N(U,P){const b=t.update(w);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null?U.mapPass=new Yi(l.x,l.y,{format:ar,type:ga}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),_.uniforms.shadow_pass.value=U.map.depthTexture,_.uniforms.resolution.value.set(U.map.width,U.map.height),_.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(P,null,b,_,w,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value.set(U.map.width,U.map.height),y.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(P,null,b,y,w,null)}function B(U,P,b,D){let F=null;const V=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)F=V;else if(F=b.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Q=F.uuid,rt=P.uuid;let Y=m[Q];Y===void 0&&(Y={},m[Q]=Y);let tt=Y[rt];tt===void 0&&(tt=F.clone(),Y[rt]=tt,P.addEventListener("dispose",L)),F=tt}if(F.visible=P.visible,F.wireframe=P.wireframe,D===yl?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:g[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,b.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const Q=o.properties.get(F);Q.light=b}return F}function C(U,P,b,D,F){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&F===yl)&&(!U.frustumCulled||U.intersectsFrustum(s))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const rt=t.update(U),Y=U.material;if(Array.isArray(Y)){const tt=rt.groups;for(let X=0,Z=tt.length;X<Z;X++){const ht=tt[X],at=Y[ht.materialIndex];if(at&&at.visible){const nt=B(U,at,D,F);U.onBeforeShadow(o,U,P,b,rt,nt,ht),o.renderBufferDirect(b,null,rt,nt,U,ht),U.onAfterShadow(o,U,P,b,rt,nt,ht)}}}else if(Y.visible){const tt=B(U,Y,D,F);U.onBeforeShadow(o,U,P,b,rt,tt,null),o.renderBufferDirect(b,null,rt,tt,U,null),U.onAfterShadow(o,U,P,b,rt,tt,null)}}const Q=U.children;for(let rt=0,Y=Q.length;rt<Y;rt++)C(Q[rt],P,b,D,F)}function L(U){U.target.removeEventListener("dispose",L);for(const b in m){const D=m[b],F=U.target.uuid;F in D&&(D[F].dispose(),delete D[F])}}}function Pw(o,t){function i(){let W=!1;const Ct=new rn;let Mt=null;const Lt=new rn(0,0,0,0);return{setMask:function(Vt){Mt!==Vt&&!W&&(o.colorMask(Vt,Vt,Vt,Vt),Mt=Vt)},setLocked:function(Vt){W=Vt},setClear:function(Vt,Tt,Jt,Gt,Ne){Ne===!0&&(Vt*=Gt,Tt*=Gt,Jt*=Gt),Ct.set(Vt,Tt,Jt,Gt),Lt.equals(Ct)===!1&&(o.clearColor(Vt,Tt,Jt,Gt),Lt.copy(Ct))},reset:function(){W=!1,Mt=null,Lt.set(-1,0,0,0)}}}function s(){let W=!1,Ct=!1,Mt=null,Lt=null,Vt=null;return{setReversed:function(Tt){if(Ct!==Tt){const Jt=t.get("EXT_clip_control");Tt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Tt;const Gt=Vt;Vt=null,this.setClear(Gt)}},getReversed:function(){return Ct},setTest:function(Tt){Tt?dt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Tt){Mt!==Tt&&!W&&(o.depthMask(Tt),Mt=Tt)},setFunc:function(Tt){if(Ct&&(Tt=ZE[Tt]),Lt!==Tt){switch(Tt){case lp:o.depthFunc(o.NEVER);break;case cp:o.depthFunc(o.ALWAYS);break;case up:o.depthFunc(o.LESS);break;case wl:o.depthFunc(o.LEQUAL);break;case fp:o.depthFunc(o.EQUAL);break;case hp:o.depthFunc(o.GEQUAL);break;case dp:o.depthFunc(o.GREATER);break;case pp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Lt=Tt}},setLocked:function(Tt){W=Tt},setClear:function(Tt){Vt!==Tt&&(Vt=Tt,Ct&&(Tt=1-Tt),o.clearDepth(Tt))},reset:function(){W=!1,Mt=null,Lt=null,Vt=null,Ct=!1}}}function l(){let W=!1,Ct=null,Mt=null,Lt=null,Vt=null,Tt=null,Jt=null,Gt=null,Ne=null;return{setTest:function(ue){W||(ue?dt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(ue){Ct!==ue&&!W&&(o.stencilMask(ue),Ct=ue)},setFunc:function(ue,ri,Si){(Mt!==ue||Lt!==ri||Vt!==Si)&&(o.stencilFunc(ue,ri,Si),Mt=ue,Lt=ri,Vt=Si)},setOp:function(ue,ri,Si){(Tt!==ue||Jt!==ri||Gt!==Si)&&(o.stencilOp(ue,ri,Si),Tt=ue,Jt=ri,Gt=Si)},setLocked:function(ue){W=ue},setClear:function(ue){Ne!==ue&&(o.clearStencil(ue),Ne=ue)},reset:function(){W=!1,Ct=null,Mt=null,Lt=null,Vt=null,Tt=null,Jt=null,Gt=null,Ne=null}}}const u=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let v={},g={},_={},y=new WeakMap,T=[],w=null,M=!1,S=null,N=null,B=null,C=null,L=null,U=null,P=null,b=new Me(0,0,0),D=0,F=!1,V=null,Q=null,rt=null,Y=null,tt=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ht=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(at)[1]),Z=ht>=1):at.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),Z=ht>=2);let nt=null,xt={};const Zt=o.getParameter(o.SCISSOR_BOX),Kt=o.getParameter(o.VIEWPORT),z=new rn().fromArray(Zt),mt=new rn().fromArray(Kt);function Rt(W,Ct,Mt,Lt){const Vt=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(W,Tt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<Mt;Jt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Lt,0,o.RGBA,o.UNSIGNED_BYTE,Vt):o.texImage2D(Ct+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Vt);return Tt}const j={};j[o.TEXTURE_2D]=Rt(o.TEXTURE_2D,o.TEXTURE_2D,1),j[o.TEXTURE_CUBE_MAP]=Rt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[o.TEXTURE_2D_ARRAY]=Rt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),j[o.TEXTURE_3D]=Rt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),dt(o.DEPTH_TEST),h.setFunc(wl),ee(!1),ie(Uv),dt(o.CULL_FACE),_e(Fa);function dt(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function bt(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function Bt(W,Ct){return _[W]!==Ct?(o.bindFramebuffer(W,Ct),_[W]=Ct,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ct),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function _t(W,Ct){let Mt=T,Lt=!1;if(W){Mt=y.get(Ct),Mt===void 0&&(Mt=[],y.set(Ct,Mt));const Vt=W.textures;if(Mt.length!==Vt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let Tt=0,Jt=Vt.length;Tt<Jt;Tt++)Mt[Tt]=o.COLOR_ATTACHMENT0+Tt;Mt.length=Vt.length,Lt=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Lt=!0);Lt&&o.drawBuffers(Mt)}function wt(W){return w!==W?(o.useProgram(W),w=W,!0):!1}const Ve={[co]:o.FUNC_ADD,[mE]:o.FUNC_SUBTRACT,[gE]:o.FUNC_REVERSE_SUBTRACT};Ve[_E]=o.MIN,Ve[vE]=o.MAX;const me={[xE]:o.ZERO,[SE]:o.ONE,[ME]:o.SRC_COLOR,[zx]:o.SRC_ALPHA,[RE]:o.SRC_ALPHA_SATURATE,[bE]:o.DST_COLOR,[EE]:o.DST_ALPHA,[yE]:o.ONE_MINUS_SRC_COLOR,[Fx]:o.ONE_MINUS_SRC_ALPHA,[AE]:o.ONE_MINUS_DST_COLOR,[TE]:o.ONE_MINUS_DST_ALPHA,[wE]:o.CONSTANT_COLOR,[CE]:o.ONE_MINUS_CONSTANT_COLOR,[DE]:o.CONSTANT_ALPHA,[NE]:o.ONE_MINUS_CONSTANT_ALPHA};function _e(W,Ct,Mt,Lt,Vt,Tt,Jt,Gt,Ne,ue){if(W===Fa){M===!0&&(bt(o.BLEND),M=!1);return}if(M===!1&&(dt(o.BLEND),M=!0),W!==pE){if(W!==S||ue!==F){if((N!==co||L!==co)&&(o.blendEquation(o.FUNC_ADD),N=co,L=co),ue)switch(W){case bl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ov:o.blendFunc(o.ONE,o.ONE);break;case Pv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Iv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Be("WebGLState: Invalid blending: ",W);break}else switch(W){case bl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ov:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Pv:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Iv:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",W);break}B=null,C=null,U=null,P=null,b.set(0,0,0),D=0,S=W,F=ue}return}Vt=Vt||Ct,Tt=Tt||Mt,Jt=Jt||Lt,(Ct!==N||Vt!==L)&&(o.blendEquationSeparate(Ve[Ct],Ve[Vt]),N=Ct,L=Vt),(Mt!==B||Lt!==C||Tt!==U||Jt!==P)&&(o.blendFuncSeparate(me[Mt],me[Lt],me[Tt],me[Jt]),B=Mt,C=Lt,U=Tt,P=Jt),(Gt.equals(b)===!1||Ne!==D)&&(o.blendColor(Gt.r,Gt.g,Gt.b,Ne),b.copy(Gt),D=Ne),S=W,F=!1}function ye(W,Ct){W.side===fa?bt(o.CULL_FACE):dt(o.CULL_FACE);let Mt=W.side===si;Ct&&(Mt=!Mt),ee(Mt),W.blending===bl&&W.transparent===!1?_e(Fa):_e(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const Lt=W.stencilWrite;d.setTest(Lt),Lt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),mn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(W){V!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),V=W)}function ie(W){W!==fE?(dt(o.CULL_FACE),W!==Q&&(W===Uv?o.cullFace(o.BACK):W===hE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),Q=W}function ke(W){W!==rt&&(Z&&o.lineWidth(W),rt=W)}function mn(W,Ct,Mt){W?(dt(o.POLYGON_OFFSET_FILL),(Y!==Ct||tt!==Mt)&&(Y=Ct,tt=Mt,h.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,Mt))):bt(o.POLYGON_OFFSET_FILL)}function Ie(W){W?dt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function tn(W){W===void 0&&(W=o.TEXTURE0+X-1),nt!==W&&(o.activeTexture(W),nt=W)}function q(W,Ct,Mt){Mt===void 0&&(nt===null?Mt=o.TEXTURE0+X-1:Mt=nt);let Lt=xt[Mt];Lt===void 0&&(Lt={type:void 0,texture:void 0},xt[Mt]=Lt),(Lt.type!==W||Lt.texture!==Ct)&&(nt!==Mt&&(o.activeTexture(Mt),nt=Mt),o.bindTexture(W,Ct||j[W]),Lt.type=W,Lt.texture=Ct)}function nn(){const W=xt[nt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Pe(){try{o.compressedTexImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function E(){try{o.texSubImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function et(){try{o.texSubImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function pt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function At(){try{o.texStorage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function Nt(){try{o.texStorage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function gt(){try{o.texImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function yt(){try{o.texImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function Dt(W){return g[W]!==void 0?g[W]:o.getParameter(W)}function $t(W,Ct){g[W]!==Ct&&(o.pixelStorei(W,Ct),g[W]=Ct)}function It(W){z.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),z.copy(W))}function Pt(W){mt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),mt.copy(W))}function kt(W,Ct){let Mt=m.get(Ct);Mt===void 0&&(Mt=new WeakMap,m.set(Ct,Mt));let Lt=Mt.get(W);Lt===void 0&&(Lt=o.getUniformBlockIndex(Ct,W.name),Mt.set(W,Lt))}function ne(W,Ct){const Lt=m.get(Ct).get(W);p.get(Ct)!==Lt&&(o.uniformBlockBinding(Ct,Lt,W.__bindingPointIndex),p.set(Ct,Lt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},g={},nt=null,xt={},_={},y=new WeakMap,T=[],w=null,M=!1,S=null,N=null,B=null,C=null,L=null,U=null,P=null,b=new Me(0,0,0),D=0,F=!1,V=null,Q=null,rt=null,Y=null,tt=null,z.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:dt,disable:bt,bindFramebuffer:Bt,drawBuffers:_t,useProgram:wt,setBlending:_e,setMaterial:ye,setFlipSided:ee,setCullFace:ie,setLineWidth:ke,setPolygonOffset:mn,setScissorTest:Ie,activeTexture:tn,bindTexture:q,unbindTexture:nn,compressedTexImage2D:Pe,compressedTexImage3D:O,texImage2D:gt,texImage3D:yt,pixelStorei:$t,getParameter:Dt,updateUBOMapping:kt,uniformBlockBinding:ne,texStorage2D:At,texStorage3D:Nt,texSubImage2D:E,texSubImage3D:et,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:It,viewport:Pt,reset:ce}}function Iw(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ae,v=new WeakMap,g=new Set;let _;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,E){return T?new OffscreenCanvas(O,E):Fu("canvas")}function M(O,E,et){let ct=1;const pt=Pe(O);if((pt.width>et||pt.height>et)&&(ct=et/Math.max(pt.width,pt.height)),ct<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const At=Math.floor(ct*pt.width),Nt=Math.floor(ct*pt.height);_===void 0&&(_=w(At,Nt));const gt=E?w(At,Nt):_;return gt.width=At,gt.height=Nt,gt.getContext("2d").drawImage(O,0,0,At,Nt),oe("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+At+"x"+Nt+")."),gt}else return"data"in O&&oe("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),O;return O}function S(O){return O.generateMipmaps}function N(O){o.generateMipmap(O)}function B(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(O,E,et,ct,pt,At=!1){if(O!==null){if(o[O]!==void 0)return o[O];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Nt;ct&&(Nt=t.get("EXT_texture_norm16"),Nt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=E;if(E===o.RED&&(et===o.FLOAT&&(gt=o.R32F),et===o.HALF_FLOAT&&(gt=o.R16F),et===o.UNSIGNED_BYTE&&(gt=o.R8),et===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.R16_EXT),et===o.SHORT&&Nt&&(gt=Nt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.R8UI),et===o.UNSIGNED_SHORT&&(gt=o.R16UI),et===o.UNSIGNED_INT&&(gt=o.R32UI),et===o.BYTE&&(gt=o.R8I),et===o.SHORT&&(gt=o.R16I),et===o.INT&&(gt=o.R32I)),E===o.RG&&(et===o.FLOAT&&(gt=o.RG32F),et===o.HALF_FLOAT&&(gt=o.RG16F),et===o.UNSIGNED_BYTE&&(gt=o.RG8),et===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.RG16_EXT),et===o.SHORT&&Nt&&(gt=Nt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RG8UI),et===o.UNSIGNED_SHORT&&(gt=o.RG16UI),et===o.UNSIGNED_INT&&(gt=o.RG32UI),et===o.BYTE&&(gt=o.RG8I),et===o.SHORT&&(gt=o.RG16I),et===o.INT&&(gt=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),et===o.UNSIGNED_INT&&(gt=o.RGB32UI),et===o.BYTE&&(gt=o.RGB8I),et===o.SHORT&&(gt=o.RGB16I),et===o.INT&&(gt=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),et===o.UNSIGNED_INT&&(gt=o.RGBA32UI),et===o.BYTE&&(gt=o.RGBA8I),et===o.SHORT&&(gt=o.RGBA16I),et===o.INT&&(gt=o.RGBA32I)),E===o.RGB&&(et===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.RGB16_EXT),et===o.SHORT&&Nt&&(gt=Nt.RGB16_SNORM_EXT),et===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),E===o.RGBA){const yt=At?zu:Ue.getTransfer(pt);et===o.FLOAT&&(gt=o.RGBA32F),et===o.HALF_FLOAT&&(gt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(gt=yt===Ye?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.RGBA16_EXT),et===o.SHORT&&Nt&&(gt=Nt.RGBA16_SNORM_EXT),et===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function L(O,E){let et;return O?E===null||E===ma||E===Dl?et=o.DEPTH24_STENCIL8:E===ha?et=o.DEPTH32F_STENCIL8:E===Cl&&(et=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ma||E===Dl?et=o.DEPTH_COMPONENT24:E===ha?et=o.DEPTH_COMPONENT32F:E===Cl&&(et=o.DEPTH_COMPONENT16),et}function U(O,E){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==zn&&O.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function P(O){const E=O.target;E.removeEventListener("dispose",P),D(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&g.delete(E)}function b(O){const E=O.target;E.removeEventListener("dispose",b),V(E)}function D(O){const E=s.get(O);if(E.__webglInit===void 0)return;const et=O.source,ct=y.get(et);if(ct){const pt=ct[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&F(O),Object.keys(ct).length===0&&y.delete(et)}s.remove(O)}function F(O){const E=s.get(O);o.deleteTexture(E.__webglTexture);const et=O.source,ct=y.get(et);delete ct[E.__cacheKey],h.memory.textures--}function V(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let pt=0;pt<E.__webglFramebuffer[ct].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[ct][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)o.deleteFramebuffer(E.__webglFramebuffer[ct]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=O.textures;for(let ct=0,pt=et.length;ct<pt;ct++){const At=s.get(et[ct]);At.__webglTexture&&(o.deleteTexture(At.__webglTexture),h.memory.textures--),s.remove(et[ct])}s.remove(O)}let Q=0;function rt(){Q=0}function Y(){return Q}function tt(O){Q=O}function X(){const O=Q;return O>=l.maxTextures&&oe("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+l.maxTextures),Q+=1,O}function Z(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function ht(O,E){const et=s.get(O);if(O.isVideoTexture&&q(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&et.__version!==O.version){const ct=O.image;if(ct===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(et,O,E);return}}else O.isExternalTexture&&(et.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function at(O,E){const et=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){bt(et,O,E);return}else O.isExternalTexture&&(et.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function nt(O,E){const et=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){bt(et,O,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function xt(O,E){const et=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&et.__version!==O.version){Bt(et,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const Zt={[mp]:o.REPEAT,[Wi]:o.CLAMP_TO_EDGE,[gp]:o.MIRRORED_REPEAT},Kt={[zn]:o.NEAREST,[OE]:o.NEAREST_MIPMAP_NEAREST,[au]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[Dd]:o.LINEAR_MIPMAP_NEAREST,[tr]:o.LINEAR_MIPMAP_LINEAR},z={[zE]:o.NEVER,[kE]:o.ALWAYS,[FE]:o.LESS,[rm]:o.LEQUAL,[HE]:o.EQUAL,[om]:o.GEQUAL,[GE]:o.GREATER,[VE]:o.NOTEQUAL};function mt(O,E){if(E.type===ha&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===Dd||E.magFilter===au||E.magFilter===tr||E.minFilter===Vn||E.minFilter===Dd||E.minFilter===au||E.minFilter===tr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Zt[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Zt[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Zt[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Kt[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Kt[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zn||E.minFilter!==au&&E.minFilter!==tr||E.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(O,E){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",P));const ct=E.source;let pt=y.get(ct);pt===void 0&&(pt={},y.set(ct,pt));const At=Z(E);if(At!==O.__cacheKey){pt[At]===void 0&&(pt[At]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),pt[At].usedTimes++;const Nt=pt[O.__cacheKey];Nt!==void 0&&(pt[O.__cacheKey].usedTimes--,Nt.usedTimes===0&&F(E)),O.__cacheKey=At,O.__webglTexture=pt[At].texture}return et}function j(O,E,et){return Math.floor(Math.floor(O/et)/E)}function dt(O,E,et,ct){const At=O.updateRanges;if(At.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ct,E.data);else{At.sort(($t,It)=>$t.start-It.start);let Nt=0;for(let $t=1;$t<At.length;$t++){const It=At[Nt],Pt=At[$t],kt=It.start+It.count,ne=j(Pt.start,E.width,4),ce=j(It.start,E.width,4);Pt.start<=kt+1&&ne===ce&&j(Pt.start+Pt.count-1,E.width,4)===ne?It.count=Math.max(It.count,Pt.start+Pt.count-It.start):(++Nt,At[Nt]=Pt)}At.length=Nt+1;const gt=i.getParameter(o.UNPACK_ROW_LENGTH),yt=i.getParameter(o.UNPACK_SKIP_PIXELS),Dt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let $t=0,It=At.length;$t<It;$t++){const Pt=At[$t],kt=Math.floor(Pt.start/4),ne=Math.ceil(Pt.count/4),ce=kt%E.width,W=Math.floor(kt/E.width),Ct=ne,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ce,W,Ct,Mt,et,ct,E.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,gt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Dt)}}function bt(O,E,et){let ct=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=o.TEXTURE_3D);const pt=Rt(O,E),At=E.source;i.bindTexture(ct,O.__webglTexture,o.TEXTURE0+et);const Nt=s.get(At);if(At.version!==Nt.__version||pt===!0){if(i.activeTexture(o.TEXTURE0+et),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Mt=Ue.getPrimaries(Ue.workingColorSpace),Lt=E.colorSpace===Ts?null:Ue.getPrimaries(E.colorSpace),Vt=E.colorSpace===Ts||Mt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let yt=M(E.image,!1,l.maxTextureSize);yt=nn(E,yt);const Dt=u.convert(E.format,E.colorSpace),$t=u.convert(E.type);let It=C(E.internalFormat,Dt,$t,E.normalized,E.colorSpace,E.isVideoTexture);mt(ct,E);let Pt;const kt=E.mipmaps,ne=E.isVideoTexture!==!0,ce=Nt.__version===void 0||pt===!0,W=At.dataReady,Ct=U(E,yt);if(E.isDepthTexture)It=L(E.format===er,E.type),ce&&(ne?i.texStorage2D(o.TEXTURE_2D,1,It,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,It,yt.width,yt.height,0,Dt,$t,null));else if(E.isDataTexture)if(kt.length>0){ne&&ce&&i.texStorage2D(o.TEXTURE_2D,Ct,It,kt[0].width,kt[0].height);for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)Pt=kt[Mt],ne?W&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Dt,$t,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,It,Pt.width,Pt.height,0,Dt,$t,Pt.data);E.generateMipmaps=!1}else ne?(ce&&i.texStorage2D(o.TEXTURE_2D,Ct,It,yt.width,yt.height),W&&dt(E,yt,Dt,$t)):i.texImage2D(o.TEXTURE_2D,0,It,yt.width,yt.height,0,Dt,$t,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ne&&ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,It,kt[0].width,kt[0].height,yt.depth);for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)if(Pt=kt[Mt],E.format!==qi)if(Dt!==null)if(ne){if(W)if(E.layerUpdates.size>0){const Vt=ux(Pt.width,Pt.height,E.format,E.type);for(const Tt of E.layerUpdates){const Jt=Pt.data.subarray(Tt*Vt/Pt.data.BYTES_PER_ELEMENT,(Tt+1)*Vt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,Tt,Pt.width,Pt.height,1,Dt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,yt.depth,Dt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,It,Pt.width,Pt.height,yt.depth,0,Pt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?W&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,yt.depth,Dt,$t,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,It,Pt.width,Pt.height,yt.depth,0,Dt,$t,Pt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ne&&ce&&i.texStorage2D(o.TEXTURE_2D,Ct,It,kt[0].width,kt[0].height);for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)Pt=kt[Mt],E.format!==qi?Dt!==null?ne?W&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Dt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,It,Pt.width,Pt.height,0,Pt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?W&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Dt,$t,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,It,Pt.width,Pt.height,0,Dt,$t,Pt.data)}else if(E.isDataArrayTexture)if(ne){if(ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,It,yt.width,yt.height,yt.depth),W)if(E.layerUpdates.size>0){const Mt=ux(yt.width,yt.height,E.format,E.type);for(const Lt of E.layerUpdates){const Vt=yt.data.subarray(Lt*Mt/yt.data.BYTES_PER_ELEMENT,(Lt+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Lt,yt.width,yt.height,1,Dt,$t,Vt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Dt,$t,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,It,yt.width,yt.height,yt.depth,0,Dt,$t,yt.data);else if(E.isData3DTexture)ne?(ce&&i.texStorage3D(o.TEXTURE_3D,Ct,It,yt.width,yt.height,yt.depth),W&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Dt,$t,yt.data)):i.texImage3D(o.TEXTURE_3D,0,It,yt.width,yt.height,yt.depth,0,Dt,$t,yt.data);else if(E.isFramebufferTexture){if(ce)if(ne)i.texStorage2D(o.TEXTURE_2D,Ct,It,yt.width,yt.height);else{let Mt=yt.width,Lt=yt.height;for(let Vt=0;Vt<Ct;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,It,Mt,Lt,0,Dt,$t,null),Mt>>=1,Lt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),yt.parentNode!==Mt){Mt.appendChild(yt),g.add(E),Mt.onpaint=Lt=>{const Vt=Lt.changedElements;for(const Tt of g)Vt.includes(Tt.image)&&(Tt.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,yt);else{const Vt=o.RGBA,Tt=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Vt,Tt,Jt,yt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(kt.length>0){if(ne&&ce){const Mt=Pe(kt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,It,Mt.width,Mt.height)}for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)Pt=kt[Mt],ne?W&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt,$t,Pt):i.texImage2D(o.TEXTURE_2D,Mt,It,Dt,$t,Pt);E.generateMipmaps=!1}else if(ne){if(ce){const Mt=Pe(yt);i.texStorage2D(o.TEXTURE_2D,Ct,It,Mt.width,Mt.height)}W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,$t,yt)}else i.texImage2D(o.TEXTURE_2D,0,It,Dt,$t,yt);S(E)&&N(ct),Nt.__version=At.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Bt(O,E,et){if(E.image.length!==6)return;const ct=Rt(O,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+et);const At=s.get(pt);if(pt.version!==At.__version||ct===!0){i.activeTexture(o.TEXTURE0+et);const Nt=Ue.getPrimaries(Ue.workingColorSpace),gt=E.colorSpace===Ts?null:Ue.getPrimaries(E.colorSpace),yt=E.colorSpace===Ts||Nt===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,$t=E.image[0]&&E.image[0].isDataTexture,It=[];for(let Tt=0;Tt<6;Tt++)!Dt&&!$t?It[Tt]=M(E.image[Tt],!0,l.maxCubemapSize):It[Tt]=$t?E.image[Tt].image:E.image[Tt],It[Tt]=nn(E,It[Tt]);const Pt=It[0],kt=u.convert(E.format,E.colorSpace),ne=u.convert(E.type),ce=C(E.internalFormat,kt,ne,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Ct=At.__version===void 0||ct===!0,Mt=pt.dataReady;let Lt=U(E,Pt);mt(o.TEXTURE_CUBE_MAP,E);let Vt;if(Dt){W&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ce,Pt.width,Pt.height);for(let Tt=0;Tt<6;Tt++){Vt=It[Tt].mipmaps;for(let Jt=0;Jt<Vt.length;Jt++){const Gt=Vt[Jt];E.format!==qi?kt!==null?W?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt,0,0,Gt.width,Gt.height,kt,Gt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt,ce,Gt.width,Gt.height,0,Gt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt,0,0,Gt.width,Gt.height,kt,ne,Gt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt,ce,Gt.width,Gt.height,0,kt,ne,Gt.data)}}}else{if(Vt=E.mipmaps,W&&Ct){Vt.length>0&&Lt++;const Tt=Pe(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ce,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if($t){W?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,It[Tt].width,It[Tt].height,kt,ne,It[Tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ce,It[Tt].width,It[Tt].height,0,kt,ne,It[Tt].data);for(let Jt=0;Jt<Vt.length;Jt++){const Ne=Vt[Jt].image[Tt].image;W?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt+1,0,0,Ne.width,Ne.height,kt,ne,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt+1,ce,Ne.width,Ne.height,0,kt,ne,Ne.data)}}else{W?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,kt,ne,It[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ce,kt,ne,It[Tt]);for(let Jt=0;Jt<Vt.length;Jt++){const Gt=Vt[Jt];W?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt+1,0,0,kt,ne,Gt.image[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt+1,ce,kt,ne,Gt.image[Tt])}}}S(E)&&N(o.TEXTURE_CUBE_MAP),At.__version=pt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function _t(O,E,et,ct,pt,At){const Nt=u.convert(et.format,et.colorSpace),gt=u.convert(et.type),yt=C(et.internalFormat,Nt,gt,et.normalized,et.colorSpace),Dt=s.get(E),$t=s.get(et);if($t.__renderTarget=E,!Dt.__hasExternalTextures){const It=Math.max(1,E.width>>At),Pt=Math.max(1,E.height>>At);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,At,yt,It,Pt,E.depth,0,Nt,gt,null):i.texImage2D(pt,At,yt,It,Pt,0,Nt,gt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),tn(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,pt,$t.__webglTexture,0,Ie(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,pt,$t.__webglTexture,At),i.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(O,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const ct=E.depthTexture,pt=ct&&ct.isDepthTexture?ct.type:null,At=L(E.stencilBuffer,pt),Nt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;tn(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie(E),At,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie(E),At,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,At,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,O)}else{const ct=E.textures;for(let pt=0;pt<ct.length;pt++){const At=ct[pt],Nt=u.convert(At.format,At.colorSpace),gt=u.convert(At.type),yt=C(At.internalFormat,Nt,gt,At.normalized,At.colorSpace);tn(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie(E),yt,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie(E),yt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,yt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ve(O,E,et){const ct=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pt=s.get(E.depthTexture);if(pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),pt.__webglTexture===void 0){pt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E.depthTexture);const Dt=u.convert(E.depthTexture.format),$t=u.convert(E.depthTexture.type);let It;E.depthTexture.format===Va?It=o.DEPTH_COMPONENT24:E.depthTexture.format===er&&(It=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,It,E.width,E.height,0,Dt,$t,null)}}else ht(E.depthTexture,0);const At=pt.__webglTexture,Nt=Ie(E),gt=ct?o.TEXTURE_CUBE_MAP_POSITIVE_X+et:o.TEXTURE_2D,yt=E.depthTexture.format===er?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Va)tn(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,gt,At,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,yt,gt,At,0);else if(E.depthTexture.format===er)tn(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,gt,At,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,yt,gt,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(O){const E=s.get(O),et=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const ct=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",pt)};ct.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ct}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(et)for(let ct=0;ct<6;ct++)Ve(E.__webglFramebuffer[ct],O,ct);else{const ct=O.texture.mipmaps;ct&&ct.length>0?Ve(E.__webglFramebuffer[0],O,0):Ve(E.__webglFramebuffer,O,0)}else if(et){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=o.createRenderbuffer(),wt(E.__webglDepthbuffer[ct],O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=E.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,At)}}else{const ct=O.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),wt(E.__webglDepthbuffer,O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,At)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function _e(O,E,et){const ct=s.get(O);E!==void 0&&_t(ct.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&me(O)}function ye(O){const E=O.texture,et=s.get(O),ct=s.get(E);O.addEventListener("dispose",b);const pt=O.textures,At=O.isWebGLCubeRenderTarget===!0,Nt=pt.length>1;if(Nt||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=E.version,h.memory.textures++),At){et.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[gt]=[];for(let yt=0;yt<E.mipmaps.length;yt++)et.__webglFramebuffer[gt][yt]=o.createFramebuffer()}else et.__webglFramebuffer[gt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)et.__webglFramebuffer[gt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Nt)for(let gt=0,yt=pt.length;gt<yt;gt++){const Dt=s.get(pt[gt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&tn(O)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let gt=0;gt<pt.length;gt++){const yt=pt[gt];et.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[gt]);const Dt=u.convert(yt.format,yt.colorSpace),$t=u.convert(yt.type),It=C(yt.internalFormat,Dt,$t,yt.normalized,yt.colorSpace,O.isXRRenderTarget===!0),Pt=Ie(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,It,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,et.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),wt(et.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(At){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)_t(et.__webglFramebuffer[gt][yt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt);else _t(et.__webglFramebuffer[gt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);S(E)&&N(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let gt=0,yt=pt.length;gt<yt;gt++){const Dt=pt[gt],$t=s.get(Dt);let It=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(It=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,$t.__webglTexture),mt(It,Dt),_t(et.__webglFramebuffer,O,Dt,o.COLOR_ATTACHMENT0+gt,It,0),S(Dt)&&N(It)}i.unbindTexture()}else{let gt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(gt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(gt,ct.__webglTexture),mt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)_t(et.__webglFramebuffer[yt],O,E,o.COLOR_ATTACHMENT0,gt,yt);else _t(et.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,gt,0);S(E)&&N(gt),i.unbindTexture()}O.depthBuffer&&me(O)}function ee(O){const E=O.textures;for(let et=0,ct=E.length;et<ct;et++){const pt=E[et];if(S(pt)){const At=B(O),Nt=s.get(pt).__webglTexture;i.bindTexture(At,Nt),N(At),i.unbindTexture()}}}const ie=[],ke=[];function mn(O){if(O.samples>0){if(tn(O)===!1){const E=O.textures,et=O.width,ct=O.height;let pt=o.COLOR_BUFFER_BIT;const At=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=s.get(O),gt=E.length>1;if(gt)for(let Dt=0;Dt<E.length;Dt++)i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const yt=O.texture.mipmaps;yt&&yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Dt=0;Dt<E.length;Dt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const $t=s.get(E[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$t,0)}o.blitFramebuffer(0,0,et,ct,0,0,et,ct,pt,o.NEAREST),p===!0&&(ie.length=0,ke.length=0,ie.push(o.COLOR_ATTACHMENT0+Dt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(ie.push(At),ke.push(At),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ke)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let Dt=0;Dt<E.length;Dt++){i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const $t=s.get(E[Dt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,$t,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&p){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ie(O){return Math.min(l.maxSamples,O.samples)}function tn(O){const E=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function q(O){const E=h.render.frame;v.get(O)!==E&&(v.set(O,E),O.update())}function nn(O,E){const et=O.colorSpace,ct=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==Bu&&et!==Ts&&(Ue.getTransfer(et)===Ye?(ct!==qi||pt!==xi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",et)),E}function Pe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=X,this.resetTextureUnits=rt,this.getTextureUnits=Y,this.setTextureUnits=tt,this.setTexture2D=ht,this.setTexture2DArray=at,this.setTexture3D=nt,this.setTextureCube=xt,this.rebindTextures=_e,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Bw(o,t){function i(s,l=Ts){let u;const h=Ue.getTransfer(l);if(s===xi)return o.UNSIGNED_BYTE;if(s===em)return o.UNSIGNED_SHORT_4_4_4_4;if(s===nm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Qx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===jx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Zx)return o.BYTE;if(s===Kx)return o.SHORT;if(s===Cl)return o.UNSIGNED_SHORT;if(s===tm)return o.INT;if(s===ma)return o.UNSIGNED_INT;if(s===ha)return o.FLOAT;if(s===ga)return o.HALF_FLOAT;if(s===Jx)return o.ALPHA;if(s===$x)return o.RGB;if(s===qi)return o.RGBA;if(s===Va)return o.DEPTH_COMPONENT;if(s===er)return o.DEPTH_STENCIL;if(s===tS)return o.RED;if(s===im)return o.RED_INTEGER;if(s===ar)return o.RG;if(s===am)return o.RG_INTEGER;if(s===sm)return o.RGBA_INTEGER;if(s===Cu||s===Du||s===Nu||s===Lu)if(h===Ye)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Cu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Du)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Cu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Du)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_p||s===vp||s===xp||s===Sp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===_p)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mp||s===yp||s===Ep||s===Tp||s===bp||s===Ou||s===Ap)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Mp||s===yp)return h===Ye?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Ep)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===Tp)return u.COMPRESSED_R11_EAC;if(s===bp)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Ou)return u.COMPRESSED_RG11_EAC;if(s===Ap)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Rp||s===wp||s===Cp||s===Dp||s===Np||s===Lp||s===Up||s===Op||s===Pp||s===Ip||s===Bp||s===zp||s===Fp||s===Hp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Rp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Np)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Lp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Up)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Op)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ip)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gp||s===Vp||s===kp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Gp)return h===Ye?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xp||s===Wp||s===Pu||s===qp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Xp)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Wp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const zw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new uS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new _a({vertexShader:zw,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new re(new bs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gw extends sr{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,v=null,g=null,_=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",M=new Hw,S={},N=i.getContextAttributes();let B=null,C=null;const L=[],U=[],P=new Ae;let b=null,D=null;const F=new Ui;F.viewport=new rn;const V=new Ui;V.viewport=new rn;const Q=[F,V],rt=new KT;let Y=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let dt=L[j];return dt===void 0&&(dt=new Bd,L[j]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(j){let dt=L[j];return dt===void 0&&(dt=new Bd,L[j]=dt),dt.getGripSpace()},this.getHand=function(j){let dt=L[j];return dt===void 0&&(dt=new Bd,L[j]=dt),dt.getHandSpace()};function X(j){const dt=U.indexOf(j.inputSource);if(dt===-1)return;const bt=L[dt];bt!==void 0&&(bt.update(j.inputSource,j.frame,m||h),bt.dispatchEvent({type:j.type,data:j.inputSource}))}function Z(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",Z),l.removeEventListener("inputsourceschange",ht);for(let j=0;j<L.length;j++){const dt=U[j];dt!==null&&(U[j]=null,L[j].disconnect(dt))}Y=null,tt=null,M.reset();for(const j in S)delete S[j];if(t.setRenderTarget(B),y=null,_=null,g=null,l=null,C=null,Rt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),D!==null){const j=D.camera;j.fov=D.fov,j.zoom=D.zoom,j.updateProjectionMatrix(),D=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",Z),l.addEventListener("inputsourceschange",ht),N.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Bt=null,_t=null;N.depth&&(_t=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=N.stencil?er:Va,Bt=N.stencil?Dl:ma);const wt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:u};g=this.getBinding(),_=g.createProjectionLayer(wt),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new Yi(_.textureWidth,_.textureHeight,{format:qi,type:xi,depthTexture:new Ol(_.textureWidth,_.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const bt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Yi(y.framebufferWidth,y.framebufferHeight,{format:qi,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ht(j){for(let dt=0;dt<j.removed.length;dt++){const bt=j.removed[dt],Bt=U.indexOf(bt);Bt>=0&&(U[Bt]=null,L[Bt].disconnect(bt))}for(let dt=0;dt<j.added.length;dt++){const bt=j.added[dt];let Bt=U.indexOf(bt);if(Bt===-1){for(let wt=0;wt<L.length;wt++)if(wt>=U.length){U.push(bt),Bt=wt;break}else if(U[wt]===null){U[wt]=bt,Bt=wt;break}if(Bt===-1)break}const _t=L[Bt];_t&&_t.connect(bt)}}const at=new k,nt=new k;function xt(j,dt,bt){at.setFromMatrixPosition(dt.matrixWorld),nt.setFromMatrixPosition(bt.matrixWorld);const Bt=at.distanceTo(nt),_t=dt.projectionMatrix.elements,wt=bt.projectionMatrix.elements,Ve=_t[14]/(_t[10]-1),me=_t[14]/(_t[10]+1),_e=(_t[9]+1)/_t[5],ye=(_t[9]-1)/_t[5],ee=(_t[8]-1)/_t[0],ie=(wt[8]+1)/wt[0],ke=Ve*ee,mn=Ve*ie,Ie=Bt/(-ee+ie),tn=Ie*-ee;if(dt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(tn),j.translateZ(Ie),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),_t[10]===-1)j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const q=Ve+Ie,nn=me+Ie,Pe=ke-tn,O=mn+(Bt-tn),E=_e*me/nn*q,et=ye*me/nn*q;j.projectionMatrix.makePerspective(Pe,O,E,et,q,nn),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Zt(j,dt){dt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(dt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let dt=j.near,bt=j.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(bt=M.depthFar)),rt.near=V.near=F.near=dt,rt.far=V.far=F.far=bt,(Y!==rt.near||tt!==rt.far)&&(l.updateRenderState({depthNear:rt.near,depthFar:rt.far}),Y=rt.near,tt=rt.far),rt.layers.mask=j.layers.mask|6,F.layers.mask=rt.layers.mask&-5,V.layers.mask=rt.layers.mask&-3;const Bt=j.parent,_t=rt.cameras;Zt(rt,Bt);for(let wt=0;wt<_t.length;wt++)Zt(_t[wt],Bt);_t.length===2?xt(rt,F,V):rt.projectionMatrix.copy(F.projectionMatrix),D===null&&j.isPerspectiveCamera&&(D={camera:j,fov:j.fov,zoom:j.zoom}),Kt(j,rt,Bt)};function Kt(j,dt,bt){bt===null?j.matrix.copy(dt.matrixWorld):(j.matrix.copy(bt.matrixWorld),j.matrix.invert(),j.matrix.multiply(dt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ll*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(j){p=j,_!==null&&(_.fixedFoveation=j),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(rt)},this.getCameraTexture=function(j){return S[j]};let z=null;function mt(j,dt){if(v=dt.getViewerPose(m||h),T=dt,v!==null){const bt=v.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let Bt=!1;bt.length!==rt.cameras.length&&(rt.cameras.length=0,Bt=!0);for(let me=0;me<bt.length;me++){const _e=bt[me];let ye=null;if(y!==null)ye=y.getViewport(_e);else{const ie=g.getViewSubImage(_,_e);ye=ie.viewport,me===0&&(t.setRenderTargetTextures(C,ie.colorTexture,ie.depthStencilTexture),t.setRenderTarget(C))}let ee=Q[me];ee===void 0&&(ee=new Ui,ee.layers.enable(me),ee.viewport=new rn,Q[me]=ee),ee.matrix.fromArray(_e.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(_e.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ye.x,ye.y,ye.width,ye.height),me===0&&(rt.matrix.copy(ee.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),Bt===!0&&rt.cameras.push(ee)}const _t=l.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=s.getBinding();const me=g.getDepthInformation(bt[0]);me&&me.isValid&&me.texture&&M.init(me,l.renderState)}if(_t&&_t.includes("camera-access")&&w){t.state.unbindTexture(),g=s.getBinding();for(let me=0;me<bt.length;me++){const _e=bt[me].camera;if(_e){let ye=S[_e];ye||(ye=new uS,S[_e]=ye);const ee=g.getCameraImage(_e);ye.sourceTexture=ee}}}}for(let bt=0;bt<L.length;bt++){const Bt=U[bt],_t=L[bt];Bt!==null&&_t!==void 0&&_t.update(Bt,dt,m||h)}z&&z(j,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),T=null}const Rt=new dS;Rt.setAnimationLoop(mt),this.setAnimationLoop=function(j){z=j},this.dispose=function(){}}}const Vw=new on,SS=new he;SS.set(-1,0,0,0,1,0,0,0,1);function kw(o,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,fS(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,N,B,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(M,S):S.isMeshLambertMaterial?(u(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(M,S),g(M,S)):S.isMeshPhongMaterial?(u(M,S),v(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(M,S),_(M,S),S.isMeshPhysicalMaterial&&y(M,S,C)):S.isMeshMatcapMaterial?(u(M,S),T(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),w(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?p(M,S,N,B):S.isSpriteMaterial?m(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===si&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===si&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const N=t.get(S),B=N.envMap,C=N.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(Vw.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(SS),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,N,B){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*N,M.scale.value=B*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function m(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function v(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function _(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,N){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===si&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.retroreflectivity>0&&(M.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const N=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Xw(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,L){const U=L.program;s.uniformBlockBinding(C,U)}function m(C,L){let U=l[C.id];U===void 0&&(M(C),U=v(C),l[C.id]=U,C.addEventListener("dispose",N));const P=L.program;s.updateUBOMapping(C,P);const b=t.render.frame;u[C.id]!==b&&(_(C),u[C.id]=b)}function v(C){const L=g();C.__bindingPointIndex=L;const U=o.createBuffer(),P=C.__size,b=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,P,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,U),U}function g(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const L=l[C.id],U=C.uniforms,P=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let b=0,D=U.length;b<D;b++){const F=U[b];if(Array.isArray(F))for(let V=0,Q=F.length;V<Q;V++)y(F[V],b,V,P);else y(F,b,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,L,U,P){if(w(C,L,U,P)===!0){const b=C.__offset,D=C.value;if(Array.isArray(D)){let F=0;for(let V=0;V<D.length;V++){const Q=D[V],rt=S(Q);T(Q,C.__data,F),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(F+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(D,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,C.__data)}}function T(C,L,U){typeof C=="number"||typeof C=="boolean"?L[0]=C:C.isMatrix3?(L[0]=C.elements[0],L[1]=C.elements[1],L[2]=C.elements[2],L[3]=0,L[4]=C.elements[3],L[5]=C.elements[4],L[6]=C.elements[5],L[7]=0,L[8]=C.elements[6],L[9]=C.elements[7],L[10]=C.elements[8],L[11]=0):ArrayBuffer.isView(C)?L.set(new C.constructor(C.buffer,C.byteOffset,L.length)):C.toArray(L,U)}function w(C,L,U,P){const b=C.value,D=L+"_"+U;if(P[D]===void 0)return typeof b=="number"||typeof b=="boolean"?P[D]=b:ArrayBuffer.isView(b)?P[D]=b.slice():P[D]=b.clone(),!0;{const F=P[D];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return P[D]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(F.equals(b)===!1)return F.copy(b),!0}}return!1}function M(C){const L=C.uniforms;let U=0;const P=16;for(let D=0,F=L.length;D<F;D++){const V=Array.isArray(L[D])?L[D]:[L[D]];for(let Q=0,rt=V.length;Q<rt;Q++){const Y=V[Q],tt=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,Z=tt.length;X<Z;X++){const ht=tt[X],at=S(ht),nt=U%P,xt=nt%at.boundary,Zt=nt+xt;U+=xt,Zt!==0&&P-Zt<at.storage&&(U+=P-Zt),Y.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U,U+=at.storage}}}const b=U%P;return b>0&&(U+=P-b),C.__size=U,C.__cache={},this}function S(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",C),L}function N(C){const L=C.target;L.removeEventListener("dispose",N);const U=h.indexOf(L.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function B(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},u={}}return{bind:p,update:m,dispose:B}}const Ww=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ca=null;function qw(){return ca===null&&(ca=new LT(Ww,16,16,ar,ga),ca.name="DFG_LUT",ca.minFilter=Vn,ca.magFilter=Vn,ca.wrapS=Wi,ca.wrapT=Wi,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class Yw{constructor(t={}){const{canvas:i=qE(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:y=xi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const w=y,M=new Set([sm,am,im]),S=new Set([xi,ma,Cl,Dl,em,nm]),N=new Uint32Array(4),B=new Int32Array(4),C=new k;let L=null,U=null;const P=[],b=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let V=!1,Q=null,rt=null,Y=null,tt=null;this._outputColorSpace=vi;let X=0,Z=0,ht=null,at=-1,nt=null;const xt=new rn,Zt=new rn;let Kt=null;const z=new Me(0);let mt=0,Rt=i.width,j=i.height,dt=1,bt=null,Bt=null;const _t=new rn(0,0,Rt,j),wt=new rn(0,0,Rt,j);let Ve=!1;const me=new fm;let _e=!1,ye=!1;const ee=new on,ie=new k,ke=new rn,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function tn(){return ht===null?dt:1}let q=s;function nn(A,H){return i.getContext(A,H)}let Pe,O,E,et,ct,pt,At,Nt,gt,yt,Dt,$t,It,Pt,kt,ne,ce,W,Ct,Mt,Lt,Vt,Tt;try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jp}`),i.addEventListener("webglcontextlost",Ne,!1),i.addEventListener("webglcontextrestored",ue,!1),i.addEventListener("webglcontextcreationerror",ri,!1),q===null){const H="webgl2";if(q=nn(H,A),q===null)throw nn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(A){throw i.removeEventListener("webglcontextlost",Ne,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ri,!1),Be("WebGLRenderer: "+A.message),A}function Jt(){Pe=new qA(q),Pe.init(),Lt=new Bw(q,Pe),O=new IA(q,Pe,t,Lt),E=new Pw(q,Pe),O.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),rt=q.createFramebuffer(),Y=q.createFramebuffer(),tt=q.createFramebuffer(),et=new KA(q),ct=new Mw,pt=new Iw(q,Pe,E,ct,O,Lt,et),At=new WA(F),Nt=new jT(q),Vt=new OA(q,Nt),gt=new YA(q,Nt,et,Vt),yt=new jA(q,gt,Nt,Vt,et),W=new QA(q,O,pt),kt=new BA(ct),Dt=new Sw(F,At,Pe,O,Vt,kt),$t=new kw(F,ct),It=new Ew,Pt=new Cw(Pe),ce=new UA(F,At,E,yt,T,p),ne=new Ow(F,yt,O),Tt=new Xw(q,et,O,E),Ct=new PA(q,Pe,et),Mt=new ZA(q,Pe,et),et.programs=Dt.programs,F.capabilities=O,F.extensions=Pe,F.properties=ct,F.renderLists=It,F.shadowMap=ne,F.state=E,F.info=et}w!==xi&&(D=new $A(w,i.width,i.height,d,l,u));const Gt=new Gw(F,q);this.xr=Gt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=Pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(A){A!==void 0&&(dt=A,this.setSize(Rt,j,!1))},this.getSize=function(A){return A.set(Rt,j)},this.setSize=function(A,H,ft=!0){if(Gt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=A,j=H,i.width=Math.floor(A*dt),i.height=Math.floor(H*dt),ft===!0&&(i.style.width=A+"px",i.style.height=H+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Rt*dt,j*dt).floor()},this.setDrawingBufferSize=function(A,H,ft){Rt=A,j=H,dt=ft,i.width=Math.floor(A*ft),i.height=Math.floor(H*ft),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(w===xi){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(xt)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,H,ft,st){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,H,ft,st),E.viewport(xt.copy(_t).multiplyScalar(dt).round())},this.getScissor=function(A){return A.copy(wt)},this.setScissor=function(A,H,ft,st){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,H,ft,st),E.scissor(Zt.copy(wt).multiplyScalar(dt).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(A){E.setScissorTest(Ve=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){Bt=A},this.getClearColor=function(A){return A.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,ft=!0){let st=0;if(A){let ot=!1;if(ht!==null){const zt=ht.texture.format;ot=M.has(zt)}if(ot){const zt=ht.texture.type,Xt=S.has(zt),Ut=ce.getClearColor(),Yt=ce.getClearAlpha(),Qt=Ut.r,se=Ut.g,fe=Ut.b;Xt?(N[0]=Qt,N[1]=se,N[2]=fe,N[3]=Yt,q.clearBufferuiv(q.COLOR,0,N)):(B[0]=Qt,B[1]=se,B[2]=fe,B[3]=Yt,q.clearBufferiv(q.COLOR,0,B))}else st|=q.COLOR_BUFFER_BIT}H&&(st|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(st|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&q.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ne,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ri,!1),ce.dispose(),It.dispose(),Pt.dispose(),ct.dispose(),At.dispose(),yt.dispose(),Vt.dispose(),Tt.dispose(),Dt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Rs),Gt.removeEventListener("sessionend",Wa),Zi.stop()};function Ne(A){A.preventDefault(),Fv("WebGLRenderer: Context Lost."),V=!0}function ue(){Fv("WebGLRenderer: Context Restored."),V=!1;const A=et.autoReset,H=ne.enabled,ft=ne.autoUpdate,st=ne.needsUpdate,ot=ne.type;Jt(),et.autoReset=A,ne.enabled=H,ne.autoUpdate=ft,ne.needsUpdate=st,ne.type=ot}function ri(A){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Si(A){const H=A.target;H.removeEventListener("dispose",Si),Qu(H)}function Qu(A){cr(A),ct.remove(A)}function cr(A){const H=ct.get(A).programs;H!==void 0&&(H.forEach(function(ft){Dt.releaseProgram(ft)}),A.isShaderMaterial&&Dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,ft,st,ot,zt){H===null&&(H=mn);const Xt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Ut=To(A,H,ft,st,ot);E.setMaterial(st,Xt);let Yt=ft.index,Qt=1;if(st.wireframe===!0){if(Yt=gt.getWireframeAttribute(ft),Yt===void 0)return;Qt=2}const se=ft.drawRange,fe=ft.attributes.position;let Wt=se.start*Qt,Ee=(se.start+se.count)*Qt;zt!==null&&(Wt=Math.max(Wt,zt.start*Qt),Ee=Math.min(Ee,(zt.start+zt.count)*Qt)),Yt!==null?(Wt=Math.max(Wt,0),Ee=Math.min(Ee,Yt.count)):fe!=null&&(Wt=Math.max(Wt,0),Ee=Math.min(Ee,fe.count));const ve=Ee-Wt;if(ve<0||ve===1/0)return;Vt.setup(ot,st,Ut,ft,Yt);let Ze,He=Ct;if(Yt!==null&&(Ze=Nt.get(Yt),He=Mt,He.setIndex(Ze)),ot.isMesh)st.wireframe===!0?(E.setLineWidth(st.wireframeLinewidth*tn()),He.setMode(q.LINES)):He.setMode(q.TRIANGLES);else if(ot.isLine){let Mn=st.linewidth;Mn===void 0&&(Mn=1),E.setLineWidth(Mn*tn()),ot.isLineSegments?He.setMode(q.LINES):ot.isLineLoop?He.setMode(q.LINE_LOOP):He.setMode(q.LINE_STRIP)}else ot.isPoints?He.setMode(q.POINTS):ot.isSprite&&He.setMode(q.TRIANGLES);if(ot.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))He.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const Mn=ot._multiDrawStarts,Ft=ot._multiDrawCounts,ln=ot._multiDrawCount,Le=Yt?Nt.get(Yt).bytesPerElement:1,Xn=ct.get(st).currentProgram.getUniforms();for(let oi=0;oi<ln;oi++)Xn.setValue(q,"_gl_DrawID",oi),He.render(Mn[oi]/Le,Ft[oi])}else if(ot.isInstancedMesh)He.renderInstances(Wt,ve,ot.count);else if(ft.isInstancedBufferGeometry){const Mn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Ft=Math.min(ft.instanceCount,Mn);He.renderInstances(Wt,ve,Ft)}else He.render(Wt,ve)};function As(A,H,ft,st){Q!==null&&A.isNodeMaterial&&Q.setObject(st,A),_e===!0&&kt.setState(A,ft,!1),A.transparent===!0&&A.side===fa&&A.forceSinglePass===!1?(A.side=si,A.needsUpdate=!0,ws(A,H,st),A.side=nr,A.needsUpdate=!0,ws(A,H,st),A.side=fa):ws(A,H,st)}this.compile=function(A,H,ft=null){ft===null&&(ft=A),Q!==null&&Q.renderStart(A,H,ft),U=Pt.get(ft),U.init(H),b.push(U),ft.traverseVisible(function(ot){ot.isLight&&ot.layers.test(H.layers)&&(U.pushLight(ot),ot.castShadow&&U.pushShadow(ot))}),A!==ft&&A.traverseVisible(function(ot){ot.isLight&&ot.layers.test(H.layers)&&(U.pushLight(ot),ot.castShadow&&U.pushShadow(ot))}),U.setupLights(),Q!==null&&Q.updateLights(U.state.lightsArray),ye=this.localClippingEnabled,_e=kt.init(this.clippingPlanes,ye),_e===!0&&kt.setGlobalState(this.clippingPlanes,H),Q!==null&&ne.render(U.state.shadowsArray,ft,H);const st=new Set;return A.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const zt=ot.material;if(zt)if(Array.isArray(zt))for(let Xt=0;Xt<zt.length;Xt++){const Ut=zt[Xt];As(Ut,ft,H,ot),st.add(Ut)}else As(zt,ft,H,ot),st.add(zt)}),U=b.pop(),Q!==null&&Q.renderEnd(),st},this.compileAsync=function(A,H,ft=null){const st=this.compile(A,H,ft);return new Promise(ot=>{function zt(){if(st.forEach(function(Xt){const Yt=ct.get(Xt).currentProgram;(Yt===void 0||Yt.isReady())&&st.delete(Xt)}),st.size===0){ot(A);return}setTimeout(zt,10)}Pe.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Xa=null;function va(A){Xa&&Xa(A)}function Rs(){Zi.stop()}function Wa(){Zi.start()}const Zi=new dS;Zi.setAnimationLoop(va),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(A){Xa=A,Gt.setAnimationLoop(A),A===null?Zi.stop():Zi.start()},Gt.addEventListener("sessionstart",Rs),Gt.addEventListener("sessionend",Wa),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Q!==null&&Q.renderStart(A,H);const ft=Gt.enabled===!0&&Gt.isPresenting===!0,st=D!==null&&(ht===null||ft)&&D.begin(F,ht);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(H),H=Gt.getCamera()),A.isScene===!0&&A.onBeforeRender(F,A,H,ht),U=Pt.get(A,b.length),U.init(H),U.state.textureUnits=pt.getTextureUnits(),b.push(U),ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),me.setFromProjectionMatrix(ee,da,H.reversedDepth),ye=this.localClippingEnabled,_e=kt.init(this.clippingPlanes,ye),L=It.get(A,P.length),L.init(),P.push(L),Gt.enabled===!0&&Gt.isPresenting===!0){const Xt=F.xr.getDepthSensingMesh();Xt!==null&&xo(Xt,H,-1/0,F.sortObjects)}xo(A,H,0,F.sortObjects),L.finish(),Q!==null&&Q.updateLights(U.state.lightsArray),F.sortObjects===!0&&L.sort(bt,Bt),Ie=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Ie&&ce.addToRenderList(L,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&kt.beginShadows();const ot=U.state.shadowsArray;if(ne.render(ot,A,H),_e===!0&&kt.endShadows(),(st&&D.hasRenderPass())===!1){const Xt=L.opaque,Ut=L.transmissive;if(U.setupLights(),H.isArrayCamera){const Yt=H.cameras;if(Ut.length>0)for(let Qt=0,se=Yt.length;Qt<se;Qt++){const fe=Yt[Qt];ur(Xt,Ut,A,fe)}Ie&&ce.render(A);for(let Qt=0,se=Yt.length;Qt<se;Qt++){const fe=Yt[Qt];So(L,A,fe,fe.viewport)}}else Ut.length>0&&ur(Xt,Ut,A,H),Ie&&ce.render(A),So(L,A,H)}ht!==null&&Z===0&&(pt.updateMultisampleRenderTarget(ht),pt.updateRenderTargetMipmap(ht)),st&&D.end(F),A.isScene===!0&&A.onAfterRender(F,A,H),Vt.resetDefaultState(),at=-1,nt=null,b.pop(),b.length>0?(U=b[b.length-1],pt.setTextureUnits(U.state.textureUnits),_e===!0&&kt.setGlobalState(F.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?L=P[P.length-1]:L=null,Q!==null&&Q.renderEnd()};function xo(A,H,ft,st){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)ft=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(me)){st&&ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const Xt=yt.update(A),Ut=A.material;Ut.visible&&L.push(A,Xt,Ut,ft,ke.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(me))){const Xt=yt.update(A),Ut=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ke.copy(A.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),ke.copy(Xt.boundingSphere.center)),ke.applyMatrix4(A.matrixWorld).applyMatrix4(ee)),Array.isArray(Ut)){const Yt=Xt.groups;for(let Qt=0,se=Yt.length;Qt<se;Qt++){const fe=Yt[Qt],Wt=Ut[fe.materialIndex];Wt&&Wt.visible&&L.push(A,Xt,Wt,ft,ke.z,fe,H)}}else Ut.visible&&L.push(A,Xt,Ut,ft,ke.z,null,H)}}const zt=A.children;for(let Xt=0,Ut=zt.length;Xt<Ut;Xt++)xo(zt[Xt],H,ft,st)}function So(A,H,ft,st){const{opaque:ot,transmissive:zt,transparent:Xt}=A;U.setupLightsView(ft),_e===!0&&kt.setGlobalState(F.clippingPlanes,ft),st&&E.viewport(xt.copy(st)),ot.length>0&&Ki(ot,H,ft),zt.length>0&&Ki(zt,H,ft),Xt.length>0&&Ki(Xt,H,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ur(A,H,ft,st){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[st.id]===void 0){const Wt=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[st.id]=new Yi(1,1,{generateMipmaps:!0,type:Wt?ga:xi,minFilter:tr,samples:Math.max(4,O.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const zt=U.state.transmissionRenderTarget[st.id],Xt=st.viewport||xt;zt.setSize(Xt.z*F.transmissionResolutionScale,Xt.w*F.transmissionResolutionScale);const Ut=F.getRenderTarget(),Yt=F.getActiveCubeFace(),Qt=F.getActiveMipmapLevel();F.setRenderTarget(zt),F.getClearColor(z),mt=F.getClearAlpha(),mt<1&&F.setClearColor(16777215,.5),F.clear(),Ie&&ce.render(ft);const se=F.toneMapping;F.toneMapping=pa;const fe=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),U.setupLightsView(st),_e===!0&&kt.setGlobalState(F.clippingPlanes,st),Ki(A,ft,st),pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ee=0,ve=H.length;Ee<ve;Ee++){const Ze=H[Ee],{object:He,geometry:Mn,material:Ft,group:ln}=Ze;if(Ft.side===fa&&He.layers.test(st.layers)){const Le=Ft.side;Ft.side=si,Ft.needsUpdate=!0,Il(He,ft,st,Mn,Ft,ln),Ft.side=Le,Ft.needsUpdate=!0,Wt=!0}}Wt===!0&&(pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt))}F.setRenderTarget(Ut,Yt,Qt),F.setClearColor(z,mt),fe!==void 0&&(st.viewport=fe),F.toneMapping=se}function Ki(A,H,ft){const st=H.isScene===!0?H.overrideMaterial:null;for(let ot=0,zt=A.length;ot<zt;ot++){const Xt=A[ot],{object:Ut,geometry:Yt,group:Qt}=Xt;let se=Xt.material;se.allowOverride===!0&&st!==null&&(se=st),Ut.layers.test(ft.layers)&&Il(Ut,H,ft,Yt,se,Qt)}}function Il(A,H,ft,st,ot,zt){Q!==null&&ot.isNodeMaterial&&Q.setObject(A,ot),A.onBeforeRender(F,H,ft,st,ot,zt),A.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ot.onBeforeRender(F,H,ft,st,A,zt),ot.transparent===!0&&ot.side===fa&&ot.forceSinglePass===!1?(ot.side=si,ot.needsUpdate=!0,F.renderBufferDirect(ft,H,st,ot,A,zt),ot.side=nr,ot.needsUpdate=!0,F.renderBufferDirect(ft,H,st,ot,A,zt),ot.side=fa):F.renderBufferDirect(ft,H,st,ot,A,zt),A.onAfterRender(F,H,ft,st,ot,zt)}function ws(A,H,ft){H.isScene!==!0&&(H=mn);const st=ct.get(A),ot=U.state.lights,zt=U.state.shadowsArray,Xt=ot.state.version,Ut=Dt.getParameters(A,ot.state,zt,H,ft,U.state.lightProbeGridArray),Yt=Dt.getProgramCacheKey(Ut);let Qt=st.programs;st.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,st.fog=H.fog;const se=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;st.envMap=At.get(A.envMap||st.environment,se),st.envMapRotation=st.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",Si),Qt=new Map,st.programs=Qt);let fe=Qt.get(Yt);if(fe!==void 0){if(st.currentProgram===fe&&st.lightsStateVersion===Xt)return yo(A,Ut),fe}else Ut.uniforms=Dt.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,ft,Ut),A.onBeforeCompile(Ut,F),fe=Dt.acquireProgram(Ut,Yt),Qt.set(Yt,fe),st.uniforms=Ut.uniforms;const Wt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=kt.uniform),yo(A,Ut),st.needsLights=zl(A),st.lightsStateVersion=Xt,st.needsLights&&(Wt.ambientLightColor.value=ot.state.ambient,Wt.lightProbe.value=ot.state.probe,Wt.sunLights.value=ot.state.sun,Wt.sunLightShadows.value=ot.state.sunShadow,Wt.directionalLights.value=ot.state.directional,Wt.directionalLightShadows.value=ot.state.directionalShadow,Wt.spotLights.value=ot.state.spot,Wt.spotLightShadows.value=ot.state.spotShadow,Wt.rectAreaLights.value=ot.state.rectArea,Wt.ltc_1.value=ot.state.rectAreaLTC1,Wt.ltc_2.value=ot.state.rectAreaLTC2,Wt.pointLights.value=ot.state.point,Wt.pointLightShadows.value=ot.state.pointShadow,Wt.hemisphereLights.value=ot.state.hemi,Wt.sunShadowMatrix.value=ot.state.sunShadowMatrix,Wt.sunShadowCascade.value=ot.state.sunShadowCascade,Wt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Wt.spotLightMatrix.value=ot.state.spotLightMatrix,Wt.spotLightMap.value=ot.state.spotLightMap,Wt.pointShadowMatrix.value=ot.state.pointShadowMatrix),st.lightProbeGrid=U.state.lightProbeGridArray.length>0,st.currentProgram=fe,st.uniformsList=null,fe}function Mo(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Uu.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function yo(A,H){const ft=ct.get(A);ft.outputColorSpace=H.outputColorSpace,ft.batching=H.batching,ft.batchingColor=H.batchingColor,ft.instancing=H.instancing,ft.instancingColor=H.instancingColor,ft.instancingMorph=H.instancingMorph,ft.skinning=H.skinning,ft.morphTargets=H.morphTargets,ft.morphNormals=H.morphNormals,ft.morphColors=H.morphColors,ft.morphTargetsCount=H.morphTargetsCount,ft.numClippingPlanes=H.numClippingPlanes,ft.numIntersection=H.numClipIntersection,ft.vertexAlphas=H.vertexAlphas,ft.vertexTangents=H.vertexTangents,ft.toneMapping=H.toneMapping}function Eo(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(H.matrixWorld);for(let ft=0,st=A.length;ft<st;ft++){const ot=A[ft];if(ot.texture!==null&&ot.boundingBox.containsPoint(C))return ot}return null}function To(A,H,ft,st,ot){H.isScene!==!0&&(H=mn),pt.resetTextureUnits();const zt=H.fog,Xt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?H.environment:null,Ut=ht===null?F.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ue.workingColorSpace,Yt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Qt=At.get(st.envMap||Xt,Yt),se=st.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,fe=!!ft.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Wt=!!ft.morphAttributes.position,Ee=!!ft.morphAttributes.normal,ve=!!ft.morphAttributes.color;let Ze=pa;st.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ze=F.toneMapping);const He=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Mn=He!==void 0?He.length:0,Ft=ct.get(st),ln=U.state.lights;if(_e===!0&&(ye===!0||A!==nt)){const Re=A===nt&&st.id===at;kt.setState(st,A,Re)}let Le=!1;st.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ln.state.version||Ft.outputColorSpace!==Ut||ot.isBatchedMesh&&Ft.batching===!1||!ot.isBatchedMesh&&Ft.batching===!0||ot.isBatchedMesh&&Ft.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Ft.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Ft.instancing===!1||!ot.isInstancedMesh&&Ft.instancing===!0||ot.isSkinnedMesh&&Ft.skinning===!1||!ot.isSkinnedMesh&&Ft.skinning===!0||ot.isInstancedMesh&&Ft.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Ft.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Ft.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Ft.instancingMorph===!1&&ot.morphTexture!==null||Ft.envMap!==Qt||st.fog===!0&&Ft.fog!==zt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==kt.numPlanes||Ft.numIntersection!==kt.numIntersection)||Ft.vertexAlphas!==se||Ft.vertexTangents!==fe||Ft.morphTargets!==Wt||Ft.morphNormals!==Ee||Ft.morphColors!==ve||Ft.toneMapping!==Ze||Ft.morphTargetsCount!==Mn||!!Ft.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Le=!0):(Le=!0,Ft.__version=st.version);let Xn=Ft.currentProgram;Le===!0&&(Xn=ws(st,H,ot),Q&&st.isNodeMaterial&&Q.onUpdateProgram(st,Xn,Ft));let oi=!1,Qi=!1,xe=!1;const ze=Xn.getUniforms(),je=Ft.uniforms;if(E.useProgram(Xn.program)&&(oi=!0,Qi=!0,xe=!0),st.id!==at&&(at=st.id,Qi=!0),Ft.needsLights){const Re=Eo(U.state.lightProbeGridArray,ot);Ft.lightProbeGrid!==Re&&(Ft.lightProbeGrid=Re,Qi=!0)}if(oi||nt!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ze.setValue(q,"projectionMatrix",A.projectionMatrix),ze.setValue(q,"viewMatrix",A.matrixWorldInverse);const cn=ze.map.cameraPosition;cn!==void 0&&cn.setValue(q,ie.setFromMatrixPosition(A.matrixWorld)),O.logarithmicDepthBuffer&&ze.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ze.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),nt!==A&&(nt=A,Qi=!0,xe=!0)}if(Ft.needsLights&&(ln.state.sunShadowMap.length>0&&ze.setValue(q,"sunShadowMap",ln.state.sunShadowMap,pt),ln.state.directionalShadowMap.length>0&&ze.setValue(q,"directionalShadowMap",ln.state.directionalShadowMap,pt),ln.state.spotShadowMap.length>0&&ze.setValue(q,"spotShadowMap",ln.state.spotShadowMap,pt),ln.state.pointShadowMap.length>0&&ze.setValue(q,"pointShadowMap",ln.state.pointShadowMap,pt)),ot.isSkinnedMesh){ze.setOptional(q,ot,"bindMatrix"),ze.setOptional(q,ot,"bindMatrixInverse");const Re=ot.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ze.setValue(q,"boneTexture",Re.boneTexture,pt))}ot.isBatchedMesh&&(ze.setOptional(q,ot,"batchingTexture"),ze.setValue(q,"batchingTexture",ot._matricesTexture,pt),ze.setOptional(q,ot,"batchingIdTexture"),ze.setValue(q,"batchingIdTexture",ot._indirectTexture,pt),ze.setOptional(q,ot,"batchingColorTexture"),ot._colorsTexture!==null&&ze.setValue(q,"batchingColorTexture",ot._colorsTexture,pt));const li=ft.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&W.update(ot,ft,Xn),(Qi||Ft.receiveShadow!==ot.receiveShadow)&&(Ft.receiveShadow=ot.receiveShadow,ze.setValue(q,"receiveShadow",ot.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&H.environment!==null&&(je.envMapIntensity.value=H.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=qw()),Qi){if(ze.setValue(q,"toneMappingExposure",F.toneMappingExposure),Ft.needsLights&&Bl(je,xe),zt&&st.fog===!0&&$t.refreshFogUniforms(je,zt),$t.refreshMaterialUniforms(je,st,dt,j,U.state.transmissionRenderTarget[A.id]),Ft.needsLights&&Ft.lightProbeGrid){const Re=Ft.lightProbeGrid;je.probesSH.value=Re.texture,je.probesMin.value.copy(Re.boundingBox.min),je.probesMax.value.copy(Re.boundingBox.max),je.probesResolution.value.copy(Re.resolution)}Uu.upload(q,Mo(Ft),je,pt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Uu.upload(q,Mo(Ft),je,pt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ze.setValue(q,"center",ot.center),ze.setValue(q,"modelViewMatrix",ot.modelViewMatrix),ze.setValue(q,"normalMatrix",ot.normalMatrix),ze.setValue(q,"modelMatrix",ot.matrixWorld),st.uniformsGroups!==void 0){const Re=st.uniformsGroups;for(let cn=0,xa=Re.length;cn<xa;cn++){const Fl=Re[cn];Tt.update(Fl,Xn),Tt.bind(Fl,Xn)}}return Xn}function Bl(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function zl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(A,H,ft){const st=ct.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),ct.get(A.texture).__webglTexture=H,ct.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ft,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const ft=ct.get(A);ft.__webglFramebuffer=H,ft.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,ft=0){ht=A,X=H,Z=ft;let st=null,ot=!1,zt=!1;if(A){const Ut=ct.get(A);if(Ut.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(q.FRAMEBUFFER,Ut.__webglFramebuffer),xt.copy(A.viewport),Zt.copy(A.scissor),Kt=A.scissorTest,E.viewport(xt),E.scissor(Zt),E.setScissorTest(Kt),at=-1;return}else if(Ut.__webglFramebuffer===void 0)pt.setupRenderTarget(A);else if(Ut.__hasExternalTextures)pt.rebindTextures(A,ct.get(A.texture).__webglTexture,ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const se=A.depthTexture;if(Ut.__boundDepthTexture!==se){if(se!==null&&ct.has(se)&&(A.width!==se.image.width||A.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(A)}}const Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(zt=!0);const Qt=ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qt[H])?st=Qt[H][ft]:st=Qt[H],ot=!0):A.samples>0&&pt.useMultisampledRTT(A)===!1?st=ct.get(A).__webglMultisampledFramebuffer:Array.isArray(Qt)?st=Qt[ft]:st=Qt,xt.copy(A.viewport),Zt.copy(A.scissor),Kt=A.scissorTest}else xt.copy(_t).multiplyScalar(dt).floor(),Zt.copy(wt).multiplyScalar(dt).floor(),Kt=Ve;if(ft!==0&&(st=rt),E.bindFramebuffer(q.FRAMEBUFFER,st)&&E.drawBuffers(A,st),E.viewport(xt),E.scissor(Zt),E.setScissorTest(Kt),ot){const Ut=ct.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ut.__webglTexture,ft)}else if(zt){const Ut=H;for(let Yt=0;Yt<A.textures.length;Yt++){const Qt=ct.get(A.textures[Yt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Yt,Qt.__webglTexture,ft,Ut)}}else if(A!==null&&ft!==0){const Ut=ct.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ut.__webglTexture,ft)}at=-1};function Mi(A){const H=ct.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=O.textureFormatReadable(A.format),H.__typeReadable=O.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,ft,st,ot,zt,Xt,Ut=0){if(!(A&&A.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(Yt=Yt[Xt]),Yt){E.bindFramebuffer(q.FRAMEBUFFER,Yt);try{const Qt=A.textures[Ut],se=Qt.format,fe=Qt.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ut);const Wt=Mi(Qt);if(Wt.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-st&&ft>=0&&ft<=A.height-ot&&q.readPixels(H,ft,st,ot,Lt.convert(se),Lt.convert(fe),zt)}finally{const Qt=ht!==null?ct.get(ht).__webglFramebuffer:null;E.bindFramebuffer(q.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,H,ft,st,ot,zt,Xt,Ut=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(Yt=Yt[Xt]),Yt)if(H>=0&&H<=A.width-st&&ft>=0&&ft<=A.height-ot){E.bindFramebuffer(q.FRAMEBUFFER,Yt);const Qt=A.textures[Ut],se=Qt.format,fe=Qt.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ut);const Wt=Mi(Qt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ee),q.bufferData(q.PIXEL_PACK_BUFFER,zt.byteLength,q.STREAM_READ),q.readPixels(H,ft,st,ot,Lt.convert(se),Lt.convert(fe),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const ve=ht!==null?ct.get(ht).__webglFramebuffer:null;E.bindFramebuffer(q.FRAMEBUFFER,ve);const Ze=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await YE(q,Ze,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ee),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,zt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Ee),q.deleteSync(Ze),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,ft=0){const st=Math.pow(2,-ft),ot=Math.floor(A.image.width*st),zt=Math.floor(A.image.height*st),Xt=H!==null?H.x:0,Ut=H!==null?H.y:0;pt.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,ft,0,0,Xt,Ut,ot,zt),E.unbindTexture()},this.copyTextureToTexture=function(A,H,ft=null,st=null,ot=0,zt=0){let Xt,Ut,Yt,Qt,se,fe,Wt,Ee,ve;const Ze=A.isCompressedTexture?A.mipmaps[zt]:A.image;if(ft!==null)Xt=ft.max.x-ft.min.x,Ut=ft.max.y-ft.min.y,Yt=ft.isBox3?ft.max.z-ft.min.z:1,Qt=ft.min.x,se=ft.min.y,fe=ft.isBox3?ft.min.z:0;else{const je=Math.pow(2,-ot);Xt=Math.floor(Ze.width*je),Ut=Math.floor(Ze.height*je),A.isDataArrayTexture?Yt=Ze.depth:A.isData3DTexture?Yt=Math.floor(Ze.depth*je):Yt=1,Qt=0,se=0,fe=0}st!==null?(Wt=st.x,Ee=st.y,ve=st.z):(Wt=0,Ee=0,ve=0);const He=Lt.convert(H.format),Mn=Lt.convert(H.type);let Ft;H.isData3DTexture?(pt.setTexture3D(H,0),Ft=q.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(pt.setTexture2DArray(H,0),Ft=q.TEXTURE_2D_ARRAY):(pt.setTexture2D(H,0),Ft=q.TEXTURE_2D),E.activeTexture(q.TEXTURE0),E.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(q.UNPACK_ALIGNMENT,H.unpackAlignment);const ln=E.getParameter(q.UNPACK_ROW_LENGTH),Le=E.getParameter(q.UNPACK_IMAGE_HEIGHT),Xn=E.getParameter(q.UNPACK_SKIP_PIXELS),oi=E.getParameter(q.UNPACK_SKIP_ROWS),Qi=E.getParameter(q.UNPACK_SKIP_IMAGES);E.pixelStorei(q.UNPACK_ROW_LENGTH,Ze.width),E.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ze.height),E.pixelStorei(q.UNPACK_SKIP_PIXELS,Qt),E.pixelStorei(q.UNPACK_SKIP_ROWS,se),E.pixelStorei(q.UNPACK_SKIP_IMAGES,fe);const xe=A.isDataArrayTexture||A.isData3DTexture,ze=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const je=ct.get(A),li=ct.get(H),Re=ct.get(je.__renderTarget),cn=ct.get(li.__renderTarget);E.bindFramebuffer(q.READ_FRAMEBUFFER,Re.__webglFramebuffer),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let xa=0;xa<Yt;xa++)xe&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ct.get(A).__webglTexture,ot,fe+xa),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ct.get(H).__webglTexture,zt,ve+xa)),q.blitFramebuffer(Qt,se,Xt,Ut,Wt,Ee,Xt,Ut,q.DEPTH_BUFFER_BIT,q.NEAREST);E.bindFramebuffer(q.READ_FRAMEBUFFER,null),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ot!==0||A.isRenderTargetTexture||ct.has(A)){const je=ct.get(A),li=ct.get(H);E.bindFramebuffer(q.READ_FRAMEBUFFER,Y),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,tt);for(let Re=0;Re<Yt;Re++)xe?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,je.__webglTexture,ot,fe+Re):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,je.__webglTexture,ot),ze?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,li.__webglTexture,zt,ve+Re):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,li.__webglTexture,zt),ot!==0?q.blitFramebuffer(Qt,se,Xt,Ut,Wt,Ee,Xt,Ut,q.COLOR_BUFFER_BIT,q.NEAREST):ze?q.copyTexSubImage3D(Ft,zt,Wt,Ee,ve+Re,Qt,se,Xt,Ut):q.copyTexSubImage2D(Ft,zt,Wt,Ee,Qt,se,Xt,Ut);E.bindFramebuffer(q.READ_FRAMEBUFFER,null),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else ze?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Ft,zt,Wt,Ee,ve,Xt,Ut,Yt,He,Mn,Ze.data):H.isCompressedArrayTexture?q.compressedTexSubImage3D(Ft,zt,Wt,Ee,ve,Xt,Ut,Yt,He,Ze.data):q.texSubImage3D(Ft,zt,Wt,Ee,ve,Xt,Ut,Yt,He,Mn,Ze):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,zt,Wt,Ee,Xt,Ut,He,Mn,Ze.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,zt,Wt,Ee,Ze.width,Ze.height,He,Ze.data):q.texSubImage2D(q.TEXTURE_2D,zt,Wt,Ee,Xt,Ut,He,Mn,Ze);E.pixelStorei(q.UNPACK_ROW_LENGTH,ln),E.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Le),E.pixelStorei(q.UNPACK_SKIP_PIXELS,Xn),E.pixelStorei(q.UNPACK_SKIP_ROWS,oi),E.pixelStorei(q.UNPACK_SKIP_IMAGES,Qi),zt===0&&H.generateMipmaps&&q.generateMipmap(Ft),E.unbindTexture()},this.initRenderTarget=function(A){ct.get(A).__webglFramebuffer===void 0&&pt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pt.setTextureCube(A,0):A.isData3DTexture?pt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pt.setTexture2DArray(A,0):pt.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){X=0,Z=0,ht=null,E.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const Zw={jerseyColor:1920728,pantsColor:16777215,helmetColor:16096779,numberColor:16777215,stripeColor:16096779},Kw={jerseyColor:12131356,pantsColor:2042167,helmetColor:16777215,numberColor:16777215,stripeColor:12131356};class Ux{constructor(t,i,s){this.ragdollState="NORMAL",this.ragdollBlend=0,this.ragdollAngularVel=new k,this.ragdollTilt=new k,this.stumbleTime=0,this.groundContactTime=0,this.runCycle=0,this.isHoldingBall=!1,this.position=t,this.side=i,this.uniform=s,this.group=new sn;const l=new ai({color:s.jerseyColor,roughness:.5,metalness:.1}),u=new ai({color:s.pantsColor,roughness:.6,metalness:.05}),h=new ai({color:s.helmetColor,roughness:.2,metalness:.4}),d=new ai({color:s.jerseyColor,roughness:.4,metalness:.1}),p=new ai({color:4937059,metalness:.8,roughness:.2}),m=new ai({color:1120295,roughness:.8}),v=new ai({color:13933431,roughness:.6});this.root=new sn,this.group.add(this.root);const g=new Li(.24,.22,.25,8);this.pelvis=new re(g,u),this.pelvis.position.y=.95,this.pelvis.castShadow=!0,this.root.add(this.pelvis),this.torso=new sn,this.torso.position.y=.15,this.pelvis.add(this.torso);const _=new Li(.3,.25,.45,8);this.torsoMesh=new re(_,l),this.torsoMesh.position.y=.22,this.torsoMesh.castShadow=!0,this.torso.add(this.torsoMesh);const y=new Dn(.72,.18,.36);this.shoulderPads=new re(y,d),this.shoulderPads.position.y=.42,this.shoulderPads.castShadow=!0,this.torso.add(this.shoulderPads),this.headGroup=new sn,this.headGroup.position.y=.52,this.torso.add(this.headGroup);const T=new qu(.2,10,10);this.helmetMesh=new re(T,h),this.helmetMesh.castShadow=!0,this.headGroup.add(this.helmetMesh);const w=new Yu(.12,.02,6,8,Math.PI);this.facemask=new re(w,p),this.facemask.rotation.x=-Math.PI/2,this.facemask.position.set(0,-.05,.15),this.headGroup.add(this.facemask),this.leftShoulder=new sn,this.leftShoulder.position.set(-.38,.36,0),this.torso.add(this.leftShoulder);const M=new Li(.08,.07,.28,6);this.leftUpperArm=new re(M,l),this.leftUpperArm.position.y=-.14,this.leftShoulder.add(this.leftUpperArm),this.leftElbow=new sn,this.leftElbow.position.y=-.28,this.leftShoulder.add(this.leftElbow);const S=new Li(.065,.055,.28,6);this.leftForearm=new re(S,v),this.leftForearm.position.y=-.14,this.leftElbow.add(this.leftForearm),this.rightShoulder=new sn,this.rightShoulder.position.set(.38,.36,0),this.torso.add(this.rightShoulder),this.rightUpperArm=new re(M,l),this.rightUpperArm.position.y=-.14,this.rightShoulder.add(this.rightUpperArm),this.rightElbow=new sn,this.rightElbow.position.y=-.28,this.rightShoulder.add(this.rightElbow),this.rightForearm=new re(S,v),this.rightForearm.position.y=-.14,this.rightElbow.add(this.rightForearm);const N=new Li(.12,.09,.42,6),B=new Li(.085,.07,.42,6);this.leftHip=new sn,this.leftHip.position.set(-.16,-.1,0),this.pelvis.add(this.leftHip),this.leftThigh=new re(N,u),this.leftThigh.position.y=-.21,this.leftThigh.castShadow=!0,this.leftHip.add(this.leftThigh),this.leftKnee=new sn,this.leftKnee.position.y=-.42,this.leftHip.add(this.leftKnee),this.leftCalf=new re(B,m),this.leftCalf.position.y=-.21,this.leftCalf.castShadow=!0,this.leftKnee.add(this.leftCalf),this.rightHip=new sn,this.rightHip.position.set(.16,-.1,0),this.pelvis.add(this.rightHip),this.rightThigh=new re(N,u),this.rightThigh.position.y=-.21,this.rightThigh.castShadow=!0,this.rightHip.add(this.rightThigh),this.rightKnee=new sn,this.rightKnee.position.y=-.42,this.rightHip.add(this.rightKnee),this.rightCalf=new re(B,m),this.rightCalf.position.y=-.21,this.rightCalf.castShadow=!0,this.rightKnee.add(this.rightCalf)}update(t,i,s,l){if(this.ragdollState==="NORMAL")if(this.ragdollBlend=Math.max(0,this.ragdollBlend-t*3),this.stumbleTime=0,this.groundContactTime=0,this.pelvis.position.y=.95,l&&i>.3){const u=7.5+i/9*8.5;this.runCycle+=t*u;const h=Math.sin(this.runCycle)*.75,d=Math.sin(this.runCycle)*.85;this.leftHip.rotation.x=d,this.leftKnee.rotation.x=Math.max(0,-Math.sin(this.runCycle+.3)*1.1),this.rightHip.rotation.x=-d,this.rightKnee.rotation.x=Math.max(0,-Math.sin(this.runCycle+Math.PI+.3)*1.1),this.isHoldingBall?(this.rightShoulder.rotation.set(.6,-.3,-.4),this.rightElbow.rotation.set(1.4,0,0),this.leftShoulder.rotation.x=h*.8,this.leftElbow.rotation.x=.5):(this.leftShoulder.rotation.x=-h,this.leftElbow.rotation.x=.4+Math.abs(h)*.3,this.rightShoulder.rotation.x=h,this.rightElbow.rotation.x=.4+Math.abs(h)*.3);const p=.18+i/10*.22;this.torso.rotation.x=p,this.torso.rotation.z=-s*.25,this.torso.rotation.y=Math.sin(this.runCycle)*.12,this.pelvis.position.y=.95+Math.abs(Math.cos(this.runCycle))*.06}else this.leftHip.rotation.x=.1,this.rightHip.rotation.x=.1,this.leftKnee.rotation.x=-.2,this.rightKnee.rotation.x=-.2,this.torso.rotation.set(.12,0,0),this.leftShoulder.rotation.set(.15,0,0),this.rightShoulder.rotation.set(.15,0,0);else if(this.ragdollState==="STUMBLE"){this.stumbleTime+=t,this.ragdollBlend=Math.min(.65,this.ragdollBlend+t*2);const u=Math.sin(this.stumbleTime*14)*.45;this.torso.rotation.x=.65+Math.sin(this.stumbleTime*8)*.2,this.torso.rotation.z=u,this.leftShoulder.rotation.set(-.8,-.6,-.8+u),this.rightShoulder.rotation.set(-.8,.6,.8-u),this.leftHip.rotation.x=.4+u*.5,this.rightHip.rotation.x=-.3-u*.5,this.pelvis.position.y=.78,this.stumbleTime>1.2&&(this.ragdollState="NORMAL")}else this.ragdollState==="PARTIAL_RAGDOLL"||this.ragdollState==="FULL_RAGDOLL"?(this.ragdollBlend=Math.min(1,this.ragdollBlend+t*4),this.groundContactTime+=t,this.ragdollTilt.addScaledVector(this.ragdollAngularVel,t),this.ragdollAngularVel.multiplyScalar(Math.pow(.92,t*60)),this.pelvis.position.y=Math.max(.24,this.pelvis.position.y-t*2.2),this.torso.rotation.x=Math.sin(this.ragdollTilt.x)*1.2,this.torso.rotation.z=Math.sin(this.ragdollTilt.z)*1.1,this.headGroup.rotation.x=-.4,this.leftShoulder.rotation.set(1.2,.4,.8),this.rightShoulder.rotation.set(1.2,-.4,-.8),this.leftElbow.rotation.set(1.4,0,0),this.rightElbow.rotation.set(1.4,0,0),this.leftHip.rotation.set(-.6,.3,.4),this.rightHip.rotation.set(-.4,-.3,-.4),this.leftKnee.rotation.set(.8,0,0),this.rightKnee.rotation.set(.6,0,0)):this.ragdollState==="RECOVERING"&&(this.ragdollBlend=Math.max(0,this.ragdollBlend-t*2.5),this.pelvis.position.y=.24+(1-this.ragdollBlend)*(.95-.24),this.torso.rotation.x*=.9,this.torso.rotation.z*=.9,this.ragdollBlend<=.05&&(this.ragdollState="NORMAL"))}applyTackleImpulse(t,i){this.ragdollState=i,this.ragdollAngularVel.set((Math.random()-.5)*8+t.z*.8,(Math.random()-.5)*6,-t.x*.8)}resetRagdoll(){this.ragdollState="NORMAL",this.ragdollBlend=0,this.ragdollAngularVel.set(0,0,0),this.ragdollTilt.set(0,0,0),this.stumbleTime=0,this.groundContactTime=0,this.pelvis.position.y=.95,this.torso.rotation.set(0,0,0),this.headGroup.rotation.set(0,0,0)}}const Kp=9.81,Qw={BULLET:1.15,TOUCH:.88,LOB:.68};function jw(o,t,i,s,l,u,h,d){const m=new k().subVectors(u,t).length(),v=new k().subVectors(o,l).setY(0).normalize();v.lengthSq()<.001&&v.set(0,0,1);const g=t.length();let _=1;g>.5&&(_=.8+.6*(-t.clone().normalize().dot(v)+1)*.5);const y=h/(i+.001),T=d/(s+.001);let w=(m+1.2)*y*_*T*42;w=Math.min(w,950);const M=v.clone().multiplyScalar(w*.016),S=v.clone().multiplyScalar(-w*.01);let N,B;return w<220?(N="LOW",B="NORMAL"):w<480?(N="MEDIUM",B="STUMBLE"):(N="HIGH",B="FULL_RAGDOLL"),{severity:N,impactStrength:w,impulseRunner:M,impulseDefender:S,nextState:B}}function op(o,t,i,s,l,u=24){const d=Math.max(s==="BULLET"?24:s==="TOUCH"?20:15,u*Qw[s]),p=(C,L)=>Math.hypot(L.x-C.x,L.z-C.z);let m=Math.max(.25,p(o,t)/d);for(let C=0;C<3;C++){const L=t.clone().addScaledVector(i,m);m=Math.max(.25,p(o,L)/d)}const v=t.clone().addScaledVector(i,m);v.x+=l.x,v.z+=l.z,v.y=Ul.clamp(1.35+l.y,.9,2.1);const g=v.x-o.x,_=v.z-o.z,y=Math.sqrt(g*g+_*_),T=v.y-o.y,w=Math.max(.25,y/d),M=g/w,S=_/w,N=(T+.5*Kp*w*w)/w;return{velocity:new k(M,N,S),flightTime:w,targetLeadPoint:v}}function Jw(o,t,i){const s=new k().subVectors(i,t),l=s.lengthSq();if(l<1e-8)return o.distanceTo(t);const u=Ul.clamp(new k().subVectors(o,t).dot(s)/l,0,1);return o.distanceTo(t.clone().addScaledVector(s,u))}class $w{constructor(){this.position=new k,this.previousPosition=new k,this.velocity=new k,this.angularVelocity=new k,this.isHeld=!0,this.carrier=null,this.carrierOffset=new k(.25,1.25,.2),this.isAirborne=!1,this.hasBounced=!1,this.spinRate=28,this.spiralAngle=0,this.group=new sn;const t=new qu(.14,16,12);t.scale(.85,.85,1.55);const i=new ai({color:8138002,roughness:.65,metalness:.1});this.ballMesh=new re(t,i),this.ballMesh.castShadow=!0,this.group.add(this.ballMesh),this.stripesMesh=new sn;const s=new Yu(.095,.012,6,16),l=new za({color:16777215}),u=new re(s,l);u.position.z=.12,this.stripesMesh.add(u);const h=new re(s,l);h.position.z=-.12,this.stripesMesh.add(h),this.ballMesh.add(this.stripesMesh);const d=new za({color:16317180}),p=new Dn(.015,.01,.14);this.lacesMesh=new re(p,d),this.lacesMesh.position.set(0,.118,0),this.ballMesh.add(this.lacesMesh);for(let m=-2;m<=2;m++){const v=new Dn(.045,.008,.012),g=new re(v,d);g.position.set(0,.12,m*.025),this.ballMesh.add(g)}}update(t,i=.09){if(this.isHeld&&this.carrier){const s=new k;this.carrier.getWorldPosition(s);const l=new rr;this.carrier.getWorldQuaternion(l);const u=this.carrierOffset.clone().applyQuaternion(l);this.previousPosition.copy(this.position),this.position.copy(s).add(u),this.group.position.copy(this.position),this.group.quaternion.copy(l);return}if(this.isAirborne){if(this.previousPosition.copy(this.position),this.position.addScaledVector(this.velocity,t),this.position.y-=.5*Kp*t*t,this.velocity.y-=Kp*t,this.velocity.lengthSq()>1){const s=this.velocity.clone().normalize();this.group.lookAt(this.position.clone().add(s)),this.spiralAngle+=this.spinRate*t,this.ballMesh.rotation.z=this.spiralAngle}this.position.y<=i&&(this.position.y=i,this.hasBounced=!0,Math.abs(this.velocity.y)>1?(this.velocity.y=-this.velocity.y*.52,this.velocity.x*=.65,this.velocity.z*=.65,this.angularVelocity.set((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*15)):(this.velocity.set(0,0,0),this.isAirborne=!1)),this.group.position.copy(this.position)}else this.hasBounced&&(this.position.y=i,this.group.position.copy(this.position))}launch(t,i){this.isHeld=!1,this.carrier=null,this.isAirborne=!0,this.hasBounced=!1,this.position.copy(t),this.previousPosition.copy(t),this.velocity.copy(i),this.spiralAngle=0,this.spinRate=32,this.group.position.copy(this.position)}attachTo(t,i=new k(.25,1.2,.2)){this.isHeld=!0,this.isAirborne=!1,this.hasBounced=!1,this.carrier=t,this.carrierOffset.copy(i),this.previousPosition.copy(this.position)}}const pn=.9144,jn=53.33*pn;class tC{constructor(){this.group=new sn,this.createField(),this.createGoalPosts(),this.createPylons(),this.createStadiumStructure(),this.createLighting();const t=new bs(jn,.45),i=new za({color:2450411,transparent:!0,opacity:.85,depthWrite:!1});this.losLineMesh=new re(t,i),this.losLineMesh.rotation.x=-Math.PI/2,this.losLineMesh.position.y=.02,this.group.add(this.losLineMesh);const s=new za({color:16436245,transparent:!0,opacity:.85,depthWrite:!1});this.firstDownLineMesh=new re(t,s),this.firstDownLineMesh.rotation.x=-Math.PI/2,this.firstDownLineMesh.position.y=.022,this.group.add(this.firstDownLineMesh)}createField(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const i=t.getContext("2d");if(i){i.fillStyle="#2d6a4f",i.fillRect(0,0,t.width,t.height);const g=120,_=t.height/g;for(let y=0;y<g;y+=5)y/5%2===0&&(i.fillStyle="rgba(255, 255, 255, 0.04)",i.fillRect(0,y*_,t.width,5*_));i.fillStyle="#1e3a8a",i.fillRect(0,0,t.width,10*_),i.fillStyle="#f8fafc",i.font="bold 72px sans-serif",i.textAlign="center",i.textBaseline="middle",i.save(),i.translate(t.width/2,5*_),i.rotate(Math.PI),i.fillText("WILDCATS",0,0),i.restore(),i.fillStyle="#881337",i.fillRect(0,(g-10)*_,t.width,10*_),i.fillStyle="#f8fafc",i.fillText("GRIDIRON GM",t.width/2,(g-5)*_),i.lineWidth=4,i.strokeStyle="#ffffff";for(let y=10;y<=110;y++){const T=y*_,w=y<=60?y-10:110-y;y%5===0?(i.lineWidth=y%10===0?6:3,i.beginPath(),i.moveTo(t.width*.08,T),i.lineTo(t.width*.92,T),i.stroke(),y%10===0&&w>0&&w<50?(i.fillStyle="#ffffff",i.font="bold 44px monospace",i.save(),i.translate(t.width*.16,T),i.rotate(Math.PI/2),i.fillText(w.toString(),0,0),i.restore(),i.save(),i.translate(t.width*.84,T),i.rotate(-Math.PI/2),i.fillText(w.toString(),0,0),i.restore()):y===60&&(i.fillStyle="#ffffff",i.font="bold 44px monospace",i.save(),i.translate(t.width*.16,T),i.rotate(Math.PI/2),i.fillText("50",0,0),i.restore(),i.save(),i.translate(t.width*.84,T),i.rotate(-Math.PI/2),i.fillText("50",0,0),i.restore())):(i.lineWidth=2,i.beginPath(),i.moveTo(t.width*.42,T),i.lineTo(t.width*.44,T),i.stroke(),i.beginPath(),i.moveTo(t.width*.56,T),i.lineTo(t.width*.58,T),i.stroke(),i.beginPath(),i.moveTo(t.width*.08,T),i.lineTo(t.width*.09,T),i.stroke(),i.beginPath(),i.moveTo(t.width*.91,T),i.lineTo(t.width*.92,T),i.stroke())}i.lineWidth=8,i.strokeRect(t.width*.08,10*_,t.width*.84,100*_)}const s=new PT(t);s.wrapS=Wi,s.wrapT=Wi,s.colorSpace=vi,s.anisotropy=8;const l=120*pn,u=new bs(jn*1.3,l),h=new ai({map:s,roughness:.85}),d=new re(u,h);d.rotation.x=-Math.PI/2,d.receiveShadow=!0,this.group.add(d);const p=new bs(jn*2.2,l*1.4),m=new $d({color:1980971}),v=new re(p,m);v.rotation.x=-Math.PI/2,v.position.y=-.01,v.receiveShadow=!0,this.group.add(v)}createGoalPosts(){const t=new ai({color:16436245,metalness:.6,roughness:.2});[-1,1].forEach(i=>{const s=new sn,l=i*(60*pn),u=new Li(.16,.16,3.05,8),h=new re(u,t);h.position.set(0,1.52,0),s.add(h);const d=new Li(.12,.12,5.64,8),p=new re(d,t);p.rotation.z=Math.PI/2,p.position.set(0,3.05,0),s.add(p);const m=new Li(.1,.1,9.14,8),v=new re(m,t);v.position.set(-2.82,3.05+4.57,0),s.add(v);const g=new re(m,t);g.position.set(2.82,3.05+4.57,0),s.add(g),s.position.set(0,0,l),this.group.add(s)})}createPylons(){const t=new ai({color:16347926,roughness:.4}),i=new Dn(.15,.45,.15),s=jn*.42;[-50*pn,-60*pn,50*pn,60*pn].forEach(u=>{[-s,s].forEach(h=>{const d=new re(i,t);d.position.set(h,.22,u),d.castShadow=!0,this.group.add(d)})})}createStadiumStructure(){const t=new $d({color:2042167}),i=new $d({color:3621201}),s=new ai({color:1981066,roughness:.5});[-1,1].forEach(w=>{const M=new Dn(18,14,134),S=new re(M,t);S.position.set(w*(jn*.9+9),7,0),S.receiveShadow=!0,this.group.add(S);const N=new Dn(16,.6,130);for(let B=0;B<5;B++){const C=new re(N,i);C.position.set(w*(jn*.9+2+B*3.2),1.5+B*2.6,0),this.group.add(C)}}),[-1,1].forEach(w=>{const M=new Dn(jn*1.8,16,20),S=new re(M,t);S.position.set(0,8,w*70),S.receiveShadow=!0,this.group.add(S);const N=new Dn(jn*1.7,.6,18);for(let B=0;B<5;B++){const C=new re(N,i);C.position.set(0,1.8+B*2.8,w*(62+B*3.4)),this.group.add(C)}});const l=new Dn(.5,1.3,122*pn);[-1,1].forEach(w=>{const M=new re(l,s);M.position.set(w*(jn*.58),.65,0),this.group.add(M)});const u=new Dn(jn*1.16,1.3,.5);[-1,1].forEach(w=>{const M=new re(u,s);M.position.set(0,.65,w*(61*pn)),this.group.add(M)});const h=new sn,d=new Dn(26,12,1.5),p=new ai({color:988970,metalness:.8,roughness:.2}),m=new re(d,p);h.add(m);const v=new bs(24,10),g=new za({color:165063}),_=new re(v,g);_.position.z=-.8,_.rotation.y=Math.PI,h.add(_),h.position.set(0,24,76),this.group.add(h);const y=new ai({color:9741240,metalness:.8}),T=new za({color:16777215});[{x:-35,z:-55},{x:35,z:-55},{x:-35,z:55},{x:35,z:55}].forEach(w=>{const M=new sn,S=new Li(.5,.9,28,8),N=new re(S,y);N.position.y=14,M.add(N);const B=new Dn(6,3,1),C=new re(B,y);C.position.set(0,27,0),C.lookAt(0,0,0),M.add(C);const L=new Dn(5.6,2.6,.2),U=new re(L,T);U.position.set(0,27,.5),U.lookAt(0,0,0),M.add(U),M.position.set(w.x,0,w.z),this.group.add(M)})}createLighting(){const t=new YT(16777215,.85);this.group.add(t);const i=new XT(16777215,1976635,.65);this.group.add(i);const s=new lx(16775917,1.4);s.position.set(30,50,20),s.castShadow=!0,s.shadow.mapSize.width=2048,s.shadow.mapSize.height=2048,s.shadow.camera.near=5,s.shadow.camera.far=150,s.shadow.camera.left=-50,s.shadow.camera.right=50,s.shadow.camera.top=70,s.shadow.camera.bottom=-70,s.shadow.bias=5e-4,s.shadow.normalBias=.05,this.group.add(s);const l=new lx(10863828,.5);l.position.set(-30,30,-20),this.group.add(l)}updateLines(t,i){const s=(t-50)*pn,l=(i-50)*pn;this.losLineMesh.position.z=s,this.firstDownLineMesh.position.z=l}}const wu={TACTICAL:{height:5.4,backDist:7.2,lookAhead:1.5,lookHeight:1.1,fov:44},BROADCAST:{height:8.2,backDist:10.5,lookAhead:3,lookHeight:.9,fov:46},ACTION:{height:4,backDist:5.4,lookAhead:1,lookHeight:1.2,fov:42}};class eC{constructor(t){this.targetPos=new k(0,1.1,-21),this.currentLookAt=new k(0,1.1,-21),this.mode="TACTICAL",this.trauma=0,this.shakeOffset=new k,this.desiredPos=new k(0,5.4,-34),this.currentPos=new k(0,5.4,-34),this.baseFov=44,this.targetFov=44,this.normalDesiredPos=new k,this.normalLookTarget=new k;const i=t&&isFinite(t)&&t>0?t:16/9,s=wu[this.mode];this.baseFov=s.fov,this.targetFov=s.fov,this.camera=new Ui(this.baseFov,i,.1,400),this.camera.position.set(0,s.height,-34),this.targetPos.set(0,s.lookHeight,-21),this.currentLookAt.set(0,s.lookHeight,-21),this.camera.lookAt(this.currentLookAt)}setMode(t){this.mode=t;const i=wu[t];this.targetFov=i.fov}cycleMode(){const t=["TACTICAL","BROADCAST","ACTION"],i=(t.indexOf(this.mode)+1)%t.length;return this.setMode(t[i]),this.mode}calculateNormalTransform(t,i,s){this.normalDesiredPos.set(t.x,i.height,t.z-i.backDist*s),this.normalLookTarget.set(t.x,i.lookHeight,t.z+i.lookAhead*s)}snapTo(t,i=1){const s=wu[this.mode];this.calculateNormalTransform(t,s,i),this.desiredPos.copy(this.normalDesiredPos),this.currentPos.copy(this.desiredPos),this.targetPos.copy(this.normalLookTarget),this.currentLookAt.copy(this.targetPos),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLookAt),this.camera.fov=s.fov,this.targetFov=s.fov,this.camera.updateProjectionMatrix()}addTrauma(t=.4){this.trauma=Math.min(1,this.trauma+t)}update(t,i,s,l,u,h=1){const d=wu[this.mode];if(s&&l&&u){const p=new k().addVectors(l,u).multiplyScalar(.5);this.targetPos.lerp(new k(p.x,Math.max(1.2,p.y),p.z+2.5*h),t*4.5),this.targetFov=d.fov+2,this.desiredPos.set(p.x,d.height+2,p.z-d.backDist*h)}else this.calculateNormalTransform(i,d,h),this.targetPos.lerp(this.normalLookTarget,t*5.5),this.targetFov=d.fov,this.desiredPos.copy(this.normalDesiredPos);if(this.currentPos.lerp(this.desiredPos,t*5.5),this.camera.fov=Ul.lerp(this.camera.fov,this.targetFov,t*3.5),this.camera.updateProjectionMatrix(),this.trauma>.001){const p=this.trauma*this.trauma*.35;this.shakeOffset.set((Math.random()-.5)*p,(Math.random()-.5)*p,(Math.random()-.5)*p*.5),this.trauma=Math.max(0,this.trauma-t*2.2)}else this.shakeOffset.set(0,0,0);this.camera.position.copy(this.currentPos).add(this.shakeOffset),this.currentLookAt.lerp(this.targetPos,t*6),this.camera.lookAt(this.currentLookAt.clone().add(this.shakeOffset.clone().multiplyScalar(.5)))}resize(t){t&&isFinite(t)&&t>0&&(this.camera.aspect=t,this.camera.updateProjectionMatrix())}}const Vu=[{id:"pass_slants",name:"Quick Slants",type:"PASS",description:"Rapid 3-step drop. WRs cut inside at 45° across middle seam for fast rhythmic throws.",routes:{WR1:"SLANT",WR2:"SLANT",WR3:"SLANT",RB:"OUT"}},{id:"pass_mesh",name:"Mesh Under",type:"PASS",description:"Crossing drag routes create pick action underneath, while WR1 curls as safety valve.",routes:{WR1:"CURL",WR2:"DRAG",WR3:"DRAG",RB:"OUT"}},{id:"pass_verts",name:"Four Verticals",type:"PASS",description:"Deep aggressive attack. Outside receivers sprint streaks while slot attacks deep seam.",routes:{WR1:"GO",WR2:"GO",WR3:"GO",RB:"BLOCK"}},{id:"run_inside_zone",name:"Inside Zone",type:"RUN",description:"Direct interior run. Offensive line zone blocks to the right while RB presses the A-gap.",routes:{WR1:"BLOCK",WR2:"BLOCK",WR3:"BLOCK",RB:"HANDOFF_RUN"}}];function nC(o,t){const i=t==="LEFT"?1:-1;switch(o){case"GO":return[{x:0,z:8,speedMult:1},{x:0,z:22,speedMult:1.05},{x:0,z:45,speedMult:1.05}];case"SLANT":return[{x:0,z:3.5,speedMult:1},{x:i*5,z:8.5,speedMult:1.1},{x:i*14,z:14,speedMult:1}];case"OUT":return[{x:0,z:6.5,speedMult:1},{x:-i*6,z:7,speedMult:.95},{x:-i*12,z:7.5,speedMult:1}];case"CURL":return[{x:0,z:8.5,speedMult:1},{x:i*.5,z:7.2,speedMult:.6},{x:i*.5,z:7,speedMult:.2}];case"DRAG":return[{x:0,z:2.2,speedMult:1},{x:i*12,z:3,speedMult:1.05},{x:i*26,z:4.2,speedMult:1}];case"HANDOFF_RUN":return[{x:1.2,z:1,speedMult:.8},{x:1.8,z:6,speedMult:1.1},{x:2.5,z:18,speedMult:1.15},{x:2,z:40,speedMult:1.1}];case"BLOCK":default:return[{x:0,z:1.5,speedMult:.7},{x:0,z:3,speedMult:.5}]}}const iC={C:{x:0,z:-.4},LG:{x:-1.2,z:-.4},LT:{x:-2.4,z:-.5},RG:{x:1.2,z:-.4},RT:{x:2.4,z:-.5},QB:{x:0,z:-4.5},RB:{x:-1.5,z:-4.8},WR1:{x:-14,z:-.5},WR2:{x:-7.5,z:-.6},WR3:{x:14,z:-.5}},aC={LE:{x:-2.8,z:1},DT1:{x:-.9,z:.9},DT2:{x:.9,z:.9},RE:{x:2.8,z:1},MLB:{x:0,z:4.5},OLB:{x:-4,z:4.8},CB1:{x:-13.8,z:6},CB2:{x:13.8,z:6},FS:{x:-4.5,z:12}};function Ox(o,t="SKILL"){const i=Math.max(0,Math.min(100,o.speed)),s=Math.max(0,Math.min(100,o.acceleration)),l=Math.max(0,Math.min(100,o.agility)),u=Math.max(0,Math.min(100,o.strength)),h=Math.max(0,Math.min(100,o.catching??65)),d=Math.max(0,Math.min(100,o.throwPower??75)),p=Math.max(0,Math.min(100,o.throwAccuracy??75));let m=6.2,v=9.8,g=82,_=115;t==="LINEMAN"?(m=5.2,v=7.6,g=125,_=150):t==="QB"&&(m=5.8,v=8.8,g=95,_=112);const y=m+i/100*(v-m),T=10+s/100*15,w=T*1.5,M=4.8+l/100*6.2,S=g+u/100*(_-g),N=.8+u/100*.8,B=18+d/100*12,C=Math.max(.2,1.8-p/100*1.5),L=1.2+h/100*.9,U=.08+u/100*.32,P=1.3+(o.tackling??70)/100*.6;return{maxSpeed:y,acceleration:T,deceleration:w,turnRate:M,mass:S,strengthImpulse:N,throwVelocity:B,throwAccuracyVar:C,catchRadius:L,breakTackleChance:U,tackleReach:P}}const sC={QB:{speed:74,acceleration:78,agility:80,strength:70,awareness:88,throwPower:89,throwAccuracy:86},RB:{speed:88,acceleration:91,agility:89,strength:84,awareness:80,catching:74},WR1:{speed:93,acceleration:92,agility:90,strength:65,awareness:85,catching:90,routeRunning:92},WR2:{speed:90,acceleration:90,agility:93,strength:62,awareness:82,catching:86,routeRunning:89},WR3:{speed:89,acceleration:88,agility:86,strength:68,awareness:78,catching:82,routeRunning:81},LT:{speed:62,acceleration:65,agility:60,strength:92,awareness:84,passBlocking:88,runBlocking:86},LG:{speed:60,acceleration:62,agility:58,strength:90,awareness:80,passBlocking:84,runBlocking:88},C:{speed:61,acceleration:63,agility:62,strength:89,awareness:86,passBlocking:85,runBlocking:85},RG:{speed:59,acceleration:60,agility:58,strength:91,awareness:82,passBlocking:83,runBlocking:89},RT:{speed:63,acceleration:66,agility:61,strength:91,awareness:83,passBlocking:87,runBlocking:87}},rC={LE:{speed:78,acceleration:84,agility:75,strength:89,awareness:82,tackling:86},DT1:{speed:65,acceleration:72,agility:64,strength:94,awareness:80,tackling:88},DT2:{speed:64,acceleration:70,agility:63,strength:95,awareness:81,tackling:89},RE:{speed:82,acceleration:86,agility:80,strength:88,awareness:85,tackling:87},MLB:{speed:84,acceleration:86,agility:84,strength:86,awareness:88,tackling:91,coverage:78},OLB:{speed:86,acceleration:88,agility:85,strength:84,awareness:85,tackling:88,coverage:80},CB1:{speed:92,acceleration:92,agility:92,strength:65,awareness:88,tackling:75,coverage:90},CB2:{speed:90,acceleration:90,agility:89,strength:64,awareness:84,tackling:73,coverage:85},FS:{speed:91,acceleration:91,agility:88,strength:72,awareness:89,tackling:82,coverage:88}};function Qp(o,t){return{...o,down:1,distance:10,lineOfScrimmage:25,firstDownLine:35,playResultText:t}}function oC(o,t,i){const s=Math.max(1,Math.min(99,Math.round(t))),l=s-o.lineOfScrimmage;return s>=o.firstDownLine?{nextState:{...o,down:1,distance:Math.min(10,100-s),lineOfScrimmage:s,firstDownLine:Math.min(100,s+10),playResultText:`FIRST DOWN! +${l} YDS (${i})`},yardsGained:l,firstDown:!0,turnoverOnDowns:!1}:o.down>=4?{nextState:Qp(o,"TURNOVER ON DOWNS — RESET TO 25"),yardsGained:l,firstDown:!1,turnoverOnDowns:!0}:{nextState:{...o,down:o.down+1,distance:o.firstDownLine-s,lineOfScrimmage:s,playResultText:i==="Incomplete Pass"?"INCOMPLETE PASS":`${l>=0?"+":""}${l} YDS (${i})`},yardsGained:l,firstDown:!1,turnoverOnDowns:!1}}function lC(o){const t=Math.max(0,Math.floor(o)),i=Math.floor(t/60),s=t%60;return`${i.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`}function Px(o,t,i,s,l,u,h){if(!t||t.length===0)return o.clone().addScaledVector(h,Math.max(0,u));const d=o.clone();let p=Math.max(0,u),m=s;for(;p>.001&&m<t.length;){const v=t[m],g=d.distanceTo(v),_=(i==null?void 0:i[m])??1,y=Math.max(.5,l*_),T=g/y;T>p?(d.lerp(v,p/T),p=0):(d.copy(v),p-=T,m++)}return d}class cC{constructor(){this.ctx=null,this.isMuted=!1}getContext(){if(this.ctx)return this.ctx;const t=window.AudioContext||window.webkitAudioContext;return t&&(this.ctx=new t),this.ctx}setMuted(t){this.isMuted=t}getMuted(){return this.isMuted}playWhistle(){if(!this.isMuted)try{const t=this.getContext();if(!t)return;t.state==="suspended"&&t.resume();const i=t.currentTime,s=t.createOscillator(),l=t.createOscillator(),u=t.createGain();s.type="sine",l.type="sine",s.frequency.setValueAtTime(2600,i),l.frequency.setValueAtTime(2950,i);const h=t.createOscillator(),d=t.createGain();h.frequency.setValueAtTime(28,i),d.gain.setValueAtTime(200,i),h.connect(s.frequency),h.connect(l.frequency),h.start(i),h.stop(i+.65),u.gain.setValueAtTime(0,i),u.gain.linearRampToValueAtTime(.18,i+.04),u.gain.exponentialRampToValueAtTime(.001,i+.6),s.connect(u),l.connect(u),u.connect(t.destination),s.start(i),l.start(i),s.stop(i+.65),l.stop(i+.65)}catch{}}playSnap(){if(!this.isMuted)try{const t=this.getContext();if(!t)return;t.state==="suspended"&&t.resume();const i=t.currentTime,s=t.createOscillator(),l=t.createGain();s.type="sine",s.frequency.setValueAtTime(140,i),s.frequency.exponentialRampToValueAtTime(45,i+.12),l.gain.setValueAtTime(.3,i),l.gain.exponentialRampToValueAtTime(.001,i+.15),s.connect(l),l.connect(t.destination),s.start(i),s.stop(i+.15)}catch{}}playCatch(){if(!this.isMuted)try{const t=this.getContext();if(!t)return;t.state==="suspended"&&t.resume();const i=t.currentTime,s=t.createOscillator(),l=t.createGain();s.type="triangle",s.frequency.setValueAtTime(220,i),s.frequency.exponentialRampToValueAtTime(70,i+.08),l.gain.setValueAtTime(.25,i),l.gain.exponentialRampToValueAtTime(.001,i+.09),s.connect(l),l.connect(t.destination),s.start(i),s.stop(i+.1)}catch{}}playTackle(t=.5){if(!this.isMuted)try{const i=this.getContext();if(!i)return;i.state==="suspended"&&i.resume();const s=i.currentTime,l=Math.min(1,Math.max(.2,t)),u=i.sampleRate*.15,h=i.createBuffer(1,u,i.sampleRate),d=h.getChannelData(0);for(let y=0;y<u;y++)d[y]=Math.random()*2-1;const p=i.createBufferSource();p.buffer=h;const m=i.createBiquadFilter();m.type="bandpass",m.frequency.setValueAtTime(900,s),m.Q.setValueAtTime(1.5,s);const v=i.createGain();v.gain.setValueAtTime(.3*l,s),v.gain.exponentialRampToValueAtTime(.001,s+.12),p.connect(m),m.connect(v),v.connect(i.destination);const g=i.createOscillator(),_=i.createGain();g.type="sine",g.frequency.setValueAtTime(90+l*40,s),g.frequency.exponentialRampToValueAtTime(30,s+.2),_.gain.setValueAtTime(.4*l,s),_.gain.exponentialRampToValueAtTime(.001,s+.22),g.connect(_),_.connect(i.destination),p.start(s),g.start(s),g.stop(s+.25)}catch{}}playThrow(){if(!this.isMuted)try{const t=this.getContext();if(!t)return;t.state==="suspended"&&t.resume();const i=t.currentTime,s=t.createOscillator(),l=t.createGain();s.type="sine",s.frequency.setValueAtTime(180,i),s.frequency.linearRampToValueAtTime(320,i+.1),l.gain.setValueAtTime(.12,i),l.gain.exponentialRampToValueAtTime(.001,i+.14),s.connect(l),l.connect(t.destination),s.start(i),s.stop(i+.15)}catch{}}playCrowdCheer(){if(!this.isMuted)try{const t=this.getContext();if(!t)return;t.state==="suspended"&&t.resume();const i=t.currentTime,s=1.8,l=Math.floor(t.sampleRate*s),u=t.createBuffer(1,l,t.sampleRate),h=u.getChannelData(0);let d=0;for(let g=0;g<l;g++){const _=Math.random()*2-1;d=(d+.02*_)/1.02,h[g]=d*3.5}const p=t.createBufferSource();p.buffer=u;const m=t.createBiquadFilter();m.type="lowpass",m.frequency.setValueAtTime(800,i),m.frequency.linearRampToValueAtTime(1400,i+.4),m.frequency.exponentialRampToValueAtTime(600,i+s);const v=t.createGain();v.gain.setValueAtTime(.05,i),v.gain.linearRampToValueAtTime(.28,i+.3),v.gain.exponentialRampToValueAtTime(.001,i+s),p.connect(m),m.connect(v),v.connect(t.destination),p.start(i),p.stop(i+s)}catch{}}}const ki=new cC;class uC{constructor(t){this.players=new Map,this.ballCarrierId=null,this.controlledPlayerId="QB",this.playPhase="PRE_SNAP",this.currentPlay=Vu[0],this.throwType="TOUCH",this.playClock=0,this.whistleTimer=0,this.resetTimer=0,this.debugMode=!1,this.input={forward:0,lateral:0,sprint:!1},this.targetPassReceiverId=null,this.passAirTime=0,this.lastTackleForce=0,this.resetDriveAfterPlay=!1,this.lastNotifiedClockSecond=900,this.lastTime=performance.now(),this.animationFrameId=0,this.isRunning=!1,this.destroyed=!1,this.scene=new TT,this.scene.background=new Me(988970),this.scene.fog=new um(988970,160,380);const i=Number.isFinite(t.clientWidth)&&t.clientWidth>0?t.clientWidth:1,s=Number.isFinite(t.clientHeight)&&t.clientHeight>0?t.clientHeight:1,l=i/s;this.cameraManager=new eC(l),this.renderer=new Yw({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(i,s,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tl,this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",t.appendChild(this.renderer.domElement),window.__engine=this,this.field=new tC,this.scene.add(this.field.group),this.football=new $w,this.scene.add(this.football.group);const u=new hm(.85,1.15,32),h=new za({color:3718648,side:fa,transparent:!0,opacity:.85});this.carrierRing=new re(u,h),this.carrierRing.rotation.x=-Math.PI/2,this.carrierRing.position.y=.06,this.scene.add(this.carrierRing),this.debugLinesGroup=new sn,this.scene.add(this.debugLinesGroup),this.downState={down:1,distance:10,lineOfScrimmage:25,firstDownLine:35,quarter:1,clockSeconds:900,offenseScore:0,defenseScore:0,playResultText:"1st & 10 at Own 25"},this.telemetry={fps:60,activeRagdollCount:0,ballCarrierId:"QB",ballCarrierState:"NORMAL",ballCarrierSpeed:0,lastTackleForce:0,passTarget:null,passAirTime:0},this.createPlayers(),this.setPlay(Vu[0])}setOnStateChange(t){this.onStateChangeCallback=t}createPlayers(){["QB","RB","WR1","WR2","WR3","LT","LG","C","RG","RT"].forEach(s=>{const h=["LT","LG","C","RG","RT"].includes(s)?"LINEMAN":s==="QB"?"QB":"SKILL",d=sC[s],p=Ox(d,h),m=new Ux(s,"OFFENSE",Zw);this.scene.add(m.group),this.players.set(s,{id:s,position:s,side:"OFFENSE",model:m,physics:p,pos:new k,vel:new k,heading:0,targetPos:new k,currentWaypointIndex:0,hasBall:!1,isEngagedWithBlocker:!1,blockerTimer:0,tackleCooldown:0})}),["LE","DT1","DT2","RE","MLB","OLB","CB1","CB2","FS"].forEach(s=>{const u=["LE","DT1","DT2","RE"].includes(s)?"LINEMAN":"SKILL",h=rC[s],d=Ox(h,u),p=new Ux(s,"DEFENSE",Kw);this.scene.add(p.group),this.players.set(s,{id:s,position:s,side:"DEFENSE",model:p,physics:d,pos:new k,vel:new k,heading:Math.PI,targetPos:new k,currentWaypointIndex:0,hasBall:!1,isEngagedWithBlocker:!1,blockerTimer:0,tackleCooldown:0})})}setPlay(t){this.currentPlay=t,this.resetToPreSnap()}resetToPreSnap(){this.playPhase="PRE_SNAP",this.ballCarrierId="QB",this.controlledPlayerId="QB",this.targetPassReceiverId=null,this.passAirTime=0,this.whistleTimer=0,this.resetTimer=0,this.resetDriveAfterPlay=!1;const t=(this.downState.lineOfScrimmage-50)*pn;this.field.updateLines(this.downState.lineOfScrimmage,this.downState.firstDownLine),Object.entries(iC).forEach(([s,l])=>{const u=this.players.get(s);if(!u)return;const h=t+l.z*pn;if(u.pos.set(l.x,0,h),u.vel.set(0,0,0),u.heading=0,u.hasBall=s==="QB",u.model.isHoldingBall=s==="QB",u.isEngagedWithBlocker=!1,u.tackleCooldown=0,u.currentWaypointIndex=0,u.model.resetRagdoll(),u.model.group.position.copy(u.pos),u.model.group.rotation.y=u.heading,s==="WR1"||s==="WR2"||s==="WR3"||s==="RB"){const d=this.currentPlay.routes[s];u.routeType=d;const m=nC(d,s==="WR1"?"LEFT":s==="WR2"?"SLOT":"RIGHT");u.routeWaypoints=m.map(v=>new k(u.pos.x+v.x,0,t+v.z*pn)),u.routeSpeedMultipliers=m.map(v=>v.speedMult??1)}}),Object.entries(aC).forEach(([s,l])=>{const u=this.players.get(s);if(!u)return;const h=t+l.z*pn;u.pos.set(l.x,0,h),u.vel.set(0,0,0),u.heading=Math.PI,u.hasBall=!1,u.model.isHoldingBall=!1,u.isEngagedWithBlocker=!1,u.tackleCooldown=0,u.currentWaypointIndex=0,u.model.resetRagdoll(),u.model.group.position.copy(u.pos),u.model.group.rotation.y=u.heading,s==="CB1"&&(u.assignedOpponentId="WR1"),s==="CB2"&&(u.assignedOpponentId="WR3"),s==="FS"&&(u.assignedOpponentId="WR2"),s==="LE"&&(u.assignedOpponentId="RT"),s==="DT1"&&(u.assignedOpponentId="RG"),s==="DT2"&&(u.assignedOpponentId="LG"),s==="RE"&&(u.assignedOpponentId="LT"),(s==="MLB"||s==="OLB")&&(u.assignedOpponentId="QB")});const i=this.players.get("QB");i&&(i.model.isHoldingBall=!0,this.football.attachTo(i.model.root),this.cameraManager.snapTo(i.pos),this.carrierRing.position.set(i.pos.x,.06,i.pos.z)),this.updateDebugRouteLines(),this.notifyState()}snapBall(){this.playPhase==="PRE_SNAP"&&(this.playPhase="PLAY_ACTIVE",this.playClock=0,ki.playSnap(),this.notifyState())}throwToReceiver(t,i=this.throwType){if(this.playPhase!=="PLAY_ACTIVE"||this.controlledPlayerId!=="QB")return;const s=this.players.get("QB"),l=this.players.get(t);if(!s||!l)return;this.playPhase="BALL_IN_AIR",this.targetPassReceiverId=t,this.passAirTime=0,this.ballCarrierId=null,s.hasBall=!1,s.model.isHoldingBall=!1;const u=new k(.3,1.9,.2).applyAxisAngle(new k(0,1,0),s.heading),h=s.pos.clone().add(u),d=s.vel.length(),p=s.physics.throwAccuracyVar*(1+(d>2?.6:0)),m=new k((Math.random()-.5)*p,(Math.random()-.5)*p*.4,(Math.random()-.5)*p),v=op(h,l.pos,l.vel,i,new k,s.physics.throwVelocity);let g=Px(l.pos,l.routeWaypoints,l.routeSpeedMultipliers,l.currentWaypointIndex,l.physics.maxSpeed*.95,v.flightTime,l.vel);const _=op(h,g,new k,i,new k,s.physics.throwVelocity);g=Px(l.pos,l.routeWaypoints,l.routeSpeedMultipliers,l.currentWaypointIndex,l.physics.maxSpeed*.95,_.flightTime,l.vel);const y=op(h,g,new k,i,m,s.physics.throwVelocity);this.football.launch(h,y.velocity),ki.playThrow(),this.notifyState()}update(t){const i=Math.min(t,.05);this.playPhase!=="PRE_SNAP"&&(this.playClock+=i),(this.playPhase==="PLAY_ACTIVE"||this.playPhase==="BALL_IN_AIR"||this.playPhase==="RUN_AFTER_CATCH")&&(this.downState.clockSeconds=Math.max(0,this.downState.clockSeconds-i)),this.updateControlledPlayer(i),this.updateAIPlayers(i),this.updateFootballPhysics(i),this.updatePhysicsCollisions(i),this.updatePlayerModels(i),this.checkPlayConditions(i),this.updateCamera(i);const s=this.players.get(this.controlledPlayerId);s&&(this.carrierRing.position.set(s.pos.x,.06,s.pos.z),this.carrierRing.visible=!0),this.updateTelemetry();const l=Math.ceil(this.downState.clockSeconds);l!==this.lastNotifiedClockSecond&&(this.lastNotifiedClockSecond=l,this.notifyState())}updateControlledPlayer(t){if(this.playPhase==="PRE_SNAP"||this.playPhase==="PLAY_OVER"||this.playPhase==="TOUCHDOWN_CELEBRATION")return;const i=this.players.get(this.controlledPlayerId);if(!i||i.model.ragdollState!=="NORMAL")return;const s=i.side==="OFFENSE"?1:-1,l=new k(this.input.lateral,0,this.input.forward*s),u=l.lengthSq()>.01;let h=0;if(u){l.normalize();const d=this.input.sprint?1.25:1;h=i.physics.maxSpeed*d;const p=Math.atan2(l.x,l.z),m=Ul.euclideanModulo(p-i.heading+Math.PI,Math.PI*2)-Math.PI,v=i.physics.turnRate*t;i.heading+=Math.max(-v,Math.min(v,m));const g=new k(Math.sin(i.heading),0,Math.cos(i.heading));i.vel.lerp(g.multiplyScalar(h),t*(i.physics.acceleration/4))}else i.vel.multiplyScalar(Math.pow(.82,t*60));i.pos.addScaledVector(i.vel,t),i.pos.x=Math.max(-jn*.46,Math.min(jn*.46,i.pos.x)),i.model.group.position.copy(i.pos),i.model.group.rotation.y=i.heading}updateAIPlayers(t){if(!(this.playPhase==="PRE_SNAP"||this.playPhase==="PLAY_OVER")){if(this.currentPlay.type==="RUN"&&this.playPhase==="PLAY_ACTIVE"){const i=this.players.get("QB"),s=this.players.get("RB");i&&s&&this.controlledPlayerId==="QB"&&i.pos.distanceTo(s.pos)<1.8&&this.playClock>.4&&(i.hasBall=!1,i.model.isHoldingBall=!1,s.hasBall=!0,s.model.isHoldingBall=!0,this.ballCarrierId="RB",this.controlledPlayerId="RB",this.playPhase="RUN_AFTER_CATCH",this.football.attachTo(s.model.root),ki.playCatch(),this.notifyState())}this.players.forEach(i=>{if(!(i.id===this.controlledPlayerId&&i.model.ragdollState==="NORMAL")){if(i.model.ragdollState!=="NORMAL"){i.vel.multiplyScalar(Math.pow(.85,t*60)),i.pos.addScaledVector(i.vel,t),i.model.group.position.copy(i.pos);return}i.side==="OFFENSE"&&i.routeWaypoints&&i.routeWaypoints.length>0&&this.updateReceiverRoute(i,t),i.side==="OFFENSE"&&["LT","LG","C","RG","RT"].includes(i.position)&&this.updateOffensiveLineman(i,t),i.side==="DEFENSE"&&["LE","DT1","DT2","RE"].includes(i.position)&&this.updatePassRusher(i,t),i.side==="DEFENSE"&&["MLB","OLB"].includes(i.position)&&this.updateLinebacker(i,t),i.side==="DEFENSE"&&["CB1","CB2","FS"].includes(i.position)&&this.updateDefensiveBack(i,t)}})}}updateReceiverRoute(t,i){var h;if(!t.routeWaypoints||t.routeWaypoints.length===0)return;if(this.playPhase==="RUN_AFTER_CATCH"){const d=this.getBallCarrier();if(d&&d.side!==t.side){this.steerToward(t,d.pos,t.physics.maxSpeed*.95,i);return}let p=null,m=8;this.players.forEach(v=>{if(v.side!==t.side){const g=t.pos.distanceTo(v.pos);g<m&&(m=g,p=v)}}),p&&this.steerToward(t,p.pos,t.physics.maxSpeed*.75,i);return}let s=t.routeWaypoints[t.currentWaypointIndex];if(!s)return;t.pos.distanceTo(s)<1&&t.currentWaypointIndex<t.routeWaypoints.length-1&&(t.currentWaypointIndex++,s=t.routeWaypoints[t.currentWaypointIndex]);const u=((h=t.routeSpeedMultipliers)==null?void 0:h[t.currentWaypointIndex])??1;this.steerToward(t,s,t.physics.maxSpeed*.95*u,i)}updateOffensiveLineman(t,i){const s=(this.downState.lineOfScrimmage-50)*pn;let l=null,u=3.5;if(this.players.forEach(h=>{if(h.side==="DEFENSE"&&["LE","DT1","DT2","RE"].includes(h.position)){const d=t.pos.distanceTo(h.pos);d<u&&(u=d,l=h)}}),l){const h=l.pos.clone().lerp(t.pos,.4);h.z=Math.min(s+.2,h.z),this.steerToward(t,h,t.physics.maxSpeed*.5,i)}}updatePassRusher(t,i){const s=this.getBallCarrierOrQB();if(s){if(this.playPhase==="RUN_AFTER_CATCH"&&s.side===t.side){t.vel.multiplyScalar(Math.pow(.9,i*60));return}this.steerToward(t,s.pos,t.physics.maxSpeed*.85,i)}}updateLinebacker(t,i){const s=(this.downState.lineOfScrimmage-50)*pn,l=this.getBallCarrierOrQB();if(this.currentPlay.type==="RUN"||this.playPhase==="RUN_AFTER_CATCH")l&&l.side!==t.side&&this.steerToward(t,l.pos,t.physics.maxSpeed*.95,i);else if(this.playPhase==="BALL_IN_AIR"){const u=this.targetPassReceiverId?this.players.get(this.targetPassReceiverId):null;u&&this.steerToward(t,u.pos,t.physics.maxSpeed*.95,i)}else{const u=s+4.5*pn,h=new k(t.pos.x*.7,0,u);this.steerToward(t,h,t.physics.maxSpeed*.6,i)}}updateDefensiveBack(t,i){if(this.playPhase==="BALL_IN_AIR"){const s=this.targetPassReceiverId?this.players.get(this.targetPassReceiverId):null;s&&this.steerToward(t,s.pos,t.physics.maxSpeed*1,i);return}if(this.playPhase==="RUN_AFTER_CATCH"){const s=this.getBallCarrier();s&&s.side!==t.side&&this.steerToward(t,s.pos,t.physics.maxSpeed*1,i);return}if(t.assignedOpponentId){const s=this.players.get(t.assignedOpponentId);if(s){const l=s.pos.z+1.8*pn,u=new k(s.pos.x,0,l);this.steerToward(t,u,t.physics.maxSpeed*.92,i)}}}steerToward(t,i,s,l){const u=new k().subVectors(i,t.pos).setY(0);if(u.length()<.1){t.vel.multiplyScalar(Math.pow(.8,l*60));return}u.normalize();const d=Math.atan2(u.x,u.z),p=Ul.euclideanModulo(d-t.heading+Math.PI,Math.PI*2)-Math.PI,m=t.physics.turnRate*l;t.heading+=Math.max(-m,Math.min(m,p));const v=new k(Math.sin(t.heading),0,Math.cos(t.heading));t.vel.lerp(v.multiplyScalar(s),l*(t.physics.acceleration/4)),t.pos.addScaledVector(t.vel,l),t.pos.x=Math.max(-jn*.46,Math.min(jn*.46,t.pos.x)),t.model.group.position.copy(t.pos),t.model.group.rotation.y=t.heading}updateFootballPhysics(t){if(this.football.update(t),this.playPhase==="BALL_IN_AIR"&&this.football.isAirborne){this.passAirTime+=t;const i=[this.targetPassReceiverId,"WR1","WR2","WR3","RB"].filter((s,l,u)=>!!s&&u.indexOf(s)===l);for(const s of i){const l=this.players.get(s);if((l==null?void 0:l.side)==="OFFENSE"&&this.isBallWithinCatchEnvelope(l,l.physics.catchRadius*.75,.35,2.85)){this.secureCatch(l,!1);return}}if(this.passAirTime>.35){for(const s of this.players.values())if(s.side==="DEFENSE"&&this.isBallWithinCatchEnvelope(s,1.05,.55,2.65)){this.secureCatch(s,!0);return}}this.football.hasBounced&&this.football.position.y<=.12&&this.endPlay("Incomplete Pass",this.downState.lineOfScrimmage)}}isBallWithinCatchEnvelope(t,i,s,l){const u=Math.min(this.football.previousPosition.y,this.football.position.y);if(Math.max(this.football.previousPosition.y,this.football.position.y)<s||u>l)return!1;const d=t.pos.clone().add(new k(0,1.35,0));return Jw(d,this.football.previousPosition,this.football.position)<=i}secureCatch(t,i){ki.playCatch(),this.players.forEach(s=>{s.hasBall=!1,s.model.isHoldingBall=!1}),this.football.attachTo(t.model.root),t.hasBall=!0,t.model.isHoldingBall=!0,this.ballCarrierId=t.id,this.controlledPlayerId=t.id,this.playPhase="RUN_AFTER_CATCH",i&&(this.downState.playResultText="INTERCEPTED!"),this.notifyState()}updatePhysicsCollisions(t){const i=this.getBallCarrier();this.players.forEach(u=>{u.tackleCooldown=Math.max(0,u.tackleCooldown-t)});const s=["LT","LG","C","RG","RT"],l=["LE","DT1","DT2","RE"];s.forEach(u=>{const h=this.players.get(u);h&&l.forEach(d=>{const p=this.players.get(d);if(!p)return;const m=new k().subVectors(p.pos,h.pos).setY(0),v=m.length(),g=.85;if(v<g&&v>.001){const _=g-v,y=m.normalize(),T=h.physics.mass/(h.physics.mass+p.physics.mass)*_*.5,w=p.physics.mass/(h.physics.mass+p.physics.mass)*_*.5;h.pos.addScaledVector(y,-T),p.pos.addScaledVector(y,w),h.vel.multiplyScalar(.7),p.vel.multiplyScalar(.7),h.model.group.position.copy(h.pos),p.model.group.position.copy(p.pos)}})}),i&&i.model.ragdollState!=="FULL_RAGDOLL"&&this.players.forEach(u=>{if(i.model.ragdollState!=="FULL_RAGDOLL"&&u.side!==i.side&&u.model.ragdollState==="NORMAL"&&u.tackleCooldown<=0){const d=new k().subVectors(i.pos,u.pos).setY(0).length(),p=u.physics.tackleReach;if(d<p){const m=jw(i.pos,i.vel,i.physics.mass,i.physics.strengthImpulse,u.pos,u.vel,u.physics.mass,u.physics.strengthImpulse);this.lastTackleForce=m.impactStrength,u.tackleCooldown=.45,i.vel.add(m.impulseRunner),u.vel.add(m.impulseDefender),ki.playTackle(m.impactStrength/700),this.cameraManager.addTrauma(m.impactStrength/900),i.model.applyTackleImpulse(m.impulseRunner,m.nextState),m.severity==="HIGH"&&u.model.applyTackleImpulse(m.impulseDefender,"PARTIAL_RAGDOLL")}}})}updatePlayerModels(t){this.players.forEach(i=>{const s=i.vel.length(),l=s>.2,u=i.model.group.rotation.y-i.heading;i.model.update(t,s,u,l)})}checkPlayConditions(t){if(this.playPhase==="PRE_SNAP")return;if(this.playPhase==="PLAY_OVER"||this.playPhase==="TOUCHDOWN_CELEBRATION"){this.resetTimer+=t,this.resetTimer>=1.6&&this.nextPlay();return}const i=this.getBallCarrier();if(i){const s=50+i.pos.z/pn,l=i.side==="OFFENSE"&&s>=100,u=i.side==="DEFENSE"&&s<=0;if(l||u){this.playPhase="TOUCHDOWN_CELEBRATION",ki.playWhistle(),ki.playCrowdCheer(),this.cameraManager.addTrauma(.5),l?this.downState.offenseScore+=7:this.downState.defenseScore+=7,this.downState.playResultText=u?"PICK SIX! DEFENSE +7":"TOUCHDOWN! +7 PTS",this.resetDriveAfterPlay=!0,this.notifyState();return}if(i.side==="OFFENSE"&&s<=0){this.playPhase="PLAY_OVER",ki.playWhistle(),this.downState.defenseScore+=2,this.downState.playResultText="SAFETY! DEFENSE +2",this.resetDriveAfterPlay=!0,this.notifyState();return}if(Math.abs(i.pos.x)>=jn*.44){this.endPlay("Out of Bounds");return}if((i.model.ragdollState==="FULL_RAGDOLL"||i.model.ragdollState==="PARTIAL_RAGDOLL")&&i.model.groundContactTime>.45){this.endPlay("Tackled");return}}}endPlay(t,i){this.playPhase="PLAY_OVER",ki.playWhistle();const s=this.getBallCarrier(),l=this.downState.lineOfScrimmage;let u=l;if(i!==void 0?u=i:s&&(u=Math.round(50+s.pos.z/pn),u=Math.max(1,Math.min(99,u))),(s==null?void 0:s.side)==="DEFENSE"){const h=Math.max(0,Math.round(l-u));this.downState=Qp(this.downState,`INTERCEPTION RETURN: ${h} YDS — RESET TO 25`)}else{const h=oC(this.downState,u,t);this.downState=h.nextState,h.firstDown&&ki.playCrowdCheer()}this.notifyState()}nextPlay(){this.resetDriveAfterPlay&&(this.downState=Qp(this.downState,"1st & 10 at Own 25"),this.resetDriveAfterPlay=!1),this.resetToPreSnap()}updateCamera(t){const i=this.players.get(this.controlledPlayerId)||this.players.get("QB"),s=i?i.pos:new k,l=(i==null?void 0:i.side)==="DEFENSE"?-1:1,u=this.playPhase==="BALL_IN_AIR",h=this.football.position,d=this.targetPassReceiverId?this.players.get(this.targetPassReceiverId):null,p=d?d.pos:void 0;this.cameraManager.update(t,s,u,h,p,l)}updateTelemetry(){let t=0;this.players.forEach(s=>{s.model.ragdollState!=="NORMAL"&&t++});const i=this.getBallCarrier();this.telemetry={fps:60,activeRagdollCount:t,ballCarrierId:i?i.id:null,ballCarrierState:i?i.model.ragdollState:"NORMAL",ballCarrierSpeed:i?i.vel.length():0,lastTackleForce:Math.round(this.lastTackleForce),passTarget:this.targetPassReceiverId,passAirTime:parseFloat(this.passAirTime.toFixed(2))}}updateDebugRouteLines(){for(;this.debugLinesGroup.children.length>0;)this.debugLinesGroup.remove(this.debugLinesGroup.children[0]);this.debugMode&&["WR1","WR2","WR3","RB"].forEach(t=>{const i=this.players.get(t);if(!i||!i.routeWaypoints||i.routeWaypoints.length===0)return;const s=[i.pos.clone().setY(.1),...i.routeWaypoints.map(d=>d.clone().setY(.1))],l=new Jn().setFromPoints(s),u=new lS({color:t==="WR1"?3718648:t==="WR2"?16007006:11032055,linewidth:3}),h=new OT(l,u);this.debugLinesGroup.add(h)})}toggleDebugMode(){this.debugMode=!this.debugMode,this.updateDebugRouteLines()}cycleCameraMode(){const t=this.cameraManager.cycleMode(),i=this.players.get(this.controlledPlayerId)||this.players.get("QB");return i&&this.cameraManager.snapTo(i.pos,i.side==="DEFENSE"?-1:1),t}setCameraMode(t){this.cameraManager.setMode(t);const i=this.players.get(this.controlledPlayerId)||this.players.get("QB");i&&this.cameraManager.snapTo(i.pos,i.side==="DEFENSE"?-1:1)}getBallCarrier(){return this.ballCarrierId&&this.players.get(this.ballCarrierId)||null}getBallCarrierOrQB(){return this.getBallCarrier()||this.players.get("QB")||null}notifyState(){this.updateTelemetry(),this.onStateChangeCallback&&this.onStateChangeCallback(this.downState,this.playPhase,this.telemetry)}start(){if(this.isRunning||this.destroyed)return;this.isRunning=!0,this.lastTime=performance.now();const t=i=>{if(!this.isRunning)return;const s=(i-this.lastTime)/1e3;this.lastTime=i,this.update(s),this.renderer.render(this.scene,this.cameraManager.camera),this.animationFrameId=requestAnimationFrame(t)};this.animationFrameId=requestAnimationFrame(t)}stop(){this.isRunning=!1,cancelAnimationFrame(this.animationFrameId)}resize(t,i){this.destroyed||!Number.isFinite(t)||!Number.isFinite(i)||t<=0||i<=0||(this.cameraManager.resize(t/i),this.renderer.setSize(t,i,!1))}destroy(){if(this.destroyed)return;this.destroyed=!0,this.stop(),this.onStateChangeCallback=void 0;const t=this.renderer.domElement;t.parentElement&&t.parentElement.removeChild(t),this.renderer.dispose();const i=window;i.__engine===this&&delete i.__engine}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hC=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Ix=o=>{const t=hC(o);return t.charAt(0).toUpperCase()+t.slice(1)},MS=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),dC=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=Cn.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},p)=>Cn.createElement("svg",{ref:p,...pC,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:MS("lucide",l),...!u&&!dC(d)&&{"aria-hidden":"true"},...d},[...h.map(([m,v])=>Cn.createElement(m,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=(o,t)=>{const i=Cn.forwardRef(({className:s,...l},u)=>Cn.createElement(mC,{ref:u,iconNode:t,className:MS(`lucide-${fC(Ix(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Ix(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],_C=lr("activity",gC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],xC=lr("camera",vC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],MC=lr("play",SC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],EC=lr("shield-alert",yC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Bx=lr("sparkles",TC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],AC=lr("volume-2",bC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],wC=lr("volume-x",RC),CC=({downState:o,playPhase:t,telemetry:i,currentPlay:s,controlledPlayerId:l,onSelectPlay:u,onSnap:h,onThrow:d,throwType:p,onChangeThrowType:m,onToggleDebug:v,debugMode:g,cameraMode:_,onToggleCamera:y,onVirtualMove:T})=>{const[w,M]=Cn.useState(!1),S=()=>{const B=!w;M(B),ki.setMuted(B)},N=B=>B===1?"1ST":B===2?"2ND":B===3?"3RD":"4TH";return Et.jsxs("div",{id:"gameplay-hud-root",className:"pointer-events-none absolute inset-0 select-none overflow-hidden font-sans",children:[Et.jsxs("div",{id:"scoreboard-banner",className:"pointer-events-auto absolute top-2 left-1/2 flex max-w-[calc(100%-1rem)] -translate-x-1/2 items-center gap-1 rounded-xl border border-slate-700/80 bg-slate-900/90 px-2 py-2 text-white shadow-2xl backdrop-blur-md sm:top-4 sm:gap-3 sm:px-4",children:[Et.jsxs("div",{className:"flex items-center gap-2",children:[Et.jsx("div",{className:"flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 font-black text-xs text-white",children:"WIL"}),Et.jsx("span",{className:"hidden font-extrabold text-sm tracking-wide text-blue-400 sm:inline",children:"WILDCATS"}),Et.jsx("span",{className:"font-mono font-black text-xl text-white",children:o.offenseScore})]}),Et.jsx("div",{className:"h-6 w-px bg-slate-700"}),Et.jsxs("div",{className:"flex items-center gap-2",children:[Et.jsx("span",{className:"font-mono font-black text-xl text-white",children:o.defenseScore}),Et.jsx("span",{className:"hidden font-extrabold text-sm tracking-wide text-red-400 sm:inline",children:"TITANS"}),Et.jsx("div",{className:"flex h-7 w-7 items-center justify-center rounded-md bg-red-700 font-black text-xs text-white",children:"TIT"})]}),Et.jsx("div",{className:"h-6 w-px bg-slate-700"}),Et.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-slate-300",children:[Et.jsxs("span",{className:"rounded bg-slate-800 px-1.5 py-0.5 font-bold text-amber-400",children:["Q",o.quarter]}),Et.jsx("span",{className:"font-semibold",children:lC(o.clockSeconds)})]}),Et.jsxs("div",{className:"flex items-center gap-1 pl-1 sm:gap-1.5 sm:pl-2",children:[Et.jsxs("button",{id:"hud-camera-btn",onClick:y,className:"flex h-8 w-8 items-center justify-center gap-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 transition hover:bg-slate-700 hover:text-white sm:w-auto sm:px-2.5",title:"Toggle Camera View (Key: C) - Tactical / Broadcast / Action",children:[Et.jsx(xC,{size:14,className:"text-amber-400"}),Et.jsx("span",{className:"hidden font-bold text-[10px] tracking-wide text-amber-400 sm:inline",children:_})]}),Et.jsx("button",{id:"hud-mute-btn",onClick:S,className:"flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition hover:bg-slate-700 hover:text-white",title:w?"Unmute Audio":"Mute Audio",children:w?Et.jsx(wC,{size:15}):Et.jsx(AC,{size:15})}),Et.jsx("button",{id:"hud-debug-btn",onClick:v,className:`flex h-8 w-8 items-center justify-center rounded-lg transition ${g?"bg-amber-500 text-slate-950 font-bold":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,title:"Toggle Physics Debug Overlay (Key: ` or ~)",children:Et.jsx(_C,{size:15})})]})]}),Et.jsxs("div",{id:"down-distance-chyron",className:`absolute left-2 max-w-[calc(100%-1rem)] rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 text-white shadow-2xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:p-3.5 ${t==="PRE_SNAP"?"top-20 bottom-auto sm:top-auto":"bottom-4"}`,children:[Et.jsxs("div",{className:"flex items-baseline gap-2.5",children:[Et.jsxs("span",{className:"font-black text-2xl tracking-tight text-amber-400",children:[N(o.down)," & ",o.distance]}),Et.jsxs("span",{className:"font-mono text-xs text-slate-400",children:["BALL ON ",Et.jsx("span",{className:"font-bold text-white",children:o.lineOfScrimmage})," YD"]})]}),Et.jsxs("div",{className:"mt-1 flex items-center gap-2 text-xs",children:[Et.jsx("span",{className:"rounded bg-blue-950/80 px-2 py-0.5 font-semibold text-blue-300 border border-blue-800/60",children:s.name}),o.playResultText&&Et.jsx("span",{className:"font-medium text-amber-300 italic",children:o.playResultText})]})]}),t==="PLAY_ACTIVE"&&l==="QB"&&s.type==="PASS"&&Et.jsx("div",{id:"pass-target-indicators",className:"pointer-events-auto absolute top-24 left-1/2 flex -translate-x-1/2 items-center gap-4",children:Et.jsxs("div",{className:"rounded-xl border border-slate-700/90 bg-slate-900/90 px-4 py-2.5 text-center shadow-xl backdrop-blur-md",children:[Et.jsx("div",{className:"mb-2 font-bold text-xs uppercase tracking-wider text-slate-400",children:"Target Receiver (Keys: 1, 2, 3)"}),Et.jsxs("div",{className:"flex items-center justify-center gap-3",children:[Et.jsxs("button",{id:"pass-target-wr1",onClick:()=>d("WR1",p),className:"group flex flex-col items-center justify-center rounded-lg border border-sky-500/50 bg-sky-950/80 px-3 py-1.5 transition hover:scale-105 hover:bg-sky-600 hover:text-white",children:[Et.jsx("span",{className:"font-black text-sm text-sky-300 group-hover:text-white",children:"[1] WR1"}),Et.jsx("span",{className:"text-[10px] text-sky-400/90 group-hover:text-sky-100",children:s.routes.WR1})]}),Et.jsxs("button",{id:"pass-target-wr2",onClick:()=>d("WR2",p),className:"group flex flex-col items-center justify-center rounded-lg border border-rose-500/50 bg-rose-950/80 px-3 py-1.5 transition hover:scale-105 hover:bg-rose-600 hover:text-white",children:[Et.jsx("span",{className:"font-black text-sm text-rose-300 group-hover:text-white",children:"[2] WR2"}),Et.jsx("span",{className:"text-[10px] text-rose-400/90 group-hover:text-rose-100",children:s.routes.WR2})]}),Et.jsxs("button",{id:"pass-target-wr3",onClick:()=>d("WR3",p),className:"group flex flex-col items-center justify-center rounded-lg border border-purple-500/50 bg-purple-950/80 px-3 py-1.5 transition hover:scale-105 hover:bg-purple-600 hover:text-white",children:[Et.jsx("span",{className:"font-black text-sm text-purple-300 group-hover:text-white",children:"[3] WR3"}),Et.jsx("span",{className:"text-[10px] text-purple-400/90 group-hover:text-purple-100",children:s.routes.WR3})]})]}),Et.jsxs("div",{className:"mt-2 flex items-center justify-center gap-2 border-t border-slate-800 pt-2 text-[11px]",children:[Et.jsx("span",{className:"text-slate-400",children:"Pass Arc:"}),["BULLET","TOUCH","LOB"].map(B=>Et.jsx("button",{onClick:()=>m(B),className:`rounded px-2 py-0.5 font-semibold transition ${p===B?"bg-amber-400 text-slate-950 font-bold":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:B},B))]})]})}),t==="PRE_SNAP"&&Et.jsxs("div",{id:"pre-snap-panel",className:"pointer-events-auto absolute bottom-4 left-1/2 flex w-[calc(100%-1rem)] max-w-3xl -translate-x-1/2 flex-col items-center gap-3 sm:bottom-6",children:[Et.jsx("div",{className:"flex w-full items-center gap-2.5 overflow-x-auto rounded-2xl border border-slate-700/80 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-md",children:Vu.map(B=>Et.jsxs("button",{id:`play-select-${B.id}`,onClick:()=>u(B),className:`flex shrink-0 flex-col items-start rounded-xl px-3.5 py-2 text-left transition ${s.id===B.id?"border border-blue-500 bg-blue-600/30 text-white ring-1 ring-blue-400":"border border-transparent bg-slate-800/80 text-slate-300 hover:bg-slate-700/80"}`,children:[Et.jsxs("div",{className:"flex items-center gap-1.5",children:[Et.jsx("span",{className:`rounded px-1.5 py-0.2 font-extrabold text-[10px] ${B.type==="PASS"?"bg-sky-500/30 text-sky-300":"bg-amber-500/30 text-amber-300"}`,children:B.type}),Et.jsx("span",{className:"font-bold text-xs",children:B.name})]}),Et.jsx("span",{className:"mt-0.5 line-clamp-1 max-w-[140px] text-[10px] text-slate-400",children:B.description})]},B.id))}),Et.jsxs("button",{id:"snap-ball-btn",onClick:h,className:"flex items-center gap-2 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 font-black text-sm uppercase tracking-wider text-slate-950 shadow-xl transition hover:scale-105 hover:brightness-110 active:scale-95",children:[Et.jsx(MC,{size:16,fill:"currentColor"}),"SNAP BALL (SPACE)"]})]}),t==="TOUCHDOWN_CELEBRATION"&&Et.jsx("div",{id:"touchdown-celebration-banner",className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:Et.jsxs("div",{className:"animate-bounce rounded-3xl border-4 border-amber-400 bg-gradient-to-b from-blue-900 to-slate-950 px-12 py-6 text-center shadow-[0_0_50px_rgba(250,204,21,0.5)]",children:[Et.jsxs("div",{className:"flex items-center justify-center gap-2 text-amber-400",children:[Et.jsx(Bx,{size:28}),Et.jsx("span",{className:"font-black text-4xl tracking-wider uppercase",children:"TOUCHDOWN!"}),Et.jsx(Bx,{size:28})]}),Et.jsx("p",{className:"mt-1 font-bold text-sm text-slate-200",children:o.playResultText})]})}),g&&Et.jsxs("div",{id:"debug-telemetry-panel",className:"pointer-events-auto absolute top-16 right-6 w-64 rounded-xl border border-amber-500/40 bg-slate-950/90 p-3.5 font-mono text-xs text-amber-300 shadow-2xl backdrop-blur-md",children:[Et.jsxs("div",{className:"mb-2 flex items-center gap-1.5 border-b border-slate-800 pb-1 font-bold text-amber-400",children:[Et.jsx(EC,{size:14}),"PHYSICS & RAGDOLL DEBUG"]}),Et.jsxs("div",{className:"space-y-1 text-[11px]",children:[Et.jsxs("div",{className:"flex justify-between",children:[Et.jsx("span",{className:"text-slate-400",children:"Engine FPS:"}),Et.jsx("span",{className:"text-emerald-400 font-bold",children:i.fps})]}),Et.jsxs("div",{className:"flex justify-between",children:[Et.jsx("span",{className:"text-slate-400",children:"Ball Carrier:"}),Et.jsx("span",{className:"font-bold text-white",children:i.ballCarrierId||"None"})]}),Et.jsxs("div",{className:"flex justify-between",children:[Et.jsx("span",{className:"text-slate-400",children:"Carrier State:"}),Et.jsx("span",{className:`font-bold ${i.ballCarrierState==="FULL_RAGDOLL"?"text-red-400":i.ballCarrierState==="STUMBLE"?"text-amber-400":"text-emerald-400"}`,children:i.ballCarrierState})]}),Et.jsxs("div",{className:"flex justify-between",children:[Et.jsx("span",{className:"text-slate-400",children:"Speed:"}),Et.jsxs("span",{children:[i.ballCarrierSpeed.toFixed(1)," m/s"]})]}),Et.jsxs("div",{className:"flex justify-between",children:[Et.jsx("span",{className:"text-slate-400",children:"Active Ragdolls:"}),Et.jsx("span",{className:"font-bold text-white",children:i.activeRagdollCount})]}),Et.jsxs("div",{className:"flex justify-between",children:[Et.jsx("span",{className:"text-slate-400",children:"Last Tackle Impact:"}),Et.jsxs("span",{className:"text-red-400 font-bold",children:[i.lastTackleForce," N"]})]}),i.passTarget&&Et.jsxs("div",{className:"flex justify-between",children:[Et.jsx("span",{className:"text-slate-400",children:"Pass Air Time:"}),Et.jsxs("span",{children:[i.passAirTime,"s"]})]})]})]}),(t==="PLAY_ACTIVE"||t==="RUN_AFTER_CATCH")&&Et.jsxs("div",{id:"virtual-dpad-controls",className:"pointer-events-auto absolute bottom-24 right-6 flex flex-col items-center gap-1 rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3 shadow-2xl backdrop-blur-md sm:hidden",children:[Et.jsx("div",{className:"font-bold text-[10px] text-slate-400 uppercase tracking-wider mb-1",children:"D-PAD"}),Et.jsx("button",{onPointerDown:()=>T(0,1,!1),onPointerUp:()=>T(0,0,!1),onPointerCancel:()=>T(0,0,!1),onPointerLeave:()=>T(0,0,!1),className:"flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 font-bold text-sm text-white active:bg-blue-600",children:"▲"}),Et.jsxs("div",{className:"flex items-center gap-1",children:[Et.jsx("button",{onPointerDown:()=>T(-1,0,!1),onPointerUp:()=>T(0,0,!1),onPointerCancel:()=>T(0,0,!1),onPointerLeave:()=>T(0,0,!1),className:"flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 font-bold text-sm text-white active:bg-blue-600",children:"◀"}),Et.jsx("button",{onPointerDown:()=>T(0,-1,!1),onPointerUp:()=>T(0,0,!1),onPointerCancel:()=>T(0,0,!1),onPointerLeave:()=>T(0,0,!1),className:"flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 font-bold text-sm text-white active:bg-blue-600",children:"▼"}),Et.jsx("button",{onPointerDown:()=>T(1,0,!1),onPointerUp:()=>T(0,0,!1),onPointerCancel:()=>T(0,0,!1),onPointerLeave:()=>T(0,0,!1),className:"flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 font-bold text-sm text-white active:bg-blue-600",children:"▶"})]})]}),Et.jsxs("div",{id:"controls-legend",className:"pointer-events-auto absolute bottom-6 right-6 hidden sm:block rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 text-[11px] text-slate-300 shadow-xl backdrop-blur-md",children:[Et.jsx("div",{className:"mb-1 font-bold text-slate-400 uppercase tracking-wider text-[10px]",children:"Controls"}),Et.jsxs("div",{className:"space-y-0.5 font-mono",children:[Et.jsxs("div",{children:[Et.jsx("span",{className:"font-bold text-amber-400",children:"WASD / Arrows"}),": Move QB / Runner"]}),Et.jsxs("div",{children:[Et.jsx("span",{className:"font-bold text-amber-400",children:"SHIFT"}),": Sprint"]}),Et.jsxs("div",{children:[Et.jsx("span",{className:"font-bold text-amber-400",children:"SPACE"}),": Snap"]}),Et.jsxs("div",{children:[Et.jsx("span",{className:"font-bold text-amber-400",children:"1, 2, 3"}),": Pass to WR1, WR2, WR3"]}),Et.jsxs("div",{children:[Et.jsx("span",{className:"font-bold text-amber-400",children:"C"}),": Camera Angle (Tactical/Broadcast/Action)"]}),Et.jsxs("div",{children:[Et.jsx("span",{className:"font-bold text-amber-400",children:"` / ~"}),": Toggle Physics Debug"]})]})]})]})};function DC(){const o=Cn.useRef(null),t=Cn.useRef(null),[i,s]=Cn.useState({down:1,distance:10,lineOfScrimmage:25,firstDownLine:35,quarter:1,clockSeconds:900,offenseScore:0,defenseScore:0,playResultText:"1st & 10 at Own 25"}),[l,u]=Cn.useState("PRE_SNAP"),[h,d]=Cn.useState(Vu[0]),[p,m]=Cn.useState("TOUCH"),[v,g]=Cn.useState(!1),[_,y]=Cn.useState("TACTICAL"),[T,w]=Cn.useState("QB"),[M,S]=Cn.useState({fps:60,activeRagdollCount:0,ballCarrierId:"QB",ballCarrierState:"NORMAL",ballCarrierSpeed:0,lastTackleForce:0,passTarget:null,passAirTime:0});Cn.useEffect(()=>{const D=o.current;if(!D)return;let F=!1;const V=new uC(D);t.current=V,V.setOnStateChange((at,nt,xt)=>{F||(s({...at}),u(nt),w(V.controlledPlayerId),S({...xt}))}),V.start();const Q=()=>{F||V.resize(D.clientWidth,D.clientHeight)};window.addEventListener("resize",Q);const rt=new ResizeObserver(at=>{for(const nt of at){if(F)return;const{width:xt,height:Zt}=nt.contentRect;xt>0&&Zt>0&&V.resize(xt,Zt)}});rt.observe(D);const Y=requestAnimationFrame(()=>{Q()}),tt=at=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(at.code)&&at.preventDefault(),F)return;const nt=V;switch(at.code){case"KeyW":case"ArrowUp":nt.input.forward=1;break;case"KeyS":case"ArrowDown":nt.input.forward=-1;break;case"KeyA":case"ArrowLeft":nt.input.lateral=-1;break;case"KeyD":case"ArrowRight":nt.input.lateral=1;break;case"ShiftLeft":case"ShiftRight":nt.input.sprint=!0;break;case"Space":nt.playPhase==="PRE_SNAP"&&nt.snapBall();break;case"Digit1":nt.throwToReceiver("WR1");break;case"Digit2":nt.throwToReceiver("WR2");break;case"Digit3":nt.throwToReceiver("WR3");break;case"KeyC":const xt=nt.cycleCameraMode();y(xt);break;case"Backquote":nt.toggleDebugMode(),g(nt.debugMode);break}},X=at=>{if(F)return;const nt=V;switch(at.code){case"KeyW":case"ArrowUp":nt.input.forward===1&&(nt.input.forward=0);break;case"KeyS":case"ArrowDown":nt.input.forward===-1&&(nt.input.forward=0);break;case"KeyA":case"ArrowLeft":nt.input.lateral===-1&&(nt.input.lateral=0);break;case"KeyD":case"ArrowRight":nt.input.lateral===1&&(nt.input.lateral=0);break;case"ShiftLeft":case"ShiftRight":nt.input.sprint=!1;break}},Z=()=>{V.input.forward=0,V.input.lateral=0,V.input.sprint=!1},ht=()=>{document.hidden&&Z()};return window.addEventListener("keydown",tt),window.addEventListener("keyup",X),window.addEventListener("blur",Z),document.addEventListener("visibilitychange",ht),()=>{F=!0,cancelAnimationFrame(Y),rt.disconnect(),window.removeEventListener("resize",Q),window.removeEventListener("keydown",tt),window.removeEventListener("keyup",X),window.removeEventListener("blur",Z),document.removeEventListener("visibilitychange",ht),V.destroy(),t.current===V&&(t.current=null)}},[]);const N=D=>{d(D),t.current&&t.current.setPlay(D)},B=()=>{t.current&&t.current.snapBall()},C=(D,F)=>{t.current&&t.current.throwToReceiver(D,F)},L=D=>{m(D),t.current&&(t.current.throwType=D)},U=()=>{t.current&&(t.current.toggleDebugMode(),g(t.current.debugMode))},P=()=>{if(t.current){const D=t.current.cycleCameraMode();y(D)}},b=(D,F,V)=>{t.current&&(t.current.input.lateral=D,t.current.input.forward=F,t.current.input.sprint=V)};return Et.jsxs("div",{id:"gameplay-root",className:"relative h-full w-full overflow-hidden bg-slate-950",children:[Et.jsx("div",{id:"gameplay-canvas-host",ref:o,className:"absolute inset-0 h-full w-full overflow-hidden [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full"}),Et.jsx(CC,{downState:i,playPhase:l,telemetry:M,currentPlay:h,controlledPlayerId:T,onSelectPlay:N,onSnap:B,onThrow:C,throwType:p,onChangeThrowType:L,onToggleDebug:U,debugMode:v,cameraMode:_,onToggleCamera:P,onVirtualMove:b})]})}uE.createRoot(document.getElementById("root")).render(Et.jsx(Cn.StrictMode,{children:Et.jsx(DC,{})}));
