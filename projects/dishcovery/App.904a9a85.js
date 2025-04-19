var e,t,r,n,a,i,s,o,c,l,u,d,p,v,h,f,g=globalThis,m={},_={},b=function(e){return e&&e.Math===Math&&e};_=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof g&&g)||b("object"==typeof _&&_)||function(){return this}()||Function("return this")();var y={},w={};y=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var k={},S={};S=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var E=Function.prototype.call;k=S?E.bind(E):function(){return E.apply(E,arguments)};var $={}.propertyIsEnumerable,j=Object.getOwnPropertyDescriptor;r=j&&!$.call({1:2},1)?function(e){var t=j(this,e);return!!t&&t.enumerable}:$;var F={};F=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var L={},P={},M={},O=Function.prototype,q=O.call,T=S&&O.bind.bind(q,q),B={},I=(M=S?T:function(e){return function(){return q.apply(e,arguments)}})({}.toString),H=M("".slice);B=function(e){return H(I(e),8,-1)};var N=Object,D=M("".split);P=w(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===B(e)?D(e,""):N(e)}:N;var A={},C={};C=function(e){return null==e};var x=TypeError;A=function(e){if(C(e))throw new x("Can't call method on "+e);return e},L=function(e){return P(A(e))};var R={},z={},W={},U={},Y="object"==typeof document&&document.all;U=void 0===Y&&void 0!==Y?function(e){return"function"==typeof e||e===Y}:function(e){return"function"==typeof e},W=function(e){return"object"==typeof e?null!==e:U(e)};var Q={},V={};V=function(e,t){var r;return arguments.length<2?(r=_[e],U(r)?r:void 0):_[e]&&_[e][t]};var J={};J=M({}.isPrototypeOf);var G={},K={},X={},Z={},ee=_.navigator,et=ee&&ee.userAgent;Z=et?String(et):"";var er=_.process,en=_.Deno,ea=er&&er.versions||en&&en.version,ei=ea&&ea.v8;ei&&(a=(n=ei.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!a&&Z&&(!(n=Z.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=Z.match(/Chrome\/(\d+)/))&&(a=+n[1]),X=a;var es=_.String;G=(K=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!es(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eo=Object;Q=G?function(e){return"symbol"==typeof e}:function(e){var t=V("Symbol");return U(t)&&J(t.prototype,eo(e))};var ec={},el={},eu={},ed=String;eu=function(e){try{return ed(e)}catch(e){return"Object"}};var ep=TypeError;el=function(e){if(U(e))return e;throw new ep(eu(e)+" is not a function")},ec=function(e,t){var r=e[t];return C(r)?void 0:el(r)};var ev={},eh=TypeError;ev=function(e,t){var r,n;if("string"===t&&U(r=e.toString)&&!W(n=k(r,e))||U(r=e.valueOf)&&!W(n=k(r,e))||"string"!==t&&U(r=e.toString)&&!W(n=k(r,e)))return n;throw new eh("Can't convert object to primitive value")};var ef={},eg={},em={},e_={};e_=!1;var eb={},ey=Object.defineProperty;eb=function(e,t){try{ey(_,e,{value:t,configurable:!0,writable:!0})}catch(r){_[e]=t}return t};var ew="__core-js_shared__",ek=em=_[ew]||eb(ew,{});(ek.versions||(ek.versions=[])).push({version:"3.41.0",mode:e_?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eg=function(e,t){return em[e]||(em[e]=t||{})};var eS={},eE={},e$=Object;eE=function(e){return e$(A(e))};var ej=M({}.hasOwnProperty);eS=Object.hasOwn||function(e,t){return ej(eE(e),t)};var eF={},eL=0,eP=Math.random(),eM=M(1..toString);eF=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eM(++eL+eP,36)};var eO=_.Symbol,eq=eg("wks"),eT=G?eO.for||eO:eO&&eO.withoutSetter||eF,eB=TypeError,eI=(ef=function(e){return eS(eq,e)||(eq[e]=K&&eS(eO,e)?eO[e]:eT("Symbol."+e)),eq[e]})("toPrimitive");z=function(e,t){if(!W(e)||Q(e))return e;var r,n=ec(e,eI);if(n){if(void 0===t&&(t="default"),r=k(n,e,t),!W(r)||Q(r))return r;throw new eB("Can't convert object to primitive value")}return void 0===t&&(t="number"),ev(e,t)},R=function(e){var t=z(e,"string");return Q(t)?t:t+""};var eH={},eN={},eD=_.document,eA=W(eD)&&W(eD.createElement);eN=function(e){return eA?eD.createElement(e):{}},eH=!y&&!w(function(){return 7!==Object.defineProperty(eN("div"),"a",{get:function(){return 7}}).a});var eC=Object.getOwnPropertyDescriptor;t=y?eC:function(e,t){if(e=L(e),t=R(t),eH)try{return eC(e,t)}catch(e){}if(eS(e,t))return F(!k(r,e,t),e[t])};var ex={},eR={};eR=y&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ez={},eW=String,eU=TypeError;ez=function(e){if(W(e))return e;throw new eU(eW(e)+" is not an object")};var eY=TypeError,eQ=Object.defineProperty,eV=Object.getOwnPropertyDescriptor,eJ="enumerable",eG="configurable",eK="writable";i=y?eR?function(e,t,r){if(ez(e),t=R(t),ez(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eV(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eG in r?r[eG]:n[eG],enumerable:eJ in r?r[eJ]:n[eJ],writable:!1})}return eQ(e,t,r)}:eQ:function(e,t,r){if(ez(e),t=R(t),ez(r),eH)try{return eQ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eY("Accessors not supported");return"value"in r&&(e[t]=r.value),e},ex=y?function(e,t,r){return i(e,t,F(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0={},e1=Function.prototype,e2=y&&Object.getOwnPropertyDescriptor,e3=eS(e1,"name"),e9=e3&&(!y||y&&e2(e1,"name").configurable),e6={},e5=M(Function.toString);U(em.inspectSource)||(em.inspectSource=function(e){return e5(e)}),e6=em.inspectSource;var e4={},e7={},e8=_.WeakMap;e7=U(e8)&&/native code/.test(String(e8));var te={},tt=eg("keys");te=function(e){return tt[e]||(tt[e]=eF(e))};var tr={};tr={};var tn="Object already initialized",ta=_.TypeError,ti=_.WeakMap;if(e7||em.state){var ts=em.state||(em.state=new ti);ts.get=ts.get,ts.has=ts.has,ts.set=ts.set,s=function(e,t){if(ts.has(e))throw new ta(tn);return t.facade=e,ts.set(e,t),t},o=function(e){return ts.get(e)||{}},c=function(e){return ts.has(e)}}else{var to=te("state");tr[to]=!0,s=function(e,t){if(eS(e,to))throw new ta(tn);return t.facade=e,ex(e,to,t),t},o=function(e){return eS(e,to)?e[to]:{}},c=function(e){return eS(e,to)}}var tc=(e4={set:s,get:o,has:c,enforce:function(e){return c(e)?o(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!W(t)||(r=o(t)).type!==e)throw new ta("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e4.get,tu=String,td=Object.defineProperty,tp=M("".slice),tv=M("".replace),th=M([].join),tf=y&&!w(function(){return 8!==td(function(){},"length",{value:8}).length}),tg=String(String).split("String"),tm=eZ=function(e,t,r){"Symbol("===tp(tu(t),0,7)&&(t="["+tv(tu(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eS(e,"name")||e9&&e.name!==t)&&(y?td(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&eS(r,"arity")&&e.length!==r.arity&&td(e,"length",{value:r.arity});try{r&&eS(r,"constructor")&&r.constructor?y&&td(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tc(e);return eS(n,"source")||(n.source=th(tg,"string"==typeof t?t:"")),e};Function.prototype.toString=tm(function(){return U(this)&&tl(this).source||e6(this)},"toString"),eX=function(e,t,r,n){n||(n={});var a=n.enumerable,s=void 0!==n.name?n.name:t;if(U(r)&&eZ(r,s,n),n.global)a?e[t]=r:eb(t,r);else{try{n.unsafe?e[t]&&(a=!0):delete e[t]}catch(e){}a?e[t]=r:i(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t_={},tb={},ty={},tw={},tk={},tS={},tE={},t$=Math.ceil,tj=Math.floor;tE=Math.trunc||function(e){var t=+e;return(t>0?tj:t$)(t)},tS=function(e){var t=+e;return t!=t||0===t?0:tE(t)};var tF=Math.max,tL=Math.min;tk=function(e,t){var r=tS(e);return r<0?tF(r+t,0):tL(r,t)};var tP={},tM={},tO=Math.min;tM=function(e){var t=tS(e);return t>0?tO(t,0x1fffffffffffff):0},tP=function(e){return tM(e.length)};var tq=function(e){return function(t,r,n){var a,i=L(t),s=tP(i);if(0===s)return!e&&-1;var o=tk(n,s);if(e&&r!=r){for(;s>o;)if((a=i[o++])!=a)return!0}else for(;s>o;o++)if((e||o in i)&&i[o]===r)return e||o||0;return!e&&-1}},tT={includes:tq(!0),indexOf:tq(!1)}.indexOf,tB=M([].push);ty=function(e,t){var r,n=L(e),a=0,i=[];for(r in n)!eS(tr,r)&&eS(n,r)&&tB(i,r);for(;t.length>a;)eS(n,r=t[a++])&&(~tT(i,r)||tB(i,r));return i};var tI={},tH=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return ty(e,tH)},u=Object.getOwnPropertySymbols;var tN=M([].concat);tb=V("Reflect","ownKeys")||function(e){var t=l(ez(e));return u?tN(t,u(e)):t},t_=function(e,r,n){for(var a=tb(r),s=0;s<a.length;s++){var o=a[s];eS(e,o)||n&&eS(n,o)||i(e,o,t(r,o))}};var tD={},tA=/#|\.prototype\./,tC=function(e,t){var r=tR[tx(e)];return r===tW||r!==tz&&(U(t)?w(t):!!t)},tx=tC.normalize=function(e){return String(e).replace(tA,".").toLowerCase()},tR=tC.data={},tz=tC.NATIVE="N",tW=tC.POLYFILL="P";tD=tC,m=function(e,r){var n,a,i,s,o,c=e.target,l=e.global,u=e.stat;if(n=l?_:u?_[c]||eb(c,{}):_[c]&&_[c].prototype)for(a in r){if(s=r[a],i=e.dontCallGetSet?(o=t(n,a))&&o.value:n[a],!tD(l?a:c+(u?".":"#")+a,e.forced)&&void 0!==i){if(typeof s==typeof i)continue;t_(s,i)}(e.sham||i&&i.sham)&&ex(s,"sham",!0),eX(n,a,s,e)}};var tU={},tY=Function.prototype,tQ=tY.apply,tV=tY.call;tU="object"==typeof Reflect&&Reflect.apply||(S?tV.bind(tQ):function(){return tV.apply(tQ,arguments)});var tJ={};tJ=M([].slice);var tG=TypeError,tK=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw new tG("Bad Promise constructor");t=e,r=n}),this.resolve=el(t),this.reject=el(r)},tX={};tX=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}};var tZ=_.Promise,t0=!1;m({target:"Promise",stat:!0,forced:!tZ||!tZ.try||tX(function(){tZ.try(function(e){t0=8===e},8)}).error||!t0},{try:function(e){var t=arguments.length>1?tJ(arguments,1):[],r=new tK(this),n=tX(function(){return tU(el(e),void 0,t)});return(n.error?r.reject:r.resolve)(n.value),r.promise}});var t1={},t2={};t2=_,d=ef,t1=function(e){var t=t2.Symbol||(t2.Symbol={});eS(t,e)||i(t,e,{value:d(e)})};var t3=_.Symbol;if(t1("dispose"),t3){var t9=t(t3,"dispose");t9.enumerable&&t9.configurable&&t9.writable&&i(t3,"dispose",{value:t9.value,enumerable:!1,configurable:!1,writable:!1})}var t6={},t5={},t4={},t7=(t4=function(e){if("Function"===B(e))return M(e)})(t4.bind);t5=function(e,t){return el(e),void 0===t?e:S?t7(e,t):function(){return e.apply(t,arguments)}};var t8={};t8=V("document","documentElement");var re={},rt=TypeError;re=function(e,t){if(e<t)throw new rt("Not enough arguments");return e};var rr={};rr=/(?:ipad|iphone|ipod).*applewebkit/i.test(Z);var rn={},ra={},ri=function(e){return Z.slice(0,e.length)===e};rn="NODE"===(ra=ri("Bun/")?"BUN":ri("Cloudflare-Workers")?"CLOUDFLARE":ri("Deno/")?"DENO":ri("Node.js/")?"NODE":_.Bun&&"string"==typeof Bun.version?"BUN":_.Deno&&"object"==typeof Deno.version?"DENO":"process"===B(_.process)?"NODE":_.window&&_.document?"BROWSER":"REST");var rs=_.setImmediate,ro=_.clearImmediate,rc=_.process,rl=_.Dispatch,ru=_.Function,rd=_.MessageChannel,rp=_.String,rv=0,rh={},rf="onreadystatechange";w(function(){p=_.location});var rg=function(e){if(eS(rh,e)){var t=rh[e];delete rh[e],t()}},rm=function(e){return function(){rg(e)}},r_=function(e){rg(e.data)},rb=function(e){_.postMessage(rp(e),p.protocol+"//"+p.host)};rs&&ro||(rs=function(e){re(arguments.length,1);var t=U(e)?e:ru(e),r=tJ(arguments,1);return rh[++rv]=function(){tU(t,void 0,r)},v(rv),rv},ro=function(e){delete rh[e]},rn?v=function(e){rc.nextTick(rm(e))}:rl&&rl.now?v=function(e){rl.now(rm(e))}:rd&&!rr?(f=(h=new rd).port2,h.port1.onmessage=r_,v=t5(f.postMessage,f)):_.addEventListener&&U(_.postMessage)&&!_.importScripts&&p&&"file:"!==p.protocol&&!w(rb)?(v=rb,_.addEventListener("message",r_,!1)):v=rf in eN("script")?function(e){t8.appendChild(eN("script"))[rf]=function(){t8.removeChild(this),rg(e)}}:function(e){setTimeout(rm(e),0)});var ry=(t6={set:rs,clear:ro}).clear;m({global:!0,bind:!0,enumerable:!0,forced:_.clearImmediate!==ry},{clearImmediate:ry});var rw=t6.set,rk={},rS=_.Function,rE=/MSIE .\./.test(Z)||"BUN"===ra&&((e=_.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rk=function(e,t){var r=t?2:1;return rE?function(n,a){var i=re(arguments.length,1)>r,s=U(n)?n:rS(n),o=i?tJ(arguments,r):[],c=i?function(){tU(s,this,o)}:s;return t?e(c,a):e(c)}:e};var r$=_.setImmediate?rk(rw,!1):rw;m({global:!0,bind:!0,enumerable:!0,forced:_.setImmediate!==r$},{setImmediate:r$});const rj="https://forkify-api.jonas.io/api/v2/recipes/",rF=async e=>{try{let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw console.error(`\u{2620}\u{FE0F}${e}\u{2620}\u{FE0F}`),e}},rL={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},rP=async e=>{try{let{recipe:t}=(await rF(`${rj}${e}`)).data;rL.recipe={id:t.id,cookingTime:t.cooking_time,image:t.image_url,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,source:t.source_url,title:t.title},rL.bookmarks.some(t=>t.id===e)?rL.recipe.bookmarked=!0:rL.recipe.bookmarked=!1}catch(e){throw console.error(`\u{2620}\u{FE0F}${e}\u{2620}\u{FE0F}`),e}},rM=function(e){e<=0||(rL.recipe.ingredients.forEach(t=>{t.quantity&&(t.quantity=t.quantity*e/rL.recipe.servings)}),rL.recipe.servings=e)},rO=async e=>{try{rL.search.query=e,rL.search.page=1;let t=await rF(`${rj}?search=${e}`);rL.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,image:e.image_url,publisher:e.publisher,bookmarked:rL.bookmarks.some(t=>t.id===e.id)}))}catch(e){throw console.error(`\u{2620}\u{FE0F}${e}\u{2620}\u{FE0F}`),e}},rq=(e=rL.search.page)=>{rL.search.page=e;let t=(e-1)*rL.search.resultsPerPage,r=e*rL.search.resultsPerPage;return rL.search.results.slice(t,r)},rT=function(e){if(rL.bookmarks.push(e),e.id===rL.recipe.id&&(rL.recipe.bookmarked=!0),rL.search.results.length>0){let t=rL.search.results.find(t=>t.id===e.id);t&&(t.bookmarked=!0)}rH()},rB=function(e){let t=rL.bookmarks.findIndex(t=>t.id===e);if(-1!==t){if(rL.bookmarks.splice(t,1),e===rL.recipe.id&&(rL.recipe.bookmarked=!1),rL.search.results.length>0){let t=rL.search.results.find(t=>t.id===e);t&&(t.bookmarked=!1)}rH()}},rI=function(){rL.bookmarks=[],rL.recipe.id&&(rL.recipe.bookmarked=!1),rL.search.results.length>0&&rL.search.results.forEach(e=>{e.bookmarked=!1}),rH()},rH=function(){localStorage.setItem("bookmarks",JSON.stringify(rL.bookmarks))},rN=localStorage.getItem("bookmarks");rN&&(rL.bookmarks=JSON.parse(rN));class rD{_data;_getSvgPath(){return"icons.svg"}_clear(){this._parentElement.innerHTML=""}render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{if(t>=n.length)return;let r=n[t];e.nodeName===r.nodeName&&(e.isEqualNode(r)||e.firstChild?.nodeValue?.trim()===""||e.firstChild?.nodeType!==Node.TEXT_NODE||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.getAttribute(e.name)!==e.value&&r.setAttribute(e.name,e.value)}))})}renderLoader(){let e=`
      <div class="loader">
        <span></span><span></span><span></span>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderMessage(e=this._successMessage){let t=`
    <div class="message">
    <div>
    <svg>
    <use href="${this._getSvgPath()}#icon-smile"></use>
    </svg>
    </div>
    <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(e=this._errorMessage){let t=`
    <div class="error">
    <div>
    <svg>
    <use href="${this._getSvgPath()}#icon-alert-triangle"></use>
    </svg>
    </div>
    <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rA={};function rC(e,t,r,n,a){var i,s,o,c;let l=[2,3,5];if(!0===a)for(let t=3;t*t<=e;t+=2)e%t==0&&l.push(t);let u=0,d=e,p=t;for(;u<=l.length;)d%l[u]==0&&p%l[u]==0?(l[u],d/=l[u],p/=l[u]):u++;return i=p,s=d,o=r,c=n,1===i&&1===s?(o=`${c}${(parseInt(o)+1).toString()}`,`${o}`):0===s?`${c}${o}`:"0"==o?`${c}${s}/${i}`:`${c}${o} ${s}/${i}`}rA=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),a=n.split("."),i=a[0];if("0"==r&&"0"!==i)return i;if("0"==r&&"0"==i)return"0";if("99"==(r=n.length>=17?a[1].slice(0,a[1].length-1):a[1])&&"0"!==i)return`${i} 99/100`;if("99"==r&&"0"==i)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return i;let s=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!s||!(r.length>2)){var o,c,l;return o=r,c=i,l=t,rC(parseInt(o,10),Math.pow(10,o.length),c,l,!1)}{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,a){let i=e.length-r.length>=1?e.length-r.length:1,s=Math.pow(10,i),o=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rC(Math.round((o*c-o)*Math.pow(10,i)),(c-1)*s,n,a,!0)}(r,n,e,i,t)}};class rx extends rD{_parentElement=document.querySelector(".recipe");_errorMessage=`Oops! That recipe doesn\u{2019}t exist. Try a different one!`;_successMessage="";_generateMarkup(){let e=this._getSvgPath();return`
    <figure class="recipe__fig">
<img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
<h1 class="recipe__title">
  <span>${this._data.title}</span>
</h1>
</figure>

<div class="recipe__details">
<div class="recipe__info">
  <svg class="recipe__info-icon">
    <use href="${e}#icon-clock"></use>
  </svg>
  <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
  <span class="recipe__info-text">minutes</span>
</div>
<div class="recipe__info">
  <svg class="recipe__info-icon">
    <use href="${e}#icon-users"></use>
  </svg>
  <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
  <span class="recipe__info-text">servings</span>

  <div class="recipe__info-buttons">
    <button class="btn--tiny btn--decrease-servings" data-update-to="${this._data.servings-1}">
      <svg>
        <use href="${e}#icon-minus-circle"></use>
      </svg>
    </button>
    <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings+1}">
      <svg>
        <use href="${e}#icon-plus-circle"></use>
      </svg>
    </button>
  </div>
</div>

<div class="recipe__user-buttons">
  <button class="btn--round btn--bookmark">
    <svg class="">
      <use href="${e}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
    <use href="${e}#icon-arrow-right"></use>
  </svg>
</a>
</div>
    `}_generateMarkupIngredient(e,t){var r;let n=this._getSvgPath();return e+`<li class="recipe__ingredient">
                    <svg class="recipe__icon">
                    <use href="${n}#icon-check"></use>
                    </svg>
                      <div class="recipe__quantity">${t.quantity?((r=rA)&&r.__esModule?r.default:r)(t.quantity):""}</div>
                      <div class="recipe__description">
                        <span class="recipe__unit">${t.unit}</span>
                        ${t.description}
                      </div>
                  </li>`}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--increase-servings, .btn--decrease-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}addHandlerImageBlur(){this._parentElement.addEventListener("click",e=>{let t=e.target.closest(".recipe__img");t&&(t.classList.toggle("no-blur"),e.stopPropagation())}),document.addEventListener("click",e=>{let t=this._parentElement.querySelector(".recipe__img"),r=!e.target.closest(".recipe")&&!e.target.closest(".search-results")&&!e.target.closest(".header");t&&!r&&t.classList.contains("no-blur")&&t.classList.remove("no-blur")})}}var rR=new rx;class rz{_parentElement=document.querySelector(".search");_searchField=document.querySelector(".search__field");_clearInput(){this._searchField.value=""}getQuery(){let e=this._searchField.value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e()})}}var rW=new rz;class rU extends rD{_parentElement=document.querySelector(".results");_errorMessage="No results found for your query. Please try again with a different keyword.";_successMessage="";_generateMarkup(){return this._data.reduce(this._generateMarkupPreview.bind(this),"")}_generateMarkupPreview(e,t){let r=window.location.hash.slice(1),n=this._getSvgPath();return e+`<li class="preview ${t.bookmarked?"preview--bookmarked":""}">
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
              <use href="${n}#icon-bookmark${t.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </a>
      </li>`}addHandlerBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".preview__bookmark-btn");r&&(t.preventDefault(),e(r.closest(".preview").querySelector(".preview__link").getAttribute("href").slice(1)))})}}var rY=new rU;class rQ{_hamburgerBtn=document.querySelector(".hamburger");_nav=document.querySelector(".nav");_navOverlay=document.querySelector(".nav-overlay");_bookmarksBtn=document.querySelector(".nav__btn--bookmarks");_addHandlerMobileMenu(){this._hamburgerBtn.addEventListener("click",()=>{this._nav.classList.toggle("nav-open"),this._navOverlay.classList.toggle("active"),this._hamburgerBtn.classList.toggle("active"),document.body.classList.toggle("nav-open")}),this._navOverlay.addEventListener("click",()=>{this._nav.classList.remove("nav-open"),this._navOverlay.classList.remove("active"),this._hamburgerBtn.classList.remove("active"),document.body.classList.remove("nav-open"),document.querySelector(".bookmarks").classList.remove("bookmarks-visible")})}_addHandlerCloseOnClick(){this._nav.addEventListener("click",e=>{e.target.closest(".nav__btn")&&window.innerWidth<=600&&(this._nav.classList.remove("nav-open"),this._navOverlay.classList.remove("active"),this._hamburgerBtn.classList.remove("active"),document.body.classList.remove("nav-open"))})}_addHandlerBookmarksOnMobile(){let e=document.querySelector(".bookmarks");this._bookmarksBtn.addEventListener("click",function(t){window.innerWidth<=600&&(t.preventDefault(),t.stopPropagation(),e.classList.toggle("bookmarks-visible"))}),this._nav.addEventListener("click",function(t){window.innerWidth<=600&&!t.target.closest(".nav__btn--bookmarks")&&!t.target.closest(".bookmarks")&&e.classList.contains("bookmarks-visible")&&e.classList.remove("bookmarks-visible")})}init(){this._addHandlerMobileMenu(),this._addHandlerCloseOnClick(),this._addHandlerBookmarksOnMobile()}}var rV=new rQ;class rJ extends rD{_parentElement=document.querySelector(".pagination");_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <div class="pagination__placeholder"></div>
        ${this._createNextButton(e)}
      `:e===t&&t>1?`
        ${this._createPrevButton(e)}
        <div class="pagination__placeholder"></div>
      `:e<t?`
      ${this._createPrevButton(e)}
      ${this._createNextButton(e)}
      `:""}_createPrevButton(e){let t=this._getSvgPath();return`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev pagination__btn">
        <svg class="search__icon">
          <use href="${t}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>
    `}_createNextButton(e){let t=this._getSvgPath();return`
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next pagination__btn">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
          <use href="${t}#icon-arrow-right"></use>
        </svg>
      </button>
    `}addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}}var rG=new rJ;class rK extends rD{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a recipe you love and bookmark it!";_successMessage="";addHandlerDeleteAll(e){document.querySelector(".nav").addEventListener("click",function(t){t.target.closest(".btn--delete-all")&&e()})}_generateMarkup(){let e=this._getSvgPath();return this._data.length?this._data.reduce(this._generateMarkupPreview.bind(this),"")+`<div class="bookmarks__delete-all">
          <button class="btn btn--small btn--delete-all">Delete All Bookmarks</button>
        </div>`:`<div class="message">
          <div>
            <svg>
              <use href="${e}#icon-smile"></use>
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
      </li>`}}var rX=new rK;const rZ=document.querySelector(".search-results"),r0=document.querySelector(".container"),r1=function(){0===rL.search.results.length&&window.location.hash?(rZ.classList.add("hidden"),r0.classList.add("recipe-only")):(rZ.classList.remove("hidden"),r0.classList.remove("recipe-only"))},r2=function(){if(window.innerWidth<=600){let e=document.querySelector(".recipe"),t=document.querySelector(".header");if(e&&t){let r=t.offsetHeight;window.scrollTo({top:e.offsetTop-r,behavior:"smooth"})}}},r3=async function(){try{let e=window.location.hash.replace("#","");if(!e)return;rZ.classList.contains("hidden-initially")&&(rZ.classList.remove("hidden-initially"),r0.classList.remove("initial-state")),rR.renderLoader(),rL.search.results.length>0&&rY.update(rq()),rX.update(rL.bookmarks),await rP(e),rR.render(rL.recipe),rR.addHandlerImageBlur(),r2(),r1()}catch(e){console.error(`\u{2620}\u{FE0F}${e}\u{2620}\u{FE0F}`),rR.renderError()}},r9=function(){rL.recipe.id&&rR.update(rL.recipe),rL.search.results.length>0&&rY.render(rq()),rX.render(rL.bookmarks)},r6=async function(){rZ.classList.contains("hidden-initially")&&(rZ.classList.remove("hidden-initially"),r0.classList.remove("initial-state")),rZ.classList.remove("hidden"),r0.classList.remove("recipe-only"),rY.renderLoader();try{let e=rW.getQuery();if(!e)return rY.renderError("We couldn't process your search because no search term was entered. Please type something in the search bar and try again!");await rO(e),rY.render(rq()),rG.render(rL.search)}catch(e){console.error(`\u{2620}\u{FE0F}${e}\u{2620}\u{FE0F}`)}},r5=()=>{rZ.classList.add("hidden-initially"),r0.classList.add("initial-state"),document.querySelector(".recipe").innerHTML=`
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
  `,document.querySelectorAll(".welcome__tag").forEach(e=>{e.addEventListener("click",function(){let e=this.dataset.search;document.querySelector(".search__field").value=e,rW.getQuery=function(){return e},r6()})})};r5(),rX.render(rL.bookmarks),rV.init(),rR.addHandlerRender(r3),rR.addHandlerUpdateServings(function(e){rM(e),rR.update(rL.recipe)}),rR.addHandlerAddBookmark(function(){rL.recipe.bookmarked?rB(rL.recipe.id):rT(rL.recipe),r9()}),rY.addHandlerBookmark(function(e){let t=rL.search.results.find(t=>t.id===e);t&&(t.bookmarked?rB(e):rL.recipe.id!==e?rT({id:t.id,title:t.title,publisher:t.publisher,image:t.image,bookmarked:!0}):rT(rL.recipe),r9())}),rX.addHandlerDeleteAll(function(){rI(),r9()}),rW.addHandlerSearch(r6),rG.addHandlerClick(e=>{rY.render(rq(e)),rG.render(rL.search)}),document.querySelector(".header__logo").addEventListener("click",function(){history.pushState("",document.title,window.location.pathname+window.location.search),document.querySelector(".search__field").value="",rL.search.results=[],r5(),rX.render(rL.bookmarks)}),document.querySelector(".header__logo").style.cursor="pointer";
//# sourceMappingURL=App.904a9a85.js.map
