var WT=Object.defineProperty;var GT=(t,e,n)=>e in t?WT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var cc=(t,e,n)=>GT(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function KT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iv={exports:{}},ru={},sv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),QT=Symbol.for("react.portal"),XT=Symbol.for("react.fragment"),YT=Symbol.for("react.strict_mode"),JT=Symbol.for("react.profiler"),ZT=Symbol.for("react.provider"),eI=Symbol.for("react.context"),tI=Symbol.for("react.forward_ref"),nI=Symbol.for("react.suspense"),rI=Symbol.for("react.memo"),iI=Symbol.for("react.lazy"),lm=Symbol.iterator;function sI(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var ov={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},av=Object.assign,lv={};function as(t,e,n){this.props=t,this.context=e,this.refs=lv,this.updater=n||ov}as.prototype.isReactComponent={};as.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};as.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uv(){}uv.prototype=as.prototype;function Ed(t,e,n){this.props=t,this.context=e,this.refs=lv,this.updater=n||ov}var Td=Ed.prototype=new uv;Td.constructor=Ed;av(Td,as.prototype);Td.isPureReactComponent=!0;var um=Array.isArray,cv=Object.prototype.hasOwnProperty,Id={current:null},hv={key:!0,ref:!0,__self:!0,__source:!0};function dv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cv.call(e,r)&&!hv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ho,type:t,key:s,ref:o,props:i,_owner:Id.current}}function oI(t,e){return{$$typeof:Ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho}function aI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cm=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?aI(""+t.key):e.toString(36)}function $a(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ho:case QT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hc(o,0):r,um(i)?(n="",t!=null&&(n=t.replace(cm,"$&/")+"/"),$a(i,e,n,"",function(c){return c})):i!=null&&(Sd(i)&&(i=oI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",um(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+hc(s,l);o+=$a(s,e,n,u,i)}else if(u=sI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+hc(s,l++),o+=$a(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var r=[],i=0;return $a(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Ba={transition:null},uI={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:Id};function fv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!Sd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=as;ee.Fragment=XT;ee.Profiler=JT;ee.PureComponent=Ed;ee.StrictMode=YT;ee.Suspense=nI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uI;ee.act=fv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=av({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Id.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)cv.call(e,u)&&!hv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ho,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:eI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZT,_context:t},t.Consumer=t};ee.createElement=dv;ee.createFactory=function(t){var e=dv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:tI,render:t}};ee.isValidElement=Sd;ee.lazy=function(t){return{$$typeof:iI,_payload:{_status:-1,_result:t},_init:lI}};ee.memo=function(t,e){return{$$typeof:rI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ba.transition;Ba.transition={};try{t()}finally{Ba.transition=e}};ee.unstable_act=fv;ee.useCallback=function(t,e){return ht.current.useCallback(t,e)};ee.useContext=function(t){return ht.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ht.current.useEffect(t,e)};ee.useId=function(){return ht.current.useId()};ee.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ht.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};ee.useRef=function(t){return ht.current.useRef(t)};ee.useState=function(t){return ht.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ht.current.useTransition()};ee.version="18.3.1";sv.exports=ee;var ne=sv.exports;const cl=KT(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cI=ne,hI=Symbol.for("react.element"),dI=Symbol.for("react.fragment"),fI=Object.prototype.hasOwnProperty,pI=cI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mI={key:!0,ref:!0,__self:!0,__source:!0};function pv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fI.call(e,r)&&!mI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:hI,type:t,key:s,ref:o,props:i,_owner:pI.current}}ru.Fragment=dI;ru.jsx=pv;ru.jsxs=pv;iv.exports=ru;var p=iv.exports,mv={exports:{}},kt={},gv={exports:{}},yv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var ve=J-1>>>1,Re=z[ve];if(0<i(Re,Q))z[ve]=Q,z[J]=Re,J=ve;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var ve=0,Re=z.length,Pr=Re>>>1;ve<Pr;){var Nt=2*(ve+1)-1,Nr=z[Nt],zt=Nt+1,Ln=z[zt];if(0>i(Nr,J))zt<Re&&0>i(Ln,Nr)?(z[ve]=Ln,z[zt]=J,ve=zt):(z[ve]=Nr,z[Nt]=J,ve=Nt);else if(zt<Re&&0>i(Ln,J))z[ve]=Ln,z[zt]=J,ve=zt;else break e}}return Q}function i(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,A=!1,R=!1,P=!1,V=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function b(z){if(P=!1,T(z),!R)if(n(u)!==null)R=!0,Et(L);else{var Q=n(c);Q!==null&&De(b,Q.startTime-z)}}function L(z,Q){R=!1,P&&(P=!1,w(v),v=-1),A=!0;var J=g;try{for(T(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||z&&!C());){var ve=m.callback;if(typeof ve=="function"){m.callback=null,g=m.priorityLevel;var Re=ve(m.expirationTime<=Q);Q=t.unstable_now(),typeof Re=="function"?m.callback=Re:m===n(u)&&r(u),T(Q)}else r(u);m=n(u)}if(m!==null)var Pr=!0;else{var Nt=n(c);Nt!==null&&De(b,Nt.startTime-Q),Pr=!1}return Pr}finally{m=null,g=J,A=!1}}var j=!1,E=null,v=-1,I=5,x=-1;function C(){return!(t.unstable_now()-x<I)}function k(){if(E!==null){var z=t.unstable_now();x=z;var Q=!0;try{Q=E(!0,z)}finally{Q?S():(j=!1,E=null)}}else j=!1}var S;if(typeof _=="function")S=function(){_(k)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Ye=ye.port2;ye.port1.onmessage=k,S=function(){Ye.postMessage(null)}}else S=function(){V(k,0)};function Et(z){E=z,j||(j=!0,S())}function De(z,Q){v=V(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||A||(R=!0,Et(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var J=g;g=Q;try{return z()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=g;g=z;try{return Q()}finally{g=J}},t.unstable_scheduleCallback=function(z,Q,J){var ve=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ve+J:ve):J=ve,z){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=J+Re,z={id:f++,callback:Q,priorityLevel:z,startTime:J,expirationTime:Re,sortIndex:-1},J>ve?(z.sortIndex=J,e(c,z),n(u)===null&&z===n(c)&&(P?(w(v),v=-1):P=!0,De(b,J-ve))):(z.sortIndex=Re,e(u,z),R||A||(R=!0,Et(L))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var Q=g;return function(){var J=g;g=Q;try{return z.apply(this,arguments)}finally{g=J}}}})(yv);gv.exports=yv;var gI=gv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yI=ne,Ct=gI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vv=new Set,vo={};function ai(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(vo[t]=e,t=0;t<e.length;t++)vv.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,vI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hm={},dm={};function _I(t){return Zc.call(dm,t)?!0:Zc.call(hm,t)?!1:vI.test(t)?dm[t]=!0:(hm[t]=!0,!1)}function wI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function EI(t,e,n,r){if(e===null||typeof e>"u"||wI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var xd=/[\-:]([a-z])/g;function Ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xd,Ad);Qe[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xd,Ad);Qe[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xd,Ad);Qe[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rd(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(EI(e,n,i,r)&&(n=null),r||i===null?_I(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vn=yI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),Si=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),wv=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),Pd=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),Ev=Symbol.for("react.offscreen"),fm=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=fm&&t[fm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,dc;function Bs(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var fc=!1;function pc(t,e){if(!t||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bs(t):""}function TI(t){switch(t.tag){case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return t=pc(t.type,!1),t;case 11:return t=pc(t.type.render,!1),t;case 1:return t=pc(t.type,!0),t;default:return""}}function rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xi:return"Fragment";case Si:return"Portal";case eh:return"Profiler";case Cd:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wv:return(t.displayName||"Context")+".Consumer";case _v:return(t._context.displayName||"Context")+".Provider";case kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pd:return e=t.displayName||null,e!==null?e:rh(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return rh(t(e))}catch{}}return null}function II(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rh(e);case 8:return e===Cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SI(t){var e=Tv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=SI(t))}function Iv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Tv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ih(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sv(t,e){e=e.checked,e!=null&&Rd(t,"checked",e,!1)}function sh(t,e){Sv(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&oh(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oh(t,e,n){(e!=="number"||hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function Mi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Hs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function xv(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ym(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Av(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Av(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,Rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xI=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){xI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function Cv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function kv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AI=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uh(t,e){if(e){if(AI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function ch(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=null;function Nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dh=null,ji=null,Fi=null;function vm(t){if(t=Go(t)){if(typeof dh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=lu(e),dh(t.stateNode,t.type,e))}}function Pv(t){ji?Fi?Fi.push(t):Fi=[t]:ji=t}function Nv(){if(ji){var t=ji,e=Fi;if(Fi=ji=null,vm(t),e)for(t=0;t<e.length;t++)vm(e[t])}}function bv(t,e){return t(e)}function Dv(){}var mc=!1;function Vv(t,e,n){if(mc)return t(e,n);mc=!0;try{return bv(t,e,n)}finally{mc=!1,(ji!==null||Fi!==null)&&(Dv(),Nv())}}function wo(t,e){var n=t.stateNode;if(n===null)return null;var r=lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var fh=!1;if(An)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){fh=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{fh=!1}function RI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var to=!1,dl=null,fl=!1,ph=null,CI={onError:function(t){to=!0,dl=t}};function kI(t,e,n,r,i,s,o,l,u){to=!1,dl=null,RI.apply(CI,arguments)}function PI(t,e,n,r,i,s,o,l,u){if(kI.apply(this,arguments),to){if(to){var c=dl;to=!1,dl=null}else throw Error(F(198));fl||(fl=!0,ph=c)}}function li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ov(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _m(t){if(li(t)!==t)throw Error(F(188))}function NI(t){var e=t.alternate;if(!e){if(e=li(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _m(i),t;if(s===r)return _m(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Lv(t){return t=NI(t),t!==null?Mv(t):null}function Mv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mv(t);if(e!==null)return e;t=t.sibling}return null}var jv=Ct.unstable_scheduleCallback,wm=Ct.unstable_cancelCallback,bI=Ct.unstable_shouldYield,DI=Ct.unstable_requestPaint,ke=Ct.unstable_now,VI=Ct.unstable_getCurrentPriorityLevel,bd=Ct.unstable_ImmediatePriority,Fv=Ct.unstable_UserBlockingPriority,pl=Ct.unstable_NormalPriority,OI=Ct.unstable_LowPriority,Uv=Ct.unstable_IdlePriority,iu=null,on=null;function LI(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(iu,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:FI,MI=Math.log,jI=Math.LN2;function FI(t){return t>>>=0,t===0?32:31-(MI(t)/jI|0)|0}var Ea=64,Ta=4194304;function qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=qs(l):(s&=o,s!==0&&(r=qs(s)))}else o=n&~i,o!==0?r=qs(o):s!==0&&(r=qs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function UI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=UI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zv(){var t=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),t}function gc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function $I(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function $v(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bv,Vd,Hv,qv,Wv,gh=!1,Ia=[],nr=null,rr=null,ir=null,Eo=new Map,To=new Map,Gn=[],BI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Em(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(e.pointerId)}}function Os(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Go(e),e!==null&&Vd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HI(t,e,n,r,i){switch(e){case"focusin":return nr=Os(nr,t,e,n,r,i),!0;case"dragenter":return rr=Os(rr,t,e,n,r,i),!0;case"mouseover":return ir=Os(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Eo.set(s,Os(Eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,To.set(s,Os(To.get(s)||null,t,e,n,r,i)),!0}return!1}function Gv(t){var e=zr(t.target);if(e!==null){var n=li(e);if(n!==null){if(e=n.tag,e===13){if(e=Ov(n),e!==null){t.blockedOn=e,Wv(t.priority,function(){Hv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ha(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hh=r,n.target.dispatchEvent(r),hh=null}else return e=Go(n),e!==null&&Vd(e),t.blockedOn=n,!1;e.shift()}return!0}function Tm(t,e,n){Ha(t)&&n.delete(e)}function qI(){gh=!1,nr!==null&&Ha(nr)&&(nr=null),rr!==null&&Ha(rr)&&(rr=null),ir!==null&&Ha(ir)&&(ir=null),Eo.forEach(Tm),To.forEach(Tm)}function Ls(t,e){t.blockedOn===e&&(t.blockedOn=null,gh||(gh=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,qI)))}function Io(t){function e(i){return Ls(i,t)}if(0<Ia.length){Ls(Ia[0],t);for(var n=1;n<Ia.length;n++){var r=Ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&Ls(nr,t),rr!==null&&Ls(rr,t),ir!==null&&Ls(ir,t),Eo.forEach(e),To.forEach(e),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)Gv(n),n.blockedOn===null&&Gn.shift()}var Ui=Vn.ReactCurrentBatchConfig,gl=!0;function WI(t,e,n,r){var i=ue,s=Ui.transition;Ui.transition=null;try{ue=1,Od(t,e,n,r)}finally{ue=i,Ui.transition=s}}function GI(t,e,n,r){var i=ue,s=Ui.transition;Ui.transition=null;try{ue=4,Od(t,e,n,r)}finally{ue=i,Ui.transition=s}}function Od(t,e,n,r){if(gl){var i=yh(t,e,n,r);if(i===null)Ac(t,e,r,yl,n),Em(t,r);else if(HI(i,t,e,n,r))r.stopPropagation();else if(Em(t,r),e&4&&-1<BI.indexOf(t)){for(;i!==null;){var s=Go(i);if(s!==null&&Bv(s),s=yh(t,e,n,r),s===null&&Ac(t,e,r,yl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ac(t,e,r,null,n)}}var yl=null;function yh(t,e,n,r){if(yl=null,t=Nd(r),t=zr(t),t!==null)if(e=li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ov(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function Kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VI()){case bd:return 1;case Fv:return 4;case pl:case OI:return 16;case Uv:return 536870912;default:return 16}default:return 16}}var Zn=null,Ld=null,qa=null;function Qv(){if(qa)return qa;var t,e=Ld,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return qa=i.slice(t,1<r?1-r:void 0)}function Wa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sa(){return!0}function Im(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sa:Im,this.isPropagationStopped=Im,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),e}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Md=Pt(ls),Wo=Ie({},ls,{view:0,detail:0}),KI=Pt(Wo),yc,vc,Ms,su=Ie({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ms&&(Ms&&t.type==="mousemove"?(yc=t.screenX-Ms.screenX,vc=t.screenY-Ms.screenY):vc=yc=0,Ms=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:vc}}),Sm=Pt(su),QI=Ie({},su,{dataTransfer:0}),XI=Pt(QI),YI=Ie({},Wo,{relatedTarget:0}),_c=Pt(YI),JI=Ie({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),ZI=Pt(JI),e1=Ie({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t1=Pt(e1),n1=Ie({},ls,{data:0}),xm=Pt(n1),r1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=s1[t])?!!e[t]:!1}function jd(){return o1}var a1=Ie({},Wo,{key:function(t){if(t.key){var e=r1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?i1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(t){return t.type==="keypress"?Wa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l1=Pt(a1),u1=Ie({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=Pt(u1),c1=Ie({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),h1=Pt(c1),d1=Ie({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),f1=Pt(d1),p1=Ie({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m1=Pt(p1),g1=[9,13,27,32],Fd=An&&"CompositionEvent"in window,no=null;An&&"documentMode"in document&&(no=document.documentMode);var y1=An&&"TextEvent"in window&&!no,Xv=An&&(!Fd||no&&8<no&&11>=no),Rm=" ",Cm=!1;function Yv(t,e){switch(t){case"keyup":return g1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function v1(t,e){switch(t){case"compositionend":return Jv(e);case"keypress":return e.which!==32?null:(Cm=!0,Rm);case"textInput":return t=e.data,t===Rm&&Cm?null:t;default:return null}}function _1(t,e){if(Ai)return t==="compositionend"||!Fd&&Yv(t,e)?(t=Qv(),qa=Ld=Zn=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xv&&e.locale!=="ko"?null:e.data;default:return null}}var w1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w1[t.type]:e==="textarea"}function Zv(t,e,n,r){Pv(r),e=vl(e,"onChange"),0<e.length&&(n=new Md("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ro=null,So=null;function E1(t){c_(t,0)}function ou(t){var e=ki(t);if(Iv(e))return t}function T1(t,e){if(t==="change")return e}var e_=!1;if(An){var wc;if(An){var Ec="oninput"in document;if(!Ec){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),Ec=typeof Pm.oninput=="function"}wc=Ec}else wc=!1;e_=wc&&(!document.documentMode||9<document.documentMode)}function Nm(){ro&&(ro.detachEvent("onpropertychange",t_),So=ro=null)}function t_(t){if(t.propertyName==="value"&&ou(So)){var e=[];Zv(e,So,t,Nd(t)),Vv(E1,e)}}function I1(t,e,n){t==="focusin"?(Nm(),ro=e,So=n,ro.attachEvent("onpropertychange",t_)):t==="focusout"&&Nm()}function S1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(So)}function x1(t,e){if(t==="click")return ou(e)}function A1(t,e){if(t==="input"||t==="change")return ou(e)}function R1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:R1;function xo(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zc.call(e,i)||!Qt(t[i],e[i]))return!1}return!0}function bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dm(t,e){var n=bm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bm(n)}}function n_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function r_(){for(var t=window,e=hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hl(t.document)}return e}function Ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function C1(t){var e=r_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n_(n.ownerDocument.documentElement,n)){if(r!==null&&Ud(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Dm(n,s);var o=Dm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k1=An&&"documentMode"in document&&11>=document.documentMode,Ri=null,vh=null,io=null,_h=!1;function Vm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_h||Ri==null||Ri!==hl(r)||(r=Ri,"selectionStart"in r&&Ud(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&xo(io,r)||(io=r,r=vl(vh,"onSelect"),0<r.length&&(e=new Md("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ri)))}function xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ci={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Tc={},i_={};An&&(i_=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function au(t){if(Tc[t])return Tc[t];if(!Ci[t])return t;var e=Ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i_)return Tc[t]=e[n];return t}var s_=au("animationend"),o_=au("animationiteration"),a_=au("animationstart"),l_=au("transitionend"),u_=new Map,Om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){u_.set(t,e),ai(e,[t])}for(var Ic=0;Ic<Om.length;Ic++){var Sc=Om[Ic],P1=Sc.toLowerCase(),N1=Sc[0].toUpperCase()+Sc.slice(1);Ir(P1,"on"+N1)}Ir(s_,"onAnimationEnd");Ir(o_,"onAnimationIteration");Ir(a_,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(l_,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function Lm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PI(r,e,void 0,t),t.currentTarget=null}function c_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Lm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Lm(i,l,c),s=u}}}if(fl)throw t=ph,fl=!1,ph=null,t}function fe(t,e){var n=e[Sh];n===void 0&&(n=e[Sh]=new Set);var r=t+"__bubble";n.has(r)||(h_(e,t,2,!1),n.add(r))}function xc(t,e,n){var r=0;e&&(r|=4),h_(n,t,r,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function Ao(t){if(!t[Aa]){t[Aa]=!0,vv.forEach(function(n){n!=="selectionchange"&&(b1.has(n)||xc(n,!1,t),xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,xc("selectionchange",!1,e))}}function h_(t,e,n,r){switch(Kv(e)){case 1:var i=WI;break;case 4:i=GI;break;default:i=Od}n=i.bind(null,e,n,t),i=void 0,!fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ac(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=zr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Vv(function(){var c=s,f=Nd(n),m=[];e:{var g=u_.get(t);if(g!==void 0){var A=Md,R=t;switch(t){case"keypress":if(Wa(n)===0)break e;case"keydown":case"keyup":A=l1;break;case"focusin":R="focus",A=_c;break;case"focusout":R="blur",A=_c;break;case"beforeblur":case"afterblur":A=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=XI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=h1;break;case s_:case o_:case a_:A=ZI;break;case l_:A=f1;break;case"scroll":A=KI;break;case"wheel":A=m1;break;case"copy":case"cut":case"paste":A=t1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Am}var P=(e&4)!==0,V=!P&&t==="scroll",w=P?g!==null?g+"Capture":null:g;P=[];for(var _=c,T;_!==null;){T=_;var b=T.stateNode;if(T.tag===5&&b!==null&&(T=b,w!==null&&(b=wo(_,w),b!=null&&P.push(Ro(_,b,T)))),V)break;_=_.return}0<P.length&&(g=new A(g,R,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==hh&&(R=n.relatedTarget||n.fromElement)&&(zr(R)||R[Rn]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(R=n.relatedTarget||n.toElement,A=c,R=R?zr(R):null,R!==null&&(V=li(R),R!==V||R.tag!==5&&R.tag!==6)&&(R=null)):(A=null,R=c),A!==R)){if(P=Sm,b="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=Am,b="onPointerLeave",w="onPointerEnter",_="pointer"),V=A==null?g:ki(A),T=R==null?g:ki(R),g=new P(b,_+"leave",A,n,f),g.target=V,g.relatedTarget=T,b=null,zr(f)===c&&(P=new P(w,_+"enter",R,n,f),P.target=T,P.relatedTarget=V,b=P),V=b,A&&R)t:{for(P=A,w=R,_=0,T=P;T;T=vi(T))_++;for(T=0,b=w;b;b=vi(b))T++;for(;0<_-T;)P=vi(P),_--;for(;0<T-_;)w=vi(w),T--;for(;_--;){if(P===w||w!==null&&P===w.alternate)break t;P=vi(P),w=vi(w)}P=null}else P=null;A!==null&&Mm(m,g,A,P,!1),R!==null&&V!==null&&Mm(m,V,R,P,!0)}}e:{if(g=c?ki(c):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var L=T1;else if(km(g))if(e_)L=A1;else{L=S1;var j=I1}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=x1);if(L&&(L=L(t,c))){Zv(m,L,n,f);break e}j&&j(t,g,c),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&oh(g,"number",g.value)}switch(j=c?ki(c):window,t){case"focusin":(km(j)||j.contentEditable==="true")&&(Ri=j,vh=c,io=null);break;case"focusout":io=vh=Ri=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,Vm(m,n,f);break;case"selectionchange":if(k1)break;case"keydown":case"keyup":Vm(m,n,f)}var E;if(Fd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ai?Yv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Xv&&n.locale!=="ko"&&(Ai||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ai&&(E=Qv()):(Zn=f,Ld="value"in Zn?Zn.value:Zn.textContent,Ai=!0)),j=vl(c,v),0<j.length&&(v=new xm(v,t,null,n,f),m.push({event:v,listeners:j}),E?v.data=E:(E=Jv(n),E!==null&&(v.data=E)))),(E=y1?v1(t,n):_1(t,n))&&(c=vl(c,"onBeforeInput"),0<c.length&&(f=new xm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=E))}c_(m,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wo(t,n),s!=null&&r.unshift(Ro(t,s,i)),s=wo(t,e),s!=null&&r.push(Ro(t,s,i))),t=t.return}return r}function vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=wo(n,s),u!=null&&o.unshift(Ro(n,u,l))):i||(u=wo(n,s),u!=null&&o.push(Ro(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var D1=/\r\n?/g,V1=/\u0000|\uFFFD/g;function jm(t){return(typeof t=="string"?t:""+t).replace(D1,`
`).replace(V1,"")}function Ra(t,e,n){if(e=jm(e),jm(t)!==e&&n)throw Error(F(425))}function _l(){}var wh=null,Eh=null;function Th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ih=typeof setTimeout=="function"?setTimeout:void 0,O1=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,L1=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(t){return Fm.resolve(null).then(t).catch(M1)}:Ih;function M1(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Io(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Io(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),sn="__reactFiber$"+us,Co="__reactProps$"+us,Rn="__reactContainer$"+us,Sh="__reactEvents$"+us,j1="__reactListeners$"+us,F1="__reactHandles$"+us;function zr(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Um(t);t!==null;){if(n=t[sn])return n;t=Um(t)}return e}t=n,n=t.parentNode}return null}function Go(t){return t=t[sn]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function lu(t){return t[Co]||null}var xh=[],Pi=-1;function Sr(t){return{current:t}}function me(t){0>Pi||(t.current=xh[Pi],xh[Pi]=null,Pi--)}function he(t,e){Pi++,xh[Pi]=t.current,t.current=e}var mr={},st=Sr(mr),yt=Sr(!1),Qr=mr;function Ki(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function wl(){me(yt),me(st)}function zm(t,e,n){if(st.current!==mr)throw Error(F(168));he(st,e),he(yt,n)}function d_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,II(t)||"Unknown",i));return Ie({},n,r)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Qr=st.current,he(st,t),he(yt,yt.current),!0}function $m(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=d_(t,e,Qr),r.__reactInternalMemoizedMergedChildContext=t,me(yt),me(st),he(st,t)):me(yt),he(yt,n)}var _n=null,uu=!1,Cc=!1;function f_(t){_n===null?_n=[t]:_n.push(t)}function U1(t){uu=!0,f_(t)}function xr(){if(!Cc&&_n!==null){Cc=!0;var t=0,e=ue;try{var n=_n;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,uu=!1}catch(i){throw _n!==null&&(_n=_n.slice(t+1)),jv(bd,xr),i}finally{ue=e,Cc=!1}}return null}var Ni=[],bi=0,Tl=null,Il=0,bt=[],Dt=0,Xr=null,wn=1,En="";function Mr(t,e){Ni[bi++]=Il,Ni[bi++]=Tl,Tl=t,Il=e}function p_(t,e,n){bt[Dt++]=wn,bt[Dt++]=En,bt[Dt++]=Xr,Xr=t;var r=wn;t=En;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wn=1<<32-Gt(e)+i|n<<i|r,En=s+t}else wn=1<<s|n<<i|r,En=t}function zd(t){t.return!==null&&(Mr(t,1),p_(t,1,0))}function $d(t){for(;t===Tl;)Tl=Ni[--bi],Ni[bi]=null,Il=Ni[--bi],Ni[bi]=null;for(;t===Xr;)Xr=bt[--Dt],bt[Dt]=null,En=bt[--Dt],bt[Dt]=null,wn=bt[--Dt],bt[Dt]=null}var At=null,St=null,_e=!1,qt=null;function m_(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,St=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:wn,overflow:En}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,St=null,!0):!1;default:return!1}}function Ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rh(t){if(_e){var e=St;if(e){var n=e;if(!Bm(t,e)){if(Ah(t))throw Error(F(418));e=sr(n.nextSibling);var r=At;e&&Bm(t,e)?m_(r,n):(t.flags=t.flags&-4097|2,_e=!1,At=t)}}else{if(Ah(t))throw Error(F(418));t.flags=t.flags&-4097|2,_e=!1,At=t}}}function Hm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function Ca(t){if(t!==At)return!1;if(!_e)return Hm(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Th(t.type,t.memoizedProps)),e&&(e=St)){if(Ah(t))throw g_(),Error(F(418));for(;e;)m_(t,e),e=sr(e.nextSibling)}if(Hm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=At?sr(t.stateNode.nextSibling):null;return!0}function g_(){for(var t=St;t;)t=sr(t.nextSibling)}function Qi(){St=At=null,_e=!1}function Bd(t){qt===null?qt=[t]:qt.push(t)}var z1=Vn.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qm(t){var e=t._init;return e(t._payload)}function y_(t){function e(w,_){if(t){var T=w.deletions;T===null?(w.deletions=[_],w.flags|=16):T.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=ur(w,_),w.index=0,w.sibling=null,w}function s(w,_,T){return w.index=T,t?(T=w.alternate,T!==null?(T=T.index,T<_?(w.flags|=2,_):T):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,T,b){return _===null||_.tag!==6?(_=Oc(T,w.mode,b),_.return=w,_):(_=i(_,T),_.return=w,_)}function u(w,_,T,b){var L=T.type;return L===xi?f(w,_,T.props.children,b,T.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===qn&&qm(L)===_.type)?(b=i(_,T.props),b.ref=js(w,_,T),b.return=w,b):(b=Za(T.type,T.key,T.props,null,w.mode,b),b.ref=js(w,_,T),b.return=w,b)}function c(w,_,T,b){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Lc(T,w.mode,b),_.return=w,_):(_=i(_,T.children||[]),_.return=w,_)}function f(w,_,T,b,L){return _===null||_.tag!==7?(_=Gr(T,w.mode,b,L),_.return=w,_):(_=i(_,T),_.return=w,_)}function m(w,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Oc(""+_,w.mode,T),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case va:return T=Za(_.type,_.key,_.props,null,w.mode,T),T.ref=js(w,null,_),T.return=w,T;case Si:return _=Lc(_,w.mode,T),_.return=w,_;case qn:var b=_._init;return m(w,b(_._payload),T)}if(Hs(_)||Ds(_))return _=Gr(_,w.mode,T,null),_.return=w,_;ka(w,_)}return null}function g(w,_,T,b){var L=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return L!==null?null:l(w,_,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case va:return T.key===L?u(w,_,T,b):null;case Si:return T.key===L?c(w,_,T,b):null;case qn:return L=T._init,g(w,_,L(T._payload),b)}if(Hs(T)||Ds(T))return L!==null?null:f(w,_,T,b,null);ka(w,T)}return null}function A(w,_,T,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(T)||null,l(_,w,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case va:return w=w.get(b.key===null?T:b.key)||null,u(_,w,b,L);case Si:return w=w.get(b.key===null?T:b.key)||null,c(_,w,b,L);case qn:var j=b._init;return A(w,_,T,j(b._payload),L)}if(Hs(b)||Ds(b))return w=w.get(T)||null,f(_,w,b,L,null);ka(_,b)}return null}function R(w,_,T,b){for(var L=null,j=null,E=_,v=_=0,I=null;E!==null&&v<T.length;v++){E.index>v?(I=E,E=null):I=E.sibling;var x=g(w,E,T[v],b);if(x===null){E===null&&(E=I);break}t&&E&&x.alternate===null&&e(w,E),_=s(x,_,v),j===null?L=x:j.sibling=x,j=x,E=I}if(v===T.length)return n(w,E),_e&&Mr(w,v),L;if(E===null){for(;v<T.length;v++)E=m(w,T[v],b),E!==null&&(_=s(E,_,v),j===null?L=E:j.sibling=E,j=E);return _e&&Mr(w,v),L}for(E=r(w,E);v<T.length;v++)I=A(E,w,v,T[v],b),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?v:I.key),_=s(I,_,v),j===null?L=I:j.sibling=I,j=I);return t&&E.forEach(function(C){return e(w,C)}),_e&&Mr(w,v),L}function P(w,_,T,b){var L=Ds(T);if(typeof L!="function")throw Error(F(150));if(T=L.call(T),T==null)throw Error(F(151));for(var j=L=null,E=_,v=_=0,I=null,x=T.next();E!==null&&!x.done;v++,x=T.next()){E.index>v?(I=E,E=null):I=E.sibling;var C=g(w,E,x.value,b);if(C===null){E===null&&(E=I);break}t&&E&&C.alternate===null&&e(w,E),_=s(C,_,v),j===null?L=C:j.sibling=C,j=C,E=I}if(x.done)return n(w,E),_e&&Mr(w,v),L;if(E===null){for(;!x.done;v++,x=T.next())x=m(w,x.value,b),x!==null&&(_=s(x,_,v),j===null?L=x:j.sibling=x,j=x);return _e&&Mr(w,v),L}for(E=r(w,E);!x.done;v++,x=T.next())x=A(E,w,v,x.value,b),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?v:x.key),_=s(x,_,v),j===null?L=x:j.sibling=x,j=x);return t&&E.forEach(function(k){return e(w,k)}),_e&&Mr(w,v),L}function V(w,_,T,b){if(typeof T=="object"&&T!==null&&T.type===xi&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case va:e:{for(var L=T.key,j=_;j!==null;){if(j.key===L){if(L=T.type,L===xi){if(j.tag===7){n(w,j.sibling),_=i(j,T.props.children),_.return=w,w=_;break e}}else if(j.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===qn&&qm(L)===j.type){n(w,j.sibling),_=i(j,T.props),_.ref=js(w,j,T),_.return=w,w=_;break e}n(w,j);break}else e(w,j);j=j.sibling}T.type===xi?(_=Gr(T.props.children,w.mode,b,T.key),_.return=w,w=_):(b=Za(T.type,T.key,T.props,null,w.mode,b),b.ref=js(w,_,T),b.return=w,w=b)}return o(w);case Si:e:{for(j=T.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(w,_.sibling),_=i(_,T.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Lc(T,w.mode,b),_.return=w,w=_}return o(w);case qn:return j=T._init,V(w,_,j(T._payload),b)}if(Hs(T))return R(w,_,T,b);if(Ds(T))return P(w,_,T,b);ka(w,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,T),_.return=w,w=_):(n(w,_),_=Oc(T,w.mode,b),_.return=w,w=_),o(w)):n(w,_)}return V}var Xi=y_(!0),v_=y_(!1),Sl=Sr(null),xl=null,Di=null,Hd=null;function qd(){Hd=Di=xl=null}function Wd(t){var e=Sl.current;me(Sl),t._currentValue=e}function Ch(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zi(t,e){xl=t,Hd=Di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(Hd!==t)if(t={context:t,memoizedValue:e,next:null},Di===null){if(xl===null)throw Error(F(308));Di=t,xl.dependencies={lanes:0,firstContext:t}}else Di=Di.next=t;return e}var $r=null;function Gd(t){$r===null?$r=[t]:$r.push(t)}function __(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Gd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cn(t,r)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function Kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function w_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cn(t,n)}return i=r.interleaved,i===null?(e.next=e,Gd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cn(t,n)}function Ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dd(t,n)}}function Wm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(g=e,A=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){m=R.call(A,m,g);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,g=typeof R=="function"?R.call(A,m,g):R,g==null)break e;m=Ie({},m,g);break e;case 2:Wn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=A,u=m):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=m}}function Gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Ko={},an=Sr(Ko),ko=Sr(Ko),Po=Sr(Ko);function Br(t){if(t===Ko)throw Error(F(174));return t}function Qd(t,e){switch(he(Po,e),he(ko,t),he(an,Ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lh(e,t)}me(an),he(an,e)}function Yi(){me(an),me(ko),me(Po)}function E_(t){Br(Po.current);var e=Br(an.current),n=lh(e,t.type);e!==n&&(he(ko,t),he(an,n))}function Xd(t){ko.current===t&&(me(an),me(ko))}var we=Sr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kc=[];function Yd(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var Ka=Vn.ReactCurrentDispatcher,Pc=Vn.ReactCurrentBatchConfig,Yr=0,Te=null,Oe=null,Be=null,Cl=!1,so=!1,No=0,$1=0;function Ze(){throw Error(F(321))}function Jd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function Zd(t,e,n,r,i,s){if(Yr=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ka.current=t===null||t.memoizedState===null?W1:G1,t=n(r,i),so){s=0;do{if(so=!1,No=0,25<=s)throw Error(F(301));s+=1,Be=Oe=null,e.updateQueue=null,Ka.current=K1,t=n(r,i)}while(so)}if(Ka.current=kl,e=Oe!==null&&Oe.next!==null,Yr=0,Be=Oe=Te=null,Cl=!1,e)throw Error(F(300));return t}function ef(){var t=No!==0;return No=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Te.memoizedState=Be=t:Be=Be.next=t,Be}function Ut(){if(Oe===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Be===null?Te.memoizedState:Be.next;if(e!==null)Be=e,Oe=t;else{if(t===null)throw Error(F(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Be===null?Te.memoizedState=Be=t:Be=Be.next=t}return Be}function bo(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Yr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Te.lanes|=f,Jr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Qt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,Jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function T_(){}function I_(t,e){var n=Te,r=Ut(),i=e(),s=!Qt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,tf(A_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Do(9,x_.bind(null,n,r,i,e),void 0,null),He===null)throw Error(F(349));Yr&30||S_(n,e,i)}return i}function S_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x_(t,e,n,r){e.value=n,e.getSnapshot=r,R_(e)&&C_(t)}function A_(t,e,n){return n(function(){R_(e)&&C_(t)})}function R_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function C_(t){var e=Cn(t,1);e!==null&&Kt(e,t,1,-1)}function Km(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:t},e.queue=t,t=t.dispatch=q1.bind(null,Te,t),[e.memoizedState,t]}function Do(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function k_(){return Ut().memoizedState}function Qa(t,e,n,r){var i=nn();Te.flags|=t,i.memoizedState=Do(1|e,n,void 0,r===void 0?null:r)}function cu(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Jd(r,o.deps)){i.memoizedState=Do(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Do(1|e,n,s,r)}function Qm(t,e){return Qa(8390656,8,t,e)}function tf(t,e){return cu(2048,8,t,e)}function P_(t,e){return cu(4,2,t,e)}function N_(t,e){return cu(4,4,t,e)}function b_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function D_(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,b_.bind(null,e,t),n)}function nf(){}function V_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function O_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function L_(t,e,n){return Yr&21?(Qt(n,e)||(n=zv(),Te.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function B1(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Pc.transition;Pc.transition={};try{t(!1),e()}finally{ue=n,Pc.transition=r}}function M_(){return Ut().memoizedState}function H1(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},j_(t))F_(e,n);else if(n=__(t,e,n,r),n!==null){var i=ct();Kt(n,t,r,i),U_(n,e,r)}}function q1(t,e,n){var r=lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(j_(t))F_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Qt(l,o)){var u=e.interleaved;u===null?(i.next=i,Gd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=__(t,e,i,r),n!==null&&(i=ct(),Kt(n,t,r,i),U_(n,e,r))}}function j_(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function F_(t,e){so=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function U_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dd(t,n)}}var kl={readContext:Ft,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},W1={readContext:Ft,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:Qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,b_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=H1.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:Km,useDebugValue:nf,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=Km(!1),e=t[0];return t=B1.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=nn();if(_e){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),He===null)throw Error(F(349));Yr&30||S_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qm(A_.bind(null,r,s,t),[t]),r.flags|=2048,Do(9,x_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=He.identifierPrefix;if(_e){var n=En,r=wn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},G1={readContext:Ft,useCallback:V_,useContext:Ft,useEffect:tf,useImperativeHandle:D_,useInsertionEffect:P_,useLayoutEffect:N_,useMemo:O_,useReducer:Nc,useRef:k_,useState:function(){return Nc(bo)},useDebugValue:nf,useDeferredValue:function(t){var e=Ut();return L_(e,Oe.memoizedState,t)},useTransition:function(){var t=Nc(bo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:T_,useSyncExternalStore:I_,useId:M_,unstable_isNewReconciler:!1},K1={readContext:Ft,useCallback:V_,useContext:Ft,useEffect:tf,useImperativeHandle:D_,useInsertionEffect:P_,useLayoutEffect:N_,useMemo:O_,useReducer:bc,useRef:k_,useState:function(){return bc(bo)},useDebugValue:nf,useDeferredValue:function(t){var e=Ut();return Oe===null?e.memoizedState=t:L_(e,Oe.memoizedState,t)},useTransition:function(){var t=bc(bo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:T_,useSyncExternalStore:I_,useId:M_,unstable_isNewReconciler:!1};function Bt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=lr(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Kt(e,t,i,r),Ga(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=lr(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Kt(e,t,i,r),Ga(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=lr(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=or(t,i,r),e!==null&&(Kt(e,t,r,n),Ga(e,t,r))}};function Xm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(n,r)||!xo(i,s):!0}function z_(t,e,n){var r=!1,i=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=vt(e)?Qr:st.current,r=e.contextTypes,s=(r=r!=null)?Ki(t,i):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ym(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function Ph(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Kd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=vt(e)?Qr:st.current,i.context=Ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hu.enqueueReplaceState(i,i.state,null),Al(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ji(t,e){try{var n="",r=e;do n+=TI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Q1=typeof WeakMap=="function"?WeakMap:Map;function $_(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nl||(Nl=!0,zh=r),Nh(t,e)},n}function B_(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nh(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Q1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uS.bind(null,t,e,n),e.then(t,t))}function Zm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function eg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var X1=Vn.ReactCurrentOwner,gt=!1;function ut(t,e,n,r){e.child=t===null?v_(e,null,n,r):Xi(e,t.child,n,r)}function tg(t,e,n,r,i){n=n.render;var s=e.ref;return zi(e,i),r=Zd(t,e,n,r,s,i),n=ef(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(_e&&n&&zd(e),e.flags|=1,ut(t,e,r,i),e.child)}function ng(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!hf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,H_(t,e,s,r,i)):(t=Za(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(o,r)&&t.ref===e.ref)return kn(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function H_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xo(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,kn(t,e,i)}return bh(t,e,n,r,i)}function q_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Oi,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Oi,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Oi,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(Oi,It),It|=r;return ut(t,e,i,n),e.child}function W_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bh(t,e,n,r,i){var s=vt(n)?Qr:st.current;return s=Ki(e,s),zi(e,i),n=Zd(t,e,n,r,s,i),r=ef(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(_e&&r&&zd(e),e.flags|=1,ut(t,e,n,i),e.child)}function rg(t,e,n,r,i){if(vt(n)){var s=!0;El(e)}else s=!1;if(zi(e,i),e.stateNode===null)Xa(t,e),z_(e,n,r),Ph(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ft(c):(c=vt(n)?Qr:st.current,c=Ki(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ym(e,o,r,c),Wn=!1;var g=e.memoizedState;o.state=g,Al(e,r,o,i),u=e.memoizedState,l!==r||g!==u||yt.current||Wn?(typeof f=="function"&&(kh(e,n,f,r),u=e.memoizedState),(l=Wn||Xm(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,w_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Bt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=vt(n)?Qr:st.current,u=Ki(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Ym(e,o,r,u),Wn=!1,g=e.memoizedState,o.state=g,Al(e,r,o,i);var R=e.memoizedState;l!==m||g!==R||yt.current||Wn?(typeof A=="function"&&(kh(e,n,A,r),R=e.memoizedState),(c=Wn||Xm(e,n,c,r,g,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Dh(t,e,n,r,s,i)}function Dh(t,e,n,r,i,s){W_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$m(e,n,!1),kn(t,e,s);r=e.stateNode,X1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xi(e,t.child,null,s),e.child=Xi(e,null,l,s)):ut(t,e,l,s),e.memoizedState=r.state,i&&$m(e,n,!0),e.child}function G_(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),Qd(t,e.containerInfo)}function ig(t,e,n,r,i){return Qi(),Bd(i),e.flags|=256,ut(t,e,n,r),e.child}var Vh={dehydrated:null,treeContext:null,retryLane:0};function Oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function K_(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(we,i&1),t===null)return Rh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pu(o,r,0,null),t=Gr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Oh(n),e.memoizedState=Vh,t):rf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Y1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ur(l,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vh,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rf(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pa(t,e,n,r){return r!==null&&Bd(r),Xi(e,t.child,null,n),t=rf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Y1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Dc(Error(F(422))),Pa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pu({mode:"visible",children:r.children},i,0,null),s=Gr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xi(e,t.child,null,o),e.child.memoizedState=Oh(o),e.memoizedState=Vh,s);if(!(e.mode&1))return Pa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Dc(s,r,void 0),Pa(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cn(t,i),Kt(r,t,i,-1))}return cf(),r=Dc(Error(F(421))),Pa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=sr(i.nextSibling),At=e,_e=!0,qt=null,t!==null&&(bt[Dt++]=wn,bt[Dt++]=En,bt[Dt++]=Xr,wn=t.id,En=t.overflow,Xr=e),e=rf(e,r.children),e.flags|=4096,e)}function sg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ch(t.return,e,n)}function Vc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Q_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,n,e);else if(t.tag===19)sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vc(e,!0,n,null,s);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function J1(t,e,n){switch(e.tag){case 3:G_(e),Qi();break;case 5:E_(e);break;case 1:vt(e.type)&&El(e);break;case 4:Qd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(Sl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?K_(t,e,n):(he(we,we.current&1),t=kn(t,e,n),t!==null?t.sibling:null);he(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Q_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,q_(t,e,n)}return kn(t,e,n)}var X_,Lh,Y_,J_;X_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lh=function(){};Y_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Br(an.current);var s=null;switch(n){case"input":i=ih(t,i),r=ih(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=ah(t,i),r=ah(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_l)}uh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};J_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fs(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Z1(t,e,n){var r=e.pendingProps;switch($d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return vt(e.type)&&wl(),et(e),null;case 3:return r=e.stateNode,Yi(),me(yt),me(st),Yd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(Hh(qt),qt=null))),Lh(t,e),et(e),null;case 5:Xd(e);var i=Br(Po.current);if(n=e.type,t!==null&&e.stateNode!=null)Y_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return et(e),null}if(t=Br(an.current),Ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[sn]=e,r[Co]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Ws.length;i++)fe(Ws[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":pm(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":gm(r,s),fe("invalid",r)}uh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ra(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ra(r.textContent,l,t),i=["children",""+l]):vo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":_a(r),mm(r,s,!0);break;case"textarea":_a(r),ym(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Av(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[Co]=r,X_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ch(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ws.length;i++)fe(Ws[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":pm(t,r),i=ih(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),fe("invalid",t);break;case"textarea":gm(t,r),i=ah(t,r),fe("invalid",t);break;default:i=r}uh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?kv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Rv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&_o(t,u):typeof u=="number"&&_o(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&Rd(t,s,u,o))}switch(n){case"input":_a(t),mm(t,r,!1);break;case"textarea":_a(t),ym(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)J_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Br(Po.current),Br(an.current),Ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(s=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:Ra(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ra(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return et(e),null;case 13:if(me(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&St!==null&&e.mode&1&&!(e.flags&128))g_(),Qi(),e.flags|=98560,s=!1;else if(s=Ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[sn]=e}else Qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else qt!==null&&(Hh(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Me===0&&(Me=3):cf())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return Yi(),Lh(t,e),t===null&&Ao(e.stateNode.containerInfo),et(e),null;case 10:return Wd(e.type._context),et(e),null;case 17:return vt(e.type)&&wl(),et(e),null;case 19:if(me(we),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fs(s,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rl(t),o!==null){for(e.flags|=128,Fs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>Zi&&(e.flags|=128,r=!0,Fs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return et(e),null}else 2*ke()-s.renderingStartTime>Zi&&n!==1073741824&&(e.flags|=128,r=!0,Fs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=we.current,he(we,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return uf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function eS(t,e){switch($d(e),e.tag){case 1:return vt(e.type)&&wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yi(),me(yt),me(st),Yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xd(e),null;case 13:if(me(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(we),null;case 4:return Yi(),null;case 10:return Wd(e.type._context),null;case 22:case 23:return uf(),null;case 24:return null;default:return null}}var Na=!1,rt=!1,tS=typeof WeakSet=="function"?WeakSet:Set,B=null;function Vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Mh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var og=!1;function nS(t,e){if(wh=gl,t=r_(),Ud(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var A;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)g=m,m=A;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eh={focusedElem:t,selectionRange:n},gl=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,V=R.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:Bt(e.type,P),V);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Ae(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return R=og,og=!1,R}function oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mh(e,n,s)}i=i.next}while(i!==r)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Z_(t){var e=t.alternate;e!==null&&(t.alternate=null,Z_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[Co],delete e[Sh],delete e[j1],delete e[F1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ew(t){return t.tag===5||t.tag===3||t.tag===4}function ag(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ew(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}function Uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Uh(t,e,n),t=t.sibling;t!==null;)Uh(t,e,n),t=t.sibling}var qe=null,Ht=!1;function Bn(t,e,n){for(n=n.child;n!==null;)tw(t,e,n),n=n.sibling}function tw(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:rt||Vi(n,e);case 6:var r=qe,i=Ht;qe=null,Bn(t,e,n),qe=r,Ht=i,qe!==null&&(Ht?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Ht?(t=qe,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),Io(t)):Rc(qe,n.stateNode));break;case 4:r=qe,i=Ht,qe=n.stateNode.containerInfo,Ht=!0,Bn(t,e,n),qe=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mh(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!rt&&(Vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Bn(t,e,n),rt=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function lg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tS),e.forEach(function(r){var i=hS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Ht=!1;break e;case 3:qe=l.stateNode.containerInfo,Ht=!0;break e;case 4:qe=l.stateNode.containerInfo,Ht=!0;break e}l=l.return}if(qe===null)throw Error(F(160));tw(s,o,i),qe=null,Ht=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nw(e,t),e=e.sibling}function nw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),tn(t),r&4){try{oo(3,t,t.return),du(3,t)}catch(P){Ae(t,t.return,P)}try{oo(5,t,t.return)}catch(P){Ae(t,t.return,P)}}break;case 1:$t(e,t),tn(t),r&512&&n!==null&&Vi(n,n.return);break;case 5:if($t(e,t),tn(t),r&512&&n!==null&&Vi(n,n.return),t.flags&32){var i=t.stateNode;try{_o(i,"")}catch(P){Ae(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Sv(i,s),ch(l,o);var c=ch(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?kv(i,m):f==="dangerouslySetInnerHTML"?Rv(i,m):f==="children"?_o(i,m):Rd(i,f,m,c)}switch(l){case"input":sh(i,s);break;case"textarea":xv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Mi(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?Mi(i,!!s.multiple,s.defaultValue,!0):Mi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Co]=s}catch(P){Ae(t,t.return,P)}}break;case 6:if($t(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ae(t,t.return,P)}}break;case 3:if($t(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Io(e.containerInfo)}catch(P){Ae(t,t.return,P)}break;case 4:$t(e,t),tn(t);break;case 13:$t(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(af=ke())),r&4&&lg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(c=rt)||f,$t(e,t),rt=c):$t(e,t),tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(m=B=f;B!==null;){switch(g=B,A=g.child,g.tag){case 0:case 11:case 14:case 15:oo(4,g,g.return);break;case 1:Vi(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Ae(r,n,P)}}break;case 5:Vi(g,g.return);break;case 22:if(g.memoizedState!==null){cg(m);continue}}A!==null?(A.return=g,B=A):cg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Cv("display",o))}catch(P){Ae(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Ae(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:$t(e,t),tn(t),r&4&&lg(t);break;case 21:break;default:$t(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ew(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_o(i,""),r.flags&=-33);var s=ag(t);Uh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ag(t);Fh(t,l,o);break;default:throw Error(F(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rS(t,e,n){B=t,rw(t)}function rw(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Na;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||rt;l=Na;var c=rt;if(Na=o,(rt=u)&&!c)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?hg(i):u!==null?(u.return=o,B=u):hg(i);for(;s!==null;)B=s,rw(s),s=s.sibling;B=i,Na=l,rt=c}ug(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):ug(t)}}function ug(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||du(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Io(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}rt||e.flags&512&&jh(e)}catch(g){Ae(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function cg(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function hg(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{jh(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{jh(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var iS=Math.ceil,Pl=Vn.ReactCurrentDispatcher,sf=Vn.ReactCurrentOwner,Mt=Vn.ReactCurrentBatchConfig,ae=0,He=null,Ne=null,Ke=0,It=0,Oi=Sr(0),Me=0,Vo=null,Jr=0,fu=0,of=0,ao=null,pt=null,af=0,Zi=1/0,vn=null,Nl=!1,zh=null,ar=null,ba=!1,er=null,bl=0,lo=0,$h=null,Ya=-1,Ja=0;function ct(){return ae&6?ke():Ya!==-1?Ya:Ya=ke()}function lr(t){return t.mode&1?ae&2&&Ke!==0?Ke&-Ke:z1.transition!==null?(Ja===0&&(Ja=zv()),Ja):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Kv(t.type)),t):1}function Kt(t,e,n,r){if(50<lo)throw lo=0,$h=null,Error(F(185));qo(t,n,r),(!(ae&2)||t!==He)&&(t===He&&(!(ae&2)&&(fu|=n),Me===4&&Kn(t,Ke)),_t(t,r),n===1&&ae===0&&!(e.mode&1)&&(Zi=ke()+500,uu&&xr()))}function _t(t,e){var n=t.callbackNode;zI(t,e);var r=ml(t,t===He?Ke:0);if(r===0)n!==null&&wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wm(n),e===1)t.tag===0?U1(dg.bind(null,t)):f_(dg.bind(null,t)),L1(function(){!(ae&6)&&xr()}),n=null;else{switch($v(r)){case 1:n=bd;break;case 4:n=Fv;break;case 16:n=pl;break;case 536870912:n=Uv;break;default:n=pl}n=hw(n,iw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iw(t,e){if(Ya=-1,Ja=0,ae&6)throw Error(F(327));var n=t.callbackNode;if($i()&&t.callbackNode!==n)return null;var r=ml(t,t===He?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dl(t,r);else{e=r;var i=ae;ae|=2;var s=ow();(He!==t||Ke!==e)&&(vn=null,Zi=ke()+500,Wr(t,e));do try{aS();break}catch(l){sw(t,l)}while(!0);qd(),Pl.current=s,ae=i,Ne!==null?e=0:(He=null,Ke=0,e=Me)}if(e!==0){if(e===2&&(i=mh(t),i!==0&&(r=i,e=Bh(t,i))),e===1)throw n=Vo,Wr(t,0),Kn(t,r),_t(t,ke()),n;if(e===6)Kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!sS(i)&&(e=Dl(t,r),e===2&&(s=mh(t),s!==0&&(r=s,e=Bh(t,s))),e===1))throw n=Vo,Wr(t,0),Kn(t,r),_t(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:jr(t,pt,vn);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=af+500-ke(),10<e)){if(ml(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ih(jr.bind(null,t,pt,vn),e);break}jr(t,pt,vn);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iS(r/1960))-r,10<r){t.timeoutHandle=Ih(jr.bind(null,t,pt,vn),r);break}jr(t,pt,vn);break;case 5:jr(t,pt,vn);break;default:throw Error(F(329))}}}return _t(t,ke()),t.callbackNode===n?iw.bind(null,t):null}function Bh(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=pt,pt=n,e!==null&&Hh(e)),t}function Hh(t){pt===null?pt=t:pt.push.apply(pt,t)}function sS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~of,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function dg(t){if(ae&6)throw Error(F(327));$i();var e=ml(t,0);if(!(e&1))return _t(t,ke()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var r=mh(t);r!==0&&(e=r,n=Bh(t,r))}if(n===1)throw n=Vo,Wr(t,0),Kn(t,e),_t(t,ke()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,pt,vn),_t(t,ke()),null}function lf(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Zi=ke()+500,uu&&xr())}}function Zr(t){er!==null&&er.tag===0&&!(ae&6)&&$i();var e=ae;ae|=1;var n=Mt.transition,r=ue;try{if(Mt.transition=null,ue=1,t)return t()}finally{ue=r,Mt.transition=n,ae=e,!(ae&6)&&xr()}}function uf(){It=Oi.current,me(Oi)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,O1(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch($d(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wl();break;case 3:Yi(),me(yt),me(st),Yd();break;case 5:Xd(r);break;case 4:Yi();break;case 13:me(we);break;case 19:me(we);break;case 10:Wd(r.type._context);break;case 22:case 23:uf()}n=n.return}if(He=t,Ne=t=ur(t.current,null),Ke=It=e,Me=0,Vo=null,of=fu=Jr=0,pt=ao=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$r=null}return t}function sw(t,e){do{var n=Ne;try{if(qd(),Ka.current=kl,Cl){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cl=!1}if(Yr=0,Be=Oe=Te=null,so=!1,No=0,sf.current=null,n===null||n.return===null){Me=1,Vo=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Zm(o);if(A!==null){A.flags&=-257,eg(A,o,l,s,e),A.mode&1&&Jm(s,c,e),e=A,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){Jm(s,c,e),cf();break e}u=Error(F(426))}}else if(_e&&l.mode&1){var V=Zm(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),eg(V,o,l,s,e),Bd(Ji(u,l));break e}}s=u=Ji(u,l),Me!==4&&(Me=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=$_(s,u,e);Wm(s,w);break e;case 1:l=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(ar===null||!ar.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=B_(s,l,e);Wm(s,b);break e}}s=s.return}while(s!==null)}lw(n)}catch(L){e=L,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function ow(){var t=Pl.current;return Pl.current=kl,t===null?kl:t}function cf(){(Me===0||Me===3||Me===2)&&(Me=4),He===null||!(Jr&268435455)&&!(fu&268435455)||Kn(He,Ke)}function Dl(t,e){var n=ae;ae|=2;var r=ow();(He!==t||Ke!==e)&&(vn=null,Wr(t,e));do try{oS();break}catch(i){sw(t,i)}while(!0);if(qd(),ae=n,Pl.current=r,Ne!==null)throw Error(F(261));return He=null,Ke=0,Me}function oS(){for(;Ne!==null;)aw(Ne)}function aS(){for(;Ne!==null&&!bI();)aw(Ne)}function aw(t){var e=cw(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?lw(t):Ne=e,sf.current=null}function lw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eS(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,Ne=null;return}}else if(n=Z1(n,e,It),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Me===0&&(Me=5)}function jr(t,e,n){var r=ue,i=Mt.transition;try{Mt.transition=null,ue=1,lS(t,e,n,r)}finally{Mt.transition=i,ue=r}return null}function lS(t,e,n,r){do $i();while(er!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($I(t,s),t===He&&(Ne=He=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,hw(pl,function(){return $i(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=ue;ue=1;var l=ae;ae|=4,sf.current=null,nS(t,n),nw(n,t),C1(Eh),gl=!!wh,Eh=wh=null,t.current=n,rS(n),DI(),ae=l,ue=o,Mt.transition=s}else t.current=n;if(ba&&(ba=!1,er=t,bl=i),s=t.pendingLanes,s===0&&(ar=null),LI(n.stateNode),_t(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,t=zh,zh=null,t;return bl&1&&t.tag!==0&&$i(),s=t.pendingLanes,s&1?t===$h?lo++:(lo=0,$h=t):lo=0,xr(),null}function $i(){if(er!==null){var t=$v(bl),e=Mt.transition,n=ue;try{if(Mt.transition=null,ue=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,bl=0,ae&6)throw Error(F(331));var i=ae;for(ae|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(B=c;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:oo(8,f,s)}var m=f.child;if(m!==null)m.return=f,B=m;else for(;B!==null;){f=B;var g=f.sibling,A=f.return;if(Z_(f),f===c){B=null;break}if(g!==null){g.return=A,B=g;break}B=A}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var V=P.sibling;P.sibling=null,P=V}while(P!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,B=w;break e}B=s.return}}var _=t.current;for(B=_;B!==null;){o=B;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,B=T;else e:for(o=_;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:du(9,l)}}catch(L){Ae(l,l.return,L)}if(l===o){B=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,B=b;break e}B=l.return}}if(ae=i,xr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(iu,t)}catch{}r=!0}return r}finally{ue=n,Mt.transition=e}}return!1}function fg(t,e,n){e=Ji(n,e),e=$_(t,e,1),t=or(t,e,1),e=ct(),t!==null&&(qo(t,1,e),_t(t,e))}function Ae(t,e,n){if(t.tag===3)fg(t,t,n);else for(;e!==null;){if(e.tag===3){fg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=Ji(n,t),t=B_(e,t,1),e=or(e,t,1),t=ct(),e!==null&&(qo(e,1,t),_t(e,t));break}}e=e.return}}function uS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Ke&n)===n&&(Me===4||Me===3&&(Ke&130023424)===Ke&&500>ke()-af?Wr(t,0):of|=n),_t(t,e)}function uw(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=ct();t=Cn(t,e),t!==null&&(qo(t,e,n),_t(t,n))}function cS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uw(t,n)}function hS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),uw(t,n)}var cw;cw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,J1(t,e,n);gt=!!(t.flags&131072)}else gt=!1,_e&&e.flags&1048576&&p_(e,Il,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xa(t,e),t=e.pendingProps;var i=Ki(e,st.current);zi(e,n),i=Zd(null,e,r,t,i,n);var s=ef();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,El(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kd(e),i.updater=hu,e.stateNode=i,i._reactInternals=e,Ph(e,r,t,n),e=Dh(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&zd(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fS(r),t=Bt(r,t),i){case 0:e=bh(null,e,r,t,n);break e;case 1:e=rg(null,e,r,t,n);break e;case 11:e=tg(null,e,r,t,n);break e;case 14:e=ng(null,e,r,Bt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),bh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),rg(t,e,r,i,n);case 3:e:{if(G_(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,w_(t,e),Al(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ji(Error(F(423)),e),e=ig(t,e,r,n,i);break e}else if(r!==i){i=Ji(Error(F(424)),e),e=ig(t,e,r,n,i);break e}else for(St=sr(e.stateNode.containerInfo.firstChild),At=e,_e=!0,qt=null,n=v_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){e=kn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return E_(e),t===null&&Rh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Th(r,i)?o=null:s!==null&&Th(r,s)&&(e.flags|=32),W_(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Rh(e),null;case 13:return K_(t,e,n);case 4:return Qd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xi(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),tg(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(Sl,r._currentValue),r._currentValue=o,s!==null)if(Qt(s.value,o)){if(s.children===i.children&&!yt.current){e=kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Sn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ch(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ch(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zi(e,n),i=Ft(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),ng(t,e,r,i,n);case 15:return H_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Xa(t,e),e.tag=1,vt(r)?(t=!0,El(e)):t=!1,zi(e,n),z_(e,r,i),Ph(e,r,i,n),Dh(null,e,r,!0,t,n);case 19:return Q_(t,e,n);case 22:return q_(t,e,n)}throw Error(F(156,e.tag))};function hw(t,e){return jv(t,e)}function dS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new dS(t,e,n,r)}function hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fS(t){if(typeof t=="function")return hf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kd)return 11;if(t===Pd)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Za(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")hf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xi:return Gr(n.children,i,s,e);case Cd:o=8,i|=8;break;case eh:return t=Lt(12,n,e,i|2),t.elementType=eh,t.lanes=s,t;case th:return t=Lt(13,n,e,i),t.elementType=th,t.lanes=s,t;case nh:return t=Lt(19,n,e,i),t.elementType=nh,t.lanes=s,t;case Ev:return pu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _v:o=10;break e;case wv:o=9;break e;case kd:o=11;break e;case Pd:o=14;break e;case qn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gr(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function pu(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=Ev,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function Lc(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gc(0),this.expirationTimes=gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function df(t,e,n,r,i,s,o,l,u){return t=new pS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(s),t}function mS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function dw(t){if(!t)return mr;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(vt(n))return d_(t,n,e)}return e}function fw(t,e,n,r,i,s,o,l,u){return t=df(n,r,!0,t,i,s,o,l,u),t.context=dw(null),n=t.current,r=ct(),i=lr(n),s=Sn(r,i),s.callback=e??null,or(n,s,i),t.current.lanes=i,qo(t,i,r),_t(t,r),t}function mu(t,e,n,r){var i=e.current,s=ct(),o=lr(i);return n=dw(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(i,e,o),t!==null&&(Kt(t,i,o,s),Ga(t,i,o)),o}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ff(t,e){pg(t,e),(t=t.alternate)&&pg(t,e)}function gS(){return null}var pw=typeof reportError=="function"?reportError:function(t){console.error(t)};function pf(t){this._internalRoot=t}gu.prototype.render=pf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));mu(t,e,null,null)};gu.prototype.unmount=pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){mu(null,t,null,null)}),e[Rn]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=qv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&Gv(t)}};function mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mg(){}function yS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Vl(o);s.call(c)}}var o=fw(e,r,t,0,null,!1,!1,"",mg);return t._reactRootContainer=o,t[Rn]=o.current,Ao(t.nodeType===8?t.parentNode:t),Zr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Vl(u);l.call(c)}}var u=df(t,0,!1,null,null,!1,!1,"",mg);return t._reactRootContainer=u,t[Rn]=u.current,Ao(t.nodeType===8?t.parentNode:t),Zr(function(){mu(e,u,n,r)}),u}function vu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Vl(o);l.call(u)}}mu(e,o,t,i)}else o=yS(n,e,t,i,r);return Vl(o)}Bv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qs(e.pendingLanes);n!==0&&(Dd(e,n|1),_t(e,ke()),!(ae&6)&&(Zi=ke()+500,xr()))}break;case 13:Zr(function(){var r=Cn(t,1);if(r!==null){var i=ct();Kt(r,t,1,i)}}),ff(t,1)}};Vd=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=ct();Kt(e,t,134217728,n)}ff(t,134217728)}};Hv=function(t){if(t.tag===13){var e=lr(t),n=Cn(t,e);if(n!==null){var r=ct();Kt(n,t,e,r)}ff(t,e)}};qv=function(){return ue};Wv=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};dh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lu(r);if(!i)throw Error(F(90));Iv(r),sh(r,i)}}}break;case"textarea":xv(t,n);break;case"select":e=n.value,e!=null&&Mi(t,!!n.multiple,e,!1)}};bv=lf;Dv=Zr;var vS={usingClientEntryPoint:!1,Events:[Go,ki,lu,Pv,Nv,lf]},Us={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_S={bundleType:Us.bundleType,version:Us.version,rendererPackageName:Us.rendererPackageName,rendererConfig:Us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lv(t),t===null?null:t.stateNode},findFiberByHostInstance:Us.findFiberByHostInstance||gS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{iu=Da.inject(_S),on=Da}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vS;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mf(e))throw Error(F(200));return mS(t,e,null,n)};kt.createRoot=function(t,e){if(!mf(t))throw Error(F(299));var n=!1,r="",i=pw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=df(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,Ao(t.nodeType===8?t.parentNode:t),new pf(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Lv(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return Zr(t)};kt.hydrate=function(t,e,n){if(!yu(e))throw Error(F(200));return vu(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!mf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=pw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fw(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,Ao(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gu(e)};kt.render=function(t,e,n){if(!yu(e))throw Error(F(200));return vu(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!yu(t))throw Error(F(40));return t._reactRootContainer?(Zr(function(){vu(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};kt.unstable_batchedUpdates=lf;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return vu(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function mw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mw)}catch(t){console.error(t)}}mw(),mv.exports=kt;var wS=mv.exports,gw,gg=wS;gw=gg.createRoot,gg.hydrateRoot;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=()=>{};var yg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(g=64)),r.push(n[f],n[m],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new IS;const g=s<<2|l>>4;if(r.push(g),c!==64){const A=l<<4&240|c>>2;if(r.push(A),m!==64){const R=c<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SS=function(t){const e=yw(t);return vw.encodeByteArray(e,!0)},Ol=function(t){return SS(t).replace(/\./g,"")},_w=function(t){try{return vw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=()=>xS().__FIREBASE_DEFAULTS__,RS=()=>{if(typeof process>"u"||typeof yg>"u")return;const t=yg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_w(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return ES()||AS()||RS()||CS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ww=t=>{var e,n;return(n=(e=_u())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},kS=t=>{const e=ww(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ew=()=>{var t;return(t=_u())==null?void 0:t.config},Tw=t=>{var e;return(e=_u())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Iw(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ol(JSON.stringify(n)),Ol(JSON.stringify(o)),""].join(".")}const uo={};function bS(){const t={prod:[],emulator:[]};for(const e of Object.keys(uo))uo[e]?t.emulator.push(e):t.prod.push(e);return t}function DS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let vg=!1;function Sw(t,e){if(typeof window>"u"||typeof document>"u"||!cs(window.location.host)||uo[t]===e||uo[t]||vg)return;uo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=bS().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,A){g.setAttribute("width","24"),g.setAttribute("id",A),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{vg=!0,o()},g}function f(g,A){g.setAttribute("id",A),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=DS(r),A=n("text"),R=document.getElementById(A)||document.createElement("span"),P=n("learnmore"),V=document.getElementById(P)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const T=g.element;l(T),f(V,P);const b=c();u(_,w),T.append(_,R,V,b),document.body.appendChild(T)}s?(R.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function OS(){var e;const t=(e=_u())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jS(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FS(){return!OS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Aw(){try{return typeof indexedDB=="object"}catch{return!1}}function Rw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function US(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zS,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$S(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,l,r)}}function $S(t,e){return t.replace(BS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BS=/\{\$([^}]+)}/g;function HS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_g(s)&&_g(o)){if(!gr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _g(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qS(t,e){const n=new WS(t,e);return n.subscribe.bind(n)}class WS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Mc),i.error===void 0&&(i.error=Mc),i.complete===void 0&&(i.complete=Mc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=1e3,QS=2,XS=4*60*60*1e3,YS=.5;function wg(t,e=KS,n=QS){const r=e*Math.pow(n,t),i=Math.round(YS*r*(Math.random()-.5)*2);return Math.min(XS,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new PS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ex(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZS(t){return t===Fr?void 0:t}function ex(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const nx={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},rx=te.INFO,ix={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},sx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ix[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wu{constructor(e){this.name=e,this._logLevel=rx,this._logHandler=sx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const ox=(t,e)=>e.some(n=>t instanceof n);let Eg,Tg;function ax(){return Eg||(Eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lx(){return Tg||(Tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cw=new WeakMap,qh=new WeakMap,kw=new WeakMap,jc=new WeakMap,gf=new WeakMap;function ux(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cw.set(n,t)}).catch(()=>{}),gf.set(e,t),e}function cx(t){if(qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qh.set(t,e)}let Wh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hx(t){Wh=t(Wh)}function dx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fc(this),e,...n);return kw.set(r,e.sort?e.sort():[e]),cr(r)}:lx().includes(t)?function(...e){return t.apply(Fc(this),e),cr(Cw.get(this))}:function(...e){return cr(t.apply(Fc(this),e))}}function fx(t){return typeof t=="function"?dx(t):(t instanceof IDBTransaction&&cx(t),ox(t,ax())?new Proxy(t,Wh):t)}function cr(t){if(t instanceof IDBRequest)return ux(t);if(jc.has(t))return jc.get(t);const e=fx(t);return e!==t&&(jc.set(t,e),gf.set(e,t)),e}const Fc=t=>gf.get(t);function Pw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(cr(o.result),u.oldVersion,u.newVersion,cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const px=["get","getKey","getAll","getAllKeys","count"],mx=["put","add","delete","clear"],Uc=new Map;function Ig(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||px.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Uc.set(e,s),s}hx(t=>({...t,get:(e,n,r)=>Ig(e,n)||t.get(e,n,r),has:(e,n)=>!!Ig(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gh="@firebase/app",Sg="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new wu("@firebase/app"),vx="@firebase/app-compat",_x="@firebase/analytics-compat",wx="@firebase/analytics",Ex="@firebase/app-check-compat",Tx="@firebase/app-check",Ix="@firebase/auth",Sx="@firebase/auth-compat",xx="@firebase/database",Ax="@firebase/data-connect",Rx="@firebase/database-compat",Cx="@firebase/functions",kx="@firebase/functions-compat",Px="@firebase/installations",Nx="@firebase/installations-compat",bx="@firebase/messaging",Dx="@firebase/messaging-compat",Vx="@firebase/performance",Ox="@firebase/performance-compat",Lx="@firebase/remote-config",Mx="@firebase/remote-config-compat",jx="@firebase/storage",Fx="@firebase/storage-compat",Ux="@firebase/firestore",zx="@firebase/ai",$x="@firebase/firestore-compat",Bx="firebase",Hx="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="[DEFAULT]",qx={[Gh]:"fire-core",[vx]:"fire-core-compat",[wx]:"fire-analytics",[_x]:"fire-analytics-compat",[Tx]:"fire-app-check",[Ex]:"fire-app-check-compat",[Ix]:"fire-auth",[Sx]:"fire-auth-compat",[xx]:"fire-rtdb",[Ax]:"fire-data-connect",[Rx]:"fire-rtdb-compat",[Cx]:"fire-fn",[kx]:"fire-fn-compat",[Px]:"fire-iid",[Nx]:"fire-iid-compat",[bx]:"fire-fcm",[Dx]:"fire-fcm-compat",[Vx]:"fire-perf",[Ox]:"fire-perf-compat",[Lx]:"fire-rc",[Mx]:"fire-rc-compat",[jx]:"fire-gcs",[Fx]:"fire-gcs-compat",[Ux]:"fire-fst",[$x]:"fire-fst-compat",[zx]:"fire-vertex","fire-js":"fire-js",[Bx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map,Wx=new Map,Qh=new Map;function xg(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mn(t){const e=t.name;if(Qh.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;Qh.set(e,t);for(const n of Ll.values())xg(n,t);for(const n of Wx.values())xg(n,t);return!0}function ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new ui("app","Firebase",Gx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=Hx;function Nw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Kh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=Ew()),!n)throw hr.create("no-options");const s=Ll.get(i);if(s){if(gr(n,s.options)&&gr(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new tx(i);for(const u of Qh.values())o.addComponent(u);const l=new Kx(n,r,o);return Ll.set(i,l),l}function yf(t=Kh){const e=Ll.get(t);if(!e&&t===Kh&&Ew())return Nw();if(!e)throw hr.create("no-app",{appName:t});return e}function jt(t,e,n){let r=qx[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(o.join(" "));return}mn(new Xt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx="firebase-heartbeat-database",Xx=1,Oo="firebase-heartbeat-store";let zc=null;function bw(){return zc||(zc=Pw(Qx,Xx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),zc}async function Yx(t){try{const n=(await bw()).transaction(Oo),r=await n.objectStore(Oo).get(Dw(t));return await n.done,r}catch(e){if(e instanceof Jt)Pn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function Ag(t,e){try{const r=(await bw()).transaction(Oo,"readwrite");await r.objectStore(Oo).put(e,Dw(t)),await r.done}catch(n){if(n instanceof Jt)Pn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function Dw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=1024,Zx=30;class eA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Zx){const o=rA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rg(),{heartbeatsToSend:r,unsentEntries:i}=tA(this._heartbeatsCache.heartbeats),s=Ol(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Pn.warn(n),""}}}function Rg(){return new Date().toISOString().substring(0,10)}function tA(t,e=Jx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Aw()?Rw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ag(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ag(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Cg(t){return Ol(JSON.stringify({version:2,heartbeats:t})).length}function rA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t){mn(new Xt("platform-logger",e=>new gx(e),"PRIVATE")),mn(new Xt("heartbeat",e=>new eA(e),"PRIVATE")),jt(Gh,Sg,t),jt(Gh,Sg,"esm2020"),jt("fire-js","")}iA("");function Vw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sA=Vw,Ow=new ui("auth","Firebase",Vw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new wu("@firebase/auth");function oA(t,...e){Ml.logLevel<=te.WARN&&Ml.warn(`Auth (${hs}): ${t}`,...e)}function el(t,...e){Ml.logLevel<=te.ERROR&&Ml.error(`Auth (${hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw vf(t,...e)}function ln(t,...e){return vf(t,...e)}function Lw(t,e,n){const r={...sA(),[e]:n};return new ui("auth","Firebase",r).create(e,{appName:t.name})}function xn(t){return Lw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ow.create(t,...e)}function G(t,e,...n){if(!t)throw vf(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw el(e),new Error(e)}function Nn(t,e){t||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function aA(){return kg()==="http:"||kg()==="https:"}function kg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aA()||xw()||"connection"in navigator)?navigator.onLine:!0}function uA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=VS()||MS()}get(){return lA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dA=new Xo(3e4,6e4);function Ar(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function On(t,e,n,r,i={}){return jw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Qo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return LS()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&cs(t.emulatorConfig.host)&&(c.credentials="include"),Mw.fetch()(await Fw(t,t.config.apiHost,n,l),c)})}async function jw(t,e,n){t._canInitEmulator=!1;const r={...cA,...e};try{const i=new pA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Va(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Va(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Va(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Va(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Lw(t,f,c);Yt(t,f)}}catch(i){if(i instanceof Jt)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function Yo(t,e,n,r,i={}){const s=await On(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Fw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?_f(t.config,i):`${t.config.apiScheme}://${i}`;return hA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function fA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),dA.get())})}}function Va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ln(t,e,r);return i.customData._tokenResponse=n,i}function Pg(t){return t!==void 0&&t.enterprise!==void 0}class mA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gA(t,e){return On(t,"GET","/v2/recaptchaConfig",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e){return On(t,"POST","/v1/accounts:delete",e)}async function jl(t,e){return On(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vA(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),i=wf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:co($c(i.auth_time)),issuedAtTime:co($c(i.iat)),expirationTime:co($c(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return el("JWT malformed, contained fewer than 3 sections"),null;try{const i=_w(n);return i?JSON.parse(i):(el("Failed to decode base64 JWT payload"),null)}catch(i){return el("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ng(t){const e=wf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&_A(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _A({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=co(this.lastLoginAt),this.creationTime=co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await es(t,jl(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Uw(i.providerUserInfo):[],o=TA(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Yh(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function EA(t){const e=Ue(t);await Fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Uw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(t,e){const n=await jw(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Fw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&cs(t.emulatorConfig.host)&&(u.credentials="include"),Mw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SA(t,e){return On(t,"POST","/v2/accounts:revokeToken",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ng(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Ng(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await IA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Bi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new wA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await es(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vA(this,e)}reload(){return EA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(xn(this.auth));const e=await this.getIdToken();return await es(this,yA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:A,providerData:R,stsTokenManager:P}=n;G(m&&P,e,"internal-error");const V=Bi.fromJSON(this.name,P);G(typeof m=="string",e,"internal-error"),Hn(r,e.name),Hn(i,e.name),G(typeof g=="boolean",e,"internal-error"),G(typeof A=="boolean",e,"internal-error"),Hn(s,e.name),Hn(o,e.name),Hn(l,e.name),Hn(u,e.name),Hn(c,e.name),Hn(f,e.name);const w=new Wt({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:V,createdAt:c,lastLoginAt:f});return R&&Array.isArray(R)&&(w.providerData=R.map(_=>({..._}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bi;i.updateFromServerResponse(n);const s=new Wt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Uw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Bi;l.updateFromIdToken(r);const u=new Wt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Yh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new Map;function In(t){Nn(t instanceof Function,"Expected a class definition");let e=bg.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zw.type="NONE";const Dg=zw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tl(this.userKey,i.apiKey,s),this.fullPersistenceKey=tl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await jl(this.auth,{idToken:e}).catch(()=>{});return n?Wt._fromGetAccountInfoResponse(this.auth,n,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hi(In(Dg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||In(Dg);const o=tl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await jl(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Wt._fromGetAccountInfoResponse(e,g,f)}else m=Wt._fromJSON(e,f);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Hi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Hi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($w(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gw(e))return"Blackberry";if(Kw(e))return"Webos";if(Bw(e))return"Safari";if((e.includes("chrome/")||Hw(e))&&!e.includes("edge/"))return"Chrome";if(Ww(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $w(t=ot()){return/firefox\//i.test(t)}function Bw(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hw(t=ot()){return/crios\//i.test(t)}function qw(t=ot()){return/iemobile/i.test(t)}function Ww(t=ot()){return/android/i.test(t)}function Gw(t=ot()){return/blackberry/i.test(t)}function Kw(t=ot()){return/webos/i.test(t)}function Ef(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xA(t=ot()){var e;return Ef(t)&&!!((e=window.navigator)!=null&&e.standalone)}function AA(){return jS()&&document.documentMode===10}function Qw(t=ot()){return Ef(t)||Ww(t)||Kw(t)||Gw(t)||/windows phone/i.test(t)||qw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e=[]){let n;switch(t){case"Browser":n=Vg(ot());break;case"Worker":n=`${Vg(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(t,e={}){return On(t,"GET","/v2/passwordPolicy",Ar(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=6;class PA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??kA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Og(this),this.idTokenSubscription=new Og(this),this.beforeStateQueue=new RA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ow,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await jl(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(xn(this));const n=e?Ue(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CA(this),n=new PA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&oA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function hi(t){return Ue(t)}class Og{constructor(e){this.auth=e,this.observer=null,this.addObserver=qS(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bA(t){Eu=t}function Yw(t){return Eu.loadJS(t)}function DA(){return Eu.recaptchaEnterpriseScript}function VA(){return Eu.gapiScript}function OA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class LA{constructor(){this.enterprise=new MA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class MA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const jA="recaptcha-enterprise",Jw="NO_RECAPTCHA";class FA{constructor(e){this.type=jA,this.auth=hi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{gA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new mA(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Pg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Jw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new LA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Pg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=DA();u.length!==0&&(u+=l),Yw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Lg(t,e,n,r=!1,i=!1){const s=new FA(t);let o;if(i)o=Jw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Jh(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Lg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Lg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t,e){const n=ci(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(gr(s,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function zA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $A(t,e,n){const r=hi(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Zw(e),{host:o,port:l}=BA(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(gr(c,r.config.emulator)&&gr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,cs(o)?(Iw(`${s}//${o}${u}`),Sw("Auth",!0)):HA()}function Zw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BA(t){const e=Zw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Mg(o)}}}function Mg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function qA(t,e){return On(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(t,e){return Yo(t,"POST","/v1/accounts:signInWithPassword",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(t,e){return Yo(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}async function KA(t,e){return Yo(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Tf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Lo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Lo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jh(e,n,"signInWithPassword",WA);case"emailLink":return GA(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jh(e,r,"signUpPassword",qA);case"emailLink":return KA(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e){return Yo(t,"POST","/v1/accounts:signInWithIdp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="http://localhost";class ei extends Tf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qi(e,n)}buildRequest(){const e={requestUri:QA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YA(t){const e=Gs(Ks(t)).link,n=e?Gs(Ks(e)).deep_link_id:null,r=Gs(Ks(t)).deep_link_id;return(r?Gs(Ks(r)).link:null)||r||n||e||t}class If{constructor(e){const n=Gs(Ks(e)),r=n.apiKey??null,i=n.oobCode??null,s=XA(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=YA(e);try{return new If(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.providerId=ds.PROVIDER_ID}static credential(e,n){return Lo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=If.parseLink(n);return G(r,"argument-error"),Lo._fromEmailAndCode(e,r.code,r.tenantId)}}ds.PROVIDER_ID="password";ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends e0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Jo{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Jo{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Jo{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e){return Yo(t,"POST","/v1/accounts:signUp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Wt._fromIdTokenResponse(e,r,i),o=jg(r);return new ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jg(r);return new ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends Jt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ul.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ul(e,n,r,i)}}function t0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ul._fromErrorAndOperation(t,s,e,r):s})}async function ZA(t,e,n=!1){const r=await es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ti._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(t,e,n=!1){const{auth:r}=t;if(Vt(r.app))return Promise.reject(xn(r));const i="reauthenticate";try{const s=await es(t,t0(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=wf(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),ti._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t,e,n=!1){if(Vt(t.app))return Promise.reject(xn(t));const r="signIn",i=await t0(t,r,e),s=await ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function tR(t,e){return n0(hi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(t){const e=hi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nR(t,e,n){if(Vt(t.app))return Promise.reject(xn(t));const r=hi(t),o=await Jh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&r0(t),u}),l=await ti._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function rR(t,e,n){return Vt(t.app)?Promise.reject(xn(t)):tR(Ue(t),ds.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&r0(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e){return On(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ue(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await es(r,iR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function oR(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function aR(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function lR(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}function uR(t){return Ue(t).signOut()}const zl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zl,"1"),this.storage.removeItem(zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=1e3,hR=10;class s0 extends i0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s0.type="LOCAL";const dR=s0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0 extends i0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o0.type="SESSION";const a0=o0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await fR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Sf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function mR(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function gR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function vR(){return l0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="firebaseLocalStorageDb",_R=1,$l="firebaseLocalStorage",c0="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([$l],e?"readwrite":"readonly").objectStore($l)}function wR(){const t=indexedDB.deleteDatabase(u0);return new Zo(t).toPromise()}function Zh(){const t=indexedDB.open(u0,_R);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($l,{keyPath:c0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($l)?e(r):(r.close(),await wR(),e(await Zh()))})})}async function Fg(t,e,n){const r=Iu(t,!0).put({[c0]:e,value:n});return new Zo(r).toPromise()}async function ER(t,e){const n=Iu(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function Ug(t,e){const n=Iu(t,!0).delete(e);return new Zo(n).toPromise()}const TR=800,IR=3;class h0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return l0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tu._getInstance(vR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await gR(),!this.activeServiceWorker)return;this.sender=new pR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zh();return await Fg(e,zl,"1"),await Ug(e,zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ER(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ug(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Iu(i,!1).getAll();return new Zo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h0.type="LOCAL";const SR=h0;new Xo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t,e){return e?In(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf extends Tf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AR(t){return n0(t.auth,new xf(t),t.bypassAuthState)}function RR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),eR(n,new xf(t),t.bypassAuthState)}async function CR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),ZA(n,new xf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AR;case"linkViaPopup":case"linkViaRedirect":return CR;case"reauthViaPopup":case"reauthViaRedirect":return RR;default:Yt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=new Xo(2e3,1e4);class Li extends d0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Li.currentPopupAction&&Li.currentPopupAction.cancel(),Li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kR.get())};e()}}Li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="pendingRedirect",nl=new Map;class NR extends d0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nl.get(this.auth._key());if(!e){try{const r=await bR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nl.set(this.auth._key(),e)}return this.bypassAuthState||nl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bR(t,e){const n=OR(e),r=VR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DR(t,e){nl.set(t._key(),e)}function VR(t){return In(t._redirectPersistence)}function OR(t){return tl(PR,t.config.apiKey,t.name)}async function LR(t,e,n=!1){if(Vt(t.app))return Promise.reject(xn(t));const r=hi(t),i=xR(r,e),o=await new NR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=10*60*1e3;class jR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!f0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MR&&this.cachedEventUids.clear(),this.cachedEventUids.has(zg(e))}saveEventToCache(e){this.cachedEventUids.add(zg(e)),this.lastProcessedEventTime=Date.now()}}function zg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function f0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t,e={}){return On(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$R=/^https?/;async function BR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UR(t);for(const n of e)try{if(HR(n))return}catch{}Yt(t,"unauthorized-domain")}function HR(t){const e=Xh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$R.test(n))return!1;if(zR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=new Xo(3e4,6e4);function $g(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WR(t){return new Promise((e,n)=>{var i,s,o;function r(){$g(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$g(),n(ln(t,"network-request-failed"))},timeout:qR.get()})}if((s=(i=un().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=un().gapi)!=null&&o.load)r();else{const l=OA("iframefcb");return un()[l]=()=>{gapi.load?r():n(ln(t,"network-request-failed"))},Yw(`${VA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw rl=null,e})}let rl=null;function GR(t){return rl=rl||WR(t),rl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=new Xo(5e3,15e3),QR="__/auth/iframe",XR="emulator/auth/iframe",YR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZR(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_f(e,XR):`https://${t.config.authDomain}/${QR}`,r={apiKey:e.apiKey,appName:t.name,v:hs},i=JR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qo(r).slice(1)}`}async function eC(t){const e=await GR(t),n=un().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:ZR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),l=un().setTimeout(()=>{s(o)},KR.get());function u(){un().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nC=500,rC=600,iC="_blank",sC="http://localhost";class Bg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oC(t,e,n,r=nC,i=rC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...tC,width:r.toString(),height:i.toString(),top:s,left:o},c=ot().toLowerCase();n&&(l=Hw(c)?iC:n),$w(c)&&(e=e||sC,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,R])=>`${g}${A}=${R},`,"");if(xA(c)&&l!=="_self")return aC(e||"",l),new Bg(null);const m=window.open(e||"",l,f);G(m,t,"popup-blocked");try{m.focus()}catch{}return new Bg(m)}function aC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="__/auth/handler",uC="emulator/auth/handler",cC=encodeURIComponent("fac");async function Hg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:i};if(e instanceof e0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",HS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Jo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${cC}=${encodeURIComponent(u)}`:"";return`${hC(t)}?${Qo(l).slice(1)}${c}`}function hC({config:t}){return t.emulator?_f(t,uC):`https://${t.authDomain}/${lC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="webStorageSupport";class dC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=a0,this._completeRedirectFn=LR,this._overrideRedirectResult=DR}async _openPopup(e,n,r,i){var o;Nn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Hg(e,n,r,Xh(),i);return oC(e,s,Sf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Hg(e,n,r,Xh(),i);return mR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eC(e),r=new jR(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bc,{type:Bc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Bc];s!==void 0&&n(!!s),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qw()||Bw()||Ef()}}const fC=dC;var qg="@firebase/auth",Wg="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gC(t){mn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xw(t)},c=new NA(r,i,s,u);return zA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mn(new Xt("auth-internal",e=>{const n=hi(e.getProvider("auth").getImmediate());return(r=>new pC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(qg,Wg,mC(t)),jt(qg,Wg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=5*60,vC=Tw("authIdTokenMaxAge")||yC;let Gg=null;const _C=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vC)return;const i=n==null?void 0:n.token;Gg!==i&&(Gg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wC(t=yf()){const e=ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UA(t,{popupRedirectResolver:fC,persistence:[SR,dR,a0]}),r=Tw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=_C(s.toString());aR(n,o,()=>o(n.currentUser)),oR(n,l=>o(l))}}const i=ww("auth");return i&&$A(n,`http://${i}`),n}function EC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}bA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gC("Browser");var Kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,p0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function I(){}I.prototype=v.prototype,E.F=v.prototype,E.prototype=new I,E.prototype.constructor=E,E.D=function(x,C,k){for(var S=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)S[ye-2]=arguments[ye];return v.prototype[C].apply(x,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,I){I||(I=0);const x=Array(16);if(typeof v=="string")for(var C=0;C<16;++C)x[C]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(C=0;C<16;++C)x[C]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=E.g[0],I=E.g[1],C=E.g[2];let k=E.g[3],S;S=v+(k^I&(C^k))+x[0]+3614090360&4294967295,v=I+(S<<7&4294967295|S>>>25),S=k+(C^v&(I^C))+x[1]+3905402710&4294967295,k=v+(S<<12&4294967295|S>>>20),S=C+(I^k&(v^I))+x[2]+606105819&4294967295,C=k+(S<<17&4294967295|S>>>15),S=I+(v^C&(k^v))+x[3]+3250441966&4294967295,I=C+(S<<22&4294967295|S>>>10),S=v+(k^I&(C^k))+x[4]+4118548399&4294967295,v=I+(S<<7&4294967295|S>>>25),S=k+(C^v&(I^C))+x[5]+1200080426&4294967295,k=v+(S<<12&4294967295|S>>>20),S=C+(I^k&(v^I))+x[6]+2821735955&4294967295,C=k+(S<<17&4294967295|S>>>15),S=I+(v^C&(k^v))+x[7]+4249261313&4294967295,I=C+(S<<22&4294967295|S>>>10),S=v+(k^I&(C^k))+x[8]+1770035416&4294967295,v=I+(S<<7&4294967295|S>>>25),S=k+(C^v&(I^C))+x[9]+2336552879&4294967295,k=v+(S<<12&4294967295|S>>>20),S=C+(I^k&(v^I))+x[10]+4294925233&4294967295,C=k+(S<<17&4294967295|S>>>15),S=I+(v^C&(k^v))+x[11]+2304563134&4294967295,I=C+(S<<22&4294967295|S>>>10),S=v+(k^I&(C^k))+x[12]+1804603682&4294967295,v=I+(S<<7&4294967295|S>>>25),S=k+(C^v&(I^C))+x[13]+4254626195&4294967295,k=v+(S<<12&4294967295|S>>>20),S=C+(I^k&(v^I))+x[14]+2792965006&4294967295,C=k+(S<<17&4294967295|S>>>15),S=I+(v^C&(k^v))+x[15]+1236535329&4294967295,I=C+(S<<22&4294967295|S>>>10),S=v+(C^k&(I^C))+x[1]+4129170786&4294967295,v=I+(S<<5&4294967295|S>>>27),S=k+(I^C&(v^I))+x[6]+3225465664&4294967295,k=v+(S<<9&4294967295|S>>>23),S=C+(v^I&(k^v))+x[11]+643717713&4294967295,C=k+(S<<14&4294967295|S>>>18),S=I+(k^v&(C^k))+x[0]+3921069994&4294967295,I=C+(S<<20&4294967295|S>>>12),S=v+(C^k&(I^C))+x[5]+3593408605&4294967295,v=I+(S<<5&4294967295|S>>>27),S=k+(I^C&(v^I))+x[10]+38016083&4294967295,k=v+(S<<9&4294967295|S>>>23),S=C+(v^I&(k^v))+x[15]+3634488961&4294967295,C=k+(S<<14&4294967295|S>>>18),S=I+(k^v&(C^k))+x[4]+3889429448&4294967295,I=C+(S<<20&4294967295|S>>>12),S=v+(C^k&(I^C))+x[9]+568446438&4294967295,v=I+(S<<5&4294967295|S>>>27),S=k+(I^C&(v^I))+x[14]+3275163606&4294967295,k=v+(S<<9&4294967295|S>>>23),S=C+(v^I&(k^v))+x[3]+4107603335&4294967295,C=k+(S<<14&4294967295|S>>>18),S=I+(k^v&(C^k))+x[8]+1163531501&4294967295,I=C+(S<<20&4294967295|S>>>12),S=v+(C^k&(I^C))+x[13]+2850285829&4294967295,v=I+(S<<5&4294967295|S>>>27),S=k+(I^C&(v^I))+x[2]+4243563512&4294967295,k=v+(S<<9&4294967295|S>>>23),S=C+(v^I&(k^v))+x[7]+1735328473&4294967295,C=k+(S<<14&4294967295|S>>>18),S=I+(k^v&(C^k))+x[12]+2368359562&4294967295,I=C+(S<<20&4294967295|S>>>12),S=v+(I^C^k)+x[5]+4294588738&4294967295,v=I+(S<<4&4294967295|S>>>28),S=k+(v^I^C)+x[8]+2272392833&4294967295,k=v+(S<<11&4294967295|S>>>21),S=C+(k^v^I)+x[11]+1839030562&4294967295,C=k+(S<<16&4294967295|S>>>16),S=I+(C^k^v)+x[14]+4259657740&4294967295,I=C+(S<<23&4294967295|S>>>9),S=v+(I^C^k)+x[1]+2763975236&4294967295,v=I+(S<<4&4294967295|S>>>28),S=k+(v^I^C)+x[4]+1272893353&4294967295,k=v+(S<<11&4294967295|S>>>21),S=C+(k^v^I)+x[7]+4139469664&4294967295,C=k+(S<<16&4294967295|S>>>16),S=I+(C^k^v)+x[10]+3200236656&4294967295,I=C+(S<<23&4294967295|S>>>9),S=v+(I^C^k)+x[13]+681279174&4294967295,v=I+(S<<4&4294967295|S>>>28),S=k+(v^I^C)+x[0]+3936430074&4294967295,k=v+(S<<11&4294967295|S>>>21),S=C+(k^v^I)+x[3]+3572445317&4294967295,C=k+(S<<16&4294967295|S>>>16),S=I+(C^k^v)+x[6]+76029189&4294967295,I=C+(S<<23&4294967295|S>>>9),S=v+(I^C^k)+x[9]+3654602809&4294967295,v=I+(S<<4&4294967295|S>>>28),S=k+(v^I^C)+x[12]+3873151461&4294967295,k=v+(S<<11&4294967295|S>>>21),S=C+(k^v^I)+x[15]+530742520&4294967295,C=k+(S<<16&4294967295|S>>>16),S=I+(C^k^v)+x[2]+3299628645&4294967295,I=C+(S<<23&4294967295|S>>>9),S=v+(C^(I|~k))+x[0]+4096336452&4294967295,v=I+(S<<6&4294967295|S>>>26),S=k+(I^(v|~C))+x[7]+1126891415&4294967295,k=v+(S<<10&4294967295|S>>>22),S=C+(v^(k|~I))+x[14]+2878612391&4294967295,C=k+(S<<15&4294967295|S>>>17),S=I+(k^(C|~v))+x[5]+4237533241&4294967295,I=C+(S<<21&4294967295|S>>>11),S=v+(C^(I|~k))+x[12]+1700485571&4294967295,v=I+(S<<6&4294967295|S>>>26),S=k+(I^(v|~C))+x[3]+2399980690&4294967295,k=v+(S<<10&4294967295|S>>>22),S=C+(v^(k|~I))+x[10]+4293915773&4294967295,C=k+(S<<15&4294967295|S>>>17),S=I+(k^(C|~v))+x[1]+2240044497&4294967295,I=C+(S<<21&4294967295|S>>>11),S=v+(C^(I|~k))+x[8]+1873313359&4294967295,v=I+(S<<6&4294967295|S>>>26),S=k+(I^(v|~C))+x[15]+4264355552&4294967295,k=v+(S<<10&4294967295|S>>>22),S=C+(v^(k|~I))+x[6]+2734768916&4294967295,C=k+(S<<15&4294967295|S>>>17),S=I+(k^(C|~v))+x[13]+1309151649&4294967295,I=C+(S<<21&4294967295|S>>>11),S=v+(C^(I|~k))+x[4]+4149444226&4294967295,v=I+(S<<6&4294967295|S>>>26),S=k+(I^(v|~C))+x[11]+3174756917&4294967295,k=v+(S<<10&4294967295|S>>>22),S=C+(v^(k|~I))+x[2]+718787259&4294967295,C=k+(S<<15&4294967295|S>>>17),S=I+(k^(C|~v))+x[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+k&4294967295}r.prototype.v=function(E,v){v===void 0&&(v=E.length);const I=v-this.blockSize,x=this.C;let C=this.h,k=0;for(;k<v;){if(C==0)for(;k<=I;)i(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<v;)if(x[C++]=E.charCodeAt(k++),C==this.blockSize){i(this,x),C=0;break}}else for(;k<v;)if(x[C++]=E[k++],C==this.blockSize){i(this,x),C=0;break}}this.h=C,this.o+=v},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;v=this.o*8;for(var I=E.length-8;I<E.length;++I)E[I]=v&255,v/=256;for(this.v(E),E=Array(16),v=0,I=0;I<4;++I)for(let x=0;x<32;x+=8)E[v++]=this.g[I]>>>x&255;return E};function s(E,v){var I=l;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=v(E)}function o(E,v){this.h=v;const I=[];let x=!0;for(let C=E.length-1;C>=0;C--){const k=E[C]|0;x&&k==v||(I[C]=k,x=!1)}this.g=I}var l={};function u(E){return-128<=E&&E<128?s(E,function(v){return new o([v|0],v<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return V(c(-E));const v=[];let I=1;for(let x=0;E>=I;x++)v[x]=E/I|0,I*=4294967296;return new o(v,0)}function f(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return V(f(E.substring(1),v));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=c(Math.pow(v,8));let x=m;for(let k=0;k<E.length;k+=8){var C=Math.min(8,E.length-k);const S=parseInt(E.substring(k,k+C),v);C<8?(C=c(Math.pow(v,C)),x=x.j(C).add(c(S))):(x=x.j(I),x=x.add(c(S)))}return x}var m=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-V(this).m();let E=0,v=1;for(let I=0;I<this.g.length;I++){const x=this.i(I);E+=(x>=0?x:4294967296+x)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(P(this))return"-"+V(this).toString(E);const v=c(Math.pow(E,6));var I=this;let x="";for(;;){const C=b(I,v).g;I=w(I,C.j(v));let k=((I.g.length>0?I.g[0]:I.h)>>>0).toString(E);if(I=C,R(I))return k+x;for(;k.length<6;)k="0"+k;x=k+x}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=w(this,E),P(E)?-1:R(E)?0:1};function V(E){const v=E.g.length,I=[];for(let x=0;x<v;x++)I[x]=~E.g[x];return new o(I,~E.h).add(g)}t.abs=function(){return P(this)?V(this):this},t.add=function(E){const v=Math.max(this.g.length,E.g.length),I=[];let x=0;for(let C=0;C<=v;C++){let k=x+(this.i(C)&65535)+(E.i(C)&65535),S=(k>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);x=S>>>16,k&=65535,S&=65535,I[C]=S<<16|k}return new o(I,I[I.length-1]&-2147483648?-1:0)};function w(E,v){return E.add(V(v))}t.j=function(E){if(R(this)||R(E))return m;if(P(this))return P(E)?V(this).j(V(E)):V(V(this).j(E));if(P(E))return V(this.j(V(E)));if(this.l(A)<0&&E.l(A)<0)return c(this.m()*E.m());const v=this.g.length+E.g.length,I=[];for(var x=0;x<2*v;x++)I[x]=0;for(x=0;x<this.g.length;x++)for(let C=0;C<E.g.length;C++){const k=this.i(x)>>>16,S=this.i(x)&65535,ye=E.i(C)>>>16,Ye=E.i(C)&65535;I[2*x+2*C]+=S*Ye,_(I,2*x+2*C),I[2*x+2*C+1]+=k*Ye,_(I,2*x+2*C+1),I[2*x+2*C+1]+=S*ye,_(I,2*x+2*C+1),I[2*x+2*C+2]+=k*ye,_(I,2*x+2*C+2)}for(E=0;E<v;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=v;E<2*v;E++)I[E]=0;return new o(I,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function T(E,v){this.g=E,this.h=v}function b(E,v){if(R(v))throw Error("division by zero");if(R(E))return new T(m,m);if(P(E))return v=b(V(E),v),new T(V(v.g),V(v.h));if(P(v))return v=b(E,V(v)),new T(V(v.g),v.h);if(E.g.length>30){if(P(E)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var I=g,x=v;x.l(E)<=0;)I=L(I),x=L(x);var C=j(I,1),k=j(x,1);for(x=j(x,2),I=j(I,2);!R(x);){var S=k.add(x);S.l(E)<=0&&(C=C.add(I),k=S),x=j(x,1),I=j(I,1)}return v=w(E,C.j(v)),new T(C,v)}for(C=m;E.l(v)>=0;){for(I=Math.max(1,Math.floor(E.m()/v.m())),x=Math.ceil(Math.log(I)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),k=c(I),S=k.j(v);P(S)||S.l(E)>0;)I-=x,k=c(I),S=k.j(v);R(k)&&(k=g),C=C.add(k),E=w(E,S)}return new T(C,E)}t.B=function(E){return b(this,E).h},t.and=function(E){const v=Math.max(this.g.length,E.g.length),I=[];for(let x=0;x<v;x++)I[x]=this.i(x)&E.i(x);return new o(I,this.h&E.h)},t.or=function(E){const v=Math.max(this.g.length,E.g.length),I=[];for(let x=0;x<v;x++)I[x]=this.i(x)|E.i(x);return new o(I,this.h|E.h)},t.xor=function(E){const v=Math.max(this.g.length,E.g.length),I=[];for(let x=0;x<v;x++)I[x]=this.i(x)^E.i(x);return new o(I,this.h^E.h)};function L(E){const v=E.g.length+1,I=[];for(let x=0;x<v;x++)I[x]=E.i(x)<<1|E.i(x-1)>>>31;return new o(I,E.h)}function j(E,v){const I=v>>5;v%=32;const x=E.g.length-I,C=[];for(let k=0;k<x;k++)C[k]=v>0?E.i(k+I)>>>v|E.i(k+I+1)<<32-v:E.i(k+I);return new o(C,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,p0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,dr=o}).apply(typeof Kg<"u"?Kg:typeof self<"u"?self:typeof window<"u"?window:{});var Oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m0,Qs,g0,il,ed,y0,v0,_0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oa=="object"&&Oa];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in d))break e;d=d[N]}a=a[a.length-1],y=d[a],h=h(y),h!=y&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&d.push([y,h[y]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(y,N,D){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return h.prototype[N].apply(y,U)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const h=a.length;if(h>0){const d=Array(h);for(let y=0;y<h;y++)d[y]=a[y];return d}return[]}function R(a,h){for(let y=1;y<arguments.length;y++){const N=arguments[y];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const D=N.length||0;a.length=d+D;for(let U=0;U<D;U++)a[d+U]=N[U]}else a.push(N)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){o.setTimeout(()=>{throw a},0)}function w(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,d){const y=T.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var T=new P(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let L,j=!1,E=new _,v=()=>{const a=Promise.resolve(void 0);L=()=>{a.then(I)}};function I(){for(var a;a=w();){try{a.h.call(a.g)}catch(d){V(d)}var h=T;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}j=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function ye(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(ye,C),ye.prototype.init=function(a,h){const d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ye.Z.h.call(this)},ye.prototype.h=function(){ye.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ye="closure_listenable_"+(Math.random()*1e6|0),Et=0;function De(a,h,d,y,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=N,this.key=++Et,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,d){for(const y in a)h.call(d,a[y],y,a)}function J(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function ve(a){const h={};for(const d in a)h[d]=a[d];return h}const Re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pr(a,h){let d,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(d in y)a[d]=y[d];for(let D=0;D<Re.length;D++)d=Re[D],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function Nt(a){this.src=a,this.g={},this.h=0}Nt.prototype.add=function(a,h,d,y,N){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const U=zt(a,h,y,N);return U>-1?(h=a[U],d||(h.fa=!1)):(h=new De(h,this.src,D,!!y,N),h.fa=d,a.push(h)),h};function Nr(a,h){const d=h.type;if(d in a.g){var y=a.g[d],N=Array.prototype.indexOf.call(y,h,void 0),D;(D=N>=0)&&Array.prototype.splice.call(y,N,1),D&&(z(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function zt(a,h,d,y){for(let N=0;N<a.length;++N){const D=a[N];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==y)return N}return-1}var Ln="closure_lm_"+(Math.random()*1e6|0),Bu={};function cp(a,h,d,y,N){if(Array.isArray(h)){for(let D=0;D<h.length;D++)cp(a,h[D],d,y,N);return null}return d=fp(d),a&&a[Ye]?a.J(h,d,l(y)?!!y.capture:!1,N):yT(a,h,d,!1,y,N)}function yT(a,h,d,y,N,D){if(!h)throw Error("Invalid event type");const U=l(N)?!!N.capture:!!N;let Z=qu(a);if(Z||(a[Ln]=Z=new Nt(a)),d=Z.add(h,d,y,U,D),d.proxy)return d;if(y=vT(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)k||(N=U),N===void 0&&(N=!1),a.addEventListener(h.toString(),y,N);else if(a.attachEvent)a.attachEvent(dp(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function vT(){function a(d){return h.call(a.src,a.listener,d)}const h=_T;return a}function hp(a,h,d,y,N){if(Array.isArray(h))for(var D=0;D<h.length;D++)hp(a,h[D],d,y,N);else y=l(y)?!!y.capture:!!y,d=fp(d),a&&a[Ye]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],d=zt(h,d,y,N),d>-1&&(z(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=qu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=zt(h,d,y,N)),(d=a>-1?h[a]:null)&&Hu(d))}function Hu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ye])Nr(h.i,a);else{var d=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(d,y,a.capture):h.detachEvent?h.detachEvent(dp(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=qu(h))?(Nr(d,a),d.h==0&&(d.src=null,h[Ln]=null)):z(a)}}}function dp(a){return a in Bu?Bu[a]:Bu[a]="on"+a}function _T(a,h){if(a.da)a=!0;else{h=new ye(h,this);const d=a.listener,y=a.ha||a.src;a.fa&&Hu(a),a=d.call(y,h)}return a}function qu(a){return a=a[Ln],a instanceof Nt?a:null}var Wu="__closure_events_fn_"+(Math.random()*1e9>>>0);function fp(a){return typeof a=="function"?a:(a[Wu]||(a[Wu]=function(h){return a.handleEvent(h)}),a[Wu])}function Je(){x.call(this),this.i=new Nt(this),this.M=this,this.G=null}m(Je,x),Je.prototype[Ye]=!0,Je.prototype.removeEventListener=function(a,h,d,y){hp(this,a,h,d,y)};function at(a,h){var d,y=a.G;if(y)for(d=[];y;y=y.G)d.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var N=h;h=new C(y,a),Pr(h,N)}N=!0;let D,U;if(d)for(U=d.length-1;U>=0;U--)D=h.g=d[U],N=sa(D,y,!0,h)&&N;if(D=h.g=a,N=sa(D,y,!0,h)&&N,N=sa(D,y,!1,h)&&N,d)for(U=0;U<d.length;U++)D=h.g=d[U],N=sa(D,y,!1,h)&&N}Je.prototype.N=function(){if(Je.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let y=0;y<d.length;y++)z(d[y]);delete a.g[h],a.h--}}this.G=null},Je.prototype.J=function(a,h,d,y){return this.i.add(String(a),h,!1,d,y)},Je.prototype.K=function(a,h,d,y){return this.i.add(String(a),h,!0,d,y)};function sa(a,h,d,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let D=0;D<h.length;++D){const U=h[D];if(U&&!U.da&&U.capture==d){const Z=U.listener,Ve=U.ha||U.src;U.fa&&Nr(a.i,U),N=Z.call(Ve,y)!==!1&&N}}return N&&!y.defaultPrevented}function wT(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function pp(a){a.g=wT(()=>{a.g=null,a.i&&(a.i=!1,pp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ET extends x{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:pp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(a){x.call(this),this.h=a,this.g={}}m(ys,x);var mp=[];function gp(a){Q(a.g,function(h,d){this.g.hasOwnProperty(d)&&Hu(h)},a),a.g={}}ys.prototype.N=function(){ys.Z.N.call(this),gp(this)},ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gu=o.JSON.stringify,TT=o.JSON.parse,IT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function yp(){}function vp(){}var vs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ku(){C.call(this,"d")}m(Ku,C);function Qu(){C.call(this,"c")}m(Qu,C);var br={},_p=null;function oa(){return _p=_p||new Je}br.Ia="serverreachability";function wp(a){C.call(this,br.Ia,a)}m(wp,C);function _s(a){const h=oa();at(h,new wp(h))}br.STAT_EVENT="statevent";function Ep(a,h){C.call(this,br.STAT_EVENT,a),this.stat=h}m(Ep,C);function lt(a){const h=oa();at(h,new Ep(h,a))}br.Ja="timingevent";function Tp(a,h){C.call(this,br.Ja,a),this.size=h}m(Tp,C);function ws(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Es(){this.g=!0}Es.prototype.ua=function(){this.g=!1};function ST(a,h,d,y,N,D){a.info(function(){if(a.g)if(D){var U="",Z=D.split("&");for(let ce=0;ce<Z.length;ce++){var Ve=Z[ce].split("=");if(Ve.length>1){const ze=Ve[0];Ve=Ve[1];const en=ze.split("_");U=en.length>=2&&en[1]=="type"?U+(ze+"="+Ve+"&"):U+(ze+"=redacted&")}}}else U=null;else U=D;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+d+`
`+U})}function xT(a,h,d,y,N,D,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+d+`
`+D+" "+U})}function mi(a,h,d,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+RT(a,d)+(y?" "+y:"")})}function AT(a,h){a.info(function(){return"TIMEOUT: "+h})}Es.prototype.info=function(){};function RT(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var y=d[1];if(Array.isArray(y)&&!(y.length<1)){var N=y[0];if(N!="noop"&&N!="stop"&&N!="close")for(let U=1;U<y.length;U++)y[U]=""}}}}return Gu(D)}catch{return h}}var aa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ip={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Sp;function Xu(){}m(Xu,yp),Xu.prototype.g=function(){return new XMLHttpRequest},Sp=new Xu;function Ts(a){return encodeURIComponent(String(a))}function CT(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Mn(a,h,d,y){this.j=a,this.i=h,this.l=d,this.S=y||1,this.V=new ys(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new xp}function xp(){this.i=null,this.g="",this.h=!1}var Ap={},Yu={};function Ju(a,h,d){a.M=1,a.A=ua(Zt(h)),a.u=d,a.R=!0,Rp(a,null)}function Rp(a,h){a.F=Date.now(),la(a),a.B=Zt(a.A);var d=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Up(d.i,"t",y),a.C=0,d=a.j.L,a.h=new xp,a.g=im(a.j,d?h:null,!a.u),a.P>0&&(a.O=new ET(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,y=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(mp[0]=N.toString()),N=mp);for(let D=0;D<N.length;D++){const U=cp(d,N[D],y||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.J?ve(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),_s(),ST(a.i,a.v,a.B,a.l,a.S,a.u)}Mn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Un(a)==3?h.j():this.Y(a)},Mn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Un(this.g),Ve=this.g.ya(),ce=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Gp(this.g)))){this.K||Z!=4||Ve==7||(Ve==8||ce<=0?_s(3):_s(2)),Zu(this);var h=this.g.ca();this.X=h;var d=kT(this);if(this.o=h==200,xT(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,N=this.g;if((y=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(y)){var D=y;break t}}D=null}if(a=D)mi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ec(this,a);else{this.o=!1,this.m=3,lt(12),Dr(this),Is(this);break e}}if(this.R){a=!0;let ze;for(;!this.K&&this.C<d.length;)if(ze=PT(this,d),ze==Yu){Z==4&&(this.m=4,lt(14),a=!1),mi(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==Ap){this.m=4,lt(15),mi(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else mi(this.i,this.l,ze,null),ec(this,ze);if(Cp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,lt(16),a=!1),this.o=this.o&&a,!a)mi(this.i,this.l,d,"[Invalid Chunked Response]"),Dr(this),Is(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),lc(U),U.P=!0,lt(11))}}else mi(this.i,this.l,d,null),ec(this,d);Z==4&&Dr(this),this.o&&!this.K&&(Z==4?em(this.j,this):(this.o=!1,la(this)))}else HT(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),Dr(this),Is(this)}}}catch{}finally{}};function kT(a){if(!Cp(a))return a.g.la();const h=Gp(a.g);if(h==="")return"";let d="";const y=h.length,N=Un(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Dr(a),Is(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<y;D++)a.h.h=!0,d+=a.h.i.decode(h[D],{stream:!(N&&D==y-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Cp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function PT(a,h){var d=a.C,y=h.indexOf(`
`,d);return y==-1?Yu:(d=Number(h.substring(d,y)),isNaN(d)?Ap:(y+=1,y+d>h.length?Yu:(h=h.slice(y,y+d),a.C=y+d,h)))}Mn.prototype.cancel=function(){this.K=!0,Dr(this)};function la(a){a.T=Date.now()+a.H,kp(a,a.H)}function kp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ws(c(a.aa,a),h)}function Zu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Mn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(AT(this.i,this.B),this.M!=2&&(_s(),lt(17)),Dr(this),this.m=2,Is(this)):kp(this,this.T-a)};function Is(a){a.j.I==0||a.K||em(a.j,a)}function Dr(a){Zu(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,gp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function ec(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||tc(d.h,a))){if(!a.L&&tc(d.h,a)&&d.I==3){try{var y=d.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)pa(d),da(d);else break e;ac(d),lt(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ws(c(d.Va,d),6e3));bp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Or(d,11)}else if((a.L||d.g==a)&&pa(d),!S(h))for(N=d.Ba.g.parse(h),h=0;h<N.length;h++){let ce=N[h];const ze=ce[0];if(!(ze<=d.K))if(d.K=ze,ce=ce[1],d.I==2)if(ce[0]=="c"){d.M=ce[1],d.ba=ce[2];const en=ce[3];en!=null&&(d.ka=en,d.j.info("VER="+d.ka));const Lr=ce[4];Lr!=null&&(d.za=Lr,d.j.info("SVER="+d.za));const zn=ce[5];zn!=null&&typeof zn=="number"&&zn>0&&(y=1.5*zn,d.O=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const $n=a.g;if($n){const ga=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var D=y.h;D.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(nc(D,D.h),D.h=null))}if(y.G){const uc=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(y.wa=uc,de(y.J,y.G,uc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),y=d;var U=a;if(y.na=rm(y,y.L?y.ba:null,y.W),U.L){Dp(y.h,U);var Z=U,Ve=y.O;Ve&&(Z.H=Ve),Z.D&&(Zu(Z),la(Z)),y.g=U}else Jp(y);d.i.length>0&&fa(d)}else ce[0]!="stop"&&ce[0]!="close"||Or(d,7);else d.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Or(d,7):oc(d):ce[0]!="noop"&&d.l&&d.l.qa(ce),d.A=0)}}_s(4)}catch{}}var NT=class{constructor(a,h){this.g=a,this.map=h}};function Pp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Np(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bp(a){return a.h?1:a.g?a.g.size:0}function tc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function nc(a,h){a.g?a.g.add(h):a.h=h}function Dp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Pp.prototype.cancel=function(){if(this.i=Vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return A(a.i)}var Op=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bT(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const y=a[d].indexOf("=");let N,D=null;y>=0?(N=a[d].substring(0,y),D=a[d].substring(y+1)):N=a[d],h(N,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function jn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof jn?(this.l=a.l,Ss(this,a.j),this.o=a.o,this.g=a.g,xs(this,a.u),this.h=a.h,rc(this,zp(a.i)),this.m=a.m):a&&(h=String(a).match(Op))?(this.l=!1,Ss(this,h[1]||"",!0),this.o=As(h[2]||""),this.g=As(h[3]||"",!0),xs(this,h[4]),this.h=As(h[5]||"",!0),rc(this,h[6]||"",!0),this.m=As(h[7]||"")):(this.l=!1,this.i=new Cs(null,this.l))}jn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Rs(h,Lp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Rs(h,Lp,!0),"@"),a.push(Ts(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Rs(d,d.charAt(0)=="/"?OT:VT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Rs(d,MT)),a.join("")},jn.prototype.resolve=function(a){const h=Zt(this);let d=!!a.j;d?Ss(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var y=a.h;if(d)xs(h,a.u);else if(d=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var N=h.h.lastIndexOf("/");N!=-1&&(y=h.h.slice(0,N+1)+y)}if(N=y,N==".."||N==".")y="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){y=N.lastIndexOf("/",0)==0,N=N.split("/");const D=[];for(let U=0;U<N.length;){const Z=N[U++];Z=="."?y&&U==N.length&&D.push(""):Z==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),y&&U==N.length&&D.push("")):(D.push(Z),y=!0)}y=D.join("/")}else y=N}return d?h.h=y:d=a.i.toString()!=="",d?rc(h,zp(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Zt(a){return new jn(a)}function Ss(a,h,d){a.j=d?As(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function xs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function rc(a,h,d){h instanceof Cs?(a.i=h,jT(a.i,a.l)):(d||(h=Rs(h,LT)),a.i=new Cs(h,a.l))}function de(a,h,d){a.i.set(h,d)}function ua(a){return de(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function As(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Rs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,DT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function DT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Lp=/[#\/\?@]/g,VT=/[#\?:]/g,OT=/[#\?]/g,LT=/[#\?@]/g,MT=/#/g;function Cs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Vr(a){a.g||(a.g=new Map,a.h=0,a.i&&bT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Cs.prototype,t.add=function(a,h){Vr(this),this.i=null,a=gi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Mp(a,h){Vr(a),h=gi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function jp(a,h){return Vr(a),h=gi(a,h),a.g.has(h)}t.forEach=function(a,h){Vr(this),this.g.forEach(function(d,y){d.forEach(function(N){a.call(h,N,y,this)},this)},this)};function Fp(a,h){Vr(a);let d=[];if(typeof h=="string")jp(a,h)&&(d=d.concat(a.g.get(gi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Vr(this),this.i=null,a=gi(this,a),jp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Fp(this,a),a.length>0?String(a[0]):h):h};function Up(a,h,d){Mp(a,h),d.length>0&&(a.i=null,a.g.set(gi(a,h),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var d=h[y];const N=Ts(d);d=Fp(this,d);for(let D=0;D<d.length;D++){let U=N;d[D]!==""&&(U+="="+Ts(d[D])),a.push(U)}}return this.i=a.join("&")};function zp(a){const h=new Cs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function gi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function jT(a,h){h&&!a.j&&(Vr(a),a.i=null,a.g.forEach(function(d,y){const N=y.toLowerCase();y!=N&&(Mp(this,y),Up(this,N,d))},a)),a.j=h}function FT(a,h){const d=new Es;if(o.Image){const y=new Image;y.onload=f(Fn,d,"TestLoadImage: loaded",!0,h,y),y.onerror=f(Fn,d,"TestLoadImage: error",!1,h,y),y.onabort=f(Fn,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=f(Fn,d,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function UT(a,h){const d=new Es,y=new AbortController,N=setTimeout(()=>{y.abort(),Fn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(N),D.ok?Fn(d,"TestPingServer: ok",!0,h):Fn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Fn(d,"TestPingServer: error",!1,h)})}function Fn(a,h,d,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(d)}catch{}}function zT(){this.g=new IT}function ic(a){this.i=a.Sb||null,this.h=a.ab||!1}m(ic,yp),ic.prototype.g=function(){return new ca(this.i,this.h)};function ca(a,h){Je.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ca,Je),t=ca.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ps(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$p(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function $p(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ks(this):Ps(this),this.readyState==3&&$p(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ks(this))},t.Na=function(a){this.g&&(this.response=a,ks(this))},t.ga=function(){this.g&&ks(this)};function ks(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ps(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Bp(a){let h="";return Q(a,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function sc(a,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=Bp(d),typeof a=="string"?d!=null&&Ts(d):de(a,h,d))}function xe(a){Je.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(xe,Je);var $T=/^https?$/i,BT=["POST","PUT"];t=xe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Sp.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Hp(this,D);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)d.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())d.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(BT,h,void 0)>=0)||y||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of d)this.g.setRequestHeader(D,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){Hp(this,D)}};function Hp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,qp(a),ha(a)}function qp(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,at(this,"complete"),at(this,"abort"),ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),xe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Wp(this):this.Xa())},t.Xa=function(){Wp(this)};function Wp(a){if(a.h&&typeof s<"u"){if(a.v&&Un(a)==4)setTimeout(a.Ca.bind(a),0);else if(at(a,"readystatechange"),Un(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=D===0){let U=String(a.D).match(Op)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),y=!$T.test(U?U.toLowerCase():"")}d=y}if(d)at(a,"complete"),at(a,"success");else{a.o=6;try{var N=Un(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",qp(a)}}finally{ha(a)}}}}function ha(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||at(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Un(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),TT(h)}};function Gp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function HT(a){const h={};a=(a.g&&Un(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(S(a[y]))continue;var d=CT(a[y]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[N]||[];h[N]=D,D.push(d)}J(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Kp(a){this.za=0,this.i=[],this.j=new Es,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ns("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ns("baseRetryDelayMs",5e3,a),this.Za=Ns("retryDelaySeedMs",1e4,a),this.Ta=Ns("forwardChannelMaxRetries",2,a),this.va=Ns("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Pp(a&&a.concurrentRequestLimit),this.Ba=new zT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Kp.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,y){lt(0),this.W=a,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.J=rm(this,null,this.W),fa(this)};function oc(a){if(Qp(a),a.I==3){var h=a.V++,d=Zt(a.J);if(de(d,"SID",a.M),de(d,"RID",h),de(d,"TYPE","terminate"),bs(a,d),h=new Mn(a,a.j,h),h.M=2,h.A=ua(Zt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=im(h.j,null),h.g.ea(h.A)),h.F=Date.now(),la(h)}nm(a)}function da(a){a.g&&(lc(a),a.g.cancel(),a.g=null)}function Qp(a){da(a),a.v&&(o.clearTimeout(a.v),a.v=null),pa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function fa(a){if(!Np(a.h)&&!a.m){a.m=!0;var h=a.Ea;L||v(),j||(L(),j=!0),E.add(h,a),a.D=0}}function qT(a,h){return bp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ws(c(a.Ea,a,h),tm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Mn(this,this.j,a);let D=this.o;if(this.U&&(D?(D=ve(D),Pr(D,this.U)):D=this.U),this.u!==null||this.R||(N.J=D,D=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Yp(this,N,h),d=Zt(this.J),de(d,"RID",a),de(d,"CVER",22),this.G&&de(d,"X-HTTP-Session-Id",this.G),bs(this,d),D&&(this.R?h="headers="+Ts(Bp(D))+"&"+h:this.u&&sc(d,this.u,D)),nc(this.h,N),this.Ra&&de(d,"TYPE","init"),this.S?(de(d,"$req",h),de(d,"SID","null"),N.U=!0,Ju(N,d,null)):Ju(N,d,h),this.I=2}}else this.I==3&&(a?Xp(this,a):this.i.length==0||Np(this.h)||Xp(this))};function Xp(a,h){var d;h?d=h.l:d=a.V++;const y=Zt(a.J);de(y,"SID",a.M),de(y,"RID",d),de(y,"AID",a.K),bs(a,y),a.u&&a.o&&sc(y,a.u,a.o),d=new Mn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Yp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),nc(a.h,d),Ju(d,y,h)}function bs(a,h){a.H&&Q(a.H,function(d,y){de(h,y,d)}),a.l&&Q({},function(d,y){de(h,y,d)})}function Yp(a,h,d){d=Math.min(a.i.length,d);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let Z=-1;for(;;){const Ve=["count="+d];Z==-1?d>0?(Z=N[0].g,Ve.push("ofs="+Z)):Z=0:Ve.push("ofs="+Z);let ce=!0;for(let ze=0;ze<d;ze++){var D=N[ze].g;const en=N[ze].map;if(D-=Z,D<0)Z=Math.max(0,N[ze].g-100),ce=!1;else try{D="req"+D+"_"||"";try{var U=en instanceof Map?en:Object.entries(en);for(const[Lr,zn]of U){let $n=zn;l(zn)&&($n=Gu(zn)),Ve.push(D+Lr+"="+encodeURIComponent($n))}}catch(Lr){throw Ve.push(D+"type="+encodeURIComponent("_badmap")),Lr}}catch{y&&y(en)}}if(ce){U=Ve.join("&");break e}}U=void 0}return a=a.i.splice(0,d),h.G=a,U}function Jp(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;L||v(),j||(L(),j=!0),E.add(h,a),a.A=0}}function ac(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ws(c(a.Da,a),tm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Zp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ws(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),da(this),Zp(this))};function lc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Zp(a){a.g=new Mn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Zt(a.na);de(h,"RID","rpc"),de(h,"SID",a.M),de(h,"AID",a.K),de(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&de(h,"TO",a.ia),de(h,"TYPE","xmlhttp"),bs(a,h),a.u&&a.o&&sc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ua(Zt(h)),d.u=null,d.R=!0,Rp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,da(this),ac(this),lt(19))};function pa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function em(a,h){var d=null;if(a.g==h){pa(a),lc(a),a.g=null;var y=2}else if(tc(a.h,h))d=h.G,Dp(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;y=oa(),at(y,new Tp(y,d)),fa(a)}else Jp(a);else if(N=h.m,N==3||N==0&&h.X>0||!(y==1&&qT(a,h)||y==2&&ac(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),N){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function tm(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Or(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),y=a.Ua;const N=!y;y=new jn(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ss(y,"https"),ua(y),N?FT(y.toString(),d):UT(y.toString(),d)}else lt(2);a.I=0,a.l&&a.l.pa(h),nm(a),Qp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function nm(a){if(a.I=0,a.ja=[],a.l){const h=Vp(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function rm(a,h,d){var y=d instanceof jn?Zt(d):new jn(d);if(y.g!="")h&&(y.g=h+"."+y.g),xs(y,y.u);else{var N=o.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const D=new jn(null);y&&Ss(D,y),h&&(D.g=h),N&&xs(D,N),d&&(D.h=d),y=D}return d=a.G,h=a.wa,d&&h&&de(y,d,h),de(y,"VER",a.ka),bs(a,y),y}function im(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new xe(new ic({ab:d})):new xe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sm(){}t=sm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ma(){}ma.prototype.g=function(a,h){return new Tt(a,h)};function Tt(a,h){Je.call(this),this.g=new Kp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new yi(this)}m(Tt,Je),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){oc(this.g)},Tt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Gu(a),a=d);h.i.push(new NT(h.Ya++,a)),h.I==3&&fa(h)},Tt.prototype.N=function(){this.g.l=null,delete this.j,oc(this.g),delete this.g,Tt.Z.N.call(this)};function om(a){Ku.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(om,Ku);function am(){Qu.call(this),this.status=1}m(am,Qu);function yi(a){this.g=a}m(yi,sm),yi.prototype.ra=function(){at(this.g,"a")},yi.prototype.qa=function(a){at(this.g,new om(a))},yi.prototype.pa=function(a){at(this.g,new am)},yi.prototype.oa=function(){at(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,_0=function(){return new ma},v0=function(){return oa()},y0=br,ed={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},aa.NO_ERROR=0,aa.TIMEOUT=8,aa.HTTP_ERROR=6,il=aa,Ip.COMPLETE="complete",g0=Ip,vp.EventType=vs,vs.OPEN="a",vs.CLOSE="b",vs.ERROR="c",vs.MESSAGE="d",Je.prototype.listen=Je.prototype.J,Qs=vp,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,m0=xe}).apply(typeof Oa<"u"?Oa:typeof self<"u"?self:typeof window<"u"?window:{});const Qg="@firebase/firestore",Xg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new wu("@firebase/firestore");function wi(){return ni.logLevel}function $(t,...e){if(ni.logLevel<=te.DEBUG){const n=e.map(Af);ni.debug(`Firestore (${fs}): ${t}`,...n)}}function bn(t,...e){if(ni.logLevel<=te.ERROR){const n=e.map(Af);ni.error(`Firestore (${fs}): ${t}`,...n)}}function ts(t,...e){if(ni.logLevel<=te.WARN){const n=e.map(Af);ni.warn(`Firestore (${fs}): ${t}`,...n)}}function Af(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,w0(t,r,n)}function w0(t,e,n){let r=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw bn(r),new Error(r)}function le(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||w0(e,i,r)}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class IC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SC{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string",31837,{l:r}),new E0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new nt(e)}}class xC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new xC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){le(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Yg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Yg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=CC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function td(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Hc(i)===Hc(s)?re(i,s):Hc(i)?1:-1}return re(t.length,e.length)}const kC=55296,PC=57343;function Hc(t){const e=t.charCodeAt(0);return e>=kC&&e<=PC}function ns(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=rn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return re(e.length,n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),i=rn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?rn.extractNumericId(e).compare(rn.extractNumericId(n)):td(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Ee extends rn{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const NC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends rn{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return NC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jg}static keyField(){return new Ge([Jg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Ee.fromString(e))}static fromName(e){return new W(Ee.fromString(e).popFirst(5))}static empty(){return new W(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t,e,n){if(!n)throw new q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DC(t,e,n,r){if(e===!0&&r===!0)throw new q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zg(t){if(!W.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function T0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Cf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function ri(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cf(t);throw new q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t,e){const n={typeString:t};return e&&(n.value=e),n}function ea(t,e){if(!T0(t))throw new q(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=-62135596800,ty=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ty);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ey)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ty}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ea(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ey;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:be("string",pe._jsonSchemaVersion),seconds:be("number"),nanoseconds:be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new pe(0,0))}static max(){return new X(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=-1;function VC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new yr(i,W.empty(),e)}function OC(t){return new yr(t.readTime,t.key,Mo)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(X.min(),W.empty(),Mo)}static max(){return new yr(X.max(),W.empty(),Mo)}}function LC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==MC)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function FC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ms(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Su.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=-1;function xu(t){return t==null}function Bl(t){return t===0&&1/t==-1/0}function UC(t){return typeof t=="number"&&Number.isInteger(t)&&!Bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="";function zC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ny(e)),e=$C(t.get(n),e);return ny(e)}function $C(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case I0:n+="";break;default:n+=s}}return n}function ny(t){return t+I0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function S0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new La(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new La(this.root,e,this.comparator,!1)}getReverseIterator(){return new La(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new La(this.root,e,this.comparator,!0)}}class La{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iy(this.data.getIterator())}getIteratorFrom(e){return new iy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class iy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Fe(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new x0("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const BC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(le(!!t,39018),typeof t=="string"){let e=0;const n=BC.exec(t);if(le(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="server_timestamp",R0="__type__",C0="__previous_value__",k0="__local_write_time__";function Pf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[R0])==null?void 0:r.stringValue)===A0}function Au(t){const e=t.mapValue.fields[C0];return Pf(e)?Au(e):e}function jo(t){const e=vr(t.mapValue.fields[k0].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,r,i,s,o,l,u,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f}}const Hl="(default)";class Fo{constructor(e,n){this.projectId=e,this.database=n||Hl}static empty(){return new Fo("","")}get isDefaultDatabase(){return this.database===Hl}isEqual(e){return e instanceof Fo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="__type__",qC="__max__",Ma={mapValue:{}},N0="__vector__",ql="value";function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pf(t)?4:GC(t)?9007199254740991:WC(t)?10:11:K(28295,{value:t})}function gn(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jo(t).isEqual(jo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vr(i.timestampValue),l=vr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _r(i.bytesValue).isEqual(_r(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?Bl(o)===Bl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ry(o)!==ry(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!gn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Uo(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return sy(t.timestampValue,e.timestampValue);case 4:return sy(jo(t),jo(e));case 5:return td(t.stringValue,e.stringValue);case 6:return function(s,o){const l=_r(s),u=_r(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=re(l[c],u[c]);if(f!==0)return f}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=re(Ce(s.latitude),Ce(o.latitude));return l!==0?l:re(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return oy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,A,R,P;const l=s.fields||{},u=o.fields||{},c=(g=l[ql])==null?void 0:g.arrayValue,f=(A=u[ql])==null?void 0:A.arrayValue,m=re(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return m!==0?m:oy(c,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ma.mapValue&&o===Ma.mapValue)return 0;if(s===Ma.mapValue)return 1;if(o===Ma.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=td(u[m],f[m]);if(g!==0)return g;const A=rs(l[u[m]],c[f[m]]);if(A!==0)return A}return re(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function sy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=vr(t),r=vr(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function oy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=rs(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function is(t){return nd(t)}function nd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=nd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${nd(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function sl(t){switch(wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Au(t);return e?16+sl(e):16;case 5:return 2*t.stringValue.length;case 6:return _r(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+sl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Rr(r.fields,(s,o)=>{i+=s.length+sl(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function rd(t){return!!t&&"integerValue"in t}function Nf(t){return!!t&&"arrayValue"in t}function ay(t){return!!t&&"nullValue"in t}function ly(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ol(t){return!!t&&"mapValue"in t}function WC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[P0])==null?void 0:r.stringValue)===N0}function ho(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ho(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ho(t.arrayValue.values[n]);return e}return{...t}}function GC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===qC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ol(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ho(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ho(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ol(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ol(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(ho(this.value))}}function b0(t){const e=[];return Rr(t.fields,(n,r)=>{const i=new Ge([n]);if(ol(r)){const s=b0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new it(e,0,X.min(),X.min(),X.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,X.min(),X.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,X.min(),X.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.position=e,this.inclusive=n}}function uy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=rs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n="asc"){this.field=e,this.dir=n}}function KC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{}class Le extends D0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new XC(e,n,r):n==="array-contains"?new ZC(e,r):n==="in"?new ek(e,r):n==="not-in"?new tk(e,r):n==="array-contains-any"?new nk(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YC(e,r):new JC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(rs(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends D0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new yn(e,n)}matches(e){return V0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function V0(t){return t.op==="and"}function O0(t){return QC(t)&&V0(t)}function QC(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function id(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+is(t.value);if(O0(t))return t.filters.map(e=>id(e)).join(",");{const e=t.filters.map(n=>id(n)).join(",");return`${t.op}(${e})`}}function L0(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&gn(r.value,i.value)}(t,e):t instanceof yn?function(r,i){return i instanceof yn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&L0(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function M0(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${is(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(M0).join(" ,")+"}"}(t):"Filter"}class XC extends Le{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class YC extends Le{constructor(e,n){super(e,"in",n),this.keys=j0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JC extends Le{constructor(e,n){super(e,"not-in",n),this.keys=j0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function j0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class ZC extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nf(n)&&Uo(n.arrayValue,this.value)}}class ek extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Uo(this.value.arrayValue,n)}}class tk extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Uo(this.value.arrayValue,n)}}class nk extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Uo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function hy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new rk(t,e,n,r,i,s,o)}function bf(t){const e=Y(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>id(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>is(r)).join(",")),e.Te=n}return e.Te}function Df(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!L0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cy(t.startAt,e.startAt)&&cy(t.endAt,e.endAt)}function sd(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ik(t,e,n,r,i,s,o,l){return new Ru(t,e,n,r,i,s,o,l)}function Vf(t){return new Ru(t)}function dy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sk(t){return t.collectionGroup!==null}function fo(t){const e=Y(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Fe(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Gl(s,r))}),n.has(Ge.keyField().canonicalString())||e.Ie.push(new Gl(Ge.keyField(),r))}return e.Ie}function cn(t){const e=Y(t);return e.Ee||(e.Ee=ok(e,fo(t))),e.Ee}function ok(t,e){if(t.limitType==="F")return hy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Gl(i.field,s)});const n=t.endAt?new Wl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wl(t.startAt.position,t.startAt.inclusive):null;return hy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function od(t,e,n){return new Ru(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cu(t,e){return Df(cn(t),cn(e))&&t.limitType===e.limitType}function F0(t){return`${bf(cn(t))}|lt:${t.limitType}`}function Ei(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>M0(i)).join(", ")}]`),xu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>is(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>is(i)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of fo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=uy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,fo(r),i)||r.endAt&&!function(o,l,u){const c=uy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,fo(r),i))}(t,e)}function ak(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function U0(t){return(e,n)=>{let r=!1;for(const i of fo(t)){const s=lk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lk(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?rs(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return S0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=new Se(W.comparator);function Dn(){return uk}const z0=new Se(W.comparator);function Xs(...t){let e=z0;for(const n of t)e=e.insert(n.key,n);return e}function $0(t){let e=z0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hr(){return po()}function B0(){return po()}function po(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const ck=new Se(W.comparator),hk=new Fe(W.comparator);function ie(...t){let e=hk;for(const n of t)e=e.add(n);return e}const dk=new Fe(re);function fk(){return dk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bl(e)?"-0":e}}function H0(t){return{integerValue:""+t}}function pk(t,e){return UC(e)?H0(e):Of(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this._=void 0}}function mk(t,e,n){return t instanceof Kl?function(i,s){const o={fields:{[R0]:{stringValue:A0},[k0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pf(s)&&(s=Au(s)),s&&(o.fields[C0]=s),{mapValue:o}}(n,e):t instanceof zo?W0(t,e):t instanceof $o?G0(t,e):function(i,s){const o=q0(i,s),l=fy(o)+fy(i.Ae);return rd(o)&&rd(i.Ae)?H0(l):Of(i.serializer,l)}(t,e)}function gk(t,e,n){return t instanceof zo?W0(t,e):t instanceof $o?G0(t,e):n}function q0(t,e){return t instanceof Ql?function(r){return rd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Kl extends Pu{}class zo extends Pu{constructor(e){super(),this.elements=e}}function W0(t,e){const n=K0(e);for(const r of t.elements)n.some(i=>gn(i,r))||n.push(r);return{arrayValue:{values:n}}}class $o extends Pu{constructor(e){super(),this.elements=e}}function G0(t,e){let n=K0(e);for(const r of t.elements)n=n.filter(i=>!gn(i,r));return{arrayValue:{values:n}}}class Ql extends Pu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function fy(t){return Ce(t.integerValue||t.doubleValue)}function K0(t){return Nf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof zo&&i instanceof zo||r instanceof $o&&i instanceof $o?ns(r.elements,i.elements,gn):r instanceof Ql&&i instanceof Ql?gn(r.Ae,i.Ae):r instanceof Kl&&i instanceof Kl}(t.transform,e.transform)}class vk{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function al(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nu{}function Q0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Y0(t.key,hn.none()):new ta(t.key,t.data,hn.none());{const n=t.data,r=mt.empty();let i=new Fe(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cr(t.key,r,new xt(i.toArray()),hn.none())}}function _k(t,e,n){t instanceof ta?function(i,s,o){const l=i.value.clone(),u=my(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(i,s,o){if(!al(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=my(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(X0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function mo(t,e,n,r){return t instanceof ta?function(s,o,l,u){if(!al(s.precondition,o))return l;const c=s.value.clone(),f=gy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(s,o,l,u){if(!al(s.precondition,o))return l;const c=gy(s.fieldTransforms,u,o),f=o.data;return f.setAll(X0(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return al(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function wk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=q0(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function py(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ns(r,i,(s,o)=>yk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends Nu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cr extends Nu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function X0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function my(t,e,n){const r=new Map;le(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,gk(o,l,n[i]))}return r}function gy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mk(s,o,e))}return r}class Y0 extends Nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ek extends Nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_k(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=mo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=mo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=B0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Q0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,r)=>py(n,r))&&ns(this.baseMutations,e.baseMutations,(n,r)=>py(n,r))}}class Lf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return ck}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Lf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,se;function xk(t){switch(t){case M.OK:return K(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function J0(t){if(t===void 0)return bn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Pe.OK:return M.OK;case Pe.CANCELLED:return M.CANCELLED;case Pe.UNKNOWN:return M.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return M.INTERNAL;case Pe.UNAVAILABLE:return M.UNAVAILABLE;case Pe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Pe.NOT_FOUND:return M.NOT_FOUND;case Pe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Pe.ABORTED:return M.ABORTED;case Pe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Pe.DATA_LOSS:return M.DATA_LOSS;default:return K(39323,{code:t})}}(se=Pe||(Pe={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new dr([4294967295,4294967295],0);function yy(t){const e=Ak().encode(t),n=new p0;return n.update(e),new Uint8Array(n.digest())}function vy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new dr([n,r],0),new dr([i,s],0)]}class Mf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ys(`Invalid padding: ${n}`);if(r<0)throw new Ys(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ys(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ys(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=dr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(dr.fromNumber(r)));return i.compare(Rk)===1&&(i=new dr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=yy(e),[r,i]=vy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Mf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=yy(e),[r,i]=vy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bu(X.min(),i,new Se(re),Dn(),ie())}}class na{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new na(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class Z0{constructor(e,n){this.targetId=e,this.Ce=n}}class eE{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class _y{constructor(){this.ve=0,this.Fe=wy(),this.Me=Xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),n=ie(),r=ie();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new na(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=wy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Ck{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dn(),this.Je=ja(),this.He=ja(),this.Ye=new Se(re)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(sd(s))if(r===0){const o=new W(s.path);this.et(n,o,it.newNoDocument(o,X.min()))}else le(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=_r(r).toUint8Array()}catch(u){if(u instanceof x0)return ts("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Mf(o,i,s)}catch(u){return ts(u instanceof Ys?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&sd(l.target)){const u=new W(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,it.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ie();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new bu(e,n,this.Ye,this.je,r);return this.je=Dn(),this.Je=ja(),this.He=ja(),this.Ye=new Se(re),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new _y,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Fe(re),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Fe(re),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _y),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ja(){return new Se(W.comparator)}function wy(){return new Se(W.comparator)}const kk={asc:"ASCENDING",desc:"DESCENDING"},Pk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nk={and:"AND",or:"OR"};class bk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ad(t,e){return t.useProto3Json||xu(e)?e:{value:e}}function Xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Dk(t,e){return Xl(t,e.toTimestamp())}function dn(t){return le(!!t,49232),X.fromTimestamp(function(n){const r=vr(n);return new pe(r.seconds,r.nanos)}(t))}function jf(t,e){return ld(t,e).canonicalString()}function ld(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nE(t){const e=Ee.fromString(t);return le(aE(e),10190,{key:e.toString()}),e}function ud(t,e){return jf(t.databaseId,e.path)}function qc(t,e){const n=nE(e);if(n.get(1)!==t.databaseId.projectId)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(iE(n))}function rE(t,e){return jf(t.databaseId,e)}function Vk(t){const e=nE(t);return e.length===4?Ee.emptyPath():iE(e)}function cd(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iE(t){return le(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ey(t,e,n){return{name:ud(t,e),fields:n.value.mapValue.fields}}function Ok(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(le(f===void 0||typeof f=="string",58123),Xe.fromBase64String(f||"")):(le(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Xe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:J0(c.code);return new q(f,c.message||"")}(o);n=new eE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qc(t,r.document.name),s=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):X.min(),l=new mt({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new ll(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qc(t,r.document),s=r.readTime?dn(r.readTime):X.min(),o=it.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ll([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qc(t,r.document),s=r.removedTargetIds||[];n=new ll([],s,i,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Sk(i,s),l=r.targetId;n=new Z0(l,o)}}return n}function Lk(t,e){let n;if(e instanceof ta)n={update:Ey(t,e.key,e.value)};else if(e instanceof Y0)n={delete:ud(t,e.key)};else if(e instanceof Cr)n={update:Ey(t,e.key,e.data),updateMask:qk(e.fieldMask)};else{if(!(e instanceof Ek))return K(16599,{Vt:e.type});n={verify:ud(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Kl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof $o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ql)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Dk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function Mk(t,e){return t&&t.length>0?(le(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?dn(i.updateTime):dn(s);return o.isEqual(X.min())&&(o=dn(s)),new vk(o,i.transformResults||[])}(n,e))):[]}function jk(t,e){return{documents:[rE(t,e.path)]}}function Fk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rE(t,i);const s=function(c){if(c.length!==0)return oE(yn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Ti(g.field),direction:$k(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ad(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function Uk(t){let e=Vk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=sE(m);return g instanceof yn&&O0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(R){return new Gl(Ii(R.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,xu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,A=m.values||[];return new Wl(A,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,A=m.values||[];return new Wl(A,g)}(n.endAt)),ik(e,i,o,s,l,"F",u,c)}function zk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ii(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ii(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ii(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ii(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Ii(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>sE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function $k(t){return kk[t]}function Bk(t){return Pk[t]}function Hk(t){return Nk[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Ii(t){return Ge.fromServerFormat(t.fieldPath)}function oE(t){return t instanceof Le?function(n){if(n.op==="=="){if(ly(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NAN"}};if(ay(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ly(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NAN"}};if(ay(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(n.field),op:Bk(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(i=>oE(i));return r.length===1?r[0]:{compositeFilter:{op:Hk(n.op),filters:r}}}(t):K(54877,{filter:t})}function qk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r,i,s=X.min(),o=X.min(),l=Xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.yt=e}}function Gk(t){const e=Uk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?od(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.Cn=new Qk}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(yr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class Qk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Fe(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Fe(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lE=41943040;class ft{static withCacheSize(e){return new ft(e,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.DEFAULT_COLLECTION_PERCENTILE=10,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ft.DEFAULT=new ft(lE,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ft.DISABLED=new ft(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ss(0)}static cr(){return new ss(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="LruGarbageCollector",Xk=1048576;function Sy([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class Yk{constructor(e){this.Ir=e,this.buffer=new Fe(Sy),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Sy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Jk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){$(Iy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ms(n)?$(Iy,"Ignoring IndexedDB error during garbage collection: ",n):await ps(n)}await this.Vr(3e5)})}}class Zk{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Su.ce);const r=new Yk(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Ty)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ty):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),wi()<=te.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function eP(t,e){return new Zk(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&mo(r.mutation,i,xt.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Hr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Dn();const o=po(),l=function(){return po()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Cr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),mo(f.mutation,c,f.mutation.getFieldMask(),pe.now())):o.set(c.key,xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new nP(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=po();let i=new Se((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||xt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=B0();f.forEach(g=>{if(!s.has(g)){const A=Q0(n.get(g),r.get(g));A!==null&&m.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Hr());let l=Mo,u=s;return o.next(c=>O.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ie())).next(f=>({batchId:l,changes:$0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Xs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xs();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const c=function(m,g){return new Ru(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,it.newInvalidDocument(f)))});let l=Xs();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&mo(f.mutation,c,xt.empty(),pe.now()),ku(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:dn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:Gk(i.bundledQuery),readTime:dn(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.overlays=new Se(W.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Hr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Hr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Hr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return O.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ik(n,r));let s=this.qr.get(n);s===void 0&&(s=ie(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.Qr=new Fe($e.$r),this.Ur=new Fe($e.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new $e(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new W(new Ee([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new W(new Ee([])),r=new $e(n,e),i=new $e(n,e+1);let s=ie();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return W.comparator(e.key,n.key)||re(e.Yr,n.Yr)}static Kr(e,n){return re(e.Yr,n.Yr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Fe($e.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?kf:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(re);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new $e(new W(s),0);let l=new Fe(re);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new $e(n,0),i=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.ri=e,this.docs=function(){return new Se(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||LC(OC(f),r)<=0||(i.has(f.key)||ku(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uP(this)}getSize(e){return O.resolve(this.size)}}class uP extends tP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.persistence=e,this.si=new di(n=>bf(n),Df),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.oi=0,this._i=new Ff,this.targetCount=0,this.ai=ss.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n){this.ui={},this.overlays={},this.ci=new Su(0),this.li=!1,this.li=!0,this.hi=new oP,this.referenceDelegate=e(this),this.Pi=new cP(this),this.indexManager=new Kk,this.remoteDocumentCache=function(i){return new lP(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Wk(n),this.Ii=new iP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new aP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new hP(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class hP extends jC{constructor(e){super(),this.currentSequenceNumber=e}}class Uf{constructor(e){this.persistence=e,this.Ri=new Ff,this.Vi=null}static mi(e){return new Uf(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const i=W.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Yl{constructor(e,n){this.persistence=e,this.pi=new di(r=>zC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=eP(this,n)}static mi(e,n){return new Yl(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=sl(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return FS()?8:FC(ot())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new dP;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(wi()<=te.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Ei(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(wi()<=te.DEBUG&&$("QueryEngine","Query:",Ei(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(wi()<=te.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Ei(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):O.resolve())}ys(e,n){if(dy(n))return O.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=od(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,od(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return dy(n)||i.isEqual(X.min())?O.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?O.resolve(null):(wi()<=te.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ei(n)),this.vs(e,o,n,VC(i,Mo)).next(l=>l))})}Ds(e,n){let r=new Fe(U0(e));return n.forEach((i,s)=>{ku(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return wi()<=te.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ei(n)),this.ps.getDocumentsMatchingQuery(e,n,yr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="LocalStore",pP=3e8;class mP{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Se(re),this.xs=new di(s=>bf(s),Df),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function gP(t,e,n,r){return new mP(t,e,n,r)}async function cE(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function yP(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let A=O.resolve();return g.forEach(R=>{A=A.next(()=>f.getEntry(u,R)).next(P=>{const V=c.docVersions.get(R);le(V!==null,48541),P.version.compareTo(V)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hE(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function vP(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,m)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(Xe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(m,A),function(P,V,w){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=pP?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,A,f)&&l.push(n.Pi.updateTargetData(s,A))});let u=Dn(),c=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(_P(s,o,e.documentUpdates).next(f=>{u=f.ks,c=f.qs})),!r.isEqual(X.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function _P(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$($f,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function wP(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=kf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function EP(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function hd(t,e,n){const r=Y(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ms(o))throw o;$($f,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function xy(t,e,n){const r=Y(t);let i=X.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=Y(u),g=m.xs.get(f);return g!==void 0?O.resolve(m.Ms.get(g)):m.Pi.getTargetData(c,f)}(r,o,cn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ie())).next(l=>(TP(r,ak(e),l),{documents:l,Qs:s})))}function TP(t,e,n){let r=t.Os.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Ay{constructor(){this.activeTargetIds=fk()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IP{constructor(){this.Mo=new Ay,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ay,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="ConnectivityMonitor";class Cy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){$(Ry,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){$(Ry,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa=null;function dd(){return Fa===null?Fa=function(){return 268435456+Math.round(2147483648*Math.random())}():Fa++,"0x"+Fa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="RestConnection",xP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Hl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=dd(),l=this.zo(e,n.toUriEncodedString());$(Wc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),f=cs(c);return this.Jo(e,l,u,r,f).then(m=>($(Wc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ts(Wc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=xP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class CP extends AP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=dd();return new Promise((l,u)=>{const c=new m0;c.setWithCredentials(!0),c.listenOnce(g0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case il.NO_ERROR:const m=c.getResponseJson();$(tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case il.TIMEOUT:$(tt,`RPC '${e}' ${o} timed out`),u(new q(M.DEADLINE_EXCEEDED,"Request time out"));break;case il.HTTP_ERROR:const g=c.getStatus();if($(tt,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let A=c.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const P=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(_)>=0?_:M.UNKNOWN}(R.status);u(new q(P,R.message))}else u(new q(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new q(M.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{$(tt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(tt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}T_(e,n,r){const i=dd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_0(),l=v0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(tt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);this.I_(m);let g=!1,A=!1;const R=new RP({Yo:V=>{A?$(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(g||($(tt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),$(tt,`RPC '${e}' stream ${i} sending:`,V),m.send(V))},Zo:()=>m.close()}),P=(V,w,_)=>{V.listen(w,T=>{try{_(T)}catch(b){setTimeout(()=>{throw b},0)}})};return P(m,Qs.EventType.OPEN,()=>{A||($(tt,`RPC '${e}' stream ${i} transport opened.`),R.o_())}),P(m,Qs.EventType.CLOSE,()=>{A||(A=!0,$(tt,`RPC '${e}' stream ${i} transport closed`),R.a_(),this.E_(m))}),P(m,Qs.EventType.ERROR,V=>{A||(A=!0,ts(tt,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),R.a_(new q(M.UNAVAILABLE,"The operation could not be completed")))}),P(m,Qs.EventType.MESSAGE,V=>{var w;if(!A){const _=V.data[0];le(!!_,16349);const T=_,b=(T==null?void 0:T.error)||((w=T[0])==null?void 0:w.error);if(b){$(tt,`RPC '${e}' stream ${i} received error:`,b);const L=b.status;let j=function(I){const x=Pe[I];if(x!==void 0)return J0(x)}(L),E=b.message;j===void 0&&(j=M.INTERNAL,E="Unknown error status: "+L+" with message "+b.message),A=!0,R.a_(new q(j,E)),m.close()}else $(tt,`RPC '${e}' stream ${i} received:`,_),R.u_(_)}}),P(l,y0.STAT_EVENT,V=>{V.stat===ed.PROXY?$(tt,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===ed.NOPROXY&&$(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.__()},0),R}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){return new bk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="PersistentStream";class fE{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new dE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(ky,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():($(ky,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kP extends fE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Ok(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?dn(o.readTime):X.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=cd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=sd(u)?{documents:jk(s,u)}:{query:Fk(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=tE(s,o.resumeToken);const c=ad(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Xl(s,o.snapshotVersion.toTimestamp());const c=ad(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=zk(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=cd(this.serializer),n.removeTarget=e,this.q_(n)}}class PP extends fE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Mk(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=cd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Lk(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{}class bP extends NP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,ld(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(M.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,ld(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class DP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(bn(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="RemoteStore";class VP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{fi(this)&&($(ii,"Restarting streams for network reachability change."),await async function(u){const c=Y(u);c.Ea.add(4),await ra(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Vu(c)}(this))})}),this.Ra=new DP(r,i)}}async function Vu(t){if(fi(t))for(const e of t.da)await e(!0)}async function ra(t){for(const e of t.da)await e(!1)}function pE(t,e){const n=Y(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Wf(n)?qf(n):gs(n).O_()&&Hf(n,e))}function Bf(t,e){const n=Y(t),r=gs(n);n.Ia.delete(e),r.O_()&&mE(n,e),n.Ia.size===0&&(r.O_()?r.L_():fi(n)&&n.Ra.set("Unknown"))}function Hf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).Y_(e)}function mE(t,e){t.Va.Ue(e),gs(t).Z_(e)}function qf(t){t.Va=new Ck({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.Ra.ua()}function Wf(t){return fi(t)&&!gs(t).x_()&&t.Ia.size>0}function fi(t){return Y(t).Ea.size===0}function gE(t){t.Va=void 0}async function OP(t){t.Ra.set("Online")}async function LP(t){t.Ia.forEach((e,n)=>{Hf(t,e)})}async function MP(t,e){gE(t),Wf(t)?(t.Ra.ha(e),qf(t)):t.Ra.set("Unknown")}async function jP(t,e,n){if(t.Ra.set("Online"),e instanceof eE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){$(ii,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jl(t,r)}else if(e instanceof ll?t.Va.Ze(e):e instanceof Z0?t.Va.st(e):t.Va.tt(e),!n.isEqual(X.min()))try{const r=await hE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(c);f&&s.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(Xe.EMPTY_BYTE_STRING,f.snapshotVersion)),mE(s,u);const m=new tr(f.target,u,c,f.sequenceNumber);Hf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(ii,"Failed to raise snapshot:",r),await Jl(t,r)}}async function Jl(t,e,n){if(!ms(e))throw e;t.Ea.add(1),await ra(t),t.Ra.set("Offline"),n||(n=()=>hE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(ii,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Vu(t)})}function yE(t,e){return e().catch(n=>Jl(t,n,e))}async function Ou(t){const e=Y(t),n=Er(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:kf;for(;FP(e);)try{const i=await wP(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,UP(e,i)}catch(i){await Jl(e,i)}vE(e)&&_E(e)}function FP(t){return fi(t)&&t.Ta.length<10}function UP(t,e){t.Ta.push(e);const n=Er(t);n.O_()&&n.X_&&n.ea(e.mutations)}function vE(t){return fi(t)&&!Er(t).x_()&&t.Ta.length>0}function _E(t){Er(t).start()}async function zP(t){Er(t).ra()}async function $P(t){const e=Er(t);for(const n of t.Ta)e.ea(n.mutations)}async function BP(t,e,n){const r=t.Ta.shift(),i=Lf.from(r,e,n);await yE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ou(t)}async function HP(t,e){e&&Er(t).X_&&await async function(r,i){if(function(o){return xk(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();Er(r).B_(),await yE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ou(r)}}(t,e),vE(t)&&_E(t)}async function Py(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),$(ii,"RemoteStore received new credentials");const r=fi(n);n.Ea.add(3),await ra(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Vu(n)}async function qP(t,e){const n=Y(t);e?(n.Ea.delete(2),await Vu(n)):e||(n.Ea.add(2),await ra(n),n.Ra.set("Unknown"))}function gs(t){return t.ma||(t.ma=function(n,r,i){const s=Y(n);return s.sa(),new kP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:OP.bind(null,t),t_:LP.bind(null,t),r_:MP.bind(null,t),H_:jP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Wf(t)?qf(t):t.Ra.set("Unknown")):(await t.ma.stop(),gE(t))})),t.ma}function Er(t){return t.fa||(t.fa=function(n,r,i){const s=Y(n);return s.sa(),new PP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:zP.bind(null,t),r_:HP.bind(null,t),ta:$P.bind(null,t),na:BP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Ou(t)):(await t.fa.stop(),t.Ta.length>0&&($(ii,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Gf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kf(t,e){if(bn("AsyncQueue",`${e}: ${t}`),ms(t))return new q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{static emptySet(e){return new Wi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Xs(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.ga=new Se(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class os{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new os(e,n,Wi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class GP{constructor(){this.queries=by(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=by(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new q(M.ABORTED,"Firestore shutting down"))}}function by(){return new di(t=>F0(t),Cu)}async function KP(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new WP,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Kf(o,`Initialization of query '${Ei(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Qf(n)}async function QP(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function XP(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Qf(n)}function YP(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Qf(t){t.Ca.forEach(e=>{e.next()})}var fd,Dy;(Dy=fd||(fd={})).Ma="default",Dy.Cache="cache";class JP{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==fd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.key=e}}class EE{constructor(e){this.key=e}}class ZP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ie(),this.mutatedKeys=ie(),this.eu=U0(e),this.tu=new Wi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Ny,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),A=ku(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),P=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let V=!1;g&&A?g.data.isEqual(A.data)?R!==P&&(r.track({type:3,doc:A}),V=!0):this.su(g,A)||(r.track({type:2,doc:A}),V=!0,(u&&this.eu(A,u)>0||c&&this.eu(A,c)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),V=!0):g&&!A&&(r.track({type:1,doc:g}),V=!0,(u||c)&&(l=!0)),V&&(A?(o=o.add(A),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(A,R){const P=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:V})}};return P(A)-P(R)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new os(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ny,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ie(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new EE(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new wE(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return os.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Xf="SyncEngine";class e2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class t2{constructor(e){this.key=e,this.hu=!1}}class n2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new di(l=>F0(l),Cu),this.Iu=new Map,this.Eu=new Set,this.du=new Se(W.comparator),this.Au=new Map,this.Ru=new Ff,this.Vu={},this.mu=new Map,this.fu=ss.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function r2(t,e,n=!0){const r=RE(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await TE(r,e,n,!0),i}async function i2(t,e){const n=RE(t);await TE(n,e,!0,!1)}async function TE(t,e,n,r){const i=await EP(t.localStore,cn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await s2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&pE(t.remoteStore,i),l}async function s2(t,e,n,r,i){t.pu=(m,g,A)=>async function(P,V,w,_){let T=V.view.ru(w);T.Cs&&(T=await xy(P.localStore,V.query,!1).then(({documents:E})=>V.view.ru(E,T)));const b=_&&_.targetChanges.get(V.targetId),L=_&&_.targetMismatches.get(V.targetId)!=null,j=V.view.applyChanges(T,P.isPrimaryClient,b,L);return Oy(P,V.targetId,j.au),j.snapshot}(t,m,g,A);const s=await xy(t.localStore,e,!0),o=new ZP(e,s.Qs),l=o.ru(s.documents),u=na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Oy(t,n,c.au);const f=new e2(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function o2(t,e,n){const r=Y(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Cu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await hd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Bf(r.remoteStore,i.targetId),pd(r,i.targetId)}).catch(ps)):(pd(r,i.targetId),await hd(r.localStore,i.targetId,!0))}async function a2(t,e){const n=Y(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bf(n.remoteStore,r.targetId))}async function l2(t,e,n){const r=m2(t);try{const i=await function(o,l){const u=Y(o),c=pe.now(),f=l.reduce((A,R)=>A.add(R.key),ie());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let R=Dn(),P=ie();return u.Ns.getEntries(A,f).next(V=>{R=V,R.forEach((w,_)=>{_.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,R)).next(V=>{m=V;const w=[];for(const _ of l){const T=wk(_,m.get(_.key).overlayedDocument);T!=null&&w.push(new Cr(_.key,T,b0(T.value.mapValue),hn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,w,l)}).next(V=>{g=V;const w=V.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(A,V.batchId,w)})}).then(()=>({batchId:g.batchId,changes:$0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Se(re)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await ia(r,i.changes),await Ou(r.remoteStore)}catch(i){const s=Kf(i,"Failed to persist write");n.reject(s)}}async function IE(t,e){const n=Y(t);try{const r=await vP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?le(o.hu,14607):i.removedDocuments.size>0&&(le(o.hu,42227),o.hu=!1))}),await ia(n,r,e)}catch(r){await ps(r)}}function Vy(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.Sa)g.va(l)&&(c=!0)}),c&&Qf(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function u2(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Se(W.comparator);o=o.insert(s,it.newNoDocument(s,X.min()));const l=ie().add(s),u=new bu(X.min(),new Map,new Se(re),o,l);await IE(r,u),r.du=r.du.remove(s),r.Au.delete(e),Yf(r)}else await hd(r.localStore,e,!1).then(()=>pd(r,e,n)).catch(ps)}async function c2(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await yP(n.localStore,e);xE(n,r,null),SE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ia(n,i)}catch(i){await ps(i)}}async function h2(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(le(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);xE(r,e,n),SE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ia(r,i)}catch(i){await ps(i)}}function SE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function xE(t,e,n){const r=Y(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function pd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||AE(t,r)})}function AE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Bf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Yf(t))}function Oy(t,e,n){for(const r of n)r instanceof wE?(t.Ru.addReference(r.key,e),d2(t,r)):r instanceof EE?($(Xf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||AE(t,r.key)):K(19791,{wu:r})}function d2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||($(Xf,"New document in limbo: "+n),t.Eu.add(r),Yf(t))}function Yf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(Ee.fromString(e)),r=t.fu.next();t.Au.set(r,new t2(n)),t.du=t.du.insert(n,r),pE(t.remoteStore,new tr(cn(Vf(n.path)),r,"TargetPurposeLimboResolution",Su.ce))}}async function ia(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=zf.As(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(c,g=>O.forEach(g.Es,A=>f.persistence.referenceDelegate.addReference(m,g.targetId,A)).next(()=>O.forEach(g.ds,A=>f.persistence.referenceDelegate.removeReference(m,g.targetId,A)))))}catch(m){if(!ms(m))throw m;$($f,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const A=f.Ms.get(g),R=A.snapshotVersion,P=A.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(g,P)}}}(r.localStore,s))}async function f2(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){$(Xf,"User change. New user:",e.toKey());const r=await cE(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(M.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ia(n,r.Ls)}}function p2(t,e){const n=Y(t),r=n.Au.get(e);if(r&&r.hu)return ie().add(r.key);{let i=ie();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function RE(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=IE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=p2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=u2.bind(null,e),e.Pu.H_=XP.bind(null,e.eventManager),e.Pu.yu=YP.bind(null,e.eventManager),e}function m2(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=c2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=h2.bind(null,e),e}class Zl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Du(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return gP(this.persistence,new fP,e.initialUser,this.serializer)}Cu(e){return new uE(Uf.mi,this.serializer)}Du(e){return new IP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zl.provider={build:()=>new Zl};class g2 extends Zl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){le(this.persistence.referenceDelegate instanceof Yl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Jk(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ft.withCacheSize(this.cacheSizeBytes):ft.DEFAULT;return new uE(r=>Yl.mi(r,n),this.serializer)}}class md{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=f2.bind(null,this.syncEngine),await qP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new GP}()}createDatastore(e){const n=Du(e.databaseInfo.databaseId),r=function(s){return new CP(s)}(e.databaseInfo);return function(s,o,l,u){return new bP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new VP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Vy(this.syncEngine,n,0),function(){return Cy.v()?new Cy:new SP}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const m=new n2(i,s,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);$(ii,"RemoteStore shutting down."),s.Ea.add(5),await ra(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}md.provider={build:()=>new md};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="FirestoreClient";class v2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=Rf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(Tr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Tr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Kf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),$(Tr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ly(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _2(t);$(Tr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Py(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Py(e.remoteStore,i)),t._onlineComponents=e}async function _2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Tr,"Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ts("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new Zl)}}else $(Tr,"Using default OfflineComponentProvider"),await Kc(t,new g2(void 0));return t._offlineComponents}async function CE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Tr,"Using user provided OnlineComponentProvider"),await Ly(t,t._uninitializedComponentsProvider._online)):($(Tr,"Using default OnlineComponentProvider"),await Ly(t,new md))),t._onlineComponents}function w2(t){return CE(t).then(e=>e.syncEngine)}async function E2(t){const e=await CE(t),n=e.eventManager;return n.onListen=r2.bind(null,e.syncEngine),n.onUnlisten=o2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=i2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=a2.bind(null,e.syncEngine),n}function T2(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new y2({next:g=>{f.Nu(),o.enqueueAndForget(()=>QP(s,m));const A=g.docs.has(l);!A&&g.fromCache?c.reject(new q(M.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?c.reject(new q(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new JP(Vf(l.path),f,{includeMetadataChanges:!0,qa:!0});return KP(s,m)}(await E2(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="firestore.googleapis.com",jy=!0;class Fy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=PE,this.ssl=jy}else this.host=e.host,this.ssl=e.ssl??jy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Xk)throw new q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TC;switch(r.type){case"firstParty":return new AC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=My.get(n);r&&($("ComponentProvider","Removing Datastore"),My.delete(n),r.terminate())}(this),Promise.resolve()}}function I2(t,e,n,r={}){var c;t=ri(t,Jf);const i=cs(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Iw(`https://${l}`),Sw("Firestore",!0)),s.host!==PE&&s.host!==l&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!gr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=nt.MOCK_USER;else{f=NS(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new nt(g)}t._authCredentials=new IC(new E0(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zf(this.firestore,e,this._query)}}class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ea(n,je._jsonSchema))return new je(e,r||null,new W(Ee.fromString(n.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:be("string",je._jsonSchemaVersion),referencePath:be("string")};class Bo extends Zf{constructor(e,n,r){super(e,n,Vf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new W(e))}withConverter(e){return new Bo(this.firestore,e,this._path)}}function _i(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=Rf.newId()),bC("doc","path",e),t instanceof Jf){const r=Ee.fromString(e,...n);return Zg(r),new je(t,null,new W(r))}{if(!(t instanceof je||t instanceof Bo))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Zg(r),new je(t.firestore,t instanceof Bo?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="AsyncQueue";class zy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new dE(this,"async_queue_retry"),this._c=()=>{const r=Gc();r&&$(Uy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Gc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new fr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ms(e))throw e;$(Uy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,bn("INTERNAL UNHANDLED ERROR: ",$y(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Gf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:$y(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function $y(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Lu extends Jf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new zy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zy(e),this._firestoreClient=void 0,await e}}}function S2(t,e){const n=typeof t=="object"?t:yf(),r=typeof t=="string"?t:Hl,i=ci(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=kS("firestore");s&&I2(i,...s)}return i}function NE(t){if(t._terminated)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||x2(t),t._firestoreClient}function x2(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,f){return new HC(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,kE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new v2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(Xe.fromBase64String(e))}catch(n){throw new q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ot(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ea(e,Ot._jsonSchema))return Ot.fromBase64String(e.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:be("string",Ot._jsonSchemaVersion),bytes:be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fn._jsonSchemaVersion}}static fromJSON(e){if(ea(e,fn._jsonSchema))return new fn(e.latitude,e.longitude)}}fn._jsonSchemaVersion="firestore/geoPoint/1.0",fn._jsonSchema={type:be("string",fn._jsonSchemaVersion),latitude:be("number"),longitude:be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ea(e,pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new pn(e.vectorValues);throw new q(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pn._jsonSchemaVersion="firestore/vectorValue/1.0",pn._jsonSchema={type:be("string",pn._jsonSchemaVersion),vectorValues:be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=/^__.*__$/;class R2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ta(e,this.data,n,this.fieldTransforms)}}class bE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function DE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:t})}}class tp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new tp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return eu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(DE(this.Ac)&&A2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class C2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Du(e)}Cc(e,n,r,i=!1){return new tp({Ac:e,methodName:n,Dc:r,path:Ge.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VE(t){const e=t._freezeSettings(),n=Du(t._databaseId);return new C2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function k2(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);np("Data must be an object, but it was:",o,r);const l=OE(r,o);let u,c;if(s.merge)u=new xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=gd(e,m,n);if(!o.contains(g))throw new q(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);ME(f,g)||f.push(g)}u=new xt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new R2(new mt(l),u,c)}class ju extends ep{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ju}}function P2(t,e,n,r){const i=t.Cc(1,e,n);np("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();Rr(r,(u,c)=>{const f=rp(e,u,n);c=Ue(c);const m=i.yc(f);if(c instanceof ju)s.push(f);else{const g=Fu(c,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new xt(s);return new bE(o,l,i.fieldTransforms)}function N2(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[gd(e,r,n)],u=[i];if(s.length%2!=0)throw new q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(gd(e,s[g])),u.push(s[g+1]);const c=[],f=mt.empty();for(let g=l.length-1;g>=0;--g)if(!ME(c,l[g])){const A=l[g];let R=u[g];R=Ue(R);const P=o.yc(A);if(R instanceof ju)c.push(A);else{const V=Fu(R,P);V!=null&&(c.push(A),f.set(A,V))}}const m=new xt(c);return new bE(f,m,o.fieldTransforms)}function Fu(t,e){if(LE(t=Ue(t)))return np("Unsupported field value:",e,t),OE(t,e);if(t instanceof ep)return function(r,i){if(!DE(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Fu(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:Xl(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xl(i.serializer,s)}}if(r instanceof fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:tE(i.serializer,r._byteString)};if(r instanceof je){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:jf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof pn)return function(o,l){return{mapValue:{fields:{[P0]:{stringValue:N0},[ql]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Of(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Cf(r)}`)}(t,e)}function OE(t,e){const n={};return S0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,i)=>{const s=Fu(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function LE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof fn||t instanceof Ot||t instanceof je||t instanceof ep||t instanceof pn)}function np(t,e,n){if(!LE(n)||!T0(n)){const r=Cf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function gd(t,e,n){if((e=Ue(e))instanceof Mu)return e._internalPath;if(typeof e=="string")return rp(t,e);throw eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const b2=new RegExp("[~\\*/\\[\\]]");function rp(t,e,n){if(e.search(b2)>=0)throw eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mu(...e.split("."))._internalPath}catch{throw eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(M.INVALID_ARGUMENT,l+t+u)}function ME(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new D2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(FE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class D2 extends jE{data(){return super.data()}}function FE(t,e){return typeof e=="string"?rp(t,e):e instanceof Mu?e._internalPath:e._delegate._internalPath}class V2{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[ql].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ce(o.doubleValue));return new pn(n)}convertGeoPoint(e){return new fn(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Au(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(jo(e));default:return null}}convertTimestamp(e){const n=vr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);le(aE(r),9688,{name:e});const i=new Fo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kr extends jE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(FE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Kr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Kr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Kr._jsonSchema={type:be("string",Kr._jsonSchemaVersion),bundleSource:be("string","DocumentSnapshot"),bundleName:be("string"),bundle:be("string")};class ul extends Kr{data(e={}){return super.data(e)}}class go{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Js(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ul(this._firestore,this._userDataWriter,r.key,r,new Js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:L2(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=go._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Rf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function L2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(t){t=ri(t,je);const e=ri(t.firestore,Lu);return T2(NE(e),t._key).then(n=>F2(e,t,n))}go._jsonSchemaVersion="firestore/querySnapshot/1.0",go._jsonSchema={type:be("string",go._jsonSchemaVersion),bundleSource:be("string","QuerySnapshot"),bundleName:be("string"),bundle:be("string")};class j2 extends V2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function By(t,e,n){t=ri(t,je);const r=ri(t.firestore,Lu),i=O2(t.converter,e);return UE(r,[k2(VE(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,hn.none())])}function Qc(t,e,n,...r){t=ri(t,je);const i=ri(t.firestore,Lu),s=VE(i);let o;return o=typeof(e=Ue(e))=="string"||e instanceof Mu?N2(s,"updateDoc",t._key,e,n,r):P2(s,"updateDoc",t._key,e),UE(i,[o.toMutation(t._key,hn.exists(!0))])}function UE(t,e){return function(r,i){const s=new fr;return r.asyncQueue.enqueueAndForget(async()=>l2(await w2(r),i,s)),s.promise}(NE(t),e)}function F2(t,e,n){const r=n.docs.get(e._key),i=new j2(t);return new Kr(t,i,e._key,r,new Js(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){fs=i})(hs),mn(new Xt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Lu(new SC(r.getProvider("auth-internal")),new RC(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fo(c.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),jt(Qg,Xg,e),jt(Qg,Xg,"esm2020")})();var U2="firebase",z2="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt(U2,z2,"app");const zE="@firebase/installations",ip="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=1e4,BE=`w:${ip}`,HE="FIS_v2",$2="https://firebaseinstallations.googleapis.com/v1",B2=60*60*1e3,H2="installations",q2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},si=new ui(H2,q2,W2);function qE(t){return t instanceof Jt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE({projectId:t}){return`${$2}/projects/${t}/installations`}function GE(t){return{token:t.token,requestStatus:2,expiresIn:K2(t.expiresIn),creationTime:Date.now()}}async function KE(t,e){const r=(await e.json()).error;return si.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function QE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function G2(t,{refreshToken:e}){const n=QE(t);return n.append("Authorization",Q2(e)),n}async function XE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function K2(t){return Number(t.replace("s","000"))}function Q2(t){return`${HE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=WE(t),i=QE(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:HE,appId:t.appId,sdkVersion:BE},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await XE(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:GE(c.authToken)}}else throw await KE("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=/^[cdef][\w-]{21}$/,yd="";function Z2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=eN(t);return J2.test(n)?n:yd}catch{return yd}}function eN(t){return Y2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=new Map;function ZE(t,e){const n=Uu(t);eT(n,e),tN(n,e)}function eT(t,e){const n=JE.get(t);if(n)for(const r of n)r(e)}function tN(t,e){const n=nN();n&&n.postMessage({key:t,fid:e}),rN()}let qr=null;function nN(){return!qr&&"BroadcastChannel"in self&&(qr=new BroadcastChannel("[Firebase] FID Change"),qr.onmessage=t=>{eT(t.data.key,t.data.fid)}),qr}function rN(){JE.size===0&&qr&&(qr.close(),qr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN="firebase-installations-database",sN=1,oi="firebase-installations-store";let Xc=null;function sp(){return Xc||(Xc=Pw(iN,sN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oi)}}})),Xc}async function tu(t,e){const n=Uu(t),i=(await sp()).transaction(oi,"readwrite"),s=i.objectStore(oi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&ZE(t,e.fid),e}async function tT(t){const e=Uu(t),r=(await sp()).transaction(oi,"readwrite");await r.objectStore(oi).delete(e),await r.done}async function zu(t,e){const n=Uu(t),i=(await sp()).transaction(oi,"readwrite"),s=i.objectStore(oi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&ZE(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(t){let e;const n=await zu(t.appConfig,r=>{const i=oN(r),s=aN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===yd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function oN(t){const e=t||{fid:Z2(),registrationStatus:0};return nT(e)}function aN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(si.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=lN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uN(t)}:{installationEntry:e}}async function lN(t,e){try{const n=await X2(t,e);return tu(t.appConfig,n)}catch(n){throw qE(n)&&n.customData.serverCode===409?await tT(t.appConfig):await tu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function uN(t){let e=await Hy(t.appConfig);for(;e.registrationStatus===1;)await YE(100),e=await Hy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await op(t);return r||n}return e}function Hy(t){return zu(t,e=>{if(!e)throw si.create("installation-not-found");return nT(e)})}function nT(t){return cN(t)?{fid:t.fid,registrationStatus:0}:t}function cN(t){return t.registrationStatus===1&&t.registrationTime+$E<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN({appConfig:t,heartbeatServiceProvider:e},n){const r=dN(t,n),i=G2(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:BE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await XE(()=>fetch(r,l));if(u.ok){const c=await u.json();return GE(c)}else throw await KE("Generate Auth Token",u)}function dN(t,{fid:e}){return`${WE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(t,e=!1){let n;const r=await zu(t.appConfig,s=>{if(!rT(s))throw si.create("not-registered");const o=s.authToken;if(!e&&mN(o))return s;if(o.requestStatus===1)return n=fN(t,e),s;{if(!navigator.onLine)throw si.create("app-offline");const l=yN(s);return n=pN(t,l),l}});return n?await n:r.authToken}async function fN(t,e){let n=await qy(t.appConfig);for(;n.authToken.requestStatus===1;)await YE(100),n=await qy(t.appConfig);const r=n.authToken;return r.requestStatus===0?ap(t,e):r}function qy(t){return zu(t,e=>{if(!rT(e))throw si.create("not-registered");const n=e.authToken;return vN(n)?{...e,authToken:{requestStatus:0}}:e})}async function pN(t,e){try{const n=await hN(t,e),r={...e,authToken:n};return await tu(t.appConfig,r),n}catch(n){if(qE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tT(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await tu(t.appConfig,r)}throw n}}function rT(t){return t!==void 0&&t.registrationStatus===2}function mN(t){return t.requestStatus===2&&!gN(t)}function gN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+B2}function yN(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function vN(t){return t.requestStatus===1&&t.requestTime+$E<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(t){const e=t,{installationEntry:n,registrationPromise:r}=await op(e);return r?r.catch(console.error):ap(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t,e=!1){const n=t;return await EN(n),(await ap(n,e)).token}async function EN(t){const{registrationPromise:e}=await op(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t){if(!t||!t.options)throw Yc("App Configuration");if(!t.name)throw Yc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Yc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Yc(t){return si.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="installations",IN="installations-internal",SN=t=>{const e=t.getProvider("app").getImmediate(),n=TN(e),r=ci(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},xN=t=>{const e=t.getProvider("app").getImmediate(),n=ci(e,iT).getImmediate();return{getId:()=>_N(n),getToken:i=>wN(n,i)}};function AN(){mn(new Xt(iT,SN,"PUBLIC")),mn(new Xt(IN,xN,"PRIVATE"))}AN();jt(zE,ip);jt(zE,ip,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="analytics",RN="firebase_id",CN="origin",kN=60*1e3,PN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",lp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new wu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new ui("analytics","Analytics",NN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){if(!t.startsWith(lp)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return wt.warn(e.message),""}return t}function sT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function DN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function VN(t,e){const n=DN("firebase-js-sdk-policy",{createScriptURL:bN}),r=document.createElement("script"),i=`${lp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ON(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function LN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await sT(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){wt.error(l)}t("config",i,s)}async function MN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await sT(n);for(const u of o){const c=l.find(m=>m.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){wt.error(s)}}function jN(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await MN(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await LN(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){wt.error(l)}}return i}function FN(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=jN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function UN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(lp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=30,$N=1e3;class BN{constructor(e={},n=$N){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const oT=new BN;function HN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function qN(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:HN(n)},i=PN.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function WN(t,e=oT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Rt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new QN;return setTimeout(async()=>{l.abort()},kN),aT({appId:r,apiKey:i,measurementId:s},o,l,e)}async function aT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=oT){var l;const{appId:s,measurementId:o}=t;try{await GN(r,e)}catch(u){if(o)return wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await qN(t);return i.deleteThrottleMetadata(s),u}catch(u){const c=u;if(!KN(c)){if(i.deleteThrottleMetadata(s),o)return wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw u}const f=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?wg(n,i.intervalMillis,zN):wg(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),wt.debug(`Calling attemptFetch again in ${f} millis`),aT(t,m,r,i)}}function GN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function KN(t){if(!(t instanceof Jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class QN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function XN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(){if(Aw())try{await Rw()}catch(t){return wt.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return wt.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function JN(t,e,n,r,i,s,o){const l=WN(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&wt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>wt.error(g)),e.push(l);const u=YN().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);UN(s)||VN(s,c.measurementId),i("js",new Date);const m=(o==null?void 0:o.config)??{};return m[CN]="firebase",m.update=!0,f!=null&&(m[RN]=f),i("config",c.measurementId,m),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.app=e}_delete(){return delete yo[this.app.options.appId],Promise.resolve()}}let yo={},Wy=[];const Gy={};let Jc="dataLayer",eb="gtag",Ky,lT,Qy=!1;function tb(){const t=[];if(xw()&&t.push("This is a browser extension environment."),US()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});wt.warn(n.message)}}function nb(t,e,n){tb();const r=t.options.appId;if(!r)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(yo[r]!=null)throw Rt.create("already-exists",{id:r});if(!Qy){ON(Jc);const{wrappedGtag:s,gtagCore:o}=FN(yo,Wy,Gy,Jc,eb);lT=s,Ky=o,Qy=!0}return yo[r]=JN(t,Wy,Gy,e,Ky,Jc,n),new ZN(t)}function rb(t=yf()){t=Ue(t);const e=ci(t,nu);return e.isInitialized()?e.getImmediate():ib(t)}function ib(t,e={}){const n=ci(t,nu);if(n.isInitialized()){const i=n.getImmediate();if(gr(e,n.getOptions()))return i;throw Rt.create("already-initialized")}return n.initialize({options:e})}function sb(t,e,n,r){t=Ue(t),XN(lT,yo[t.app.options.appId],e,n,r).catch(i=>wt.error(i))}const Xy="@firebase/analytics",Yy="0.10.18";function ob(){mn(new Xt(nu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return nb(r,i,n)},"PUBLIC")),mn(new Xt("analytics-internal",t,"PRIVATE")),jt(Xy,Yy),jt(Xy,Yy,"esm2020");function t(e){try{const n=e.getProvider(nu).getImmediate();return{logEvent:(r,i,s)=>sb(n,r,i,s)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}ob();console.log("🚀 === DEBUT FIREBASE.TS ===");console.log("🧪 FIREBASE - Test de log dans firebase.ts");console.log("🚀 Environment:","production");console.log("🚀 Base URL:","/");const $u={apiKey:"AIzaSyDRoNJkXmR7C3dt142AAz_hGCPpfKxkXxE",authDomain:"swear-30c84.firebaseapp.com",projectId:"swear-30c84",storageBucket:"swear-30c84.firebasestorage.app",messagingSenderId:"763991623859",appId:"1:763991623859:web:fd3ea15c87ae4562c608c6",measurementId:"G-2M6CF3JFJ8"};console.log("🚀 Firebase config:",$u);console.log("🚀 Initializing Firebase app...");const up=Nw($u);console.log("🔥 Firebase app initialized");console.log("🔥 Project ID:",$u.projectId);console.log("🔥 Auth Domain:",$u.authDomain);const Zs=wC(up);console.log("🔐 Firebase Auth initialized");console.log("🔐 Auth current user:",Zs.currentUser);const Ur=S2(up);console.log("🗄️ Firestore initialized");console.log("🗄️ Firestore app:",Ur.app.name);let Jy=null;try{Jy=rb(up),console.log("📊 Analytics initialized:",Jy)}catch(t){console.warn("⚠️ Analytics initialization failed (normal in development):",t)}const uT=ne.createContext(void 0),pi=()=>{const t=ne.useContext(uT);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},ab=({children:t})=>{const[e,n]=ne.useState(null),[r,i]=ne.useState(!0),[s,o]=ne.useState(null),l=w=>{switch(w){case"abonnement":return 25;case"starter":return 25;case"pro":return 150;default:return 3}},u=()=>{o(null)},c=async w=>{var _,T,b,L;try{console.log("🔍 Loading user data for:",w.uid);const j=await M2(_i(Ur,"users",w.uid));if(j.exists()){const E=j.data();console.log("📊 User data from Firestore:",E);const v={uid:w.uid,email:w.email,displayName:w.displayName,firstName:E.firstName||((_=E.displayName)==null?void 0:_.split(" ")[0])||"",lastName:E.lastName||((T=E.displayName)==null?void 0:T.split(" ")[1])||"",hasPaid:E.hasPaid||!1,firestoreId:w.uid,subscription:E.subscription||{plan:"free",creditsRemaining:3,maxCredits:3}};console.log("✅ Auth user created:",v),n(v)}else{console.log("📝 Creating new user document");const E={email:w.email,displayName:w.displayName,firstName:((b=w.displayName)==null?void 0:b.split(" ")[0])||"",lastName:((L=w.displayName)==null?void 0:L.split(" ")[1])||"",hasPaid:!1,subscription:{plan:"free",creditsRemaining:3,maxCredits:3,renewalDate:new Date},createdAt:new Date};await By(_i(Ur,"users",w.uid),E);const v={uid:w.uid,email:w.email,displayName:w.displayName,firstName:E.firstName,lastName:E.lastName,hasPaid:!1,firestoreId:w.uid,subscription:E.subscription};n(v)}}catch(j){console.error("Error loading user data:",j),o("Erreur lors du chargement des données utilisateur");const E={uid:w.uid,email:w.email,displayName:w.displayName,hasPaid:!1,firestoreId:w.uid,subscription:{plan:"free",creditsRemaining:3,maxCredits:3}};n(E)}};ne.useEffect(()=>(console.log("🔄 Setting up auth state listener"),lR(Zs,async _=>{console.log("🔐 Auth state changed:",_?"User logged in":"User logged out"),_?await c(_):n(null),i(!1)})),[]);const V={user:e,isAuthenticated:!!e,loading:r,error:s,login:async w=>{o(null),i(!0);try{console.log("🔐 Logging in user:",w.email);const{user:_}=await rR(Zs,w.email,w.password);await c(_),console.log("✅ Login successful")}catch(_){throw console.error("Login error:",_),_ instanceof Error?_.message.includes("user-not-found")?o("Aucun compte trouvé avec cet email"):_.message.includes("wrong-password")?o("Mot de passe incorrect"):_.message.includes("invalid-email")?o("Format d'email invalide"):o("Erreur de connexion"):o("Erreur de connexion"),_}finally{i(!1)}},register:async w=>{o(null),i(!0);try{console.log("📝 Registering user:",w.email);const{user:_}=await nR(Zs,w.email,w.password),T=`${w.firstName} ${w.lastName}`;await sR(_,{displayName:T});const b={email:_.email,displayName:T,firstName:w.firstName,lastName:w.lastName,hasPaid:!1,subscription:{plan:"free",creditsRemaining:3,maxCredits:3,renewalDate:new Date},createdAt:new Date};await By(_i(Ur,"users",_.uid),b);const L={uid:_.uid,email:_.email,displayName:T,firstName:w.firstName,lastName:w.lastName,hasPaid:!1,firestoreId:_.uid,subscription:b.subscription};n(L),console.log("✅ Registration successful")}catch(_){throw console.error("Registration error:",_),_ instanceof Error?o(_.message):o("Erreur lors de l'inscription"),_}finally{i(!1)}},logout:async()=>{try{console.log("🚪 Logging out user"),await uR(Zs),n(null),o(null),console.log("✅ Logout successful")}catch(w){throw console.error("Logout error:",w),o("Erreur lors de la déconnexion"),w}},clearError:u,updateUserPaymentStatus:async(w,_="free")=>{var T;if(e)try{console.log(`💳 Updating payment status: ${w}, plan: ${_}`),_==="free"&&e.hasPaid&&console.log("🚫 Annulation d'abonnement - passage au plan gratuit");const b=l(_),L={plan:_,creditsRemaining:b,maxCredits:b,renewalDate:new Date,lastUpdated:new Date,..._==="free"&&e.hasPaid?{downgradedAt:new Date,previousPlan:((T=e.subscription)==null?void 0:T.plan)||"unknown"}:{}};await Qc(_i(Ur,"users",e.uid),{hasPaid:w,subscription:L}),n(j=>j?{...j,hasPaid:w,subscription:L}:null),console.log(`✅ Statut utilisateur mis à jour: ${w?"payant":"gratuit"}, plan: ${_}`),_==="free"&&!w&&console.log("📉 Utilisateur remis en plan gratuit avec 3 crédits")}catch(b){throw console.error("Error updating payment status:",b),o("Erreur lors de la mise à jour du statut de paiement"),b}},decrementCredits:async()=>{if(!e||!e.subscription)return!1;if(e.subscription.creditsRemaining<=0)return console.log("❌ Aucun crédit disponible pour déduction"),!1;try{console.log(`💳 Déduction d'un crédit (${e.subscription.creditsRemaining} → ${e.subscription.creditsRemaining-1})`);const w=e.subscription.creditsRemaining-1;return await Qc(_i(Ur,"users",e.uid),{"subscription.creditsRemaining":w}),n(_=>_?{..._,subscription:{..._.subscription,creditsRemaining:w}}:null),console.log(`✅ Crédit déduit avec succès: ${w} crédits restants`),!0}catch(w){return console.error("❌ Erreur lors de la déduction des crédits:",w),o("Erreur lors de la déduction des crédits"),!1}},refundCredits:async()=>{if(!e||!e.subscription)return!1;try{console.log(`💰 Remboursement d'un crédit (${e.subscription.creditsRemaining} → ${e.subscription.creditsRemaining+1})`);const w=e.subscription.creditsRemaining+1;return await Qc(_i(Ur,"users",e.uid),{"subscription.creditsRemaining":w}),n(_=>_?{..._,subscription:{..._.subscription,creditsRemaining:w}}:null),console.log(`✅ Crédit remboursé avec succès: ${w} crédits restants`),!0}catch(w){return console.error("❌ Erreur lors du remboursement des crédits:",w),o("Erreur lors du remboursement des crédits"),!1}}};return p.jsx(uT.Provider,{value:V,children:t})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ge=(t,e)=>{const n=ne.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>ne.createElement("svg",{ref:f,...lb,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${ub(t)}`,l].join(" "),...c},[...e.map(([m,g])=>ne.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=ge("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=ge("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=ge("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=ge("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=ge("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=ge("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=ge("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=ge("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=ge("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=ge("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=ge("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=ge("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=ge("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=ge("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=ge("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=ge("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=ge("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=ge("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=ge("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=ge("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=ge("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Ab=({onShowLogin:t,onShowPricing:e,onGoHome:n})=>{var f,m,g,A,R,P;const[r,i]=ne.useState(!1),{isAuthenticated:s,user:o,logout:l}=pi(),u=()=>{l(),i(!1)},c=()=>{n?n():window.location.reload()};return p.jsx("header",{className:"bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50",children:p.jsxs("div",{className:"container mx-auto px-4 py-4 max-w-6xl",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("button",{onClick:c,className:"flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 cursor-pointer",children:[p.jsx("div",{className:"p-2 bg-white rounded-xl shadow-lg",children:p.jsx(kr,{className:"w-6 h-6 text-vinted-500"})}),p.jsx("h1",{className:"text-xl font-bold text-white",children:"Swear"})]}),p.jsxs("div",{className:"flex items-center space-x-6",children:[p.jsxs("nav",{className:"hidden md:flex items-center space-x-6 text-sm text-white/80",children:[p.jsx("a",{href:"#contact",className:"hover:text-white transition-colors duration-200 cursor-pointer",children:"Contact"}),p.jsx("button",{onClick:e,className:"hover:text-white transition-colors duration-200 cursor-pointer",children:"Prix"}),s?p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsxs("span",{className:"text-white/90 text-sm",children:["Bonjour, ",o==null?void 0:o.firstName,(o==null?void 0:o.hasPaid)&&p.jsx("span",{className:"ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full",children:((f=o.subscription)==null?void 0:f.plan)==="pro"?"Pro":((m=o.subscription)==null?void 0:m.plan)==="starter"?"Starter":"Premium"})]}),p.jsx("button",{onClick:()=>window.location.reload(),className:"text-xs text-white/60 hover:text-white/80 transition-colors",title:"Rafraîchir les données",children:"🔄"}),(o==null?void 0:o.hasPaid)&&p.jsxs("div",{className:"text-xs text-white/60",children:[((g=o.subscription)==null?void 0:g.creditsRemaining)||0," crédits"]}),p.jsxs("button",{onClick:u,className:"flex items-center hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20",title:"Se déconnecter",children:[p.jsx(tv,{className:"w-4 h-4 mr-2"}),"Déconnexion"]})]}):p.jsxs("button",{onClick:t,className:"flex items-center hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20",children:[p.jsx(vd,{className:"w-4 h-4 mr-2"}),"Connexion"]})]}),p.jsx("button",{onClick:()=>i(!r),className:"md:hidden flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200",children:r?p.jsx(Sb,{className:"w-5 h-5 text-white"}):p.jsx(_b,{className:"w-5 h-5 text-white"})})]})]}),r&&p.jsx("div",{className:"md:hidden mt-4 py-4 border-t border-white/20",children:p.jsxs("nav",{className:"flex flex-col space-y-4",children:[p.jsx("a",{href:"#contact",className:"text-white/80 hover:text-white transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10",onClick:()=>i(!1),children:"Contact"}),p.jsx("button",{onClick:()=>{e==null||e(),i(!1)},className:"text-white/80 hover:text-white transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 cursor-pointer",children:"Prix"}),s?p.jsxs("div",{className:"space-y-2",children:[p.jsxs("div",{className:"text-white/90 py-2 px-4",children:["Bonjour, ",o==null?void 0:o.firstName," !",(o==null?void 0:o.hasPaid)&&p.jsx("span",{className:"ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full",children:((A=o.subscription)==null?void 0:A.plan)==="pro"?"Pro":((R=o.subscription)==null?void 0:R.plan)==="starter"?"Starter":"Premium"}),(o==null?void 0:o.hasPaid)&&p.jsxs("div",{className:"text-xs text-white/60 mt-1",children:[((P=o.subscription)==null?void 0:P.creditsRemaining)||0," crédits restants"]})]}),p.jsxs("button",{onClick:u,className:"flex items-center text-white/80 hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 text-left w-full",children:[p.jsx(tv,{className:"w-4 h-4 mr-2"}),"Se déconnecter"]})]}):p.jsxs("button",{className:"flex items-center text-white/80 hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 text-left",onClick:()=>{t==null||t(),i(!1)},children:[p.jsx(vd,{className:"w-4 h-4 mr-2"}),"Connexion"]})]})})]})})},Rb=()=>p.jsx("footer",{className:"bg-black/20 backdrop-blur-lg text-white py-12 mt-20 border-t border-white/10",children:p.jsxs("div",{className:"container mx-auto px-4 max-w-6xl",children:[p.jsxs("div",{className:"grid md:grid-cols-4 gap-8",children:[p.jsxs("div",{className:"col-span-2",children:[p.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[p.jsx("div",{className:"p-2 bg-white rounded-xl shadow-lg",children:p.jsx(kr,{className:"w-5 h-5 text-vinted-500"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-bold text-lg",children:"Swear"}),p.jsx("p",{className:"text-white/60 text-sm",children:"Photos Mode Professionnelles"})]})]}),p.jsx("p",{className:"text-white/80 leading-relaxed max-w-md",children:"Transformez vos annonces mode avec la photographie professionnelle alimentée par l'IA. Parfait pour les vendeurs Vinted qui veulent se démarquer et vendre plus rapidement."})]}),p.jsxs("div",{children:[p.jsx("h4",{className:"font-semibold mb-4",children:"Fonctionnalités"}),p.jsxs("ul",{className:"space-y-2 text-white/70",children:[p.jsx("li",{children:"Placement IA sur Mannequin"}),p.jsx("li",{children:"Traitement Haute Qualité"}),p.jsx("li",{children:"Téléchargements Instantanés"}),p.jsx("li",{children:"Optimisé Mobile"})]})]}),p.jsxs("div",{children:[p.jsx("h4",{className:"font-semibold mb-4",children:"Support"}),p.jsxs("ul",{className:"space-y-2 text-white/70",children:[p.jsx("li",{children:"FAQ"}),p.jsx("li",{children:"Nous Contacter"}),p.jsx("li",{children:"Guide de Traitement"}),p.jsx("li",{children:"Meilleures Pratiques"})]})]})]}),p.jsxs("div",{className:"border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between",children:[p.jsx("p",{className:"text-white/60 text-sm",children:"© 2025 Swear. Tous droits réservés."}),p.jsxs("p",{className:"text-white/60 text-sm flex items-center mt-4 md:mt-0",children:["Fait avec ",p.jsx(mb,{className:"w-4 h-4 mx-1 text-red-400"})," pour les vendeurs mode"]})]})]})}),Cb=({onImageUpload:t,isProcessing:e,processingError:n,onShowLogin:r,onShowPricing:i})=>{var P,V,w,_;const[s,o]=ne.useState(!1),l=cl.useRef(null),{isAuthenticated:u,user:c}=pi(),[f,m]=ne.useState({gender:"femme",size:"m"}),g=ne.useCallback(T=>{T.preventDefault(),o(!1);const L=Array.from(T.dataTransfer.files).find(j=>j.type.startsWith("image/"));L&&R(L).then(({displayUrl:j,processedFile:E})=>{t(j,L.name,E,f)})},[t,f]),A=T=>{var L,j;const b=(L=T.target.files)==null?void 0:L[0];if(b&&b.type.startsWith("image/")){if(!u){r==null||r();return}if(!(c!=null&&c.hasPaid)){console.log("❌ Utilisateur non payant, redirection vers pricing"),i==null||i();return}if((((j=c==null?void 0:c.subscription)==null?void 0:j.creditsRemaining)||0)<=0){console.log("💳 Plus de crédits disponibles, redirection vers pricing"),i==null||i();return}R(b).then(({displayUrl:E,processedFile:v})=>{t(E,b.name,v,f)})}},R=T=>new Promise(b=>{const L=document.createElement("canvas"),j=L.getContext("2d"),E=new Image;if(!j){const v=URL.createObjectURL(T);b({displayUrl:v,processedFile:T});return}E.onload=()=>{L.width=300,L.height=400,j.fillStyle="#ffffff",j.fillRect(0,0,300,400);const x=E.width/E.height,C=300/400;let k,S,ye,Ye;x>C?(S=400,k=400*x):(k=300,S=300/x),ye=(300-k)/2,Ye=(400-S)/2,j.drawImage(E,ye,Ye,k,S),L.toBlob(Et=>{if(Et){const De=URL.createObjectURL(Et),z=new File([Et],T.name,{type:"image/jpeg",lastModified:Date.now()});b({displayUrl:De,processedFile:z})}else{const De=URL.createObjectURL(T);b({displayUrl:De,processedFile:T})}},"image/jpeg",.9)},E.onerror=()=>{const v=URL.createObjectURL(T);b({displayUrl:v,processedFile:T})},E.src=URL.createObjectURL(T)});return p.jsxs("div",{className:"max-w-4xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg",children:"Donnez vie à vos vêtements en quelques secondes"}),p.jsx("p",{className:"text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow",children:"Ne perdez plus de ventes à cause de photos qui ne donnent pas envie. Avec Swear, générez en un clic des images professionnelles qui mettent vos vêtements en valeur et boostent vos ventes"}),p.jsxs("div",{className:"hidden sm:flex flex-col sm:flex-row items-center justify-center gap-6 mt-8",children:[p.jsxs("div",{className:"flex items-center text-white/90",children:[p.jsx("div",{className:"w-2 h-2 bg-white rounded-full mr-3"}),p.jsx("span",{className:"text-sm font-medium",children:"Rendus ultra-réalistes"})]}),p.jsxs("div",{className:"flex items-center text-white/90",children:[p.jsx("div",{className:"w-2 h-2 bg-white rounded-full mr-3"}),p.jsx("span",{className:"text-sm font-medium",children:"Génération en moins de 10s"})]}),p.jsxs("div",{className:"flex items-center text-white/90",children:[p.jsx("div",{className:"w-2 h-2 bg-white rounded-full mr-3"}),p.jsx("span",{className:"text-sm font-medium",children:"Adapté à Vinted & marketplaces"})]})]})]}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-12",children:[p.jsxs("button",{onClick:r,className:"flex items-center justify-center px-8 py-4 bg-white text-vinted-500 font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-xl hover:scale-105 cursor-pointer",children:[p.jsx("span",{className:"mr-2",children:"🎯"}),"Essayer gratuitement"]}),p.jsxs("button",{onClick:i,className:"flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-200 shadow-xl hover:scale-105 cursor-pointer",children:[p.jsx("span",{className:"mr-2",children:"⭐"}),"S'abonner"]})]}),n&&p.jsx("div",{className:"max-w-2xl mx-auto mb-8",children:p.jsx("div",{className:"bg-red-500/20 border border-red-500/30 rounded-xl p-4 backdrop-blur-lg",children:p.jsxs("div",{className:"flex items-center",children:[p.jsx(cb,{className:"w-5 h-5 text-red-400 mr-3"}),p.jsxs("div",{children:[p.jsx("h4",{className:"text-red-400 font-medium",children:"Erreur de traitement"}),p.jsx("p",{className:"text-red-300 text-sm",children:n}),p.jsx("p",{className:"text-red-200 text-xs mt-2",children:"💡 En cas de problème de connexion, l'application passe automatiquement en mode démonstration"})]})]})})}),p.jsxs("div",{className:"max-w-2xl mx-auto mb-8",children:[u&&c&&p.jsx("div",{className:"mb-6 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsxs("h4",{className:"text-white font-medium",children:["Bienvenue, ",c.firstName," !"]}),p.jsx("p",{className:"text-white/70 text-sm",children:c.hasPaid?`Plan ${((P=c.subscription)==null?void 0:P.plan)==="pro"?"Pro":((V=c.subscription)==null?void 0:V.plan)==="starter"?"Starter":"Premium"} • ${((w=c.subscription)==null?void 0:w.creditsRemaining)||0} crédits restants`:"Plan gratuit • Paiement requis pour accéder au service"}),c.hasPaid&&p.jsx("p",{className:"text-green-400 text-xs mt-1",children:"✅ Accès complet activé"}),!c.hasPaid&&p.jsx("p",{className:"text-yellow-400 text-xs mt-1",children:"⚠️ Paiement requis pour générer des images"})]}),p.jsx("div",{className:"flex flex-col gap-2",children:!c.hasPaid&&p.jsx("button",{onClick:i,className:"bg-white text-vinted-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors",children:"Payer maintenant"})})]})}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl",children:[p.jsxs("h3",{className:"text-lg font-semibold text-white mb-4 flex items-center",children:[p.jsx(vd,{className:"w-5 h-5 mr-2"}),"Options du Vêtement"]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/80 mb-3",children:"Genre"}),p.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{value:"femme",label:"Femme"},{value:"homme",label:"Homme"},{value:"enfant",label:"Enfant"}].map(T=>p.jsxs("label",{className:"cursor-pointer",children:[p.jsx("input",{type:"radio",name:"gender",value:T.value,checked:f.gender===T.value,onChange:b=>m(L=>({...L,gender:b.target.value})),className:"sr-only"}),p.jsx("div",{className:`
                      px-2 py-3 rounded-xl text-center text-sm font-medium transition-all duration-200 border-2 min-h-[48px] flex items-center justify-center
                      ${f.gender===T.value?"bg-white text-vinted-600 border-white shadow-lg scale-105":"bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40"}
                    `,children:T.label})]},T.value))})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium text-white/80 mb-3 flex items-center",children:[p.jsx(Eb,{className:"w-4 h-4 mr-1"}),"Taille"]}),p.jsx("div",{className:"grid grid-cols-5 gap-2",children:[{value:"xs",label:"XS"},{value:"s",label:"S"},{value:"m",label:"M"},{value:"l",label:"L"},{value:"xl",label:"XL"}].map(T=>p.jsx("button",{type:"button",onClick:()=>m(b=>({...b,size:T.value})),className:`
                      px-2 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-2
                      ${f.size===T.value?"bg-white text-vinted-600 border-white shadow-lg scale-105":"bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40"}
                    `,children:T.label},T.value))})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/80 mb-3",children:"Vue"}),p.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:"normal",label:"Normale"},{value:"mirror",label:"Miroir"}].map(T=>p.jsx("button",{type:"button",onClick:()=>m(b=>({...b,mirror:T.value})),className:`
                      px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-2
                      ${f.mirror===T.value?"bg-white text-vinted-600 border-white shadow-lg scale-105":"bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40"}
                    `,children:T.label},T.value))})]})]})]})]}),p.jsx("div",{className:"max-w-2xl mx-auto mb-12",children:p.jsxs("div",{className:`
            relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 backdrop-blur-lg
            ${e?"border-white/20 bg-white/5 cursor-not-allowed opacity-50":s?"border-white bg-white/20 scale-105 shadow-2xl":"border-white/30 bg-white/10 hover:border-white/50 hover:bg-white/20 shadow-xl cursor-pointer"}
          `,onDrop:g,onDragOver:T=>{T.preventDefault(),o(!0)},onDragLeave:()=>o(!1),children:[p.jsx("input",{ref:l,type:"file",accept:"image/*",onChange:A,disabled:e,className:`absolute inset-0 w-full h-full opacity-0 ${e?"cursor-not-allowed":"cursor-pointer"}`}),p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsx("div",{className:`
              w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300
              ${s?"bg-white scale-110 shadow-lg":"bg-white/20 backdrop-blur"}
              ${e?"cursor-not-allowed":"cursor-pointer hover:scale-110"}
            `,children:p.jsx(nv,{className:`
                w-8 h-8 transition-colors duration-300
                ${s?"text-vinted-500":"text-white"}
              `})}),p.jsx("h3",{className:"text-xl font-semibold text-white mb-2 drop-shadow",children:e?"Traitement en cours...":s?"Déposez votre photo ici !":"Téléchargez Votre Photo de Vêtement"}),p.jsx("p",{className:"text-white/80 mb-6",children:e?"Votre image est en cours de traitement par notre IA...":"Glissez-déposez votre image, ou cliquez pour parcourir"}),p.jsx("button",{disabled:e,className:`
                px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg
                ${e?"bg-white/50 text-vinted-400 cursor-not-allowed":"bg-white text-vinted-500 hover:bg-white/90 hover:shadow-xl hover:scale-105"}
              `,children:e?"Traitement...":u?c!=null&&c.hasPaid?(((_=c==null?void 0:c.subscription)==null?void 0:_.creditsRemaining)||0)<=0?"Recharger crédits":"Choisir un Fichier":"Paiement requis":"Se connecter pour commencer"}),p.jsx("p",{className:"text-xs text-white/60 mt-4",children:"Supporte JPG, PNG, WebP • Max 25Mo"}),!1]})]})}),p.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[p.jsxs("div",{className:"text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300",children:[p.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4",children:p.jsx(nv,{className:"w-6 h-6 text-white"})}),p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Upload Facile"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Glissez-déposez ou cliquez pour télécharger vos photos de vêtements"})]}),p.jsxs("div",{className:"text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300",children:[p.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4",children:p.jsx(kr,{className:"w-6 h-6 text-white"})}),p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Amélioration IA"}),p.jsx("p",{className:"text-white/80 text-sm",children:"L'IA avancée place vos articles sur des mannequins professionnels"})]}),p.jsxs("div",{className:"text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300",children:[p.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4",children:p.jsx(gb,{className:"w-6 h-6 text-white"})}),p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Haute Qualité"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Téléchargez des photos professionnelles prêtes pour vos annonces Vinted"})]})]})]})},kb=({uploadedImage:t,fileName:e})=>{const[n,r]=ne.useState(0),[i,s]=ne.useState("Analyzing clothing item...");return ne.useEffect(()=>{const o=["Analyse de l'article vestimentaire...","Sélection du mannequin optimal...","Application de l'amélioration IA...","Finalisation de la photo professionnelle..."],l=setInterval(()=>{r(u=>{const c=Math.min(u+2,100);return c<25?s(o[0]):c<50?s(o[1]):c<75?s(o[2]):s(o[3]),c})},60);return()=>clearInterval(l)},[]),p.jsxs("div",{className:"max-w-3xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("div",{className:"w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-2xl",children:p.jsx(kr,{className:"w-10 h-10 text-vinted-500"})}),p.jsx("h2",{className:"text-3xl font-bold text-white mb-3 drop-shadow-lg",children:"Création de Votre Photo Professionnelle"}),p.jsxs("p",{className:"text-white/90 drop-shadow",children:['Notre IA transforme "',e,'" en un superbe cliché sur mannequin']})]}),p.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl mb-8 border border-white/20",children:p.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-8",children:[p.jsx("div",{className:"flex-shrink-0",children:t&&p.jsx("div",{className:"w-64 h-80 rounded-xl overflow-hidden shadow-2xl border border-white/20",children:p.jsx("img",{src:t,alt:"Uploaded clothing",className:"w-full h-full object-cover bg-white/10"})})}),p.jsxs("div",{className:"flex-1 space-y-6",children:[p.jsxs("div",{className:"text-center lg:text-left",children:[p.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:"Traitement de Votre Image"}),p.jsx("p",{className:"text-white/80",children:i})]}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex justify-between text-sm",children:[p.jsx("span",{className:"text-white/80",children:"Progression"}),p.jsxs("span",{className:"font-medium text-white",children:[Math.round(n),"%"]})]}),p.jsx("div",{className:"w-full bg-white/20 rounded-full h-3 overflow-hidden",children:p.jsx("div",{className:"h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-300 ease-out shadow-lg",style:{width:`${n}%`}})})]}),p.jsx("div",{className:"space-y-3",children:["Analyse d'image terminée","Sélection de mannequin optimisée","Amélioration IA en cours","Photo professionnelle prête"].map((o,l)=>{const u=n>(l+1)*25,c=n>=l*25&&n<(l+1)*25;return p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsxs("div",{className:`
                      w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300
                      ${u?"bg-white border-white shadow-lg":c?"border-white":"border-white/30"}
                    `,children:[u&&p.jsx("div",{className:"w-2 h-2 bg-vinted-500 rounded-full"}),c&&p.jsx(dT,{className:"w-3 h-3 text-white animate-spin"})]}),p.jsx("span",{className:`
                      text-sm transition-colors duration-300
                      ${u||c?"text-white font-medium":"text-white/60"}
                    `,children:o})]},l)})})]})]})}),p.jsx("div",{className:"text-center",children:p.jsx("p",{className:"text-white/60 text-sm",children:"Temps estimé : 15-30 secondes • Traitement haute qualité en cours"})})]})},Pb=({uploadedImage:t,generatedImage:e,fileName:n,onStartOver:r})=>{const[i,s]=ne.useState(!0),[o,l]=ne.useState(!1),u=()=>{if(e){l(!0);const c=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);(async()=>{try{let m;if(e.startsWith("blob:"))m=await(await fetch(e)).blob();else if(e.startsWith("data:image/"))m=await(await fetch(e)).blob();else try{m=await(await fetch(e)).blob()}catch{window.open(e,"_blank");return}const A=`swear-enhanced-${new Date().toISOString().slice(0,19).replace(/[:-]/g,"")}.jpg`;if(c){if(navigator.share&&navigator.canShare)try{const V=new File([m],A,{type:"image/jpeg"});if(navigator.canShare({files:[V]})){await navigator.share({title:"Photo Swear améliorée",text:"Voici ma photo mode améliorée avec Swear",files:[V]});return}}catch{console.log("Partage échoué, tentative de téléchargement direct")}const R=URL.createObjectURL(m),P=window.open();if(P)P.document.write(`
                <html>
                  <head>
                    <title>Télécharger votre image</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                      body { 
                        margin: 0; 
                        padding: 20px; 
                        font-family: Arial, sans-serif; 
                        background: #f0f0f0;
                        text-align: center;
                      }
                      img { 
                        max-width: 100%; 
                        height: auto; 
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        margin: 20px 0;
                      }
                      .download-btn {
                        display: inline-block;
                        padding: 15px 30px;
                        background: #09B1BA;
                        color: white;
                        text-decoration: none;
                        border-radius: 8px;
                        font-weight: bold;
                        margin: 10px;
                      }
                      .instructions {
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        margin: 20px 0;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                      }
                    </style>
                  </head>
                  <body>
                    <h2>🎉 Votre photo Swear est prête !</h2>
                    <img src="${R}" alt="Photo améliorée" />
                    <div class="instructions">
                      <p><strong>Pour sauvegarder sur mobile :</strong></p>
                      <p>📱 Appuyez longuement sur l'image</p>
                      <p>💾 Sélectionnez "Enregistrer l'image"</p>
                      <p>📁 L'image sera sauvée dans votre galerie</p>
                    </div>
                    <a href="${R}" download="${A}" class="download-btn">
                      📥 Télécharger
                    </a>
                  </body>
                </html>
              `),P.document.close();else{const V=document.createElement("a");V.href=R,V.download=A,V.style.display="none",document.body.appendChild(V),V.click(),document.body.removeChild(V)}setTimeout(()=>URL.revokeObjectURL(R),1e4)}else{const R=URL.createObjectURL(m),P=document.createElement("a");P.href=R,P.download=A,P.style.display="none",document.body.appendChild(P),P.click(),document.body.removeChild(P),URL.revokeObjectURL(R)}}catch(m){console.error("Erreur téléchargement:",m),window.open(e,"_blank")}})(),setTimeout(()=>l(!1),2e3)}};return p.jsxs("div",{className:"max-w-5xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-2xl",children:p.jsx(Ib,{className:"w-8 h-8 text-vinted-500"})}),p.jsx("h2",{className:"text-3xl font-bold text-white mb-3 drop-shadow-lg",children:"Votre Photo Professionnelle est Prête !"}),p.jsx("p",{className:"text-white/90 text-lg drop-shadow",children:"Votre article de mode a été transformé en un superbe cliché sur mannequin"})]}),p.jsx("div",{className:"flex justify-center mb-8",children:p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-lg p-1 shadow-xl border border-white/20",children:[p.jsx("button",{onClick:()=>s(!0),className:`
              px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
              ${i?"bg-white text-vinted-500 shadow-lg":"text-white/80 hover:text-white"}
            `,children:"Comparer"}),p.jsx("button",{onClick:()=>s(!1),className:`
              px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
              ${i?"text-white/80 hover:text-white":"bg-white text-vinted-500 shadow-lg"}
            `,children:"Résultat Final"})]})}),p.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl mb-8 border border-white/20",children:i?p.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 items-start justify-center",children:[p.jsxs("div",{className:"text-center",children:[p.jsx("p",{className:"text-sm font-medium text-white/80 mb-4 flex items-center justify-center",children:"ORIGINAL"}),p.jsx("div",{className:"rounded-xl overflow-hidden shadow-2xl border border-white/20 mx-auto",style:{width:"300px",height:"411px"},children:t&&p.jsx("img",{src:t,alt:"Original",className:"w-full h-full object-cover"})})]}),p.jsxs("div",{className:"text-center",children:[p.jsxs("p",{className:"text-sm font-medium text-white/80 mb-4 flex items-center justify-center",children:[p.jsx(kr,{className:"w-4 h-4 mr-2 text-white"}),"AMÉLIORÉ"]}),p.jsx("div",{className:"rounded-xl overflow-hidden shadow-2xl border border-white/20 mx-auto",style:{width:"300px",height:"411px"},children:e&&p.jsx("img",{src:e,alt:"Enhanced",className:"w-full h-full object-cover"})})]})]}):p.jsx("div",{className:"flex justify-center",children:p.jsx("div",{className:"rounded-xl overflow-hidden shadow-2xl border border-white/20",style:{width:"300px",height:"411px"},children:e&&p.jsx("img",{src:e,alt:"Enhanced result",className:"w-full h-full object-cover"})})})}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-8",children:[p.jsx("button",{onClick:u,disabled:o,style:{color:"#09B1BA"},className:`
            flex items-center justify-center px-8 py-4 font-medium rounded-xl transition-all duration-200
            ${o?"bg-green-500 !text-white scale-95":"bg-white hover:bg-white/90 hover:scale-105 shadow-xl"}
          `,title:"Télécharger l'image améliorée",children:o?p.jsxs(p.Fragment,{children:[p.jsx(ev,{className:"w-5 h-5 mr-2 animate-bounce"}),p.jsx("span",{className:"hidden sm:inline",children:"Téléchargé !"}),p.jsx("span",{className:"sm:hidden",children:"OK !"})]}):p.jsxs(p.Fragment,{children:[p.jsx(ev,{className:"w-5 h-5 mr-2"}),p.jsx("span",{className:"hidden sm:inline",children:"Télécharger la Photo Améliorée"}),p.jsx("span",{className:"sm:hidden",children:"Télécharger"})]})}),p.jsxs("button",{onClick:r,className:"flex items-center justify-center px-8 py-4 text-white font-medium rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-200 backdrop-blur-lg",children:[p.jsx(wb,{className:"w-5 h-5 mr-2"}),"Créer une Autre"]})]}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center text-white border border-white/20 shadow-2xl",children:[p.jsx("h3",{className:"text-2xl font-bold mb-3",children:"Prêt à Booster Vos Ventes Vinted ?"}),p.jsx("p",{className:"text-white/90 mb-6 max-w-2xl mx-auto",children:"Les photos professionnelles peuvent augmenter la visibilité et le prix de vente de vos articles jusqu'à 40%. Votre photo améliorée est maintenant prête à être téléchargée sur Vinted !"}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[p.jsxs("a",{href:"https://vinted.com",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-6 py-3 bg-white text-vinted-500 font-medium rounded-lg hover:bg-white/90 transition-colors duration-200 shadow-lg",children:["Publier sur Vinted",p.jsx(hT,{className:"w-4 h-4 ml-2"})]}),p.jsxs("button",{className:"inline-flex items-center px-6 py-3 text-white font-medium rounded-lg border border-white/30 hover:bg-white/10 transition-colors duration-200 backdrop-blur-lg",children:[p.jsx(Tb,{className:"w-4 h-4 mr-2"}),"Partager le Résultat"]})]})]})]})},Nb=({onBack:t,onShowPricing:e})=>{const[n,r]=ne.useState("login"),[i,s]=ne.useState(!1),[o,l]=ne.useState({email:"",password:"",firstName:"",lastName:""}),{login:u,register:c,loading:f,error:m,clearError:g}=pi(),A=(V,w)=>{l(_=>({..._,[V]:w}))},R=V=>{r(V),l({email:"",password:"",firstName:"",lastName:""}),g()},P=async V=>{V.preventDefault();try{n==="login"?await u({email:o.email,password:o.password}):await c({email:o.email,password:o.password,firstName:o.firstName,lastName:o.lastName}),t()}catch{}};return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"}),p.jsx("div",{className:"absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"})]}),p.jsx("div",{className:"relative z-10 min-h-screen flex items-center justify-center p-4",children:p.jsxs("div",{className:"w-full max-w-md",children:[p.jsxs("button",{onClick:t,className:"flex items-center text-white/80 hover:text-white mb-8 transition-colors",children:[p.jsx(cT,{className:"w-5 h-5 mr-2"}),"Retour"]}),p.jsx("div",{className:"text-center mb-8",children:p.jsxs("div",{className:"flex items-center justify-center space-x-3 mb-4",children:[p.jsx("div",{className:"p-3 bg-white rounded-xl shadow-lg",children:p.jsx(kr,{className:"w-8 h-8 text-vinted-500"})}),p.jsxs("div",{children:[p.jsx("h1",{className:"text-2xl font-bold text-white",children:"Swear"}),p.jsx("p",{className:"text-sm text-white/80",children:"Photos Mode Professionnelles"})]})]})}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20",children:[p.jsxs("div",{className:"text-center mb-6",children:[p.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:n==="login"?"Connexion":"Inscription"}),p.jsx("p",{className:"text-white/80",children:n==="login"?"Connectez-vous pour accéder à vos transformations":"Créez votre compte et obtenez 3 transformations gratuites"})]}),m&&p.jsx("div",{className:"mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl backdrop-blur-lg",children:p.jsx("p",{className:"text-red-300 text-sm",children:m})}),p.jsxs("form",{onSubmit:P,className:"space-y-4",children:[n==="register"&&p.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/90 mb-2",children:"Prénom"}),p.jsx("input",{type:"text",value:o.firstName,onChange:V=>A("firstName",V.target.value),required:!0,className:"w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vinted-500 focus:border-transparent",placeholder:"Prénom"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/90 mb-2",children:"Nom"}),p.jsx("input",{type:"text",value:o.lastName,onChange:V=>A("lastName",V.target.value),required:!0,className:"w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vinted-500 focus:border-transparent",placeholder:"Nom"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/90 mb-2",children:"Email"}),p.jsxs("div",{className:"relative",children:[p.jsx(vb,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),p.jsx("input",{type:"email",value:o.email,onChange:V=>A("email",V.target.value),required:!0,className:"w-full pl-12 pr-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vinted-500 focus:border-transparent",placeholder:"votre@email.com"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/90 mb-2",children:"Mot de passe"}),p.jsxs("div",{className:"relative",children:[p.jsx(yb,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),p.jsx("input",{type:i?"text":"password",value:o.password,onChange:V=>A("password",V.target.value),required:!0,minLength:6,className:"w-full pl-12 pr-12 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vinted-500 focus:border-transparent",placeholder:"••••••••"}),p.jsx("button",{type:"button",onClick:()=>s(!i),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:i?p.jsx(fb,{className:"w-5 h-5"}):p.jsx(pb,{className:"w-5 h-5"})})]}),n==="register"&&p.jsx("p",{className:"text-xs text-white/60 mt-1",children:"Minimum 6 caractères"})]}),p.jsx("button",{type:"submit",disabled:f,className:"w-full bg-white text-vinted-500 py-3 px-4 rounded-xl font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-6 shadow-lg",children:f?p.jsxs(p.Fragment,{children:[p.jsx(dT,{className:"w-5 h-5 mr-2 animate-spin"}),n==="login"?"Connexion...":"Création..."]}):n==="login"?"Se connecter":"Créer mon compte"})]}),p.jsx("div",{className:"mt-6 text-center",children:p.jsxs("p",{className:"text-white/80",children:[n==="login"?"Pas de compte ?":"Déjà un compte ?",p.jsx("button",{type:"button",onClick:()=>R(n==="login"?"register":"login"),className:"ml-2 text-white font-medium hover:text-white/80 transition-colors underline",children:n==="login"?"S'inscrire":"Se connecter"})]})}),n==="register"&&p.jsxs("div",{className:"mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-lg border border-white/20",children:[p.jsx("h4",{className:"font-medium text-white mb-2",children:"Avantages :"}),p.jsxs("ul",{className:"text-sm text-white/80 space-y-1",children:[p.jsx("li",{children:"• 3 transformations gratuites"}),p.jsx("li",{children:"• Historique de vos créations"}),p.jsx("li",{children:"• Support prioritaire"})]})]})]})]})})]})};var fT="basil",bb=function(e){return e===3?"v3":e},pT="https://js.stripe.com",Db="".concat(pT,"/").concat(fT,"/stripe.js"),Vb=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Ob=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;var Lb=function(e){return Vb.test(e)||Ob.test(e)},Mb=function(){for(var e=document.querySelectorAll('script[src^="'.concat(pT,'"]')),n=0;n<e.length;n++){var r=e[n];if(Lb(r.src))return r}return null},rv=function(e){var n="",r=document.createElement("script");r.src="".concat(Db).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(r),r},jb=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"7.9.0",startTime:n})},zs=null,Ua=null,za=null,Fb=function(e){return function(n){e(new Error("Failed to load Stripe.js",{cause:n}))}},Ub=function(e,n){return function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))}},zb=function(e){return zs!==null?zs:(zs=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe){n(window.Stripe);return}try{var i=Mb();if(!(i&&e)){if(!i)i=rv(e);else if(i&&za!==null&&Ua!==null){var s;i.removeEventListener("load",za),i.removeEventListener("error",Ua),(s=i.parentNode)===null||s===void 0||s.removeChild(i),i=rv(e)}}za=Ub(n,r),Ua=Fb(r),i.addEventListener("load",za),i.addEventListener("error",Ua)}catch(o){r(o);return}}),zs.catch(function(n){return zs=null,Promise.reject(n)}))},$b=function(e,n,r){if(e===null)return null;var i=n[0],s=i.match(/^pk_test/),o=bb(e.version),l=fT;s&&o!==l&&console.warn("Stripe.js@".concat(o," was loaded on the page, but @stripe/stripe-js@").concat("7.9.0"," expected Stripe.js@").concat(l,". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));var u=e.apply(void 0,n);return jb(u,r),u},$s,mT=!1,gT=function(){return $s||($s=zb(null).catch(function(e){return $s=null,Promise.reject(e)}),$s)};Promise.resolve().then(function(){return gT()}).catch(function(t){mT||console.warn(t)});var Bb=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];mT=!0;var i=Date.now();return gT().then(function(s){return $b(s,n,i)})};const oe=(t,e,n)=>{const i=`[STRIPE-SERVICE] [${new Date().toISOString()}] [${t}] ${e}`;t==="ERROR"?console.error(i,n?JSON.stringify(n,null,2):""):t==="WARN"?console.warn(i,n?JSON.stringify(n,null,2):""):console.log(i,n?JSON.stringify(n,null,2):"")};class Hb{constructor(){cc(this,"stripePromise");cc(this,"functionsUrl");oe("INFO","Initialisation StripeService"),this.stripePromise=Bb("pk_test_51S59C86LX1cwJPasiNmP8pMN9vBIyR3J35a7DYKwoFOCi7WhNfYFZISgdSoWTGg4XSBroUfpmndhB77CZVqitFyL0083YVHh9n"),window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?this.functionsUrl="http://localhost:5001/swear-30c84/us-central1/api":this.functionsUrl="https://us-central1-swear-30c84.cloudfunctions.net/api",oe("INFO","Configuration terminée",{functionsUrl:this.functionsUrl,hostname:window.location.hostname,environment:window.location.hostname==="localhost"?"local":"production"})}async createCheckoutSession(e){var n;oe("INFO","Début création session Stripe",{request:e,functionsUrl:this.functionsUrl,hostname:window.location.hostname,origin:window.location.origin});try{oe("INFO","Test de connectivité...");const r=await fetch(`${this.functionsUrl}/health`,{method:"GET",mode:"cors"});if(oe("INFO","Réponse health check",{status:r.status,statusText:r.statusText,headers:Object.fromEntries(r.headers.entries())}),!r.ok){const s=await r.text();throw oe("ERROR","Health check échoué",{response:s}),new Error(`Health check failed: ${r.status}`)}const i=await r.json();oe("INFO","Health check réussi",i)}catch(r){throw oe("ERROR","Erreur health check",{message:r instanceof Error?r.message:r,stack:r instanceof Error?r.stack:void 0}),new Error("Les Firebase Functions ne sont pas accessibles. Vérifiez le déploiement.")}try{oe("INFO","Préparation du payload");const r=this.getCurrentUserId(),i=e.userId||r;if(!i)throw oe("ERROR","Aucun utilisateur connecté trouvé"),new Error("Vous devez être connecté pour effectuer un paiement. Veuillez vous reconnecter.");const s={priceId:this.getPriceId(e.planType),userId:i,planType:e.planType,userEmail:e.userEmail,successUrl:e.successUrl||`${window.location.origin}/?success=true&plan=${e.planType}`,cancelUrl:e.cancelUrl||`${window.location.origin}/?canceled=true`};oe("INFO","Payload préparé",{payload:s,targetUrl:`${this.functionsUrl}/create-checkout-session`}),oe("INFO","Configuration timeout 15s");const o=new AbortController,l=setTimeout(()=>o.abort(),15e3);oe("INFO","Envoi de la requête");const u=await fetch(`${this.functionsUrl}/create-checkout-session`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(s),signal:o.signal,mode:"cors"});if(clearTimeout(l),oe("INFO","Requête terminée, timeout annulé"),oe("INFO","Réponse reçue",{status:u.status,statusText:u.statusText,headers:Object.fromEntries(u.headers.entries())}),!u.ok){const f=await u.text();throw oe("ERROR","Erreur HTTP",{status:u.status,statusText:u.statusText,responseText:f}),new Error(`Erreur serveur (${u.status}): ${f||"Service indisponible"}`)}const c=await u.json();return oe("INFO","Session Stripe créée avec succès",{sessionId:c.sessionId,url:c.url,fullResponse:c}),{sessionId:c.sessionId,url:c.url}}catch(r){throw oe("ERROR","Erreur création session",{errorType:(n=r==null?void 0:r.constructor)==null?void 0:n.name,message:r==null?void 0:r.message,stack:r==null?void 0:r.stack}),r instanceof Error?r.name==="AbortError"?(oe("ERROR","Timeout détecté"),new Error("Délai d'attente dépassé. Vérifiez votre connexion internet.")):r.message.includes("Failed to fetch")?(oe("ERROR","Problème réseau détecté"),new Error("Impossible de contacter le serveur de paiement. Vérifiez que les Firebase Functions sont déployées.")):r:new Error("Impossible de créer la session de paiement")}}getPriceId(e){const n={abonnement:"price_1S59Fm6LX1cwJPas3s7oS1pm",starter:"price_1S59Fm6LX1cwJPas3s7oS1pm",pro:"price_1S7z1B6LX1cwJPasibsPVll6"},r=n[e]||n.abonnement;return oe("INFO","Price ID sélectionné",{planType:e,priceId:r}),r}getCurrentUserId(){oe("INFO","Récupération User ID");try{const n=localStorage.getItem("firebase:authUser:AIzaSyDRoNJkXmR7C3dt142AAz_hGCPpfKxkXxE:[DEFAULT]");if(n){const r=JSON.parse(n);if(r.uid)return oe("INFO","User ID trouvé via localStorage",{uid:r.uid}),r.uid}for(let r=0;r<localStorage.length;r++){const i=localStorage.key(r);if(i&&i.includes("firebase:authUser")){const s=localStorage.getItem(i);if(s){const o=JSON.parse(s);if(o.uid)return oe("INFO","User ID trouvé via clé alternative",{uid:o.uid,key:i}),o.uid}}}return oe("WARN","Aucun User ID trouvé dans localStorage"),""}catch(e){return oe("ERROR","Erreur récupération userId",{error:e}),""}}async redirectToCheckout(e){oe("INFO","Début redirection Stripe Checkout",e);try{const n=await this.stripePromise;if(!n)throw oe("ERROR","Stripe non initialisé"),new Error("Stripe non initialisé");oe("INFO","Stripe initialisé, création de la session...");const r=await this.createCheckoutSession(e);oe("INFO","Session créée, redirection vers Stripe",{sessionId:r.sessionId});const{error:i}=await n.redirectToCheckout({sessionId:r.sessionId});if(i)throw oe("ERROR","Erreur redirection Stripe",i),new Error(i.message);oe("INFO","Redirection Stripe réussie")}catch(n){throw oe("ERROR","Erreur redirection paiement",n),n}}getWebhookUrl(){return`${this.functionsUrl}/webhook`}}const qb=new Hb,Wb=({onBack:t,userEmail:e,currentUserEmail:n})=>{var g,A;const{user:r}=pi(),i=((g=r==null?void 0:r.subscription)==null?void 0:g.plan)||"free",s=!!r,o=[{id:"abonnement",name:"Plan Abonnement",price:"9,90€",period:"par mois",credits:25,features:["25 transformations par mois","Qualité haute définition","Support prioritaire","Historique des créations","Accès complet à toutes les fonctionnalités"],icon:kr,color:"bg-vinted-500",popular:!0},{id:"free",name:"Gratuit",price:"0€",period:"toujours",credits:3,features:["3 transformations gratuites","Qualité standard","Support communautaire"],icon:xb,color:"bg-gray-500",popular:!1},{id:"pro",name:"Pro",price:"22,90€",period:"par mois",credits:150,features:["150 transformations par mois","Qualité ultra HD","Support VIP 24/7","API access","Exports en lot"],icon:db,color:"bg-purple-500",popular:!1}],l=async R=>{if(R.id==="free")return;if(!s||!r){alert("Vous devez être connecté pour souscrire à un plan payant");return}if(!["abonnement","starter","pro"].includes(R.id)){console.error("Plan non supporté:",R.id),alert("Erreur: Plan non supporté");return}console.log(`🔗 Création session Stripe pour le plan ${R.name}`),console.log("🌍 URL actuelle:",window.location.href),console.log("🔧 Environnement détecté:",window.location.hostname);const P=(r==null?void 0:r.email)||n||e||"";if(!P){alert("Email requis pour créer la session de paiement");return}if(!(r!=null&&r.uid)){alert("Identifiant utilisateur manquant. Veuillez vous reconnecter.");return}console.log(`🔄 Redirection vers Stripe pour le plan ${R.name}...`);try{await qb.redirectToCheckout({planType:R.id,userEmail:P,userId:r.uid,successUrl:`${window.location.origin}/?success=true&plan=${R.id}`,cancelUrl:`${window.location.origin}/?canceled=true`})}catch(V){console.error("❌ Erreur lors de la création de la session:",V);const w=V instanceof Error?V.message:"Erreur inconnue";alert(`Erreur de paiement: ${w}`)}},u=R=>{R.preventDefault()},c=R=>{R.preventDefault()},f=R=>R.id===i?"Plan actuel":R.id==="free"?"Plan gratuit":s&&(r!=null&&r.hasPaid)&&i!=="free"?`Passer au plan ${R.name}`:`Choisir ${R.name}`,m=R=>R.id===i;return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"}),p.jsx("div",{className:"absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"})]}),p.jsx("div",{className:"relative z-10 min-h-screen",children:p.jsxs("div",{className:"container mx-auto px-4 py-8 max-w-6xl",children:[p.jsxs("button",{onClick:t,className:"flex items-center text-white/80 hover:text-white mb-8 transition-colors",children:[p.jsx(cT,{className:"w-5 h-5 mr-2"}),"Retour"]}),p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg",children:"Choisissez Votre Plan"}),p.jsx("p",{className:"text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow",children:"Transformez vos photos mode avec l'IA et boostez vos ventes sur Vinted"}),s&&p.jsxs("div",{className:"mt-6 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 max-w-md mx-auto",children:[p.jsxs("p",{className:"text-white font-medium",children:["Connecté en tant que ",r==null?void 0:r.firstName]}),p.jsxs("p",{className:"text-white/80 text-sm",children:["Plan actuel: ",i==="free"?"Gratuit":i==="starter"?"Starter":"Pro",(r==null?void 0:r.hasPaid)&&p.jsxs("span",{className:"ml-2",children:["• ",((A=r.subscription)==null?void 0:A.creditsRemaining)||0," crédits restants"]})]}),s&&(r==null?void 0:r.hasPaid)&&i!=="free"&&p.jsx("p",{className:"text-white/70 text-xs mt-2",children:"💡 Changer de plan annulera automatiquement votre abonnement actuel"})]})]}),p.jsx("div",{className:"grid md:grid-cols-3 gap-8 max-w-5xl mx-auto",children:o.map(R=>{const P=R.icon,V=R.id===i,w=m(R);return p.jsxs("div",{className:`
                    relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105
                    ${R.popular?"border-white shadow-2xl ring-2 ring-white/30":"border-white/20 hover:border-white/40"}
                    ${V?"ring-2 ring-green-400 bg-green-500/10":""}
                  `,children:[R.popular&&p.jsx("div",{className:"absolute -top-4 left-1/2 transform -translate-x-1/2",children:p.jsx("div",{className:"bg-white text-vinted-500 px-4 py-1 rounded-full text-sm font-medium shadow-lg",children:"⭐ Populaire"})}),V&&p.jsx("div",{className:"absolute -top-4 right-4",children:p.jsxs("div",{className:"bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center",children:[p.jsx(Zy,{className:"w-3 h-3 mr-1"}),"Actuel"]})}),p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:`w-16 h-16 ${R.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`,children:p.jsx(P,{className:"w-8 h-8 text-white"})}),p.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:R.name}),p.jsxs("div",{className:"mb-6",children:[p.jsx("span",{className:"text-4xl font-bold text-white",children:R.price}),p.jsxs("span",{className:"text-white/80 ml-2",children:["/",R.period]})]}),p.jsx("div",{className:"mb-6 p-3 bg-white/10 rounded-lg",children:p.jsxs("span",{className:"text-white font-medium text-lg",children:[R.credits," transformations"]})}),p.jsx("ul",{className:"space-y-3 mb-8",children:R.features.map((_,T)=>p.jsxs("li",{className:"flex items-center text-white/90",children:[p.jsx(Zy,{className:"w-4 h-4 text-green-400 mr-3 flex-shrink-0"}),p.jsx("span",{className:"text-sm",children:_})]},T))}),R.id==="free"?p.jsx("button",{onClick:u,className:"w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-lg bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 hover:scale-105 inline-block text-center cursor-pointer",children:f(R)}):w?p.jsx("button",{onClick:c,className:"w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-lg bg-green-500 text-white cursor-not-allowed opacity-75 inline-block text-center",children:f(R)}):p.jsx("button",{onClick:()=>l(R),className:`
                          w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-lg inline-block text-center
                          ${R.popular?"bg-white text-vinted-500 hover:bg-white/90 hover:scale-105":"bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 hover:scale-105"}
                        `,children:f(R)})]})]},R.id)})}),p.jsxs("div",{className:"mt-16 max-w-3xl mx-auto",children:[p.jsx("h2",{className:"text-2xl font-bold text-white text-center mb-8",children:"Questions Fréquentes"}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20",children:[p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Puis-je changer de plan à tout moment ?"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. L'ancien abonnement sera automatiquement annulé."})]}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20",children:[p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Que se passe-t-il si je n'utilise pas tous mes crédits ?"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Les crédits non utilisés ne sont pas reportés au mois suivant. Choisissez le plan qui correspond à votre utilisation mensuelle."})]})]})]})]})})]})},Gb=()=>{const[t,e]=ne.useState("En attente..."),{updateUserPaymentStatus:n}=pi();return ne.useEffect(()=>{(async()=>{try{const i=new URLSearchParams(window.location.search),s=i.get("type"),o=i.get("user_id"),l=i.get("plan_type");console.log("🎯 Webhook reçu:",{eventType:s,userId:o,planType:l}),e(`Webhook reçu: ${s}`),s==="checkout.session.completed"&&o&&l&&(console.log("💳 Traitement du paiement réussi"),await n(!0,l),e("Paiement traité avec succès"),setTimeout(()=>{window.location.href=`/?success=true&plan=${l}`},2e3))}catch(i){console.error("❌ Erreur traitement webhook:",i),e("Erreur lors du traitement")}})()},[n]),p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 flex items-center justify-center p-4",children:p.jsxs("div",{className:"bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl",children:[p.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Traitement du Paiement"}),p.jsx("p",{className:"text-gray-600 mb-4",children:t}),p.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-vinted-500 mx-auto"})]})})};let _d=null;const Kb=t=>{_d=t},H=t=>{const n=`[${new Date().toLocaleTimeString()}] ${t}`;console.log(n),_d&&_d(n)},Qb=t=>new Promise((e,n)=>{H("🔄 Redimensionnement de l'image à 896x1152...");const r=document.createElement("canvas"),i=r.getContext("2d"),s=new Image;if(!i){n(new Error("Impossible de créer le contexte canvas"));return}s.onload=()=>{r.width=896,r.height=1152,i.fillStyle="#ffffff",i.fillRect(0,0,896,1152);const u=s.width/s.height,c=896/1152;let f,m;u>c?(m=1152,f=1152*u):(f=896,m=896/u);const g=(896-f)/2,A=(1152-m)/2;i.drawImage(s,g,A,f,m),r.toBlob(R=>{if(R){const P=new File([R],t.name,{type:"image/jpeg",lastModified:Date.now()});H(`✅ Image redimensionnée: ${P.size} bytes`),e(P)}else n(new Error("Impossible de créer le blob redimensionné"))},"image/jpeg",.9)},s.onerror=()=>{n(new Error("Impossible de charger l'image"))},s.src=URL.createObjectURL(t)}),Xb=async(t,e)=>{H("🚀 Début du traitement d'image");try{if(H("🔍 Validation du fichier..."),!t||t.size===0)throw H("❌ Fichier invalide ou vide"),new Error("Fichier invalide ou vide");if(t.size>25*1024*1024)throw H(`❌ Fichier trop volumineux: ${t.size} bytes`),new Error("Fichier trop volumineux (max 25MB)");const n=(t.size/(1024*1024)).toFixed(2);if(H(`📏 Taille du fichier: ${t.size} bytes (${n} MB)`),!t.type.startsWith("image/"))throw H(`❌ Type de fichier invalide: ${t.type}`),new Error("Le fichier doit être une image");H(`✅ Fichier validé: ${t.name} (${t.size} bytes, ${t.type})`);let r;try{r=await Qb(t)}catch(T){throw H(`❌ Erreur redimensionnement: ${T}`),new Error("Impossible de redimensionner l'image")}H("🔄 Début conversion base64...");let i;try{i=await Yb(r);const T=(i.length*.75/1024).toFixed(2);H(`✅ Conversion réussie: ${i.length} caractères (~${T} KB)`)}catch(T){throw H(`❌ Erreur conversion: ${T}`),new Error("Impossible de traiter l'image")}if(!i||i.length===0)throw H("❌ Base64 vide après conversion"),new Error("Échec de la conversion de l'image");H(`🚀 Envoi vers webhook: ${e.gender} ${e.size.toUpperCase()}`),H("📦 Préparation du payload...");const s={image:i,gender:e.gender,size:e.size,mirror:e.mirror};H("📋 Paramètres ajoutés au payload:"),H(`  - gender: "${e.gender}"`),H(`  - size: "${e.size}"`),H(`  - mirror: "${e.mirror}"`),H("📡 URL du webhook: https://n8n-automatisation.fr/webhook-test/testvolt");const o=JSON.stringify(s).length,l=(o/(1024*1024)).toFixed(2);if(H(`📦 Payload: ${o} caractères (${l} MB)`),o>100*1024*1024)throw H("❌ Payload trop volumineux pour l'envoi"),new Error("Image trop complexe à traiter. Essayez avec une image plus simple.");H(`📋 Payload final: ${JSON.stringify({image:`[base64 data - ${i.length} chars]`,gender:e.gender,size:e.size,mirror:e.mirror})}`);const u="https://n8n-automatisation.fr/webhook-test/testvolt";H(`📡 Envoi de la requête vers: ${u}`);const c=new AbortController,f=setTimeout(()=>{H("⏰ Timeout - annulation de la requête"),c.abort()},3e4);H(`📡 Envoi de la requête... (${l} MB)`);const m=Date.now(),g=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST, GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization",Origin:window.location.origin,Referer:window.location.href},body:JSON.stringify(s),signal:c.signal,mode:"cors",credentials:"omit"});clearTimeout(f);const R=Date.now()-m;if(H(`✅ Requête envoyée en ${R}ms`),H(`📡 Réponse reçue: ${g.status} ${g.statusText}`),!g.ok){const T=await g.text().catch(()=>"Erreur inconnue");throw H(`❌ Erreur serveur (${g.status}): ${T}`),new Error(`Erreur serveur (${g.status}): ${T}`)}const P=g.headers.get("content-type");H(`🎭 Type de contenu: ${P}`);const V=g.clone();try{const T=await V.text();if(H(`📝 Réponse reçue (${T.length} caractères)`),T.length===0)throw H("❌ Réponse vide du serveur"),new Error("Réponse vide du serveur");if(P!=null&&P.includes("application/json")){H("🔍 Parsing JSON...");const b=JSON.parse(T);if(H("📊 Données JSON reçues"),b.image||b.imageUrl||b.result){H("🖼️ Image trouvée dans la réponse");const L=b.image||b.imageUrl||b.result;if(typeof L=="string")return L.startsWith("http")?(H("✅ URL d'image reçue"),{success:!0,imageUrl:L}):L.startsWith("data:image/")?(H("✅ Image base64 avec préfixe reçue"),{success:!0,imageUrl:L}):(H("✅ Image base64 sans préfixe reçue"),{success:!0,imageUrl:`data:image/png;base64,${L}`})}return H("❌ Format de réponse JSON non reconnu"),{success:!1,error:"Format de réponse non reconnu"}}}catch(T){H(`⚠️ Impossible de lire comme texte: ${T}`)}H("🖼️ Traitement comme image binaire...");let w;try{w=await g.blob()}catch(T){throw H(`❌ Erreur lecture blob: ${T}`),new Error("Impossible de lire la réponse du serveur")}if(H(`📦 Blob reçu: ${w.size} bytes (${w.type})`),w.size===0)throw H("❌ Image reçue vide"),new Error("Image reçue vide");const _=URL.createObjectURL(w);return H("✅ URL de l'image créée"),{success:!0,imageUrl:_}}catch(n){H(`❌ Erreur finale: ${n instanceof Error?n.message:n}`);let r="Erreur de traitement inconnue";return n instanceof Error&&(n.name==="AbortError"?r="Délai d'attente dépassé. Vérifiez votre connexion.":n.message.includes("Failed to fetch")||n.message.includes("NetworkError")?r="Problème de connexion. Vérifiez votre réseau.":n.message.includes("Load failed")?r="Problème de connexion réseau. Vérifiez votre connexion internet.":n.message.includes("413")||n.message.includes("Request Entity Too Large")?r="Image trop volumineuse pour le serveur. Réduisez la taille de votre image.":r=n.message),H(`❌ Message final: ${r}`),{success:!1,error:r}}},Yb=t=>new Promise((e,n)=>{if(H(`🔄 Conversion ${t.name}: ${t.size} bytes`),!t){H("❌ Aucun fichier fourni"),n(new Error("Aucun fichier fourni"));return}H(`📁 Type: ${t.type}, Taille: ${(t.size/1024).toFixed(1)} KB`);const r=new FileReader;r.onload=()=>{H("✅ FileReader onload");try{if(typeof r.result=="string"){const i=r.result.split(",")[1];if(!i||i.length===0){H("❌ Base64 vide après split"),n(new Error("Conversion base64 échouée"));return}H(`✅ Base64: ${i.length} chars`),e(i)}else H("❌ Résultat FileReader invalide"),n(new Error("Format de fichier non supporté"))}catch(i){H(`❌ Erreur dans onload: ${i}`),n(new Error("Erreur lors de la conversion"))}},r.onerror=()=>{H("❌ FileReader onerror"),n(new Error("Impossible de lire le fichier"))},r.onabort=()=>{H("❌ FileReader onabort"),n(new Error("Lecture du fichier interrompue"))};try{H("🚀 Lecture fichier..."),r.readAsDataURL(t)}catch(i){H(`❌ Erreur démarrage readAsDataURL: ${i}`),n(new Error("Impossible d'initier la lecture du fichier"))}}),Jb=({planType:t,onContinue:e})=>{const{user:n,updateUserPaymentStatus:r}=pi();ne.useEffect(()=>{t&&["starter","pro"].includes(t)&&setTimeout(()=>{window.location.reload()},2e3)},[t,r]);const s=(o=>{switch(o){case"abonnement":return{name:"Plan Abonnement",credits:25,price:"9,90€"};case"starter":return{name:"Starter",credits:25,price:"9,90€"};case"pro":return{name:"Pro",credits:150,price:"22,90€"};default:return{name:"Plan Abonnement",credits:25,price:"9,90€"}}})(t||"starter");return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"}),p.jsx("div",{className:"absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"})]}),p.jsx("div",{className:"relative z-10 min-h-screen flex items-center justify-center p-4",children:p.jsx("div",{className:"max-w-md w-full",children:p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 text-center",children:[p.jsx("div",{className:"w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce",children:p.jsx(hb,{className:"w-10 h-10 text-white"})}),p.jsx("h1",{className:"text-3xl font-bold text-white mb-4",children:"Paiement Réussi !"}),p.jsxs("p",{className:"text-white/90 mb-6",children:["🎉 Félicitations ! Votre abonnement ",p.jsx("strong",{children:s.name})," a été activé avec succès."]}),p.jsxs("div",{className:"bg-white/10 rounded-xl p-4 mb-6 border border-white/20",children:[p.jsxs("div",{className:"flex items-center justify-center mb-3",children:[p.jsx(kr,{className:"w-5 h-5 text-white mr-2"}),p.jsxs("span",{className:"text-white font-semibold",children:["Plan ",s.name]})]}),p.jsxs("div",{className:"space-y-2 text-white/80 text-sm",children:[p.jsxs("p",{children:["💳 ",s.credits," crédits par mois"]}),p.jsxs("p",{children:["💰 ",s.price,"/mois"]}),p.jsx("p",{children:"🚀 Accès complet activé"})]})]}),n&&p.jsxs("div",{className:"bg-white/10 rounded-xl p-4 mb-6 border border-white/20",children:[p.jsxs("p",{className:"text-white/90 text-sm",children:["Bonjour ",p.jsx("strong",{children:n.firstName})," !"]}),p.jsxs("p",{className:"text-white/70 text-xs mt-1",children:["Vos ",s.credits," crédits sont maintenant disponibles !"]})]}),p.jsxs("button",{onClick:e,className:"w-full bg-white text-vinted-500 py-3 px-6 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg hover:scale-105 flex items-center justify-center",children:["Commencer à Créer",p.jsx(hT,{className:"w-5 h-5 ml-2"})]}),p.jsx("p",{className:"text-white/60 text-xs mt-4",children:"Un email de confirmation a été envoyé à votre adresse."})]})})})]})};function Zb(){const{user:t,isAuthenticated:e,decrementCredits:n,refundCredits:r}=pi(),[i,s]=ne.useState("main"),[o,l]=ne.useState("upload"),[u,c]=ne.useState(null),[f,m]=ne.useState(""),[g,A]=ne.useState(null),[R,P]=ne.useState(!1),[V,w]=ne.useState(null),[_,T]=ne.useState([]);cl.useEffect(()=>{const k=new URLSearchParams(window.location.search),S=window.location.pathname,ye=k.get("success"),Ye=k.get("canceled"),Et=k.get("plan");if(S==="/stripe-webhook"){s("stripe-webhook");return}ye==="true"?(s("stripe-success"),Et&&sessionStorage.setItem("stripe-plan",Et)):Ye==="true"&&(s("pricing"),setTimeout(()=>{alert("Paiement annulé. Vous pouvez réessayer quand vous voulez !")},500))},[]),cl.useEffect(()=>{Kb(k=>{T(S=>[...S.slice(-49),k])})},[]);const b=async(k,S,ye,Ye)=>{if(console.log("🚀 Début du traitement d'image"),c(k),m(S),l("processing"),P(!0),w(null),A(null),!await n()){console.log("❌ Impossible de déduire les crédits"),w("Impossible de déduire les crédits. Vérifiez votre solde."),l("upload"),P(!1);return}try{console.log("📡 Envoi vers N8N...");const De=await Xb(ye,Ye);De.success&&De.imageUrl?(console.log("✅ Image générée avec succès"),A(De.imageUrl),l("results")):(console.log("❌ Échec génération:",De.error),w(De.error||"Erreur de traitement inconnue"),l("upload"),await r())}catch(De){console.error("❌ Erreur traitement:",De),w(De instanceof Error?De.message:"Erreur de traitement"),l("upload"),await r()}finally{P(!1)}},L=()=>{l("upload"),c(null),m(""),A(null),w(null),T([])},j=()=>{s("main"),l("upload"),c(null),m(""),A(null),w(null),T([])},E=()=>{s("login")},v=()=>{s("pricing")},I=()=>{s("main")},x=()=>{s("main")},C=()=>{window.history.replaceState({},document.title,window.location.pathname),sessionStorage.removeItem("stripe-plan"),s("main")};if(i==="stripe-webhook")return p.jsx(Gb,{});if(i==="login")return p.jsx(Nb,{onBack:I,onShowPricing:k=>{s("pricing")}});if(i==="pricing")return p.jsx(Wb,{onBack:x,currentUserEmail:t==null?void 0:t.email});if(i==="stripe-success"){const k=sessionStorage.getItem("stripe-plan")||void 0;return p.jsx(Jb,{planType:k,onContinue:C})}return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"}),p.jsx("div",{className:"absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"})]}),p.jsxs("div",{className:"relative z-10 min-h-screen flex flex-col",children:[p.jsx(Ab,{onShowLogin:E,onShowPricing:v,onGoHome:j}),p.jsxs("main",{className:"flex-1 container mx-auto px-4 py-8 max-w-6xl",children:[o==="upload"&&p.jsx(Cb,{onImageUpload:b,isProcessing:R,processingError:V,onShowLogin:E,onShowPricing:v}),o==="processing"&&p.jsx(kb,{uploadedImage:u,fileName:f}),o==="results"&&p.jsx(Pb,{uploadedImage:u,generatedImage:g,fileName:f,onStartOver:L})]}),p.jsx(Rb,{})]}),!1]})}console.log("🚀 === DEBUT MAIN.TSX ===");console.log("🚀 React version:",cl.version);console.log("🚀 Window object exists:",typeof window<"u");console.log("🚀 Document ready state:",document.readyState);console.log("🚀 Root element exists:",!!document.getElementById("root"));console.log("🧪 TEST CONSOLE - Si vous voyez ceci, les logs fonctionnent !");console.warn("🧪 TEST WARNING - Test d'avertissement");const wd=document.getElementById("root");if(!wd)throw console.error("❌ ERREUR CRITIQUE: Element root non trouvé !"),new Error("Root element not found");try{console.log("🚀 === CREATION ROOT REACT ===");const t=gw(wd);console.log("🚀 === DEBUT RENDER APP ==="),t.render(p.jsx(ne.StrictMode,{children:p.jsx(ab,{children:p.jsx(Zb,{})})})),console.log("✅ === APP RENDU AVEC SUCCES ===")}catch(t){console.error("❌ === ERREUR CRITIQUE LORS DU RENDU ==="),console.error("❌ Erreur:",t),console.error("❌ Stack:",t==null?void 0:t.stack),wd.innerHTML=`
    <div style="padding: 20px; background: #fee; border: 1px solid #fcc; margin: 20px; border-radius: 8px;">
      <h2 style="color: #c00;">Erreur de chargement</h2>
      <p>Une erreur s'est produite lors du chargement de l'application.</p>
      <p><strong>Erreur:</strong> ${(t==null?void 0:t.message)||"Erreur inconnue"}</p>
      <p>Vérifiez la console pour plus de détails.</p>
    </div>
  `}console.log("🚀 === FIN MAIN.TSX ===");
