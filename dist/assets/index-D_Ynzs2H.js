(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ZE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lv={exports:{}},iu={},uv={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),eT=Symbol.for("react.portal"),tT=Symbol.for("react.fragment"),nT=Symbol.for("react.strict_mode"),rT=Symbol.for("react.profiler"),iT=Symbol.for("react.provider"),sT=Symbol.for("react.context"),oT=Symbol.for("react.forward_ref"),aT=Symbol.for("react.suspense"),lT=Symbol.for("react.memo"),uT=Symbol.for("react.lazy"),hm=Symbol.iterator;function cT(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var cv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hv=Object.assign,dv={};function ss(t,e,n){this.props=t,this.context=e,this.refs=dv,this.updater=n||cv}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fv(){}fv.prototype=ss.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=dv,this.updater=n||cv}var Sd=Id.prototype=new fv;Sd.constructor=Id;hv(Sd,ss.prototype);Sd.isPureReactComponent=!0;var dm=Array.isArray,pv=Object.prototype.hasOwnProperty,xd={current:null},mv={key:!0,ref:!0,__self:!0,__source:!0};function gv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pv.call(e,r)&&!mv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Fo,type:t,key:s,ref:o,props:i,_owner:xd.current}}function hT(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function dT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fm=/\/+/g;function fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dT(""+t.key):e.toString(36)}function Ba(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case eT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fc(o,0):r,dm(i)?(n="",t!=null&&(n=t.replace(fm,"$&/")+"/"),Ba(i,e,n,"",function(c){return c})):i!=null&&(Ad(i)&&(i=hT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(fm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",dm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+fc(s,l);o+=Ba(s,e,n,u,i)}else if(u=cT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+fc(s,l++),o+=Ba(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function va(t,e,n){if(t==null)return t;var r=[],i=0;return Ba(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Ha={transition:null},pT={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ha,ReactCurrentOwner:xd};function yv(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:va,forEach:function(t,e,n){va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return va(t,function(){e++}),e},toArray:function(t){return va(t,function(e){return e})||[]},only:function(t){if(!Ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=ss;Z.Fragment=tT;Z.Profiler=rT;Z.PureComponent=Id;Z.StrictMode=nT;Z.Suspense=aT;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pT;Z.act=yv;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=hv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)pv.call(e,u)&&!mv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Fo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:sT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iT,_context:t},t.Consumer=t};Z.createElement=gv;Z.createFactory=function(t){var e=gv.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:oT,render:t}};Z.isValidElement=Ad;Z.lazy=function(t){return{$$typeof:uT,_payload:{_status:-1,_result:t},_init:fT}};Z.memo=function(t,e){return{$$typeof:lT,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ha.transition;Ha.transition={};try{t()}finally{Ha.transition=e}};Z.unstable_act=yv;Z.useCallback=function(t,e){return ht.current.useCallback(t,e)};Z.useContext=function(t){return ht.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ht.current.useEffect(t,e)};Z.useId=function(){return ht.current.useId()};Z.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ht.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};Z.useRef=function(t){return ht.current.useRef(t)};Z.useState=function(t){return ht.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ht.current.useTransition()};Z.version="18.3.1";uv.exports=Z;var te=uv.exports;const hl=ZE(te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mT=te,gT=Symbol.for("react.element"),yT=Symbol.for("react.fragment"),vT=Object.prototype.hasOwnProperty,_T=mT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wT={key:!0,ref:!0,__self:!0,__source:!0};function vv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vT.call(e,r)&&!wT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gT,type:t,key:s,ref:o,props:i,_owner:_T.current}}iu.Fragment=yT;iu.jsx=vv;iu.jsxs=vv;lv.exports=iu;var p=lv.exports,_v={exports:{}},Pt={},wv={exports:{}},Ev={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var _e=J-1>>>1,ue=z[_e];if(0<i(ue,Q))z[_e]=Q,z[J]=ue,J=_e;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var _e=0,ue=z.length,Re=ue>>>1;_e<Re;){var gn=2*(_e+1)-1,yn=z[gn],vn=gn+1,_n=z[vn];if(0>i(yn,J))vn<ue&&0>i(_n,yn)?(z[_e]=_n,z[vn]=J,_e=vn):(z[_e]=yn,z[gn]=J,_e=gn);else if(vn<ue&&0>i(_n,J))z[_e]=_n,z[vn]=J,_e=vn;else break e}}return Q}function i(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,R=!1,A=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function b(z){if(P=!1,E(z),!A)if(n(u)!==null)A=!0,Tt(L);else{var Q=n(c);Q!==null&&ve(b,Q.startTime-z)}}function L(z,Q){A=!1,P&&(P=!1,w(v),v=-1),R=!0;var J=g;try{for(E(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||z&&!C());){var _e=m.callback;if(typeof _e=="function"){m.callback=null,g=m.priorityLevel;var ue=_e(m.expirationTime<=Q);Q=t.unstable_now(),typeof ue=="function"?m.callback=ue:m===n(u)&&r(u),E(Q)}else r(u);m=n(u)}if(m!==null)var Re=!0;else{var gn=n(c);gn!==null&&ve(b,gn.startTime-Q),Re=!1}return Re}finally{m=null,g=J,R=!1}}var j=!1,T=null,v=-1,I=5,x=-1;function C(){return!(t.unstable_now()-x<I)}function k(){if(T!==null){var z=t.unstable_now();x=z;var Q=!0;try{Q=T(!0,z)}finally{Q?S():(j=!1,T=null)}}else j=!1}var S;if(typeof _=="function")S=function(){_(k)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,ft=De.port2;De.port1.onmessage=k,S=function(){ft.postMessage(null)}}else S=function(){D(k,0)};function Tt(z){T=z,j||(j=!0,S())}function ve(z,Q){v=D(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||R||(A=!0,Tt(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var J=g;g=Q;try{return z()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=g;g=z;try{return Q()}finally{g=J}},t.unstable_scheduleCallback=function(z,Q,J){var _e=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?_e+J:_e):J=_e,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=J+ue,z={id:f++,callback:Q,priorityLevel:z,startTime:J,expirationTime:ue,sortIndex:-1},J>_e?(z.sortIndex=J,e(c,z),n(u)===null&&z===n(c)&&(P?(w(v),v=-1):P=!0,ve(b,J-_e))):(z.sortIndex=ue,e(u,z),A||R||(A=!0,Tt(L))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var Q=g;return function(){var J=g;g=Q;try{return z.apply(this,arguments)}finally{g=J}}}})(Ev);wv.exports=Ev;var ET=wv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT=te,kt=ET;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tv=new Set,fo={};function ii(t,e){Wi(t,e),Wi(t+"Capture",e)}function Wi(t,e){for(fo[t]=e,t=0;t<e.length;t++)Tv.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),th=Object.prototype.hasOwnProperty,IT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pm={},mm={};function ST(t){return th.call(mm,t)?!0:th.call(pm,t)?!1:IT.test(t)?mm[t]=!0:(pm[t]=!0,!1)}function xT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function AT(t,e,n,r){if(e===null||typeof e>"u"||xT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rd=/[\-:]([a-z])/g;function Cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rd,Cd);Ke[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rd,Cd);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rd,Cd);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AT(e,n,i,r)&&(n=null),r||i===null?ST(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=TT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),Ii=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),nh=Symbol.for("react.profiler"),Iv=Symbol.for("react.provider"),Sv=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),rh=Symbol.for("react.suspense"),ih=Symbol.for("react.suspense_list"),bd=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),xv=Symbol.for("react.offscreen"),gm=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,pc;function js(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?js(t):""}function RT(t){switch(t.tag){case 5:return js(t.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function sh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ii:return"Fragment";case Ti:return"Portal";case nh:return"Profiler";case Pd:return"StrictMode";case rh:return"Suspense";case ih:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sv:return(t.displayName||"Context")+".Consumer";case Iv:return(t._context.displayName||"Context")+".Provider";case Nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bd:return e=t.displayName||null,e!==null?e:sh(t.type)||"Memo";case Wn:e=t._payload,t=t._init;try{return sh(t(e))}catch{}}return null}function CT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sh(e);case 8:return e===Pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kT(t){var e=Av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wa(t){t._valueTracker||(t._valueTracker=kT(t))}function Rv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Av(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ym(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cv(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function ah(t,e){Cv(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lh(t,e.type,n):e.hasOwnProperty("defaultValue")&&lh(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lh(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fs=Array.isArray;function Oi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function uh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Fs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function kv(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ea,Nv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ea=Ea||document.createElement("div"),Ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PT=["Webkit","ms","Moz","O"];Object.keys(Qs).forEach(function(t){PT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qs[e]=Qs[t]})});function bv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qs.hasOwnProperty(t)&&Qs[t]?(""+e).trim():e+"px"}function Dv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var NT=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hh(t,e){if(e){if(NT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fh=null;function Dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ph=null,Li=null,Mi=null;function Em(t){if(t=$o(t)){if(typeof ph!="function")throw Error(F(280));var e=t.stateNode;e&&(e=uu(e),ph(t.stateNode,t.type,e))}}function Vv(t){Li?Mi?Mi.push(t):Mi=[t]:Li=t}function Ov(){if(Li){var t=Li,e=Mi;if(Mi=Li=null,Em(t),e)for(t=0;t<e.length;t++)Em(e[t])}}function Lv(t,e){return t(e)}function Mv(){}var yc=!1;function jv(t,e,n){if(yc)return t(e,n);yc=!0;try{return Lv(t,e,n)}finally{yc=!1,(Li!==null||Mi!==null)&&(Mv(),Ov())}}function mo(t,e){var n=t.stateNode;if(n===null)return null;var r=uu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var mh=!1;if(Pn)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){mh=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{mh=!1}function bT(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Xs=!1,fl=null,pl=!1,gh=null,DT={onError:function(t){Xs=!0,fl=t}};function VT(t,e,n,r,i,s,o,l,u){Xs=!1,fl=null,bT.apply(DT,arguments)}function OT(t,e,n,r,i,s,o,l,u){if(VT.apply(this,arguments),Xs){if(Xs){var c=fl;Xs=!1,fl=null}else throw Error(F(198));pl||(pl=!0,gh=c)}}function si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tm(t){if(si(t)!==t)throw Error(F(188))}function LT(t){var e=t.alternate;if(!e){if(e=si(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Tm(i),t;if(s===r)return Tm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Uv(t){return t=LT(t),t!==null?zv(t):null}function zv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zv(t);if(e!==null)return e;t=t.sibling}return null}var $v=kt.unstable_scheduleCallback,Im=kt.unstable_cancelCallback,MT=kt.unstable_shouldYield,jT=kt.unstable_requestPaint,ke=kt.unstable_now,FT=kt.unstable_getCurrentPriorityLevel,Vd=kt.unstable_ImmediatePriority,Bv=kt.unstable_UserBlockingPriority,ml=kt.unstable_NormalPriority,UT=kt.unstable_LowPriority,Hv=kt.unstable_IdlePriority,su=null,rn=null;function zT(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:HT,$T=Math.log,BT=Math.LN2;function HT(t){return t>>>=0,t===0?32:31-($T(t)/BT|0)|0}var Ta=64,Ia=4194304;function Us(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Us(l):(s&=o,s!==0&&(r=Us(s)))}else o=n&~i,o!==0?r=Us(o):s!==0&&(r=Us(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function WT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=WT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wv(){var t=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),t}function vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function GT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function qv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gv,Ld,Kv,Qv,Xv,vh=!1,Sa=[],nr=null,rr=null,ir=null,go=new Map,yo=new Map,Gn=[],KT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sm(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function Ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$o(e),e!==null&&Ld(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QT(t,e,n,r,i){switch(e){case"focusin":return nr=Ps(nr,t,e,n,r,i),!0;case"dragenter":return rr=Ps(rr,t,e,n,r,i),!0;case"mouseover":return ir=Ps(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return go.set(s,Ps(go.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yo.set(s,Ps(yo.get(s)||null,t,e,n,r,i)),!0}return!1}function Yv(t){var e=jr(t.target);if(e!==null){var n=si(e);if(n!==null){if(e=n.tag,e===13){if(e=Fv(n),e!==null){t.blockedOn=e,Xv(t.priority,function(){Kv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_h(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);fh=r,n.target.dispatchEvent(r),fh=null}else return e=$o(n),e!==null&&Ld(e),t.blockedOn=n,!1;e.shift()}return!0}function xm(t,e,n){Wa(t)&&n.delete(e)}function XT(){vh=!1,nr!==null&&Wa(nr)&&(nr=null),rr!==null&&Wa(rr)&&(rr=null),ir!==null&&Wa(ir)&&(ir=null),go.forEach(xm),yo.forEach(xm)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,vh||(vh=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,XT)))}function vo(t){function e(i){return Ns(i,t)}if(0<Sa.length){Ns(Sa[0],t);for(var n=1;n<Sa.length;n++){var r=Sa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&Ns(nr,t),rr!==null&&Ns(rr,t),ir!==null&&Ns(ir,t),go.forEach(e),yo.forEach(e),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)Yv(n),n.blockedOn===null&&Gn.shift()}var ji=jn.ReactCurrentBatchConfig,yl=!0;function YT(t,e,n,r){var i=le,s=ji.transition;ji.transition=null;try{le=1,Md(t,e,n,r)}finally{le=i,ji.transition=s}}function JT(t,e,n,r){var i=le,s=ji.transition;ji.transition=null;try{le=4,Md(t,e,n,r)}finally{le=i,ji.transition=s}}function Md(t,e,n,r){if(yl){var i=_h(t,e,n,r);if(i===null)Cc(t,e,r,vl,n),Sm(t,r);else if(QT(i,t,e,n,r))r.stopPropagation();else if(Sm(t,r),e&4&&-1<KT.indexOf(t)){for(;i!==null;){var s=$o(i);if(s!==null&&Gv(s),s=_h(t,e,n,r),s===null&&Cc(t,e,r,vl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Cc(t,e,r,null,n)}}var vl=null;function _h(t,e,n,r){if(vl=null,t=Dd(r),t=jr(t),t!==null)if(e=si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function Jv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FT()){case Vd:return 1;case Bv:return 4;case ml:case UT:return 16;case Hv:return 536870912;default:return 16}default:return 16}}var Zn=null,jd=null,qa=null;function Zv(){if(qa)return qa;var t,e=jd,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return qa=i.slice(t,1<r?1-r:void 0)}function Ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function Am(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xa:Am,this.isPropagationStopped=Am,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=Nt(os),zo=Ie({},os,{view:0,detail:0}),ZT=Nt(zo),_c,wc,bs,ou=Ie({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(_c=t.screenX-bs.screenX,wc=t.screenY-bs.screenY):wc=_c=0,bs=t),_c)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),Rm=Nt(ou),eI=Ie({},ou,{dataTransfer:0}),tI=Nt(eI),nI=Ie({},zo,{relatedTarget:0}),Ec=Nt(nI),rI=Ie({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),iI=Nt(rI),sI=Ie({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oI=Nt(sI),aI=Ie({},os,{data:0}),Cm=Nt(aI),lI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cI[t])?!!e[t]:!1}function Ud(){return hI}var dI=Ie({},zo,{key:function(t){if(t.key){var e=lI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?Ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fI=Nt(dI),pI=Ie({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),km=Nt(pI),mI=Ie({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),gI=Nt(mI),yI=Ie({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),vI=Nt(yI),_I=Ie({},ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wI=Nt(_I),EI=[9,13,27,32],zd=Pn&&"CompositionEvent"in window,Ys=null;Pn&&"documentMode"in document&&(Ys=document.documentMode);var TI=Pn&&"TextEvent"in window&&!Ys,e_=Pn&&(!zd||Ys&&8<Ys&&11>=Ys),Pm=" ",Nm=!1;function t_(t,e){switch(t){case"keyup":return EI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Si=!1;function II(t,e){switch(t){case"compositionend":return n_(e);case"keypress":return e.which!==32?null:(Nm=!0,Pm);case"textInput":return t=e.data,t===Pm&&Nm?null:t;default:return null}}function SI(t,e){if(Si)return t==="compositionend"||!zd&&t_(t,e)?(t=Zv(),qa=jd=Zn=null,Si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return e_&&e.locale!=="ko"?null:e.data;default:return null}}var xI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xI[t.type]:e==="textarea"}function r_(t,e,n,r){Vv(r),e=_l(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Js=null,_o=null;function AI(t){p_(t,0)}function au(t){var e=Ri(t);if(Rv(e))return t}function RI(t,e){if(t==="change")return e}var i_=!1;if(Pn){var Tc;if(Pn){var Ic="oninput"in document;if(!Ic){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),Ic=typeof Dm.oninput=="function"}Tc=Ic}else Tc=!1;i_=Tc&&(!document.documentMode||9<document.documentMode)}function Vm(){Js&&(Js.detachEvent("onpropertychange",s_),_o=Js=null)}function s_(t){if(t.propertyName==="value"&&au(_o)){var e=[];r_(e,_o,t,Dd(t)),jv(AI,e)}}function CI(t,e,n){t==="focusin"?(Vm(),Js=e,_o=n,Js.attachEvent("onpropertychange",s_)):t==="focusout"&&Vm()}function kI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(_o)}function PI(t,e){if(t==="click")return au(e)}function NI(t,e){if(t==="input"||t==="change")return au(e)}function bI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:bI;function wo(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!th.call(e,i)||!Qt(t[i],e[i]))return!1}return!0}function Om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,e){var n=Om(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Om(n)}}function o_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?o_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a_(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function $d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function DI(t){var e=a_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&o_(n.ownerDocument.documentElement,n)){if(r!==null&&$d(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Lm(n,s);var o=Lm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var VI=Pn&&"documentMode"in document&&11>=document.documentMode,xi=null,wh=null,Zs=null,Eh=!1;function Mm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eh||xi==null||xi!==dl(r)||(r=xi,"selectionStart"in r&&$d(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zs&&wo(Zs,r)||(Zs=r,r=_l(wh,"onSelect"),0<r.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xi)))}function Aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ai={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},Sc={},l_={};Pn&&(l_=document.createElement("div").style,"AnimationEvent"in window||(delete Ai.animationend.animation,delete Ai.animationiteration.animation,delete Ai.animationstart.animation),"TransitionEvent"in window||delete Ai.transitionend.transition);function lu(t){if(Sc[t])return Sc[t];if(!Ai[t])return t;var e=Ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l_)return Sc[t]=e[n];return t}var u_=lu("animationend"),c_=lu("animationiteration"),h_=lu("animationstart"),d_=lu("transitionend"),f_=new Map,jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){f_.set(t,e),ii(e,[t])}for(var xc=0;xc<jm.length;xc++){var Ac=jm[xc],OI=Ac.toLowerCase(),LI=Ac[0].toUpperCase()+Ac.slice(1);Ir(OI,"on"+LI)}Ir(u_,"onAnimationEnd");Ir(c_,"onAnimationIteration");Ir(h_,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(d_,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MI=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function Fm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,OT(r,e,void 0,t),t.currentTarget=null}function p_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Fm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Fm(i,l,c),s=u}}}if(pl)throw t=gh,pl=!1,gh=null,t}function fe(t,e){var n=e[Ah];n===void 0&&(n=e[Ah]=new Set);var r=t+"__bubble";n.has(r)||(m_(e,t,2,!1),n.add(r))}function Rc(t,e,n){var r=0;e&&(r|=4),m_(n,t,r,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[Ra]){t[Ra]=!0,Tv.forEach(function(n){n!=="selectionchange"&&(MI.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,Rc("selectionchange",!1,e))}}function m_(t,e,n,r){switch(Jv(e)){case 1:var i=YT;break;case 4:i=JT;break;default:i=Md}n=i.bind(null,e,n,t),i=void 0,!mh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}jv(function(){var c=s,f=Dd(n),m=[];e:{var g=f_.get(t);if(g!==void 0){var R=Fd,A=t;switch(t){case"keypress":if(Ga(n)===0)break e;case"keydown":case"keyup":R=fI;break;case"focusin":A="focus",R=Ec;break;case"focusout":A="blur",R=Ec;break;case"beforeblur":case"afterblur":R=Ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=tI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=gI;break;case u_:case c_:case h_:R=iI;break;case d_:R=vI;break;case"scroll":R=ZT;break;case"wheel":R=wI;break;case"copy":case"cut":case"paste":R=oI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=km}var P=(e&4)!==0,D=!P&&t==="scroll",w=P?g!==null?g+"Capture":null:g;P=[];for(var _=c,E;_!==null;){E=_;var b=E.stateNode;if(E.tag===5&&b!==null&&(E=b,w!==null&&(b=mo(_,w),b!=null&&P.push(To(_,b,E)))),D)break;_=_.return}0<P.length&&(g=new R(g,A,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",g&&n!==fh&&(A=n.relatedTarget||n.fromElement)&&(jr(A)||A[Nn]))break e;if((R||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,R?(A=n.relatedTarget||n.toElement,R=c,A=A?jr(A):null,A!==null&&(D=si(A),A!==D||A.tag!==5&&A.tag!==6)&&(A=null)):(R=null,A=c),R!==A)){if(P=Rm,b="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=km,b="onPointerLeave",w="onPointerEnter",_="pointer"),D=R==null?g:Ri(R),E=A==null?g:Ri(A),g=new P(b,_+"leave",R,n,f),g.target=D,g.relatedTarget=E,b=null,jr(f)===c&&(P=new P(w,_+"enter",A,n,f),P.target=E,P.relatedTarget=D,b=P),D=b,R&&A)t:{for(P=R,w=A,_=0,E=P;E;E=gi(E))_++;for(E=0,b=w;b;b=gi(b))E++;for(;0<_-E;)P=gi(P),_--;for(;0<E-_;)w=gi(w),E--;for(;_--;){if(P===w||w!==null&&P===w.alternate)break t;P=gi(P),w=gi(w)}P=null}else P=null;R!==null&&Um(m,g,R,P,!1),A!==null&&D!==null&&Um(m,D,A,P,!0)}}e:{if(g=c?Ri(c):window,R=g.nodeName&&g.nodeName.toLowerCase(),R==="select"||R==="input"&&g.type==="file")var L=RI;else if(bm(g))if(i_)L=NI;else{L=kI;var j=CI}else(R=g.nodeName)&&R.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=PI);if(L&&(L=L(t,c))){r_(m,L,n,f);break e}j&&j(t,g,c),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&lh(g,"number",g.value)}switch(j=c?Ri(c):window,t){case"focusin":(bm(j)||j.contentEditable==="true")&&(xi=j,wh=c,Zs=null);break;case"focusout":Zs=wh=xi=null;break;case"mousedown":Eh=!0;break;case"contextmenu":case"mouseup":case"dragend":Eh=!1,Mm(m,n,f);break;case"selectionchange":if(VI)break;case"keydown":case"keyup":Mm(m,n,f)}var T;if(zd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Si?t_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(e_&&n.locale!=="ko"&&(Si||v!=="onCompositionStart"?v==="onCompositionEnd"&&Si&&(T=Zv()):(Zn=f,jd="value"in Zn?Zn.value:Zn.textContent,Si=!0)),j=_l(c,v),0<j.length&&(v=new Cm(v,t,null,n,f),m.push({event:v,listeners:j}),T?v.data=T:(T=n_(n),T!==null&&(v.data=T)))),(T=TI?II(t,n):SI(t,n))&&(c=_l(c,"onBeforeInput"),0<c.length&&(f=new Cm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=T))}p_(m,e)})}function To(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=mo(t,n),s!=null&&r.unshift(To(t,s,i)),s=mo(t,e),s!=null&&r.push(To(t,s,i))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Um(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=mo(n,s),u!=null&&o.unshift(To(n,u,l))):i||(u=mo(n,s),u!=null&&o.push(To(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jI=/\r\n?/g,FI=/\u0000|\uFFFD/g;function zm(t){return(typeof t=="string"?t:""+t).replace(jI,`
`).replace(FI,"")}function Ca(t,e,n){if(e=zm(e),zm(t)!==e&&n)throw Error(F(425))}function wl(){}var Th=null,Ih=null;function Sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xh=typeof setTimeout=="function"?setTimeout:void 0,UI=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,zI=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(t){return $m.resolve(null).then(t).catch($I)}:xh;function $I(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vo(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),nn="__reactFiber$"+as,Io="__reactProps$"+as,Nn="__reactContainer$"+as,Ah="__reactEvents$"+as,BI="__reactListeners$"+as,HI="__reactHandles$"+as;function jr(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bm(t);t!==null;){if(n=t[nn])return n;t=Bm(t)}return e}t=n,n=t.parentNode}return null}function $o(t){return t=t[nn]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function uu(t){return t[Io]||null}var Rh=[],Ci=-1;function Sr(t){return{current:t}}function me(t){0>Ci||(t.current=Rh[Ci],Rh[Ci]=null,Ci--)}function he(t,e){Ci++,Rh[Ci]=t.current,t.current=e}var mr={},st=Sr(mr),vt=Sr(!1),qr=mr;function qi(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function El(){me(vt),me(st)}function Hm(t,e,n){if(st.current!==mr)throw Error(F(168));he(st,e),he(vt,n)}function g_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,CT(t)||"Unknown",i));return Ie({},n,r)}function Tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,qr=st.current,he(st,t),he(vt,vt.current),!0}function Wm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=g_(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,me(vt),me(st),he(st,t)):me(vt),he(vt,n)}var In=null,cu=!1,Pc=!1;function y_(t){In===null?In=[t]:In.push(t)}function WI(t){cu=!0,y_(t)}function xr(){if(!Pc&&In!==null){Pc=!0;var t=0,e=le;try{var n=In;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,cu=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),$v(Vd,xr),i}finally{le=e,Pc=!1}}return null}var ki=[],Pi=0,Il=null,Sl=0,bt=[],Dt=0,Gr=null,Sn=1,xn="";function Vr(t,e){ki[Pi++]=Sl,ki[Pi++]=Il,Il=t,Sl=e}function v_(t,e,n){bt[Dt++]=Sn,bt[Dt++]=xn,bt[Dt++]=Gr,Gr=t;var r=Sn;t=xn;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sn=1<<32-Gt(e)+i|n<<i|r,xn=s+t}else Sn=1<<s|n<<i|r,xn=t}function Bd(t){t.return!==null&&(Vr(t,1),v_(t,1,0))}function Hd(t){for(;t===Il;)Il=ki[--Pi],ki[Pi]=null,Sl=ki[--Pi],ki[Pi]=null;for(;t===Gr;)Gr=bt[--Dt],bt[Dt]=null,xn=bt[--Dt],bt[Dt]=null,Sn=bt[--Dt],bt[Dt]=null}var Rt=null,xt=null,ye=!1,Wt=null;function __(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,xt=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:Sn,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,xt=null,!0):!1;default:return!1}}function Ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kh(t){if(ye){var e=xt;if(e){var n=e;if(!qm(t,e)){if(Ch(t))throw Error(F(418));e=sr(n.nextSibling);var r=Rt;e&&qm(t,e)?__(r,n):(t.flags=t.flags&-4097|2,ye=!1,Rt=t)}}else{if(Ch(t))throw Error(F(418));t.flags=t.flags&-4097|2,ye=!1,Rt=t}}}function Gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function ka(t){if(t!==Rt)return!1;if(!ye)return Gm(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sh(t.type,t.memoizedProps)),e&&(e=xt)){if(Ch(t))throw w_(),Error(F(418));for(;e;)__(t,e),e=sr(e.nextSibling)}if(Gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xt=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xt=null}}else xt=Rt?sr(t.stateNode.nextSibling):null;return!0}function w_(){for(var t=xt;t;)t=sr(t.nextSibling)}function Gi(){xt=Rt=null,ye=!1}function Wd(t){Wt===null?Wt=[t]:Wt.push(t)}var qI=jn.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Pa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Km(t){var e=t._init;return e(t._payload)}function E_(t){function e(w,_){if(t){var E=w.deletions;E===null?(w.deletions=[_],w.flags|=16):E.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=ur(w,_),w.index=0,w.sibling=null,w}function s(w,_,E){return w.index=E,t?(E=w.alternate,E!==null?(E=E.index,E<_?(w.flags|=2,_):E):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,E,b){return _===null||_.tag!==6?(_=Mc(E,w.mode,b),_.return=w,_):(_=i(_,E),_.return=w,_)}function u(w,_,E,b){var L=E.type;return L===Ii?f(w,_,E.props.children,b,E.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Wn&&Km(L)===_.type)?(b=i(_,E.props),b.ref=Ds(w,_,E),b.return=w,b):(b=el(E.type,E.key,E.props,null,w.mode,b),b.ref=Ds(w,_,E),b.return=w,b)}function c(w,_,E,b){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=jc(E,w.mode,b),_.return=w,_):(_=i(_,E.children||[]),_.return=w,_)}function f(w,_,E,b,L){return _===null||_.tag!==7?(_=Hr(E,w.mode,b,L),_.return=w,_):(_=i(_,E),_.return=w,_)}function m(w,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Mc(""+_,w.mode,E),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _a:return E=el(_.type,_.key,_.props,null,w.mode,E),E.ref=Ds(w,null,_),E.return=w,E;case Ti:return _=jc(_,w.mode,E),_.return=w,_;case Wn:var b=_._init;return m(w,b(_._payload),E)}if(Fs(_)||Cs(_))return _=Hr(_,w.mode,E,null),_.return=w,_;Pa(w,_)}return null}function g(w,_,E,b){var L=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return L!==null?null:l(w,_,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _a:return E.key===L?u(w,_,E,b):null;case Ti:return E.key===L?c(w,_,E,b):null;case Wn:return L=E._init,g(w,_,L(E._payload),b)}if(Fs(E)||Cs(E))return L!==null?null:f(w,_,E,b,null);Pa(w,E)}return null}function R(w,_,E,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(E)||null,l(_,w,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _a:return w=w.get(b.key===null?E:b.key)||null,u(_,w,b,L);case Ti:return w=w.get(b.key===null?E:b.key)||null,c(_,w,b,L);case Wn:var j=b._init;return R(w,_,E,j(b._payload),L)}if(Fs(b)||Cs(b))return w=w.get(E)||null,f(_,w,b,L,null);Pa(_,b)}return null}function A(w,_,E,b){for(var L=null,j=null,T=_,v=_=0,I=null;T!==null&&v<E.length;v++){T.index>v?(I=T,T=null):I=T.sibling;var x=g(w,T,E[v],b);if(x===null){T===null&&(T=I);break}t&&T&&x.alternate===null&&e(w,T),_=s(x,_,v),j===null?L=x:j.sibling=x,j=x,T=I}if(v===E.length)return n(w,T),ye&&Vr(w,v),L;if(T===null){for(;v<E.length;v++)T=m(w,E[v],b),T!==null&&(_=s(T,_,v),j===null?L=T:j.sibling=T,j=T);return ye&&Vr(w,v),L}for(T=r(w,T);v<E.length;v++)I=R(T,w,v,E[v],b),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?v:I.key),_=s(I,_,v),j===null?L=I:j.sibling=I,j=I);return t&&T.forEach(function(C){return e(w,C)}),ye&&Vr(w,v),L}function P(w,_,E,b){var L=Cs(E);if(typeof L!="function")throw Error(F(150));if(E=L.call(E),E==null)throw Error(F(151));for(var j=L=null,T=_,v=_=0,I=null,x=E.next();T!==null&&!x.done;v++,x=E.next()){T.index>v?(I=T,T=null):I=T.sibling;var C=g(w,T,x.value,b);if(C===null){T===null&&(T=I);break}t&&T&&C.alternate===null&&e(w,T),_=s(C,_,v),j===null?L=C:j.sibling=C,j=C,T=I}if(x.done)return n(w,T),ye&&Vr(w,v),L;if(T===null){for(;!x.done;v++,x=E.next())x=m(w,x.value,b),x!==null&&(_=s(x,_,v),j===null?L=x:j.sibling=x,j=x);return ye&&Vr(w,v),L}for(T=r(w,T);!x.done;v++,x=E.next())x=R(T,w,v,x.value,b),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?v:x.key),_=s(x,_,v),j===null?L=x:j.sibling=x,j=x);return t&&T.forEach(function(k){return e(w,k)}),ye&&Vr(w,v),L}function D(w,_,E,b){if(typeof E=="object"&&E!==null&&E.type===Ii&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case _a:e:{for(var L=E.key,j=_;j!==null;){if(j.key===L){if(L=E.type,L===Ii){if(j.tag===7){n(w,j.sibling),_=i(j,E.props.children),_.return=w,w=_;break e}}else if(j.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Wn&&Km(L)===j.type){n(w,j.sibling),_=i(j,E.props),_.ref=Ds(w,j,E),_.return=w,w=_;break e}n(w,j);break}else e(w,j);j=j.sibling}E.type===Ii?(_=Hr(E.props.children,w.mode,b,E.key),_.return=w,w=_):(b=el(E.type,E.key,E.props,null,w.mode,b),b.ref=Ds(w,_,E),b.return=w,w=b)}return o(w);case Ti:e:{for(j=E.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(w,_.sibling),_=i(_,E.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=jc(E,w.mode,b),_.return=w,w=_}return o(w);case Wn:return j=E._init,D(w,_,j(E._payload),b)}if(Fs(E))return A(w,_,E,b);if(Cs(E))return P(w,_,E,b);Pa(w,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,E),_.return=w,w=_):(n(w,_),_=Mc(E,w.mode,b),_.return=w,w=_),o(w)):n(w,_)}return D}var Ki=E_(!0),T_=E_(!1),xl=Sr(null),Al=null,Ni=null,qd=null;function Gd(){qd=Ni=Al=null}function Kd(t){var e=xl.current;me(xl),t._currentValue=e}function Ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fi(t,e){Al=t,qd=Ni=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(qd!==t)if(t={context:t,memoizedValue:e,next:null},Ni===null){if(Al===null)throw Error(F(308));Ni=t,Al.dependencies={lanes:0,firstContext:t}}else Ni=Ni.next=t;return e}var Fr=null;function Qd(t){Fr===null?Fr=[t]:Fr.push(t)}function I_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function Xd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,Qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function Ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Od(t,n)}}function Qm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,R=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,P=l;switch(g=e,R=n,P.tag){case 1:if(A=P.payload,typeof A=="function"){m=A.call(R,m,g);break e}m=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=P.payload,g=typeof A=="function"?A.call(R,m,g):A,g==null)break e;m=Ie({},m,g);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else R={eventTime:R,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=R,u=m):f=f.next=R,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=m}}function Xm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Bo={},sn=Sr(Bo),So=Sr(Bo),xo=Sr(Bo);function Ur(t){if(t===Bo)throw Error(F(174));return t}function Yd(t,e){switch(he(xo,e),he(So,t),he(sn,Bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ch(e,t)}me(sn),he(sn,e)}function Qi(){me(sn),me(So),me(xo)}function x_(t){Ur(xo.current);var e=Ur(sn.current),n=ch(e,t.type);e!==n&&(he(So,t),he(sn,n))}function Jd(t){So.current===t&&(me(sn),me(So))}var we=Sr(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nc=[];function Zd(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Qa=jn.ReactCurrentDispatcher,bc=jn.ReactCurrentBatchConfig,Kr=0,Te=null,Ve=null,ze=null,kl=!1,eo=!1,Ao=0,GI=0;function Ze(){throw Error(F(321))}function ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function tf(t,e,n,r,i,s){if(Kr=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qa.current=t===null||t.memoizedState===null?YI:JI,t=n(r,i),eo){s=0;do{if(eo=!1,Ao=0,25<=s)throw Error(F(301));s+=1,ze=Ve=null,e.updateQueue=null,Qa.current=ZI,t=n(r,i)}while(eo)}if(Qa.current=Pl,e=Ve!==null&&Ve.next!==null,Kr=0,ze=Ve=Te=null,kl=!1,e)throw Error(F(300));return t}function nf(){var t=Ao!==0;return Ao=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Te.memoizedState=ze=t:ze=ze.next=t,ze}function Ut(){if(Ve===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=ze===null?Te.memoizedState:ze.next;if(e!==null)ze=e,Ve=t;else{if(t===null)throw Error(F(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},ze===null?Te.memoizedState=ze=t:ze=ze.next=t}return ze}function Ro(t,e){return typeof e=="function"?e(t):e}function Dc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Kr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Te.lanes|=f,Qr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Qt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,Qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qt(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function A_(){}function R_(t,e){var n=Te,r=Ut(),i=e(),s=!Qt(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,rf(P_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Co(9,k_.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(F(349));Kr&30||C_(n,e,i)}return i}function C_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k_(t,e,n,r){e.value=n,e.getSnapshot=r,N_(e)&&b_(t)}function P_(t,e,n){return n(function(){N_(e)&&b_(t)})}function N_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function b_(t){var e=bn(t,1);e!==null&&Kt(e,t,1,-1)}function Ym(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},e.queue=t,t=t.dispatch=XI.bind(null,Te,t),[e.memoizedState,t]}function Co(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function D_(){return Ut().memoizedState}function Xa(t,e,n,r){var i=en();Te.flags|=t,i.memoizedState=Co(1|e,n,void 0,r===void 0?null:r)}function hu(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&ef(r,o.deps)){i.memoizedState=Co(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Co(1|e,n,s,r)}function Jm(t,e){return Xa(8390656,8,t,e)}function rf(t,e){return hu(2048,8,t,e)}function V_(t,e){return hu(4,2,t,e)}function O_(t,e){return hu(4,4,t,e)}function L_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M_(t,e,n){return n=n!=null?n.concat([t]):null,hu(4,4,L_.bind(null,e,t),n)}function sf(){}function j_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function F_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function U_(t,e,n){return Kr&21?(Qt(n,e)||(n=Wv(),Te.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function KI(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=bc.transition;bc.transition={};try{t(!1),e()}finally{le=n,bc.transition=r}}function z_(){return Ut().memoizedState}function QI(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$_(t))B_(e,n);else if(n=I_(t,e,n,r),n!==null){var i=ct();Kt(n,t,r,i),H_(n,e,r)}}function XI(t,e,n){var r=lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($_(t))B_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Qt(l,o)){var u=e.interleaved;u===null?(i.next=i,Qd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=I_(t,e,i,r),n!==null&&(i=ct(),Kt(n,t,r,i),H_(n,e,r))}}function $_(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function B_(t,e){eo=kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function H_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Od(t,n)}}var Pl={readContext:Ft,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},YI={readContext:Ft,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:Jm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xa(4194308,4,L_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xa(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QI.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:Ym,useDebugValue:sf,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Ym(!1),e=t[0];return t=KI.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=en();if(ye){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),$e===null)throw Error(F(349));Kr&30||C_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Jm(P_.bind(null,r,s,t),[t]),r.flags|=2048,Co(9,k_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=$e.identifierPrefix;if(ye){var n=xn,r=Sn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JI={readContext:Ft,useCallback:j_,useContext:Ft,useEffect:rf,useImperativeHandle:M_,useInsertionEffect:V_,useLayoutEffect:O_,useMemo:F_,useReducer:Dc,useRef:D_,useState:function(){return Dc(Ro)},useDebugValue:sf,useDeferredValue:function(t){var e=Ut();return U_(e,Ve.memoizedState,t)},useTransition:function(){var t=Dc(Ro)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:R_,useId:z_,unstable_isNewReconciler:!1},ZI={readContext:Ft,useCallback:j_,useContext:Ft,useEffect:rf,useImperativeHandle:M_,useInsertionEffect:V_,useLayoutEffect:O_,useMemo:F_,useReducer:Vc,useRef:D_,useState:function(){return Vc(Ro)},useDebugValue:sf,useDeferredValue:function(t){var e=Ut();return Ve===null?e.memoizedState=t:U_(e,Ve.memoizedState,t)},useTransition:function(){var t=Vc(Ro)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:R_,useId:z_,unstable_isNewReconciler:!1};function Bt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=lr(t),s=Cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Kt(e,t,i,r),Ka(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=lr(t),s=Cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Kt(e,t,i,r),Ka(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=lr(t),i=Cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=or(t,i,r),e!==null&&(Kt(e,t,r,n),Ka(e,t,r))}};function Zm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wo(n,r)||!wo(i,s):!0}function W_(t,e,n){var r=!1,i=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=_t(e)?qr:st.current,r=e.contextTypes,s=(r=r!=null)?qi(t,i):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function eg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function bh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Xd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=_t(e)?qr:st.current,i.context=qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&du.enqueueReplaceState(i,i.state,null),Rl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xi(t,e){try{var n="",r=e;do n+=RT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Oc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eS=typeof WeakMap=="function"?WeakMap:Map;function q_(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bl||(bl=!0,Bh=r),Dh(t,e)},n}function G_(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dh(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pS.bind(null,t,e,n),e.then(t,t))}function ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var tS=jn.ReactCurrentOwner,yt=!1;function ut(t,e,n,r){e.child=t===null?T_(e,null,n,r):Ki(e,t.child,n,r)}function ig(t,e,n,r,i){n=n.render;var s=e.ref;return Fi(e,i),r=tf(t,e,n,r,s,i),n=nf(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(ye&&n&&Bd(e),e.flags|=1,ut(t,e,r,i),e.child)}function sg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,K_(t,e,s,r,i)):(t=el(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function K_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wo(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return Vh(t,e,n,r,i)}function Q_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Di,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Di,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Di,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(Di,St),St|=r;return ut(t,e,i,n),e.child}function X_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vh(t,e,n,r,i){var s=_t(n)?qr:st.current;return s=qi(e,s),Fi(e,i),n=tf(t,e,n,r,s,i),r=nf(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(ye&&r&&Bd(e),e.flags|=1,ut(t,e,n,i),e.child)}function og(t,e,n,r,i){if(_t(n)){var s=!0;Tl(e)}else s=!1;if(Fi(e,i),e.stateNode===null)Ya(t,e),W_(e,n,r),bh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ft(c):(c=_t(n)?qr:st.current,c=qi(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&eg(e,o,r,c),qn=!1;var g=e.memoizedState;o.state=g,Rl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||vt.current||qn?(typeof f=="function"&&(Nh(e,n,f,r),u=e.memoizedState),(l=qn||Zm(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,S_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Bt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=_t(n)?qr:st.current,u=qi(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&eg(e,o,r,u),qn=!1,g=e.memoizedState,o.state=g,Rl(e,r,o,i);var A=e.memoizedState;l!==m||g!==A||vt.current||qn?(typeof R=="function"&&(Nh(e,n,R,r),A=e.memoizedState),(c=qn||Zm(e,n,c,r,g,A,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Oh(t,e,n,r,s,i)}function Oh(t,e,n,r,i,s){X_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Wm(e,n,!1),Dn(t,e,s);r=e.stateNode,tS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ki(e,t.child,null,s),e.child=Ki(e,null,l,s)):ut(t,e,l,s),e.memoizedState=r.state,i&&Wm(e,n,!0),e.child}function Y_(t){var e=t.stateNode;e.pendingContext?Hm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hm(t,e.context,!1),Yd(t,e.containerInfo)}function ag(t,e,n,r,i){return Gi(),Wd(i),e.flags|=256,ut(t,e,n,r),e.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function Mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function J_(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(we,i&1),t===null)return kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mu(o,r,0,null),t=Hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mh(n),e.memoizedState=Lh,t):of(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ur(l,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lh,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function of(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Na(t,e,n,r){return r!==null&&Wd(r),Ki(e,t.child,null,n),t=of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Oc(Error(F(422))),Na(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mu({mode:"visible",children:r.children},i,0,null),s=Hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ki(e,t.child,null,o),e.child.memoizedState=Mh(o),e.memoizedState=Lh,s);if(!(e.mode&1))return Na(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Oc(s,r,void 0),Na(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),Kt(r,t,i,-1))}return df(),r=Oc(Error(F(421))),Na(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,xt=sr(i.nextSibling),Rt=e,ye=!0,Wt=null,t!==null&&(bt[Dt++]=Sn,bt[Dt++]=xn,bt[Dt++]=Gr,Sn=t.id,xn=t.overflow,Gr=e),e=of(e,r.children),e.flags|=4096,e)}function lg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ph(t.return,e,n)}function Lc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Z_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lg(t,n,e);else if(t.tag===19)lg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Lc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Lc(e,!0,n,null,s);break;case"together":Lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ya(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rS(t,e,n){switch(e.tag){case 3:Y_(e),Gi();break;case 5:x_(e);break;case 1:_t(e.type)&&Tl(e);break;case 4:Yd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(xl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?J_(t,e,n):(he(we,we.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);he(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Z_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,Q_(t,e,n)}return Dn(t,e,n)}var ew,jh,tw,nw;ew=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jh=function(){};tw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ur(sn.current);var s=null;switch(n){case"input":i=oh(t,i),r=oh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=uh(t,i),r=uh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wl)}hh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};nw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vs(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iS(t,e,n){var r=e.pendingProps;switch(Hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return _t(e.type)&&El(),et(e),null;case 3:return r=e.stateNode,Qi(),me(vt),me(st),Zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(qh(Wt),Wt=null))),jh(t,e),et(e),null;case 5:Jd(e);var i=Ur(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)tw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return et(e),null}if(t=Ur(sn.current),ka(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nn]=e,r[Io]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<zs.length;i++)fe(zs[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":ym(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":_m(r,s),fe("invalid",r)}hh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ca(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ca(r.textContent,l,t),i=["children",""+l]):fo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":wa(r),vm(r,s,!0);break;case"textarea":wa(r),wm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nn]=e,t[Io]=r,ew(t,e,!1,!1),e.stateNode=t;e:{switch(o=dh(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<zs.length;i++)fe(zs[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":ym(t,r),i=oh(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),fe("invalid",t);break;case"textarea":_m(t,r),i=uh(t,r),fe("invalid",t);break;default:i=r}hh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Dv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Nv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&po(t,u):typeof u=="number"&&po(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&kd(t,s,u,o))}switch(n){case"input":wa(t),vm(t,r,!1);break;case"textarea":wa(t),wm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)nw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Ur(xo.current),Ur(sn.current),ka(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:Ca(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return et(e),null;case 13:if(me(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&xt!==null&&e.mode&1&&!(e.flags&128))w_(),Gi(),e.flags|=98560,s=!1;else if(s=ka(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[nn]=e}else Gi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else Wt!==null&&(qh(Wt),Wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Le===0&&(Le=3):df())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return Qi(),jh(t,e),t===null&&Eo(e.stateNode.containerInfo),et(e),null;case 10:return Kd(e.type._context),et(e),null;case 17:return _t(e.type)&&El(),et(e),null;case 19:if(me(we),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cl(t),o!==null){for(e.flags|=128,Vs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>Yi&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Cl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return et(e),null}else 2*ke()-s.renderingStartTime>Yi&&n!==1073741824&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=we.current,he(we,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function sS(t,e){switch(Hd(e),e.tag){case 1:return _t(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),me(vt),me(st),Zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jd(e),null;case 13:if(me(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Gi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(we),null;case 4:return Qi(),null;case 10:return Kd(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var ba=!1,rt=!1,oS=typeof WeakSet=="function"?WeakSet:Set,B=null;function bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Fh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var ug=!1;function aS(t,e){if(Th=yl,t=a_(),$d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var R;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(R=m.firstChild)!==null;)g=m,m=R;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(R=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ih={focusedElem:t,selectionRange:n},yl=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var P=A.memoizedProps,D=A.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:Bt(e.type,P),D);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Ae(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return A=ug,ug=!1,A}function to(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fh(e,n,s)}i=i.next}while(i!==r)}}function fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function rw(t){var e=t.alternate;e!==null&&(t.alternate=null,rw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[Io],delete e[Ah],delete e[BI],delete e[HI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function iw(t){return t.tag===5||t.tag===3||t.tag===4}function cg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(r!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}function $h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($h(t,e,n),t=t.sibling;t!==null;)$h(t,e,n),t=t.sibling}var He=null,Ht=!1;function Bn(t,e,n){for(n=n.child;n!==null;)sw(t,e,n),n=n.sibling}function sw(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:rt||bi(n,e);case 6:var r=He,i=Ht;He=null,Bn(t,e,n),He=r,Ht=i,He!==null&&(Ht?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Ht?(t=He,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),vo(t)):kc(He,n.stateNode));break;case 4:r=He,i=Ht,He=n.stateNode.containerInfo,Ht=!0,Bn(t,e,n),He=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fh(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!rt&&(bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Bn(t,e,n),rt=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oS),e.forEach(function(r){var i=gS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,Ht=!1;break e;case 3:He=l.stateNode.containerInfo,Ht=!0;break e;case 4:He=l.stateNode.containerInfo,Ht=!0;break e}l=l.return}if(He===null)throw Error(F(160));sw(s,o,i),He=null,Ht=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ow(e,t),e=e.sibling}function ow(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),Zt(t),r&4){try{to(3,t,t.return),fu(3,t)}catch(P){Ae(t,t.return,P)}try{to(5,t,t.return)}catch(P){Ae(t,t.return,P)}}break;case 1:$t(e,t),Zt(t),r&512&&n!==null&&bi(n,n.return);break;case 5:if($t(e,t),Zt(t),r&512&&n!==null&&bi(n,n.return),t.flags&32){var i=t.stateNode;try{po(i,"")}catch(P){Ae(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Cv(i,s),dh(l,o);var c=dh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Dv(i,m):f==="dangerouslySetInnerHTML"?Nv(i,m):f==="children"?po(i,m):kd(i,f,m,c)}switch(l){case"input":ah(i,s);break;case"textarea":kv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?Oi(i,!!s.multiple,R,!1):g!==!!s.multiple&&(s.defaultValue!=null?Oi(i,!!s.multiple,s.defaultValue,!0):Oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Io]=s}catch(P){Ae(t,t.return,P)}}break;case 6:if($t(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ae(t,t.return,P)}}break;case 3:if($t(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(P){Ae(t,t.return,P)}break;case 4:$t(e,t),Zt(t);break;case 13:$t(e,t),Zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uf=ke())),r&4&&hg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(c=rt)||f,$t(e,t),rt=c):$t(e,t),Zt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(m=B=f;B!==null;){switch(g=B,R=g.child,g.tag){case 0:case 11:case 14:case 15:to(4,g,g.return);break;case 1:bi(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(P){Ae(r,n,P)}}break;case 5:bi(g,g.return);break;case 22:if(g.memoizedState!==null){fg(m);continue}}R!==null?(R.return=g,B=R):fg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=bv("display",o))}catch(P){Ae(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Ae(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:$t(e,t),Zt(t),r&4&&hg(t);break;case 21:break;default:$t(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(iw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(po(i,""),r.flags&=-33);var s=cg(t);$h(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=cg(t);zh(t,l,o);break;default:throw Error(F(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lS(t,e,n){B=t,aw(t)}function aw(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ba;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||rt;l=ba;var c=rt;if(ba=o,(rt=u)&&!c)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?pg(i):u!==null?(u.return=o,B=u):pg(i);for(;s!==null;)B=s,aw(s),s=s.sibling;B=i,ba=l,rt=c}dg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):dg(t)}}function dg(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||fu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&vo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}rt||e.flags&512&&Uh(e)}catch(g){Ae(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function fg(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function pg(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fu(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{Uh(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{Uh(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var uS=Math.ceil,Nl=jn.ReactCurrentDispatcher,af=jn.ReactCurrentOwner,Mt=jn.ReactCurrentBatchConfig,se=0,$e=null,Ne=null,Ge=0,St=0,Di=Sr(0),Le=0,ko=null,Qr=0,pu=0,lf=0,no=null,mt=null,uf=0,Yi=1/0,Tn=null,bl=!1,Bh=null,ar=null,Da=!1,er=null,Dl=0,ro=0,Hh=null,Ja=-1,Za=0;function ct(){return se&6?ke():Ja!==-1?Ja:Ja=ke()}function lr(t){return t.mode&1?se&2&&Ge!==0?Ge&-Ge:qI.transition!==null?(Za===0&&(Za=Wv()),Za):(t=le,t!==0||(t=window.event,t=t===void 0?16:Jv(t.type)),t):1}function Kt(t,e,n,r){if(50<ro)throw ro=0,Hh=null,Error(F(185));Uo(t,n,r),(!(se&2)||t!==$e)&&(t===$e&&(!(se&2)&&(pu|=n),Le===4&&Kn(t,Ge)),wt(t,r),n===1&&se===0&&!(e.mode&1)&&(Yi=ke()+500,cu&&xr()))}function wt(t,e){var n=t.callbackNode;qT(t,e);var r=gl(t,t===$e?Ge:0);if(r===0)n!==null&&Im(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Im(n),e===1)t.tag===0?WI(mg.bind(null,t)):y_(mg.bind(null,t)),zI(function(){!(se&6)&&xr()}),n=null;else{switch(qv(r)){case 1:n=Vd;break;case 4:n=Bv;break;case 16:n=ml;break;case 536870912:n=Hv;break;default:n=ml}n=mw(n,lw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lw(t,e){if(Ja=-1,Za=0,se&6)throw Error(F(327));var n=t.callbackNode;if(Ui()&&t.callbackNode!==n)return null;var r=gl(t,t===$e?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vl(t,r);else{e=r;var i=se;se|=2;var s=cw();($e!==t||Ge!==e)&&(Tn=null,Yi=ke()+500,Br(t,e));do try{dS();break}catch(l){uw(t,l)}while(!0);Gd(),Nl.current=s,se=i,Ne!==null?e=0:($e=null,Ge=0,e=Le)}if(e!==0){if(e===2&&(i=yh(t),i!==0&&(r=i,e=Wh(t,i))),e===1)throw n=ko,Br(t,0),Kn(t,r),wt(t,ke()),n;if(e===6)Kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!cS(i)&&(e=Vl(t,r),e===2&&(s=yh(t),s!==0&&(r=s,e=Wh(t,s))),e===1))throw n=ko,Br(t,0),Kn(t,r),wt(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Or(t,mt,Tn);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=uf+500-ke(),10<e)){if(gl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xh(Or.bind(null,t,mt,Tn),e);break}Or(t,mt,Tn);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uS(r/1960))-r,10<r){t.timeoutHandle=xh(Or.bind(null,t,mt,Tn),r);break}Or(t,mt,Tn);break;case 5:Or(t,mt,Tn);break;default:throw Error(F(329))}}}return wt(t,ke()),t.callbackNode===n?lw.bind(null,t):null}function Wh(t,e){var n=no;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=mt,mt=n,e!==null&&qh(e)),t}function qh(t){mt===null?mt=t:mt.push.apply(mt,t)}function cS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~lf,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function mg(t){if(se&6)throw Error(F(327));Ui();var e=gl(t,0);if(!(e&1))return wt(t,ke()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var r=yh(t);r!==0&&(e=r,n=Wh(t,r))}if(n===1)throw n=ko,Br(t,0),Kn(t,e),wt(t,ke()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,mt,Tn),wt(t,ke()),null}function cf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Yi=ke()+500,cu&&xr())}}function Xr(t){er!==null&&er.tag===0&&!(se&6)&&Ui();var e=se;se|=1;var n=Mt.transition,r=le;try{if(Mt.transition=null,le=1,t)return t()}finally{le=r,Mt.transition=n,se=e,!(se&6)&&xr()}}function hf(){St=Di.current,me(Di)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UI(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Hd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&El();break;case 3:Qi(),me(vt),me(st),Zd();break;case 5:Jd(r);break;case 4:Qi();break;case 13:me(we);break;case 19:me(we);break;case 10:Kd(r.type._context);break;case 22:case 23:hf()}n=n.return}if($e=t,Ne=t=ur(t.current,null),Ge=St=e,Le=0,ko=null,lf=pu=Qr=0,mt=no=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fr=null}return t}function uw(t,e){do{var n=Ne;try{if(Gd(),Qa.current=Pl,kl){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kl=!1}if(Kr=0,ze=Ve=Te=null,eo=!1,Ao=0,af.current=null,n===null||n.return===null){Le=1,ko=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=ng(o);if(R!==null){R.flags&=-257,rg(R,o,l,s,e),R.mode&1&&tg(s,c,e),e=R,u=c;var A=e.updateQueue;if(A===null){var P=new Set;P.add(u),e.updateQueue=P}else A.add(u);break e}else{if(!(e&1)){tg(s,c,e),df();break e}u=Error(F(426))}}else if(ye&&l.mode&1){var D=ng(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),rg(D,o,l,s,e),Wd(Xi(u,l));break e}}s=u=Xi(u,l),Le!==4&&(Le=2),no===null?no=[s]:no.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=q_(s,u,e);Qm(s,w);break e;case 1:l=u;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(ar===null||!ar.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=G_(s,l,e);Qm(s,b);break e}}s=s.return}while(s!==null)}dw(n)}catch(L){e=L,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function cw(){var t=Nl.current;return Nl.current=Pl,t===null?Pl:t}function df(){(Le===0||Le===3||Le===2)&&(Le=4),$e===null||!(Qr&268435455)&&!(pu&268435455)||Kn($e,Ge)}function Vl(t,e){var n=se;se|=2;var r=cw();($e!==t||Ge!==e)&&(Tn=null,Br(t,e));do try{hS();break}catch(i){uw(t,i)}while(!0);if(Gd(),se=n,Nl.current=r,Ne!==null)throw Error(F(261));return $e=null,Ge=0,Le}function hS(){for(;Ne!==null;)hw(Ne)}function dS(){for(;Ne!==null&&!MT();)hw(Ne)}function hw(t){var e=pw(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?dw(t):Ne=e,af.current=null}function dw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sS(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ne=null;return}}else if(n=iS(n,e,St),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Le===0&&(Le=5)}function Or(t,e,n){var r=le,i=Mt.transition;try{Mt.transition=null,le=1,fS(t,e,n,r)}finally{Mt.transition=i,le=r}return null}function fS(t,e,n,r){do Ui();while(er!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(GT(t,s),t===$e&&(Ne=$e=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Da||(Da=!0,mw(ml,function(){return Ui(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=le;le=1;var l=se;se|=4,af.current=null,aS(t,n),ow(n,t),DI(Ih),yl=!!Th,Ih=Th=null,t.current=n,lS(n),jT(),se=l,le=o,Mt.transition=s}else t.current=n;if(Da&&(Da=!1,er=t,Dl=i),s=t.pendingLanes,s===0&&(ar=null),zT(n.stateNode),wt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bl)throw bl=!1,t=Bh,Bh=null,t;return Dl&1&&t.tag!==0&&Ui(),s=t.pendingLanes,s&1?t===Hh?ro++:(ro=0,Hh=t):ro=0,xr(),null}function Ui(){if(er!==null){var t=qv(Dl),e=Mt.transition,n=le;try{if(Mt.transition=null,le=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,Dl=0,se&6)throw Error(F(331));var i=se;for(se|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(B=c;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:to(8,f,s)}var m=f.child;if(m!==null)m.return=f,B=m;else for(;B!==null;){f=B;var g=f.sibling,R=f.return;if(rw(f),f===c){B=null;break}if(g!==null){g.return=R,B=g;break}B=R}}}var A=s.alternate;if(A!==null){var P=A.child;if(P!==null){A.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,B=w;break e}B=s.return}}var _=t.current;for(B=_;B!==null;){o=B;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,B=E;else e:for(o=_;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fu(9,l)}}catch(L){Ae(l,l.return,L)}if(l===o){B=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,B=b;break e}B=l.return}}if(se=i,xr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(su,t)}catch{}r=!0}return r}finally{le=n,Mt.transition=e}}return!1}function gg(t,e,n){e=Xi(n,e),e=q_(t,e,1),t=or(t,e,1),e=ct(),t!==null&&(Uo(t,1,e),wt(t,e))}function Ae(t,e,n){if(t.tag===3)gg(t,t,n);else for(;e!==null;){if(e.tag===3){gg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=Xi(n,t),t=G_(e,t,1),e=or(e,t,1),t=ct(),e!==null&&(Uo(e,1,t),wt(e,t));break}}e=e.return}}function pS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ge&n)===n&&(Le===4||Le===3&&(Ge&130023424)===Ge&&500>ke()-uf?Br(t,0):lf|=n),wt(t,e)}function fw(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=ct();t=bn(t,e),t!==null&&(Uo(t,e,n),wt(t,n))}function mS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fw(t,n)}function gS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),fw(t,n)}var pw;pw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,rS(t,e,n);yt=!!(t.flags&131072)}else yt=!1,ye&&e.flags&1048576&&v_(e,Sl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ya(t,e),t=e.pendingProps;var i=qi(e,st.current);Fi(e,n),i=tf(null,e,r,t,i,n);var s=nf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(s=!0,Tl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xd(e),i.updater=du,e.stateNode=i,i._reactInternals=e,bh(e,r,t,n),e=Oh(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Bd(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ya(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vS(r),t=Bt(r,t),i){case 0:e=Vh(null,e,r,t,n);break e;case 1:e=og(null,e,r,t,n);break e;case 11:e=ig(null,e,r,t,n);break e;case 14:e=sg(null,e,r,Bt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Vh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),og(t,e,r,i,n);case 3:e:{if(Y_(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,S_(t,e),Rl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xi(Error(F(423)),e),e=ag(t,e,r,n,i);break e}else if(r!==i){i=Xi(Error(F(424)),e),e=ag(t,e,r,n,i);break e}else for(xt=sr(e.stateNode.containerInfo.firstChild),Rt=e,ye=!0,Wt=null,n=T_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gi(),r===i){e=Dn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return x_(e),t===null&&kh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sh(r,i)?o=null:s!==null&&Sh(r,s)&&(e.flags|=32),X_(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&kh(e),null;case 13:return J_(t,e,n);case 4:return Yd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ki(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),ig(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(xl,r._currentValue),r._currentValue=o,s!==null)if(Qt(s.value,o)){if(s.children===i.children&&!vt.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Cn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ph(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fi(e,n),i=Ft(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),sg(t,e,r,i,n);case 15:return K_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Ya(t,e),e.tag=1,_t(r)?(t=!0,Tl(e)):t=!1,Fi(e,n),W_(e,r,i),bh(e,r,i,n),Oh(null,e,r,!0,t,n);case 19:return Z_(t,e,n);case 22:return Q_(t,e,n)}throw Error(F(156,e.tag))};function mw(t,e){return $v(t,e)}function yS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new yS(t,e,n,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vS(t){if(typeof t=="function")return ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nd)return 11;if(t===bd)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ii:return Hr(n.children,i,s,e);case Pd:o=8,i|=8;break;case nh:return t=Lt(12,n,e,i|2),t.elementType=nh,t.lanes=s,t;case rh:return t=Lt(13,n,e,i),t.elementType=rh,t.lanes=s,t;case ih:return t=Lt(19,n,e,i),t.elementType=ih,t.lanes=s,t;case xv:return mu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Iv:o=10;break e;case Sv:o=9;break e;case Nd:o=11;break e;case bd:o=14;break e;case Wn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hr(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function mu(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=xv,t.lanes=n,t.stateNode={isHidden:!1},t}function Mc(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _S(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pf(t,e,n,r,i,s,o,l,u){return t=new _S(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xd(s),t}function wS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function gw(t){if(!t)return mr;t=t._reactInternals;e:{if(si(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(_t(n))return g_(t,n,e)}return e}function yw(t,e,n,r,i,s,o,l,u){return t=pf(n,r,!0,t,i,s,o,l,u),t.context=gw(null),n=t.current,r=ct(),i=lr(n),s=Cn(r,i),s.callback=e??null,or(n,s,i),t.current.lanes=i,Uo(t,i,r),wt(t,r),t}function gu(t,e,n,r){var i=e.current,s=ct(),o=lr(i);return n=gw(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(i,e,o),t!==null&&(Kt(t,i,o,s),Ka(t,i,o)),o}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mf(t,e){yg(t,e),(t=t.alternate)&&yg(t,e)}function ES(){return null}var vw=typeof reportError=="function"?reportError:function(t){console.error(t)};function gf(t){this._internalRoot=t}yu.prototype.render=gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));gu(t,e,null,null)};yu.prototype.unmount=gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){gu(null,t,null,null)}),e[Nn]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&Yv(t)}};function yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vg(){}function TS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ol(o);s.call(c)}}var o=yw(e,r,t,0,null,!1,!1,"",vg);return t._reactRootContainer=o,t[Nn]=o.current,Eo(t.nodeType===8?t.parentNode:t),Xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ol(u);l.call(c)}}var u=pf(t,0,!1,null,null,!1,!1,"",vg);return t._reactRootContainer=u,t[Nn]=u.current,Eo(t.nodeType===8?t.parentNode:t),Xr(function(){gu(e,u,n,r)}),u}function _u(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ol(o);l.call(u)}}gu(e,o,t,i)}else o=TS(n,e,t,i,r);return Ol(o)}Gv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Us(e.pendingLanes);n!==0&&(Od(e,n|1),wt(e,ke()),!(se&6)&&(Yi=ke()+500,xr()))}break;case 13:Xr(function(){var r=bn(t,1);if(r!==null){var i=ct();Kt(r,t,1,i)}}),mf(t,1)}};Ld=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=ct();Kt(e,t,134217728,n)}mf(t,134217728)}};Kv=function(t){if(t.tag===13){var e=lr(t),n=bn(t,e);if(n!==null){var r=ct();Kt(n,t,e,r)}mf(t,e)}};Qv=function(){return le};Xv=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};ph=function(t,e,n){switch(e){case"input":if(ah(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uu(r);if(!i)throw Error(F(90));Rv(r),ah(r,i)}}}break;case"textarea":kv(t,n);break;case"select":e=n.value,e!=null&&Oi(t,!!n.multiple,e,!1)}};Lv=cf;Mv=Xr;var IS={usingClientEntryPoint:!1,Events:[$o,Ri,uu,Vv,Ov,cf]},Os={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SS={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Uv(t),t===null?null:t.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||ES,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{su=Va.inject(SS),rn=Va}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IS;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(e))throw Error(F(200));return wS(t,e,null,n)};Pt.createRoot=function(t,e){if(!yf(t))throw Error(F(299));var n=!1,r="",i=vw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pf(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,Eo(t.nodeType===8?t.parentNode:t),new gf(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Uv(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return Xr(t)};Pt.hydrate=function(t,e,n){if(!vu(e))throw Error(F(200));return _u(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!yf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=vw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yw(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,Eo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yu(e)};Pt.render=function(t,e,n){if(!vu(e))throw Error(F(200));return _u(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!vu(t))throw Error(F(40));return t._reactRootContainer?(Xr(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Pt.unstable_batchedUpdates=cf;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return _u(t,e,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function _w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_w)}catch(t){console.error(t)}}_w(),_v.exports=Pt;var xS=_v.exports,ww,_g=xS;ww=_g.createRoot,_g.hydrateRoot;/**
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
 */const AS=()=>{};var wg={};/**
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
 */const Ew=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,R=c&63;u||(R=64,o||(g=64)),r.push(n[f],n[m],n[g],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ew(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new CS;const g=s<<2|l>>4;if(r.push(g),c!==64){const R=l<<4&240|c>>2;if(r.push(R),m!==64){const A=c<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kS=function(t){const e=Ew(t);return Tw.encodeByteArray(e,!0)},Ll=function(t){return kS(t).replace(/\./g,"")},Iw=function(t){try{return Tw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function PS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const NS=()=>PS().__FIREBASE_DEFAULTS__,bS=()=>{if(typeof process>"u"||typeof wg>"u")return;const t=wg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Iw(t[1]);return e&&JSON.parse(e)},wu=()=>{try{return AS()||NS()||bS()||DS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sw=t=>{var e,n;return(n=(e=wu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},VS=t=>{const e=Sw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xw=()=>{var t;return(t=wu())==null?void 0:t.config},Aw=t=>{var e;return(e=wu())==null?void 0:e[`_${t}`]};/**
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
 */class OS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ls(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rw(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function LS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ll(JSON.stringify(n)),Ll(JSON.stringify(o)),""].join(".")}const io={};function MS(){const t={prod:[],emulator:[]};for(const e of Object.keys(io))io[e]?t.emulator.push(e):t.prod.push(e);return t}function jS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Eg=!1;function Cw(t,e){if(typeof window>"u"||typeof document>"u"||!ls(window.location.host)||io[t]===e||io[t]||Eg)return;io[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=MS().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,R){g.setAttribute("width","24"),g.setAttribute("id",R),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Eg=!0,o()},g}function f(g,R){g.setAttribute("id",R),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=jS(r),R=n("text"),A=document.getElementById(R)||document.createElement("span"),P=n("learnmore"),D=document.getElementById(P)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const E=g.element;l(E),f(D,P);const b=c();u(_,w),E.append(_,A,D,b),document.body.appendChild(E)}s?(A.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function US(){var e;const t=(e=wu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $S(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BS(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function HS(){return!US()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pw(){try{return typeof indexedDB=="object"}catch{return!1}}function Nw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function WS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const qS="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qS,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?GS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,l,r)}}function GS(t,e){return t.replace(KS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KS=/\{\$([^}]+)}/g;function QS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tg(s)&&Tg(o)){if(!gr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tg(t){return t!==null&&typeof t=="object"}/**
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
 */function Ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function XS(t,e){const n=new YS(t,e);return n.subscribe.bind(n)}class YS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fc),i.error===void 0&&(i.error=Fc),i.complete===void 0&&(i.complete=Fc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fc(){}/**
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
 */const ZS=1e3,ex=2,tx=4*60*60*1e3,nx=.5;function Ig(t,e=ZS,n=ex){const r=e*Math.pow(n,t),i=Math.round(nx*r*(Math.random()-.5)*2);return Math.min(tx,r+i)}/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lr="[DEFAULT]";/**
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
 */class rx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new OS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sx(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ix(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ix(t){return t===Lr?void 0:t}function sx(t){return t.instantiationMode==="EAGER"}/**
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
 */class ox{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const ax={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},lx=ee.INFO,ux={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},cx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ux[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eu{constructor(e){this.name=e,this._logLevel=lx,this._logHandler=cx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ax[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const hx=(t,e)=>e.some(n=>t instanceof n);let Sg,xg;function dx(){return Sg||(Sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fx(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bw=new WeakMap,Gh=new WeakMap,Dw=new WeakMap,Uc=new WeakMap,vf=new WeakMap;function px(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bw.set(n,t)}).catch(()=>{}),vf.set(e,t),e}function mx(t){if(Gh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gh.set(t,e)}let Kh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gx(t){Kh=t(Kh)}function yx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zc(this),e,...n);return Dw.set(r,e.sort?e.sort():[e]),cr(r)}:fx().includes(t)?function(...e){return t.apply(zc(this),e),cr(bw.get(this))}:function(...e){return cr(t.apply(zc(this),e))}}function vx(t){return typeof t=="function"?yx(t):(t instanceof IDBTransaction&&mx(t),hx(t,dx())?new Proxy(t,Kh):t)}function cr(t){if(t instanceof IDBRequest)return px(t);if(Uc.has(t))return Uc.get(t);const e=vx(t);return e!==t&&(Uc.set(t,e),vf.set(e,t)),e}const zc=t=>vf.get(t);function Vw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(cr(o.result),u.oldVersion,u.newVersion,cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const _x=["get","getKey","getAll","getAllKeys","count"],wx=["put","add","delete","clear"],$c=new Map;function Ag(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_x.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return $c.set(e,s),s}gx(t=>({...t,get:(e,n,r)=>Ag(e,n)||t.get(e,n,r),has:(e,n)=>!!Ag(e,n)||t.has(e,n)}));/**
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
 */class Ex{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qh="@firebase/app",Rg="0.14.2";/**
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
 */const Vn=new Eu("@firebase/app"),Ix="@firebase/app-compat",Sx="@firebase/analytics-compat",xx="@firebase/analytics",Ax="@firebase/app-check-compat",Rx="@firebase/app-check",Cx="@firebase/auth",kx="@firebase/auth-compat",Px="@firebase/database",Nx="@firebase/data-connect",bx="@firebase/database-compat",Dx="@firebase/functions",Vx="@firebase/functions-compat",Ox="@firebase/installations",Lx="@firebase/installations-compat",Mx="@firebase/messaging",jx="@firebase/messaging-compat",Fx="@firebase/performance",Ux="@firebase/performance-compat",zx="@firebase/remote-config",$x="@firebase/remote-config-compat",Bx="@firebase/storage",Hx="@firebase/storage-compat",Wx="@firebase/firestore",qx="@firebase/ai",Gx="@firebase/firestore-compat",Kx="firebase",Qx="12.2.0";/**
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
 */const Xh="[DEFAULT]",Xx={[Qh]:"fire-core",[Ix]:"fire-core-compat",[xx]:"fire-analytics",[Sx]:"fire-analytics-compat",[Rx]:"fire-app-check",[Ax]:"fire-app-check-compat",[Cx]:"fire-auth",[kx]:"fire-auth-compat",[Px]:"fire-rtdb",[Nx]:"fire-data-connect",[bx]:"fire-rtdb-compat",[Dx]:"fire-fn",[Vx]:"fire-fn-compat",[Ox]:"fire-iid",[Lx]:"fire-iid-compat",[Mx]:"fire-fcm",[jx]:"fire-fcm-compat",[Fx]:"fire-perf",[Ux]:"fire-perf-compat",[zx]:"fire-rc",[$x]:"fire-rc-compat",[Bx]:"fire-gcs",[Hx]:"fire-gcs-compat",[Wx]:"fire-fst",[Gx]:"fire-fst-compat",[qx]:"fire-vertex","fire-js":"fire-js",[Kx]:"fire-js-all"};/**
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
 */const Ml=new Map,Yx=new Map,Yh=new Map;function Cg(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(Yh.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Yh.set(e,t);for(const n of Ml.values())Cg(n,t);for(const n of Yx.values())Cg(n,t);return!0}function ai(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Jx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new oi("app","Firebase",Jx);/**
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
 */class Zx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const us=Qx;function Ow(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Xh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=xw()),!n)throw hr.create("no-options");const s=Ml.get(i);if(s){if(gr(n,s.options)&&gr(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new ox(i);for(const u of Yh.values())o.addComponent(u);const l=new Zx(n,r,o);return Ml.set(i,l),l}function _f(t=Xh){const e=Ml.get(t);if(!e&&t===Xh&&xw())return Ow();if(!e)throw hr.create("no-app",{appName:t});return e}function jt(t,e,n){let r=Xx[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(o.join(" "));return}fn(new Xt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const eA="firebase-heartbeat-database",tA=1,Po="firebase-heartbeat-store";let Bc=null;function Lw(){return Bc||(Bc=Vw(eA,tA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Po)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),Bc}async function nA(t){try{const n=(await Lw()).transaction(Po),r=await n.objectStore(Po).get(Mw(t));return await n.done,r}catch(e){if(e instanceof Jt)Vn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function kg(t,e){try{const r=(await Lw()).transaction(Po,"readwrite");await r.objectStore(Po).put(e,Mw(t)),await r.done}catch(n){if(n instanceof Jt)Vn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function Mw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rA=1024,iA=30;class sA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>iA){const o=lA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pg(),{heartbeatsToSend:r,unsentEntries:i}=oA(this._heartbeatsCache.heartbeats),s=Ll(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vn.warn(n),""}}}function Pg(){return new Date().toISOString().substring(0,10)}function oA(t,e=rA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ng(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pw()?Nw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return kg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return kg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ng(t){return Ll(JSON.stringify({version:2,heartbeats:t})).length}function lA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function uA(t){fn(new Xt("platform-logger",e=>new Ex(e),"PRIVATE")),fn(new Xt("heartbeat",e=>new sA(e),"PRIVATE")),jt(Qh,Rg,t),jt(Qh,Rg,"esm2020"),jt("fire-js","")}uA("");function jw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cA=jw,Fw=new oi("auth","Firebase",jw());/**
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
 */const jl=new Eu("@firebase/auth");function hA(t,...e){jl.logLevel<=ee.WARN&&jl.warn(`Auth (${us}): ${t}`,...e)}function tl(t,...e){jl.logLevel<=ee.ERROR&&jl.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw wf(t,...e)}function on(t,...e){return wf(t,...e)}function Uw(t,e,n){const r={...cA(),[e]:n};return new oi("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return Uw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fw.create(t,...e)}function G(t,e,...n){if(!t)throw wf(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tl(e),new Error(e)}function On(t,e){t||An(e)}/**
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
 */function Jh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function dA(){return bg()==="http:"||bg()==="https:"}function bg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function fA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dA()||kw()||"connection"in navigator)?navigator.onLine:!0}function pA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=FS()||$S()}get(){return fA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ef(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yA=new Wo(3e4,6e4);function Ar(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Fn(t,e,n,r,i={}){return $w(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ho({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return zS()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ls(t.emulatorConfig.host)&&(c.credentials="include"),zw.fetch()(await Bw(t,t.config.apiHost,n,l),c)})}async function $w(t,e,n){t._canInitEmulator=!1;const r={...mA,...e};try{const i=new _A(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Oa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Oa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Oa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Uw(t,f,c);Yt(t,f)}}catch(i){if(i instanceof Jt)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function qo(t,e,n,r,i={}){const s=await Fn(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Bw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ef(t.config,i):`${t.config.apiScheme}://${i}`;return gA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function vA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _A{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),yA.get())})}}function Oa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}function Dg(t){return t!==void 0&&t.enterprise!==void 0}class wA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function EA(t,e){return Fn(t,"GET","/v2/recaptchaConfig",Ar(t,e))}/**
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
 */async function TA(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function Fl(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function so(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IA(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),i=Tf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:so(Hc(i.auth_time)),issuedAtTime:so(Hc(i.iat)),expirationTime:so(Hc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hc(t){return Number(t)*1e3}function Tf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Iw(n);return i?JSON.parse(i):(tl("Failed to decode base64 JWT payload"),null)}catch(i){return tl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vg(t){const e=Tf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&SA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ul(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Ji(t,Fl(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Hw(i.providerUserInfo):[],o=RA(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Zh(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function AA(t){const e=Fe(t);await Ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Hw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function CA(t,e){const n=await $w(t,{},async()=>{const r=Ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Bw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ls(t.emulatorConfig.host)&&(u.credentials="include"),zw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kA(t,e){return Fn(t,"POST","/v2/accounts:revokeToken",Ar(t,e))}/**
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
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Vg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await CA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function Hn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new xA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ji(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IA(this,e)}reload(){return AA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ul(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await Ji(this,TA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:R,providerData:A,stsTokenManager:P}=n;G(m&&P,e,"internal-error");const D=zi.fromJSON(this.name,P);G(typeof m=="string",e,"internal-error"),Hn(r,e.name),Hn(i,e.name),G(typeof g=="boolean",e,"internal-error"),G(typeof R=="boolean",e,"internal-error"),Hn(s,e.name),Hn(o,e.name),Hn(l,e.name),Hn(u,e.name),Hn(c,e.name),Hn(f,e.name);const w=new qt({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:R,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:f});return A&&Array.isArray(A)&&(w.providerData=A.map(_=>({..._}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new zi;i.updateFromServerResponse(n);const s=new qt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ul(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Hw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new zi;l.updateFromIdToken(r);const u=new qt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Zh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Og=new Map;function Rn(t){On(t instanceof Function,"Expected a class definition");let e=Og.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Og.set(t,e),e)}/**
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
 */class Ww{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ww.type="NONE";const Lg=Ww;/**
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
 */function nl(t,e,n){return`firebase:${t}:${e}:${n}`}class $i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=nl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fl(this.auth,{idToken:e}).catch(()=>{});return n?qt._fromGetAccountInfoResponse(this.auth,n,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $i(Rn(Lg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Rn(Lg);const o=nl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await Fl(e,{idToken:f}).catch(()=>{});if(!g)break;m=await qt._fromGetAccountInfoResponse(e,g,f)}else m=qt._fromJSON(e,f);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new $i(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new $i(s,e,r))}}/**
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
 */function Mg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yw(e))return"Blackberry";if(Jw(e))return"Webos";if(Gw(e))return"Safari";if((e.includes("chrome/")||Kw(e))&&!e.includes("edge/"))return"Chrome";if(Xw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qw(t=ot()){return/firefox\//i.test(t)}function Gw(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kw(t=ot()){return/crios\//i.test(t)}function Qw(t=ot()){return/iemobile/i.test(t)}function Xw(t=ot()){return/android/i.test(t)}function Yw(t=ot()){return/blackberry/i.test(t)}function Jw(t=ot()){return/webos/i.test(t)}function If(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PA(t=ot()){var e;return If(t)&&!!((e=window.navigator)!=null&&e.standalone)}function NA(){return BS()&&document.documentMode===10}function Zw(t=ot()){return If(t)||Xw(t)||Jw(t)||Yw(t)||/windows phone/i.test(t)||Qw(t)}/**
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
 */function e0(t,e=[]){let n;switch(t){case"Browser":n=Mg(ot());break;case"Worker":n=`${Mg(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class bA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function DA(t,e={}){return Fn(t,"GET","/v2/passwordPolicy",Ar(t,e))}/**
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
 */const VA=6;class OA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??VA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class LA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jg(this),this.idTokenSubscription=new jg(this),this.beforeStateQueue=new bA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await $i.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fl(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(kn(this));const n=e?Fe(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DA(this),n=new OA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await $i.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&hA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function li(t){return Fe(t)}class jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=XS(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Tu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MA(t){Tu=t}function t0(t){return Tu.loadJS(t)}function jA(){return Tu.recaptchaEnterpriseScript}function FA(){return Tu.gapiScript}function UA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class zA{constructor(){this.enterprise=new $A}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $A{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const BA="recaptcha-enterprise",n0="NO_RECAPTCHA";class HA{constructor(e){this.type=BA,this.auth=li(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{EA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new wA(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Dg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(n0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Dg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=jA();u.length!==0&&(u+=l),t0(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Fg(t,e,n,r=!1,i=!1){const s=new HA(t);let o;if(i)o=n0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ed(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Fg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Fg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function WA(t,e){const n=ai(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(gr(s,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function qA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GA(t,e,n){const r=li(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=r0(e),{host:o,port:l}=KA(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(gr(c,r.config.emulator)&&gr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ls(o)?(Rw(`${s}//${o}${u}`),Cw("Auth",!0)):QA()}function r0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KA(t){const e=r0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ug(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ug(o)}}}function Ug(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Sf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function XA(t,e){return Fn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function YA(t,e){return qo(t,"POST","/v1/accounts:signInWithPassword",Ar(t,e))}/**
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
 */async function JA(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}async function ZA(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}/**
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
 */class No extends Sf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new No(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new No(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ed(e,n,"signInWithPassword",YA);case"emailLink":return JA(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ed(e,r,"signUpPassword",XA);case"emailLink":return ZA(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Bi(t,e){return qo(t,"POST","/v1/accounts:signInWithIdp",Ar(t,e))}/**
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
 */const eR="http://localhost";class Yr extends Sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bi(e,n)}buildRequest(){const e={requestUri:eR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ho(n)}return e}}/**
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
 */function tR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nR(t){const e=$s(Bs(t)).link,n=e?$s(Bs(e)).deep_link_id:null,r=$s(Bs(t)).deep_link_id;return(r?$s(Bs(r)).link:null)||r||n||e||t}class xf{constructor(e){const n=$s(Bs(e)),r=n.apiKey??null,i=n.oobCode??null,s=tR(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=nR(e);try{return new xf(n)}catch{return null}}}/**
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
 */class cs{constructor(){this.providerId=cs.PROVIDER_ID}static credential(e,n){return No._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xf.parseLink(n);return G(r,"argument-error"),No._fromEmailAndCode(e,r.code,r.tenantId)}}cs.PROVIDER_ID="password";cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class i0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Go extends i0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qn extends Go{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Yn extends Go{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Jn extends Go{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */async function rR(t,e){return qo(t,"POST","/v1/accounts:signUp",Ar(t,e))}/**
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
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qt._fromIdTokenResponse(e,r,i),o=zg(r);return new Jr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=zg(r);return new Jr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function zg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class zl extends Jt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zl(e,n,r,i)}}function s0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zl._fromErrorAndOperation(t,s,e,r):s})}async function iR(t,e,n=!1){const r=await Ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jr._forOperation(t,"link",r)}/**
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
 */async function sR(t,e,n=!1){const{auth:r}=t;if(Vt(r.app))return Promise.reject(kn(r));const i="reauthenticate";try{const s=await Ji(t,s0(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Tf(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Jr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
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
 */async function o0(t,e,n=!1){if(Vt(t.app))return Promise.reject(kn(t));const r="signIn",i=await s0(t,r,e),s=await Jr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function oR(t,e){return o0(li(t),e)}/**
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
 */async function a0(t){const e=li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aR(t,e,n){if(Vt(t.app))return Promise.reject(kn(t));const r=li(t),o=await ed(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&a0(t),u}),l=await Jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function lR(t,e,n){return Vt(t.app)?Promise.reject(kn(t)):oR(Fe(t),cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&a0(t),r})}/**
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
 */async function uR(t,e){return Fn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function cR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Fe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ji(r,uR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function hR(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function dR(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function fR(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function pR(t){return Fe(t).signOut()}const $l="__sak";/**
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
 */class l0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($l,"1"),this.storage.removeItem($l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mR=1e3,gR=10;class u0 extends l0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}u0.type="LOCAL";const yR=u0;/**
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
 */class c0 extends l0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}c0.type="SESSION";const h0=c0;/**
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
 */function vR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await vR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Iu.receivers=[];/**
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
 */function Af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _R{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Af("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function an(){return window}function wR(t){an().location.href=t}/**
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
 */function d0(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function ER(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function IR(){return d0()?self:null}/**
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
 */const f0="firebaseLocalStorageDb",SR=1,Bl="firebaseLocalStorage",p0="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Su(t,e){return t.transaction([Bl],e?"readwrite":"readonly").objectStore(Bl)}function xR(){const t=indexedDB.deleteDatabase(f0);return new Ko(t).toPromise()}function td(){const t=indexedDB.open(f0,SR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bl,{keyPath:p0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bl)?e(r):(r.close(),await xR(),e(await td()))})})}async function $g(t,e,n){const r=Su(t,!0).put({[p0]:e,value:n});return new Ko(r).toPromise()}async function AR(t,e){const n=Su(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function Bg(t,e){const n=Su(t,!0).delete(e);return new Ko(n).toPromise()}const RR=800,CR=3;class m0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await td(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Iu._getInstance(IR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await ER(),!this.activeServiceWorker)return;this.sender=new _R(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await td();return await $g(e,$l,"1"),await Bg(e,$l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$g(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Su(i,!1).getAll();return new Ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m0.type="LOCAL";const kR=m0;new Wo(3e4,6e4);/**
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
 */function PR(t,e){return e?Rn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rf extends Sf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NR(t){return o0(t.auth,new Rf(t),t.bypassAuthState)}function bR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),sR(n,new Rf(t),t.bypassAuthState)}async function DR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),iR(n,new Rf(t),t.bypassAuthState)}/**
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
 */class g0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NR;case"linkViaPopup":case"linkViaRedirect":return DR;case"reauthViaPopup":case"reauthViaRedirect":return bR;default:Yt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VR=new Wo(2e3,1e4);class Vi extends g0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VR.get())};e()}}Vi.currentPopupAction=null;/**
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
 */const OR="pendingRedirect",rl=new Map;class LR extends g0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rl.get(this.auth._key());if(!e){try{const r=await MR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rl.set(this.auth._key(),e)}return this.bypassAuthState||rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MR(t,e){const n=UR(e),r=FR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jR(t,e){rl.set(t._key(),e)}function FR(t){return Rn(t._redirectPersistence)}function UR(t){return nl(OR,t.config.apiKey,t.name)}async function zR(t,e,n=!1){if(Vt(t.app))return Promise.reject(kn(t));const r=li(t),i=PR(r,e),o=await new LR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $R=10*60*1e3;class BR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!y0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$R&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hg(e))}saveEventToCache(e){this.cachedEventUids.add(Hg(e)),this.lastProcessedEventTime=Date.now()}}function Hg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y0(t);default:return!1}}/**
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
 */async function WR(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
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
 */const qR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GR=/^https?/;async function KR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WR(t);for(const n of e)try{if(QR(n))return}catch{}Yt(t,"unauthorized-domain")}function QR(t){const e=Jh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GR.test(n))return!1;if(qR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const XR=new Wo(3e4,6e4);function Wg(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YR(t){return new Promise((e,n)=>{var i,s,o;function r(){Wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wg(),n(on(t,"network-request-failed"))},timeout:XR.get()})}if((s=(i=an().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=an().gapi)!=null&&o.load)r();else{const l=UA("iframefcb");return an()[l]=()=>{gapi.load?r():n(on(t,"network-request-failed"))},t0(`${FA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw il=null,e})}let il=null;function JR(t){return il=il||YR(t),il}/**
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
 */const ZR=new Wo(5e3,15e3),eC="__/auth/iframe",tC="emulator/auth/iframe",nC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iC(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ef(e,tC):`https://${t.config.authDomain}/${eC}`,r={apiKey:e.apiKey,appName:t.name,v:us},i=rC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ho(r).slice(1)}`}async function sC(t){const e=await JR(t),n=an().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:iC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=an().setTimeout(()=>{s(o)},ZR.get());function u(){an().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const oC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aC=500,lC=600,uC="_blank",cC="http://localhost";class qg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hC(t,e,n,r=aC,i=lC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...oC,width:r.toString(),height:i.toString(),top:s,left:o},c=ot().toLowerCase();n&&(l=Kw(c)?uC:n),qw(c)&&(e=e||cC,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[R,A])=>`${g}${R}=${A},`,"");if(PA(c)&&l!=="_self")return dC(e||"",l),new qg(null);const m=window.open(e||"",l,f);G(m,t,"popup-blocked");try{m.focus()}catch{}return new qg(m)}function dC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const fC="__/auth/handler",pC="emulator/auth/handler",mC=encodeURIComponent("fac");async function Gg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:i};if(e instanceof i0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",QS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Go){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${mC}=${encodeURIComponent(u)}`:"";return`${gC(t)}?${Ho(l).slice(1)}${c}`}function gC({config:t}){return t.emulator?Ef(t,pC):`https://${t.authDomain}/${fC}`}/**
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
 */const Wc="webStorageSupport";class yC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h0,this._completeRedirectFn=zR,this._overrideRedirectResult=jR}async _openPopup(e,n,r,i){var o;On((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Gg(e,n,r,Jh(),i);return hC(e,s,Af())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Gg(e,n,r,Jh(),i);return wR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(On(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sC(e),r=new BR(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wc,{type:Wc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Wc];s!==void 0&&n(!!s),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zw()||Gw()||If()}}const vC=yC;var Kg="@firebase/auth",Qg="1.11.0";/**
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
 */class _C{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EC(t){fn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e0(t)},c=new LA(r,i,s,u);return qA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fn(new Xt("auth-internal",e=>{const n=li(e.getProvider("auth").getImmediate());return(r=>new _C(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Kg,Qg,wC(t)),jt(Kg,Qg,"esm2020")}/**
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
 */const TC=5*60,IC=Aw("authIdTokenMaxAge")||TC;let Xg=null;const SC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IC)return;const i=n==null?void 0:n.token;Xg!==i&&(Xg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xC(t=_f()){const e=ai(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WA(t,{popupRedirectResolver:vC,persistence:[kR,yR,h0]}),r=Aw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=SC(s.toString());dR(n,o,()=>o(n.currentUser)),hR(n,l=>o(l))}}const i=Sw("auth");return i&&GA(n,`http://${i}`),n}function AC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}MA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",AC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EC("Browser");var Yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,v0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function I(){}I.prototype=v.prototype,T.D=v.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(x,C,k){for(var S=Array(arguments.length-2),De=2;De<arguments.length;De++)S[De-2]=arguments[De];return v.prototype[C].apply(x,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,I){I||(I=0);var x=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)x[C]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(C=0;16>C;++C)x[C]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=T.g[0],I=T.g[1],C=T.g[2];var k=T.g[3],S=v+(k^I&(C^k))+x[0]+3614090360&4294967295;v=I+(S<<7&4294967295|S>>>25),S=k+(C^v&(I^C))+x[1]+3905402710&4294967295,k=v+(S<<12&4294967295|S>>>20),S=C+(I^k&(v^I))+x[2]+606105819&4294967295,C=k+(S<<17&4294967295|S>>>15),S=I+(v^C&(k^v))+x[3]+3250441966&4294967295,I=C+(S<<22&4294967295|S>>>10),S=v+(k^I&(C^k))+x[4]+4118548399&4294967295,v=I+(S<<7&4294967295|S>>>25),S=k+(C^v&(I^C))+x[5]+1200080426&4294967295,k=v+(S<<12&4294967295|S>>>20),S=C+(I^k&(v^I))+x[6]+2821735955&4294967295,C=k+(S<<17&4294967295|S>>>15),S=I+(v^C&(k^v))+x[7]+4249261313&4294967295,I=C+(S<<22&4294967295|S>>>10),S=v+(k^I&(C^k))+x[8]+1770035416&4294967295,v=I+(S<<7&4294967295|S>>>25),S=k+(C^v&(I^C))+x[9]+2336552879&4294967295,k=v+(S<<12&4294967295|S>>>20),S=C+(I^k&(v^I))+x[10]+4294925233&4294967295,C=k+(S<<17&4294967295|S>>>15),S=I+(v^C&(k^v))+x[11]+2304563134&4294967295,I=C+(S<<22&4294967295|S>>>10),S=v+(k^I&(C^k))+x[12]+1804603682&4294967295,v=I+(S<<7&4294967295|S>>>25),S=k+(C^v&(I^C))+x[13]+4254626195&4294967295,k=v+(S<<12&4294967295|S>>>20),S=C+(I^k&(v^I))+x[14]+2792965006&4294967295,C=k+(S<<17&4294967295|S>>>15),S=I+(v^C&(k^v))+x[15]+1236535329&4294967295,I=C+(S<<22&4294967295|S>>>10),S=v+(C^k&(I^C))+x[1]+4129170786&4294967295,v=I+(S<<5&4294967295|S>>>27),S=k+(I^C&(v^I))+x[6]+3225465664&4294967295,k=v+(S<<9&4294967295|S>>>23),S=C+(v^I&(k^v))+x[11]+643717713&4294967295,C=k+(S<<14&4294967295|S>>>18),S=I+(k^v&(C^k))+x[0]+3921069994&4294967295,I=C+(S<<20&4294967295|S>>>12),S=v+(C^k&(I^C))+x[5]+3593408605&4294967295,v=I+(S<<5&4294967295|S>>>27),S=k+(I^C&(v^I))+x[10]+38016083&4294967295,k=v+(S<<9&4294967295|S>>>23),S=C+(v^I&(k^v))+x[15]+3634488961&4294967295,C=k+(S<<14&4294967295|S>>>18),S=I+(k^v&(C^k))+x[4]+3889429448&4294967295,I=C+(S<<20&4294967295|S>>>12),S=v+(C^k&(I^C))+x[9]+568446438&4294967295,v=I+(S<<5&4294967295|S>>>27),S=k+(I^C&(v^I))+x[14]+3275163606&4294967295,k=v+(S<<9&4294967295|S>>>23),S=C+(v^I&(k^v))+x[3]+4107603335&4294967295,C=k+(S<<14&4294967295|S>>>18),S=I+(k^v&(C^k))+x[8]+1163531501&4294967295,I=C+(S<<20&4294967295|S>>>12),S=v+(C^k&(I^C))+x[13]+2850285829&4294967295,v=I+(S<<5&4294967295|S>>>27),S=k+(I^C&(v^I))+x[2]+4243563512&4294967295,k=v+(S<<9&4294967295|S>>>23),S=C+(v^I&(k^v))+x[7]+1735328473&4294967295,C=k+(S<<14&4294967295|S>>>18),S=I+(k^v&(C^k))+x[12]+2368359562&4294967295,I=C+(S<<20&4294967295|S>>>12),S=v+(I^C^k)+x[5]+4294588738&4294967295,v=I+(S<<4&4294967295|S>>>28),S=k+(v^I^C)+x[8]+2272392833&4294967295,k=v+(S<<11&4294967295|S>>>21),S=C+(k^v^I)+x[11]+1839030562&4294967295,C=k+(S<<16&4294967295|S>>>16),S=I+(C^k^v)+x[14]+4259657740&4294967295,I=C+(S<<23&4294967295|S>>>9),S=v+(I^C^k)+x[1]+2763975236&4294967295,v=I+(S<<4&4294967295|S>>>28),S=k+(v^I^C)+x[4]+1272893353&4294967295,k=v+(S<<11&4294967295|S>>>21),S=C+(k^v^I)+x[7]+4139469664&4294967295,C=k+(S<<16&4294967295|S>>>16),S=I+(C^k^v)+x[10]+3200236656&4294967295,I=C+(S<<23&4294967295|S>>>9),S=v+(I^C^k)+x[13]+681279174&4294967295,v=I+(S<<4&4294967295|S>>>28),S=k+(v^I^C)+x[0]+3936430074&4294967295,k=v+(S<<11&4294967295|S>>>21),S=C+(k^v^I)+x[3]+3572445317&4294967295,C=k+(S<<16&4294967295|S>>>16),S=I+(C^k^v)+x[6]+76029189&4294967295,I=C+(S<<23&4294967295|S>>>9),S=v+(I^C^k)+x[9]+3654602809&4294967295,v=I+(S<<4&4294967295|S>>>28),S=k+(v^I^C)+x[12]+3873151461&4294967295,k=v+(S<<11&4294967295|S>>>21),S=C+(k^v^I)+x[15]+530742520&4294967295,C=k+(S<<16&4294967295|S>>>16),S=I+(C^k^v)+x[2]+3299628645&4294967295,I=C+(S<<23&4294967295|S>>>9),S=v+(C^(I|~k))+x[0]+4096336452&4294967295,v=I+(S<<6&4294967295|S>>>26),S=k+(I^(v|~C))+x[7]+1126891415&4294967295,k=v+(S<<10&4294967295|S>>>22),S=C+(v^(k|~I))+x[14]+2878612391&4294967295,C=k+(S<<15&4294967295|S>>>17),S=I+(k^(C|~v))+x[5]+4237533241&4294967295,I=C+(S<<21&4294967295|S>>>11),S=v+(C^(I|~k))+x[12]+1700485571&4294967295,v=I+(S<<6&4294967295|S>>>26),S=k+(I^(v|~C))+x[3]+2399980690&4294967295,k=v+(S<<10&4294967295|S>>>22),S=C+(v^(k|~I))+x[10]+4293915773&4294967295,C=k+(S<<15&4294967295|S>>>17),S=I+(k^(C|~v))+x[1]+2240044497&4294967295,I=C+(S<<21&4294967295|S>>>11),S=v+(C^(I|~k))+x[8]+1873313359&4294967295,v=I+(S<<6&4294967295|S>>>26),S=k+(I^(v|~C))+x[15]+4264355552&4294967295,k=v+(S<<10&4294967295|S>>>22),S=C+(v^(k|~I))+x[6]+2734768916&4294967295,C=k+(S<<15&4294967295|S>>>17),S=I+(k^(C|~v))+x[13]+1309151649&4294967295,I=C+(S<<21&4294967295|S>>>11),S=v+(C^(I|~k))+x[4]+4149444226&4294967295,v=I+(S<<6&4294967295|S>>>26),S=k+(I^(v|~C))+x[11]+3174756917&4294967295,k=v+(S<<10&4294967295|S>>>22),S=C+(v^(k|~I))+x[2]+718787259&4294967295,C=k+(S<<15&4294967295|S>>>17),S=I+(k^(C|~v))+x[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+k&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var I=v-this.blockSize,x=this.B,C=this.h,k=0;k<v;){if(C==0)for(;k<=I;)i(this,T,k),k+=this.blockSize;if(typeof T=="string"){for(;k<v;)if(x[C++]=T.charCodeAt(k++),C==this.blockSize){i(this,x),C=0;break}}else for(;k<v;)if(x[C++]=T[k++],C==this.blockSize){i(this,x),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var I=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=I&255,I/=256;for(this.u(T),T=Array(16),v=I=0;4>v;++v)for(var x=0;32>x;x+=8)T[I++]=this.g[v]>>>x&255;return T};function s(T,v){var I=l;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=v(T)}function o(T,v){this.h=v;for(var I=[],x=!0,C=T.length-1;0<=C;C--){var k=T[C]|0;x&&k==v||(I[C]=k,x=!1)}this.g=I}var l={};function u(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return D(c(-T));for(var v=[],I=1,x=0;T>=I;x++)v[x]=T/I|0,I*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return D(f(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(v,8)),x=m,C=0;C<T.length;C+=8){var k=Math.min(8,T.length-C),S=parseInt(T.substring(C,C+k),v);8>k?(k=c(Math.pow(v,k)),x=x.j(k).add(c(S))):(x=x.j(I),x=x.add(c(S)))}return x}var m=u(0),g=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();for(var T=0,v=1,I=0;I<this.g.length;I++){var x=this.i(I);T+=(0<=x?x:4294967296+x)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(P(this))return"-"+D(this).toString(T);for(var v=c(Math.pow(T,6)),I=this,x="";;){var C=b(I,v).g;I=w(I,C.j(v));var k=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=C,A(I))return k+x;for(;6>k.length;)k="0"+k;x=k+x}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=w(this,T),P(T)?-1:A(T)?0:1};function D(T){for(var v=T.g.length,I=[],x=0;x<v;x++)I[x]=~T.g[x];return new o(I,~T.h).add(g)}t.abs=function(){return P(this)?D(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],x=0,C=0;C<=v;C++){var k=x+(this.i(C)&65535)+(T.i(C)&65535),S=(k>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);x=S>>>16,k&=65535,S&=65535,I[C]=S<<16|k}return new o(I,I[I.length-1]&-2147483648?-1:0)};function w(T,v){return T.add(D(v))}t.j=function(T){if(A(this)||A(T))return m;if(P(this))return P(T)?D(this).j(D(T)):D(D(this).j(T));if(P(T))return D(this.j(D(T)));if(0>this.l(R)&&0>T.l(R))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,I=[],x=0;x<2*v;x++)I[x]=0;for(x=0;x<this.g.length;x++)for(var C=0;C<T.g.length;C++){var k=this.i(x)>>>16,S=this.i(x)&65535,De=T.i(C)>>>16,ft=T.i(C)&65535;I[2*x+2*C]+=S*ft,_(I,2*x+2*C),I[2*x+2*C+1]+=k*ft,_(I,2*x+2*C+1),I[2*x+2*C+1]+=S*De,_(I,2*x+2*C+1),I[2*x+2*C+2]+=k*De,_(I,2*x+2*C+2)}for(x=0;x<v;x++)I[x]=I[2*x+1]<<16|I[2*x];for(x=v;x<2*v;x++)I[x]=0;return new o(I,0)};function _(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function E(T,v){this.g=T,this.h=v}function b(T,v){if(A(v))throw Error("division by zero");if(A(T))return new E(m,m);if(P(T))return v=b(D(T),v),new E(D(v.g),D(v.h));if(P(v))return v=b(T,D(v)),new E(D(v.g),v.h);if(30<T.g.length){if(P(T)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var I=g,x=v;0>=x.l(T);)I=L(I),x=L(x);var C=j(I,1),k=j(x,1);for(x=j(x,2),I=j(I,2);!A(x);){var S=k.add(x);0>=S.l(T)&&(C=C.add(I),k=S),x=j(x,1),I=j(I,1)}return v=w(T,C.j(v)),new E(C,v)}for(C=m;0<=T.l(v);){for(I=Math.max(1,Math.floor(T.m()/v.m())),x=Math.ceil(Math.log(I)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),k=c(I),S=k.j(v);P(S)||0<S.l(T);)I-=x,k=c(I),S=k.j(v);A(k)&&(k=g),C=C.add(k),T=w(T,S)}return new E(C,T)}t.A=function(T){return b(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],x=0;x<v;x++)I[x]=this.i(x)&T.i(x);return new o(I,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],x=0;x<v;x++)I[x]=this.i(x)|T.i(x);return new o(I,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],x=0;x<v;x++)I[x]=this.i(x)^T.i(x);return new o(I,this.h^T.h)};function L(T){for(var v=T.g.length+1,I=[],x=0;x<v;x++)I[x]=T.i(x)<<1|T.i(x-1)>>>31;return new o(I,T.h)}function j(T,v){var I=v>>5;v%=32;for(var x=T.g.length-I,C=[],k=0;k<x;k++)C[k]=0<v?T.i(k+I)>>>v|T.i(k+I+1)<<32-v:T.i(k+I);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,v0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,dr=o}).apply(typeof Yg<"u"?Yg:typeof self<"u"?self:typeof window<"u"?window:{});var La=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _0,Hs,w0,sl,nd,E0,T0,I0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof La=="object"&&La];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in d))break e;d=d[N]}a=a[a.length-1],y=d[a],h=h(y),h!=y&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,y=!1,N={next:function(){if(!y&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function m(a,h,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function R(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function A(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,N,V){for(var U=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)U[ce-2]=arguments[ce];return h.prototype[N].apply(y,U)}}function P(a){const h=a.length;if(0<h){const d=Array(h);for(let y=0;y<h;y++)d[y]=a[y];return d}return[]}function D(a,h){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const N=a.length||0,V=y.length||0;a.length=N+V;for(let U=0;U<V;U++)a[N+U]=y[U]}else a.push(y)}}class w{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var L=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function j(a,h,d){for(const y in a)h.call(d,a[y],y,a)}function T(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,h){let d,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(d in y)a[d]=y[d];for(let V=0;V<I.length;V++)d=I[V],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function C(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function S(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class De{constructor(){this.h=this.g=null}add(h,d){const y=ft.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var ft=new w(()=>new Tt,a=>a.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,z=!1,Q=new De,J=()=>{const a=l.Promise.resolve(void 0);ve=()=>{a.then(_e)}};var _e=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){k(d)}var h=ft;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var gn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function yn(a,h){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{b(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}A(yn,Re);var vn={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _n="closure_listenable_"+(1e6*Math.random()|0),TE=0;function IE(a,h,d,y,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=N,this.key=++TE,this.da=this.fa=!1}function ea(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ta(a){this.src=a,this.g={},this.h=0}ta.prototype.add=function(a,h,d,y,N){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var U=Wu(a,h,y,N);return-1<U?(h=a[U],d||(h.fa=!1)):(h=new IE(h,this.src,V,!!y,N),h.fa=d,a.push(h)),h};function Hu(a,h){var d=h.type;if(d in a.g){var y=a.g[d],N=Array.prototype.indexOf.call(y,h,void 0),V;(V=0<=N)&&Array.prototype.splice.call(y,N,1),V&&(ea(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Wu(a,h,d,y){for(var N=0;N<a.length;++N){var V=a[N];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==y)return N}return-1}var qu="closure_lm_"+(1e6*Math.random()|0),Gu={};function dp(a,h,d,y,N){if(Array.isArray(h)){for(var V=0;V<h.length;V++)dp(a,h[V],d,y,N);return null}return d=mp(d),a&&a[_n]?a.K(h,d,c(y)?!!y.capture:!!y,N):SE(a,h,d,!1,y,N)}function SE(a,h,d,y,N,V){if(!h)throw Error("Invalid event type");var U=c(N)?!!N.capture:!!N,ce=Qu(a);if(ce||(a[qu]=ce=new ta(a)),d=ce.add(h,d,y,U,V),d.proxy)return d;if(y=xE(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)gn||(N=U),N===void 0&&(N=!1),a.addEventListener(h.toString(),y,N);else if(a.attachEvent)a.attachEvent(pp(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function xE(){function a(d){return h.call(a.src,a.listener,d)}const h=AE;return a}function fp(a,h,d,y,N){if(Array.isArray(h))for(var V=0;V<h.length;V++)fp(a,h[V],d,y,N);else y=c(y)?!!y.capture:!!y,d=mp(d),a&&a[_n]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=Wu(V,d,y,N),-1<d&&(ea(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Qu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Wu(h,d,y,N)),(d=-1<a?h[a]:null)&&Ku(d))}function Ku(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[_n])Hu(h.i,a);else{var d=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(d,y,a.capture):h.detachEvent?h.detachEvent(pp(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=Qu(h))?(Hu(d,a),d.h==0&&(d.src=null,h[qu]=null)):ea(a)}}}function pp(a){return a in Gu?Gu[a]:Gu[a]="on"+a}function AE(a,h){if(a.da)a=!0;else{h=new yn(h,this);var d=a.listener,y=a.ha||a.src;a.fa&&Ku(a),a=d.call(y,h)}return a}function Qu(a){return a=a[qu],a instanceof ta?a:null}var Xu="__closure_events_fn_"+(1e9*Math.random()>>>0);function mp(a){return typeof a=="function"?a:(a[Xu]||(a[Xu]=function(h){return a.handleEvent(h)}),a[Xu])}function Xe(){ue.call(this),this.i=new ta(this),this.M=this,this.F=null}A(Xe,ue),Xe.prototype[_n]=!0,Xe.prototype.removeEventListener=function(a,h,d,y){fp(this,a,h,d,y)};function at(a,h){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new Re(h,a);else if(h instanceof Re)h.target=h.target||a;else{var N=h;h=new Re(y,a),x(h,N)}if(N=!0,d)for(var V=d.length-1;0<=V;V--){var U=h.g=d[V];N=na(U,y,!0,h)&&N}if(U=h.g=a,N=na(U,y,!0,h)&&N,N=na(U,y,!1,h)&&N,d)for(V=0;V<d.length;V++)U=h.g=d[V],N=na(U,y,!1,h)&&N}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],y=0;y<d.length;y++)ea(d[y]);delete a.g[h],a.h--}}this.F=null},Xe.prototype.K=function(a,h,d,y){return this.i.add(String(a),h,!1,d,y)},Xe.prototype.L=function(a,h,d,y){return this.i.add(String(a),h,!0,d,y)};function na(a,h,d,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,V=0;V<h.length;++V){var U=h[V];if(U&&!U.da&&U.capture==d){var ce=U.listener,Be=U.ha||U.src;U.fa&&Hu(a.i,U),N=ce.call(Be,y)!==!1&&N}}return N&&!y.defaultPrevented}function gp(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function yp(a){a.g=gp(()=>{a.g=null,a.i&&(a.i=!1,yp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class RE extends ue{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:yp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ms(a){ue.call(this),this.h=a,this.g={}}A(ms,ue);var vp=[];function _p(a){j(a.g,function(h,d){this.g.hasOwnProperty(d)&&Ku(h)},a),a.g={}}ms.prototype.N=function(){ms.aa.N.call(this),_p(this)},ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yu=l.JSON.stringify,CE=l.JSON.parse,kE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ju(){}Ju.prototype.h=null;function wp(a){return a.h||(a.h=a.i())}function Ep(){}var gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zu(){Re.call(this,"d")}A(Zu,Re);function ec(){Re.call(this,"c")}A(ec,Re);var Pr={},Tp=null;function ra(){return Tp=Tp||new Xe}Pr.La="serverreachability";function Ip(a){Re.call(this,Pr.La,a)}A(Ip,Re);function ys(a){const h=ra();at(h,new Ip(h))}Pr.STAT_EVENT="statevent";function Sp(a,h){Re.call(this,Pr.STAT_EVENT,a),this.stat=h}A(Sp,Re);function lt(a){const h=ra();at(h,new Sp(h,a))}Pr.Ma="timingevent";function xp(a,h){Re.call(this,Pr.Ma,a),this.size=h}A(xp,Re);function vs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function _s(){this.g=!0}_s.prototype.xa=function(){this.g=!1};function PE(a,h,d,y,N,V){a.info(function(){if(a.g)if(V)for(var U="",ce=V.split("&"),Be=0;Be<ce.length;Be++){var oe=ce[Be].split("=");if(1<oe.length){var Ye=oe[0];oe=oe[1];var Je=Ye.split("_");U=2<=Je.length&&Je[1]=="type"?U+(Ye+"="+oe+"&"):U+(Ye+"=redacted&")}}else U=null;else U=V;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+d+`
`+U})}function NE(a,h,d,y,N,V,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+d+`
`+V+" "+U})}function di(a,h,d,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+DE(a,d)+(y?" "+y:"")})}function bE(a,h){a.info(function(){return"TIMEOUT: "+h})}_s.prototype.info=function(){};function DE(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var V=N[0];if(V!="noop"&&V!="stop"&&V!="close")for(var U=1;U<N.length;U++)N[U]=""}}}}return Yu(d)}catch{return h}}var ia={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ap={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tc;function sa(){}A(sa,Ju),sa.prototype.g=function(){return new XMLHttpRequest},sa.prototype.i=function(){return{}},tc=new sa;function Un(a,h,d,y){this.j=a,this.i=h,this.l=d,this.R=y||1,this.U=new ms(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rp}function Rp(){this.i=null,this.g="",this.h=!1}var Cp={},nc={};function rc(a,h,d){a.L=1,a.v=ua(wn(h)),a.m=d,a.P=!0,kp(a,null)}function kp(a,h){a.F=Date.now(),oa(a),a.A=wn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Bp(d.i,"t",y),a.C=0,d=a.j.J,a.h=new Rp,a.g=am(a.j,d?h:null,!a.m),0<a.O&&(a.M=new RE(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,y=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(vp[0]=N.toString()),N=vp);for(var V=0;V<N.length;V++){var U=dp(d,N[V],y||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ys(),PE(a.i,a.u,a.A,a.l,a.R,a.m)}Un.prototype.ca=function(a){a=a.target;const h=this.M;h&&En(a)==3?h.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const Je=En(this.g);var h=this.g.Ba();const mi=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||Xp(this.g)))){this.J||Je!=4||h==7||(h==8||0>=mi?ys(3):ys(2)),ic(this);var d=this.g.Z();this.X=d;t:if(Pp(this)){var y=Xp(this.g);a="";var N=y.length,V=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nr(this),ws(this);var U="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(V&&h==N-1)});y.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,NE(this.i,this.u,this.A,this.l,this.R,Je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Be=this.g;if((ce=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ce)){var oe=ce;break t}}oe=null}if(d=oe)di(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sc(this,d);else{this.o=!1,this.s=3,lt(12),Nr(this),ws(this);break e}}if(this.P){d=!0;let zt;for(;!this.J&&this.C<U.length;)if(zt=VE(this,U),zt==nc){Je==4&&(this.s=4,lt(14),d=!1),di(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Cp){this.s=4,lt(15),di(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else di(this.i,this.l,zt,null),sc(this,zt);if(Pp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||U.length!=0||this.h.h||(this.s=1,lt(16),d=!1),this.o=this.o&&d,!d)di(this.i,this.l,U,"[Invalid Chunked Response]"),Nr(this),ws(this);else if(0<U.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),hc(Ye),Ye.M=!0,lt(11))}}else di(this.i,this.l,U,null),sc(this,U);Je==4&&Nr(this),this.o&&!this.J&&(Je==4?rm(this.j,this):(this.o=!1,oa(this)))}else YE(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Nr(this),ws(this)}}}catch{}finally{}};function Pp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function VE(a,h){var d=a.C,y=h.indexOf(`
`,d);return y==-1?nc:(d=Number(h.substring(d,y)),isNaN(d)?Cp:(y+=1,y+d>h.length?nc:(h=h.slice(y,y+d),a.C=y+d,h)))}Un.prototype.cancel=function(){this.J=!0,Nr(this)};function oa(a){a.S=Date.now()+a.I,Np(a,a.I)}function Np(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vs(g(a.ba,a),h)}function ic(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(bE(this.i,this.A),this.L!=2&&(ys(),lt(17)),Nr(this),this.s=2,ws(this)):Np(this,this.S-a)};function ws(a){a.j.G==0||a.J||rm(a.j,a)}function Nr(a){ic(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,_p(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function sc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||oc(d.h,a))){if(!a.K&&oc(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ma(d),fa(d);else break e;cc(d),lt(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=vs(g(d.Za,d),6e3));if(1>=Vp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Dr(d,11)}else if((a.K||d.g==a)&&ma(d),!_(h))for(N=d.Da.g.parse(h),h=0;h<N.length;h++){let oe=N[h];if(d.T=oe[0],oe=oe[1],d.G==2)if(oe[0]=="c"){d.K=oe[1],d.ia=oe[2];const Ye=oe[3];Ye!=null&&(d.la=Ye,d.j.info("VER="+d.la));const Je=oe[4];Je!=null&&(d.Aa=Je,d.j.info("SVER="+d.Aa));const mi=oe[5];mi!=null&&typeof mi=="number"&&0<mi&&(y=1.5*mi,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const zt=a.g;if(zt){const ya=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ya){var V=y.h;V.g||ya.indexOf("spdy")==-1&&ya.indexOf("quic")==-1&&ya.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ac(V,V.h),V.h=null))}if(y.D){const dc=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(y.ya=dc,de(y.I,y.D,dc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var U=a;if(y.qa=om(y,y.J?y.ia:null,y.W),U.K){Op(y.h,U);var ce=U,Be=y.L;Be&&(ce.I=Be),ce.B&&(ic(ce),oa(ce)),y.g=U}else tm(y);0<d.i.length&&pa(d)}else oe[0]!="stop"&&oe[0]!="close"||Dr(d,7);else d.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Dr(d,7):uc(d):oe[0]!="noop"&&d.l&&d.l.ta(oe),d.v=0)}}ys(4)}catch{}}var OE=class{constructor(a,h){this.g=a,this.map=h}};function bp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vp(a){return a.h?1:a.g?a.g.size:0}function oc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ac(a,h){a.g?a.g.add(h):a.h=h}function Op(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}bp.prototype.cancel=function(){if(this.i=Lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return P(a.i)}function LE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,y=0;y<d;y++)h.push(a[y]);return h}h=[],d=0;for(y in a)h[d++]=a[y];return h}function ME(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const y in a)h[d++]=y;return h}}}function Mp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=ME(a),y=LE(a),N=y.length,V=0;V<N;V++)h.call(void 0,y[V],d&&d[V],a)}var jp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),N=null;if(0<=y){var V=a[d].substring(0,y);N=a[d].substring(y+1)}else V=a[d];h(V,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof br){this.h=a.h,aa(this,a.j),this.o=a.o,this.g=a.g,la(this,a.s),this.l=a.l;var h=a.i,d=new Is;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Fp(this,d),this.m=a.m}else a&&(h=String(a).match(jp))?(this.h=!1,aa(this,h[1]||"",!0),this.o=Es(h[2]||""),this.g=Es(h[3]||"",!0),la(this,h[4]),this.l=Es(h[5]||"",!0),Fp(this,h[6]||"",!0),this.m=Es(h[7]||"")):(this.h=!1,this.i=new Is(null,this.h))}br.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ts(h,Up,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ts(h,Up,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ts(d,d.charAt(0)=="/"?zE:UE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ts(d,BE)),a.join("")};function wn(a){return new br(a)}function aa(a,h,d){a.j=d?Es(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function la(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Fp(a,h,d){h instanceof Is?(a.i=h,HE(a.i,a.h)):(d||(h=Ts(h,$E)),a.i=new Is(h,a.h))}function de(a,h,d){a.i.set(h,d)}function ua(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Es(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ts(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,FE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function FE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Up=/[#\/\?@]/g,UE=/[#\?:]/g,zE=/[#\?]/g,$E=/[#\?@]/g,BE=/#/g;function Is(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function zn(a){a.g||(a.g=new Map,a.h=0,a.i&&jE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Is.prototype,t.add=function(a,h){zn(this),this.i=null,a=fi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function zp(a,h){zn(a),h=fi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function $p(a,h){return zn(a),h=fi(a,h),a.g.has(h)}t.forEach=function(a,h){zn(this),this.g.forEach(function(d,y){d.forEach(function(N){a.call(h,N,y,this)},this)},this)},t.na=function(){zn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let y=0;y<h.length;y++){const N=a[y];for(let V=0;V<N.length;V++)d.push(h[y])}return d},t.V=function(a){zn(this);let h=[];if(typeof a=="string")$p(this,a)&&(h=h.concat(this.g.get(fi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return zn(this),this.i=null,a=fi(this,a),$p(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Bp(a,h,d){zp(a,h),0<d.length&&(a.i=null,a.g.set(fi(a,h),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var y=h[d];const V=encodeURIComponent(String(y)),U=this.V(y);for(y=0;y<U.length;y++){var N=V;U[y]!==""&&(N+="="+encodeURIComponent(String(U[y]))),a.push(N)}}return this.i=a.join("&")};function fi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function HE(a,h){h&&!a.j&&(zn(a),a.i=null,a.g.forEach(function(d,y){var N=y.toLowerCase();y!=N&&(zp(this,y),Bp(this,N,d))},a)),a.j=h}function WE(a,h){const d=new _s;if(l.Image){const y=new Image;y.onload=R($n,d,"TestLoadImage: loaded",!0,h,y),y.onerror=R($n,d,"TestLoadImage: error",!1,h,y),y.onabort=R($n,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=R($n,d,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function qE(a,h){const d=new _s,y=new AbortController,N=setTimeout(()=>{y.abort(),$n(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(N),V.ok?$n(d,"TestPingServer: ok",!0,h):$n(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),$n(d,"TestPingServer: error",!1,h)})}function $n(a,h,d,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(d)}catch{}}function GE(){this.g=new kE}function KE(a,h,d){const y=d||"";try{Mp(a,function(N,V){let U=N;c(N)&&(U=Yu(N)),h.push(y+V+"="+encodeURIComponent(U))})}catch(N){throw h.push(y+"type="+encodeURIComponent("_badmap")),N}}function ca(a){this.l=a.Ub||null,this.j=a.eb||!1}A(ca,Ju),ca.prototype.g=function(){return new ha(this.l,this.j)},ca.prototype.i=function(a){return function(){return a}}({});function ha(a,h){Xe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ha,Xe),t=ha.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ss(this):xs(this),this.readyState==3&&Hp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ss(this))},t.Qa=function(a){this.g&&(this.response=a,Ss(this))},t.ga=function(){this.g&&Ss(this)};function Ss(a){a.readyState=4,a.l=null,a.j=null,a.v=null,xs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Wp(a){let h="";return j(a,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function lc(a,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=Wp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):de(a,h,d))}function xe(a){Xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(xe,Xe);var QE=/^https?$/i,XE=["POST","PUT"];t=xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tc.g(),this.v=this.o?wp(this.o):wp(tc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){qp(this,V);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)d.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())d.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(XE,h,void 0))||y||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,U]of d)this.g.setRequestHeader(V,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qp(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){qp(this,V)}};function qp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Gp(a),da(a)}function Gp(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,at(this,"complete"),at(this,"abort"),da(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),da(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Kp(this):this.bb())},t.bb=function(){Kp(this)};function Kp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||En(a)!=4||a.Z()!=2)){if(a.u&&En(a)==4)gp(a.Ea,0,a);else if(at(a,"readystatechange"),En(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=U===0){var N=String(a.D).match(jp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),y=!QE.test(N?N.toLowerCase():"")}d=y}if(d)at(a,"complete"),at(a,"success");else{a.m=6;try{var V=2<En(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Gp(a)}}finally{da(a)}}}}function da(a,h){if(a.g){Qp(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||at(a,"ready");try{d.onreadystatechange=y}catch{}}}function Qp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function En(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),CE(h)}};function Xp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function YE(a){const h={};a=(a.g&&2<=En(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var d=C(a[y]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[N]||[];h[N]=V,V.push(d)}T(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Yp(a){this.Aa=0,this.i=[],this.j=new _s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=As("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=As("baseRetryDelayMs",5e3,a),this.cb=As("retryDelaySeedMs",1e4,a),this.Wa=As("forwardChannelMaxRetries",2,a),this.wa=As("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new bp(a&&a.concurrentRequestLimit),this.Da=new GE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yp.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,y){lt(0),this.W=a,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=om(this,null,this.W),pa(this)};function uc(a){if(Jp(a),a.G==3){var h=a.U++,d=wn(a.I);if(de(d,"SID",a.K),de(d,"RID",h),de(d,"TYPE","terminate"),Rs(a,d),h=new Un(a,a.j,h),h.L=2,h.v=ua(wn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=am(h.j,null),h.g.ea(h.v)),h.F=Date.now(),oa(h)}sm(a)}function fa(a){a.g&&(hc(a),a.g.cancel(),a.g=null)}function Jp(a){fa(a),a.u&&(l.clearTimeout(a.u),a.u=null),ma(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function pa(a){if(!Dp(a.h)&&!a.s){a.s=!0;var h=a.Ga;ve||J(),z||(ve(),z=!0),Q.add(h,a),a.B=0}}function JE(a,h){return Vp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vs(g(a.Ga,a,h),im(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Un(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),x(V,this.S)):V=this.S),this.m!==null||this.O||(N.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=em(this,N,h),d=wn(this.I),de(d,"RID",a),de(d,"CVER",22),this.D&&de(d,"X-HTTP-Session-Id",this.D),Rs(this,d),V&&(this.O?h="headers="+encodeURIComponent(String(Wp(V)))+"&"+h:this.m&&lc(d,this.m,V)),ac(this.h,N),this.Ua&&de(d,"TYPE","init"),this.P?(de(d,"$req",h),de(d,"SID","null"),N.T=!0,rc(N,d,null)):rc(N,d,h),this.G=2}}else this.G==3&&(a?Zp(this,a):this.i.length==0||Dp(this.h)||Zp(this))};function Zp(a,h){var d;h?d=h.l:d=a.U++;const y=wn(a.I);de(y,"SID",a.K),de(y,"RID",d),de(y,"AID",a.T),Rs(a,y),a.m&&a.o&&lc(y,a.m,a.o),d=new Un(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=em(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ac(a.h,d),rc(d,y,h)}function Rs(a,h){a.H&&j(a.H,function(d,y){de(h,y,d)}),a.l&&Mp({},function(d,y){de(h,y,d)})}function em(a,h,d){d=Math.min(a.i.length,d);var y=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let V=-1;for(;;){const U=["count="+d];V==-1?0<d?(V=N[0].g,U.push("ofs="+V)):V=0:U.push("ofs="+V);let ce=!0;for(let Be=0;Be<d;Be++){let oe=N[Be].g;const Ye=N[Be].map;if(oe-=V,0>oe)V=Math.max(0,N[Be].g-100),ce=!1;else try{KE(Ye,U,"req"+oe+"_")}catch{y&&y(Ye)}}if(ce){y=U.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,y}function tm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ve||J(),z||(ve(),z=!0),Q.add(h,a),a.v=0}}function cc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vs(g(a.Fa,a),im(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,nm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),fa(this),nm(this))};function hc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function nm(a){a.g=new Un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);de(h,"RID","rpc"),de(h,"SID",a.K),de(h,"AID",a.T),de(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(h,"TO",a.ja),de(h,"TYPE","xmlhttp"),Rs(a,h),a.m&&a.o&&lc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ua(wn(h)),d.m=null,d.P=!0,kp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,fa(this),cc(this),lt(19))};function ma(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function rm(a,h){var d=null;if(a.g==h){ma(a),hc(a),a.g=null;var y=2}else if(oc(a.h,h))d=h.D,Op(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;y=ra(),at(y,new xp(y,d)),pa(a)}else tm(a);else if(N=h.s,N==3||N==0&&0<h.X||!(y==1&&JE(a,h)||y==2&&cc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),N){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function im(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Dr(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),y=a.Xa;const N=!y;y=new br(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||aa(y,"https"),ua(y),N?WE(y.toString(),d):qE(y.toString(),d)}else lt(2);a.G=0,a.l&&a.l.sa(h),sm(a),Jp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function sm(a){if(a.G=0,a.ka=[],a.l){const h=Lp(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function om(a,h,d){var y=d instanceof br?wn(d):new br(d);if(y.g!="")h&&(y.g=h+"."+y.g),la(y,y.s);else{var N=l.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var V=new br(null);y&&aa(V,y),h&&(V.g=h),N&&la(V,N),d&&(V.l=d),y=V}return d=a.D,h=a.ya,d&&h&&de(y,d,h),de(y,"VER",a.la),Rs(a,y),y}function am(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new xe(new ca({eb:d})):new xe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function lm(){}t=lm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ga(){}ga.prototype.g=function(a,h){return new It(a,h)};function It(a,h){Xe.call(this),this.g=new Yp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new pi(this)}A(It,Xe),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){uc(this.g)},It.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Yu(a),a=d);h.i.push(new OE(h.Ya++,a)),h.G==3&&pa(h)},It.prototype.N=function(){this.g.l=null,delete this.j,uc(this.g),delete this.g,It.aa.N.call(this)};function um(a){Zu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(um,Zu);function cm(){ec.call(this),this.status=1}A(cm,ec);function pi(a){this.g=a}A(pi,lm),pi.prototype.ua=function(){at(this.g,"a")},pi.prototype.ta=function(a){at(this.g,new um(a))},pi.prototype.sa=function(a){at(this.g,new cm)},pi.prototype.ra=function(){at(this.g,"b")},ga.prototype.createWebChannel=ga.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,I0=function(){return new ga},T0=function(){return ra()},E0=Pr,nd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ia.NO_ERROR=0,ia.TIMEOUT=8,ia.HTTP_ERROR=6,sl=ia,Ap.COMPLETE="complete",w0=Ap,Ep.EventType=gs,gs.OPEN="a",gs.CLOSE="b",gs.ERROR="c",gs.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,Hs=Ep,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,_0=xe}).apply(typeof La<"u"?La:typeof self<"u"?self:typeof window<"u"?window:{});const Jg="@firebase/firestore",Zg="4.9.1";/**
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
 */let hs="12.2.0";/**
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
 */const Zr=new Eu("@firebase/firestore");function vi(){return Zr.logLevel}function $(t,...e){if(Zr.logLevel<=ee.DEBUG){const n=e.map(Cf);Zr.debug(`Firestore (${hs}): ${t}`,...n)}}function Ln(t,...e){if(Zr.logLevel<=ee.ERROR){const n=e.map(Cf);Zr.error(`Firestore (${hs}): ${t}`,...n)}}function Zi(t,...e){if(Zr.logLevel<=ee.WARN){const n=e.map(Cf);Zr.warn(`Firestore (${hs}): ${t}`,...n)}}function Cf(t){if(typeof t=="string")return t;try{/**
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
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,S0(t,r,n)}function S0(t,e,n){let r=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ln(r),new Error(r)}function ae(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||S0(e,i,r)}function Y(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class x0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class CC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kC{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string",31837,{l:r}),new x0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string",2055,{h:e}),new nt(e)}}class PC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class NC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new PC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ey{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ae(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ey(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ey(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function DC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class kf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=DC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function rd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return qc(i)===qc(s)?ne(i,s):qc(i)?1:-1}return ne(t.length,e.length)}const VC=55296,OC=57343;function qc(t){const e=t.charCodeAt(0);return e>=VC&&e<=OC}function es(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const ty="__name__";class tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=tn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=tn.isNumericId(e),i=tn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?tn.extractNumericId(e).compare(tn.extractNumericId(n)):rd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Ee extends tn{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const LC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends tn{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return LC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ty}static keyField(){return new qe([ty])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ee.fromString(e))}static fromName(e){return new q(Ee.fromString(e).popFirst(5))}static empty(){return new q(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ee(e.slice()))}}/**
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
 */function MC(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jC(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ny(t){if(!q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function A0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Pf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function ei(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pf(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function be(t,e){const n={typeString:t};return e&&(n.value=e),n}function Qo(t,e){if(!A0(t))throw new W(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const ry=-62135596800,iy=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*iy);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ry)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/iy}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qo(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ry;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:be("string",pe._jsonSchemaVersion),seconds:be("number"),nanoseconds:be("number")};/**
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
 */const bo=-1;function FC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new yr(i,q.empty(),e)}function UC(t){return new yr(t.readTime,t.key,bo)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(X.min(),q.empty(),bo)}static max(){return new yr(X.max(),q.empty(),bo)}}function zC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const $C="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ds(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==$C)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function HC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class xu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}xu.ce=-1;/**
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
 */const Nf=-1;function Au(t){return t==null}function Hl(t){return t===0&&1/t==-1/0}function WC(t){return typeof t=="number"&&Number.isInteger(t)&&!Hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const R0="";function qC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sy(e)),e=GC(t.get(n),e);return sy(e)}function GC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case R0:n+="";break;default:n+=s}}return n}function sy(t){return t+R0+""}/**
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
 */function oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function C0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ma(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ma(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ma(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ma(this.root,e,this.comparator,!0)}}class Ma{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ay(this.data.getIterator())}getIteratorFrom(e){return new ay(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class ay{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new At([])}unionWith(e){let n=new je(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class k0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new k0("Invalid base64 string: "+s):s}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const KC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(ae(!!t,39018),typeof t=="string"){let e=0;const n=KC.exec(t);if(ae(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */const P0="server_timestamp",N0="__type__",b0="__previous_value__",D0="__local_write_time__";function bf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[N0])==null?void 0:r.stringValue)===P0}function Ru(t){const e=t.mapValue.fields[b0];return bf(e)?Ru(e):e}function Do(t){const e=vr(t.mapValue.fields[D0].timestampValue);return new pe(e.seconds,e.nanos)}/**
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
 */class QC{constructor(e,n,r,i,s,o,l,u,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f}}const Wl="(default)";class Vo{constructor(e,n){this.projectId=e,this.database=n||Wl}static empty(){return new Vo("","")}get isDefaultDatabase(){return this.database===Wl}isEqual(e){return e instanceof Vo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const V0="__type__",O0="__max__",ja={mapValue:{fields:{__type__:{stringValue:O0}}}},L0="__vector__",ql="value";function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bf(t)?4:YC(t)?9007199254740991:XC(t)?10:11:K(28295,{value:t})}function pn(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vr(i.timestampValue),l=vr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _r(i.bytesValue).isEqual(_r(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?Hl(o)===Hl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(oy(o)!==oy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!pn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Oo(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function ts(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ly(t.timestampValue,e.timestampValue);case 4:return ly(Do(t),Do(e));case 5:return rd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=_r(s),u=_r(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ne(l[c],u[c]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Ce(s.latitude),Ce(o.latitude));return l!==0?l:ne(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return uy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,R,A,P;const l=s.fields||{},u=o.fields||{},c=(g=l[ql])==null?void 0:g.arrayValue,f=(R=u[ql])==null?void 0:R.arrayValue,m=ne(((A=c==null?void 0:c.values)==null?void 0:A.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return m!==0?m:uy(c,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ja.mapValue&&o===ja.mapValue)return 0;if(s===ja.mapValue)return 1;if(o===ja.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=rd(u[m],f[m]);if(g!==0)return g;const R=ts(l[u[m]],c[f[m]]);if(R!==0)return R}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function ly(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=vr(t),r=vr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function uy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ts(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function ns(t){return id(t)}function id(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=id(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${id(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function ol(t){switch(wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ru(t);return e?16+ol(e):16;case 5:return 2*t.stringValue.length;case 6:return _r(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ol(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Rr(r.fields,(s,o)=>{i+=s.length+ol(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function sd(t){return!!t&&"integerValue"in t}function Df(t){return!!t&&"arrayValue"in t}function cy(t){return!!t&&"nullValue"in t}function hy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function al(t){return!!t&&"mapValue"in t}function XC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[V0])==null?void 0:r.stringValue)===L0}function oo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oo(t.arrayValue.values[n]);return e}return{...t}}function YC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===O0}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oo(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=oo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];al(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(oo(this.value))}}function M0(t){const e=[];return Rr(t.fields,(n,r)=>{const i=new qe([n]);if(al(r)){const s=M0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new At(e)}/**
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
 */class it{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new it(e,0,X.min(),X.min(),X.min(),gt.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,X.min(),X.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,X.min(),X.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gl{constructor(e,n){this.position=e,this.inclusive=n}}function dy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=ts(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function JC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class j0{}class Oe extends j0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ek(e,n,r):n==="array-contains"?new rk(e,r):n==="in"?new ik(e,r):n==="not-in"?new sk(e,r):n==="array-contains-any"?new ok(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tk(e,r):new nk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ts(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends j0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new mn(e,n)}matches(e){return F0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function F0(t){return t.op==="and"}function U0(t){return ZC(t)&&F0(t)}function ZC(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function od(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+ns(t.value);if(U0(t))return t.filters.map(e=>od(e)).join(",");{const e=t.filters.map(n=>od(n)).join(",");return`${t.op}(${e})`}}function z0(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&pn(r.value,i.value)}(t,e):t instanceof mn?function(r,i){return i instanceof mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&z0(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function $0(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${ns(n.value)}`}(t):t instanceof mn?function(n){return n.op.toString()+" {"+n.getFilters().map($0).join(" ,")+"}"}(t):"Filter"}class ek extends Oe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class tk extends Oe{constructor(e,n){super(e,"in",n),this.keys=B0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nk extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=B0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function B0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class rk extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Df(n)&&Oo(n.arrayValue,this.value)}}class ik extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oo(this.value.arrayValue,n)}}class sk extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Oo(this.value.arrayValue,n)}}class ok extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Df(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Oo(this.value.arrayValue,r))}}/**
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
 */class ak{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function py(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ak(t,e,n,r,i,s,o)}function Vf(t){const e=Y(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>od(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ns(r)).join(",")),e.Te=n}return e.Te}function Of(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!z0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fy(t.startAt,e.startAt)&&fy(t.endAt,e.endAt)}function ad(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Cu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function lk(t,e,n,r,i,s,o,l){return new Cu(t,e,n,r,i,s,o,l)}function Lf(t){return new Cu(t)}function my(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uk(t){return t.collectionGroup!==null}function ao(t){const e=Y(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new je(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Kl(s,r))}),n.has(qe.keyField().canonicalString())||e.Ie.push(new Kl(qe.keyField(),r))}return e.Ie}function ln(t){const e=Y(t);return e.Ee||(e.Ee=ck(e,ao(t))),e.Ee}function ck(t,e){if(t.limitType==="F")return py(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Kl(i.field,s)});const n=t.endAt?new Gl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gl(t.startAt.position,t.startAt.inclusive):null;return py(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ld(t,e,n){return new Cu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ku(t,e){return Of(ln(t),ln(e))&&t.limitType===e.limitType}function H0(t){return`${Vf(ln(t))}|lt:${t.limitType}`}function _i(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>$0(i)).join(", ")}]`),Au(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ns(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ns(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Pu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ao(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=dy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ao(r),i)||r.endAt&&!function(o,l,u){const c=dy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ao(r),i))}(t,e)}function hk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function W0(t){return(e,n)=>{let r=!1;for(const i of ao(t)){const s=dk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dk(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ts(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
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
 */class ui{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return C0(this.inner)}size(){return this.innerSize}}/**
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
 */const fk=new Se(q.comparator);function Mn(){return fk}const q0=new Se(q.comparator);function Ws(...t){let e=q0;for(const n of t)e=e.insert(n.key,n);return e}function G0(t){let e=q0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zr(){return lo()}function K0(){return lo()}function lo(){return new ui(t=>t.toString(),(t,e)=>t.isEqual(e))}const pk=new Se(q.comparator),mk=new je(q.comparator);function re(...t){let e=mk;for(const n of t)e=e.add(n);return e}const gk=new je(ne);function yk(){return gk}/**
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
 */function Mf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hl(e)?"-0":e}}function Q0(t){return{integerValue:""+t}}function vk(t,e){return WC(e)?Q0(e):Mf(t,e)}/**
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
 */class Nu{constructor(){this._=void 0}}function _k(t,e,n){return t instanceof Ql?function(i,s){const o={fields:{[N0]:{stringValue:P0},[D0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&bf(s)&&(s=Ru(s)),s&&(o.fields[b0]=s),{mapValue:o}}(n,e):t instanceof Lo?Y0(t,e):t instanceof Mo?J0(t,e):function(i,s){const o=X0(i,s),l=gy(o)+gy(i.Ae);return sd(o)&&sd(i.Ae)?Q0(l):Mf(i.serializer,l)}(t,e)}function wk(t,e,n){return t instanceof Lo?Y0(t,e):t instanceof Mo?J0(t,e):n}function X0(t,e){return t instanceof Xl?function(r){return sd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ql extends Nu{}class Lo extends Nu{constructor(e){super(),this.elements=e}}function Y0(t,e){const n=Z0(e);for(const r of t.elements)n.some(i=>pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Mo extends Nu{constructor(e){super(),this.elements=e}}function J0(t,e){let n=Z0(e);for(const r of t.elements)n=n.filter(i=>!pn(i,r));return{arrayValue:{values:n}}}class Xl extends Nu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function gy(t){return Ce(t.integerValue||t.doubleValue)}function Z0(t){return Df(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ek(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Lo&&i instanceof Lo||r instanceof Mo&&i instanceof Mo?es(r.elements,i.elements,pn):r instanceof Xl&&i instanceof Xl?pn(r.Ae,i.Ae):r instanceof Ql&&i instanceof Ql}(t.transform,e.transform)}class Tk{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bu{}function e1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new n1(t.key,un.none()):new Xo(t.key,t.data,un.none());{const n=t.data,r=gt.empty();let i=new je(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cr(t.key,r,new At(i.toArray()),un.none())}}function Ik(t,e,n){t instanceof Xo?function(i,s,o){const l=i.value.clone(),u=vy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(i,s,o){if(!ll(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=vy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(t1(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function uo(t,e,n,r){return t instanceof Xo?function(s,o,l,u){if(!ll(s.precondition,o))return l;const c=s.value.clone(),f=_y(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(s,o,l,u){if(!ll(s.precondition,o))return l;const c=_y(s.fieldTransforms,u,o),f=o.data;return f.setAll(t1(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return ll(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Sk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=X0(r.transform,i||null);s!=null&&(n===null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function yy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&es(r,i,(s,o)=>Ek(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xo extends bu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cr extends bu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function t1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vy(t,e,n){const r=new Map;ae(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,wk(o,l,n[i]))}return r}function _y(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_k(s,o,e))}return r}class n1 extends bu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xk extends bu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ak{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ik(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=uo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=uo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=K0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=e1(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,r)=>yy(n,r))&&es(this.baseMutations,e.baseMutations,(n,r)=>yy(n,r))}}class jf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return pk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new jf(e,n,r,i)}}/**
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
 */class Rk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ck{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,ie;function kk(t){switch(t){case M.OK:return K(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function r1(t){if(t===void 0)return Ln("GRPC error has no .code"),M.UNKNOWN;switch(t){case Pe.OK:return M.OK;case Pe.CANCELLED:return M.CANCELLED;case Pe.UNKNOWN:return M.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return M.INTERNAL;case Pe.UNAVAILABLE:return M.UNAVAILABLE;case Pe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Pe.NOT_FOUND:return M.NOT_FOUND;case Pe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Pe.ABORTED:return M.ABORTED;case Pe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Pe.DATA_LOSS:return M.DATA_LOSS;default:return K(39323,{code:t})}}(ie=Pe||(Pe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Pk(){return new TextEncoder}/**
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
 */const Nk=new dr([4294967295,4294967295],0);function wy(t){const e=Pk().encode(t),n=new v0;return n.update(e),new Uint8Array(n.digest())}function Ey(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new dr([n,r],0),new dr([i,s],0)]}class Ff{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=dr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(dr.fromNumber(r)));return i.compare(Nk)===1&&(i=new dr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=wy(e),[r,i]=Ey(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ff(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=wy(e),[r,i]=Ey(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Du{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Yo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Du(X.min(),i,new Se(ne),Mn(),re())}}class Yo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Yo(r,n,re(),re(),re())}}/**
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
 */class ul{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class i1{constructor(e,n){this.targetId=e,this.Ce=n}}class s1{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ty{constructor(){this.ve=0,this.Fe=Iy(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Yo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Iy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ae(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class bk{constructor(e){this.Ge=e,this.ze=new Map,this.je=Mn(),this.Je=Fa(),this.He=Fa(),this.Ye=new Se(ne)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(ad(s))if(r===0){const o=new q(s.path);this.et(n,o,it.newNoDocument(o,X.min()))}else ae(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=_r(r).toUint8Array()}catch(u){if(u instanceof k0)return Zi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ff(o,i,s)}catch(u){return Zi(u instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&ad(l.target)){const u=new q(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,it.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Du(e,n,this.Ye,this.je,r);return this.je=Mn(),this.Je=Fa(),this.He=Fa(),this.Ye=new Se(ne),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Ty,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new je(ne),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new je(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ty),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fa(){return new Se(q.comparator)}function Iy(){return new Se(q.comparator)}const Dk={asc:"ASCENDING",desc:"DESCENDING"},Vk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ok={and:"AND",or:"OR"};class Lk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ud(t,e){return t.useProto3Json||Au(e)?e:{value:e}}function Yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function o1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Mk(t,e){return Yl(t,e.toTimestamp())}function cn(t){return ae(!!t,49232),X.fromTimestamp(function(n){const r=vr(n);return new pe(r.seconds,r.nanos)}(t))}function Uf(t,e){return cd(t,e).canonicalString()}function cd(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function a1(t){const e=Ee.fromString(t);return ae(d1(e),10190,{key:e.toString()}),e}function hd(t,e){return Uf(t.databaseId,e.path)}function Gc(t,e){const n=a1(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(u1(n))}function l1(t,e){return Uf(t.databaseId,e)}function jk(t){const e=a1(t);return e.length===4?Ee.emptyPath():u1(e)}function dd(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function u1(t){return ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Sy(t,e,n){return{name:hd(t,e),fields:n.value.mapValue.fields}}function Fk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ae(f===void 0||typeof f=="string",58123),Qe.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:r1(c.code);return new W(f,c.message||"")}(o);n=new s1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gc(t,r.document.name),s=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):X.min(),l=new gt({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new ul(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gc(t,r.document),s=r.readTime?cn(r.readTime):X.min(),o=it.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ul([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gc(t,r.document),s=r.removedTargetIds||[];n=new ul([],s,i,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ck(i,s),l=r.targetId;n=new i1(l,o)}}return n}function Uk(t,e){let n;if(e instanceof Xo)n={update:Sy(t,e.key,e.value)};else if(e instanceof n1)n={delete:hd(t,e.key)};else if(e instanceof Cr)n={update:Sy(t,e.key,e.data),updateMask:Qk(e.fieldMask)};else{if(!(e instanceof xk))return K(16599,{Vt:e.type});n={verify:hd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ql)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Mk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function zk(t,e){return t&&t.length>0?(ae(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?cn(i.updateTime):cn(s);return o.isEqual(X.min())&&(o=cn(s)),new Tk(o,i.transformResults||[])}(n,e))):[]}function $k(t,e){return{documents:[l1(t,e.path)]}}function Bk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=l1(t,i);const s=function(c){if(c.length!==0)return h1(mn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:wi(g.field),direction:qk(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ud(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function Hk(t){let e=jk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=c1(m);return g instanceof mn&&U0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(A){return new Kl(Ei(A.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Au(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,R=m.values||[];return new Gl(R,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,R=m.values||[];return new Gl(R,g)}(n.endAt)),lk(e,i,o,s,l,"F",u,c)}function Wk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function c1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ei(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ei(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ei(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ei(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Ei(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mn.create(n.compositeFilter.filters.map(r=>c1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function qk(t){return Dk[t]}function Gk(t){return Vk[t]}function Kk(t){return Ok[t]}function wi(t){return{fieldPath:t.canonicalString()}}function Ei(t){return qe.fromServerFormat(t.fieldPath)}function h1(t){return t instanceof Oe?function(n){if(n.op==="=="){if(hy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NAN"}};if(cy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NAN"}};if(cy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wi(n.field),op:Gk(n.op),value:n.value}}}(t):t instanceof mn?function(n){const r=n.getFilters().map(i=>h1(i));return r.length===1?r[0]:{compositeFilter:{op:Kk(n.op),filters:r}}}(t):K(54877,{filter:t})}function Qk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function d1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class tr{constructor(e,n,r,i,s=X.min(),o=X.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Xk{constructor(e){this.yt=e}}function Yk(t){const e=Hk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ld(e,e.limit,"L"):e}/**
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
 */class Jk{constructor(){this.Cn=new Zk}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(yr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class Zk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(Ee.comparator)).toArray()}}/**
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
 */const xy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},f1=41943040;class pt{static withCacheSize(e){return new pt(e,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */pt.DEFAULT_COLLECTION_PERCENTILE=10,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pt.DEFAULT=new pt(f1,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pt.DISABLED=new pt(-1,0,0);/**
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
 */class rs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new rs(0)}static cr(){return new rs(-1)}}/**
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
 */const Ay="LruGarbageCollector",eP=1048576;function Ry([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class tP{constructor(e){this.Ir=e,this.buffer=new je(Ry),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ry(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class nP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){$(Ay,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fs(n)?$(Ay,"Ignoring IndexedDB error during garbage collection: ",n):await ds(n)}await this.Vr(3e5)})}}class rP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(xu.ce);const r=new tP(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(xy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xy):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),vi()<=ee.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function iP(t,e){return new rP(t,e)}/**
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
 */class sP{constructor(){this.changes=new ui(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class aP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&uo(r.mutation,i,At.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ws();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Mn();const o=lo(),l=function(){return lo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Cr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),uo(f.mutation,c,f.mutation.getFieldMask(),pe.now())):o.set(c.key,At.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new oP(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=lo();let i=new Se((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||At.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=K0();f.forEach(g=>{if(!s.has(g)){const R=e1(n.get(g),r.get(g));R!==null&&m.set(g,R),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(zr());let l=bo,u=s;return o.next(c=>O.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(f=>({batchId:l,changes:G0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Ws();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ws();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const c=function(m,g){return new Cu(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,it.newInvalidDocument(f)))});let l=Ws();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&uo(f.mutation,c,At.empty(),pe.now()),Pu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class lP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:cn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:Yk(i.bundledQuery),readTime:cn(i.readTime)}}(n)),O.resolve()}}/**
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
 */class uP{constructor(){this.overlays=new Se(q.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=zr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=zr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=zr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return O.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Rk(n,r));let s=this.qr.get(n);s===void 0&&(s=re(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class cP{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class zf{constructor(){this.Qr=new je(Ue.$r),this.Ur=new je(Ue.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ue(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new q(new Ee([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new q(new Ee([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=re();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return q.comparator(e.key,n.key)||ne(e.Yr,n.Yr)}static Kr(e,n){return ne(e.Yr,n.Yr)||q.comparator(e.key,n.key)}}/**
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
 */class hP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new je(Ue.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ak(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Nf:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(ne);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new q(s),0);let l=new je(ne);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ue(n,0),i=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class dP{constructor(e){this.ri=e,this.docs=function(){return new Se(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||zC(UC(f),r)<=0||(i.has(f.key)||Pu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fP(this)}getSize(e){return O.resolve(this.size)}}class fP extends sP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class pP{constructor(e){this.persistence=e,this.si=new ui(n=>Vf(n),Of),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.oi=0,this._i=new zf,this.targetCount=0,this.ai=rs.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new rs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
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
 */class p1{constructor(e,n){this.ui={},this.overlays={},this.ci=new xu(0),this.li=!1,this.li=!0,this.hi=new cP,this.referenceDelegate=e(this),this.Pi=new pP(this),this.indexManager=new Jk,this.remoteDocumentCache=function(i){return new dP(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Xk(n),this.Ii=new lP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new hP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new mP(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class mP extends BC{constructor(e){super(),this.currentSequenceNumber=e}}class $f{constructor(e){this.persistence=e,this.Ri=new zf,this.Vi=null}static mi(e){return new $f(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const i=q.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Jl{constructor(e,n){this.persistence=e,this.pi=new ui(r=>qC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=iP(this,n)}static mi(e,n){return new Jl(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ol(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bf(e,n.fromCache,r,i)}}/**
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
 */class gP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return HS()?8:HC(ot())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new gP;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(vi()<=ee.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",_i(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(vi()<=ee.DEBUG&&$("QueryEngine","Query:",_i(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(vi()<=ee.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",_i(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):O.resolve())}ys(e,n){if(my(n))return O.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ld(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,ld(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return my(n)||i.isEqual(X.min())?O.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?O.resolve(null):(vi()<=ee.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_i(n)),this.vs(e,o,n,FC(i,bo)).next(l=>l))})}Ds(e,n){let r=new je(W0(e));return n.forEach((i,s)=>{Pu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return vi()<=ee.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",_i(n)),this.ps.getDocumentsMatchingQuery(e,n,yr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Hf="LocalStore",vP=3e8;class _P{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Se(ne),this.xs=new ui(s=>Vf(s),Of),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function wP(t,e,n,r){return new _P(t,e,n,r)}async function m1(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function EP(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let R=O.resolve();return g.forEach(A=>{R=R.next(()=>f.getEntry(u,A)).next(P=>{const D=c.docVersions.get(A);ae(D!==null,48541),P.version.compareTo(D)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function g1(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function TP(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,m)));let R=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(Qe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(m,R),function(P,D,w){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=vP?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,R,f)&&l.push(n.Pi.updateTargetData(s,R))});let u=Mn(),c=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(IP(s,o,e.documentUpdates).next(f=>{u=f.ks,c=f.qs})),!r.isEqual(X.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function IP(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(Hf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function SP(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Nf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xP(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function fd(t,e,n){const r=Y(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!fs(o))throw o;$(Hf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Cy(t,e,n){const r=Y(t);let i=X.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=Y(u),g=m.xs.get(f);return g!==void 0?O.resolve(m.Ms.get(g)):m.Pi.getTargetData(c,f)}(r,o,ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:re())).next(l=>(AP(r,hk(e),l),{documents:l,Qs:s})))}function AP(t,e,n){let r=t.Os.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class ky{constructor(){this.activeTargetIds=yk()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RP{constructor(){this.Mo=new ky,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ky,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CP{Oo(e){}shutdown(){}}/**
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
 */const Py="ConnectivityMonitor";class Ny{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){$(Py,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){$(Py,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ua=null;function pd(){return Ua===null?Ua=function(){return 268435456+Math.round(2147483648*Math.random())}():Ua++,"0x"+Ua.toString(16)}/**
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
 */const Kc="RestConnection",kP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class PP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Wl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=pd(),l=this.zo(e,n.toUriEncodedString());$(Kc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),f=ls(c);return this.Jo(e,l,u,r,f).then(m=>($(Kc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Zi(Kc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=kP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class NP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const tt="WebChannelConnection";class bP extends PP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=pd();return new Promise((l,u)=>{const c=new _0;c.setWithCredentials(!0),c.listenOnce(w0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case sl.NO_ERROR:const m=c.getResponseJson();$(tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case sl.TIMEOUT:$(tt,`RPC '${e}' ${o} timed out`),u(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case sl.HTTP_ERROR:const g=c.getStatus();if($(tt,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let R=c.getResponseJson();Array.isArray(R)&&(R=R[0]);const A=R==null?void 0:R.error;if(A&&A.status&&A.message){const P=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(_)>=0?_:M.UNKNOWN}(A.status);u(new W(P,A.message))}else u(new W(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new W(M.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{$(tt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(tt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}T_(e,n,r){const i=pd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=I0(),l=T0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(tt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);this.I_(m);let g=!1,R=!1;const A=new NP({Yo:D=>{R?$(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||($(tt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),$(tt,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},Zo:()=>m.close()}),P=(D,w,_)=>{D.listen(w,E=>{try{_(E)}catch(b){setTimeout(()=>{throw b},0)}})};return P(m,Hs.EventType.OPEN,()=>{R||($(tt,`RPC '${e}' stream ${i} transport opened.`),A.o_())}),P(m,Hs.EventType.CLOSE,()=>{R||(R=!0,$(tt,`RPC '${e}' stream ${i} transport closed`),A.a_(),this.E_(m))}),P(m,Hs.EventType.ERROR,D=>{R||(R=!0,Zi(tt,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),A.a_(new W(M.UNAVAILABLE,"The operation could not be completed")))}),P(m,Hs.EventType.MESSAGE,D=>{var w;if(!R){const _=D.data[0];ae(!!_,16349);const E=_,b=(E==null?void 0:E.error)||((w=E[0])==null?void 0:w.error);if(b){$(tt,`RPC '${e}' stream ${i} received error:`,b);const L=b.status;let j=function(I){const x=Pe[I];if(x!==void 0)return r1(x)}(L),T=b.message;j===void 0&&(j=M.INTERNAL,T="Unknown error status: "+L+" with message "+b.message),R=!0,A.a_(new W(j,T)),m.close()}else $(tt,`RPC '${e}' stream ${i} received:`,_),A.u_(_)}}),P(l,E0.STAT_EVENT,D=>{D.stat===nd.PROXY?$(tt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===nd.NOPROXY&&$(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.__()},0),A}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Qc(){return typeof document<"u"?document:null}/**
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
 */function Vu(t){return new Lk(t,!0)}/**
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
 */class y1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const by="PersistentStream";class v1{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new y1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(by,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():($(by,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DP extends v1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Fk(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?cn(o.readTime):X.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=dd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ad(u)?{documents:$k(s,u)}:{query:Bk(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=o1(s,o.resumeToken);const c=ud(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Yl(s,o.snapshotVersion.toTimestamp());const c=ud(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Wk(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=dd(this.serializer),n.removeTarget=e,this.q_(n)}}class VP extends v1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=zk(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=dd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Uk(this.serializer,r))};this.q_(n)}}/**
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
 */class OP{}class LP extends OP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,cd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,cd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class MP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ln(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ti="RemoteStore";class jP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ci(this)&&($(ti,"Restarting streams for network reachability change."),await async function(u){const c=Y(u);c.Ea.add(4),await Jo(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Ou(c)}(this))})}),this.Ra=new MP(r,i)}}async function Ou(t){if(ci(t))for(const e of t.da)await e(!0)}async function Jo(t){for(const e of t.da)await e(!1)}function _1(t,e){const n=Y(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Kf(n)?Gf(n):ps(n).O_()&&qf(n,e))}function Wf(t,e){const n=Y(t),r=ps(n);n.Ia.delete(e),r.O_()&&w1(n,e),n.Ia.size===0&&(r.O_()?r.L_():ci(n)&&n.Ra.set("Unknown"))}function qf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ps(t).Y_(e)}function w1(t,e){t.Va.Ue(e),ps(t).Z_(e)}function Gf(t){t.Va=new bk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ps(t).start(),t.Ra.ua()}function Kf(t){return ci(t)&&!ps(t).x_()&&t.Ia.size>0}function ci(t){return Y(t).Ea.size===0}function E1(t){t.Va=void 0}async function FP(t){t.Ra.set("Online")}async function UP(t){t.Ia.forEach((e,n)=>{qf(t,e)})}async function zP(t,e){E1(t),Kf(t)?(t.Ra.ha(e),Gf(t)):t.Ra.set("Unknown")}async function $P(t,e,n){if(t.Ra.set("Online"),e instanceof s1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){$(ti,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zl(t,r)}else if(e instanceof ul?t.Va.Ze(e):e instanceof i1?t.Va.st(e):t.Va.tt(e),!n.isEqual(X.min()))try{const r=await g1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(c);f&&s.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(Qe.EMPTY_BYTE_STRING,f.snapshotVersion)),w1(s,u);const m=new tr(f.target,u,c,f.sequenceNumber);qf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(ti,"Failed to raise snapshot:",r),await Zl(t,r)}}async function Zl(t,e,n){if(!fs(e))throw e;t.Ea.add(1),await Jo(t),t.Ra.set("Offline"),n||(n=()=>g1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(ti,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ou(t)})}function T1(t,e){return e().catch(n=>Zl(t,n,e))}async function Lu(t){const e=Y(t),n=Er(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Nf;for(;BP(e);)try{const i=await SP(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,HP(e,i)}catch(i){await Zl(e,i)}I1(e)&&S1(e)}function BP(t){return ci(t)&&t.Ta.length<10}function HP(t,e){t.Ta.push(e);const n=Er(t);n.O_()&&n.X_&&n.ea(e.mutations)}function I1(t){return ci(t)&&!Er(t).x_()&&t.Ta.length>0}function S1(t){Er(t).start()}async function WP(t){Er(t).ra()}async function qP(t){const e=Er(t);for(const n of t.Ta)e.ea(n.mutations)}async function GP(t,e,n){const r=t.Ta.shift(),i=jf.from(r,e,n);await T1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lu(t)}async function KP(t,e){e&&Er(t).X_&&await async function(r,i){if(function(o){return kk(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();Er(r).B_(),await T1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lu(r)}}(t,e),I1(t)&&S1(t)}async function Dy(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),$(ti,"RemoteStore received new credentials");const r=ci(n);n.Ea.add(3),await Jo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ou(n)}async function QP(t,e){const n=Y(t);e?(n.Ea.delete(2),await Ou(n)):e||(n.Ea.add(2),await Jo(n),n.Ra.set("Unknown"))}function ps(t){return t.ma||(t.ma=function(n,r,i){const s=Y(n);return s.sa(),new DP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:FP.bind(null,t),t_:UP.bind(null,t),r_:zP.bind(null,t),H_:$P.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Kf(t)?Gf(t):t.Ra.set("Unknown")):(await t.ma.stop(),E1(t))})),t.ma}function Er(t){return t.fa||(t.fa=function(n,r,i){const s=Y(n);return s.sa(),new VP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:WP.bind(null,t),r_:KP.bind(null,t),ta:qP.bind(null,t),na:GP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Lu(t)):(await t.fa.stop(),t.Ta.length>0&&($(ti,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Qf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Qf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xf(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),fs(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hi{static emptySet(e){return new Hi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Ws(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Vy{constructor(){this.ga=new Se(q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new is(e,n,Hi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ku(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class XP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class YP{constructor(){this.queries=Oy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=Oy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function Oy(){return new ui(t=>H0(t),ku)}async function JP(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new XP,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Xf(o,`Initialization of query '${_i(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Yf(n)}async function ZP(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function e2(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Yf(n)}function t2(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Yf(t){t.Ca.forEach(e=>{e.next()})}var md,Ly;(Ly=md||(md={})).Ma="default",Ly.Cache="cache";class n2{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==md.Cache}}/**
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
 */class x1{constructor(e){this.key=e}}class A1{constructor(e){this.key=e}}class r2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=W0(e),this.tu=new Hi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Vy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),R=Pu(this.query,m)?m:null,A=!!g&&this.mutatedKeys.has(g.key),P=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;g&&R?g.data.isEqual(R.data)?A!==P&&(r.track({type:3,doc:R}),D=!0):this.su(g,R)||(r.track({type:2,doc:R}),D=!0,(u&&this.eu(R,u)>0||c&&this.eu(R,c)<0)&&(l=!0)):!g&&R?(r.track({type:0,doc:R}),D=!0):g&&!R&&(r.track({type:1,doc:g}),D=!0,(u||c)&&(l=!0)),D&&(R?(o=o.add(R),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(R,A){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:D})}};return P(R)-P(A)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new is(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Vy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new A1(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new x1(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return is.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Jf="SyncEngine";class i2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class s2{constructor(e){this.key=e,this.hu=!1}}class o2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ui(l=>H0(l),ku),this.Iu=new Map,this.Eu=new Set,this.du=new Se(q.comparator),this.Au=new Map,this.Ru=new zf,this.Vu={},this.mu=new Map,this.fu=rs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function a2(t,e,n=!0){const r=b1(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await R1(r,e,n,!0),i}async function l2(t,e){const n=b1(t);await R1(n,e,!0,!1)}async function R1(t,e,n,r){const i=await xP(t.localStore,ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await u2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&_1(t.remoteStore,i),l}async function u2(t,e,n,r,i){t.pu=(m,g,R)=>async function(P,D,w,_){let E=D.view.ru(w);E.Cs&&(E=await Cy(P.localStore,D.query,!1).then(({documents:T})=>D.view.ru(T,E)));const b=_&&_.targetChanges.get(D.targetId),L=_&&_.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(E,P.isPrimaryClient,b,L);return jy(P,D.targetId,j.au),j.snapshot}(t,m,g,R);const s=await Cy(t.localStore,e,!0),o=new r2(e,s.Qs),l=o.ru(s.documents),u=Yo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);jy(t,n,c.au);const f=new i2(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function c2(t,e,n){const r=Y(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!ku(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await fd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Wf(r.remoteStore,i.targetId),gd(r,i.targetId)}).catch(ds)):(gd(r,i.targetId),await fd(r.localStore,i.targetId,!0))}async function h2(t,e){const n=Y(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wf(n.remoteStore,r.targetId))}async function d2(t,e,n){const r=_2(t);try{const i=await function(o,l){const u=Y(o),c=pe.now(),f=l.reduce((R,A)=>R.add(A.key),re());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let A=Mn(),P=re();return u.Ns.getEntries(R,f).next(D=>{A=D,A.forEach((w,_)=>{_.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,A)).next(D=>{m=D;const w=[];for(const _ of l){const E=Sk(_,m.get(_.key).overlayedDocument);E!=null&&w.push(new Cr(_.key,E,M0(E.value.mapValue),un.exists(!0)))}return u.mutationQueue.addMutationBatch(R,c,w,l)}).next(D=>{g=D;const w=D.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(R,D.batchId,w)})}).then(()=>({batchId:g.batchId,changes:G0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Se(ne)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Zo(r,i.changes),await Lu(r.remoteStore)}catch(i){const s=Xf(i,"Failed to persist write");n.reject(s)}}async function C1(t,e){const n=Y(t);try{const r=await TP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ae(o.hu,14607):i.removedDocuments.size>0&&(ae(o.hu,42227),o.hu=!1))}),await Zo(n,r,e)}catch(r){await ds(r)}}function My(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.Sa)g.va(l)&&(c=!0)}),c&&Yf(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function f2(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Se(q.comparator);o=o.insert(s,it.newNoDocument(s,X.min()));const l=re().add(s),u=new Du(X.min(),new Map,new Se(ne),o,l);await C1(r,u),r.du=r.du.remove(s),r.Au.delete(e),Zf(r)}else await fd(r.localStore,e,!1).then(()=>gd(r,e,n)).catch(ds)}async function p2(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await EP(n.localStore,e);P1(n,r,null),k1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,i)}catch(i){await ds(i)}}async function m2(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ae(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);P1(r,e,n),k1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,i)}catch(i){await ds(i)}}function k1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function P1(t,e,n){const r=Y(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function gd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||N1(t,r)})}function N1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Wf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Zf(t))}function jy(t,e,n){for(const r of n)r instanceof x1?(t.Ru.addReference(r.key,e),g2(t,r)):r instanceof A1?($(Jf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||N1(t,r.key)):K(19791,{wu:r})}function g2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||($(Jf,"New document in limbo: "+n),t.Eu.add(r),Zf(t))}function Zf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new q(Ee.fromString(e)),r=t.fu.next();t.Au.set(r,new s2(n)),t.du=t.du.insert(n,r),_1(t.remoteStore,new tr(ln(Lf(n.path)),r,"TargetPurposeLimboResolution",xu.ce))}}async function Zo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Bf.As(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(c,g=>O.forEach(g.Es,R=>f.persistence.referenceDelegate.addReference(m,g.targetId,R)).next(()=>O.forEach(g.ds,R=>f.persistence.referenceDelegate.removeReference(m,g.targetId,R)))))}catch(m){if(!fs(m))throw m;$(Hf,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const R=f.Ms.get(g),A=R.snapshotVersion,P=R.withLastLimboFreeSnapshotVersion(A);f.Ms=f.Ms.insert(g,P)}}}(r.localStore,s))}async function y2(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){$(Jf,"User change. New user:",e.toKey());const r=await m1(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.Ls)}}function v2(t,e){const n=Y(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function b1(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=C1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=v2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=f2.bind(null,e),e.Pu.H_=e2.bind(null,e.eventManager),e.Pu.yu=t2.bind(null,e.eventManager),e}function _2(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=p2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=m2.bind(null,e),e}class eu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return wP(this.persistence,new yP,e.initialUser,this.serializer)}Cu(e){return new p1($f.mi,this.serializer)}Du(e){return new RP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eu.provider={build:()=>new eu};class w2 extends eu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ae(this.persistence.referenceDelegate instanceof Jl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new nP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?pt.withCacheSize(this.cacheSizeBytes):pt.DEFAULT;return new p1(r=>Jl.mi(r,n),this.serializer)}}class yd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>My(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=y2.bind(null,this.syncEngine),await QP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YP}()}createDatastore(e){const n=Vu(e.databaseInfo.databaseId),r=function(s){return new bP(s)}(e.databaseInfo);return function(s,o,l,u){return new LP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new jP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>My(this.syncEngine,n,0),function(){return Ny.v()?new Ny:new CP}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const m=new o2(i,s,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);$(ti,"RemoteStore shutting down."),s.Ea.add(5),await Jo(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}yd.provider={build:()=>new yd};/**
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
 */class E2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Tr="FirestoreClient";class T2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=kf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(Tr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Tr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xc(t,e){t.asyncQueue.verifyOperationInProgress(),$(Tr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await m1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await I2(t);$(Tr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dy(e.remoteStore,i)),t._onlineComponents=e}async function I2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Tr,"Using user provided OfflineComponentProvider");try{await Xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Zi("Error using user provided cache. Falling back to memory cache: "+n),await Xc(t,new eu)}}else $(Tr,"Using default OfflineComponentProvider"),await Xc(t,new w2(void 0));return t._offlineComponents}async function D1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Tr,"Using user provided OnlineComponentProvider"),await Fy(t,t._uninitializedComponentsProvider._online)):($(Tr,"Using default OnlineComponentProvider"),await Fy(t,new yd))),t._onlineComponents}function S2(t){return D1(t).then(e=>e.syncEngine)}async function x2(t){const e=await D1(t),n=e.eventManager;return n.onListen=a2.bind(null,e.syncEngine),n.onUnlisten=c2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=l2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=h2.bind(null,e.syncEngine),n}function A2(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new E2({next:g=>{f.Nu(),o.enqueueAndForget(()=>ZP(s,m));const R=g.docs.has(l);!R&&g.fromCache?c.reject(new W(M.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&g.fromCache&&u&&u.source==="server"?c.reject(new W(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new n2(Lf(l.path),f,{includeMetadataChanges:!0,qa:!0});return JP(s,m)}(await x2(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function V1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Uy=new Map;/**
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
 */const O1="firestore.googleapis.com",zy=!0;class $y{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=O1,this.ssl=zy}else this.host=e.host,this.ssl=e.ssl??zy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=f1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<eP)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=V1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ep{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $y({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $y(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RC;switch(r.type){case"firstParty":return new NC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Uy.get(n);r&&($("ComponentProvider","Removing Datastore"),Uy.delete(n),r.terminate())}(this),Promise.resolve()}}function R2(t,e,n,r={}){var c;t=ei(t,ep);const i=ls(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Rw(`https://${l}`),Cw("Firestore",!0)),s.host!==O1&&s.host!==l&&Zi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!gr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=nt.MOCK_USER;else{f=LS(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new nt(g)}t._authCredentials=new CC(new x0(f,m))}}/**
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
 */class tp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tp(this.firestore,e,this._query)}}class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Qo(n,Me._jsonSchema))return new Me(e,r||null,new q(Ee.fromString(n.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:be("string",Me._jsonSchemaVersion),referencePath:be("string")};class jo extends tp{constructor(e,n,r){super(e,n,Lf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new q(e))}withConverter(e){return new jo(this.firestore,e,this._path)}}function yi(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=kf.newId()),MC("doc","path",e),t instanceof ep){const r=Ee.fromString(e,...n);return ny(r),new Me(t,null,new q(r))}{if(!(t instanceof Me||t instanceof jo))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return ny(r),new Me(t.firestore,t instanceof jo?t.converter:null,new q(r))}}/**
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
 */const By="AsyncQueue";class Hy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new y1(this,"async_queue_retry"),this._c=()=>{const r=Qc();r&&$(By,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new fr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!fs(e))throw e;$(By,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ln("INTERNAL UNHANDLED ERROR: ",Wy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Qf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:Wy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Wy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Mu extends ep{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Hy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hy(e),this._firestoreClient=void 0,await e}}}function C2(t,e){const n=typeof t=="object"?t:_f(),r=typeof t=="string"?t:Wl,i=ai(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=VS("firestore");s&&R2(i,...s)}return i}function L1(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||k2(t),t._firestoreClient}function k2(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,f){return new QC(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,V1(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new T2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(Qe.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ot(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qo(e,Ot._jsonSchema))return Ot.fromBase64String(e.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:be("string",Ot._jsonSchemaVersion),bytes:be("string")};/**
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
 */class ju{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class np{constructor(e){this._methodName=e}}/**
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
 */class hn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(Qo(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:be("string",hn._jsonSchemaVersion),latitude:be("number"),longitude:be("number")};/**
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
 */class dn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qo(e,dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new dn(e.vectorValues);throw new W(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dn._jsonSchemaVersion="firestore/vectorValue/1.0",dn._jsonSchema={type:be("string",dn._jsonSchemaVersion),vectorValues:be("object")};/**
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
 */const P2=/^__.*__$/;class N2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xo(e,this.data,n,this.fieldTransforms)}}class M1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function j1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:t})}}class rp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new rp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return tu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(j1(this.Ac)&&P2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class b2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vu(e)}Cc(e,n,r,i=!1){return new rp({Ac:e,methodName:n,Dc:r,path:qe.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function F1(t){const e=t._freezeSettings(),n=Vu(t._databaseId);return new b2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function D2(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);ip("Data must be an object, but it was:",o,r);const l=U1(r,o);let u,c;if(s.merge)u=new At(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=vd(e,m,n);if(!o.contains(g))throw new W(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);$1(f,g)||f.push(g)}u=new At(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new N2(new gt(l),u,c)}class Fu extends np{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fu}}function V2(t,e,n,r){const i=t.Cc(1,e,n);ip("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();Rr(r,(u,c)=>{const f=sp(e,u,n);c=Fe(c);const m=i.yc(f);if(c instanceof Fu)s.push(f);else{const g=Uu(c,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new At(s);return new M1(o,l,i.fieldTransforms)}function O2(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[vd(e,r,n)],u=[i];if(s.length%2!=0)throw new W(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(vd(e,s[g])),u.push(s[g+1]);const c=[],f=gt.empty();for(let g=l.length-1;g>=0;--g)if(!$1(c,l[g])){const R=l[g];let A=u[g];A=Fe(A);const P=o.yc(R);if(A instanceof Fu)c.push(R);else{const D=Uu(A,P);D!=null&&(c.push(R),f.set(R,D))}}const m=new At(c);return new M1(f,m,o.fieldTransforms)}function Uu(t,e){if(z1(t=Fe(t)))return ip("Unsupported field value:",e,t),U1(t,e);if(t instanceof np)return function(r,i){if(!j1(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Uu(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:Yl(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yl(i.serializer,s)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:o1(i.serializer,r._byteString)};if(r instanceof Me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Uf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof dn)return function(o,l){return{mapValue:{fields:{[V0]:{stringValue:L0},[ql]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Mf(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Pf(r)}`)}(t,e)}function U1(t,e){const n={};return C0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,i)=>{const s=Uu(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function z1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof hn||t instanceof Ot||t instanceof Me||t instanceof np||t instanceof dn)}function ip(t,e,n){if(!z1(n)||!A0(n)){const r=Pf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function vd(t,e,n){if((e=Fe(e))instanceof ju)return e._internalPath;if(typeof e=="string")return sp(t,e);throw tu("Field path arguments must be of type string or ",t,!1,void 0,n)}const L2=new RegExp("[~\\*/\\[\\]]");function sp(t,e,n){if(e.search(L2)>=0)throw tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ju(...e.split("."))._internalPath}catch{throw tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function $1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class B1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new M2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(H1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class M2 extends B1{data(){return super.data()}}function H1(t,e){return typeof e=="string"?sp(t,e):e instanceof ju?e._internalPath:e._delegate._internalPath}class j2{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[ql].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ce(o.doubleValue));return new dn(n)}convertGeoPoint(e){return new hn(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ru(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=vr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);ae(d1(r),9688,{name:e});const i=new Vo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Ln(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function F2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Gs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wr extends B1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(H1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Wr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Wr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wr._jsonSchema={type:be("string",Wr._jsonSchemaVersion),bundleSource:be("string","DocumentSnapshot"),bundleName:be("string"),bundle:be("string")};class cl extends Wr{data(e={}){return super.data(e)}}class co{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Gs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cl(this._firestore,this._userDataWriter,r.key,r,new Gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new cl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Gs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new cl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Gs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:U2(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=co._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=kf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function U2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */function z2(t){t=ei(t,Me);const e=ei(t.firestore,Mu);return A2(L1(e),t._key).then(n=>B2(e,t,n))}co._jsonSchemaVersion="firestore/querySnapshot/1.0",co._jsonSchema={type:be("string",co._jsonSchemaVersion),bundleSource:be("string","QuerySnapshot"),bundleName:be("string"),bundle:be("string")};class $2 extends j2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function qy(t,e,n){t=ei(t,Me);const r=ei(t.firestore,Mu),i=F2(t.converter,e);return W1(r,[D2(F1(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,un.none())])}function Yc(t,e,n,...r){t=ei(t,Me);const i=ei(t.firestore,Mu),s=F1(i);let o;return o=typeof(e=Fe(e))=="string"||e instanceof ju?O2(s,"updateDoc",t._key,e,n,r):V2(s,"updateDoc",t._key,e),W1(i,[o.toMutation(t._key,un.exists(!0))])}function W1(t,e){return function(r,i){const s=new fr;return r.asyncQueue.enqueueAndForget(async()=>d2(await S2(r),i,s)),s.promise}(L1(t),e)}function B2(t,e,n){const r=n.docs.get(e._key),i=new $2(t);return new Wr(t,i,e._key,r,new Gs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){hs=i})(us),fn(new Xt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Mu(new kC(r.getProvider("auth-internal")),new bC(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vo(c.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),jt(Jg,Zg,e),jt(Jg,Zg,"esm2020")})();var H2="firebase",W2="12.2.1";/**
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
 */jt(H2,W2,"app");const q1="@firebase/installations",op="0.6.19";/**
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
 */const G1=1e4,K1=`w:${op}`,Q1="FIS_v2",q2="https://firebaseinstallations.googleapis.com/v1",G2=60*60*1e3,K2="installations",Q2="Installations";/**
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
 */const X2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ni=new oi(K2,Q2,X2);function X1(t){return t instanceof Jt&&t.code.includes("request-failed")}/**
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
 */function Y1({projectId:t}){return`${q2}/projects/${t}/installations`}function J1(t){return{token:t.token,requestStatus:2,expiresIn:J2(t.expiresIn),creationTime:Date.now()}}async function Z1(t,e){const r=(await e.json()).error;return ni.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function eE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Y2(t,{refreshToken:e}){const n=eE(t);return n.append("Authorization",Z2(e)),n}async function tE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function J2(t){return Number(t.replace("s","000"))}function Z2(t){return`${Q1} ${t}`}/**
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
 */async function eN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Y1(t),i=eE(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Q1,appId:t.appId,sdkVersion:K1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await tE(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:J1(c.authToken)}}else throw await Z1("Create Installation",u)}/**
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
 */function nE(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function tN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nN=/^[cdef][\w-]{21}$/,_d="";function rN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=iN(t);return nN.test(n)?n:_d}catch{return _d}}function iN(t){return tN(t).substr(0,22)}/**
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
 */function zu(t){return`${t.appName}!${t.appId}`}/**
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
 */const rE=new Map;function iE(t,e){const n=zu(t);sE(n,e),sN(n,e)}function sE(t,e){const n=rE.get(t);if(n)for(const r of n)r(e)}function sN(t,e){const n=oN();n&&n.postMessage({key:t,fid:e}),aN()}let $r=null;function oN(){return!$r&&"BroadcastChannel"in self&&($r=new BroadcastChannel("[Firebase] FID Change"),$r.onmessage=t=>{sE(t.data.key,t.data.fid)}),$r}function aN(){rE.size===0&&$r&&($r.close(),$r=null)}/**
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
 */const lN="firebase-installations-database",uN=1,ri="firebase-installations-store";let Jc=null;function ap(){return Jc||(Jc=Vw(lN,uN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ri)}}})),Jc}async function nu(t,e){const n=zu(t),i=(await ap()).transaction(ri,"readwrite"),s=i.objectStore(ri),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&iE(t,e.fid),e}async function oE(t){const e=zu(t),r=(await ap()).transaction(ri,"readwrite");await r.objectStore(ri).delete(e),await r.done}async function $u(t,e){const n=zu(t),i=(await ap()).transaction(ri,"readwrite"),s=i.objectStore(ri),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&iE(t,l.fid),l}/**
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
 */async function lp(t){let e;const n=await $u(t.appConfig,r=>{const i=cN(r),s=hN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===_d?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function cN(t){const e=t||{fid:rN(),registrationStatus:0};return aE(e)}function hN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ni.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=dN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fN(t)}:{installationEntry:e}}async function dN(t,e){try{const n=await eN(t,e);return nu(t.appConfig,n)}catch(n){throw X1(n)&&n.customData.serverCode===409?await oE(t.appConfig):await nu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function fN(t){let e=await Gy(t.appConfig);for(;e.registrationStatus===1;)await nE(100),e=await Gy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await lp(t);return r||n}return e}function Gy(t){return $u(t,e=>{if(!e)throw ni.create("installation-not-found");return aE(e)})}function aE(t){return pN(t)?{fid:t.fid,registrationStatus:0}:t}function pN(t){return t.registrationStatus===1&&t.registrationTime+G1<Date.now()}/**
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
 */async function mN({appConfig:t,heartbeatServiceProvider:e},n){const r=gN(t,n),i=Y2(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:K1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await tE(()=>fetch(r,l));if(u.ok){const c=await u.json();return J1(c)}else throw await Z1("Generate Auth Token",u)}function gN(t,{fid:e}){return`${Y1(t)}/${e}/authTokens:generate`}/**
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
 */async function up(t,e=!1){let n;const r=await $u(t.appConfig,s=>{if(!lE(s))throw ni.create("not-registered");const o=s.authToken;if(!e&&_N(o))return s;if(o.requestStatus===1)return n=yN(t,e),s;{if(!navigator.onLine)throw ni.create("app-offline");const l=EN(s);return n=vN(t,l),l}});return n?await n:r.authToken}async function yN(t,e){let n=await Ky(t.appConfig);for(;n.authToken.requestStatus===1;)await nE(100),n=await Ky(t.appConfig);const r=n.authToken;return r.requestStatus===0?up(t,e):r}function Ky(t){return $u(t,e=>{if(!lE(e))throw ni.create("not-registered");const n=e.authToken;return TN(n)?{...e,authToken:{requestStatus:0}}:e})}async function vN(t,e){try{const n=await mN(t,e),r={...e,authToken:n};return await nu(t.appConfig,r),n}catch(n){if(X1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await oE(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await nu(t.appConfig,r)}throw n}}function lE(t){return t!==void 0&&t.registrationStatus===2}function _N(t){return t.requestStatus===2&&!wN(t)}function wN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+G2}function EN(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function TN(t){return t.requestStatus===1&&t.requestTime+G1<Date.now()}/**
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
 */async function IN(t){const e=t,{installationEntry:n,registrationPromise:r}=await lp(e);return r?r.catch(console.error):up(e).catch(console.error),n.fid}/**
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
 */async function SN(t,e=!1){const n=t;return await xN(n),(await up(n,e)).token}async function xN(t){const{registrationPromise:e}=await lp(t);e&&await e}/**
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
 */function AN(t){if(!t||!t.options)throw Zc("App Configuration");if(!t.name)throw Zc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Zc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Zc(t){return ni.create("missing-app-config-values",{valueName:t})}/**
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
 */const uE="installations",RN="installations-internal",CN=t=>{const e=t.getProvider("app").getImmediate(),n=AN(e),r=ai(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},kN=t=>{const e=t.getProvider("app").getImmediate(),n=ai(e,uE).getImmediate();return{getId:()=>IN(n),getToken:i=>SN(n,i)}};function PN(){fn(new Xt(uE,CN,"PUBLIC")),fn(new Xt(RN,kN,"PRIVATE"))}PN();jt(q1,op);jt(q1,op,"esm2020");/**
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
 */const ru="analytics",NN="firebase_id",bN="origin",DN=60*1e3,VN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Et=new Eu("@firebase/analytics");/**
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
 */const ON={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new oi("analytics","Analytics",ON);/**
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
 */function LN(t){if(!t.startsWith(cp)){const e=Ct.create("invalid-gtag-resource",{gtagURL:t});return Et.warn(e.message),""}return t}function cE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function MN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function jN(t,e){const n=MN("firebase-js-sdk-policy",{createScriptURL:LN}),r=document.createElement("script"),i=`${cp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function FN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function UN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await cE(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Et.error(l)}t("config",i,s)}async function zN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await cE(n);for(const u of o){const c=l.find(m=>m.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Et.error(s)}}function $N(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await zN(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await UN(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Et.error(l)}}return i}function BN(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=$N(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function HN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(cp)&&n.src.includes(t))return n;return null}/**
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
 */const WN=30,qN=1e3;class GN{constructor(e={},n=qN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hE=new GN;function KN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function QN(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:KN(n)},i=VN.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function XN(t,e=hE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ct.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ct.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new ZN;return setTimeout(async()=>{l.abort()},DN),dE({appId:r,apiKey:i,measurementId:s},o,l,e)}async function dE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=hE){var l;const{appId:s,measurementId:o}=t;try{await YN(r,e)}catch(u){if(o)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await QN(t);return i.deleteThrottleMetadata(s),u}catch(u){const c=u;if(!JN(c)){if(i.deleteThrottleMetadata(s),o)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw u}const f=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?Ig(n,i.intervalMillis,WN):Ig(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),Et.debug(`Calling attemptFetch again in ${f} millis`),dE(t,m,r,i)}}function YN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function JN(t){if(!(t instanceof Jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ZN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function eb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}/**
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
 */async function tb(){if(Pw())try{await Nw()}catch(t){return Et.warn(Ct.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Et.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nb(t,e,n,r,i,s,o){const l=XN(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Et.error(g)),e.push(l);const u=tb().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);HN(s)||jN(s,c.measurementId),i("js",new Date);const m=(o==null?void 0:o.config)??{};return m[bN]="firebase",m.update=!0,f!=null&&(m[NN]=f),i("config",c.measurementId,m),c.measurementId}/**
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
 */class rb{constructor(e){this.app=e}_delete(){return delete ho[this.app.options.appId],Promise.resolve()}}let ho={},Qy=[];const Xy={};let eh="dataLayer",ib="gtag",Yy,fE,Jy=!1;function sb(){const t=[];if(kw()&&t.push("This is a browser extension environment."),WS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:e});Et.warn(n.message)}}function ob(t,e,n){sb();const r=t.options.appId;if(!r)throw Ct.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(ho[r]!=null)throw Ct.create("already-exists",{id:r});if(!Jy){FN(eh);const{wrappedGtag:s,gtagCore:o}=BN(ho,Qy,Xy,eh,ib);fE=s,Yy=o,Jy=!0}return ho[r]=nb(t,Qy,Xy,e,Yy,eh,n),new rb(t)}function ab(t=_f()){t=Fe(t);const e=ai(t,ru);return e.isInitialized()?e.getImmediate():lb(t)}function lb(t,e={}){const n=ai(t,ru);if(n.isInitialized()){const i=n.getImmediate();if(gr(e,n.getOptions()))return i;throw Ct.create("already-initialized")}return n.initialize({options:e})}function ub(t,e,n,r){t=Fe(t),eb(fE,ho[t.app.options.appId],e,n,r).catch(i=>Et.error(i))}const Zy="@firebase/analytics",ev="0.10.18";function cb(){fn(new Xt(ru,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ob(r,i,n)},"PUBLIC")),fn(new Xt("analytics-internal",t,"PRIVATE")),jt(Zy,ev),jt(Zy,ev,"esm2020");function t(e){try{const n=e.getProvider(ru).getImmediate();return{logEvent:(r,i,s)=>ub(n,r,i,s)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}}}cb();console.log("🚀 === DEBUT FIREBASE.TS ===");console.log("🧪 FIREBASE - Test de log dans firebase.ts");console.log("🚀 Environment:","production");console.log("🚀 Base URL:","/");const Bu={apiKey:"AIzaSyDRoNJkXmR7C3dt142AAz_hGCPpfKxkXxE",authDomain:"swear-30c84.firebaseapp.com",projectId:"swear-30c84",storageBucket:"swear-30c84.firebasestorage.app",messagingSenderId:"763991623859",appId:"1:763991623859:web:fd3ea15c87ae4562c608c6",measurementId:"G-2M6CF3JFJ8"};console.log("🚀 Firebase config:",Bu);console.log("🚀 Initializing Firebase app...");const hp=Ow(Bu);console.log("🔥 Firebase app initialized");console.log("🔥 Project ID:",Bu.projectId);console.log("🔥 Auth Domain:",Bu.authDomain);const Ks=xC(hp);console.log("🔐 Firebase Auth initialized");console.log("🔐 Auth current user:",Ks.currentUser);const Mr=C2(hp);console.log("🗄️ Firestore initialized");console.log("🗄️ Firestore app:",Mr.app.name);let tv=null;try{tv=ab(hp),console.log("📊 Analytics initialized:",tv)}catch(t){console.warn("⚠️ Analytics initialization failed (normal in development):",t)}const pE=te.createContext(void 0),hi=()=>{const t=te.useContext(pE);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},hb=({children:t})=>{const[e,n]=te.useState(null),[r,i]=te.useState(!0),[s,o]=te.useState(null),l=w=>{switch(w){case"starter":return 25;case"pro":return 150;default:return 3}},u=()=>{o(null)},c=async w=>{var _,E,b,L;try{console.log("🔍 Loading user data for:",w.uid);const j=await z2(yi(Mr,"users",w.uid));if(j.exists()){const T=j.data();console.log("📊 User data from Firestore:",T);const v={uid:w.uid,email:w.email,displayName:w.displayName,firstName:T.firstName||((_=T.displayName)==null?void 0:_.split(" ")[0])||"",lastName:T.lastName||((E=T.displayName)==null?void 0:E.split(" ")[1])||"",hasPaid:T.hasPaid||!1,firestoreId:w.uid,subscription:T.subscription||{plan:"free",creditsRemaining:3,maxCredits:3}};console.log("✅ Auth user created:",v),n(v)}else{console.log("📝 Creating new user document");const T={email:w.email,displayName:w.displayName,firstName:((b=w.displayName)==null?void 0:b.split(" ")[0])||"",lastName:((L=w.displayName)==null?void 0:L.split(" ")[1])||"",hasPaid:!1,subscription:{plan:"free",creditsRemaining:3,maxCredits:3,renewalDate:new Date},createdAt:new Date};await qy(yi(Mr,"users",w.uid),T);const v={uid:w.uid,email:w.email,displayName:w.displayName,firstName:T.firstName,lastName:T.lastName,hasPaid:!1,firestoreId:w.uid,subscription:T.subscription};n(v)}}catch(j){console.error("Error loading user data:",j),o("Erreur lors du chargement des données utilisateur");const T={uid:w.uid,email:w.email,displayName:w.displayName,hasPaid:!1,firestoreId:w.uid,subscription:{plan:"free",creditsRemaining:3,maxCredits:3}};n(T)}};te.useEffect(()=>(console.log("🔄 Setting up auth state listener"),fR(Ks,async _=>{console.log("🔐 Auth state changed:",_?"User logged in":"User logged out"),_?await c(_):n(null),i(!1)})),[]);const D={user:e,isAuthenticated:!!e,loading:r,error:s,login:async w=>{o(null),i(!0);try{console.log("🔐 Logging in user:",w.email);const{user:_}=await lR(Ks,w.email,w.password);await c(_),console.log("✅ Login successful")}catch(_){throw console.error("Login error:",_),_ instanceof Error?_.message.includes("user-not-found")?o("Aucun compte trouvé avec cet email"):_.message.includes("wrong-password")?o("Mot de passe incorrect"):_.message.includes("invalid-email")?o("Format d'email invalide"):o("Erreur de connexion"):o("Erreur de connexion"),_}finally{i(!1)}},register:async w=>{o(null),i(!0);try{console.log("📝 Registering user:",w.email);const{user:_}=await aR(Ks,w.email,w.password),E=`${w.firstName} ${w.lastName}`;await cR(_,{displayName:E});const b={email:_.email,displayName:E,firstName:w.firstName,lastName:w.lastName,hasPaid:!1,subscription:{plan:"free",creditsRemaining:3,maxCredits:3,renewalDate:new Date},createdAt:new Date};await qy(yi(Mr,"users",_.uid),b);const L={uid:_.uid,email:_.email,displayName:E,firstName:w.firstName,lastName:w.lastName,hasPaid:!1,firestoreId:_.uid,subscription:b.subscription};n(L),console.log("✅ Registration successful")}catch(_){throw console.error("Registration error:",_),_ instanceof Error?o(_.message):o("Erreur lors de l'inscription"),_}finally{i(!1)}},logout:async()=>{try{console.log("🚪 Logging out user"),await pR(Ks),n(null),o(null),console.log("✅ Logout successful")}catch(w){throw console.error("Logout error:",w),o("Erreur lors de la déconnexion"),w}},clearError:u,updateUserPaymentStatus:async(w,_="free")=>{var E;if(e)try{console.log(`💳 Updating payment status: ${w}, plan: ${_}`),_==="free"&&e.hasPaid&&console.log("🚫 Annulation d'abonnement - passage au plan gratuit");const b=l(_),L={plan:_,creditsRemaining:b,maxCredits:b,renewalDate:new Date,lastUpdated:new Date,..._==="free"&&e.hasPaid?{downgradedAt:new Date,previousPlan:((E=e.subscription)==null?void 0:E.plan)||"unknown"}:{}};await Yc(yi(Mr,"users",e.uid),{hasPaid:w,subscription:L}),n(j=>j?{...j,hasPaid:w,subscription:L}:null),console.log(`✅ Statut utilisateur mis à jour: ${w?"payant":"gratuit"}, plan: ${_}`),_==="free"&&!w&&console.log("📉 Utilisateur remis en plan gratuit avec 3 crédits")}catch(b){throw console.error("Error updating payment status:",b),o("Erreur lors de la mise à jour du statut de paiement"),b}},decrementCredits:async()=>{if(!e||!e.subscription)return!1;if(e.subscription.creditsRemaining<=0)return console.log("❌ Aucun crédit disponible pour déduction"),!1;try{console.log(`💳 Déduction d'un crédit (${e.subscription.creditsRemaining} → ${e.subscription.creditsRemaining-1})`);const w=e.subscription.creditsRemaining-1;return await Yc(yi(Mr,"users",e.uid),{"subscription.creditsRemaining":w}),n(_=>_?{..._,subscription:{..._.subscription,creditsRemaining:w}}:null),console.log(`✅ Crédit déduit avec succès: ${w} crédits restants`),!0}catch(w){return console.error("❌ Erreur lors de la déduction des crédits:",w),o("Erreur lors de la déduction des crédits"),!1}},refundCredits:async()=>{if(!e||!e.subscription)return!1;try{console.log(`💰 Remboursement d'un crédit (${e.subscription.creditsRemaining} → ${e.subscription.creditsRemaining+1})`);const w=e.subscription.creditsRemaining+1;return await Yc(yi(Mr,"users",e.uid),{"subscription.creditsRemaining":w}),n(_=>_?{..._,subscription:{..._.subscription,creditsRemaining:w}}:null),console.log(`✅ Crédit remboursé avec succès: ${w} crédits restants`),!0}catch(w){return console.error("❌ Erreur lors du remboursement des crédits:",w),o("Erreur lors du remboursement des crédits"),!1}}};return p.jsx(pE.Provider,{value:D,children:t})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var db={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ge=(t,e)=>{const n=te.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>te.createElement("svg",{ref:f,...db,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${fb(t)}`,l].join(" "),...c},[...e.map(([m,g])=>te.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=ge("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=ge("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=ge("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=ge("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=ge("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=ge("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=ge("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=ge("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=ge("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=ge("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=ge("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=ge("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=ge("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=ge("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=ge("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=ge("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=ge("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=ge("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=ge("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=ge("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=ge("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Pb=({onShowLogin:t,onShowPricing:e,onGoHome:n})=>{var f,m,g,R,A,P;const[r,i]=te.useState(!1),{isAuthenticated:s,user:o,logout:l}=hi(),u=()=>{l(),i(!1)},c=()=>{n?n():window.location.reload()};return p.jsx("header",{className:"bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50",children:p.jsxs("div",{className:"container mx-auto px-4 py-4 max-w-6xl",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("button",{onClick:c,className:"flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 cursor-pointer",children:[p.jsx("div",{className:"p-2 bg-white rounded-xl shadow-lg",children:p.jsx(kr,{className:"w-6 h-6 text-vinted-500"})}),p.jsx("h1",{className:"text-xl font-bold text-white",children:"Swear"})]}),p.jsxs("div",{className:"flex items-center space-x-6",children:[p.jsxs("nav",{className:"hidden md:flex items-center space-x-6 text-sm text-white/80",children:[p.jsx("a",{href:"#contact",className:"hover:text-white transition-colors duration-200 cursor-pointer",children:"Contact"}),p.jsx("button",{onClick:e,className:"hover:text-white transition-colors duration-200 cursor-pointer",children:"Prix"}),s?p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsxs("span",{className:"text-white/90 text-sm",children:["Bonjour, ",o==null?void 0:o.firstName,(o==null?void 0:o.hasPaid)&&p.jsx("span",{className:"ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full",children:((f=o.subscription)==null?void 0:f.plan)==="pro"?"Pro":((m=o.subscription)==null?void 0:m.plan)==="starter"?"Starter":"Premium"})]}),p.jsx("button",{onClick:()=>window.location.reload(),className:"text-xs text-white/60 hover:text-white/80 transition-colors",title:"Rafraîchir les données",children:"🔄"}),(o==null?void 0:o.hasPaid)&&p.jsxs("div",{className:"text-xs text-white/60",children:[((g=o.subscription)==null?void 0:g.creditsRemaining)||0," crédits"]}),p.jsxs("button",{onClick:u,className:"flex items-center hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20",title:"Se déconnecter",children:[p.jsx(iv,{className:"w-4 h-4 mr-2"}),"Déconnexion"]})]}):p.jsxs("button",{onClick:t,className:"flex items-center hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20",children:[p.jsx(wd,{className:"w-4 h-4 mr-2"}),"Connexion"]})]}),p.jsx("button",{onClick:()=>i(!r),className:"md:hidden flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200",children:r?p.jsx(Cb,{className:"w-5 h-5 text-white"}):p.jsx(Ib,{className:"w-5 h-5 text-white"})})]})]}),r&&p.jsx("div",{className:"md:hidden mt-4 py-4 border-t border-white/20",children:p.jsxs("nav",{className:"flex flex-col space-y-4",children:[p.jsx("a",{href:"#contact",className:"text-white/80 hover:text-white transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10",onClick:()=>i(!1),children:"Contact"}),p.jsx("button",{onClick:()=>{e==null||e(),i(!1)},className:"text-white/80 hover:text-white transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 cursor-pointer",children:"Prix"}),s?p.jsxs("div",{className:"space-y-2",children:[p.jsxs("div",{className:"text-white/90 py-2 px-4",children:["Bonjour, ",o==null?void 0:o.firstName," !",(o==null?void 0:o.hasPaid)&&p.jsx("span",{className:"ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full",children:((R=o.subscription)==null?void 0:R.plan)==="pro"?"Pro":((A=o.subscription)==null?void 0:A.plan)==="starter"?"Starter":"Premium"}),(o==null?void 0:o.hasPaid)&&p.jsxs("div",{className:"text-xs text-white/60 mt-1",children:[((P=o.subscription)==null?void 0:P.creditsRemaining)||0," crédits restants"]})]}),p.jsxs("button",{onClick:u,className:"flex items-center text-white/80 hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 text-left w-full",children:[p.jsx(iv,{className:"w-4 h-4 mr-2"}),"Se déconnecter"]})]}):p.jsxs("button",{className:"flex items-center text-white/80 hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 text-left",onClick:()=>{t==null||t(),i(!1)},children:[p.jsx(wd,{className:"w-4 h-4 mr-2"}),"Connexion"]})]})})]})})},Nb=()=>p.jsx("footer",{className:"bg-black/20 backdrop-blur-lg text-white py-12 mt-20 border-t border-white/10",children:p.jsxs("div",{className:"container mx-auto px-4 max-w-6xl",children:[p.jsxs("div",{className:"grid md:grid-cols-4 gap-8",children:[p.jsxs("div",{className:"col-span-2",children:[p.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[p.jsx("div",{className:"p-2 bg-white rounded-xl shadow-lg",children:p.jsx(kr,{className:"w-5 h-5 text-vinted-500"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-bold text-lg",children:"Swear"}),p.jsx("p",{className:"text-white/60 text-sm",children:"Photos Mode Professionnelles"})]})]}),p.jsx("p",{className:"text-white/80 leading-relaxed max-w-md",children:"Transformez vos annonces mode avec la photographie professionnelle alimentée par l'IA. Parfait pour les vendeurs Vinted qui veulent se démarquer et vendre plus rapidement."})]}),p.jsxs("div",{children:[p.jsx("h4",{className:"font-semibold mb-4",children:"Fonctionnalités"}),p.jsxs("ul",{className:"space-y-2 text-white/70",children:[p.jsx("li",{children:"Placement IA sur Mannequin"}),p.jsx("li",{children:"Traitement Haute Qualité"}),p.jsx("li",{children:"Téléchargements Instantanés"}),p.jsx("li",{children:"Optimisé Mobile"})]})]}),p.jsxs("div",{children:[p.jsx("h4",{className:"font-semibold mb-4",children:"Support"}),p.jsxs("ul",{className:"space-y-2 text-white/70",children:[p.jsx("li",{children:"FAQ"}),p.jsx("li",{children:"Nous Contacter"}),p.jsx("li",{children:"Guide de Traitement"}),p.jsx("li",{children:"Meilleures Pratiques"})]})]})]}),p.jsxs("div",{className:"border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between",children:[p.jsx("p",{className:"text-white/60 text-sm",children:"© 2025 Swear. Tous droits réservés."}),p.jsxs("p",{className:"text-white/60 text-sm flex items-center mt-4 md:mt-0",children:["Fait avec ",p.jsx(_b,{className:"w-4 h-4 mx-1 text-red-400"})," pour les vendeurs mode"]})]})]})}),bb=({onImageUpload:t,isProcessing:e,processingError:n,onShowLogin:r,onShowPricing:i})=>{var P,D,w,_;const[s,o]=te.useState(!1),l=hl.useRef(null),{isAuthenticated:u,user:c}=hi(),[f,m]=te.useState({gender:"femme",size:"m"}),g=te.useCallback(E=>{E.preventDefault(),o(!1);const L=Array.from(E.dataTransfer.files).find(j=>j.type.startsWith("image/"));L&&A(L).then(({displayUrl:j,processedFile:T})=>{t(j,L.name,T,f)})},[t,f]),R=E=>{var L,j;const b=(L=E.target.files)==null?void 0:L[0];if(b&&b.type.startsWith("image/")){if(!u){r==null||r();return}if(!(c!=null&&c.hasPaid)){console.log("❌ Utilisateur non payant, redirection vers pricing"),i==null||i();return}if((((j=c==null?void 0:c.subscription)==null?void 0:j.creditsRemaining)||0)<=0){console.log("💳 Plus de crédits disponibles, redirection vers pricing"),i==null||i();return}A(b).then(({displayUrl:T,processedFile:v})=>{t(T,b.name,v,f)})}},A=E=>new Promise(b=>{const L=document.createElement("canvas"),j=L.getContext("2d"),T=new Image;if(!j){const v=URL.createObjectURL(E);b({displayUrl:v,processedFile:E});return}T.onload=()=>{L.width=300,L.height=400,j.fillStyle="#ffffff",j.fillRect(0,0,300,400);const x=T.width/T.height,C=300/400;let k,S,De,ft;x>C?(S=400,k=400*x):(k=300,S=300/x),De=(300-k)/2,ft=(400-S)/2,j.drawImage(T,De,ft,k,S),L.toBlob(Tt=>{if(Tt){const ve=URL.createObjectURL(Tt),z=new File([Tt],E.name,{type:"image/jpeg",lastModified:Date.now()});b({displayUrl:ve,processedFile:z})}else{const ve=URL.createObjectURL(E);b({displayUrl:ve,processedFile:E})}},"image/jpeg",.9)},T.onerror=()=>{const v=URL.createObjectURL(E);b({displayUrl:v,processedFile:E})},T.src=URL.createObjectURL(E)});return p.jsxs("div",{className:"max-w-4xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg",children:"Donnez vie à vos vêtements en quelques secondes"}),p.jsx("p",{className:"text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow",children:"Ne perdez plus de ventes à cause de photos qui ne donnent pas envie. Avec Swear, générez en un clic des images professionnelles qui mettent vos vêtements en valeur et boostent vos ventes"}),p.jsxs("div",{className:"hidden sm:flex flex-col sm:flex-row items-center justify-center gap-6 mt-8",children:[p.jsxs("div",{className:"flex items-center text-white/90",children:[p.jsx("div",{className:"w-2 h-2 bg-white rounded-full mr-3"}),p.jsx("span",{className:"text-sm font-medium",children:"Rendus ultra-réalistes"})]}),p.jsxs("div",{className:"flex items-center text-white/90",children:[p.jsx("div",{className:"w-2 h-2 bg-white rounded-full mr-3"}),p.jsx("span",{className:"text-sm font-medium",children:"Génération en moins de 10s"})]}),p.jsxs("div",{className:"flex items-center text-white/90",children:[p.jsx("div",{className:"w-2 h-2 bg-white rounded-full mr-3"}),p.jsx("span",{className:"text-sm font-medium",children:"Adapté à Vinted & marketplaces"})]})]})]}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-12",children:[p.jsxs("button",{onClick:r,className:"flex items-center justify-center px-8 py-4 bg-white text-vinted-500 font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-xl hover:scale-105 cursor-pointer",children:[p.jsx("span",{className:"mr-2",children:"🎯"}),"Essayer gratuitement"]}),p.jsxs("button",{onClick:i,className:"flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-200 shadow-xl hover:scale-105 cursor-pointer",children:[p.jsx("span",{className:"mr-2",children:"⭐"}),"S'abonner"]})]}),n&&p.jsx("div",{className:"max-w-2xl mx-auto mb-8",children:p.jsx("div",{className:"bg-red-500/20 border border-red-500/30 rounded-xl p-4 backdrop-blur-lg",children:p.jsxs("div",{className:"flex items-center",children:[p.jsx(pb,{className:"w-5 h-5 text-red-400 mr-3"}),p.jsxs("div",{children:[p.jsx("h4",{className:"text-red-400 font-medium",children:"Erreur de traitement"}),p.jsx("p",{className:"text-red-300 text-sm",children:n}),p.jsx("p",{className:"text-red-200 text-xs mt-2",children:"💡 En cas de problème de connexion, l'application passe automatiquement en mode démonstration"})]})]})})}),p.jsxs("div",{className:"max-w-2xl mx-auto mb-8",children:[u&&c&&p.jsx("div",{className:"mb-6 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsxs("h4",{className:"text-white font-medium",children:["Bienvenue, ",c.firstName," !"]}),p.jsx("p",{className:"text-white/70 text-sm",children:c.hasPaid?`Plan ${((P=c.subscription)==null?void 0:P.plan)==="pro"?"Pro":((D=c.subscription)==null?void 0:D.plan)==="starter"?"Starter":"Premium"} • ${((w=c.subscription)==null?void 0:w.creditsRemaining)||0} crédits restants`:"Plan gratuit • Paiement requis pour accéder au service"}),c.hasPaid&&p.jsx("p",{className:"text-green-400 text-xs mt-1",children:"✅ Accès complet activé"}),!c.hasPaid&&p.jsx("p",{className:"text-yellow-400 text-xs mt-1",children:"⚠️ Paiement requis pour générer des images"})]}),p.jsx("div",{className:"flex flex-col gap-2",children:!c.hasPaid&&p.jsx("button",{onClick:i,className:"bg-white text-vinted-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors",children:"Payer maintenant"})})]})}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl",children:[p.jsxs("h3",{className:"text-lg font-semibold text-white mb-4 flex items-center",children:[p.jsx(wd,{className:"w-5 h-5 mr-2"}),"Options du Vêtement"]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/80 mb-3",children:"Genre"}),p.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{value:"femme",label:"Femme"},{value:"homme",label:"Homme"},{value:"enfant",label:"Enfant"}].map(E=>p.jsxs("label",{className:"cursor-pointer",children:[p.jsx("input",{type:"radio",name:"gender",value:E.value,checked:f.gender===E.value,onChange:b=>m(L=>({...L,gender:b.target.value})),className:"sr-only"}),p.jsx("div",{className:`
                      px-2 py-3 rounded-xl text-center text-sm font-medium transition-all duration-200 border-2 min-h-[48px] flex items-center justify-center
                      ${f.gender===E.value?"bg-white text-vinted-600 border-white shadow-lg scale-105":"bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40"}
                    `,children:E.label})]},E.value))})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium text-white/80 mb-3 flex items-center",children:[p.jsx(xb,{className:"w-4 h-4 mr-1"}),"Taille"]}),p.jsx("div",{className:"grid grid-cols-5 gap-2",children:[{value:"xs",label:"XS"},{value:"s",label:"S"},{value:"m",label:"M"},{value:"l",label:"L"},{value:"xl",label:"XL"}].map(E=>p.jsx("button",{type:"button",onClick:()=>m(b=>({...b,size:E.value})),className:`
                      px-2 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-2
                      ${f.size===E.value?"bg-white text-vinted-600 border-white shadow-lg scale-105":"bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40"}
                    `,children:E.label},E.value))})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/80 mb-3",children:"Vue"}),p.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:"normal",label:"Normale"},{value:"mirror",label:"Miroir"}].map(E=>p.jsx("button",{type:"button",onClick:()=>m(b=>({...b,mirror:E.value})),className:`
                      px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-2
                      ${f.mirror===E.value?"bg-white text-vinted-600 border-white shadow-lg scale-105":"bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40"}
                    `,children:E.label},E.value))})]})]})]})]}),p.jsx("div",{className:"max-w-2xl mx-auto mb-12",children:p.jsxs("div",{className:`
            relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 backdrop-blur-lg
            ${e?"border-white/20 bg-white/5 cursor-not-allowed opacity-50":s?"border-white bg-white/20 scale-105 shadow-2xl":"border-white/30 bg-white/10 hover:border-white/50 hover:bg-white/20 shadow-xl cursor-pointer"}
          `,onDrop:g,onDragOver:E=>{E.preventDefault(),o(!0)},onDragLeave:()=>o(!1),children:[p.jsx("input",{ref:l,type:"file",accept:"image/*",onChange:R,disabled:e,className:`absolute inset-0 w-full h-full opacity-0 ${e?"cursor-not-allowed":"cursor-pointer"}`}),p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsx("div",{className:`
              w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300
              ${s?"bg-white scale-110 shadow-lg":"bg-white/20 backdrop-blur"}
              ${e?"cursor-not-allowed":"cursor-pointer hover:scale-110"}
            `,children:p.jsx(sv,{className:`
                w-8 h-8 transition-colors duration-300
                ${s?"text-vinted-500":"text-white"}
              `})}),p.jsx("h3",{className:"text-xl font-semibold text-white mb-2 drop-shadow",children:e?"Traitement en cours...":s?"Déposez votre photo ici !":"Téléchargez Votre Photo de Vêtement"}),p.jsx("p",{className:"text-white/80 mb-6",children:e?"Votre image est en cours de traitement par notre IA...":"Glissez-déposez votre image, ou cliquez pour parcourir"}),p.jsx("button",{disabled:e,className:`
                px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg
                ${e?"bg-white/50 text-vinted-400 cursor-not-allowed":"bg-white text-vinted-500 hover:bg-white/90 hover:shadow-xl hover:scale-105"}
              `,children:e?"Traitement...":u?c!=null&&c.hasPaid?(((_=c==null?void 0:c.subscription)==null?void 0:_.creditsRemaining)||0)<=0?"Recharger crédits":"Choisir un Fichier":"Paiement requis":"Se connecter pour commencer"}),p.jsx("p",{className:"text-xs text-white/60 mt-4",children:"Supporte JPG, PNG, WebP • Max 25Mo"})]})]})}),p.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[p.jsxs("div",{className:"text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300",children:[p.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4",children:p.jsx(sv,{className:"w-6 h-6 text-white"})}),p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Upload Facile"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Glissez-déposez ou cliquez pour télécharger vos photos de vêtements"})]}),p.jsxs("div",{className:"text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300",children:[p.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4",children:p.jsx(kr,{className:"w-6 h-6 text-white"})}),p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Amélioration IA"}),p.jsx("p",{className:"text-white/80 text-sm",children:"L'IA avancée place vos articles sur des mannequins professionnels"})]}),p.jsxs("div",{className:"text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300",children:[p.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4",children:p.jsx(wb,{className:"w-6 h-6 text-white"})}),p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Haute Qualité"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Téléchargez des photos professionnelles prêtes pour vos annonces Vinted"})]})]})]})},Db=({uploadedImage:t,fileName:e})=>{const[n,r]=te.useState(0),[i,s]=te.useState("Analyzing clothing item...");return te.useEffect(()=>{const o=["Analyse de l'article vestimentaire...","Sélection du mannequin optimal...","Application de l'amélioration IA...","Finalisation de la photo professionnelle..."],l=setInterval(()=>{r(u=>{const c=Math.min(u+2,100);return c<25?s(o[0]):c<50?s(o[1]):c<75?s(o[2]):s(o[3]),c})},60);return()=>clearInterval(l)},[]),p.jsxs("div",{className:"max-w-3xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("div",{className:"w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-2xl",children:p.jsx(kr,{className:"w-10 h-10 text-vinted-500"})}),p.jsx("h2",{className:"text-3xl font-bold text-white mb-3 drop-shadow-lg",children:"Création de Votre Photo Professionnelle"}),p.jsxs("p",{className:"text-white/90 drop-shadow",children:['Notre IA transforme "',e,'" en un superbe cliché sur mannequin']})]}),p.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl mb-8 border border-white/20",children:p.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-8",children:[p.jsx("div",{className:"flex-shrink-0",children:t&&p.jsx("div",{className:"w-64 h-80 rounded-xl overflow-hidden shadow-2xl border border-white/20",children:p.jsx("img",{src:t,alt:"Uploaded clothing",className:"w-full h-full object-cover bg-white/10"})})}),p.jsxs("div",{className:"flex-1 space-y-6",children:[p.jsxs("div",{className:"text-center lg:text-left",children:[p.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:"Traitement de Votre Image"}),p.jsx("p",{className:"text-white/80",children:i})]}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex justify-between text-sm",children:[p.jsx("span",{className:"text-white/80",children:"Progression"}),p.jsxs("span",{className:"font-medium text-white",children:[Math.round(n),"%"]})]}),p.jsx("div",{className:"w-full bg-white/20 rounded-full h-3 overflow-hidden",children:p.jsx("div",{className:"h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-300 ease-out shadow-lg",style:{width:`${n}%`}})})]}),p.jsx("div",{className:"space-y-3",children:["Analyse d'image terminée","Sélection de mannequin optimisée","Amélioration IA en cours","Photo professionnelle prête"].map((o,l)=>{const u=n>(l+1)*25,c=n>=l*25&&n<(l+1)*25;return p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsxs("div",{className:`
                      w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300
                      ${u?"bg-white border-white shadow-lg":c?"border-white":"border-white/30"}
                    `,children:[u&&p.jsx("div",{className:"w-2 h-2 bg-vinted-500 rounded-full"}),c&&p.jsx(yE,{className:"w-3 h-3 text-white animate-spin"})]}),p.jsx("span",{className:`
                      text-sm transition-colors duration-300
                      ${u||c?"text-white font-medium":"text-white/60"}
                    `,children:o})]},l)})})]})]})}),p.jsx("div",{className:"text-center",children:p.jsx("p",{className:"text-white/60 text-sm",children:"Temps estimé : 15-30 secondes • Traitement haute qualité en cours"})})]})},Vb=({uploadedImage:t,generatedImage:e,fileName:n,onStartOver:r})=>{const[i,s]=te.useState(!0),[o,l]=te.useState(!1),u=()=>{if(e){l(!0);const c=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);(async()=>{try{let m;if(e.startsWith("blob:"))m=await(await fetch(e)).blob();else if(e.startsWith("data:image/"))m=await(await fetch(e)).blob();else try{m=await(await fetch(e)).blob()}catch{window.open(e,"_blank");return}const R=`swear-enhanced-${new Date().toISOString().slice(0,19).replace(/[:-]/g,"")}.jpg`;if(c){if(navigator.share&&navigator.canShare)try{const D=new File([m],R,{type:"image/jpeg"});if(navigator.canShare({files:[D]})){await navigator.share({title:"Photo Swear améliorée",text:"Voici ma photo mode améliorée avec Swear",files:[D]});return}}catch{console.log("Partage échoué, tentative de téléchargement direct")}const A=URL.createObjectURL(m),P=window.open();if(P)P.document.write(`
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
                    <img src="${A}" alt="Photo améliorée" />
                    <div class="instructions">
                      <p><strong>Pour sauvegarder sur mobile :</strong></p>
                      <p>📱 Appuyez longuement sur l'image</p>
                      <p>💾 Sélectionnez "Enregistrer l'image"</p>
                      <p>📁 L'image sera sauvée dans votre galerie</p>
                    </div>
                    <a href="${A}" download="${R}" class="download-btn">
                      📥 Télécharger
                    </a>
                  </body>
                </html>
              `),P.document.close();else{const D=document.createElement("a");D.href=A,D.download=R,D.style.display="none",document.body.appendChild(D),D.click(),document.body.removeChild(D)}setTimeout(()=>URL.revokeObjectURL(A),1e4)}else{const A=URL.createObjectURL(m),P=document.createElement("a");P.href=A,P.download=R,P.style.display="none",document.body.appendChild(P),P.click(),document.body.removeChild(P),URL.revokeObjectURL(A)}}catch(m){console.error("Erreur téléchargement:",m),window.open(e,"_blank")}})(),setTimeout(()=>l(!1),2e3)}};return p.jsxs("div",{className:"max-w-5xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-2xl",children:p.jsx(Rb,{className:"w-8 h-8 text-vinted-500"})}),p.jsx("h2",{className:"text-3xl font-bold text-white mb-3 drop-shadow-lg",children:"Votre Photo Professionnelle est Prête !"}),p.jsx("p",{className:"text-white/90 text-lg drop-shadow",children:"Votre article de mode a été transformé en un superbe cliché sur mannequin"})]}),p.jsx("div",{className:"flex justify-center mb-8",children:p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-lg p-1 shadow-xl border border-white/20",children:[p.jsx("button",{onClick:()=>s(!0),className:`
              px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
              ${i?"bg-white text-vinted-500 shadow-lg":"text-white/80 hover:text-white"}
            `,children:"Comparer"}),p.jsx("button",{onClick:()=>s(!1),className:`
              px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
              ${i?"text-white/80 hover:text-white":"bg-white text-vinted-500 shadow-lg"}
            `,children:"Résultat Final"})]})}),p.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl mb-8 border border-white/20",children:i?p.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 items-start justify-center",children:[p.jsxs("div",{className:"text-center",children:[p.jsx("p",{className:"text-sm font-medium text-white/80 mb-4 flex items-center justify-center",children:"ORIGINAL"}),p.jsx("div",{className:"rounded-xl overflow-hidden shadow-2xl border border-white/20 mx-auto",style:{width:"300px",height:"411px"},children:t&&p.jsx("img",{src:t,alt:"Original",className:"w-full h-full object-cover"})})]}),p.jsxs("div",{className:"text-center",children:[p.jsxs("p",{className:"text-sm font-medium text-white/80 mb-4 flex items-center justify-center",children:[p.jsx(kr,{className:"w-4 h-4 mr-2 text-white"}),"AMÉLIORÉ"]}),p.jsx("div",{className:"rounded-xl overflow-hidden shadow-2xl border border-white/20 mx-auto",style:{width:"300px",height:"411px"},children:e&&p.jsx("img",{src:e,alt:"Enhanced",className:"w-full h-full object-cover"})})]})]}):p.jsx("div",{className:"flex justify-center",children:p.jsx("div",{className:"rounded-xl overflow-hidden shadow-2xl border border-white/20",style:{width:"300px",height:"411px"},children:e&&p.jsx("img",{src:e,alt:"Enhanced result",className:"w-full h-full object-cover"})})})}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-8",children:[p.jsx("button",{onClick:u,disabled:o,style:{color:"#09B1BA"},className:`
            flex items-center justify-center px-8 py-4 font-medium rounded-xl transition-all duration-200
            ${o?"bg-green-500 !text-white scale-95":"bg-white hover:bg-white/90 hover:scale-105 shadow-xl"}
          `,title:"Télécharger l'image améliorée",children:o?p.jsxs(p.Fragment,{children:[p.jsx(rv,{className:"w-5 h-5 mr-2 animate-bounce"}),p.jsx("span",{className:"hidden sm:inline",children:"Téléchargé !"}),p.jsx("span",{className:"sm:hidden",children:"OK !"})]}):p.jsxs(p.Fragment,{children:[p.jsx(rv,{className:"w-5 h-5 mr-2"}),p.jsx("span",{className:"hidden sm:inline",children:"Télécharger la Photo Améliorée"}),p.jsx("span",{className:"sm:hidden",children:"Télécharger"})]})}),p.jsxs("button",{onClick:r,className:"flex items-center justify-center px-8 py-4 text-white font-medium rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-200 backdrop-blur-lg",children:[p.jsx(Sb,{className:"w-5 h-5 mr-2"}),"Créer une Autre"]})]}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center text-white border border-white/20 shadow-2xl",children:[p.jsx("h3",{className:"text-2xl font-bold mb-3",children:"Prêt à Booster Vos Ventes Vinted ?"}),p.jsx("p",{className:"text-white/90 mb-6 max-w-2xl mx-auto",children:"Les photos professionnelles peuvent augmenter la visibilité et le prix de vente de vos articles jusqu'à 40%. Votre photo améliorée est maintenant prête à être téléchargée sur Vinted !"}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[p.jsxs("a",{href:"https://vinted.com",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-6 py-3 bg-white text-vinted-500 font-medium rounded-lg hover:bg-white/90 transition-colors duration-200 shadow-lg",children:["Publier sur Vinted",p.jsx(gE,{className:"w-4 h-4 ml-2"})]}),p.jsxs("button",{className:"inline-flex items-center px-6 py-3 text-white font-medium rounded-lg border border-white/30 hover:bg-white/10 transition-colors duration-200 backdrop-blur-lg",children:[p.jsx(Ab,{className:"w-4 h-4 mr-2"}),"Partager le Résultat"]})]})]})]})},Ob=({onBack:t,onShowPricing:e})=>{const[n,r]=te.useState("login"),[i,s]=te.useState(!1),[o,l]=te.useState({email:"",password:"",firstName:"",lastName:""}),{login:u,register:c,loading:f,error:m,clearError:g}=hi(),R=(D,w)=>{l(_=>({..._,[D]:w}))},A=D=>{r(D),l({email:"",password:"",firstName:"",lastName:""}),g()},P=async D=>{D.preventDefault();try{n==="login"?await u({email:o.email,password:o.password}):await c({email:o.email,password:o.password,firstName:o.firstName,lastName:o.lastName}),t()}catch{}};return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"}),p.jsx("div",{className:"absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"})]}),p.jsx("div",{className:"relative z-10 min-h-screen flex items-center justify-center p-4",children:p.jsxs("div",{className:"w-full max-w-md",children:[p.jsxs("button",{onClick:t,className:"flex items-center text-white/80 hover:text-white mb-8 transition-colors",children:[p.jsx(mE,{className:"w-5 h-5 mr-2"}),"Retour"]}),p.jsx("div",{className:"text-center mb-8",children:p.jsxs("div",{className:"flex items-center justify-center space-x-3 mb-4",children:[p.jsx("div",{className:"p-3 bg-white rounded-xl shadow-lg",children:p.jsx(kr,{className:"w-8 h-8 text-vinted-500"})}),p.jsxs("div",{children:[p.jsx("h1",{className:"text-2xl font-bold text-white",children:"Swear"}),p.jsx("p",{className:"text-sm text-white/80",children:"Photos Mode Professionnelles"})]})]})}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20",children:[p.jsxs("div",{className:"text-center mb-6",children:[p.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:n==="login"?"Connexion":"Inscription"}),p.jsx("p",{className:"text-white/80",children:n==="login"?"Connectez-vous pour accéder à vos transformations":"Créez votre compte et obtenez 3 transformations gratuites"})]}),m&&p.jsx("div",{className:"mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl backdrop-blur-lg",children:p.jsx("p",{className:"text-red-300 text-sm",children:m})}),p.jsxs("form",{onSubmit:P,className:"space-y-4",children:[n==="register"&&p.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/90 mb-2",children:"Prénom"}),p.jsx("input",{type:"text",value:o.firstName,onChange:D=>R("firstName",D.target.value),required:!0,className:"w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vinted-500 focus:border-transparent",placeholder:"Prénom"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/90 mb-2",children:"Nom"}),p.jsx("input",{type:"text",value:o.lastName,onChange:D=>R("lastName",D.target.value),required:!0,className:"w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vinted-500 focus:border-transparent",placeholder:"Nom"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/90 mb-2",children:"Email"}),p.jsxs("div",{className:"relative",children:[p.jsx(Tb,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),p.jsx("input",{type:"email",value:o.email,onChange:D=>R("email",D.target.value),required:!0,className:"w-full pl-12 pr-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vinted-500 focus:border-transparent",placeholder:"votre@email.com"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/90 mb-2",children:"Mot de passe"}),p.jsxs("div",{className:"relative",children:[p.jsx(Eb,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),p.jsx("input",{type:i?"text":"password",value:o.password,onChange:D=>R("password",D.target.value),required:!0,minLength:6,className:"w-full pl-12 pr-12 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vinted-500 focus:border-transparent",placeholder:"••••••••"}),p.jsx("button",{type:"button",onClick:()=>s(!i),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:i?p.jsx(yb,{className:"w-5 h-5"}):p.jsx(vb,{className:"w-5 h-5"})})]}),n==="register"&&p.jsx("p",{className:"text-xs text-white/60 mt-1",children:"Minimum 6 caractères"})]}),p.jsx("button",{type:"submit",disabled:f,className:"w-full bg-white text-vinted-500 py-3 px-4 rounded-xl font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-6 shadow-lg",children:f?p.jsxs(p.Fragment,{children:[p.jsx(yE,{className:"w-5 h-5 mr-2 animate-spin"}),n==="login"?"Connexion...":"Création..."]}):n==="login"?"Se connecter":"Créer mon compte"})]}),p.jsx("div",{className:"mt-6 text-center",children:p.jsxs("p",{className:"text-white/80",children:[n==="login"?"Pas de compte ?":"Déjà un compte ?",p.jsx("button",{type:"button",onClick:()=>A(n==="login"?"register":"login"),className:"ml-2 text-white font-medium hover:text-white/80 transition-colors underline",children:n==="login"?"S'inscrire":"Se connecter"})]})}),n==="register"&&p.jsxs("div",{className:"mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-lg border border-white/20",children:[p.jsx("h4",{className:"font-medium text-white mb-2",children:"Avantages :"}),p.jsxs("ul",{className:"text-sm text-white/80 space-y-1",children:[p.jsx("li",{children:"• 3 transformations gratuites"}),p.jsx("li",{children:"• Historique de vos créations"}),p.jsx("li",{children:"• Support prioritaire"})]})]})]})]})})]})};var vE="basil",Lb=function(e){return e===3?"v3":e},_E="https://js.stripe.com",Mb="".concat(_E,"/").concat(vE,"/stripe.js"),jb=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Fb=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,ov="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Ub=function(e){return jb.test(e)||Fb.test(e)},zb=function(){for(var e=document.querySelectorAll('script[src^="'.concat(_E,'"]')),n=0;n<e.length;n++){var r=e[n];if(Ub(r.src))return r}return null},av=function(e){var n="",r=document.createElement("script");r.src="".concat(Mb).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(r),r},$b=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"7.9.0",startTime:n})},Ls=null,za=null,$a=null,Bb=function(e){return function(n){e(new Error("Failed to load Stripe.js",{cause:n}))}},Hb=function(e,n){return function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))}},Wb=function(e){return Ls!==null?Ls:(Ls=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(ov),window.Stripe){n(window.Stripe);return}try{var i=zb();if(i&&e)console.warn(ov);else if(!i)i=av(e);else if(i&&$a!==null&&za!==null){var s;i.removeEventListener("load",$a),i.removeEventListener("error",za),(s=i.parentNode)===null||s===void 0||s.removeChild(i),i=av(e)}$a=Hb(n,r),za=Bb(r),i.addEventListener("load",$a),i.addEventListener("error",za)}catch(o){r(o);return}}),Ls.catch(function(n){return Ls=null,Promise.reject(n)}))},qb=function(e,n,r){if(e===null)return null;var i=n[0],s=i.match(/^pk_test/),o=Lb(e.version),l=vE;s&&o!==l&&console.warn("Stripe.js@".concat(o," was loaded on the page, but @stripe/stripe-js@").concat("7.9.0"," expected Stripe.js@").concat(l,". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));var u=e.apply(void 0,n);return $b(u,r),u},Ms,wE=!1,EE=function(){return Ms||(Ms=Wb(null).catch(function(e){return Ms=null,Promise.reject(e)}),Ms)};Promise.resolve().then(function(){return EE()}).catch(function(t){wE||console.warn(t)});var Gb=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];wE=!0;var i=Date.now();return EE().then(function(s){return qb(s,n,i)})};class Kb{constructor(){this.functionsUrl="https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook",this.stripePromise=Gb("pk_test_51S59C86LX1cwJPasiNmP8pMN9vBIyR3J35a7DYKwoFOCi7WhNfYFZISgdSoWTGg4XSBroUfpmndhB77CZVqitFyL0083YVHh9n")}async createCheckoutSession(e){console.log("🛒 Création session Stripe réelle:",e),console.log("🔗 URL Firebase Functions:",this.functionsUrl);try{const n={priceId:this.getPriceId(e.planType),userId:this.getCurrentUserId(),planType:e.planType,userEmail:e.userEmail,successUrl:e.successUrl||`${window.location.origin}/?success=true&plan=${e.planType}`,cancelUrl:e.cancelUrl||`${window.location.origin}/?canceled=true`};console.log("📦 Payload envoyé:",n);const r=await fetch(`${this.functionsUrl}/create-checkout-session`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(console.log("📡 Réponse Firebase Functions:",r.status,r.statusText),!r.ok){const s=await r.text();throw console.error("❌ Erreur HTTP:",r.status,s),new Error(`Erreur HTTP: ${r.status}`)}const i=await r.json();return console.log("✅ Session Stripe créée:",i),{sessionId:i.sessionId,url:i.url}}catch(n){throw console.error("❌ Erreur création session Stripe:",n),n instanceof Error?n:new Error("Impossible de créer la session de paiement")}}getPriceId(e){const n={starter:"price_1S59Fm6LX1cwJPas3s7oS1pm",pro:"price_1S7z1B6LX1cwJPasibsPVll6"};return n[e]||n.starter}getCurrentUserId(){return JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyDRoNJkXmR7C3dt142AAz_hGCPpfKxkXxE:[DEFAULT]")||"{}").uid||""}async redirectToCheckout(e){console.log("🚀 Début redirection Stripe Checkout:",e);try{const n=await this.stripePromise;if(!n)throw console.error("❌ Stripe non initialisé"),new Error("Stripe non initialisé");console.log("✅ Stripe initialisé, création de la session...");const r=await this.createCheckoutSession(e);console.log("✅ Session créée, redirection vers Stripe...",r.sessionId);const{error:i}=await n.redirectToCheckout({sessionId:r.sessionId});if(i)throw console.error("❌ Erreur redirection Stripe:",i),new Error(i.message);console.log("✅ Redirection Stripe réussie")}catch(n){throw console.error("❌ Erreur redirection paiement:",n),n}}getWebhookUrl(){return`${this.functionsUrl}/webhook`}}const Qb=new Kb,Xb=({onBack:t,userEmail:e,currentUserEmail:n})=>{var g,R;const{user:r}=hi(),i=((g=r==null?void 0:r.subscription)==null?void 0:g.plan)||"free",s=!!r,o=[{id:"free",name:"Gratuit",price:"0€",period:"toujours",credits:3,features:["3 transformations gratuites","Qualité standard","Support communautaire"],icon:kr,color:"bg-gray-500",popular:!1},{id:"starter",name:"Starter",price:"9,90€",period:"par mois",credits:25,features:["25 transformations par mois","Qualité haute définition","Support prioritaire","Historique des créations"],icon:kb,color:"bg-vinted-500",popular:!0},{id:"pro",name:"Pro",price:"22,90€",period:"par mois",credits:150,features:["150 transformations par mois","Qualité ultra HD","Support VIP 24/7","API access","Exports en lot"],icon:gb,color:"bg-purple-500",popular:!1}],l=async A=>{if(A.id==="free")return;if(!["starter","pro"].includes(A.id)){console.error("Plan non supporté:",A.id),alert("Erreur: Plan non supporté");return}console.log(`🔗 Création session Stripe pour le plan ${A.name}`),console.log("🌍 URL actuelle:",window.location.href),console.log("🔧 Environnement détecté:",window.location.hostname);const P=(r==null?void 0:r.email)||n||e||"";if(!P){alert("Email requis pour créer la session de paiement");return}console.log(`🔄 Redirection vers Stripe pour le plan ${A.name}...`);try{await Qb.redirectToCheckout({planType:A.id,userEmail:P,successUrl:`${window.location.origin}/?success=true&plan=${A.id}`,cancelUrl:`${window.location.origin}/?canceled=true`})}catch(D){console.error("❌ Erreur lors de la création de la session:",D);const w=D instanceof Error?D.message:"Erreur inconnue";alert(`Erreur de paiement: ${w}`)}},u=A=>{A.preventDefault()},c=A=>{A.preventDefault()},f=A=>A.id===i?"Plan actuel":A.id==="free"?"Plan gratuit":s&&(r!=null&&r.hasPaid)&&i!=="free"?`Passer au plan ${A.name}`:`Choisir ${A.name}`,m=A=>A.id===i;return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"}),p.jsx("div",{className:"absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"})]}),p.jsx("div",{className:"relative z-10 min-h-screen",children:p.jsxs("div",{className:"container mx-auto px-4 py-8 max-w-6xl",children:[p.jsxs("button",{onClick:t,className:"flex items-center text-white/80 hover:text-white mb-8 transition-colors",children:[p.jsx(mE,{className:"w-5 h-5 mr-2"}),"Retour"]}),p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg",children:"Choisissez Votre Plan"}),p.jsx("p",{className:"text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow",children:"Transformez vos photos mode avec l'IA et boostez vos ventes sur Vinted"}),s&&p.jsxs("div",{className:"mt-6 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 max-w-md mx-auto",children:[p.jsxs("p",{className:"text-white font-medium",children:["Connecté en tant que ",r==null?void 0:r.firstName]}),p.jsxs("p",{className:"text-white/80 text-sm",children:["Plan actuel: ",i==="free"?"Gratuit":i==="starter"?"Starter":"Pro",(r==null?void 0:r.hasPaid)&&p.jsxs("span",{className:"ml-2",children:["• ",((R=r.subscription)==null?void 0:R.creditsRemaining)||0," crédits restants"]})]}),s&&(r==null?void 0:r.hasPaid)&&i!=="free"&&p.jsx("p",{className:"text-white/70 text-xs mt-2",children:"💡 Changer de plan annulera automatiquement votre abonnement actuel"})]})]}),p.jsx("div",{className:"grid md:grid-cols-3 gap-8 max-w-5xl mx-auto",children:o.map(A=>{const P=A.icon,D=A.id===i,w=m(A);return p.jsxs("div",{className:`
                    relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105
                    ${A.popular?"border-white shadow-2xl ring-2 ring-white/30":"border-white/20 hover:border-white/40"}
                    ${D?"ring-2 ring-green-400 bg-green-500/10":""}
                  `,children:[A.popular&&p.jsx("div",{className:"absolute -top-4 left-1/2 transform -translate-x-1/2",children:p.jsx("div",{className:"bg-white text-vinted-500 px-4 py-1 rounded-full text-sm font-medium shadow-lg",children:"⭐ Populaire"})}),D&&p.jsx("div",{className:"absolute -top-4 right-4",children:p.jsxs("div",{className:"bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center",children:[p.jsx(nv,{className:"w-3 h-3 mr-1"}),"Actuel"]})}),p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:`w-16 h-16 ${A.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`,children:p.jsx(P,{className:"w-8 h-8 text-white"})}),p.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:A.name}),p.jsxs("div",{className:"mb-6",children:[p.jsx("span",{className:"text-4xl font-bold text-white",children:A.price}),p.jsxs("span",{className:"text-white/80 ml-2",children:["/",A.period]})]}),p.jsx("div",{className:"mb-6 p-3 bg-white/10 rounded-lg",children:p.jsxs("span",{className:"text-white font-medium text-lg",children:[A.credits," transformations"]})}),p.jsx("ul",{className:"space-y-3 mb-8",children:A.features.map((_,E)=>p.jsxs("li",{className:"flex items-center text-white/90",children:[p.jsx(nv,{className:"w-4 h-4 text-green-400 mr-3 flex-shrink-0"}),p.jsx("span",{className:"text-sm",children:_})]},E))}),A.id==="free"?p.jsx("button",{onClick:u,className:"w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-lg bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 hover:scale-105 inline-block text-center cursor-pointer",children:f(A)}):w?p.jsx("button",{onClick:c,className:"w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-lg bg-green-500 text-white cursor-not-allowed opacity-75 inline-block text-center",children:f(A)}):p.jsx("button",{onClick:()=>l(A),className:`
                          w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-lg inline-block text-center
                          ${A.popular?"bg-white text-vinted-500 hover:bg-white/90 hover:scale-105":"bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 hover:scale-105"}
                        `,children:f(A)})]})]},A.id)})}),p.jsxs("div",{className:"mt-16 max-w-3xl mx-auto",children:[p.jsx("h2",{className:"text-2xl font-bold text-white text-center mb-8",children:"Questions Fréquentes"}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20",children:[p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Puis-je changer de plan à tout moment ?"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. L'ancien abonnement sera automatiquement annulé."})]}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20",children:[p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Que se passe-t-il si je n'utilise pas tous mes crédits ?"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Les crédits non utilisés ne sont pas reportés au mois suivant. Choisissez le plan qui correspond à votre utilisation mensuelle."})]})]})]})]})})]})},Yb=()=>{const[t,e]=te.useState("En attente..."),{updateUserPaymentStatus:n}=hi();return te.useEffect(()=>{(async()=>{try{const i=new URLSearchParams(window.location.search),s=i.get("type"),o=i.get("user_id"),l=i.get("plan_type");console.log("🎯 Webhook reçu:",{eventType:s,userId:o,planType:l}),e(`Webhook reçu: ${s}`),s==="checkout.session.completed"&&o&&l&&(console.log("💳 Traitement du paiement réussi"),await n(!0,l),e("Paiement traité avec succès"),setTimeout(()=>{window.location.href=`/?success=true&plan=${l}`},2e3))}catch(i){console.error("❌ Erreur traitement webhook:",i),e("Erreur lors du traitement")}})()},[n]),p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 flex items-center justify-center p-4",children:p.jsxs("div",{className:"bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl",children:[p.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Traitement du Paiement"}),p.jsx("p",{className:"text-gray-600 mb-4",children:t}),p.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-vinted-500 mx-auto"})]})})};let Ed=null;const Jb=t=>{Ed=t},H=t=>{const n=`[${new Date().toLocaleTimeString()}] ${t}`;console.log(n),Ed&&Ed(n)},Zb=t=>new Promise((e,n)=>{H("🔄 Redimensionnement de l'image à 896x1152...");const r=document.createElement("canvas"),i=r.getContext("2d"),s=new Image;if(!i){n(new Error("Impossible de créer le contexte canvas"));return}s.onload=()=>{r.width=896,r.height=1152,i.fillStyle="#ffffff",i.fillRect(0,0,896,1152);const u=s.width/s.height,c=896/1152;let f,m;u>c?(m=1152,f=1152*u):(f=896,m=896/u);const g=(896-f)/2,R=(1152-m)/2;i.drawImage(s,g,R,f,m),r.toBlob(A=>{if(A){const P=new File([A],t.name,{type:"image/jpeg",lastModified:Date.now()});H(`✅ Image redimensionnée: ${P.size} bytes`),e(P)}else n(new Error("Impossible de créer le blob redimensionné"))},"image/jpeg",.9)},s.onerror=()=>{n(new Error("Impossible de charger l'image"))},s.src=URL.createObjectURL(t)}),eD=async(t,e)=>{H("🚀 Début du traitement d'image");try{if(H("🔍 Validation du fichier..."),!t||t.size===0)throw H("❌ Fichier invalide ou vide"),new Error("Fichier invalide ou vide");if(t.size>25*1024*1024)throw H(`❌ Fichier trop volumineux: ${t.size} bytes`),new Error("Fichier trop volumineux (max 25MB)");const n=(t.size/(1024*1024)).toFixed(2);if(H(`📏 Taille du fichier: ${t.size} bytes (${n} MB)`),!t.type.startsWith("image/"))throw H(`❌ Type de fichier invalide: ${t.type}`),new Error("Le fichier doit être une image");H(`✅ Fichier validé: ${t.name} (${t.size} bytes, ${t.type})`);let r;try{r=await Zb(t)}catch(E){throw H(`❌ Erreur redimensionnement: ${E}`),new Error("Impossible de redimensionner l'image")}H("🔄 Début conversion base64...");let i;try{i=await tD(r);const E=(i.length*.75/1024).toFixed(2);H(`✅ Conversion réussie: ${i.length} caractères (~${E} KB)`)}catch(E){throw H(`❌ Erreur conversion: ${E}`),new Error("Impossible de traiter l'image")}if(!i||i.length===0)throw H("❌ Base64 vide après conversion"),new Error("Échec de la conversion de l'image");H(`🚀 Envoi vers webhook: ${e.gender} ${e.size.toUpperCase()}`),H("📦 Préparation du payload...");const s={image:i,gender:e.gender,size:e.size,mirror:e.mirror};H("📋 Paramètres ajoutés au payload:"),H(`  - gender: "${e.gender}"`),H(`  - size: "${e.size}"`),H(`  - mirror: "${e.mirror}"`),H("📡 URL du webhook: https://n8n-automatisation.fr/webhook-test/testvolt");const o=JSON.stringify(s).length,l=(o/(1024*1024)).toFixed(2);if(H(`📦 Payload: ${o} caractères (${l} MB)`),o>100*1024*1024)throw H("❌ Payload trop volumineux pour l'envoi"),new Error("Image trop complexe à traiter. Essayez avec une image plus simple.");H(`📋 Payload final: ${JSON.stringify({image:`[base64 data - ${i.length} chars]`,gender:e.gender,size:e.size,mirror:e.mirror})}`);const u="https://n8n-automatisation.fr/webhook-test/testvolt";H(`📡 Envoi de la requête vers: ${u}`);const c=new AbortController,f=setTimeout(()=>{H("⏰ Timeout - annulation de la requête"),c.abort()},3e4);H(`📡 Envoi de la requête... (${l} MB)`);const m=Date.now(),g=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST, GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization",Origin:window.location.origin,Referer:window.location.href},body:JSON.stringify(s),signal:c.signal,mode:"cors",credentials:"omit"});clearTimeout(f);const A=Date.now()-m;if(H(`✅ Requête envoyée en ${A}ms`),H(`📡 Réponse reçue: ${g.status} ${g.statusText}`),!g.ok){const E=await g.text().catch(()=>"Erreur inconnue");throw H(`❌ Erreur serveur (${g.status}): ${E}`),new Error(`Erreur serveur (${g.status}): ${E}`)}const P=g.headers.get("content-type");H(`🎭 Type de contenu: ${P}`);const D=g.clone();try{const E=await D.text();if(H(`📝 Réponse reçue (${E.length} caractères)`),E.length===0)throw H("❌ Réponse vide du serveur"),new Error("Réponse vide du serveur");if(P!=null&&P.includes("application/json")){H("🔍 Parsing JSON...");const b=JSON.parse(E);if(H("📊 Données JSON reçues"),b.image||b.imageUrl||b.result){H("🖼️ Image trouvée dans la réponse");const L=b.image||b.imageUrl||b.result;if(typeof L=="string")return L.startsWith("http")?(H("✅ URL d'image reçue"),{success:!0,imageUrl:L}):L.startsWith("data:image/")?(H("✅ Image base64 avec préfixe reçue"),{success:!0,imageUrl:L}):(H("✅ Image base64 sans préfixe reçue"),{success:!0,imageUrl:`data:image/png;base64,${L}`})}return H("❌ Format de réponse JSON non reconnu"),{success:!1,error:"Format de réponse non reconnu"}}}catch(E){H(`⚠️ Impossible de lire comme texte: ${E}`)}H("🖼️ Traitement comme image binaire...");let w;try{w=await g.blob()}catch(E){throw H(`❌ Erreur lecture blob: ${E}`),new Error("Impossible de lire la réponse du serveur")}if(H(`📦 Blob reçu: ${w.size} bytes (${w.type})`),w.size===0)throw H("❌ Image reçue vide"),new Error("Image reçue vide");const _=URL.createObjectURL(w);return H("✅ URL de l'image créée"),{success:!0,imageUrl:_}}catch(n){H(`❌ Erreur finale: ${n instanceof Error?n.message:n}`);let r="Erreur de traitement inconnue";return n instanceof Error&&(n.name==="AbortError"?r="Délai d'attente dépassé. Vérifiez votre connexion.":n.message.includes("Failed to fetch")||n.message.includes("NetworkError")?r="Problème de connexion. Vérifiez votre réseau.":n.message.includes("Load failed")?r="Problème de connexion réseau. Vérifiez votre connexion internet.":n.message.includes("413")||n.message.includes("Request Entity Too Large")?r="Image trop volumineuse pour le serveur. Réduisez la taille de votre image.":r=n.message),H(`❌ Message final: ${r}`),{success:!1,error:r}}},tD=t=>new Promise((e,n)=>{if(H(`🔄 Conversion ${t.name}: ${t.size} bytes`),!t){H("❌ Aucun fichier fourni"),n(new Error("Aucun fichier fourni"));return}H(`📁 Type: ${t.type}, Taille: ${(t.size/1024).toFixed(1)} KB`);const r=new FileReader;r.onload=()=>{H("✅ FileReader onload");try{if(typeof r.result=="string"){const i=r.result.split(",")[1];if(!i||i.length===0){H("❌ Base64 vide après split"),n(new Error("Conversion base64 échouée"));return}H(`✅ Base64: ${i.length} chars`),e(i)}else H("❌ Résultat FileReader invalide"),n(new Error("Format de fichier non supporté"))}catch(i){H(`❌ Erreur dans onload: ${i}`),n(new Error("Erreur lors de la conversion"))}},r.onerror=()=>{H("❌ FileReader onerror"),n(new Error("Impossible de lire le fichier"))},r.onabort=()=>{H("❌ FileReader onabort"),n(new Error("Lecture du fichier interrompue"))};try{H("🚀 Lecture fichier..."),r.readAsDataURL(t)}catch(i){H(`❌ Erreur démarrage readAsDataURL: ${i}`),n(new Error("Impossible d'initier la lecture du fichier"))}}),nD=({planType:t,onContinue:e})=>{const{user:n,updateUserPaymentStatus:r}=hi();te.useEffect(()=>{t&&["starter","pro"].includes(t)&&setTimeout(()=>{window.location.reload()},2e3)},[t,r]);const s=(o=>{switch(o){case"starter":return{name:"Starter",credits:25,price:"9,90€"};case"pro":return{name:"Pro",credits:150,price:"22,90€"};default:return{name:"Premium",credits:25,price:"9,90€"}}})(t||"starter");return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"}),p.jsx("div",{className:"absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"})]}),p.jsx("div",{className:"relative z-10 min-h-screen flex items-center justify-center p-4",children:p.jsx("div",{className:"max-w-md w-full",children:p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 text-center",children:[p.jsx("div",{className:"w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce",children:p.jsx(mb,{className:"w-10 h-10 text-white"})}),p.jsx("h1",{className:"text-3xl font-bold text-white mb-4",children:"Paiement Réussi !"}),p.jsxs("p",{className:"text-white/90 mb-6",children:["🎉 Félicitations ! Votre abonnement ",p.jsx("strong",{children:s.name})," a été activé avec succès."]}),p.jsxs("div",{className:"bg-white/10 rounded-xl p-4 mb-6 border border-white/20",children:[p.jsxs("div",{className:"flex items-center justify-center mb-3",children:[p.jsx(kr,{className:"w-5 h-5 text-white mr-2"}),p.jsxs("span",{className:"text-white font-semibold",children:["Plan ",s.name]})]}),p.jsxs("div",{className:"space-y-2 text-white/80 text-sm",children:[p.jsxs("p",{children:["💳 ",s.credits," crédits par mois"]}),p.jsxs("p",{children:["💰 ",s.price,"/mois"]}),p.jsx("p",{children:"🚀 Accès complet activé"})]})]}),n&&p.jsxs("div",{className:"bg-white/10 rounded-xl p-4 mb-6 border border-white/20",children:[p.jsxs("p",{className:"text-white/90 text-sm",children:["Bonjour ",p.jsx("strong",{children:n.firstName})," !"]}),p.jsxs("p",{className:"text-white/70 text-xs mt-1",children:["Vos ",s.credits," crédits sont maintenant disponibles !"]})]}),p.jsxs("button",{onClick:e,className:"w-full bg-white text-vinted-500 py-3 px-6 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg hover:scale-105 flex items-center justify-center",children:["Commencer à Créer",p.jsx(gE,{className:"w-5 h-5 ml-2"})]}),p.jsx("p",{className:"text-white/60 text-xs mt-4",children:"Un email de confirmation a été envoyé à votre adresse."})]})})})]})};function rD(){const{user:t,isAuthenticated:e,decrementCredits:n,refundCredits:r}=hi(),[i,s]=te.useState("main"),[o,l]=te.useState("upload"),[u,c]=te.useState(null),[f,m]=te.useState(""),[g,R]=te.useState(null),[A,P]=te.useState(!1),[D,w]=te.useState(null),[_,E]=te.useState([]);hl.useEffect(()=>{const k=new URLSearchParams(window.location.search),S=window.location.pathname,De=k.get("success"),ft=k.get("canceled"),Tt=k.get("plan");if(S==="/stripe-webhook"){s("stripe-webhook");return}De==="true"?(s("stripe-success"),Tt&&sessionStorage.setItem("stripe-plan",Tt)):ft==="true"&&(s("pricing"),setTimeout(()=>{alert("Paiement annulé. Vous pouvez réessayer quand vous voulez !")},500))},[]),hl.useEffect(()=>{Jb(k=>{E(S=>[...S.slice(-49),k])})},[]);const b=async(k,S,De,ft)=>{if(console.log("🚀 Début du traitement d'image"),c(k),m(S),l("processing"),P(!0),w(null),R(null),!await n()){console.log("❌ Impossible de déduire les crédits"),w("Impossible de déduire les crédits. Vérifiez votre solde."),l("upload"),P(!1);return}try{console.log("📡 Envoi vers N8N...");const ve=await eD(De,ft);ve.success&&ve.imageUrl?(console.log("✅ Image générée avec succès"),R(ve.imageUrl),l("results")):(console.log("❌ Échec génération:",ve.error),w(ve.error||"Erreur de traitement inconnue"),l("upload"),await r())}catch(ve){console.error("❌ Erreur traitement:",ve),w(ve instanceof Error?ve.message:"Erreur de traitement"),l("upload"),await r()}finally{P(!1)}},L=()=>{l("upload"),c(null),m(""),R(null),w(null),E([])},j=()=>{s("main"),l("upload"),c(null),m(""),R(null),w(null),E([])},T=()=>{s("login")},v=()=>{s("pricing")},I=()=>{s("main")},x=()=>{s("main")},C=()=>{window.history.replaceState({},document.title,window.location.pathname),sessionStorage.removeItem("stripe-plan"),s("main")};if(i==="stripe-webhook")return p.jsx(Yb,{});if(i==="login")return p.jsx(Ob,{onBack:I,onShowPricing:k=>{s("pricing")}});if(i==="pricing")return p.jsx(Xb,{onBack:x,currentUserEmail:t==null?void 0:t.email});if(i==="stripe-success"){const k=sessionStorage.getItem("stripe-plan")||void 0;return p.jsx(nD,{planType:k,onContinue:C})}return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"}),p.jsx("div",{className:"absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"})]}),p.jsxs("div",{className:"relative z-10 min-h-screen flex flex-col",children:[p.jsx(Pb,{onShowLogin:T,onShowPricing:v,onGoHome:j}),p.jsxs("main",{className:"flex-1 container mx-auto px-4 py-8 max-w-6xl",children:[o==="upload"&&p.jsx(bb,{onImageUpload:b,isProcessing:A,processingError:D,onShowLogin:T,onShowPricing:v}),o==="processing"&&p.jsx(Db,{uploadedImage:u,fileName:f}),o==="results"&&p.jsx(Vb,{uploadedImage:u,generatedImage:g,fileName:f,onStartOver:L})]}),p.jsx(Nb,{})]}),!1]})}console.log("🚀 === DEBUT MAIN.TSX ===");console.log("🚀 React version:",hl.version);console.log("🚀 Window object exists:",typeof window<"u");console.log("🚀 Document ready state:",document.readyState);console.log("🚀 Root element exists:",!!document.getElementById("root"));console.log("🧪 TEST CONSOLE - Si vous voyez ceci, les logs fonctionnent !");console.warn("🧪 TEST WARNING - Test d'avertissement");const Td=document.getElementById("root");if(!Td)throw console.error("❌ ERREUR CRITIQUE: Element root non trouvé !"),new Error("Root element not found");try{console.log("🚀 === CREATION ROOT REACT ===");const t=ww(Td);console.log("🚀 === DEBUT RENDER APP ==="),t.render(p.jsx(te.StrictMode,{children:p.jsx(hb,{children:p.jsx(rD,{})})})),console.log("✅ === APP RENDU AVEC SUCCES ===")}catch(t){console.error("❌ === ERREUR CRITIQUE LORS DU RENDU ==="),console.error("❌ Erreur:",t),console.error("❌ Stack:",t==null?void 0:t.stack),Td.innerHTML=`
    <div style="padding: 20px; background: #fee; border: 1px solid #fcc; margin: 20px; border-radius: 8px;">
      <h2 style="color: #c00;">Erreur de chargement</h2>
      <p>Une erreur s'est produite lors du chargement de l'application.</p>
      <p><strong>Erreur:</strong> ${(t==null?void 0:t.message)||"Erreur inconnue"}</p>
      <p>Vérifiez la console pour plus de détails.</p>
    </div>
  `}console.log("🚀 === FIN MAIN.TSX ===");
