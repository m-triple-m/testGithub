"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{6674:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,i={},a=0,u=function(e){return e&&(e.host||u(e.parentNode))},c=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=u(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});i[n]||(i[n]=new WeakMap);var s=i[n],d=[],f=new Set,v=new Set(l),h=function(e){!e||f.has(e)||(f.add(e),h(e.parentNode))};l.forEach(h);var p=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))p(e);else{var t=e.getAttribute(c),i=null!==t&&"false"!==t,a=(r.get(e)||0)+1,u=(s.get(e)||0)+1;r.set(e,a),s.set(e,u),d.push(e),1===a&&i&&o.set(e,!0),1===u&&e.setAttribute(n,"true"),i||e.setAttribute(c,"true")}})};return p(t),f.clear(),a++,function(){d.forEach(function(e){var t=r.get(e)-1,i=s.get(e)-1;r.set(e,t),s.set(e,i),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),i||e.removeAttribute(n)}),--a||(r=new WeakMap,r=new WeakMap,o=new WeakMap,i={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,n,"aria-hidden")):function(){return null}}},7225:function(e,t,n){n.d(t,{Z:function(){return _}});var r,o,i,a,u,c,l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var d=n(4090),f="right-scroll-bar-position",v="width-before-scroll-bar";function h(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var p=new WeakMap,m=(void 0===o&&(o={}),(void 0===i&&(i=function(e){return e}),a=[],u=!1,c={read:function(){if(u)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=i(e,u);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(u=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){u=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),a}}}}).options=l({async:!0,ssr:!1},o),c),g=function(){},E=d.forwardRef(function(e,t){var n,r,o,i,a=d.useRef(null),u=d.useState({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:g}),c=u[0],f=u[1],v=e.forwardProps,E=e.children,y=e.className,b=e.removeScrollBar,w=e.enabled,C=e.shards,S=e.sideCar,L=e.noIsolation,T=e.inert,k=e.allowPinchZoom,x=e.as,P=s(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),R=(n=[a,t],r=function(e){return n.forEach(function(t){return h(t,e)})},(o=(0,d.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,i=o.facade,d.useLayoutEffect(function(){var e=p.get(i);if(e){var t=new Set(e),r=new Set(n),o=i.current;t.forEach(function(e){r.has(e)||h(e,null)}),r.forEach(function(e){t.has(e)||h(e,o)})}p.set(i,n)},[n]),i),W=l(l({},P),c);return d.createElement(d.Fragment,null,w&&d.createElement(S,{sideCar:m,removeScrollBar:b,shards:C,noIsolation:L,inert:T,setCallbacks:f,allowPinchZoom:!!k,lockRef:a}),v?d.cloneElement(d.Children.only(E),l(l({},W),{ref:R})):d.createElement(void 0===x?"div":x,l({},W,{className:y,ref:R}),E))});E.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},E.classNames={fullWidth:v,zeroRight:f};var y=function(e){var t=e.sideCar,n=s(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return d.createElement(r,l({},n))};y.isSideCarExport=!0;var b=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var i,a;(i=t).styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},w=function(){var e=b();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},C=function(){var e=w();return function(t){return e(t.styles,t.dynamic),null}},S=function(e){return parseInt(e||"",10)||0},L=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[S(n),S(r),S(o)]},T=function(e){void 0===e&&(e="margin");var t=L(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},k=C(),x=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(f," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(v," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(f," .").concat(f," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(v," .").concat(v," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},P=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,i=d.useMemo(function(){return T(o)},[o]);return d.createElement(k,{styles:x(i,!t,o,n?"":"!important")})},R=!1;try{var W=Object.defineProperty({},"passive",{get:function(){return R=!0,!0}});window.addEventListener("test",W,W),window.removeEventListener("test",W,W)}catch(e){R=!1}var A=!!R&&{passive:!1},O=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},M=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),N(e,n)){var r=D(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},N=function(e,t){return"v"===e?O(t,"overflowY"):O(t,"overflowX")},D=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},I=function(e,t,n,r,o){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),u=a*r,c=n.target,l=t.contains(c),s=!1,d=u>0,f=0,v=0;do{var h=D(e,c),p=h[0],m=h[1]-h[2]-a*p;(p||m)&&N(e,c)&&(f+=m,v+=p),c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&0===f||!o&&u>f)?s=!0:!d&&(o&&0===v||!o&&-u>v)&&(s=!0),s},F=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},B=function(e){return[e.deltaX,e.deltaY]},j=function(e){return e&&"current"in e?e.current:e},z=0,K=[],Z=(m.useMedium(function(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),o=d.useState(z++)[0],i=d.useState(function(){return C()})[0],a=d.useRef(e);d.useEffect(function(){a.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(j),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=d.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,i=F(e),u=n.current,c="deltaX"in e?e.deltaX:u[0]-i[0],l="deltaY"in e?e.deltaY:u[1]-i[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=M(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=M(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var v=r.current||o;return I(v,t,e,"h"===v?c:l,!0)},[]),c=d.useCallback(function(e){if(K.length&&K[K.length-1]===i){var n="deltaY"in e?B(e):F(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(j).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=d.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),s=d.useCallback(function(e){n.current=F(e),r.current=void 0},[]),f=d.useCallback(function(t){l(t.type,B(t),t.target,u(t,e.lockRef.current))},[]),v=d.useCallback(function(t){l(t.type,F(t),t.target,u(t,e.lockRef.current))},[]);d.useEffect(function(){return K.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",c,A),document.addEventListener("touchmove",c,A),document.addEventListener("touchstart",s,A),function(){K=K.filter(function(e){return e!==i}),document.removeEventListener("wheel",c,A),document.removeEventListener("touchmove",c,A),document.removeEventListener("touchstart",s,A)}},[]);var h=e.removeScrollBar,p=e.inert;return d.createElement(d.Fragment,null,p?d.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,h?d.createElement(P,{gapMode:"margin"}):null)}),y),X=d.forwardRef(function(e,t){return d.createElement(E,l({},e,{ref:t,sideCar:Z}))});X.classNames=E.classNames;var _=X},3876:function(e,t,n){n.d(t,{gm:function(){return i}});var r=n(4090);let o=(0,r.createContext)(void 0);function i(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},1260:function(e,t,n){let r;n.d(t,{I0:function(){return g},XB:function(){return f},fC:function(){return m}});var o=n(2110),i=n(4090),a=n(4991),u=n(9586),c=n(1266),l=n(9830);let s="dismissableLayer.update",d=(0,i.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,i.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:v,onPointerDownOutside:m,onFocusOutside:g,onInteractOutside:E,onDismiss:y,...b}=e,w=(0,i.useContext)(d),[C,S]=(0,i.useState)(null),L=null!==(n=null==C?void 0:C.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,T]=(0,i.useState)({}),k=(0,c.e)(t,e=>S(e)),x=Array.from(w.layers),[P]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),R=x.indexOf(P),W=C?x.indexOf(C):-1,A=w.layersWithOutsidePointerEventsDisabled.size>0,O=W>=R,M=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==globalThis?void 0:globalThis.document,n=(0,l.W)(e),r=(0,i.useRef)(!1),o=(0,i.useRef)(()=>{});return(0,i.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function i(){p("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=i,t.addEventListener("click",o.current,{once:!0})):i()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));!O||n||(null==m||m(e),null==E||E(e),e.defaultPrevented||null==y||y())},L),N=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==globalThis?void 0:globalThis.document,n=(0,l.W)(e),r=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e=e=>{e.target&&!r.current&&p("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...w.branches].some(e=>e.contains(t))||(null==g||g(e),null==E||E(e),e.defaultPrevented||null==y||y())},L);return!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==globalThis?void 0:globalThis.document,n=(0,l.W)(e);(0,i.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{W!==w.layers.size-1||(null==v||v(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},L),(0,i.useEffect)(()=>{if(C)return f&&(0===w.layersWithOutsidePointerEventsDisabled.size&&(r=L.body.style.pointerEvents,L.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(C)),w.layers.add(C),h(),()=>{f&&1===w.layersWithOutsidePointerEventsDisabled.size&&(L.body.style.pointerEvents=r)}},[C,L,f,w]),(0,i.useEffect)(()=>()=>{C&&(w.layers.delete(C),w.layersWithOutsidePointerEventsDisabled.delete(C),h())},[C,w]),(0,i.useEffect)(()=>{let e=()=>T({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,i.createElement)(u.WV.div,(0,o.Z)({},b,{ref:k,style:{pointerEvents:A?O?"auto":"none":void 0,...e.style},onFocusCapture:(0,a.M)(e.onFocusCapture,N.onFocusCapture),onBlurCapture:(0,a.M)(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:(0,a.M)(e.onPointerDownCapture,M.onPointerDownCapture)}))}),v=(0,i.forwardRef)((e,t)=>{let n=(0,i.useContext)(d),r=(0,i.useRef)(null),a=(0,c.e)(t,r);return(0,i.useEffect)(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,i.createElement)(u.WV.div,(0,o.Z)({},e,{ref:a}))});function h(){let e=new CustomEvent(s);document.dispatchEvent(e)}function p(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?(0,u.jH)(i,a):i.dispatchEvent(a)}let m=f,g=v},6007:function(e,t,n){n.d(t,{EW:function(){return i}});var r=n(4090);let o=0;function i(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:a()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:a()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function a(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},8082:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(2110),i=n(4090),a=n(1266),u=n(9586),c=n(9830);let l="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=(0,i.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...E}=e,[y,b]=(0,i.useState)(null),w=(0,c.W)(f),C=(0,c.W)(g),S=(0,i.useRef)(null),L=(0,a.e)(t,e=>b(e)),T=(0,i.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,i.useEffect)(()=>{if(r){function e(e){if(T.paused||!y)return;let t=e.target;y.contains(t)?S.current=t:p(S.current,{select:!0})}function t(e){if(T.paused||!y)return;let t=e.relatedTarget;null===t||y.contains(t)||p(S.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&p(y)});return y&&n.observe(y,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,y,T.paused]),(0,i.useEffect)(()=>{if(y){m.add(T);let e=document.activeElement;if(!y.contains(e)){let t=new CustomEvent(l,d);y.addEventListener(l,w),y.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(p(r,{select:t}),document.activeElement!==n)return}(v(y).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&p(y))}return()=>{y.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(s,d);y.addEventListener(s,C),y.dispatchEvent(t),t.defaultPrevented||p(null!=e?e:document.body,{select:!0}),y.removeEventListener(s,C),m.remove(T)},0)}}},[y,w,C,T]);let k=(0,i.useCallback)(e=>{if(!n&&!r||T.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=function(e){let t=v(e);return[h(t,e),h(t.reverse(),e)]}(t);r&&i?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&p(i,{select:!0})):(e.preventDefault(),n&&p(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,T.paused]);return(0,i.createElement)(u.WV.div,(0,o.Z)({tabIndex:-1},E,{ref:L,onKeyDown:k}))});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function h(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function p(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let m=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},8687:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(4090),i=n(2618);let a=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function c(e){let[t,n]=o.useState(a());return(0,i.b)(()=>{e||n(e=>null!=e?e:String(u++))},[e]),e||(t?"radix-".concat(t):"")}},7881:function(e,t,n){n.d(t,{h:function(){return u}});var r=n(2110),o=n(4090),i=n(9542),a=n(9586);let u=(0,o.forwardRef)((e,t)=>{var n;let{container:u=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...c}=e;return u?i.createPortal((0,o.createElement)(a.WV.div,(0,r.Z)({},c,{ref:t})),u):null})},5030:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(4090);function o(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},6769:function(e,t,n){n.d(t,{t:function(){return i}});var r=n(4090),o=n(2618);function i(e){let[t,n]=(0,r.useState)(void 0);return(0,o.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}}}]);