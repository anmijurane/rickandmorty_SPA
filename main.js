!function(n){var e={};function a(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=e,a.d=function(n,e,r){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)a.d(r,t,function(e){return n[e]}.bind(null,t));return r},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=0)}([function(n,e,a){"use strict";a.r(e);var r=()=>'\n    <div class="Header-main">\n      <div class="Header-logo">\n        <h1>\n          <a href="/rickandmorty_SPA/">Rick and Morty</a>\n        </h1>\n      </div>\n\n      <div class="Header-nav">\n      <a href="#/about/">\n        About\n      </a></div>\n    </div>\n  ';const t="https://rickandmortyapi.com/api/character/";var i=async n=>{const e=n?`${t}${n}`:t;console.log(e);try{const n=await fetch(e);return n.json()}catch(n){console.log("Ups, algo paso. Fetch error: "+n)}};var o=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var c=async()=>{const n=await o(),e=await i(""+n);var a=await function(n){if(n){var e=n.charAt(n.length-2),a=n.charAt(n.length-1),r="="===e?0:e;console.log(`Pag --\x3e ${r}${a}`);var t=parseInt(`${r}${a}`,10)-1;return console.log("getPag --\x3e "+t),t}return console.log("else --\x3e 34"),34}(e.info.next);return`\n    <div class="Characters">\n      ${e.results.map(n=>`\n        <article class="Characters--item">\n          <a href="#/${n.id}/" >\n            <img src="${n.image}" alt="${n.name}"/>\n            <div class="item__info">\n              <h2 class="nameCharacter"> ${n.name} </h2>\n              <h3 class="nameCharacter">${n.species}</h3>\n            </div>\n          </a>\n        </article>\n      `).join("")}\n    </div>\n      <div class="containerBtn">\n      <label class=${a<=1?"disable":""}>\n      <a href=${"/rickandmorty_SPA/#/?page="+(a-1)+"/"} id="btn-next" class="containerBtn--btn"> LAST </a>\n    </label>\n\n        <label class=${a-2==0||a-2==-1?"disable":""}>\n        <a href=${"/rickandmorty_SPA/#/?page="+(2==a?"1":a-2)+"/"}>${2==a?".":a-2}</a>\n        </label>\n\n        <label class=${a-1==0?"disable":""}>\n        <a href=${"/rickandmorty_SPA/#/?page="+(1==a?"1":a-1)+"/"}>${1==a?".":a-1}</a>\n        </label>\n\n        <label>\n          <a href="" id="pagActually">${a}</a>\n        </label>\n\n        <label class=${a+1==35||a+1==36?"disable":""}>\n          <a href=${"/rickandmorty_SPA/#/?page="+(a+1)+"/"} >${a+1}</a>\n        </label>\n\n        <label class=${a+2==35||a+2==36?"disable":""}>\n          <a href=${"/rickandmorty_SPA/#/?page="+(a+2)+"/"}>${a+2}</a>\n        </label>\n\n        <label class=${a>=34?"disable":""}>\n          <a href=${"/rickandmorty_SPA/#/?page="+(a+1)+"/"} id="btn-next" class="containerBtn--btn"> NEXT </a>\n        </label>\n    </div>\n   `};var l=()=>'\n    <div class="Error404">\n      <h2> UPS, ERROR 404</h2>\n      <br/>\n      <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt=""/>\n    </div>\n  ';var s=n=>{if("about"!=n){if("/"===n)return n;if(n.length<=3)return"/:id";if(n.includes("page"))return"/:pages"}return console.log("se fue por route: "+n),"/"+n};var d=()=>'\n    <footer class="footer">\n      <span>By Andres Jurado </span>\n      <div className="footer--recursos">\n        <ul>\n          <li><a href="https://rickandmortyapi.com/">API Rick and Morty</a></li>\n          <li><a href="https://github.com/anmijurane/rickandmorty_SPA"> Repositorio GITHUB </a></li>\n        </ul>\n      </div>\n    </footer>\n  ';const u={"/":c,"/:id":async()=>{const n=o(),e=await i(n);return`\n    <div class="Characters-inner">\n      <article class="Characters-card img-profile">\n        <img src="${e.image}" alt="${e.name}">\n        <h2>${e.name}</h2>\n      </article>\n\n      <article class="Characters-card">\n        <h3>Episodes: ${e.episode.length} </h3>\n        <h3>Status: ${e.status}</h3>\n        <h3>Species: ${e.species}</h3>\n        <h3>Gender: ${e.gender}</h3>\n        <h3>Origin: ${e.origin.name}</h3>\n        <h3>Last Location: ${e.location.name}</h3>\n      </article>\n    </div>\n  `},"/contact":"Contact","/:pages":c};var h=async()=>{const n=document.getElementById("header"),e=document.getElementById("content"),a=document.getElementById("footer");n.innerHTML=await r();let t=o(),i=await s(t),c=u[i]?u[i]:l;e.innerHTML=await c(),a.innerHTML=await d()};window.addEventListener("load",h),window.addEventListener("hashchange",h)}]);