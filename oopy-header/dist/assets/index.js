var L1=Object.defineProperty;var Z1=(t,e,n)=>e in t?L1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var I=(t,e,n)=>(Z1(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function b(){}const A1=t=>t;function d1(t){return t()}function G(){return Object.create(null)}function Z(t){t.forEach(d1)}function Y(t){return typeof t=="function"}function h1(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function C1(t){return Object.keys(t).length===0}function Q(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const g1=typeof window<"u";let H1=g1?()=>window.performance.now():()=>Date.now(),J=g1?t=>requestAnimationFrame(t):b;const H=new Set;function m1(t){H.forEach(e=>{e.c(t)||(H.delete(e),e.f())}),H.size!==0&&J(m1)}function E1(t){let e;return H.size===0&&J(m1),{promise:new Promise(n=>{H.add(e={c:t,f:n})}),abort(){H.delete(e)}}}function _(t,e){t.appendChild(e)}function y1(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function O1(t){const e=w("style");return e.textContent="/* empty */",k1(y1(t),e),e.sheet}function k1(t,e){return _(t.head||t,e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function j1(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function V1(t){return document.createTextNode(t)}function O(){return V1(" ")}function N(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function R1(t){return Array.from(t.childNodes)}function T1(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}const S=new Map;let F=0;function U1(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function N1(t,e){const n={stylesheet:O1(e),rules:{}};return S.set(t,n),n}function t1(t,e,n,s,l,o,p,a=0){const d=16.666/s;let r=`{
`;for(let g=0;g<=1;g+=d){const m=e+(n-e)*o(g);r+=g*100+`%{${p(m,1-m)}}
`}const c=r+`100% {${p(n,1-n)}}
}`,u=`__svelte_${U1(c)}_${a}`,h=y1(t),{stylesheet:f,rules:i}=S.get(h)||N1(h,t);i[u]||(i[u]=!0,f.insertRule(`@keyframes ${u} ${c}`,f.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${u} ${s}ms linear ${l}ms 1 both`,F+=1,u}function S1(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),l=n.length-s.length;l&&(t.style.animation=s.join(", "),F-=l,F||F1())}function F1(){J(()=>{F||(S.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&L(e)}),S.clear())})}let X;function R(t){X=t}const C=[],e1=[];let E=[];const n1=[],P1=Promise.resolve();let K=!1;function B1(){K||(K=!0,P1.then(_1))}function M(t){E.push(t)}const W=new Set;let A=0;function _1(){if(A!==0)return;const t=X;do{try{for(;A<C.length;){const e=C[A];A++,R(e),z1(e.$$)}}catch(e){throw C.length=0,A=0,e}for(R(null),C.length=0,A=0;e1.length;)e1.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];W.has(n)||(W.add(n),n())}E.length=0}while(C.length);for(;n1.length;)n1.pop()();K=!1,W.clear(),R(t)}function z1(t){if(t.fragment!==null){t.update(),Z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function D1(t){const e=[],n=[];E.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),E=e}let j;function I1(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function q(t,e,n){t.dispatchEvent(T1(`${e?"intro":"outro"}${n}`))}const U=new Set;let $;function s1(){$={r:0,c:[],p:$}}function l1(){$.r||Z($.c),$=$.p}function x(t,e){t&&t.i&&(U.delete(t),t.i(e))}function V(t,e,n,s){if(t&&t.o){if(U.has(t))return;U.add(t),$.c.push(()=>{U.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const W1={duration:0};function P(t,e,n,s){let o=e(t,n,{direction:"both"}),p=s?0:1,a=null,d=null,r=null,c;function u(){r&&S1(t,r)}function h(i,y){const g=i.b-p;return y*=Math.abs(g),{a:p,b:i.b,d:g,duration:y,start:i.start,end:i.start+y,group:i.group}}function f(i){const{delay:y=0,duration:g=300,easing:m=A1,tick:B=b,css:z}=o||W1,D={start:H1()+y,b:i};i||(D.group=$,$.r+=1),"inert"in t&&(i?c!==void 0&&(t.inert=c):(c=t.inert,t.inert=!0)),a||d?d=D:(z&&(u(),r=t1(t,p,i,g,y,m,z)),i&&B(0,1),a=h(D,g),M(()=>q(t,i,"start")),E1(T=>{if(d&&T>d.start&&(a=h(d,g),d=null,q(t,a.b,"start"),z&&(u(),r=t1(t,p,a.b,a.duration,0,m,o.css))),a){if(T>=a.end)B(p=a.b,1-p),q(t,a.b,"end"),d||(a.b?u():--a.group.r||Z(a.group.c)),a=null;else if(T>=a.start){const M1=T-a.start;p=a.a+a.d*m(M1/a.duration),B(p,1-p)}}return!!(a||d)}))}return{run(i){Y(o)?I1().then(()=>{o=o({direction:i?"in":"out"}),f(i)}):f(i)},end(){u(),a=d=null}}}function o1(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function q1(t){t&&t.c()}function w1(t,e,n){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),M(()=>{const o=t.$$.on_mount.map(d1).filter(Y);t.$$.on_destroy?t.$$.on_destroy.push(...o):Z(o),t.$$.on_mount=[]}),l.forEach(M)}function v1(t,e){const n=t.$$;n.fragment!==null&&(D1(n.after_update),Z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K1(t,e){t.$$.dirty[0]===-1&&(C.push(t),B1(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $1(t,e,n,s,l,o,p=null,a=[-1]){const d=X;R(t);const r=t.$$={fragment:null,ctx:[],props:o,update:b,not_equal:l,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:G(),dirty:a,skip_bound:!1,root:e.target||d.$$.root};p&&p(r.root);let c=!1;if(r.ctx=n?n(t,e.props||{},(u,h,...f)=>{const i=f.length?f[0]:h;return r.ctx&&l(r.ctx[u],r.ctx[u]=i)&&(!r.skip_bound&&r.bound[u]&&r.bound[u](i),c&&K1(t,u)),h}):[],r.update(),c=!0,Z(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){const u=R1(e.target);r.fragment&&r.fragment.l(u),u.forEach(L)}else r.fragment&&r.fragment.c();e.intro&&x(t.$$.fragment),w1(t,e.target,e.anchor),_1()}R(d)}class x1{constructor(){I(this,"$$");I(this,"$$set")}$destroy(){v1(this,1),this.$destroy=b}$on(e,n){if(!Y(n))return b;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(e){this.$$set&&!C1(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Y1="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y1);function b1(t){const e=t-1;return e*e*e+1}function i1(t,{delay:e=0,duration:n=400,easing:s=b1,x:l=0,y:o=0,opacity:p=0}={}){const a=getComputedStyle(t),d=+a.opacity,r=a.transform==="none"?"":a.transform,c=d*(1-p),[u,h]=Q(l),[f,i]=Q(o);return{delay:e,duration:n,easing:s,css:(y,g)=>`
			transform: ${r} translate(${(1-y)*u}${h}, ${(1-y)*f}${i});
			opacity: ${d-c*g}`}}function c1(t,{delay:e=0,duration:n=400,easing:s=b1,axis:l="y"}={}){const o=getComputedStyle(t),p=+o.opacity,a=l==="y"?"height":"width",d=parseFloat(o[a]),r=l==="y"?["top","bottom"]:["left","right"],c=r.map(m=>`${m[0].toUpperCase()}${m.slice(1)}`),u=parseFloat(o[`padding${c[0]}`]),h=parseFloat(o[`padding${c[1]}`]),f=parseFloat(o[`margin${c[0]}`]),i=parseFloat(o[`margin${c[1]}`]),y=parseFloat(o[`border${c[0]}Width`]),g=parseFloat(o[`border${c[1]}Width`]);return{delay:e,duration:n,easing:s,css:m=>`overflow: hidden;opacity: ${Math.min(m*20,1)*p};${a}: ${m*d}px;padding-${r[0]}: ${m*u}px;padding-${r[1]}: ${m*h}px;margin-${r[0]}: ${m*f}px;margin-${r[1]}: ${m*i}px;border-${r[0]}-width: ${m*y}px;border-${r[1]}-width: ${m*g}px;`}}function a1(t,e,n){const s=t.slice();return s[10]=e[n],s}function r1(t){let e,n,s,l,o,p,a,d,r;return{c(){e=w("section"),n=w("div"),n.innerHTML='<a href="/#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.98 91.12"><defs><style>.cls-1{fill:#e60012;}.cls-2{fill:#fff;}.cls-3,.cls-4{fill:#004ea2;}.cls-4{fill-rule:evenodd;}</style></defs><title>자산 1</title><g id="레이어_2" data-name="레이어 2"><g id="레이어_1-2" data-name="레이어 1"><polygon class="cls-1" points="123.12 22.64 108.43 22.64 111.28 7.95 125.98 7.95 123.12 22.64 123.12 22.64"></polygon><polygon class="cls-2" points="122.67 13.64 119.47 13.64 120.17 10.04 116.78 10.04 116.08 13.64 112.67 13.64 112.01 17.05 115.41 17.05 114.67 20.84 118.07 20.84 118.81 17.05 122 17.05 122.67 13.64 122.67 13.64"></polygon><path class="cls-3" d="M24.28,59.78c-.16.6-.34,1.18-.53,1.76C34.07,66,47,68.7,61.07,68.7a98.25,98.25,0,0,0,32.12-5.14A125.36,125.36,0,0,1,66.35,66.7c-16,.2-30.74-2.42-42.07-6.92M1.61,36.73C1.4,19.73,30,5.6,65.58,5.15,81.52,5,96.14,7.55,107.44,12,96.24,4.65,79.62,0,61.07,0,27.34,0,0,15.38,0,34.35,0,42.6,5.17,50.17,13.79,56.09l.31-1.44c-7.77-5-12.4-11.17-12.49-17.92"></path><path class="cls-3" d="M32.44,16.26H23.58l-8.71,43.3C13.94,64,10.75,70.11,5.6,70.4L6.52,73c6,0,9.88-2.08,12.47-5.67a26.63,26.63,0,0,0,4.07-9.84l9.38-41.18Z"></path><path class="cls-3" d="M55.23,54.05H47.64l.7-3c-3,2-6.44,3.6-10,3.6-6.26,0-6.2-6.44-5.27-10.9l3.42-16.46L44.34,26,40.8,42.86C40.28,45.3,39.7,50,43.41,50a9.25,9.25,0,0,0,5.51-2.2l4.29-20.52L61.09,26,55.23,54.05Z"></path><path class="cls-3" d="M77.83,29.13c-2.37-.06-5.39,1.44-5.39,4.17,0,3.48,10.72,4.23,10.72,11,0,7.13-7.47,10.44-13.62,10.44A22.39,22.39,0,0,1,62,53.18L61.78,50a16.35,16.35,0,0,0,7.36,1.74c2.78,0,6.55-1.57,6.55-4.81C75.75,42.23,65,42.05,65,35.79s7.13-9.56,12.69-9.56a13.84,13.84,0,0,1,6.08,1.51l.18,3.18a13.33,13.33,0,0,0-6.09-1.79"></path><path class="cls-3" d="M106.81,29.24h-6.67L96.78,45.18c-.69,3.19-1,5.39,3.31,5.39a20.43,20.43,0,0,0,3.3-.29l-1.45,3.19a41.24,41.24,0,0,1-8.46,1.16c-5,0-5.62-3-4.75-7.07l3.82-18.32H89.08l.52-2.49H93l1.39-6.43L102.23,19l-1.56,7.71h6.6l-.46,2.49Z"></path><path class="cls-3" d="M9.26,85.43a2.45,2.45,0,1,0,0,4.9,2.45,2.45,0,1,0,0-4.9m0-.8a3.25,3.25,0,1,1,0,6.49,3.25,3.25,0,1,1,0-6.49"></path><path class="cls-3" d="M17.65,87.55c.9,0,1.11-.55,1.11-1,0-.59-.35-1-1.09-1H15.08v2Zm-3.49-2.77H18a1.56,1.56,0,0,1,1.69,1.65,1.47,1.47,0,0,1-1,1.52v0c.55.08.87.59.9,1.32.05,1.15.09,1.44.3,1.68h-1c-.15-.17-.15-.43-.19-1.18-.06-1.11-.44-1.45-1.2-1.45h-2.4V91h-.92V84.78Z"></path><polygon class="cls-4" points="22.13 84.78 21.21 84.78 21.21 90.97 22.13 90.97 22.13 84.78 22.13 84.78"></polygon><path class="cls-3" d="M27.37,87.63h2.84V91h-.66l-.16-.88a2.86,2.86,0,0,1-2.37,1A3,3,0,0,1,23.75,88,3.09,3.09,0,0,1,27,84.63c1.28,0,2.72.4,3.11,2.1h-1A1.91,1.91,0,0,0,27,85.43a2.26,2.26,0,0,0-2.37,2.47,2.21,2.21,0,0,0,2.41,2.43,2.12,2.12,0,0,0,2.31-1.9h-2v-.8Z"></path><polygon class="cls-4" points="32.95 84.78 32.03 84.78 32.03 90.97 32.95 90.97 32.95 84.78 32.95 84.78"></polygon><polygon class="cls-3" points="35.76 86.05 35.74 86.05 35.74 90.97 34.83 90.97 34.83 84.78 35.89 84.78 39.87 89.7 39.88 89.7 39.88 84.78 40.8 84.78 40.8 90.97 39.74 90.97 35.76 86.05 35.76 86.05"></polygon><path class="cls-3" d="M45.19,85.63,44,88.37h2.34l-1.18-2.74Zm1.52,3.54h-3L42.89,91h-1l2.8-6.19h1L48.55,91h-1l-.79-1.8Z"></path><polygon class="cls-3" points="49.65 84.78 50.57 84.78 50.57 90.17 54.33 90.17 54.33 90.97 49.65 90.97 49.65 84.78 49.65 84.78"></polygon><polygon class="cls-4" points="61.77 88.11 58.73 88.11 58.73 89.01 61.77 89.01 61.77 88.11 61.77 88.11"></polygon><path class="cls-3" d="M67.15,88.93c0,1.11,1,1.4,2,1.4s1.67-.37,1.67-1-.44-.8-1.15-.92l-1.4-.23c-.74-.12-1.84-.42-1.84-1.62s.89-1.88,2.48-1.88c1.24,0,2.54.45,2.63,1.94h-.92c-.08-.49-.35-1.14-1.83-1.14-.68,0-1.44.28-1.44,1,0,.38.25.68,1,.81l1.52.26c.48.09,1.86.32,1.86,1.59,0,1.57-1.41,2-2.66,2s-2.84-.48-2.84-2.19Z"></path><polygon class="cls-4" points="73.97 84.78 73.05 84.78 73.05 90.97 73.97 90.97 73.97 84.78 73.97 84.78"></polygon><polygon class="cls-3" points="76.78 86.05 76.76 86.05 76.76 90.97 75.85 90.97 75.85 84.78 76.91 84.78 80.89 89.7 80.91 89.7 80.91 84.78 81.82 84.78 81.82 90.97 80.76 90.97 76.78 86.05 76.78 86.05"></polygon><path class="cls-3" d="M88.71,87a1.92,1.92,0,0,0-2.11-1.58A2.22,2.22,0,0,0,84.21,88a2.19,2.19,0,0,0,2.33,2.38,2,2,0,0,0,2.17-1.73h.92a2.93,2.93,0,0,1-3.09,2.52,3.25,3.25,0,1,1,0-6.49c1.24,0,2.94.53,3.1,2.38Z"></path><polygon class="cls-3" points="91.12 84.78 96.09 84.78 96.09 85.58 92.04 85.58 92.04 87.37 95.97 87.37 95.97 88.17 92.04 88.17 92.04 90.17 96.18 90.17 96.18 90.97 91.12 90.97 91.12 84.78 91.12 84.78"></polygon><path class="cls-3" d="M102,86.59h-1.81v-.67h.21c1.54,0,1.77-.73,1.8-1.14H103V91H102V86.59Z"></path><path class="cls-3" d="M107.37,85.55a1.36,1.36,0,1,0,0,2.7,1.34,1.34,0,0,0,1.53-1.35c0-.74-.47-1.35-1.53-1.35m-1.36,4a1.12,1.12,0,0,0,1.21.83c1,0,1.72-.41,1.82-2.2h0a2.09,2.09,0,0,1-1.77.8,2.06,2.06,0,0,1-2.32-2.07,2.16,2.16,0,0,1,2.4-2.09c1.83,0,2.57,1.12,2.57,3,0,3.15-1.91,3.27-2.74,3.27a1.88,1.88,0,0,1-2-1.56Z"></path><path class="cls-3" d="M113,87.42h.58c.78,0,1.18-.34,1.18-.89,0-.76-.67-1-1.32-1a1.22,1.22,0,0,0-1.39,1.26h-.86a2,2,0,0,1,2.28-2c1.55,0,2.21.8,2.21,1.65a1.19,1.19,0,0,1-.91,1.24v0A1.4,1.4,0,0,1,116,89.18c0,1-.72,1.93-2.35,1.93-.57,0-2.56,0-2.56-2h.87c0,1,.69,1.32,1.61,1.32s1.52-.46,1.52-1.14-.63-1.09-1.52-1.09c-.31,0-.43,0-.51,0v-.75Z"></path><path class="cls-3" d="M119.92,85.55c-1.48,0-1.58,1.69-1.58,2.41s.1,2.42,1.58,2.42,1.59-1.7,1.59-2.42-.1-2.41-1.59-2.41m0-.73c1.91,0,2.51,1.42,2.51,3.14s-.6,3.15-2.51,3.15-2.5-1.42-2.5-3.15.6-3.14,2.5-3.14"></path></g></g></svg></a>',s=O(),l=w("div"),o=w("button"),o.innerHTML='<svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_124_14)"><rect width="28" height="2" fill="#00509E"></rect><rect y="8" width="28" height="2" fill="#00509E"></rect><rect x="14" y="16" width="14" height="2" fill="#00509E"></rect></g><defs><clipPath id="clip0_124_14"><rect width="28" height="18" fill="white"></rect></clipPath></defs></svg>',v(n,"class","w-20 p-2 m-2"),v(l,"class","w-20 flex items-center justify-center"),v(e,"class","fixed bg-white w-screen flex flex-row justify-between md:hidden")},m(c,u){k(c,e,u),_(e,n),_(e,s),_(e,l),_(l,o),a=!0,d||(r=N(o,"click",t[5]),d=!0)},p:b,i(c){a||(c&&M(()=>{a&&(p||(p=P(e,i1,{y:-100,duration:300},!0)),p.run(1))}),a=!0)},o(c){c&&(p||(p=P(e,i1,{y:-100,duration:300},!1)),p.run(0)),a=!1},d(c){c&&L(e),c&&p&&p.end(),d=!1,r()}}}function f1(t){let e;return{c(){e=w("nav"),e.innerHTML='<ul class="w-[40%] relative flex justify-evenly"><a href="/brand"><li class="px-5 svelte-1o2x522">브랜드</li></a> <span class="text-slate-400">|</span> <a href="/philosophy"><li class="px-5  svelte-1o2x522">제품 철학</li></a> <span class="text-slate-400">|</span> <a href="/store"><li class="px-5  svelte-1o2x522">스토어</li></a></ul> <div class="w-32"><a href="/#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.98 91.12"><defs><style>.cls-1{fill:#e60012;}.cls-2{fill:#fff;}.cls-3,.cls-4{fill:#004ea2;}.cls-4{fill-rule:evenodd;}</style></defs><title>자산 1</title><g id="레이어_2" data-name="레이어 2"><g id="레이어_1-2" data-name="레이어 1"><polygon class="cls-1" points="123.12 22.64 108.43 22.64 111.28 7.95 125.98 7.95 123.12 22.64 123.12 22.64"></polygon><polygon class="cls-2" points="122.67 13.64 119.47 13.64 120.17 10.04 116.78 10.04 116.08 13.64 112.67 13.64 112.01 17.05 115.41 17.05 114.67 20.84 118.07 20.84 118.81 17.05 122 17.05 122.67 13.64 122.67 13.64"></polygon><path class="cls-3" d="M24.28,59.78c-.16.6-.34,1.18-.53,1.76C34.07,66,47,68.7,61.07,68.7a98.25,98.25,0,0,0,32.12-5.14A125.36,125.36,0,0,1,66.35,66.7c-16,.2-30.74-2.42-42.07-6.92M1.61,36.73C1.4,19.73,30,5.6,65.58,5.15,81.52,5,96.14,7.55,107.44,12,96.24,4.65,79.62,0,61.07,0,27.34,0,0,15.38,0,34.35,0,42.6,5.17,50.17,13.79,56.09l.31-1.44c-7.77-5-12.4-11.17-12.49-17.92"></path><path class="cls-3" d="M32.44,16.26H23.58l-8.71,43.3C13.94,64,10.75,70.11,5.6,70.4L6.52,73c6,0,9.88-2.08,12.47-5.67a26.63,26.63,0,0,0,4.07-9.84l9.38-41.18Z"></path><path class="cls-3" d="M55.23,54.05H47.64l.7-3c-3,2-6.44,3.6-10,3.6-6.26,0-6.2-6.44-5.27-10.9l3.42-16.46L44.34,26,40.8,42.86C40.28,45.3,39.7,50,43.41,50a9.25,9.25,0,0,0,5.51-2.2l4.29-20.52L61.09,26,55.23,54.05Z"></path><path class="cls-3" d="M77.83,29.13c-2.37-.06-5.39,1.44-5.39,4.17,0,3.48,10.72,4.23,10.72,11,0,7.13-7.47,10.44-13.62,10.44A22.39,22.39,0,0,1,62,53.18L61.78,50a16.35,16.35,0,0,0,7.36,1.74c2.78,0,6.55-1.57,6.55-4.81C75.75,42.23,65,42.05,65,35.79s7.13-9.56,12.69-9.56a13.84,13.84,0,0,1,6.08,1.51l.18,3.18a13.33,13.33,0,0,0-6.09-1.79"></path><path class="cls-3" d="M106.81,29.24h-6.67L96.78,45.18c-.69,3.19-1,5.39,3.31,5.39a20.43,20.43,0,0,0,3.3-.29l-1.45,3.19a41.24,41.24,0,0,1-8.46,1.16c-5,0-5.62-3-4.75-7.07l3.82-18.32H89.08l.52-2.49H93l1.39-6.43L102.23,19l-1.56,7.71h6.6l-.46,2.49Z"></path><path class="cls-3" d="M9.26,85.43a2.45,2.45,0,1,0,0,4.9,2.45,2.45,0,1,0,0-4.9m0-.8a3.25,3.25,0,1,1,0,6.49,3.25,3.25,0,1,1,0-6.49"></path><path class="cls-3" d="M17.65,87.55c.9,0,1.11-.55,1.11-1,0-.59-.35-1-1.09-1H15.08v2Zm-3.49-2.77H18a1.56,1.56,0,0,1,1.69,1.65,1.47,1.47,0,0,1-1,1.52v0c.55.08.87.59.9,1.32.05,1.15.09,1.44.3,1.68h-1c-.15-.17-.15-.43-.19-1.18-.06-1.11-.44-1.45-1.2-1.45h-2.4V91h-.92V84.78Z"></path><polygon class="cls-4" points="22.13 84.78 21.21 84.78 21.21 90.97 22.13 90.97 22.13 84.78 22.13 84.78"></polygon><path class="cls-3" d="M27.37,87.63h2.84V91h-.66l-.16-.88a2.86,2.86,0,0,1-2.37,1A3,3,0,0,1,23.75,88,3.09,3.09,0,0,1,27,84.63c1.28,0,2.72.4,3.11,2.1h-1A1.91,1.91,0,0,0,27,85.43a2.26,2.26,0,0,0-2.37,2.47,2.21,2.21,0,0,0,2.41,2.43,2.12,2.12,0,0,0,2.31-1.9h-2v-.8Z"></path><polygon class="cls-4" points="32.95 84.78 32.03 84.78 32.03 90.97 32.95 90.97 32.95 84.78 32.95 84.78"></polygon><polygon class="cls-3" points="35.76 86.05 35.74 86.05 35.74 90.97 34.83 90.97 34.83 84.78 35.89 84.78 39.87 89.7 39.88 89.7 39.88 84.78 40.8 84.78 40.8 90.97 39.74 90.97 35.76 86.05 35.76 86.05"></polygon><path class="cls-3" d="M45.19,85.63,44,88.37h2.34l-1.18-2.74Zm1.52,3.54h-3L42.89,91h-1l2.8-6.19h1L48.55,91h-1l-.79-1.8Z"></path><polygon class="cls-3" points="49.65 84.78 50.57 84.78 50.57 90.17 54.33 90.17 54.33 90.97 49.65 90.97 49.65 84.78 49.65 84.78"></polygon><polygon class="cls-4" points="61.77 88.11 58.73 88.11 58.73 89.01 61.77 89.01 61.77 88.11 61.77 88.11"></polygon><path class="cls-3" d="M67.15,88.93c0,1.11,1,1.4,2,1.4s1.67-.37,1.67-1-.44-.8-1.15-.92l-1.4-.23c-.74-.12-1.84-.42-1.84-1.62s.89-1.88,2.48-1.88c1.24,0,2.54.45,2.63,1.94h-.92c-.08-.49-.35-1.14-1.83-1.14-.68,0-1.44.28-1.44,1,0,.38.25.68,1,.81l1.52.26c.48.09,1.86.32,1.86,1.59,0,1.57-1.41,2-2.66,2s-2.84-.48-2.84-2.19Z"></path><polygon class="cls-4" points="73.97 84.78 73.05 84.78 73.05 90.97 73.97 90.97 73.97 84.78 73.97 84.78"></polygon><polygon class="cls-3" points="76.78 86.05 76.76 86.05 76.76 90.97 75.85 90.97 75.85 84.78 76.91 84.78 80.89 89.7 80.91 89.7 80.91 84.78 81.82 84.78 81.82 90.97 80.76 90.97 76.78 86.05 76.78 86.05"></polygon><path class="cls-3" d="M88.71,87a1.92,1.92,0,0,0-2.11-1.58A2.22,2.22,0,0,0,84.21,88a2.19,2.19,0,0,0,2.33,2.38,2,2,0,0,0,2.17-1.73h.92a2.93,2.93,0,0,1-3.09,2.52,3.25,3.25,0,1,1,0-6.49c1.24,0,2.94.53,3.1,2.38Z"></path><polygon class="cls-3" points="91.12 84.78 96.09 84.78 96.09 85.58 92.04 85.58 92.04 87.37 95.97 87.37 95.97 88.17 92.04 88.17 92.04 90.17 96.18 90.17 96.18 90.97 91.12 90.97 91.12 84.78 91.12 84.78"></polygon><path class="cls-3" d="M102,86.59h-1.81v-.67h.21c1.54,0,1.77-.73,1.8-1.14H103V91H102V86.59Z"></path><path class="cls-3" d="M107.37,85.55a1.36,1.36,0,1,0,0,2.7,1.34,1.34,0,0,0,1.53-1.35c0-.74-.47-1.35-1.53-1.35m-1.36,4a1.12,1.12,0,0,0,1.21.83c1,0,1.72-.41,1.82-2.2h0a2.09,2.09,0,0,1-1.77.8,2.06,2.06,0,0,1-2.32-2.07,2.16,2.16,0,0,1,2.4-2.09c1.83,0,2.57,1.12,2.57,3,0,3.15-1.91,3.27-2.74,3.27a1.88,1.88,0,0,1-2-1.56Z"></path><path class="cls-3" d="M113,87.42h.58c.78,0,1.18-.34,1.18-.89,0-.76-.67-1-1.32-1a1.22,1.22,0,0,0-1.39,1.26h-.86a2,2,0,0,1,2.28-2c1.55,0,2.21.8,2.21,1.65a1.19,1.19,0,0,1-.91,1.24v0A1.4,1.4,0,0,1,116,89.18c0,1-.72,1.93-2.35,1.93-.57,0-2.56,0-2.56-2h.87c0,1,.69,1.32,1.61,1.32s1.52-.46,1.52-1.14-.63-1.09-1.52-1.09c-.31,0-.43,0-.51,0v-.75Z"></path><path class="cls-3" d="M119.92,85.55c-1.48,0-1.58,1.69-1.58,2.41s.1,2.42,1.58,2.42,1.59-1.7,1.59-2.42-.1-2.41-1.59-2.41m0-.73c1.91,0,2.51,1.42,2.51,3.14s-.6,3.15-2.51,3.15-2.5-1.42-2.5-3.15.6-3.14,2.5-3.14"></path></g></g></svg></a></div> <ul class="w-[40%] relative flex justify-evenly"><a href="/jobs"><li class="px-5 svelte-1o2x522">직업</li></a> <span class="text-slate-400">|</span> <a href="https://www.justkorea.co.kr/"><li class="px-5 svelte-1o2x522">제품 찾기</li></a> <span class="text-slate-400">|</span> <a href="/herb"><li class=" svelte-1o2x522">허브 백과사전</li></a></ul>',v(e,"class","mx-auto max-w-screen-xl flex items-center justify-center gap-4 p-8 svelte-1o2x522")},m(n,s){k(n,e,s)},d(n){n&&L(e)}}}function u1(t){let e,n,s,l,o,p,a,d,r,c,u,h=o1(t[4]),f=[];for(let i=0;i<h.length;i+=1)f[i]=p1(a1(t,h,i));return{c(){e=w("div"),n=w("div"),s=w("h1"),s.innerHTML='<span class="text-gold">JUST</span> KOREA',l=O(),o=w("button"),o.innerHTML='<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 22.5L22.5 2.5M2.5 2.5L22.5 22.5L2.5 2.5Z" stroke="#D2AC53" stroke-width="2"></path></svg>',p=O(),a=w("ul");for(let i=0;i<f.length;i+=1)f[i].c();v(s,"class","text-xl"),v(n,"class","flex items-center justify-between mt-10 mx-10"),v(a,"class","mt-20 mx-10 flex flex-col gap-2 svelte-1o2x522"),v(e,"class","text-white w-full h-screen fixed top-0 bg-navy")},m(i,y){k(i,e,y),_(e,n),_(n,s),_(n,l),_(n,o),_(e,p),_(e,a);for(let g=0;g<f.length;g+=1)f[g]&&f[g].m(a,null);r=!0,c||(u=N(o,"click",t[5]),c=!0)},p(i,y){if(y&16){h=o1(i[4]);let g;for(g=0;g<h.length;g+=1){const m=a1(i,h,g);f[g]?f[g].p(m,y):(f[g]=p1(m),f[g].c(),f[g].m(a,null))}for(;g<f.length;g+=1)f[g].d(1);f.length=h.length}},i(i){r||(i&&M(()=>{r&&(d||(d=P(e,c1,{axis:"y",duration:300},!0)),d.run(1))}),r=!0)},o(i){i&&(d||(d=P(e,c1,{axis:"y",duration:300},!1)),d.run(0)),r=!1},d(i){i&&L(e),j1(f,i),i&&d&&d.end(),c=!1,u()}}}function p1(t){let e,n,s;return{c(){e=w("a"),n=w("li"),n.textContent=`${t[10].name}`,s=O(),v(n,"class","flex text-white text-lg font-light svelte-1o2x522"),v(e,"class","block py-2"),v(e,"href",t[10].URL)},m(l,o){k(l,e,o),_(e,n),_(e,s)},p:b,d(l){l&&L(e)}}}function J1(t){let e=!1,n=()=>{e=!1},s,l,o,p,a,d,r;M(t[6]),M(t[7]);let c=t[2]&&r1(t),u=t[3]>768&&f1(),h=t[1]&&u1(t);return{c(){l=w("main"),o=w("header"),c&&c.c(),p=O(),u&&u.c(),a=O(),h&&h.c(),v(l,"class","svelte-1o2x522")},m(f,i){k(f,l,i),_(l,o),c&&c.m(o,null),_(o,p),u&&u.m(o,null),_(l,a),h&&h.m(l,null),d||(r=[N(window,"resize",t[6]),N(window,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(n,100),t[7]()})],d=!0)},p(f,[i]){i&1&&!e&&(e=!0,clearTimeout(s),scrollTo(window.pageXOffset,f[0]),s=setTimeout(n,100)),f[2]?c?(c.p(f,i),i&4&&x(c,1)):(c=r1(f),c.c(),x(c,1),c.m(o,p)):c&&(s1(),V(c,1,1,()=>{c=null}),l1()),f[3]>768?u||(u=f1(),u.c(),u.m(o,null)):u&&(u.d(1),u=null),f[1]?h?(h.p(f,i),i&2&&x(h,1)):(h=u1(f),h.c(),x(h,1),h.m(l,null)):h&&(s1(),V(h,1,1,()=>{h=null}),l1())},i(f){x(c),x(h)},o(f){V(c),V(h)},d(f){f&&L(l),c&&c.d(),u&&u.d(),h&&h.d(),d=!1,Z(r)}}}function X1(t,e,n){let s=!1,l=!0,o=0,p=0,a;const d=f=>{p-f>-.5?n(2,l=!0):n(2,l=!1),p=f};let r=[{name:"브랜드",URL:"/brand"},{name:"제품 철학",URL:"/philosophy"},{name:"스토어",URL:"/store"},{name:"직업",URL:"/jobs"},{name:"제품 찾기",URL:"https://justkorea.co.kr"},{name:"허브 백과사전",URL:"/herb"}];function c(){n(1,s=!s)}function u(){n(3,a=window.innerWidth)}function h(){n(0,o=window.pageYOffset)}return t.$$.update=()=>{t.$$.dirty&1&&d(o)},[o,s,l,a,r,c,u,h]}class G1 extends x1{constructor(e){super(),$1(this,e,X1,J1,h1,{})}}function Q1(t){let e,n,s;return n=new G1({}),{c(){e=w("main"),q1(n.$$.fragment)},m(l,o){k(l,e,o),w1(n,e,null),s=!0},p:b,i(l){s||(x(n.$$.fragment,l),s=!0)},o(l){V(n.$$.fragment,l),s=!1},d(l){l&&L(e),v1(n)}}}class tt extends x1{constructor(e){super(),$1(this,e,null,Q1,h1,{})}}new tt({target:document.getElementById("header")});