var ne=Object.defineProperty,re=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var H=(e,t,n)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))ue.call(t,n)&&H(e,n,t[n]);if(U)for(var n of U(t))ae.call(t,n)&&H(e,n,t[n]);return e},$=(e,t)=>re(e,oe(t));import{d as X,o as l,c as d,h as i,t as v,F as R,g as T,w as Y,r as B,T as J,_ as ie,i as L,b as ce,j as le,k as fe,l as de,m as b,n as k,p as pe,u as he,q as _e,s as me,e as y,v as V,x as w,y as ye,z as ge,A as P,B as Ee}from"./app.9ab20a8c.js";const ve={class:"result-item relative overflow-visible",flex:"~ col",text:"left",m:"b-4"},Fe=["href"],be={class:"not-italic",text:"xs"},we=["href"],Re={class:"top-0 truncate"},xe=["innerHTML"],Ce={key:1},$e=i("div",{class:"inline-flex justify-start items-center border",p:"1",m:"1"},[i("div",{"i-ri-alert-line":""}),i("span",{m:"l-1"},"\u6211\u4EEC\u7684\u63A2\u6D4B\u5668\u5BF9\u8FD9\u4E2A\u5947\u602A\u7684\u7F51\u7AD9\u6CA1\u6709\u6548\u679C\uFF01")],-1),ke=[$e],Ae={class:"reason-container absolute top-0 left-180 min-h-full justify-center hidden transition",w:"64",opacity:"0",flex:"~ col"},Te={class:"search-reason",p:"l-2",text:"xs"},Be=X({__name:"ResultItem",props:{keywords:null,result:null},setup(e){const t=(n,r)=>{let o=n.replace(/</g,"&lt;").replace(/>/g,"&gt;");return r.forEach(u=>{const a=new RegExp(u,"gi");o=o.replace(a,f=>`<em class="highlight">${f}</em>`)}),o};return(n,r)=>(l(),d("div",ve,[i("a",{href:e.result.\u7F51\u5740,target:"_blank",class:"block truncate"},[i("cite",be,v(e.result.\u7F51\u5740),1)],8,Fe),e.result.\u4FE1\u606F?(l(),d(R,{key:0},[i("a",{href:e.result.\u7F51\u5740,target:"_blank",class:"text-lg text-blue-900 hover:underline dark:text-blue-500"},[i("h3",Re,v(e.result.\u4FE1\u606F.\u6807\u9898),1)],8,we),i("p",{text:"sm",innerHTML:t(e.result.\u4FE1\u606F.\u63CF\u8FF0||e.result.\u4FE1\u606F.\u6587\u672C,e.keywords)},null,8,xe)],64)):(l(),d("div",Ce,ke)),T(J,null,{default:Y(()=>[i("div",Ae,[i("blockquote",Te,[(l(!0),d(R,null,B(e.result.\u539F\u56E0,(o,u)=>(l(),d("span",{key:u,class:"block"},v(u)+"\uFF1A"+v(o.toFixed(3)),1))),128))])])]),_:1})]))}});const Le={},Se={class:"absolute loading-container flex justify-center items-center fixed inset-0",h:"screen",m:"auto"},je=i("div",{class:"spinner"},null,-1),Pe=[je];function Ne(e,t){return l(),d("div",Se,Pe)}var De=ie(Le,[["render",Ne]]),Oe="/rimo-touch-fish.png";const qe=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,Ie=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Ue=/^["{[]|^-?[0-9][0-9.]{0,14}$/;function He(e,t){if(!(e==="__proto__"||e==="constructor"))return t}function Ve(e){if(typeof e!="string")return e;const t=e.toLowerCase();if(t==="true")return!0;if(t==="false")return!1;if(t==="null")return null;if(t==="nan")return NaN;if(t==="infinity")return 1/0;if(t!=="undefined"){if(!Ue.test(e))return e;try{return qe.test(e)||Ie.test(e)?JSON.parse(e,He):JSON.parse(e)}catch{return e}}}const Ke=/#/g,Qe=/&/g,Xe=/=/g,M=/\+/g,Ye=/%5B/gi,Je=/%5D/gi,Me=/%5E/gi,We=/%60/gi,ze=/%7B/gi,Ge=/%7C/gi,Ze=/%7D/gi,et=/%20/gi;function tt(e){return encodeURI(""+e).replace(Ge,"|").replace(Ye,"[").replace(Je,"]")}function S(e){return tt(e).replace(M,"%2B").replace(et,"+").replace(Ke,"%23").replace(Qe,"%26").replace(We,"`").replace(ze,"{").replace(Ze,"}").replace(Me,"^")}function A(e){return S(e).replace(Xe,"%3D")}function W(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function st(e){return W(e.replace(M," "))}function nt(e=""){const t={};e[0]==="?"&&(e=e.substr(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const o=W(r[1]);if(o==="__proto__"||o==="constructor")continue;const u=st(r[2]||"");t[o]?Array.isArray(t[o])?t[o].push(u):t[o]=[t[o],u]:t[o]=u}return t}function rt(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${A(e)}=${S(n)}`).join("&"):`${A(e)}=${S(t)}`:A(e)}function ot(e){return Object.keys(e).map(t=>rt(t,e[t])).join("&")}const ut=/^\w+:(\/\/)?/,at=/^\/\/[^/]+/;function it(e,t=!1){return ut.test(e)||t&&at.test(e)}const ct=/\/$|\/\?/;function j(e="",t=!1){return t?ct.test(e):e.endsWith("/")}function lt(e="",t=!1){if(!t)return(j(e)?e.slice(0,-1):e)||"/";if(!j(e,!0))return e||"/";const[n,...r]=e.split("?");return(n.slice(0,-1)||"/")+(r.length?`?${r.join("?")}`:"")}function ft(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(j(e,!0))return e||"/";const[n,...r]=e.split("?");return n+"/"+(r.length?`?${r.join("?")}`:"")}function dt(e=""){return e.startsWith("/")}function pt(e=""){return(dt(e)?e.substr(1):e)||"/"}function ht(e,t){if(mt(t))return e;const n=lt(t);return e.startsWith(n)?e:gt(n,e)}function _t(e,t){const n=z(e),r=m(m({},nt(n.search)),t);return n.search=ot(r),Et(n)}function mt(e){return!e||e==="/"}function yt(e){return e&&e!=="/"}function gt(e,...t){let n=e||"";for(const r of t.filter(yt))n=n?ft(n)+pt(r):r;return n}function z(e="",t){if(!it(e,!0))return t?z(t+e):K(e);const[n="",r,o=""]=(e.replace(/\\/g,"/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[u="",a=""]=(o.match(/([^/?#]*)(.*)?/)||[]).splice(1),{pathname:f,search:c,hash:s}=K(a);return{protocol:n,auth:r?r.substr(0,r.length-1):"",host:u,pathname:f,search:c,hash:s}}function K(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function Et(e){const t=e.pathname+(e.search?(e.search.startsWith("?")?"":"?")+e.search:"")+e.hash;return e.protocol?e.protocol+"//"+(e.auth?e.auth+"@":"")+e.host+t:t}class vt extends Error{constructor(){super(...arguments),this.name="FetchError"}}function Ft(e,t,n){let r="";e&&n&&(r=`${n.status} ${n.statusText} (${e.toString()})`),t&&(r=`${t.message} (${r})`);const o=new vt(r);return Object.defineProperty(o,"request",{get(){return e}}),Object.defineProperty(o,"response",{get(){return n}}),Object.defineProperty(o,"data",{get(){return n&&n._data}}),o}const bt=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Q(e="GET"){return bt.has(e.toUpperCase())}function wt(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const Rt=new Set(["image/svg","application/xml","application/xhtml","application/html"]),xt=/^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;function Ct(e=""){if(!e)return"json";const t=e.split(";").shift();return xt.test(t)?"json":Rt.has(t)||t.startsWith("text/")?"text":"blob"}const $t=new Set([408,409,425,429,500,502,503,504]);function G(e){const{fetch:t,Headers:n}=e;function r(a){if(a.options.retry!==!1){const c=typeof a.options.retry=="number"?a.options.retry:Q(a.options.method)?0:1,s=a.response&&a.response.status||500;if(c>0&&$t.has(s))return o(a.request,$(m({},a.options),{retry:c-1}))}const f=Ft(a.request,a.error,a.response);throw Error.captureStackTrace&&Error.captureStackTrace(f,o),f}const o=async function(f,c={}){const s={request:f,options:m(m({},e.defaults),c),response:void 0,error:void 0};s.options.onRequest&&await s.options.onRequest(s),typeof s.request=="string"&&(s.options.baseURL&&(s.request=ht(s.request,s.options.baseURL)),s.options.params&&(s.request=_t(s.request,s.options.params)),s.options.body&&Q(s.options.method)&&wt(s.options.body)&&(s.options.body=typeof s.options.body=="string"?s.options.body:JSON.stringify(s.options.body),s.options.headers=new n(s.options.headers),s.options.headers.has("content-type")||s.options.headers.set("content-type","application/json"),s.options.headers.has("accept")||s.options.headers.set("accept","application/json"))),s.response=await t(s.request,s.options).catch(async g=>(s.error=g,s.options.onRequestError&&await s.options.onRequestError(s),r(s)));const F=(s.options.parseResponse?"json":s.options.responseType)||Ct(s.response.headers.get("content-type")||"");if(F==="json"){const g=await s.response.text(),p=s.options.parseResponse||Ve;s.response._data=p(g)}else s.response._data=await s.response[F]();return s.options.onResponse&&await s.options.onResponse(s),s.response.ok||s.options.onResponseError&&await s.options.onResponseError(s),s.response.ok?s.response:r(s)},u=function(f,c){return o(f,c).then(s=>s._data)};return u.raw=o,u.create=(a={})=>G($(m({},e),{defaults:m(m({},e.defaults),a)})),u}const Z=function(){if(typeof globalThis!="undefined")return globalThis;if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("unable to locate global object")}(),kt=Z.fetch||(()=>Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!"))),At=Z.Headers,Tt=G({fetch:kt,Headers:At}),Bt=Tt.create({baseURL:"https://sese-proxy.azurewebsites.net/api",retry:0,async onResponse({response:e}){const{useToast:t}=await L(()=>import("./app.9ab20a8c.js").then(function(r){return r.H}),["assets/app.9ab20a8c.js","assets/app.382b89b3.css"]),n=t();typeof e._data=="string"&&n.error("\u574F\u4E86\uFF01\u670D\u52A1\u5668\u574F\u4E86\uFF01\u5FEB\u53BB\u6253\u8389\u6CAB\u9171\uFF01")},async onResponseError({response:e}){const{useToast:t}=await L(()=>import("./app.9ab20a8c.js").then(function(r){return r.H}),["assets/app.9ab20a8c.js","assets/app.382b89b3.css"]),n=t();n.error(`${e.status} ${e.statusText}`),e._data&&n.error(e._data.\u4FE1\u606F)}});async function Lt(e){const{useToast:t}=await L(()=>import("./app.9ab20a8c.js").then(function(u){return u.H}),["assets/app.9ab20a8c.js","assets/app.382b89b3.css"]),n=t(),r={q:e.q||"",slice:e.slice||"0:10"};return await Bt("/search",{params:r}).catch(u=>{console.error(u),n.error("\u574F\u4E86\uFF01\u670D\u52A1\u5668\u574F\u4E86\uFF01\u5FEB\u53BB\u6253\u8389\u6CAB\u9171\uFF01")})}const St={p:"2",h:"screen"},jt={p:"l-2 lt-sm:l-0",class:"relative flex justify-start items-center lt-sm:mt-6"},Pt=["src"],Nt=i("div",{"i-ri-heart-line":""},null,-1),Dt=[Nt],Ot={key:0,m:"l-24 lt-sm:l-0",p:"2",class:"max-w-2xl"},qt={text:"left sm gray-500",m:"b-2"},It={key:1,text:"left",m:"t-8"},Ut=P(" \u627E\u4E0D\u5230\u548C\u60A8\u67E5\u8BE2\u7684\u300C"),Ht={text:"red-500"},Vt=P("\u300D\u76F8\u7B26\u7684\u5185\u5BB9\u6216\u4FE1\u606F\uFF01 "),Kt=i("p",{m:"t-8",text:"left"},[P(" \u5EFA\u8BAE\uFF1A "),i("ul",{p:"4"},[i("li",{class:"list-circle"}," \u4F7F\u7528 Google \u641C\u7D22 ")]),i("img",{src:Oe,alt:"\u6478\u9C7C"})],-1),Qt={key:2,m:"t-6 b-4",class:"pagination-container flex justify-center items-center"},Xt=i("div",{"i-ri-arrow-left-line":""},null,-1),Yt=[Xt],Jt=["onClick"],Mt=i("div",{"i-ri-arrow-right-line":""},null,-1),Wt=[Mt],zt={key:1,m:"t-10"},es=X({__name:"search",setup(e){var D,O,q;const{t}=ce(),{enter:n}=le(),r=fe(),o=de();o.setNewKeyword(((D=r.query.q)==null?void 0:D.toString())||"");const u=b(o.savedKeyword),a=b((O=r.query.slice)==null?void 0:O.toString()),f=b(10),c=b(),s=k(()=>c.value&&c.value.\u5206\u8BCD||[u.value]),F=pe();he({title:k(()=>`${o.savedKeyword} - ${t("sese.title")}`)});const g=async()=>{o.isLoading=!0;const E=await Lt({q:u.value,slice:a.value});o.isLoading=!1,c.value=E};_e(async()=>{g()});const p=b(a.value?parseInt((q=a.value)==null?void 0:q.split(":")[0])/f.value+1:1),x=E=>{p.value=E,a.value=`${(p.value-1)*f.value}:${p.value*f.value}`,F.push({path:"/search",query:{q:u.value,slice:a.value}}),g()};me(()=>o.savedKeyword,()=>{g()});const C=k(()=>{if(c.value&&c.value.\u603B\u6570){const E=Math.ceil(c.value.\u603B\u6570/f.value);return E<=10?E:10}else return 0}),N=()=>{p.value=1,a.value=`0:${f.value}`,n(u.value)};return(E,_)=>{const ee=De,te=Ee,se=Be;return l(),d("div",St,[T(J,null,{default:Y(()=>[y(o).isLoading?(l(),V(ee,{key:0})):w("",!0)]),_:1}),i("div",jt,[i("a",{class:"cursor-pointer inline-flex justify-center lt-sm:absolute -top-5 left-5",m:"r-3 b-1",onClick:_[0]||(_[0]=()=>{y(F).push("/")})},[i("img",{class:"w-16 filter drop-shadow",src:y(ye),alt:"Rimo And XiaoYun"},null,8,Pt)]),T(te,{modelValue:u.value,"onUpdate:modelValue":_[1]||(_[1]=h=>u.value=h),class:"inline-flex",enter:()=>{N()}},null,8,["modelValue","enter"]),i("button",{m:"l-2",p:"2",class:"icon-btn flex justify-center items-center border rounded rounded-full !outline-none",onClick:_[2]||(_[2]=h=>N())},Dt)]),c.value?(l(),d("div",Ot,[i("div",qt," \u627E\u5230\u7EA6 "+v(c.value.\u603B\u6570)+" \u4E2A\u7ED3\u679C ",1),c.value.\u603B\u6570?(l(!0),d(R,{key:0},B(c.value.\u7ED3\u679C,(h,I)=>(l(),V(se,{key:I,keywords:y(s),se:"",result:h},null,8,["keywords","result"]))),128)):(l(),d("div",It,[Ut,i("strong",Ht,v(u.value),1),Vt,Kt])),y(C)?(l(),d("div",Qt,[p.value>1?(l(),d("span",{key:0,class:"page-link",text:"sm",p:"r-1",m:"r-1",onClick:_[3]||(_[3]=h=>x(p.value-1))},Yt)):w("",!0),(l(!0),d(R,null,B(y(C),h=>(l(),d("span",{key:h,p:"1",m:"1",class:ge(["pagination-page",p.value===h?"text-black dark:text-white":"text-blue-600 dark:text-blue-500 cursor-pointer hover:underline"]),text:"sm",onClick:I=>p.value===h?null:x(h)},v(h),11,Jt))),128)),p.value<y(C)?(l(),d("span",{key:1,class:"page-link",text:"sm",p:"l-1",m:"l-1",onClick:_[4]||(_[4]=h=>x(p.value+1))},Wt)):w("",!0)])):w("",!0)])):y(o).isLoading?w("",!0):(l(),d("div",zt," \u670D\u52A1\u5668\u4E0D\u2026\u2026\u4E0D\u884C\u4E86\u2026\u2026 "))])}}});export{es as default};
