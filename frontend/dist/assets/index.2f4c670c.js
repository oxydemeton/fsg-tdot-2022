(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function D(){}function ye(t){return t()}function ae(){return Object.create(null)}function F(t){t.forEach(ye)}function Ae(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function j(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function Ee(t){return Object.keys(t).length===0}function y(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function M(){return q(" ")}function Be(){return q("")}function S(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function De(t){return Array.from(t.childNodes)}function fe(t,e){t.value=e==null?"":e}function J(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Me(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,s,e),o}let P;function T(t){P=t}function $e(){if(!P)throw new Error("Function called outside component initialization");return P}function be(){const t=$e();return(e,n,{cancelable:s=!1}={})=>{const o=t.$$.callbacks[e];if(o){const l=Me(e,n,{cancelable:s});return o.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}const K=[],de=[],I=[],pe=[],Ce=Promise.resolve();let oe=!1;function Fe(){oe||(oe=!0,Ce.then(we))}function se(t){I.push(t)}const te=new Set;let O=0;function we(){const t=P;do{for(;O<K.length;){const e=K[O];O++,T(e),Ge(e.$$)}for(T(null),K.length=0,O=0;de.length;)de.pop()();for(let e=0;e<I.length;e+=1){const n=I[e];te.has(n)||(te.add(n),n())}I.length=0}while(K.length);for(;pe.length;)pe.pop()();oe=!1,te.clear(),T(t)}function Ge(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(se)}}const x=new Set;let C;function ve(){C={r:0,c:[],p:C}}function ke(){C.r||F(C.c),C=C.p}function B(t,e){t&&t.i&&(x.delete(t),t.i(e))}function $(t,e,n,s){if(t&&t.o){if(x.has(t))return;x.add(t),C.c.push(()=>{x.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Le=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Se(t,e){$(t,1,1,()=>{e.delete(t.key)})}function Ne(t,e,n,s,o,l,r,a,f,d,p,i){let u=t.length,m=l.length,w=u;const G={};for(;w--;)G[t[w].key]=w;const A=[],v=new Map,Z=new Map;for(w=m;w--;){const _=i(o,l,w),k=n(_);let E=r.get(k);E?s&&E.p(_,e):(E=d(k,_),E.c()),v.set(k,A[w]=E),k in G&&Z.set(k,Math.abs(w-G[k]))}const ue=new Set,ce=new Set;function ee(_){B(_,1),_.m(a,p),r.set(_.key,_),p=_.first,m--}for(;u&&m;){const _=A[m-1],k=t[u-1],E=_.key,V=k.key;_===k?(p=_.first,u--,m--):v.has(V)?!r.has(E)||ue.has(E)?ee(_):ce.has(V)?u--:Z.get(E)>Z.get(V)?(ce.add(E),ee(_)):(ue.add(V),u--):(f(k,r),u--)}for(;u--;){const _=t[u];v.has(_.key)||f(_,r)}for(;m;)ee(A[m-1]);return A}function H(t){t&&t.c()}function Q(t,e,n,s){const{fragment:o,after_update:l}=t.$$;o&&o.m(e,n),s||se(()=>{const r=t.$$.on_mount.map(ye).filter(Ae);t.$$.on_destroy?t.$$.on_destroy.push(...r):F(r),t.$$.on_mount=[]}),l.forEach(se)}function X(t,e){const n=t.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ke(t,e){t.$$.dirty[0]===-1&&(K.push(t),Fe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(t,e,n,s,o,l,r,a=[-1]){const f=P;T(t);const d=t.$$={fragment:null,ctx:[],props:l,update:D,not_equal:o,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:ae(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};r&&r(d.root);let p=!1;if(d.ctx=n?n(t,e.props||{},(i,u,...m)=>{const w=m.length?m[0]:u;return d.ctx&&o(d.ctx[i],d.ctx[i]=w)&&(!d.skip_bound&&d.bound[i]&&d.bound[i](w),p&&Ke(t,i)),u}):[],d.update(),p=!0,F(d.before_update),d.fragment=s?s(d.ctx):!1,e.target){if(e.hydrate){const i=De(e.target);d.fragment&&d.fragment.l(i),i.forEach(g)}else d.fragment&&d.fragment.c();e.intro&&B(t.$$.fragment),Q(t,e.target,e.anchor,e.customElement),we()}T(f)}class W{$destroy(){X(this,1),this.$destroy=D}$on(e,n){if(!Ae(n))return D;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!Ee(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const me="data:image/png;base64,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";function Te(t){let e,n,s,o,l,r,a,f;return document.title=e="Station "+t[0],{c(){n=h("link"),s=h("link"),o=h("meta"),l=h("meta"),r=h("meta"),a=h("meta"),f=h("meta"),c(n,"rel","shortcut icon"),c(n,"href",me),c(n,"type","image/png"),c(s,"rel","apple-touch-icon"),c(s,"href",me),c(o,"name","keywords"),c(o,"content","FSG, Geldern, Tdot, Tag der offenen T\xFCr, Friedrich, Spee, Gymnasium, 2022"),c(l,"http-equiv","Content-Type"),c(l,"content","text/html;charset=UTF-8"),c(r,"name","description"),c(r,"content","Sch\xFClerf\xFChrung f\xFCr neue Sch\xFCler am FSG f\xFCr den 03.12.2022 am Tag der offenen T\xFCr."),c(a,"name","application-name"),c(a,"content","Fsg Tdot guide 2022"),c(f,"name","generator"),c(f,"content","svelte")},m(d,p){y(document.head,n),y(document.head,s),y(document.head,o),y(document.head,l),y(document.head,r),y(document.head,a),y(document.head,f)},p(d,[p]){p&1&&e!==(e="Station "+d[0])&&(document.title=e)},i:D,o:D,d(d){g(n),g(s),g(o),g(l),g(r),g(a),g(f)}}}function Pe(t,e,n){let{station:s="0"}=e;return t.$$set=o=>{"station"in o&&n(0,s=o.station)},[s]}class Qe extends W{constructor(e){super(),U(this,e,Pe,Te,Y,{station:0})}}const L=-1,le=[{name:"Mensa",pos:{x:10,y:70},solution:"",status:0}],Xe=[{name:"Sporthalle",pos:{x:90,y:60},solution:"",status:L}],R=[{name:"Gesellschaftswissenschaften",pos:{x:10,y:10},solution:"Gesellschaft",status:L},{name:"Sprachwissenschaften",pos:{x:20,y:20},solution:"Sowi",status:L},{name:"B\xFCcherei",pos:{x:80,y:90},solution:"Buch",status:L},{name:"Kunst und Musik",pos:{x:15,y:15},solution:"Ist das Kunst?",status:L},{name:"Naturwissenschaften",pos:{x:70,y:80},solution:"Natur",status:L}],N=le.concat(R).concat(Xe);function Ye(t,e){return(t%R.length+e)%R.length}function ie(t,e){return e<le.length||e>=le.length+R.length?e:Ye(t,e)}const Ue="/assets/example_map.ab1ca935.svg";function We(t){let e,n,s,o,l,r,a,f,d,p,i,u,m,w,G;return{c(){e=h("img"),s=M(),o=h("div"),l=h("button"),r=q("/\\"),f=M(),d=h("br"),p=M(),i=h("button"),u=q("\\/"),c(e,"id","Map"),j(e.src,n=t[1]())||c(e,"src",n),c(e,"alt","Map"),c(e,"class","svelte-1lnuf41"),c(l,"type","button"),l.disabled=a=t[0]>0,c(l,"class","disabled:bg-neutral-600 svelte-1lnuf41"),c(i,"type","button"),i.disabled=m=t[0]<0,c(i,"class","disabled:bg-neutral-600 disabled:text-neutral-700 svelte-1lnuf41"),c(o,"id","button-box"),c(o,"class","svelte-1lnuf41")},m(A,v){b(A,e,v),b(A,s,v),b(A,o,v),y(o,l),y(l,r),y(o,f),y(o,d),y(o,p),y(o,i),y(i,u),w||(G=[S(l,"click",t[2]),S(i,"click",t[3])],w=!0)},p(A,[v]){v&2&&!j(e.src,n=A[1]())&&c(e,"src",n),v&1&&a!==(a=A[0]>0)&&(l.disabled=a),v&1&&m!==(m=A[0]<0)&&(i.disabled=m)},i:D,o:D,d(A){A&&g(e),A&&g(s),A&&g(o),w=!1,F(G)}}}function Ve(t,e,n){let s,{floor_lvl:o=0}=e;const l=()=>n(0,o++,o),r=()=>n(0,o--,o);return t.$$set=a=>{"floor_lvl"in a&&n(0,o=a.floor_lvl)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=()=>o===0?Ue:"")},[o,s,l,r]}class ze extends W{constructor(e){super(),U(this,e,Ve,We,Y,{floor_lvl:0})}}const ne="/assets/schloss_closed.7e287089.jpg";function Je(t){let e,n,s;return{c(){e=h("button"),e.textContent="Weiter",c(e,"type","button"),c(e,"class","hover:bg-neutral-500 svelte-jqkwmv")},m(o,l){b(o,e,l),n||(s=S(e,"click",t[2]),n=!0)},p:D,d(o){o&&g(e),n=!1,s()}}}function Oe(t){let e,n,s,o,l,r,a,f,d,p;return{c(){e=h("label"),e.textContent="L\xF6sung:",n=M(),s=h("br"),o=M(),l=h("input"),a=M(),f=h("button"),f.textContent="Check",c(e,"for","stationsolution"),c(l,"type","text"),c(l,"name","solution"),c(l,"id","stationsolution"),c(l,"maxlength",r=t[0].length),c(l,"spellcheck","false"),c(l,"class","svelte-jqkwmv"),c(f,"type","button"),c(f,"class","hover:bg-neutral-500 svelte-jqkwmv")},m(i,u){b(i,e,u),b(i,n,u),b(i,s,u),b(i,o,u),b(i,l,u),fe(l,t[1]),b(i,a,u),b(i,f,u),d||(p=[S(l,"input",t[3]),S(f,"click",t[2])],d=!0)},p(i,u){u&1&&r!==(r=i[0].length)&&c(l,"maxlength",r),u&2&&l.value!==i[1]&&fe(l,i[1])},d(i){i&&g(e),i&&g(n),i&&g(s),i&&g(o),i&&g(l),i&&g(a),i&&g(f),d=!1,F(p)}}}function Ie(t){let e;function n(l,r){return l[0].length>0?Oe:Je}let s=n(t),o=s(t);return{c(){e=h("div"),o.c(),c(e,"class","svelte-jqkwmv")},m(l,r){b(l,e,r),o.m(e,null)},p(l,[r]){s===(s=n(l))&&o?o.p(l,r):(o.d(1),o=s(l),o&&(o.c(),o.m(e,null)))},i:D,o:D,d(l){l&&g(e),o.d()}}}function xe(t,e,n){let{solution:s}=e;const o=be();let l="";function r(){l===s&&o("done")}function a(){l=this.value,n(1,l)}return t.$$set=f=>{"solution"in f&&n(0,s=f.solution)},[s,l,r,a]}class je extends W{constructor(e){super(),U(this,e,xe,Ie,Y,{solution:0})}}function ge(t){let e,n;return e=new je({props:{solution:t[0].solution}}),e.$on("done",t[6]),{c(){H(e.$$.fragment)},m(s,o){Q(e,s,o),n=!0},p(s,o){const l={};o&1&&(l.solution=s[0].solution),e.$set(l)},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){X(e,s)}}}function qe(t){let e,n,s,o,l,r=t[1](),a,f,d,p=r&&ge(t);return{c(){e=h("div"),n=h("img"),l=M(),p&&p.c(),j(n.src,s=t[2]())||c(n,"src",s),c(n,"alt",o="Station: "+t[0].name),c(n,"class","svelte-1l371lo"),c(e,"class","absolute w-1/6"),J(e,"left",t[0].pos.x+"%"),J(e,"top",t[0].pos.y+"%")},m(i,u){b(i,e,u),y(e,n),y(e,l),p&&p.m(e,null),a=!0,f||(d=S(n,"click",t[3]),f=!0)},p(i,[u]){(!a||u&4&&!j(n.src,s=i[2]()))&&c(n,"src",s),(!a||u&1&&o!==(o="Station: "+i[0].name))&&c(n,"alt",o),u&2&&(r=i[1]()),r?p?(p.p(i,u),u&2&&B(p,1)):(p=ge(i),p.c(),B(p,1),p.m(e,null)):p&&(ve(),$(p,1,1,()=>{p=null}),ke()),(!a||u&1)&&J(e,"left",i[0].pos.x+"%"),(!a||u&1)&&J(e,"top",i[0].pos.y+"%")},i(i){a||(B(p),a=!0)},o(i){$(p),a=!1},d(i){i&&g(e),p&&p.d(),f=!1,d()}}}function He(t,e,n){let s,o,{station:l}=e,r=!1;function a(){l.status===0&&n(5,r=!r)}const f=be(),d=()=>f("done");return t.$$set=p=>{"station"in p&&n(0,l=p.station)},t.$$.update=()=>{t.$$.dirty&1&&n(2,s=()=>(l.status===0||l.status<0,ne)),t.$$.dirty&33&&n(1,o=()=>l.status===0&&r)},[l,o,s,a,f,r,d]}class Re extends W{constructor(e){super(),U(this,e,He,qe,Y,{station:0})}}const{Map:Ze}=Le;function he(t,e,n){const s=t.slice();return s[4]=e[n],s[6]=n,s}function _e(t,e){let n,s,o;function l(){return e[3](e[6])}return s=new Re({props:{station:e[4]}}),s.$on("done",l),{key:t,first:null,c(){n=Be(),H(s.$$.fragment),this.first=n},m(r,a){b(r,n,a),Q(s,r,a),o=!0},p(r,a){e=r;const f={};a&1&&(f.station=e[4]),s.$set(f)},i(r){o||(B(s.$$.fragment,r),o=!0)},o(r){$(s.$$.fragment,r),o=!1},d(r){r&&g(n),X(s,r)}}}function et(t){let e,n,s,o,l,r=[],a=new Ze,f;e=new Qe({props:{station:ie(re,t[1]).toString()}}),o=new ze({});let d=t[0];const p=i=>i[6];for(let i=0;i<d.length;i+=1){let u=he(t,d,i),m=p(u);a.set(m,r[i]=_e(m,u))}return{c(){H(e.$$.fragment),n=M(),s=h("main"),H(o.$$.fragment),l=M();for(let i=0;i<r.length;i+=1)r[i].c();c(s,"class","svelte-1kzn085")},m(i,u){Q(e,i,u),b(i,n,u),b(i,s,u),Q(o,s,null),y(s,l);for(let m=0;m<r.length;m+=1)r[m].m(s,null);f=!0},p(i,[u]){const m={};u&2&&(m.station=ie(re,i[1]).toString()),e.$set(m),u&5&&(d=i[0],ve(),r=Ne(r,u,p,1,i,d,a,s,Se,_e,null,he),ke())},i(i){if(!f){B(e.$$.fragment,i),B(o.$$.fragment,i);for(let u=0;u<d.length;u+=1)B(r[u]);f=!0}},o(i){$(e.$$.fragment,i),$(o.$$.fragment,i);for(let u=0;u<r.length;u+=1)$(r[u]);f=!1},d(i){X(e,i),i&&g(n),i&&g(s),X(o);for(let u=0;u<r.length;u+=1)r[u].d()}}}let re=0;function tt(t,e,n){let s=0;function o(r){n(1,s++,s),n(0,N[r].status=1,N),n(0,N[ie(re,s)].status=0,N)}return[N,s,o,r=>o(r)]}class nt extends W{constructor(e){super(),U(this,e,tt,et,Y,{})}}new nt({target:document.getElementById("app")});
