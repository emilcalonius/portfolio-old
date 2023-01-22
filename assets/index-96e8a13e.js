(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function f(){}function C(t){return t()}function j(){return Object.create(null)}function x(t){t.forEach(C)}function q(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let v;function z(t,e){return v||(v=document.createElement("a")),v.href=e,t===v.href}function D(t){return Object.keys(t).length===0}function g(t,e){t.appendChild(e)}function G(t,e,n){t.insertBefore(e,n||null)}function P(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function J(t){return document.createTextNode(t)}function Q(){return J(" ")}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function R(t){return Array.from(t.childNodes)}let I;function _(t){I=t}const h=[],S=[],y=[],k=[],U=Promise.resolve();let w=!1;function V(){w||(w=!0,U.then(B))}function E(t){y.push(t)}const b=new Set;let m=0;function B(){if(m!==0)return;const t=I;do{try{for(;m<h.length;){const e=h[m];m++,_(e),X(e.$$)}}catch(e){throw h.length=0,m=0,e}for(_(null),h.length=0,m=0;S.length;)S.pop()();for(let e=0;e<y.length;e+=1){const n=y[e];b.has(n)||(b.add(n),n())}y.length=0}while(h.length);for(;k.length;)k.pop()();w=!1,b.clear(),_(t)}function X(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const $=new Set;let Y;function F(t,e){t&&t.i&&($.delete(t),t.i(e))}function Z(t,e,n,s){if(t&&t.o){if($.has(t))return;$.add(t),Y.c.push(()=>{$.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function tt(t){t&&t.c()}function H(t,e,n,s){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),s||E(()=>{const l=t.$$.on_mount.map(C).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...l):x(l),t.$$.on_mount=[]}),o.forEach(E)}function T(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){t.$$.dirty[0]===-1&&(h.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,n,s,r,o,l,d=[-1]){const c=I;_(t);const i=t.$$={fragment:null,ctx:[],props:o,update:f,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:j(),dirty:d,skip_bound:!1,root:e.target||c.$$.root};l&&l(i.root);let N=!1;if(i.ctx=n?n(t,e.props||{},(u,O,...A)=>{const L=A.length?A[0]:O;return i.ctx&&r(i.ctx[u],i.ctx[u]=L)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](L),N&&et(t,u)),O}):[],i.update(),N=!0,x(i.before_update),i.fragment=s?s(i.ctx):!1,e.target){if(e.hydrate){const u=R(e.target);i.fragment&&i.fragment.l(u),u.forEach(P)}else i.fragment&&i.fragment.c();e.intro&&F(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),B()}_(c)}class W{$destroy(){T(this,1),this.$destroy=f}$on(e,n){if(!q(n))return f;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!D(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const nt="/assets/portrait-5a226c09.jpg";function rt(t){let e,n,s,r,o,l,d;return{c(){e=p("div"),n=p("div"),s=p("div"),r=p("img"),l=Q(),d=p("div"),d.innerHTML=`<div class="title svelte-1g0tvm4"><h1 class="title-text svelte-1g0tvm4">Hi,</h1> 
            <h1 class="title-text svelte-1g0tvm4">I&#39;m</h1> 
            <h1 class="name svelte-1g0tvm4">Emil Calonius</h1> 
            <h1 class="title-text svelte-1g0tvm4">|</h1> 
            <h1 class="name svelte-1g0tvm4">Full Stack</h1> 
            <h1 class="title-text svelte-1g0tvm4">developer</h1></div> 
        <p class="bio svelte-1g0tvm4">I am an aspiring web developer, who loves
            problem solving and seeing the work I do
            affect peoples lives positively.</p>`,z(r.src,o=nt)||a(r,"src",o),a(r,"alt","portrait"),a(r,"class","svelte-1g0tvm4"),a(s,"class","portrait svelte-1g0tvm4"),a(n,"class","portrait-border svelte-1g0tvm4"),a(d,"class","text-container svelte-1g0tvm4"),a(e,"class","introduction svelte-1g0tvm4")},m(c,i){G(c,e,i),g(e,n),g(n,s),g(s,r),g(e,l),g(e,d)},p:f,i:f,o:f,d(c){c&&P(e)}}}class st extends W{constructor(e){super(),K(this,e,null,rt,M,{})}}function ot(t){let e,n;return e=new st({}),{c(){tt(e.$$.fragment)},m(s,r){H(e,s,r),n=!0},p:f,i(s){n||(F(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){T(e,s)}}}class it extends W{constructor(e){super(),K(this,e,null,ot,M,{})}}new it({target:document.getElementById("app")});
