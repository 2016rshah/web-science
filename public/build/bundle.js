var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const c="undefined"!=typeof window;let a=c?()=>window.performance.now():()=>Date.now(),l=c?t=>requestAnimationFrame(t):t;const u=new Set;function d(t){u.forEach((e=>{e.c(t)||(u.delete(e),e.f())})),0!==u.size&&l(d)}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function y(){return $(" ")}function w(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}const L=new Set;let x,k=0;function C(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),k-=r,k||l((()=>{k||(L.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),L.clear())})))}function E(t){x=t}function S(t){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.on_mount.push(t)}const M=[],O=[],R=[],j=[],z=Promise.resolve();let N=!1;function A(t){R.push(t)}let P=!1;const D=new Set;function Z(){if(!P){P=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];E(e),B(e.$$)}for(E(null),M.length=0;O.length;)O.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];D.has(e)||(D.add(e),e())}R.length=0}while(M.length);for(;j.length;)j.pop()();N=!1,P=!1,D.clear()}}function B(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let T;function U(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const q=new Set;let F;function J(t,e){t&&t.i&&(q.delete(t),t.i(e))}function I(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),F.c.push((()=>{q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const V={duration:0};function G(n,o,r){let s,c,f=o(n,r),p=!1,m=0;function g(){s&&C(n,s)}function $(){const{delay:o=0,duration:r=300,easing:i=e,tick:$=t,css:y}=f||V;y&&(s=function(t,e,n,o,r,i,s,c=0){const a=16.666/o;let l="{\n";for(let t=0;t<=1;t+=a){const o=e+(n-e)*i(t);l+=100*t+`%{${s(o,1-o)}}\n`}const u=l+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,f=t.ownerDocument;L.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(h("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${o}ms linear ${r}ms 1 both`,k+=1,d}(n,0,1,r,o,i,y,m++)),$(0,1);const w=a()+o,_=w+r;c&&c.abort(),p=!0,A((()=>U(n,!0,"start"))),c=function(t){let e;return 0===u.size&&l(d),{promise:new Promise((n=>{u.add(e={c:t,f:n})})),abort(){u.delete(e)}}}((t=>{if(p){if(t>=_)return $(1,0),U(n,!0,"end"),g(),p=!1;if(t>=w){const e=i((t-w)/r);$(e,1-e)}}return p}))}let y=!1;return{start(){y||(C(n),i(f)?(f=f(),(T||(T=Promise.resolve(),T.then((()=>{T=null}))),T).then($)):$())},invalidate(){y=!1},end(){p&&(g(),p=!1)}}}function H(t){t&&t.c()}function K(t,e,o){const{fragment:s,on_mount:c,on_destroy:a,after_update:l}=t.$$;s&&s.m(e,o),A((()=>{const e=c.map(n).filter(i);a?a.push(...e):r(e),t.$$.on_mount=[]})),l.forEach(A)}function Q(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(M.push(t),N||(N=!0,z.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,i,s,c,a,l=[-1]){const u=x;E(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=i?i(e,d,((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&W(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();n.intro&&J(e.$$.fragment),K(e,n.target,n.anchor),Z()}E(u)}class Y{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function tt(t){const e=t-1;return e*e*e+1}function et(t,{delay:e=0,duration:n=400,easing:o=tt,x:r=0,y:i=0,opacity:s=0}){const c=getComputedStyle(t),a=+c.opacity,l="none"===c.transform?"":c.transform,u=a*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*r}px, ${(1-t)*i}px);\n\t\t\topacity: ${a-u*e}`}}const nt=document.createElement("a");function ot(t,e){!function(t,e,n=JSON.strringify){const o=n(t),r=new Blob([o],{type:"octet/stream"}),i=window.URL.createObjectURL(r);nt.href=i,nt.download=e,nt.click(),window.URL.revokeObjectURL(i)}(t,e,JSON.stringify)}function rt(e){let n,o;return{c(){n=g("svg"),o=g("path"),_(o,"d","M1.5,9.375L1.5,3.5C1.5,2.97 1.711,2.461 2.086,2.086C2.461,1.711 2.97,1.5\n    3.5,1.5L14.5,1.5C15.03,1.5 15.539,1.711 15.914,2.086C16.289,2.461 16.5,2.97\n    16.5,3.5L16.5,14.5C16.5,15.03 16.289,15.539 15.914,15.914C15.539,16.289\n    15.03,16.5 14.5,16.5L9.643,16.5L8.357,16.5L3.5,16.5C2.97,16.5 2.461,16.289\n    2.086,15.914C1.711,15.539 1.5,15.03\n    1.5,14.5L1.5,10.625L1.5,9.375ZM8.357,15L8.357,10.625L3,10.625L3,15L8.357,15ZM15,10.625L9.643,10.625L9.643,15L15,15L15,10.625ZM3,4.5L3,9.375L8.357,9.375L8.357,4.5L3,4.5ZM9.643,4.5L9.643,9.375L15,9.375L15,4.5L9.643,4.5Z"),_(n,"width",e[0]),_(n,"height",e[0]),_(n,"fill",e[1]),_(n,"viewBox","0 0 18 18"),_(n,"version","1.1"),_(n,"xmlns","http://www.w3.org/2000/svg"),_(n,"xmlns:xlink","http://www.w3.org/1999/xlink"),_(n,"xml:space","preserve"),_(n,"xmlns:serif","http://www.serif.com/"),b(n,"fill-rule","evenodd"),b(n,"clip-rule","evenodd"),b(n,"stroke-linejoin","round"),b(n,"stroke-miterlimit","2")},m(t,e){p(t,n,e),f(n,o)},p(t,[e]){1&e&&_(n,"width",t[0]),1&e&&_(n,"height",t[0]),2&e&&_(n,"fill",t[1])},i:t,o:t,d(t){t&&m(n)}}}function it(t,e,n){let{size:o="1em"}=e,{color:r="currentColor"}=e;return t.$$set=t=>{"size"in t&&n(0,o=t.size),"color"in t&&n(1,r=t.color)},[o,r]}nt.style="display: none;",document.body.appendChild(nt);class st extends Y{constructor(t){super(),X(this,t,it,rt,s,{size:0,color:1})}}function ct(t){let e,n,o,r,i,s,c,a,l,u,d,g,v,b,L;function x(t,e){return t[0].length?lt:at}c=new st({props:{size:"1.25em"}});let k=x(t),C=k(t);return{c(){e=h("div"),n=h("header"),o=h("h1"),o.textContent="Browsing Time Tracker",r=y(),i=h("div"),s=h("button"),H(c.$$.fragment),a=$("\n                    Download CSV"),u=y(),d=h("main"),C.c(),s.disabled=l=0===t[0].length,_(s,"class","btn-primary download-csv"),_(e,"class","admin")},m(l,m){p(l,e,m),f(e,n),f(n,o),f(n,r),f(n,i),f(i,s),K(c,s,null),f(s,a),f(e,u),f(e,d),C.m(d,null),v=!0,b||(L=w(s,"click",t[2]),b=!0)},p(t,e){(!v||1&e&&l!==(l=0===t[0].length))&&(s.disabled=l),k===(k=x(t))&&C?C.p(t,e):(C.d(1),C=k(t),C&&(C.c(),C.m(d,null)))},i(t){v||(J(c.$$.fragment,t),g||A((()=>{g=G(e,et,{duration:800,y:5}),g.start()})),v=!0)},o(t){I(c.$$.fragment,t),v=!1},d(t){t&&m(e),Q(c),C.d(),b=!1,L()}}}function at(e){let n;return{c(){n=$("no browsing data yet")},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}function lt(t){let e,n,o,r,i=t[0].length+"",s=1===t[0].length?"":"s";return{c(){e=$(i),n=$("\n                item"),o=$(s),r=$(".")},m(t,i){p(t,e,i),p(t,n,i),p(t,o,i),p(t,r,i)},p(t,n){1&n&&i!==(i=t[0].length+"")&&v(e,i),1&n&&s!==(s=1===t[0].length?"":"s")&&v(o,s)},d(t){t&&m(e),t&&m(n),t&&m(o),t&&m(r)}}}function ut(t){let e,n,o=t[1]&&ct(t);return{c(){o&&o.c(),e=$("")},m(t,r){o&&o.m(t,r),p(t,e,r),n=!0},p(t,[n]){t[1]?o?(o.p(t,n),2&n&&J(o,1)):(o=ct(t),o.c(),J(o,1),o.m(e.parentNode,e)):o&&(F={r:0,c:[],p:F},I(o,1,1,(()=>{o=null})),F.r||r(F.c),F=F.p)},i(t){n||(J(o),n=!0)},o(t){I(o),n=!1},d(t){o&&o.d(t),t&&m(e)}}}function dt(t,e,n){let{data:o}=e,r=!1;S((()=>{n(1,r=!0)}));return t.$$set=t=>{"data"in t&&n(0,o=t.data)},[o,r,()=>ot(o,`browsing-${(new Date).toISOString().replace(/:/g,"-").replace(".","-")}.json`)]}class ft extends Y{constructor(t){super(),X(this,t,dt,ut,s,{data:0})}}function pt(t){let e,n,o,r;return e=new ft({props:{data:t[0]}}),{c(){H(e.$$.fragment)},m(i,s){K(e,i,s),n=!0,o||(r=w(window,"focus",t[1]),o=!0)},p(t,[n]){const o={};1&n&&(o.data=t[0]),e.$set(o)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){Q(e,t),o=!1,r()}}}function mt(t,e,n){let o,r=[];async function i(){r=[],o=browser.runtime.connect({name:"rally-study-options-page"}),o.onMessage.addListener((t=>async function(t){switch(t.type){case"receive-data":r.forEach((e=>e(t.data)));break;default:return Promise.reject(new Error(`Rally - unexpected message type ${t.type}`))}}(t))),o.onDisconnect.addListener((t=>{console.error("Rally - there was an error connecting to the background script",t),o=null}))}async function s(){try{let t=async function(t,e){return await new Promise((n=>{let o=r=>{r.type===e&&(t.onMessage.removeListener(o),n(r.data))};t.onMessage.addListener(o)}))}(o,"receive-data");return await async function(t,e,n){const o={type:e,data:n};t.postMessage(o)}(o,"get-data",{}),await t}catch(t){console.error(t)}}let c=[];async function a(){n(0,c=await s())}return S((async()=>{await i(),await a()})),[c,a]}return new class extends Y{constructor(t){super(),X(this,t,mt,pt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
