var pe=Object.defineProperty;var he=(t,e,n)=>e in t?pe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var V=(t,e,n)=>(he(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function F(){}function re(t){return t()}function Y(){return Object.create(null)}function S(t){t.forEach(re)}function ie(t){return typeof t=="function"}function ue(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function me(t){return Object.keys(t).length===0}function g(t,e){t.appendChild(e)}function I(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function T(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function j(){return w(" ")}function M(){return w("")}function D(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function b(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ge(t){return Array.from(t.childNodes)}function O(t,e){e=""+e,t.data!==e&&(t.data=e)}function L(t,e){t.value=e??""}let K;function R(t){K=t}const A=[],z=[];let P=[];const Q=[],ve=Promise.resolve();let G=!1;function be(){G||(G=!0,ve.then(ce))}function J(t){P.push(t)}const q=new Set;let N=0;function ce(){if(N!==0)return;const t=K;do{try{for(;N<A.length;){const e=A[N];N++,R(e),ye(e.$$)}}catch(e){throw A.length=0,N=0,e}for(R(null),A.length=0,N=0;z.length;)z.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];q.has(n)||(q.add(n),n())}P.length=0}while(A.length);for(;Q.length;)Q.pop()();G=!1,q.clear(),R(t)}function ye(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function Ee(t){const e=[],n=[];P.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),P=e}const U=new Set;let $e;function fe(t,e){t&&t.i&&(U.delete(t),t.i(e))}function we(t,e,n,l){if(t&&t.o){if(U.has(t))return;U.add(t),$e.c.push(()=>{U.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function B(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ke(t){t&&t.c()}function se(t,e,n){const{fragment:l,after_update:o}=t.$$;l&&l.m(e,n),J(()=>{const r=t.$$.on_mount.map(re).filter(ie);t.$$.on_destroy?t.$$.on_destroy.push(...r):S(r),t.$$.on_mount=[]}),o.forEach(J)}function ae(t,e){const n=t.$$;n.fragment!==null&&(Ee(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ie(t,e){t.$$.dirty[0]===-1&&(A.push(t),be(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,l,o,r,c=null,y=[-1]){const _=K;R(t);const i=t.$$={fragment:null,ctx:[],props:r,update:F,not_equal:o,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(_?_.$$.context:[])),callbacks:Y(),dirty:y,skip_bound:!1,root:e.target||_.$$.root};c&&c(i.root);let u=!1;if(i.ctx=n?n(t,e.props||{},(h,a,...v)=>{const $=v.length?v[0]:a;return i.ctx&&o(i.ctx[h],i.ctx[h]=$)&&(!i.skip_bound&&i.bound[h]&&i.bound[h]($),u&&Ie(t,h)),a}):[],i.update(),u=!0,S(i.before_update),i.fragment=l?l(i.ctx):!1,e.target){if(e.hydrate){const h=ge(e.target);i.fragment&&i.fragment.l(h),h.forEach(k)}else i.fragment&&i.fragment.c();e.intro&&fe(t.$$.fragment),se(t,e.target,e.anchor),ce()}R(_)}class _e{constructor(){V(this,"$$");V(this,"$$set")}$destroy(){ae(this,1),this.$destroy=F}$on(e,n){if(!ie(n))return F;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!me(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Oe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Oe);const je="/assets/euro-coin-2141-3ed148be.svg";function Be(t){let e;return{c(){e=E("header"),e.innerHTML=`<div class="logo-box"><img src="${je}" alt="Logo" class="logo"/> <h1 class="title">Rate Exchange</h1></div>`,b(e,"class","header")},m(n,l){I(n,e,l)},p:F,i:F,o:F,d(n){n&&k(e)}}}class Le extends _e{constructor(e){super(),de(this,e,null,Be,ue,{})}}function W(t,e,n){const l=t.slice();return l[12]=e[n][0],l[13]=e[n][1],l[15]=n,l}function X(t,e,n){const l=t.slice();return l[12]=e[n][0],l[13]=e[n][1],l}function Z(t,e,n){const l=t.slice();return l[12]=e[n][0],l[13]=e[n][1],l[15]=n,l}function x(t,e,n){const l=t.slice();return l[12]=e[n][0],l[13]=e[n][1],l}function Ne(t){let e,n,l,o,r,c,y,_=B(Object.entries(t[0])),i=[];for(let u=0;u<_.length;u+=1)i[u]=ee(x(t,_,u));return{c(){e=E("div"),n=E("input"),o=j(),r=E("select");for(let u=0;u<i.length;u+=1)i[u].c();b(n,"type","number"),b(n,"min","0"),b(n,"id","rate1"),b(n,"placeholder",l=H(t[1],100)),b(r,"id","option1"),b(e,"class","input-box")},m(u,h){I(u,e,h),g(e,n),g(e,o),g(e,r);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(r,null);c||(y=[D(n,"input",t[7]),D(r,"change",t[8])],c=!0)},p(u,h){if(h&2&&l!==(l=H(u[1],100))&&b(n,"placeholder",l),h&3){_=B(Object.entries(u[0]));let a;for(a=0;a<_.length;a+=1){const v=x(u,_,a);i[a]?i[a].p(v,h):(i[a]=ee(v),i[a].c(),i[a].m(r,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=_.length}},d(u){u&&k(e),T(i,u),c=!1,S(y)}}}function Ae(t){let e,n=t[12]+"",l,o;return{c(){e=E("option"),l=w(n),e.__value=o=t[12],L(e,e.__value)},m(r,c){I(r,e,c),g(e,l)},p(r,c){c&1&&n!==(n=r[12]+"")&&O(l,n),c&1&&o!==(o=r[12])&&(e.__value=o,L(e,e.__value))},d(r){r&&k(e)}}}function Fe(t){let e,n=t[12]+"",l,o;return{c(){e=E("option"),l=w(n),e.__value=o=t[12],L(e,e.__value),e.selected=!0},m(r,c){I(r,e,c),g(e,l)},p(r,c){c&1&&n!==(n=r[12]+"")&&O(l,n),c&1&&o!==(o=r[12])&&(e.__value=o,L(e,e.__value))},d(r){r&&k(e)}}}function ee(t){let e;function n(r,c){return r[12]===r[1]?Fe:Ae}let l=n(t),o=l(t);return{c(){o.c(),e=M()},m(r,c){o.m(r,c),I(r,e,c)},p(r,c){l===(l=n(r))&&o?o.p(r,c):(o.d(1),o=l(r),o&&(o.c(),o.m(e.parentNode,e)))},d(r){r&&k(e),o.d(r)}}}function te(t){let e,n=t[15]===0&&Ne(t);return{c(){n&&n.c(),e=M()},m(l,o){n&&n.m(l,o),I(l,e,o)},p(l,o){l[15]===0&&n.p(l,o)},d(l){l&&k(e),n&&n.d(l)}}}function Pe(t){let e,n,l,o,r,c,y,_=B(Object.entries(t[0])),i=[];for(let u=0;u<_.length;u+=1)i[u]=ne(X(t,_,u));return{c(){e=E("div"),n=E("input"),o=j(),r=E("select");for(let u=0;u<i.length;u+=1)i[u].c();b(n,"type","number"),b(n,"min","0"),b(n,"id","rate2"),b(n,"placeholder",l=H(t[2],100)),b(r,"id","option2"),b(e,"class","input-box")},m(u,h){I(u,e,h),g(e,n),g(e,o),g(e,r);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(r,null);c||(y=[D(n,"input",t[9]),D(r,"change",t[10])],c=!0)},p(u,h){if(h&4&&l!==(l=H(u[2],100))&&b(n,"placeholder",l),h&5){_=B(Object.entries(u[0]));let a;for(a=0;a<_.length;a+=1){const v=X(u,_,a);i[a]?i[a].p(v,h):(i[a]=ne(v),i[a].c(),i[a].m(r,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=_.length}},d(u){u&&k(e),T(i,u),c=!1,S(y)}}}function Se(t){let e,n=t[12]+"",l,o;return{c(){e=E("option"),l=w(n),e.__value=o=t[12],L(e,e.__value)},m(r,c){I(r,e,c),g(e,l)},p(r,c){c&1&&n!==(n=r[12]+"")&&O(l,n),c&1&&o!==(o=r[12])&&(e.__value=o,L(e,e.__value))},d(r){r&&k(e)}}}function Ce(t){let e,n=t[12]+"",l,o;return{c(){e=E("option"),l=w(n),e.__value=o=t[12],L(e,e.__value),e.selected=!0},m(r,c){I(r,e,c),g(e,l)},p(r,c){c&1&&n!==(n=r[12]+"")&&O(l,n),c&1&&o!==(o=r[12])&&(e.__value=o,L(e,e.__value))},d(r){r&&k(e)}}}function ne(t){let e;function n(r,c){return r[12]===r[2]?Ce:Se}let l=n(t),o=l(t);return{c(){o.c(),e=M()},m(r,c){o.m(r,c),I(r,e,c)},p(r,c){l===(l=n(r))&&o?o.p(r,c):(o.d(1),o=l(r),o&&(o.c(),o.m(e.parentNode,e)))},d(r){r&&k(e),o.d(r)}}}function le(t){let e,n=t[15]===1&&Pe(t);return{c(){n&&n.c(),e=M()},m(l,o){n&&n.m(l,o),I(l,e,o)},p(l,o){l[15]===1&&n.p(l,o)},d(l){l&&k(e),n&&n.d(l)}}}function oe(t){let e,n,l,o,r=(100*t[4]/t[3]).toFixed(2)+"",c,y,_,i,u,h,a,v,$=(100*t[3]/t[4]).toFixed(2)+"",d,m,f;return{c(){e=E("p"),n=w("100.00 "),l=w(t[1]),o=w(" = "),c=w(r),y=j(),_=w(t[2]),i=j(),u=E("p"),h=w("100.00 "),a=w(t[2]),v=w(" = "),d=w($),m=j(),f=w(t[1]),b(e,"id","exchangeRate1"),b(e,"class","exchange-rate1"),b(u,"id","exchangeRate2"),b(u,"class","exchange-rate2")},m(p,s){I(p,e,s),g(e,n),g(e,l),g(e,o),g(e,c),g(e,y),g(e,_),I(p,i,s),I(p,u,s),g(u,h),g(u,a),g(u,v),g(u,d),g(u,m),g(u,f)},p(p,s){s&2&&O(l,p[1]),s&24&&r!==(r=(100*p[4]/p[3]).toFixed(2)+"")&&O(c,r),s&4&&O(_,p[2]),s&4&&O(a,p[2]),s&24&&$!==($=(100*p[3]/p[4]).toFixed(2)+"")&&O(d,$),s&2&&O(f,p[1])},d(p){p&&(k(e),k(i),k(u))}}}function Re(t){let e,n,l,o,r,c,y,_,i,u,h;n=new Le({});let a=B(Object.entries(t[0])),v=[];for(let f=0;f<a.length;f+=1)v[f]=te(Z(t,a,f));let $=B(Object.entries(t[0])),d=[];for(let f=0;f<$.length;f+=1)d[f]=le(W(t,$,f));let m=t[3]&&t[4]&&oe(t);return{c(){e=E("main"),ke(n.$$.fragment),l=j(),o=E("div"),r=E("p"),r.textContent="Insert an amount in one of the fields to convert it into another currency",c=j();for(let f=0;f<v.length;f+=1)v[f].c();y=j();for(let f=0;f<d.length;f+=1)d[f].c();_=j(),m&&m.c(),i=j(),u=E("p"),u.innerHTML='Exchange rates provided by:<br/> <a href="https://www.exchangerate-api.com/" target="_blank">exchangerate-api.com</a> <br/><br/><br/>Antipin Vladimiro',b(u,"class","credits"),b(o,"class","content")},m(f,p){I(f,e,p),se(n,e,null),g(e,l),g(e,o),g(o,r),g(o,c);for(let s=0;s<v.length;s+=1)v[s]&&v[s].m(o,null);g(o,y);for(let s=0;s<d.length;s+=1)d[s]&&d[s].m(o,null);g(o,_),m&&m.m(o,null),g(o,i),g(o,u),h=!0},p(f,[p]){if(p&99){a=B(Object.entries(f[0]));let s;for(s=0;s<a.length;s+=1){const C=Z(f,a,s);v[s]?v[s].p(C,p):(v[s]=te(C),v[s].c(),v[s].m(o,y))}for(;s<v.length;s+=1)v[s].d(1);v.length=a.length}if(p&101){$=B(Object.entries(f[0]));let s;for(s=0;s<$.length;s+=1){const C=W(f,$,s);d[s]?d[s].p(C,p):(d[s]=le(C),d[s].c(),d[s].m(o,_))}for(;s<d.length;s+=1)d[s].d(1);d.length=$.length}f[3]&&f[4]?m?m.p(f,p):(m=oe(f),m.c(),m.m(o,i)):m&&(m.d(1),m=null)},i(f){h||(fe(n.$$.fragment,f),h=!0)},o(f){we(n.$$.fragment,f),h=!1},d(f){f&&k(e),ae(n),T(v,f),T(d,f),m&&m.d()}}}const Ue="https://v6.exchangerate-api.com/v6/37b11cfbc42c280dd9e35fcd/latest/USD";function H(t,e){return`Insert an amount ${e.toFixed(2)} ${t}`}function Te(t,e,n){let l={};async function o(){try{let d=await fetch(Ue);if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);let m=await d.json();const{conversion_rates:f}=m,p=["USD","EUR","GBP","JPY","RUB"];n(0,l=Object.fromEntries(Object.entries(f).filter(([s])=>p.includes(s)))),console.log(l)}catch(d){console.error("Error fetching data:",d)}}o();let r="USD",c="EUR";function y(d,m){if(m===1){if(n(1,r=d.target.value),l[r]&&l[c]){n(3,_=l[r]),n(4,i=l[c]);const f=document.getElementById("rate1"),p=document.getElementById("rate2");f.value="",p.value="",u({target:{value:""}},1),u({target:{value:""}},2)}}else if(m===2&&(n(2,c=d.target.value),l[r]&&l[c])){n(3,_=l[r]),n(4,i=l[c]);const f=document.getElementById("rate1"),p=document.getElementById("rate2");f.value="",p.value="",u({target:{value:""}},1),u({target:{value:""}},2)}}let _=null,i=null;function u(d,m){if(m===1){const f=parseFloat(d.target.value);if(!isNaN(f)&&i!==null&&_!==null){const p=f*i/_,s=document.getElementById("rate2");s&&(s.value=p.toFixed(2))}}else if(m===2){const f=parseFloat(d.target.value);if(!isNaN(f)&&i!==null&&_!==null){const p=f*_/i,s=document.getElementById("rate1");s&&(s.value=p.toFixed(2))}}if(d.target.value===""){if(m===1){const f=document.getElementById("rate2");f.value=""}else if(m===2){const f=document.getElementById("rate1");f.value=""}}}const h=d=>u(d,1),a=d=>y(d,1),v=d=>u(d,2),$=d=>y(d,2);t.$$.update=()=>{t.$$.dirty&7&&(l[r]&&l[c]?(n(3,_=l[r]),n(4,i=l[c])):(n(3,_=null),n(4,i=null)))};{const d=document.getElementById("rate1"),m=document.getElementById("rate2");d&&d.addEventListener("input",f=>u(f,1)),m&&m.addEventListener("input",f=>u(f,2))}return[l,r,c,_,i,y,u,h,a,v,$]}class De extends _e{constructor(e){super(),de(this,e,Te,Re,ue,{})}}new De({target:document.getElementById("app")});