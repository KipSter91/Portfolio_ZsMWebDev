var e,t,r,n,a,i,s,o,c,l,u,d,p,v,h,f,m=globalThis;function g(e){return e&&e.__esModule?e.default:e}var _={},b={},y=function(e){return e&&e.Math===Math&&e};b=y("object"==typeof globalThis&&globalThis)||y("object"==typeof window&&window)||y("object"==typeof self&&self)||y("object"==typeof m&&m)||y("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;E=S?$.bind($):function(){return $.apply($,arguments)};var j={}.propertyIsEnumerable,F=Object.getOwnPropertyDescriptor;r=F&&!j.call({1:2},1)?function(e){var t=F(this,e);return!!t&&t.enumerable}:j;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var M={},O={},P={},q=Function.prototype,T=q.call,B=S&&q.bind.bind(T,T),I={},D=(P=S?B:function(e){return function(){return T.apply(e,arguments)}})({}.toString),H=P("".slice);I=function(e){return H(D(e),8,-1)};var N=Object,A=P("".split);O=k(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===I(e)?A(e,""):N(e)}:N;var C={},x={};x=function(e){return null==e};var R=TypeError;C=function(e){if(x(e))throw new R("Can't call method on "+e);return e},M=function(e){return O(C(e))};var z={},W={},U={},Y={},Q="object"==typeof document&&document.all;Y=void 0===Q&&void 0!==Q?function(e){return"function"==typeof e||e===Q}:function(e){return"function"==typeof e},U=function(e){return"object"==typeof e?null!==e:Y(e)};var V={},J={};J=function(e,t){var r;return arguments.length<2?(r=b[e],Y(r)?r:void 0):b[e]&&b[e][t]};var G={};G=P({}.isPrototypeOf);var K={},X={},Z={},ee={},et=b.navigator,er=et&&et.userAgent;ee=er?String(er):"";var en=b.process,ea=b.Deno,ei=en&&en.versions||ea&&ea.version,es=ei&&ei.v8;es&&(a=(n=es.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!a&&ee&&(!(n=ee.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=ee.match(/Chrome\/(\d+)/))&&(a=+n[1]),Z=a;var eo=b.String;K=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ec=Object;V=K?function(e){return"symbol"==typeof e}:function(e){var t=J("Symbol");return Y(t)&&G(t.prototype,ec(e))};var el={},eu={},ed={},ep=String;ed=function(e){try{return ep(e)}catch(e){return"Object"}};var ev=TypeError;eu=function(e){if(Y(e))return e;throw new ev(ed(e)+" is not a function")},el=function(e,t){var r=e[t];return x(r)?void 0:eu(r)};var eh={},ef=TypeError;eh=function(e,t){var r,n;if("string"===t&&Y(r=e.toString)&&!U(n=E(r,e))||Y(r=e.valueOf)&&!U(n=E(r,e))||"string"!==t&&Y(r=e.toString)&&!U(n=E(r,e)))return n;throw new ef("Can't convert object to primitive value")};var em={},eg={},e_={},eb={};eb=!1;var ey={},ew=Object.defineProperty;ey=function(e,t){try{ew(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var ek="__core-js_shared__",eE=e_=b[ek]||ey(ek,{});(eE.versions||(eE.versions=[])).push({version:"3.41.0",mode:eb?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eg=function(e,t){return e_[e]||(e_[e]=t||{})};var eS={},e$={},ej=Object;e$=function(e){return ej(C(e))};var eF=P({}.hasOwnProperty);eS=Object.hasOwn||function(e,t){return eF(e$(e),t)};var eL={},eM=0,eO=Math.random(),eP=P(1..toString);eL=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eP(++eM+eO,36)};var eq=b.Symbol,eT=eg("wks"),eB=K?eq.for||eq:eq&&eq.withoutSetter||eL,eI=TypeError,eD=(em=function(e){return eS(eT,e)||(eT[e]=X&&eS(eq,e)?eq[e]:eB("Symbol."+e)),eT[e]})("toPrimitive");W=function(e,t){if(!U(e)||V(e))return e;var r,n=el(e,eD);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!U(r)||V(r))return r;throw new eI("Can't convert object to primitive value")}return void 0===t&&(t="number"),eh(e,t)},z=function(e){var t=W(e,"string");return V(t)?t:t+""};var eH={},eN={},eA=b.document,eC=U(eA)&&U(eA.createElement);eN=function(e){return eC?eA.createElement(e):{}},eH=!w&&!k(function(){return 7!==Object.defineProperty(eN("div"),"a",{get:function(){return 7}}).a});var ex=Object.getOwnPropertyDescriptor;t=w?ex:function(e,t){if(e=M(e),t=z(t),eH)try{return ex(e,t)}catch(e){}if(eS(e,t))return L(!E(r,e,t),e[t])};var eR={},ez={};ez=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eW={},eU=String,eY=TypeError;eW=function(e){if(U(e))return e;throw new eY(eU(e)+" is not an object")};var eQ=TypeError,eV=Object.defineProperty,eJ=Object.getOwnPropertyDescriptor,eG="enumerable",eK="configurable",eX="writable";i=w?ez?function(e,t,r){if(eW(e),t=z(t),eW(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eX in r&&!r[eX]){var n=eJ(e,t);n&&n[eX]&&(e[t]=r.value,r={configurable:eK in r?r[eK]:n[eK],enumerable:eG in r?r[eG]:n[eG],writable:!1})}return eV(e,t,r)}:eV:function(e,t,r){if(eW(e),t=z(t),eW(r),eH)try{return eV(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eR=w?function(e,t,r){return i(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eZ={},e0={},e1={},e2=Function.prototype,e3=w&&Object.getOwnPropertyDescriptor,e9=eS(e2,"name"),e6=e9&&(!w||w&&e3(e2,"name").configurable),e5={},e4=P(Function.toString);Y(e_.inspectSource)||(e_.inspectSource=function(e){return e4(e)}),e5=e_.inspectSource;var e7={},e8={},te=b.WeakMap;e8=Y(te)&&/native code/.test(String(te));var tt={},tr=eg("keys");tt=function(e){return tr[e]||(tr[e]=eL(e))};var tn={};tn={};var ta="Object already initialized",ti=b.TypeError,ts=b.WeakMap;if(e8||e_.state){var to=e_.state||(e_.state=new ts);to.get=to.get,to.has=to.has,to.set=to.set,s=function(e,t){if(to.has(e))throw new ti(ta);return t.facade=e,to.set(e,t),t},o=function(e){return to.get(e)||{}},c=function(e){return to.has(e)}}else{var tc=tt("state");tn[tc]=!0,s=function(e,t){if(eS(e,tc))throw new ti(ta);return t.facade=e,eR(e,tc,t),t},o=function(e){return eS(e,tc)?e[tc]:{}},c=function(e){return eS(e,tc)}}var tl=(e7={set:s,get:o,has:c,enforce:function(e){return c(e)?o(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!U(t)||(r=o(t)).type!==e)throw new ti("Incompatible receiver, "+e+" required");return r}}}).enforce,tu=e7.get,td=String,tp=Object.defineProperty,tv=P("".slice),th=P("".replace),tf=P([].join),tm=w&&!k(function(){return 8!==tp(function(){},"length",{value:8}).length}),tg=String(String).split("String"),t_=e0=function(e,t,r){"Symbol("===tv(td(t),0,7)&&(t="["+th(td(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eS(e,"name")||e6&&e.name!==t)&&(w?tp(e,"name",{value:t,configurable:!0}):e.name=t),tm&&r&&eS(r,"arity")&&e.length!==r.arity&&tp(e,"length",{value:r.arity});try{r&&eS(r,"constructor")&&r.constructor?w&&tp(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tl(e);return eS(n,"source")||(n.source=tf(tg,"string"==typeof t?t:"")),e};Function.prototype.toString=t_(function(){return Y(this)&&tu(this).source||e5(this)},"toString"),eZ=function(e,t,r,n){n||(n={});var a=n.enumerable,s=void 0!==n.name?n.name:t;if(Y(r)&&e0(r,s,n),n.global)a?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(a=!0):delete e[t]}catch(e){}a?e[t]=r:i(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tb={},ty={},tw={},tk={},tE={},tS={},t$={},tj=Math.ceil,tF=Math.floor;t$=Math.trunc||function(e){var t=+e;return(t>0?tF:tj)(t)},tS=function(e){var t=+e;return t!=t||0===t?0:t$(t)};var tL=Math.max,tM=Math.min;tE=function(e,t){var r=tS(e);return r<0?tL(r+t,0):tM(r,t)};var tO={},tP={},tq=Math.min;tP=function(e){var t=tS(e);return t>0?tq(t,0x1fffffffffffff):0},tO=function(e){return tP(e.length)};var tT=function(e){return function(t,r,n){var a,i=M(t),s=tO(i);if(0===s)return!e&&-1;var o=tE(n,s);if(e&&r!=r){for(;s>o;)if((a=i[o++])!=a)return!0}else for(;s>o;o++)if((e||o in i)&&i[o]===r)return e||o||0;return!e&&-1}},tB={includes:tT(!0),indexOf:tT(!1)}.indexOf,tI=P([].push);tw=function(e,t){var r,n=M(e),a=0,i=[];for(r in n)!eS(tn,r)&&eS(n,r)&&tI(i,r);for(;t.length>a;)eS(n,r=t[a++])&&(~tB(i,r)||tI(i,r));return i};var tD={},tH=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tw(e,tH)},u=Object.getOwnPropertySymbols;var tN=P([].concat);ty=J("Reflect","ownKeys")||function(e){var t=l(eW(e));return u?tN(t,u(e)):t},tb=function(e,r,n){for(var a=ty(r),s=0;s<a.length;s++){var o=a[s];eS(e,o)||n&&eS(n,o)||i(e,o,t(r,o))}};var tA={},tC=/#|\.prototype\./,tx=function(e,t){var r=tz[tR(e)];return r===tU||r!==tW&&(Y(t)?k(t):!!t)},tR=tx.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tz=tx.data={},tW=tx.NATIVE="N",tU=tx.POLYFILL="P";tA=tx,_=function(e,r){var n,a,i,s,o,c=e.target,l=e.global,u=e.stat;if(n=l?b:u?b[c]||ey(c,{}):b[c]&&b[c].prototype)for(a in r){if(s=r[a],i=e.dontCallGetSet?(o=t(n,a))&&o.value:n[a],!tA(l?a:c+(u?".":"#")+a,e.forced)&&void 0!==i){if(typeof s==typeof i)continue;tb(s,i)}(e.sham||i&&i.sham)&&eR(s,"sham",!0),eZ(n,a,s,e)}};var tY={},tQ=Function.prototype,tV=tQ.apply,tJ=tQ.call;tY="object"==typeof Reflect&&Reflect.apply||(S?tJ.bind(tV):function(){return tJ.apply(tV,arguments)});var tG={};tG=P([].slice);var tK=TypeError,tX=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw new tK("Bad Promise constructor");t=e,r=n}),this.resolve=eu(t),this.reject=eu(r)},tZ={};tZ=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}};var t0=b.Promise,t1=!1;_({target:"Promise",stat:!0,forced:!t0||!t0.try||tZ(function(){t0.try(function(e){t1=8===e},8)}).error||!t1},{try:function(e){var t=arguments.length>1?tG(arguments,1):[],r=new tX(this),n=tZ(function(){return tY(eu(e),void 0,t)});return(n.error?r.reject:r.resolve)(n.value),r.promise}});var t2={},t3={};t3=b,d=em,t2=function(e){var t=t3.Symbol||(t3.Symbol={});eS(t,e)||i(t,e,{value:d(e)})};var t9=b.Symbol;if(t2("dispose"),t9){var t6=t(t9,"dispose");t6.enumerable&&t6.configurable&&t6.writable&&i(t9,"dispose",{value:t6.value,enumerable:!1,configurable:!1,writable:!1})}var t5={},t4={},t7={},t8=(t7=function(e){if("Function"===I(e))return P(e)})(t7.bind);t4=function(e,t){return eu(e),void 0===t?e:S?t8(e,t):function(){return e.apply(t,arguments)}};var re={};re=J("document","documentElement");var rt={},rr=TypeError;rt=function(e,t){if(e<t)throw new rr("Not enough arguments");return e};var rn={};rn=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var ra={},ri={},rs=function(e){return ee.slice(0,e.length)===e};ra="NODE"===(ri=rs("Bun/")?"BUN":rs("Cloudflare-Workers")?"CLOUDFLARE":rs("Deno/")?"DENO":rs("Node.js/")?"NODE":b.Bun&&"string"==typeof Bun.version?"BUN":b.Deno&&"object"==typeof Deno.version?"DENO":"process"===I(b.process)?"NODE":b.window&&b.document?"BROWSER":"REST");var ro=b.setImmediate,rc=b.clearImmediate,rl=b.process,ru=b.Dispatch,rd=b.Function,rp=b.MessageChannel,rv=b.String,rh=0,rf={},rm="onreadystatechange";k(function(){p=b.location});var rg=function(e){if(eS(rf,e)){var t=rf[e];delete rf[e],t()}},r_=function(e){return function(){rg(e)}},rb=function(e){rg(e.data)},ry=function(e){b.postMessage(rv(e),p.protocol+"//"+p.host)};ro&&rc||(ro=function(e){rt(arguments.length,1);var t=Y(e)?e:rd(e),r=tG(arguments,1);return rf[++rh]=function(){tY(t,void 0,r)},v(rh),rh},rc=function(e){delete rf[e]},ra?v=function(e){rl.nextTick(r_(e))}:ru&&ru.now?v=function(e){ru.now(r_(e))}:rp&&!rn?(f=(h=new rp).port2,h.port1.onmessage=rb,v=t4(f.postMessage,f)):b.addEventListener&&Y(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!k(ry)?(v=ry,b.addEventListener("message",rb,!1)):v=rm in eN("script")?function(e){re.appendChild(eN("script"))[rm]=function(){re.removeChild(this),rg(e)}}:function(e){setTimeout(r_(e),0)});var rw=(t5={set:ro,clear:rc}).clear;_({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rw},{clearImmediate:rw});var rk=t5.set,rE={},rS=b.Function,r$=/MSIE .\./.test(ee)||"BUN"===ri&&((e=b.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rE=function(e,t){var r=t?2:1;return r$?function(n,a){var i=rt(arguments.length,1)>r,s=Y(n)?n:rS(n),o=i?tG(arguments,r):[],c=i?function(){tY(s,this,o)}:s;return t?e(c,a):e(c)}:e};var rj=b.setImmediate?rE(rk,!1):rk;_({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==rj},{setImmediate:rj});const rF="https://forkify-api.jonas.io/api/v2/recipes/",rL=async e=>{try{let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw console.error(`\u{2620}\u{FE0F}${e}\u{2620}\u{FE0F}`),e}},rM={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},rO=async e=>{try{let{recipe:t}=(await rL(`${rF}${e}`)).data;rM.recipe={id:t.id,cookingTime:t.cooking_time,image:t.image_url,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,source:t.source_url,title:t.title},rM.bookmarks.some(t=>t.id===e)?rM.recipe.bookmarked=!0:rM.recipe.bookmarked=!1}catch(e){throw console.error(`\u{2620}\u{FE0F}${e}\u{2620}\u{FE0F}`),e}},rP=function(e){e<=0||(rM.recipe.ingredients.forEach(t=>{t.quantity&&(t.quantity=t.quantity*e/rM.recipe.servings)}),rM.recipe.servings=e)},rq=async e=>{try{rM.search.query=e,rM.search.page=1;let t=await rL(`${rF}?search=${e}`);rM.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,image:e.image_url,publisher:e.publisher,bookmarked:rM.bookmarks.some(t=>t.id===e.id)}))}catch(e){throw console.error(`\u{2620}\u{FE0F}${e}\u{2620}\u{FE0F}`),e}},rT=(e=rM.search.page)=>{rM.search.page=e;let t=(e-1)*rM.search.resultsPerPage,r=e*rM.search.resultsPerPage;return rM.search.results.slice(t,r)},rB=function(e){if(rM.bookmarks.push(e),e.id===rM.recipe.id&&(rM.recipe.bookmarked=!0),rM.search.results.length>0){let t=rM.search.results.find(t=>t.id===e.id);t&&(t.bookmarked=!0)}rH()},rI=function(e){let t=rM.bookmarks.findIndex(t=>t.id===e);if(-1!==t){if(rM.bookmarks.splice(t,1),e===rM.recipe.id&&(rM.recipe.bookmarked=!1),rM.search.results.length>0){let t=rM.search.results.find(t=>t.id===e);t&&(t.bookmarked=!1)}rH()}},rD=function(){rM.bookmarks=[],rM.recipe.id&&(rM.recipe.bookmarked=!1),rM.search.results.length>0&&rM.search.results.forEach(e=>{e.bookmarked=!1}),rH()},rH=function(){localStorage.setItem("bookmarks",JSON.stringify(rM.bookmarks))},rN=localStorage.getItem("bookmarks");rN&&(rM.bookmarks=JSON.parse(rN));var rA={};rA=import.meta.resolve("eyyUD");class rC{_data;_clear(){this._parentElement.innerHTML=""}render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{if(t>=n.length)return;let r=n[t];e.nodeName===r.nodeName&&(e.isEqualNode(r)||e.firstChild?.nodeValue?.trim()===""||e.firstChild?.nodeType!==Node.TEXT_NODE||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.getAttribute(e.name)!==e.value&&r.setAttribute(e.name,e.value)}))})}renderLoader(){let e=`
      <div class="loader">
        <span></span><span></span><span></span>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderMessage(e=this._successMessage){let t=`
    <div class="message">
    <div>
    <svg>
    <use href="${g(rA)}#icon-smile"></use>
    </svg>
    </div>
    <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(e=this._errorMessage){let t=`
    <div class="error">
    <div>
    <svg>
    <use href="${g(rA)}#icon-alert-triangle"></use>
    </svg>
    </div>
    <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rx={};function rR(e,t,r,n,a){var i,s,o,c;let l=[2,3,5];if(!0===a)for(let t=3;t*t<=e;t+=2)e%t==0&&l.push(t);let u=0,d=e,p=t;for(;u<=l.length;)d%l[u]==0&&p%l[u]==0?(l[u],d/=l[u],p/=l[u]):u++;return i=p,s=d,o=r,c=n,1===i&&1===s?(o=`${c}${(parseInt(o)+1).toString()}`,`${o}`):0===s?`${c}${o}`:"0"==o?`${c}${s}/${i}`:`${c}${o} ${s}/${i}`}rx=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),a=n.split("."),i=a[0];if("0"==r&&"0"!==i)return i;if("0"==r&&"0"==i)return"0";if("99"==(r=n.length>=17?a[1].slice(0,a[1].length-1):a[1])&&"0"!==i)return`${i} 99/100`;if("99"==r&&"0"==i)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return i;let s=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!s||!(r.length>2)){var o,c,l;return o=r,c=i,l=t,rR(parseInt(o,10),Math.pow(10,o.length),c,l,!1)}{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,a){let i=e.length-r.length>=1?e.length-r.length:1,s=Math.pow(10,i),o=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rR(Math.round((o*c-o)*Math.pow(10,i)),(c-1)*s,n,a,!0)}(r,n,e,i,t)}};class rz extends rC{_parentElement=document.querySelector(".recipe");_errorMessage=`Oops! That recipe doesn\u{2019}t exist. Try a different one!`;_successMessage="";_generateMarkup(){return`
    <figure class="recipe__fig">
<img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
<h1 class="recipe__title">
  <span>${this._data.title}</span>
</h1>
</figure>

<div class="recipe__details">
<div class="recipe__info">
  <svg class="recipe__info-icon">
    <use href="${g(rA)}#icon-clock"></use>
  </svg>
  <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
  <span class="recipe__info-text">minutes</span>
</div>
<div class="recipe__info">
  <svg class="recipe__info-icon">
    <use href="${g(rA)}#icon-users"></use>
  </svg>
  <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
  <span class="recipe__info-text">servings</span>

  <div class="recipe__info-buttons">
    <button class="btn--tiny btn--decrease-servings" data-update-to="${this._data.servings-1}">
      <svg>
        <use href="${g(rA)}#icon-minus-circle"></use>
      </svg>
    </button>
    <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings+1}">
      <svg>
        <use href="${g(rA)}#icon-plus-circle"></use>
      </svg>
    </button>
  </div>
</div>

<div class="recipe__user-buttons">
  <button class="btn--round btn--bookmark">
    <svg class="">
      <use href="${g(rA)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
    </svg>
  </button>
</div>
</div>

<div class="recipe__ingredients">
<h2 class="heading--2">Recipe ingredients</h2>
<ul class="recipe__ingredient-list">
${this._data.ingredients.reduce(this._generateMarkupIngredient.bind(this),"")}
  
</ul>
</div>

<div class="recipe__directions">
<h2 class="heading--2">How to cook it</h2>
<p class="recipe__directions-text">
  This recipe was carefully designed and tested by
  <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
  directions at their website.</p>
<a
  class="btn--small recipe__btn"
  href=${this._data.source}
  target="_blank"
>
  <span>Directions</span>
  <svg class="search__icon">
    <use href="${g(rA)}#icon-arrow-right"></use>
  </svg>
</a>
</div>
    `}_generateMarkupIngredient(e,t){return e+`<li class="recipe__ingredient">
                    <svg class="recipe__icon">
                    <use href="${g(rA)}#icon-check"></use>
                    </svg>
                      <div class="recipe__quantity">${t.quantity?g(rx)(t.quantity):""}</div>
                      <div class="recipe__description">
                        <span class="recipe__unit">${t.unit}</span>
                        ${t.description}
                      </div>
                  </li>`}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--increase-servings, .btn--decrease-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}addHandlerImageBlur(){this._parentElement.addEventListener("click",e=>{let t=e.target.closest(".recipe__img");t&&(t.classList.toggle("no-blur"),e.stopPropagation())}),document.addEventListener("click",e=>{let t=this._parentElement.querySelector(".recipe__img"),r=!e.target.closest(".recipe")&&!e.target.closest(".search-results")&&!e.target.closest(".header");t&&!r&&t.classList.contains("no-blur")&&t.classList.remove("no-blur")})}}var rW=new rz;class rU{_parentElement=document.querySelector(".search");_searchField=document.querySelector(".search__field");_clearInput(){this._searchField.value=""}getQuery(){let e=this._searchField.value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e()})}}var rY=new rU;class rQ extends rC{_parentElement=document.querySelector(".results");_errorMessage="No results found for your query. Please try again with a different keyword.";_successMessage="";_generateMarkup(){return this._data.reduce(this._generateMarkupPreview.bind(this),"")}_generateMarkupPreview(e,t){let r=window.location.hash.slice(1);return e+`<li class="preview ${t.bookmarked?"preview--bookmarked":""}">
        <a class="preview__link ${t.id===r?"preview__link--active":""}" href="#${t.id}">
          <figure class="preview__fig">
            <img src=${t.image} alt="Image of ${t.title}"/>
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${t.title}</h4>
            <p class="preview__publisher">${t.publisher}</p>
          </div>
          <button class="preview__bookmark-btn">
            <svg>
              <use href="${g(rA)}#icon-bookmark${t.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </a>
      </li>`}addHandlerBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".preview__bookmark-btn");r&&(t.preventDefault(),e(r.closest(".preview").querySelector(".preview__link").getAttribute("href").slice(1)))})}}var rV=new rQ;class rJ{_hamburgerBtn=document.querySelector(".hamburger");_nav=document.querySelector(".nav");_navOverlay=document.querySelector(".nav-overlay");_bookmarksBtn=document.querySelector(".nav__btn--bookmarks");_addHandlerMobileMenu(){this._hamburgerBtn.addEventListener("click",()=>{this._nav.classList.toggle("nav-open"),this._navOverlay.classList.toggle("active"),this._hamburgerBtn.classList.toggle("active"),document.body.classList.toggle("nav-open")}),this._navOverlay.addEventListener("click",()=>{this._nav.classList.remove("nav-open"),this._navOverlay.classList.remove("active"),this._hamburgerBtn.classList.remove("active"),document.body.classList.remove("nav-open"),document.querySelector(".bookmarks").classList.remove("bookmarks-visible")})}_addHandlerCloseOnClick(){this._nav.addEventListener("click",e=>{e.target.closest(".nav__btn")&&window.innerWidth<=600&&(this._nav.classList.remove("nav-open"),this._navOverlay.classList.remove("active"),this._hamburgerBtn.classList.remove("active"),document.body.classList.remove("nav-open"))})}_addHandlerBookmarksOnMobile(){let e=document.querySelector(".bookmarks");this._bookmarksBtn.addEventListener("click",function(t){window.innerWidth<=600&&(t.preventDefault(),t.stopPropagation(),e.classList.toggle("bookmarks-visible"))}),this._nav.addEventListener("click",function(t){window.innerWidth<=600&&!t.target.closest(".nav__btn--bookmarks")&&!t.target.closest(".bookmarks")&&e.classList.contains("bookmarks-visible")&&e.classList.remove("bookmarks-visible")})}init(){this._addHandlerMobileMenu(),this._addHandlerCloseOnClick(),this._addHandlerBookmarksOnMobile()}}var rG=new rJ;class rK extends rC{_parentElement=document.querySelector(".pagination");_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <div class="pagination__placeholder"></div>
        ${this._createNextButton(e)}
      `:e===t&&t>1?`
        ${this._createPrevButton(e)}
        <div class="pagination__placeholder"></div>
      `:e<t?`
      ${this._createPrevButton(e)}
      ${this._createNextButton(e)}
      `:""}_createPrevButton(e){return`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev pagination__btn">
        <svg class="search__icon">
          <use href="${g(rA)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>
    `}_createNextButton(e){return`
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next pagination__btn">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
          <use href="${g(rA)}#icon-arrow-right"></use>
        </svg>
      </button>
    `}addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}}var rX=new rK;class rZ extends rC{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a recipe you love and bookmark it!";_successMessage="";addHandlerDeleteAll(e){document.querySelector(".nav").addEventListener("click",function(t){t.target.closest(".btn--delete-all")&&e()})}_generateMarkup(){return this._data.length?this._data.reduce(this._generateMarkupPreview.bind(this),"")+`<div class="bookmarks__delete-all">
          <button class="btn btn--small btn--delete-all">Delete All Bookmarks</button>
        </div>`:`<div class="message">
          <div>
            <svg>
              <use href="${g(rA)}#icon-smile"></use>
            </svg>
          </div>
          <p>
            You haven't saved any favorites yet! Find something tasty
            and bookmark it for later.
          </p>
        </div>`}_generateMarkupPreview(e,t){let r=window.location.hash.slice(1);return e+`<li class="preview">
        <a class="preview__link ${t.id===r?"preview__link--active":""}" href="#${t.id}">
          <figure class="preview__fig">
            <img src=${t.image} alt="Image of ${t.title}"/>
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${t.title}</h4>
            <p class="preview__publisher">${t.publisher}</p>
          </div>
        </a>
      </li>`}}var r0=new rZ;const r1=document.querySelector(".search-results"),r2=document.querySelector(".container"),r3=function(){0===rM.search.results.length&&window.location.hash?(r1.classList.add("hidden"),r2.classList.add("recipe-only")):(r1.classList.remove("hidden"),r2.classList.remove("recipe-only"))},r9=function(){if(window.innerWidth<=600){let e=document.querySelector(".recipe"),t=document.querySelector(".header");if(e&&t){let r=t.offsetHeight;window.scrollTo({top:e.offsetTop-r,behavior:"smooth"})}}},r6=async function(){try{let e=window.location.hash.replace("#","");if(!e)return;r1.classList.contains("hidden-initially")&&(r1.classList.remove("hidden-initially"),r2.classList.remove("initial-state")),rW.renderLoader(),rM.search.results.length>0&&rV.update(rT()),r0.update(rM.bookmarks),await rO(e),rW.render(rM.recipe),rW.addHandlerImageBlur(),r9(),r3()}catch(e){console.error(`\u{2620}\u{FE0F}${e}\u{2620}\u{FE0F}`),rW.renderError()}},r5=function(){rM.recipe.id&&rW.update(rM.recipe),rM.search.results.length>0&&rV.render(rT()),r0.render(rM.bookmarks)},r4=async function(){r1.classList.contains("hidden-initially")&&(r1.classList.remove("hidden-initially"),r2.classList.remove("initial-state")),r1.classList.remove("hidden"),r2.classList.remove("recipe-only"),rV.renderLoader();try{let e=rY.getQuery();if(!e)return rV.renderError("We couldn't process your search because no search term was entered. Please type something in the search bar and try again!");await rq(e),rV.render(rT()),rX.render(rM.search)}catch(e){console.error(`\u{2620}\u{FE0F}${e}\u{2620}\u{FE0F}`)}},r7=()=>{r1.classList.add("hidden-initially"),r2.classList.add("initial-state"),document.querySelector(".recipe").innerHTML=`
    <div class="welcome">
      <div class="welcome__hero">
        <div class="welcome__emoji-background">
          <span class="welcome__floating-emoji" style="--delay: 0s; --duration: 25s; --position: 15%;">\u{1F355}</span>
          <span class="welcome__floating-emoji" style="--delay: 5s; --duration: 30s; --position: 25%;">\u{1F957}</span>
          <span class="welcome__floating-emoji" style="--delay: 8s; --duration: 22s; --position: 60%;">\u{1F354}</span>
          <span class="welcome__floating-emoji" style="--delay: 12s; --duration: 28s; --position: 70%;">\u{1F35C}</span>
          <span class="welcome__floating-emoji" style="--delay: 18s; --duration: 23s; --position: 85%;">\u{1F370}</span>
          <span class="welcome__floating-emoji" style="--delay: 7s; --duration: 26s; --position: 35%;">\u{1F32E}</span>
          <span class="welcome__floating-emoji" style="--delay: 14s; --duration: 24s; --position: 50%;">\u{1F363}</span>
          <span class="welcome__floating-emoji welcome__floating-emoji--reverse" style="--delay: 4s; --duration: 32s; --position: 10%;">\u{1F96A}</span>
          <span class="welcome__floating-emoji welcome__floating-emoji--reverse" style="--delay: 10s; --duration: 28s; --position: 40%;">\u{1F35D}</span>
          <span class="welcome__floating-emoji welcome__floating-emoji--reverse" style="--delay: 16s; --duration: 36s; --position: 75%;">\u{1F372}</span>
          <span class="welcome__floating-emoji welcome__floating-emoji--reverse" style="--delay: 2s; --duration: 26s; --position: 90%;">\u{1F950}</span>
        </div>
        
        <div class="welcome__content-wrapper">
          <h1 class="welcome__title">Find Your <span class="welcome__highlight">Perfect</span> Recipe</h1>
          <div class="welcome__emoji-row">
            <div class="welcome__emoji-spotlight">
              <span class="welcome__spotlight-emoji">\u{1F373}</span>
            </div>
          </div>
          <p class="welcome__subtitle">Your culinary adventure starts with a simple search</p>
          
          <div class="welcome__search-hint">
            <div class="welcome__arrow-container">
              <div class="welcome__arrow">\u{2B06}\u{FE0F}</div>
            </div>
            <p>Start typing above to discover delicious dishes</p>
          </div>
        </div>
      </div>
      
      <div class="welcome__cards">
        <div class="welcome__card welcome__card--categories">
          <div class="welcome__card-header">
            <span class="welcome__card-emoji">\u{1F50D}</span>
            <h2>Popular Searches</h2>
          </div>
          <div class="welcome__tags">
            <button class="welcome__tag" data-search="pizza">\u{1F355} Pizza</button>
            <button class="welcome__tag" data-search="pasta">\u{1F35D} Pasta</button>
            <button class="welcome__tag" data-search="chicken">\u{1F357} Chicken</button>
            <button class="welcome__tag" data-search="vegetarian">\u{1F966} Vegetarian</button>
            <button class="welcome__tag" data-search="dessert">\u{1F370} Dessert</button>
            <button class="welcome__tag" data-search="burger">\u{1F354} Burger</button>
          </div>
        </div>
        
        <div class="welcome__features-container">
          <div class="welcome__card welcome__card--feature">
            <div class="welcome__card-header">
              <span class="welcome__card-emoji">\u{1F50E}</span>
              <h3>Search</h3>
            </div>
            <p>Find the perfect recipe by ingredient or dish name</p>
          </div>
          
          <div class="welcome__card welcome__card--feature">
            <div class="welcome__card-header">
              <span class="welcome__card-emoji">\u{2B50}</span>
              <h3>Save</h3>
            </div>
            <p>Bookmark your favorites for quick access later</p>
          </div>
          
          <div class="welcome__card welcome__card--feature">
            <div class="welcome__card-header">
              <span class="welcome__card-emoji">\u{1F37D}\u{FE0F}</span>
              <h3>Adjust</h3>
            </div>
            <p>Modify serving sizes with real-time ingredient updates</p>
          </div>
        </div>
      </div>
    </div>
  `,document.querySelectorAll(".welcome__tag").forEach(e=>{e.addEventListener("click",function(){let e=this.dataset.search;document.querySelector(".search__field").value=e,rY.getQuery=function(){return e},r4()})})};r7(),r0.render(rM.bookmarks),rG.init(),rW.addHandlerRender(r6),rW.addHandlerUpdateServings(function(e){rP(e),rW.update(rM.recipe)}),rW.addHandlerAddBookmark(function(){rM.recipe.bookmarked?rI(rM.recipe.id):rB(rM.recipe),r5()}),rV.addHandlerBookmark(function(e){let t=rM.search.results.find(t=>t.id===e);t&&(t.bookmarked?rI(e):rM.recipe.id!==e?rB({id:t.id,title:t.title,publisher:t.publisher,image:t.image,bookmarked:!0}):rB(rM.recipe),r5())}),r0.addHandlerDeleteAll(function(){rD(),r5()}),rY.addHandlerSearch(r4),rX.addHandlerClick(e=>{rV.render(rT(e)),rX.render(rM.search)}),document.querySelector(".header__logo").addEventListener("click",function(){history.pushState("",document.title,window.location.pathname+window.location.search),document.querySelector(".search__field").value="",rM.search.results=[],r7(),r0.render(rM.bookmarks)}),document.querySelector(".header__logo").style.cursor="pointer";
//# sourceMappingURL=App.2c3818d4.js.map
