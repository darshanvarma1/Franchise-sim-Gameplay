(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var yd={exports:{}},pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function iE(){if(Ev)return pl;Ev=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return pl.Fragment=t,pl.jsx=i,pl.jsxs=i,pl}var Tv;function aE(){return Tv||(Tv=1,yd.exports=iE()),yd.exports}var Tt=aE(),Ed={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function sE(){if(bv)return le;bv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(z){return z===null||typeof z!="object"?null:(z=M&&z[M]||z["@@iterator"],typeof z=="function"?z:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function L(z,mt,Rt){this.props=z,this.context=mt,this.refs=S,this.updater=Rt||w}L.prototype.isReactComponent={},L.prototype.setState=function(z,mt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,mt,"setState")},L.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function B(){}B.prototype=L.prototype;function C(z,mt,Rt){this.props=z,this.context=mt,this.refs=S,this.updater=Rt||w}var D=C.prototype=new B;D.constructor=C,y(D,L.prototype),D.isPureReactComponent=!0;var N=Array.isArray;function P(){}var T={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function F(z,mt,Rt){var Q=Rt.ref;return{$$typeof:o,type:z,key:mt,ref:Q!==void 0?Q:null,props:Rt}}function k(z,mt){return F(z.type,mt,z.props)}function K(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function st(z){var mt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Rt){return mt[Rt]})}var X=/\/+/g;function et(z,mt){return typeof z=="object"&&z!==null&&z.key!=null?st(""+z.key):mt.toString(36)}function W(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(mt){z.status==="pending"&&(z.status="fulfilled",z.value=mt)},function(mt){z.status==="pending"&&(z.status="rejected",z.reason=mt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function $(z,mt,Rt,Q,dt){var bt=typeof z;(bt==="undefined"||bt==="boolean")&&(z=null);var Bt=!1;if(z===null)Bt=!0;else switch(bt){case"bigint":case"string":case"number":Bt=!0;break;case"object":switch(z.$$typeof){case o:case t:Bt=!0;break;case v:return Bt=z._init,$(Bt(z._payload),mt,Rt,Q,dt)}}if(Bt)return dt=dt(z),Bt=Q===""?"."+et(z,0):Q,N(dt)?(Rt="",Bt!=null&&(Rt=Bt.replace(X,"$&/")+"/"),$(dt,mt,Rt,"",function(ke){return ke})):dt!=null&&(K(dt)&&(dt=k(dt,Rt+(dt.key==null||z&&z.key===dt.key?"":(""+dt.key).replace(X,"$&/")+"/")+Bt)),mt.push(dt)),1;Bt=0;var _t=Q===""?".":Q+":";if(N(z))for(var wt=0;wt<z.length;wt++)Q=z[wt],bt=_t+et(Q,wt),Bt+=$(Q,mt,Rt,bt,dt);else if(wt=b(z),typeof wt=="function")for(z=wt.call(z),wt=0;!(Q=z.next()).done;)Q=Q.value,bt=_t+et(Q,wt++),Bt+=$(Q,mt,Rt,bt,dt);else if(bt==="object"){if(typeof z.then=="function")return $(W(z),mt,Rt,Q,dt);throw mt=String(z),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return Bt}function ht(z,mt,Rt){if(z==null)return z;var Q=[],dt=0;return $(z,Q,"","",function(bt){return mt.call(Rt,bt,dt++)}),Q}function it(z){if(z._status===-1){var mt=z._result,Rt=mt();Rt.then(function(Q){(z._status===0||z._status===-1)&&(z._status=1,z._result=Q,Rt.status===void 0&&(Rt.status="fulfilled",Rt.value=Q))},function(Q){(z._status===0||z._status===-1)&&(z._status=2,z._result=Q,Rt.status===void 0&&(Rt.status="rejected",Rt.reason=Q))}),z._status===-1&&(z._status=0,z._result=Rt)}if(z._status===1)return z._result.default;throw z._result}var nt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function xt(z){var mt=T.T,Rt={};Rt.types=mt!==null?mt.types:null,T.T=Rt;try{var Q=z(),dt=T.S;dt!==null&&dt(Rt,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(P,nt)}catch(bt){nt(bt)}finally{mt!==null&&Rt.types!==null&&(mt.types=Rt.types),T.T=mt}}function Zt(z){var mt=T.T;if(mt!==null){var Rt=mt.types;Rt===null?mt.types=[z]:Rt.indexOf(z)===-1&&Rt.push(z)}else xt(Zt.bind(null,z))}var Kt={map:ht,forEach:function(z,mt,Rt){ht(z,function(){mt.apply(this,arguments)},Rt)},count:function(z){var mt=0;return ht(z,function(){mt++}),mt},toArray:function(z){return ht(z,function(mt){return mt})||[]},only:function(z){if(!K(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return le.Activity=g,le.Children=Kt,le.Component=L,le.Fragment=i,le.Profiler=l,le.PureComponent=C,le.StrictMode=s,le.Suspense=m,le.ViewTransition=_,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,le.__COMPILER_RUNTIME={__proto__:null,c:function(z){return T.H.useMemoCache(z)}},le.addTransitionType=Zt,le.cache=function(z){return function(){return z.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(z,mt,Rt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Q=y({},z.props),dt=z.key;if(mt!=null)for(bt in mt.key!==void 0&&(dt=""+mt.key),mt)!U.call(mt,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&mt.ref===void 0||(Q[bt]=mt[bt]);var bt=arguments.length-2;if(bt===1)Q.children=Rt;else if(1<bt){for(var Bt=Array(bt),_t=0;_t<bt;_t++)Bt[_t]=arguments[_t+2];Q.children=Bt}return F(z.type,dt,Q)},le.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},le.createElement=function(z,mt,Rt){var Q,dt={},bt=null;if(mt!=null)for(Q in mt.key!==void 0&&(bt=""+mt.key),mt)U.call(mt,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(dt[Q]=mt[Q]);var Bt=arguments.length-2;if(Bt===1)dt.children=Rt;else if(1<Bt){for(var _t=Array(Bt),wt=0;wt<Bt;wt++)_t[wt]=arguments[wt+2];dt.children=_t}if(z&&z.defaultProps)for(Q in Bt=z.defaultProps,Bt)dt[Q]===void 0&&(dt[Q]=Bt[Q]);return F(z,bt,dt)},le.createRef=function(){return{current:null}},le.forwardRef=function(z){return{$$typeof:d,render:z}},le.isValidElement=K,le.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:it}},le.memo=function(z,mt){return{$$typeof:p,type:z,compare:mt===void 0?null:mt}},le.startTransition=xt,le.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},le.use=function(z){return T.H.use(z)},le.useActionState=function(z,mt,Rt){return T.H.useActionState(z,mt,Rt)},le.useCallback=function(z,mt){return T.H.useCallback(z,mt)},le.useContext=function(z){return T.H.useContext(z)},le.useDebugValue=function(){},le.useDeferredValue=function(z,mt){return T.H.useDeferredValue(z,mt)},le.useEffect=function(z,mt){return T.H.useEffect(z,mt)},le.useEffectEvent=function(z){return T.H.useEffectEvent(z)},le.useId=function(){return T.H.useId()},le.useImperativeHandle=function(z,mt,Rt){return T.H.useImperativeHandle(z,mt,Rt)},le.useInsertionEffect=function(z,mt){return T.H.useInsertionEffect(z,mt)},le.useLayoutEffect=function(z,mt){return T.H.useLayoutEffect(z,mt)},le.useMemo=function(z,mt){return T.H.useMemo(z,mt)},le.useOptimistic=function(z,mt){return T.H.useOptimistic(z,mt)},le.useReducer=function(z,mt,Rt){return T.H.useReducer(z,mt,Rt)},le.useRef=function(z){return T.H.useRef(z)},le.useState=function(z){return T.H.useState(z)},le.useSyncExternalStore=function(z,mt,Rt){return T.H.useSyncExternalStore(z,mt,Rt)},le.useTransition=function(){return T.H.useTransition()},le.version="19.3.0",le}var Av;function jp(){return Av||(Av=1,Ed.exports=sE()),Ed.exports}var Ve=jp(),Td={exports:{}},ml={},bd={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function rE(){return Rv||(Rv=1,(function(o){function t(W,$){var ht=W.length;W.push($);t:for(;0<ht;){var it=ht-1>>>1,nt=W[it];if(0<l(nt,$))W[it]=$,W[ht]=nt,ht=it;else break t}}function i(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var $=W[0],ht=W.pop();if(ht!==$){W[0]=ht;t:for(var it=0,nt=W.length,xt=nt>>>1;it<xt;){var Zt=2*(it+1)-1,Kt=W[Zt],z=Zt+1,mt=W[z];if(0>l(Kt,ht))z<nt&&0>l(mt,Kt)?(W[it]=mt,W[z]=ht,it=z):(W[it]=Kt,W[Zt]=ht,it=Zt);else if(z<nt&&0>l(mt,ht))W[it]=mt,W[z]=ht,it=z;else break t}}return $}function l(W,$){var ht=W.sortIndex-$.sortIndex;return ht!==0?ht:W.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,g=null,_=3,M=!1,b=!1,w=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(W){for(var $=i(p);$!==null;){if($.callback===null)s(p);else if($.startTime<=W)s(p),$.sortIndex=$.expirationTime,t(m,$);else break;$=i(p)}}function D(W){if(w=!1,C(W),!b)if(i(m)!==null)b=!0,N||(N=!0,K());else{var $=i(p);$!==null&&et(D,$.startTime-W)}}var N=!1,P=-1,T=5,U=-1;function F(){return y?!0:!(o.unstable_now()-U<T)}function k(){if(y=!1,N){var W=o.unstable_now();U=W;var $=!0;try{t:{b=!1,w&&(w=!1,L(P),P=-1),M=!0;var ht=_;try{e:{for(C(W),g=i(m);g!==null&&!(g.expirationTime>W&&F());){var it=g.callback;if(typeof it=="function"){g.callback=null,_=g.priorityLevel;var nt=it(g.expirationTime<=W);if(W=o.unstable_now(),typeof nt=="function"){g.callback=nt,C(W),$=!0;break e}g===i(m)&&s(m),C(W)}else s(m);g=i(m)}if(g!==null)$=!0;else{var xt=i(p);xt!==null&&et(D,xt.startTime-W),$=!1}}break t}finally{g=null,_=ht,M=!1}$=void 0}}finally{$?K():N=!1}}}var K;if(typeof B=="function")K=function(){B(k)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,X=st.port2;st.port1.onmessage=k,K=function(){X.postMessage(null)}}else K=function(){S(k,0)};function et(W,$){P=S(function(){W(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(W){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var ht=_;_=$;try{return W()}finally{_=ht}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(W,$){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ht=_;_=W;try{return $()}finally{_=ht}},o.unstable_scheduleCallback=function(W,$,ht){var it=o.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?it+ht:it):ht=it,W){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=ht+nt,W={id:v++,callback:$,priorityLevel:W,startTime:ht,expirationTime:nt,sortIndex:-1},ht>it?(W.sortIndex=ht,t(p,W),i(m)===null&&W===i(p)&&(w?(L(P),P=-1):w=!0,et(D,ht-it))):(W.sortIndex=nt,t(m,W),b||M||(b=!0,N||(N=!0,K()))),W},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(W){var $=_;return function(){var ht=_;_=$;try{return W.apply(this,arguments)}finally{_=ht}}}})(Ad)),Ad}var wv;function oE(){return wv||(wv=1,bd.exports=rE()),bd.exports}var Rd={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function lE(){if(Cv)return Bn;Cv=1;var o=jp();function t(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,g,_){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===h?h:""+M,children:v,containerInfo:g,implementation:_}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.browser=function(v){return{$$typeof:u,_reason:v}},Bn.createPortal=function(v,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(v,g,null,_)},Bn.flushSync=function(v){var g=m.T,_=s.p;try{if(m.T=null,s.p=2,v)return v()}finally{m.T=g,s.p=_,s.d.f()}},Bn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},Bn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Bn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var _=g.as,M=p(_,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:w}):_==="script"&&s.d.X(v,{crossOrigin:M,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Bn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=p(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},Bn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,M=p(_,g.crossOrigin);s.d.L(v,_,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Bn.preloadModule=function(v,g){if(typeof v=="string")if(g){var _=p(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},Bn.requestFormReset=function(v){s.d.r(v)},Bn.unstable_batchedUpdates=function(v,g){return v(g)},Bn.useFormState=function(v,g,_){return m.H.useFormState(v,g,_)},Bn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Bn.version="19.3.0",Bn}var Dv;function cE(){if(Dv)return Rd.exports;Dv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Rd.exports=lE(),Rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function uE(){if(Nv)return ml;Nv=1;var o=oE(),t=jp(),i=cE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var x=!1,R=c.child;R;){if(R===a){x=!0,a=c,r=f;break}if(R===r){x=!0,r=c,a=f;break}R=R.sibling}if(!x){for(R=f.child;R;){if(R===a){x=!0,a=f,r=c;break}if(R===r){x=!0,r=f,a=c;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,r,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,r,c,f))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function b(e){var n=[null,null],a=_(e);return a===null||w(n,e,a.child,{foundSelf:!1}),n}function w(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(e,n,a.child,r))return!0;a=a.sibling}return!1}function y(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,L=null;function B(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function C(e,n,a){return e===a?(L=e,!1):e===n?(L!==null&&(S=e),!0):!1}function D(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function N(e,n,a){for(var r=0,c=e;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)e=a(e),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,T=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),st=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),et=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ht=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),xt=Symbol.for("react.activity"),Zt=Symbol.for("react.legacy_hidden"),Kt=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),Rt=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=Rt&&e[Rt]||e["@@iterator"],typeof e=="function"?e:null)}var dt=Symbol.for("react.client.reference");function bt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case st:return"Profiler";case K:return"StrictMode";case $:return"Suspense";case ht:return"SuspenseList";case xt:return"Activity";case z:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case et:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case W:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case it:return n=e.displayName||null,n!==null?n:bt(e.type)||"Memo";case nt:n=e._payload,e=e._init;try{return bt(e(n))}catch{}}return null}var Bt=Array.isArray,_t=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ke={pending:!1,data:null,method:null,action:null},me=[],_e=-1;function ye(e){return{current:e}}function ee(e){0>_e||(e.current=me[_e],me[_e]=null,_e--)}function ie(e,n){_e++,me[_e]=e.current,e.current=n}var Xe=ye(null),gn=ye(null),Ie=ye(null),en=ye(null);function Y(e,n){switch(ie(Ie,n),ie(gn,e),ie(Xe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?L_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=L_(n),e=U_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ee(Xe),ie(Xe,e)}function an(){ee(Xe),ee(gn),ee(Ie)}function Pe(e){var n=e.memoizedState;n!==null&&(Zr._currentValue=n.memoizedState,ie(en,e)),n=Xe.current;var a=U_(n,e.type);n!==a&&(ie(gn,e),ie(Xe,a))}function O(e){gn.current===e&&(ee(Xe),ee(gn)),en.current===e&&(ee(en),Zr._currentValue=ke)}var E,tt;function ct(e){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",tt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+e+tt}var pt=!1;function At(e,n){if(!e||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Ot){var Z=Ot}Reflect.construct(e,[],St)}else{try{St.call()}catch(Ot){Z=Ot}St=!1;try{var lt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new e}finally{St&&(lt!==void 0?Object.defineProperty(e.prototype,"props",lt):delete e.prototype.props)}}}else{try{throw Error()}catch(Ot){Z=Ot}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Ot){if(Ot&&Z&&typeof Ot.stack=="string")return[Ot.stack,Z.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],R=f[1];if(x&&R){var I=x.split(`
`),J=R.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===J.length)for(r=I.length-1,c=J.length-1;1<=r&&0<=c&&I[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==J[c]){var ut=`
`+I[r].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=r&&0<=c);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ct(a):""}function Nt(e,n){switch(e.tag){case 26:case 27:case 5:return ct(e.type);case 16:return ct("Lazy");case 13:return e.child!==n&&n!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return At(e.type,!1);case 11:return At(e.type.render,!1);case 1:return At(e.type,!0);case 31:return ct("Activity");case 30:return ct("ViewTransition");default:return""}}function gt(e){try{var n="",a=null;do n+=Nt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var yt=Object.prototype.hasOwnProperty,Dt=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,It=o.unstable_shouldYield,Pt=o.unstable_requestPaint,kt=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,ce=o.unstable_ImmediatePriority,q=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,Vt=o.log,Et=o.unstable_setDisableYieldValue,Jt=null,Gt=null;function Ne(e){if(typeof Vt=="function"&&Et(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Jt,e)}catch{}}var ue=Math.clz32?Math.clz32:Qu,ri=Math.log,Si=Math.LN2;function Qu(e){return e>>>=0,e===0?32:31-(ri(e)/Si|0)|0}var ur=256,Rs=262144,Wa=4194304;function va(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ws(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?c=va(r):(x&=R,x!==0?c=va(x):a||(a=R&~e,a!==0&&(c=va(a))))):(R=r&~f,R!==0?c=va(R):x!==0?c=va(x):a||(a=r&~e,a!==0&&(c=va(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function qa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Zi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-ue(a),c=1<<r;n|=e[r],a&=~c}return n}function So(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mo(){var e=Wa;return Wa<<=1,(Wa&62914560)===0&&(Wa=4194304),e}function fr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ki(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Il(e,n,a,r,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,I=e.expirationTimes,J=e.hiddenUpdates;for(a=x&~a;0<a;){var ut=31-ue(a),St=1<<ut;R[ut]=0,I[ut]=-1;var Z=J[ut];if(Z!==null)for(J[ut]=null,ut=0;ut<Z.length;ut++){var lt=Z[ut];lt!==null&&(lt.lane&=-536870913)}a&=~St}r!==0&&Cs(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Cs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ue(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function yo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ue(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Eo(e,n){var a=n&-n;return a=(a&42)!==0?1:To(a),(a&(e.suspendedLanes|n))!==0?0:a}function To(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bl(){var e=wt.p;return e!==0?e:(e=window.event,e===void 0?32:gv(e.type))}function zl(e,n){var a=wt.p;try{return wt.p=e,n()}finally{wt.p=a}}var Mi=Math.random().toString(36).slice(2),A="__reactFiber$"+Mi,H="__reactProps$"+Mi,ft="__reactContainer$"+Mi,rt="__reactEvents$"+Mi,ot="__reactListeners$"+Mi,zt="__reactHandles$"+Mi,Xt="__reactResources$"+Mi,Ut="__reactMarker$"+Mi,Yt="__reactLoad$"+Mi;function Qt(e){delete e[A],delete e[H],delete e[ot],delete e[zt]}function se(e){var n;if(n=e[A])return n;for(var a=e.parentNode;a;){if(n=a[ft]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Q_(e);e!==null;){if(a=e[A])return a;e=Q_(e)}return n}e=a,a=e.parentNode}return null}function fe(e){if(e=e[A]||e[ft]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Wt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ee(e){var n=e[Xt];return n||(n=e[Xt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ve(e){e[Ut]=!0}function Ke(e){e[Yt]=void 0}var He=new Set,yn={};function Ft(e,n){cn(e,n),cn(e+"Capture",n)}function cn(e,n){for(yn[e]=n,e=0;e<n.length;e++)He.add(n[e])}var Le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xn={},oi={};function Qi(e){return yt.call(oi,e)?!0:yt.call(Xn,e)?!1:Le.test(e)?oi[e]=!0:(Xn[e]=!0,!1)}var xe=!1;function ze(){var e=xe;return xe=!1,e}function Je(e,n,a){if(Qi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function li(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Re(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fl(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ju(e){if(!e._valueTracker){var n=xa(e)?"checked":"value";e._valueTracker=Fl(e,n,""+e[n])}}function Sm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=xa(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var TS=/[\n"\\]/g;function yi(e){return e.replace(TS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ju(e,n,a,r,c,f,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+un(n)):e.value!==""+un(n)&&(e.value=""+un(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?$u(e,un(e.value)):$u(e,un(n)):a!=null?$u(e,un(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+un(R):e.removeAttribute("name")}function Mm(e,n,a,r,c,f,x,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ju(e);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),ju(e)}function $u(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function hr(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function ym(e,n,a){if(n!=null&&(n=""+un(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+un(a):""}function Em(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Bt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=un(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),ju(e)}function dr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var bS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||bS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function bm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",xe=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Tm(e,c,r),xe=!0)}else for(var f in n)n.hasOwnProperty(f)&&Tm(e,f,n[f])}function tf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var AS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),RS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hl(e){return RS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var ef=null;function nf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pr=null,mr=null;function Am(e){var n=fe(e);if(n&&(e=n.stateNode)){var a=e[H]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ju(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[H]||null;if(!c)throw Error(s(90));Ju(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Sm(r)}break t;case"textarea":ym(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hr(e,!!a.multiple,n,!1)}}}var af=!1;function Rm(e,n,a){if(af)return e(n,a);af=!0;try{var r=e(n);return r}finally{if(af=!1,(pr!==null||mr!==null)&&(Hc(),pr&&(n=pr,e=mr,mr=pr=null,Am(n),e)))for(n=0;n<e.length;n++)Am(e[n])}}function Ao(e,n){var a=e.stateNode;if(a===null)return null;var r=a[H]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=!1;if(Sa)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){sf=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{sf=!1}var Ya=null,rf=null,Gl=null;function wm(){if(Gl)return Gl;var e,n=rf,a=n.length,r,c="value"in Ya?Ya.value:Ya.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===c[f-r];r++);return Gl=c.slice(e,1<r?1-r:void 0)}function Vl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kl(){return!0}function Cm(){return!1}function Wn(e){function n(a,r,c,f,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?kl:Cm,this.isPropagationStopped=Cm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Wn(Za),wo=P({},Za,{view:0,detail:0}),wS=Wn(wo),of,lf,Co,Wl=P({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Co&&(Co&&e.type==="mousemove"?(of=e.screenX-Co.screenX,lf=e.screenY-Co.screenY):lf=of=0,Co=e),of)},movementY:function(e){return"movementY"in e?e.movementY:lf}}),Dm=Wn(Wl),CS=P({},Wl,{dataTransfer:0}),DS=Wn(CS),NS=P({},wo,{relatedTarget:0}),cf=Wn(NS),LS=P({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),US=Wn(LS),OS=P({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),PS=Wn(OS),IS=P({},Za,{data:0}),Nm=Wn(IS),BS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=FS[e])?!!n[e]:!1}function uf(){return HS}var GS=P({},wo,{key:function(e){if(e.key){var n=BS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(e){return e.type==="keypress"?Vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),VS=Wn(GS),kS=P({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=Wn(kS),XS=P({},Za,{submitter:0}),WS=Wn(XS),qS=P({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),YS=Wn(qS),ZS=P({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),KS=Wn(ZS),QS=P({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jS=Wn(QS),JS=P({},Za,{newState:0,oldState:0,source:0}),$S=Wn(JS),tM=[9,13,27,32],ff=Sa&&"CompositionEvent"in window,Do=null;Sa&&"documentMode"in document&&(Do=document.documentMode);var eM=Sa&&"TextEvent"in window&&!Do,Um=Sa&&(!ff||Do&&8<Do&&11>=Do),Om=" ",Pm=!1;function Im(e,n){switch(e){case"keyup":return tM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function nM(e,n){switch(e){case"compositionend":return Bm(n);case"keypress":return n.which!==32?null:(Pm=!0,Om);case"textInput":return e=n.data,e===Om&&Pm?null:e;default:return null}}function iM(e,n){if(gr)return e==="compositionend"||!ff&&Im(e,n)?(e=wm(),Gl=rf=Ya=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Um&&n.locale!=="ko"?null:n.data;default:return null}}var aM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!aM[e.type]:n==="textarea"}function Fm(e,n,a,r){pr?mr?mr.push(r):mr=[r]:pr=r,n=qc(n,"onChange"),0<n.length&&(a=new Xl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var No=null,Lo=null;function sM(e){A_(e,0)}function ql(e){var n=Wt(e);if(Sm(n))return e}function Hm(e,n){if(e==="change")return n}var Gm=!1;if(Sa){var hf;if(Sa){var df="oninput"in document;if(!df){var Vm=document.createElement("div");Vm.setAttribute("oninput","return;"),df=typeof Vm.oninput=="function"}hf=df}else hf=!1;Gm=hf&&(!document.documentMode||9<document.documentMode)}function km(){No&&(No.detachEvent("onpropertychange",Xm),Lo=No=null)}function Xm(e){if(e.propertyName==="value"&&ql(Lo)){var n=[];Fm(n,Lo,e,nf(e)),Rm(sM,n)}}function rM(e,n,a){e==="focusin"?(km(),No=n,Lo=a,No.attachEvent("onpropertychange",Xm)):e==="focusout"&&km()}function oM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ql(Lo)}function lM(e,n){if(e==="click")return ql(n)}function cM(e,n){if(e==="input"||e==="change")return ql(n)}function uM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ci=typeof Object.is=="function"?Object.is:uM;function Uo(e,n){if(ci(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!yt.call(n,c)||!ci(e[c],n[c]))return!1}return!0}function pf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qm(e,n){var a=Wm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Wm(a)}}function Ym(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ym(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pf(e.document)}return n}function mf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var fM=Sa&&"documentMode"in document&&11>=document.documentMode,_r=null,gf=null,Oo=null,_f=!1;function Km(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_f||_r==null||_r!==pf(r)||(r=_r,"selectionStart"in r&&mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&Uo(Oo,r)||(Oo=r,r=qc(gf,"onSelect"),0<r.length&&(n=new Xl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=_r)))}function Ds(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var vr={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},vf={},Qm={};Sa&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function Ns(e){if(vf[e])return vf[e];if(!vr[e])return e;var n=vr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qm)return vf[e]=n[a];return e}var jm=Ns("animationend"),Jm=Ns("animationiteration"),$m=Ns("animationstart"),hM=Ns("transitionrun"),dM=Ns("transitionstart"),pM=Ns("transitioncancel"),t0=Ns("transitionend"),e0=new Map,xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xf.push("scrollEnd");function Oi(e,n){e0.set(e,n),Ft(n,[e])}var mM=0;function Ma(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=zi.identifierPrefix;var a=mM++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function n0(e){if(e==null||typeof e=="string")return e;var n=null,a=zr;if(a!==null)for(var r=0;r<a.length;r++){var c=e[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function ya(e,n){return e=n0(e),n=n0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ei=[],xr=0,Sf=0;function Zl(){for(var e=xr,n=Sf=xr=0;n<e;){var a=Ei[n];Ei[n++]=null;var r=Ei[n];Ei[n++]=null;var c=Ei[n];Ei[n++]=null;var f=Ei[n];if(Ei[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}f!==0&&i0(a,c,f)}}function Kl(e,n,a,r){Ei[xr++]=e,Ei[xr++]=n,Ei[xr++]=a,Ei[xr++]=r,Sf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Mf(e,n,a,r){return Kl(e,n,a,r),Ql(e)}function Ls(e,n){return Kl(e,null,null,n),Ql(e)}function i0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ue(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Ql(e){if(50<nl)throw nl=0,Fc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Sr={};function gM(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,r){return new gM(e,n,a,r)}function yf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function a0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function jl(e,n,a,r,c,f){var x=0;if(r=e,typeof r=="function")yf(r)&&(x=1);else if(typeof r=="string")x=Xy(e,a,Xe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(r){case xt:return e=$n(31,a,n,c),e.elementType=xt,e.lanes=f,e;case k:return Us(a.children,c,f,n);case K:x=8,c|=24;break;case st:return e=$n(12,a,n,c|2),e.elementType=st,e.lanes=f,e;case $:return e=$n(13,a,n,c),e.elementType=$,e.lanes=f,e;case ht:return e=$n(19,a,n,c),e.elementType=ht,e.lanes=f,e;case Zt:case z:return e=c|32,e=$n(30,a,n,e),e.elementType=z,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case et:x=10;break t;case X:x=9;break t;case W:x=11;break t;case it:x=14;break t;case nt:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=$n(x,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function Us(e,n,a,r){return e=$n(7,e,r,n),e.lanes=a,e}function Ef(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function s0(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function Tf(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var r0=new WeakMap;function Ti(e,n){if(typeof e=="object"&&e!==null){var a=r0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:gt(n)},r0.set(e,n),n)}return{value:e,source:n,stack:gt(n)}}var Mr=[],yr=0,Jl=null,Po=0,bi=[],Ai=0,Ka=null,Ji=1,$i="";function Ta(e,n){Mr[yr++]=Po,Mr[yr++]=Jl,Jl=e,Po=n}function o0(e,n,a){bi[Ai++]=Ji,bi[Ai++]=$i,bi[Ai++]=Ka,Ka=e;var r=Ji;e=$i;var c=32-ue(r)-1;r&=~(1<<c),a+=1;var f=32-ue(n)+c;if(30<f){var x=c-c%5;f=(r&(1<<x)-1).toString(32),r>>=x,c-=x,Ji=1<<32-ue(n)+c|a<<c|r,$i=f+e}else Ji=1<<f|a<<c|r,$i=e}function $l(e){e.return!==null&&(Ta(e,1),o0(e,1,0))}function bf(e){for(;e===Jl;)Jl=Mr[--yr],Mr[yr]=null,Po=Mr[--yr],Mr[yr]=null;for(;e===Ka;)Ka=bi[--Ai],bi[Ai]=null,$i=bi[--Ai],bi[Ai]=null,Ji=bi[--Ai],bi[Ai]=null}function l0(e,n){bi[Ai++]=Ji,bi[Ai++]=$i,bi[Ai++]=Ka,Ji=n.id,$i=n.overflow,Ka=e}var An=null,$e=null,Se=!1,Qa=null,Ri=!1,Af=Error(s(519));function ja(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Io(Ti(n,e)),Af}function c0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[A]=e,n[H]=r,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<al.length;a++)be(al[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),Mm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),Em(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||D_(n.textContent,a)?(r.popover!=null&&(be("beforetoggle",n),be("toggle",n)),r.onScroll!=null&&be("scroll",n),r.onScrollEnd!=null&&be("scrollend",n),r.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||ja(e,!0)}function tc(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:An=An.return}}function Er(e){if(e!==An)return!1;if(!Se)return tc(e),Se=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||nd(e.type,e.memoizedProps)),a=!a),a&&$e&&ja(e),tc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=K_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=K_(e)}else n===27?(n=$e,ds(e.type)?(e=fd,fd=null,$e=e):$e=n):$e=An?Ci(e.stateNode.nextSibling):null;return!0}function Os(){$e=An=null,Se=!1}function Rf(){var e=Qa;return e!==null&&(ni===null?ni=e:ni.push.apply(ni,e),Qa=null),e}function Io(e){Qa===null?Qa=[e]:Qa.push(e)}var wf=ye(null),Ps=null,ba=null;function Ja(e,n,a){ie(wf,n._currentValue),n._currentValue=a}function Aa(e){e._currentValue=wf.current,ee(wf)}function ec(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Cf(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var I=0;I<n.length;I++)if(R.context===n[I]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),ec(f.return,a,e),r||(x=null);break t}f=R.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),ec(x,a,e),x=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,x=c.alternate,x!==null&&(x.lanes|=a),ec(c.return,a,e),x=c.child,x=x!==null?x.sibling:null):x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Is(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=c.type;ci(c.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(c===en.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Zr):e=[Zr])}c=c.return}return e!==null&&Cf(n,e,a,r),n.flags|=262144,e!==null}function nc(e){for(e=e.firstContext;e!==null;){if(!ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bs(e){Ps=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return u0(Ps,e)}function ic(e,n){return Ps===null&&Bs(e),u0(e,n)}function u0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ba===null){if(e===null)throw Error(s(308));ba=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ba=ba.next=n;return a}var _M=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vM=o.unstable_scheduleCallback,xM=o.unstable_NormalPriority,_n={$$typeof:et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Df(){return{controller:new _M,data:new Map,refCount:0}}function Bo(e){e.refCount--,e.refCount===0&&vM(xM,function(){e.controller.abort()})}function f0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var zo=null;function SM(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Fo=null,Nf=0,zs=0,Tr=null;function MM(e,n){if(Fo===null){var a=Fo=[];Nf=0,zs=Yh(),Tr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Nf++,n.then(h0,h0),n}function h0(){if(--Nf===0&&(zo=null,Fo!==null)){Tr!==null&&(Tr.status="fulfilled");var e=Fo;Fo=null,zs=0,Tr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yM(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var d0=_t.S;_t.S=function(e,n){if(s_=kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&MM(e,n),zo!==null)for(var a=Vr;a!==null;)f0(a,zo),a=a.next;if(a=e.types,a!==null){for(var r=Vr;r!==null;)f0(r,a),r=r.next;if(zs!==0){r=zo,r===null&&(r=zo=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}d0!==null&&d0(e,n)};var Fs=ye(null);function Lf(){var e=Fs.current;return e!==null?e:je.pooledCache}function ac(e,n){n===null?ie(Fs,Fs.current):ie(Fs,n.pool)}function p0(){var e=Lf();return e===null?null:{parent:_n._currentValue,pool:e}}var br=Error(s(460)),Uf=Error(s(474)),sc=Error(s(542)),rc={then:function(){}};function m0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function g0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,v0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,v0(e),e}throw Gs=n,br}}function Hs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Gs=a,br):a}}var Gs=null;function _0(){if(Gs===null)throw Error(s(459));var e=Gs;return Gs=null,e}function v0(e){if(e===br||e===sc)throw Error(s(483))}var Ar=null,Ho=0;function oc(e){var n=Ho;return Ho+=1,Ar===null&&(Ar=[]),g0(Ar,e,n)}function $a(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function lc(e,n){throw n.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function x0(e){function n(j,G){if(e){var at=j.deletions;at===null?(j.deletions=[G],j.flags|=16):at.push(G)}}function a(j,G){if(!e)return null;for(;G!==null;)n(j,G),G=G.sibling;return null}function r(j){for(var G=new Map;j!==null;)j.key===null?G.set(j.index,j):G.set(j.key,j),j=j.sibling;return G}function c(j,G){return j=Ea(j,G),j.index=0,j.sibling=null,j}function f(j,G,at){return j.index=at,e?(at=j.alternate,at!==null?(at=at.index,at<G?(j.flags|=2,G):at):(j.flags|=134217730,G)):(j.flags|=1048576,G)}function x(j){return e&&j.alternate===null&&(j.flags|=134217730),j}function R(j,G,at,vt){return G===null||G.tag!==6?(G=Ef(at,j.mode,vt),G.return=j,G):(G=c(G,at),G.return=j,G)}function I(j,G,at,vt){var qt=at.type;return qt===k?(j=ut(j,G,at.props.children,vt,at.key),$a(j,at),j):G!==null&&(G.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===nt&&Hs(qt)===G.type)?(G=c(G,at.props),$a(G,at),G.return=j,G):(G=jl(at.type,at.key,at.props,null,j.mode,vt),$a(G,at),G.return=j,G)}function J(j,G,at,vt){return G===null||G.tag!==4||G.stateNode.containerInfo!==at.containerInfo||G.stateNode.implementation!==at.implementation?(G=Tf(at,j.mode,vt),G.return=j,G):(G=c(G,at.children||[]),G.return=j,G)}function ut(j,G,at,vt,qt){return G===null||G.tag!==7?(G=Us(at,j.mode,vt,qt),G.return=j,G):(G=c(G,at),G.return=j,G)}function St(j,G,at){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Ef(""+G,j.mode,at),G.return=j,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return at=jl(G.type,G.key,G.props,null,j.mode,at),$a(at,G),at.return=j,at;case F:return G=Tf(G,j.mode,at),G.return=j,G;case nt:return G=Hs(G),St(j,G,at)}if(Bt(G)||Q(G))return G=Us(G,j.mode,at,null),G.return=j,G;if(typeof G.then=="function")return St(j,oc(G),at);if(G.$$typeof===et)return St(j,ic(j,G),at);lc(j,G)}return null}function Z(j,G,at,vt){var qt=G!==null?G.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return qt!==null?null:R(j,G,""+at,vt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case U:return at.key===qt?I(j,G,at,vt):null;case F:return at.key===qt?J(j,G,at,vt):null;case nt:return at=Hs(at),Z(j,G,at,vt)}if(Bt(at)||Q(at))return qt!==null?null:ut(j,G,at,vt,null);if(typeof at.then=="function")return Z(j,G,oc(at),vt);if(at.$$typeof===et)return Z(j,G,ic(j,at),vt);lc(j,at)}return null}function lt(j,G,at,vt,qt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return j=j.get(at)||null,R(G,j,""+vt,qt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case U:return j=j.get(vt.key===null?at:vt.key)||null,I(G,j,vt,qt);case F:return j=j.get(vt.key===null?at:vt.key)||null,J(G,j,vt,qt);case nt:return vt=Hs(vt),lt(j,G,at,vt,qt)}if(Bt(vt)||Q(vt))return j=j.get(at)||null,ut(G,j,vt,qt,null);if(typeof vt.then=="function")return lt(j,G,at,oc(vt),qt);if(vt.$$typeof===et)return lt(j,G,at,ic(G,vt),qt);lc(G,vt)}return null}function Ot(j,G,at,vt){for(var qt=null,Ce=null,te=G,ae=G=0,Sn=null;te!==null&&ae<at.length;ae++){te.index>ae?(Sn=te,te=null):Sn=te.sibling;var Oe=Z(j,te,at[ae],vt);if(Oe===null){te===null&&(te=Sn);break}e&&te&&Oe.alternate===null&&n(j,te),G=f(Oe,G,ae),Ce===null?qt=Oe:Ce.sibling=Oe,Ce=Oe,te=Sn}if(ae===at.length)return a(j,te),Se&&Ta(j,ae),qt;if(te===null){for(;ae<at.length;ae++)te=St(j,at[ae],vt),te!==null&&(G=f(te,G,ae),Ce===null?qt=te:Ce.sibling=te,Ce=te);return Se&&Ta(j,ae),qt}for(te=r(te);ae<at.length;ae++)Sn=lt(te,j,ae,at[ae],vt),Sn!==null&&(e&&(Oe=Sn.alternate,Oe!==null&&te.delete(Oe.key===null?ae:Oe.key)),G=f(Sn,G,ae),Ce===null?qt=Sn:Ce.sibling=Sn,Ce=Sn);return e&&te.forEach(function(vs){return n(j,vs)}),Se&&Ta(j,ae),qt}function jt(j,G,at,vt){if(at==null)throw Error(s(151));for(var qt=null,Ce=null,te=G,ae=G=0,Sn=null,Oe=at.next();te!==null&&!Oe.done;ae++,Oe=at.next()){te.index>ae?(Sn=te,te=null):Sn=te.sibling;var vs=Z(j,te,Oe.value,vt);if(vs===null){te===null&&(te=Sn);break}e&&te&&vs.alternate===null&&n(j,te),G=f(vs,G,ae),Ce===null?qt=vs:Ce.sibling=vs,Ce=vs,te=Sn}if(Oe.done)return a(j,te),Se&&Ta(j,ae),qt;if(te===null){for(;!Oe.done;ae++,Oe=at.next())Oe=St(j,Oe.value,vt),Oe!==null&&(G=f(Oe,G,ae),Ce===null?qt=Oe:Ce.sibling=Oe,Ce=Oe);return Se&&Ta(j,ae),qt}for(te=r(te);!Oe.done;ae++,Oe=at.next())Oe=lt(te,j,ae,Oe.value,vt),Oe!==null&&(e&&(Sn=Oe.alternate,Sn!==null&&te.delete(Sn.key===null?ae:Sn.key)),G=f(Oe,G,ae),Ce===null?qt=Oe:Ce.sibling=Oe,Ce=Oe);return e&&te.forEach(function(nE){return n(j,nE)}),Se&&Ta(j,ae),qt}function pe(j,G,at,vt){if(typeof at=="object"&&at!==null&&at.type===k&&at.key===null&&at.props.ref===void 0&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case U:t:{for(var qt=at.key;G!==null;){if(G.key===qt){if(qt=at.type,qt===k){if(G.tag===7){a(j,G.sibling),vt=c(G,at.props.children),$a(vt,at),vt.return=j,j=vt;break t}}else if(G.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===nt&&Hs(qt)===G.type){a(j,G.sibling),vt=c(G,at.props),$a(vt,at),vt.return=j,j=vt;break t}a(j,G);break}else n(j,G);G=G.sibling}at.type===k?(vt=Us(at.props.children,j.mode,vt,at.key),$a(vt,at),vt.return=j,j=vt):(vt=jl(at.type,at.key,at.props,null,j.mode,vt),$a(vt,at),vt.return=j,j=vt)}return x(j);case F:t:{for(qt=at.key;G!==null;){if(G.key===qt)if(G.tag===4&&G.stateNode.containerInfo===at.containerInfo&&G.stateNode.implementation===at.implementation){a(j,G.sibling),vt=c(G,at.children||[]),vt.return=j,j=vt;break t}else{a(j,G);break}else n(j,G);G=G.sibling}vt=Tf(at,j.mode,vt),vt.return=j,j=vt}return x(j);case nt:return at=Hs(at),pe(j,G,at,vt)}if(Bt(at))return Ot(j,G,at,vt);if(Q(at)){if(qt=Q(at),typeof qt!="function")throw Error(s(150));return at=qt.call(at),jt(j,G,at,vt)}if(typeof at.then=="function")return pe(j,G,oc(at),vt);if(at.$$typeof===et)return pe(j,G,ic(j,at),vt);lc(j,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,G!==null&&G.tag===6?(a(j,G.sibling),vt=c(G,at),vt.return=j,j=vt):(a(j,G),vt=Ef(at,j.mode,vt),vt.return=j,j=vt),x(j)):a(j,G)}return function(j,G,at,vt){try{Ho=0;var qt=pe(j,G,at,vt);return Ar=null,qt}catch(te){if(te===br||te===sc)throw te;var Ce=$n(29,te,null,j.mode);return Ce.lanes=vt,Ce.return=j,Ce}finally{}}}var Vs=x0(!0),S0=x0(!1),ts=!1;function Of(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function es(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ns(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Ql(e),i0(e,null,a),n}return Kl(e,r,n,a),Ql(e)}function Go(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,yo(e,a)}}function If(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bf=!1;function Vo(){if(Bf){var e=Tr;if(e!==null)throw e}}function ko(e,n,a,r){Bf=!1;var c=e.updateQueue;ts=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var I=R,J=I.next;I.next=null,x===null?f=J:x.next=J,x=I;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,R=ut.lastBaseUpdate,R!==x&&(R===null?ut.firstBaseUpdate=J:R.next=J,ut.lastBaseUpdate=I))}if(f!==null){var St=c.baseState;x=0,ut=J=I=null,R=f;do{var Z=R.lane&-536870913,lt=Z!==R.lane;if(lt?(we&Z)===Z:(r&Z)===Z){Z!==0&&Z===zs&&(Bf=!0),ut!==null&&(ut=ut.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Ot=e,jt=R;Z=n;var pe=a;switch(jt.tag){case 1:if(Ot=jt.payload,typeof Ot=="function"){St=Ot.call(pe,St,Z);break t}St=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=jt.payload,Z=typeof Ot=="function"?Ot.call(pe,St,Z):Ot,Z==null)break t;St=P({},St,Z);break t;case 2:ts=!0}}Z=R.callback,Z!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[Z]:lt.push(Z))}else lt={lane:Z,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ut===null?(J=ut=lt,I=St):ut=ut.next=lt,x|=Z;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ut===null&&(I=St),c.baseState=I,c.firstBaseUpdate=J,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),cs|=x,e.lanes=x,e.memoizedState=St}}function M0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function y0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)M0(a[e],n)}var is=ye(null),cc=ye(0);function E0(e,n){e=Na,ie(cc,e),ie(is,n),Na=e|n.baseLanes}function zf(){ie(cc,Na),ie(is,is.current)}function Ff(){Na=cc.current,ee(is),ee(cc)}var Un=ye(null),Fn=null;function as(e){var n=e.alternate;ie(On,On.current&1),ie(Un,e),Fn===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(Fn=e)}function Hf(e){ie(On,On.current),ie(Un,e),Fn===null&&(Fn=e)}function T0(e){e.tag===22?(ie(On,On.current),ie(Un,e),Fn===null&&(Fn=e)):ss()}function ss(){ie(On,On.current),ie(Un,Un.current)}function ui(e){ee(Un),Fn===e&&(Fn=null),ee(On)}var On=ye(0);function Xo(e,n){ie(Un,Un.current),ie(On,n)}function Gf(e){ee(On),ee(Un),Fn===e&&(Fn=null)}function uc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||cd(a)||ud(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ra=0,de=null,Qe=null,vn=null,fc=!1,Rr=!1,ks=!1,hc=0,Wo=0,wr=null,EM=0;function fn(){throw Error(s(321))}function Vf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ci(e[a],n[a]))return!1;return!0}function kf(e,n,a,r,c,f){return Ra=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_t.H=e===null||e.memoizedState===null?og:lg,ks=!1,f=a(r,c),ks=!1,Rr&&(f=A0(n,a,r,c)),b0(e),f}function b0(e){_t.H=xc;var n=Qe!==null&&Qe.next!==null;if(Ra=0,vn=Qe=de=null,fc=!1,Wo=0,wr=null,n)throw Error(s(300));e===null||xn||(e=e.dependencies,e!==null&&nc(e)&&(xn=!0))}function A0(e,n,a,r){de=e;var c=0;do{if(Rr&&(wr=null),Wo=0,Rr=!1,25<=c)throw Error(s(301));if(c+=1,vn=Qe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}_t.H=NM,f=n(a,r)}while(Rr);return f}function TM(){var e=_t.H,n=e.useState()[0];return n=typeof n.then=="function"?qo(n):n,e=e.useState()[0],(Qe!==null?Qe.memoizedState:null)!==e&&(de.flags|=1024),n}function Xf(){var e=hc!==0;return hc=0,e}function Wf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qf(e){if(fc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}fc=!1}Ra=0,vn=Qe=de=null,Rr=!1,Wo=hc=0,wr=null}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?de.memoizedState=vn=e:vn=vn.next=e,vn}function mn(){if(Qe===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var n=vn===null?de.memoizedState:vn.next;if(n!==null)vn=n,Qe=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},vn===null?de.memoizedState=vn=e:vn=vn.next=e}return vn}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qo(e){var n=Wo;return Wo+=1,wr===null&&(wr=[]),e=g0(wr,e,n),n=de,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,_t.H=n===null||n.memoizedState===null?og:lg),e}function pc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qo(e);if(e.$$typeof===mt)return;if(e.$$typeof===et)return Ln(e)}throw Error(s(438,String(e)))}function Yf(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=de.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dc(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Kt;return n.index++,a}function wa(e,n){return typeof n=="function"?n(e):n}function mc(e){var n=mn();return Zf(n,Qe,e)}function Zf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var R=x=null,I=null,J=n,ut=!1;do{var St=J.lane&-536870913;if(St!==J.lane?(we&St)===St:(Ra&St)===St){var Z=J.revertLane;if(Z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),St===zs&&(ut=!0);else if((Ra&Z)===Z){J=J.next,Z===zs&&(ut=!0);continue}else St={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(R=I=St,x=f):I=I.next=St,de.lanes|=Z,cs|=Z;St=J.action,ks&&a(f,St),f=J.hasEagerState?J.eagerState:a(f,St)}else Z={lane:St,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(R=I=Z,x=f):I=I.next=Z,de.lanes|=St,cs|=St;J=J.next}while(J!==null&&J!==n);if(I===null?x=f:I.next=R,!ci(f,e.memoizedState)&&(xn=!0,ut&&(a=Tr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Kf(e){var n=mn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);ci(f,n.memoizedState)||(xn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function R0(e,n,a){var r=de,c=mn(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ci((Qe||c).memoizedState,a);if(x&&(c.memoizedState=a,xn=!0),c=c.queue,Jf(D0.bind(null,r,c,e),[e]),e=c.getSnapshot!==n||x||vn!==null&&(vn.memoizedState.tag&1)!==0,Cr(e?9:8,{destroy:void 0},C0.bind(null,r,c,a,n),null),e){if(r.flags|=2048,je===null)throw Error(s(349));f||(Ra&127)!==0||w0(r,n,a)}return a}function w0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=dc(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function C0(e,n,a,r){n.value=a,n.getSnapshot=r,N0(n)&&L0(e)}function D0(e,n,a){return a(function(){N0(n)&&L0(e)})}function N0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ci(e,a)}catch{return!0}}function L0(e){var n=Ls(e,2);n!==null&&ii(n,e,2)}function Qf(e){var n=qn();if(typeof e=="function"){var a=e;if(e=a(),ks){Ne(!0);try{a()}finally{Ne(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},n}function U0(e,n,a,r){return e.baseState=a,Zf(e,Qe,typeof r=="function"?r:wa)}function bM(e,n,a,r,c){if(vc(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};_t.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,O0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function O0(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=_t.T,x={};x.types=f!==null?f.types:null,_t.T=x;try{var R=a(c,r),I=_t.S;I!==null&&I(x,R),P0(e,n,R)}catch(J){jf(e,n,J)}finally{f!==null&&x.types!==null&&(f.types=x.types),_t.T=f}}else try{f=a(c,r),P0(e,n,f)}catch(J){jf(e,n,J)}}function P0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){I0(e,n,r)},function(r){return jf(e,n,r)}):I0(e,n,a)}function I0(e,n,a){n.status="fulfilled",n.value=a,B0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,O0(e,a)))}function jf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,B0(n),n=n.next;while(n!==r)}e.action=null}function B0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function z0(e,n){return n}function F0(e,n){if(Se){var a=je.formState;if(a!==null){t:{var r=de;if(Se){if($e){e:{for(var c=$e,f=Ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){$e=Ci(c.nextSibling),r=c.data==="F!";break t}}ja(r)}r=!1}r&&(n=a[0])}}return a=qn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:z0,lastRenderedState:n},a.queue=r,a=ag.bind(null,de,r),r.dispatch=a,r=Qf(!1),f=ih.bind(null,de,!1,r.queue),r=qn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=bM.bind(null,de,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function H0(e){var n=mn();return G0(n,Qe,e)}function G0(e,n,a){if(n=Zf(e,n,z0)[0],e=mc(wa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=qo(n)}catch(x){throw x===br?sc:x}else r=n;n=mn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Cr(9,{destroy:void 0},AM.bind(null,c,a),null)),[r,f,e]}function AM(e,n){e.action=n}function V0(e){var n=mn(),a=Qe;if(a!==null)return G0(n,a,e);mn(),n=n.memoizedState,a=mn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Cr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=de.updateQueue,n===null&&(n=dc(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function k0(){return mn().memoizedState}function gc(e,n,a,r){var c=qn();de.flags|=e,c.memoizedState=Cr(1|n,{destroy:void 0},a,r===void 0?null:r)}function _c(e,n,a,r){var c=mn();r=r===void 0?null:r;var f=c.memoizedState.inst;Qe!==null&&r!==null&&Vf(r,Qe.memoizedState.deps)?c.memoizedState=Cr(n,f,a,r):(de.flags|=e,c.memoizedState=Cr(1|n,f,a,r))}function X0(e,n){gc(8390656,8,e,n)}function Jf(e,n){_c(2048,8,e,n)}function RM(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=dc(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function W0(e){var n=mn().memoizedState;return RM({ref:n,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function q0(e,n){return _c(4,2,e,n)}function Y0(e,n){return _c(4,4,e,n)}function Z0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function K0(e,n,a){a=a!=null?a.concat([e]):null,_c(4,4,Z0.bind(null,n,e),a)}function $f(){}function Q0(e,n){var a=mn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Vf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function j0(e,n){var a=mn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Vf(n,r[1]))return r[0];if(r=e(),ks){Ne(!0);try{e()}finally{Ne(!1)}}return a.memoizedState=[r,n],r}function th(e,n,a){return a===void 0||(Ra&1073741824)!==0&&(we&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=o_(),de.lanes|=e,cs|=e,a)}function J0(e,n,a,r){return ci(a,n)?a:is.current!==null?(e=th(e,a,r),ci(e,n)||(xn=!0),e):(Ra&106)===0||(Ra&1073741824)!==0&&(we&261930)===0?(xn=!0,e.memoizedState=a):(e=o_(),de.lanes|=e,cs|=e,n)}function $0(e,n,a,r,c){var f=wt.p;wt.p=f!==0&&8>f?f:8;var x=_t.T,R={};R.types=x!==null?x.types:null,_t.T=R,ih(e,!1,n,a);try{var I=c(),J=_t.S;if(J!==null&&J(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ut=yM(I,r);Yo(e,n,ut,pi(e))}else Yo(e,n,r,pi(e))}catch(St){Yo(e,n,{then:function(){},status:"rejected",reason:St},pi())}finally{wt.p=f,x!==null&&R.types!==null&&(x.types=R.types),_t.T=x}}function wM(){}function eh(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=tg(e).queue;$0(e,c,n,ke,a===null?wM:function(){return eg(e),a(r)})}function tg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ke,baseState:ke,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:ke},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function eg(e){var n=tg(e);n.next===null&&(n=e.alternate.memoizedState),Yo(e,n.next.queue,{},pi())}function nh(){return Ln(Zr)}function ng(){return mn().memoizedState}function ig(){return mn().memoizedState}function CM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();e=es(a);var r=ns(n,e,a);r!==null&&(ii(r,n,a),Go(r,n,a)),n={cache:Df()},e.payload=n;return}n=n.return}}function DM(e,n,a){var r=pi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vc(e)?sg(n,a):(a=Mf(e,n,a,r),a!==null&&(ii(a,e,r),rg(a,n,r)))}function ag(e,n,a){var r=pi();Yo(e,n,a,r)}function Yo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vc(e))sg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,R=f(x,a);if(c.hasEagerState=!0,c.eagerState=R,ci(R,x))return Kl(e,n,c,0),je===null&&Zl(),!1}catch{}finally{}if(a=Mf(e,n,c,r),a!==null)return ii(a,e,r),rg(a,n,r),!0}return!1}function ih(e,n,a,r){if(r={lane:2,revertLane:Yh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vc(e)){if(n)throw Error(s(479))}else n=Mf(e,a,r,2),n!==null&&ii(n,e,2)}function vc(e){var n=e.alternate;return e===de||n!==null&&n===de}function sg(e,n){Rr=fc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function rg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,yo(e,a)}}var xc={readContext:Ln,use:pc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn,useEffectEvent:fn},og={readContext:Ln,use:pc,useCallback:function(e,n){return qn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:X0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,gc(4194308,4,Z0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return gc(4194308,4,e,n)},useInsertionEffect:function(e,n){gc(4,2,e,n)},useMemo:function(e,n){var a=qn();n=n===void 0?null:n;var r=e();if(ks){Ne(!0);try{e()}finally{Ne(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=qn();if(a!==void 0){var c=a(n);if(ks){Ne(!0);try{a(n)}finally{Ne(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=DM.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var n=qn();return e={current:e},n.memoizedState=e},useState:function(e){e=Qf(e);var n=e.queue,a=ag.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$f,useDeferredValue:function(e,n){var a=qn();return th(a,e,n)},useTransition:function(){var e=Qf(!1);return e=$0.bind(null,de,e.queue,!0,!1),qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=de,c=qn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(we&127)!==0||w0(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,X0(D0.bind(null,r,f,e),[e]),r.flags|=2048,Cr(9,{destroy:void 0},C0.bind(null,r,f,a,n),null),a},useId:function(){var e=qn(),n=je.identifierPrefix;if(Se){var a=$i,r=Ji;a=(r&~(1<<32-ue(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=EM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:nh,useFormState:F0,useActionState:F0,useOptimistic:function(e){var n=qn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ih.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yf,useCacheRefresh:function(){return qn().memoizedState=CM.bind(null,de)},useEffectEvent:function(e){var n=qn(),a={impl:e};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},lg={readContext:Ln,use:pc,useCallback:Q0,useContext:Ln,useEffect:Jf,useImperativeHandle:K0,useInsertionEffect:q0,useLayoutEffect:Y0,useMemo:j0,useReducer:mc,useRef:k0,useState:function(){return mc(wa)},useDebugValue:$f,useDeferredValue:function(e,n){var a=mn();return J0(a,Qe.memoizedState,e,n)},useTransition:function(){var e=mc(wa)[0],n=mn().memoizedState;return[typeof e=="boolean"?e:qo(e),n]},useSyncExternalStore:R0,useId:ng,useHostTransitionStatus:nh,useFormState:H0,useActionState:H0,useOptimistic:function(e,n){var a=mn();return U0(a,Qe,e,n)},useMemoCache:Yf,useCacheRefresh:ig,useEffectEvent:W0},NM={readContext:Ln,use:pc,useCallback:Q0,useContext:Ln,useEffect:Jf,useImperativeHandle:K0,useInsertionEffect:q0,useLayoutEffect:Y0,useMemo:j0,useReducer:Kf,useRef:k0,useState:function(){return Kf(wa)},useDebugValue:$f,useDeferredValue:function(e,n){var a=mn();return Qe===null?th(a,e,n):J0(a,Qe.memoizedState,e,n)},useTransition:function(){var e=Kf(wa)[0],n=mn().memoizedState;return[typeof e=="boolean"?e:qo(e),n]},useSyncExternalStore:R0,useId:ng,useHostTransitionStatus:nh,useFormState:V0,useActionState:V0,useOptimistic:function(e,n){var a=mn();return Qe!==null?U0(a,Qe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yf,useCacheRefresh:ig,useEffectEvent:W0};function ah(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sh={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=pi(),c=es(r);c.payload=n,a!=null&&(c.callback=a),n=ns(e,c,r),n!==null&&(ii(n,e,r),Go(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=pi(),c=es(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ns(e,c,r),n!==null&&(ii(n,e,r),Go(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=pi(),r=es(a);r.tag=2,n!=null&&(r.callback=n),n=ns(e,r,a),n!==null&&(ii(n,e,a),Go(n,e,a))}};function cg(e,n,a,r,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!Uo(a,r)||!Uo(c,f):!0}function ug(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&sh.enqueueReplaceState(n,n.state,null)}function Xs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function fg(e){Yl(e)}function hg(e){console.error(e)}function dg(e){Yl(e)}function Sc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function pg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function rh(e,n,a){return a=es(a),a.tag=3,a.payload={element:null},a.callback=function(){Sc(e,n)},a}function mg(e){return e=es(e),e.tag=3,e}function gg(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){pg(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){pg(n,a,r),typeof c!="function"&&(us===null?us=new Set([this]):us.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function LM(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Is(n,a,c,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Fn===null?Gc():a.alternate===null&&hn===0&&(hn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===rc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Xh(e,r,c)),!1;case 22:return a.flags|=65536,r===rc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Xh(e,r,c)),!1}throw Error(s(435,a.tag))}return Xh(e,r,c),Gc(),!1}if(Se)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Af&&(e=Error(s(422),{cause:r}),Io(Ti(e,a)))):(r!==Af&&(n=Error(s(423),{cause:r}),Io(Ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Ti(r,a),c=rh(e.stateNode,r,c),If(e,c),hn!==4&&(hn=2)),!1;var f=Error(s(520),{cause:r});if(f=Ti(f,a),el===null?el=[f]:el.push(f),hn!==4&&(hn=2),n===null)return!0;r=Ti(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=rh(a.stateNode,r,e),If(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(us===null||!us.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=mg(c),gg(c,e,a,r),If(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var oh=Error(s(461)),xn=!1;function En(e,n,a,r){n.child=e===null?S0(n,null,a,r):Vs(n,e.child,a,r)}function _g(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var R in r)R!=="ref"&&(x[R]=r[R])}else x=r;return Bs(n),r=kf(e,n,a,x,f,c),R=Xf(),e!==null&&!xn?(Wf(e,n,c),Ca(e,n,c)):(Se&&R&&$l(n),n.flags|=1,En(e,n,r,c),n.child)}function vg(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!yf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,xg(e,n,f,r,c)):(e=jl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!mh(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(x,r)&&e.ref===n.ref)return Ca(e,n,c)}return n.flags|=1,e=Ea(f,r),e.ref=n.ref,e.return=n,n.child=e}function xg(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Uo(f,r)&&e.ref===n.ref)if(xn=!1,n.pendingProps=r=f,mh(e,c))(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,Ca(e,n,c)}return lh(e,n,a,r,c)}function Sg(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Mg(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ac(n,f!==null?f.cachePool:null),f!==null?E0(n,f):zf(),T0(n);else return r=n.lanes=536870912,Mg(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ac(n,f.cachePool),E0(n,f),ss(),n.memoizedState=null):(e!==null&&ac(n,null),zf(),ss());return En(e,n,c,a),n.child}function Zo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Mg(e,n,a,r,c){var f=Lf();return f=f===null?null:{parent:_n._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ac(n,null),zf(),T0(n),e!==null&&Is(e,n,r,!0),n.childLanes=c,null}function Mc(e,n){return n=yc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function yg(e,n,a){return Vs(n,e.child,null,a),e=Mc(n,n.pendingProps),e.flags|=2,ui(n),n.memoizedState=null,e}function UM(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Se){if(r.mode==="hidden")return e=Mc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Zo(null,e);if(Hf(n),(e=$e)?(e=Z_(e,Ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ka!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},a=s0(e),a.return=n,n.child=a,An=n,$e=null)):e=null,e===null)throw ja(n);return n.lanes=536870912,null}return Mc(n,r)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Hf(n),c)if(n.flags&256)n.flags&=-257,n=yg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(xn||Is(e,n,a,!1),c=(a&e.childLanes)!==0,xn||c){if(is.current===null){if(r=je,r!==null&&(x=Eo(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Ls(e,x),ii(r,e,x),oh;Gc()}n=yg(e,n,a)}else e=f.treeContext,$e=Ci(x.nextSibling),An=n,Se=!0,Qa=null,Ri=!1,e!==null&&l0(n,e),n=Mc(n,r),n.flags|=134221824;return n}return e=Ea(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function lh(e,n,a,r,c){return Bs(n),a=kf(e,n,a,r,void 0,c),r=Xf(),e!==null&&!xn?(Wf(e,n,c),Ca(e,n,c)):(Se&&r&&$l(n),n.flags|=1,En(e,n,a,c),n.child)}function Eg(e,n,a,r,c,f){return Bs(n),n.updateQueue=null,a=A0(n,r,a,c),b0(e),r=Xf(),e!==null&&!xn?(Wf(e,n,f),Ca(e,n,f)):(Se&&r&&$l(n),n.flags|=1,En(e,n,a,f),n.child)}function Tg(e,n,a,r,c){if(Bs(n),n.stateNode===null){var f=Sr,x=a.contextType;typeof x=="object"&&x!==null&&(f=Ln(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Of(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Ln(x):Sr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(ah(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&sh.enqueueReplaceState(f,f.state,null),ko(n,r,f,c),Vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,I=Xs(a,R);f.props=I;var J=f.context,ut=a.contextType;x=Sr,typeof ut=="object"&&ut!==null&&(x=Ln(ut));var St=a.getDerivedStateFromProps;ut=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||J!==x)&&ug(n,f,r,x),ts=!1;var Z=n.memoizedState;f.state=Z,ko(n,r,f,c),Vo(),J=n.memoizedState,R||Z!==J||ts?(typeof St=="function"&&(ah(n,a,St,r),J=n.memoizedState),(I=ts||cg(n,a,I,r,Z,J,x))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=x,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Pf(e,n),x=n.memoizedProps,ut=Xs(a,x),f.props=ut,St=n.pendingProps,Z=f.context,J=a.contextType,I=Sr,typeof J=="object"&&J!==null&&(I=Ln(J)),R=a.getDerivedStateFromProps,(J=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==St||Z!==I)&&ug(n,f,r,I),ts=!1,Z=n.memoizedState,f.state=Z,ko(n,r,f,c),Vo();var lt=n.memoizedState;x!==St||Z!==lt||ts||e!==null&&e.dependencies!==null&&nc(e.dependencies)?(typeof R=="function"&&(ah(n,a,R,r),lt=n.memoizedState),(ut=ts||cg(n,a,ut,r,Z,lt,I)||e!==null&&e.dependencies!==null&&nc(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=I,r=ut):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Dr(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Vs(n,e.child,null,c),n.child=Vs(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ca(e,n,c),e}function bg(e,n,a,r){return Os(),n.flags|=256,En(e,n,a,r),n.child}var ch={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uh(e){return{baseLanes:e,cachePool:p0()}}function fh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function Ag(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(c?as(n):ss(),(e=$e)?(e=Z_(e,Ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ka!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},a=s0(e),a.return=n,n.child=a,An=n,$e=null)):e=null,e===null)throw ja(n);return ud(e)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(ss(),c=n.mode,f=yc({mode:"hidden",children:f},c),r=Us(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=uh(a),r.childLanes=fh(e,x,a),n.memoizedState=ch,Zo(null,r)):(as(n),hh(n,f))}var R=e.memoizedState;if(R!==null){var I=R.dehydrated;if(I!==null)return OM(e,n,f,x,r,I,R,a)}return c?(ss(),c=r.fallback,f=n.mode,R=e.child,I=R.sibling,r=Ea(R,{mode:"hidden",children:r.children}),r.subtreeFlags=R.subtreeFlags&1206910976,I!==null?c=Ea(I,c):(c=Us(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Zo(null,r),r=n.child,c=e.child.memoizedState,c===null?c=uh(a):(f=c.cachePool,f!==null?(R=_n._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=p0(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=fh(e,x,a),n.memoizedState=ch,Zo(e.child,r)):(as(n),a=e.child,e=a.sibling,a=Ea(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function hh(e,n){return n=yc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function yc(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function Ec(e,n,a){return Vs(n,e.child,null,a),e=hh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function OM(e,n,a,r,c,f,x,R){if(a)return n.flags&256?(as(n),n.flags&=-257,Ec(e,n,R)):n.memoizedState!==null?(ss(),n.child=e.child,n.flags|=128,null):(ss(),f=c.fallback,x=n.mode,c=yc({mode:"visible",children:c.children},x),f=Us(f,x,R,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Vs(n,e.child,null,R),c=n.child,c.memoizedState=uh(R),c.childLanes=fh(e,r,R),n.memoizedState=ch,Zo(null,c));if(as(n),ud(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Io({value:c,source:null,stack:null})),Ec(e,n,R)}if(xn||Is(e,n,R,!1),r=(R&e.childLanes)!==0,xn||r){if(is.current!==null)return Ec(e,n,R);if(r=je,r!==null&&(c=Eo(r,R),c!==0&&c!==x.retryLane))throw x.retryLane=c,Ls(e,c),ii(r,e,c),oh;return cd(f)||Gc(),Ec(e,n,R)}return cd(f)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,$e=Ci(f.nextSibling),An=n,Se=!0,Qa=null,Ri=!1,e!==null&&l0(n,e),n=hh(n,c.children),n.flags|=134221824,n)}function Rg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ec(e.return,n,a)}function wg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&uc(a)===null&&(n=e),e=e.sibling}return n}function Tc(e,n,a,r,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function dh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function ph(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var x=On.current;if(n.flags&128)return Xo(n,x),null;var R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,Xo(n,x),c==="backwards"&&e!==null?(dh(e),En(e,n,r,a),dh(e)):En(e,n,r,a),r=Se?Po:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rg(e,a,n);else if(e.tag===19)Rg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=wg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,dh(n)),Tc(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&uc(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Tc(n,!0,a,null,f,r);break;case"together":Tc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=wg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Tc(n,!1,c,a,f,r)}return n.child}function Cg(e,n,a){var r=n.pendingProps;return Ja(n,n.type,r.value),En(e,n,r.children,a),n.child}function Ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),cs|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Is(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function mh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&nc(e)))}function PM(e,n,a){switch(n.tag){case 3:Y(n,n.stateNode.containerInfo),Ja(n,_n,e.memoizedState.cache),Os();break;case 27:case 5:Pe(n);break;case 4:Y(n,n.stateNode.containerInfo);break;case 10:Ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return as(n),n.flags|=128,null;r=Is(e,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Ag(e,n,a):(as(n),e=Ca(e,n,a),e!==null?e.sibling:null)}as(n);break;case 19:if(n.flags&128)return ph(e,n,a);if(c=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Is(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return ph(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Xo(n,On.current),r)break;return null;case 22:return n.lanes=0,Sg(e,n,a,n.pendingProps);case 24:Ja(n,_n,e.memoizedState.cache)}return Ca(e,n,a)}function Dg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)xn=!0;else{if(!mh(e,a)&&(n.flags&128)===0)return xn=!1,PM(e,n,a);xn=(e.flags&131072)!==0}else xn=!1,Se&&(n.flags&1048576)!==0&&o0(n,Po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Hs(n.elementType),n.type=e,typeof e=="function")yf(e)?(r=Xs(e,r),n.tag=1,n=Tg(null,n,e,r,a)):(n.tag=0,n=lh(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===W){n.tag=11,n=_g(null,n,e,r,a);break t}else if(c===it){n.tag=14,n=vg(null,n,e,r,a);break t}else if(c===et){n.tag=10,n.type=e,n=Cg(null,n,a);break t}}throw n=bt(e)||e,Error(s(306,n,""))}}return n;case 0:return lh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Xs(r,n.pendingProps),Tg(e,n,r,c,a);case 3:t:{if(Y(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Pf(e,n),ko(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Ja(n,_n,r),r!==f.cache&&Cf(n,[_n],a,!0),Vo(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bg(e,n,r,a);break t}else if(r!==c){c=Ti(Error(s(424)),n),Io(c),n=bg(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Ci(e.firstChild),An=n,Se=!0,Qa=null,Ri=!0,a=S0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Os(),r===c){n=Ca(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return Dr(e,n),e===null?(a=ev(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=O_(n.type,n.pendingProps,Ie.current,n)):n.memoizedState=ev(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pe(n),e===null&&Se&&(r=n.stateNode=j_(n.type,n.pendingProps,Ie.current),An=n,Ri=!0,c=$e,ds(n.type)?(fd=c,$e=Ci(r.firstChild)):$e=c),En(e,n,n.pendingProps.children,a),Dr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((c=r=$e)&&(r=Cy(r,n.type,n.pendingProps,Ri),r!==null?(n.stateNode=r,An=n,$e=Ci(r.firstChild),Ri=!1,c=!0):c=!1),c||ja(n)),Pe(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,r=f.children,nd(c,f)?r=null:x!==null&&nd(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=kf(e,n,TM,null,null,a),Zr._currentValue=c),Dr(e,n),En(e,n,r,a),n.child;case 6:return e===null&&Se&&((e=a=$e)&&(a=Dy(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,An=n,$e=null,e=!0):e=!1),e||ja(n)),null;case 13:return Ag(e,n,a);case 4:return Y(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Vs(n,null,r,a):En(e,n,r,a),n.child;case 11:return _g(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Dr(e,n),En(e,n,r,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return Cg(e,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Bs(n),c=Ln(c),r=r(c),n.flags|=1,En(e,n,r,a),n.child;case 14:return vg(e,n,n.type,n.pendingProps,a);case 15:return xg(e,n,n.type,n.pendingProps,a);case 19:return ph(e,n,a);case 31:return UM(e,n,a);case 22:return Sg(e,n,a,n.pendingProps);case 24:return Bs(n),r=Ln(_n),e===null?(c=Lf(),c===null&&(c=je,f=Df(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Of(n),Ja(n,_n,c)):((e.lanes&a)!==0&&(Pf(e,n),ko(n,null,null,a),Vo()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ja(n,_n,r)):(r=f.cache,Ja(n,_n,r),r!==c.cache&&Cf(n,[_n],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Se&&$l(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Dr(e,n),En(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Da(e){e.flags|=4}function gh(e,n,a,r,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?sv(n,r):sv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(f_())e.flags|=8192;else throw Gs=rc,Uf}else e.flags&=-16777217}function Ng(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rv(n))if(f_())e.flags|=8192;else throw Gs=rc,Uf}function bc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Mo():536870912,e.lanes|=n,Pr|=n)}function Ko(e,n){if(!Se)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function IM(e,n,a){var r=n.pendingProps;switch(bf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Aa(_n),an(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Er(n)?Da(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Rf())),tn(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Da(n),f!==null?(tn(n),Ng(n,f)):(tn(n),gh(n,c,null,r,a))):f?f!==e.memoizedState?(Da(n),tn(n),Ng(n,f)):(tn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Da(n),tn(n),gh(n,c,e,r,a)),null;case 27:if(O(n),a=Ie.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Da(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}e=Xe.current,Er(n)?c0(n):(e=j_(c,r,a),n.stateNode=e,Da(n))}return tn(n),n.subtreeFlags&=-33554433,null;case 5:if(O(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Da(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}if(f=Xe.current,Er(n))c0(n);else{var x=rl(Ie.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(c,{is:r.is}):x.createElement(c)}}f[A]=n,f[H]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(In(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Da(n)}}return tn(n),n.subtreeFlags&=-33554433,gh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Da(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Ie.current,Er(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=An,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[A]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||D_(e.nodeValue,a)),e||ja(n,!0)}else e=rl(e).createTextNode(r),e[A]=n,n.stateNode=e}return tn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Er(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[A]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),e=!1}else a=Rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Er(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[A]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),c=!1}else c=Rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),bc(n,n.updateQueue),tn(n),null);case 4:return an(),e===null&&jh(n.stateNode.containerInfo),n.flags|=67108864,tn(n),null;case 10:return Aa(n.type),tn(n),null;case 19:if(Gf(n),r=n.memoizedState,r===null)return tn(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Ko(r,!1);else{if(hn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=uc(e),f!==null){for(n.flags|=128,Ko(r,!1),e=f.updateQueue,n.updateQueue=e,bc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)a0(a,e),a=a.sibling;return Xo(n,On.current&1|2),Se&&Ta(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&kt()>Bc&&(n.flags|=128,c=!0,Ko(r,!1),n.lanes=4194304)}else{if(!c)if(e=uc(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,bc(n,e),Ko(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!Se)return tn(n),null}else 2*kt()-r.renderingStartTime>Bc&&a!==536870912&&(n.flags|=128,c=!0,Ko(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){e=r.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=kt(),e.sibling=null,f=On.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Se?Xo(n,f):(a=f,ie(Un,n),ie(On,a),Fn===null&&(Fn=n)),Se&&Ta(n,r.treeForkCount),e}return tn(n),null;case 22:case 23:return ui(n),Ff(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&bc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ee(Fs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Aa(_n),tn(n),null;case 25:return null;case 30:return n.flags|=33554432,tn(n),null}throw Error(s(156,n.tag))}function BM(e,n){switch(bf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Aa(_n),an(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return O(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(s(340));Os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ui(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Gf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return an(),null;case 10:return Aa(n.type),null;case 22:case 23:return ui(n),Ff(),e!==null&&ee(Fs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Aa(_n),null;case 25:return null;default:return null}}function Lg(e,n){switch(bf(n),n.tag){case 3:Aa(_n),an();break;case 26:case 27:case 5:O(n);break;case 4:an();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:Gf(n);break;case 10:Aa(n.type);break;case 22:case 23:ui(n),Ff(),e!==null&&ee(Fs);break;case 24:Aa(_n)}}function Qo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==c)}}catch(R){qe(n,n.return,R)}}function rs(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var x=r.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,c=n;var I=a,J=R;try{J()}catch(ut){qe(c,I,ut)}}}r=r.next}while(r!==f)}}catch(ut){qe(n,n.return,ut)}}function Ug(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{y0(n,a)}catch(r){qe(e,e.return,r)}}}function Og(e,n,a){a.props=Xs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){qe(e,n,r)}}function ta(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var c=e.stateNode,f=Ma(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=G_(f)),r=c.ref;break;case 7:if(e.stateNode===null){var x=new mi(e);g(e.child,!1,Ry,x,void 0,void 0),e.stateNode=x}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(R){qe(e,n,R)}}function Pn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){qe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){qe(e,n,c)}else a.current=null}function Ac(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Y_(e.stateNode,n[a])}function Pg(e){for(var n=e.return;n!==null&&(vh(n)&&Y_(e.stateNode,n.stateNode),!_h(n));)n=n.return}function jo(e){for(var n=e.return;n!==null&&(vh(n)&&wy(e.stateNode,n.stateNode),!_h(n));)n=n.return}function _h(e){return e.tag===5||e.tag===3||e.tag===27}function vh(e){return e&&e.tag===7&&e.stateNode!==null}function xh(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){qe(e,e.return,c)}}function Sh(e,n,a){try{var r=e.stateNode;cy(r,e.type,a,n),r[H]=n}catch(c){qe(e,e.return,c)}}function Ig(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ds(e.type)||e.tag===4}function Mh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ds(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yh(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji)),Ac(e,r),xe=!0;else if(c!==4&&(c===27&&(Ac(e,r),r=null,ds(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(yh(e,n,a,r),e=e.sibling;e!==null;)yh(e,n,a,r),e=e.sibling}function Rc(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Ac(e,r),xe=!0;else if(c!==4&&(c===27&&(Ac(e,r),r=null,ds(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Rc(e,n,a,r),e=e.sibling;e!==null;)Rc(e,n,a,r),e=e.sibling}function Bg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);In(n,r,a),n[A]=e,n[H]=a}catch(f){qe(e,e.return,f)}}var wc=!1,fi=null;function zg(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(wc=!0)}var ea=null;function Fg(){var e=ea;return ea=null,e}var ti=0;function Nr(e,n,a,r,c){return ti=0,Hg(e.child,n,a,r,c)}function Hg(e,n,a,r,c){for(var f=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(r!==null){var R=sd(x);r.push(R),R.view&&(f=!0)}else f||sd(x).view&&(f=!0);wc=!0,F_(x,ti===0?n:n+"_"+ti,a),ti++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||Hg(e.child,n,a,r,c)&&(f=!0));e=e.sibling}return f}function na(e,n){for(;e!==null;)e.tag===5?H_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||na(e.child,n)),e=e.sibling}function Cc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Cc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ya(n.default,n.share),n!=="none"&&(Nr(e,a,n,null,!1)||na(e.child,!1))}e=e.sibling}}function Eh(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,c=Ma(r,a),f=ya(r.default,a.paired?r.share:r.enter);f!=="none"?Nr(e,c,f,null,!1)?(Cc(e),a.paired||n||Fr(e,r.onEnter)):na(e.child,!1):Cc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Eh(e,n),e=e.sibling;else Cc(e)}function Th(e){if(fi!==null&&fi.size!==0){var n=fi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=ya(a.default,a.share);if(f!=="none"&&(Nr(e,r,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Fr(e,a.onShare)):na(e.child,!1)),n.delete(r),n.size===0)break}}}Th(e)}e=e.sibling}}}function bh(e){if(e.tag===30){var n=e.memoizedProps,a=Ma(n,e.stateNode),r=fi!==null?fi.get(a):void 0,c=ya(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Nr(e,a,c,null,!1)?r!==void 0?(c=e.stateNode,r.paired=c,c.paired=r,fi.delete(a),Fr(e,n.onShare)):Fr(e,n.onExit):na(e.child,!1)),fi!==null&&Th(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)bh(e),e=e.sibling;else fi!==null&&Th(e)}function Gg(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=Ma(n,e.stateNode);n=ya(n.default,n.update),e.flags&=-5,n!=="none"&&Nr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Gg(e);e=e.sibling}}function Ah(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,na(e.child,!1))}Ah(e)}e=e.sibling}}function Dc(e){if(e.tag===30)e.stateNode.paired=null,na(e.child,!1),Ah(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Dc(e),e=e.sibling;else Ah(e)}function Vg(e){for(e=e.child;e!==null;)e.tag===30?na(e.child,!1):(e.subtreeFlags&33554432)!==0&&Vg(e),e=e.sibling}function Rh(e,n,a,r,c,f,x){for(var R=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(f!==null&&ti<f.length){var J=f[ti],ut=sd(I);(J.view||ut.view)&&(R=!0);var St;if(St=(e.flags&4)===0)if(ut.clip)St=!0;else{St=J.rect;var Z=ut.rect;St=St.y!==Z.y||St.x!==Z.x||St.height!==Z.height||St.width!==Z.width}St&&(e.flags|=4),ut.abs?ut=!J.abs:(J=J.rect,ut=ut.rect,ut=J.height!==ut.height||J.width!==ut.width),ut&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&F_(I,ti===0?a:a+"_"+ti,c),R&&(e.flags&4)!==0||(ea===null&&(ea=[]),ea.push(I,ti===0?r:r+"_"+ti,n.memoizedProps)),ti++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:Rh(e,n.child,a,r,c,f,x)&&(R=!0));n=n.sibling}return R}function kg(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,c=Ma(a,r),f=ya(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,r=e;var R=e.child;ti=0,c=Rh(r,R,c,c,f,x,!1),(e.flags&4)!==0&&c&&Fr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&kg(e);e=e.sibling}}var Rn=!1,Ge=!1,ia=!1,wh=!1,Xg=typeof WeakSet=="function"?WeakSet:Set,wn=null,aa=!1,Jo=!1,Nc=!1,Ch=!1;function zM(e,n,a){if(e=e.containerInfo,td=Kr,e=Zm(e),mf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{r.nodeType,x.nodeType}catch{r=null;break t}var R=0,I=-1,J=-1,ut=0,St=0,Z=e,lt=null;e:for(;;){for(var Ot;Z!==r||f!==0&&Z.nodeType!==3||(I=R+f),Z!==x||c!==0&&Z.nodeType!==3||(J=R+c),Z.nodeType===3&&(R+=Z.nodeValue.length),(Ot=Z.firstChild)!==null;)lt=Z,Z=Ot;for(;;){if(Z===e)break e;if(lt===r&&++ut===f&&(I=R),lt===x&&++St===c&&(J=R),(Ot=Z.nextSibling)!==null)break;Z=lt,lt=Z.parentNode}Z=Ot}r=I===-1||J===-1?null:{start:I,end:J}}else r=null}r=r||{start:0,end:0}}else r=null;for(ed={focusedElem:e,selectionRange:r},Kr=!1,a=(a&335544064)===a,wn=n,n=a?9270:1024;wn!==null;){if(e=wn,a&&(r=e.deletions,r!==null))for(f=0;f<r.length;f++)a&&bh(r[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&zg(e),Lc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&bh(r),Lc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&zg(e),Lc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,wn=r):(a&&Gg(e),Lc(a))}}fi=null}function Lc(e){for(;wn!==null;){var n=wn,a=e,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var x=Xs(n.type,c);a=f.getSnapshotBeforeUpdate(x,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){qe(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)ld(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":ld(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=Ma(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=ya(c.default,c.update),c!=="none"&&Nr(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,wn=r;break}wn=n.return}}function Wg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),r&4&&Qo(5,a);break;case 1:if(sa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){qe(a,a.return,x)}else{var c=Xs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){qe(a,a.return,x)}}r&64&&Ug(a),r&512&&ta(a,a.return);break;case 3:if(sa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{y0(e,n)}catch(x){qe(a,a.return,x)}}break;case 27:n===null&&r&4&&Bg(a);case 26:case 5:sa(e,a),n===null&&r&4&&xh(a),r&512&&ta(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),r&4&&Kg(e,a);break;case 13:sa(e,a),r&4&&Qg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=QM.bind(null,a),Ny(e,a))));break;case 22:if(r=a.memoizedState!==null||Rn,!r){var f=n!==null&&n.memoizedState!==null||Ge;n=Rn,c=Ge,Rn=r,(Ge=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Bi(e,a,r)):sa(e,a),Rn=n,Ge=c}break;case 30:sa(e,a),r&512&&ta(a,a.return);break;case 7:r&512&&ta(a,a.return);default:sa(e,a)}}function Dh(e,n){for(e=e.child;e!==null;)qg(e,n),e=e.sibling}function qg(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,x=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(I){qe(e,e.return,I)}Nh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,xe=!0}catch(I){qe(e,e.return,I)}break;case 18:try{var R=e.stateNode;n?z_(R,!0):z_(e.stateNode,!1)}catch(I){qe(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&Dh(e,n);break;default:Dh(e,n)}}function Nh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,r=n;switch(a.tag){case 4:qg(a,r);break t;case 22:a.memoizedState===null&&Nh(a,r);break t;default:Nh(a,r)}}e=e.sibling}}function Yg(e){var n=e.alternate;n!==null&&(e.alternate=null,Yg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,ei=!1;function Pi(e,n,a){for(a=a.child;a!==null;)Zg(e,n,a),a=a.sibling}function Zg(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:Ge||Pn(a,n),Pi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Pn(a,n),jo(a);var r=nn,c=ei;ds(a.type)&&(nn=a.stateNode,ei=!1),Pi(e,n,a),J_(a.stateNode,a.type,a.memoizedProps),nn=r,ei=c;break;case 5:Ge||Pn(a,n),jo(a);case 6:if(a.tag===6&&jo(a),r=nn,c=ei,nn=null,Pi(e,n,a),nn=r,ei=c,nn!==null)if(ei)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode),xe=!0}catch(f){qe(a,n,f)}else try{nn.removeChild(a.stateNode),xe=!0}catch(f){qe(a,n,f)}break;case 18:nn!==null&&(ei?(e=nn,B_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qr(e)):B_(nn,a.stateNode));break;case 4:r=nn,c=ei,nn=a.stateNode.containerInfo,ei=!0,Pi(e,n,a),nn=r,ei=c;break;case 0:case 11:case 14:case 15:rs(2,a,n),Ge||rs(4,a,n),Pi(e,n,a);break;case 1:Ge||(Pn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Og(a,n,r)),Pi(e,n,a);break;case 21:Pi(e,n,a);break;case 22:Ge=(r=Ge)||a.memoizedState!==null,Pi(e,n,a),Ge=r;break;case 30:Pn(a,n),Pi(e,n,a);break;case 7:Ge||Pn(a,n),Pi(e,n,a);break;default:Pi(e,n,a)}}function Kg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(a){qe(n,n.return,a)}}}function Qg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(a){qe(n,n.return,a)}}function FM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Xg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Xg),n;default:throw Error(s(435,e.tag))}}function Uc(e,n){var a=FM(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=jM.bind(null,e,r);r.then(c,c)}})}function Yn(e,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],x=e,R=n,I=R;t:for(;I!==null;){switch(I.tag){case 27:if(ds(I.type)){nn=I.stateNode,ei=!1;break t}break;case 5:nn=I.stateNode,ei=!1;break t;case 3:case 4:nn=I.stateNode.containerInfo,ei=!0;break t}I=I.return}if(nn===null)throw Error(s(160));Zg(x,R,f),nn=null,ei=!1,x=f.alternate,x!==null&&(x.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)jg(n,e,a),n=n.sibling}var Ii=null;function jg(e,n,a){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var x=r[f];x.ref.impl=x.nextImpl}Yn(n,e,a),Zn(e),c&4&&(rs(3,e,e.return),Qo(3,e),rs(5,e,e.return));break;case 1:Yn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),c&64&&Rn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ii,Yn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(Rn)e.stateNode=O_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Ut]||r[A]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),In(r,n,a),r[A]=e,ve(r),n=r;break t;case"link":if(f=av("link","href",c).get(n+(a.href||""))){for(x=0;x<f.length;x++)if(r=f[x],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(x,1);break e}}r=c.createElement(n),In(r,n,a),c.head.appendChild(r);break;case"meta":if(f=av("meta","content",c).get(n+(a.content||""))){for(x=0;x<f.length;x++)if(r=f[x],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(x,1);break e}}r=c.createElement(n),In(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[A]=e,ve(r),n=r}e.stateNode=n}else Rn||md(f,e.type,e.stateNode);else e.stateNode=iv(f,a,e.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):c.count--,a===null?Rn||md(f,e.type,e.stateNode):iv(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Sh(e,e.memoizedProps,r.memoizedProps);break;case 27:Yn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),r!==null&&c&4&&Sh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(f=ia,ia=!1,Yn(n,e,a),ia=f,Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),e.flags&32){n=e.stateNode;try{dr(n,""),xe=!0}catch(ut){qe(e,e.return,ut)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Sh(e,n,r!==null?r.memoizedProps:n)),c&1024&&(wh=!0);break;case 6:if(Yn(n,e,a),Zn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,xe=!0}catch(ut){qe(e,e.return,ut)}}break;case 3:if(xe=!1,Zc=null,f=Ii,Ii=ol(n.containerInfo),Yn(n,e,a),Ii=f,Zn(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Qr(n.containerInfo)}catch(ut){qe(e,e.return,ut)}wh&&(wh=!1,Jg(e)),xe=!1;break;case 4:c=ia,ia=Rn,r=ze(),f=Ii,Ii=ol(e.stateNode.containerInfo),Yn(n,e,a),Zn(e),Ii=f,xe&&Jo&&(Nc=!0),xe=r,ia=c;break;case 12:Yn(n,e,a),Zn(e);break;case 31:Yn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Uc(e,n)));break;case 13:Yn(n,e,a),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ic=kt()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Uc(e,n)));break;case 22:f=e.memoizedState!==null,x=r!==null&&r.memoizedState!==null;var R=Rn,I=Ge,J=ia;Rn=R||f,ia=J||f,Ge=I||x,Yn(n,e,a),Ge=I,ia=J,Rn=R,Zn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||x||Rn||Ge||(n=x||Ge,a=Rn,r=Ge,Rn=f||Rn,Ge=n,os(e,2),Rn=a,Ge=r),!f&&ia||Dh(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Uc(e,a))));break;case 19:Yn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Uc(e,n)));break;case 30:c&512&&(Ge||r===null||Pn(r,r.return)),c=ze(),f=Jo,x=(a&335544064)===a,R=e.memoizedProps,Jo=x&&ya(R.default,R.update)!=="none",Yn(n,e,a),Zn(e),x&&r!==null&&xe&&(e.flags|=4),Jo=f,xe=c;break;case 21:break;case 7:c&512&&(Ge||r===null||Pn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Yn(n,e,a),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Ig(r)){a=r;break}r=r.return}r=null;for(var c=e.return;c!==null;){if(vh(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(_h(c))break;c=c.return}var x=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var R=a.stateNode,I=Mh(e);Rc(e,I,R,x);break;case 5:var J=a.stateNode;a.flags&32&&(dr(J,""),a.flags&=-33);var ut=Mh(e);Rc(e,ut,J,x);break;case 3:case 4:var St=a.stateNode.containerInfo,Z=Mh(e);yh(e,Z,St,x);break;default:throw Error(s(161))}}catch(lt){qe(e,e.return,lt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Jg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Jg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Kr=!0,n.reset(),Kr=!1),e=e.sibling}}function Lr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)$g(n,e),n=n.sibling;else kg(n)}function $g(e,n){var a=e.alternate;if(a===null)Eh(e,!1);else switch(e.tag){case 3:if(Ch=aa=!1,Fg(),Lr(n,e),!aa&&!Nc){if(e=ea,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var c=e[r+1];H_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ch=!0}ea=null;break;case 5:Lr(n,e);break;case 4:r=aa,aa=!1,Lr(n,e),aa&&(Nc=!0),aa=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Eh(e,!1):Lr(n,e));break;case 30:r=aa,c=Fg(),aa=!1,Lr(n,e),aa&&(e.flags|=4);var f=e.memoizedProps,x=e.stateNode;n=Ma(f,x),x=Ma(a.memoizedProps,x);var R=ya(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,ti=0,n=Rh(e,a,n,x,R,f,!0),ti!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Fr(e,e.memoizedProps.onUpdate),ea=c):c!==null&&(c.push.apply(c,ea),ea=c),aa=(e.flags&32)!==0?!0:r;break;default:Lr(n,e)}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Wg(e,n.alternate,n),n=n.sibling}function os(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:rs(4,a,a.return),os(a,r);break;case 1:Pn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Og(a,a.return,c),os(a,r);break;case 27:(r&2)!==0&&J_(a.stateNode,a.type,a.memoizedProps);case 5:Pn(a,a.return),a.tag!==5&&a.tag!==27||jo(a),os(a,r);break;case 6:jo(a);break;case 26:Pn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Ge||c.parentNode.removeChild(c),os(a,r);break;case 22:a.memoizedState===null&&os(a,r);break;case 30:Pn(a,a.return),os(a,r);break;case 7:Pn(a,a.return);default:os(a,r)}e=e.sibling}}function Bi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,x=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Bi(c,f,a),Qo(4,f);break;case 1:if(Bi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ut){qe(r,r.return,ut)}if(r=f,c=r.updateQueue,c!==null){var I=r.stateNode;try{var J=c.shared.hiddenCallbacks;if(J!==null)for(c.shared.hiddenCallbacks=null,c=0;c<J.length;c++)M0(J[c],I)}catch(ut){qe(r,r.return,ut)}}R&&x&64&&Ug(f),ta(f,f.return);break;case 27:(a&2)!==0&&Bg(f);case 5:f.tag!==5&&f.tag!==27||Pg(f),Bi(c,f,a),R&&r===null&&x&4&&xh(f),ta(f,f.return);break;case 6:Pg(f);break;case 26:I=f.stateNode,f.memoizedState!==null||I===null||Rn||md(ol(I.ownerDocument),f.type,I),Bi(c,f,a),R&&r===null&&x&4&&xh(f),ta(f,f.return);break;case 12:Bi(c,f,a);break;case 31:Bi(c,f,a),R&&x&4&&Kg(c,f);break;case 13:Bi(c,f,a),R&&x&4&&Qg(c,f);break;case 22:f.memoizedState===null&&Bi(c,f,a),ta(f,f.return);break;case 30:Bi(c,f,a),ta(f,f.return);break;case 7:ta(f,f.return);default:Bi(c,f,a)}n=n.sibling}}function Lh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bo(a))}function Uh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Bo(e))}function wi(e,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)t_(e,n,a,r),n=n.sibling;else c&&Vg(n)}function t_(e,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Dc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,r),f&2048&&Qo(9,n);break;case 1:wi(e,n,a,r);break;case 3:wi(e,n,a,r),c&&Ch&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Bo(f)));break;case 12:if(f&2048){wi(e,n,a,r),f=n.stateNode;try{var x=n.memoizedProps,R=x.id,I=x.onPostCommit;typeof I=="function"&&I(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(J){qe(n,n.return,J)}}else wi(e,n,a,r);break;case 31:wi(e,n,a,r);break;case 13:wi(e,n,a,r);break;case 23:break;case 22:x=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&Dc(R),x._visibility&2?wi(e,n,a,r):$o(e,n)):(c&&R!==null&&R.memoizedState!==null&&Dc(n),x._visibility&2?wi(e,n,a,r):(x._visibility|=2,Ur(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Lh(R,n);break;case 24:wi(e,n,a,r),f&2048&&Uh(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(na(f.child,!0),na(n.child,!0))),wi(e,n,a,r);break;default:wi(e,n,a,r)}}function Ur(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,R=a,I=r,J=x.flags;switch(x.tag){case 0:case 11:case 15:Ur(f,x,R,I,c),Qo(8,x);break;case 23:break;case 22:var ut=x.stateNode;x.memoizedState!==null?ut._visibility&2?Ur(f,x,R,I,c):$o(f,x):(ut._visibility|=2,Ur(f,x,R,I,c)),c&&J&2048&&Lh(x.alternate,x);break;case 24:Ur(f,x,R,I,c),c&&J&2048&&Uh(x.alternate,x);break;default:Ur(f,x,R,I,c)}n=n.sibling}}function $o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:$o(a,r),c&2048&&Lh(r.alternate,r);break;case 24:$o(a,r),c&2048&&Uh(r.alternate,r);break;default:$o(a,r)}n=n.sibling}}var Ws=8192;function qs(e,n,a){if(e.subtreeFlags&Ws)for(e=e.child;e!==null;)e_(e,n,a),e=e.sibling}function e_(e,n,a){switch(e.tag){case 26:qs(e,n,a),e.flags&Ws&&(e.memoizedState!==null?Wy(a,Ii,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&lv(a,e)));break;case 5:qs(e,n,a),e.flags&Ws&&(e=e.stateNode,(n&335544128)===n&&lv(a,e));break;case 3:case 4:var r=Ii;Ii=ol(e.stateNode.containerInfo),qs(e,n,a),Ii=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ws,Ws=16777216,qs(e,n,a),Ws=r):qs(e,n,a));break;case 30:if((e.flags&Ws)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var c=e.stateNode;c.paired=null,fi===null&&(fi=new Map),fi.set(r,c)}qs(e,n,a);break;default:qs(e,n,a)}}function n_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];wn=r,a_(r,e)}n_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i_(e),e=e.sibling}function i_(e){switch(e.tag){case 0:case 11:case 15:tl(e),e.flags&2048&&rs(9,e,e.return);break;case 3:tl(e);break;case 12:tl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Oc(e)):tl(e);break;default:tl(e)}}function Oc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];wn=r,a_(r,e)}n_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:rs(8,n,n.return),Oc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Oc(n));break;default:Oc(n)}e=e.sibling}}function a_(e,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:rs(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Bo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,wn=r;else t:for(a=e;wn!==null;){r=wn;var c=r.sibling,f=r.return;if(Yg(r),r===a){wn=null;break t}if(c!==null){c.return=f,wn=c;break t}wn=f}}}var HM={getCacheForType:function(e){var n=Ln(_n),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Ln(_n).controller.signal}},GM=typeof WeakMap=="function"?WeakMap:Map,Fe=0,je=null,Te=null,we=0,We=0,hi=null,ls=!1,Or=!1,Oh=!1,Na=0,hn=0,cs=0,Ys=0,Pc=0,di=0,Pr=0,el=null,ni=null,Ph=!1,Ic=0,s_=0,Bc=1/0,zc=null,us=null,sn=0,zi=null,Zs=null,ra=0,Ih=0,Bh=null,r_=null,Ir=null,Br=null,zr=null,nl=0,Fc=null;function pi(){return(Fe&2)!==0&&we!==0?we&-we:_t.T!==null?Yh():Bl()}function o_(){if(di===0)if((we&536870912)===0||Se){var e=Rs;Rs<<=1,(Rs&3932160)===0&&(Rs=262144),di=e}else di=536870912;return e=Un.current,e!==null&&(e.flags|=32),di}function Fr(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=G_(Ma(e.memoizedProps,a))),Br===null&&(Br=[]),Br.push(n.bind(null,r))}}function ii(e,n,a){(e===je&&(We===2||We===9)||e.cancelPendingCommit!==null)&&(Hr(e,0),fs(e,we,di,!1)),Ki(e,a),((Fe&2)===0||e!==je)&&(e===je&&((Fe&2)===0&&(Ys|=a),hn===4&&fs(e,we,di,!1)),oa(e))}function l_(e,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||qa(e,n),c=r?XM(e,n):Fh(e,n,!0),f=r;do{if(c===0){Or&&!r&&fs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!VM(a)){c=Fh(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var R=e;c=el;var I=R.current.memoizedState.isDehydrated;if(I&&(Hr(R,x).flags|=256),x=Fh(R,x,!1),x!==2&&x!==6){if(Oh&&!I){R.errorRecoveryDisabledLanes|=f,Ys|=f,c=4;break t}f=ni,ni=c,f!==null&&(ni===null?ni=f:ni.push.apply(ni,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Hr(e,0),fs(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:fs(r,n,di,!ls);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ic+300-kt(),10<c)){if(fs(r,n,di,!ls),ws(r,0,!0)!==0)break t;ra=n,r.timeoutHandle=ad(c_.bind(null,r,a,ni,zc,Ph,n,di,Ys,Pr,ls,f,"Throttled",-0,0),c);break t}c_(r,a,ni,zc,Ph,n,di,Ys,Pr,ls,f,null,-0,0)}}break}while(!0);oa(e)}function c_(e,n,a,r,c,f,x,R,I,J,ut,St,Z,lt){e.timeoutHandle=-1;var Ot=n.subtreeFlags,jt=(f&335544064)===f;if(St=null,(jt||Ot&8192||(Ot&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},fi=null,e_(n,f,St),jt&&(Ot=St,jt=e.containerInfo,jt=(jt.nodeType===9?jt:jt.ownerDocument).__reactViewTransition,jt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=ul.bind(Ot),jt.finished.then(Ot,Ot))),Ot=(f&62914560)===f?Ic-kt():(f&4194048)===f?s_-kt():0,Ot=qy(St,Ot),Ot!==null)){ra=f,e.cancelPendingCommit=Ot(__.bind(null,e,n,f,a,r,c,x,R,I,J,ut,St,null,Z,lt)),fs(e,f,x,!J);return}__(e,n,f,a,r,c,x,R,I,J,ut,St)}function VM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!ci(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fs(e,n,a,r){n=Zi(e,n),n&=~Pc,n&=~Ys,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-ue(c),x=1<<f;r[f]=-1,c&=~x}a!==0&&Cs(e,a,n)}function Hc(){return(Fe&6)===0?(il(0),!1):!0}function zh(){if(Te!==null){if(We===0)var e=Te.return;else e=Te,ba=Ps=null,qf(e),Ar=null,Ho=0,e=Te;for(;e!==null;)Lg(e.alternate,e),e=e.return;Te=null}}function Hr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,hy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,zh(),je=e,Te=a=Ea(e.current,null),we=n,We=0,hi=null,ls=!1,Or=qa(e,n),Oh=!1,Pr=di=Pc=Ys=cs=hn=0,ni=el=null,Ph=!1,Na=Zi(e,n),Zl(),a}function u_(e,n){de=null,_t.H=xc,n===br||n===sc?(n=_0(),We=3):n===Uf?(n=_0(),We=4):We=n===oh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,Te===null&&(hn=1,Sc(e,Ti(n,e.current)))}function f_(){var e=Un.current;return e===null?!0:(we&4194048)===we?Fn===null:(we&62914560)===we||(we&536870912)!==0?e===Fn:!1}function h_(){var e=_t.H;return _t.H=xc,e===null?xc:e}function d_(){var e=_t.A;return _t.A=HM,e}function Gc(){hn=4,ls||(we&4194048)!==we&&Un.current!==null||(Or=!0),(cs&134217727)===0&&(Ys&134217727)===0||je===null||fs(je,we,di,!1)}function Fh(e,n,a){var r=Fe;Fe|=2;var c=h_(),f=d_();(je!==e||we!==n)&&(zc=null,Hr(e,n)),n=!1;var x=hn;t:do try{if(We!==0&&Te!==null){var R=Te,I=hi;switch(We){case 8:zh(),x=6;break t;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var J=We;if(We=0,hi=null,Gr(e,R,I,J),a&&Or){x=0;break t}break;default:J=We,We=0,hi=null,Gr(e,R,I,J)}}kM(),x=hn;break}catch(ut){u_(e,ut)}while(!0);return n&&e.shellSuspendCounter++,ba=Ps=null,Fe=r,_t.H=c,_t.A=f,Te===null&&(je=null,we=0,Zl()),x}function kM(){for(;Te!==null;)p_(Te)}function XM(e,n){var a=Fe;Fe|=2;var r=h_(),c=d_();je!==e||we!==n?(zc=null,Bc=kt()+500,Hr(e,n)):Or=qa(e,n);t:do try{if(We!==0&&Te!==null){n=Te;var f=hi;e:switch(We){case 1:We=0,hi=null,Gr(e,n,f,1);break;case 2:case 9:if(m0(f)){We=0,hi=null,m_(n);break}n=function(){We!==2&&We!==9||je!==e||(We=7),oa(e)},f.then(n,n);break t;case 3:We=7;break t;case 4:We=5;break t;case 7:m0(f)?(We=0,hi=null,m_(n)):(We=0,hi=null,Gr(e,n,f,7));break;case 5:var x=null;switch(Te.tag){case 26:x=Te.memoizedState;case 5:case 27:var R=Te;if(x?rv(x):R.stateNode.complete){We=0,hi=null;var I=R.sibling;if(I!==null)Te=I;else{var J=R.return;J!==null?(Te=J,Vc(J)):Te=null}break e}}We=0,hi=null,Gr(e,n,f,5);break;case 6:We=0,hi=null,Gr(e,n,f,6);break;case 8:zh(),hn=6;break t;default:throw Error(s(462))}}WM();break}catch(ut){u_(e,ut)}while(!0);return ba=Ps=null,_t.H=r,_t.A=c,Fe=a,Te!==null?0:(je=null,we=0,Zl(),hn)}function WM(){for(;Te!==null&&!It();)p_(Te)}function p_(e){var n=Dg(e.alternate,e,Na);e.memoizedProps=e.pendingProps,n===null?Vc(e):Te=n}function m_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Eg(a,n,n.pendingProps,n.type,void 0,we);break;case 11:n=Eg(a,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:qf(n);var r=n;r===An&&(Se?(tc(r),r.tag===5&&r.stateNode!=null&&($e=r.stateNode)):(tc(r),Se=!0));default:Lg(a,n),n=Te=a0(n,Na),n=Dg(a,n,Na)}e.memoizedProps=e.pendingProps,n===null?Vc(e):Te=n}function Gr(e,n,a,r){ba=Ps=null,qf(n),Ar=null,Ho=0;var c=n.return;try{if(LM(e,c,n,a,we)){hn=1,Sc(e,Ti(a,e.current)),Te=null;return}}catch(f){if(c!==null)throw Te=c,f;hn=1,Sc(e,Ti(a,e.current)),Te=null;return}n.flags&32768?(Se||r===1?e=!0:Or||(we&536870912)!==0?e=!1:(ls=e=!0,(r===2||r===9||r===3||r===6)&&(r=Un.current,r!==null&&r.tag===13&&(r.flags|=16384))),g_(n,e)):Vc(n)}function Vc(e){var n=e;do{if((n.flags&32768)!==0){g_(n,ls);return}e=n.return;var a=IM(n.alternate,n,Na);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);hn===0&&(hn=5)}function g_(e,n){do{var a=BM(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);hn=6,Te=null}function __(e,n,a,r,c,f,x,R,I,J,ut,St){e.cancelPendingCommit=null;do kc();while(sn!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===je&&(Te=je=null,we=0),Zs=n,zi=e,ra=a,Bh=c,r_=r,qM(e,n,a,x,R,I,St)}}function qM(e,n,a,r,c,f,x){var R=n.lanes|n.childLanes;if(Ih=R,R|=Sf,Il(e,a,R,r,c,f),Br=null,(a&335544064)===a?(zr=SM(e),r=10262):(zr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,JM(Ct,function(){return kh(),null})):(e.callbackNode=null,e.callbackPriority=0),wc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null,c=wt.p,wt.p=2,f=Fe,Fe|=4;try{zM(e,n,a)}finally{Fe=f,wt.p=c,_t.T=r}}sn=1,wc?Ir=vy(x,e.containerInfo,zr,Hh,Gh,ZM,Vh,kh,YM):(Hh(),Gh(),Vh())}function YM(e){if(sn!==0){var n=zi.onRecoverableError;n(e,{componentStack:null})}}function ZM(){sn===3&&(sn=0,$g(Zs,zi),sn=4)}function Hh(){if(sn===1){sn=0;var e=zi,n=Zs,a=ra,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null;var c=wt.p;wt.p=2;var f=Fe;Fe|=4;try{Jo=Nc=!1,jg(n,e,a),a=ed;var x=Zm(e.containerInfo),R=a.focusedElem,I=a.selectionRange;if(x!==R&&R&&R.ownerDocument&&Ym(R.ownerDocument.documentElement,R)){if(I!==null&&mf(R)){var J=I.start,ut=I.end;if(ut===void 0&&(ut=J),"selectionStart"in R)R.selectionStart=J,R.selectionEnd=Math.min(ut,R.value.length);else{var St=R.ownerDocument||document,Z=St&&St.defaultView||window;if(Z.getSelection){var lt=Z.getSelection(),Ot=R.textContent.length,jt=Math.min(I.start,Ot),pe=I.end===void 0?jt:Math.min(I.end,Ot);!lt.extend&&jt>pe&&(x=pe,pe=jt,jt=x);var j=qm(R,jt),G=qm(R,pe);if(j&&G&&(lt.rangeCount!==1||lt.anchorNode!==j.node||lt.anchorOffset!==j.offset||lt.focusNode!==G.node||lt.focusOffset!==G.offset)){var at=St.createRange();at.setStart(j.node,j.offset),lt.removeAllRanges(),jt>pe?(lt.addRange(at),lt.extend(G.node,G.offset)):(at.setEnd(G.node,G.offset),lt.addRange(at))}}}}for(St=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&St.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<St.length;R++){var vt=St[R];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Kr=!!td,ed=td=null}finally{Fe=f,wt.p=c,_t.T=r}}e.current=n,sn=2}}function Gh(){if(sn===2){sn=0;var e=zi,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=_t.T,_t.T=null;var r=wt.p;wt.p=2;var c=Fe;Fe|=4;try{Wg(e,n.alternate,n)}finally{Fe=c,wt.p=r,_t.T=a}}sn=3}}function Vh(){if(sn===4||sn===3){sn=0;var e=Ir;Ir=null,Pt();var n=zi,a=Zs,r=ra,c=r_,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?sn=5:(sn=0,Zs=zi=null,v_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(us=null),bo(r),a=a.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=_t.T,f=wt.p,wt.p=2,_t.T=null;try{for(var x=n.onRecoverableError,R=0;R<c.length;R++){var I=c[R];x(I.value,{componentStack:I.stack})}}finally{_t.T=a,wt.p=f}}if(c=Br,x=zr,zr=null,c!==null&&(Br=null,x===null&&(x=[]),e!==null))for(I=0;I<c.length;I++)a=(0,c[I])(x),a!==void 0&&e.finished.finally(a);(ra&3)!==0&&kc(),oa(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Fc?nl++:(nl=0,Fc=n):(nl=0,Fc=null),il(0)}}function v_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Bo(n)))}function kc(){return Ir!==null&&(Ir.skipTransition(),Ir=null),Hh(),Gh(),Vh(),kh()}function kh(){if(sn!==5)return!1;var e=zi,n=Ih;Ih=0;var a=bo(ra),r=_t.T,c=wt.p;try{wt.p=32>a?32:a,_t.T=null,a=Bh,Bh=null;var f=zi,x=ra;if(sn=0,Zs=zi=null,ra=0,(Fe&6)!==0)throw Error(s(331));var R=Fe;if(Fe|=4,i_(f.current),t_(f,f.current,x,a),Fe=R,il(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Jt,f)}catch{}return!0}finally{wt.p=c,_t.T=r,v_(e,n)}}function x_(e,n,a){n=Ti(a,n),n=rh(e.stateNode,n,2),e=ns(e,n,2),e!==null&&(Ki(e,2),oa(e))}function qe(e,n,a){if(e.tag===3)x_(e,e,a);else for(;n!==null;){if(n.tag===3){x_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(us===null||!us.has(r))){e=Ti(a,e),a=mg(2),r=ns(n,a,2),r!==null&&(gg(a,r,n,e),Ki(r,2),oa(r));break}}n=n.return}}function Xh(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new GM;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Oh=!0,c.add(a),e=KM.bind(null,e,n,a),n.then(e,e))}function KM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(we&a)===a&&((hn===4||hn===3&&(we&62914560)===we&&300>kt()-Ic)&&(Fe&2)===0?Hr(e,0):Pc|=a,Pr===we&&(Pr=0)),oa(e)}function S_(e,n){n===0&&(n=Mo()),e=Ls(e,n),e!==null&&(Ki(e,n),oa(e))}function QM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),S_(e,a)}function jM(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),S_(e,a)}function JM(e,n){return Dt(e,n)}var Vr=null,kr=null,Wh=!1,Xc=!1,qh=!1,hs=0;function oa(e){e!==kr&&e.next===null&&(kr===null?Vr=kr=e:kr=kr.next=e),Xc=!0,Wh||(Wh=!0,ty())}function il(e,n){if(!qh&&Xc){qh=!0;do for(var a=!1,r=Vr;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var x=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-ue(42|e)+1)-1,f&=c&~(x&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,T_(r,f))}else f=we,f=ws(r,r===je?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||qa(r,f)||(a=!0,T_(r,f));r=r.next}while(a);qh=!1}}function $M(){M_()}function M_(){Xc=Wh=!1;var e=0;hs!==0&&fy()&&(e=hs);for(var n=kt(),a=null,r=Vr;r!==null;){var c=r.next,f=y_(r,n);f===0?(r.next=null,a===null?Vr=c:a.next=c,c===null&&(kr=a)):(a=r,(e!==0||(f&3)!==0)&&(Xc=!0)),r=c}sn!==0&&sn!==5||il(e),hs!==0&&(hs=0)}function y_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-ue(f),R=1<<x,I=c[x];I===-1?((R&a)===0||(R&r)!==0)&&(c[x]=So(R,n)):I<=n&&(e.expiredLanes|=R),f&=~R}if(n=je,a=we,a=ws(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(We===2||We===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&$t(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||qa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&$t(r),bo(a)){case 2:case 8:a=q;break;case 32:a=Ct;break;case 268435456:a=Lt;break;default:a=Ct}return r=E_.bind(null,e),a=Dt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&$t(r),e.callbackPriority=2,e.callbackNode=null,2}function E_(e,n){if(sn!==0&&sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(kc()&&e.callbackNode!==a)return null;var r=we;return r=ws(e,e===je?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(l_(e,r,n),y_(e,kt()),e.callbackNode!=null&&e.callbackNode===a?E_.bind(null,e):null)}function T_(e,n){if(kc())return null;l_(e,n,!0)}function ty(){dy(function(){(Fe&6)!==0?Dt(ce,$M):M_()})}function Yh(){if(hs===0){var e=zs;e===0&&(e=ur,ur<<=1,(ur&261888)===0&&(ur=256)),hs=e}return hs}function b_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hl(e)}function ey(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=b_((c[H]||null).action),x=r.submitter;x&&(n=(n=x[H]||null)?b_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var R=new Xl("action","action",null,r,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(hs!==0){var I=new FormData(c,x);eh(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(R.preventDefault(),I=new FormData(c,x),eh(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Zh=0;Zh<xf.length;Zh++){var Kh=xf[Zh],ny=Kh.toLowerCase(),iy=Kh[0].toUpperCase()+Kh.slice(1);Oi(ny,"on"+iy)}Oi(jm,"onAnimationEnd"),Oi(Jm,"onAnimationIteration"),Oi($m,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(hM,"onTransitionRun"),Oi(dM,"onTransitionStart"),Oi(pM,"onTransitionCancel"),Oi(t0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ay=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function A_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var R=r[x],I=R.instance,J=R.currentTarget;if(R=R.listener,I!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=J;try{f(c)}catch(ut){Yl(ut)}c.currentTarget=null,f=I}else for(x=0;x<r.length;x++){if(R=r[x],I=R.instance,J=R.currentTarget,R=R.listener,I!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=J;try{f(c)}catch(ut){Yl(ut)}c.currentTarget=null,f=I}}}}function be(e,n){var a=n[rt];a===void 0&&(a=n[rt]=new Set);var r=e+"__bubble";a.has(r)||(R_(n,e,2,!1),a.add(r))}function Qh(e,n,a){var r=0;n&&(r|=4),R_(a,e,r,n)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function jh(e){if(!e[Wc]){e[Wc]=!0,He.forEach(function(a){a!=="selectionchange"&&(ay.has(a)||Qh(a,!1,e),Qh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wc]||(n[Wc]=!0,Qh("selectionchange",!1,n))}}function R_(e,n,a,r){switch(gv(n)){case 2:var c=Qy;break;case 8:c=jy;break;default:c=_d}a=c.bind(null,n,a,e),c=void 0,!sf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Jh(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var R=r.stateNode.containerInfo;if(R===c)break;if(x===4)for(x=r.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;R!==null;){if(x=se(R),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){r=f=x;continue t}R=R.parentNode}}r=r.return}Rm(function(){var J=f,ut=nf(a),St=[];t:{var Z=e0.get(e);if(Z!==void 0){var lt=Xl,Ot=e;switch(e){case"keypress":if(Vl(a)===0)break t;case"keydown":case"keyup":lt=VS;break;case"focusin":Ot="focus",lt=cf;break;case"focusout":Ot="blur",lt=cf;break;case"beforeblur":case"afterblur":lt=cf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=DS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=YS;break;case jm:case Jm:case $m:lt=US;break;case t0:lt=KS;break;case"scroll":case"scrollend":lt=wS;break;case"wheel":lt=jS;break;case"copy":case"cut":case"paste":lt=PS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Lm;break;case"submit":lt=WS;break;case"toggle":case"beforetoggle":lt=$S}var jt=(n&4)!==0,pe=!jt&&(e==="scroll"||e==="scrollend"),j=jt?Z!==null?Z+"Capture":null:Z;jt=[];for(var G=J,at;G!==null;){var vt=G;if(at=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||at===null||j===null||(vt=Ao(G,j),vt!=null&&jt.push(sl(G,vt,at))),pe)break;G=G.return}0<jt.length&&(Z=new lt(Z,Ot,null,a,ut),St.push({event:Z,listeners:jt}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",lt&&a!==ef&&(Ot=a.relatedTarget||a.fromElement)&&(se(Ot)||Ot[ft]))break t;(Z||lt)&&(Ot=ut.window===ut?ut:(lt=ut.ownerDocument)?lt.defaultView||lt.parentWindow:window,Z?(lt=a.relatedTarget||a.toElement,Z=J,lt=lt?se(lt):null,lt!==null&&(pe=u(lt),jt=lt.tag,lt!==pe||jt!==5&&jt!==27&&jt!==6)&&(lt=null)):(Z=null,lt=J),Z!==lt&&(jt=Dm,vt="onMouseLeave",j="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(jt=Lm,vt="onPointerLeave",j="onPointerEnter",G="pointer"),pe=Z==null?Ot:Wt(Z),at=lt==null?Ot:Wt(lt),Ot=new jt(vt,G+"leave",Z,a,ut),Ot.target=pe,Ot.relatedTarget=at,vt=null,se(ut)===J&&(jt=new jt(j,G+"enter",lt,a,ut),jt.target=at,jt.relatedTarget=pe,vt=jt),pe=vt,jt=Z&&lt?N(Z,lt,sy):null,Z!==null&&w_(St,Ot,Z,jt,!1),lt!==null&&pe!==null&&w_(St,pe,lt,jt,!0)))}t:{if(Z=J?Wt(J):window,lt=Z.nodeName&&Z.nodeName.toLowerCase(),lt==="select"||lt==="input"&&Z.type==="file")var qt=Hm;else if(zm(Z))if(Gm)qt=cM;else{qt=oM;var Ce=rM}else lt=Z.nodeName,!lt||lt.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?J&&tf(J.elementType)&&(qt=Hm):qt=lM;if(qt&&(qt=qt(e,J))){Fm(St,qt,a,ut);break t}Ce&&Ce(e,Z,J)}switch(Ce=J?Wt(J):window,e){case"focusin":(zm(Ce)||Ce.contentEditable==="true")&&(_r=Ce,gf=J,Oo=null);break;case"focusout":Oo=gf=_r=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,Km(St,a,ut);break;case"selectionchange":if(fM)break;case"keydown":case"keyup":Km(St,a,ut)}var te;if(ff)t:{switch(e){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else gr?Im(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Um&&a.locale!=="ko"&&(gr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&gr&&(te=wm()):(Ya=ut,rf="value"in Ya?Ya.value:Ya.textContent,gr=!0)),Ce=qc(J,ae),0<Ce.length&&(ae=new Nm(ae,e,null,a,ut),St.push({event:ae,listeners:Ce}),te?ae.data=te:(te=Bm(a),te!==null&&(ae.data=te)))),(te=eM?nM(e,a):iM(e,a))&&(ae=qc(J,"onBeforeInput"),0<ae.length&&(Ce=new Nm("onBeforeInput","beforeinput",null,a,ut),St.push({event:Ce,listeners:ae}),Ce.data=te)),ey(St,e,J,a,ut)}A_(St,n)})}function sl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function qc(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ao(e,a),c!=null&&r.unshift(sl(e,c,f)),c=Ao(e,n),c!=null&&r.push(sl(e,c,f))),e.tag===3)return r;e=e.return}return[]}function sy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function w_(e,n,a,r,c){for(var f=n._reactName,x=[];a!==null&&a!==r;){var R=a,I=R.alternate,J=R.stateNode;if(R=R.tag,I!==null&&I===r)break;R!==5&&R!==26&&R!==27||J===null||(I=J,c?(J=Ao(a,f),J!=null&&x.unshift(sl(a,J,I))):c||(J=Ao(a,f),J!=null&&x.push(sl(a,J,I)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var ry=/\r\n?/g,oy=/\u0000|\uFFFD/g;function C_(e){return(typeof e=="string"?e:""+e).replace(ry,`
`).replace(oy,"")}function D_(e,n){return n=C_(n),C_(e)===n}function Ye(e,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||dr(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&dr(e,""+r);else return;break;case"className":li(e,"class",r);break;case"tabIndex":li(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":li(e,a,r);break;case"style":bm(e,r,f);return;case"data":if(n!=="object"){li(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Hl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ye(e,n,"name",c.name,c,null),Ye(e,n,"formEncType",c.formEncType,c,null),Ye(e,n,"formMethod",c.formMethod,c,null),Ye(e,n,"formTarget",c.formTarget,c,null)):(Ye(e,n,"encType",c.encType,c,null),Ye(e,n,"method",c.method,c,null),Ye(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Hl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ji);return;case"onScroll":r!=null&&be("scroll",e);return;case"onScrollEnd":r!=null&&be("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Hl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":be("beforetoggle",e),be("toggle",e),Je(e,"popover",r);break;case"xlinkActuate":Re(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Re(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Re(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Re(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Re(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Re(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Re(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Re(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Re(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Je(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=AS.get(a)||a,Je(e,a,r);else return}xe=!0}function $h(e,n,a,r,c,f){switch(a){case"style":bm(e,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")dr(e,r);else if(typeof r=="number"||typeof r=="bigint")dr(e,""+r);else return;break;case"onScroll":r!=null&&be("scroll",e);return;case"onScrollEnd":r!=null&&be("scrollend",e);return;case"onClick":r!=null&&(e.onclick=ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!yn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[H]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,r,c);break t}xe=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):Je(e,a,r)}return}xe=!0}function In(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,f,x,a,null)}}c&&Ye(e,n,"srcSet",a.srcSet,a,null),r&&Ye(e,n,"src",a.src,a,null);return;case"input":be("invalid",e);var R=f=x=c=null,I=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":x=ut;break;case"checked":I=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Ye(e,n,r,ut,a,null)}}Mm(e,f,R,I,J,x,c,!1);return;case"select":be("invalid",e),r=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":x=R;break;case"multiple":r=R;default:Ye(e,n,c,R,a,null)}n=f,a=x,e.multiple=!!r,n!=null?hr(e,!!r,n,!1):a!=null&&hr(e,!!r,a,!0);return;case"textarea":be("invalid",e),f=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":r=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ye(e,n,x,R,a,null)}Em(e,r,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ye(e,n,I,r,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(r=0;r<al.length;r++)be(al[r],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,J,r,a,null)}return;default:if(tf(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&$h(e,n,ut,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Ye(e,n,R,r,a,null))}var ly={};function cy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,R=null,I=null,J=null,ut=null;for(lt in a){var St=a[lt];if(a.hasOwnProperty(lt)&&St!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":I=St;default:r.hasOwnProperty(lt)||Ye(e,n,lt,null,r,St)}}for(var Z in r){var lt=r[Z];if(St=a[Z],r.hasOwnProperty(Z)&&(lt!=null||St!=null))switch(Z){case"type":lt!==St&&(xe=!0),f=lt;break;case"name":lt!==St&&(xe=!0),c=lt;break;case"checked":lt!==St&&(xe=!0),J=lt;break;case"defaultChecked":lt!==St&&(xe=!0),ut=lt;break;case"value":lt!==St&&(xe=!0),x=lt;break;case"defaultValue":lt!==St&&(xe=!0),R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==St&&Ye(e,n,Z,lt,r,St)}}Ju(e,x,R,I,J,ut,f,c);return;case"select":lt=x=R=Z=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":lt=I;default:r.hasOwnProperty(f)||Ye(e,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":f!==I&&(xe=!0),Z=f;break;case"defaultValue":f!==I&&(xe=!0),R=f;break;case"multiple":f!==I&&(xe=!0),x=f;default:f!==I&&Ye(e,n,c,f,r,I)}n=R,a=x,r=lt,Z!=null?hr(e,!!a,Z,!1):!!r!=!!a&&(n!=null?hr(e,!!a,n,!0):hr(e,!!a,a?[]:"",!1));return;case"textarea":lt=Z=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ye(e,n,R,null,r,c)}for(x in r)if(c=r[x],f=a[x],r.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":c!==f&&(xe=!0),Z=c;break;case"defaultValue":c!==f&&(xe=!0),lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ye(e,n,x,c,r,f)}ym(e,Z,lt);return;case"option":for(var Ot in a)if(Z=a[Ot],a.hasOwnProperty(Ot)&&Z!=null&&!r.hasOwnProperty(Ot))switch(Ot){case"selected":e.selected=!1;break;default:Ye(e,n,Ot,null,r,Z)}for(I in r)if(Z=r[I],lt=a[I],r.hasOwnProperty(I)&&Z!==lt&&(Z!=null||lt!=null))switch(I){case"selected":Z!==lt&&(xe=!0),e.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:Ye(e,n,I,Z,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)Z=a[jt],a.hasOwnProperty(jt)&&Z!=null&&!r.hasOwnProperty(jt)&&Ye(e,n,jt,null,r,Z);for(J in r)if(Z=r[J],lt=a[J],r.hasOwnProperty(J)&&Z!==lt&&(Z!=null||lt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(s(137,n));break;default:Ye(e,n,J,Z,r,lt)}return;default:if(tf(n)){for(var pe in a)Z=a[pe],a.hasOwnProperty(pe)&&Z!==void 0&&!r.hasOwnProperty(pe)&&$h(e,n,pe,void 0,r,Z);for(ut in r)Z=r[ut],lt=a[ut],!r.hasOwnProperty(ut)||Z===lt||Z===void 0&&lt===void 0||$h(e,n,ut,Z,r,lt);return}}for(var j in a)Z=a[j],a.hasOwnProperty(j)&&Z!=null&&!r.hasOwnProperty(j)&&Ye(e,n,j,null,r,Z);for(St in r)Z=r[St],lt=a[St],!r.hasOwnProperty(St)||Z===lt||Z==null&&lt==null||Ye(e,n,St,Z,r,lt)}function N_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,x=c.initiatorType,R=c.duration;if(f&&R&&N_(x)){for(x=0,R=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],J=I.startTime;if(J>R)break;var ut=I.transferSize,St=I.initiatorType;ut&&N_(St)&&(I=I.responseEnd,x+=ut*(I<R?1:(R-J)/(I-J)))}if(--r,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var td=null,ed=null;function rl(e){return e.nodeType===9?e:e.ownerDocument}function L_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function O_(e,n,a,r){return a=rl(a).createElement(e),a[A]=r,a[H]=n,In(a,e,n),ve(a),a}function nd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var id=null;function fy(){var e=window.event;return e&&e.type==="popstate"?e===id?!1:(id=e,!0):(id=null,!1)}var ad=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,P_=typeof Promise=="function"?Promise:void 0,I_=typeof requestAnimationFrame=="function"?requestAnimationFrame:ad,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof P_<"u"?function(e){return P_.resolve(null).then(e).catch(py)}:ad;function py(e){setTimeout(function(){throw e})}function ds(e){return e==="head"}function B_(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),Qr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")hd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,hd(a);for(var f=a.firstChild;f;){var x=f.nextSibling,R=f.nodeName;f[Ut]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&hd(e.ownerDocument.body);a=c}while(a);Qr(n)}function z_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function F_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function H_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function my(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function sd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return my(n,a,e)}function gy(e){return e.documentElement.clientHeight}function _y(e){this.addEventListener("load",e),this.addEventListener("error",e)}function vy(e,n,a,r,c,f,x,R,I){var J=n.nodeType===9?n:n.ownerDocument;try{var ut=J.startViewTransition({update:function(){var Z=J.defaultView,lt=Z.navigation&&Z.navigation.transition,Ot=J.fonts.status;r();var jt=[];if(Ot==="loaded"&&(gy(J),J.fonts.status==="loading"&&jt.push(J.fonts.ready)),Ot=jt.length,e!==null)for(var pe=e.suspenseyImages,j=0,G=0;G<pe.length;G++){var at=pe[G];if(!at.complete){var vt=at.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<Z.innerHeight&&vt.left<Z.innerWidth){if(j+=ov(at),j>Kc){jt.length=Ot;break}at=new Promise(_y.bind(at)),jt.push(at)}}}if(0<jt.length)return Z=Promise.race([Promise.all(jt),new Promise(function(qt){return setTimeout(qt,500)})]).then(c,c),(lt?Promise.allSettled([lt.finished,Z]):Z).then(f,f);if(c(),lt)return lt.finished.then(f,f);f()},types:a});J.__reactViewTransition=ut;var St=[];return ut.ready.then(function(){for(var Z=J.documentElement.getAnimations({subtree:!0}),lt=0;lt<Z.length;lt++){var Ot=Z[lt],jt=Ot.effect,pe=jt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){St.push(Ot),Ot=jt.getKeyframes();for(var j=pe=void 0,G=!0,at=0;at<Ot.length;at++){var vt=Ot[at],qt=vt.width;if(pe===void 0)pe=qt;else if(pe!==qt){G=!1;break}if(qt=vt.height,j===void 0)j=qt;else if(j!==qt){G=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}G&&pe!==void 0&&j!==void 0&&(jt.setKeyframes(Ot),G=getComputedStyle(jt.target,jt.pseudoElement),G.width!==pe||G.height!==j)&&(G=Ot[0],G.width=pe,G.height=j,G=Ot[Ot.length-1],G.width=pe,G.height=j,jt.setKeyframes(Ot))}}x()},function(Z){J.__reactViewTransition===ut&&(J.__reactViewTransition=null);try{if(typeof Z=="object"&&Z!==null)switch(Z.name){case"InvalidStateError":(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null)}Z!==null&&I(Z)}finally{r(),c(),x()}}),ut.finished.finally(function(){for(var Z=0;Z<St.length;Z++)St[Z].cancel();J.__reactViewTransition===ut&&(J.__reactViewTransition=null),R()}),ut}catch{return r(),c(),x(),null}}function Ks(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Ks.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Ks.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&r.push(a[c])}return r},Ks.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function G_(e){return{name:e,group:new Ks("group",e),imagePair:new Ks("image-pair",e),old:new Ks("old",e),new:new Ks("new",e)}}function mi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}mi.prototype.addEventListener=function(e,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(k_(f,e,n,a)===-1){var x=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(I){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(c=x.removeEventListener.bind(x,e,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Xr(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),g(this._fragmentFiber.child,!1,xy,e,R,r)}this._eventListeners=f}};function xy(e,n,a,r){return y(e).addEventListener(n,a,r),!1}mi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=k_(r,e,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=Xr(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,Sy,e,a,c),r.splice(n,1),f!==null&&f()}};function Sy(e,n,a,r){return y(e).removeEventListener(n,a,r),!1}function Xr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function V_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function k_(e,n,a,r){if(e.length===0)return-1;r=V_(r);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&V_(f.optionsOrUseCapture)===r)return c}return-1}mi.prototype.dispatchEvent=function(e){var n=_(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,Xr(f.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,Xr(f.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},mi.prototype.focus=function(e){g(this._fragmentFiber.child,!0,X_,e,void 0,void 0)};function X_(e,n){return e.tag===6?!1:(e=y(e),Ly(e,n))}mi.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,rd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!X_(n[a],e);a--);};function rd(e,n){return n.push(e),!1}mi.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=y(e),e=rl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,My,e,void 0,void 0))};function My(e,n){return e.tag===6?!1:(e=y(e),e===n||e.contains(n)?(n.blur(),!0):!1)}mi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,yy,e,void 0,void 0)};function yy(e,n){return e.tag===6||(e=y(e),n.observe(e)),!1}mi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,Ey,e,void 0,void 0);for(var a=n=0;a<Fi.length;a++){var r=Fi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Fi[n++]=r}Fi.length=n}};function Ey(e,n){return e.tag===6||(e=y(e),n.unobserve(e)),!1}var Fi=[],od=!1;function Ty(e,n,a){Fi.push({fragmentInstance:e,observer:n,instance:a}),od||(od=!0,Uy(function(){od=!1;var r=Fi;Fi=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}mi.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,by,e,void 0,void 0),e};function by(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=y(e),n.push.apply(n,e.getClientRects());return!1}mi.prototype.getRootNode=function(e){var n=_(this._fragmentFiber);return n===null?this:y(n).getRootNode(e)},mi.prototype.compareDocumentPosition=function(e){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,rd,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=y(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),c=y(a[a.length-1]);var f=M(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),R=c.compareDocumentPosition(e),I=x&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=r&&f&&x&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||f&&c===e||I||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ay(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ay(e,n,a,r,c){var f=se(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=_(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=N(a,f,D),n===null?n=!1:(g(n,!0,B,f,a),f=S,S=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=N(r,f,D),n===null?n=!1:(g(n,!0,C,f,r),f=S,L=S=null,n=f!==null)),n):!1}function W_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}mi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,rd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=y(r),W_(e,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=y(c),W_(c,a)):y(c).scrollIntoView(e),r+=a?-1:1}};function Ry(e,n){return e=y(e),q_(e,n),!1}function q_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Y_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.addEventListener(c.type,c.attachedListener,Xr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var x=0,R=0;R<Fi.length;R++){var I=Fi[R];(I.fragmentInstance!==n||I.observer!==f||I.instance!==e)&&(Fi[x++]=I)}Fi.length=x,f.observe(e)}),q_(e,n))}function wy(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.removeEventListener(c.type,c.attachedListener,Xr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?Ty(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function ld(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),Qt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Cy(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ut])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ci(e.nextSibling),e===null)break}return null}function Dy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ci(e.nextSibling),e===null))return null;return e}function Z_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ci(e.nextSibling),e===null))return null;return e}function cd(e){return e.data==="$?"||e.data==="$~"}function ud(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ny(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var fd=null;function K_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Q_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ly(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function Uy(e){I_(function(){I_(function(n){return e(n)})})}function j_(e,n,a){switch(n=rl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function J_(e,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&Ye(e,n,r,null,ly,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ji&&(e.onclick=null),Qt(e)}function hd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qt(e)}var Di=new Map,$_=new Set;function ol(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var La=wt.d;wt.d={f:Oy,r:Py,D:Iy,C:By,L:zy,m:Fy,X:Gy,S:Hy,M:Vy};function Oy(){var e=La.f(),n=Hc();return e||n}function Py(e){var n=fe(e);n!==null&&n.tag===5&&n.type==="form"?eg(n):La.r(e)}var Wr=typeof document>"u"?null:document;function tv(e,n,a){var r=Wr;if(r&&typeof n=="string"&&n){var c=yi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),$_.has(c)||($_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),In(n,"link",e),ve(n),r.head.appendChild(n)))}}function Iy(e){La.D(e),tv("dns-prefetch",e,null)}function By(e,n){La.C(e,n),tv("preconnect",e,n)}function zy(e,n,a){La.L(e,n,a);var r=Wr;if(r&&e&&n){var c='link[rel="preload"][as="'+yi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+yi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+yi(a.imageSizes)+'"]')):c+='[href="'+yi(e)+'"]';var f=c;switch(n){case"style":f=qr(e);break;case"script":f=Yr(e)}if(!(Di.has(f)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Di.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(ll(f))||n==="script"&&r.querySelector(cl(f))))){var x=r.createElement("link");In(x,"link",e),n==="style"&&(x[Yt]=!0,x.onload=x.onerror=function(){Ke(x)}),ve(x),r.head.appendChild(x)}}}function Fy(e,n){La.m(e,n);var a=Wr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+yi(r)+'"][href="'+yi(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Yr(e)}if(!Di.has(f)&&(e=P({rel:"modulepreload",href:e},n),Di.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cl(f)))return}r=a.createElement("link"),In(r,"link",e),ve(r),a.head.appendChild(r)}}}function Hy(e,n,a){La.S(e,n,a);var r=Wr;if(r&&e){var c=Ee(r).hoistableStyles,f=qr(e);n=n||"default";var x=c.get(f);if(!x){var R={loading:0,preload:null};if(x=r.querySelector(ll(f)))R.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Di.get(f))&&dd(e,a);var I=x=r.createElement("link");ve(I),In(I,"link",e),I._p=new Promise(function(J,ut){I.onload=J,I.onerror=ut}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Yc(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:R},c.set(f,x)}}}function Gy(e,n){La.X(e,n);var a=Wr;if(a&&e){var r=Ee(a).hoistableScripts,c=Yr(e),f=r.get(c);f||(f=a.querySelector(cl(c)),f||(e=P({src:e,async:!0},n),(n=Di.get(c))&&pd(e,n),f=a.createElement("script"),ve(f),In(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Vy(e,n){La.M(e,n);var a=Wr;if(a&&e){var r=Ee(a).hoistableScripts,c=Yr(e),f=r.get(c);f||(f=a.querySelector(cl(c)),f||(e=P({src:e,async:!0,type:"module"},n),(n=Di.get(c))&&pd(e,n),f=a.createElement("script"),ve(f),In(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function ev(e,n,a,r){var c=(c=Ie.current)?ol(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=qr(a.href),n=Ee(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=qr(a.href);var f=Ee(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(ll(e)))?f._p||(x.instance=f,x.state.loading=5):(f=Di.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(e,f)),ky(c,e,f,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Yr(a),n=Ee(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function qr(e){return'href="'+yi(e)+'"'}function ll(e){return'link[rel="stylesheet"]['+e+"]"}function nv(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function ky(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Yt]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Yt]=!0,n.onload=n.onerror=Ke.bind(null,n),In(n,"link",a),ve(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Yr(e){return'[src="'+yi(e)+'"]'}function cl(e){return"script[async]"+e}function iv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+yi(a.href)+'"]');if(r)return n.instance=r,ve(r),r;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),ve(r),In(r,"style",c),Yc(r,a.precedence,e),n.instance=r;case"stylesheet":c=qr(a.href);var f=e.querySelector(ll(c));if(f)return n.state.loading|=4,n.instance=f,ve(f),f;r=nv(a),(c=Di.get(c))&&dd(r,c),f=(e.ownerDocument||e).createElement("link"),ve(f);var x=f;return x._p=new Promise(function(R,I){x.onload=R,x.onerror=I}),In(f,"link",r),n.state.loading|=4,Yc(f,a.precedence,e),n.instance=f;case"script":return f=Yr(a.src),(c=e.querySelector(cl(f)))?(n.instance=c,ve(c),c):(r=a,(c=Di.get(f))&&(r=P({},a),pd(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),ve(c),In(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Yc(r,a.precedence,e));return n.instance}function Yc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,x=0;x<r.length;x++){var R=r[x];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function dd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function pd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zc=null;function av(e,n,a){if(Zc===null){var r=new Map,c=Zc=new Map;c.set(a,r)}else c=Zc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ut]||f[A]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var R=r.get(x);R?R.push(f):r.set(x,[f])}}return r}function md(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Xy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function sv(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function rv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ov(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function lv(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=ov(n),e.suspenseyImages.push(n)),e=Yy.bind(e),n.decode().then(e,e))}function Wy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=qr(r.href),f=n.querySelector(ll(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ul.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,ve(f);return}f=n.ownerDocument||n,r=nv(r),(c=Di.get(c))&&dd(r,c),f=f.createElement("link"),ve(f);var x=f;x._p=new Promise(function(R,I){x.onload=R,x.onerror=I}),In(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ul.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Kc=0;function qy(e,n){return e.stylesheets&&e.count===0&&jc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&jc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Kc===0&&(Kc=62500*uy());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&jc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Kc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function cv(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)jc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function ul(){this.count--,cv(this)}function Yy(){this.imgCount--,cv(this)}var Qc=null;function jc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qc=new Map,n.forEach(Zy,e),Qc=null,ul.call(e))}function Zy(e,n){if(!(n.state.loading&4)){var a=Qc.get(e);if(a)var r=a.get(null);else{a=new Map,Qc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,c),a.set(x,c),this.count++,r=ul.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Zr={$$typeof:et,Provider:null,Consumer:null,_currentValue:ke,_currentValue2:ke,_threadCount:0};function Ky(e,n,a,r,c,f,x,R,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fr(0),this.hiddenUpdates=fr(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function uv(e,n,a,r,c,f,x,R,I,J,ut,St){return e=new Ky(e,n,a,x,I,J,ut,St,R),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=Df(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Of(f),e}function fv(e){return e?(e=Sr,e):Sr}function hv(e,n,a,r,c,f){c=fv(c),r.context===null?r.context=c:r.pendingContext=c,r=es(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ns(e,r,n),a!==null&&(ii(a,e,n),Go(a,e,n))}function dv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function gd(e,n){dv(e,n),(e=e.alternate)&&dv(e,n)}function pv(e){if(e.tag===13||e.tag===31){var n=Ls(e,67108864);n!==null&&ii(n,e,67108864),gd(e,67108864)}}function mv(e){if(e.tag===13||e.tag===31){var n=pi();n=To(n);var a=Ls(e,n);a!==null&&ii(a,e,n),gd(e,n)}}var Kr=!0;function Qy(e,n,a,r){var c=_t.T;_t.T=null;var f=wt.p;try{wt.p=2,_d(e,n,a,r)}finally{wt.p=f,_t.T=c}}function jy(e,n,a,r){var c=_t.T;_t.T=null;var f=wt.p;try{wt.p=8,_d(e,n,a,r)}finally{wt.p=f,_t.T=c}}function _d(e,n,a,r){if(Kr){var c=vd(r);if(c===null)Jh(e,n,r,Jc,a),_v(e,r);else if($y(c,e,n,a,r))r.stopPropagation();else if(_v(e,r),n&4&&-1<Jy.indexOf(e)){for(;c!==null;){var f=fe(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=va(f.pendingLanes);if(x!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var I=1<<31-ue(x);R.entanglements[1]|=I,x&=~I}oa(f),(Fe&6)===0&&(Bc=kt()+500,il(0))}}break;case 31:case 13:R=Ls(f,2),R!==null&&ii(R,f,2),Hc(),gd(f,2)}if(f=vd(r),f===null&&Jh(e,n,r,Jc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Jh(e,n,r,null,a)}}function vd(e){return e=nf(e),xd(e)}var Jc=null;function xd(e){if(Jc=null,e=se(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jc=e,null}function gv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case ce:return 2;case q:return 8;case Ct:case Mt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Sd=!1,ps=null,ms=null,gs=null,fl=new Map,hl=new Map,_s=[],Jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _v(e,n){switch(e){case"focusin":case"focusout":ps=null;break;case"dragenter":case"dragleave":ms=null;break;case"mouseover":case"mouseout":gs=null;break;case"pointerover":case"pointerout":fl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(n.pointerId)}}function dl(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=fe(n),n!==null&&pv(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function $y(e,n,a,r,c){switch(n){case"focusin":return ps=dl(ps,e,n,a,r,c),!0;case"dragenter":return ms=dl(ms,e,n,a,r,c),!0;case"mouseover":return gs=dl(gs,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return fl.set(f,dl(fl.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,hl.set(f,dl(hl.get(f)||null,e,n,a,r,c)),!0}return!1}function vv(e){var n=se(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,zl(e.priority,function(){mv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,zl(e.priority,function(){mv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $c(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=vd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);ef=r,a.target.dispatchEvent(r),ef=null}else return n=fe(a),n!==null&&pv(n),e.blockedOn=a,!1;n.shift()}return!0}function xv(e,n,a){$c(e)&&a.delete(n)}function tE(){Sd=!1,ps!==null&&$c(ps)&&(ps=null),ms!==null&&$c(ms)&&(ms=null),gs!==null&&$c(gs)&&(gs=null),fl.forEach(xv),hl.forEach(xv)}function tu(e,n){e.blockedOn===n&&(e.blockedOn=null,Sd||(Sd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,tE)))}var eu=null;function Sv(e){eu!==e&&(eu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){eu===e&&(eu=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(xd(r||a)===null)continue;break}var f=fe(a);f!==null&&(e.splice(n,3),n-=3,eh(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Qr(e){function n(I){return tu(I,e)}ps!==null&&tu(ps,e),ms!==null&&tu(ms,e),gs!==null&&tu(gs,e),fl.forEach(n),hl.forEach(n);for(var a=0;a<_s.length;a++){var r=_s[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<_s.length&&(a=_s[0],a.blockedOn===null);)vv(a),a.blockedOn===null&&_s.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],x=c[H]||null;if(typeof f=="function")x||Sv(a);else if(x){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[H]||null)R=x.formAction;else if(xd(c)!==null)continue}else R=x.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Sv(a)}}}function Mv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Md(e){this._internalRoot=e}nu.prototype.render=Md.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=pi();hv(a,r,e,n,null,null)},nu.prototype.unmount=Md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;hv(e.current,2,null,e,null,null),Hc(),n[ft]=null}};function nu(e){this._internalRoot=e}nu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<_s.length&&n!==0&&n<_s[a].priority;a++);_s.splice(a,0,e),a===0&&vv(e)}};var yv=t.version;if(yv!=="19.3.0")throw Error(s(527,yv,"19.3.0"));wt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var eE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{Jt=iu.inject(eE),Gt=iu}catch{}}return ml.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=fg,f=hg,x=dg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=uv(e,1,!1,null,null,a,r,null,c,f,x,Mv),e[ft]=n.current,jh(e),new Md(n)},ml.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=fg,x=hg,R=dg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=uv(e,1,!0,n,a??null,r,c,I,f,x,R,Mv),n.context=fv(null),a=n.current,r=pi(),r=To(r),c=es(r),c.callback=null,ns(a,c,r),a=r,n.current.lanes=a,Ki(n,a),oa(n),e[ft]=n.current,jh(e),new nu(n)},ml.version="19.3.0",ml}var Lv;function fE(){if(Lv)return Td.exports;Lv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Td.exports=uE(),Td.exports}var hE=fE();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jp="186",dE=0,Uv=1,pE=2,bl=1,mE=2,El=3,ar=0,si=1,fa=2,Fa=0,Al=1,Ov=2,Pv=3,Iv=4,gE=5,uo=100,_E=101,vE=102,xE=103,SE=104,ME=200,yE=201,EE=202,TE=203,Fx=204,Hx=205,bE=206,AE=207,RE=208,wE=209,CE=210,DE=211,NE=212,LE=213,UE=214,lp=0,cp=1,up=2,Cl=3,fp=4,hp=5,dp=6,pp=7,$p=0,OE=1,PE=2,pa=0,Gx=1,Vx=2,kx=3,Xx=4,Wx=5,qx=6,Yx=7,Zx=300,sr=301,go=302,wd=303,Cd=304,Xu=306,mp=1e3,Wi=1001,gp=1002,zn=1003,IE=1004,au=1005,Vn=1006,Dd=1007,er=1008,xi=1009,Kx=1010,Qx=1011,Dl=1012,tm=1013,ma=1014,ha=1015,ga=1016,em=1017,nm=1018,Nl=1020,jx=35902,Jx=35899,$x=1021,tS=1022,qi=1023,Va=1026,nr=1027,eS=1028,im=1029,rr=1030,am=1031,sm=1033,Cu=33776,Du=33777,Nu=33778,Lu=33779,_p=35840,vp=35841,xp=35842,Sp=35843,Mp=36196,yp=37492,Ep=37496,Tp=37488,bp=37489,Ou=37490,Ap=37491,Rp=37808,wp=37809,Cp=37810,Dp=37811,Np=37812,Lp=37813,Up=37814,Op=37815,Pp=37816,Ip=37817,Bp=37818,zp=37819,Fp=37820,Hp=37821,Gp=36492,Vp=36494,kp=36495,Xp=36283,Wp=36284,Pu=36285,qp=36286,BE=3200,Iu=0,zE=1,bs="",vi="srgb",Bu="srgb-linear",zu="linear",Ze="srgb",Nd=7680,FE=519,HE=512,GE=513,VE=514,rm=515,kE=516,XE=517,om=518,WE=519,qE=35044,Bv="300 es",da=2e3,Ll=2001;function YE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Fu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ZE(){const o=Fu("canvas");return o.style.display="block",o}const zv={};function Fv(...o){const t="THREE."+o.shift();console.log(t,...o)}function nS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function oe(...o){o=nS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Be(...o){o=nS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function po(...o){const t=o.join(" ");t in zv||(zv[t]=!0,oe(...o))}function KE(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const QE={[lp]:cp,[up]:dp,[fp]:pp,[Cl]:hp,[cp]:lp,[dp]:up,[pp]:fp,[hp]:Cl};class or{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hv=1234567;const Rl=Math.PI/180,Ul=180/Math.PI;function vo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function De(o,t,i){return Math.max(t,Math.min(i,o))}function lm(o,t){return(o%t+t)%t}function jE(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function JE(o,t,i){return o!==t?(i-o)/(t-o):0}function wl(o,t,i){return(1-i)*o+i*t}function $E(o,t,i,s){return wl(o,t,1-Math.exp(-i*s))}function tT(o,t=1){return t-Math.abs(lm(o,t*2)-t)}function eT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function nT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function iT(o,t){return o+Math.floor(Math.random()*(t-o+1))}function aT(o,t){return o+Math.random()*(t-o)}function sT(o){return o*(.5-Math.random())}function rT(o){o!==void 0&&(Hv=o);let t=Hv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function oT(o){return o*Rl}function lT(o){return o*Ul}function cT(o){return o>0&&Number.isInteger(o)&&2**Math.round(Math.log2(o))===o}function uT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function fT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function hT(o,t,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),m=h(i/2),p=u((t+s)/2),v=h((t+s)/2),g=u((t-s)/2),_=h((t-s)/2),M=u((s-t)/2),b=h((s-t)/2);switch(l){case"XYX":o.set(d*v,m*g,m*_,d*p);break;case"YZY":o.set(m*_,d*v,m*g,d*p);break;case"ZXZ":o.set(m*g,m*_,d*v,d*p);break;case"XZX":o.set(d*v,m*b,m*M,d*p);break;case"YXY":o.set(m*M,d*v,m*b,d*p);break;case"ZYZ":o.set(m*b,m*M,d*v,d*p);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function fo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ir={DEG2RAD:Rl,RAD2DEG:Ul,generateUUID:vo,clamp:De,euclideanModulo:lm,mapLinear:jE,inverseLerp:JE,lerp:wl,damp:$E,pingpong:tT,smoothstep:eT,smootherstep:nT,randInt:iT,randFloat:aT,randFloatSpread:sT,seededRandom:rT,degToRad:oT,radToDeg:lT,isPowerOfTwo:cT,ceilPowerOfTwo:uT,floorPowerOfTwo:fT,setQuaternionFromProperEuler:hT,normalize:Kn,denormalize:fo},mm=class mm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mm.prototype.isVector2=!0;let Ae=mm;class lr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],_=u[h+0],M=u[h+1],b=u[h+2],w=u[h+3];if(g!==w||m!==_||p!==M||v!==b){let y=m*_+p*M+v*b+g*w;y<0&&(_=-_,M=-M,b=-b,w=-w,y=-y);let S=1-d;if(y<.9995){const L=Math.acos(y),B=Math.sin(L);S=Math.sin(S*L)/B,d=Math.sin(d*L)/B,m=m*S+_*d,p=p*S+M*d,v=v*S+b*d,g=g*S+w*d}else{m=m*S+_*d,p=p*S+M*d,v=v*S+b*d,g=g*S+w*d;const L=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=L,p*=L,v*=L,g*=L}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=u[h],_=u[h+1],M=u[h+2],b=u[h+3];return t[i]=d*b+v*g+m*M-p*_,t[i+1]=m*b+v*_+p*g-d*M,t[i+2]=p*b+v*M+d*_-m*g,t[i+3]=v*b-d*g-m*_-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(u/2),_=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=_*v*g+p*M*b,this._y=p*M*g-_*v*b,this._z=p*v*b+_*M*g,this._w=p*v*g-_*M*b;break;case"YXZ":this._x=_*v*g+p*M*b,this._y=p*M*g-_*v*b,this._z=p*v*b-_*M*g,this._w=p*v*g+_*M*b;break;case"ZXY":this._x=_*v*g-p*M*b,this._y=p*M*g+_*v*b,this._z=p*v*b+_*M*g,this._w=p*v*g-_*M*b;break;case"ZYX":this._x=_*v*g-p*M*b,this._y=p*M*g+_*v*b,this._z=p*v*b-_*M*g,this._w=p*v*g+_*M*b;break;case"YZX":this._x=_*v*g+p*M*b,this._y=p*M*g+_*v*b,this._z=p*v*b-_*M*g,this._w=p*v*g-_*M*b;break;case"XZY":this._x=_*v*g-p*M*b,this._y=p*M*g-_*v*b,this._z=p*v*b+_*M*g,this._w=p*v*g+_*M*b;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],_=s+d+g;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-s*p,this._z=u*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const gm=class gm{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Gv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Gv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-u*l),g=2*(u*s-h*i);return this.x=i+m*p+h*g-d*v,this.y=s+m*v+d*p-u*g,this.z=l+m*g+u*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ld.copy(this).projectOnVector(t),this.sub(Ld)}reflect(t){return this.sub(Ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gm.prototype.isVector3=!0;let V=gm;const Ld=new V,Gv=new lr,_m=class _m{constructor(t,i,s,l,u,h,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],_=s[2],M=s[5],b=s[8],w=l[0],y=l[3],S=l[6],L=l[1],B=l[4],C=l[7],D=l[2],N=l[5],P=l[8];return u[0]=h*w+d*L+m*D,u[3]=h*y+d*B+m*N,u[6]=h*S+d*C+m*P,u[1]=p*w+v*L+g*D,u[4]=p*y+v*B+g*N,u[7]=p*S+v*C+g*P,u[2]=_*w+M*L+b*D,u[5]=_*y+M*B+b*N,u[8]=_*S+M*C+b*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*u*v+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=v*h-d*p,_=d*m-v*u,M=p*u-h*m,b=i*g+s*_+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=g*w,t[1]=(l*p-v*s)*w,t[2]=(d*s-l*h)*w,t[3]=_*w,t[4]=(v*i-l*m)*w,t[5]=(l*u-d*i)*w,t[6]=M*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ud.makeScale(t,i)),this}rotate(t){return po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ud.makeRotation(-t)),this}translate(t,i){return po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ud.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_m.prototype.isMatrix3=!0;let he=_m;const Ud=new he,Vv=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kv=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dT(){const o={enabled:!0,workingColorSpace:Bu,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ze&&(l.r=Ha(l.r),l.g=Ha(l.g),l.b=Ha(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ze&&(l.r=mo(l.r),l.g=mo(l.g),l.b=mo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===bs?zu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Bu]:{primaries:t,whitePoint:s,transfer:zu,toXYZ:Vv,fromXYZ:kv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:t,whitePoint:s,transfer:Ze,toXYZ:Vv,fromXYZ:kv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),o}const Ue=dT();function Ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let jr;class pT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{jr===void 0&&(jr=Fu("canvas")),jr.width=t.width,jr.height=t.height;const l=jr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=jr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Fu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ha(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ha(i[s]/255)*255):i[s]=Ha(i[s]);return{data:i,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mT=0;class cm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=vo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Od(l[h].image)):u.push(Od(l[h]))}else u=Od(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Od(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?pT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let gT=0;const Pd=new V;class kn extends or{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=Wi,l=Wi,u=Vn,h=er,d=qi,m=xi,p=kn.DEFAULT_ANISOTROPY,v=bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=vo(),this.name="",this.source=new cm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pd).x}get height(){return this.source.getSize(Pd).y}get depth(){return this.source.getSize(Pd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mp:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case gp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mp:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case gp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Zx;kn.DEFAULT_ANISOTROPY=1;const vm=class vm{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],v=m[4],g=m[8],_=m[1],M=m[5],b=m[9],w=m[2],y=m[6],S=m[10];if(Math.abs(v-_)<.01&&Math.abs(g-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+w)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(p+1)/2,C=(M+1)/2,D=(S+1)/2,N=(v+_)/4,P=(g+w)/4,T=(b+y)/4;return B>C&&B>D?B<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(B),l=N/s,u=P/s):C>D?C<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),s=N/l,u=T/l):D<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(D),s=P/u,l=T/u),this.set(s,l,u,i),this}let L=Math.sqrt((y-b)*(y-b)+(g-w)*(g-w)+(_-v)*(_-v));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(g-w)/L,this.z=(_-v)/L,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vm.prototype.isVector4=!0;let on=vm;class _T extends or{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},u=new kn(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new cm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends _T{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class iS extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vT extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ku=class ku{constructor(t,i,s,l,u,h,d,m,p,v,g,_,M,b,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,v,g,_,M,b,w,y)}set(t,i,s,l,u,h,d,m,p,v,g,_,M,b,w,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=g,S[14]=_,S[3]=M,S[7]=b,S[11]=w,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ku().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Jr.setFromMatrixColumn(t,0).length(),u=1/Jr.setFromMatrixColumn(t,1).length(),h=1/Jr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const _=h*v,M=h*g,b=d*v,w=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=_-w*p,i[9]=-d*m,i[2]=w-_*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const _=m*v,M=m*g,b=p*v,w=p*g;i[0]=_+w*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=M*d-b,i[6]=w+_*d,i[10]=h*m}else if(t.order==="ZXY"){const _=m*v,M=m*g,b=p*v,w=p*g;i[0]=_-w*d,i[4]=-h*g,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*v,i[9]=w-_*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const _=h*v,M=h*g,b=d*v,w=d*g;i[0]=m*v,i[4]=b*p-M,i[8]=_*p+w,i[1]=m*g,i[5]=w*p+_,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const _=h*m,M=h*p,b=d*m,w=d*p;i[0]=m*v,i[4]=w-_*g,i[8]=b*g+M,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*g+b,i[10]=_-w*g}else if(t.order==="XZY"){const _=h*m,M=h*p,b=d*m,w=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=_*g+w,i[5]=h*v,i[9]=M*g-b,i[2]=b*g-M,i[6]=d*v,i[10]=w*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xT,t,ST)}lookAt(t,i,s){const l=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),xs.crossVectors(s,gi),xs.lengthSq()===0&&(Math.abs(s.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),xs.crossVectors(s,gi)),xs.normalize(),su.crossVectors(gi,xs),l[0]=xs.x,l[4]=su.x,l[8]=gi.x,l[1]=xs.y,l[5]=su.y,l[9]=gi.y,l[2]=xs.z,l[6]=su.z,l[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],_=s[9],M=s[13],b=s[2],w=s[6],y=s[10],S=s[14],L=s[3],B=s[7],C=s[11],D=s[15],N=l[0],P=l[4],T=l[8],U=l[12],F=l[1],k=l[5],K=l[9],st=l[13],X=l[2],et=l[6],W=l[10],$=l[14],ht=l[3],it=l[7],nt=l[11],xt=l[15];return u[0]=h*N+d*F+m*X+p*ht,u[4]=h*P+d*k+m*et+p*it,u[8]=h*T+d*K+m*W+p*nt,u[12]=h*U+d*st+m*$+p*xt,u[1]=v*N+g*F+_*X+M*ht,u[5]=v*P+g*k+_*et+M*it,u[9]=v*T+g*K+_*W+M*nt,u[13]=v*U+g*st+_*$+M*xt,u[2]=b*N+w*F+y*X+S*ht,u[6]=b*P+w*k+y*et+S*it,u[10]=b*T+w*K+y*W+S*nt,u[14]=b*U+w*st+y*$+S*xt,u[3]=L*N+B*F+C*X+D*ht,u[7]=L*P+B*k+C*et+D*it,u[11]=L*T+B*K+C*W+D*nt,u[15]=L*U+B*st+C*$+D*xt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],g=t[6],_=t[10],M=t[14],b=t[3],w=t[7],y=t[11],S=t[15],L=m*M-p*_,B=d*M-p*g,C=d*_-m*g,D=h*M-p*v,N=h*_-m*v,P=h*g-d*v;return i*(w*L-y*B+S*C)-s*(b*L-y*D+S*N)+l*(b*B-w*D+S*P)-u*(b*C-w*N+y*P)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[1],h=t[5],d=t[9],m=t[2],p=t[6],v=t[10];return i*(h*v-d*p)-s*(u*v-d*m)+l*(u*p-h*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=t[9],_=t[10],M=t[11],b=t[12],w=t[13],y=t[14],S=t[15],L=i*d-s*h,B=i*m-l*h,C=i*p-u*h,D=s*m-l*d,N=s*p-u*d,P=l*p-u*m,T=v*w-g*b,U=v*y-_*b,F=v*S-M*b,k=g*y-_*w,K=g*S-M*w,st=_*S-M*y,X=L*st-B*K+C*k+D*F-N*U+P*T;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const et=1/X;return t[0]=(d*st-m*K+p*k)*et,t[1]=(l*K-s*st-u*k)*et,t[2]=(w*P-y*N+S*D)*et,t[3]=(_*N-g*P-M*D)*et,t[4]=(m*F-h*st-p*U)*et,t[5]=(i*st-l*F+u*U)*et,t[6]=(y*C-b*P-S*B)*et,t[7]=(v*P-_*C+M*B)*et,t[8]=(h*K-d*F+p*T)*et,t[9]=(s*F-i*K-u*T)*et,t[10]=(b*N-w*C+S*L)*et,t[11]=(g*C-v*N-M*L)*et,t[12]=(d*U-h*k-m*T)*et,t[13]=(i*k-s*U+l*T)*et,t[14]=(w*B-b*D-y*L)*et,t[15]=(v*D-g*B+_*L)*et,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,v=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,g=d+d,_=u*p,M=u*v,b=u*g,w=h*v,y=h*g,S=d*g,L=m*p,B=m*v,C=m*g,D=s.x,N=s.y,P=s.z;return l[0]=(1-(w+S))*D,l[1]=(M+C)*D,l[2]=(b-B)*D,l[3]=0,l[4]=(M-C)*N,l[5]=(1-(_+S))*N,l[6]=(y+L)*N,l[7]=0,l[8]=(b+B)*P,l[9]=(y-L)*P,l[10]=(1-(_+w))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return s.set(1,1,1),i.identity(),this;let h=Jr.set(l[0],l[1],l[2]).length();const d=Jr.set(l[4],l[5],l[6]).length(),m=Jr.set(l[8],l[9],l[10]).length();u<0&&(h=-h),Hi.copy(this);const p=1/h,v=1/d,g=1/m;return Hi.elements[0]*=p,Hi.elements[1]*=p,Hi.elements[2]*=p,Hi.elements[4]*=v,Hi.elements[5]*=v,Hi.elements[6]*=v,Hi.elements[8]*=g,Hi.elements[9]*=g,Hi.elements[10]*=g,i.setFromRotationMatrix(Hi),s.x=h,s.y=d,s.z=m,this}makePerspective(t,i,s,l,u,h,d=da,m=!1){const p=this.elements,v=2*u/(i-t),g=2*u/(s-l),_=(i+t)/(i-t),M=(s+l)/(s-l);let b,w;if(m)b=u/(h-u),w=h*u/(h-u);else if(d===da)b=-(h+u)/(h-u),w=-2*h*u/(h-u);else if(d===Ll)b=-h/(h-u),w=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=da,m=!1){const p=this.elements,v=2/(i-t),g=2/(s-l),_=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,w;if(m)b=1/(h-u),w=h/(h-u);else if(d===da)b=-2/(h-u),w=-(h+u)/(h-u);else if(d===Ll)b=-1/(h-u),w=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};ku.prototype.isMatrix4=!0;let ln=ku;const Jr=new V,Hi=new ln,xT=new V(0,0,0),ST=new V(1,1,1),xs=new V,su=new V,gi=new V,Xv=new ln,Wv=new lr;class ka{constructor(t=0,i=0,s=0,l=ka.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-De(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(De(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-De(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Xv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Wv.setFromEuler(this),this.setFromQuaternion(Wv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ka.DEFAULT_ORDER="XYZ";class aS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let MT=0;const qv=new V,$r=new lr,Ua=new ln,ru=new V,gl=new V,yT=new V,ET=new lr,Yv=new V(1,0,0),Zv=new V(0,1,0),Kv=new V(0,0,1),Qv={type:"added"},TT={type:"removed"},to={type:"childadded",child:null},Id={type:"childremoved",child:null};class Nn extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new V,i=new ka,s=new lr,l=new V(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new he}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return $r.setFromAxisAngle(t,i),this.quaternion.multiply($r),this}rotateOnWorldAxis(t,i){return $r.setFromAxisAngle(t,i),this.quaternion.premultiply($r),this}rotateX(t){return this.rotateOnAxis(Yv,t)}rotateY(t){return this.rotateOnAxis(Zv,t)}rotateZ(t){return this.rotateOnAxis(Kv,t)}translateOnAxis(t,i){return qv.copy(t).applyQuaternion(this.quaternion),this.position.add(qv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Yv,t)}translateY(t){return this.translateOnAxis(Zv,t)}translateZ(t){return this.translateOnAxis(Kv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?ru.copy(t):ru.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),gl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(gl,ru,this.up):Ua.lookAt(ru,gl,this.up),this.quaternion.setFromRotationMatrix(Ua),l&&(Ua.extractRotation(l.matrixWorld),$r.setFromRotationMatrix(Ua),this.quaternion.premultiply($r.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qv),to.child=t,this.dispatchEvent(to),to.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(TT),Id.child=t,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qv),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,t,yT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,ET,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const u=this.children;for(let h=0,d=u.length;h<d;h++)u[h].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),g=h(t.shapes),_=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Nn.DEFAULT_UP=new V(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rn extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bT={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),S=this._getHandJoint(p,w);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=v.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&_>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(bT)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new rn;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const sS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},ou={h:0,s:0,l:0};function zd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ue.workingColorSpace){if(t=lm(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=zd(h,u,t+1/3),this.g=zd(h,u,t),this.b=zd(h,u,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,i=vi){function s(u){u!==void 0&&parseFloat(u)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:oe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=vi){const s=sS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return Ue.workingToColorSpace(Gn.copy(this),t),Math.round(De(Gn.r*255,0,255))*65536+Math.round(De(Gn.g*255,0,255))*256+Math.round(De(Gn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,u=Gn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=v<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Gn.copy(this),i),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=vi){Ue.workingToColorSpace(Gn.copy(this),t);const i=Gn.r,s=Gn.g,l=Gn.b;return t!==vi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ss),this.setHSL(Ss.h+t,Ss.s+i,Ss.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ss),t.getHSL(ou);const s=wl(Ss.h,ou.h,i),l=wl(Ss.s,ou.s,i),u=wl(Ss.l,ou.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Me;Me.NAMES=sS;class um{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Me(t),this.near=i,this.far=s}clone(){return new um(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class AT extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ka,this.environmentIntensity=1,this.environmentRotation=new ka,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Gi=new V,Oa=new V,Fd=new V,Pa=new V,eo=new V,no=new V,jv=new V,Hd=new V,Gd=new V,Vd=new V,kd=new on,Xd=new on,Wd=new on;class Xi{constructor(t=new V,i=new V,s=new V){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Gi.subVectors(t,i),l.cross(Gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Gi.subVectors(l,i),Oa.subVectors(s,i),Fd.subVectors(t,i);const h=Gi.dot(Gi),d=Gi.dot(Oa),m=Gi.dot(Fd),p=Oa.dot(Oa),v=Oa.dot(Fd),g=h*p-d*d;if(g===0)return u.set(0,0,0),null;const _=1/g,M=(p*m-d*v)*_,b=(h*v-d*m)*_;return u.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,Pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Pa.x),m.addScaledVector(h,Pa.y),m.addScaledVector(d,Pa.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return kd.setScalar(0),Xd.setScalar(0),Wd.setScalar(0),kd.fromBufferAttribute(t,i),Xd.fromBufferAttribute(t,s),Wd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(kd,u.x),h.addScaledVector(Xd,u.y),h.addScaledVector(Wd,u.z),h}static isFrontFacing(t,i,s,l){return Gi.subVectors(s,i),Oa.subVectors(t,i),Gi.cross(Oa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),Gi.cross(Oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Xi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;eo.subVectors(l,s),no.subVectors(u,s),Hd.subVectors(t,s);const m=eo.dot(Hd),p=no.dot(Hd);if(m<=0&&p<=0)return i.copy(s);Gd.subVectors(t,l);const v=eo.dot(Gd),g=no.dot(Gd);if(v>=0&&g<=v)return i.copy(l);const _=m*g-v*p;if(_<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(eo,h);Vd.subVectors(t,u);const M=eo.dot(Vd),b=no.dot(Vd);if(b>=0&&M<=b)return i.copy(u);const w=M*p-m*b;if(w<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(no,d);const y=v*b-M*g;if(y<=0&&g-v>=0&&M-b>=0)return jv.subVectors(u,l),d=(g-v)/(g-v+(M-b)),i.copy(l).addScaledVector(jv,d);const S=1/(y+w+_);return h=w*S,d=_*S,i.copy(s).addScaledVector(eo,h).addScaledVector(no,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Pl{constructor(t=new V(1/0,1/0,1/0),i=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Vi):Vi.fromBufferAttribute(u,h),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),lu.copy(s.boundingBox)),lu.applyMatrix4(t.matrixWorld),this.union(lu)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_l),cu.subVectors(this.max,_l),io.subVectors(t.a,_l),ao.subVectors(t.b,_l),so.subVectors(t.c,_l),Ms.subVectors(ao,io),ys.subVectors(so,ao),Qs.subVectors(io,so);let i=[0,-Ms.z,Ms.y,0,-ys.z,ys.y,0,-Qs.z,Qs.y,Ms.z,0,-Ms.x,ys.z,0,-ys.x,Qs.z,0,-Qs.x,-Ms.y,Ms.x,0,-ys.y,ys.x,0,-Qs.y,Qs.x,0];return!qd(i,io,ao,so,cu)||(i=[1,0,0,0,1,0,0,0,1],!qd(i,io,ao,so,cu))?!1:(uu.crossVectors(Ms,ys),i=[uu.x,uu.y,uu.z],qd(i,io,ao,so,cu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ia=[new V,new V,new V,new V,new V,new V,new V,new V],Vi=new V,lu=new Pl,io=new V,ao=new V,so=new V,Ms=new V,ys=new V,Qs=new V,_l=new V,cu=new V,uu=new V,js=new V;function qd(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){js.fromArray(o,u);const d=l.x*Math.abs(js.x)+l.y*Math.abs(js.y)+l.z*Math.abs(js.z),m=t.dot(js),p=i.dot(js),v=s.dot(js);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Mn=new V,fu=new Ae;let RT=0;class Ga extends or{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=qE,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)fu.fromBufferAttribute(this,i),fu.applyMatrix3(t),this.setXY(i,fu.x,fu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=fo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=fo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=fo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=fo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=fo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),u=Kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class rS extends Ga{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class oS extends Ga{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class pn extends Ga{constructor(t,i,s){super(new Float32Array(t),i,s)}}const wT=new Pl,vl=new V,Yd=new V;class Wu{constructor(t=new V,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):wT.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vl.subVectors(t,this.center);const i=vl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(vl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vl.copy(t.center).add(Yd)),this.expandByPoint(vl.copy(t.center).sub(Yd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let CT=0;const Ni=new ln,Zd=new Nn,ro=new V,_i=new Pl,xl=new Pl,Cn=new V;class Jn extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(YE(t)?oS:rS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new he().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ni.makeRotationFromQuaternion(t),this.applyMatrix4(Ni),this}rotateX(t){return Ni.makeRotationX(t),this.applyMatrix4(Ni),this}rotateY(t){return Ni.makeRotationY(t),this.applyMatrix4(Ni),this}rotateZ(t){return Ni.makeRotationZ(t),this.applyMatrix4(Ni),this}translate(t,i,s){return Ni.makeTranslation(t,i,s),this.applyMatrix4(Ni),this}scale(t,i,s){return Ni.makeScale(t,i,s),this.applyMatrix4(Ni),this}lookAt(t){return Zd.lookAt(t),Zd.updateMatrix(),this.applyMatrix4(Zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new pn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];_i.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const s=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];xl.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(_i.min,xl.min),_i.expandByPoint(Cn),Cn.addVectors(_i.max,xl.max),_i.expandByPoint(Cn)):(_i.expandByPoint(xl.min),_i.expandByPoint(xl.max))}_i.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)Cn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Cn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Cn.fromBufferAttribute(d,p),m&&(ro.fromBufferAttribute(t,p),Cn.add(ro)),l=Math.max(l,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new Ga(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new V,m[T]=new V;const p=new V,v=new V,g=new V,_=new Ae,M=new Ae,b=new Ae,w=new V,y=new V;function S(T,U,F){p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,U),g.fromBufferAttribute(s,F),_.fromBufferAttribute(u,T),M.fromBufferAttribute(u,U),b.fromBufferAttribute(u,F),v.sub(p),g.sub(p),M.sub(_),b.sub(_);const k=1/(M.x*b.y-b.x*M.y);isFinite(k)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(k),y.copy(g).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(k),d[T].add(w),d[U].add(w),d[F].add(w),m[T].add(y),m[U].add(y),m[F].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let T=0,U=L.length;T<U;++T){const F=L[T],k=F.start,K=F.count;for(let st=k,X=k+K;st<X;st+=3)S(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const B=new V,C=new V,D=new V,N=new V;function P(T){D.fromBufferAttribute(l,T),N.copy(D);const U=d[T];B.copy(U),B.sub(D.multiplyScalar(D.dot(U))).normalize(),C.crossVectors(N,U);const k=C.dot(m[T])<0?-1:1;h.setXYZW(T,B.x,B.y,B.z,k)}for(let T=0,U=L.length;T<U;++T){const F=L[T],k=F.start,K=F.count;for(let st=k,X=k+K;st<X;st+=3)P(t.getX(st+0)),P(t.getX(st+1)),P(t.getX(st+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ga(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,M=s.count;_<M;_++)s.setXYZ(_,0,0,0);const l=new V,u=new V,h=new V,d=new V,m=new V,p=new V,v=new V,g=new V;if(t)for(let _=0,M=t.count;_<M;_+=3){const b=t.getX(_+0),w=t.getX(_+1),y=t.getX(_+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),v.subVectors(h,u),g.subVectors(l,u),v.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),v.subVectors(h,u),g.subVectors(l,u),v.cross(g),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Cn.fromBufferAttribute(t,i),Cn.normalize(),t.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,g=d.normalized,_=new p.constructor(m.length*v);let M=0,b=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*v;for(let S=0;S<v;S++)_[b++]=p[M++]}return new Ga(_,v,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,g=p.length;v<g;v++){const _=p[v],M=t(_,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,_=p.length;g<_;g++){const M=p[g];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],g=u[p];for(let _=0,M=g.length;_<M;_++)v.push(g[_].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kd=new V,DT=new V,NT=new he;class Ts{constructor(t=new V(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Kd.subVectors(s,i).cross(DT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Kd),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/u;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||NT.getNormalMatrix(t),l=this.coplanarPoint(Kd).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let LT=0;class cr extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=Al,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fx,this.blendDst=Hx,this.blendEquation=uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=FE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nd,this.stencilZFail=Nd,this.stencilZPass=Nd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new Ts().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ae().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ba=new V,Qd=new V,hu=new V,du=new V;class lS{constructor(t=new V,i=new V(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ba)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ba.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ba.copy(this.origin).addScaledVector(this.direction,i),Ba.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Qd.copy(t).add(i).multiplyScalar(.5),hu.copy(i).sub(t).normalize(),du.copy(this.origin).sub(Qd);const u=t.distanceTo(i)*.5,h=-this.direction.dot(hu),d=du.dot(this.direction),m=-du.dot(hu),p=du.lengthSq(),v=Math.abs(1-h*h);let g,_,M,b;if(v>0)if(g=h*m-d,_=h*d-m,b=u*v,g>=0)if(_>=-b)if(_<=b){const w=1/v;g*=w,_*=w,M=g*(g+h*_+2*d)+_*(h*g+_+2*m)+p}else _=u,g=Math.max(0,-(h*_+d)),M=-g*g+_*(_+2*m)+p;else _=-u,g=Math.max(0,-(h*_+d)),M=-g*g+_*(_+2*m)+p;else _<=-b?(g=Math.max(0,-(-h*u+d)),_=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+_*(_+2*m)+p):_<=b?(g=0,_=Math.min(Math.max(-u,-m),u),M=_*(_+2*m)+p):(g=Math.max(0,-(h*u+d)),_=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+_*(_+2*m)+p);else _=h>0?-u:u,g=Math.max(0,-(h*_+d)),M=-g*g+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Qd).addScaledVector(hu,_),M}intersectSphere(t,i){if(t.radius<0)return null;Ba.subVectors(t.center,this.origin);const s=Ba.dot(this.direction),l=Ba.dot(Ba)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(s=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(s=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),v>=0?(u=(t.min.y-_.y)*v,h=(t.max.y-_.y)*v):(u=(t.max.y-_.y)*v,h=(t.min.y-_.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-_.z)*g,m=(t.max.z-_.z)*g):(d=(t.max.z-_.z)*g,m=(t.min.z-_.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ba)!==null}intersectTriangle(t,i,s,l,u){const h=this.origin,d=this.direction,m=d.x,p=d.y,v=d.z,g=t.x-h.x,_=t.y-h.y,M=t.z-h.z,b=i.x-h.x,w=i.y-h.y,y=i.z-h.z,S=s.x-h.x,L=s.y-h.y,B=s.z-h.z,C=Math.abs(m),D=Math.abs(p),N=Math.abs(v);let P,T,U,F,k,K,st,X,et,W,$,ht;if(C>=D&&C>=N?(U=m,K=g,et=b,ht=S,m>=0?(P=p,T=v,F=_,k=M,st=w,X=y,W=L,$=B):(P=v,T=p,F=M,k=_,st=y,X=w,W=B,$=L)):D>=N?(U=p,K=_,et=w,ht=L,p>=0?(P=v,T=m,F=M,k=g,st=y,X=b,W=B,$=S):(P=m,T=v,F=g,k=M,st=b,X=y,W=S,$=B)):(U=v,K=M,et=y,ht=B,v>=0?(P=m,T=p,F=g,k=_,st=b,X=w,W=S,$=L):(P=p,T=m,F=_,k=g,st=w,X=b,W=L,$=S)),U===0)return null;const it=P/U,nt=T/U,xt=1/U,Zt=F-it*K,Kt=k-nt*K,z=st-it*et,mt=X-nt*et,Rt=W-it*ht,Q=$-nt*ht,dt=Rt*mt-Q*z,bt=Zt*Q-Kt*Rt,Bt=z*Kt-mt*Zt;if(l){if(dt<0||bt<0||Bt<0)return null}else if((dt<0||bt<0||Bt<0)&&(dt>0||bt>0||Bt>0))return null;const _t=dt+bt+Bt;if(_t===0)return null;const wt=xt*(dt*K+bt*et+Bt*ht);return(_t>0?wt<0:wt>0)?null:this.at(wt/_t,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class za extends cr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.combine=$p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Jv=new ln,Js=new lS,pu=new Wu,$v=new V,mu=new V,gu=new V,_u=new V,jd=new V,vu=new V,tx=new V,xu=new V;class re extends Nn{constructor(t=new Jn,i=new za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){vu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],g=u[m];v!==0&&(jd.fromBufferAttribute(g,t),h?vu.addScaledVector(jd,v):vu.addScaledVector(jd.sub(i),v))}i.add(vu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pu.copy(s.boundingSphere),pu.applyMatrix4(u),Js.copy(t.ray).recast(t.near),!(pu.containsPoint(Js.origin)===!1&&(Js.intersectSphere(pu,$v)===null||Js.origin.distanceToSquared($v)>(t.far-t.near)**2))&&(Jv.copy(u).invert(),Js.copy(t.ray).applyMatrix4(Jv),!(s.boundingBox!==null&&Js.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Js)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,_=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=_.length;b<w;b++){const y=_[b],S=h[y.materialIndex],L=Math.max(y.start,M.start),B=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=L,D=B;C<D;C+=3){const N=d.getX(C),P=d.getX(C+1),T=d.getX(C+2);l=Su(this,S,t,s,p,v,g,N,P,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=b,S=w;y<S;y+=3){const L=d.getX(y),B=d.getX(y+1),C=d.getX(y+2);l=Su(this,h,t,s,p,v,g,L,B,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,w=_.length;b<w;b++){const y=_[b],S=h[y.materialIndex],L=Math.max(y.start,M.start),B=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=L,D=B;C<D;C+=3){const N=C,P=C+1,T=C+2;l=Su(this,S,t,s,p,v,g,N,P,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=b,S=w;y<S;y+=3){const L=y,B=y+1,C=y+2;l=Su(this,h,t,s,p,v,g,L,B,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function UT(o,t,i,s,l,u,h,d){let m;if(t.side===si?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===ar,d),m===null)return null;xu.copy(d),xu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(xu);return p<i.near||p>i.far?null:{distance:p,point:xu.clone(),object:o}}function Su(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,mu),o.getVertexPosition(m,gu),o.getVertexPosition(p,_u);const v=UT(o,t,i,s,mu,gu,_u,tx);if(v){const g=new V;Xi.getBarycoord(tx,mu,gu,_u,g),l&&(v.uv=Xi.getInterpolatedAttribute(l,d,m,p,g,new Ae)),u&&(v.uv1=Xi.getInterpolatedAttribute(u,d,m,p,g,new Ae)),h&&(v.normal=Xi.getInterpolatedAttribute(h,d,m,p,g,new V),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new V,materialIndex:0};Xi.getNormal(mu,gu,_u,_.normal),v.face=_,v.barycoord=g}return v}class OT extends kn{constructor(t=null,i=1,s=1,l,u,h,d,m,p=zn,v=zn,g,_){super(null,h,d,m,p,v,l,u,g,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $s=new Wu,PT=new Ae(.5,.5),Mu=new V;class fm{constructor(t=new Ts,i=new Ts,s=new Ts,l=new Ts,u=new Ts,h=new Ts){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=da,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],v=u[4],g=u[5],_=u[6],M=u[7],b=u[8],w=u[9],y=u[10],S=u[11],L=u[12],B=u[13],C=u[14],D=u[15];if(l[0].setComponents(p-h,M-v,S-b,D-L).normalize(),l[1].setComponents(p+h,M+v,S+b,D+L).normalize(),l[2].setComponents(p+d,M+g,S+w,D+B).normalize(),l[3].setComponents(p-d,M-g,S-w,D-B).normalize(),s)l[4].setComponents(m,_,y,C).normalize(),l[5].setComponents(p-m,M-_,S-y,D-C).normalize();else if(l[4].setComponents(p-m,M-_,S-y,D-C).normalize(),i===da)l[5].setComponents(p+m,M+_,S+y,D+C).normalize();else if(i===Ll)l[5].setComponents(m,_,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(t){$s.center.set(0,0,0);const i=PT.distanceTo(t.center);return $s.radius=.7071067811865476+i,$s.applyMatrix4(t.matrixWorld),this.intersectsSphere($s)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Mu.x=l.normal.x>0?t.max.x:t.min.x,Mu.y=l.normal.y>0?t.max.y:t.min.y,Mu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cS extends cr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hu=new V,Gu=new V,ex=new ln,Sl=new lS,yu=new Wu,Jd=new V,nx=new V;class IT extends Nn{constructor(t=new Jn,i=new cS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Hu.fromBufferAttribute(i,l-1),Gu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Hu.distanceTo(Gu);t.setAttribute("lineDistance",new pn(s,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),yu.copy(s.boundingSphere),yu.applyMatrix4(l),yu.radius+=u,t.ray.intersectsSphere(yu)===!1)return;ex.copy(l).invert(),Sl.copy(t.ray).applyMatrix4(ex);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,_=s.attributes.position;if(v!==null){const M=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let w=M,y=b-1;w<y;w+=p){const S=v.getX(w),L=v.getX(w+1),B=Eu(this,t,Sl,m,S,L,w);B&&i.push(B)}if(this.isLineLoop){const w=v.getX(b-1),y=v.getX(M),S=Eu(this,t,Sl,m,w,y,b-1);S&&i.push(S)}}else{const M=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let w=M,y=b-1;w<y;w+=p){const S=Eu(this,t,Sl,m,w,w+1,w);S&&i.push(S)}if(this.isLineLoop){const w=Eu(this,t,Sl,m,b-1,M,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Eu(o,t,i,s,l,u,h){const d=o.geometry.attributes.position;if(Hu.fromBufferAttribute(d,l),Gu.fromBufferAttribute(d,u),i.distanceSqToSegment(Hu,Gu,Jd,nx)>s)return;Jd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Jd);if(!(p<t.near||p>t.far))return{distance:p,point:nx.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class uS extends kn{constructor(t=[],i=sr,s,l,u,h,d,m,p,v){super(t,i,s,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class BT extends kn{constructor(t,i,s,l,u,h,d,m,p){super(t,i,s,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ol extends kn{constructor(t,i,s=ma,l,u,h,d=zn,m=zn,p,v=Va,g=1){if(v!==Va&&v!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:g};super(_,l,u,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class zT extends Ol{constructor(t,i=ma,s=sr,l,u,h=zn,d=zn,m,p=Va){const v={width:t,height:t,depth:1},g=[v,v,v,v,v,v];super(t,t,i,s,l,u,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fS extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Dn extends Jn{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],g=[];let _=0,M=0;b("z","y","x",-1,-1,s,i,t,h,u,0),b("z","y","x",1,-1,s,i,-t,h,u,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,u,4),b("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(g,2));function b(w,y,S,L,B,C,D,N,P,T,U){const F=C/P,k=D/T,K=C/2,st=D/2,X=N/2,et=P+1,W=T+1;let $=0,ht=0;const it=new V;for(let nt=0;nt<W;nt++){const xt=nt*k-st;for(let Zt=0;Zt<et;Zt++){const Kt=Zt*F-K;it[w]=Kt*L,it[y]=xt*B,it[S]=X,p.push(it.x,it.y,it.z),it[w]=0,it[y]=0,it[S]=N>0?1:-1,v.push(it.x,it.y,it.z),g.push(Zt/P),g.push(1-nt/T),$+=1}}for(let nt=0;nt<T;nt++)for(let xt=0;xt<P;xt++){const Zt=_+xt+et*nt,Kt=_+xt+et*(nt+1),z=_+(xt+1)+et*(nt+1),mt=_+(xt+1)+et*nt;m.push(Zt,Kt,mt),m.push(Kt,z,mt),ht+=6}d.addGroup(M,ht,U),M+=ht,_+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Li extends Jn{constructor(t=1,i=1,s=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const v=[],g=[],_=[],M=[];let b=0;const w=[],y=s/2;let S=0;L(),h===!1&&(t>0&&B(!0),i>0&&B(!1)),this.setIndex(v),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(M,2));function L(){const C=new V,D=new V;let N=0;const P=(i-t)/s;for(let T=0;T<=u;T++){const U=[],F=T/u,k=F*(i-t)+t;for(let K=0;K<=l;K++){const st=K/l,X=st*m+d,et=Math.sin(X),W=Math.cos(X);D.x=k*et,D.y=-F*s+y,D.z=k*W,g.push(D.x,D.y,D.z),C.set(et,P,W).normalize(),_.push(C.x,C.y,C.z),M.push(st,1-F),U.push(b++)}w.push(U)}for(let T=0;T<l;T++)for(let U=0;U<u;U++){const F=w[U][T],k=w[U+1][T],K=w[U+1][T+1],st=w[U][T+1];(t>0||U!==0)&&(v.push(F,k,st),N+=3),(i>0||U!==u-1)&&(v.push(k,K,st),N+=3)}p.addGroup(S,N,0),S+=N}function B(C){const D=b,N=new Ae,P=new V;let T=0;const U=C===!0?t:i,F=C===!0?1:-1;for(let K=1;K<=l;K++)g.push(0,y*F,0),_.push(0,F,0),M.push(.5,.5),b++;const k=b;for(let K=0;K<=l;K++){const X=K/l*m+d,et=Math.cos(X),W=Math.sin(X);P.x=U*W,P.y=y*F,P.z=U*et,g.push(P.x,P.y,P.z),_.push(0,F,0),N.x=et*.5+.5,N.y=W*.5*F+.5,M.push(N.x,N.y),b++}for(let K=0;K<l;K++){const st=D+K,X=k+K;C===!0?v.push(X,X+1,st):v.push(X+1,X,st),T+=3}p.addGroup(S,T,C===!0?1:2),S+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class As extends Jn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=t/d,_=i/m,M=[],b=[],w=[],y=[];for(let S=0;S<v;S++){const L=S*_-h;for(let B=0;B<p;B++){const C=B*g-u;b.push(C,-L,0),w.push(0,0,1),y.push(B/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let L=0;L<d;L++){const B=L+p*S,C=L+p*(S+1),D=L+1+p*(S+1),N=L+1+p*S;M.push(B,C,N),M.push(C,D,N)}this.setIndex(M),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(w,3)),this.setAttribute("uv",new pn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.width,t.height,t.widthSegments,t.heightSegments)}}class hm extends Jn{constructor(t=.5,i=1,s=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],v=[];let g=t;const _=(i-t)/l,M=new V,b=new Ae;for(let w=0;w<=l;w++){for(let y=0;y<=s;y++){const S=u+y/s*h;M.x=g*Math.cos(S),M.y=g*Math.sin(S),m.push(M.x,M.y,M.z),p.push(0,0,1),b.x=(M.x/i+1)/2,b.y=(M.y/i+1)/2,v.push(b.x,b.y)}g+=_}for(let w=0;w<l;w++){const y=w*(s+1);for(let S=0;S<s;S++){const L=S+y,B=L,C=L+s+1,D=L+s+2,N=L+1;d.push(B,C,N),d.push(C,D,N)}}this.setIndex(d),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(p,3)),this.setAttribute("uv",new pn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class qu extends Jn{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const v=[],g=new V,_=new V,M=[],b=[],w=[],y=[];for(let S=0;S<=s;S++){const L=[],B=S/s,C=h+B*d,D=t*Math.cos(C),N=Math.sqrt(t*t-D*D);let P=0;S===0&&h===0?P=.5/i:S===s&&m===Math.PI&&(P=-.5/i);for(let T=0;T<=i;T++){const U=T/i,F=l+U*u;g.x=-N*Math.cos(F),g.y=D,g.z=N*Math.sin(F),b.push(g.x,g.y,g.z),_.copy(g).normalize(),w.push(_.x,_.y,_.z),y.push(U+P,1-B),L.push(p++)}v.push(L)}for(let S=0;S<s;S++)for(let L=0;L<i;L++){const B=v[S][L+1],C=v[S][L],D=v[S+1][L],N=v[S+1][L+1];(S!==0||h>0)&&M.push(B,C,N),(S!==s-1||m<Math.PI)&&M.push(C,D,N)}this.setIndex(M),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(w,3)),this.setAttribute("uv",new pn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Yu extends Jn{constructor(t=1,i=.4,s=12,l=48,u=Math.PI*2,h=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:u,thetaStart:h,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],v=[],g=[],_=new V,M=new V,b=new V;for(let w=0;w<=s;w++){const y=h+w/s*d;for(let S=0;S<=l;S++){const L=S/l*u;M.x=(t+i*Math.cos(y))*Math.cos(L),M.y=(t+i*Math.cos(y))*Math.sin(L),M.z=i*Math.sin(y),p.push(M.x,M.y,M.z),_.x=t*Math.cos(L),_.y=t*Math.sin(L),b.subVectors(M,_).normalize(),v.push(b.x,b.y,b.z),g.push(S/l),g.push(w/s)}}for(let w=1;w<=s;w++)for(let y=1;y<=l;y++){const S=(l+1)*w+y-1,L=(l+1)*(w-1)+y-1,B=(l+1)*(w-1)+y,C=(l+1)*w+y;m.push(S,L,C),m.push(L,B,C)}this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function _o(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(ix(l))l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(ix(l[0])){const u=[];for(let h=0,d=l.length;h<d;h++)u[h]=l[h].clone();t[i][s]=u}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Qn(o){const t={};for(let i=0;i<o.length;i++){const s=_o(o[i]);for(const l in s)t[l]=s[l]}return t}function ix(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function FT(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function hS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const HT={clone:_o,merge:Qn};var GT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _a extends cr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GT,this.fragmentShader=VT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_o(t.uniforms),this.uniformsGroups=FT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Me().setHex(l.value);break;case"v2":this.uniforms[s].value=new Ae().fromArray(l.value);break;case"v3":this.uniforms[s].value=new V().fromArray(l.value);break;case"v4":this.uniforms[s].value=new on().fromArray(l.value);break;case"m3":this.uniforms[s].value=new he().fromArray(l.value);break;case"m4":this.uniforms[s].value=new ln().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class kT extends _a{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ai extends cr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $d extends cr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.combine=$p,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class XT extends cr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class WT extends cr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class dm extends Nn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class qT extends dm{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const tp=new ln,ax=new V,sx=new V;class YT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fm,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;ax.setFromMatrixPosition(t.matrixWorld),i.position.copy(ax),sx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(sx),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,s,l){tp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),s.setFromProjectionMatrix(tp,t.coordinateSystem,t.reversedDepth);const u=this._frameExtents,h=l?l.z/u.x:1,d=l?l.w/u.y:1,m=l?l.x/u.x:0,p=l?l.y/u.y:0;t.coordinateSystem===Ll||t.reversedDepth?i.set(.5*h,0,0,.5*h+m,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+m,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),i.multiply(tp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tu=new V,bu=new lr,la=new V;let dS=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Tu,bu,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tu,bu,la.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Tu,bu,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tu,bu,la.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Es=new V,rx=new Ae,ox=new Ae;class Ui extends dS{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ul*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(Rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Es.x,Es.y).multiplyScalar(-t/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Es.x,Es.y).multiplyScalar(-t/Es.z)}getViewSize(t,i){return this.getViewBounds(t,rx,ox),i.subVectors(ox,rx)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Rl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class pm extends dS{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ZT extends YT{constructor(){super(new pm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lx extends dm{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new ZT}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class KT extends dm{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const oo=-90,lo=1;class QT extends Nn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(oo,lo,t,i);l.layers=this.layers,this.add(l);const u=new Ui(oo,lo,t,i);u.layers=this.layers,this.add(u);const h=new Ui(oo,lo,t,i);h.layers=this.layers,this.add(h);const d=new Ui(oo,lo,t,i);d.layers=this.layers,this.add(d);const m=new Ui(oo,lo,t,i);m.layers=this.layers,this.add(m);const p=new Ui(oo,lo,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===da)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ll)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(g,_,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class jT extends Ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const xm=class xm{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=s,u[3]=l,this}};xm.prototype.isMatrix2=!0;let cx=xm;function ux(o,t,i,s){const l=JT(s);switch(i){case $x:return o*t;case eS:return o*t/l.components*l.byteLength;case im:return o*t/l.components*l.byteLength;case rr:return o*t*2/l.components*l.byteLength;case am:return o*t*2/l.components*l.byteLength;case tS:return o*t*3/l.components*l.byteLength;case qi:return o*t*4/l.components*l.byteLength;case sm:return o*t*4/l.components*l.byteLength;case Cu:case Du:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Nu:case Lu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case vp:case Sp:return Math.max(o,16)*Math.max(t,8)/4;case _p:case xp:return Math.max(o,8)*Math.max(t,8)/2;case Mp:case yp:case Tp:case bp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ep:case Ou:case Ap:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Rp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case wp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Cp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Dp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Np:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Lp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Up:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Op:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case zp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Fp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Hp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Gp:case Vp:case kp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Xp:case Wp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Pu:case qp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JT(o){switch(o){case xi:case Kx:return{byteLength:1,components:1};case Dl:case Qx:case ga:return{byteLength:2,components:1};case em:case nm:return{byteLength:2,components:4};case ma:case tm:case ha:return{byteLength:4,components:1};case jx:case Jx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jp}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pS(){let o=null,t=!1,i=null,s=null;function l(u,h){s=o.requestAnimationFrame(l),i(u,h)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function $T(o){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,v);else{g.sort((M,b)=>M.start-b.start);let _=0;for(let M=1;M<g.length;M++){const b=g[_],w=g[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++_,g[_]=w)}g.length=_+1;for(let M=0,b=g.length;M<b;M++){const w=g[M];o.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var t1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e1=`#ifdef USE_ALPHAHASH
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
#endif`,n1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r1=`#ifdef USE_AOMAP
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
#endif`,o1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l1=`#ifdef USE_BATCHING
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
#endif`,c1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d1=`#ifdef USE_IRIDESCENCE
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
#endif`,p1=`#ifdef USE_BUMPMAP
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
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,S1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,M1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,E1=`#define PI 3.141592653589793
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
} // validated`,T1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b1=`vec3 transformedNormal = objectNormal;
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
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D1="gl_FragColor = linearToOutputTexel( gl_FragColor );",N1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,O1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G1=`#ifdef USE_GRADIENTMAP
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
}`,V1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,q1=`#ifdef USE_ENVMAP
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
#endif`,Y1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
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
#endif`,J1=`uniform sampler2D dfgLUT;
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
}`,$1=`
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
#endif`,tb=`#if defined( RE_IndirectDiffuse )
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
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ub=`#if defined( USE_POINTS_UV )
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
#endif`,fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`#ifdef USE_MORPHTARGETS
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
#endif`,_b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Eb=`#ifdef USE_NORMALMAP
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
#endif`,Tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ib=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fb=`float getShadowMask() {
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
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gb=`#ifdef USE_SKINNING
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
#endif`,Vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kb=`#ifdef USE_SKINNING
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
#endif`,Xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zb=`#ifdef USE_TRANSMISSION
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
#endif`,Kb=`#ifdef USE_TRANSMISSION
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eA=`uniform sampler2D t2D;
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`#include <common>
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
}`,oA=`#if DEPTH_PACKING == 3200
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
}`,lA=`#define DISTANCE
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
}`,cA=`#define DISTANCE
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`uniform float scale;
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
}`,dA=`uniform vec3 diffuse;
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
}`,pA=`#include <common>
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#define LAMBERT
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
}`,_A=`#define LAMBERT
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
}`,vA=`#define MATCAP
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
}`,xA=`#define MATCAP
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
}`,SA=`#define NORMAL
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
}`,MA=`#define NORMAL
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
}`,yA=`#define PHONG
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
}`,EA=`#define PHONG
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
}`,TA=`#define STANDARD
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
}`,bA=`#define STANDARD
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
}`,AA=`#define TOON
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
}`,RA=`#define TOON
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
}`,wA=`uniform float size;
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
}`,CA=`uniform vec3 diffuse;
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
}`,DA=`#include <common>
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
}`,NA=`uniform vec3 color;
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
}`,LA=`uniform float rotation;
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
}`,UA=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:t1,alphahash_pars_fragment:e1,alphamap_fragment:n1,alphamap_pars_fragment:i1,alphatest_fragment:a1,alphatest_pars_fragment:s1,aomap_fragment:r1,aomap_pars_fragment:o1,batching_pars_vertex:l1,batching_vertex:c1,begin_vertex:u1,beginnormal_vertex:f1,bsdfs:h1,iridescence_fragment:d1,bumpmap_pars_fragment:p1,clipping_planes_fragment:m1,clipping_planes_pars_fragment:g1,clipping_planes_pars_vertex:_1,clipping_planes_vertex:v1,color_fragment:x1,color_pars_fragment:S1,color_pars_vertex:M1,color_vertex:y1,common:E1,cube_uv_reflection_fragment:T1,defaultnormal_vertex:b1,displacementmap_pars_vertex:A1,displacementmap_vertex:R1,emissivemap_fragment:w1,emissivemap_pars_fragment:C1,colorspace_fragment:D1,colorspace_pars_fragment:N1,envmap_fragment:L1,envmap_common_pars_fragment:U1,envmap_pars_fragment:O1,envmap_pars_vertex:P1,envmap_physical_pars_fragment:q1,envmap_vertex:I1,fog_vertex:B1,fog_pars_vertex:z1,fog_fragment:F1,fog_pars_fragment:H1,gradientmap_pars_fragment:G1,lightmap_pars_fragment:V1,lights_lambert_fragment:k1,lights_lambert_pars_fragment:X1,lights_pars_begin:W1,lights_toon_fragment:Y1,lights_toon_pars_fragment:Z1,lights_phong_fragment:K1,lights_phong_pars_fragment:Q1,lights_physical_fragment:j1,lights_physical_pars_fragment:J1,lights_fragment_begin:$1,lights_fragment_maps:tb,lights_fragment_end:eb,lightprobes_pars_fragment:nb,logdepthbuf_fragment:ib,logdepthbuf_pars_fragment:ab,logdepthbuf_pars_vertex:sb,logdepthbuf_vertex:rb,map_fragment:ob,map_pars_fragment:lb,map_particle_fragment:cb,map_particle_pars_fragment:ub,metalnessmap_fragment:fb,metalnessmap_pars_fragment:hb,morphinstance_vertex:db,morphcolor_vertex:pb,morphnormal_vertex:mb,morphtarget_pars_vertex:gb,morphtarget_vertex:_b,normal_fragment_begin:vb,normal_fragment_maps:xb,normal_pars_fragment:Sb,normal_pars_vertex:Mb,normal_vertex:yb,normalmap_pars_fragment:Eb,clearcoat_normal_fragment_begin:Tb,clearcoat_normal_fragment_maps:bb,clearcoat_pars_fragment:Ab,iridescence_pars_fragment:Rb,opaque_fragment:wb,packing:Cb,premultiplied_alpha_fragment:Db,project_vertex:Nb,dithering_fragment:Lb,dithering_pars_fragment:Ub,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:Pb,shadowmap_pars_fragment:Ib,shadowmap_pars_vertex:Bb,shadowmap_vertex:zb,shadowmask_pars_fragment:Fb,skinbase_vertex:Hb,skinning_pars_vertex:Gb,skinning_vertex:Vb,skinnormal_vertex:kb,specularmap_fragment:Xb,specularmap_pars_fragment:Wb,tonemapping_fragment:qb,tonemapping_pars_fragment:Yb,transmission_fragment:Zb,transmission_pars_fragment:Kb,uv_pars_fragment:Qb,uv_pars_vertex:jb,uv_vertex:Jb,worldpos_vertex:$b,background_vert:tA,background_frag:eA,backgroundCube_vert:nA,backgroundCube_frag:iA,cube_vert:aA,cube_frag:sA,depth_vert:rA,depth_frag:oA,distance_vert:lA,distance_frag:cA,equirect_vert:uA,equirect_frag:fA,linedashed_vert:hA,linedashed_frag:dA,meshbasic_vert:pA,meshbasic_frag:mA,meshlambert_vert:gA,meshlambert_frag:_A,meshmatcap_vert:vA,meshmatcap_frag:xA,meshnormal_vert:SA,meshnormal_frag:MA,meshphong_vert:yA,meshphong_frag:EA,meshphysical_vert:TA,meshphysical_frag:bA,meshtoon_vert:AA,meshtoon_frag:RA,points_vert:wA,points_frag:CA,shadow_vert:DA,shadow_frag:NA,sprite_vert:LA,sprite_frag:UA},Ht={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ua={basic:{uniforms:Qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Qn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Qn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Qn([Ht.points,Ht.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Qn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Qn([Ht.common,Ht.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Qn([Ht.sprite,Ht.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Qn([Ht.common,Ht.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Qn([Ht.lights,Ht.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};ua.physical={uniforms:Qn([ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Au={r:0,b:0,g:0},OA=new ln,mS=new he;mS.set(-1,0,0,0,1,0,0,0,1);function PA(o,t,i,s,l,u){const h=new Me(0);let d=l===!0?0:1,m,p,v=null,g=0,_=null;function M(L){let B=L.isScene===!0?L.background:null;if(B&&B.isTexture){const C=L.backgroundBlurriness>0;B=t.get(B,C)}return B}function b(L){let B=!1;const C=M(L);C===null?y(h,d):C&&C.isColor&&(y(C,1),B=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(L,B){const C=M(B);C&&(C.isCubeTexture||C.mapping===Xu)?(p===void 0&&(p=new re(new Dn(1,1,1),new _a({name:"BackgroundCubeMaterial",uniforms:_o(ua.backgroundCube.uniforms),vertexShader:ua.backgroundCube.vertexShader,fragmentShader:ua.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,N,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(OA.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(mS),p.material.toneMapped=Ue.getTransfer(C.colorSpace)!==Ze,(v!==C||g!==C.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,v=C,g=C.version,_=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new re(new As(2,2),new _a({name:"BackgroundMaterial",uniforms:_o(ua.background.uniforms),vertexShader:ua.background.vertexShader,fragmentShader:ua.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=Ue.getTransfer(C.colorSpace)!==Ze,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||g!==C.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,v=C,g=C.version,_=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function y(L,B){L.getRGB(Au,hS(o)),i.buffers.color.setClear(Au.r,Au.g,Au.b,B,u)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,B=1){h.set(L),d=B,y(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,y(h,d)},render:b,addToRenderList:w,dispose:S}}function IA(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,h=!1;function d(k,K,st,X,et){let W=!1;const $=g(k,X,st,K);u!==$&&(u=$,p(u.object)),W=M(k,X,st,et),W&&b(k,X,st,et),et!==null&&t.update(et,o.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,C(k,K,st,X),et!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function m(){return o.createVertexArray()}function p(k){return o.bindVertexArray(k)}function v(k){return o.deleteVertexArray(k)}function g(k,K,st,X){const et=X.wireframe===!0;let W=s[K.id];W===void 0&&(W={},s[K.id]=W);const $=k.isInstancedMesh===!0?k.id:0;let ht=W[$];ht===void 0&&(ht={},W[$]=ht);let it=ht[st.id];it===void 0&&(it={},ht[st.id]=it);let nt=it[et];return nt===void 0&&(nt=_(m()),it[et]=nt),nt}function _(k){const K=[],st=[],X=[];for(let et=0;et<i;et++)K[et]=0,st[et]=0,X[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:st,attributeDivisors:X,object:k,attributes:{},index:null}}function M(k,K,st,X){const et=u.attributes,W=K.attributes;let $=0;const ht=st.getAttributes();for(const it in ht)if(ht[it].location>=0){const xt=et[it];let Zt=W[it];if(Zt===void 0&&(it==="instanceMatrix"&&k.instanceMatrix&&(Zt=k.instanceMatrix),it==="instanceColor"&&k.instanceColor&&(Zt=k.instanceColor)),xt===void 0||xt.attribute!==Zt||Zt&&xt.data!==Zt.data)return!0;$++}return u.attributesNum!==$||u.index!==X}function b(k,K,st,X){const et={},W=K.attributes;let $=0;const ht=st.getAttributes();for(const it in ht)if(ht[it].location>=0){let xt=W[it];xt===void 0&&(it==="instanceMatrix"&&k.instanceMatrix&&(xt=k.instanceMatrix),it==="instanceColor"&&k.instanceColor&&(xt=k.instanceColor));const Zt={};Zt.attribute=xt,xt&&xt.data&&(Zt.data=xt.data),et[it]=Zt,$++}u.attributes=et,u.attributesNum=$,u.index=X}function w(){const k=u.newAttributes;for(let K=0,st=k.length;K<st;K++)k[K]=0}function y(k){S(k,0)}function S(k,K){const st=u.newAttributes,X=u.enabledAttributes,et=u.attributeDivisors;st[k]=1,X[k]===0&&(o.enableVertexAttribArray(k),X[k]=1),et[k]!==K&&(o.vertexAttribDivisor(k,K),et[k]=K)}function L(){const k=u.newAttributes,K=u.enabledAttributes;for(let st=0,X=K.length;st<X;st++)K[st]!==k[st]&&(o.disableVertexAttribArray(st),K[st]=0)}function B(k,K,st,X,et,W,$){$===!0?o.vertexAttribIPointer(k,K,st,et,W):o.vertexAttribPointer(k,K,st,X,et,W)}function C(k,K,st,X){w();const et=X.attributes,W=st.getAttributes(),$=K.defaultAttributeValues;for(const ht in W){const it=W[ht];if(it.location>=0){let nt=et[ht];if(nt===void 0&&(ht==="instanceMatrix"&&k.instanceMatrix&&(nt=k.instanceMatrix),ht==="instanceColor"&&k.instanceColor&&(nt=k.instanceColor)),nt!==void 0){const xt=nt.normalized,Zt=nt.itemSize,Kt=t.get(nt);if(Kt===void 0)continue;const z=Kt.buffer,mt=Kt.type,Rt=Kt.bytesPerElement,Q=mt===o.INT||mt===o.UNSIGNED_INT||nt.gpuType===tm;if(nt.isInterleavedBufferAttribute){const dt=nt.data,bt=dt.stride,Bt=nt.offset;if(dt.isInstancedInterleavedBuffer){for(let _t=0;_t<it.locationSize;_t++)S(it.location+_t,dt.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let _t=0;_t<it.locationSize;_t++)y(it.location+_t);o.bindBuffer(o.ARRAY_BUFFER,z);for(let _t=0;_t<it.locationSize;_t++)B(it.location+_t,Zt/it.locationSize,mt,xt,bt*Rt,(Bt+Zt/it.locationSize*_t)*Rt,Q)}else{if(nt.isInstancedBufferAttribute){for(let dt=0;dt<it.locationSize;dt++)S(it.location+dt,nt.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let dt=0;dt<it.locationSize;dt++)y(it.location+dt);o.bindBuffer(o.ARRAY_BUFFER,z);for(let dt=0;dt<it.locationSize;dt++)B(it.location+dt,Zt/it.locationSize,mt,xt,Zt*Rt,Zt/it.locationSize*dt*Rt,Q)}}else if($!==void 0){const xt=$[ht];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(it.location,xt);break;case 3:o.vertexAttrib3fv(it.location,xt);break;case 4:o.vertexAttrib4fv(it.location,xt);break;default:o.vertexAttrib1fv(it.location,xt)}}}}L()}function D(){U();for(const k in s){const K=s[k];for(const st in K){const X=K[st];for(const et in X){const W=X[et];for(const $ in W)v(W[$].object),delete W[$];delete X[et]}}delete s[k]}}function N(k){if(s[k.id]===void 0)return;const K=s[k.id];for(const st in K){const X=K[st];for(const et in X){const W=X[et];for(const $ in W)v(W[$].object),delete W[$];delete X[et]}}delete s[k.id]}function P(k){for(const K in s){const st=s[K];for(const X in st){const et=st[X];if(et[k.id]===void 0)continue;const W=et[k.id];for(const $ in W)v(W[$].object),delete W[$];delete et[k.id]}}}function T(k){for(const K in s){const st=s[K],X=k.isInstancedMesh===!0?k.id:0,et=st[X];if(et!==void 0){for(const W in et){const $=et[W];for(const ht in $)v($[ht].object),delete $[ht];delete et[W]}delete st[X],Object.keys(st).length===0&&delete s[K]}}}function U(){F(),h=!0,u!==l&&(u=l,p(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function BA(o,t,i){let s;function l(m){s=m}function u(m,p){o.drawArrays(s,m,p),i.update(p,s,1)}function h(m,p,v){v!==0&&(o.drawArraysInstanced(s,m,p,v),i.update(p,s,v))}function d(m,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,v);let _=0;for(let M=0;M<v;M++)_+=p[M];i.update(_,s,1)}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function zA(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==qi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const T=P===ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==xi&&P!==ha&&!T&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(oe("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:L,maxVaryings:B,maxFragmentUniforms:C,maxSamples:D,samples:N}}function FA(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Ts,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const M=g.length!==0||_||s!==0||l;return l=_,s=g.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,_){i=v(g,_,0)},this.setState=function(g,_,M){const b=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,S=o.get(g);if(!l||b===null||b.length===0||u&&!y)u?v(null):p();else{const L=u?0:s,B=L*4;let C=S.clippingState||null;m.value=C,C=v(b,_,B,M);for(let D=0;D!==B;++D)C[D]=i[D];S.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,_,M,b){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const S=M+w*4,L=_.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<S)&&(y=new Float32Array(S));for(let B=0,C=M;B!==w;++B,C+=4)h.copy(g[B]).applyMatrix4(L,d),h.normal.toArray(y,C),y[C+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}const ho=4,HA=6,GA=20,VA=256,Ml=new pm,fx=new Me;let ep=null,np=0,ip=0,ap=!1;const kA=new V,tr=new V;class hx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=kA}=u;ep=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=px(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ep,np,ip),this._renderer.xr.enabled=ap,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===sr||t.mapping===go?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ep=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ga,format:qi,colorSpace:Bu,depthBuffer:!1},l=dx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dx(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=XA(u)),this._blurMaterial=qA(u,t,i),this._ggxMaterial=WA(u,t,i)}return l}_compileMaterial(t){const i=new re(new Jn,t);this._renderer.compile(i,Ml)}_sceneToCubeUV(t,i,s,l,u){const m=new Ui(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,M=g.toneMapping;g.getClearColor(fx),g.toneMapping=pa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new re(new Dn,new za({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let S=!1;const L=t.background;L?L.isColor&&(y.color.copy(L),t.background=null,S=!0):(y.color.copy(fx),S=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[B],u.y,u.z)):C===1?(m.up.set(0,0,p[B]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[B],u.z)):(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[B]));const D=this._cubeSize;co(l,C*D,B>2?D:0,D,D),g.setRenderTarget(l),S&&g.render(w,m),g.render(t,m)}g.toneMapping=M,g.autoClear=_,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===sr||t.mapping===go;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=mx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=px());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;co(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ml)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),_=p*1.25,M=g*_,{_lodMax:b}=this,w=this._sizeLods[s],y=3*w*(s>b-ho?s-b+ho:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,co(u,y,S,3*w,2*w),l.setRenderTarget(u),l.render(d,Ml),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-s,co(t,y,S,3*w,2*w),l.setRenderTarget(t),l.render(d,Ml)}_blur(t,i,s,l){const u=this._pingPongRenderTarget,h=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,u,i,s,h),this._blurPass(u,t,s,s,h)}_blurPass(t,i,s,l,u){const h=this._renderer,d=this._blurMaterial,m=this._lodMeshes[l];m.material=d;const p=d.uniforms;p.envMap.value=t.texture,p.sigma.value=u,p.mipInt.value=this._lodMax-s;const v=this._sizeLods[l],g=3*v*(l>this._lodMax-ho?l-this._lodMax+ho:0),_=4*(this._cubeSize-v);co(i,g,_,3*v,2*v),h.setRenderTarget(i),h.render(m,Ml)}}function XA(o){const t=[],i=[];let s=o;const l=o-ho+1+HA;for(let u=0;u<l;u++){const h=Math.pow(2,s);t.push(h);const d=1/(h-2),m=-d,p=1+d,v=[m,m,p,m,p,p,m,m,p,p,m,p],g=6,_=6,M=3,b=new Float32Array(M*_*g),w=new Float32Array(M*_*g);for(let S=0;S<g;S++){const L=S%3*2/3-1,B=S>2?0:-1,C=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];b.set(C,M*_*S);for(let D=0;D<_;D++){const N=v[D*2]*2-1,P=v[D*2+1]*2-1;S===0?tr.set(1,P,N):S===1?tr.set(-N,1,-P):S===2?tr.set(-N,P,1):S===3?tr.set(-1,P,-N):S===4?tr.set(-N,-1,P):tr.set(N,P,-1),tr.toArray(w,(S*_+D)*M)}}const y=new Jn;y.setAttribute("position",new Ga(b,M)),y.setAttribute("outputDirection",new Ga(w,M)),i.push(new re(y,null)),s>ho&&s--}return{lodMeshes:i,sizeLods:t}}function dx(o,t,i){const s=new Yi(o,t,i);return s.texture.mapping=Xu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function co(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function WA(o,t,i){return new _a({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function qA(o,t,i){return new _a({name:"SphericalGaussianBlur",defines:{SAMPLES:GA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

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
	`}class gS extends Yi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new uS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Dn(5,5,5),u=new _a({name:"CubemapFromEquirect",uniforms:_o(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:si,blending:Fa});u.uniforms.tEquirect.value=i;const h=new re(l,u),d=i.minFilter;return i.minFilter===er&&(i.minFilter=Vn),new QT(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}function YA(o){let t=new WeakMap,i=new WeakMap,s=null;function l(_,M=!1){return _==null?null:M?h(_):u(_)}function u(_){if(_&&_.isTexture){const M=_.mapping;if(M===wd||M===Cd)if(t.has(_)){const b=t.get(_).texture;return d(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const w=new gS(b.height);return w.fromEquirectangularTexture(o,_),t.set(_,w),_.addEventListener("dispose",p),d(w.texture,_.mapping)}else return null}}return _}function h(_){if(_&&_.isTexture){const M=_.mapping,b=M===wd||M===Cd,w=M===sr||M===go;if(b||w){let y=i.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return s===null&&(s=new hx(o)),y=b?s.fromEquirectangular(_,y):s.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const L=_.image;return b&&L&&L.height>0||w&&L&&m(L)?(s===null&&(s=new hx(o)),y=b?s.fromEquirectangular(_):s.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",v),y.texture):null}}}return _}function d(_,M){return M===wd?_.mapping=sr:M===Cd&&(_.mapping=go),_}function m(_){let M=0;const b=6;for(let w=0;w<b;w++)_[w]!==void 0&&M++;return M===b}function p(_){const M=_.target;M.removeEventListener("dispose",p);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function v(_){const M=_.target;M.removeEventListener("dispose",v);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function g(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function ZA(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&po("WebGLRenderer: "+s+" extension not supported."),l}}}function KA(o,t,i,s){const l={},u=new WeakMap;function h(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",h),delete l[_.id];const M=u.get(_);M&&(t.remove(M),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(g,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(g){const _=g.attributes;for(const M in _)t.update(_[M],o.ARRAY_BUFFER)}function p(g){const _=[],M=g.index,b=g.attributes.position;let w=0;if(b===void 0)return;if(M!==null){const L=M.array;w=M.version;for(let B=0,C=L.length;B<C;B+=3){const D=L[B+0],N=L[B+1],P=L[B+2];_.push(D,N,N,P,P,D)}}else{const L=b.array;w=b.version;for(let B=0,C=L.length/3-1;B<C;B+=3){const D=B+0,N=B+1,P=B+2;_.push(D,N,N,P,P,D)}}const y=new(b.count>=65535?oS:rS)(_,1);y.version=w;const S=u.get(g);S&&t.remove(S),u.set(g,y)}function v(g){const _=u.get(g);if(_){const M=g.index;M!==null&&_.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function QA(o,t,i){let s;function l(g){s=g}let u,h;function d(g){u=g.type,h=g.bytesPerElement}function m(g,_){o.drawElements(s,_,u,g*h),i.update(_,s,1)}function p(g,_,M){M!==0&&(o.drawElementsInstanced(s,_,u,g*h,M),i.update(_,s,M))}function v(g,_,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,u,g,0,M);let w=0;for(let y=0;y<M;y++)w+=_[y];i.update(w,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function jA(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Be("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function JA(o,t,i){const s=new WeakMap,l=new on;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let _=s.get(d);if(_===void 0||_.count!==g){let U=function(){P.dispose(),s.delete(d),d.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let B=0;M===!0&&(B=1),b===!0&&(B=2),w===!0&&(B=3);let C=d.attributes.position.count*B,D=1;C>t.maxTextureSize&&(D=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const N=new Float32Array(C*D*4*g),P=new iS(N,C,D,g);P.type=ha,P.needsUpdate=!0;const T=B*4;for(let F=0;F<g;F++){const k=y[F],K=S[F],st=L[F],X=C*D*4*F;for(let et=0;et<k.count;et++){const W=et*T;M===!0&&(l.fromBufferAttribute(k,et),N[X+W+0]=l.x,N[X+W+1]=l.y,N[X+W+2]=l.z,N[X+W+3]=0),b===!0&&(l.fromBufferAttribute(K,et),N[X+W+4]=l.x,N[X+W+5]=l.y,N[X+W+6]=l.z,N[X+W+7]=0),w===!0&&(l.fromBufferAttribute(st,et),N[X+W+8]=l.x,N[X+W+9]=l.y,N[X+W+10]=l.z,N[X+W+11]=st.itemSize===4?l.w:1)}}_={count:g,texture:P,size:new Ae(C,D)},s.set(d,_),d.addEventListener("dispose",U)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let M=0;for(let w=0;w<p.length;w++)M+=p[w];const b=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function $A(o,t,i,s,l){let u=new WeakMap;function h(p){const v=l.render.frame,g=p.geometry,_=t.get(p,g);if(u.get(_)!==v&&(t.update(_),u.set(_,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),u.get(p)!==v&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),u.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;u.get(M)!==v&&(M.update(),u.set(M,v))}return _}function d(){u=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:d}}const tR={[Gx]:"LINEAR_TONE_MAPPING",[Vx]:"REINHARD_TONE_MAPPING",[kx]:"CINEON_TONE_MAPPING",[Xx]:"ACES_FILMIC_TONE_MAPPING",[qx]:"AGX_TONE_MAPPING",[Yx]:"NEUTRAL_TONE_MAPPING",[Wx]:"CUSTOM_TONE_MAPPING"};function eR(o,t,i,s,l,u){const h=new Yi(t,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,m=null;const p=new Jn;p.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new pn([0,2,0,0,2,0],2));const v=new kT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new re(p,v),_=new pm(-1,1,1,-1,0,1);let M=null,b=null,w=!1,y,S=null,L=[],B=!1;this.setSize=function(C,D){h.setSize(C,D),d!==null&&d.setSize(C,D),m!==null&&m.setSize(C,D);for(let N=0;N<L.length;N++){const P=L[N];P.setSize&&P.setSize(C,D)}},this.setEffects=function(C){L=C,B=L.length>0&&L[0].isRenderPass===!0;const D=h.width,N=h.height;L.length>0&&d===null&&(d=new Yi(D,N,{type:ga,depthBuffer:!1,stencilBuffer:!1}),m=new Yi(D,N,{type:ga,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<L.length;P++){const T=L[P];T.setSize&&T.setSize(D,N)}},this.begin=function(C,D){if(w||C.toneMapping===pa&&L.length===0)return!1;if(S=D,D!==null){const N=D.width,P=D.height;(h.width!==N||h.height!==P)&&this.setSize(N,P)}return B===!1&&C.setRenderTarget(h),y=C.toneMapping,C.toneMapping=pa,!0},this.hasRenderPass=function(){return B},this.end=function(C,D){C.toneMapping=y,w=!0;let N=h,P=d;for(let T=0;T<L.length;T++){const U=L[T];U.enabled!==!1&&(U.render(C,P,N,D),U.needsSwap!==!1&&(N=P,P=P===d?m:d))}if(M!==C.outputColorSpace||b!==C.toneMapping){M=C.outputColorSpace,b=C.toneMapping,v.defines={},Ue.getTransfer(M)===Ze&&(v.defines.SRGB_TRANSFER="");const T=tR[b];T&&(v.defines[T]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(S),C.render(g,_),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){h.dispose(),d!==null&&d.dispose(),m!==null&&m.dispose(),p.dispose(),v.dispose()}}const _S=new kn,Yp=new Ol(1,1),vS=new iS,xS=new vT,SS=new uS,gx=[],_x=[],vx=new Float32Array(16),xx=new Float32Array(9),Sx=new Float32Array(4);function xo(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=gx[l];if(u===void 0&&(u=new Float32Array(l),gx[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function Tn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function bn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Ku(o,t){let i=_x[t];i===void 0&&(i=new Int32Array(t),_x[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function nR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function iR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;o.uniform2fv(this.addr,t),bn(i,t)}}function aR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Tn(i,t))return;o.uniform3fv(this.addr,t),bn(i,t)}}function sR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;o.uniform4fv(this.addr,t),bn(i,t)}}function rR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),bn(i,t)}else{if(Tn(i,s))return;Sx.set(s),o.uniformMatrix2fv(this.addr,!1,Sx),bn(i,s)}}function oR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),bn(i,t)}else{if(Tn(i,s))return;xx.set(s),o.uniformMatrix3fv(this.addr,!1,xx),bn(i,s)}}function lR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),bn(i,t)}else{if(Tn(i,s))return;vx.set(s),o.uniformMatrix4fv(this.addr,!1,vx),bn(i,s)}}function cR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function uR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;o.uniform2iv(this.addr,t),bn(i,t)}}function fR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tn(i,t))return;o.uniform3iv(this.addr,t),bn(i,t)}}function hR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;o.uniform4iv(this.addr,t),bn(i,t)}}function dR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function pR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;o.uniform2uiv(this.addr,t),bn(i,t)}}function mR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tn(i,t))return;o.uniform3uiv(this.addr,t),bn(i,t)}}function gR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;o.uniform4uiv(this.addr,t),bn(i,t)}}function _R(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Yp.compareFunction=i.isReversedDepthBuffer()?om:rm,u=Yp):u=_S,i.setTexture2D(t||u,l)}function vR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||xS,l)}function xR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||SS,l)}function SR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||vS,l)}function MR(o){switch(o){case 5126:return nR;case 35664:return iR;case 35665:return aR;case 35666:return sR;case 35674:return rR;case 35675:return oR;case 35676:return lR;case 5124:case 35670:return cR;case 35667:case 35671:return uR;case 35668:case 35672:return fR;case 35669:case 35673:return hR;case 5125:return dR;case 36294:return pR;case 36295:return mR;case 36296:return gR;case 35678:case 36198:case 36298:case 36306:case 35682:return _R;case 35679:case 36299:case 36307:return vR;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return SR}}function yR(o,t){o.uniform1fv(this.addr,t)}function ER(o,t){const i=xo(t,this.size,2);o.uniform2fv(this.addr,i)}function TR(o,t){const i=xo(t,this.size,3);o.uniform3fv(this.addr,i)}function bR(o,t){const i=xo(t,this.size,4);o.uniform4fv(this.addr,i)}function AR(o,t){const i=xo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function RR(o,t){const i=xo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function wR(o,t){const i=xo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function CR(o,t){o.uniform1iv(this.addr,t)}function DR(o,t){o.uniform2iv(this.addr,t)}function NR(o,t){o.uniform3iv(this.addr,t)}function LR(o,t){o.uniform4iv(this.addr,t)}function UR(o,t){o.uniform1uiv(this.addr,t)}function OR(o,t){o.uniform2uiv(this.addr,t)}function PR(o,t){o.uniform3uiv(this.addr,t)}function IR(o,t){o.uniform4uiv(this.addr,t)}function BR(o,t,i){const s=this.cache,l=t.length,u=Ku(i,l);Tn(s,u)||(o.uniform1iv(this.addr,u),bn(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Yp:h=_S;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function zR(o,t,i){const s=this.cache,l=t.length,u=Ku(i,l);Tn(s,u)||(o.uniform1iv(this.addr,u),bn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||xS,u[h])}function FR(o,t,i){const s=this.cache,l=t.length,u=Ku(i,l);Tn(s,u)||(o.uniform1iv(this.addr,u),bn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||SS,u[h])}function HR(o,t,i){const s=this.cache,l=t.length,u=Ku(i,l);Tn(s,u)||(o.uniform1iv(this.addr,u),bn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||vS,u[h])}function GR(o){switch(o){case 5126:return yR;case 35664:return ER;case 35665:return TR;case 35666:return bR;case 35674:return AR;case 35675:return RR;case 35676:return wR;case 5124:case 35670:return CR;case 35667:case 35671:return DR;case 35668:case 35672:return NR;case 35669:case 35673:return LR;case 5125:return UR;case 36294:return OR;case 36295:return PR;case 36296:return IR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return zR;case 35680:case 36300:case 36308:case 36293:return FR;case 36289:case 36303:case 36311:case 36292:return HR}}class VR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=MR(i.type)}}class kR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GR(i.type)}}class XR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const sp=/(\w+)(\])?(\[|\.)?/g;function Mx(o,t){o.seq.push(t),o.map[t.id]=t}function WR(o,t,i){const s=o.name,l=s.length;for(sp.lastIndex=0;;){const u=sp.exec(s),h=sp.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Mx(i,p===void 0?new VR(d,o,t):new kR(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new XR(d),Mx(i,g)),i=g}}}class Uu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);WR(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function yx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const qR=37297;let YR=0;function ZR(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Ex=new he;function KR(o){Ue._getMatrix(Ex,Ue.workingColorSpace,o);const t=`mat3( ${Ex.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case zu:return[t,"LinearTransferOETF"];case Ze:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Tx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+ZR(o.getShaderSource(t),d)}else return u}function QR(o,t){const i=KR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const jR={[Gx]:"Linear",[Vx]:"Reinhard",[kx]:"Cineon",[Xx]:"ACESFilmic",[qx]:"AgX",[Yx]:"Neutral",[Wx]:"Custom"};function JR(o,t){const i=jR[t];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ru=new V;function $R(){Ue.getLuminanceCoefficients(Ru);const o=Ru.x.toFixed(4),t=Ru.y.toFixed(4),i=Ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function ew(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function nw(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Tl(o){return o!==""}function bx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ax(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(o){return o.replace(iw,sw)}const aw=new Map;function sw(o,t){let i=ge[t];if(i===void 0){const s=aw.get(t);if(s!==void 0)i=ge[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zp(i)}const rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rx(o){return o.replace(rw,ow)}function ow(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function wx(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const lw={[bl]:"SHADOWMAP_TYPE_PCF",[El]:"SHADOWMAP_TYPE_VSM"};function cw(o){return lw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uw={[sr]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[Xu]:"ENVMAP_TYPE_CUBE_UV"};function fw(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":uw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const hw={[go]:"ENVMAP_MODE_REFRACTION"};function dw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":hw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pw={[$p]:"ENVMAP_BLENDING_MULTIPLY",[OE]:"ENVMAP_BLENDING_MIX",[PE]:"ENVMAP_BLENDING_ADD"};function mw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":pw[o.combine]||"ENVMAP_BLENDING_NONE"}function gw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function _w(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=cw(i),p=fw(i),v=dw(i),g=mw(i),_=gw(i),M=tw(i),b=ew(u),w=l.createProgram();let y,S,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Tl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Tl).join(`
`),S.length>0&&(S+=`
`)):(y=[wx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),S=[wx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==pa?"#define TONE_MAPPING":"",i.toneMapping!==pa?ge.tonemapping_pars_fragment:"",i.toneMapping!==pa?JR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,QR("linearToOutputTexel",i.outputColorSpace),$R(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Tl).join(`
`)),h=Zp(h),h=bx(h,i),h=Ax(h,i),d=Zp(d),d=bx(d,i),d=Ax(d,i),h=Rx(h),d=Rx(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===Bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const B=L+y+h,C=L+S+d,D=yx(l,l.VERTEX_SHADER,B),N=yx(l,l.FRAGMENT_SHADER,C);l.attachShader(w,D),l.attachShader(w,N),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(k){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(w)||"",st=l.getShaderInfoLog(D)||"",X=l.getShaderInfoLog(N)||"",et=K.trim(),W=st.trim(),$=X.trim();let ht=!0,it=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,D,N);else{const nt=Tx(l,D,"vertex"),xt=Tx(l,N,"fragment");Be("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+et+`
`+nt+`
`+xt)}else et!==""?oe("WebGLProgram: Program Info Log:",et):(W===""||$==="")&&(it=!1);it&&(k.diagnostics={runnable:ht,programLog:et,vertexShader:{log:W,prefix:y},fragmentShader:{log:$,prefix:S}})}l.deleteShader(D),l.deleteShader(N),T=new Uu(l,w),U=nw(l,w)}let T;this.getUniforms=function(){return T===void 0&&P(this),T};let U;this.getAttributes=function(){return U===void 0&&P(this),U};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=l.getProgramParameter(w,qR)),F},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YR++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=N,this}let vw=0;class xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Sw(t),i.set(t,s)),s}}class Sw{constructor(t){this.id=vw++,this.code=t,this.usedTimes=0}}function Mw(o){return o===rr||o===Ou||o===Pu}function yw(o,t,i,s,l,u){const h=new aS,d=new xw,m=new Set,p=[],v=new Map,g=s.logarithmicDepthBuffer;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,U,F,k,K,st){const X=k.fog,et=K.geometry,W=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,$=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ht=t.get(T.envMap||W,$),it=ht&&ht.mapping===Xu?ht.image.height:null,nt=M[T.type];T.precision!==null&&(_=s.getMaxPrecision(T.precision),_!==T.precision&&oe("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const xt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Zt=xt!==void 0?xt.length:0;let Kt=0;et.morphAttributes.position!==void 0&&(Kt=1),et.morphAttributes.normal!==void 0&&(Kt=2),et.morphAttributes.color!==void 0&&(Kt=3);let z,mt,Rt,Q;if(nt){const Ne=ua[nt];z=Ne.vertexShader,mt=Ne.fragmentShader}else{z=T.vertexShader,mt=T.fragmentShader;const Ne=d.getVertexShaderStage(T),ue=d.getFragmentShaderStage(T);d.update(T,Ne,ue),Rt=Ne.id,Q=ue.id}const dt=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),Bt=K.isInstancedMesh===!0,_t=K.isBatchedMesh===!0,wt=!!T.map,ke=!!T.matcap,me=!!ht,_e=!!T.aoMap,ye=!!T.lightMap,ee=!!T.bumpMap&&T.wireframe===!1,ie=!!T.normalMap,Xe=!!T.displacementMap,gn=!!T.emissiveMap,Ie=!!T.metalnessMap,en=!!T.roughnessMap,Y=T.anisotropy>0,an=T.clearcoat>0,Pe=T.dispersion>0,O=T.retroreflectivity>0,E=T.iridescence>0,tt=T.sheen>0,ct=T.transmission>0,pt=Y&&!!T.anisotropyMap,At=an&&!!T.clearcoatMap,Nt=an&&!!T.clearcoatNormalMap,gt=an&&!!T.clearcoatRoughnessMap,yt=E&&!!T.iridescenceMap,Dt=E&&!!T.iridescenceThicknessMap,$t=tt&&!!T.sheenColorMap,It=tt&&!!T.sheenRoughnessMap,Pt=!!T.specularMap,kt=!!T.specularColorMap,ne=!!T.specularIntensityMap,ce=ct&&!!T.transmissionMap,q=ct&&!!T.thicknessMap,Ct=!!T.gradientMap,Mt=!!T.alphaMap,Lt=T.alphaTest>0,Vt=!!T.alphaHash,Et=!!T.extensions;let Jt=pa;T.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Gt={shaderID:nt,shaderType:T.type,shaderName:T.name,vertexShader:z,fragmentShader:mt,defines:T.defines,customVertexShaderID:Rt,customFragmentShaderID:Q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:_t,batchingColor:_t&&K._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&K.instanceColor!==null,instancingMorph:Bt&&K.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Ue.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:wt,matcap:ke,envMap:me,envMapMode:me&&ht.mapping,envMapCubeUVHeight:it,aoMap:_e,lightMap:ye,bumpMap:ee,normalMap:ie,displacementMap:Xe,emissiveMap:gn,normalMapObjectSpace:ie&&T.normalMapType===zE,normalMapTangentSpace:ie&&T.normalMapType===Iu,packedNormalMap:ie&&T.normalMapType===Iu&&Mw(T.normalMap.format),metalnessMap:Ie,roughnessMap:en,anisotropy:Y,anisotropyMap:pt,clearcoat:an,clearcoatMap:At,clearcoatNormalMap:Nt,clearcoatRoughnessMap:gt,dispersion:Pe,retroreflection:O,iridescence:E,iridescenceMap:yt,iridescenceThicknessMap:Dt,sheen:tt,sheenColorMap:$t,sheenRoughnessMap:It,specularMap:Pt,specularColorMap:kt,specularIntensityMap:ne,transmission:ct,transmissionMap:ce,thicknessMap:q,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===Al&&T.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Lt,alphaHash:Vt,combine:T.combine,mapUv:wt&&b(T.map.channel),aoMapUv:_e&&b(T.aoMap.channel),lightMapUv:ye&&b(T.lightMap.channel),bumpMapUv:ee&&b(T.bumpMap.channel),normalMapUv:ie&&b(T.normalMap.channel),displacementMapUv:Xe&&b(T.displacementMap.channel),emissiveMapUv:gn&&b(T.emissiveMap.channel),metalnessMapUv:Ie&&b(T.metalnessMap.channel),roughnessMapUv:en&&b(T.roughnessMap.channel),anisotropyMapUv:pt&&b(T.anisotropyMap.channel),clearcoatMapUv:At&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:It&&b(T.sheenRoughnessMap.channel),specularMapUv:Pt&&b(T.specularMap.channel),specularColorMapUv:kt&&b(T.specularColorMap.channel),specularIntensityMapUv:ne&&b(T.specularIntensityMap.channel),transmissionMapUv:ce&&b(T.transmissionMap.channel),thicknessMapUv:q&&b(T.thicknessMap.channel),alphaMapUv:Mt&&b(T.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(ie||Y),vertexNormals:!!et.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!et.attributes.uv&&(wt||Mt),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||et.attributes.normal===void 0&&ie===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:bt,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:et.attributes.position!==void 0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:Kt,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:st.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:wt&&T.map.isVideoTexture===!0&&Ue.getTransfer(T.map.colorSpace)===Ze,decodeVideoTextureEmissive:gn&&T.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(T.emissiveMap.colorSpace)===Ze,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===fa,flipSided:T.side===si,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Et&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&T.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Gt.vertexUv1s=m.has(1),Gt.vertexUv2s=m.has(2),Gt.vertexUv3s=m.has(3),m.clear(),Gt}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)U.push(F),U.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(S(U,T),L(U,T),U.push(o.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numSunLights),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numSunLightShadows),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function L(T,U){h.disableAll(),U.instancing&&h.enable(0),U.instancingColor&&h.enable(1),U.instancingMorph&&h.enable(2),U.matcap&&h.enable(3),U.envMap&&h.enable(4),U.normalMapObjectSpace&&h.enable(5),U.normalMapTangentSpace&&h.enable(6),U.clearcoat&&h.enable(7),U.iridescence&&h.enable(8),U.alphaTest&&h.enable(9),U.vertexColors&&h.enable(10),U.vertexAlphas&&h.enable(11),U.vertexUv1s&&h.enable(12),U.vertexUv2s&&h.enable(13),U.vertexUv3s&&h.enable(14),U.vertexTangents&&h.enable(15),U.anisotropy&&h.enable(16),U.alphaHash&&h.enable(17),U.batching&&h.enable(18),U.dispersion&&h.enable(19),U.retroreflection&&h.enable(24),U.batchingColor&&h.enable(20),U.gradientMap&&h.enable(21),U.packedNormalMap&&h.enable(22),U.vertexNormals&&h.enable(23),T.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),U.numLightProbeGrids>0&&h.enable(22),U.hasPositionAttribute&&h.enable(23),T.push(h.mask)}function B(T){const U=M[T.type];let F;if(U){const k=ua[U];F=HT.clone(k.uniforms)}else F=T.uniforms;return F}function C(T,U){let F=v.get(U);return F!==void 0?++F.usedTimes:(F=new _w(o,U,T,l),p.push(F),v.set(U,F)),F}function D(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function N(T){d.remove(T)}function P(){d.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:B,acquireProgram:C,releaseProgram:D,releaseShaderCache:N,programs:p,dispose:P}}function Ew(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Tw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function Cx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Dx(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function d(_,M,b,w,y,S){let L=o[t];return L===void 0?(L={id:_.id,object:_,geometry:M,material:b,materialVariant:h(_),groupOrder:w,renderOrder:_.renderOrder,z:y,group:S},o[t]=L):(L.id=_.id,L.object=_,L.geometry=M,L.material=b,L.materialVariant=h(_),L.groupOrder=w,L.renderOrder=_.renderOrder,L.z=y,L.group=S),t++,L}function m(_,M,b,w,y,S,L){L.reversedDepth===!0&&(y=-y);const B=d(_,M,b,w,y,S);b.transmission>0?s.push(B):b.transparent===!0?l.push(B):i.push(B)}function p(_,M,b,w,y,S){const L=d(_,M,b,w,y,S);b.transmission>0?s.unshift(L):b.transparent===!0?l.unshift(L):i.unshift(L)}function v(_,M){i.length>1&&i.sort(_||Tw),s.length>1&&s.sort(M||Cx),l.length>1&&l.sort(M||Cx)}function g(){for(let _=t,M=o.length;_<M;_++){const b=o[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:p,finish:g,sort:v}}function bw(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new Dx,o.set(s,[h])):l>=u.length?(h=new Dx,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Aw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new V,color:new Me};break;case"SpotLight":i={position:new V,direction:new V,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new V,halfWidth:new V,halfHeight:new V};break}return o[t.id]=i,i}}}function Rw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let ww=0;function Cw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Dw(o){const t=new Aw,i=Rw(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new V);const l=new V,u=new ln,h=new ln;function d(p){let v=0,g=0,_=0;for(let K=0;K<9;K++)s.probe[K].set(0,0,0);let M=0,b=0,w=0,y=0,S=0,L=0,B=0,C=0,D=0,N=0,P=0,T=0,U=0,F=0;p.sort(Cw);for(let K=0,st=p.length;K<st;K++){const X=p[K],et=X.color,W=X.intensity,$=X.distance;let ht=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===rr?ht=X.shadow.map.texture:ht=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)v+=et.r*W,g+=et.g*W,_+=et.b*W;else if(X.isLightProbe){for(let it=0;it<9;it++)s.probe[it].addScaledVector(X.sh.coefficients[it],W);F++}else if(X.isSunLight){const it=t.get(X);if(it.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const nt=X.shadow,xt=i.get(X);xt.shadowIntensity=nt.intensity,xt.shadowBias=nt.bias,xt.shadowNormalBias=nt.normalBias,xt.shadowRadius=nt.radius,xt.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),s.sunShadow[b]=xt,s.sunShadowMap[b]=ht;const Zt=nt.getViewportCount();for(let Kt=0;Kt<Zt;Kt++)s.sunShadowMatrix[w+Kt]=nt.getMatrix(Kt),s.sunShadowCascade[w+Kt]=nt._cascadeData[Kt];w+=Zt,b++}s.sun[M]=it,M++}else if(X.isDirectionalLight){const it=t.get(X);if(it.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const nt=X.shadow,xt=i.get(X);xt.shadowIntensity=nt.intensity,xt.shadowBias=nt.bias,xt.shadowNormalBias=nt.normalBias,xt.shadowRadius=nt.radius,xt.shadowMapSize=nt.mapSize,s.directionalShadow[y]=xt,s.directionalShadowMap[y]=ht,s.directionalShadowMatrix[y]=X.shadow.matrix,D++}s.directional[y]=it,y++}else if(X.isSpotLight){const it=t.get(X);it.position.setFromMatrixPosition(X.matrixWorld),it.color.copy(et).multiplyScalar(W),it.distance=$,it.coneCos=Math.cos(X.angle),it.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),it.decay=X.decay,s.spot[L]=it;const nt=X.shadow;if(X.map&&(s.spotLightMap[T]=X.map,T++,nt.updateMatrices(X),X.castShadow&&U++),s.spotLightMatrix[L]=nt.matrix,X.castShadow){const xt=i.get(X);xt.shadowIntensity=nt.intensity,xt.shadowBias=nt.bias,xt.shadowNormalBias=nt.normalBias,xt.shadowRadius=nt.radius,xt.shadowMapSize=nt.mapSize,s.spotShadow[L]=xt,s.spotShadowMap[L]=ht,P++}L++}else if(X.isRectAreaLight){const it=t.get(X);it.color.copy(et).multiplyScalar(W),it.halfWidth.set(X.width*.5,0,0),it.halfHeight.set(0,X.height*.5,0),s.rectArea[B]=it,B++}else if(X.isPointLight){const it=t.get(X);if(it.color.copy(X.color).multiplyScalar(X.intensity),it.distance=X.distance,it.decay=X.decay,X.castShadow){const nt=X.shadow,xt=i.get(X);xt.shadowIntensity=nt.intensity,xt.shadowBias=nt.bias,xt.shadowNormalBias=nt.normalBias,xt.shadowRadius=nt.radius,xt.shadowMapSize=nt.mapSize,xt.shadowCameraNear=nt.camera.near,xt.shadowCameraFar=nt.camera.far,s.pointShadow[S]=xt,s.pointShadowMap[S]=ht,s.pointShadowMatrix[S]=X.shadow.matrix,N++}s.point[S]=it,S++}else if(X.isHemisphereLight){const it=t.get(X);it.skyColor.copy(X.color).multiplyScalar(W),it.groundColor.copy(X.groundColor).multiplyScalar(W),s.hemi[C]=it,C++}}B>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=_;const k=s.hash;(k.sunLength!==M||k.directionalLength!==y||k.pointLength!==S||k.spotLength!==L||k.rectAreaLength!==B||k.hemiLength!==C||k.numSunShadows!==b||k.numDirectionalShadows!==D||k.numPointShadows!==N||k.numSpotShadows!==P||k.numSpotMaps!==T||k.numLightProbes!==F)&&(s.sun.length=M,s.directional.length=y,s.spot.length=L,s.rectArea.length=B,s.point.length=S,s.hemi.length=C,s.sunShadow.length=b,s.sunShadowMap.length=b,s.sunShadowMatrix.length=w,s.sunShadowCascade.length=w,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.directionalShadowMatrix.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=P,s.spotShadowMap.length=P,s.spotLightMatrix.length=P+T-U,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=F,k.sunLength=M,k.directionalLength=y,k.pointLength=S,k.spotLength=L,k.rectAreaLength=B,k.hemiLength=C,k.numSunShadows=b,k.numDirectionalShadows=D,k.numPointShadows=N,k.numSpotShadows=P,k.numSpotMaps=T,k.numLightProbes=F,s.version=ww++)}function m(p,v){let g=0,_=0,M=0,b=0,w=0,y=0;const S=v.matrixWorldInverse;for(let L=0,B=p.length;L<B;L++){const C=p[L];if(C.isSunLight){const D=s.sun[g];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(S),g++}else if(C.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),_++}else if(C.isSpotLight){const D=s.spot[b];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),b++}else if(C.isRectAreaLight){const D=s.rectArea[w];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(S),h.identity(),u.copy(C.matrixWorld),u.premultiply(S),h.extractRotation(u),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),w++}else if(C.isPointLight){const D=s.point[M];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(S),M++}else if(C.isHemisphereLight){const D=s.hemi[y];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(S),y++}}}return{setup:d,setupView:m,state:s}}function Nx(o){const t=new Dw(o),i=[],s=[],l=[];function u(_){g.camera=_,i.length=0,s.length=0,l.length=0}function h(_){i.push(_)}function d(_){s.push(_)}function m(_){l.push(_)}function p(){t.setup(i)}function v(_){t.setupView(i,_)}const g={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:g,setupLights:p,setupLightsView:v,pushLight:h,pushShadow:d,pushLightProbeGrid:m}}function Nw(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Nx(o),t.set(l,[d])):u>=h.length?(d=new Nx(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Lw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uw=`uniform sampler2D shadow_pass;
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
}`,Ow=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Pw=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Lx=new ln,yl=new V,rp=new V;function Iw(o,t,i){let s=new fm;const l=new Ae,u=new Ae,h=new on,d=new XT,m=new WT,p={},v=i.maxTextureSize,g={[ar]:si,[si]:ar,[fa]:fa},_=new _a({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Lw,fragmentShader:Uw}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const b=new Jn;b.setAttribute("position",new Ga(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new re(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let S=this.type;this.render=function(N,P,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===mE&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bl);const U=o.getRenderTarget(),F=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),K=o.state;K.setBlending(Fa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const st=S!==this.type;st&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(et=>et.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,et=N.length;X<et;X++){const W=N[X],$=W.shadow;if($===void 0){oe("WebGLShadowMap:",W,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;l.copy($.mapSize);const ht=$.getFrameExtents();l.multiply(ht),u.copy($.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ht.x),l.x=u.x*ht.x,$.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ht.y),l.y=u.y*ht.y,$.mapSize.y=u.y));const it=o.state.buffers.depth.getReversed();if($.camera._reversedDepth=it,$.map===null||st===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===El){if(W.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Yi(l.x,l.y,{format:rr,type:ga,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),$.map.texture.name=W.name+".shadowMap",$.map.depthTexture=new Ol(l.x,l.y,ha),$.map.depthTexture.name=W.name+".shadowMapDepth",$.map.depthTexture.format=Va,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=zn,$.map.depthTexture.magFilter=zn}else W.isPointLight?($.map=new gS(l.x),$.map.depthTexture=new zT(l.x,ma)):($.map=new Yi(l.x,l.y),$.map.depthTexture=new Ol(l.x,l.y,ma)),$.map.depthTexture.name=W.name+".shadowMap",$.map.depthTexture.format=Va,this.type===bl?($.map.depthTexture.compareFunction=it?om:rm,$.map.depthTexture.minFilter=Vn,$.map.depthTexture.magFilter=Vn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=zn,$.map.depthTexture.magFilter=zn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==l.x||$.map.height!==l.y)&&$.map.setSize(l.x,l.y);const nt=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();W.isPointLight!==!0&&$.updateMatrices(W,T);for(let xt=0;xt<nt;xt++){const Zt=$.getCamera(xt);if(W.isPointLight){const Kt=$.camera,z=$.matrix,mt=W.distance||Kt.far;mt!==Kt.far&&(Kt.far=mt,Kt.updateProjectionMatrix()),yl.setFromMatrixPosition(W.matrixWorld),Kt.position.copy(yl),rp.copy(Kt.position),rp.add(Ow[xt]),Kt.up.copy(Pw[xt]),Kt.lookAt(rp),Kt.updateMatrixWorld(),z.makeTranslation(-yl.x,-yl.y,-yl.z),Lx.multiplyMatrices(Kt.projectionMatrix,Kt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Lx,Kt.coordinateSystem,Kt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)o.setRenderTarget($.map,xt),o.clear();else{xt===0&&(o.setRenderTarget($.map),o.clear());const Kt=$.getViewport(xt);h.set(u.x*Kt.x,u.y*Kt.y,u.x*Kt.z,u.y*Kt.w),K.viewport(h)}s=$.getFrustum(xt),C(P,T,Zt,W,this.type)}$.isPointLightShadow!==!0&&this.type===El&&L($,T),$.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(U,F,k)};function L(N,P){const T=t.update(w);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null?N.mapPass=new Yi(l.x,l.y,{format:rr,type:ga}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value.set(N.map.width,N.map.height),_.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(P,null,T,_,w,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value.set(N.map.width,N.map.height),M.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(P,null,T,M,w,null)}function B(N,P,T,U){let F=null;const k=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)F=k;else if(F=T.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const K=F.uuid,st=P.uuid;let X=p[K];X===void 0&&(X={},p[K]=X);let et=X[st];et===void 0&&(et=F.clone(),X[st]=et,P.addEventListener("dispose",D)),F=et}if(F.visible=P.visible,F.wireframe=P.wireframe,U===El?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:g[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,T.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const K=o.properties.get(F);K.light=T}return F}function C(N,P,T,U,F){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&F===El)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const st=t.update(N),X=N.material;if(Array.isArray(X)){const et=st.groups;for(let W=0,$=et.length;W<$;W++){const ht=et[W],it=X[ht.materialIndex];if(it&&it.visible){const nt=B(N,it,U,F);N.onBeforeShadow(o,N,P,T,st,nt,ht),o.renderBufferDirect(T,null,st,nt,N,ht),N.onAfterShadow(o,N,P,T,st,nt,ht)}}}else if(X.visible){const et=B(N,X,U,F);N.onBeforeShadow(o,N,P,T,st,et,null),o.renderBufferDirect(T,null,st,et,N,null),N.onAfterShadow(o,N,P,T,st,et,null)}}const K=N.children;for(let st=0,X=K.length;st<X;st++)C(K[st],P,T,U,F)}function D(N){N.target.removeEventListener("dispose",D);for(const T in p){const U=p[T],F=N.target.uuid;F in U&&(U[F].dispose(),delete U[F])}}}function Bw(o,t){function i(){let q=!1;const Ct=new on;let Mt=null;const Lt=new on(0,0,0,0);return{setMask:function(Vt){Mt!==Vt&&!q&&(o.colorMask(Vt,Vt,Vt,Vt),Mt=Vt)},setLocked:function(Vt){q=Vt},setClear:function(Vt,Et,Jt,Gt,Ne){Ne===!0&&(Vt*=Gt,Et*=Gt,Jt*=Gt),Ct.set(Vt,Et,Jt,Gt),Lt.equals(Ct)===!1&&(o.clearColor(Vt,Et,Jt,Gt),Lt.copy(Ct))},reset:function(){q=!1,Mt=null,Lt.set(-1,0,0,0)}}}function s(){let q=!1,Ct=!1,Mt=null,Lt=null,Vt=null;return{setReversed:function(Et){if(Ct!==Et){const Jt=t.get("EXT_clip_control");Et?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Et;const Gt=Vt;Vt=null,this.setClear(Gt)}},getReversed:function(){return Ct},setTest:function(Et){Et?dt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Et){Mt!==Et&&!q&&(o.depthMask(Et),Mt=Et)},setFunc:function(Et){if(Ct&&(Et=QE[Et]),Lt!==Et){switch(Et){case lp:o.depthFunc(o.NEVER);break;case cp:o.depthFunc(o.ALWAYS);break;case up:o.depthFunc(o.LESS);break;case Cl:o.depthFunc(o.LEQUAL);break;case fp:o.depthFunc(o.EQUAL);break;case hp:o.depthFunc(o.GEQUAL);break;case dp:o.depthFunc(o.GREATER);break;case pp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Lt=Et}},setLocked:function(Et){q=Et},setClear:function(Et){Vt!==Et&&(Vt=Et,Ct&&(Et=1-Et),o.clearDepth(Et))},reset:function(){q=!1,Mt=null,Lt=null,Vt=null,Ct=!1}}}function l(){let q=!1,Ct=null,Mt=null,Lt=null,Vt=null,Et=null,Jt=null,Gt=null,Ne=null;return{setTest:function(ue){q||(ue?dt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(ue){Ct!==ue&&!q&&(o.stencilMask(ue),Ct=ue)},setFunc:function(ue,ri,Si){(Mt!==ue||Lt!==ri||Vt!==Si)&&(o.stencilFunc(ue,ri,Si),Mt=ue,Lt=ri,Vt=Si)},setOp:function(ue,ri,Si){(Et!==ue||Jt!==ri||Gt!==Si)&&(o.stencilOp(ue,ri,Si),Et=ue,Jt=ri,Gt=Si)},setLocked:function(ue){q=ue},setClear:function(ue){Ne!==ue&&(o.clearStencil(ue),Ne=ue)},reset:function(){q=!1,Ct=null,Mt=null,Lt=null,Vt=null,Et=null,Jt=null,Gt=null,Ne=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},_={},M=new WeakMap,b=[],w=null,y=!1,S=null,L=null,B=null,C=null,D=null,N=null,P=null,T=new Me(0,0,0),U=0,F=!1,k=null,K=null,st=null,X=null,et=null;const W=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ht=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(it)[1]),$=ht>=1):it.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),$=ht>=2);let nt=null,xt={};const Zt=o.getParameter(o.SCISSOR_BOX),Kt=o.getParameter(o.VIEWPORT),z=new on().fromArray(Zt),mt=new on().fromArray(Kt);function Rt(q,Ct,Mt,Lt){const Vt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(q,Et),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<Mt;Jt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Lt,0,o.RGBA,o.UNSIGNED_BYTE,Vt):o.texImage2D(Ct+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Vt);return Et}const Q={};Q[o.TEXTURE_2D]=Rt(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=Rt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=Rt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=Rt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),dt(o.DEPTH_TEST),h.setFunc(Cl),ee(!1),ie(Uv),dt(o.CULL_FACE),_e(Fa);function dt(q){v[q]!==!0&&(o.enable(q),v[q]=!0)}function bt(q){v[q]!==!1&&(o.disable(q),v[q]=!1)}function Bt(q,Ct){return _[q]!==Ct?(o.bindFramebuffer(q,Ct),_[q]=Ct,q===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ct),q===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function _t(q,Ct){let Mt=b,Lt=!1;if(q){Mt=M.get(Ct),Mt===void 0&&(Mt=[],M.set(Ct,Mt));const Vt=q.textures;if(Mt.length!==Vt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Jt=Vt.length;Et<Jt;Et++)Mt[Et]=o.COLOR_ATTACHMENT0+Et;Mt.length=Vt.length,Lt=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Lt=!0);Lt&&o.drawBuffers(Mt)}function wt(q){return w!==q?(o.useProgram(q),w=q,!0):!1}const ke={[uo]:o.FUNC_ADD,[_E]:o.FUNC_SUBTRACT,[vE]:o.FUNC_REVERSE_SUBTRACT};ke[xE]=o.MIN,ke[SE]=o.MAX;const me={[ME]:o.ZERO,[yE]:o.ONE,[EE]:o.SRC_COLOR,[Fx]:o.SRC_ALPHA,[CE]:o.SRC_ALPHA_SATURATE,[RE]:o.DST_COLOR,[bE]:o.DST_ALPHA,[TE]:o.ONE_MINUS_SRC_COLOR,[Hx]:o.ONE_MINUS_SRC_ALPHA,[wE]:o.ONE_MINUS_DST_COLOR,[AE]:o.ONE_MINUS_DST_ALPHA,[DE]:o.CONSTANT_COLOR,[NE]:o.ONE_MINUS_CONSTANT_COLOR,[LE]:o.CONSTANT_ALPHA,[UE]:o.ONE_MINUS_CONSTANT_ALPHA};function _e(q,Ct,Mt,Lt,Vt,Et,Jt,Gt,Ne,ue){if(q===Fa){y===!0&&(bt(o.BLEND),y=!1);return}if(y===!1&&(dt(o.BLEND),y=!0),q!==gE){if(q!==S||ue!==F){if((L!==uo||D!==uo)&&(o.blendEquation(o.FUNC_ADD),L=uo,D=uo),ue)switch(q){case Al:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ov:o.blendFunc(o.ONE,o.ONE);break;case Pv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Iv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Be("WebGLState: Invalid blending: ",q);break}else switch(q){case Al:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ov:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Pv:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Iv:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",q);break}B=null,C=null,N=null,P=null,T.set(0,0,0),U=0,S=q,F=ue}return}Vt=Vt||Ct,Et=Et||Mt,Jt=Jt||Lt,(Ct!==L||Vt!==D)&&(o.blendEquationSeparate(ke[Ct],ke[Vt]),L=Ct,D=Vt),(Mt!==B||Lt!==C||Et!==N||Jt!==P)&&(o.blendFuncSeparate(me[Mt],me[Lt],me[Et],me[Jt]),B=Mt,C=Lt,N=Et,P=Jt),(Gt.equals(T)===!1||Ne!==U)&&(o.blendColor(Gt.r,Gt.g,Gt.b,Ne),T.copy(Gt),U=Ne),S=q,F=!1}function ye(q,Ct){q.side===fa?bt(o.CULL_FACE):dt(o.CULL_FACE);let Mt=q.side===si;Ct&&(Mt=!Mt),ee(Mt),q.blending===Al&&q.transparent===!1?_e(Fa):_e(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),u.setMask(q.colorWrite);const Lt=q.stencilWrite;d.setTest(Lt),Lt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),gn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(q){k!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),k=q)}function ie(q){q!==dE?(dt(o.CULL_FACE),q!==K&&(q===Uv?o.cullFace(o.BACK):q===pE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),K=q}function Xe(q){q!==st&&($&&o.lineWidth(q),st=q)}function gn(q,Ct,Mt){q?(dt(o.POLYGON_OFFSET_FILL),(X!==Ct||et!==Mt)&&(X=Ct,et=Mt,h.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,Mt))):bt(o.POLYGON_OFFSET_FILL)}function Ie(q){q?dt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function en(q){q===void 0&&(q=o.TEXTURE0+W-1),nt!==q&&(o.activeTexture(q),nt=q)}function Y(q,Ct,Mt){Mt===void 0&&(nt===null?Mt=o.TEXTURE0+W-1:Mt=nt);let Lt=xt[Mt];Lt===void 0&&(Lt={type:void 0,texture:void 0},xt[Mt]=Lt),(Lt.type!==q||Lt.texture!==Ct)&&(nt!==Mt&&(o.activeTexture(Mt),nt=Mt),o.bindTexture(q,Ct||Q[q]),Lt.type=q,Lt.texture=Ct)}function an(){const q=xt[nt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Pe(){try{o.compressedTexImage2D(...arguments)}catch(q){Be("WebGLState:",q)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(q){Be("WebGLState:",q)}}function E(){try{o.texSubImage2D(...arguments)}catch(q){Be("WebGLState:",q)}}function tt(){try{o.texSubImage3D(...arguments)}catch(q){Be("WebGLState:",q)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(q){Be("WebGLState:",q)}}function pt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){Be("WebGLState:",q)}}function At(){try{o.texStorage2D(...arguments)}catch(q){Be("WebGLState:",q)}}function Nt(){try{o.texStorage3D(...arguments)}catch(q){Be("WebGLState:",q)}}function gt(){try{o.texImage2D(...arguments)}catch(q){Be("WebGLState:",q)}}function yt(){try{o.texImage3D(...arguments)}catch(q){Be("WebGLState:",q)}}function Dt(q){return g[q]!==void 0?g[q]:o.getParameter(q)}function $t(q,Ct){g[q]!==Ct&&(o.pixelStorei(q,Ct),g[q]=Ct)}function It(q){z.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),z.copy(q))}function Pt(q){mt.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),mt.copy(q))}function kt(q,Ct){let Mt=p.get(Ct);Mt===void 0&&(Mt=new WeakMap,p.set(Ct,Mt));let Lt=Mt.get(q);Lt===void 0&&(Lt=o.getUniformBlockIndex(Ct,q.name),Mt.set(q,Lt))}function ne(q,Ct){const Lt=p.get(Ct).get(q);m.get(Ct)!==Lt&&(o.uniformBlockBinding(Ct,Lt,q.__bindingPointIndex),m.set(Ct,Lt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},g={},nt=null,xt={},_={},M=new WeakMap,b=[],w=null,y=!1,S=null,L=null,B=null,C=null,D=null,N=null,P=null,T=new Me(0,0,0),U=0,F=!1,k=null,K=null,st=null,X=null,et=null,z.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:dt,disable:bt,bindFramebuffer:Bt,drawBuffers:_t,useProgram:wt,setBlending:_e,setMaterial:ye,setFlipSided:ee,setCullFace:ie,setLineWidth:Xe,setPolygonOffset:gn,setScissorTest:Ie,activeTexture:en,bindTexture:Y,unbindTexture:an,compressedTexImage2D:Pe,compressedTexImage3D:O,texImage2D:gt,texImage3D:yt,pixelStorei:$t,getParameter:Dt,updateUBOMapping:kt,uniformBlockBinding:ne,texStorage2D:At,texStorage3D:Nt,texSubImage2D:E,texSubImage3D:tt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:It,viewport:Pt,reset:ce}}function zw(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,v=new WeakMap,g=new Set;let _;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,E){return b?new OffscreenCanvas(O,E):Fu("canvas")}function y(O,E,tt){let ct=1;const pt=Pe(O);if((pt.width>tt||pt.height>tt)&&(ct=tt/Math.max(pt.width,pt.height)),ct<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const At=Math.floor(ct*pt.width),Nt=Math.floor(ct*pt.height);_===void 0&&(_=w(At,Nt));const gt=E?w(At,Nt):_;return gt.width=At,gt.height=Nt,gt.getContext("2d").drawImage(O,0,0,At,Nt),oe("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+At+"x"+Nt+")."),gt}else return"data"in O&&oe("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),O;return O}function S(O){return O.generateMipmaps}function L(O){o.generateMipmap(O)}function B(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(O,E,tt,ct,pt,At=!1){if(O!==null){if(o[O]!==void 0)return o[O];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Nt;ct&&(Nt=t.get("EXT_texture_norm16"),Nt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=E;if(E===o.RED&&(tt===o.FLOAT&&(gt=o.R32F),tt===o.HALF_FLOAT&&(gt=o.R16F),tt===o.UNSIGNED_BYTE&&(gt=o.R8),tt===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.R16_EXT),tt===o.SHORT&&Nt&&(gt=Nt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(gt=o.R8UI),tt===o.UNSIGNED_SHORT&&(gt=o.R16UI),tt===o.UNSIGNED_INT&&(gt=o.R32UI),tt===o.BYTE&&(gt=o.R8I),tt===o.SHORT&&(gt=o.R16I),tt===o.INT&&(gt=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(gt=o.RG32F),tt===o.HALF_FLOAT&&(gt=o.RG16F),tt===o.UNSIGNED_BYTE&&(gt=o.RG8),tt===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.RG16_EXT),tt===o.SHORT&&Nt&&(gt=Nt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(gt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(gt=o.RG16UI),tt===o.UNSIGNED_INT&&(gt=o.RG32UI),tt===o.BYTE&&(gt=o.RG8I),tt===o.SHORT&&(gt=o.RG16I),tt===o.INT&&(gt=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),tt===o.UNSIGNED_INT&&(gt=o.RGB32UI),tt===o.BYTE&&(gt=o.RGB8I),tt===o.SHORT&&(gt=o.RGB16I),tt===o.INT&&(gt=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(gt=o.RGBA32UI),tt===o.BYTE&&(gt=o.RGBA8I),tt===o.SHORT&&(gt=o.RGBA16I),tt===o.INT&&(gt=o.RGBA32I)),E===o.RGB&&(tt===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.RGB16_EXT),tt===o.SHORT&&Nt&&(gt=Nt.RGB16_SNORM_EXT),tt===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),E===o.RGBA){const yt=At?zu:Ue.getTransfer(pt);tt===o.FLOAT&&(gt=o.RGBA32F),tt===o.HALF_FLOAT&&(gt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(gt=yt===Ze?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.RGBA16_EXT),tt===o.SHORT&&Nt&&(gt=Nt.RGBA16_SNORM_EXT),tt===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function D(O,E){let tt;return O?E===null||E===ma||E===Nl?tt=o.DEPTH24_STENCIL8:E===ha?tt=o.DEPTH32F_STENCIL8:E===Dl&&(tt=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ma||E===Nl?tt=o.DEPTH_COMPONENT24:E===ha?tt=o.DEPTH_COMPONENT32F:E===Dl&&(tt=o.DEPTH_COMPONENT16),tt}function N(O,E){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==zn&&O.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function P(O){const E=O.target;E.removeEventListener("dispose",P),U(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&g.delete(E)}function T(O){const E=O.target;E.removeEventListener("dispose",T),k(E)}function U(O){const E=s.get(O);if(E.__webglInit===void 0)return;const tt=O.source,ct=M.get(tt);if(ct){const pt=ct[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&F(O),Object.keys(ct).length===0&&M.delete(tt)}s.remove(O)}function F(O){const E=s.get(O);o.deleteTexture(E.__webglTexture);const tt=O.source,ct=M.get(tt);delete ct[E.__cacheKey],h.memory.textures--}function k(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let pt=0;pt<E.__webglFramebuffer[ct].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[ct][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)o.deleteFramebuffer(E.__webglFramebuffer[ct]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=O.textures;for(let ct=0,pt=tt.length;ct<pt;ct++){const At=s.get(tt[ct]);At.__webglTexture&&(o.deleteTexture(At.__webglTexture),h.memory.textures--),s.remove(tt[ct])}s.remove(O)}let K=0;function st(){K=0}function X(){return K}function et(O){K=O}function W(){const O=K;return O>=l.maxTextures&&oe("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+l.maxTextures),K+=1,O}function $(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function ht(O,E){const tt=s.get(O);if(O.isVideoTexture&&Y(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&tt.__version!==O.version){const ct=O.image;if(ct===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(tt,O,E);return}}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function it(O,E){const tt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){bt(tt,O,E);return}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function nt(O,E){const tt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){bt(tt,O,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function xt(O,E){const tt=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&tt.__version!==O.version){Bt(tt,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const Zt={[mp]:o.REPEAT,[Wi]:o.CLAMP_TO_EDGE,[gp]:o.MIRRORED_REPEAT},Kt={[zn]:o.NEAREST,[IE]:o.NEAREST_MIPMAP_NEAREST,[au]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[Dd]:o.LINEAR_MIPMAP_NEAREST,[er]:o.LINEAR_MIPMAP_LINEAR},z={[HE]:o.NEVER,[WE]:o.ALWAYS,[GE]:o.LESS,[rm]:o.LEQUAL,[VE]:o.EQUAL,[om]:o.GEQUAL,[kE]:o.GREATER,[XE]:o.NOTEQUAL};function mt(O,E){if(E.type===ha&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===Dd||E.magFilter===au||E.magFilter===er||E.minFilter===Vn||E.minFilter===Dd||E.minFilter===au||E.minFilter===er)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Zt[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Zt[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Zt[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Kt[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Kt[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zn||E.minFilter!==au&&E.minFilter!==er||E.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(O,E){let tt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",P));const ct=E.source;let pt=M.get(ct);pt===void 0&&(pt={},M.set(ct,pt));const At=$(E);if(At!==O.__cacheKey){pt[At]===void 0&&(pt[At]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),pt[At].usedTimes++;const Nt=pt[O.__cacheKey];Nt!==void 0&&(pt[O.__cacheKey].usedTimes--,Nt.usedTimes===0&&F(E)),O.__cacheKey=At,O.__webglTexture=pt[At].texture}return tt}function Q(O,E,tt){return Math.floor(Math.floor(O/tt)/E)}function dt(O,E,tt,ct){const At=O.updateRanges;if(At.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,tt,ct,E.data);else{At.sort(($t,It)=>$t.start-It.start);let Nt=0;for(let $t=1;$t<At.length;$t++){const It=At[Nt],Pt=At[$t],kt=It.start+It.count,ne=Q(Pt.start,E.width,4),ce=Q(It.start,E.width,4);Pt.start<=kt+1&&ne===ce&&Q(Pt.start+Pt.count-1,E.width,4)===ne?It.count=Math.max(It.count,Pt.start+Pt.count-It.start):(++Nt,At[Nt]=Pt)}At.length=Nt+1;const gt=i.getParameter(o.UNPACK_ROW_LENGTH),yt=i.getParameter(o.UNPACK_SKIP_PIXELS),Dt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let $t=0,It=At.length;$t<It;$t++){const Pt=At[$t],kt=Math.floor(Pt.start/4),ne=Math.ceil(Pt.count/4),ce=kt%E.width,q=Math.floor(kt/E.width),Ct=ne,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,ce,q,Ct,Mt,tt,ct,E.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,gt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Dt)}}function bt(O,E,tt){let ct=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=o.TEXTURE_3D);const pt=Rt(O,E),At=E.source;i.bindTexture(ct,O.__webglTexture,o.TEXTURE0+tt);const Nt=s.get(At);if(At.version!==Nt.__version||pt===!0){if(i.activeTexture(o.TEXTURE0+tt),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Mt=Ue.getPrimaries(Ue.workingColorSpace),Lt=E.colorSpace===bs?null:Ue.getPrimaries(E.colorSpace),Vt=E.colorSpace===bs||Mt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let yt=y(E.image,!1,l.maxTextureSize);yt=an(E,yt);const Dt=u.convert(E.format,E.colorSpace),$t=u.convert(E.type);let It=C(E.internalFormat,Dt,$t,E.normalized,E.colorSpace,E.isVideoTexture);mt(ct,E);let Pt;const kt=E.mipmaps,ne=E.isVideoTexture!==!0,ce=Nt.__version===void 0||pt===!0,q=At.dataReady,Ct=N(E,yt);if(E.isDepthTexture)It=D(E.format===nr,E.type),ce&&(ne?i.texStorage2D(o.TEXTURE_2D,1,It,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,It,yt.width,yt.height,0,Dt,$t,null));else if(E.isDataTexture)if(kt.length>0){ne&&ce&&i.texStorage2D(o.TEXTURE_2D,Ct,It,kt[0].width,kt[0].height);for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)Pt=kt[Mt],ne?q&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Dt,$t,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,It,Pt.width,Pt.height,0,Dt,$t,Pt.data);E.generateMipmaps=!1}else ne?(ce&&i.texStorage2D(o.TEXTURE_2D,Ct,It,yt.width,yt.height),q&&dt(E,yt,Dt,$t)):i.texImage2D(o.TEXTURE_2D,0,It,yt.width,yt.height,0,Dt,$t,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ne&&ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,It,kt[0].width,kt[0].height,yt.depth);for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)if(Pt=kt[Mt],E.format!==qi)if(Dt!==null)if(ne){if(q)if(E.layerUpdates.size>0){const Vt=ux(Pt.width,Pt.height,E.format,E.type);for(const Et of E.layerUpdates){const Jt=Pt.data.subarray(Et*Vt/Pt.data.BYTES_PER_ELEMENT,(Et+1)*Vt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,Et,Pt.width,Pt.height,1,Dt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,yt.depth,Dt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,It,Pt.width,Pt.height,yt.depth,0,Pt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,yt.depth,Dt,$t,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,It,Pt.width,Pt.height,yt.depth,0,Dt,$t,Pt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ne&&ce&&i.texStorage2D(o.TEXTURE_2D,Ct,It,kt[0].width,kt[0].height);for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)Pt=kt[Mt],E.format!==qi?Dt!==null?ne?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Dt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,It,Pt.width,Pt.height,0,Pt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?q&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Dt,$t,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,It,Pt.width,Pt.height,0,Dt,$t,Pt.data)}else if(E.isDataArrayTexture)if(ne){if(ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,It,yt.width,yt.height,yt.depth),q)if(E.layerUpdates.size>0){const Mt=ux(yt.width,yt.height,E.format,E.type);for(const Lt of E.layerUpdates){const Vt=yt.data.subarray(Lt*Mt/yt.data.BYTES_PER_ELEMENT,(Lt+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Lt,yt.width,yt.height,1,Dt,$t,Vt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Dt,$t,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,It,yt.width,yt.height,yt.depth,0,Dt,$t,yt.data);else if(E.isData3DTexture)ne?(ce&&i.texStorage3D(o.TEXTURE_3D,Ct,It,yt.width,yt.height,yt.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Dt,$t,yt.data)):i.texImage3D(o.TEXTURE_3D,0,It,yt.width,yt.height,yt.depth,0,Dt,$t,yt.data);else if(E.isFramebufferTexture){if(ce)if(ne)i.texStorage2D(o.TEXTURE_2D,Ct,It,yt.width,yt.height);else{let Mt=yt.width,Lt=yt.height;for(let Vt=0;Vt<Ct;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,It,Mt,Lt,0,Dt,$t,null),Mt>>=1,Lt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),yt.parentNode!==Mt){Mt.appendChild(yt),g.add(E),Mt.onpaint=Lt=>{const Vt=Lt.changedElements;for(const Et of g)Vt.includes(Et.image)&&(Et.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,yt);else{const Vt=o.RGBA,Et=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Vt,Et,Jt,yt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(kt.length>0){if(ne&&ce){const Mt=Pe(kt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,It,Mt.width,Mt.height)}for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)Pt=kt[Mt],ne?q&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt,$t,Pt):i.texImage2D(o.TEXTURE_2D,Mt,It,Dt,$t,Pt);E.generateMipmaps=!1}else if(ne){if(ce){const Mt=Pe(yt);i.texStorage2D(o.TEXTURE_2D,Ct,It,Mt.width,Mt.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,$t,yt)}else i.texImage2D(o.TEXTURE_2D,0,It,Dt,$t,yt);S(E)&&L(ct),Nt.__version=At.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Bt(O,E,tt){if(E.image.length!==6)return;const ct=Rt(O,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+tt);const At=s.get(pt);if(pt.version!==At.__version||ct===!0){i.activeTexture(o.TEXTURE0+tt);const Nt=Ue.getPrimaries(Ue.workingColorSpace),gt=E.colorSpace===bs?null:Ue.getPrimaries(E.colorSpace),yt=E.colorSpace===bs||Nt===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,$t=E.image[0]&&E.image[0].isDataTexture,It=[];for(let Et=0;Et<6;Et++)!Dt&&!$t?It[Et]=y(E.image[Et],!0,l.maxCubemapSize):It[Et]=$t?E.image[Et].image:E.image[Et],It[Et]=an(E,It[Et]);const Pt=It[0],kt=u.convert(E.format,E.colorSpace),ne=u.convert(E.type),ce=C(E.internalFormat,kt,ne,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,Ct=At.__version===void 0||ct===!0,Mt=pt.dataReady;let Lt=N(E,Pt);mt(o.TEXTURE_CUBE_MAP,E);let Vt;if(Dt){q&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ce,Pt.width,Pt.height);for(let Et=0;Et<6;Et++){Vt=It[Et].mipmaps;for(let Jt=0;Jt<Vt.length;Jt++){const Gt=Vt[Jt];E.format!==qi?kt!==null?q?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Gt.width,Gt.height,kt,Gt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,ce,Gt.width,Gt.height,0,Gt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Gt.width,Gt.height,kt,ne,Gt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,ce,Gt.width,Gt.height,0,kt,ne,Gt.data)}}}else{if(Vt=E.mipmaps,q&&Ct){Vt.length>0&&Lt++;const Et=Pe(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ce,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if($t){q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,It[Et].width,It[Et].height,kt,ne,It[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ce,It[Et].width,It[Et].height,0,kt,ne,It[Et].data);for(let Jt=0;Jt<Vt.length;Jt++){const Ne=Vt[Jt].image[Et].image;q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,Ne.width,Ne.height,kt,ne,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,ce,Ne.width,Ne.height,0,kt,ne,Ne.data)}}else{q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,kt,ne,It[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ce,kt,ne,It[Et]);for(let Jt=0;Jt<Vt.length;Jt++){const Gt=Vt[Jt];q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,kt,ne,Gt.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,ce,kt,ne,Gt.image[Et])}}}S(E)&&L(o.TEXTURE_CUBE_MAP),At.__version=pt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function _t(O,E,tt,ct,pt,At){const Nt=u.convert(tt.format,tt.colorSpace),gt=u.convert(tt.type),yt=C(tt.internalFormat,Nt,gt,tt.normalized,tt.colorSpace),Dt=s.get(E),$t=s.get(tt);if($t.__renderTarget=E,!Dt.__hasExternalTextures){const It=Math.max(1,E.width>>At),Pt=Math.max(1,E.height>>At);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,At,yt,It,Pt,E.depth,0,Nt,gt,null):i.texImage2D(pt,At,yt,It,Pt,0,Nt,gt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),en(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,pt,$t.__webglTexture,0,Ie(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,pt,$t.__webglTexture,At),i.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(O,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const ct=E.depthTexture,pt=ct&&ct.isDepthTexture?ct.type:null,At=D(E.stencilBuffer,pt),Nt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;en(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie(E),At,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie(E),At,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,At,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,O)}else{const ct=E.textures;for(let pt=0;pt<ct.length;pt++){const At=ct[pt],Nt=u.convert(At.format,At.colorSpace),gt=u.convert(At.type),yt=C(At.internalFormat,Nt,gt,At.normalized,At.colorSpace);en(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie(E),yt,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie(E),yt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,yt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ke(O,E,tt){const ct=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pt=s.get(E.depthTexture);if(pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),pt.__webglTexture===void 0){pt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E.depthTexture);const Dt=u.convert(E.depthTexture.format),$t=u.convert(E.depthTexture.type);let It;E.depthTexture.format===Va?It=o.DEPTH_COMPONENT24:E.depthTexture.format===nr&&(It=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,It,E.width,E.height,0,Dt,$t,null)}}else ht(E.depthTexture,0);const At=pt.__webglTexture,Nt=Ie(E),gt=ct?o.TEXTURE_CUBE_MAP_POSITIVE_X+tt:o.TEXTURE_2D,yt=E.depthTexture.format===nr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Va)en(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,gt,At,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,yt,gt,At,0);else if(E.depthTexture.format===nr)en(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,gt,At,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,yt,gt,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(O){const E=s.get(O),tt=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const ct=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",pt)};ct.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ct}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(tt)for(let ct=0;ct<6;ct++)ke(E.__webglFramebuffer[ct],O,ct);else{const ct=O.texture.mipmaps;ct&&ct.length>0?ke(E.__webglFramebuffer[0],O,0):ke(E.__webglFramebuffer,O,0)}else if(tt){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=o.createRenderbuffer(),wt(E.__webglDepthbuffer[ct],O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=E.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,At)}}else{const ct=O.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),wt(E.__webglDepthbuffer,O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,At)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function _e(O,E,tt){const ct=s.get(O);E!==void 0&&_t(ct.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&me(O)}function ye(O){const E=O.texture,tt=s.get(O),ct=s.get(E);O.addEventListener("dispose",T);const pt=O.textures,At=O.isWebGLCubeRenderTarget===!0,Nt=pt.length>1;if(Nt||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=E.version,h.memory.textures++),At){tt.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[gt]=[];for(let yt=0;yt<E.mipmaps.length;yt++)tt.__webglFramebuffer[gt][yt]=o.createFramebuffer()}else tt.__webglFramebuffer[gt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)tt.__webglFramebuffer[gt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Nt)for(let gt=0,yt=pt.length;gt<yt;gt++){const Dt=s.get(pt[gt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&en(O)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let gt=0;gt<pt.length;gt++){const yt=pt[gt];tt.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[gt]);const Dt=u.convert(yt.format,yt.colorSpace),$t=u.convert(yt.type),It=C(yt.internalFormat,Dt,$t,yt.normalized,yt.colorSpace,O.isXRRenderTarget===!0),Pt=Ie(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,It,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),wt(tt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(At){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)_t(tt.__webglFramebuffer[gt][yt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt);else _t(tt.__webglFramebuffer[gt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);S(E)&&L(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let gt=0,yt=pt.length;gt<yt;gt++){const Dt=pt[gt],$t=s.get(Dt);let It=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(It=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,$t.__webglTexture),mt(It,Dt),_t(tt.__webglFramebuffer,O,Dt,o.COLOR_ATTACHMENT0+gt,It,0),S(Dt)&&L(It)}i.unbindTexture()}else{let gt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(gt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(gt,ct.__webglTexture),mt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)_t(tt.__webglFramebuffer[yt],O,E,o.COLOR_ATTACHMENT0,gt,yt);else _t(tt.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,gt,0);S(E)&&L(gt),i.unbindTexture()}O.depthBuffer&&me(O)}function ee(O){const E=O.textures;for(let tt=0,ct=E.length;tt<ct;tt++){const pt=E[tt];if(S(pt)){const At=B(O),Nt=s.get(pt).__webglTexture;i.bindTexture(At,Nt),L(At),i.unbindTexture()}}}const ie=[],Xe=[];function gn(O){if(O.samples>0){if(en(O)===!1){const E=O.textures,tt=O.width,ct=O.height;let pt=o.COLOR_BUFFER_BIT;const At=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=s.get(O),gt=E.length>1;if(gt)for(let Dt=0;Dt<E.length;Dt++)i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const yt=O.texture.mipmaps;yt&&yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Dt=0;Dt<E.length;Dt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const $t=s.get(E[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$t,0)}o.blitFramebuffer(0,0,tt,ct,0,0,tt,ct,pt,o.NEAREST),m===!0&&(ie.length=0,Xe.length=0,ie.push(o.COLOR_ATTACHMENT0+Dt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(ie.push(At),Xe.push(At),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let Dt=0;Dt<E.length;Dt++){i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const $t=s.get(E[Dt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,$t,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ie(O){return Math.min(l.maxSamples,O.samples)}function en(O){const E=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(O){const E=h.render.frame;v.get(O)!==E&&(v.set(O,E),O.update())}function an(O,E){const tt=O.colorSpace,ct=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||tt!==Bu&&tt!==bs&&(Ue.getTransfer(tt)===Ze?(ct!==qi||pt!==xi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",tt)),E}function Pe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=st,this.getTextureUnits=X,this.setTextureUnits=et,this.setTexture2D=ht,this.setTexture2DArray=it,this.setTexture3D=nt,this.setTextureCube=xt,this.rebindTextures=_e,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=en,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Fw(o,t){function i(s,l=bs){let u;const h=Ue.getTransfer(l);if(s===xi)return o.UNSIGNED_BYTE;if(s===em)return o.UNSIGNED_SHORT_4_4_4_4;if(s===nm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===jx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Jx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Kx)return o.BYTE;if(s===Qx)return o.SHORT;if(s===Dl)return o.UNSIGNED_SHORT;if(s===tm)return o.INT;if(s===ma)return o.UNSIGNED_INT;if(s===ha)return o.FLOAT;if(s===ga)return o.HALF_FLOAT;if(s===$x)return o.ALPHA;if(s===tS)return o.RGB;if(s===qi)return o.RGBA;if(s===Va)return o.DEPTH_COMPONENT;if(s===nr)return o.DEPTH_STENCIL;if(s===eS)return o.RED;if(s===im)return o.RED_INTEGER;if(s===rr)return o.RG;if(s===am)return o.RG_INTEGER;if(s===sm)return o.RGBA_INTEGER;if(s===Cu||s===Du||s===Nu||s===Lu)if(h===Ze)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Cu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Du)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Cu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Du)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_p||s===vp||s===xp||s===Sp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===_p)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mp||s===yp||s===Ep||s===Tp||s===bp||s===Ou||s===Ap)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Mp||s===yp)return h===Ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Ep)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===Tp)return u.COMPRESSED_R11_EAC;if(s===bp)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Ou)return u.COMPRESSED_RG11_EAC;if(s===Ap)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Rp||s===wp||s===Cp||s===Dp||s===Np||s===Lp||s===Up||s===Op||s===Pp||s===Ip||s===Bp||s===zp||s===Fp||s===Hp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Rp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Np)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Lp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Up)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Op)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ip)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gp||s===Vp||s===kp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Gp)return h===Ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xp||s===Wp||s===Pu||s===qp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Xp)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Wp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gw=`
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

}`;class Vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new fS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new _a({vertexShader:Hw,fragmentShader:Gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new re(new As(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kw extends or{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,g=null,_=null,M=null,b=null;const w=typeof XRWebGLBinding<"u",y=new Vw,S={},L=i.getContextAttributes();let B=null,C=null;const D=[],N=[],P=new Ae;let T=null,U=null;const F=new Ui;F.viewport=new on;const k=new Ui;k.viewport=new on;const K=[F,k],st=new jT;let X=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let dt=D[Q];return dt===void 0&&(dt=new Bd,D[Q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Q){let dt=D[Q];return dt===void 0&&(dt=new Bd,D[Q]=dt),dt.getGripSpace()},this.getHand=function(Q){let dt=D[Q];return dt===void 0&&(dt=new Bd,D[Q]=dt),dt.getHandSpace()};function W(Q){const dt=N.indexOf(Q.inputSource);if(dt===-1)return;const bt=D[dt];bt!==void 0&&(bt.update(Q.inputSource,Q.frame,p||h),bt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",$),l.removeEventListener("inputsourceschange",ht);for(let Q=0;Q<D.length;Q++){const dt=N[Q];dt!==null&&(N[Q]=null,D[Q].disconnect(dt))}X=null,et=null,y.reset();for(const Q in S)delete S[Q];if(t.setRenderTarget(B),M=null,_=null,g=null,l=null,C=null,Rt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),U!==null){const Q=U.camera;Q.fov=U.fov,Q.zoom=U.zoom,Q.updateProjectionMatrix(),U=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",$),l.addEventListener("inputsourceschange",ht),L.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Bt=null,_t=null;L.depth&&(_t=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=L.stencil?nr:Va,Bt=L.stencil?Nl:ma);const wt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:u};g=this.getBinding(),_=g.createProjectionLayer(wt),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new Yi(_.textureWidth,_.textureHeight,{format:qi,type:xi,depthTexture:new Ol(_.textureWidth,_.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const bt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Yi(M.framebufferWidth,M.framebufferHeight,{format:qi,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ht(Q){for(let dt=0;dt<Q.removed.length;dt++){const bt=Q.removed[dt],Bt=N.indexOf(bt);Bt>=0&&(N[Bt]=null,D[Bt].disconnect(bt))}for(let dt=0;dt<Q.added.length;dt++){const bt=Q.added[dt];let Bt=N.indexOf(bt);if(Bt===-1){for(let wt=0;wt<D.length;wt++)if(wt>=N.length){N.push(bt),Bt=wt;break}else if(N[wt]===null){N[wt]=bt,Bt=wt;break}if(Bt===-1)break}const _t=D[Bt];_t&&_t.connect(bt)}}const it=new V,nt=new V;function xt(Q,dt,bt){it.setFromMatrixPosition(dt.matrixWorld),nt.setFromMatrixPosition(bt.matrixWorld);const Bt=it.distanceTo(nt),_t=dt.projectionMatrix.elements,wt=bt.projectionMatrix.elements,ke=_t[14]/(_t[10]-1),me=_t[14]/(_t[10]+1),_e=(_t[9]+1)/_t[5],ye=(_t[9]-1)/_t[5],ee=(_t[8]-1)/_t[0],ie=(wt[8]+1)/wt[0],Xe=ke*ee,gn=ke*ie,Ie=Bt/(-ee+ie),en=Ie*-ee;if(dt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(en),Q.translateZ(Ie),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),_t[10]===-1)Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Y=ke+Ie,an=me+Ie,Pe=Xe-en,O=gn+(Bt-en),E=_e*me/an*Y,tt=ye*me/an*Y;Q.projectionMatrix.makePerspective(Pe,O,E,tt,Y,an),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Zt(Q,dt){dt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(dt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let dt=Q.near,bt=Q.far;y.texture!==null&&(y.depthNear>0&&(dt=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),st.near=k.near=F.near=dt,st.far=k.far=F.far=bt,(X!==st.near||et!==st.far)&&(l.updateRenderState({depthNear:st.near,depthFar:st.far}),X=st.near,et=st.far),st.layers.mask=Q.layers.mask|6,F.layers.mask=st.layers.mask&-5,k.layers.mask=st.layers.mask&-3;const Bt=Q.parent,_t=st.cameras;Zt(st,Bt);for(let wt=0;wt<_t.length;wt++)Zt(_t[wt],Bt);_t.length===2?xt(st,F,k):st.projectionMatrix.copy(F.projectionMatrix),U===null&&Q.isPerspectiveCamera&&(U={camera:Q,fov:Q.fov,zoom:Q.zoom}),Kt(Q,st,Bt)};function Kt(Q,dt,bt){bt===null?Q.matrix.copy(dt.matrixWorld):(Q.matrix.copy(bt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(dt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ul*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(Q){m=Q,_!==null&&(_.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(st)},this.getCameraTexture=function(Q){return S[Q]};let z=null;function mt(Q,dt){if(v=dt.getViewerPose(p||h),b=dt,v!==null){const bt=v.views;M!==null&&(t.setRenderTargetFramebuffer(C,M.framebuffer),t.setRenderTarget(C));let Bt=!1;bt.length!==st.cameras.length&&(st.cameras.length=0,Bt=!0);for(let me=0;me<bt.length;me++){const _e=bt[me];let ye=null;if(M!==null)ye=M.getViewport(_e);else{const ie=g.getViewSubImage(_,_e);ye=ie.viewport,me===0&&(t.setRenderTargetTextures(C,ie.colorTexture,ie.depthStencilTexture),t.setRenderTarget(C))}let ee=K[me];ee===void 0&&(ee=new Ui,ee.layers.enable(me),ee.viewport=new on,K[me]=ee),ee.matrix.fromArray(_e.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(_e.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ye.x,ye.y,ye.width,ye.height),me===0&&(st.matrix.copy(ee.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),Bt===!0&&st.cameras.push(ee)}const _t=l.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=s.getBinding();const me=g.getDepthInformation(bt[0]);me&&me.isValid&&me.texture&&y.init(me,l.renderState)}if(_t&&_t.includes("camera-access")&&w){t.state.unbindTexture(),g=s.getBinding();for(let me=0;me<bt.length;me++){const _e=bt[me].camera;if(_e){let ye=S[_e];ye||(ye=new fS,S[_e]=ye);const ee=g.getCameraImage(_e);ye.sourceTexture=ee}}}}for(let bt=0;bt<D.length;bt++){const Bt=N[bt],_t=D[bt];Bt!==null&&_t!==void 0&&_t.update(Bt,dt,p||h)}z&&z(Q,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),b=null}const Rt=new pS;Rt.setAnimationLoop(mt),this.setAnimationLoop=function(Q){z=Q},this.dispose=function(){}}}const Xw=new ln,MS=new he;MS.set(-1,0,0,0,1,0,0,0,1);function Ww(o,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,hS(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,L,B,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(y,S):S.isMeshLambertMaterial?(u(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(y,S),g(y,S)):S.isMeshPhongMaterial?(u(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(y,S),_(y,S),S.isMeshPhysicalMaterial&&M(y,S,C)):S.isMeshMatcapMaterial?(u(y,S),b(y,S)):S.isMeshDepthMaterial?u(y,S):S.isMeshDistanceMaterial?(u(y,S),w(y,S)):S.isMeshNormalMaterial?u(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,L,B):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===si&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===si&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const L=t.get(S),B=L.envMap,C=L.envMapRotation;B&&(y.envMap.value=B,y.envMapRotation.value.setFromMatrix4(Xw.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(MS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,L,B){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*L,y.scale.value=B*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function g(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,L){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===si&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function w(y,S){const L=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function qw(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,D){const N=D.program;s.uniformBlockBinding(C,N)}function p(C,D){let N=l[C.id];N===void 0&&(y(C),N=v(C),l[C.id]=N,C.addEventListener("dispose",L));const P=D.program;s.updateUBOMapping(C,P);const T=t.render.frame;u[C.id]!==T&&(_(C),u[C.id]=T)}function v(C){const D=g();C.__bindingPointIndex=D;const N=o.createBuffer(),P=C.__size,T=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,P,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,N),N}function g(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const D=l[C.id],N=C.uniforms,P=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let T=0,U=N.length;T<U;T++){const F=N[T];if(Array.isArray(F))for(let k=0,K=F.length;k<K;k++)M(F[k],T,k,P);else M(F,T,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(C,D,N,P){if(w(C,D,N,P)===!0){const T=C.__offset,U=C.value;if(Array.isArray(U)){let F=0;for(let k=0;k<U.length;k++){const K=U[k],st=S(K);b(K,C.__data,F),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(F+=st.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(U,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,C.__data)}}function b(C,D,N){typeof C=="number"||typeof C=="boolean"?D[0]=C:C.isMatrix3?(D[0]=C.elements[0],D[1]=C.elements[1],D[2]=C.elements[2],D[3]=0,D[4]=C.elements[3],D[5]=C.elements[4],D[6]=C.elements[5],D[7]=0,D[8]=C.elements[6],D[9]=C.elements[7],D[10]=C.elements[8],D[11]=0):ArrayBuffer.isView(C)?D.set(new C.constructor(C.buffer,C.byteOffset,D.length)):C.toArray(D,N)}function w(C,D,N,P){const T=C.value,U=D+"_"+N;if(P[U]===void 0)return typeof T=="number"||typeof T=="boolean"?P[U]=T:ArrayBuffer.isView(T)?P[U]=T.slice():P[U]=T.clone(),!0;{const F=P[U];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return P[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(F.equals(T)===!1)return F.copy(T),!0}}return!1}function y(C){const D=C.uniforms;let N=0;const P=16;for(let U=0,F=D.length;U<F;U++){const k=Array.isArray(D[U])?D[U]:[D[U]];for(let K=0,st=k.length;K<st;K++){const X=k[K],et=Array.isArray(X.value)?X.value:[X.value];for(let W=0,$=et.length;W<$;W++){const ht=et[W],it=S(ht),nt=N%P,xt=nt%it.boundary,Zt=nt+xt;N+=xt,Zt!==0&&P-Zt<it.storage&&(N+=P-Zt),X.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=N,N+=it.storage}}}const T=N%P;return T>0&&(N+=P-T),C.__size=N,C.__cache={},this}function S(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(D.boundary=16,D.storage=C.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",C),D}function L(C){const D=C.target;D.removeEventListener("dispose",L);const N=h.indexOf(D.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function B(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},u={}}return{bind:m,update:p,dispose:B}}const Yw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ca=null;function Zw(){return ca===null&&(ca=new OT(Yw,16,16,rr,ga),ca.name="DFG_LUT",ca.minFilter=Vn,ca.magFilter=Vn,ca.wrapS=Wi,ca.wrapT=Wi,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class Kw{constructor(t={}){const{canvas:i=ZE(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:M=xi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const w=M,y=new Set([sm,am,im]),S=new Set([xi,ma,Dl,Nl,em,nm]),L=new Uint32Array(4),B=new Int32Array(4),C=new V;let D=null,N=null;const P=[],T=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let k=!1,K=null,st=null,X=null,et=null;this._outputColorSpace=vi;let W=0,$=0,ht=null,it=-1,nt=null;const xt=new on,Zt=new on;let Kt=null;const z=new Me(0);let mt=0,Rt=i.width,Q=i.height,dt=1,bt=null,Bt=null;const _t=new on(0,0,Rt,Q),wt=new on(0,0,Rt,Q);let ke=!1;const me=new fm;let _e=!1,ye=!1;const ee=new ln,ie=new V,Xe=new on,gn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function en(){return ht===null?dt:1}let Y=s;function an(A,H){return i.getContext(A,H)}let Pe,O,E,tt,ct,pt,At,Nt,gt,yt,Dt,$t,It,Pt,kt,ne,ce,q,Ct,Mt,Lt,Vt,Et;try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jp}`),i.addEventListener("webglcontextlost",Ne,!1),i.addEventListener("webglcontextrestored",ue,!1),i.addEventListener("webglcontextcreationerror",ri,!1),Y===null){const H="webgl2";if(Y=an(H,A),Y===null)throw an(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(A){throw i.removeEventListener("webglcontextlost",Ne,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ri,!1),Be("WebGLRenderer: "+A.message),A}function Jt(){Pe=new ZA(Y),Pe.init(),Lt=new Fw(Y,Pe),O=new zA(Y,Pe,t,Lt),E=new Bw(Y,Pe),O.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),st=Y.createFramebuffer(),X=Y.createFramebuffer(),et=Y.createFramebuffer(),tt=new jA(Y),ct=new Ew,pt=new zw(Y,Pe,E,ct,O,Lt,tt),At=new YA(F),Nt=new $T(Y),Vt=new IA(Y,Nt),gt=new KA(Y,Nt,tt,Vt),yt=new $A(Y,gt,Nt,Vt,tt),q=new JA(Y,O,pt),kt=new FA(ct),Dt=new yw(F,At,Pe,O,Vt,kt),$t=new Ww(F,ct),It=new bw,Pt=new Nw(Pe),ce=new PA(F,At,E,yt,b,m),ne=new Iw(F,yt,O),Et=new qw(Y,tt,O,E),Ct=new BA(Y,Pe,tt),Mt=new QA(Y,Pe,tt),tt.programs=Dt.programs,F.capabilities=O,F.extensions=Pe,F.properties=ct,F.renderLists=It,F.shadowMap=ne,F.state=E,F.info=tt}w!==xi&&(U=new eR(w,i.width,i.height,d,l,u));const Gt=new kw(F,Y);this.xr=Gt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(A){A!==void 0&&(dt=A,this.setSize(Rt,Q,!1))},this.getSize=function(A){return A.set(Rt,Q)},this.setSize=function(A,H,ft=!0){if(Gt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=A,Q=H,i.width=Math.floor(A*dt),i.height=Math.floor(H*dt),ft===!0&&(i.style.width=A+"px",i.style.height=H+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Rt*dt,Q*dt).floor()},this.setDrawingBufferSize=function(A,H,ft){Rt=A,Q=H,dt=ft,i.width=Math.floor(A*ft),i.height=Math.floor(H*ft),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(w===xi){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(xt)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,H,ft,rt){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,H,ft,rt),E.viewport(xt.copy(_t).multiplyScalar(dt).round())},this.getScissor=function(A){return A.copy(wt)},this.setScissor=function(A,H,ft,rt){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,H,ft,rt),E.scissor(Zt.copy(wt).multiplyScalar(dt).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(A){E.setScissorTest(ke=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){Bt=A},this.getClearColor=function(A){return A.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,ft=!0){let rt=0;if(A){let ot=!1;if(ht!==null){const zt=ht.texture.format;ot=y.has(zt)}if(ot){const zt=ht.texture.type,Xt=S.has(zt),Ut=ce.getClearColor(),Yt=ce.getClearAlpha(),Qt=Ut.r,se=Ut.g,fe=Ut.b;Xt?(L[0]=Qt,L[1]=se,L[2]=fe,L[3]=Yt,Y.clearBufferuiv(Y.COLOR,0,L)):(B[0]=Qt,B[1]=se,B[2]=fe,B[3]=Yt,Y.clearBufferiv(Y.COLOR,0,B))}else rt|=Y.COLOR_BUFFER_BIT}H&&(rt|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(rt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&Y.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ne,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ri,!1),ce.dispose(),It.dispose(),Pt.dispose(),ct.dispose(),At.dispose(),yt.dispose(),Vt.dispose(),Et.dispose(),Dt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",ws),Gt.removeEventListener("sessionend",qa),Zi.stop()};function Ne(A){A.preventDefault(),Fv("WebGLRenderer: Context Lost."),k=!0}function ue(){Fv("WebGLRenderer: Context Restored."),k=!1;const A=tt.autoReset,H=ne.enabled,ft=ne.autoUpdate,rt=ne.needsUpdate,ot=ne.type;Jt(),tt.autoReset=A,ne.enabled=H,ne.autoUpdate=ft,ne.needsUpdate=rt,ne.type=ot}function ri(A){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Si(A){const H=A.target;H.removeEventListener("dispose",Si),Qu(H)}function Qu(A){ur(A),ct.remove(A)}function ur(A){const H=ct.get(A).programs;H!==void 0&&(H.forEach(function(ft){Dt.releaseProgram(ft)}),A.isShaderMaterial&&Dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,ft,rt,ot,zt){H===null&&(H=gn);const Xt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Ut=bo(A,H,ft,rt,ot);E.setMaterial(rt,Xt);let Yt=ft.index,Qt=1;if(rt.wireframe===!0){if(Yt=gt.getWireframeAttribute(ft),Yt===void 0)return;Qt=2}const se=ft.drawRange,fe=ft.attributes.position;let Wt=se.start*Qt,Ee=(se.start+se.count)*Qt;zt!==null&&(Wt=Math.max(Wt,zt.start*Qt),Ee=Math.min(Ee,(zt.start+zt.count)*Qt)),Yt!==null?(Wt=Math.max(Wt,0),Ee=Math.min(Ee,Yt.count)):fe!=null&&(Wt=Math.max(Wt,0),Ee=Math.min(Ee,fe.count));const ve=Ee-Wt;if(ve<0||ve===1/0)return;Vt.setup(ot,rt,Ut,ft,Yt);let Ke,He=Ct;if(Yt!==null&&(Ke=Nt.get(Yt),He=Mt,He.setIndex(Ke)),ot.isMesh)rt.wireframe===!0?(E.setLineWidth(rt.wireframeLinewidth*en()),He.setMode(Y.LINES)):He.setMode(Y.TRIANGLES);else if(ot.isLine){let yn=rt.linewidth;yn===void 0&&(yn=1),E.setLineWidth(yn*en()),ot.isLineSegments?He.setMode(Y.LINES):ot.isLineLoop?He.setMode(Y.LINE_LOOP):He.setMode(Y.LINE_STRIP)}else ot.isPoints?He.setMode(Y.POINTS):ot.isSprite&&He.setMode(Y.TRIANGLES);if(ot.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))He.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const yn=ot._multiDrawStarts,Ft=ot._multiDrawCounts,cn=ot._multiDrawCount,Le=Yt?Nt.get(Yt).bytesPerElement:1,Xn=ct.get(rt).currentProgram.getUniforms();for(let oi=0;oi<cn;oi++)Xn.setValue(Y,"_gl_DrawID",oi),He.render(yn[oi]/Le,Ft[oi])}else if(ot.isInstancedMesh)He.renderInstances(Wt,ve,ot.count);else if(ft.isInstancedBufferGeometry){const yn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Ft=Math.min(ft.instanceCount,yn);He.renderInstances(Wt,ve,Ft)}else He.render(Wt,ve)};function Rs(A,H,ft,rt){K!==null&&A.isNodeMaterial&&K.setObject(rt,A),_e===!0&&kt.setState(A,ft,!1),A.transparent===!0&&A.side===fa&&A.forceSinglePass===!1?(A.side=si,A.needsUpdate=!0,Cs(A,H,rt),A.side=ar,A.needsUpdate=!0,Cs(A,H,rt),A.side=fa):Cs(A,H,rt)}this.compile=function(A,H,ft=null){ft===null&&(ft=A),K!==null&&K.renderStart(A,H,ft),N=Pt.get(ft),N.init(H),T.push(N),ft.traverseVisible(function(ot){ot.isLight&&ot.layers.test(H.layers)&&(N.pushLight(ot),ot.castShadow&&N.pushShadow(ot))}),A!==ft&&A.traverseVisible(function(ot){ot.isLight&&ot.layers.test(H.layers)&&(N.pushLight(ot),ot.castShadow&&N.pushShadow(ot))}),N.setupLights(),K!==null&&K.updateLights(N.state.lightsArray),ye=this.localClippingEnabled,_e=kt.init(this.clippingPlanes,ye),_e===!0&&kt.setGlobalState(this.clippingPlanes,H),K!==null&&ne.render(N.state.shadowsArray,ft,H);const rt=new Set;return A.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const zt=ot.material;if(zt)if(Array.isArray(zt))for(let Xt=0;Xt<zt.length;Xt++){const Ut=zt[Xt];Rs(Ut,ft,H,ot),rt.add(Ut)}else Rs(zt,ft,H,ot),rt.add(zt)}),N=T.pop(),K!==null&&K.renderEnd(),rt},this.compileAsync=function(A,H,ft=null){const rt=this.compile(A,H,ft);return new Promise(ot=>{function zt(){if(rt.forEach(function(Xt){const Yt=ct.get(Xt).currentProgram;(Yt===void 0||Yt.isReady())&&rt.delete(Xt)}),rt.size===0){ot(A);return}setTimeout(zt,10)}Pe.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Wa=null;function va(A){Wa&&Wa(A)}function ws(){Zi.stop()}function qa(){Zi.start()}const Zi=new pS;Zi.setAnimationLoop(va),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(A){Wa=A,Gt.setAnimationLoop(A),A===null?Zi.stop():Zi.start()},Gt.addEventListener("sessionstart",ws),Gt.addEventListener("sessionend",qa),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;K!==null&&K.renderStart(A,H);const ft=Gt.enabled===!0&&Gt.isPresenting===!0,rt=U!==null&&(ht===null||ft)&&U.begin(F,ht);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(H),H=Gt.getCamera()),A.isScene===!0&&A.onBeforeRender(F,A,H,ht),N=Pt.get(A,T.length),N.init(H),N.state.textureUnits=pt.getTextureUnits(),T.push(N),ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),me.setFromProjectionMatrix(ee,da,H.reversedDepth),ye=this.localClippingEnabled,_e=kt.init(this.clippingPlanes,ye),D=It.get(A,P.length),D.init(),P.push(D),Gt.enabled===!0&&Gt.isPresenting===!0){const Xt=F.xr.getDepthSensingMesh();Xt!==null&&So(Xt,H,-1/0,F.sortObjects)}So(A,H,0,F.sortObjects),D.finish(),K!==null&&K.updateLights(N.state.lightsArray),F.sortObjects===!0&&D.sort(bt,Bt),Ie=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Ie&&ce.addToRenderList(D,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&kt.beginShadows();const ot=N.state.shadowsArray;if(ne.render(ot,A,H),_e===!0&&kt.endShadows(),(rt&&U.hasRenderPass())===!1){const Xt=D.opaque,Ut=D.transmissive;if(N.setupLights(),H.isArrayCamera){const Yt=H.cameras;if(Ut.length>0)for(let Qt=0,se=Yt.length;Qt<se;Qt++){const fe=Yt[Qt];fr(Xt,Ut,A,fe)}Ie&&ce.render(A);for(let Qt=0,se=Yt.length;Qt<se;Qt++){const fe=Yt[Qt];Mo(D,A,fe,fe.viewport)}}else Ut.length>0&&fr(Xt,Ut,A,H),Ie&&ce.render(A),Mo(D,A,H)}ht!==null&&$===0&&(pt.updateMultisampleRenderTarget(ht),pt.updateRenderTargetMipmap(ht)),rt&&U.end(F),A.isScene===!0&&A.onAfterRender(F,A,H),Vt.resetDefaultState(),it=-1,nt=null,T.pop(),T.length>0?(N=T[T.length-1],pt.setTextureUnits(N.state.textureUnits),_e===!0&&kt.setGlobalState(F.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?D=P[P.length-1]:D=null,K!==null&&K.renderEnd()};function So(A,H,ft,rt){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)ft=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(me)){rt&&Xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const Xt=yt.update(A),Ut=A.material;Ut.visible&&D.push(A,Xt,Ut,ft,Xe.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(me))){const Xt=yt.update(A),Ut=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xe.copy(A.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Xe.copy(Xt.boundingSphere.center)),Xe.applyMatrix4(A.matrixWorld).applyMatrix4(ee)),Array.isArray(Ut)){const Yt=Xt.groups;for(let Qt=0,se=Yt.length;Qt<se;Qt++){const fe=Yt[Qt],Wt=Ut[fe.materialIndex];Wt&&Wt.visible&&D.push(A,Xt,Wt,ft,Xe.z,fe,H)}}else Ut.visible&&D.push(A,Xt,Ut,ft,Xe.z,null,H)}}const zt=A.children;for(let Xt=0,Ut=zt.length;Xt<Ut;Xt++)So(zt[Xt],H,ft,rt)}function Mo(A,H,ft,rt){const{opaque:ot,transmissive:zt,transparent:Xt}=A;N.setupLightsView(ft),_e===!0&&kt.setGlobalState(F.clippingPlanes,ft),rt&&E.viewport(xt.copy(rt)),ot.length>0&&Ki(ot,H,ft),zt.length>0&&Ki(zt,H,ft),Xt.length>0&&Ki(Xt,H,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function fr(A,H,ft,rt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[rt.id]===void 0){const Wt=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[rt.id]=new Yi(1,1,{generateMipmaps:!0,type:Wt?ga:xi,minFilter:er,samples:Math.max(4,O.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const zt=N.state.transmissionRenderTarget[rt.id],Xt=rt.viewport||xt;zt.setSize(Xt.z*F.transmissionResolutionScale,Xt.w*F.transmissionResolutionScale);const Ut=F.getRenderTarget(),Yt=F.getActiveCubeFace(),Qt=F.getActiveMipmapLevel();F.setRenderTarget(zt),F.getClearColor(z),mt=F.getClearAlpha(),mt<1&&F.setClearColor(16777215,.5),F.clear(),Ie&&ce.render(ft);const se=F.toneMapping;F.toneMapping=pa;const fe=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),N.setupLightsView(rt),_e===!0&&kt.setGlobalState(F.clippingPlanes,rt),Ki(A,ft,rt),pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ee=0,ve=H.length;Ee<ve;Ee++){const Ke=H[Ee],{object:He,geometry:yn,material:Ft,group:cn}=Ke;if(Ft.side===fa&&He.layers.test(rt.layers)){const Le=Ft.side;Ft.side=si,Ft.needsUpdate=!0,Il(He,ft,rt,yn,Ft,cn),Ft.side=Le,Ft.needsUpdate=!0,Wt=!0}}Wt===!0&&(pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt))}F.setRenderTarget(Ut,Yt,Qt),F.setClearColor(z,mt),fe!==void 0&&(rt.viewport=fe),F.toneMapping=se}function Ki(A,H,ft){const rt=H.isScene===!0?H.overrideMaterial:null;for(let ot=0,zt=A.length;ot<zt;ot++){const Xt=A[ot],{object:Ut,geometry:Yt,group:Qt}=Xt;let se=Xt.material;se.allowOverride===!0&&rt!==null&&(se=rt),Ut.layers.test(ft.layers)&&Il(Ut,H,ft,Yt,se,Qt)}}function Il(A,H,ft,rt,ot,zt){K!==null&&ot.isNodeMaterial&&K.setObject(A,ot),A.onBeforeRender(F,H,ft,rt,ot,zt),A.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ot.onBeforeRender(F,H,ft,rt,A,zt),ot.transparent===!0&&ot.side===fa&&ot.forceSinglePass===!1?(ot.side=si,ot.needsUpdate=!0,F.renderBufferDirect(ft,H,rt,ot,A,zt),ot.side=ar,ot.needsUpdate=!0,F.renderBufferDirect(ft,H,rt,ot,A,zt),ot.side=fa):F.renderBufferDirect(ft,H,rt,ot,A,zt),A.onAfterRender(F,H,ft,rt,ot,zt)}function Cs(A,H,ft){H.isScene!==!0&&(H=gn);const rt=ct.get(A),ot=N.state.lights,zt=N.state.shadowsArray,Xt=ot.state.version,Ut=Dt.getParameters(A,ot.state,zt,H,ft,N.state.lightProbeGridArray),Yt=Dt.getProgramCacheKey(Ut);let Qt=rt.programs;rt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,rt.fog=H.fog;const se=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;rt.envMap=At.get(A.envMap||rt.environment,se),rt.envMapRotation=rt.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",Si),Qt=new Map,rt.programs=Qt);let fe=Qt.get(Yt);if(fe!==void 0){if(rt.currentProgram===fe&&rt.lightsStateVersion===Xt)return Eo(A,Ut),fe}else Ut.uniforms=Dt.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,ft,Ut),A.onBeforeCompile(Ut,F),fe=Dt.acquireProgram(Ut,Yt),Qt.set(Yt,fe),rt.uniforms=Ut.uniforms;const Wt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=kt.uniform),Eo(A,Ut),rt.needsLights=zl(A),rt.lightsStateVersion=Xt,rt.needsLights&&(Wt.ambientLightColor.value=ot.state.ambient,Wt.lightProbe.value=ot.state.probe,Wt.sunLights.value=ot.state.sun,Wt.sunLightShadows.value=ot.state.sunShadow,Wt.directionalLights.value=ot.state.directional,Wt.directionalLightShadows.value=ot.state.directionalShadow,Wt.spotLights.value=ot.state.spot,Wt.spotLightShadows.value=ot.state.spotShadow,Wt.rectAreaLights.value=ot.state.rectArea,Wt.ltc_1.value=ot.state.rectAreaLTC1,Wt.ltc_2.value=ot.state.rectAreaLTC2,Wt.pointLights.value=ot.state.point,Wt.pointLightShadows.value=ot.state.pointShadow,Wt.hemisphereLights.value=ot.state.hemi,Wt.sunShadowMatrix.value=ot.state.sunShadowMatrix,Wt.sunShadowCascade.value=ot.state.sunShadowCascade,Wt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Wt.spotLightMatrix.value=ot.state.spotLightMatrix,Wt.spotLightMap.value=ot.state.spotLightMap,Wt.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.lightProbeGrid=N.state.lightProbeGridArray.length>0,rt.currentProgram=fe,rt.uniformsList=null,fe}function yo(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Uu.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Eo(A,H){const ft=ct.get(A);ft.outputColorSpace=H.outputColorSpace,ft.batching=H.batching,ft.batchingColor=H.batchingColor,ft.instancing=H.instancing,ft.instancingColor=H.instancingColor,ft.instancingMorph=H.instancingMorph,ft.skinning=H.skinning,ft.morphTargets=H.morphTargets,ft.morphNormals=H.morphNormals,ft.morphColors=H.morphColors,ft.morphTargetsCount=H.morphTargetsCount,ft.numClippingPlanes=H.numClippingPlanes,ft.numIntersection=H.numClipIntersection,ft.vertexAlphas=H.vertexAlphas,ft.vertexTangents=H.vertexTangents,ft.toneMapping=H.toneMapping}function To(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(H.matrixWorld);for(let ft=0,rt=A.length;ft<rt;ft++){const ot=A[ft];if(ot.texture!==null&&ot.boundingBox.containsPoint(C))return ot}return null}function bo(A,H,ft,rt,ot){H.isScene!==!0&&(H=gn),pt.resetTextureUnits();const zt=H.fog,Xt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?H.environment:null,Ut=ht===null?F.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ue.workingColorSpace,Yt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,Qt=At.get(rt.envMap||Xt,Yt),se=rt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,fe=!!ft.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!ft.morphAttributes.position,Ee=!!ft.morphAttributes.normal,ve=!!ft.morphAttributes.color;let Ke=pa;rt.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ke=F.toneMapping);const He=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,yn=He!==void 0?He.length:0,Ft=ct.get(rt),cn=N.state.lights;if(_e===!0&&(ye===!0||A!==nt)){const Re=A===nt&&rt.id===it;kt.setState(rt,A,Re)}let Le=!1;rt.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==cn.state.version||Ft.outputColorSpace!==Ut||ot.isBatchedMesh&&Ft.batching===!1||!ot.isBatchedMesh&&Ft.batching===!0||ot.isBatchedMesh&&Ft.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Ft.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Ft.instancing===!1||!ot.isInstancedMesh&&Ft.instancing===!0||ot.isSkinnedMesh&&Ft.skinning===!1||!ot.isSkinnedMesh&&Ft.skinning===!0||ot.isInstancedMesh&&Ft.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Ft.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Ft.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Ft.instancingMorph===!1&&ot.morphTexture!==null||Ft.envMap!==Qt||rt.fog===!0&&Ft.fog!==zt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==kt.numPlanes||Ft.numIntersection!==kt.numIntersection)||Ft.vertexAlphas!==se||Ft.vertexTangents!==fe||Ft.morphTargets!==Wt||Ft.morphNormals!==Ee||Ft.morphColors!==ve||Ft.toneMapping!==Ke||Ft.morphTargetsCount!==yn||!!Ft.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Le=!0):(Le=!0,Ft.__version=rt.version);let Xn=Ft.currentProgram;Le===!0&&(Xn=Cs(rt,H,ot),K&&rt.isNodeMaterial&&K.onUpdateProgram(rt,Xn,Ft));let oi=!1,Qi=!1,xe=!1;const ze=Xn.getUniforms(),Je=Ft.uniforms;if(E.useProgram(Xn.program)&&(oi=!0,Qi=!0,xe=!0),rt.id!==it&&(it=rt.id,Qi=!0),Ft.needsLights){const Re=To(N.state.lightProbeGridArray,ot);Ft.lightProbeGrid!==Re&&(Ft.lightProbeGrid=Re,Qi=!0)}if(oi||nt!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ze.setValue(Y,"projectionMatrix",A.projectionMatrix),ze.setValue(Y,"viewMatrix",A.matrixWorldInverse);const un=ze.map.cameraPosition;un!==void 0&&un.setValue(Y,ie.setFromMatrixPosition(A.matrixWorld)),O.logarithmicDepthBuffer&&ze.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ze.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),nt!==A&&(nt=A,Qi=!0,xe=!0)}if(Ft.needsLights&&(cn.state.sunShadowMap.length>0&&ze.setValue(Y,"sunShadowMap",cn.state.sunShadowMap,pt),cn.state.directionalShadowMap.length>0&&ze.setValue(Y,"directionalShadowMap",cn.state.directionalShadowMap,pt),cn.state.spotShadowMap.length>0&&ze.setValue(Y,"spotShadowMap",cn.state.spotShadowMap,pt),cn.state.pointShadowMap.length>0&&ze.setValue(Y,"pointShadowMap",cn.state.pointShadowMap,pt)),ot.isSkinnedMesh){ze.setOptional(Y,ot,"bindMatrix"),ze.setOptional(Y,ot,"bindMatrixInverse");const Re=ot.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ze.setValue(Y,"boneTexture",Re.boneTexture,pt))}ot.isBatchedMesh&&(ze.setOptional(Y,ot,"batchingTexture"),ze.setValue(Y,"batchingTexture",ot._matricesTexture,pt),ze.setOptional(Y,ot,"batchingIdTexture"),ze.setValue(Y,"batchingIdTexture",ot._indirectTexture,pt),ze.setOptional(Y,ot,"batchingColorTexture"),ot._colorsTexture!==null&&ze.setValue(Y,"batchingColorTexture",ot._colorsTexture,pt));const li=ft.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&q.update(ot,ft,Xn),(Qi||Ft.receiveShadow!==ot.receiveShadow)&&(Ft.receiveShadow=ot.receiveShadow,ze.setValue(Y,"receiveShadow",ot.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&H.environment!==null&&(Je.envMapIntensity.value=H.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=Zw()),Qi){if(ze.setValue(Y,"toneMappingExposure",F.toneMappingExposure),Ft.needsLights&&Bl(Je,xe),zt&&rt.fog===!0&&$t.refreshFogUniforms(Je,zt),$t.refreshMaterialUniforms(Je,rt,dt,Q,N.state.transmissionRenderTarget[A.id]),Ft.needsLights&&Ft.lightProbeGrid){const Re=Ft.lightProbeGrid;Je.probesSH.value=Re.texture,Je.probesMin.value.copy(Re.boundingBox.min),Je.probesMax.value.copy(Re.boundingBox.max),Je.probesResolution.value.copy(Re.resolution)}Uu.upload(Y,yo(Ft),Je,pt)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Uu.upload(Y,yo(Ft),Je,pt),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ze.setValue(Y,"center",ot.center),ze.setValue(Y,"modelViewMatrix",ot.modelViewMatrix),ze.setValue(Y,"normalMatrix",ot.normalMatrix),ze.setValue(Y,"modelMatrix",ot.matrixWorld),rt.uniformsGroups!==void 0){const Re=rt.uniformsGroups;for(let un=0,xa=Re.length;un<xa;un++){const Fl=Re[un];Et.update(Fl,Xn),Et.bind(Fl,Xn)}}return Xn}function Bl(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function zl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(A,H,ft){const rt=ct.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),ct.get(A.texture).__webglTexture=H,ct.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ft,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const ft=ct.get(A);ft.__webglFramebuffer=H,ft.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,ft=0){ht=A,W=H,$=ft;let rt=null,ot=!1,zt=!1;if(A){const Ut=ct.get(A);if(Ut.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Ut.__webglFramebuffer),xt.copy(A.viewport),Zt.copy(A.scissor),Kt=A.scissorTest,E.viewport(xt),E.scissor(Zt),E.setScissorTest(Kt),it=-1;return}else if(Ut.__webglFramebuffer===void 0)pt.setupRenderTarget(A);else if(Ut.__hasExternalTextures)pt.rebindTextures(A,ct.get(A.texture).__webglTexture,ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const se=A.depthTexture;if(Ut.__boundDepthTexture!==se){if(se!==null&&ct.has(se)&&(A.width!==se.image.width||A.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(A)}}const Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(zt=!0);const Qt=ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qt[H])?rt=Qt[H][ft]:rt=Qt[H],ot=!0):A.samples>0&&pt.useMultisampledRTT(A)===!1?rt=ct.get(A).__webglMultisampledFramebuffer:Array.isArray(Qt)?rt=Qt[ft]:rt=Qt,xt.copy(A.viewport),Zt.copy(A.scissor),Kt=A.scissorTest}else xt.copy(_t).multiplyScalar(dt).floor(),Zt.copy(wt).multiplyScalar(dt).floor(),Kt=ke;if(ft!==0&&(rt=st),E.bindFramebuffer(Y.FRAMEBUFFER,rt)&&E.drawBuffers(A,rt),E.viewport(xt),E.scissor(Zt),E.setScissorTest(Kt),ot){const Ut=ct.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ut.__webglTexture,ft)}else if(zt){const Ut=H;for(let Yt=0;Yt<A.textures.length;Yt++){const Qt=ct.get(A.textures[Yt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Yt,Qt.__webglTexture,ft,Ut)}}else if(A!==null&&ft!==0){const Ut=ct.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ut.__webglTexture,ft)}it=-1};function Mi(A){const H=ct.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=O.textureFormatReadable(A.format),H.__typeReadable=O.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,ft,rt,ot,zt,Xt,Ut=0){if(!(A&&A.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(Yt=Yt[Xt]),Yt){E.bindFramebuffer(Y.FRAMEBUFFER,Yt);try{const Qt=A.textures[Ut],se=Qt.format,fe=Qt.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ut);const Wt=Mi(Qt);if(Wt.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-rt&&ft>=0&&ft<=A.height-ot&&Y.readPixels(H,ft,rt,ot,Lt.convert(se),Lt.convert(fe),zt)}finally{const Qt=ht!==null?ct.get(ht).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,H,ft,rt,ot,zt,Xt,Ut=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(Yt=Yt[Xt]),Yt)if(H>=0&&H<=A.width-rt&&ft>=0&&ft<=A.height-ot){E.bindFramebuffer(Y.FRAMEBUFFER,Yt);const Qt=A.textures[Ut],se=Qt.format,fe=Qt.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ut);const Wt=Mi(Qt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ee),Y.bufferData(Y.PIXEL_PACK_BUFFER,zt.byteLength,Y.STREAM_READ),Y.readPixels(H,ft,rt,ot,Lt.convert(se),Lt.convert(fe),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const ve=ht!==null?ct.get(ht).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,ve);const Ke=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await KE(Y,Ke,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ee),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,zt),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Ee),Y.deleteSync(Ke),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,ft=0){const rt=Math.pow(2,-ft),ot=Math.floor(A.image.width*rt),zt=Math.floor(A.image.height*rt),Xt=H!==null?H.x:0,Ut=H!==null?H.y:0;pt.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ft,0,0,Xt,Ut,ot,zt),E.unbindTexture()},this.copyTextureToTexture=function(A,H,ft=null,rt=null,ot=0,zt=0){let Xt,Ut,Yt,Qt,se,fe,Wt,Ee,ve;const Ke=A.isCompressedTexture?A.mipmaps[zt]:A.image;if(ft!==null)Xt=ft.max.x-ft.min.x,Ut=ft.max.y-ft.min.y,Yt=ft.isBox3?ft.max.z-ft.min.z:1,Qt=ft.min.x,se=ft.min.y,fe=ft.isBox3?ft.min.z:0;else{const Je=Math.pow(2,-ot);Xt=Math.floor(Ke.width*Je),Ut=Math.floor(Ke.height*Je),A.isDataArrayTexture?Yt=Ke.depth:A.isData3DTexture?Yt=Math.floor(Ke.depth*Je):Yt=1,Qt=0,se=0,fe=0}rt!==null?(Wt=rt.x,Ee=rt.y,ve=rt.z):(Wt=0,Ee=0,ve=0);const He=Lt.convert(H.format),yn=Lt.convert(H.type);let Ft;H.isData3DTexture?(pt.setTexture3D(H,0),Ft=Y.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(pt.setTexture2DArray(H,0),Ft=Y.TEXTURE_2D_ARRAY):(pt.setTexture2D(H,0),Ft=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,H.unpackAlignment);const cn=E.getParameter(Y.UNPACK_ROW_LENGTH),Le=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Xn=E.getParameter(Y.UNPACK_SKIP_PIXELS),oi=E.getParameter(Y.UNPACK_SKIP_ROWS),Qi=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Ke.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ke.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Qt),E.pixelStorei(Y.UNPACK_SKIP_ROWS,se),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,fe);const xe=A.isDataArrayTexture||A.isData3DTexture,ze=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const Je=ct.get(A),li=ct.get(H),Re=ct.get(Je.__renderTarget),un=ct.get(li.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,Re.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let xa=0;xa<Yt;xa++)xe&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ct.get(A).__webglTexture,ot,fe+xa),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ct.get(H).__webglTexture,zt,ve+xa)),Y.blitFramebuffer(Qt,se,Xt,Ut,Wt,Ee,Xt,Ut,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ot!==0||A.isRenderTargetTexture||ct.has(A)){const Je=ct.get(A),li=ct.get(H);E.bindFramebuffer(Y.READ_FRAMEBUFFER,X),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,et);for(let Re=0;Re<Yt;Re++)xe?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Je.__webglTexture,ot,fe+Re):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Je.__webglTexture,ot),ze?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,li.__webglTexture,zt,ve+Re):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,li.__webglTexture,zt),ot!==0?Y.blitFramebuffer(Qt,se,Xt,Ut,Wt,Ee,Xt,Ut,Y.COLOR_BUFFER_BIT,Y.NEAREST):ze?Y.copyTexSubImage3D(Ft,zt,Wt,Ee,ve+Re,Qt,se,Xt,Ut):Y.copyTexSubImage2D(Ft,zt,Wt,Ee,Qt,se,Xt,Ut);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else ze?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Ft,zt,Wt,Ee,ve,Xt,Ut,Yt,He,yn,Ke.data):H.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ft,zt,Wt,Ee,ve,Xt,Ut,Yt,He,Ke.data):Y.texSubImage3D(Ft,zt,Wt,Ee,ve,Xt,Ut,Yt,He,yn,Ke):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,zt,Wt,Ee,Xt,Ut,He,yn,Ke.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,zt,Wt,Ee,Ke.width,Ke.height,He,Ke.data):Y.texSubImage2D(Y.TEXTURE_2D,zt,Wt,Ee,Xt,Ut,He,yn,Ke);E.pixelStorei(Y.UNPACK_ROW_LENGTH,cn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Le),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Xn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,oi),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Qi),zt===0&&H.generateMipmaps&&Y.generateMipmap(Ft),E.unbindTexture()},this.initRenderTarget=function(A){ct.get(A).__webglFramebuffer===void 0&&pt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pt.setTextureCube(A,0):A.isData3DTexture?pt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pt.setTexture2DArray(A,0):pt.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){W=0,$=0,ht=null,E.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const Qw={jerseyColor:1920728,pantsColor:16777215,helmetColor:16096779,numberColor:16777215,stripeColor:16096779},jw={jerseyColor:12131356,pantsColor:2042167,helmetColor:16777215,numberColor:16777215,stripeColor:12131356};class Ux{constructor(t,i,s){this.ragdollState="NORMAL",this.ragdollBlend=0,this.ragdollAngularVel=new V,this.ragdollTilt=new V,this.stumbleTime=0,this.groundContactTime=0,this.runCycle=0,this.isHoldingBall=!1,this.position=t,this.side=i,this.uniform=s,this.group=new rn;const l=new ai({color:s.jerseyColor,roughness:.5,metalness:.1}),u=new ai({color:s.pantsColor,roughness:.6,metalness:.05}),h=new ai({color:s.helmetColor,roughness:.2,metalness:.4}),d=new ai({color:s.jerseyColor,roughness:.4,metalness:.1}),m=new ai({color:4937059,metalness:.8,roughness:.2}),p=new ai({color:1120295,roughness:.8}),v=new ai({color:13933431,roughness:.6});this.root=new rn,this.group.add(this.root);const g=new Li(.24,.22,.25,8);this.pelvis=new re(g,u),this.pelvis.position.y=.95,this.pelvis.castShadow=!0,this.root.add(this.pelvis),this.torso=new rn,this.torso.position.y=.15,this.pelvis.add(this.torso);const _=new Li(.3,.25,.45,8);this.torsoMesh=new re(_,l),this.torsoMesh.position.y=.22,this.torsoMesh.castShadow=!0,this.torso.add(this.torsoMesh);const M=new Dn(.72,.18,.36);this.shoulderPads=new re(M,d),this.shoulderPads.position.y=.42,this.shoulderPads.castShadow=!0,this.torso.add(this.shoulderPads),this.headGroup=new rn,this.headGroup.position.y=.52,this.torso.add(this.headGroup);const b=new qu(.2,10,10);this.helmetMesh=new re(b,h),this.helmetMesh.castShadow=!0,this.headGroup.add(this.helmetMesh);const w=new Yu(.12,.02,6,8,Math.PI);this.facemask=new re(w,m),this.facemask.rotation.x=-Math.PI/2,this.facemask.position.set(0,-.05,.15),this.headGroup.add(this.facemask),this.leftShoulder=new rn,this.leftShoulder.position.set(-.38,.36,0),this.torso.add(this.leftShoulder);const y=new Li(.08,.07,.28,6);this.leftUpperArm=new re(y,l),this.leftUpperArm.position.y=-.14,this.leftShoulder.add(this.leftUpperArm),this.leftElbow=new rn,this.leftElbow.position.y=-.28,this.leftShoulder.add(this.leftElbow);const S=new Li(.065,.055,.28,6);this.leftForearm=new re(S,v),this.leftForearm.position.y=-.14,this.leftElbow.add(this.leftForearm),this.rightShoulder=new rn,this.rightShoulder.position.set(.38,.36,0),this.torso.add(this.rightShoulder),this.rightUpperArm=new re(y,l),this.rightUpperArm.position.y=-.14,this.rightShoulder.add(this.rightUpperArm),this.rightElbow=new rn,this.rightElbow.position.y=-.28,this.rightShoulder.add(this.rightElbow),this.rightForearm=new re(S,v),this.rightForearm.position.y=-.14,this.rightElbow.add(this.rightForearm);const L=new Li(.12,.09,.42,6),B=new Li(.085,.07,.42,6);this.leftHip=new rn,this.leftHip.position.set(-.16,-.1,0),this.pelvis.add(this.leftHip),this.leftThigh=new re(L,u),this.leftThigh.position.y=-.21,this.leftThigh.castShadow=!0,this.leftHip.add(this.leftThigh),this.leftKnee=new rn,this.leftKnee.position.y=-.42,this.leftHip.add(this.leftKnee),this.leftCalf=new re(B,p),this.leftCalf.position.y=-.21,this.leftCalf.castShadow=!0,this.leftKnee.add(this.leftCalf),this.rightHip=new rn,this.rightHip.position.set(.16,-.1,0),this.pelvis.add(this.rightHip),this.rightThigh=new re(L,u),this.rightThigh.position.y=-.21,this.rightThigh.castShadow=!0,this.rightHip.add(this.rightThigh),this.rightKnee=new rn,this.rightKnee.position.y=-.42,this.rightHip.add(this.rightKnee),this.rightCalf=new re(B,p),this.rightCalf.position.y=-.21,this.rightCalf.castShadow=!0,this.rightKnee.add(this.rightCalf)}update(t,i,s,l,u=!1){if(this.ragdollState==="NORMAL")if(this.ragdollBlend=Math.max(0,this.ragdollBlend-t*3),this.stumbleTime=0,this.groundContactTime=0,this.pelvis.position.y=.95,l&&i>.3){const h=(7.5+i/9*8.5)*(u?.72:1);this.runCycle+=t*h;const d=Math.sin(this.runCycle)*(u?.5:.75),m=Math.sin(this.runCycle)*(u?.55:.85);this.leftHip.rotation.x=m,this.leftKnee.rotation.x=Math.max(0,-Math.sin(this.runCycle+.3)*1.1),this.rightHip.rotation.x=-m,this.rightKnee.rotation.x=Math.max(0,-Math.sin(this.runCycle+Math.PI+.3)*1.1),this.isHoldingBall?(this.rightShoulder.rotation.set(.6,-.3,-.4),this.rightElbow.rotation.set(1.4,0,0),this.leftShoulder.rotation.x=d*.8,this.leftElbow.rotation.x=.5):(this.leftShoulder.rotation.x=-d,this.leftElbow.rotation.x=.4+Math.abs(d)*.3,this.rightShoulder.rotation.x=d,this.rightElbow.rotation.x=.4+Math.abs(d)*.3);const p=u?-.05:.18+i/10*.22;this.torso.rotation.x=p,this.torso.rotation.z=-s*.25,this.torso.rotation.y=Math.sin(this.runCycle)*.12,this.pelvis.position.y=.95+Math.abs(Math.cos(this.runCycle))*.06}else this.leftHip.rotation.x=.1,this.rightHip.rotation.x=.1,this.leftKnee.rotation.x=-.2,this.rightKnee.rotation.x=-.2,this.torso.rotation.set(.12,0,0),this.leftShoulder.rotation.set(.15,0,0),this.rightShoulder.rotation.set(.15,0,0);else if(this.ragdollState==="STUMBLE"){this.stumbleTime+=t,this.ragdollBlend=Math.min(.65,this.ragdollBlend+t*2);const h=Math.sin(this.stumbleTime*14)*.45;this.torso.rotation.x=.65+Math.sin(this.stumbleTime*8)*.2,this.torso.rotation.z=h,this.leftShoulder.rotation.set(-.8,-.6,-.8+h),this.rightShoulder.rotation.set(-.8,.6,.8-h),this.leftHip.rotation.x=.4+h*.5,this.rightHip.rotation.x=-.3-h*.5,this.pelvis.position.y=.78,this.stumbleTime>1.2&&(this.ragdollState="NORMAL")}else this.ragdollState==="PARTIAL_RAGDOLL"||this.ragdollState==="FULL_RAGDOLL"?(this.ragdollBlend=Math.min(1,this.ragdollBlend+t*4),this.groundContactTime+=t,this.ragdollTilt.addScaledVector(this.ragdollAngularVel,t),this.ragdollAngularVel.multiplyScalar(Math.pow(.92,t*60)),this.pelvis.position.y=Math.max(.24,this.pelvis.position.y-t*2.2),this.torso.rotation.x=Math.sin(this.ragdollTilt.x)*1.2,this.torso.rotation.z=Math.sin(this.ragdollTilt.z)*1.1,this.headGroup.rotation.x=-.4,this.leftShoulder.rotation.set(1.2,.4,.8),this.rightShoulder.rotation.set(1.2,-.4,-.8),this.leftElbow.rotation.set(1.4,0,0),this.rightElbow.rotation.set(1.4,0,0),this.leftHip.rotation.set(-.6,.3,.4),this.rightHip.rotation.set(-.4,-.3,-.4),this.leftKnee.rotation.set(.8,0,0),this.rightKnee.rotation.set(.6,0,0)):this.ragdollState==="RECOVERING"&&(this.ragdollBlend=Math.max(0,this.ragdollBlend-t*2.5),this.pelvis.position.y=.24+(1-this.ragdollBlend)*(.95-.24),this.torso.rotation.x*=.9,this.torso.rotation.z*=.9,this.ragdollBlend<=.05&&(this.ragdollState="NORMAL"))}applyTackleImpulse(t,i){this.ragdollState=i,this.ragdollAngularVel.set((Math.random()-.5)*8+t.z*.8,(Math.random()-.5)*6,-t.x*.8)}resetRagdoll(){this.ragdollState="NORMAL",this.ragdollBlend=0,this.ragdollAngularVel.set(0,0,0),this.ragdollTilt.set(0,0,0),this.stumbleTime=0,this.groundContactTime=0,this.pelvis.position.y=.95,this.torso.rotation.set(0,0,0),this.headGroup.rotation.set(0,0,0)}}const Kp=9.81,Jw={BULLET:1.15,TOUCH:.88,LOB:.68};function $w(o,t,i,s,l,u,h,d){const p=new V().subVectors(u,t).length(),v=new V().subVectors(o,l).setY(0).normalize();v.lengthSq()<.001&&v.set(0,0,1);const g=t.length();let _=1;g>.5&&(_=.8+.6*(-t.clone().normalize().dot(v)+1)*.5);const M=h/(i+.001),b=d/(s+.001);let w=(p+1.2)*M*_*b*42;w=Math.min(w,950);const y=v.clone().multiplyScalar(w*.016),S=v.clone().multiplyScalar(-w*.01);let L,B;return w<220?(L="LOW",B="NORMAL"):w<480?(L="MEDIUM",B="STUMBLE"):(L="HIGH",B="FULL_RAGDOLL"),{severity:L,impactStrength:w,impulseRunner:y,impulseDefender:S,nextState:B}}function op(o,t,i,s,l,u=24){const d=Math.max(s==="BULLET"?24:s==="TOUCH"?20:15,u*Jw[s]),m=(C,D)=>Math.hypot(D.x-C.x,D.z-C.z);let p=Math.max(.25,m(o,t)/d);for(let C=0;C<3;C++){const D=t.clone().addScaledVector(i,p);p=Math.max(.25,m(o,D)/d)}const v=t.clone().addScaledVector(i,p);v.x+=l.x,v.z+=l.z,v.y=ir.clamp(1.35+l.y,.9,2.1);const g=v.x-o.x,_=v.z-o.z,M=Math.sqrt(g*g+_*_),b=v.y-o.y,w=Math.max(.25,M/d),y=g/w,S=_/w,L=(b+.5*Kp*w*w)/w;return{velocity:new V(y,L,S),flightTime:w,targetLeadPoint:v}}function tC(o,t,i){const s=new V().subVectors(i,t),l=s.lengthSq();if(l<1e-8)return o.distanceTo(t);const u=ir.clamp(new V().subVectors(o,t).dot(s)/l,0,1);return o.distanceTo(t.clone().addScaledVector(s,u))}class eC{constructor(){this.position=new V,this.previousPosition=new V,this.velocity=new V,this.angularVelocity=new V,this.isHeld=!0,this.carrier=null,this.carrierOffset=new V(.25,1.25,.2),this.isAirborne=!1,this.hasBounced=!1,this.spinRate=28,this.spiralAngle=0,this.group=new rn;const t=new qu(.14,16,12);t.scale(.85,.85,1.55);const i=new ai({color:8138002,roughness:.65,metalness:.1});this.ballMesh=new re(t,i),this.ballMesh.castShadow=!0,this.group.add(this.ballMesh),this.stripesMesh=new rn;const s=new Yu(.095,.012,6,16),l=new za({color:16777215}),u=new re(s,l);u.position.z=.12,this.stripesMesh.add(u);const h=new re(s,l);h.position.z=-.12,this.stripesMesh.add(h),this.ballMesh.add(this.stripesMesh);const d=new za({color:16317180}),m=new Dn(.015,.01,.14);this.lacesMesh=new re(m,d),this.lacesMesh.position.set(0,.118,0),this.ballMesh.add(this.lacesMesh);for(let p=-2;p<=2;p++){const v=new Dn(.045,.008,.012),g=new re(v,d);g.position.set(0,.12,p*.025),this.ballMesh.add(g)}}update(t,i=.09){if(this.isHeld&&this.carrier){const s=new V;this.carrier.getWorldPosition(s);const l=new lr;this.carrier.getWorldQuaternion(l);const u=this.carrierOffset.clone().applyQuaternion(l);this.previousPosition.copy(this.position),this.position.copy(s).add(u),this.group.position.copy(this.position),this.group.quaternion.copy(l);return}if(this.isAirborne){if(this.previousPosition.copy(this.position),this.position.addScaledVector(this.velocity,t),this.position.y-=.5*Kp*t*t,this.velocity.y-=Kp*t,this.velocity.lengthSq()>1){const s=this.velocity.clone().normalize();this.group.lookAt(this.position.clone().add(s)),this.spiralAngle+=this.spinRate*t,this.ballMesh.rotation.z=this.spiralAngle}this.position.y<=i&&(this.position.y=i,this.hasBounced=!0,Math.abs(this.velocity.y)>1?(this.velocity.y=-this.velocity.y*.52,this.velocity.x*=.65,this.velocity.z*=.65,this.angularVelocity.set((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*15)):(this.velocity.set(0,0,0),this.isAirborne=!1)),this.group.position.copy(this.position)}else this.hasBounced&&(this.position.y=i,this.group.position.copy(this.position))}launch(t,i){this.isHeld=!1,this.carrier=null,this.isAirborne=!0,this.hasBounced=!1,this.position.copy(t),this.previousPosition.copy(t),this.velocity.copy(i),this.spiralAngle=0,this.spinRate=32,this.group.position.copy(this.position)}attachTo(t,i=new V(.25,1.2,.2)){this.isHeld=!0,this.isAirborne=!1,this.hasBounced=!1,this.carrier=t,this.carrierOffset.copy(i),this.previousPosition.copy(this.position)}}const dn=.9144,jn=53.33*dn;class nC{constructor(){this.group=new rn,this.createField(),this.createGoalPosts(),this.createPylons(),this.createStadiumStructure(),this.createLighting();const t=new As(jn,.45),i=new za({color:2450411,transparent:!0,opacity:.85,depthWrite:!1});this.losLineMesh=new re(t,i),this.losLineMesh.rotation.x=-Math.PI/2,this.losLineMesh.position.y=.02,this.group.add(this.losLineMesh);const s=new za({color:16436245,transparent:!0,opacity:.85,depthWrite:!1});this.firstDownLineMesh=new re(t,s),this.firstDownLineMesh.rotation.x=-Math.PI/2,this.firstDownLineMesh.position.y=.022,this.group.add(this.firstDownLineMesh)}createField(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const i=t.getContext("2d");if(i){i.fillStyle="#2d6a4f",i.fillRect(0,0,t.width,t.height);const g=120,_=t.height/g;for(let M=0;M<g;M+=5)M/5%2===0&&(i.fillStyle="rgba(255, 255, 255, 0.04)",i.fillRect(0,M*_,t.width,5*_));i.fillStyle="#1e3a8a",i.fillRect(0,0,t.width,10*_),i.fillStyle="#f8fafc",i.font="bold 72px sans-serif",i.textAlign="center",i.textBaseline="middle",i.save(),i.translate(t.width/2,5*_),i.rotate(Math.PI),i.fillText("WILDCATS",0,0),i.restore(),i.fillStyle="#881337",i.fillRect(0,(g-10)*_,t.width,10*_),i.fillStyle="#f8fafc",i.fillText("GRIDIRON GM",t.width/2,(g-5)*_),i.lineWidth=4,i.strokeStyle="#ffffff";for(let M=10;M<=110;M++){const b=M*_,w=M<=60?M-10:110-M;M%5===0?(i.lineWidth=M%10===0?6:3,i.beginPath(),i.moveTo(t.width*.08,b),i.lineTo(t.width*.92,b),i.stroke(),M%10===0&&w>0&&w<50?(i.fillStyle="#ffffff",i.font="bold 44px monospace",i.save(),i.translate(t.width*.16,b),i.rotate(Math.PI/2),i.fillText(w.toString(),0,0),i.restore(),i.save(),i.translate(t.width*.84,b),i.rotate(-Math.PI/2),i.fillText(w.toString(),0,0),i.restore()):M===60&&(i.fillStyle="#ffffff",i.font="bold 44px monospace",i.save(),i.translate(t.width*.16,b),i.rotate(Math.PI/2),i.fillText("50",0,0),i.restore(),i.save(),i.translate(t.width*.84,b),i.rotate(-Math.PI/2),i.fillText("50",0,0),i.restore())):(i.lineWidth=2,i.beginPath(),i.moveTo(t.width*.42,b),i.lineTo(t.width*.44,b),i.stroke(),i.beginPath(),i.moveTo(t.width*.56,b),i.lineTo(t.width*.58,b),i.stroke(),i.beginPath(),i.moveTo(t.width*.08,b),i.lineTo(t.width*.09,b),i.stroke(),i.beginPath(),i.moveTo(t.width*.91,b),i.lineTo(t.width*.92,b),i.stroke())}i.lineWidth=8,i.strokeRect(t.width*.08,10*_,t.width*.84,100*_)}const s=new BT(t);s.wrapS=Wi,s.wrapT=Wi,s.colorSpace=vi,s.anisotropy=8;const l=120*dn,u=new As(jn*1.3,l),h=new ai({map:s,roughness:.85}),d=new re(u,h);d.rotation.x=-Math.PI/2,d.receiveShadow=!0,this.group.add(d);const m=new As(jn*2.2,l*1.4),p=new $d({color:1980971}),v=new re(m,p);v.rotation.x=-Math.PI/2,v.position.y=-.01,v.receiveShadow=!0,this.group.add(v)}createGoalPosts(){const t=new ai({color:16436245,metalness:.6,roughness:.2});[-1,1].forEach(i=>{const s=new rn,l=i*(60*dn),u=new Li(.16,.16,3.05,8),h=new re(u,t);h.position.set(0,1.52,0),s.add(h);const d=new Li(.12,.12,5.64,8),m=new re(d,t);m.rotation.z=Math.PI/2,m.position.set(0,3.05,0),s.add(m);const p=new Li(.1,.1,9.14,8),v=new re(p,t);v.position.set(-2.82,3.05+4.57,0),s.add(v);const g=new re(p,t);g.position.set(2.82,3.05+4.57,0),s.add(g),s.position.set(0,0,l),this.group.add(s)})}createPylons(){const t=new ai({color:16347926,roughness:.4}),i=new Dn(.15,.45,.15),s=jn*.42;[-50*dn,-60*dn,50*dn,60*dn].forEach(u=>{[-s,s].forEach(h=>{const d=new re(i,t);d.position.set(h,.22,u),d.castShadow=!0,this.group.add(d)})})}createStadiumStructure(){const t=new $d({color:2042167}),i=new $d({color:3621201}),s=new ai({color:1981066,roughness:.5});[-1,1].forEach(w=>{const y=new Dn(18,14,134),S=new re(y,t);S.position.set(w*(jn*.9+9),7,0),S.receiveShadow=!0,this.group.add(S);const L=new Dn(16,.6,130);for(let B=0;B<5;B++){const C=new re(L,i);C.position.set(w*(jn*.9+2+B*3.2),1.5+B*2.6,0),this.group.add(C)}}),[-1,1].forEach(w=>{const y=new Dn(jn*1.8,16,20),S=new re(y,t);S.position.set(0,8,w*70),S.receiveShadow=!0,this.group.add(S);const L=new Dn(jn*1.7,.6,18);for(let B=0;B<5;B++){const C=new re(L,i);C.position.set(0,1.8+B*2.8,w*(62+B*3.4)),this.group.add(C)}});const l=new Dn(.5,1.3,122*dn);[-1,1].forEach(w=>{const y=new re(l,s);y.position.set(w*(jn*.58),.65,0),this.group.add(y)});const u=new Dn(jn*1.16,1.3,.5);[-1,1].forEach(w=>{const y=new re(u,s);y.position.set(0,.65,w*(61*dn)),this.group.add(y)});const h=new rn,d=new Dn(26,12,1.5),m=new ai({color:988970,metalness:.8,roughness:.2}),p=new re(d,m);h.add(p);const v=new As(24,10),g=new za({color:165063}),_=new re(v,g);_.position.z=-.8,_.rotation.y=Math.PI,h.add(_),h.position.set(0,24,76),this.group.add(h);const M=new ai({color:9741240,metalness:.8}),b=new za({color:16777215});[{x:-35,z:-55},{x:35,z:-55},{x:-35,z:55},{x:35,z:55}].forEach(w=>{const y=new rn,S=new Li(.5,.9,28,8),L=new re(S,M);L.position.y=14,y.add(L);const B=new Dn(6,3,1),C=new re(B,M);C.position.set(0,27,0),C.lookAt(0,0,0),y.add(C);const D=new Dn(5.6,2.6,.2),N=new re(D,b);N.position.set(0,27,.5),N.lookAt(0,0,0),y.add(N),y.position.set(w.x,0,w.z),this.group.add(y)})}createLighting(){const t=new KT(16777215,.85);this.group.add(t);const i=new qT(16777215,1976635,.65);this.group.add(i);const s=new lx(16775917,1.4);s.position.set(30,50,20),s.castShadow=!0,s.shadow.mapSize.width=2048,s.shadow.mapSize.height=2048,s.shadow.camera.near=5,s.shadow.camera.far=150,s.shadow.camera.left=-50,s.shadow.camera.right=50,s.shadow.camera.top=70,s.shadow.camera.bottom=-70,s.shadow.bias=5e-4,s.shadow.normalBias=.05,this.group.add(s);const l=new lx(10863828,.5);l.position.set(-30,30,-20),this.group.add(l)}updateLines(t,i){const s=(t-50)*dn,l=(i-50)*dn;this.losLineMesh.position.z=s,this.firstDownLineMesh.position.z=l}}const wu={TACTICAL:{height:5.4,backDist:7.2,lookAhead:1.5,lookHeight:1.1,fov:44},BROADCAST:{height:8.2,backDist:10.5,lookAhead:3,lookHeight:.9,fov:46},ACTION:{height:4,backDist:5.4,lookAhead:1,lookHeight:1.2,fov:42}};class iC{constructor(t){this.targetPos=new V(0,1.1,-21),this.currentLookAt=new V(0,1.1,-21),this.mode="TACTICAL",this.trauma=0,this.shakeOffset=new V,this.desiredPos=new V(0,5.4,-34),this.currentPos=new V(0,5.4,-34),this.baseFov=44,this.targetFov=44,this.normalDesiredPos=new V,this.normalLookTarget=new V;const i=t&&isFinite(t)&&t>0?t:16/9,s=wu[this.mode];this.baseFov=s.fov,this.targetFov=s.fov,this.camera=new Ui(this.baseFov,i,.1,400),this.camera.position.set(0,s.height,-34),this.targetPos.set(0,s.lookHeight,-21),this.currentLookAt.set(0,s.lookHeight,-21),this.camera.lookAt(this.currentLookAt)}setMode(t){this.mode=t;const i=wu[t];this.targetFov=i.fov}cycleMode(){const t=["TACTICAL","BROADCAST","ACTION"],i=(t.indexOf(this.mode)+1)%t.length;return this.setMode(t[i]),this.mode}calculateNormalTransform(t,i,s){this.normalDesiredPos.set(t.x,i.height,t.z-i.backDist*s),this.normalLookTarget.set(t.x,i.lookHeight,t.z+i.lookAhead*s)}snapTo(t,i=1){const s=wu[this.mode];this.calculateNormalTransform(t,s,i),this.desiredPos.copy(this.normalDesiredPos),this.currentPos.copy(this.desiredPos),this.targetPos.copy(this.normalLookTarget),this.currentLookAt.copy(this.targetPos),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLookAt),this.camera.fov=s.fov,this.targetFov=s.fov,this.camera.updateProjectionMatrix()}addTrauma(t=.4){this.trauma=Math.min(1,this.trauma+t)}update(t,i,s,l,u,h=1){const d=wu[this.mode];if(s&&l&&u){const m=new V().addVectors(l,u).multiplyScalar(.5);this.targetPos.lerp(new V(m.x,Math.max(1.2,m.y),m.z+2.5*h),t*4.5),this.targetFov=d.fov+2,this.desiredPos.set(m.x,d.height+2,m.z-d.backDist*h)}else this.calculateNormalTransform(i,d,h),this.targetPos.lerp(this.normalLookTarget,t*5.5),this.targetFov=d.fov,this.desiredPos.copy(this.normalDesiredPos);if(this.currentPos.lerp(this.desiredPos,t*5.5),this.camera.fov=ir.lerp(this.camera.fov,this.targetFov,t*3.5),this.camera.updateProjectionMatrix(),this.trauma>.001){const m=this.trauma*this.trauma*.35;this.shakeOffset.set((Math.random()-.5)*m,(Math.random()-.5)*m,(Math.random()-.5)*m*.5),this.trauma=Math.max(0,this.trauma-t*2.2)}else this.shakeOffset.set(0,0,0);this.camera.position.copy(this.currentPos).add(this.shakeOffset),this.currentLookAt.lerp(this.targetPos,t*6),this.camera.lookAt(this.currentLookAt.clone().add(this.shakeOffset.clone().multiplyScalar(.5)))}resize(t){t&&isFinite(t)&&t>0&&(this.camera.aspect=t,this.camera.updateProjectionMatrix())}}const Vu=[{id:"pass_slants",name:"Quick Slants",type:"PASS",description:"Rapid 3-step drop. WRs cut inside at 45° across middle seam for fast rhythmic throws.",dropback:{style:"QUICK",depthYards:2.25,durationSeconds:.75,plantSeconds:.16},routes:{WR1:"SLANT",WR2:"SLANT",WR3:"SLANT",RB:"OUT"}},{id:"pass_mesh",name:"Mesh Under",type:"PASS",description:"Crossing drag routes create pick action underneath, while WR1 curls as safety valve.",dropback:{style:"STANDARD",depthYards:3.75,durationSeconds:1,plantSeconds:.2},routes:{WR1:"CURL",WR2:"DRAG",WR3:"DRAG",RB:"OUT"}},{id:"pass_verts",name:"Four Verticals",type:"PASS",description:"Deep aggressive attack. Outside receivers sprint streaks while slot attacks deep seam.",dropback:{style:"DEEP",depthYards:5.5,durationSeconds:1.3,plantSeconds:.24},routes:{WR1:"GO",WR2:"GO",WR3:"GO",RB:"BLOCK"}},{id:"run_inside_zone",name:"Inside Zone",type:"RUN",description:"Direct interior run. Offensive line zone blocks to the right while RB presses the A-gap.",dropback:{style:"NONE",depthYards:0,durationSeconds:0,plantSeconds:0},routes:{WR1:"BLOCK",WR2:"BLOCK",WR3:"BLOCK",RB:"HANDOFF_RUN"}}];function aC(o,t){const i=t==="LEFT"?1:-1;switch(o){case"GO":return[{x:0,z:8,speedMult:1},{x:0,z:22,speedMult:1.05},{x:0,z:45,speedMult:1.05}];case"SLANT":return[{x:0,z:3.5,speedMult:1},{x:i*5,z:8.5,speedMult:1.1},{x:i*14,z:14,speedMult:1}];case"OUT":return[{x:0,z:6.5,speedMult:1},{x:-i*6,z:7,speedMult:.95},{x:-i*12,z:7.5,speedMult:1}];case"CURL":return[{x:0,z:8.5,speedMult:1},{x:i*.5,z:7.2,speedMult:.6},{x:i*.5,z:7,speedMult:.2}];case"DRAG":return[{x:0,z:2.2,speedMult:1},{x:i*12,z:3,speedMult:1.05},{x:i*26,z:4.2,speedMult:1}];case"HANDOFF_RUN":return[{x:1.2,z:1,speedMult:.8},{x:1.8,z:6,speedMult:1.1},{x:2.5,z:18,speedMult:1.15},{x:2,z:40,speedMult:1.1}];case"BLOCK":default:return[{x:0,z:1.5,speedMult:.7},{x:0,z:3,speedMult:.5}]}}const sC={C:{x:0,z:-.4},LG:{x:-1.2,z:-.4},LT:{x:-2.4,z:-.5},RG:{x:1.2,z:-.4},RT:{x:2.4,z:-.5},QB:{x:0,z:-4.5},RB:{x:-1.5,z:-4.8},WR1:{x:-14,z:-.5},WR2:{x:-7.5,z:-.6},WR3:{x:14,z:-.5}},rC={LE:{x:-2.8,z:1},DT1:{x:-.9,z:.9},DT2:{x:.9,z:.9},RE:{x:2.8,z:1},MLB:{x:0,z:4.5},OLB:{x:-4,z:4.8},CB1:{x:-13.8,z:6},CB2:{x:13.8,z:6},FS:{x:-4.5,z:12}};function Ox(o,t="SKILL"){const i=Math.max(0,Math.min(100,o.speed)),s=Math.max(0,Math.min(100,o.acceleration)),l=Math.max(0,Math.min(100,o.agility)),u=Math.max(0,Math.min(100,o.strength)),h=Math.max(0,Math.min(100,o.catching??65)),d=Math.max(0,Math.min(100,o.throwPower??75)),m=Math.max(0,Math.min(100,o.throwAccuracy??75));let p=6.2,v=9.8,g=82,_=115;t==="LINEMAN"?(p=5.2,v=7.6,g=125,_=150):t==="QB"&&(p=5.8,v=8.8,g=95,_=112);const M=p+i/100*(v-p),b=10+s/100*15,w=b*1.5,y=4.8+l/100*6.2,S=g+u/100*(_-g),L=.8+u/100*.8,B=18+d/100*12,C=Math.max(.2,1.8-m/100*1.5),D=1.2+h/100*.9,N=.08+u/100*.32,P=1.3+(o.tackling??70)/100*.6;return{maxSpeed:M,acceleration:b,deceleration:w,turnRate:y,mass:S,strengthImpulse:L,throwVelocity:B,throwAccuracyVar:C,catchRadius:D,breakTackleChance:N,tackleReach:P}}const oC={QB:{speed:74,acceleration:78,agility:80,strength:70,awareness:88,throwPower:89,throwAccuracy:86},RB:{speed:88,acceleration:91,agility:89,strength:84,awareness:80,catching:74},WR1:{speed:93,acceleration:92,agility:90,strength:65,awareness:85,catching:90,routeRunning:92},WR2:{speed:90,acceleration:90,agility:93,strength:62,awareness:82,catching:86,routeRunning:89},WR3:{speed:89,acceleration:88,agility:86,strength:68,awareness:78,catching:82,routeRunning:81},LT:{speed:62,acceleration:65,agility:60,strength:92,awareness:84,passBlocking:88,runBlocking:86},LG:{speed:60,acceleration:62,agility:58,strength:90,awareness:80,passBlocking:84,runBlocking:88},C:{speed:61,acceleration:63,agility:62,strength:89,awareness:86,passBlocking:85,runBlocking:85},RG:{speed:59,acceleration:60,agility:58,strength:91,awareness:82,passBlocking:83,runBlocking:89},RT:{speed:63,acceleration:66,agility:61,strength:91,awareness:83,passBlocking:87,runBlocking:87}},lC={LE:{speed:78,acceleration:84,agility:75,strength:89,awareness:82,tackling:86},DT1:{speed:65,acceleration:72,agility:64,strength:94,awareness:80,tackling:88},DT2:{speed:64,acceleration:70,agility:63,strength:95,awareness:81,tackling:89},RE:{speed:82,acceleration:86,agility:80,strength:88,awareness:85,tackling:87},MLB:{speed:84,acceleration:86,agility:84,strength:86,awareness:88,tackling:91,coverage:78},OLB:{speed:86,acceleration:88,agility:85,strength:84,awareness:85,tackling:88,coverage:80},CB1:{speed:92,acceleration:92,agility:92,strength:65,awareness:88,tackling:75,coverage:90},CB2:{speed:90,acceleration:90,agility:89,strength:64,awareness:84,tackling:73,coverage:85},FS:{speed:91,acceleration:91,agility:88,strength:72,awareness:89,tackling:82,coverage:88}};function Qp(o,t){return{...o,down:1,distance:10,lineOfScrimmage:25,firstDownLine:35,playResultText:t}}function cC(o,t,i){const s=Math.max(1,Math.min(99,Math.round(t))),l=s-o.lineOfScrimmage;return s>=o.firstDownLine?{nextState:{...o,down:1,distance:Math.min(10,100-s),lineOfScrimmage:s,firstDownLine:Math.min(100,s+10),playResultText:`FIRST DOWN! +${l} YDS (${i})`},yardsGained:l,firstDown:!0,turnoverOnDowns:!1}:o.down>=4?{nextState:Qp(o,"TURNOVER ON DOWNS — RESET TO 25"),yardsGained:l,firstDown:!1,turnoverOnDowns:!0}:{nextState:{...o,down:o.down+1,distance:o.firstDownLine-s,lineOfScrimmage:s,playResultText:i==="Incomplete Pass"?"INCOMPLETE PASS":`${l>=0?"+":""}${l} YDS (${i})`},yardsGained:l,firstDown:!1,turnoverOnDowns:!1}}function uC(o){const t=Math.max(0,Math.floor(o)),i=Math.floor(t/60),s=t%60;return`${i.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`}function Px(o,t,i,s,l,u,h){if(!t||t.length===0)return o.clone().addScaledVector(h,Math.max(0,u));const d=o.clone();let m=Math.max(0,u),p=s;for(;m>.001&&p<t.length;){const v=t[p],g=d.distanceTo(v),_=(i==null?void 0:i[p])??1,M=Math.max(.5,l*_),b=g/M;b>m?(d.lerp(v,m/b),m=0):(d.copy(v),m-=b,p++)}return d}function fC(o){const t=Math.max(0,Math.min(1,o));return t*t*(3-2*t)}function hC(o,t){const i=Math.max(.05,o.durationSeconds),s=Math.max(0,o.plantSeconds),l=Math.max(0,t);if(l<i){const u=fC(l/i);return{phase:"RETREAT",progress:u,depthYards:o.depthYards*u,complete:!1}}return l<i+s?{phase:"PLANT",progress:1,depthYards:o.depthYards,complete:!1}:{phase:"COMPLETE",progress:1,depthYards:o.depthYards,complete:!0}}function dC(o,t,i){return{x:-o*i,z:t*i}}class pC{constructor(){this.ctx=null,this.isMuted=!1}getContext(){if(this.ctx)return this.ctx;const t=window.AudioContext||window.webkitAudioContext;return t&&(this.ctx=new t),this.ctx}setMuted(t){this.isMuted=t}getMuted(){return this.isMuted}playWhistle(){if(!this.isMuted)try{const t=this.getContext();if(!t)return;t.state==="suspended"&&t.resume();const i=t.currentTime,s=t.createOscillator(),l=t.createOscillator(),u=t.createGain();s.type="sine",l.type="sine",s.frequency.setValueAtTime(2600,i),l.frequency.setValueAtTime(2950,i);const h=t.createOscillator(),d=t.createGain();h.frequency.setValueAtTime(28,i),d.gain.setValueAtTime(200,i),h.connect(s.frequency),h.connect(l.frequency),h.start(i),h.stop(i+.65),u.gain.setValueAtTime(0,i),u.gain.linearRampToValueAtTime(.18,i+.04),u.gain.exponentialRampToValueAtTime(.001,i+.6),s.connect(u),l.connect(u),u.connect(t.destination),s.start(i),l.start(i),s.stop(i+.65),l.stop(i+.65)}catch{}}playSnap(){if(!this.isMuted)try{const t=this.getContext();if(!t)return;t.state==="suspended"&&t.resume();const i=t.currentTime,s=t.createOscillator(),l=t.createGain();s.type="sine",s.frequency.setValueAtTime(140,i),s.frequency.exponentialRampToValueAtTime(45,i+.12),l.gain.setValueAtTime(.3,i),l.gain.exponentialRampToValueAtTime(.001,i+.15),s.connect(l),l.connect(t.destination),s.start(i),s.stop(i+.15)}catch{}}playCatch(){if(!this.isMuted)try{const t=this.getContext();if(!t)return;t.state==="suspended"&&t.resume();const i=t.currentTime,s=t.createOscillator(),l=t.createGain();s.type="triangle",s.frequency.setValueAtTime(220,i),s.frequency.exponentialRampToValueAtTime(70,i+.08),l.gain.setValueAtTime(.25,i),l.gain.exponentialRampToValueAtTime(.001,i+.09),s.connect(l),l.connect(t.destination),s.start(i),s.stop(i+.1)}catch{}}playTackle(t=.5){if(!this.isMuted)try{const i=this.getContext();if(!i)return;i.state==="suspended"&&i.resume();const s=i.currentTime,l=Math.min(1,Math.max(.2,t)),u=i.sampleRate*.15,h=i.createBuffer(1,u,i.sampleRate),d=h.getChannelData(0);for(let M=0;M<u;M++)d[M]=Math.random()*2-1;const m=i.createBufferSource();m.buffer=h;const p=i.createBiquadFilter();p.type="bandpass",p.frequency.setValueAtTime(900,s),p.Q.setValueAtTime(1.5,s);const v=i.createGain();v.gain.setValueAtTime(.3*l,s),v.gain.exponentialRampToValueAtTime(.001,s+.12),m.connect(p),p.connect(v),v.connect(i.destination);const g=i.createOscillator(),_=i.createGain();g.type="sine",g.frequency.setValueAtTime(90+l*40,s),g.frequency.exponentialRampToValueAtTime(30,s+.2),_.gain.setValueAtTime(.4*l,s),_.gain.exponentialRampToValueAtTime(.001,s+.22),g.connect(_),_.connect(i.destination),m.start(s),g.start(s),g.stop(s+.25)}catch{}}playThrow(){if(!this.isMuted)try{const t=this.getContext();if(!t)return;t.state==="suspended"&&t.resume();const i=t.currentTime,s=t.createOscillator(),l=t.createGain();s.type="sine",s.frequency.setValueAtTime(180,i),s.frequency.linearRampToValueAtTime(320,i+.1),l.gain.setValueAtTime(.12,i),l.gain.exponentialRampToValueAtTime(.001,i+.14),s.connect(l),l.connect(t.destination),s.start(i),s.stop(i+.15)}catch{}}playCrowdCheer(){if(!this.isMuted)try{const t=this.getContext();if(!t)return;t.state==="suspended"&&t.resume();const i=t.currentTime,s=1.8,l=Math.floor(t.sampleRate*s),u=t.createBuffer(1,l,t.sampleRate),h=u.getChannelData(0);let d=0;for(let g=0;g<l;g++){const _=Math.random()*2-1;d=(d+.02*_)/1.02,h[g]=d*3.5}const m=t.createBufferSource();m.buffer=u;const p=t.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(800,i),p.frequency.linearRampToValueAtTime(1400,i+.4),p.frequency.exponentialRampToValueAtTime(600,i+s);const v=t.createGain();v.gain.setValueAtTime(.05,i),v.gain.linearRampToValueAtTime(.28,i+.3),v.gain.exponentialRampToValueAtTime(.001,i+s),m.connect(p),p.connect(v),v.connect(t.destination),m.start(i),m.stop(i+s)}catch{}}}const ki=new pC;class mC{constructor(t){this.players=new Map,this.ballCarrierId=null,this.controlledPlayerId="QB",this.playPhase="PRE_SNAP",this.currentPlay=Vu[0],this.throwType="TOUCH",this.isPaused=!1,this.playClock=0,this.whistleTimer=0,this.resetTimer=0,this.debugMode=!1,this.input={forward:0,lateral:0,sprint:!1},this.targetPassReceiverId=null,this.passAirTime=0,this.lastTackleForce=0,this.resetDriveAfterPlay=!1,this.lastNotifiedClockSecond=900,this.dropbackElapsed=0,this.dropbackStartZ=0,this.dropbackActive=!1,this.lastTime=performance.now(),this.animationFrameId=0,this.isRunning=!1,this.destroyed=!1,this.scene=new AT,this.scene.background=new Me(988970),this.scene.fog=new um(988970,160,380);const i=Number.isFinite(t.clientWidth)&&t.clientWidth>0?t.clientWidth:1,s=Number.isFinite(t.clientHeight)&&t.clientHeight>0?t.clientHeight:1,l=i/s;this.cameraManager=new iC(l),this.renderer=new Kw({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(i,s,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bl,this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",t.appendChild(this.renderer.domElement),window.__engine=this,this.field=new nC,this.scene.add(this.field.group),this.football=new eC,this.scene.add(this.football.group);const u=new hm(.85,1.15,32),h=new za({color:3718648,side:fa,transparent:!0,opacity:.85});this.carrierRing=new re(u,h),this.carrierRing.rotation.x=-Math.PI/2,this.carrierRing.position.y=.06,this.scene.add(this.carrierRing),this.debugLinesGroup=new rn,this.scene.add(this.debugLinesGroup),this.downState={down:1,distance:10,lineOfScrimmage:25,firstDownLine:35,quarter:1,clockSeconds:900,offenseScore:0,defenseScore:0,playResultText:"1st & 10 at Own 25"},this.telemetry={fps:60,activeRagdollCount:0,ballCarrierId:"QB",ballCarrierState:"NORMAL",ballCarrierSpeed:0,lastTackleForce:0,passTarget:null,passAirTime:0},this.createPlayers(),this.setPlay(Vu[0])}setOnStateChange(t){this.onStateChangeCallback=t}createPlayers(){["QB","RB","WR1","WR2","WR3","LT","LG","C","RG","RT"].forEach(s=>{const h=["LT","LG","C","RG","RT"].includes(s)?"LINEMAN":s==="QB"?"QB":"SKILL",d=oC[s],m=Ox(d,h),p=new Ux(s,"OFFENSE",Qw);this.scene.add(p.group),this.players.set(s,{id:s,position:s,side:"OFFENSE",model:p,physics:m,pos:new V,vel:new V,heading:0,targetPos:new V,currentWaypointIndex:0,hasBall:!1,isEngagedWithBlocker:!1,blockerTimer:0,tackleCooldown:0,isBackpedaling:!1})}),["LE","DT1","DT2","RE","MLB","OLB","CB1","CB2","FS"].forEach(s=>{const u=["LE","DT1","DT2","RE"].includes(s)?"LINEMAN":"SKILL",h=lC[s],d=Ox(h,u),m=new Ux(s,"DEFENSE",jw);this.scene.add(m.group),this.players.set(s,{id:s,position:s,side:"DEFENSE",model:m,physics:d,pos:new V,vel:new V,heading:Math.PI,targetPos:new V,currentWaypointIndex:0,hasBall:!1,isEngagedWithBlocker:!1,blockerTimer:0,tackleCooldown:0,isBackpedaling:!1})})}setPlay(t){this.currentPlay=t,this.resetToPreSnap()}resetToPreSnap(){this.playPhase="PRE_SNAP",this.ballCarrierId="QB",this.controlledPlayerId="QB",this.targetPassReceiverId=null,this.passAirTime=0,this.whistleTimer=0,this.resetTimer=0,this.resetDriveAfterPlay=!1,this.dropbackActive=!1,this.dropbackElapsed=0,this.clearMovementInput();const t=(this.downState.lineOfScrimmage-50)*dn;this.field.updateLines(this.downState.lineOfScrimmage,this.downState.firstDownLine),Object.entries(sC).forEach(([s,l])=>{const u=this.players.get(s);if(!u)return;const h=t+l.z*dn;if(u.pos.set(l.x,0,h),u.vel.set(0,0,0),u.heading=0,u.hasBall=s==="QB",u.model.isHoldingBall=s==="QB",u.isEngagedWithBlocker=!1,u.tackleCooldown=0,u.isBackpedaling=!1,u.currentWaypointIndex=0,u.model.resetRagdoll(),u.model.group.position.copy(u.pos),u.model.group.rotation.y=u.heading,s==="WR1"||s==="WR2"||s==="WR3"||s==="RB"){const d=this.currentPlay.routes[s];u.routeType=d;const p=aC(d,s==="WR1"?"LEFT":s==="WR2"?"SLOT":"RIGHT");u.routeWaypoints=p.map(v=>new V(u.pos.x+v.x,0,t+v.z*dn)),u.routeSpeedMultipliers=p.map(v=>v.speedMult??1)}}),Object.entries(rC).forEach(([s,l])=>{const u=this.players.get(s);if(!u)return;const h=t+l.z*dn;u.pos.set(l.x,0,h),u.vel.set(0,0,0),u.heading=Math.PI,u.hasBall=!1,u.model.isHoldingBall=!1,u.isEngagedWithBlocker=!1,u.tackleCooldown=0,u.isBackpedaling=!1,u.currentWaypointIndex=0,u.model.resetRagdoll(),u.model.group.position.copy(u.pos),u.model.group.rotation.y=u.heading,s==="CB1"&&(u.assignedOpponentId="WR1"),s==="CB2"&&(u.assignedOpponentId="WR3"),s==="FS"&&(u.assignedOpponentId="WR2"),s==="LE"&&(u.assignedOpponentId="RT"),s==="DT1"&&(u.assignedOpponentId="RG"),s==="DT2"&&(u.assignedOpponentId="LG"),s==="RE"&&(u.assignedOpponentId="LT"),(s==="MLB"||s==="OLB")&&(u.assignedOpponentId="QB")});const i=this.players.get("QB");i&&(i.model.isHoldingBall=!0,this.football.attachTo(i.model.root),this.cameraManager.snapTo(i.pos),this.carrierRing.position.set(i.pos.x,.06,i.pos.z)),this.updateDebugRouteLines(),this.notifyState()}snapBall(){if(this.playPhase!=="PRE_SNAP"||this.isPaused)return;this.playPhase="PLAY_ACTIVE",this.playClock=0;const t=this.players.get("QB");this.currentPlay.type==="PASS"&&this.currentPlay.dropback.style!=="NONE"&&t&&(this.dropbackActive=!0,this.dropbackElapsed=0,this.dropbackStartZ=t.pos.z,t.isBackpedaling=!0,t.heading=0),ki.playSnap(),this.notifyState()}throwToReceiver(t,i=this.throwType){if(this.isPaused||this.playPhase!=="PLAY_ACTIVE"||this.controlledPlayerId!=="QB")return;const s=this.players.get("QB"),l=this.players.get(t);if(!s||!l)return;this.playPhase="BALL_IN_AIR",this.targetPassReceiverId=t,this.passAirTime=0,this.ballCarrierId=null,s.hasBall=!1,s.model.isHoldingBall=!1,this.cancelDropback();const u=new V(.3,1.9,.2).applyAxisAngle(new V(0,1,0),s.heading),h=s.pos.clone().add(u),d=s.vel.length(),m=s.physics.throwAccuracyVar*(1+(d>2?.6:0)),p=new V((Math.random()-.5)*m,(Math.random()-.5)*m*.4,(Math.random()-.5)*m),v=op(h,l.pos,l.vel,i,new V,s.physics.throwVelocity);let g=Px(l.pos,l.routeWaypoints,l.routeSpeedMultipliers,l.currentWaypointIndex,l.physics.maxSpeed*.95,v.flightTime,l.vel);const _=op(h,g,new V,i,new V,s.physics.throwVelocity);g=Px(l.pos,l.routeWaypoints,l.routeSpeedMultipliers,l.currentWaypointIndex,l.physics.maxSpeed*.95,_.flightTime,l.vel);const M=op(h,g,new V,i,p,s.physics.throwVelocity);this.football.launch(h,M.velocity),ki.playThrow(),this.notifyState()}update(t){if(this.isPaused)return;const i=Math.min(t,.05);this.playPhase!=="PRE_SNAP"&&(this.playClock+=i),(this.playPhase==="PLAY_ACTIVE"||this.playPhase==="BALL_IN_AIR"||this.playPhase==="RUN_AFTER_CATCH")&&(this.downState.clockSeconds=Math.max(0,this.downState.clockSeconds-i)),this.updateControlledPlayer(i),this.updateAIPlayers(i),this.updateFootballPhysics(i),this.updatePhysicsCollisions(i),this.updatePlayerModels(i),this.checkPlayConditions(i),this.updateCamera(i);const s=this.players.get(this.controlledPlayerId);s&&(this.carrierRing.position.set(s.pos.x,.06,s.pos.z),this.carrierRing.visible=!0),this.updateTelemetry();const l=Math.ceil(this.downState.clockSeconds);l!==this.lastNotifiedClockSecond&&(this.lastNotifiedClockSecond=l,this.notifyState())}updateControlledPlayer(t){if(this.playPhase==="PRE_SNAP"||this.playPhase==="PLAY_OVER"||this.playPhase==="TOUCHDOWN_CELEBRATION")return;const i=this.players.get(this.controlledPlayerId);if(!i||i.model.ragdollState!=="NORMAL")return;if(i.id==="QB"&&this.dropbackActive)if(Math.hypot(this.input.lateral,this.input.forward)>.35)this.cancelDropback();else{this.updateDropback(i,t);return}const s=i.side==="OFFENSE"?1:-1,l=dC(this.input.lateral,this.input.forward,s),u=new V(l.x,0,l.z),h=u.lengthSq()>.01;let d=0;if(h){u.normalize();const m=this.input.sprint?1.25:1;d=i.physics.maxSpeed*m;const p=Math.atan2(u.x,u.z),v=ir.euclideanModulo(p-i.heading+Math.PI,Math.PI*2)-Math.PI,g=i.physics.turnRate*t;i.heading+=Math.max(-g,Math.min(g,v));const _=new V(Math.sin(i.heading),0,Math.cos(i.heading));i.vel.lerp(_.multiplyScalar(d),t*(i.physics.acceleration/4))}else i.vel.multiplyScalar(Math.pow(.82,t*60));i.pos.addScaledVector(i.vel,t),i.pos.x=Math.max(-jn*.46,Math.min(jn*.46,i.pos.x)),i.model.group.position.copy(i.pos),i.model.group.rotation.y=i.heading}updateDropback(t,i){this.dropbackElapsed+=i;const s=hC(this.currentPlay.dropback,this.dropbackElapsed),l=t.pos.z;t.pos.z=this.dropbackStartZ-s.depthYards*dn,t.vel.set(0,0,i>0?(t.pos.z-l)/i:0),t.heading=0,t.isBackpedaling=s.phase==="RETREAT",t.model.group.position.copy(t.pos),t.model.group.rotation.y=t.heading,s.complete&&this.cancelDropback()}cancelDropback(){this.dropbackActive=!1;const t=this.players.get("QB");t&&(t.isBackpedaling=!1,t.vel.set(0,0,0))}updateAIPlayers(t){if(!(this.playPhase==="PRE_SNAP"||this.playPhase==="PLAY_OVER")){if(this.currentPlay.type==="RUN"&&this.playPhase==="PLAY_ACTIVE"){const i=this.players.get("QB"),s=this.players.get("RB");i&&s&&this.controlledPlayerId==="QB"&&i.pos.distanceTo(s.pos)<1.8&&this.playClock>.4&&(i.hasBall=!1,i.model.isHoldingBall=!1,s.hasBall=!0,s.model.isHoldingBall=!0,this.ballCarrierId="RB",this.controlledPlayerId="RB",this.playPhase="RUN_AFTER_CATCH",this.football.attachTo(s.model.root),ki.playCatch(),this.notifyState())}this.players.forEach(i=>{if(!(i.id===this.controlledPlayerId&&i.model.ragdollState==="NORMAL")){if(i.model.ragdollState!=="NORMAL"){i.vel.multiplyScalar(Math.pow(.85,t*60)),i.pos.addScaledVector(i.vel,t),i.model.group.position.copy(i.pos);return}i.side==="OFFENSE"&&i.routeWaypoints&&i.routeWaypoints.length>0&&this.updateReceiverRoute(i,t),i.side==="OFFENSE"&&["LT","LG","C","RG","RT"].includes(i.position)&&this.updateOffensiveLineman(i,t),i.side==="DEFENSE"&&["LE","DT1","DT2","RE"].includes(i.position)&&this.updatePassRusher(i,t),i.side==="DEFENSE"&&["MLB","OLB"].includes(i.position)&&this.updateLinebacker(i,t),i.side==="DEFENSE"&&["CB1","CB2","FS"].includes(i.position)&&this.updateDefensiveBack(i,t)}})}}updateReceiverRoute(t,i){var h;if(!t.routeWaypoints||t.routeWaypoints.length===0)return;if(this.playPhase==="RUN_AFTER_CATCH"){const d=this.getBallCarrier();if(d&&d.side!==t.side){this.steerToward(t,d.pos,t.physics.maxSpeed*.95,i);return}let m=null,p=8;this.players.forEach(v=>{if(v.side!==t.side){const g=t.pos.distanceTo(v.pos);g<p&&(p=g,m=v)}}),m&&this.steerToward(t,m.pos,t.physics.maxSpeed*.75,i);return}let s=t.routeWaypoints[t.currentWaypointIndex];if(!s)return;t.pos.distanceTo(s)<1&&t.currentWaypointIndex<t.routeWaypoints.length-1&&(t.currentWaypointIndex++,s=t.routeWaypoints[t.currentWaypointIndex]);const u=((h=t.routeSpeedMultipliers)==null?void 0:h[t.currentWaypointIndex])??1;this.steerToward(t,s,t.physics.maxSpeed*.95*u,i)}updateOffensiveLineman(t,i){const s=(this.downState.lineOfScrimmage-50)*dn;let l=null,u=3.5;if(this.players.forEach(h=>{if(h.side==="DEFENSE"&&["LE","DT1","DT2","RE"].includes(h.position)){const d=t.pos.distanceTo(h.pos);d<u&&(u=d,l=h)}}),l){const h=l.pos.clone().lerp(t.pos,.4);h.z=Math.min(s+.2,h.z),this.steerToward(t,h,t.physics.maxSpeed*.5,i)}}updatePassRusher(t,i){const s=this.getBallCarrierOrQB();if(s){if(this.playPhase==="RUN_AFTER_CATCH"&&s.side===t.side){t.vel.multiplyScalar(Math.pow(.9,i*60));return}this.steerToward(t,s.pos,t.physics.maxSpeed*.85,i)}}updateLinebacker(t,i){const s=(this.downState.lineOfScrimmage-50)*dn,l=this.getBallCarrierOrQB();if(this.currentPlay.type==="RUN"||this.playPhase==="RUN_AFTER_CATCH")l&&l.side!==t.side&&this.steerToward(t,l.pos,t.physics.maxSpeed*.95,i);else if(this.playPhase==="BALL_IN_AIR"){const u=this.targetPassReceiverId?this.players.get(this.targetPassReceiverId):null;u&&this.steerToward(t,u.pos,t.physics.maxSpeed*.95,i)}else{const u=s+4.5*dn,h=new V(t.pos.x*.7,0,u);this.steerToward(t,h,t.physics.maxSpeed*.6,i)}}updateDefensiveBack(t,i){if(this.playPhase==="BALL_IN_AIR"){const s=this.targetPassReceiverId?this.players.get(this.targetPassReceiverId):null;s&&this.steerToward(t,s.pos,t.physics.maxSpeed*1,i);return}if(this.playPhase==="RUN_AFTER_CATCH"){const s=this.getBallCarrier();s&&s.side!==t.side&&this.steerToward(t,s.pos,t.physics.maxSpeed*1,i);return}if(t.assignedOpponentId){const s=this.players.get(t.assignedOpponentId);if(s){const l=s.pos.z+1.8*dn,u=new V(s.pos.x,0,l);this.steerToward(t,u,t.physics.maxSpeed*.92,i)}}}steerToward(t,i,s,l){const u=new V().subVectors(i,t.pos).setY(0);if(u.length()<.1){t.vel.multiplyScalar(Math.pow(.8,l*60));return}u.normalize();const d=Math.atan2(u.x,u.z),m=ir.euclideanModulo(d-t.heading+Math.PI,Math.PI*2)-Math.PI,p=t.physics.turnRate*l;t.heading+=Math.max(-p,Math.min(p,m));const v=new V(Math.sin(t.heading),0,Math.cos(t.heading));t.vel.lerp(v.multiplyScalar(s),l*(t.physics.acceleration/4)),t.pos.addScaledVector(t.vel,l),t.pos.x=Math.max(-jn*.46,Math.min(jn*.46,t.pos.x)),t.model.group.position.copy(t.pos),t.model.group.rotation.y=t.heading}updateFootballPhysics(t){if(this.football.update(t),this.playPhase==="BALL_IN_AIR"&&this.football.isAirborne){this.passAirTime+=t;const i=[this.targetPassReceiverId,"WR1","WR2","WR3","RB"].filter((s,l,u)=>!!s&&u.indexOf(s)===l);for(const s of i){const l=this.players.get(s);if((l==null?void 0:l.side)==="OFFENSE"&&this.isBallWithinCatchEnvelope(l,l.physics.catchRadius*.75,.35,2.85)){this.secureCatch(l,!1);return}}if(this.passAirTime>.35){for(const s of this.players.values())if(s.side==="DEFENSE"&&this.isBallWithinCatchEnvelope(s,1.05,.55,2.65)){this.secureCatch(s,!0);return}}this.football.hasBounced&&this.football.position.y<=.12&&this.endPlay("Incomplete Pass",this.downState.lineOfScrimmage)}}isBallWithinCatchEnvelope(t,i,s,l){const u=Math.min(this.football.previousPosition.y,this.football.position.y);if(Math.max(this.football.previousPosition.y,this.football.position.y)<s||u>l)return!1;const d=t.pos.clone().add(new V(0,1.35,0));return tC(d,this.football.previousPosition,this.football.position)<=i}secureCatch(t,i){ki.playCatch(),this.players.forEach(s=>{s.hasBall=!1,s.model.isHoldingBall=!1}),this.football.attachTo(t.model.root),t.hasBall=!0,t.model.isHoldingBall=!0,this.ballCarrierId=t.id,this.controlledPlayerId=t.id,this.playPhase="RUN_AFTER_CATCH",i&&(this.downState.playResultText="INTERCEPTED!"),this.notifyState()}updatePhysicsCollisions(t){const i=this.getBallCarrier();this.players.forEach(u=>{u.tackleCooldown=Math.max(0,u.tackleCooldown-t)});const s=["LT","LG","C","RG","RT"],l=["LE","DT1","DT2","RE"];s.forEach(u=>{const h=this.players.get(u);h&&l.forEach(d=>{const m=this.players.get(d);if(!m)return;const p=new V().subVectors(m.pos,h.pos).setY(0),v=p.length(),g=.85;if(v<g&&v>.001){const _=g-v,M=p.normalize(),b=h.physics.mass/(h.physics.mass+m.physics.mass)*_*.5,w=m.physics.mass/(h.physics.mass+m.physics.mass)*_*.5;h.pos.addScaledVector(M,-b),m.pos.addScaledVector(M,w),h.vel.multiplyScalar(.7),m.vel.multiplyScalar(.7),h.model.group.position.copy(h.pos),m.model.group.position.copy(m.pos)}})}),i&&i.model.ragdollState!=="FULL_RAGDOLL"&&this.players.forEach(u=>{if(i.model.ragdollState!=="FULL_RAGDOLL"&&u.side!==i.side&&u.model.ragdollState==="NORMAL"&&u.tackleCooldown<=0){const d=new V().subVectors(i.pos,u.pos).setY(0).length(),m=u.physics.tackleReach;if(d<m){const p=$w(i.pos,i.vel,i.physics.mass,i.physics.strengthImpulse,u.pos,u.vel,u.physics.mass,u.physics.strengthImpulse);this.lastTackleForce=p.impactStrength,u.tackleCooldown=.45,i.vel.add(p.impulseRunner),u.vel.add(p.impulseDefender),ki.playTackle(p.impactStrength/700),this.cameraManager.addTrauma(p.impactStrength/900),i.model.applyTackleImpulse(p.impulseRunner,p.nextState),p.severity==="HIGH"&&u.model.applyTackleImpulse(p.impulseDefender,"PARTIAL_RAGDOLL")}}})}updatePlayerModels(t){this.players.forEach(i=>{const s=i.vel.length(),l=s>.2,u=i.model.group.rotation.y-i.heading;i.model.update(t,s,u,l,i.isBackpedaling)})}checkPlayConditions(t){if(this.playPhase==="PRE_SNAP")return;if(this.playPhase==="PLAY_OVER"||this.playPhase==="TOUCHDOWN_CELEBRATION"){this.resetTimer+=t,this.resetTimer>=1.6&&this.nextPlay();return}const i=this.getBallCarrier();if(i){const s=50+i.pos.z/dn,l=i.side==="OFFENSE"&&s>=100,u=i.side==="DEFENSE"&&s<=0;if(l||u){this.playPhase="TOUCHDOWN_CELEBRATION",ki.playWhistle(),ki.playCrowdCheer(),this.cameraManager.addTrauma(.5),l?this.downState.offenseScore+=7:this.downState.defenseScore+=7,this.downState.playResultText=u?"PICK SIX! DEFENSE +7":"TOUCHDOWN! +7 PTS",this.resetDriveAfterPlay=!0,this.notifyState();return}if(i.side==="OFFENSE"&&s<=0){this.playPhase="PLAY_OVER",ki.playWhistle(),this.downState.defenseScore+=2,this.downState.playResultText="SAFETY! DEFENSE +2",this.resetDriveAfterPlay=!0,this.notifyState();return}if(Math.abs(i.pos.x)>=jn*.44){this.endPlay("Out of Bounds");return}if((i.model.ragdollState==="FULL_RAGDOLL"||i.model.ragdollState==="PARTIAL_RAGDOLL")&&i.model.groundContactTime>.45){this.endPlay("Tackled");return}}}endPlay(t,i){this.playPhase="PLAY_OVER",ki.playWhistle();const s=this.getBallCarrier(),l=this.downState.lineOfScrimmage;let u=l;if(i!==void 0?u=i:s&&(u=Math.round(50+s.pos.z/dn),u=Math.max(1,Math.min(99,u))),(s==null?void 0:s.side)==="DEFENSE"){const h=Math.max(0,Math.round(l-u));this.downState=Qp(this.downState,`INTERCEPTION RETURN: ${h} YDS — RESET TO 25`)}else{const h=cC(this.downState,u,t);this.downState=h.nextState,h.firstDown&&ki.playCrowdCheer()}this.notifyState()}nextPlay(){this.resetDriveAfterPlay&&(this.downState=Qp(this.downState,"1st & 10 at Own 25"),this.resetDriveAfterPlay=!1),this.resetToPreSnap()}updateCamera(t){const i=this.players.get(this.controlledPlayerId)||this.players.get("QB"),s=i?i.pos:new V,l=(i==null?void 0:i.side)==="DEFENSE"?-1:1,u=this.playPhase==="BALL_IN_AIR",h=this.football.position,d=this.targetPassReceiverId?this.players.get(this.targetPassReceiverId):null,m=d?d.pos:void 0;this.cameraManager.update(t,s,u,h,m,l)}updateTelemetry(){let t=0;this.players.forEach(s=>{s.model.ragdollState!=="NORMAL"&&t++});const i=this.getBallCarrier();this.telemetry={fps:60,activeRagdollCount:t,ballCarrierId:i?i.id:null,ballCarrierState:i?i.model.ragdollState:"NORMAL",ballCarrierSpeed:i?i.vel.length():0,lastTackleForce:Math.round(this.lastTackleForce),passTarget:this.targetPassReceiverId,passAirTime:parseFloat(this.passAirTime.toFixed(2))}}updateDebugRouteLines(){for(;this.debugLinesGroup.children.length>0;)this.debugLinesGroup.remove(this.debugLinesGroup.children[0]);this.debugMode&&["WR1","WR2","WR3","RB"].forEach(t=>{const i=this.players.get(t);if(!i||!i.routeWaypoints||i.routeWaypoints.length===0)return;const s=[i.pos.clone().setY(.1),...i.routeWaypoints.map(d=>d.clone().setY(.1))],l=new Jn().setFromPoints(s),u=new cS({color:t==="WR1"?3718648:t==="WR2"?16007006:11032055,linewidth:3}),h=new IT(l,u);this.debugLinesGroup.add(h)})}toggleDebugMode(){this.debugMode=!this.debugMode,this.updateDebugRouteLines()}cycleCameraMode(){const t=this.cameraManager.cycleMode(),i=this.players.get(this.controlledPlayerId)||this.players.get("QB");return i&&this.cameraManager.snapTo(i.pos,i.side==="DEFENSE"?-1:1),t}setCameraMode(t){this.cameraManager.setMode(t);const i=this.players.get(this.controlledPlayerId)||this.players.get("QB");i&&this.cameraManager.snapTo(i.pos,i.side==="DEFENSE"?-1:1)}clearMovementInput(){this.input&&(this.input.forward=0,this.input.lateral=0,this.input.sprint=!1)}setPaused(t){this.isPaused=t,t&&this.clearMovementInput(),this.lastTime=performance.now()}togglePaused(){return this.setPaused(!this.isPaused),this.isPaused}getReceiverScreenPositions(t,i){if(!Number.isFinite(t)||!Number.isFinite(i)||t<=0||i<=0)return[];const s=this.cameraManager.camera;s.updateMatrixWorld(!0);const l=new V;s.getWorldDirection(l);const u=Math.min(46,t*.12),h=Math.min(96,i*.16),d=Math.min(112,i*.18);return["WR1","WR2","WR3"].flatMap(m=>{const p=this.players.get(m);if(!p||!p.routeType)return[];const v=p.pos.clone();v.y+=1.65;const g=v.clone().sub(s.position),_=l.dot(g)<=0,M=v.clone().project(s),b=(M.x+1)/2*t,w=(1-M.y)/2*i,y=M.z>=-1&&M.z<=1,S=!_&&y&&M.x>=-1&&M.x<=1&&M.y>=-1&&M.y<=1;return[{id:m,route:p.routeType,x:ir.clamp(b,u,t-u),y:ir.clamp(w,h,i-d),onScreen:S,behindCamera:_}]})}getBallCarrier(){return this.ballCarrierId&&this.players.get(this.ballCarrierId)||null}getBallCarrierOrQB(){return this.getBallCarrier()||this.players.get("QB")||null}notifyState(){this.updateTelemetry(),this.onStateChangeCallback&&this.onStateChangeCallback(this.downState,this.playPhase,this.telemetry)}start(){if(this.isRunning||this.destroyed)return;this.isRunning=!0,this.lastTime=performance.now();const t=i=>{if(!this.isRunning)return;const s=(i-this.lastTime)/1e3;this.lastTime=i,this.update(s),this.renderer.render(this.scene,this.cameraManager.camera),this.animationFrameId=requestAnimationFrame(t)};this.animationFrameId=requestAnimationFrame(t)}stop(){this.isRunning=!1,cancelAnimationFrame(this.animationFrameId)}resize(t,i){this.destroyed||!Number.isFinite(t)||!Number.isFinite(i)||t<=0||i<=0||(this.cameraManager.resize(t/i),this.renderer.setSize(t,i,!1))}destroy(){if(this.destroyed)return;this.destroyed=!0,this.stop(),this.clearMovementInput(),this.onStateChangeCallback=void 0;const t=this.renderer.domElement;t.parentElement&&t.parentElement.removeChild(t),this.renderer.dispose();const i=window;i.__engine===this&&delete i.__engine}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_C=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Ix=o=>{const t=_C(o);return t.charAt(0).toUpperCase()+t.slice(1)},yS=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),vC=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=Ve.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>Ve.createElement("svg",{ref:m,...xC,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:yS("lucide",l),...!u&&!vC(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,v])=>Ve.createElement(p,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=(o,t)=>{const i=Ve.forwardRef(({className:s,...l},u)=>Ve.createElement(SC,{ref:u,iconNode:t,className:yS(`lucide-${gC(Ix(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Ix(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],yC=Xa("activity",MC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],TC=Xa("camera",EC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],AC=Xa("menu",bC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ES=Xa("play",RC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],CC=Xa("shield-alert",wC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Bx=Xa("sparkles",DC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],LC=Xa("volume-2",NC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],OC=Xa("volume-x",UC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],IC=Xa("x",PC),BC=({paused:o,onTogglePause:t,cameraMode:i,onToggleCamera:s,isMuted:l,onToggleMute:u,debugMode:h,onToggleDebug:d})=>Tt.jsxs(Tt.Fragment,{children:[Tt.jsx("button",{id:"pause-menu-btn",onClick:t,className:"pointer-events-auto absolute top-[max(.5rem,env(safe-area-inset-top))] right-[max(.5rem,env(safe-area-inset-right))] z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-600/80 bg-slate-950/85 text-white shadow-xl backdrop-blur-md","aria-label":o?"Resume game":"Pause game",children:o?Tt.jsx(IC,{size:20}):Tt.jsx(AC,{size:20})}),o&&Tt.jsx("div",{id:"pause-menu",className:"pointer-events-auto absolute inset-0 z-40 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm",children:Tt.jsxs("div",{className:"w-full max-w-md rounded-3xl border border-slate-600/70 bg-slate-900/95 p-5 text-white shadow-2xl",children:[Tt.jsx("div",{className:"text-center text-xs font-black uppercase tracking-[.3em] text-amber-400",children:"Game paused"}),Tt.jsxs("button",{onClick:t,className:"mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 font-black text-slate-950 active:scale-[.98]",children:[Tt.jsx(ES,{size:18,fill:"currentColor"})," Resume"]}),Tt.jsxs("div",{className:"mt-3 grid grid-cols-3 gap-2",children:[Tt.jsxs("button",{onClick:s,className:"rounded-xl bg-slate-800 p-3 text-xs font-bold",children:[Tt.jsx(TC,{className:"mx-auto mb-1 text-sky-400",size:18}),i]}),Tt.jsxs("button",{onClick:u,className:"rounded-xl bg-slate-800 p-3 text-xs font-bold",children:[l?Tt.jsx(OC,{className:"mx-auto mb-1 text-rose-400",size:18}):Tt.jsx(LC,{className:"mx-auto mb-1 text-emerald-400",size:18}),l?"Muted":"Sound"]}),Tt.jsxs("button",{onClick:d,className:`rounded-xl p-3 text-xs font-bold ${h?"bg-amber-400 text-slate-950":"bg-slate-800"}`,children:[Tt.jsx(yC,{className:"mx-auto mb-1",size:18}),"Debug"]})]}),Tt.jsxs("div",{className:"mt-4 grid gap-3 text-xs text-slate-300 sm:grid-cols-2",children:[Tt.jsxs("div",{className:"rounded-xl bg-slate-950/65 p-3",children:[Tt.jsx("b",{className:"text-white",children:"Touch"}),Tt.jsx("br",{}),"Drag the left stick to move; outer ring sprints. Tap a receiver to lob, hold briefly for touch, hold longer for bullet."]}),Tt.jsxs("div",{className:"rounded-xl bg-slate-950/65 p-3",children:[Tt.jsx("b",{className:"text-white",children:"Keyboard"}),Tt.jsx("br",{}),"WASD/arrows move, Shift sprints, Space snaps, 1–3 throw, C changes camera, P/Esc pauses."]})]})]})})]}),zC=180,FC=450;function HC(o){return o<zC?"LOB":o<FC?"TOUCH":"BULLET"}const zx=["WR1","WR2","WR3"],GC=({active:o,getEngine:t})=>{const i=Ve.useRef(null),s=Ve.useRef({WR1:null,WR2:null,WR3:null}),l=Ve.useRef(null);Ve.useEffect(()=>{if(!o){l.current=null,zx.forEach(m=>{var p;return(p=s.current[m])==null?void 0:p.classList.add("hidden")});return}let h=0;const d=()=>{const m=i.current,p=t();if(m&&p){const v=m.getBoundingClientRect();for(const g of p.getReceiverScreenPositions(v.width,v.height)){const _=s.current[g.id];_&&(_.classList.toggle("hidden",g.behindCamera),_.style.transform=`translate3d(${g.x}px, ${g.y}px, 0) translate(-50%, -50%)`)}}h=requestAnimationFrame(d)};return h=requestAnimationFrame(d),()=>cancelAnimationFrame(h)},[o,t]);const u=(h,d,m)=>{var v;const p=l.current;!p||p.pointerId!==h.pointerId||p.receiver!==d||(l.current=null,m&&((v=t())==null||v.throwToReceiver(d,HC(performance.now()-p.startedAt))))};return Tt.jsx("div",{ref:i,id:"receiver-target-overlay",className:"pointer-events-none absolute inset-0 z-20",children:zx.map(h=>Tt.jsx("button",{ref:d=>{s.current[h]=d},"aria-label":`Throw to ${h}. Tap to lob, hold for touch or bullet.`,className:"pointer-events-auto absolute top-0 left-0 hidden h-16 w-16 touch-none rounded-full bg-transparent",onPointerDown:d=>{l.current||(l.current={pointerId:d.pointerId,receiver:h,startedAt:performance.now()},d.currentTarget.setPointerCapture(d.pointerId))},onPointerUp:d=>u(d,h,!0),onPointerCancel:d=>u(d,h,!1),onLostPointerCapture:d=>u(d,h,!1)},h))})},VC=.12,kC=.85;function XC(o,t,i,s=VC,l=kC){const u=Math.max(1,i),h=Math.hypot(o,t),d=Math.min(h,u),m=d/u,p=h>0?o/h:0,v=h>0?t/h:0;if(m<=s)return{lateral:0,forward:0,magnitude:0,sprint:!1,knobX:p*d,knobY:v*d};const g=Math.min(1,(m-s)/Math.max(.001,1-s));return{lateral:p*g,forward:-v*g,magnitude:g,sprint:m>=l,knobX:p*d,knobY:v*d}}const WC=({onMove:o,disabled:t=!1})=>{const i=Ve.useRef(null),s=Ve.useRef(null),l=Ve.useRef(null),u=Ve.useCallback(()=>{l.current=null,s.current&&(s.current.style.transform="translate3d(0, 0, 0)"),o(0,0,!1)},[o]);Ve.useEffect(()=>u,[u]);const h=Ve.useCallback((d,m)=>{const p=i.current;if(!p)return;const v=p.getBoundingClientRect(),g=v.width*.36,_=XC(d-(v.left+v.width/2),m-(v.top+v.height/2),g);s.current&&(s.current.style.transform=`translate3d(${_.knobX}px, ${_.knobY}px, 0)`),o(_.lateral,_.forward,_.sprint)},[o]);return Tt.jsxs("div",{id:"virtual-joystick",ref:i,"aria-label":"Movement joystick. Drag farther to sprint.",className:"touch-game-control pointer-events-auto absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] h-32 w-32 touch-none rounded-full border-2 border-sky-300/35 bg-slate-950/30 shadow-[0_8px_30px_rgba(2,8,23,0.35)] backdrop-blur-sm",onPointerDown:d=>{t||l.current!==null||(l.current=d.pointerId,d.currentTarget.setPointerCapture(d.pointerId),h(d.clientX,d.clientY))},onPointerMove:d=>{d.pointerId===l.current&&h(d.clientX,d.clientY)},onPointerUp:d=>{d.pointerId===l.current&&u()},onPointerCancel:d=>{d.pointerId===l.current&&u()},onLostPointerCapture:d=>{d.pointerId===l.current&&u()},children:[Tt.jsx("div",{className:"absolute inset-[13%] rounded-full border border-white/10"}),Tt.jsx("div",{className:"absolute inset-[5%] rounded-full border border-dashed border-amber-300/25"}),Tt.jsx("div",{ref:s,className:"absolute top-1/2 left-1/2 h-14 w-14 rounded-full border border-sky-200/60 bg-sky-500/60 shadow-[0_4px_18px_rgba(14,165,233,0.5)] will-change-transform",style:{marginLeft:"-1.75rem",marginTop:"-1.75rem"}})]})},qC=({downState:o,playPhase:t,telemetry:i,currentPlay:s,controlledPlayerId:l,onSelectPlay:u,onSnap:h,onToggleDebug:d,debugMode:m,cameraMode:p,onToggleCamera:v,onVirtualMove:g,getEngine:_,isPaused:M,onTogglePause:b})=>{const[w,y]=Ve.useState(!1),S=()=>{const D=!w;y(D),ki.setMuted(D)},L=o.down===1?"1ST":o.down===2?"2ND":o.down===3?"3RD":"4TH",B=!M&&(t==="PLAY_ACTIVE"||t==="RUN_AFTER_CATCH"),C=!M&&t==="PLAY_ACTIVE"&&l==="QB"&&s.type==="PASS";return Tt.jsxs("div",{id:"gameplay-hud-root",className:"pointer-events-none absolute inset-0 select-none overflow-hidden font-sans",children:[Tt.jsxs("div",{id:"scoreboard-banner",className:"absolute top-[max(.5rem,env(safe-area-inset-top))] left-1/2 z-30 flex max-w-[calc(100%-7rem)] -translate-x-1/2 items-center gap-1 rounded-xl border border-slate-700/80 bg-slate-900/90 px-2 py-2 text-white shadow-2xl backdrop-blur-md sm:top-4 sm:gap-3 sm:px-4",children:[Tt.jsxs("div",{className:"flex items-center gap-1.5",children:[Tt.jsx("div",{className:"flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-[10px] font-black",children:"WIL"}),Tt.jsx("span",{className:"hidden text-sm font-extrabold tracking-wide text-blue-400 md:inline",children:"WILDCATS"}),Tt.jsx("span",{className:"font-mono text-xl font-black",children:o.offenseScore})]}),Tt.jsx("div",{className:"h-6 w-px bg-slate-700"}),Tt.jsxs("div",{className:"flex items-center gap-1.5",children:[Tt.jsx("span",{className:"font-mono text-xl font-black",children:o.defenseScore}),Tt.jsx("span",{className:"hidden text-sm font-extrabold tracking-wide text-red-400 md:inline",children:"TITANS"}),Tt.jsx("div",{className:"flex h-7 w-7 items-center justify-center rounded-md bg-red-700 text-[10px] font-black",children:"TIT"})]}),Tt.jsx("div",{className:"h-6 w-px bg-slate-700"}),Tt.jsxs("div",{className:"flex items-center gap-1.5 font-mono text-[11px] text-slate-300",children:[Tt.jsxs("span",{className:"rounded bg-slate-800 px-1.5 py-0.5 font-bold text-amber-400",children:["Q",o.quarter]}),Tt.jsx("span",{className:"font-semibold",children:uC(o.clockSeconds)})]})]}),Tt.jsxs("div",{id:"down-distance-chyron",className:"absolute top-20 left-[max(.5rem,env(safe-area-inset-left))] z-20 max-w-[calc(100%-1rem)] rounded-xl border border-slate-700/80 bg-slate-900/88 p-2.5 text-white shadow-xl backdrop-blur-md sm:top-auto sm:bottom-6 sm:left-6 sm:p-3.5",children:[Tt.jsxs("div",{className:"flex items-baseline gap-2",children:[Tt.jsxs("span",{className:"text-xl font-black tracking-tight text-amber-400 sm:text-2xl",children:[L," & ",o.distance]}),Tt.jsxs("span",{className:"font-mono text-[10px] text-slate-400",children:["BALL ON ",Tt.jsx("b",{className:"text-white",children:o.lineOfScrimmage})]})]}),Tt.jsxs("div",{className:"mt-1 flex max-w-[18rem] items-center gap-2 text-[10px]",children:[Tt.jsx("span",{className:"shrink-0 rounded border border-blue-800/60 bg-blue-950/80 px-2 py-0.5 font-semibold text-blue-300",children:s.name}),o.playResultText&&Tt.jsx("span",{className:"truncate italic text-amber-300",children:o.playResultText})]})]}),Tt.jsx(GC,{active:C,getEngine:_}),t==="PRE_SNAP"&&!M&&Tt.jsxs("div",{id:"pre-snap-panel",className:"pointer-events-auto absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-30 flex w-[calc(100%-1rem)] max-w-3xl -translate-x-1/2 flex-col items-center gap-2 sm:bottom-6",children:[Tt.jsx("div",{className:"flex w-full snap-x items-center gap-2 overflow-x-auto rounded-2xl border border-slate-700/80 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-md",children:Vu.map(D=>Tt.jsxs("button",{id:`play-select-${D.id}`,onClick:()=>u(D),className:`min-w-[9.5rem] shrink-0 snap-center rounded-xl border px-3 py-2 text-left transition ${s.id===D.id?"border-blue-400 bg-blue-600/30 text-white ring-1 ring-blue-400":"border-transparent bg-slate-800/80 text-slate-300"}`,children:[Tt.jsxs("div",{className:"flex items-center gap-1.5",children:[Tt.jsx("span",{className:`rounded px-1.5 text-[9px] font-extrabold ${D.type==="PASS"?"bg-sky-500/30 text-sky-300":"bg-amber-500/30 text-amber-300"}`,children:D.type}),Tt.jsx("span",{className:"text-xs font-bold",children:D.name})]}),Tt.jsx("span",{className:"mt-0.5 block truncate text-[9px] text-slate-400",children:D.description})]},D.id))}),Tt.jsxs("button",{id:"snap-ball-btn",onClick:h,className:"flex min-h-12 items-center gap-2 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 text-sm font-black uppercase tracking-wider text-slate-950 shadow-xl active:scale-95",children:[Tt.jsx(ES,{size:16,fill:"currentColor"})," Snap ball ",Tt.jsx("span",{className:"hidden sm:inline",children:"(Space)"})]})]}),B&&Tt.jsx(WC,{onMove:g}),t==="TOUCHDOWN_CELEBRATION"&&Tt.jsx("div",{className:"absolute inset-0 z-20 flex items-center justify-center",children:Tt.jsxs("div",{className:"animate-bounce rounded-3xl border-4 border-amber-400 bg-gradient-to-b from-blue-900 to-slate-950 px-8 py-5 text-center shadow-[0_0_50px_rgba(250,204,21,.5)]",children:[Tt.jsxs("div",{className:"flex items-center justify-center gap-2 text-amber-400",children:[Tt.jsx(Bx,{size:26}),Tt.jsx("span",{className:"text-3xl font-black uppercase tracking-wider",children:"Touchdown!"}),Tt.jsx(Bx,{size:26})]}),Tt.jsx("p",{className:"mt-1 text-sm font-bold text-slate-200",children:o.playResultText})]})}),m&&!M&&Tt.jsxs("div",{id:"debug-telemetry-panel",className:"pointer-events-auto absolute top-20 right-2 z-30 w-60 rounded-xl border border-amber-500/40 bg-slate-950/90 p-3 font-mono text-[11px] text-amber-300 shadow-2xl backdrop-blur-md sm:right-6",children:[Tt.jsxs("div",{className:"mb-2 flex items-center gap-1.5 border-b border-slate-800 pb-1 font-bold",children:[Tt.jsx(CC,{size:14})," PHYSICS DEBUG"]}),Tt.jsxs("div",{className:"space-y-1",children:[Tt.jsxs("div",{className:"flex justify-between",children:[Tt.jsx("span",{className:"text-slate-400",children:"FPS"}),Tt.jsx("b",{className:"text-emerald-400",children:i.fps})]}),Tt.jsxs("div",{className:"flex justify-between",children:[Tt.jsx("span",{className:"text-slate-400",children:"Carrier"}),Tt.jsx("b",{className:"text-white",children:i.ballCarrierId||"None"})]}),Tt.jsxs("div",{className:"flex justify-between",children:[Tt.jsx("span",{className:"text-slate-400",children:"State"}),Tt.jsx("b",{children:i.ballCarrierState})]}),Tt.jsxs("div",{className:"flex justify-between",children:[Tt.jsx("span",{className:"text-slate-400",children:"Speed"}),Tt.jsxs("span",{children:[i.ballCarrierSpeed.toFixed(1)," m/s"]})]}),Tt.jsxs("div",{className:"flex justify-between",children:[Tt.jsx("span",{className:"text-slate-400",children:"Ragdolls"}),Tt.jsx("b",{className:"text-white",children:i.activeRagdollCount})]}),Tt.jsxs("div",{className:"flex justify-between",children:[Tt.jsx("span",{className:"text-slate-400",children:"Impact"}),Tt.jsxs("b",{className:"text-red-400",children:[i.lastTackleForce," N"]})]})]})]}),Tt.jsx(BC,{paused:M,onTogglePause:b,cameraMode:p,onToggleCamera:v,isMuted:w,onToggleMute:S,debugMode:m,onToggleDebug:d})]})};function YC(){const o=Ve.useRef(null),t=Ve.useRef(null),[i,s]=Ve.useState({down:1,distance:10,lineOfScrimmage:25,firstDownLine:35,quarter:1,clockSeconds:900,offenseScore:0,defenseScore:0,playResultText:"1st & 10 at Own 25"}),[l,u]=Ve.useState("PRE_SNAP"),[h,d]=Ve.useState(Vu[0]),[m,p]=Ve.useState(!1),[v,g]=Ve.useState("TACTICAL"),[_,M]=Ve.useState("QB"),[b,w]=Ve.useState(!1),[y,S]=Ve.useState({fps:60,activeRagdollCount:0,ballCarrierId:"QB",ballCarrierState:"NORMAL",ballCarrierSpeed:0,lastTackleForce:0,passTarget:null,passAirTime:0});Ve.useEffect(()=>{const U=o.current;if(!U)return;let F=!1;const k=new mC(U);t.current=k,k.setOnStateChange((it,nt,xt)=>{F||(s({...it}),u(nt),M(k.controlledPlayerId),S({...xt}))}),k.start();const K=()=>{F||k.resize(U.clientWidth,U.clientHeight)};window.addEventListener("resize",K);const st=new ResizeObserver(it=>{for(const nt of it){if(F)return;const{width:xt,height:Zt}=nt.contentRect;xt>0&&Zt>0&&k.resize(xt,Zt)}});st.observe(U);const X=requestAnimationFrame(()=>{K()}),et=it=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(it.code)&&it.preventDefault(),F)return;const nt=k;if(it.code==="Escape"||it.code==="KeyP"){it.repeat||w(nt.togglePaused());return}if(!nt.isPaused)switch(it.code){case"KeyW":case"ArrowUp":nt.input.forward=1;break;case"KeyS":case"ArrowDown":nt.input.forward=-1;break;case"KeyA":case"ArrowLeft":nt.input.lateral=-1;break;case"KeyD":case"ArrowRight":nt.input.lateral=1;break;case"ShiftLeft":case"ShiftRight":nt.input.sprint=!0;break;case"Space":nt.playPhase==="PRE_SNAP"&&nt.snapBall();break;case"Digit1":nt.throwToReceiver("WR1","TOUCH");break;case"Digit2":nt.throwToReceiver("WR2","TOUCH");break;case"Digit3":nt.throwToReceiver("WR3","TOUCH");break;case"KeyC":const xt=nt.cycleCameraMode();g(xt);break;case"Backquote":nt.toggleDebugMode(),p(nt.debugMode);break}},W=it=>{if(F)return;const nt=k;switch(it.code){case"KeyW":case"ArrowUp":nt.input.forward===1&&(nt.input.forward=0);break;case"KeyS":case"ArrowDown":nt.input.forward===-1&&(nt.input.forward=0);break;case"KeyA":case"ArrowLeft":nt.input.lateral===-1&&(nt.input.lateral=0);break;case"KeyD":case"ArrowRight":nt.input.lateral===1&&(nt.input.lateral=0);break;case"ShiftLeft":case"ShiftRight":nt.input.sprint=!1;break}},$=()=>k.clearMovementInput(),ht=()=>{document.hidden&&(k.setPaused(!0),w(!0))};return window.addEventListener("keydown",et),window.addEventListener("keyup",W),window.addEventListener("blur",$),document.addEventListener("visibilitychange",ht),()=>{F=!0,cancelAnimationFrame(X),st.disconnect(),window.removeEventListener("resize",K),window.removeEventListener("keydown",et),window.removeEventListener("keyup",W),window.removeEventListener("blur",$),document.removeEventListener("visibilitychange",ht),k.destroy(),t.current===k&&(t.current=null)}},[]);const L=U=>{d(U),t.current&&t.current.setPlay(U)},B=()=>{t.current&&t.current.snapBall()},C=()=>{t.current&&(t.current.toggleDebugMode(),p(t.current.debugMode))},D=()=>{if(t.current){const U=t.current.cycleCameraMode();g(U)}},N=Ve.useCallback((U,F,k)=>{t.current&&(t.current.input.lateral=U,t.current.input.forward=F,t.current.input.sprint=k)},[]),P=()=>{t.current&&w(t.current.togglePaused())},T=Ve.useCallback(()=>t.current,[]);return Tt.jsxs("div",{id:"gameplay-root",className:"relative h-full w-full overflow-hidden bg-slate-950",children:[Tt.jsx("div",{id:"gameplay-canvas-host",ref:o,className:"absolute inset-0 h-full w-full overflow-hidden [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full"}),Tt.jsx(qC,{downState:i,playPhase:l,telemetry:y,currentPlay:h,controlledPlayerId:_,onSelectPlay:L,onSnap:B,onToggleDebug:C,debugMode:m,cameraMode:v,onToggleCamera:D,onVirtualMove:N,getEngine:T,isPaused:b,onTogglePause:P})]})}hE.createRoot(document.getElementById("root")).render(Tt.jsx(Ve.StrictMode,{children:Tt.jsx(YC,{})}));const ZC=document.querySelector('script[type="module"][src$="/src/main.tsx"]'),KC=!import.meta.url.includes("/assets/")&&!import.meta.url.includes("/pages-assets/");if(ZC&&KC&&window.location.hostname.endsWith(".github.io")){const o=document.createElement("link");o.rel="stylesheet",o.href="./pages-assets/app.css?v=landscape-joystick-1",document.head.appendChild(o),import("./pages-assets/app.js?v=landscape-joystick-1").catch(i=>{console.error("Unable to load the GitHub Pages gameplay bundle.",i)})}
