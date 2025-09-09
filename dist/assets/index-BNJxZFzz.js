(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nv={exports:{}},Zl={},rv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=Symbol.for("react.element"),$E=Symbol.for("react.portal"),BE=Symbol.for("react.fragment"),HE=Symbol.for("react.strict_mode"),qE=Symbol.for("react.profiler"),WE=Symbol.for("react.provider"),GE=Symbol.for("react.context"),KE=Symbol.for("react.forward_ref"),QE=Symbol.for("react.suspense"),XE=Symbol.for("react.memo"),YE=Symbol.for("react.lazy"),lm=Symbol.iterator;function JE(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var iv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sv=Object.assign,ov={};function ss(t,e,n){this.props=t,this.context=e,this.refs=ov,this.updater=n||iv}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function av(){}av.prototype=ss.prototype;function vd(t,e,n){this.props=t,this.context=e,this.refs=ov,this.updater=n||iv}var _d=vd.prototype=new av;_d.constructor=vd;sv(_d,ss.prototype);_d.isPureReactComponent=!0;var um=Array.isArray,lv=Object.prototype.hasOwnProperty,wd={current:null},uv={key:!0,ref:!0,__self:!0,__source:!0};function cv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)lv.call(e,r)&&!uv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Mo,type:t,key:s,ref:o,props:i,_owner:wd.current}}function ZE(t,e){return{$$typeof:Mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mo}function eT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cm=/\/+/g;function lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?eT(""+t.key):e.toString(36)}function Fa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Mo:case $E:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+lc(o,0):r,um(i)?(n="",t!=null&&(n=t.replace(cm,"$&/")+"/"),Fa(i,e,n,"",function(c){return c})):i!=null&&(Ed(i)&&(i=ZE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",um(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+lc(s,l);o+=Fa(s,e,n,u,i)}else if(u=JE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+lc(s,l++),o+=Fa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ga(t,e,n){if(t==null)return t;var r=[],i=0;return Fa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function tT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},Ua={transition:null},nT={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:wd};function hv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ga,forEach:function(t,e,n){ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ga(t,function(){e++}),e},toArray:function(t){return ga(t,function(e){return e})||[]},only:function(t){if(!Ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ss;ee.Fragment=BE;ee.Profiler=qE;ee.PureComponent=vd;ee.StrictMode=HE;ee.Suspense=QE;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nT;ee.act=hv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)lv.call(e,u)&&!uv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Mo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:GE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:WE,_context:t},t.Consumer=t};ee.createElement=cv;ee.createFactory=function(t){var e=cv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:KE,render:t}};ee.isValidElement=Ed;ee.lazy=function(t){return{$$typeof:YE,_payload:{_status:-1,_result:t},_init:tT}};ee.memo=function(t,e){return{$$typeof:XE,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ua.transition;Ua.transition={};try{t()}finally{Ua.transition=e}};ee.unstable_act=hv;ee.useCallback=function(t,e){return ft.current.useCallback(t,e)};ee.useContext=function(t){return ft.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ft.current.useEffect(t,e)};ee.useId=function(){return ft.current.useId()};ee.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ft.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};ee.useRef=function(t){return ft.current.useRef(t)};ee.useState=function(t){return ft.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ft.current.useTransition()};ee.version="18.3.1";rv.exports=ee;var Z=rv.exports;const Td=zE(Z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rT=Z,iT=Symbol.for("react.element"),sT=Symbol.for("react.fragment"),oT=Object.prototype.hasOwnProperty,aT=rT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lT={key:!0,ref:!0,__self:!0,__source:!0};function dv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)oT.call(e,r)&&!lT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iT,type:t,key:s,ref:o,props:i,_owner:aT.current}}Zl.Fragment=sT;Zl.jsx=dv;Zl.jsxs=dv;nv.exports=Zl;var p=nv.exports,fv={exports:{}},Nt={},pv={exports:{}},mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var Y=$.length;$.push(Q);e:for(;0<Y;){var de=Y-1>>>1,ae=$[de];if(0<i(ae,Q))$[de]=Q,$[Y]=ae,Y=de;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],Y=$.pop();if(Y!==Q){$[0]=Y;e:for(var de=0,ae=$.length,le=ae>>>1;de<le;){var It=2*(de+1)-1,yn=$[It],vn=It+1,_n=$[vn];if(0>i(yn,Y))vn<ae&&0>i(_n,yn)?($[de]=_n,$[vn]=Y,de=vn):($[de]=yn,$[It]=Y,de=It);else if(vn<ae&&0>i(_n,Y))$[de]=_n,$[vn]=Y,de=vn;else break e}}return Q}function i($,Q){var Y=$.sortIndex-Q.sortIndex;return Y!==0?Y:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,g=null,y=3,T=!1,R=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function k($){if(P=!1,I($),!R)if(n(u)!==null)R=!0,Xe(L);else{var Q=n(c);Q!==null&&Ye(k,Q.startTime-$)}}function L($,Q){R=!1,P&&(P=!1,w(_),_=-1),T=!0;var Y=y;try{for(I(Q),g=n(u);g!==null&&(!(g.expirationTime>Q)||$&&!C());){var de=g.callback;if(typeof de=="function"){g.callback=null,y=g.priorityLevel;var ae=de(g.expirationTime<=Q);Q=t.unstable_now(),typeof ae=="function"?g.callback=ae:g===n(u)&&r(u),I(Q)}else r(u);g=n(u)}if(g!==null)var le=!0;else{var It=n(c);It!==null&&Ye(k,It.startTime-Q),le=!1}return le}finally{g=null,y=Y,T=!1}}var j=!1,E=null,_=-1,S=5,A=-1;function C(){return!(t.unstable_now()-A<S)}function N(){if(E!==null){var $=t.unstable_now();A=$;var Q=!0;try{Q=E(!0,$)}finally{Q?x():(j=!1,E=null)}}else j=!1}var x;if(typeof m=="function")x=function(){m(N)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,ve=$e.port2;$e.port1.onmessage=N,x=function(){ve.postMessage(null)}}else x=function(){D(N,0)};function Xe($){E=$,j||(j=!0,x())}function Ye($,Q){_=D(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||T||(R=!0,Xe(L))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var Y=y;y=Q;try{return $()}finally{y=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Y=y;y=$;try{return Q()}finally{y=Y}},t.unstable_scheduleCallback=function($,Q,Y){var de=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?de+Y:de):Y=de,$){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Y+ae,$={id:f++,callback:Q,priorityLevel:$,startTime:Y,expirationTime:ae,sortIndex:-1},Y>de?($.sortIndex=Y,e(c,$),n(u)===null&&$===n(c)&&(P?(w(_),_=-1):P=!0,Ye(k,Y-de))):($.sortIndex=ae,e(u,$),R||T||(R=!0,Xe(L))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var Q=y;return function(){var Y=y;y=Q;try{return $.apply(this,arguments)}finally{y=Y}}}})(mv);pv.exports=mv;var uT=pv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cT=Z,Pt=uT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gv=new Set,co={};function ri(t,e){Hi(t,e),Hi(t+"Capture",e)}function Hi(t,e){for(co[t]=e,t=0;t<e.length;t++)gv.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,hT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hm={},dm={};function dT(t){return Xc.call(dm,t)?!0:Xc.call(hm,t)?!1:hT.test(t)?dm[t]=!0:(hm[t]=!0,!1)}function fT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pT(t,e,n,r){if(e===null||typeof e>"u"||fT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Id=/[\-:]([a-z])/g;function Sd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Id,Sd);Ke[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Id,Sd);Ke[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Id,Sd);Ke[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function xd(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pT(e,n,i,r)&&(n=null),r||i===null?dT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=cT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=Symbol.for("react.element"),Ei=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),Ad=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),yv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),Cd=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),_v=Symbol.for("react.offscreen"),fm=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=fm&&t[fm]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,uc;function Ls(t){if(uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uc=e&&e[1]||""}return`
`+uc+t}var cc=!1;function hc(t,e){if(!t||cc)return"";cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ls(t):""}function mT(t){switch(t.tag){case 5:return Ls(t.type);case 16:return Ls("Lazy");case 13:return Ls("Suspense");case 19:return Ls("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case Ei:return"Portal";case Yc:return"Profiler";case Ad:return"StrictMode";case Jc:return"Suspense";case Zc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vv:return(t.displayName||"Context")+".Consumer";case yv:return(t._context.displayName||"Context")+".Provider";case Rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cd:return e=t.displayName||null,e!==null?e:eh(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return eh(t(e))}catch{}}return null}function gT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eh(e);case 8:return e===Ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yT(t){var e=wv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=yT(t))}function Ev(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function th(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tv(t,e){e=e.checked,e!=null&&xd(t,"checked",e,!1)}function nh(t,e){Tv(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rh(t,e.type,n):e.hasOwnProperty("defaultValue")&&rh(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rh(t,e,n){(e!=="number"||al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ms=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ms(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function Iv(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ym(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _a,xv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_a=_a||document.createElement("div"),_a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vT=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){vT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function Av(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function Rv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Av(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _T=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oh(t,e){if(e){if(_T[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function ah(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lh=null;function kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uh=null,Oi=null,Li=null;function vm(t){if(t=Uo(t)){if(typeof uh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=iu(e),uh(t.stateNode,t.type,e))}}function Cv(t){Oi?Li?Li.push(t):Li=[t]:Oi=t}function kv(){if(Oi){var t=Oi,e=Li;if(Li=Oi=null,vm(t),e)for(t=0;t<e.length;t++)vm(e[t])}}function Pv(t,e){return t(e)}function Nv(){}var dc=!1;function bv(t,e,n){if(dc)return t(e,n);dc=!0;try{return Pv(t,e,n)}finally{dc=!1,(Oi!==null||Li!==null)&&(Nv(),kv())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var r=iu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var ch=!1;if(Pn)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){ch=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{ch=!1}function wT(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ks=!1,ll=null,ul=!1,hh=null,ET={onError:function(t){Ks=!0,ll=t}};function TT(t,e,n,r,i,s,o,l,u){Ks=!1,ll=null,wT.apply(ET,arguments)}function IT(t,e,n,r,i,s,o,l,u){if(TT.apply(this,arguments),Ks){if(Ks){var c=ll;Ks=!1,ll=null}else throw Error(F(198));ul||(ul=!0,hh=c)}}function ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _m(t){if(ii(t)!==t)throw Error(F(188))}function ST(t){var e=t.alternate;if(!e){if(e=ii(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _m(i),t;if(s===r)return _m(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Vv(t){return t=ST(t),t!==null?Ov(t):null}function Ov(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ov(t);if(e!==null)return e;t=t.sibling}return null}var Lv=Pt.unstable_scheduleCallback,wm=Pt.unstable_cancelCallback,xT=Pt.unstable_shouldYield,AT=Pt.unstable_requestPaint,ke=Pt.unstable_now,RT=Pt.unstable_getCurrentPriorityLevel,Pd=Pt.unstable_ImmediatePriority,Mv=Pt.unstable_UserBlockingPriority,cl=Pt.unstable_NormalPriority,CT=Pt.unstable_LowPriority,jv=Pt.unstable_IdlePriority,eu=null,sn=null;function kT(t){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(eu,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:bT,PT=Math.log,NT=Math.LN2;function bT(t){return t>>>=0,t===0?32:31-(PT(t)/NT|0)|0}var wa=64,Ea=4194304;function js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=js(l):(s&=o,s!==0&&(r=js(s)))}else o=n&~i,o!==0?r=js(o):s!==0&&(r=js(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),i=1<<n,r|=t[n],e&=~i;return r}function DT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=DT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fv(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function OT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function Uv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zv,bd,$v,Bv,Hv,fh=!1,Ta=[],nr=null,rr=null,ir=null,po=new Map,mo=new Map,Gn=[],LT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Em(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function Ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Uo(e),e!==null&&bd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MT(t,e,n,r,i){switch(e){case"focusin":return nr=Ps(nr,t,e,n,r,i),!0;case"dragenter":return rr=Ps(rr,t,e,n,r,i),!0;case"mouseover":return ir=Ps(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return po.set(s,Ps(po.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,mo.set(s,Ps(mo.get(s)||null,t,e,n,r,i)),!0}return!1}function qv(t){var e=Mr(t.target);if(e!==null){var n=ii(e);if(n!==null){if(e=n.tag,e===13){if(e=Dv(n),e!==null){t.blockedOn=e,Hv(t.priority,function(){$v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ph(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lh=r,n.target.dispatchEvent(r),lh=null}else return e=Uo(n),e!==null&&bd(e),t.blockedOn=n,!1;e.shift()}return!0}function Tm(t,e,n){za(t)&&n.delete(e)}function jT(){fh=!1,nr!==null&&za(nr)&&(nr=null),rr!==null&&za(rr)&&(rr=null),ir!==null&&za(ir)&&(ir=null),po.forEach(Tm),mo.forEach(Tm)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,fh||(fh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,jT)))}function go(t){function e(i){return Ns(i,t)}if(0<Ta.length){Ns(Ta[0],t);for(var n=1;n<Ta.length;n++){var r=Ta[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&Ns(nr,t),rr!==null&&Ns(rr,t),ir!==null&&Ns(ir,t),po.forEach(e),mo.forEach(e),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)qv(n),n.blockedOn===null&&Gn.shift()}var Mi=jn.ReactCurrentBatchConfig,dl=!0;function FT(t,e,n,r){var i=ce,s=Mi.transition;Mi.transition=null;try{ce=1,Dd(t,e,n,r)}finally{ce=i,Mi.transition=s}}function UT(t,e,n,r){var i=ce,s=Mi.transition;Mi.transition=null;try{ce=4,Dd(t,e,n,r)}finally{ce=i,Mi.transition=s}}function Dd(t,e,n,r){if(dl){var i=ph(t,e,n,r);if(i===null)Ic(t,e,r,fl,n),Em(t,r);else if(MT(i,t,e,n,r))r.stopPropagation();else if(Em(t,r),e&4&&-1<LT.indexOf(t)){for(;i!==null;){var s=Uo(i);if(s!==null&&zv(s),s=ph(t,e,n,r),s===null&&Ic(t,e,r,fl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ic(t,e,r,null,n)}}var fl=null;function ph(t,e,n,r){if(fl=null,t=kd(r),t=Mr(t),t!==null)if(e=ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fl=t,null}function Wv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RT()){case Pd:return 1;case Mv:return 4;case cl:case CT:return 16;case jv:return 536870912;default:return 16}default:return 16}}var Zn=null,Vd=null,$a=null;function Gv(){if($a)return $a;var t,e=Vd,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return $a=i.slice(t,1<r?1-r:void 0)}function Ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ia(){return!0}function Im(){return!1}function bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ia:Im,this.isPropagationStopped=Im,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),e}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Od=bt(os),Fo=Se({},os,{view:0,detail:0}),zT=bt(Fo),pc,mc,bs,tu=Se({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ld,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(pc=t.screenX-bs.screenX,mc=t.screenY-bs.screenY):mc=pc=0,bs=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:mc}}),Sm=bt(tu),$T=Se({},tu,{dataTransfer:0}),BT=bt($T),HT=Se({},Fo,{relatedTarget:0}),gc=bt(HT),qT=Se({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),WT=bt(qT),GT=Se({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KT=bt(GT),QT=Se({},os,{data:0}),xm=bt(QT),XT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JT[t])?!!e[t]:!1}function Ld(){return ZT}var eI=Se({},Fo,{key:function(t){if(t.key){var e=XT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ld,charCode:function(t){return t.type==="keypress"?Ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tI=bt(eI),nI=Se({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=bt(nI),rI=Se({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ld}),iI=bt(rI),sI=Se({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),oI=bt(sI),aI=Se({},tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lI=bt(aI),uI=[9,13,27,32],Md=Pn&&"CompositionEvent"in window,Qs=null;Pn&&"documentMode"in document&&(Qs=document.documentMode);var cI=Pn&&"TextEvent"in window&&!Qs,Kv=Pn&&(!Md||Qs&&8<Qs&&11>=Qs),Rm=" ",Cm=!1;function Qv(t,e){switch(t){case"keyup":return uI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ii=!1;function hI(t,e){switch(t){case"compositionend":return Xv(e);case"keypress":return e.which!==32?null:(Cm=!0,Rm);case"textInput":return t=e.data,t===Rm&&Cm?null:t;default:return null}}function dI(t,e){if(Ii)return t==="compositionend"||!Md&&Qv(t,e)?(t=Gv(),$a=Vd=Zn=null,Ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kv&&e.locale!=="ko"?null:e.data;default:return null}}var fI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fI[t.type]:e==="textarea"}function Yv(t,e,n,r){Cv(r),e=pl(e,"onChange"),0<e.length&&(n=new Od("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xs=null,yo=null;function pI(t){l_(t,0)}function nu(t){var e=Ai(t);if(Ev(e))return t}function mI(t,e){if(t==="change")return e}var Jv=!1;if(Pn){var yc;if(Pn){var vc="oninput"in document;if(!vc){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),vc=typeof Pm.oninput=="function"}yc=vc}else yc=!1;Jv=yc&&(!document.documentMode||9<document.documentMode)}function Nm(){Xs&&(Xs.detachEvent("onpropertychange",Zv),yo=Xs=null)}function Zv(t){if(t.propertyName==="value"&&nu(yo)){var e=[];Yv(e,yo,t,kd(t)),bv(pI,e)}}function gI(t,e,n){t==="focusin"?(Nm(),Xs=e,yo=n,Xs.attachEvent("onpropertychange",Zv)):t==="focusout"&&Nm()}function yI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(yo)}function vI(t,e){if(t==="click")return nu(e)}function _I(t,e){if(t==="input"||t==="change")return nu(e)}function wI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xt=typeof Object.is=="function"?Object.is:wI;function vo(t,e){if(Xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xc.call(e,i)||!Xt(t[i],e[i]))return!1}return!0}function bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dm(t,e){var n=bm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bm(n)}}function e_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?e_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function t_(){for(var t=window,e=al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=al(t.document)}return e}function jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function EI(t){var e=t_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&e_(n.ownerDocument.documentElement,n)){if(r!==null&&jd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Dm(n,s);var o=Dm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TI=Pn&&"documentMode"in document&&11>=document.documentMode,Si=null,mh=null,Ys=null,gh=!1;function Vm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gh||Si==null||Si!==al(r)||(r=Si,"selectionStart"in r&&jd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ys&&vo(Ys,r)||(Ys=r,r=pl(mh,"onSelect"),0<r.length&&(e=new Od("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function Sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xi={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},_c={},n_={};Pn&&(n_=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function ru(t){if(_c[t])return _c[t];if(!xi[t])return t;var e=xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in n_)return _c[t]=e[n];return t}var r_=ru("animationend"),i_=ru("animationiteration"),s_=ru("animationstart"),o_=ru("transitionend"),a_=new Map,Om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){a_.set(t,e),ri(e,[t])}for(var wc=0;wc<Om.length;wc++){var Ec=Om[wc],II=Ec.toLowerCase(),SI=Ec[0].toUpperCase()+Ec.slice(1);Ir(II,"on"+SI)}Ir(r_,"onAnimationEnd");Ir(i_,"onAnimationIteration");Ir(s_,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(o_,"onTransitionEnd");Hi("onMouseEnter",["mouseout","mouseover"]);Hi("onMouseLeave",["mouseout","mouseover"]);Hi("onPointerEnter",["pointerout","pointerover"]);Hi("onPointerLeave",["pointerout","pointerover"]);ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function Lm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,IT(r,e,void 0,t),t.currentTarget=null}function l_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Lm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Lm(i,l,c),s=u}}}if(ul)throw t=hh,ul=!1,hh=null,t}function me(t,e){var n=e[Eh];n===void 0&&(n=e[Eh]=new Set);var r=t+"__bubble";n.has(r)||(u_(e,t,2,!1),n.add(r))}function Tc(t,e,n){var r=0;e&&(r|=4),u_(n,t,r,e)}var xa="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[xa]){t[xa]=!0,gv.forEach(function(n){n!=="selectionchange"&&(xI.has(n)||Tc(n,!1,t),Tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xa]||(e[xa]=!0,Tc("selectionchange",!1,e))}}function u_(t,e,n,r){switch(Wv(e)){case 1:var i=FT;break;case 4:i=UT;break;default:i=Dd}n=i.bind(null,e,n,t),i=void 0,!ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ic(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}bv(function(){var c=s,f=kd(n),g=[];e:{var y=a_.get(t);if(y!==void 0){var T=Od,R=t;switch(t){case"keypress":if(Ba(n)===0)break e;case"keydown":case"keyup":T=tI;break;case"focusin":R="focus",T=gc;break;case"focusout":R="blur",T=gc;break;case"beforeblur":case"afterblur":T=gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=BT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=iI;break;case r_:case i_:case s_:T=WT;break;case o_:T=oI;break;case"scroll":T=zT;break;case"wheel":T=lI;break;case"copy":case"cut":case"paste":T=KT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Am}var P=(e&4)!==0,D=!P&&t==="scroll",w=P?y!==null?y+"Capture":null:y;P=[];for(var m=c,I;m!==null;){I=m;var k=I.stateNode;if(I.tag===5&&k!==null&&(I=k,w!==null&&(k=fo(m,w),k!=null&&P.push(wo(m,k,I)))),D)break;m=m.return}0<P.length&&(y=new T(y,R,null,n,f),g.push({event:y,listeners:P}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",y&&n!==lh&&(R=n.relatedTarget||n.fromElement)&&(Mr(R)||R[Nn]))break e;if((T||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,T?(R=n.relatedTarget||n.toElement,T=c,R=R?Mr(R):null,R!==null&&(D=ii(R),R!==D||R.tag!==5&&R.tag!==6)&&(R=null)):(T=null,R=c),T!==R)){if(P=Sm,k="onMouseLeave",w="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(P=Am,k="onPointerLeave",w="onPointerEnter",m="pointer"),D=T==null?y:Ai(T),I=R==null?y:Ai(R),y=new P(k,m+"leave",T,n,f),y.target=D,y.relatedTarget=I,k=null,Mr(f)===c&&(P=new P(w,m+"enter",R,n,f),P.target=I,P.relatedTarget=D,k=P),D=k,T&&R)t:{for(P=T,w=R,m=0,I=P;I;I=mi(I))m++;for(I=0,k=w;k;k=mi(k))I++;for(;0<m-I;)P=mi(P),m--;for(;0<I-m;)w=mi(w),I--;for(;m--;){if(P===w||w!==null&&P===w.alternate)break t;P=mi(P),w=mi(w)}P=null}else P=null;T!==null&&Mm(g,y,T,P,!1),R!==null&&D!==null&&Mm(g,D,R,P,!0)}}e:{if(y=c?Ai(c):window,T=y.nodeName&&y.nodeName.toLowerCase(),T==="select"||T==="input"&&y.type==="file")var L=mI;else if(km(y))if(Jv)L=_I;else{L=yI;var j=gI}else(T=y.nodeName)&&T.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(L=vI);if(L&&(L=L(t,c))){Yv(g,L,n,f);break e}j&&j(t,y,c),t==="focusout"&&(j=y._wrapperState)&&j.controlled&&y.type==="number"&&rh(y,"number",y.value)}switch(j=c?Ai(c):window,t){case"focusin":(km(j)||j.contentEditable==="true")&&(Si=j,mh=c,Ys=null);break;case"focusout":Ys=mh=Si=null;break;case"mousedown":gh=!0;break;case"contextmenu":case"mouseup":case"dragend":gh=!1,Vm(g,n,f);break;case"selectionchange":if(TI)break;case"keydown":case"keyup":Vm(g,n,f)}var E;if(Md)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ii?Qv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Kv&&n.locale!=="ko"&&(Ii||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ii&&(E=Gv()):(Zn=f,Vd="value"in Zn?Zn.value:Zn.textContent,Ii=!0)),j=pl(c,_),0<j.length&&(_=new xm(_,t,null,n,f),g.push({event:_,listeners:j}),E?_.data=E:(E=Xv(n),E!==null&&(_.data=E)))),(E=cI?hI(t,n):dI(t,n))&&(c=pl(c,"onBeforeInput"),0<c.length&&(f=new xm("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:c}),f.data=E))}l_(g,e)})}function wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fo(t,n),s!=null&&r.unshift(wo(t,s,i)),s=fo(t,e),s!=null&&r.push(wo(t,s,i))),t=t.return}return r}function mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=fo(n,s),u!=null&&o.unshift(wo(n,u,l))):i||(u=fo(n,s),u!=null&&o.push(wo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var AI=/\r\n?/g,RI=/\u0000|\uFFFD/g;function jm(t){return(typeof t=="string"?t:""+t).replace(AI,`
`).replace(RI,"")}function Aa(t,e,n){if(e=jm(e),jm(t)!==e&&n)throw Error(F(425))}function ml(){}var yh=null,vh=null;function _h(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wh=typeof setTimeout=="function"?setTimeout:void 0,CI=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,kI=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(t){return Fm.resolve(null).then(t).catch(PI)}:wh;function PI(t){setTimeout(function(){throw t})}function Sc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),rn="__reactFiber$"+as,Eo="__reactProps$"+as,Nn="__reactContainer$"+as,Eh="__reactEvents$"+as,NI="__reactListeners$"+as,bI="__reactHandles$"+as;function Mr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Um(t);t!==null;){if(n=t[rn])return n;t=Um(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[rn]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function iu(t){return t[Eo]||null}var Th=[],Ri=-1;function Sr(t){return{current:t}}function ye(t){0>Ri||(t.current=Th[Ri],Th[Ri]=null,Ri--)}function fe(t,e){Ri++,Th[Ri]=t.current,t.current=e}var mr={},at=Sr(mr),_t=Sr(!1),qr=mr;function qi(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function gl(){ye(_t),ye(at)}function zm(t,e,n){if(at.current!==mr)throw Error(F(168));fe(at,e),fe(_t,n)}function c_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,gT(t)||"Unknown",i));return Se({},n,r)}function yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,qr=at.current,fe(at,t),fe(_t,_t.current),!0}function $m(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=c_(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,ye(_t),ye(at),fe(at,t)):ye(_t),fe(_t,n)}var In=null,su=!1,xc=!1;function h_(t){In===null?In=[t]:In.push(t)}function DI(t){su=!0,h_(t)}function xr(){if(!xc&&In!==null){xc=!0;var t=0,e=ce;try{var n=In;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,su=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),Lv(Pd,xr),i}finally{ce=e,xc=!1}}return null}var Ci=[],ki=0,vl=null,_l=0,Dt=[],Vt=0,Wr=null,Sn=1,xn="";function Dr(t,e){Ci[ki++]=_l,Ci[ki++]=vl,vl=t,_l=e}function d_(t,e,n){Dt[Vt++]=Sn,Dt[Vt++]=xn,Dt[Vt++]=Wr,Wr=t;var r=Sn;t=xn;var i=32-Kt(r)-1;r&=~(1<<i),n+=1;var s=32-Kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sn=1<<32-Kt(e)+i|n<<i|r,xn=s+t}else Sn=1<<s|n<<i|r,xn=t}function Fd(t){t.return!==null&&(Dr(t,1),d_(t,1,0))}function Ud(t){for(;t===vl;)vl=Ci[--ki],Ci[ki]=null,_l=Ci[--ki],Ci[ki]=null;for(;t===Wr;)Wr=Dt[--Vt],Dt[Vt]=null,xn=Dt[--Vt],Dt[Vt]=null,Sn=Dt[--Vt],Dt[Vt]=null}var Ct=null,At=null,_e=!1,Wt=null;function f_(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,At=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:Sn,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,At=null,!0):!1;default:return!1}}function Ih(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sh(t){if(_e){var e=At;if(e){var n=e;if(!Bm(t,e)){if(Ih(t))throw Error(F(418));e=sr(n.nextSibling);var r=Ct;e&&Bm(t,e)?f_(r,n):(t.flags=t.flags&-4097|2,_e=!1,Ct=t)}}else{if(Ih(t))throw Error(F(418));t.flags=t.flags&-4097|2,_e=!1,Ct=t}}}function Hm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Ra(t){if(t!==Ct)return!1;if(!_e)return Hm(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_h(t.type,t.memoizedProps)),e&&(e=At)){if(Ih(t))throw p_(),Error(F(418));for(;e;)f_(t,e),e=sr(e.nextSibling)}if(Hm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Ct?sr(t.stateNode.nextSibling):null;return!0}function p_(){for(var t=At;t;)t=sr(t.nextSibling)}function Wi(){At=Ct=null,_e=!1}function zd(t){Wt===null?Wt=[t]:Wt.push(t)}var VI=jn.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ca(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qm(t){var e=t._init;return e(t._payload)}function m_(t){function e(w,m){if(t){var I=w.deletions;I===null?(w.deletions=[m],w.flags|=16):I.push(m)}}function n(w,m){if(!t)return null;for(;m!==null;)e(w,m),m=m.sibling;return null}function r(w,m){for(w=new Map;m!==null;)m.key!==null?w.set(m.key,m):w.set(m.index,m),m=m.sibling;return w}function i(w,m){return w=ur(w,m),w.index=0,w.sibling=null,w}function s(w,m,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<m?(w.flags|=2,m):I):(w.flags|=2,m)):(w.flags|=1048576,m)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,m,I,k){return m===null||m.tag!==6?(m=bc(I,w.mode,k),m.return=w,m):(m=i(m,I),m.return=w,m)}function u(w,m,I,k){var L=I.type;return L===Ti?f(w,m,I.props.children,k,I.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===qn&&qm(L)===m.type)?(k=i(m,I.props),k.ref=Ds(w,m,I),k.return=w,k):(k=Xa(I.type,I.key,I.props,null,w.mode,k),k.ref=Ds(w,m,I),k.return=w,k)}function c(w,m,I,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==I.containerInfo||m.stateNode.implementation!==I.implementation?(m=Dc(I,w.mode,k),m.return=w,m):(m=i(m,I.children||[]),m.return=w,m)}function f(w,m,I,k,L){return m===null||m.tag!==7?(m=Br(I,w.mode,k,L),m.return=w,m):(m=i(m,I),m.return=w,m)}function g(w,m,I){if(typeof m=="string"&&m!==""||typeof m=="number")return m=bc(""+m,w.mode,I),m.return=w,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ya:return I=Xa(m.type,m.key,m.props,null,w.mode,I),I.ref=Ds(w,null,m),I.return=w,I;case Ei:return m=Dc(m,w.mode,I),m.return=w,m;case qn:var k=m._init;return g(w,k(m._payload),I)}if(Ms(m)||Cs(m))return m=Br(m,w.mode,I,null),m.return=w,m;Ca(w,m)}return null}function y(w,m,I,k){var L=m!==null?m.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:l(w,m,""+I,k);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ya:return I.key===L?u(w,m,I,k):null;case Ei:return I.key===L?c(w,m,I,k):null;case qn:return L=I._init,y(w,m,L(I._payload),k)}if(Ms(I)||Cs(I))return L!==null?null:f(w,m,I,k,null);Ca(w,I)}return null}function T(w,m,I,k,L){if(typeof k=="string"&&k!==""||typeof k=="number")return w=w.get(I)||null,l(m,w,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ya:return w=w.get(k.key===null?I:k.key)||null,u(m,w,k,L);case Ei:return w=w.get(k.key===null?I:k.key)||null,c(m,w,k,L);case qn:var j=k._init;return T(w,m,I,j(k._payload),L)}if(Ms(k)||Cs(k))return w=w.get(I)||null,f(m,w,k,L,null);Ca(m,k)}return null}function R(w,m,I,k){for(var L=null,j=null,E=m,_=m=0,S=null;E!==null&&_<I.length;_++){E.index>_?(S=E,E=null):S=E.sibling;var A=y(w,E,I[_],k);if(A===null){E===null&&(E=S);break}t&&E&&A.alternate===null&&e(w,E),m=s(A,m,_),j===null?L=A:j.sibling=A,j=A,E=S}if(_===I.length)return n(w,E),_e&&Dr(w,_),L;if(E===null){for(;_<I.length;_++)E=g(w,I[_],k),E!==null&&(m=s(E,m,_),j===null?L=E:j.sibling=E,j=E);return _e&&Dr(w,_),L}for(E=r(w,E);_<I.length;_++)S=T(E,w,_,I[_],k),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?_:S.key),m=s(S,m,_),j===null?L=S:j.sibling=S,j=S);return t&&E.forEach(function(C){return e(w,C)}),_e&&Dr(w,_),L}function P(w,m,I,k){var L=Cs(I);if(typeof L!="function")throw Error(F(150));if(I=L.call(I),I==null)throw Error(F(151));for(var j=L=null,E=m,_=m=0,S=null,A=I.next();E!==null&&!A.done;_++,A=I.next()){E.index>_?(S=E,E=null):S=E.sibling;var C=y(w,E,A.value,k);if(C===null){E===null&&(E=S);break}t&&E&&C.alternate===null&&e(w,E),m=s(C,m,_),j===null?L=C:j.sibling=C,j=C,E=S}if(A.done)return n(w,E),_e&&Dr(w,_),L;if(E===null){for(;!A.done;_++,A=I.next())A=g(w,A.value,k),A!==null&&(m=s(A,m,_),j===null?L=A:j.sibling=A,j=A);return _e&&Dr(w,_),L}for(E=r(w,E);!A.done;_++,A=I.next())A=T(E,w,_,A.value,k),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?_:A.key),m=s(A,m,_),j===null?L=A:j.sibling=A,j=A);return t&&E.forEach(function(N){return e(w,N)}),_e&&Dr(w,_),L}function D(w,m,I,k){if(typeof I=="object"&&I!==null&&I.type===Ti&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ya:e:{for(var L=I.key,j=m;j!==null;){if(j.key===L){if(L=I.type,L===Ti){if(j.tag===7){n(w,j.sibling),m=i(j,I.props.children),m.return=w,w=m;break e}}else if(j.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===qn&&qm(L)===j.type){n(w,j.sibling),m=i(j,I.props),m.ref=Ds(w,j,I),m.return=w,w=m;break e}n(w,j);break}else e(w,j);j=j.sibling}I.type===Ti?(m=Br(I.props.children,w.mode,k,I.key),m.return=w,w=m):(k=Xa(I.type,I.key,I.props,null,w.mode,k),k.ref=Ds(w,m,I),k.return=w,w=k)}return o(w);case Ei:e:{for(j=I.key;m!==null;){if(m.key===j)if(m.tag===4&&m.stateNode.containerInfo===I.containerInfo&&m.stateNode.implementation===I.implementation){n(w,m.sibling),m=i(m,I.children||[]),m.return=w,w=m;break e}else{n(w,m);break}else e(w,m);m=m.sibling}m=Dc(I,w.mode,k),m.return=w,w=m}return o(w);case qn:return j=I._init,D(w,m,j(I._payload),k)}if(Ms(I))return R(w,m,I,k);if(Cs(I))return P(w,m,I,k);Ca(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,m!==null&&m.tag===6?(n(w,m.sibling),m=i(m,I),m.return=w,w=m):(n(w,m),m=bc(I,w.mode,k),m.return=w,w=m),o(w)):n(w,m)}return D}var Gi=m_(!0),g_=m_(!1),wl=Sr(null),El=null,Pi=null,$d=null;function Bd(){$d=Pi=El=null}function Hd(t){var e=wl.current;ye(wl),t._currentValue=e}function xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ji(t,e){El=t,$d=Pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if($d!==t)if(t={context:t,memoizedValue:e,next:null},Pi===null){if(El===null)throw Error(F(308));Pi=t,El.dependencies={lanes:0,firstContext:t}}else Pi=Pi.next=t;return e}var jr=null;function qd(t){jr===null?jr=[t]:jr.push(t)}function y_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function Wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function Ha(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}function Wm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tl(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=c=u=null,l=s;do{var y=l.lane,T=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(y=e,T=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){g=R.call(T,g,y);break e}g=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,y=typeof R=="function"?R.call(T,g,y):R,y==null)break e;g=Se({},g,y);break e;case 2:Wn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else T={eventTime:T,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=T,u=g):f=f.next=T,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=g}}function Gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var zo={},on=Sr(zo),To=Sr(zo),Io=Sr(zo);function Fr(t){if(t===zo)throw Error(F(174));return t}function Gd(t,e){switch(fe(Io,e),fe(To,t),fe(on,zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sh(e,t)}ye(on),fe(on,e)}function Ki(){ye(on),ye(To),ye(Io)}function __(t){Fr(Io.current);var e=Fr(on.current),n=sh(e,t.type);e!==n&&(fe(To,t),fe(on,n))}function Kd(t){To.current===t&&(ye(on),ye(To))}var Ee=Sr(0);function Il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function Qd(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var qa=jn.ReactCurrentDispatcher,Rc=jn.ReactCurrentBatchConfig,Gr=0,Ie=null,De=null,Ue=null,Sl=!1,Js=!1,So=0,OI=0;function tt(){throw Error(F(321))}function Xd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xt(t[n],e[n]))return!1;return!0}function Yd(t,e,n,r,i,s){if(Gr=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qa.current=t===null||t.memoizedState===null?FI:UI,t=n(r,i),Js){s=0;do{if(Js=!1,So=0,25<=s)throw Error(F(301));s+=1,Ue=De=null,e.updateQueue=null,qa.current=zI,t=n(r,i)}while(Js)}if(qa.current=xl,e=De!==null&&De.next!==null,Gr=0,Ue=De=Ie=null,Sl=!1,e)throw Error(F(300));return t}function Jd(){var t=So!==0;return So=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ie.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function zt(){if(De===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Ue===null?Ie.memoizedState:Ue.next;if(e!==null)Ue=e,De=t;else{if(t===null)throw Error(F(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ue===null?Ie.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function xo(t,e){return typeof e=="function"?e(t):e}function Cc(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Gr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var g={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ie.lanes|=f,Kr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Xt(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,Kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Xt(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function w_(){}function E_(t,e){var n=Ie,r=zt(),i=e(),s=!Xt(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,Zd(S_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Ao(9,I_.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(F(349));Gr&30||T_(n,e,i)}return i}function T_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function I_(t,e,n,r){e.value=n,e.getSnapshot=r,x_(e)&&A_(t)}function S_(t,e,n){return n(function(){x_(e)&&A_(t)})}function x_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xt(t,n)}catch{return!0}}function A_(t){var e=bn(t,1);e!==null&&Qt(e,t,1,-1)}function Km(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=jI.bind(null,Ie,t),[e.memoizedState,t]}function Ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function R_(){return zt().memoizedState}function Wa(t,e,n,r){var i=tn();Ie.flags|=t,i.memoizedState=Ao(1|e,n,void 0,r===void 0?null:r)}function ou(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&Xd(r,o.deps)){i.memoizedState=Ao(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Ao(1|e,n,s,r)}function Qm(t,e){return Wa(8390656,8,t,e)}function Zd(t,e){return ou(2048,8,t,e)}function C_(t,e){return ou(4,2,t,e)}function k_(t,e){return ou(4,4,t,e)}function P_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function N_(t,e,n){return n=n!=null?n.concat([t]):null,ou(4,4,P_.bind(null,e,t),n)}function ef(){}function b_(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function D_(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function V_(t,e,n){return Gr&21?(Xt(n,e)||(n=Fv(),Ie.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function LI(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Rc.transition;Rc.transition={};try{t(!1),e()}finally{ce=n,Rc.transition=r}}function O_(){return zt().memoizedState}function MI(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},L_(t))M_(e,n);else if(n=y_(t,e,n,r),n!==null){var i=dt();Qt(n,t,r,i),j_(n,e,r)}}function jI(t,e,n){var r=lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(L_(t))M_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Xt(l,o)){var u=e.interleaved;u===null?(i.next=i,qd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=y_(t,e,i,r),n!==null&&(i=dt(),Qt(n,t,r,i),j_(n,e,r))}}function L_(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function M_(t,e){Js=Sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function j_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}var xl={readContext:Ut,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},FI={readContext:Ut,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wa(4194308,4,P_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wa(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=MI.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:Km,useDebugValue:ef,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=Km(!1),e=t[0];return t=LI.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=tn();if(_e){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),ze===null)throw Error(F(349));Gr&30||T_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qm(S_.bind(null,r,s,t),[t]),r.flags|=2048,Ao(9,I_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tn(),e=ze.identifierPrefix;if(_e){var n=xn,r=Sn;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=OI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},UI={readContext:Ut,useCallback:b_,useContext:Ut,useEffect:Zd,useImperativeHandle:N_,useInsertionEffect:C_,useLayoutEffect:k_,useMemo:D_,useReducer:Cc,useRef:R_,useState:function(){return Cc(xo)},useDebugValue:ef,useDeferredValue:function(t){var e=zt();return V_(e,De.memoizedState,t)},useTransition:function(){var t=Cc(xo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:E_,useId:O_,unstable_isNewReconciler:!1},zI={readContext:Ut,useCallback:b_,useContext:Ut,useEffect:Zd,useImperativeHandle:N_,useInsertionEffect:C_,useLayoutEffect:k_,useMemo:D_,useReducer:kc,useRef:R_,useState:function(){return kc(xo)},useDebugValue:ef,useDeferredValue:function(t){var e=zt();return De===null?e.memoizedState=t:V_(e,De.memoizedState,t)},useTransition:function(){var t=kc(xo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:E_,useId:O_,unstable_isNewReconciler:!1};function Ht(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ah(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var au={isMounted:function(t){return(t=t._reactInternals)?ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=lr(t),s=Cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Qt(e,t,i,r),Ha(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=lr(t),s=Cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Qt(e,t,i,r),Ha(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=lr(t),i=Cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=or(t,i,r),e!==null&&(Qt(e,t,r,n),Ha(e,t,r))}};function Xm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,r)||!vo(i,s):!0}function F_(t,e,n){var r=!1,i=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=wt(e)?qr:at.current,r=e.contextTypes,s=(r=r!=null)?qi(t,i):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=au,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ym(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&au.enqueueReplaceState(e,e.state,null)}function Rh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Wd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=wt(e)?qr:at.current,i.context=qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ah(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&au.enqueueReplaceState(i,i.state,null),Tl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qi(t,e){try{var n="",r=e;do n+=mT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ch(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $I=typeof WeakMap=="function"?WeakMap:Map;function U_(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Rl||(Rl=!0,jh=r),Ch(t,e)},n}function z_(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ch(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ch(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $I;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=nS.bind(null,t,e,n),e.then(t,t))}function Zm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function eg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var BI=jn.ReactCurrentOwner,vt=!1;function ht(t,e,n,r){e.child=t===null?g_(e,null,n,r):Gi(e,t.child,n,r)}function tg(t,e,n,r,i){n=n.render;var s=e.ref;return ji(e,i),r=Yd(t,e,n,r,s,i),n=Jd(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(_e&&n&&Fd(e),e.flags|=1,ht(t,e,r,i),e.child)}function ng(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!uf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$_(t,e,s,r,i)):(t=Xa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function $_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vo(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return kh(t,e,n,r,i)}function B_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(bi,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(bi,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(bi,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(bi,xt),xt|=r;return ht(t,e,i,n),e.child}function H_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kh(t,e,n,r,i){var s=wt(n)?qr:at.current;return s=qi(e,s),ji(e,i),n=Yd(t,e,n,r,s,i),r=Jd(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(_e&&r&&Fd(e),e.flags|=1,ht(t,e,n,i),e.child)}function rg(t,e,n,r,i){if(wt(n)){var s=!0;yl(e)}else s=!1;if(ji(e,i),e.stateNode===null)Ga(t,e),F_(e,n,r),Rh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ut(c):(c=wt(n)?qr:at.current,c=qi(e,c));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ym(e,o,r,c),Wn=!1;var y=e.memoizedState;o.state=y,Tl(e,r,o,i),u=e.memoizedState,l!==r||y!==u||_t.current||Wn?(typeof f=="function"&&(Ah(e,n,f,r),u=e.memoizedState),(l=Wn||Xm(e,n,l,r,y,u,c))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,v_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ht(e.type,l),o.props=c,g=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ut(u):(u=wt(n)?qr:at.current,u=qi(e,u));var T=n.getDerivedStateFromProps;(f=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||y!==u)&&Ym(e,o,r,u),Wn=!1,y=e.memoizedState,o.state=y,Tl(e,r,o,i);var R=e.memoizedState;l!==g||y!==R||_t.current||Wn?(typeof T=="function"&&(Ah(e,n,T,r),R=e.memoizedState),(c=Wn||Xm(e,n,c,r,y,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Ph(t,e,n,r,s,i)}function Ph(t,e,n,r,i,s){H_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$m(e,n,!1),Dn(t,e,s);r=e.stateNode,BI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gi(e,t.child,null,s),e.child=Gi(e,null,l,s)):ht(t,e,l,s),e.memoizedState=r.state,i&&$m(e,n,!0),e.child}function q_(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),Gd(t,e.containerInfo)}function ig(t,e,n,r,i){return Wi(),zd(i),e.flags|=256,ht(t,e,n,r),e.child}var Nh={dehydrated:null,treeContext:null,retryLane:0};function bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function W_(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(Ee,i&1),t===null)return Sh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cu(o,r,0,null),t=Br(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bh(n),e.memoizedState=Nh,t):tf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return HI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ur(l,s):(s=Br(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?bh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nh,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tf(t,e){return e=cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,r){return r!==null&&zd(r),Gi(e,t.child,null,n),t=tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pc(Error(F(422))),ka(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=cu({mode:"visible",children:r.children},i,0,null),s=Br(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gi(e,t.child,null,o),e.child.memoizedState=bh(o),e.memoizedState=Nh,s);if(!(e.mode&1))return ka(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Pc(s,r,void 0),ka(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),Qt(r,t,i,-1))}return lf(),r=Pc(Error(F(421))),ka(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=rS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=sr(i.nextSibling),Ct=e,_e=!0,Wt=null,t!==null&&(Dt[Vt++]=Sn,Dt[Vt++]=xn,Dt[Vt++]=Wr,Sn=t.id,xn=t.overflow,Wr=e),e=tf(e,r.children),e.flags|=4096,e)}function sg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xh(t.return,e,n)}function Nc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function G_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,n,e);else if(t.tag===19)sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Il(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Nc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Il(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Nc(e,!0,n,null,s);break;case"together":Nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qI(t,e,n){switch(e.tag){case 3:q_(e),Wi();break;case 5:__(e);break;case 1:wt(e.type)&&yl(e);break;case 4:Gd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(wl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?W_(t,e,n):(fe(Ee,Ee.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);fe(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return G_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,B_(t,e,n)}return Dn(t,e,n)}var K_,Dh,Q_,X_;K_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dh=function(){};Q_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fr(on.current);var s=null;switch(n){case"input":i=th(t,i),r=th(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=ih(t,i),r=ih(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ml)}oh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(co.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};X_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vs(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function WI(t,e,n){var r=e.pendingProps;switch(Ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return wt(e.type)&&gl(),nt(e),null;case 3:return r=e.stateNode,Ki(),ye(_t),ye(at),Qd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(zh(Wt),Wt=null))),Dh(t,e),nt(e),null;case 5:Kd(e);var i=Fr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)Q_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return nt(e),null}if(t=Fr(on.current),Ra(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Fs.length;i++)me(Fs[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":pm(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":gm(r,s),me("invalid",r)}oh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Aa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Aa(r.textContent,l,t),i=["children",""+l]):co.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":va(r),mm(r,s,!0);break;case"textarea":va(r),ym(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ml)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[Eo]=r,K_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ah(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fs.length;i++)me(Fs[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":pm(t,r),i=th(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),me("invalid",t);break;case"textarea":gm(t,r),i=ih(t,r),me("invalid",t);break;default:i=r}oh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Rv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ho(t,u):typeof u=="number"&&ho(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&xd(t,s,u,o))}switch(n){case"input":va(t),mm(t,r,!1);break;case"textarea":va(t),ym(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)X_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Fr(Io.current),Fr(on.current),Ra(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:Aa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return nt(e),null;case 13:if(ye(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&At!==null&&e.mode&1&&!(e.flags&128))p_(),Wi(),e.flags|=98560,s=!1;else if(s=Ra(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[rn]=e}else Wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Wt!==null&&(zh(Wt),Wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Oe===0&&(Oe=3):lf())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return Ki(),Dh(t,e),t===null&&_o(e.stateNode.containerInfo),nt(e),null;case 10:return Hd(e.type._context),nt(e),null;case 17:return wt(e.type)&&gl(),nt(e),null;case 19:if(ye(Ee),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vs(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Il(t),o!==null){for(e.flags|=128,Vs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>Xi&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Il(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return nt(e),null}else 2*ke()-s.renderingStartTime>Xi&&n!==1073741824&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=Ee.current,fe(Ee,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return af(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function GI(t,e){switch(Ud(e),e.tag){case 1:return wt(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ki(),ye(_t),ye(at),Qd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kd(e),null;case 13:if(ye(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Ee),null;case 4:return Ki(),null;case 10:return Hd(e.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Pa=!1,st=!1,KI=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ni(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Vh(t,e,n){try{n()}catch(r){Re(t,e,r)}}var og=!1;function QI(t,e){if(yh=dl,t=t_(),jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,g=t,y=null;t:for(;;){for(var T;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(T=g.firstChild)!==null;)y=g,g=T;for(;;){if(g===t)break t;if(y===n&&++c===i&&(l=o),y===s&&++f===r&&(u=o),(T=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vh={focusedElem:t,selectionRange:n},dl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,D=R.memoizedState,w=e.stateNode,m=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:Ht(e.type,P),D);w.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(k){Re(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return R=og,og=!1,R}function Zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vh(e,n,s)}i=i.next}while(i!==r)}}function lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Oh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Y_(t){var e=t.alternate;e!==null&&(t.alternate=null,Y_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[Eo],delete e[Eh],delete e[NI],delete e[bI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function J_(t){return t.tag===5||t.tag===3||t.tag===4}function ag(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||J_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(r!==4&&(t=t.child,t!==null))for(Lh(t,e,n),t=t.sibling;t!==null;)Lh(t,e,n),t=t.sibling}function Mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}var He=null,qt=!1;function Bn(t,e,n){for(n=n.child;n!==null;)Z_(t,e,n),n=n.sibling}function Z_(t,e,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(eu,n)}catch{}switch(n.tag){case 5:st||Ni(n,e);case 6:var r=He,i=qt;He=null,Bn(t,e,n),He=r,qt=i,He!==null&&(qt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(qt?(t=He,n=n.stateNode,t.nodeType===8?Sc(t.parentNode,n):t.nodeType===1&&Sc(t,n),go(t)):Sc(He,n.stateNode));break;case 4:r=He,i=qt,He=n.stateNode.containerInfo,qt=!0,Bn(t,e,n),He=r,qt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vh(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!st&&(Ni(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Bn(t,e,n),st=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function lg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KI),e.forEach(function(r){var i=iS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,qt=!1;break e;case 3:He=l.stateNode.containerInfo,qt=!0;break e;case 4:He=l.stateNode.containerInfo,qt=!0;break e}l=l.return}if(He===null)throw Error(F(160));Z_(s,o,i),He=null,qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)e0(e,t),e=e.sibling}function e0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),en(t),r&4){try{Zs(3,t,t.return),lu(3,t)}catch(P){Re(t,t.return,P)}try{Zs(5,t,t.return)}catch(P){Re(t,t.return,P)}}break;case 1:Bt(e,t),en(t),r&512&&n!==null&&Ni(n,n.return);break;case 5:if(Bt(e,t),en(t),r&512&&n!==null&&Ni(n,n.return),t.flags&32){var i=t.stateNode;try{ho(i,"")}catch(P){Re(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Tv(i,s),ah(l,o);var c=ah(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?Rv(i,g):f==="dangerouslySetInnerHTML"?xv(i,g):f==="children"?ho(i,g):xd(i,f,g,c)}switch(l){case"input":nh(i,s);break;case"textarea":Iv(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Vi(i,!!s.multiple,T,!1):y!==!!s.multiple&&(s.defaultValue!=null?Vi(i,!!s.multiple,s.defaultValue,!0):Vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Eo]=s}catch(P){Re(t,t.return,P)}}break;case 6:if(Bt(e,t),en(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Re(t,t.return,P)}}break;case 3:if(Bt(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(P){Re(t,t.return,P)}break;case 4:Bt(e,t),en(t);break;case 13:Bt(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(sf=ke())),r&4&&lg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(st=(c=st)||f,Bt(e,t),st=c):Bt(e,t),en(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(g=H=f;H!==null;){switch(y=H,T=y.child,y.tag){case 0:case 11:case 14:case 15:Zs(4,y,y.return);break;case 1:Ni(y,y.return);var R=y.stateNode;if(typeof R.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Re(r,n,P)}}break;case 5:Ni(y,y.return);break;case 22:if(y.memoizedState!==null){cg(g);continue}}T!==null?(T.return=y,H=T):cg(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Av("display",o))}catch(P){Re(t,t.return,P)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(P){Re(t,t.return,P)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Bt(e,t),en(t),r&4&&lg(t);break;case 21:break;default:Bt(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(J_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ho(i,""),r.flags&=-33);var s=ag(t);Mh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ag(t);Lh(t,l,o);break;default:throw Error(F(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function XI(t,e,n){H=t,t0(t)}function t0(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||st;l=Pa;var c=st;if(Pa=o,(st=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?hg(i):u!==null?(u.return=o,H=u):hg(i);for(;s!==null;)H=s,t0(s),s=s.sibling;H=i,Pa=l,st=c}ug(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):ug(t)}}function ug(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||lu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&go(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}st||e.flags&512&&Oh(e)}catch(y){Re(e,e.return,y)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function cg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function hg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lu(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{Oh(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{Oh(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var YI=Math.ceil,Al=jn.ReactCurrentDispatcher,nf=jn.ReactCurrentOwner,jt=jn.ReactCurrentBatchConfig,se=0,ze=null,Ne=null,Ge=0,xt=0,bi=Sr(0),Oe=0,Ro=null,Kr=0,uu=0,rf=0,eo=null,gt=null,sf=0,Xi=1/0,Tn=null,Rl=!1,jh=null,ar=null,Na=!1,er=null,Cl=0,to=0,Fh=null,Ka=-1,Qa=0;function dt(){return se&6?ke():Ka!==-1?Ka:Ka=ke()}function lr(t){return t.mode&1?se&2&&Ge!==0?Ge&-Ge:VI.transition!==null?(Qa===0&&(Qa=Fv()),Qa):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Wv(t.type)),t):1}function Qt(t,e,n,r){if(50<to)throw to=0,Fh=null,Error(F(185));jo(t,n,r),(!(se&2)||t!==ze)&&(t===ze&&(!(se&2)&&(uu|=n),Oe===4&&Kn(t,Ge)),Et(t,r),n===1&&se===0&&!(e.mode&1)&&(Xi=ke()+500,su&&xr()))}function Et(t,e){var n=t.callbackNode;VT(t,e);var r=hl(t,t===ze?Ge:0);if(r===0)n!==null&&wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wm(n),e===1)t.tag===0?DI(dg.bind(null,t)):h_(dg.bind(null,t)),kI(function(){!(se&6)&&xr()}),n=null;else{switch(Uv(r)){case 1:n=Pd;break;case 4:n=Mv;break;case 16:n=cl;break;case 536870912:n=jv;break;default:n=cl}n=u0(n,n0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function n0(t,e){if(Ka=-1,Qa=0,se&6)throw Error(F(327));var n=t.callbackNode;if(Fi()&&t.callbackNode!==n)return null;var r=hl(t,t===ze?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=kl(t,r);else{e=r;var i=se;se|=2;var s=i0();(ze!==t||Ge!==e)&&(Tn=null,Xi=ke()+500,$r(t,e));do try{eS();break}catch(l){r0(t,l)}while(!0);Bd(),Al.current=s,se=i,Ne!==null?e=0:(ze=null,Ge=0,e=Oe)}if(e!==0){if(e===2&&(i=dh(t),i!==0&&(r=i,e=Uh(t,i))),e===1)throw n=Ro,$r(t,0),Kn(t,r),Et(t,ke()),n;if(e===6)Kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!JI(i)&&(e=kl(t,r),e===2&&(s=dh(t),s!==0&&(r=s,e=Uh(t,s))),e===1))throw n=Ro,$r(t,0),Kn(t,r),Et(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Vr(t,gt,Tn);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=sf+500-ke(),10<e)){if(hl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wh(Vr.bind(null,t,gt,Tn),e);break}Vr(t,gt,Tn);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YI(r/1960))-r,10<r){t.timeoutHandle=wh(Vr.bind(null,t,gt,Tn),r);break}Vr(t,gt,Tn);break;case 5:Vr(t,gt,Tn);break;default:throw Error(F(329))}}}return Et(t,ke()),t.callbackNode===n?n0.bind(null,t):null}function Uh(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=kl(t,e),t!==2&&(e=gt,gt=n,e!==null&&zh(e)),t}function zh(t){gt===null?gt=t:gt.push.apply(gt,t)}function JI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~rf,e&=~uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function dg(t){if(se&6)throw Error(F(327));Fi();var e=hl(t,0);if(!(e&1))return Et(t,ke()),null;var n=kl(t,e);if(t.tag!==0&&n===2){var r=dh(t);r!==0&&(e=r,n=Uh(t,r))}if(n===1)throw n=Ro,$r(t,0),Kn(t,e),Et(t,ke()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,gt,Tn),Et(t,ke()),null}function of(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Xi=ke()+500,su&&xr())}}function Qr(t){er!==null&&er.tag===0&&!(se&6)&&Fi();var e=se;se|=1;var n=jt.transition,r=ce;try{if(jt.transition=null,ce=1,t)return t()}finally{ce=r,jt.transition=n,se=e,!(se&6)&&xr()}}function af(){xt=bi.current,ye(bi)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,CI(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Ud(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gl();break;case 3:Ki(),ye(_t),ye(at),Qd();break;case 5:Kd(r);break;case 4:Ki();break;case 13:ye(Ee);break;case 19:ye(Ee);break;case 10:Hd(r.type._context);break;case 22:case 23:af()}n=n.return}if(ze=t,Ne=t=ur(t.current,null),Ge=xt=e,Oe=0,Ro=null,rf=uu=Kr=0,gt=eo=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}jr=null}return t}function r0(t,e){do{var n=Ne;try{if(Bd(),qa.current=xl,Sl){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sl=!1}if(Gr=0,Ue=De=Ie=null,Js=!1,So=0,nf.current=null,n===null||n.return===null){Oe=1,Ro=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=Zm(o);if(T!==null){T.flags&=-257,eg(T,o,l,s,e),T.mode&1&&Jm(s,c,e),e=T,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){Jm(s,c,e),lf();break e}u=Error(F(426))}}else if(_e&&l.mode&1){var D=Zm(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),eg(D,o,l,s,e),zd(Qi(u,l));break e}}s=u=Qi(u,l),Oe!==4&&(Oe=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=U_(s,u,e);Wm(s,w);break e;case 1:l=u;var m=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(ar===null||!ar.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var k=z_(s,l,e);Wm(s,k);break e}}s=s.return}while(s!==null)}o0(n)}catch(L){e=L,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function i0(){var t=Al.current;return Al.current=xl,t===null?xl:t}function lf(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),ze===null||!(Kr&268435455)&&!(uu&268435455)||Kn(ze,Ge)}function kl(t,e){var n=se;se|=2;var r=i0();(ze!==t||Ge!==e)&&(Tn=null,$r(t,e));do try{ZI();break}catch(i){r0(t,i)}while(!0);if(Bd(),se=n,Al.current=r,Ne!==null)throw Error(F(261));return ze=null,Ge=0,Oe}function ZI(){for(;Ne!==null;)s0(Ne)}function eS(){for(;Ne!==null&&!xT();)s0(Ne)}function s0(t){var e=l0(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?o0(t):Ne=e,nf.current=null}function o0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=GI(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Ne=null;return}}else if(n=WI(n,e,xt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Oe===0&&(Oe=5)}function Vr(t,e,n){var r=ce,i=jt.transition;try{jt.transition=null,ce=1,tS(t,e,n,r)}finally{jt.transition=i,ce=r}return null}function tS(t,e,n,r){do Fi();while(er!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(OT(t,s),t===ze&&(Ne=ze=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,u0(cl,function(){return Fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=ce;ce=1;var l=se;se|=4,nf.current=null,QI(t,n),e0(n,t),EI(vh),dl=!!yh,vh=yh=null,t.current=n,XI(n),AT(),se=l,ce=o,jt.transition=s}else t.current=n;if(Na&&(Na=!1,er=t,Cl=i),s=t.pendingLanes,s===0&&(ar=null),kT(n.stateNode),Et(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rl)throw Rl=!1,t=jh,jh=null,t;return Cl&1&&t.tag!==0&&Fi(),s=t.pendingLanes,s&1?t===Fh?to++:(to=0,Fh=t):to=0,xr(),null}function Fi(){if(er!==null){var t=Uv(Cl),e=jt.transition,n=ce;try{if(jt.transition=null,ce=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,Cl=0,se&6)throw Error(F(331));var i=se;for(se|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Zs(8,f,s)}var g=f.child;if(g!==null)g.return=f,H=g;else for(;H!==null;){f=H;var y=f.sibling,T=f.return;if(Y_(f),f===c){H=null;break}if(y!==null){y.return=T,H=y;break}H=T}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}var m=t.current;for(H=m;H!==null;){o=H;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,H=I;else e:for(o=m;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:lu(9,l)}}catch(L){Re(l,l.return,L)}if(l===o){H=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,H=k;break e}H=l.return}}if(se=i,xr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(eu,t)}catch{}r=!0}return r}finally{ce=n,jt.transition=e}}return!1}function fg(t,e,n){e=Qi(n,e),e=U_(t,e,1),t=or(t,e,1),e=dt(),t!==null&&(jo(t,1,e),Et(t,e))}function Re(t,e,n){if(t.tag===3)fg(t,t,n);else for(;e!==null;){if(e.tag===3){fg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=Qi(n,t),t=z_(e,t,1),e=or(e,t,1),t=dt(),e!==null&&(jo(e,1,t),Et(e,t));break}}e=e.return}}function nS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ge&n)===n&&(Oe===4||Oe===3&&(Ge&130023424)===Ge&&500>ke()-sf?$r(t,0):rf|=n),Et(t,e)}function a0(t,e){e===0&&(t.mode&1?(e=Ea,Ea<<=1,!(Ea&130023424)&&(Ea=4194304)):e=1);var n=dt();t=bn(t,e),t!==null&&(jo(t,e,n),Et(t,n))}function rS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),a0(t,n)}function iS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),a0(t,n)}var l0;l0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,qI(t,e,n);vt=!!(t.flags&131072)}else vt=!1,_e&&e.flags&1048576&&d_(e,_l,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ga(t,e),t=e.pendingProps;var i=qi(e,at.current);ji(e,n),i=Yd(null,e,r,t,i,n);var s=Jd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,yl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wd(e),i.updater=au,e.stateNode=i,i._reactInternals=e,Rh(e,r,t,n),e=Ph(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&Fd(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ga(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=oS(r),t=Ht(r,t),i){case 0:e=kh(null,e,r,t,n);break e;case 1:e=rg(null,e,r,t,n);break e;case 11:e=tg(null,e,r,t,n);break e;case 14:e=ng(null,e,r,Ht(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),kh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),rg(t,e,r,i,n);case 3:e:{if(q_(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,v_(t,e),Tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qi(Error(F(423)),e),e=ig(t,e,r,n,i);break e}else if(r!==i){i=Qi(Error(F(424)),e),e=ig(t,e,r,n,i);break e}else for(At=sr(e.stateNode.containerInfo.firstChild),Ct=e,_e=!0,Wt=null,n=g_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){e=Dn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return __(e),t===null&&Sh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_h(r,i)?o=null:s!==null&&_h(r,s)&&(e.flags|=32),H_(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&Sh(e),null;case 13:return W_(t,e,n);case 4:return Gd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gi(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),tg(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(wl,r._currentValue),r._currentValue=o,s!==null)if(Xt(s.value,o)){if(s.children===i.children&&!_t.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Cn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),xh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ji(e,n),i=Ut(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=Ht(r,e.pendingProps),i=Ht(r.type,i),ng(t,e,r,i,n);case 15:return $_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Ga(t,e),e.tag=1,wt(r)?(t=!0,yl(e)):t=!1,ji(e,n),F_(e,r,i),Rh(e,r,i,n),Ph(null,e,r,!0,t,n);case 19:return G_(t,e,n);case 22:return B_(t,e,n)}throw Error(F(156,e.tag))};function u0(t,e){return Lv(t,e)}function sS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new sS(t,e,n,r)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oS(t){if(typeof t=="function")return uf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rd)return 11;if(t===Cd)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")uf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ti:return Br(n.children,i,s,e);case Ad:o=8,i|=8;break;case Yc:return t=Mt(12,n,e,i|2),t.elementType=Yc,t.lanes=s,t;case Jc:return t=Mt(13,n,e,i),t.elementType=Jc,t.lanes=s,t;case Zc:return t=Mt(19,n,e,i),t.elementType=Zc,t.lanes=s,t;case _v:return cu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yv:o=10;break e;case vv:o=9;break e;case Rd:o=11;break e;case Cd:o=14;break e;case qn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Br(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function cu(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=_v,t.lanes=n,t.stateNode={isHidden:!1},t}function bc(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function Dc(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cf(t,e,n,r,i,s,o,l,u){return t=new aS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wd(s),t}function lS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function c0(t){if(!t)return mr;t=t._reactInternals;e:{if(ii(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(wt(n))return c_(t,n,e)}return e}function h0(t,e,n,r,i,s,o,l,u){return t=cf(n,r,!0,t,i,s,o,l,u),t.context=c0(null),n=t.current,r=dt(),i=lr(n),s=Cn(r,i),s.callback=e??null,or(n,s,i),t.current.lanes=i,jo(t,i,r),Et(t,r),t}function hu(t,e,n,r){var i=e.current,s=dt(),o=lr(i);return n=c0(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(i,e,o),t!==null&&(Qt(t,i,o,s),Ha(t,i,o)),o}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hf(t,e){pg(t,e),(t=t.alternate)&&pg(t,e)}function uS(){return null}var d0=typeof reportError=="function"?reportError:function(t){console.error(t)};function df(t){this._internalRoot=t}du.prototype.render=df.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));hu(t,e,null,null)};du.prototype.unmount=df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){hu(null,t,null,null)}),e[Nn]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&qv(t)}};function ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mg(){}function cS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Pl(o);s.call(c)}}var o=h0(e,r,t,0,null,!1,!1,"",mg);return t._reactRootContainer=o,t[Nn]=o.current,_o(t.nodeType===8?t.parentNode:t),Qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Pl(u);l.call(c)}}var u=cf(t,0,!1,null,null,!1,!1,"",mg);return t._reactRootContainer=u,t[Nn]=u.current,_o(t.nodeType===8?t.parentNode:t),Qr(function(){hu(e,u,n,r)}),u}function pu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Pl(o);l.call(u)}}hu(e,o,t,i)}else o=cS(n,e,t,i,r);return Pl(o)}zv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=js(e.pendingLanes);n!==0&&(Nd(e,n|1),Et(e,ke()),!(se&6)&&(Xi=ke()+500,xr()))}break;case 13:Qr(function(){var r=bn(t,1);if(r!==null){var i=dt();Qt(r,t,1,i)}}),hf(t,1)}};bd=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=dt();Qt(e,t,134217728,n)}hf(t,134217728)}};$v=function(t){if(t.tag===13){var e=lr(t),n=bn(t,e);if(n!==null){var r=dt();Qt(n,t,e,r)}hf(t,e)}};Bv=function(){return ce};Hv=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};uh=function(t,e,n){switch(e){case"input":if(nh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=iu(r);if(!i)throw Error(F(90));Ev(r),nh(r,i)}}}break;case"textarea":Iv(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};Pv=of;Nv=Qr;var hS={usingClientEntryPoint:!1,Events:[Uo,Ai,iu,Cv,kv,of]},Os={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dS={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vv(t),t===null?null:t.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||uS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{eu=ba.inject(dS),sn=ba}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hS;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ff(e))throw Error(F(200));return lS(t,e,null,n)};Nt.createRoot=function(t,e){if(!ff(t))throw Error(F(299));var n=!1,r="",i=d0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=cf(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,_o(t.nodeType===8?t.parentNode:t),new df(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Vv(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return Qr(t)};Nt.hydrate=function(t,e,n){if(!fu(e))throw Error(F(200));return pu(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!ff(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=d0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=h0(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new du(e)};Nt.render=function(t,e,n){if(!fu(e))throw Error(F(200));return pu(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!fu(t))throw Error(F(40));return t._reactRootContainer?(Qr(function(){pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Nt.unstable_batchedUpdates=of;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return pu(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function f0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f0)}catch(t){console.error(t)}}f0(),fv.exports=Nt;var fS=fv.exports,p0,gg=fS;p0=gg.createRoot,gg.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),we=(t,e)=>{const n=Z.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>Z.createElement("svg",{ref:f,...pS,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${mS(t)}`,l].join(" "),...c},[...e.map(([g,y])=>Z.createElement(g,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=we("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=we("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=we("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=we("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=we("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=we("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=we("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=we("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=we("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=we("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=we("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=we("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=we("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=we("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=we("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=we("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=we("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=we("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=we("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=we("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=we("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=we("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=we("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=we("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);let Bh=null;const DS=t=>{Bh=t},z=t=>{const n=`[${new Date().toLocaleTimeString()}] ${t}`;console.log(n),Bh&&Bh(n)},VS=t=>new Promise((e,n)=>{z("🔄 Redimensionnement de l'image à 896x1152...");const r=document.createElement("canvas"),i=r.getContext("2d"),s=new Image;if(!i){n(new Error("Impossible de créer le contexte canvas"));return}s.onload=()=>{r.width=896,r.height=1152,i.fillStyle="#ffffff",i.fillRect(0,0,896,1152);const u=s.width/s.height,c=896/1152;let f,g;u>c?(g=1152,f=1152*u):(f=896,g=896/u);const y=(896-f)/2,T=(1152-g)/2;i.drawImage(s,y,T,f,g),r.toBlob(R=>{if(R){const P=new File([R],t.name,{type:"image/jpeg",lastModified:Date.now()});z(`✅ Image redimensionnée: ${P.size} bytes`),e(P)}else n(new Error("Impossible de créer le blob redimensionné"))},"image/jpeg",.9)},s.onerror=()=>{n(new Error("Impossible de charger l'image"))},s.src=URL.createObjectURL(t)}),OS=async(t,e)=>{z("🚀 Début du traitement d'image");try{if(z("🔍 Validation du fichier..."),!t||t.size===0)throw z("❌ Fichier invalide ou vide"),new Error("Fichier invalide ou vide");if(t.size>25*1024*1024)throw z(`❌ Fichier trop volumineux: ${t.size} bytes`),new Error("Fichier trop volumineux (max 25MB)");const n=(t.size/(1024*1024)).toFixed(2);if(z(`📏 Taille du fichier: ${t.size} bytes (${n} MB)`),!t.type.startsWith("image/"))throw z(`❌ Type de fichier invalide: ${t.type}`),new Error("Le fichier doit être une image");z(`✅ Fichier validé: ${t.name} (${t.size} bytes, ${t.type})`);let r;try{r=await VS(t)}catch(m){throw z(`❌ Erreur redimensionnement: ${m}`),new Error("Impossible de redimensionner l'image")}z("🔄 Début conversion base64...");let i;try{i=await LS(r);const m=(i.length*.75/1024).toFixed(2);z(`✅ Conversion réussie: ${i.length} caractères (~${m} KB)`)}catch(m){throw z(`❌ Erreur conversion: ${m}`),new Error("Impossible de traiter l'image")}if(!i||i.length===0)throw z("❌ Base64 vide après conversion"),new Error("Échec de la conversion de l'image");z(`🚀 Envoi vers webhook: ${e.gender} ${e.size.toUpperCase()}`),z("📦 Préparation du payload...");const s=e.mirror==="mirror"?"photo dans le miroir":"normal",o={image:i,gender:e.gender,size:e.size,mirror:s};z("📋 Paramètres ajoutés au payload:"),z(`  - gender: "${e.gender}"`),z(`  - size: "${e.size}"`),z(`  - mirror: "${s}"`);const l=JSON.stringify(o).length,u=(l/(1024*1024)).toFixed(2);if(z(`📦 Payload: ${l} caractères (${u} MB)`),l>100*1024*1024)throw z("❌ Payload trop volumineux pour l'envoi"),new Error("Image trop complexe à traiter. Essayez avec une image plus simple.");z(`📋 Paramètres: gender=${e.gender}, size=${e.size}, mirror=${e.mirror}`),z("🔍 Test de connectivité vers le serveur...");try{const m=await fetch("https://n8n-automatisation.fr/webhook-test/testvolt",{method:"OPTIONS",headers:{Accept:"*/*","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type",Origin:window.location.origin}});z(`✅ Test CORS: ${m.status} ${m.statusText}`);const I={"Access-Control-Allow-Origin":m.headers.get("Access-Control-Allow-Origin"),"Access-Control-Allow-Methods":m.headers.get("Access-Control-Allow-Methods"),"Access-Control-Allow-Headers":m.headers.get("Access-Control-Allow-Headers")};z(`🔍 Headers CORS: ${JSON.stringify(I)}`)}catch(m){z(`⚠️ Test CORS échoué: ${m}`)}const c=["https://n8n-automatisation.fr/webhook-test/testvolt","https://n8n-automatisation.fr/webhook/testvolt"];let f;const g=1;let y,T=null;for(const m of c){z(`🌐 Test de l'URL: ${m}`);for(let I=0;I<=g;I++)try{z(`🔄 Tentative ${I+1}/${g+1} pour ${m}`);const k=new AbortController,j=setTimeout(()=>{z("⏰ Timeout - annulation de la requête"),k.abort()},15e3);z(`📡 Envoi de la requête... (${u} MB)`);const E=Date.now(),_={"Content-Type":"application/json"};z(`📋 Headers envoyés: ${JSON.stringify(_)}`),f=await fetch(m,{method:"POST",headers:_,body:JSON.stringify(o),signal:k.signal}),clearTimeout(j);const A=Date.now()-E;z(`✅ Requête envoyée en ${A}ms`),z(`📡 Statut reçu: ${f.status} ${f.statusText}`);const C={};f.headers.forEach((N,x)=>{C[x]=N}),z(`📋 Headers réponse: ${JSON.stringify(C)}`),T=m;break}catch(k){y=k,z(`❌ Tentative ${I+1} échouée pour ${m}: ${k instanceof Error?k.message:String(k)}`),k instanceof Error&&(z(`🔍 Type d'erreur: ${k.name}`),z(`🔍 Message: ${k.message}`),k.message.includes("Load failed")?z('🌐 Erreur "Load failed" - Essai avec proxy CORS...'):k.message.includes("NetworkError")?z("📡 Erreur réseau - Vérifiez votre connexion"):k.message.includes("CORS")?z("🚫 Erreur CORS - Tentative avec proxy..."):k.message.includes("Failed to fetch")&&z("📡 Failed to fetch - Tentative avec méthode alternative...")),I===g?z(`❌ Toutes les tentatives ont échoué pour ${m}`):(z("⏳ Attente de 2000ms avant retry..."),await new Promise(j=>setTimeout(j,2e3)))}if(f){z(`✅ Succès avec l'URL: ${T}`);break}}if(!f)return z("❌ Aucune réponse reçue - passage en mode simulation"),z("❌ Impossible de contacter le serveur"),{success:!1,error:"Impossible de contacter le serveur de traitement. Vérifiez votre connexion internet."};if(z(`📡 Analyse de la réponse: ${f.status} ${f.statusText}`),!f.ok){const m=await f.text().catch(()=>"Erreur inconnue");throw z(`❌ Erreur serveur (${f.status}): ${m}`),new Error(`Erreur serveur (${f.status}): ${m}`)}const R=f.headers.get("content-type");z(`🎭 Type de contenu: ${R}`);const P=f.clone();try{const m=await P.text();if(z(`📝 Réponse reçue (${m.length} caractères)`),m.length===0)throw z("❌ Réponse vide du serveur"),new Error("Réponse vide du serveur");if(R!=null&&R.includes("application/json")){z("🔍 Parsing JSON...");const I=JSON.parse(m);if(z("📊 Données JSON reçues"),I.image||I.imageUrl||I.result){z("🖼️ Image trouvée dans la réponse");const k=I.image||I.imageUrl||I.result;if(typeof k=="string")return k.startsWith("http")?(z("✅ URL d'image reçue"),{success:!0,imageUrl:k}):k.startsWith("data:image/")?(z("✅ Image base64 avec préfixe reçue"),{success:!0,imageUrl:k}):(z("✅ Image base64 sans préfixe reçue"),{success:!0,imageUrl:`data:image/png;base64,${k}`})}return z("❌ Format de réponse JSON non reconnu"),{success:!1,error:"Format de réponse non reconnu"}}}catch(m){z(`⚠️ Impossible de lire comme texte: ${m}`)}z("🖼️ Traitement comme image binaire...");let D;try{D=await f.blob()}catch(m){throw z(`❌ Erreur lecture blob: ${m}`),new Error("Impossible de lire la réponse du serveur")}if(z(`📦 Blob reçu: ${D.size} bytes (${D.type})`),D.size===0)throw z("❌ Image reçue vide"),new Error("Image reçue vide");const w=URL.createObjectURL(D);return z("✅ URL de l'image créée"),z("🎯 Image reçue avec succès - Crédit sera déduit"),{success:!0,imageUrl:w}}catch(n){z(`❌ Erreur finale: ${n instanceof Error?n.message:n}`);let r="Erreur de traitement inconnue";return n instanceof Error&&(n.name==="AbortError"?r="Délai d'attente dépassé. Vérifiez votre connexion.":n.message.includes("Failed to fetch")||n.message.includes("NetworkError")?r="Problème de connexion. Vérifiez votre réseau.":n.message.includes("Load failed")?r="Problème de connexion réseau. Vérifiez votre connexion internet.":n.message.includes("413")||n.message.includes("Request Entity Too Large")?r="Image trop volumineuse pour le serveur. Réduisez la taille de votre image.":r=n.message),z(`❌ Message final: ${r}`),{success:!1,error:r}}},LS=t=>new Promise((e,n)=>{if(z(`🔄 Conversion ${t.name}: ${t.size} bytes`),!t){z("❌ Aucun fichier fourni"),n(new Error("Aucun fichier fourni"));return}z(`📁 Type: ${t.type}, Taille: ${(t.size/1024).toFixed(1)} KB`);const r=new FileReader;r.onload=()=>{z("✅ FileReader onload");try{if(typeof r.result=="string"){const i=r.result.split(",")[1];if(!i||i.length===0){z("❌ Base64 vide après split"),n(new Error("Conversion base64 échouée"));return}z(`✅ Base64: ${i.length} chars`),e(i)}else z("❌ Résultat FileReader invalide"),n(new Error("Format de fichier non supporté"))}catch(i){z(`❌ Erreur dans onload: ${i}`),n(new Error("Erreur lors de la conversion"))}},r.onerror=()=>{z("❌ FileReader onerror"),n(new Error("Impossible de lire le fichier"))},r.onabort=()=>{z("❌ FileReader onabort"),n(new Error("Lecture du fichier interrompue"))};try{z("🚀 Lecture fichier..."),r.readAsDataURL(t)}catch(i){z(`❌ Erreur démarrage readAsDataURL: ${i}`),n(new Error("Impossible d'initier la lecture du fichier"))}});/**
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
 */const MS=()=>{};var wg={};/**
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
 */const g0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},y0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(y=64)),r.push(n[f],n[g],n[y],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(g0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||g==null)throw new FS;const y=s<<2|l>>4;if(r.push(y),c!==64){const T=l<<4&240|c>>2;if(r.push(T),g!==64){const R=c<<6&192|g;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const US=function(t){const e=g0(t);return y0.encodeByteArray(e,!0)},Nl=function(t){return US(t).replace(/\./g,"")},v0=function(t){try{return y0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $S=()=>zS().__FIREBASE_DEFAULTS__,BS=()=>{if(typeof process>"u"||typeof wg>"u")return;const t=wg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},HS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&v0(t[1]);return e&&JSON.parse(e)},mu=()=>{try{return MS()||$S()||BS()||HS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_0=t=>{var e,n;return(n=(e=mu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},qS=t=>{const e=_0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},w0=()=>{var t;return(t=mu())==null?void 0:t.config},E0=t=>{var e;return(e=mu())==null?void 0:e[`_${t}`]};/**
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
 */class WS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ls(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function T0(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function GS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Nl(JSON.stringify(n)),Nl(JSON.stringify(o)),""].join(".")}const no={};function KS(){const t={prod:[],emulator:[]};for(const e of Object.keys(no))no[e]?t.emulator.push(e):t.prod.push(e);return t}function QS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Eg=!1;function I0(t,e){if(typeof window>"u"||typeof document>"u"||!ls(window.location.host)||no[t]===e||no[t]||Eg)return;no[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",s=KS().prod.length>0;function o(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,T){y.setAttribute("width","24"),y.setAttribute("id",T),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function c(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Eg=!0,o()},y}function f(y,T){y.setAttribute("id",T),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function g(){const y=QS(r),T=n("text"),R=document.getElementById(T)||document.createElement("span"),P=n("learnmore"),D=document.getElementById(P)||document.createElement("a"),w=n("preprendIcon"),m=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const I=y.element;l(I),f(D,P);const k=c();u(m,w),I.append(m,R,D,k),document.body.appendChild(I)}s?(R.innerText="Preview backend disconnected.",m.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(m.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function YS(){var e;const t=(e=mu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function S0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ex(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tx(){return!YS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x0(){try{return typeof indexedDB=="object"}catch{return!1}}function A0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function nx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const rx="FirebaseError";class Zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rx,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ix(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,l,r)}}function ix(t,e){return t.replace(sx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sx=/\{\$([^}]+)}/g;function ox(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tg(s)&&Tg(o)){if(!gr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tg(t){return t!==null&&typeof t=="object"}/**
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
 */function $o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ax(t,e){const n=new lx(t,e);return n.subscribe.bind(n)}class lx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ux(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vc),i.error===void 0&&(i.error=Vc),i.complete===void 0&&(i.complete=Vc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ux(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vc(){}/**
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
 */const cx=1e3,hx=2,dx=4*60*60*1e3,fx=.5;function Ig(t,e=cx,n=hx){const r=e*Math.pow(n,t),i=Math.round(fx*r*(Math.random()-.5)*2);return Math.min(dx,r+i)}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class px{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gx(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mx(t){return t===Or?void 0:t}function gx(t){return t.instantiationMode==="EAGER"}/**
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
 */class yx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new px(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const vx={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},_x=te.INFO,wx={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Ex=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gu{constructor(e){this.name=e,this._logLevel=_x,this._logHandler=Ex,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Tx=(t,e)=>e.some(n=>t instanceof n);let Sg,xg;function Ix(){return Sg||(Sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sx(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R0=new WeakMap,Hh=new WeakMap,C0=new WeakMap,Oc=new WeakMap,mf=new WeakMap;function xx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&R0.set(n,t)}).catch(()=>{}),mf.set(e,t),e}function Ax(t){if(Hh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hh.set(t,e)}let qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||C0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rx(t){qh=t(qh)}function Cx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lc(this),e,...n);return C0.set(r,e.sort?e.sort():[e]),cr(r)}:Sx().includes(t)?function(...e){return t.apply(Lc(this),e),cr(R0.get(this))}:function(...e){return cr(t.apply(Lc(this),e))}}function kx(t){return typeof t=="function"?Cx(t):(t instanceof IDBTransaction&&Ax(t),Tx(t,Ix())?new Proxy(t,qh):t)}function cr(t){if(t instanceof IDBRequest)return xx(t);if(Oc.has(t))return Oc.get(t);const e=kx(t);return e!==t&&(Oc.set(t,e),mf.set(e,t)),e}const Lc=t=>mf.get(t);function k0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(cr(o.result),u.oldVersion,u.newVersion,cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Px=["get","getKey","getAll","getAllKeys","count"],Nx=["put","add","delete","clear"],Mc=new Map;function Ag(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Nx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Px.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Mc.set(e,s),s}Rx(t=>({...t,get:(e,n,r)=>Ag(e,n)||t.get(e,n,r),has:(e,n)=>!!Ag(e,n)||t.has(e,n)}));/**
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
 */class bx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",Rg="0.14.2";/**
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
 */const Vn=new gu("@firebase/app"),Vx="@firebase/app-compat",Ox="@firebase/analytics-compat",Lx="@firebase/analytics",Mx="@firebase/app-check-compat",jx="@firebase/app-check",Fx="@firebase/auth",Ux="@firebase/auth-compat",zx="@firebase/database",$x="@firebase/data-connect",Bx="@firebase/database-compat",Hx="@firebase/functions",qx="@firebase/functions-compat",Wx="@firebase/installations",Gx="@firebase/installations-compat",Kx="@firebase/messaging",Qx="@firebase/messaging-compat",Xx="@firebase/performance",Yx="@firebase/performance-compat",Jx="@firebase/remote-config",Zx="@firebase/remote-config-compat",eA="@firebase/storage",tA="@firebase/storage-compat",nA="@firebase/firestore",rA="@firebase/ai",iA="@firebase/firestore-compat",sA="firebase",oA="12.2.0";/**
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
 */const Gh="[DEFAULT]",aA={[Wh]:"fire-core",[Vx]:"fire-core-compat",[Lx]:"fire-analytics",[Ox]:"fire-analytics-compat",[jx]:"fire-app-check",[Mx]:"fire-app-check-compat",[Fx]:"fire-auth",[Ux]:"fire-auth-compat",[zx]:"fire-rtdb",[$x]:"fire-data-connect",[Bx]:"fire-rtdb-compat",[Hx]:"fire-fn",[qx]:"fire-fn-compat",[Wx]:"fire-iid",[Gx]:"fire-iid-compat",[Kx]:"fire-fcm",[Qx]:"fire-fcm-compat",[Xx]:"fire-perf",[Yx]:"fire-perf-compat",[Jx]:"fire-rc",[Zx]:"fire-rc-compat",[eA]:"fire-gcs",[tA]:"fire-gcs-compat",[nA]:"fire-fst",[iA]:"fire-fst-compat",[rA]:"fire-vertex","fire-js":"fire-js",[sA]:"fire-js-all"};/**
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
 */const bl=new Map,lA=new Map,Kh=new Map;function Cg(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pn(t){const e=t.name;if(Kh.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Kh.set(e,t);for(const n of bl.values())Cg(n,t);for(const n of lA.values())Cg(n,t);return!0}function ai(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
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
 */const uA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new oi("app","Firebase",uA);/**
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
 */class cA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const us=oA;function P0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Gh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=w0()),!n)throw hr.create("no-options");const s=bl.get(i);if(s){if(gr(n,s.options)&&gr(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new yx(i);for(const u of Kh.values())o.addComponent(u);const l=new cA(n,r,o);return bl.set(i,l),l}function gf(t=Gh){const e=bl.get(t);if(!e&&t===Gh&&w0())return P0();if(!e)throw hr.create("no-app",{appName:t});return e}function Ft(t,e,n){let r=aA[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(o.join(" "));return}pn(new Yt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const hA="firebase-heartbeat-database",dA=1,Co="firebase-heartbeat-store";let jc=null;function N0(){return jc||(jc=k0(hA,dA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Co)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),jc}async function fA(t){try{const n=(await N0()).transaction(Co),r=await n.objectStore(Co).get(b0(t));return await n.done,r}catch(e){if(e instanceof Zt)Vn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function kg(t,e){try{const r=(await N0()).transaction(Co,"readwrite");await r.objectStore(Co).put(e,b0(t)),await r.done}catch(n){if(n instanceof Zt)Vn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function b0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pA=1024,mA=30;class gA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>mA){const o=_A(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pg(),{heartbeatsToSend:r,unsentEntries:i}=yA(this._heartbeatsCache.heartbeats),s=Nl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vn.warn(n),""}}}function Pg(){return new Date().toISOString().substring(0,10)}function yA(t,e=pA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ng(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x0()?A0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return kg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return kg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ng(t){return Nl(JSON.stringify({version:2,heartbeats:t})).length}function _A(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function wA(t){pn(new Yt("platform-logger",e=>new bx(e),"PRIVATE")),pn(new Yt("heartbeat",e=>new gA(e),"PRIVATE")),Ft(Wh,Rg,t),Ft(Wh,Rg,"esm2020"),Ft("fire-js","")}wA("");function D0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EA=D0,V0=new oi("auth","Firebase",D0());/**
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
 */const Dl=new gu("@firebase/auth");function TA(t,...e){Dl.logLevel<=te.WARN&&Dl.warn(`Auth (${us}): ${t}`,...e)}function Ya(t,...e){Dl.logLevel<=te.ERROR&&Dl.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw yf(t,...e)}function an(t,...e){return yf(t,...e)}function O0(t,e,n){const r={...EA(),[e]:n};return new oi("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return O0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return V0.create(t,...e)}function G(t,e,...n){if(!t)throw yf(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ya(e),new Error(e)}function On(t,e){t||An(e)}/**
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
 */function Qh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function IA(){return bg()==="http:"||bg()==="https:"}function bg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function SA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IA()||S0()||"connection"in navigator)?navigator.onLine:!0}function xA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=XS()||ZS()}get(){return SA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vf(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class L0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],CA=new Bo(3e4,6e4);function Ar(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Fn(t,e,n,r,i={}){return M0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=$o({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return JS()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ls(t.emulatorConfig.host)&&(c.credentials="include"),L0.fetch()(await j0(t,t.config.apiHost,n,l),c)})}async function M0(t,e,n){t._canInitEmulator=!1;const r={...AA,...e};try{const i=new PA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Da(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Da(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Da(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Da(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw O0(t,f,c);Jt(t,f)}}catch(i){if(i instanceof Zt)throw i;Jt(t,"network-request-failed",{message:String(i)})}}async function Ho(t,e,n,r,i={}){const s=await Fn(t,e,n,r,i);return"mfaPendingCredential"in s&&Jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function j0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?vf(t.config,i):`${t.config.apiScheme}://${i}`;return RA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function kA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),CA.get())})}}function Da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(t,e,r);return i.customData._tokenResponse=n,i}function Dg(t){return t!==void 0&&t.enterprise!==void 0}class NA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bA(t,e){return Fn(t,"GET","/v2/recaptchaConfig",Ar(t,e))}/**
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
 */async function DA(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function Vl(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VA(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=_f(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ro(Fc(i.auth_time)),issuedAtTime:ro(Fc(i.iat)),expirationTime:ro(Fc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fc(t){return Number(t)*1e3}function _f(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ya("JWT malformed, contained fewer than 3 sections"),null;try{const i=v0(n);return i?JSON.parse(i):(Ya("Failed to decode base64 JWT payload"),null)}catch(i){return Ya("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vg(t){const e=_f(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zt&&OA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class LA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ol(t){var g;const e=t.auth,n=await t.getIdToken(),r=await Yi(t,Vl(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(g=i.providerUserInfo)!=null&&g.length?F0(i.providerUserInfo):[],o=jA(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Xh(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function MA(t){const e=je(t);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function F0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function FA(t,e){const n=await M0(t,{},async()=>{const r=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await j0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ls(t.emulatorConfig.host)&&(u.credentials="include"),L0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UA(t,e){return Fn(t,"POST","/v2/accounts:revokeToken",Ar(t,e))}/**
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
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Vg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ui;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function Hn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new LA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VA(this,e)}reload(){return MA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await Yi(this,DA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:g,emailVerified:y,isAnonymous:T,providerData:R,stsTokenManager:P}=n;G(g&&P,e,"internal-error");const D=Ui.fromJSON(this.name,P);G(typeof g=="string",e,"internal-error"),Hn(r,e.name),Hn(i,e.name),G(typeof y=="boolean",e,"internal-error"),G(typeof T=="boolean",e,"internal-error"),Hn(s,e.name),Hn(o,e.name),Hn(l,e.name),Hn(u,e.name),Hn(c,e.name),Hn(f,e.name);const w=new Gt({uid:g,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:T,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:f});return R&&Array.isArray(R)&&(w.providerData=R.map(m=>({...m}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ui;i.updateFromServerResponse(n);const s=new Gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ol(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?F0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ui;l.updateFromIdToken(r);const u=new Gt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Xh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */class U0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}U0.type="NONE";const Lg=U0;/**
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
 */function Ja(t,e,n){return`firebase:${t}:${e}:${n}`}class zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ja(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ja("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Vl(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zi(Rn(Lg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Rn(Lg);const o=Ja(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let g;if(typeof f=="string"){const y=await Vl(e,{idToken:f}).catch(()=>{});if(!y)break;g=await Gt._fromGetAccountInfoResponse(e,y,f)}else g=Gt._fromJSON(e,f);c!==s&&(l=g),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new zi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new zi(s,e,r))}}/**
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
 */function Mg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W0(e))return"Blackberry";if(G0(e))return"Webos";if($0(e))return"Safari";if((e.includes("chrome/")||B0(e))&&!e.includes("edge/"))return"Chrome";if(q0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z0(t=lt()){return/firefox\//i.test(t)}function $0(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function B0(t=lt()){return/crios\//i.test(t)}function H0(t=lt()){return/iemobile/i.test(t)}function q0(t=lt()){return/android/i.test(t)}function W0(t=lt()){return/blackberry/i.test(t)}function G0(t=lt()){return/webos/i.test(t)}function wf(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zA(t=lt()){var e;return wf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function $A(){return ex()&&document.documentMode===10}function K0(t=lt()){return wf(t)||q0(t)||G0(t)||W0(t)||/windows phone/i.test(t)||H0(t)}/**
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
 */function Q0(t,e=[]){let n;switch(t){case"Browser":n=Mg(lt());break;case"Worker":n=`${Mg(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class BA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function HA(t,e={}){return Fn(t,"GET","/v2/passwordPolicy",Ar(t,e))}/**
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
 */const qA=6;class WA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??qA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class GA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jg(this),this.idTokenSubscription=new jg(this),this.beforeStateQueue=new BA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await zi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vl(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(kn(this));const n=e?je(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HA(this),n=new WA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await zi.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&TA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function li(t){return je(t)}class jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=ax(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KA(t){yu=t}function X0(t){return yu.loadJS(t)}function QA(){return yu.recaptchaEnterpriseScript}function XA(){return yu.gapiScript}function YA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class JA{constructor(){this.enterprise=new ZA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const eR="recaptcha-enterprise",Y0="NO_RECAPTCHA";class tR{constructor(e){this.type=eR,this.auth=li(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{bA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new NA(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Dg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Y0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Dg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=QA();u.length!==0&&(u+=l),X0(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Fg(t,e,n,r=!1,i=!1){const s=new tR(t);let o;if(i)o=Y0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Yh(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Fg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Fg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function nR(t,e){const n=ai(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(gr(s,e??{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function rR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iR(t,e,n){const r=li(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=J0(e),{host:o,port:l}=sR(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(gr(c,r.config.emulator)&&gr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ls(o)?(T0(`${s}//${o}${u}`),I0("Auth",!0)):oR()}function J0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sR(t){const e=J0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ug(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ug(o)}}}function Ug(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ef{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function aR(t,e){return Fn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lR(t,e){return Ho(t,"POST","/v1/accounts:signInWithPassword",Ar(t,e))}/**
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
 */async function uR(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}async function cR(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}/**
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
 */class ko extends Ef{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yh(e,n,"signInWithPassword",lR);case"emailLink":return uR(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yh(e,r,"signUpPassword",aR);case"emailLink":return cR(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function $i(t,e){return Ho(t,"POST","/v1/accounts:signInWithIdp",Ar(t,e))}/**
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
 */const hR="http://localhost";class Xr extends Ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$i(e,n)}buildRequest(){const e={requestUri:hR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
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
 */function dR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fR(t){const e=Us(zs(t)).link,n=e?Us(zs(e)).deep_link_id:null,r=Us(zs(t)).deep_link_id;return(r?Us(zs(r)).link:null)||r||n||e||t}class Tf{constructor(e){const n=Us(zs(e)),r=n.apiKey??null,i=n.oobCode??null,s=dR(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=fR(e);try{return new Tf(n)}catch{return null}}}/**
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
 */class cs{constructor(){this.providerId=cs.PROVIDER_ID}static credential(e,n){return ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tf.parseLink(n);return G(r,"argument-error"),ko._fromEmailAndCode(e,r.code,r.tenantId)}}cs.PROVIDER_ID="password";cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Z0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qo extends Z0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qn extends qo{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Yn extends qo{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Jn extends qo{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */async function pR(t,e){return Ho(t,"POST","/v1/accounts:signUp",Ar(t,e))}/**
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
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gt._fromIdTokenResponse(e,r,i),o=zg(r);return new Yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=zg(r);return new Yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function zg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ll extends Zt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ll.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ll(e,n,r,i)}}function ew(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ll._fromErrorAndOperation(t,s,e,r):s})}async function mR(t,e,n=!1){const r=await Yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
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
 */async function gR(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(kn(r));const i="reauthenticate";try{const s=await Yi(t,ew(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=_f(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),s}}/**
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
 */async function tw(t,e,n=!1){if(Ot(t.app))return Promise.reject(kn(t));const r="signIn",i=await ew(t,r,e),s=await Yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function yR(t,e){return tw(li(t),e)}/**
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
 */async function nw(t){const e=li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vR(t,e,n){if(Ot(t.app))return Promise.reject(kn(t));const r=li(t),o=await Yh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&nw(t),u}),l=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function _R(t,e,n){return Ot(t.app)?Promise.reject(kn(t)):yR(je(t),cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nw(t),r})}/**
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
 */async function wR(t,e){return Fn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ER(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=je(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Yi(r,wR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function TR(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function IR(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function SR(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function xR(t){return je(t).signOut()}const Ml="__sak";/**
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
 */class rw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ml,"1"),this.storage.removeItem(Ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const AR=1e3,RR=10;class iw extends rw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=K0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$A()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iw.type="LOCAL";const CR=iw;/**
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
 */class sw extends rw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sw.type="SESSION";const ow=sw;/**
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
 */function kR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await kR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vu.receivers=[];/**
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
 */function If(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class PR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=If("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function NR(t){ln().location.href=t}/**
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
 */function aw(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function bR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function VR(){return aw()?self:null}/**
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
 */const lw="firebaseLocalStorageDb",OR=1,jl="firebaseLocalStorage",uw="fbase_key";class Wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _u(t,e){return t.transaction([jl],e?"readwrite":"readonly").objectStore(jl)}function LR(){const t=indexedDB.deleteDatabase(lw);return new Wo(t).toPromise()}function Jh(){const t=indexedDB.open(lw,OR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jl,{keyPath:uw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jl)?e(r):(r.close(),await LR(),e(await Jh()))})})}async function $g(t,e,n){const r=_u(t,!0).put({[uw]:e,value:n});return new Wo(r).toPromise()}async function MR(t,e){const n=_u(t,!1).get(e),r=await new Wo(n).toPromise();return r===void 0?null:r.value}function Bg(t,e){const n=_u(t,!0).delete(e);return new Wo(n).toPromise()}const jR=800,FR=3;class cw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vu._getInstance(VR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await bR(),!this.activeServiceWorker)return;this.sender=new PR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jh();return await $g(e,Ml,"1"),await Bg(e,Ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$g(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>MR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_u(i,!1).getAll();return new Wo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cw.type="LOCAL";const UR=cw;new Bo(3e4,6e4);/**
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
 */function zR(t,e){return e?Rn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sf extends Ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $R(t){return tw(t.auth,new Sf(t),t.bypassAuthState)}function BR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),gR(n,new Sf(t),t.bypassAuthState)}async function HR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),mR(n,new Sf(t),t.bypassAuthState)}/**
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
 */class hw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $R;case"linkViaPopup":case"linkViaRedirect":return HR;case"reauthViaPopup":case"reauthViaRedirect":return BR;default:Jt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qR=new Bo(2e3,1e4);class Di extends hw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Di.currentPopupAction&&Di.currentPopupAction.cancel(),Di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=If();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qR.get())};e()}}Di.currentPopupAction=null;/**
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
 */const WR="pendingRedirect",Za=new Map;class GR extends hw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Za.get(this.auth._key());if(!e){try{const r=await KR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Za.set(this.auth._key(),e)}return this.bypassAuthState||Za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KR(t,e){const n=YR(e),r=XR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function QR(t,e){Za.set(t._key(),e)}function XR(t){return Rn(t._redirectPersistence)}function YR(t){return Ja(WR,t.config.apiKey,t.name)}async function JR(t,e,n=!1){if(Ot(t.app))return Promise.reject(kn(t));const r=li(t),i=zR(r,e),o=await new GR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ZR=10*60*1e3;class eC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hg(e))}saveEventToCache(e){this.cachedEventUids.add(Hg(e)),this.lastProcessedEventTime=Date.now()}}function Hg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dw(t);default:return!1}}/**
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
 */async function nC(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
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
 */const rC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iC=/^https?/;async function sC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nC(t);for(const n of e)try{if(oC(n))return}catch{}Jt(t,"unauthorized-domain")}function oC(t){const e=Qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iC.test(n))return!1;if(rC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const aC=new Bo(3e4,6e4);function qg(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lC(t){return new Promise((e,n)=>{var i,s,o;function r(){qg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qg(),n(an(t,"network-request-failed"))},timeout:aC.get()})}if((s=(i=ln().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=ln().gapi)!=null&&o.load)r();else{const l=YA("iframefcb");return ln()[l]=()=>{gapi.load?r():n(an(t,"network-request-failed"))},X0(`${XA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw el=null,e})}let el=null;function uC(t){return el=el||lC(t),el}/**
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
 */const cC=new Bo(5e3,15e3),hC="__/auth/iframe",dC="emulator/auth/iframe",fC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mC(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vf(e,dC):`https://${t.config.authDomain}/${hC}`,r={apiKey:e.apiKey,appName:t.name,v:us},i=pC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$o(r).slice(1)}`}async function gC(t){const e=await uC(t),n=ln().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:mC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),l=ln().setTimeout(()=>{s(o)},cC.get());function u(){ln().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const yC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vC=500,_C=600,wC="_blank",EC="http://localhost";class Wg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TC(t,e,n,r=vC,i=_C){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...yC,width:r.toString(),height:i.toString(),top:s,left:o},c=lt().toLowerCase();n&&(l=B0(c)?wC:n),z0(c)&&(e=e||EC,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[T,R])=>`${y}${T}=${R},`,"");if(zA(c)&&l!=="_self")return IC(e||"",l),new Wg(null);const g=window.open(e||"",l,f);G(g,t,"popup-blocked");try{g.focus()}catch{}return new Wg(g)}function IC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SC="__/auth/handler",xC="emulator/auth/handler",AC=encodeURIComponent("fac");async function Gg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:i};if(e instanceof Z0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ox(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof qo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${AC}=${encodeURIComponent(u)}`:"";return`${RC(t)}?${$o(l).slice(1)}${c}`}function RC({config:t}){return t.emulator?vf(t,xC):`https://${t.authDomain}/${SC}`}/**
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
 */const Uc="webStorageSupport";class CC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ow,this._completeRedirectFn=JR,this._overrideRedirectResult=QR}async _openPopup(e,n,r,i){var o;On((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Gg(e,n,r,Qh(),i);return TC(e,s,If())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Gg(e,n,r,Qh(),i);return NR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(On(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gC(e),r=new eC(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uc,{type:Uc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Uc];s!==void 0&&n(!!s),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return K0()||$0()||wf()}}const kC=CC;var Kg="@firebase/auth",Qg="1.11.0";/**
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
 */class PC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bC(t){pn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q0(t)},c=new GA(r,i,s,u);return rR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pn(new Yt("auth-internal",e=>{const n=li(e.getProvider("auth").getImmediate());return(r=>new PC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Kg,Qg,NC(t)),Ft(Kg,Qg,"esm2020")}/**
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
 */const DC=5*60,VC=E0("authIdTokenMaxAge")||DC;let Xg=null;const OC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>VC)return;const i=n==null?void 0:n.token;Xg!==i&&(Xg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function LC(t=gf()){const e=ai(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nR(t,{popupRedirectResolver:kC,persistence:[UR,CR,ow]}),r=E0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=OC(s.toString());IR(n,o,()=>o(n.currentUser)),TR(n,l=>o(l))}}const i=_0("auth");return i&&iR(n,`http://${i}`),n}function MC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}KA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bC("Browser");var Yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,fw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function S(){}S.prototype=_.prototype,E.D=_.prototype,E.prototype=new S,E.prototype.constructor=E,E.C=function(A,C,N){for(var x=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)x[$e-2]=arguments[$e];return _.prototype[C].apply(A,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,S){S||(S=0);var A=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)A[C]=_.charCodeAt(S++)|_.charCodeAt(S++)<<8|_.charCodeAt(S++)<<16|_.charCodeAt(S++)<<24;else for(C=0;16>C;++C)A[C]=_[S++]|_[S++]<<8|_[S++]<<16|_[S++]<<24;_=E.g[0],S=E.g[1],C=E.g[2];var N=E.g[3],x=_+(N^S&(C^N))+A[0]+3614090360&4294967295;_=S+(x<<7&4294967295|x>>>25),x=N+(C^_&(S^C))+A[1]+3905402710&4294967295,N=_+(x<<12&4294967295|x>>>20),x=C+(S^N&(_^S))+A[2]+606105819&4294967295,C=N+(x<<17&4294967295|x>>>15),x=S+(_^C&(N^_))+A[3]+3250441966&4294967295,S=C+(x<<22&4294967295|x>>>10),x=_+(N^S&(C^N))+A[4]+4118548399&4294967295,_=S+(x<<7&4294967295|x>>>25),x=N+(C^_&(S^C))+A[5]+1200080426&4294967295,N=_+(x<<12&4294967295|x>>>20),x=C+(S^N&(_^S))+A[6]+2821735955&4294967295,C=N+(x<<17&4294967295|x>>>15),x=S+(_^C&(N^_))+A[7]+4249261313&4294967295,S=C+(x<<22&4294967295|x>>>10),x=_+(N^S&(C^N))+A[8]+1770035416&4294967295,_=S+(x<<7&4294967295|x>>>25),x=N+(C^_&(S^C))+A[9]+2336552879&4294967295,N=_+(x<<12&4294967295|x>>>20),x=C+(S^N&(_^S))+A[10]+4294925233&4294967295,C=N+(x<<17&4294967295|x>>>15),x=S+(_^C&(N^_))+A[11]+2304563134&4294967295,S=C+(x<<22&4294967295|x>>>10),x=_+(N^S&(C^N))+A[12]+1804603682&4294967295,_=S+(x<<7&4294967295|x>>>25),x=N+(C^_&(S^C))+A[13]+4254626195&4294967295,N=_+(x<<12&4294967295|x>>>20),x=C+(S^N&(_^S))+A[14]+2792965006&4294967295,C=N+(x<<17&4294967295|x>>>15),x=S+(_^C&(N^_))+A[15]+1236535329&4294967295,S=C+(x<<22&4294967295|x>>>10),x=_+(C^N&(S^C))+A[1]+4129170786&4294967295,_=S+(x<<5&4294967295|x>>>27),x=N+(S^C&(_^S))+A[6]+3225465664&4294967295,N=_+(x<<9&4294967295|x>>>23),x=C+(_^S&(N^_))+A[11]+643717713&4294967295,C=N+(x<<14&4294967295|x>>>18),x=S+(N^_&(C^N))+A[0]+3921069994&4294967295,S=C+(x<<20&4294967295|x>>>12),x=_+(C^N&(S^C))+A[5]+3593408605&4294967295,_=S+(x<<5&4294967295|x>>>27),x=N+(S^C&(_^S))+A[10]+38016083&4294967295,N=_+(x<<9&4294967295|x>>>23),x=C+(_^S&(N^_))+A[15]+3634488961&4294967295,C=N+(x<<14&4294967295|x>>>18),x=S+(N^_&(C^N))+A[4]+3889429448&4294967295,S=C+(x<<20&4294967295|x>>>12),x=_+(C^N&(S^C))+A[9]+568446438&4294967295,_=S+(x<<5&4294967295|x>>>27),x=N+(S^C&(_^S))+A[14]+3275163606&4294967295,N=_+(x<<9&4294967295|x>>>23),x=C+(_^S&(N^_))+A[3]+4107603335&4294967295,C=N+(x<<14&4294967295|x>>>18),x=S+(N^_&(C^N))+A[8]+1163531501&4294967295,S=C+(x<<20&4294967295|x>>>12),x=_+(C^N&(S^C))+A[13]+2850285829&4294967295,_=S+(x<<5&4294967295|x>>>27),x=N+(S^C&(_^S))+A[2]+4243563512&4294967295,N=_+(x<<9&4294967295|x>>>23),x=C+(_^S&(N^_))+A[7]+1735328473&4294967295,C=N+(x<<14&4294967295|x>>>18),x=S+(N^_&(C^N))+A[12]+2368359562&4294967295,S=C+(x<<20&4294967295|x>>>12),x=_+(S^C^N)+A[5]+4294588738&4294967295,_=S+(x<<4&4294967295|x>>>28),x=N+(_^S^C)+A[8]+2272392833&4294967295,N=_+(x<<11&4294967295|x>>>21),x=C+(N^_^S)+A[11]+1839030562&4294967295,C=N+(x<<16&4294967295|x>>>16),x=S+(C^N^_)+A[14]+4259657740&4294967295,S=C+(x<<23&4294967295|x>>>9),x=_+(S^C^N)+A[1]+2763975236&4294967295,_=S+(x<<4&4294967295|x>>>28),x=N+(_^S^C)+A[4]+1272893353&4294967295,N=_+(x<<11&4294967295|x>>>21),x=C+(N^_^S)+A[7]+4139469664&4294967295,C=N+(x<<16&4294967295|x>>>16),x=S+(C^N^_)+A[10]+3200236656&4294967295,S=C+(x<<23&4294967295|x>>>9),x=_+(S^C^N)+A[13]+681279174&4294967295,_=S+(x<<4&4294967295|x>>>28),x=N+(_^S^C)+A[0]+3936430074&4294967295,N=_+(x<<11&4294967295|x>>>21),x=C+(N^_^S)+A[3]+3572445317&4294967295,C=N+(x<<16&4294967295|x>>>16),x=S+(C^N^_)+A[6]+76029189&4294967295,S=C+(x<<23&4294967295|x>>>9),x=_+(S^C^N)+A[9]+3654602809&4294967295,_=S+(x<<4&4294967295|x>>>28),x=N+(_^S^C)+A[12]+3873151461&4294967295,N=_+(x<<11&4294967295|x>>>21),x=C+(N^_^S)+A[15]+530742520&4294967295,C=N+(x<<16&4294967295|x>>>16),x=S+(C^N^_)+A[2]+3299628645&4294967295,S=C+(x<<23&4294967295|x>>>9),x=_+(C^(S|~N))+A[0]+4096336452&4294967295,_=S+(x<<6&4294967295|x>>>26),x=N+(S^(_|~C))+A[7]+1126891415&4294967295,N=_+(x<<10&4294967295|x>>>22),x=C+(_^(N|~S))+A[14]+2878612391&4294967295,C=N+(x<<15&4294967295|x>>>17),x=S+(N^(C|~_))+A[5]+4237533241&4294967295,S=C+(x<<21&4294967295|x>>>11),x=_+(C^(S|~N))+A[12]+1700485571&4294967295,_=S+(x<<6&4294967295|x>>>26),x=N+(S^(_|~C))+A[3]+2399980690&4294967295,N=_+(x<<10&4294967295|x>>>22),x=C+(_^(N|~S))+A[10]+4293915773&4294967295,C=N+(x<<15&4294967295|x>>>17),x=S+(N^(C|~_))+A[1]+2240044497&4294967295,S=C+(x<<21&4294967295|x>>>11),x=_+(C^(S|~N))+A[8]+1873313359&4294967295,_=S+(x<<6&4294967295|x>>>26),x=N+(S^(_|~C))+A[15]+4264355552&4294967295,N=_+(x<<10&4294967295|x>>>22),x=C+(_^(N|~S))+A[6]+2734768916&4294967295,C=N+(x<<15&4294967295|x>>>17),x=S+(N^(C|~_))+A[13]+1309151649&4294967295,S=C+(x<<21&4294967295|x>>>11),x=_+(C^(S|~N))+A[4]+4149444226&4294967295,_=S+(x<<6&4294967295|x>>>26),x=N+(S^(_|~C))+A[11]+3174756917&4294967295,N=_+(x<<10&4294967295|x>>>22),x=C+(_^(N|~S))+A[2]+718787259&4294967295,C=N+(x<<15&4294967295|x>>>17),x=S+(N^(C|~_))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(C+(x<<21&4294967295|x>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var S=_-this.blockSize,A=this.B,C=this.h,N=0;N<_;){if(C==0)for(;N<=S;)i(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<_;)if(A[C++]=E.charCodeAt(N++),C==this.blockSize){i(this,A),C=0;break}}else for(;N<_;)if(A[C++]=E[N++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var S=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=S&255,S/=256;for(this.u(E),E=Array(16),_=S=0;4>_;++_)for(var A=0;32>A;A+=8)E[S++]=this.g[_]>>>A&255;return E};function s(E,_){var S=l;return Object.prototype.hasOwnProperty.call(S,E)?S[E]:S[E]=_(E)}function o(E,_){this.h=_;for(var S=[],A=!0,C=E.length-1;0<=C;C--){var N=E[C]|0;A&&N==_||(S[C]=N,A=!1)}this.g=S}var l={};function u(E){return-128<=E&&128>E?s(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return D(c(-E));for(var _=[],S=1,A=0;E>=S;A++)_[A]=E/S|0,S*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return D(f(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(_,8)),A=g,C=0;C<E.length;C+=8){var N=Math.min(8,E.length-C),x=parseInt(E.substring(C,C+N),_);8>N?(N=c(Math.pow(_,N)),A=A.j(N).add(c(x))):(A=A.j(S),A=A.add(c(x)))}return A}var g=u(0),y=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();for(var E=0,_=1,S=0;S<this.g.length;S++){var A=this.i(S);E+=(0<=A?A:4294967296+A)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(P(this))return"-"+D(this).toString(E);for(var _=c(Math.pow(E,6)),S=this,A="";;){var C=k(S,_).g;S=w(S,C.j(_));var N=((0<S.g.length?S.g[0]:S.h)>>>0).toString(E);if(S=C,R(S))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=w(this,E),P(E)?-1:R(E)?0:1};function D(E){for(var _=E.g.length,S=[],A=0;A<_;A++)S[A]=~E.g[A];return new o(S,~E.h).add(y)}t.abs=function(){return P(this)?D(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),S=[],A=0,C=0;C<=_;C++){var N=A+(this.i(C)&65535)+(E.i(C)&65535),x=(N>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);A=x>>>16,N&=65535,x&=65535,S[C]=x<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function w(E,_){return E.add(D(_))}t.j=function(E){if(R(this)||R(E))return g;if(P(this))return P(E)?D(this).j(D(E)):D(D(this).j(E));if(P(E))return D(this.j(D(E)));if(0>this.l(T)&&0>E.l(T))return c(this.m()*E.m());for(var _=this.g.length+E.g.length,S=[],A=0;A<2*_;A++)S[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<E.g.length;C++){var N=this.i(A)>>>16,x=this.i(A)&65535,$e=E.i(C)>>>16,ve=E.i(C)&65535;S[2*A+2*C]+=x*ve,m(S,2*A+2*C),S[2*A+2*C+1]+=N*ve,m(S,2*A+2*C+1),S[2*A+2*C+1]+=x*$e,m(S,2*A+2*C+1),S[2*A+2*C+2]+=N*$e,m(S,2*A+2*C+2)}for(A=0;A<_;A++)S[A]=S[2*A+1]<<16|S[2*A];for(A=_;A<2*_;A++)S[A]=0;return new o(S,0)};function m(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function I(E,_){this.g=E,this.h=_}function k(E,_){if(R(_))throw Error("division by zero");if(R(E))return new I(g,g);if(P(E))return _=k(D(E),_),new I(D(_.g),D(_.h));if(P(_))return _=k(E,D(_)),new I(D(_.g),_.h);if(30<E.g.length){if(P(E)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var S=y,A=_;0>=A.l(E);)S=L(S),A=L(A);var C=j(S,1),N=j(A,1);for(A=j(A,2),S=j(S,2);!R(A);){var x=N.add(A);0>=x.l(E)&&(C=C.add(S),N=x),A=j(A,1),S=j(S,1)}return _=w(E,C.j(_)),new I(C,_)}for(C=g;0<=E.l(_);){for(S=Math.max(1,Math.floor(E.m()/_.m())),A=Math.ceil(Math.log(S)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=c(S),x=N.j(_);P(x)||0<x.l(E);)S-=A,N=c(S),x=N.j(_);R(N)&&(N=y),C=C.add(N),E=w(E,x)}return new I(C,E)}t.A=function(E){return k(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),S=[],A=0;A<_;A++)S[A]=this.i(A)&E.i(A);return new o(S,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),S=[],A=0;A<_;A++)S[A]=this.i(A)|E.i(A);return new o(S,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),S=[],A=0;A<_;A++)S[A]=this.i(A)^E.i(A);return new o(S,this.h^E.h)};function L(E){for(var _=E.g.length+1,S=[],A=0;A<_;A++)S[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(S,E.h)}function j(E,_){var S=_>>5;_%=32;for(var A=E.g.length-S,C=[],N=0;N<A;N++)C[N]=0<_?E.i(N+S)>>>_|E.i(N+S+1)<<32-_:E.i(N+S);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,dr=o}).apply(typeof Yg<"u"?Yg:typeof self<"u"?self:typeof window<"u"?window:{});var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pw,$s,mw,tl,Zh,gw,yw,vw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Va=="object"&&Va];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var b=a[v];if(!(b in d))break e;d=d[b]}a=a[a.length-1],v=d[a],h=h(v),h!=v&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,v=!1,b={next:function(){if(!v&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return v=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function g(a,h,d){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,v),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function y(a,h,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function T(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var v=d.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(v,b,V){for(var U=Array(arguments.length-2),he=2;he<arguments.length;he++)U[he-2]=arguments[he];return h.prototype[b].apply(v,U)}}function P(a){const h=a.length;if(0<h){const d=Array(h);for(let v=0;v<h;v++)d[v]=a[v];return d}return[]}function D(a,h){for(let d=1;d<arguments.length;d++){const v=arguments[d];if(u(v)){const b=a.length||0,V=v.length||0;a.length=b+V;for(let U=0;U<V;U++)a[b+U]=v[U]}else a.push(v)}}class w{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function m(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function k(a){return k[" "](a),a}k[" "]=function(){};var L=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function j(a,h,d){for(const v in a)h.call(d,a[v],v,a)}function E(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function _(a){const h={};for(const d in a)h[d]=a[d];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,v;for(let b=1;b<arguments.length;b++){v=arguments[b];for(d in v)a[d]=v[d];for(let V=0;V<S.length;V++)d=S[V],Object.prototype.hasOwnProperty.call(v,d)&&(a[d]=v[d])}}function C(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function N(a){l.setTimeout(()=>{throw a},0)}function x(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class $e{constructor(){this.h=this.g=null}add(h,d){const v=ve.get();v.set(h,d),this.h?this.h.next=v:this.g=v,this.h=v}}var ve=new w(()=>new Xe,a=>a.reset());class Xe{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ye,$=!1,Q=new $e,Y=()=>{const a=l.Promise.resolve(void 0);Ye=()=>{a.then(de)}};var de=()=>{for(var a;a=x();){try{a.h.call(a.g)}catch(d){N(d)}var h=ve;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var It=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function yn(a,h){if(le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{k(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}R(yn,le);var vn={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _n="closure_listenable_"+(1e6*Math.random()|0),cE=0;function hE(a,h,d,v,b){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!v,this.ha=b,this.key=++cE,this.da=this.fa=!1}function Jo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Zo(a){this.src=a,this.g={},this.h=0}Zo.prototype.add=function(a,h,d,v,b){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var U=Uu(a,h,v,b);return-1<U?(h=a[U],d||(h.fa=!1)):(h=new hE(h,this.src,V,!!v,b),h.fa=d,a.push(h)),h};function Fu(a,h){var d=h.type;if(d in a.g){var v=a.g[d],b=Array.prototype.indexOf.call(v,h,void 0),V;(V=0<=b)&&Array.prototype.splice.call(v,b,1),V&&(Jo(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Uu(a,h,d,v){for(var b=0;b<a.length;++b){var V=a[b];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==v)return b}return-1}var zu="closure_lm_"+(1e6*Math.random()|0),$u={};function up(a,h,d,v,b){if(Array.isArray(h)){for(var V=0;V<h.length;V++)up(a,h[V],d,v,b);return null}return d=dp(d),a&&a[_n]?a.K(h,d,c(v)?!!v.capture:!!v,b):dE(a,h,d,!1,v,b)}function dE(a,h,d,v,b,V){if(!h)throw Error("Invalid event type");var U=c(b)?!!b.capture:!!b,he=Hu(a);if(he||(a[zu]=he=new Zo(a)),d=he.add(h,d,v,U,V),d.proxy)return d;if(v=fE(),d.proxy=v,v.src=a,v.listener=d,a.addEventListener)It||(b=U),b===void 0&&(b=!1),a.addEventListener(h.toString(),v,b);else if(a.attachEvent)a.attachEvent(hp(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return d}function fE(){function a(d){return h.call(a.src,a.listener,d)}const h=pE;return a}function cp(a,h,d,v,b){if(Array.isArray(h))for(var V=0;V<h.length;V++)cp(a,h[V],d,v,b);else v=c(v)?!!v.capture:!!v,d=dp(d),a&&a[_n]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=Uu(V,d,v,b),-1<d&&(Jo(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Hu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Uu(h,d,v,b)),(d=-1<a?h[a]:null)&&Bu(d))}function Bu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[_n])Fu(h.i,a);else{var d=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(d,v,a.capture):h.detachEvent?h.detachEvent(hp(d),v):h.addListener&&h.removeListener&&h.removeListener(v),(d=Hu(h))?(Fu(d,a),d.h==0&&(d.src=null,h[zu]=null)):Jo(a)}}}function hp(a){return a in $u?$u[a]:$u[a]="on"+a}function pE(a,h){if(a.da)a=!0;else{h=new yn(h,this);var d=a.listener,v=a.ha||a.src;a.fa&&Bu(a),a=d.call(v,h)}return a}function Hu(a){return a=a[zu],a instanceof Zo?a:null}var qu="__closure_events_fn_"+(1e9*Math.random()>>>0);function dp(a){return typeof a=="function"?a:(a[qu]||(a[qu]=function(h){return a.handleEvent(h)}),a[qu])}function Je(){ae.call(this),this.i=new Zo(this),this.M=this,this.F=null}R(Je,ae),Je.prototype[_n]=!0,Je.prototype.removeEventListener=function(a,h,d,v){cp(this,a,h,d,v)};function ut(a,h){var d,v=a.F;if(v)for(d=[];v;v=v.F)d.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new le(h,a);else if(h instanceof le)h.target=h.target||a;else{var b=h;h=new le(v,a),A(h,b)}if(b=!0,d)for(var V=d.length-1;0<=V;V--){var U=h.g=d[V];b=ea(U,v,!0,h)&&b}if(U=h.g=a,b=ea(U,v,!0,h)&&b,b=ea(U,v,!1,h)&&b,d)for(V=0;V<d.length;V++)U=h.g=d[V],b=ea(U,v,!1,h)&&b}Je.prototype.N=function(){if(Je.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],v=0;v<d.length;v++)Jo(d[v]);delete a.g[h],a.h--}}this.F=null},Je.prototype.K=function(a,h,d,v){return this.i.add(String(a),h,!1,d,v)},Je.prototype.L=function(a,h,d,v){return this.i.add(String(a),h,!0,d,v)};function ea(a,h,d,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,V=0;V<h.length;++V){var U=h[V];if(U&&!U.da&&U.capture==d){var he=U.listener,Be=U.ha||U.src;U.fa&&Fu(a.i,U),b=he.call(Be,v)!==!1&&b}}return b&&!v.defaultPrevented}function fp(a,h,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function pp(a){a.g=fp(()=>{a.g=null,a.i&&(a.i=!1,pp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class mE extends ae{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:pp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ms(a){ae.call(this),this.h=a,this.g={}}R(ms,ae);var mp=[];function gp(a){j(a.g,function(h,d){this.g.hasOwnProperty(d)&&Bu(h)},a),a.g={}}ms.prototype.N=function(){ms.aa.N.call(this),gp(this)},ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wu=l.JSON.stringify,gE=l.JSON.parse,yE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Gu(){}Gu.prototype.h=null;function yp(a){return a.h||(a.h=a.i())}function vp(){}var gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ku(){le.call(this,"d")}R(Ku,le);function Qu(){le.call(this,"c")}R(Qu,le);var kr={},_p=null;function ta(){return _p=_p||new Je}kr.La="serverreachability";function wp(a){le.call(this,kr.La,a)}R(wp,le);function ys(a){const h=ta();ut(h,new wp(h))}kr.STAT_EVENT="statevent";function Ep(a,h){le.call(this,kr.STAT_EVENT,a),this.stat=h}R(Ep,le);function ct(a){const h=ta();ut(h,new Ep(h,a))}kr.Ma="timingevent";function Tp(a,h){le.call(this,kr.Ma,a),this.size=h}R(Tp,le);function vs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function _s(){this.g=!0}_s.prototype.xa=function(){this.g=!1};function vE(a,h,d,v,b,V){a.info(function(){if(a.g)if(V)for(var U="",he=V.split("&"),Be=0;Be<he.length;Be++){var oe=he[Be].split("=");if(1<oe.length){var Ze=oe[0];oe=oe[1];var et=Ze.split("_");U=2<=et.length&&et[1]=="type"?U+(Ze+"="+oe+"&"):U+(Ze+"=redacted&")}}else U=null;else U=V;return"XMLHTTP REQ ("+v+") [attempt "+b+"]: "+h+`
`+d+`
`+U})}function _E(a,h,d,v,b,V,U){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+b+"]: "+h+`
`+d+`
`+V+" "+U})}function hi(a,h,d,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+EE(a,d)+(v?" "+v:"")})}function wE(a,h){a.info(function(){return"TIMEOUT: "+h})}_s.prototype.info=function(){};function EE(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var v=d[a];if(!(2>v.length)){var b=v[1];if(Array.isArray(b)&&!(1>b.length)){var V=b[0];if(V!="noop"&&V!="stop"&&V!="close")for(var U=1;U<b.length;U++)b[U]=""}}}}return Wu(d)}catch{return h}}var na={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ip={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xu;function ra(){}R(ra,Gu),ra.prototype.g=function(){return new XMLHttpRequest},ra.prototype.i=function(){return{}},Xu=new ra;function Un(a,h,d,v){this.j=a,this.i=h,this.l=d,this.R=v||1,this.U=new ms(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sp}function Sp(){this.i=null,this.g="",this.h=!1}var xp={},Yu={};function Ju(a,h,d){a.L=1,a.v=aa(wn(h)),a.m=d,a.P=!0,Ap(a,null)}function Ap(a,h){a.F=Date.now(),ia(a),a.A=wn(a.v);var d=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Up(d.i,"t",v),a.C=0,d=a.j.J,a.h=new Sp,a.g=im(a.j,d?h:null,!a.m),0<a.O&&(a.M=new mE(y(a.Y,a,a.g),a.O)),h=a.U,d=a.g,v=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(mp[0]=b.toString()),b=mp);for(var V=0;V<b.length;V++){var U=up(d,b[V],v||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ys(),vE(a.i,a.u,a.A,a.l,a.R,a.m)}Un.prototype.ca=function(a){a=a.target;const h=this.M;h&&En(a)==3?h.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const et=En(this.g);var h=this.g.Ba();const pi=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||Gp(this.g)))){this.J||et!=4||h==7||(h==8||0>=pi?ys(3):ys(2)),Zu(this);var d=this.g.Z();this.X=d;t:if(Rp(this)){var v=Gp(this.g);a="";var b=v.length,V=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),ws(this);var U="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(v[h],{stream:!(V&&h==b-1)});v.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,_E(this.i,this.u,this.A,this.l,this.R,et,d),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Be=this.g;if((he=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(he)){var oe=he;break t}}oe=null}if(d=oe)hi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ec(this,d);else{this.o=!1,this.s=3,ct(12),Pr(this),ws(this);break e}}if(this.P){d=!0;let $t;for(;!this.J&&this.C<U.length;)if($t=TE(this,U),$t==Yu){et==4&&(this.s=4,ct(14),d=!1),hi(this.i,this.l,null,"[Incomplete Response]");break}else if($t==xp){this.s=4,ct(15),hi(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else hi(this.i,this.l,$t,null),ec(this,$t);if(Rp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||U.length!=0||this.h.h||(this.s=1,ct(16),d=!1),this.o=this.o&&d,!d)hi(this.i,this.l,U,"[Invalid Chunked Response]"),Pr(this),ws(this);else if(0<U.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),oc(Ze),Ze.M=!0,ct(11))}}else hi(this.i,this.l,U,null),ec(this,U);et==4&&Pr(this),this.o&&!this.J&&(et==4?em(this.j,this):(this.o=!1,ia(this)))}else FE(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Pr(this),ws(this)}}}catch{}finally{}};function Rp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function TE(a,h){var d=a.C,v=h.indexOf(`
`,d);return v==-1?Yu:(d=Number(h.substring(d,v)),isNaN(d)?xp:(v+=1,v+d>h.length?Yu:(h=h.slice(v,v+d),a.C=v+d,h)))}Un.prototype.cancel=function(){this.J=!0,Pr(this)};function ia(a){a.S=Date.now()+a.I,Cp(a,a.I)}function Cp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vs(y(a.ba,a),h)}function Zu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(wE(this.i,this.A),this.L!=2&&(ys(),ct(17)),Pr(this),this.s=2,ws(this)):Cp(this,this.S-a)};function ws(a){a.j.G==0||a.J||em(a.j,a)}function Pr(a){Zu(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,gp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ec(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||tc(d.h,a))){if(!a.K&&tc(d.h,a)&&d.G==3){try{var v=d.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var b=v;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)fa(d),ha(d);else break e;sc(d),ct(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=vs(y(d.Za,d),6e3));if(1>=Np(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else br(d,11)}else if((a.K||d.g==a)&&fa(d),!m(h))for(b=d.Da.g.parse(h),h=0;h<b.length;h++){let oe=b[h];if(d.T=oe[0],oe=oe[1],d.G==2)if(oe[0]=="c"){d.K=oe[1],d.ia=oe[2];const Ze=oe[3];Ze!=null&&(d.la=Ze,d.j.info("VER="+d.la));const et=oe[4];et!=null&&(d.Aa=et,d.j.info("SVER="+d.Aa));const pi=oe[5];pi!=null&&typeof pi=="number"&&0<pi&&(v=1.5*pi,d.L=v,d.j.info("backChannelRequestTimeoutMs_="+v)),v=d;const $t=a.g;if($t){const ma=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ma){var V=v.h;V.g||ma.indexOf("spdy")==-1&&ma.indexOf("quic")==-1&&ma.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(nc(V,V.h),V.h=null))}if(v.D){const ac=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;ac&&(v.ya=ac,pe(v.I,v.D,ac))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),v=d;var U=a;if(v.qa=rm(v,v.J?v.ia:null,v.W),U.K){bp(v.h,U);var he=U,Be=v.L;Be&&(he.I=Be),he.B&&(Zu(he),ia(he)),v.g=U}else Jp(v);0<d.i.length&&da(d)}else oe[0]!="stop"&&oe[0]!="close"||br(d,7);else d.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?br(d,7):ic(d):oe[0]!="noop"&&d.l&&d.l.ta(oe),d.v=0)}}ys(4)}catch{}}var IE=class{constructor(a,h){this.g=a,this.map=h}};function kp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Np(a){return a.h?1:a.g?a.g.size:0}function tc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function nc(a,h){a.g?a.g.add(h):a.h=h}function bp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}kp.prototype.cancel=function(){if(this.i=Dp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Dp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return P(a.i)}function SE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,v=0;v<d;v++)h.push(a[v]);return h}h=[],d=0;for(v in a)h[d++]=a[v];return h}function xE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const v in a)h[d++]=v;return h}}}function Vp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=xE(a),v=SE(a),b=v.length,V=0;V<b;V++)h.call(void 0,v[V],d&&d[V],a)}var Op=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var v=a[d].indexOf("="),b=null;if(0<=v){var V=a[d].substring(0,v);b=a[d].substring(v+1)}else V=a[d];h(V,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Nr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Nr){this.h=a.h,sa(this,a.j),this.o=a.o,this.g=a.g,oa(this,a.s),this.l=a.l;var h=a.i,d=new Is;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Lp(this,d),this.m=a.m}else a&&(h=String(a).match(Op))?(this.h=!1,sa(this,h[1]||"",!0),this.o=Es(h[2]||""),this.g=Es(h[3]||"",!0),oa(this,h[4]),this.l=Es(h[5]||"",!0),Lp(this,h[6]||"",!0),this.m=Es(h[7]||"")):(this.h=!1,this.i=new Is(null,this.h))}Nr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ts(h,Mp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ts(h,Mp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ts(d,d.charAt(0)=="/"?kE:CE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ts(d,NE)),a.join("")};function wn(a){return new Nr(a)}function sa(a,h,d){a.j=d?Es(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function oa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Lp(a,h,d){h instanceof Is?(a.i=h,bE(a.i,a.h)):(d||(h=Ts(h,PE)),a.i=new Is(h,a.h))}function pe(a,h,d){a.i.set(h,d)}function aa(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Es(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ts(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,RE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function RE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mp=/[#\/\?@]/g,CE=/[#\?:]/g,kE=/[#\?]/g,PE=/[#\?@]/g,NE=/#/g;function Is(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function zn(a){a.g||(a.g=new Map,a.h=0,a.i&&AE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Is.prototype,t.add=function(a,h){zn(this),this.i=null,a=di(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function jp(a,h){zn(a),h=di(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Fp(a,h){return zn(a),h=di(a,h),a.g.has(h)}t.forEach=function(a,h){zn(this),this.g.forEach(function(d,v){d.forEach(function(b){a.call(h,b,v,this)},this)},this)},t.na=function(){zn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let v=0;v<h.length;v++){const b=a[v];for(let V=0;V<b.length;V++)d.push(h[v])}return d},t.V=function(a){zn(this);let h=[];if(typeof a=="string")Fp(this,a)&&(h=h.concat(this.g.get(di(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return zn(this),this.i=null,a=di(this,a),Fp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Up(a,h,d){jp(a,h),0<d.length&&(a.i=null,a.g.set(di(a,h),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var v=h[d];const V=encodeURIComponent(String(v)),U=this.V(v);for(v=0;v<U.length;v++){var b=V;U[v]!==""&&(b+="="+encodeURIComponent(String(U[v]))),a.push(b)}}return this.i=a.join("&")};function di(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function bE(a,h){h&&!a.j&&(zn(a),a.i=null,a.g.forEach(function(d,v){var b=v.toLowerCase();v!=b&&(jp(this,v),Up(this,b,d))},a)),a.j=h}function DE(a,h){const d=new _s;if(l.Image){const v=new Image;v.onload=T($n,d,"TestLoadImage: loaded",!0,h,v),v.onerror=T($n,d,"TestLoadImage: error",!1,h,v),v.onabort=T($n,d,"TestLoadImage: abort",!1,h,v),v.ontimeout=T($n,d,"TestLoadImage: timeout",!1,h,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function VE(a,h){const d=new _s,v=new AbortController,b=setTimeout(()=>{v.abort(),$n(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(V=>{clearTimeout(b),V.ok?$n(d,"TestPingServer: ok",!0,h):$n(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),$n(d,"TestPingServer: error",!1,h)})}function $n(a,h,d,v,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),v(d)}catch{}}function OE(){this.g=new yE}function LE(a,h,d){const v=d||"";try{Vp(a,function(b,V){let U=b;c(b)&&(U=Wu(b)),h.push(v+V+"="+encodeURIComponent(U))})}catch(b){throw h.push(v+"type="+encodeURIComponent("_badmap")),b}}function la(a){this.l=a.Ub||null,this.j=a.eb||!1}R(la,Gu),la.prototype.g=function(){return new ua(this.l,this.j)},la.prototype.i=function(a){return function(){return a}}({});function ua(a,h){Je.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ua,Je),t=ua.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function zp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ss(this):xs(this),this.readyState==3&&zp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ss(this))},t.Qa=function(a){this.g&&(this.response=a,Ss(this))},t.ga=function(){this.g&&Ss(this)};function Ss(a){a.readyState=4,a.l=null,a.j=null,a.v=null,xs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $p(a){let h="";return j(a,function(d,v){h+=v,h+=":",h+=d,h+=`\r
`}),h}function rc(a,h,d){e:{for(v in d){var v=!1;break e}v=!0}v||(d=$p(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):pe(a,h,d))}function Ae(a){Je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ae,Je);var ME=/^https?$/i,jE=["POST","PUT"];t=Ae.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xu.g(),this.v=this.o?yp(this.o):yp(Xu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Bp(this,V);return}if(a=d||"",d=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var b in v)d.set(b,v[b]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const V of v.keys())d.set(V,v.get(V));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jE,h,void 0))||v||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,U]of d)this.g.setRequestHeader(V,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wp(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Bp(this,V)}};function Bp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Hp(a),ca(a)}function Hp(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ut(this,"complete"),ut(this,"abort"),ca(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ca(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qp(this):this.bb())},t.bb=function(){qp(this)};function qp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||En(a)!=4||a.Z()!=2)){if(a.u&&En(a)==4)fp(a.Ea,0,a);else if(ut(a,"readystatechange"),En(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var v;if(v=U===0){var b=String(a.D).match(Op)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),v=!ME.test(b?b.toLowerCase():"")}d=v}if(d)ut(a,"complete"),ut(a,"success");else{a.m=6;try{var V=2<En(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Hp(a)}}finally{ca(a)}}}}function ca(a,h){if(a.g){Wp(a);const d=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ut(a,"ready");try{d.onreadystatechange=v}catch{}}}function Wp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function En(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),gE(h)}};function Gp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function FE(a){const h={};a=(a.g&&2<=En(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(m(a[v]))continue;var d=C(a[v]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[b]||[];h[b]=V,V.push(d)}E(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Kp(a){this.Aa=0,this.i=[],this.j=new _s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=As("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=As("baseRetryDelayMs",5e3,a),this.cb=As("retryDelaySeedMs",1e4,a),this.Wa=As("forwardChannelMaxRetries",2,a),this.wa=As("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new kp(a&&a.concurrentRequestLimit),this.Da=new OE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Kp.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,v){ct(0),this.W=a,this.H=h||{},d&&v!==void 0&&(this.H.OSID=d,this.H.OAID=v),this.F=this.X,this.I=rm(this,null,this.W),da(this)};function ic(a){if(Qp(a),a.G==3){var h=a.U++,d=wn(a.I);if(pe(d,"SID",a.K),pe(d,"RID",h),pe(d,"TYPE","terminate"),Rs(a,d),h=new Un(a,a.j,h),h.L=2,h.v=aa(wn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=im(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ia(h)}nm(a)}function ha(a){a.g&&(oc(a),a.g.cancel(),a.g=null)}function Qp(a){ha(a),a.u&&(l.clearTimeout(a.u),a.u=null),fa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function da(a){if(!Pp(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ye||Y(),$||(Ye(),$=!0),Q.add(h,a),a.B=0}}function UE(a,h){return Np(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vs(y(a.Ga,a,h),tm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Un(this,this.j,a);let V=this.o;if(this.S&&(V?(V=_(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(b.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var v=this.i[d];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Yp(this,b,h),d=wn(this.I),pe(d,"RID",a),pe(d,"CVER",22),this.D&&pe(d,"X-HTTP-Session-Id",this.D),Rs(this,d),V&&(this.O?h="headers="+encodeURIComponent(String($p(V)))+"&"+h:this.m&&rc(d,this.m,V)),nc(this.h,b),this.Ua&&pe(d,"TYPE","init"),this.P?(pe(d,"$req",h),pe(d,"SID","null"),b.T=!0,Ju(b,d,null)):Ju(b,d,h),this.G=2}}else this.G==3&&(a?Xp(this,a):this.i.length==0||Pp(this.h)||Xp(this))};function Xp(a,h){var d;h?d=h.l:d=a.U++;const v=wn(a.I);pe(v,"SID",a.K),pe(v,"RID",d),pe(v,"AID",a.T),Rs(a,v),a.m&&a.o&&rc(v,a.m,a.o),d=new Un(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Yp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),nc(a.h,d),Ju(d,v,h)}function Rs(a,h){a.H&&j(a.H,function(d,v){pe(h,v,d)}),a.l&&Vp({},function(d,v){pe(h,v,d)})}function Yp(a,h,d){d=Math.min(a.i.length,d);var v=a.l?y(a.l.Na,a.l,a):null;e:{var b=a.i;let V=-1;for(;;){const U=["count="+d];V==-1?0<d?(V=b[0].g,U.push("ofs="+V)):V=0:U.push("ofs="+V);let he=!0;for(let Be=0;Be<d;Be++){let oe=b[Be].g;const Ze=b[Be].map;if(oe-=V,0>oe)V=Math.max(0,b[Be].g-100),he=!1;else try{LE(Ze,U,"req"+oe+"_")}catch{v&&v(Ze)}}if(he){v=U.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,v}function Jp(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ye||Y(),$||(Ye(),$=!0),Q.add(h,a),a.v=0}}function sc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vs(y(a.Fa,a),tm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Zp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vs(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),ha(this),Zp(this))};function oc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Zp(a){a.g=new Un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);pe(h,"RID","rpc"),pe(h,"SID",a.K),pe(h,"AID",a.T),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(h,"TO",a.ja),pe(h,"TYPE","xmlhttp"),Rs(a,h),a.m&&a.o&&rc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=aa(wn(h)),d.m=null,d.P=!0,Ap(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ha(this),sc(this),ct(19))};function fa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function em(a,h){var d=null;if(a.g==h){fa(a),oc(a),a.g=null;var v=2}else if(tc(a.h,h))d=h.D,bp(a.h,h),v=1;else return;if(a.G!=0){if(h.o)if(v==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;v=ta(),ut(v,new Tp(v,d)),da(a)}else Jp(a);else if(b=h.s,b==3||b==0&&0<h.X||!(v==1&&UE(a,h)||v==2&&sc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),b){case 1:br(a,5);break;case 4:br(a,10);break;case 3:br(a,6);break;default:br(a,2)}}}function tm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function br(a,h){if(a.j.info("Error code "+h),h==2){var d=y(a.fb,a),v=a.Xa;const b=!v;v=new Nr(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||sa(v,"https"),aa(v),b?DE(v.toString(),d):VE(v.toString(),d)}else ct(2);a.G=0,a.l&&a.l.sa(h),nm(a),Qp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function nm(a){if(a.G=0,a.ka=[],a.l){const h=Dp(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function rm(a,h,d){var v=d instanceof Nr?wn(d):new Nr(d);if(v.g!="")h&&(v.g=h+"."+v.g),oa(v,v.s);else{var b=l.location;v=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var V=new Nr(null);v&&sa(V,v),h&&(V.g=h),b&&oa(V,b),d&&(V.l=d),v=V}return d=a.D,h=a.ya,d&&h&&pe(v,d,h),pe(v,"VER",a.la),Rs(a,v),v}function im(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ae(new la({eb:d})):new Ae(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sm(){}t=sm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function pa(){}pa.prototype.g=function(a,h){return new St(a,h)};function St(a,h){Je.call(this),this.g=new Kp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!m(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!m(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fi(this)}R(St,Je),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){ic(this.g)},St.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Wu(a),a=d);h.i.push(new IE(h.Ya++,a)),h.G==3&&da(h)},St.prototype.N=function(){this.g.l=null,delete this.j,ic(this.g),delete this.g,St.aa.N.call(this)};function om(a){Ku.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(om,Ku);function am(){Qu.call(this),this.status=1}R(am,Qu);function fi(a){this.g=a}R(fi,sm),fi.prototype.ua=function(){ut(this.g,"a")},fi.prototype.ta=function(a){ut(this.g,new om(a))},fi.prototype.sa=function(a){ut(this.g,new am)},fi.prototype.ra=function(){ut(this.g,"b")},pa.prototype.createWebChannel=pa.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,vw=function(){return new pa},yw=function(){return ta()},gw=kr,Zh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},na.NO_ERROR=0,na.TIMEOUT=8,na.HTTP_ERROR=6,tl=na,Ip.COMPLETE="complete",mw=Ip,vp.EventType=gs,gs.OPEN="a",gs.CLOSE="b",gs.ERROR="c",gs.MESSAGE="d",Je.prototype.listen=Je.prototype.K,$s=vp,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,pw=Ae}).apply(typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{});const Jg="@firebase/firestore",Zg="4.9.1";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */const Jr=new gu("@firebase/firestore");function yi(){return Jr.logLevel}function B(t,...e){if(Jr.logLevel<=te.DEBUG){const n=e.map(xf);Jr.debug(`Firestore (${hs}): ${t}`,...n)}}function Ln(t,...e){if(Jr.logLevel<=te.ERROR){const n=e.map(xf);Jr.error(`Firestore (${hs}): ${t}`,...n)}}function Ji(t,...e){if(Jr.logLevel<=te.WARN){const n=e.map(xf);Jr.warn(`Firestore (${hs}): ${t}`,...n)}}function xf(t){if(typeof t=="string")return t;try{/**
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
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,_w(t,r,n)}function _w(t,e,n){let r=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ln(r),new Error(r)}function ue(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||_w(e,i,r)}function J(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ww{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class FC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UC{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new ww(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class zC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $C{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new zC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ey{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ue(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ey(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ey(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function HC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Af{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=HC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function ed(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return zc(i)===zc(s)?ne(i,s):zc(i)?1:-1}return ne(t.length,e.length)}const qC=55296,WC=57343;function zc(t){const e=t.charCodeAt(0);return e>=qC&&e<=WC}function Zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const ty="__name__";class nn{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=nn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=nn.isNumericId(e),i=nn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?nn.extractNumericId(e).compare(nn.extractNumericId(n)):ed(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Te extends nn{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const GC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends nn{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return GC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ty}static keyField(){return new We([ty])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Te.fromString(e))}static fromName(e){return new W(Te.fromString(e).popFirst(5))}static empty(){return new W(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Te(e.slice()))}}/**
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
 */function KC(t,e,n){if(!n)throw new q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QC(t,e,n,r){if(e===!0&&r===!0)throw new q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ny(t){if(!W.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ew(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Rf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function Zr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rf(t);throw new q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function be(t,e){const n={typeString:t};return e&&(n.value=e),n}function Go(t,e){if(!Ew(t))throw new q(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const ry=-62135596800,iy=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*iy);return new ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ry)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/iy}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Go(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ry;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:be("string",ge._jsonSchemaVersion),seconds:be("number"),nanoseconds:be("number")};/**
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
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new ge(0,0))}static max(){return new X(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Po=-1;function XC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new yr(i,W.empty(),e)}function YC(t){return new yr(t.readTime,t.key,Po)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(X.min(),W.empty(),Po)}static max(){return new yr(X.max(),W.empty(),Po)}}function JC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const ZC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ek{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ds(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==ZC)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function tk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}wu.ce=-1;/**
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
 */const Cf=-1;function Eu(t){return t==null}function Fl(t){return t===0&&1/t==-1/0}function nk(t){return typeof t=="number"&&Number.isInteger(t)&&!Fl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Tw="";function rk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sy(e)),e=ik(t.get(n),e);return sy(e)}function ik(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Tw:n+="";break;default:n+=s}}return n}function sy(t){return t+Tw+""}/**
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
 */function oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Iw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oa(this.root,e,this.comparator,!0)}}class Oa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Me{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ay(this.data.getIterator())}getIteratorFrom(e){return new ay(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class ay{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new Me(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Sw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Sw("Invalid base64 string: "+s):s}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const sk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(ue(!!t,39018),typeof t=="string"){let e=0;const n=sk.exec(t);if(ue(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */const xw="server_timestamp",Aw="__type__",Rw="__previous_value__",Cw="__local_write_time__";function kf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Aw])==null?void 0:r.stringValue)===xw}function Tu(t){const e=t.mapValue.fields[Rw];return kf(e)?Tu(e):e}function No(t){const e=vr(t.mapValue.fields[Cw].timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */class ok{constructor(e,n,r,i,s,o,l,u,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f}}const Ul="(default)";class bo{constructor(e,n){this.projectId=e,this.database=n||Ul}static empty(){return new bo("","")}get isDefaultDatabase(){return this.database===Ul}isEqual(e){return e instanceof bo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const kw="__type__",Pw="__max__",La={mapValue:{fields:{__type__:{stringValue:Pw}}}},Nw="__vector__",zl="value";function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kf(t)?4:lk(t)?9007199254740991:ak(t)?10:11:K(28295,{value:t})}function mn(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return No(t).isEqual(No(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vr(i.timestampValue),l=vr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _r(i.bytesValue).isEqual(_r(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?Fl(o)===Fl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(oy(o)!==oy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!mn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Do(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ly(t.timestampValue,e.timestampValue);case 4:return ly(No(t),No(e));case 5:return ed(t.stringValue,e.stringValue);case 6:return function(s,o){const l=_r(s),u=_r(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ne(l[c],u[c]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Ce(s.latitude),Ce(o.latitude));return l!==0?l:ne(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return uy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var y,T,R,P;const l=s.fields||{},u=o.fields||{},c=(y=l[zl])==null?void 0:y.arrayValue,f=(T=u[zl])==null?void 0:T.arrayValue,g=ne(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return g!==0?g:uy(c,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===La.mapValue&&o===La.mapValue)return 0;if(s===La.mapValue)return 1;if(o===La.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=ed(u[g],f[g]);if(y!==0)return y;const T=es(l[u[g]],c[f[g]]);if(T!==0)return T}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function ly(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=vr(t),r=vr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function uy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=es(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function ts(t){return td(t)}function td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=td(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${td(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function nl(t){switch(wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tu(t);return e?16+nl(e):16;case 5:return 2*t.stringValue.length;case 6:return _r(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+nl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Rr(r.fields,(s,o)=>{i+=s.length+nl(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function nd(t){return!!t&&"integerValue"in t}function Pf(t){return!!t&&"arrayValue"in t}function cy(t){return!!t&&"nullValue"in t}function hy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rl(t){return!!t&&"mapValue"in t}function ak(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[kw])==null?void 0:r.stringValue)===Nw}function io(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return{...t}}function lk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Pw}/**
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
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=io(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(io(this.value))}}function bw(t){const e=[];return Rr(t.fields,(n,r)=>{const i=new We([n]);if(rl(r)){const s=bw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Rt(e)}/**
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
 */class ot{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,X.min(),X.min(),X.min(),yt.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,X.min(),X.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,X.min(),X.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $l{constructor(e,n){this.position=e,this.inclusive=n}}function dy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Bl{constructor(e,n="asc"){this.field=e,this.dir=n}}function uk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Dw{}class Ve extends Dw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hk(e,n,r):n==="array-contains"?new pk(e,r):n==="in"?new mk(e,r):n==="not-in"?new gk(e,r):n==="array-contains-any"?new yk(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dk(e,r):new fk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(es(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends Dw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new gn(e,n)}matches(e){return Vw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Vw(t){return t.op==="and"}function Ow(t){return ck(t)&&Vw(t)}function ck(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function rd(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+ts(t.value);if(Ow(t))return t.filters.map(e=>rd(e)).join(",");{const e=t.filters.map(n=>rd(n)).join(",");return`${t.op}(${e})`}}function Lw(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&mn(r.value,i.value)}(t,e):t instanceof gn?function(r,i){return i instanceof gn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Lw(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function Mw(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${ts(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(Mw).join(" ,")+"}"}(t):"Filter"}class hk extends Ve{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class dk extends Ve{constructor(e,n){super(e,"in",n),this.keys=jw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fk extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=jw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class pk extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pf(n)&&Do(n.arrayValue,this.value)}}class mk extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Do(this.value.arrayValue,n)}}class gk extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Do(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Do(this.value.arrayValue,n)}}class yk extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Do(this.value.arrayValue,r))}}/**
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
 */class vk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function py(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vk(t,e,n,r,i,s,o)}function Nf(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Eu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.Te=n}return e.Te}function bf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Lw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fy(t.startAt,e.startAt)&&fy(t.endAt,e.endAt)}function id(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Iu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function _k(t,e,n,r,i,s,o,l){return new Iu(t,e,n,r,i,s,o,l)}function Df(t){return new Iu(t)}function my(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wk(t){return t.collectionGroup!==null}function so(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Bl(s,r))}),n.has(We.keyField().canonicalString())||e.Ie.push(new Bl(We.keyField(),r))}return e.Ie}function un(t){const e=J(t);return e.Ee||(e.Ee=Ek(e,so(t))),e.Ee}function Ek(t,e){if(t.limitType==="F")return py(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Bl(i.field,s)});const n=t.endAt?new $l(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $l(t.startAt.position,t.startAt.inclusive):null;return py(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sd(t,e,n){return new Iu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Su(t,e){return bf(un(t),un(e))&&t.limitType===e.limitType}function Fw(t){return`${Nf(un(t))}|lt:${t.limitType}`}function vi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Mw(i)).join(", ")}]`),Eu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ts(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ts(i)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function xu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of so(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=dy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,so(r),i)||r.endAt&&!function(o,l,u){const c=dy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,so(r),i))}(t,e)}function Tk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Uw(t){return(e,n)=>{let r=!1;for(const i of so(t)){const s=Ik(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ik(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?es(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
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
 */class ui{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Iw(this.inner)}size(){return this.innerSize}}/**
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
 */const Sk=new xe(W.comparator);function Mn(){return Sk}const zw=new xe(W.comparator);function Bs(...t){let e=zw;for(const n of t)e=e.insert(n.key,n);return e}function $w(t){let e=zw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return oo()}function Bw(){return oo()}function oo(){return new ui(t=>t.toString(),(t,e)=>t.isEqual(e))}const xk=new xe(W.comparator),Ak=new Me(W.comparator);function re(...t){let e=Ak;for(const n of t)e=e.add(n);return e}const Rk=new Me(ne);function Ck(){return Rk}/**
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
 */function Vf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fl(e)?"-0":e}}function Hw(t){return{integerValue:""+t}}function kk(t,e){return nk(e)?Hw(e):Vf(t,e)}/**
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
 */class Au{constructor(){this._=void 0}}function Pk(t,e,n){return t instanceof Hl?function(i,s){const o={fields:{[Aw]:{stringValue:xw},[Cw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&kf(s)&&(s=Tu(s)),s&&(o.fields[Rw]=s),{mapValue:o}}(n,e):t instanceof Vo?Ww(t,e):t instanceof Oo?Gw(t,e):function(i,s){const o=qw(i,s),l=gy(o)+gy(i.Ae);return nd(o)&&nd(i.Ae)?Hw(l):Vf(i.serializer,l)}(t,e)}function Nk(t,e,n){return t instanceof Vo?Ww(t,e):t instanceof Oo?Gw(t,e):n}function qw(t,e){return t instanceof ql?function(r){return nd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Hl extends Au{}class Vo extends Au{constructor(e){super(),this.elements=e}}function Ww(t,e){const n=Kw(e);for(const r of t.elements)n.some(i=>mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Oo extends Au{constructor(e){super(),this.elements=e}}function Gw(t,e){let n=Kw(e);for(const r of t.elements)n=n.filter(i=>!mn(i,r));return{arrayValue:{values:n}}}class ql extends Au{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function gy(t){return Ce(t.integerValue||t.doubleValue)}function Kw(t){return Pf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Vo&&i instanceof Vo||r instanceof Oo&&i instanceof Oo?Zi(r.elements,i.elements,mn):r instanceof ql&&i instanceof ql?mn(r.Ae,i.Ae):r instanceof Hl&&i instanceof Hl}(t.transform,e.transform)}class Dk{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ru{}function Qw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yw(t.key,cn.none()):new Ko(t.key,t.data,cn.none());{const n=t.data,r=yt.empty();let i=new Me(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cr(t.key,r,new Rt(i.toArray()),cn.none())}}function Vk(t,e,n){t instanceof Ko?function(i,s,o){const l=i.value.clone(),u=vy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(i,s,o){if(!il(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=vy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Xw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ao(t,e,n,r){return t instanceof Ko?function(s,o,l,u){if(!il(s.precondition,o))return l;const c=s.value.clone(),f=_y(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(s,o,l,u){if(!il(s.precondition,o))return l;const c=_y(s.fieldTransforms,u,o),f=o.data;return f.setAll(Xw(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return il(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Ok(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=qw(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function yy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zi(r,i,(s,o)=>bk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ko extends Ru{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cr extends Ru{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Xw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vy(t,e,n){const r=new Map;ue(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Nk(o,l,n[i]))}return r}function _y(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Pk(s,o,e))}return r}class Yw extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lk extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Mk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Vk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Bw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Qw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,(n,r)=>yy(n,r))&&Zi(this.baseMutations,e.baseMutations,(n,r)=>yy(n,r))}}class Of{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return xk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Of(e,n,r,i)}}/**
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
 */class jk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Fk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,ie;function Uk(t){switch(t){case M.OK:return K(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function Jw(t){if(t===void 0)return Ln("GRPC error has no .code"),M.UNKNOWN;switch(t){case Pe.OK:return M.OK;case Pe.CANCELLED:return M.CANCELLED;case Pe.UNKNOWN:return M.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return M.INTERNAL;case Pe.UNAVAILABLE:return M.UNAVAILABLE;case Pe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Pe.NOT_FOUND:return M.NOT_FOUND;case Pe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Pe.ABORTED:return M.ABORTED;case Pe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Pe.DATA_LOSS:return M.DATA_LOSS;default:return K(39323,{code:t})}}(ie=Pe||(Pe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zk(){return new TextEncoder}/**
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
 */const $k=new dr([4294967295,4294967295],0);function wy(t){const e=zk().encode(t),n=new fw;return n.update(e),new Uint8Array(n.digest())}function Ey(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new dr([n,r],0),new dr([i,s],0)]}class Lf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hs(`Invalid padding: ${n}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=dr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(dr.fromNumber(r)));return i.compare($k)===1&&(i=new dr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=wy(e),[r,i]=Ey(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Lf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=wy(e),[r,i]=Ey(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Cu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Qo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Cu(X.min(),i,new xe(ne),Mn(),re())}}class Qo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qo(r,n,re(),re(),re())}}/**
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
 */class sl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class Zw{constructor(e,n){this.targetId=e,this.Ce=n}}class e1{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ty{constructor(){this.ve=0,this.Fe=Iy(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Qo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Iy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Bk{constructor(e){this.Ge=e,this.ze=new Map,this.je=Mn(),this.Je=Ma(),this.He=Ma(),this.Ye=new xe(ne)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(id(s))if(r===0){const o=new W(s.path);this.et(n,o,ot.newNoDocument(o,X.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=_r(r).toUint8Array()}catch(u){if(u instanceof Sw)return Ji("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Lf(o,i,s)}catch(u){return Ji(u instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&id(l.target)){const u=new W(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ot.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Cu(e,n,this.Ye,this.je,r);return this.je=Mn(),this.Je=Ma(),this.He=Ma(),this.Ye=new xe(ne),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Ty,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Me(ne),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Me(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ty),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ma(){return new xe(W.comparator)}function Iy(){return new xe(W.comparator)}const Hk={asc:"ASCENDING",desc:"DESCENDING"},qk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Wk={and:"AND",or:"OR"};class Gk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function od(t,e){return t.useProto3Json||Eu(e)?e:{value:e}}function Wl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function t1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Kk(t,e){return Wl(t,e.toTimestamp())}function hn(t){return ue(!!t,49232),X.fromTimestamp(function(n){const r=vr(n);return new ge(r.seconds,r.nanos)}(t))}function Mf(t,e){return ad(t,e).canonicalString()}function ad(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function n1(t){const e=Te.fromString(t);return ue(a1(e),10190,{key:e.toString()}),e}function ld(t,e){return Mf(t.databaseId,e.path)}function $c(t,e){const n=n1(e);if(n.get(1)!==t.databaseId.projectId)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(i1(n))}function r1(t,e){return Mf(t.databaseId,e)}function Qk(t){const e=n1(t);return e.length===4?Te.emptyPath():i1(e)}function ud(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function i1(t){return ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Sy(t,e,n){return{name:ld(t,e),fields:n.value.mapValue.fields}}function Xk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ue(f===void 0||typeof f=="string",58123),Qe.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:Jw(c.code);return new q(f,c.message||"")}(o);n=new e1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$c(t,r.document.name),s=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):X.min(),l=new yt({mapValue:{fields:r.document.fields}}),u=ot.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new sl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$c(t,r.document),s=r.readTime?hn(r.readTime):X.min(),o=ot.newNoDocument(i,s),l=r.removedTargetIds||[];n=new sl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$c(t,r.document),s=r.removedTargetIds||[];n=new sl([],s,i,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Fk(i,s),l=r.targetId;n=new Zw(l,o)}}return n}function Yk(t,e){let n;if(e instanceof Ko)n={update:Sy(t,e.key,e.value)};else if(e instanceof Yw)n={delete:ld(t,e.key)};else if(e instanceof Cr)n={update:Sy(t,e.key,e.data),updateMask:oP(e.fieldMask)};else{if(!(e instanceof Lk))return K(16599,{Vt:e.type});n={verify:ld(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Hl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ql)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Kk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function Jk(t,e){return t&&t.length>0?(ue(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?hn(i.updateTime):hn(s);return o.isEqual(X.min())&&(o=hn(s)),new Dk(o,i.transformResults||[])}(n,e))):[]}function Zk(t,e){return{documents:[r1(t,e.path)]}}function eP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=r1(t,i);const s=function(c){if(c.length!==0)return o1(gn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(y){return{field:_i(y.field),direction:rP(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=od(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function tP(t){let e=Qk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const y=s1(g);return y instanceof gn&&Ow(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(y=>function(R){return new Bl(wi(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,Eu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,T=g.values||[];return new $l(T,y)}(n.startAt));let c=null;return n.endAt&&(c=function(g){const y=!g.before,T=g.values||[];return new $l(T,y)}(n.endAt)),_k(e,i,o,s,l,"F",u,c)}function nP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function s1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=wi(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=wi(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wi(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wi(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(wi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>s1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function rP(t){return Hk[t]}function iP(t){return qk[t]}function sP(t){return Wk[t]}function _i(t){return{fieldPath:t.canonicalString()}}function wi(t){return We.fromServerFormat(t.fieldPath)}function o1(t){return t instanceof Ve?function(n){if(n.op==="=="){if(hy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NAN"}};if(cy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NAN"}};if(cy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_i(n.field),op:iP(n.op),value:n.value}}}(t):t instanceof gn?function(n){const r=n.getFilters().map(i=>o1(i));return r.length===1?r[0]:{compositeFilter:{op:sP(n.op),filters:r}}}(t):K(54877,{filter:t})}function oP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function a1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class aP{constructor(e){this.yt=e}}function lP(t){const e=tP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sd(e,e.limit,"L"):e}/**
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
 */class uP{constructor(){this.Cn=new cP}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(yr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class cP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Me(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(Te.comparator)).toArray()}}/**
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
 */const xy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},l1=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(l1,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
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
 */class ns{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ns(0)}static cr(){return new ns(-1)}}/**
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
 */const Ay="LruGarbageCollector",hP=1048576;function Ry([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class dP{constructor(e){this.Ir=e,this.buffer=new Me(Ry),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ry(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class fP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){B(Ay,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fs(n)?B(Ay,"Ignoring IndexedDB error during garbage collection: ",n):await ds(n)}await this.Vr(3e5)})}}class pP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(wu.ce);const r=new dP(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(xy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xy):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,o=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(s=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(c=Date.now(),yi()<=te.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function mP(t,e){return new pP(t,e)}/**
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
 */class gP{constructor(){this.changes=new ui(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class vP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ao(r.mutation,i,Rt.empty(),ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Bs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Mn();const o=oo(),l=function(){return oo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Cr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),ao(f.mutation,c,f.mutation.getFieldMask(),ge.now())):o.set(c.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new yP(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=oo();let i=new xe((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Rt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const g=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,g=Bw();f.forEach(y=>{if(!s.has(y)){const T=Qw(n.get(y),r.get(y));T!==null&&g.set(y,T),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,g))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Ur());let l=Po,u=s;return o.next(c=>O.forEach(c,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(f=>({batchId:l,changes:$w(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Bs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Bs();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const c=function(g,y){return new Iu(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,ot.newInvalidDocument(f)))});let l=Bs();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&ao(f.mutation,c,Rt.empty(),ge.now()),xu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class _P{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:hn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:lP(i.bundledQuery),readTime:hn(i.readTime)}}(n)),O.resolve()}}/**
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
 */class wP{constructor(){this.overlays=new xe(W.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Ur(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Ur(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Ur(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return O.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jk(n,r));let s=this.qr.get(n);s===void 0&&(s=re(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class EP{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class jf{constructor(){this.Qr=new Me(Fe.$r),this.Ur=new Me(Fe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Fe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new W(new Te([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new W(new Te([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=re();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return W.comparator(e.key,n.key)||ne(e.Yr,n.Yr)}static Kr(e,n){return ne(e.Yr,n.Yr)||W.comparator(e.key,n.key)}}/**
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
 */class TP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Me(Fe.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Mk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Fe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Cf:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(ne);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new W(s),0);let l=new Me(ne);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Fe(n,0),i=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class IP{constructor(e){this.ri=e,this.docs=function(){return new xe(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||JC(YC(f),r)<=0||(i.has(f.key)||xu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new SP(this)}getSize(e){return O.resolve(this.size)}}class SP extends gP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class xP{constructor(e){this.persistence=e,this.si=new ui(n=>Nf(n),bf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.oi=0,this._i=new jf,this.targetCount=0,this.ai=ns.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ns(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
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
 */class u1{constructor(e,n){this.ui={},this.overlays={},this.ci=new wu(0),this.li=!1,this.li=!0,this.hi=new EP,this.referenceDelegate=e(this),this.Pi=new xP(this),this.indexManager=new uP,this.remoteDocumentCache=function(i){return new IP(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new aP(n),this.Ii=new _P(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new TP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new AP(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class AP extends ek{constructor(e){super(),this.currentSequenceNumber=e}}class Ff{constructor(e){this.persistence=e,this.Ri=new jf,this.Vi=null}static mi(e){return new Ff(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const i=W.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Gl{constructor(e,n){this.persistence=e,this.pi=new ui(r=>rk(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=mP(this,n)}static mi(e,n){return new Gl(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=nl(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Uf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Uf(e,n.fromCache,r,i)}}/**
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
 */class RP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class CP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return tx()?8:tk(lt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new RP;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(yi()<=te.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(yi()<=te.DEBUG&&B("QueryEngine","Query:",vi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(yi()<=te.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):O.resolve())}ys(e,n){if(my(n))return O.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=sd(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,sd(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return my(n)||i.isEqual(X.min())?O.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?O.resolve(null):(yi()<=te.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vi(n)),this.vs(e,o,n,XC(i,Po)).next(l=>l))})}Ds(e,n){let r=new Me(Uw(e));return n.forEach((i,s)=>{xu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return yi()<=te.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",vi(n)),this.ps.getDocumentsMatchingQuery(e,n,yr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const zf="LocalStore",kP=3e8;class PP{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new xe(ne),this.xs=new ui(s=>Nf(s),bf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function NP(t,e,n,r){return new PP(t,e,n,r)}async function c1(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function bP(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const g=c.batch,y=g.keys();let T=O.resolve();return y.forEach(R=>{T=T.next(()=>f.getEntry(u,R)).next(P=>{const D=c.docVersions.get(R);ue(D!==null,48541),P.version.compareTo(D)<0&&(g.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function h1(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function DP(t,e){const n=J(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,g)=>{const y=i.get(g);if(!y)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,g)));let T=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?T=T.withResumeToken(Qe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(g,T),function(P,D,w){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=kP?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(y,T,f)&&l.push(n.Pi.updateTargetData(s,T))});let u=Mn(),c=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(VP(s,o,e.documentUpdates).next(f=>{u=f.ks,c=f.qs})),!r.isEqual(X.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(g=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function VP(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(zf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function OP(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Cf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LP(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function cd(t,e,n){const r=J(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!fs(o))throw o;B(zf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Cy(t,e,n){const r=J(t);let i=X.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const g=J(u),y=g.xs.get(f);return y!==void 0?O.resolve(g.Ms.get(y)):g.Pi.getTargetData(c,f)}(r,o,un(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:re())).next(l=>(MP(r,Tk(e),l),{documents:l,Qs:s})))}function MP(t,e,n){let r=t.Os.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class ky{constructor(){this.activeTargetIds=Ck()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jP{constructor(){this.Mo=new ky,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ky,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FP{Oo(e){}shutdown(){}}/**
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
 */const Py="ConnectivityMonitor";class Ny{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){B(Py,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){B(Py,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ja=null;function hd(){return ja===null?ja=function(){return 268435456+Math.round(2147483648*Math.random())}():ja++,"0x"+ja.toString(16)}/**
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
 */const Bc="RestConnection",UP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Ul?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=hd(),l=this.zo(e,n.toUriEncodedString());B(Bc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),f=ls(c);return this.Jo(e,l,u,r,f).then(g=>(B(Bc,`Received RPC '${e}' ${o}: `,g),g),g=>{throw Ji(Bc,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=UP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class $P{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const rt="WebChannelConnection";class BP extends zP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=hd();return new Promise((l,u)=>{const c=new pw;c.setWithCredentials(!0),c.listenOnce(mw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case tl.NO_ERROR:const g=c.getResponseJson();B(rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case tl.TIMEOUT:B(rt,`RPC '${e}' ${o} timed out`),u(new q(M.DEADLINE_EXCEEDED,"Request time out"));break;case tl.HTTP_ERROR:const y=c.getStatus();if(B(rt,`RPC '${e}' ${o} failed with status:`,y,"response text:",c.getResponseText()),y>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T==null?void 0:T.error;if(R&&R.status&&R.message){const P=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(m)>=0?m:M.UNKNOWN}(R.status);u(new q(P,R.message))}else u(new q(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new q(M.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{B(rt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);B(rt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}T_(e,n,r){const i=hd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vw(),l=yw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(rt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);this.I_(g);let y=!1,T=!1;const R=new $P({Yo:D=>{T?B(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(y||(B(rt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),B(rt,`RPC '${e}' stream ${i} sending:`,D),g.send(D))},Zo:()=>g.close()}),P=(D,w,m)=>{D.listen(w,I=>{try{m(I)}catch(k){setTimeout(()=>{throw k},0)}})};return P(g,$s.EventType.OPEN,()=>{T||(B(rt,`RPC '${e}' stream ${i} transport opened.`),R.o_())}),P(g,$s.EventType.CLOSE,()=>{T||(T=!0,B(rt,`RPC '${e}' stream ${i} transport closed`),R.a_(),this.E_(g))}),P(g,$s.EventType.ERROR,D=>{T||(T=!0,Ji(rt,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),R.a_(new q(M.UNAVAILABLE,"The operation could not be completed")))}),P(g,$s.EventType.MESSAGE,D=>{var w;if(!T){const m=D.data[0];ue(!!m,16349);const I=m,k=(I==null?void 0:I.error)||((w=I[0])==null?void 0:w.error);if(k){B(rt,`RPC '${e}' stream ${i} received error:`,k);const L=k.status;let j=function(S){const A=Pe[S];if(A!==void 0)return Jw(A)}(L),E=k.message;j===void 0&&(j=M.INTERNAL,E="Unknown error status: "+L+" with message "+k.message),T=!0,R.a_(new q(j,E)),g.close()}else B(rt,`RPC '${e}' stream ${i} received:`,m),R.u_(m)}}),P(l,gw.STAT_EVENT,D=>{D.stat===Zh.PROXY?B(rt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Zh.NOPROXY&&B(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.__()},0),R}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Hc(){return typeof document<"u"?document:null}/**
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
 */function ku(t){return new Gk(t,!0)}/**
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
 */class d1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const by="PersistentStream";class f1{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new d1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(by,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(B(by,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HP extends f1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Xk(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?hn(o.readTime):X.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=ud(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=id(u)?{documents:Zk(s,u)}:{query:eP(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=t1(s,o.resumeToken);const c=od(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Wl(s,o.snapshotVersion.toTimestamp());const c=od(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=nP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=ud(this.serializer),n.removeTarget=e,this.q_(n)}}class qP extends f1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Jk(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=ud(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Yk(this.serializer,r))};this.q_(n)}}/**
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
 */class WP{}class GP extends WP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,ad(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(M.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,ad(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class KP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ln(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ei="RemoteStore";class QP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ci(this)&&(B(ei,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Ea.add(4),await Xo(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Pu(c)}(this))})}),this.Ra=new KP(r,i)}}async function Pu(t){if(ci(t))for(const e of t.da)await e(!0)}async function Xo(t){for(const e of t.da)await e(!1)}function p1(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),qf(n)?Hf(n):ps(n).O_()&&Bf(n,e))}function $f(t,e){const n=J(t),r=ps(n);n.Ia.delete(e),r.O_()&&m1(n,e),n.Ia.size===0&&(r.O_()?r.L_():ci(n)&&n.Ra.set("Unknown"))}function Bf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ps(t).Y_(e)}function m1(t,e){t.Va.Ue(e),ps(t).Z_(e)}function Hf(t){t.Va=new Bk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ps(t).start(),t.Ra.ua()}function qf(t){return ci(t)&&!ps(t).x_()&&t.Ia.size>0}function ci(t){return J(t).Ea.size===0}function g1(t){t.Va=void 0}async function XP(t){t.Ra.set("Online")}async function YP(t){t.Ia.forEach((e,n)=>{Bf(t,e)})}async function JP(t,e){g1(t),qf(t)?(t.Ra.ha(e),Hf(t)):t.Ra.set("Unknown")}async function ZP(t,e,n){if(t.Ra.set("Online"),e instanceof e1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){B(ei,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kl(t,r)}else if(e instanceof sl?t.Va.Ze(e):e instanceof Zw?t.Va.st(e):t.Va.tt(e),!n.isEqual(X.min()))try{const r=await h1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(c);f&&s.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(Qe.EMPTY_BYTE_STRING,f.snapshotVersion)),m1(s,u);const g=new tr(f.target,u,c,f.sequenceNumber);Bf(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B(ei,"Failed to raise snapshot:",r),await Kl(t,r)}}async function Kl(t,e,n){if(!fs(e))throw e;t.Ea.add(1),await Xo(t),t.Ra.set("Offline"),n||(n=()=>h1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(ei,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Pu(t)})}function y1(t,e){return e().catch(n=>Kl(t,n,e))}async function Nu(t){const e=J(t),n=Er(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Cf;for(;e2(e);)try{const i=await OP(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,t2(e,i)}catch(i){await Kl(e,i)}v1(e)&&_1(e)}function e2(t){return ci(t)&&t.Ta.length<10}function t2(t,e){t.Ta.push(e);const n=Er(t);n.O_()&&n.X_&&n.ea(e.mutations)}function v1(t){return ci(t)&&!Er(t).x_()&&t.Ta.length>0}function _1(t){Er(t).start()}async function n2(t){Er(t).ra()}async function r2(t){const e=Er(t);for(const n of t.Ta)e.ea(n.mutations)}async function i2(t,e,n){const r=t.Ta.shift(),i=Of.from(r,e,n);await y1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nu(t)}async function s2(t,e){e&&Er(t).X_&&await async function(r,i){if(function(o){return Uk(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();Er(r).B_(),await y1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Nu(r)}}(t,e),v1(t)&&_1(t)}async function Dy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),B(ei,"RemoteStore received new credentials");const r=ci(n);n.Ea.add(3),await Xo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Pu(n)}async function o2(t,e){const n=J(t);e?(n.Ea.delete(2),await Pu(n)):e||(n.Ea.add(2),await Xo(n),n.Ra.set("Unknown"))}function ps(t){return t.ma||(t.ma=function(n,r,i){const s=J(n);return s.sa(),new HP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:XP.bind(null,t),t_:YP.bind(null,t),r_:JP.bind(null,t),H_:ZP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),qf(t)?Hf(t):t.Ra.set("Unknown")):(await t.ma.stop(),g1(t))})),t.ma}function Er(t){return t.fa||(t.fa=function(n,r,i){const s=J(n);return s.sa(),new qP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:n2.bind(null,t),r_:s2.bind(null,t),ta:r2.bind(null,t),na:i2.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Nu(t)):(await t.fa.stop(),t.Ta.length>0&&(B(ei,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Wf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Wf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gf(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),fs(t))return new q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Bi{static emptySet(e){return new Bi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Bs(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Vy{constructor(){this.ga=new xe(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class rs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new rs(e,n,Bi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class a2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class l2{constructor(){this.queries=Oy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Oy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new q(M.ABORTED,"Firestore shutting down"))}}function Oy(){return new ui(t=>Fw(t),Su)}async function u2(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new a2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Gf(o,`Initialization of query '${vi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Kf(n)}async function c2(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function h2(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Kf(n)}function d2(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Kf(t){t.Ca.forEach(e=>{e.next()})}var dd,Ly;(Ly=dd||(dd={})).Ma="default",Ly.Cache="cache";class f2{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==dd.Cache}}/**
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
 */class w1{constructor(e){this.key=e}}class E1{constructor(e){this.key=e}}class p2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=Uw(e),this.tu=new Bi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Vy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const y=i.get(f),T=xu(this.query,g)?g:null,R=!!y&&this.mutatedKeys.has(y.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let D=!1;y&&T?y.data.isEqual(T.data)?R!==P&&(r.track({type:3,doc:T}),D=!0):this.su(y,T)||(r.track({type:2,doc:T}),D=!0,(u&&this.eu(T,u)>0||c&&this.eu(T,c)<0)&&(l=!0)):!y&&T?(r.track({type:0,doc:T}),D=!0):y&&!T&&(r.track({type:1,doc:y}),D=!0,(u||c)&&(l=!0)),D&&(T?(o=o.add(T),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,g)=>function(T,R){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:D})}};return P(T)-P(R)}(f.type,g.type)||this.eu(f.doc,g.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new rs(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Vy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new E1(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new w1(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return rs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Qf="SyncEngine";class m2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class g2{constructor(e){this.key=e,this.hu=!1}}class y2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ui(l=>Fw(l),Su),this.Iu=new Map,this.Eu=new Set,this.du=new xe(W.comparator),this.Au=new Map,this.Ru=new jf,this.Vu={},this.mu=new Map,this.fu=ns.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function v2(t,e,n=!0){const r=R1(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await T1(r,e,n,!0),i}async function _2(t,e){const n=R1(t);await T1(n,e,!0,!1)}async function T1(t,e,n,r){const i=await LP(t.localStore,un(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await w2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&p1(t.remoteStore,i),l}async function w2(t,e,n,r,i){t.pu=(g,y,T)=>async function(P,D,w,m){let I=D.view.ru(w);I.Cs&&(I=await Cy(P.localStore,D.query,!1).then(({documents:E})=>D.view.ru(E,I)));const k=m&&m.targetChanges.get(D.targetId),L=m&&m.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(I,P.isPrimaryClient,k,L);return jy(P,D.targetId,j.au),j.snapshot}(t,g,y,T);const s=await Cy(t.localStore,e,!0),o=new p2(e,s.Qs),l=o.ru(s.documents),u=Qo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);jy(t,n,c.au);const f=new m2(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function E2(t,e,n){const r=J(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Su(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await cd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&$f(r.remoteStore,i.targetId),fd(r,i.targetId)}).catch(ds)):(fd(r,i.targetId),await cd(r.localStore,i.targetId,!0))}async function T2(t,e){const n=J(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$f(n.remoteStore,r.targetId))}async function I2(t,e,n){const r=P2(t);try{const i=await function(o,l){const u=J(o),c=ge.now(),f=l.reduce((T,R)=>T.add(R.key),re());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=Mn(),P=re();return u.Ns.getEntries(T,f).next(D=>{R=D,R.forEach((w,m)=>{m.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,R)).next(D=>{g=D;const w=[];for(const m of l){const I=Ok(m,g.get(m.key).overlayedDocument);I!=null&&w.push(new Cr(m.key,I,bw(I.value.mapValue),cn.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,w,l)}).next(D=>{y=D;const w=D.applyToLocalDocumentSet(g,P);return u.documentOverlayCache.saveOverlays(T,D.batchId,w)})}).then(()=>({batchId:y.batchId,changes:$w(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new xe(ne)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Yo(r,i.changes),await Nu(r.remoteStore)}catch(i){const s=Gf(i,"Failed to persist write");n.reject(s)}}async function I1(t,e){const n=J(t);try{const r=await DP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ue(o.hu,14607):i.removedDocuments.size>0&&(ue(o.hu,42227),o.hu=!1))}),await Yo(n,r,e)}catch(r){await ds(r)}}function My(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,g)=>{for(const y of g.Sa)y.va(l)&&(c=!0)}),c&&Kf(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function S2(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new xe(W.comparator);o=o.insert(s,ot.newNoDocument(s,X.min()));const l=re().add(s),u=new Cu(X.min(),new Map,new xe(ne),o,l);await I1(r,u),r.du=r.du.remove(s),r.Au.delete(e),Xf(r)}else await cd(r.localStore,e,!1).then(()=>fd(r,e,n)).catch(ds)}async function x2(t,e){const n=J(t),r=e.batch.batchId;try{const i=await bP(n.localStore,e);x1(n,r,null),S1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yo(n,i)}catch(i){await ds(i)}}async function A2(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(g=>(ue(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(c,g))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);x1(r,e,n),S1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yo(r,i)}catch(i){await ds(i)}}function S1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function x1(t,e,n){const r=J(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function fd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||A1(t,r)})}function A1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&($f(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Xf(t))}function jy(t,e,n){for(const r of n)r instanceof w1?(t.Ru.addReference(r.key,e),R2(t,r)):r instanceof E1?(B(Qf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||A1(t,r.key)):K(19791,{wu:r})}function R2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(B(Qf,"New document in limbo: "+n),t.Eu.add(r),Xf(t))}function Xf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(Te.fromString(e)),r=t.fu.next();t.Au.set(r,new g2(n)),t.du=t.du.insert(n,r),p1(t.remoteStore,new tr(un(Df(n.path)),r,"TargetPurposeLimboResolution",wu.ce))}}async function Yo(t,e,n){const r=J(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const g=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(c){i.push(c);const g=Uf.As(u.targetId,c);s.push(g)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>O.forEach(c,y=>O.forEach(y.Es,T=>f.persistence.referenceDelegate.addReference(g,y.targetId,T)).next(()=>O.forEach(y.ds,T=>f.persistence.referenceDelegate.removeReference(g,y.targetId,T)))))}catch(g){if(!fs(g))throw g;B(zf,"Failed to update sequence numbers: "+g)}for(const g of c){const y=g.targetId;if(!g.fromCache){const T=f.Ms.get(y),R=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(y,P)}}}(r.localStore,s))}async function C2(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){B(Qf,"User change. New user:",e.toKey());const r=await c1(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(M.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yo(n,r.Ls)}}function k2(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function R1(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=I1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=k2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=S2.bind(null,e),e.Pu.H_=h2.bind(null,e.eventManager),e.Pu.yu=d2.bind(null,e.eventManager),e}function P2(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=A2.bind(null,e),e}class Ql{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ku(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return NP(this.persistence,new CP,e.initialUser,this.serializer)}Cu(e){return new u1(Ff.mi,this.serializer)}Du(e){return new jP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ql.provider={build:()=>new Ql};class N2 extends Ql{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ue(this.persistence.referenceDelegate instanceof Gl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new fP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new u1(r=>Gl.mi(r,n),this.serializer)}}class pd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>My(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=C2.bind(null,this.syncEngine),await o2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new l2}()}createDatastore(e){const n=ku(e.databaseInfo.databaseId),r=function(s){return new BP(s)}(e.databaseInfo);return function(s,o,l,u){return new GP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new QP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>My(this.syncEngine,n,0),function(){return Ny.v()?new Ny:new FP}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const g=new y2(i,s,o,l,u,c);return f&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);B(ei,"RemoteStore shutting down."),s.Ea.add(5),await Xo(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}pd.provider={build:()=>new pd};/**
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
 */class b2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Tr="FirestoreClient";class D2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=Af.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(Tr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(Tr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qc(t,e){t.asyncQueue.verifyOperationInProgress(),B(Tr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await c1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await V2(t);B(Tr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dy(e.remoteStore,i)),t._onlineComponents=e}async function V2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(Tr,"Using user provided OfflineComponentProvider");try{await qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ji("Error using user provided cache. Falling back to memory cache: "+n),await qc(t,new Ql)}}else B(Tr,"Using default OfflineComponentProvider"),await qc(t,new N2(void 0));return t._offlineComponents}async function C1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(Tr,"Using user provided OnlineComponentProvider"),await Fy(t,t._uninitializedComponentsProvider._online)):(B(Tr,"Using default OnlineComponentProvider"),await Fy(t,new pd))),t._onlineComponents}function O2(t){return C1(t).then(e=>e.syncEngine)}async function L2(t){const e=await C1(t),n=e.eventManager;return n.onListen=v2.bind(null,e.syncEngine),n.onUnlisten=E2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=T2.bind(null,e.syncEngine),n}function M2(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new b2({next:y=>{f.Nu(),o.enqueueAndForget(()=>c2(s,g));const T=y.docs.has(l);!T&&y.fromCache?c.reject(new q(M.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&y.fromCache&&u&&u.source==="server"?c.reject(new q(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(y)},error:y=>c.reject(y)}),g=new f2(Df(l.path),f,{includeMetadataChanges:!0,qa:!0});return u2(s,g)}(await L2(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function k1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const P1="firestore.googleapis.com",zy=!0;class $y{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=P1,this.ssl=zy}else this.host=e.host,this.ssl=e.ssl??zy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=l1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hP)throw new q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=k1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $y({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $y(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jC;switch(r.type){case"firstParty":return new $C(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Uy.get(n);r&&(B("ComponentProvider","Removing Datastore"),Uy.delete(n),r.terminate())}(this),Promise.resolve()}}function j2(t,e,n,r={}){var c;t=Zr(t,Yf);const i=ls(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(T0(`https://${l}`),I0("Firestore",!0)),s.host!==P1&&s.host!==l&&Ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!gr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=it.MOCK_USER;else{f=GS(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new it(y)}t._authCredentials=new FC(new ww(f,g))}}/**
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
 */class Jf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jf(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Go(n,Le._jsonSchema))return new Le(e,r||null,new W(Te.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:be("string",Le._jsonSchemaVersion),referencePath:be("string")};class Lo extends Jf{constructor(e,n,r){super(e,n,Df(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new W(e))}withConverter(e){return new Lo(this.firestore,e,this._path)}}function gi(t,e,...n){if(t=je(t),arguments.length===1&&(e=Af.newId()),KC("doc","path",e),t instanceof Yf){const r=Te.fromString(e,...n);return ny(r),new Le(t,null,new W(r))}{if(!(t instanceof Le||t instanceof Lo))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return ny(r),new Le(t.firestore,t instanceof Lo?t.converter:null,new W(r))}}/**
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
 */const By="AsyncQueue";class Hy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new d1(this,"async_queue_retry"),this._c=()=>{const r=Hc();r&&B(By,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Hc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new fr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!fs(e))throw e;B(By,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ln("INTERNAL UNHANDLED ERROR: ",qy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Wf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:qy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function qy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class bu extends Yf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Hy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hy(e),this._firestoreClient=void 0,await e}}}function F2(t,e){const n=typeof t=="object"?t:gf(),r=typeof t=="string"?t:Ul,i=ai(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=qS("firestore");s&&j2(i,...s)}return i}function N1(t){if(t._terminated)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||U2(t),t._firestoreClient}function U2(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,f){return new ok(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,k1(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new D2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lt(Qe.fromBase64String(e))}catch(n){throw new q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lt(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Go(e,Lt._jsonSchema))return Lt.fromBase64String(e.bytes)}}Lt._jsonSchemaVersion="firestore/bytes/1.0",Lt._jsonSchema={type:be("string",Lt._jsonSchemaVersion),bytes:be("string")};/**
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
 */class Du{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zf{constructor(e){this._methodName=e}}/**
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
 */class dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dn._jsonSchemaVersion}}static fromJSON(e){if(Go(e,dn._jsonSchema))return new dn(e.latitude,e.longitude)}}dn._jsonSchemaVersion="firestore/geoPoint/1.0",dn._jsonSchema={type:be("string",dn._jsonSchemaVersion),latitude:be("number"),longitude:be("number")};/**
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
 */class fn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Go(e,fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new fn(e.vectorValues);throw new q(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fn._jsonSchemaVersion="firestore/vectorValue/1.0",fn._jsonSchema={type:be("string",fn._jsonSchemaVersion),vectorValues:be("object")};/**
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
 */const z2=/^__.*__$/;class $2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ko(e,this.data,n,this.fieldTransforms)}}class b1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function D1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:t})}}class ep{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ep({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Xl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(D1(this.Ac)&&z2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class B2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ku(e)}Cc(e,n,r,i=!1){return new ep({Ac:e,methodName:n,Dc:r,path:We.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function V1(t){const e=t._freezeSettings(),n=ku(t._databaseId);return new B2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function H2(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);tp("Data must be an object, but it was:",o,r);const l=O1(r,o);let u,c;if(s.merge)u=new Rt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const y=md(e,g,n);if(!o.contains(y))throw new q(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);M1(f,y)||f.push(y)}u=new Rt(f),c=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,c=o.fieldTransforms;return new $2(new yt(l),u,c)}class Vu extends Zf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vu}}function q2(t,e,n,r){const i=t.Cc(1,e,n);tp("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();Rr(r,(u,c)=>{const f=np(e,u,n);c=je(c);const g=i.yc(f);if(c instanceof Vu)s.push(f);else{const y=Ou(c,g);y!=null&&(s.push(f),o.set(f,y))}});const l=new Rt(s);return new b1(o,l,i.fieldTransforms)}function W2(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[md(e,r,n)],u=[i];if(s.length%2!=0)throw new q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(md(e,s[y])),u.push(s[y+1]);const c=[],f=yt.empty();for(let y=l.length-1;y>=0;--y)if(!M1(c,l[y])){const T=l[y];let R=u[y];R=je(R);const P=o.yc(T);if(R instanceof Vu)c.push(T);else{const D=Ou(R,P);D!=null&&(c.push(T),f.set(T,D))}}const g=new Rt(c);return new b1(f,g,o.fieldTransforms)}function Ou(t,e){if(L1(t=je(t)))return tp("Unsupported field value:",e,t),O1(t,e);if(t instanceof Zf)return function(r,i){if(!D1(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ou(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ge.fromDate(r);return{timestampValue:Wl(i.serializer,s)}}if(r instanceof ge){const s=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wl(i.serializer,s)}}if(r instanceof dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lt)return{bytesValue:t1(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof fn)return function(o,l){return{mapValue:{fields:{[kw]:{stringValue:Nw},[zl]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Vf(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Rf(r)}`)}(t,e)}function O1(t,e){const n={};return Iw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,i)=>{const s=Ou(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function L1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof dn||t instanceof Lt||t instanceof Le||t instanceof Zf||t instanceof fn)}function tp(t,e,n){if(!L1(n)||!Ew(n)){const r=Rf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function md(t,e,n){if((e=je(e))instanceof Du)return e._internalPath;if(typeof e=="string")return np(t,e);throw Xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const G2=new RegExp("[~\\*/\\[\\]]");function np(t,e,n){if(e.search(G2)>=0)throw Xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Du(...e.split("."))._internalPath}catch{throw Xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(M.INVALID_ARGUMENT,l+t+u)}function M1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class j1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new K2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(F1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class K2 extends j1{data(){return super.data()}}function F1(t,e){return typeof e=="string"?np(t,e):e instanceof Du?e._internalPath:e._delegate._internalPath}class Q2{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[zl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ce(o.doubleValue));return new fn(n)}convertGeoPoint(e){return new dn(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Tu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(No(e));default:return null}}convertTimestamp(e){const n=vr(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ue(a1(r),9688,{name:e});const i=new bo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Ln(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function X2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hr extends j1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(F1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Hr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Hr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hr._jsonSchema={type:be("string",Hr._jsonSchemaVersion),bundleSource:be("string","DocumentSnapshot"),bundleName:be("string"),bundle:be("string")};class ol extends Hr{data(e={}){return super.data(e)}}class lo{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ol(this._firestore,this._userDataWriter,r.key,r,new qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ol(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ol(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Y2(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=lo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Af.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Y2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */function J2(t){t=Zr(t,Le);const e=Zr(t.firestore,bu);return M2(N1(e),t._key).then(n=>eN(e,t,n))}lo._jsonSchemaVersion="firestore/querySnapshot/1.0",lo._jsonSchema={type:be("string",lo._jsonSchemaVersion),bundleSource:be("string","QuerySnapshot"),bundleName:be("string"),bundle:be("string")};class Z2 extends Q2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function Wy(t,e,n){t=Zr(t,Le);const r=Zr(t.firestore,bu),i=X2(t.converter,e);return U1(r,[H2(V1(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,cn.none())])}function Wc(t,e,n,...r){t=Zr(t,Le);const i=Zr(t.firestore,bu),s=V1(i);let o;return o=typeof(e=je(e))=="string"||e instanceof Du?W2(s,"updateDoc",t._key,e,n,r):q2(s,"updateDoc",t._key,e),U1(i,[o.toMutation(t._key,cn.exists(!0))])}function U1(t,e){return function(r,i){const s=new fr;return r.asyncQueue.enqueueAndForget(async()=>I2(await O2(r),i,s)),s.promise}(N1(t),e)}function eN(t,e,n){const r=n.docs.get(e._key),i=new Z2(t);return new Hr(t,i,e._key,r,new qs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){hs=i})(us),pn(new Yt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new bu(new UC(r.getProvider("auth-internal")),new BC(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bo(c.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ft(Jg,Zg,e),Ft(Jg,Zg,"esm2020")})();var tN="firebase",nN="12.2.1";/**
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
 */Ft(tN,nN,"app");const z1="@firebase/installations",rp="0.6.19";/**
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
 */const $1=1e4,B1=`w:${rp}`,H1="FIS_v2",rN="https://firebaseinstallations.googleapis.com/v1",iN=60*60*1e3,sN="installations",oN="Installations";/**
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
 */const aN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ti=new oi(sN,oN,aN);function q1(t){return t instanceof Zt&&t.code.includes("request-failed")}/**
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
 */function W1({projectId:t}){return`${rN}/projects/${t}/installations`}function G1(t){return{token:t.token,requestStatus:2,expiresIn:uN(t.expiresIn),creationTime:Date.now()}}async function K1(t,e){const r=(await e.json()).error;return ti.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Q1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function lN(t,{refreshToken:e}){const n=Q1(t);return n.append("Authorization",cN(e)),n}async function X1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function uN(t){return Number(t.replace("s","000"))}function cN(t){return`${H1} ${t}`}/**
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
 */async function hN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=W1(t),i=Q1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:H1,appId:t.appId,sdkVersion:B1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await X1(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:G1(c.authToken)}}else throw await K1("Create Installation",u)}/**
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
 */function Y1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function dN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fN=/^[cdef][\w-]{21}$/,gd="";function pN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mN(t);return fN.test(n)?n:gd}catch{return gd}}function mN(t){return dN(t).substr(0,22)}/**
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
 */function Lu(t){return`${t.appName}!${t.appId}`}/**
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
 */const J1=new Map;function Z1(t,e){const n=Lu(t);eE(n,e),gN(n,e)}function eE(t,e){const n=J1.get(t);if(n)for(const r of n)r(e)}function gN(t,e){const n=yN();n&&n.postMessage({key:t,fid:e}),vN()}let zr=null;function yN(){return!zr&&"BroadcastChannel"in self&&(zr=new BroadcastChannel("[Firebase] FID Change"),zr.onmessage=t=>{eE(t.data.key,t.data.fid)}),zr}function vN(){J1.size===0&&zr&&(zr.close(),zr=null)}/**
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
 */const _N="firebase-installations-database",wN=1,ni="firebase-installations-store";let Gc=null;function ip(){return Gc||(Gc=k0(_N,wN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ni)}}})),Gc}async function Yl(t,e){const n=Lu(t),i=(await ip()).transaction(ni,"readwrite"),s=i.objectStore(ni),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Z1(t,e.fid),e}async function tE(t){const e=Lu(t),r=(await ip()).transaction(ni,"readwrite");await r.objectStore(ni).delete(e),await r.done}async function Mu(t,e){const n=Lu(t),i=(await ip()).transaction(ni,"readwrite"),s=i.objectStore(ni),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Z1(t,l.fid),l}/**
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
 */async function sp(t){let e;const n=await Mu(t.appConfig,r=>{const i=EN(r),s=TN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===gd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function EN(t){const e=t||{fid:pN(),registrationStatus:0};return nE(e)}function TN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ti.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=IN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:SN(t)}:{installationEntry:e}}async function IN(t,e){try{const n=await hN(t,e);return Yl(t.appConfig,n)}catch(n){throw q1(n)&&n.customData.serverCode===409?await tE(t.appConfig):await Yl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function SN(t){let e=await Gy(t.appConfig);for(;e.registrationStatus===1;)await Y1(100),e=await Gy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await sp(t);return r||n}return e}function Gy(t){return Mu(t,e=>{if(!e)throw ti.create("installation-not-found");return nE(e)})}function nE(t){return xN(t)?{fid:t.fid,registrationStatus:0}:t}function xN(t){return t.registrationStatus===1&&t.registrationTime+$1<Date.now()}/**
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
 */async function AN({appConfig:t,heartbeatServiceProvider:e},n){const r=RN(t,n),i=lN(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:B1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await X1(()=>fetch(r,l));if(u.ok){const c=await u.json();return G1(c)}else throw await K1("Generate Auth Token",u)}function RN(t,{fid:e}){return`${W1(t)}/${e}/authTokens:generate`}/**
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
 */async function op(t,e=!1){let n;const r=await Mu(t.appConfig,s=>{if(!rE(s))throw ti.create("not-registered");const o=s.authToken;if(!e&&PN(o))return s;if(o.requestStatus===1)return n=CN(t,e),s;{if(!navigator.onLine)throw ti.create("app-offline");const l=bN(s);return n=kN(t,l),l}});return n?await n:r.authToken}async function CN(t,e){let n=await Ky(t.appConfig);for(;n.authToken.requestStatus===1;)await Y1(100),n=await Ky(t.appConfig);const r=n.authToken;return r.requestStatus===0?op(t,e):r}function Ky(t){return Mu(t,e=>{if(!rE(e))throw ti.create("not-registered");const n=e.authToken;return DN(n)?{...e,authToken:{requestStatus:0}}:e})}async function kN(t,e){try{const n=await AN(t,e),r={...e,authToken:n};return await Yl(t.appConfig,r),n}catch(n){if(q1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tE(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Yl(t.appConfig,r)}throw n}}function rE(t){return t!==void 0&&t.registrationStatus===2}function PN(t){return t.requestStatus===2&&!NN(t)}function NN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+iN}function bN(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function DN(t){return t.requestStatus===1&&t.requestTime+$1<Date.now()}/**
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
 */async function VN(t){const e=t,{installationEntry:n,registrationPromise:r}=await sp(e);return r?r.catch(console.error):op(e).catch(console.error),n.fid}/**
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
 */async function ON(t,e=!1){const n=t;return await LN(n),(await op(n,e)).token}async function LN(t){const{registrationPromise:e}=await sp(t);e&&await e}/**
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
 */function MN(t){if(!t||!t.options)throw Kc("App Configuration");if(!t.name)throw Kc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Kc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Kc(t){return ti.create("missing-app-config-values",{valueName:t})}/**
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
 */const iE="installations",jN="installations-internal",FN=t=>{const e=t.getProvider("app").getImmediate(),n=MN(e),r=ai(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},UN=t=>{const e=t.getProvider("app").getImmediate(),n=ai(e,iE).getImmediate();return{getId:()=>VN(n),getToken:i=>ON(n,i)}};function zN(){pn(new Yt(iE,FN,"PUBLIC")),pn(new Yt(jN,UN,"PRIVATE"))}zN();Ft(z1,rp);Ft(z1,rp,"esm2020");/**
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
 */const Jl="analytics",$N="firebase_id",BN="origin",HN=60*1e3,qN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ap="https://www.googletagmanager.com/gtag/js";/**
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
 */const Tt=new gu("@firebase/analytics");/**
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
 */const WN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new oi("analytics","Analytics",WN);/**
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
 */function GN(t){if(!t.startsWith(ap)){const e=kt.create("invalid-gtag-resource",{gtagURL:t});return Tt.warn(e.message),""}return t}function sE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function KN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function QN(t,e){const n=KN("firebase-js-sdk-policy",{createScriptURL:GN}),r=document.createElement("script"),i=`${ap}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function XN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function YN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await sE(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Tt.error(l)}t("config",i,s)}async function JN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await sE(n);for(const u of o){const c=l.find(g=>g.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Tt.error(s)}}function ZN(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await JN(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await YN(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Tt.error(l)}}return i}function eb(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ZN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function tb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ap)&&n.src.includes(t))return n;return null}/**
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
 */const nb=30,rb=1e3;class ib{constructor(e={},n=rb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const oE=new ib;function sb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ob(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:sb(n)},i=qN.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function ab(t,e=oE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw kt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw kt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new cb;return setTimeout(async()=>{l.abort()},HN),aE({appId:r,apiKey:i,measurementId:s},o,l,e)}async function aE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=oE){var l;const{appId:s,measurementId:o}=t;try{await lb(r,e)}catch(u){if(o)return Tt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await ob(t);return i.deleteThrottleMetadata(s),u}catch(u){const c=u;if(!ub(c)){if(i.deleteThrottleMetadata(s),o)return Tt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw u}const f=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?Ig(n,i.intervalMillis,nb):Ig(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,g),Tt.debug(`Calling attemptFetch again in ${f} millis`),aE(t,g,r,i)}}function lb(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ub(t){if(!(t instanceof Zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class cb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function hb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}/**
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
 */async function db(){if(x0())try{await A0()}catch(t){return Tt.warn(kt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Tt.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fb(t,e,n,r,i,s,o){const l=ab(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&Tt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Tt.error(y)),e.push(l);const u=db().then(y=>{if(y)return r.getId()}),[c,f]=await Promise.all([l,u]);tb(s)||QN(s,c.measurementId),i("js",new Date);const g=(o==null?void 0:o.config)??{};return g[BN]="firebase",g.update=!0,f!=null&&(g[$N]=f),i("config",c.measurementId,g),c.measurementId}/**
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
 */class pb{constructor(e){this.app=e}_delete(){return delete uo[this.app.options.appId],Promise.resolve()}}let uo={},Qy=[];const Xy={};let Qc="dataLayer",mb="gtag",Yy,lE,Jy=!1;function gb(){const t=[];if(S0()&&t.push("This is a browser extension environment."),nx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=kt.create("invalid-analytics-context",{errorInfo:e});Tt.warn(n.message)}}function yb(t,e,n){gb();const r=t.options.appId;if(!r)throw kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Tt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(uo[r]!=null)throw kt.create("already-exists",{id:r});if(!Jy){XN(Qc);const{wrappedGtag:s,gtagCore:o}=eb(uo,Qy,Xy,Qc,mb);lE=s,Yy=o,Jy=!0}return uo[r]=fb(t,Qy,Xy,e,Yy,Qc,n),new pb(t)}function vb(t=gf()){t=je(t);const e=ai(t,Jl);return e.isInitialized()?e.getImmediate():_b(t)}function _b(t,e={}){const n=ai(t,Jl);if(n.isInitialized()){const i=n.getImmediate();if(gr(e,n.getOptions()))return i;throw kt.create("already-initialized")}return n.initialize({options:e})}function wb(t,e,n,r){t=je(t),hb(lE,uo[t.app.options.appId],e,n,r).catch(i=>Tt.error(i))}const Zy="@firebase/analytics",ev="0.10.18";function Eb(){pn(new Yt(Jl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return yb(r,i,n)},"PUBLIC")),pn(new Yt("analytics-internal",t,"PRIVATE")),Ft(Zy,ev),Ft(Zy,ev,"esm2020");function t(e){try{const n=e.getProvider(Jl).getImmediate();return{logEvent:(r,i,s)=>wb(n,r,i,s)}}catch(n){throw kt.create("interop-component-reg-failed",{reason:n})}}}Eb();console.log("🚀 === DEBUT FIREBASE.TS ===");console.log("🧪 FIREBASE - Test de log dans firebase.ts");console.log("🚀 Environment:","production");console.log("🚀 Base URL:","/");const ju={apiKey:"AIzaSyDRoNJkXmR7C3dt142AAz_hGCPpfKxkXxE",authDomain:"swear-30c84.firebaseapp.com",projectId:"swear-30c84",storageBucket:"swear-30c84.firebasestorage.app",messagingSenderId:"763991623859",appId:"1:763991623859:web:fd3ea15c87ae4562c608c6",measurementId:"G-2M6CF3JFJ8"};console.log("🚀 Firebase config:",ju);console.log("🚀 Initializing Firebase app...");const lp=P0(ju);console.log("🔥 Firebase app initialized");console.log("🔥 Project ID:",ju.projectId);console.log("🔥 Auth Domain:",ju.authDomain);const Ws=LC(lp);console.log("🔐 Firebase Auth initialized");console.log("🔐 Auth current user:",Ws.currentUser);const Lr=F2(lp);console.log("🗄️ Firestore initialized");console.log("🗄️ Firestore app:",Lr.app.name);let tv=null;try{tv=vb(lp),console.log("📊 Analytics initialized:",tv)}catch(t){console.warn("⚠️ Analytics initialization failed (normal in development):",t)}const uE=Z.createContext(void 0),is=()=>{const t=Z.useContext(uE);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},Tb=({children:t})=>{const[e,n]=Z.useState(null),[r,i]=Z.useState(!0),[s,o]=Z.useState(null),l=w=>{switch(w){case"starter":return 25;case"pro":return 150;default:return 3}},u=()=>{o(null)},c=async w=>{var m,I,k,L;try{console.log("🔍 Loading user data for:",w.uid);const j=await J2(gi(Lr,"users",w.uid));if(j.exists()){const E=j.data();console.log("📊 User data from Firestore:",E);const _={uid:w.uid,email:w.email,displayName:w.displayName,firstName:E.firstName||((m=E.displayName)==null?void 0:m.split(" ")[0])||"",lastName:E.lastName||((I=E.displayName)==null?void 0:I.split(" ")[1])||"",hasPaid:E.hasPaid||!1,firestoreId:w.uid,subscription:E.subscription||{plan:"free",creditsRemaining:3,maxCredits:3}};console.log("✅ Auth user created:",_),n(_)}else{console.log("📝 Creating new user document");const E={email:w.email,displayName:w.displayName,firstName:((k=w.displayName)==null?void 0:k.split(" ")[0])||"",lastName:((L=w.displayName)==null?void 0:L.split(" ")[1])||"",hasPaid:!1,subscription:{plan:"free",creditsRemaining:3,maxCredits:3,renewalDate:new Date},createdAt:new Date};await Wy(gi(Lr,"users",w.uid),E);const _={uid:w.uid,email:w.email,displayName:w.displayName,firstName:E.firstName,lastName:E.lastName,hasPaid:!1,firestoreId:w.uid,subscription:E.subscription};n(_)}}catch(j){console.error("Error loading user data:",j),o("Erreur lors du chargement des données utilisateur");const E={uid:w.uid,email:w.email,displayName:w.displayName,hasPaid:!1,firestoreId:w.uid,subscription:{plan:"free",creditsRemaining:3,maxCredits:3}};n(E)}};Z.useEffect(()=>(console.log("🔄 Setting up auth state listener"),SR(Ws,async m=>{console.log("🔐 Auth state changed:",m?"User logged in":"User logged out"),m?await c(m):n(null),i(!1)})),[]);const D={user:e,isAuthenticated:!!e,loading:r,error:s,login:async w=>{o(null),i(!0);try{console.log("🔐 Logging in user:",w.email);const{user:m}=await _R(Ws,w.email,w.password);await c(m),console.log("✅ Login successful")}catch(m){throw console.error("Login error:",m),m instanceof Error?m.message.includes("user-not-found")?o("Aucun compte trouvé avec cet email"):m.message.includes("wrong-password")?o("Mot de passe incorrect"):m.message.includes("invalid-email")?o("Format d'email invalide"):o("Erreur de connexion"):o("Erreur de connexion"),m}finally{i(!1)}},register:async w=>{o(null),i(!0);try{console.log("📝 Registering user:",w.email);const{user:m}=await vR(Ws,w.email,w.password),I=`${w.firstName} ${w.lastName}`;await ER(m,{displayName:I});const k={email:m.email,displayName:I,firstName:w.firstName,lastName:w.lastName,hasPaid:!1,subscription:{plan:"free",creditsRemaining:3,maxCredits:3,renewalDate:new Date},createdAt:new Date};await Wy(gi(Lr,"users",m.uid),k);const L={uid:m.uid,email:m.email,displayName:I,firstName:w.firstName,lastName:w.lastName,hasPaid:!1,firestoreId:m.uid,subscription:k.subscription};n(L),console.log("✅ Registration successful")}catch(m){throw console.error("Registration error:",m),m instanceof Error?o(m.message):o("Erreur lors de l'inscription"),m}finally{i(!1)}},logout:async()=>{try{console.log("🚪 Logging out user"),await xR(Ws),n(null),o(null),console.log("✅ Logout successful")}catch(w){throw console.error("Logout error:",w),o("Erreur lors de la déconnexion"),w}},clearError:u,updateUserPaymentStatus:async(w,m="free")=>{if(e)try{console.log(`💳 Updating payment status: ${w}, plan: ${m}`);const I=l(m),k={plan:m,creditsRemaining:I,maxCredits:I,renewalDate:new Date};await Wc(gi(Lr,"users",e.uid),{hasPaid:w,subscription:k}),n(L=>L?{...L,hasPaid:w,subscription:k}:null),console.log(`✅ User payment status updated: ${w?"paid":"free"}, plan: ${m}`)}catch(I){throw console.error("Error updating payment status:",I),o("Erreur lors de la mise à jour du statut de paiement"),I}},decrementCredits:async()=>{if(!e||!e.subscription)return!1;if(e.subscription.creditsRemaining<=0)return console.log("❌ Aucun crédit disponible pour déduction"),!1;try{console.log(`💳 Déduction d'un crédit (${e.subscription.creditsRemaining} → ${e.subscription.creditsRemaining-1})`);const w=e.subscription.creditsRemaining-1;return await Wc(gi(Lr,"users",e.uid),{"subscription.creditsRemaining":w}),n(m=>m?{...m,subscription:{...m.subscription,creditsRemaining:w}}:null),console.log(`✅ Crédit déduit avec succès: ${w} crédits restants`),!0}catch(w){return console.error("❌ Erreur lors de la déduction des crédits:",w),o("Erreur lors de la déduction des crédits"),!1}},refundCredits:async()=>{if(!e||!e.subscription)return!1;try{console.log(`💰 Remboursement d'un crédit (${e.subscription.creditsRemaining} → ${e.subscription.creditsRemaining+1})`);const w=e.subscription.creditsRemaining+1;return await Wc(gi(Lr,"users",e.uid),{"subscription.creditsRemaining":w}),n(m=>m?{...m,subscription:{...m.subscription,creditsRemaining:w}}:null),console.log(`✅ Crédit remboursé avec succès: ${w} crédits restants`),!0}catch(w){return console.error("❌ Erreur lors du remboursement des crédits:",w),o("Erreur lors du remboursement des crédits"),!1}}};return p.jsx(uE.Provider,{value:D,children:t})},Ib=({onShowLogin:t,onShowPricing:e,onGoHome:n})=>{var f,g,y,T,R,P;const[r,i]=Z.useState(!1),{isAuthenticated:s,user:o,logout:l}=is(),u=()=>{l(),i(!1)},c=()=>{n?n():window.location.reload()};return p.jsx("header",{className:"bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50",children:p.jsxs("div",{className:"container mx-auto px-4 py-4 max-w-6xl",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("button",{onClick:c,className:"flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 cursor-pointer",children:[p.jsx("div",{className:"p-2 bg-white rounded-xl shadow-lg",children:p.jsx(si,{className:"w-6 h-6 text-vinted-500"})}),p.jsx("h1",{className:"text-xl font-bold text-white",children:"Swear"})]}),p.jsxs("div",{className:"flex items-center space-x-6",children:[p.jsxs("nav",{className:"hidden md:flex items-center space-x-6 text-sm text-white/80",children:[p.jsx("a",{href:"#contact",className:"hover:text-white transition-colors duration-200 cursor-pointer",children:"Contact"}),p.jsx("button",{onClick:e,className:"hover:text-white transition-colors duration-200 cursor-pointer",children:"Prix"}),s?p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsxs("span",{className:"text-white/90 text-sm",children:["Bonjour, ",o==null?void 0:o.firstName,(o==null?void 0:o.hasPaid)&&p.jsx("span",{className:"ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full",children:((f=o.subscription)==null?void 0:f.plan)==="pro"?"Pro":((g=o.subscription)==null?void 0:g.plan)==="starter"?"Starter":"Premium"})]}),p.jsx("button",{onClick:()=>window.location.reload(),className:"text-xs text-white/60 hover:text-white/80 transition-colors",title:"Rafraîchir les données",children:"🔄"}),(o==null?void 0:o.hasPaid)&&p.jsxs("div",{className:"text-xs text-white/60",children:[((y=o.subscription)==null?void 0:y.creditsRemaining)||0," crédits"]}),p.jsxs("button",{onClick:u,className:"flex items-center hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20",title:"Se déconnecter",children:[p.jsx(vg,{className:"w-4 h-4 mr-2"}),"Déconnexion"]})]}):p.jsxs("button",{onClick:t,className:"flex items-center hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20",children:[p.jsx($h,{className:"w-4 h-4 mr-2"}),"Connexion"]})]}),p.jsx("button",{onClick:()=>i(!r),className:"md:hidden flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200",children:r?p.jsx(NS,{className:"w-5 h-5 text-white"}):p.jsx(AS,{className:"w-5 h-5 text-white"})})]})]}),r&&p.jsx("div",{className:"md:hidden mt-4 py-4 border-t border-white/20",children:p.jsxs("nav",{className:"flex flex-col space-y-4",children:[p.jsx("a",{href:"#contact",className:"text-white/80 hover:text-white transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10",onClick:()=>i(!1),children:"Contact"}),p.jsx("button",{onClick:()=>{e==null||e(),i(!1)},className:"text-white/80 hover:text-white transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 cursor-pointer",children:"Prix"}),s?p.jsxs("div",{className:"space-y-2",children:[p.jsxs("div",{className:"text-white/90 py-2 px-4",children:["Bonjour, ",o==null?void 0:o.firstName," !",(o==null?void 0:o.hasPaid)&&p.jsx("span",{className:"ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full",children:((T=o.subscription)==null?void 0:T.plan)==="pro"?"Pro":((R=o.subscription)==null?void 0:R.plan)==="starter"?"Starter":"Premium"}),(o==null?void 0:o.hasPaid)&&p.jsxs("div",{className:"text-xs text-white/60 mt-1",children:[((P=o.subscription)==null?void 0:P.creditsRemaining)||0," crédits restants"]})]}),p.jsxs("button",{onClick:u,className:"flex items-center text-white/80 hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 text-left w-full",children:[p.jsx(vg,{className:"w-4 h-4 mr-2"}),"Se déconnecter"]})]}):p.jsxs("button",{className:"flex items-center text-white/80 hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 text-left",onClick:()=>{t==null||t(),i(!1)},children:[p.jsx($h,{className:"w-4 h-4 mr-2"}),"Connexion"]})]})})]})})},Sb=({onImageUpload:t,isProcessing:e,processingError:n,onShowLogin:r,onShowPricing:i})=>{var P,D,w;const[s,o]=Z.useState(!1),l=Td.useRef(null),{isAuthenticated:u,user:c}=is(),[f,g]=Z.useState({gender:"femme",size:"m"}),y=Z.useCallback(m=>{m.preventDefault(),o(!1);const k=Array.from(m.dataTransfer.files).find(L=>L.type.startsWith("image/"));k&&R(k).then(({displayUrl:L,processedFile:j})=>{t(L,k.name,j,f)})},[t,f]),T=m=>{var k,L;const I=(k=m.target.files)==null?void 0:k[0];if(I&&I.type.startsWith("image/")){if(!u){r==null||r();return}if(!(c!=null&&c.hasPaid)||(((L=c==null?void 0:c.subscription)==null?void 0:L.creditsRemaining)||0)<=0){c!=null&&c.hasPaid?(alert("💳 Vous n'avez plus de crédits disponibles. Veuillez recharger votre compte."),i==null||i()):(alert("⚠️ Vous devez souscrire à un abonnement pour utiliser ce service."),i==null||i());return}R(I).then(({displayUrl:j,processedFile:E})=>{t(j,I.name,E,f)})}},R=m=>new Promise(I=>{const k=document.createElement("canvas"),L=k.getContext("2d"),j=new Image;if(!L){const E=URL.createObjectURL(m);I({displayUrl:E,processedFile:m});return}j.onload=()=>{k.width=300,k.height=400,L.fillStyle="#ffffff",L.fillRect(0,0,300,400);const S=j.width/j.height,A=300/400;let C,N,x,$e;S>A?(N=400,C=400*S):(C=300,N=300/S),x=(300-C)/2,$e=(400-N)/2,L.drawImage(j,x,$e,C,N),k.toBlob(ve=>{if(ve){const Xe=URL.createObjectURL(ve),Ye=new File([ve],m.name,{type:"image/jpeg",lastModified:Date.now()});I({displayUrl:Xe,processedFile:Ye})}else{const Xe=URL.createObjectURL(m);I({displayUrl:Xe,processedFile:m})}},"image/jpeg",.9)},j.onerror=()=>{const E=URL.createObjectURL(m);I({displayUrl:E,processedFile:m})},j.src=URL.createObjectURL(m)});return p.jsxs("div",{className:"max-w-4xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg",children:"Donnez vie à vos vêtements en quelques secondes"}),p.jsx("p",{className:"text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow",children:"Ne perdez plus de ventes à cause de photos qui ne donnent pas envie. Avec Swear, générez en un clic des images professionnelles qui mettent vos vêtements en valeur et boostent vos ventes"}),p.jsxs("div",{className:"hidden sm:flex flex-col sm:flex-row items-center justify-center gap-6 mt-8",children:[p.jsxs("div",{className:"flex items-center text-white/90",children:[p.jsx("div",{className:"w-2 h-2 bg-white rounded-full mr-3"}),p.jsx("span",{className:"text-sm font-medium",children:"Rendus ultra-réalistes"})]}),p.jsxs("div",{className:"flex items-center text-white/90",children:[p.jsx("div",{className:"w-2 h-2 bg-white rounded-full mr-3"}),p.jsx("span",{className:"text-sm font-medium",children:"Génération en moins de 10s"})]}),p.jsxs("div",{className:"flex items-center text-white/90",children:[p.jsx("div",{className:"w-2 h-2 bg-white rounded-full mr-3"}),p.jsx("span",{className:"text-sm font-medium",children:"Adapté à Vinted & marketplaces"})]})]})]}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-12",children:[p.jsxs("button",{onClick:r,className:"flex items-center justify-center px-8 py-4 bg-white text-vinted-500 font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-xl hover:scale-105",children:[p.jsx("span",{className:"mr-2",children:"🎯"}),"Essayer gratuitement"]}),p.jsxs("button",{onClick:i,className:"flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-200 shadow-xl hover:scale-105",children:[p.jsx("span",{className:"mr-2",children:"⭐"}),"S'abonner"]})]}),n&&p.jsx("div",{className:"max-w-2xl mx-auto mb-8",children:p.jsx("div",{className:"bg-red-500/20 border border-red-500/30 rounded-xl p-4 backdrop-blur-lg",children:p.jsxs("div",{className:"flex items-center",children:[p.jsx(gS,{className:"w-5 h-5 text-red-400 mr-3"}),p.jsxs("div",{children:[p.jsx("h4",{className:"text-red-400 font-medium",children:"Erreur de traitement"}),p.jsx("p",{className:"text-red-300 text-sm",children:n}),p.jsx("p",{className:"text-red-200 text-xs mt-2",children:"💡 En cas de problème de connexion, l'application passe automatiquement en mode démonstration"})]})]})})}),p.jsxs("div",{className:"max-w-2xl mx-auto mb-8",children:[u&&c&&p.jsx("div",{className:"mb-6 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsxs("h4",{className:"text-white font-medium",children:["Bienvenue, ",c.firstName," !"]}),p.jsx("p",{className:"text-white/70 text-sm",children:c.hasPaid?`Plan ${((P=c.subscription)==null?void 0:P.plan)==="pro"?"Pro":((D=c.subscription)==null?void 0:D.plan)==="starter"?"Starter":"Premium"} • ${((w=c.subscription)==null?void 0:w.creditsRemaining)||0} crédits restants`:"Plan gratuit • Abonnement requis pour utiliser le service"}),c.hasPaid&&p.jsx("p",{className:"text-green-400 text-xs mt-1",children:"✅ Accès complet activé"}),!c.hasPaid&&p.jsx("p",{className:"text-yellow-400 text-xs mt-1",children:"⚠️ Abonnement requis pour générer des images"})]}),p.jsx("div",{className:"flex flex-col gap-2",children:!c.hasPaid&&p.jsx("button",{onClick:i,className:"bg-white text-vinted-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors",children:"Souscrire"})})]})}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl",children:[p.jsxs("h3",{className:"text-lg font-semibold text-white mb-4 flex items-center",children:[p.jsx($h,{className:"w-5 h-5 mr-2"}),"Options du Vêtement"]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/80 mb-3",children:"Genre"}),p.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{value:"femme",label:"Femme"},{value:"homme",label:"Homme"},{value:"enfant",label:"Enfant"}].map(m=>p.jsxs("label",{className:"cursor-pointer",children:[p.jsx("input",{type:"radio",name:"gender",value:m.value,checked:f.gender===m.value,onChange:I=>g(k=>({...k,gender:I.target.value})),className:"sr-only"}),p.jsx("div",{className:`
                      px-2 py-3 rounded-xl text-center text-sm font-medium transition-all duration-200 border-2 min-h-[48px] flex items-center justify-center
                      ${f.gender===m.value?"bg-white text-vinted-600 border-white shadow-lg scale-105":"bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40"}
                    `,children:m.label})]},m.value))})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-sm font-medium text-white/80 mb-3 flex items-center",children:[p.jsx(CS,{className:"w-4 h-4 mr-1"}),"Taille"]}),p.jsx("div",{className:"grid grid-cols-5 gap-2",children:[{value:"xs",label:"XS"},{value:"s",label:"S"},{value:"m",label:"M"},{value:"l",label:"L"},{value:"xl",label:"XL"}].map(m=>p.jsx("button",{type:"button",onClick:()=>g(I=>({...I,size:m.value})),className:`
                      px-2 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-2
                      ${f.size===m.value?"bg-white text-vinted-600 border-white shadow-lg scale-105":"bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40"}
                    `,children:m.label},m.value))})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/80 mb-3",children:"Vue"}),p.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:"normal",label:"Normale"},{value:"mirror",label:"Miroir"}].map(m=>p.jsx("button",{type:"button",onClick:()=>g(I=>({...I,mirror:m.value})),className:`
                      px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-2
                      ${f.mirror===m.value?"bg-white text-vinted-600 border-white shadow-lg scale-105":"bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40"}
                    `,children:m.label},m.value))})]})]})]})]}),p.jsx("div",{className:"max-w-2xl mx-auto mb-12",children:p.jsxs("div",{className:`
            relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 backdrop-blur-lg
            ${e?"border-white/20 bg-white/5 cursor-not-allowed opacity-50":s?"border-white bg-white/20 scale-105 shadow-2xl":"border-white/30 bg-white/10 hover:border-white/50 hover:bg-white/20 shadow-xl cursor-pointer"}
          `,onDrop:y,onDragOver:m=>{m.preventDefault(),o(!0)},onDragLeave:()=>o(!1),children:[p.jsx("input",{ref:l,type:"file",accept:"image/*",onChange:T,disabled:e,className:`absolute inset-0 w-full h-full opacity-0 ${e?"cursor-not-allowed":"cursor-pointer"}`}),p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsx("div",{className:`
              w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300
              ${s?"bg-white scale-110 shadow-lg":"bg-white/20 backdrop-blur"}
              ${e?"cursor-not-allowed":"cursor-pointer hover:scale-110"}
            `,children:p.jsx(_g,{className:`
                w-8 h-8 transition-colors duration-300
                ${s?"text-vinted-500":"text-white"}
              `})}),p.jsx("h3",{className:"text-xl font-semibold text-white mb-2 drop-shadow",children:e?"Traitement en cours...":s?"Déposez votre photo ici !":"Téléchargez Votre Photo de Vêtement"}),p.jsx("p",{className:"text-white/80 mb-6",children:e?"Votre image est en cours de traitement par notre IA...":"Glissez-déposez votre image, ou cliquez pour parcourir"}),p.jsx("button",{disabled:e,className:`
                px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg
                ${e?"bg-white/50 text-vinted-400 cursor-not-allowed":"bg-white text-vinted-500 hover:bg-white/90 hover:shadow-xl hover:scale-105"}
              `,children:e?"Traitement...":u?c!=null&&c.hasPaid?"Choisir un Fichier":"Abonnement requis":"Se connecter pour commencer"}),p.jsx("p",{className:"text-xs text-white/60 mt-4",children:"Supporte JPG, PNG, WebP • Max 25Mo"})]})]})}),p.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[p.jsxs("div",{className:"text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300",children:[p.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4",children:p.jsx(_g,{className:"w-6 h-6 text-white"})}),p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Upload Facile"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Glissez-déposez ou cliquez pour télécharger vos photos de vêtements"})]}),p.jsxs("div",{className:"text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300",children:[p.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4",children:p.jsx(si,{className:"w-6 h-6 text-white"})}),p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Amélioration IA"}),p.jsx("p",{className:"text-white/80 text-sm",children:"L'IA avancée place vos articles sur des mannequins professionnels"})]}),p.jsxs("div",{className:"text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300",children:[p.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4",children:p.jsx(IS,{className:"w-6 h-6 text-white"})}),p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Haute Qualité"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Téléchargez des photos professionnelles prêtes pour vos annonces Vinted"})]})]})]})},xb=({uploadedImage:t,fileName:e})=>{const[n,r]=Z.useState(0),[i,s]=Z.useState("Analyzing clothing item...");return Z.useEffect(()=>{const o=["Analyse de l'article vestimentaire...","Sélection du mannequin optimal...","Application de l'amélioration IA...","Finalisation de la photo professionnelle..."],l=setInterval(()=>{r(u=>{const c=Math.min(u+2,100);return c<25?s(o[0]):c<50?s(o[1]):c<75?s(o[2]):s(o[3]),c})},60);return()=>clearInterval(l)},[]),p.jsxs("div",{className:"max-w-3xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("div",{className:"w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-2xl",children:p.jsx(si,{className:"w-10 h-10 text-vinted-500"})}),p.jsx("h2",{className:"text-3xl font-bold text-white mb-3 drop-shadow-lg",children:"Création de Votre Photo Professionnelle"}),p.jsxs("p",{className:"text-white/90 drop-shadow",children:['Notre IA transforme "',e,'" en un superbe cliché sur mannequin']})]}),p.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl mb-8 border border-white/20",children:p.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-8",children:[p.jsx("div",{className:"flex-shrink-0",children:t&&p.jsx("div",{className:"w-64 h-80 rounded-xl overflow-hidden shadow-2xl border border-white/20",children:p.jsx("img",{src:t,alt:"Uploaded clothing",className:"w-full h-full object-cover bg-white/10"})})}),p.jsxs("div",{className:"flex-1 space-y-6",children:[p.jsxs("div",{className:"text-center lg:text-left",children:[p.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:"Traitement de Votre Image"}),p.jsx("p",{className:"text-white/80",children:i})]}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex justify-between text-sm",children:[p.jsx("span",{className:"text-white/80",children:"Progression"}),p.jsxs("span",{className:"font-medium text-white",children:[Math.round(n),"%"]})]}),p.jsx("div",{className:"w-full bg-white/20 rounded-full h-3 overflow-hidden",children:p.jsx("div",{className:"h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-300 ease-out shadow-lg",style:{width:`${n}%`}})})]}),p.jsx("div",{className:"space-y-3",children:["Analyse d'image terminée","Sélection de mannequin optimisée","Amélioration IA en cours","Photo professionnelle prête"].map((o,l)=>{const u=n>(l+1)*25,c=n>=l*25&&n<(l+1)*25;return p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsxs("div",{className:`
                      w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300
                      ${u?"bg-white border-white shadow-lg":c?"border-white":"border-white/30"}
                    `,children:[u&&p.jsx("div",{className:"w-2 h-2 bg-vinted-500 rounded-full"}),c&&p.jsx(m0,{className:"w-3 h-3 text-white animate-spin"})]}),p.jsx("span",{className:`
                      text-sm transition-colors duration-300
                      ${u||c?"text-white font-medium":"text-white/60"}
                    `,children:o})]},l)})})]})]})}),p.jsx("div",{className:"text-center",children:p.jsx("p",{className:"text-white/60 text-sm",children:"Temps estimé : 15-30 secondes • Traitement haute qualité en cours"})})]})},Ab=({uploadedImage:t,generatedImage:e,fileName:n,onStartOver:r})=>{const[i,s]=Z.useState(!0),[o,l]=Z.useState(!1),u=()=>{if(e){l(!0);const c=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);(async()=>{try{let g;if(e.startsWith("blob:"))g=await(await fetch(e)).blob();else if(e.startsWith("data:image/"))g=await(await fetch(e)).blob();else try{g=await(await fetch(e)).blob()}catch{window.open(e,"_blank");return}const T=`swear-enhanced-${new Date().toISOString().slice(0,19).replace(/[:-]/g,"")}.jpg`;if(c){if(navigator.share&&navigator.canShare)try{const D=new File([g],T,{type:"image/jpeg"});if(navigator.canShare({files:[D]})){await navigator.share({title:"Photo Swear améliorée",text:"Voici ma photo mode améliorée avec Swear",files:[D]});return}}catch{console.log("Partage échoué, tentative de téléchargement direct")}const R=URL.createObjectURL(g),P=window.open();if(P)P.document.write(`
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
                    <a href="${R}" download="${T}" class="download-btn">
                      📥 Télécharger
                    </a>
                  </body>
                </html>
              `),P.document.close();else{const D=document.createElement("a");D.href=R,D.download=T,D.style.display="none",document.body.appendChild(D),D.click(),document.body.removeChild(D)}setTimeout(()=>URL.revokeObjectURL(R),1e4)}else{const R=URL.createObjectURL(g),P=document.createElement("a");P.href=R,P.download=T,P.style.display="none",document.body.appendChild(P),P.click(),document.body.removeChild(P),URL.revokeObjectURL(R)}}catch(g){console.error("Erreur téléchargement:",g),window.open(e,"_blank")}})(),setTimeout(()=>l(!1),2e3)}};return p.jsxs("div",{className:"max-w-5xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-2xl",children:p.jsx(PS,{className:"w-8 h-8 text-vinted-500"})}),p.jsx("h2",{className:"text-3xl font-bold text-white mb-3 drop-shadow-lg",children:"Votre Photo Professionnelle est Prête !"}),p.jsx("p",{className:"text-white/90 text-lg drop-shadow",children:"Votre article de mode a été transformé en un superbe cliché sur mannequin"})]}),p.jsx("div",{className:"flex justify-center mb-8",children:p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-lg p-1 shadow-xl border border-white/20",children:[p.jsx("button",{onClick:()=>s(!0),className:`
              px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
              ${i?"bg-white text-vinted-500 shadow-lg":"text-white/80 hover:text-white"}
            `,children:"Comparer"}),p.jsx("button",{onClick:()=>s(!1),className:`
              px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
              ${i?"text-white/80 hover:text-white":"bg-white text-vinted-500 shadow-lg"}
            `,children:"Résultat Final"})]})}),p.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl mb-8 border border-white/20",children:i?p.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 items-start justify-center",children:[p.jsxs("div",{className:"text-center",children:[p.jsx("p",{className:"text-sm font-medium text-white/80 mb-4 flex items-center justify-center",children:"ORIGINAL"}),p.jsx("div",{className:"rounded-xl overflow-hidden shadow-2xl border border-white/20 mx-auto",style:{width:"300px",height:"411px"},children:t&&p.jsx("img",{src:t,alt:"Original",className:"w-full h-full object-cover"})})]}),p.jsxs("div",{className:"text-center",children:[p.jsxs("p",{className:"text-sm font-medium text-white/80 mb-4 flex items-center justify-center",children:[p.jsx(si,{className:"w-4 h-4 mr-2 text-white"}),"AMÉLIORÉ"]}),p.jsx("div",{className:"rounded-xl overflow-hidden shadow-2xl border border-white/20 mx-auto",style:{width:"300px",height:"411px"},children:e&&p.jsx("img",{src:e,alt:"Enhanced",className:"w-full h-full object-cover"})})]})]}):p.jsx("div",{className:"flex justify-center",children:p.jsx("div",{className:"rounded-xl overflow-hidden shadow-2xl border border-white/20",style:{width:"300px",height:"411px"},children:e&&p.jsx("img",{src:e,alt:"Enhanced result",className:"w-full h-full object-cover"})})})}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-8",children:[p.jsx("button",{onClick:u,disabled:o,style:{color:"#09B1BA"},className:`
            flex items-center justify-center px-8 py-4 font-medium rounded-xl transition-all duration-200
            ${o?"bg-green-500 !text-white scale-95":"bg-white hover:bg-white/90 hover:scale-105 shadow-xl"}
          `,title:"Télécharger l'image améliorée",children:o?p.jsxs(p.Fragment,{children:[p.jsx(yg,{className:"w-5 h-5 mr-2 animate-bounce"}),p.jsx("span",{className:"hidden sm:inline",children:"Téléchargé !"}),p.jsx("span",{className:"sm:hidden",children:"OK !"})]}):p.jsxs(p.Fragment,{children:[p.jsx(yg,{className:"w-5 h-5 mr-2"}),p.jsx("span",{className:"hidden sm:inline",children:"Télécharger la Photo Améliorée"}),p.jsx("span",{className:"sm:hidden",children:"Télécharger"})]})}),p.jsxs("button",{onClick:r,className:"flex items-center justify-center px-8 py-4 text-white font-medium rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-200 backdrop-blur-lg",children:[p.jsx(RS,{className:"w-5 h-5 mr-2"}),"Créer une Autre"]})]}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center text-white border border-white/20 shadow-2xl",children:[p.jsx("h3",{className:"text-2xl font-bold mb-3",children:"Prêt à Booster Vos Ventes Vinted ?"}),p.jsx("p",{className:"text-white/90 mb-6 max-w-2xl mx-auto",children:"Les photos professionnelles peuvent augmenter la visibilité et le prix de vente de vos articles jusqu'à 40%. Votre photo améliorée est maintenant prête à être téléchargée sur Vinted !"}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[p.jsxs("a",{href:"https://vinted.com",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-6 py-3 bg-white text-vinted-500 font-medium rounded-lg hover:bg-white/90 transition-colors duration-200 shadow-lg",children:["Publier sur Vinted",p.jsx(yS,{className:"w-4 h-4 ml-2"})]}),p.jsxs("button",{className:"inline-flex items-center px-6 py-3 text-white font-medium rounded-lg border border-white/30 hover:bg-white/10 transition-colors duration-200 backdrop-blur-lg",children:[p.jsx(kS,{className:"w-4 h-4 mr-2"}),"Partager le Résultat"]})]})]})]})},Rb=()=>p.jsx("footer",{className:"bg-black/20 backdrop-blur-lg text-white py-12 mt-20 border-t border-white/10",children:p.jsxs("div",{className:"container mx-auto px-4 max-w-6xl",children:[p.jsxs("div",{className:"grid md:grid-cols-4 gap-8",children:[p.jsxs("div",{className:"col-span-2",children:[p.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[p.jsx("div",{className:"p-2 bg-white rounded-xl shadow-lg",children:p.jsx(si,{className:"w-5 h-5 text-vinted-500"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-bold text-lg",children:"Swear"}),p.jsx("p",{className:"text-white/60 text-sm",children:"Photos Mode Professionnelles"})]})]}),p.jsx("p",{className:"text-white/80 leading-relaxed max-w-md",children:"Transformez vos annonces mode avec la photographie professionnelle alimentée par l'IA. Parfait pour les vendeurs Vinted qui veulent se démarquer et vendre plus rapidement."})]}),p.jsxs("div",{children:[p.jsx("h4",{className:"font-semibold mb-4",children:"Fonctionnalités"}),p.jsxs("ul",{className:"space-y-2 text-white/70",children:[p.jsx("li",{children:"Placement IA sur Mannequin"}),p.jsx("li",{children:"Traitement Haute Qualité"}),p.jsx("li",{children:"Téléchargements Instantanés"}),p.jsx("li",{children:"Optimisé Mobile"})]})]}),p.jsxs("div",{children:[p.jsx("h4",{className:"font-semibold mb-4",children:"Support"}),p.jsxs("ul",{className:"space-y-2 text-white/70",children:[p.jsx("li",{children:"FAQ"}),p.jsx("li",{children:"Nous Contacter"}),p.jsx("li",{children:"Guide de Traitement"}),p.jsx("li",{children:"Meilleures Pratiques"})]})]})]}),p.jsxs("div",{className:"border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between",children:[p.jsx("p",{className:"text-white/60 text-sm",children:"© 2025 Swear. Tous droits réservés."}),p.jsxs("p",{className:"text-white/60 text-sm flex items-center mt-4 md:mt-0",children:["Fait avec ",p.jsx(TS,{className:"w-4 h-4 mx-1 text-red-400"})," pour les vendeurs mode"]})]})]})}),Cb=({onBack:t,onShowPricing:e})=>{const[n,r]=Z.useState("login"),[i,s]=Z.useState(!1),[o,l]=Z.useState({email:"",password:"",firstName:"",lastName:""}),{login:u,register:c,loading:f,error:g,clearError:y}=is(),T=(D,w)=>{l(m=>({...m,[D]:w}))},R=D=>{r(D),l({email:"",password:"",firstName:"",lastName:""}),y()},P=async D=>{D.preventDefault();try{n==="login"?await u({email:o.email,password:o.password}):await c({email:o.email,password:o.password,firstName:o.firstName,lastName:o.lastName}),t()}catch{}};return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"}),p.jsx("div",{className:"absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"})]}),p.jsx("div",{className:"relative z-10 min-h-screen flex items-center justify-center p-4",children:p.jsxs("div",{className:"w-full max-w-md",children:[p.jsxs("button",{onClick:t,className:"flex items-center text-white/80 hover:text-white mb-8 transition-colors",children:[p.jsx(pf,{className:"w-5 h-5 mr-2"}),"Retour"]}),p.jsx("div",{className:"text-center mb-8",children:p.jsxs("div",{className:"flex items-center justify-center space-x-3 mb-4",children:[p.jsx("div",{className:"p-3 bg-white rounded-xl shadow-lg",children:p.jsx(si,{className:"w-8 h-8 text-vinted-500"})}),p.jsxs("div",{children:[p.jsx("h1",{className:"text-2xl font-bold text-white",children:"Swear"}),p.jsx("p",{className:"text-sm text-white/80",children:"Photos Mode Professionnelles"})]})]})}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20",children:[p.jsxs("div",{className:"text-center mb-6",children:[p.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:n==="login"?"Connexion":"Inscription"}),p.jsx("p",{className:"text-white/80",children:n==="login"?"Connectez-vous pour accéder à vos transformations":"Créez votre compte et obtenez 3 transformations gratuites"})]}),g&&p.jsx("div",{className:"mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl backdrop-blur-lg",children:p.jsx("p",{className:"text-red-300 text-sm",children:g})}),n==="login"&&p.jsxs("div",{className:"mb-6 p-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-lg",children:[p.jsx("p",{className:"text-white font-medium mb-1",children:"Compte démo :"}),p.jsx("p",{className:"text-white/80 text-sm",children:"demo@swear.com / 123456"})]}),p.jsxs("form",{onSubmit:P,className:"space-y-4",children:[n==="register"&&p.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/90 mb-2",children:"Prénom"}),p.jsx("input",{type:"text",value:o.firstName,onChange:D=>T("firstName",D.target.value),required:!0,className:"w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vinted-500 focus:border-transparent",placeholder:"Prénom"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/90 mb-2",children:"Nom"}),p.jsx("input",{type:"text",value:o.lastName,onChange:D=>T("lastName",D.target.value),required:!0,className:"w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vinted-500 focus:border-transparent",placeholder:"Nom"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/90 mb-2",children:"Email"}),p.jsxs("div",{className:"relative",children:[p.jsx(xS,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),p.jsx("input",{type:"email",value:o.email,onChange:D=>T("email",D.target.value),required:!0,className:"w-full pl-12 pr-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vinted-500 focus:border-transparent",placeholder:"votre@email.com"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-white/90 mb-2",children:"Mot de passe"}),p.jsxs("div",{className:"relative",children:[p.jsx(SS,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),p.jsx("input",{type:i?"text":"password",value:o.password,onChange:D=>T("password",D.target.value),required:!0,minLength:6,className:"w-full pl-12 pr-12 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vinted-500 focus:border-transparent",placeholder:"••••••••"}),p.jsx("button",{type:"button",onClick:()=>s(!i),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:i?p.jsx(wS,{className:"w-5 h-5"}):p.jsx(ES,{className:"w-5 h-5"})})]}),n==="register"&&p.jsx("p",{className:"text-xs text-white/60 mt-1",children:"Minimum 6 caractères"})]}),p.jsx("button",{type:"submit",disabled:f,className:"w-full bg-white text-vinted-500 py-3 px-4 rounded-xl font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-6 shadow-lg",children:f?p.jsxs(p.Fragment,{children:[p.jsx(m0,{className:"w-5 h-5 mr-2 animate-spin"}),n==="login"?"Connexion...":"Création..."]}):n==="login"?"Se connecter":"Créer mon compte"})]}),p.jsx("div",{className:"mt-6 text-center",children:p.jsxs("p",{className:"text-white/80",children:[n==="login"?"Pas de compte ?":"Déjà un compte ?",p.jsx("button",{type:"button",onClick:()=>R(n==="login"?"register":"login"),className:"ml-2 text-white font-medium hover:text-white/80 transition-colors underline",children:n==="login"?"S'inscrire":"Se connecter"})]})}),n==="register"&&p.jsxs("div",{className:"mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-lg border border-white/20",children:[p.jsx("h4",{className:"font-medium text-white mb-2",children:"Avantages :"}),p.jsxs("ul",{className:"text-sm text-white/80 space-y-1",children:[p.jsx("li",{children:"• 3 transformations gratuites"}),p.jsx("li",{children:"• Historique de vos créations"}),p.jsx("li",{children:"• Support prioritaire"})]})]})]})]})})]})},kb=({onBack:t,userEmail:e,currentUserEmail:n})=>{var y;const{user:r}=is(),{updateUserPaymentStatus:i}=is(),s=async T=>{if(r)try{const R=o();if(console.log(`🔄 Demande de changement de plan: ${R} → ${T}`),R===T){console.log("⚠️ Plan identique, pas de changement nécessaire");return}if(T!=="free"){const w=localStorage.getItem("lastStripeInteraction"),m=localStorage.getItem("stripeRedirectTime");if(!w||!m){console.log("❌ Aucune interaction Stripe récente détectée");return}const I=Date.now()-parseInt(m);if(I>15*60*1e3){console.log("❌ Redirection Stripe trop ancienne"),localStorage.removeItem("lastStripeInteraction"),localStorage.removeItem("selectedPlan"),localStorage.removeItem("stripeRedirectTime");return}console.log(`✅ Interaction Stripe valide (${Math.round(I/1e3)}s ago)`)}let P=3,D=!1;switch(T){case"starter":P=25,D=!0;break;case"pro":P=150,D=!0;break;case"free":P=3,D=!1;break}console.log(`💳 Configuration: Plan=${T}, Crédits=${P}, Payé=${D}`),await i(D,T),console.log(`✅ Plan mis à jour avec succès: ${R} → ${T}`),T!=="free"&&(localStorage.removeItem("lastStripeInteraction"),localStorage.removeItem("selectedPlan"),localStorage.removeItem("stripeRedirectTime")),setTimeout(()=>{window.location.reload()},1500)}catch(R){console.error("❌ Erreur critique lors du changement de plan:",R),localStorage.removeItem("lastStripeInteraction"),localStorage.removeItem("selectedPlan"),localStorage.removeItem("stripeRedirectTime")}};Z.useEffect(()=>{(async()=>{const R=new URLSearchParams(window.location.search),P=R.has("success")&&R.get("success")==="true"||R.has("session_id")||localStorage.getItem("lastStripeInteraction"),D=localStorage.getItem("lastStripeInteraction"),w=D&&Date.now()-parseInt(D)<30*60*1e3;if(P&&r&&w){console.log("🔍 Paiement Stripe détecté - Vérification en cours...");const m=localStorage.getItem("selectedPlan");if(!m||!["starter","pro"].includes(m)){console.log("❌ Plan sélectionné invalide, annulation");return}console.log("🧪 Mode test - Vérification simulée du paiement Stripe"),setTimeout(async()=>{var I;try{let k=m;if(m==="pro")k="pro";else if(m==="starter")k="starter";else{console.log("❌ Incohérence entre plan sélectionné et URL, annulation");return}if(console.log(`✅ Paiement vérifié pour le plan: ${k}`),((I=r.subscription)==null?void 0:I.plan)===k&&r.hasPaid){console.log("⚠️ Utilisateur a déjà ce plan, pas de changement");return}console.log(`🔄 Activation du plan ${k} après vérification réussie`),await s(k),window.history.replaceState({},document.title,window.location.pathname),localStorage.removeItem("selectedPlan"),localStorage.removeItem("lastStripeInteraction")}catch(k){console.error("❌ Erreur lors de l'activation du plan:",k)}},1500)}else P&&(console.log("⚠️ Retour Stripe détecté mais conditions non remplies"),console.log("- User:",!!r),console.log("- Recent interaction:",!!w))})()},[r,i]),Z.useEffect(()=>{if(!r)return;const T=setInterval(async()=>{const R=localStorage.getItem("lastStripeInteraction");if(!R)return;const P=Date.now()-parseInt(R),D=30*60*1e3;if(P>D){console.log("⏰ Timeout de vérification atteint, nettoyage"),localStorage.removeItem("lastStripeInteraction"),localStorage.removeItem("selectedPlan");return}const w=15*60*1e3;if(P<w){const m=new URLSearchParams(window.location.search);if(m.has("success")||m.has("session_id")||localStorage.getItem("selectedPlan")){console.log("🔄 Vérification périodique - Paramètres Stripe détectés");const k=localStorage.getItem("selectedPlan");if(k&&["starter","pro"].includes(k)){console.log(`🎯 Tentative d'activation du plan: ${k}`);try{await s(k),localStorage.removeItem("lastStripeInteraction"),localStorage.removeItem("selectedPlan"),console.log("✅ Plan activé avec succès")}catch(L){console.error("❌ Erreur activation:",L)}}}}},5e3);return()=>clearInterval(T)},[r,i]);const o=()=>{var R;if(!r)return"free";const T=((R=r.subscription)==null?void 0:R.plan)||"free";return T==="premium"?"starter":T},l=o(),u=[{id:"free",name:"Free Plan",price:"0€",period:"/mois",description:"Parfait pour découvrir Swear",features:["3 générations d'images par mois","Qualité standard","Support par email","Téléchargement direct"],icon:si,color:"from-gray-400 to-gray-600",buttonColor:"bg-gray-500 hover:bg-gray-600",popular:!1,credits:3},{id:"starter",name:"Starter",price:"9,90€",period:"/mois",description:"Idéal pour les vendeurs réguliers",features:["25 générations d'images par mois","Qualité haute définition","Support prioritaire","Téléchargement direct","Historique des créations","Formats multiples"],icon:bS,color:"from-vinted-400 to-vinted-600",buttonColor:"bg-vinted-500 hover:bg-vinted-600",popular:!0,credits:25},{id:"pro",name:"Pro",price:"22,90€",period:"/mois",description:"Pour les professionnels de la mode",features:["150 générations d'images par mois","Qualité ultra haute définition","Support prioritaire 24/7","Téléchargement direct","Historique illimité","Formats multiples","API access","Traitement par lot"],icon:_S,color:"from-yellow-400 to-orange-500",buttonColor:"bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600",popular:!1,credits:150}],c=(T,R)=>{if(T==="free")r&&r.hasPaid?(console.log("🔄 Downgrade vers plan gratuit confirmé"),s("free")):t();else if(T==="starter"){console.log("🚀 Redirection vers Stripe Starter"),localStorage.setItem("lastStripeInteraction",Date.now().toString()),localStorage.setItem("selectedPlan","starter"),localStorage.setItem("stripeRedirectTime",Date.now().toString());const w=`https://buy.stripe.com/test_fZucMYcHubsj23adLG2VG00?prefilled_email=${encodeURIComponent(n||e||"exemple@gmail.com")}`;window.open(w,"_blank")}else if(T==="pro"){console.log("🚀 Redirection vers Stripe Pro"),localStorage.setItem("lastStripeInteraction",Date.now().toString()),localStorage.setItem("selectedPlan","pro"),localStorage.setItem("stripeRedirectTime",Date.now().toString());const w=`https://buy.stripe.com/test_eVqfZa22Q7c3bDK4b62VG01?prefilled_email=${encodeURIComponent(n||e||"exemple@gmail.com")}`;window.open(w,"_blank")}},f=T=>{if(T===l)return"current";const R=["free","starter","pro"],P=R.indexOf(l),D=R.indexOf(T);return D<P?"downgrade":D>P?"upgrade":"available"},g=(T,R)=>{switch(f(T)){case"current":return"Plan actuel";case"upgrade":return`Passer à ${R}`;case"downgrade":return T==="free"?"Passer au plan gratuit":`Rétrograder vers ${R}`;default:return T==="free"?"Rester gratuit":`Choisir ${R}`}};return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"}),p.jsx("div",{className:"absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"})]}),p.jsx("div",{className:"relative z-10 min-h-screen p-4",children:p.jsxs("div",{className:"max-w-6xl mx-auto",children:[p.jsxs("button",{onClick:t,className:"flex items-center text-white/80 hover:text-white mb-8 transition-colors",children:[p.jsx(pf,{className:"w-5 h-5 mr-2"}),"Retour"]}),e&&p.jsx("div",{className:"text-center mb-8",children:p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto",children:[p.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"🎉 Bienvenue sur Swear !"}),p.jsxs("p",{className:"text-white/90",children:["Votre compte ",p.jsx("strong",{children:e})," a été créé avec succès. Choisissez maintenant l'abonnement qui vous convient le mieux."]})]})}),p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg",children:"Choisissez Votre Plan"}),p.jsx("p",{className:"text-xl text-white/90 max-w-2xl mx-auto drop-shadow",children:"Transformez vos photos de vêtements en images professionnelles qui boostent vos ventes"}),r&&p.jsxs("div",{className:"mt-6 inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20",children:[p.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"}),p.jsxs("span",{className:"text-white font-medium",children:["Plan actuel : ",l==="free"?"Free Plan":l==="starter"?"Starter":"Pro",((y=r.subscription)==null?void 0:y.creditsRemaining)!==void 0&&p.jsxs("span",{className:"ml-2 text-white/80",children:["• ",r.subscription.creditsRemaining," crédits restants"]})]})]})]}),p.jsx("div",{className:"grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",children:u.map((T,R)=>{const P=T.icon,D=f(T.id),w=D==="current",m=D==="upgrade",I=D==="downgrade";return p.jsxs("div",{className:`
                    relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl
                    ${T.popular&&!w?"ring-2 ring-white/50 scale-105":""}
                    ${w?"ring-2 ring-green-400/50 scale-105":""}
                    hover:bg-white/20 transition-all duration-300
                  `,children:[T.popular&&!w&&p.jsx("div",{className:"absolute -top-4 left-1/2 transform -translate-x-1/2",children:p.jsx("div",{className:"bg-white text-vinted-600 px-4 py-1 rounded-full text-sm font-bold shadow-lg",children:"⭐ Le plus populaire"})}),w&&p.jsx("div",{className:"absolute -top-4 right-4",children:p.jsx("div",{className:"bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg",children:"✅ Plan actuel"})}),p.jsx("div",{className:`w-16 h-16 rounded-2xl bg-gradient-to-br ${T.color} flex items-center justify-center mb-6 mx-auto shadow-lg`,children:p.jsx(P,{className:"w-8 h-8 text-white"})}),p.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-2",children:T.name}),p.jsx("p",{className:"text-white/80 text-center mb-6",children:T.description}),p.jsx("div",{className:"text-center mb-8",children:p.jsxs("div",{className:"flex items-baseline justify-center",children:[p.jsx("span",{className:"text-4xl font-bold text-white",children:T.price}),p.jsx("span",{className:"text-white/70 ml-1",children:T.period})]})}),p.jsx("ul",{className:"space-y-3 mb-8",children:T.features.map((k,L)=>p.jsxs("li",{className:"flex items-start",children:[p.jsx(vS,{className:"w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"}),p.jsx("span",{className:"text-white/90 text-sm",children:k})]},L))}),p.jsx("button",{onClick:()=>c(T.id,T.name),disabled:w&&(r==null?void 0:r.hasPaid),className:`
                      w-full py-3 px-6 rounded-xl font-medium text-white transition-all duration-200 shadow-lg
                      ${w&&(r!=null&&r.hasPaid)?"bg-gray-500 cursor-not-allowed opacity-50":m||I&&T.id==="free"?"bg-green-500 hover:bg-green-600 hover:scale-105 hover:shadow-xl":T.buttonColor+" hover:scale-105 hover:shadow-xl"}
                    `,children:g(T.id,T.name)})]},R)})}),r&&r.hasPaid&&l!=="free"&&p.jsx("div",{className:"mt-12 max-w-2xl mx-auto",children:p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center",children:[p.jsx("h3",{className:"text-lg font-semibold text-white mb-3",children:"🔗 Gestion de votre abonnement"}),p.jsx("p",{className:"text-white/80 text-sm mb-4",children:"Vous pouvez changer de plan à tout moment. Les changements sont automatiquement synchronisés avec votre compte et vos crédits sont mis à jour instantanément."}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[p.jsx("button",{onClick:()=>s("free"),className:"inline-flex items-center px-4 py-2 bg-red-500/20 text-red-300 rounded-lg border border-red-500/30 hover:bg-red-500/30 transition-colors text-sm",children:"⬇️ Passer au plan gratuit"}),p.jsx("a",{href:"https://billing.stripe.com/p/login/test_00000000000000000000000000",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-lg border border-white/30 hover:bg-white/30 transition-colors text-sm",children:"🔗 Gérer sur Stripe"})]}),p.jsx("div",{className:"mt-4 p-3 bg-white/5 rounded-lg",children:p.jsx("p",{className:"text-xs text-white/60",children:"💡 Carte de test : 5454 5454 5454 5454 • Date future • CVC : 123"})})]})}),p.jsxs("div",{className:"mt-16 max-w-4xl mx-auto",children:[p.jsx("h2",{className:"text-2xl font-bold text-white text-center mb-8",children:"Questions Fréquentes"}),p.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20",children:[p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Puis-je changer de plan à tout moment ?"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Oui, vous pouvez upgrader ou downgrader votre plan à tout moment depuis votre espace client."})]}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20",children:[p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Que se passe-t-il si je dépasse mon quota ?"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Vous recevrez une notification et pourrez upgrader votre plan ou attendre le mois suivant."})]}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20",children:[p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Les images sont-elles de haute qualité ?"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Toutes nos images sont générées en haute résolution, parfaites pour vos annonces Vinted."})]}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20",children:[p.jsx("h3",{className:"font-semibold text-white mb-2",children:"Comment les paiements sont-ils vérifiés ?"}),p.jsx("p",{className:"text-white/80 text-sm",children:"Tous les paiements sont automatiquement vérifiés via Stripe. Votre plan est mis à jour en temps réel après validation du paiement."})]})]})]}),p.jsx("div",{className:"mt-8 max-w-4xl mx-auto",children:p.jsxs("div",{className:"backdrop-blur-lg rounded-xl p-6 border text-center bg-blue-500/10 border-blue-500/20",children:[p.jsx("h3",{className:"font-semibold mb-2 text-blue-400",children:"🧪 Mode Test Stripe"}),p.jsx("p",{className:"text-sm text-blue-300",children:"Mode test activé. Utilisez la carte 5454 5454 5454 5454 pour tester les paiements. Après paiement, revenez sur cette page - votre plan sera activé automatiquement en 1-2 secondes."}),p.jsx("div",{className:"mt-3 p-3 bg-blue-500/20 rounded-lg",children:p.jsxs("p",{className:"text-xs text-blue-200",children:["💡 ",p.jsx("strong",{children:"Instructions test :"}),p.jsx("br",{}),"1. Cliquez sur un plan → Redirection Stripe",p.jsx("br",{}),"2. Payez avec 5454 5454 5454 5454",p.jsx("br",{}),"3. Revenez sur cette page → Plan activé !"]})})]})})]})})]})};console.log("🚀 === DEBUT APP.TSX ===");function Pb(){console.log("🚀 === DEBUT FUNCTION APP ==="),console.log("🧪 APP - Test de log dans App component");let t=null;try{t=is().user,console.log("🚀 User from useAuth:",t)}catch(ve){console.error("❌ Erreur useAuth:",ve)}const[e,n]=Z.useState("main"),[r,i]=Z.useState("upload"),[s,o]=Z.useState(null),[l,u]=Z.useState(null),[c,f]=Z.useState(""),[g,y]=Z.useState(!1),[T,R]=Z.useState(null),[P,D]=Z.useState([]),[w,m]=Z.useState(!1),[I,k]=Z.useState({gender:"femme",size:"m",mirror:"normal"}),[L,j]=Z.useState("");Td.useEffect(()=>{DS(ve=>{D(Xe=>[...Xe.slice(-50),ve])})},[]);const E=ve=>{const Ye=`[${new Date().toLocaleTimeString()}] ${ve}`;D($=>[...$.slice(-50),Ye]),console.log(Ye)},_=async(ve,Xe,Ye,$)=>{var Y,de,ae;if(E("🚀 Début du processus d'upload"),!t){E("❌ Utilisateur non connecté"),R("Vous devez être connecté pour utiliser ce service."),n("login");return}if(E(`🔍 Vérification utilisateur - Plan: ${(Y=t.subscription)==null?void 0:Y.plan}, hasPaid: ${t.hasPaid}, Crédits: ${(de=t.subscription)==null?void 0:de.creditsRemaining}`),!t.hasPaid){E("❌ Utilisateur n'a pas payé"),R("Vous devez souscrire à un abonnement pour utiliser ce service."),n("pricing");return}if((((ae=t.subscription)==null?void 0:ae.creditsRemaining)||0)<=0){E("❌ Utilisateur sans crédits"),R("Vous n'avez plus de crédits disponibles. Veuillez recharger votre compte."),n("pricing");return}if(E("💳 Déduction préventive d'1 crédit avant traitement"),!await decrementCredits()){E("❌ Erreur déduction préventive"),R("Erreur lors de la déduction des crédits.");return}E("✅ Crédit déduit préventivement - UI mise à jour automatiquement"),o(ve),f(Xe),k($),R(null),D([]),i("processing"),y(!0);try{E("📡 Appel du webhook N8N...");const le=await OS(Ye,$);if(le.success&&le.imageUrl)E("✅ Traitement réussi !"),u(le.imageUrl),i("results");else{E(`❌ Échec du traitement: ${le.error}`);const It=await refundCredits();E(It?"💰 Crédit remboursé après échec - UI mise à jour automatiquement":"⚠️ Erreur remboursement"),R(le.error||"Erreur lors du traitement de l'image"),i("upload")}}catch(le){E(`💥 Erreur critique: ${le}`),console.error("Error processing image:",le);const It=await refundCredits();E(It?"💰 Crédit remboursé après erreur critique - UI mise à jour automatiquement":"⚠️ Erreur remboursement critique"),R("Erreur de connexion au service de traitement"),i("upload")}finally{y(!1),E("🏁 Fin du processus")}},S=()=>{i("upload"),o(null),u(null),f(""),R(null),y(!1),D([]),m(!1),k({gender:"femme",size:"m",mirror:"normal"})},A=()=>{n("login")},C=()=>{n("pricing")},N=ve=>{j(ve),n("pricing")},x=()=>{n("main")},$e=()=>{e==="main"?S():n("main")};return e==="login"?p.jsx(Cb,{onBack:x,onShowPricing:N}):e==="pricing"?p.jsx(kb,{onBack:x,userEmail:L,currentUserEmail:t==null?void 0:t.email}):p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"}),p.jsx("div",{className:"absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"})]}),p.jsx(Ib,{onShowLogin:A,onShowPricing:C,onGoHome:$e}),p.jsxs("div",{className:"fixed bottom-4 right-4 z-50",children:[p.jsx("button",{onClick:()=>m(!w),className:"bg-white/20 backdrop-blur-lg text-white p-3 rounded-full shadow-lg border border-white/30 hover:bg-white/30 transition-all duration-200",title:"Afficher les logs de debug",children:"🐛"}),w&&p.jsxs("div",{className:"absolute bottom-16 right-0 w-80 max-h-96 bg-black/90 backdrop-blur-lg text-white text-xs rounded-lg shadow-2xl border border-white/20 overflow-hidden",children:[p.jsxs("div",{className:"p-3 border-b border-white/20 flex justify-between items-center",children:[p.jsx("span",{className:"font-medium",children:"Debug Logs"}),p.jsx("button",{onClick:()=>D([]),className:"text-white/60 hover:text-white text-xs",children:"Clear"})]}),p.jsx("div",{className:"p-3 max-h-80 overflow-y-auto",children:P.length===0?p.jsx("p",{className:"text-white/60",children:"Aucun log pour le moment..."}):P.map((ve,Xe)=>p.jsx("div",{className:"mb-1 break-words",children:ve},Xe))})]})]}),p.jsxs("main",{className:"container mx-auto px-4 py-8 max-w-6xl relative z-10",children:[p.jsx("div",{className:"flex justify-center mb-12"}),r==="upload"&&p.jsx(Sb,{onImageUpload:_,isProcessing:g,processingError:T,onShowLogin:A,onShowPricing:C}),r==="processing"&&p.jsx(xb,{uploadedImage:s,fileName:c}),r==="results"&&p.jsx(Ab,{uploadedImage:s,generatedImage:l,fileName:c,onStartOver:S}),r!=="upload"&&r!=="processing"&&p.jsx("div",{className:"flex justify-center mt-12",children:p.jsxs("button",{onClick:S,className:"flex items-center px-6 py-3 text-vinted-600 hover:text-vinted-700 transition-colors duration-200",children:[p.jsx(pf,{className:"w-4 h-4 mr-2"}),"Recommencer"]})})]}),p.jsx(Rb,{})]})}console.log("🚀 === DEBUT MAIN.TSX ===");console.log("🚀 React version:",Td.version);console.log("🚀 Window object exists:",typeof window<"u");console.log("🚀 Document ready state:",document.readyState);console.log("🚀 Root element exists:",!!document.getElementById("root"));console.log("🧪 TEST CONSOLE - Si vous voyez ceci, les logs fonctionnent !");console.warn("🧪 TEST WARNING - Test d'avertissement");const yd=document.getElementById("root");if(!yd)throw console.error("❌ ERREUR CRITIQUE: Element root non trouvé !"),new Error("Root element not found");try{console.log("🚀 === CREATION ROOT REACT ===");const t=p0(yd);console.log("🚀 === DEBUT RENDER APP ==="),t.render(p.jsx(Z.StrictMode,{children:p.jsx(Tb,{children:p.jsx(Pb,{})})})),console.log("✅ === APP RENDU AVEC SUCCES ===")}catch(t){console.error("❌ === ERREUR CRITIQUE LORS DU RENDU ==="),console.error("❌ Erreur:",t),console.error("❌ Stack:",t==null?void 0:t.stack),yd.innerHTML=`
    <div style="padding: 20px; background: #fee; border: 1px solid #fcc; margin: 20px; border-radius: 8px;">
      <h2 style="color: #c00;">Erreur de chargement</h2>
      <p>Une erreur s'est produite lors du chargement de l'application.</p>
      <p><strong>Erreur:</strong> ${(t==null?void 0:t.message)||"Erreur inconnue"}</p>
      <p>Vérifiez la console pour plus de détails.</p>
    </div>
  `}console.log("🚀 === FIN MAIN.TSX ===");
