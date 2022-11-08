(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function D(){}function ye(t){return t()}function ae(){return Object.create(null)}function F(t){t.forEach(ye)}function Ae(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function j(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function Ee(t){return Object.keys(t).length===0}function A(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function M(){return q(" ")}function Be(){return q("")}function S(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function De(t){return Array.from(t.childNodes)}function fe(t,e){t.value=e==null?"":e}function J(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Me(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,s,e),o}let P;function T(t){P=t}function $e(){if(!P)throw new Error("Function called outside component initialization");return P}function be(){const t=$e();return(e,n,{cancelable:s=!1}={})=>{const o=t.$$.callbacks[e];if(o){const l=Me(e,n,{cancelable:s});return o.slice().forEach(i=>{i.call(t,l)}),!l.defaultPrevented}return!0}}const K=[],de=[],z=[],pe=[],Ce=Promise.resolve();let oe=!1;function Fe(){oe||(oe=!0,Ce.then(we))}function se(t){z.push(t)}const te=new Set;let O=0;function we(){const t=P;do{for(;O<K.length;){const e=K[O];O++,T(e),Ge(e.$$)}for(T(null),K.length=0,O=0;de.length;)de.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];te.has(n)||(te.add(n),n())}z.length=0}while(K.length);for(;pe.length;)pe.pop()();oe=!1,te.clear(),T(t)}function Ge(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(se)}}const I=new Set;let C;function ve(){C={r:0,c:[],p:C}}function ke(){C.r||F(C.c),C=C.p}function B(t,e){t&&t.i&&(I.delete(t),t.i(e))}function $(t,e,n,s){if(t&&t.o){if(I.has(t))return;I.add(t),C.c.push(()=>{I.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Le=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Se(t,e){$(t,1,1,()=>{e.delete(t.key)})}function Ne(t,e,n,s,o,l,i,c,d,p,f,u){let r=t.length,m=l.length,g=r;const G={};for(;g--;)G[t[g].key]=g;const b=[],v=new Map,Z=new Map;for(g=m;g--;){const y=u(o,l,g),k=n(y);let E=i.get(k);E?s&&E.p(y,e):(E=p(k,y),E.c()),v.set(k,b[g]=E),k in G&&Z.set(k,Math.abs(g-G[k]))}const ue=new Set,ce=new Set;function ee(y){B(y,1),y.m(c,f),i.set(y.key,y),f=y.first,m--}for(;r&&m;){const y=b[m-1],k=t[r-1],E=y.key,V=k.key;y===k?(f=y.first,r--,m--):v.has(V)?!i.has(E)||ue.has(E)?ee(y):ce.has(V)?r--:Z.get(E)>Z.get(V)?(ce.add(E),ee(y)):(ue.add(V),r--):(d(k,i),r--)}for(;r--;){const y=t[r];v.has(y.key)||d(y,i)}for(;m;)ee(b[m-1]);return b}function H(t){t&&t.c()}function Q(t,e,n,s){const{fragment:o,after_update:l}=t.$$;o&&o.m(e,n),s||se(()=>{const i=t.$$.on_mount.map(ye).filter(Ae);t.$$.on_destroy?t.$$.on_destroy.push(...i):F(i),t.$$.on_mount=[]}),l.forEach(se)}function X(t,e){const n=t.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ke(t,e){t.$$.dirty[0]===-1&&(K.push(t),Fe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(t,e,n,s,o,l,i,c=[-1]){const d=P;T(t);const p=t.$$={fragment:null,ctx:[],props:l,update:D,not_equal:o,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:ae(),dirty:c,skip_bound:!1,root:e.target||d.$$.root};i&&i(p.root);let f=!1;if(p.ctx=n?n(t,e.props||{},(u,r,...m)=>{const g=m.length?m[0]:r;return p.ctx&&o(p.ctx[u],p.ctx[u]=g)&&(!p.skip_bound&&p.bound[u]&&p.bound[u](g),f&&Ke(t,u)),r}):[],p.update(),f=!0,F(p.before_update),p.fragment=s?s(p.ctx):!1,e.target){if(e.hydrate){const u=De(e.target);p.fragment&&p.fragment.l(u),u.forEach(h)}else p.fragment&&p.fragment.c();e.intro&&B(t.$$.fragment),Q(t,e.target,e.anchor,e.customElement),we()}T(d)}class W{$destroy(){X(this,1),this.$destroy=D}$on(e,n){if(!Ae(n))return D;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!Ee(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const me="data:image/png;base64,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";function Te(t){let e,n,s,o,l,i,c,d;return document.title=e="Station "+t[0],{c(){n=_("link"),s=_("link"),o=_("meta"),l=_("meta"),i=_("meta"),c=_("meta"),d=_("meta"),a(n,"rel","shortcut icon"),a(n,"href",me),a(n,"type","image/png"),a(s,"rel","apple-touch-icon"),a(s,"href",me),a(o,"name","keywords"),a(o,"content","FSG, Geldern, Tdot, Tag der offenen T\xFCr, Friedrich, Spee, Gymnasium, 2022"),a(l,"http-equiv","Content-Type"),a(l,"content","text/html;charset=UTF-8"),a(i,"name","description"),a(i,"content","Sch\xFClerf\xFChrung f\xFCr neue Sch\xFCler am FSG f\xFCr den 03.12.2022 am Tag der offenen T\xFCr."),a(c,"name","application-name"),a(c,"content","Fsg Tdot guide 2022"),a(d,"name","generator"),a(d,"content","svelte")},m(p,f){A(document.head,n),A(document.head,s),A(document.head,o),A(document.head,l),A(document.head,i),A(document.head,c),A(document.head,d)},p(p,[f]){f&1&&e!==(e="Station "+p[0])&&(document.title=e)},i:D,o:D,d(p){h(n),h(s),h(o),h(l),h(i),h(c),h(d)}}}function Pe(t,e,n){let{station:s="0"}=e;return t.$$set=o=>{"station"in o&&n(0,s=o.station)},[s]}class Qe extends W{constructor(e){super(),U(this,e,Pe,Te,Y,{station:0})}}const L=-1,le=[{name:"Mensa",pos:{x:10,y:70},solution:"",status:0}],Xe=[{name:"Sporthalle",pos:{x:90,y:60},solution:"",status:L}],R=[{name:"Gesellschaftswissenschaften",pos:{x:10,y:10},solution:"Gesellschaft",status:L},{name:"Sprachwissenschaften",pos:{x:20,y:20},solution:"Sowi",status:L},{name:"B\xFCcherei",pos:{x:80,y:90},solution:"Buch",status:L},{name:"Kunst und Musik",pos:{x:15,y:15},solution:"Ist das Kunst?",status:L},{name:"Naturwissenschaften",pos:{x:70,y:80},solution:"Natur",status:L}],N=le.concat(R).concat(Xe);function Ye(t,e){return(t%R.length+e)%R.length}function ie(t,e){return e<le.length||e>=le.length+R.length?e:Ye(t,e)}const Ue="/assets/example_map.ab1ca935.svg";function We(t){let e,n,s,o,l,i,c,d,p,f,u,r,m,g,G;return{c(){e=_("img"),s=M(),o=_("div"),l=_("button"),i=q("/\\"),d=M(),p=_("br"),f=M(),u=_("button"),r=q("\\/"),a(e,"id","Map"),j(e.src,n=t[1]())||a(e,"src",n),a(e,"alt","Map"),a(e,"class","svelte-1pdb8hx"),a(l,"type","button"),l.disabled=c=t[0]>0,a(l,"class","disabled:bg-neutral-600 svelte-1pdb8hx"),a(u,"type","button"),u.disabled=m=t[0]<0,a(u,"class","disabled:bg-neutral-600 disabled:text-neutral-700 svelte-1pdb8hx"),a(o,"id","button-box"),a(o,"class","svelte-1pdb8hx")},m(b,v){w(b,e,v),w(b,s,v),w(b,o,v),A(o,l),A(l,i),A(o,d),A(o,p),A(o,f),A(o,u),A(u,r),g||(G=[S(l,"click",t[2]),S(u,"click",t[3])],g=!0)},p(b,[v]){v&2&&!j(e.src,n=b[1]())&&a(e,"src",n),v&1&&c!==(c=b[0]>0)&&(l.disabled=c),v&1&&m!==(m=b[0]<0)&&(u.disabled=m)},i:D,o:D,d(b){b&&h(e),b&&h(s),b&&h(o),g=!1,F(G)}}}function Ve(t,e,n){let s,{floor_lvl:o=0}=e;const l=()=>n(0,o++,o),i=()=>n(0,o--,o);return t.$$set=c=>{"floor_lvl"in c&&n(0,o=c.floor_lvl)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=()=>o===0?Ue:"")},[o,s,l,i]}class xe extends W{constructor(e){super(),U(this,e,Ve,We,Y,{floor_lvl:0})}}const ne="/assets/schloss_closed.7e287089.jpg";function Je(t){let e,n,s;return{c(){e=_("button"),e.textContent="Weiter",a(e,"type","button"),a(e,"class","hover:bg-neutral-500 svelte-jqkwmv")},m(o,l){w(o,e,l),n||(s=S(e,"click",t[2]),n=!0)},p:D,d(o){o&&h(e),n=!1,s()}}}function Oe(t){let e,n,s,o,l,i,c,d,p,f;return{c(){e=_("label"),e.textContent="L\xF6sung:",n=M(),s=_("br"),o=M(),l=_("input"),c=M(),d=_("button"),d.textContent="Check",a(e,"for","stationsolution"),a(l,"type","text"),a(l,"name","solution"),a(l,"id","stationsolution"),a(l,"maxlength",i=t[0].length),a(l,"spellcheck","false"),a(l,"class","svelte-jqkwmv"),a(d,"type","button"),a(d,"class","hover:bg-neutral-500 svelte-jqkwmv")},m(u,r){w(u,e,r),w(u,n,r),w(u,s,r),w(u,o,r),w(u,l,r),fe(l,t[1]),w(u,c,r),w(u,d,r),p||(f=[S(l,"input",t[3]),S(d,"click",t[2])],p=!0)},p(u,r){r&1&&i!==(i=u[0].length)&&a(l,"maxlength",i),r&2&&l.value!==u[1]&&fe(l,u[1])},d(u){u&&h(e),u&&h(n),u&&h(s),u&&h(o),u&&h(l),u&&h(c),u&&h(d),p=!1,F(f)}}}function ze(t){let e;function n(l,i){return l[0].length>0?Oe:Je}let s=n(t),o=s(t);return{c(){e=_("div"),o.c(),a(e,"class","svelte-jqkwmv")},m(l,i){w(l,e,i),o.m(e,null)},p(l,[i]){s===(s=n(l))&&o?o.p(l,i):(o.d(1),o=s(l),o&&(o.c(),o.m(e,null)))},i:D,o:D,d(l){l&&h(e),o.d()}}}function Ie(t,e,n){let{solution:s}=e;const o=be();let l="";function i(){l===s&&o("done")}function c(){l=this.value,n(1,l)}return t.$$set=d=>{"solution"in d&&n(0,s=d.solution)},[s,l,i,c]}class je extends W{constructor(e){super(),U(this,e,Ie,ze,Y,{solution:0})}}function ge(t){let e,n;return e=new je({props:{solution:t[0].solution}}),e.$on("done",t[6]),{c(){H(e.$$.fragment)},m(s,o){Q(e,s,o),n=!0},p(s,o){const l={};o&1&&(l.solution=s[0].solution),e.$set(l)},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){X(e,s)}}}function qe(t){let e,n,s,o,l,i=t[1](),c,d,p,f=i&&ge(t);return{c(){e=_("div"),n=_("img"),l=M(),f&&f.c(),j(n.src,s=t[2]())||a(n,"src",s),a(n,"alt",o="Station: "+t[0].name),a(n,"class","svelte-1l371lo"),a(e,"class","absolute w-1/6"),J(e,"left",t[0].pos.x+"%"),J(e,"top",t[0].pos.y+"%")},m(u,r){w(u,e,r),A(e,n),A(e,l),f&&f.m(e,null),c=!0,d||(p=S(n,"click",t[3]),d=!0)},p(u,[r]){(!c||r&4&&!j(n.src,s=u[2]()))&&a(n,"src",s),(!c||r&1&&o!==(o="Station: "+u[0].name))&&a(n,"alt",o),r&2&&(i=u[1]()),i?f?(f.p(u,r),r&2&&B(f,1)):(f=ge(u),f.c(),B(f,1),f.m(e,null)):f&&(ve(),$(f,1,1,()=>{f=null}),ke()),(!c||r&1)&&J(e,"left",u[0].pos.x+"%"),(!c||r&1)&&J(e,"top",u[0].pos.y+"%")},i(u){c||(B(f),c=!0)},o(u){$(f),c=!1},d(u){u&&h(e),f&&f.d(),d=!1,p()}}}function He(t,e,n){let s,o,{station:l}=e,i=!1;function c(){l.status===0&&n(5,i=!i)}const d=be(),p=()=>d("done");return t.$$set=f=>{"station"in f&&n(0,l=f.station)},t.$$.update=()=>{t.$$.dirty&1&&n(2,s=()=>(l.status===0||l.status<0,ne)),t.$$.dirty&33&&n(1,o=()=>l.status===0&&i)},[l,o,s,c,d,i,p]}class Re extends W{constructor(e){super(),U(this,e,He,qe,Y,{station:0})}}const{Map:Ze}=Le;function he(t,e,n){const s=t.slice();return s[4]=e[n],s[6]=n,s}function _e(t,e){let n,s,o;function l(){return e[3](e[6])}return s=new Re({props:{station:e[4]}}),s.$on("done",l),{key:t,first:null,c(){n=Be(),H(s.$$.fragment),this.first=n},m(i,c){w(i,n,c),Q(s,i,c),o=!0},p(i,c){e=i;const d={};c&1&&(d.station=e[4]),s.$set(d)},i(i){o||(B(s.$$.fragment,i),o=!0)},o(i){$(s.$$.fragment,i),o=!1},d(i){i&&h(n),X(s,i)}}}function et(t){let e,n,s,o,l,i,c=[],d=new Ze,p;e=new Qe({props:{station:ie(re,t[1]).toString()}}),l=new xe({});let f=t[0];const u=r=>r[6];for(let r=0;r<f.length;r+=1){let m=he(t,f,r),g=u(m);d.set(g,c[r]=_e(g,m))}return{c(){H(e.$$.fragment),n=M(),s=_("div"),o=_("main"),H(l.$$.fragment),i=M();for(let r=0;r<c.length;r+=1)c[r].c();a(o,"class","svelte-1th691v"),a(s,"id","bg"),a(s,"class","svelte-1th691v")},m(r,m){Q(e,r,m),w(r,n,m),w(r,s,m),A(s,o),Q(l,o,null),A(o,i);for(let g=0;g<c.length;g+=1)c[g].m(o,null);p=!0},p(r,[m]){const g={};m&2&&(g.station=ie(re,r[1]).toString()),e.$set(g),m&5&&(f=r[0],ve(),c=Ne(c,m,u,1,r,f,d,o,Se,_e,null,he),ke())},i(r){if(!p){B(e.$$.fragment,r),B(l.$$.fragment,r);for(let m=0;m<f.length;m+=1)B(c[m]);p=!0}},o(r){$(e.$$.fragment,r),$(l.$$.fragment,r);for(let m=0;m<c.length;m+=1)$(c[m]);p=!1},d(r){X(e,r),r&&h(n),r&&h(s),X(l);for(let m=0;m<c.length;m+=1)c[m].d()}}}let re=0;function tt(t,e,n){let s=0;function o(i){n(1,s++,s),n(0,N[i].status=1,N),n(0,N[ie(re,s)].status=0,N)}return[N,s,o,i=>o(i)]}class nt extends W{constructor(e){super(),U(this,e,tt,et,Y,{})}}new nt({target:document.getElementById("app")});
