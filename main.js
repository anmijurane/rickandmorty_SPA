!function(n){var e={};function a(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=n,a.c=e,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=0)}([function(n,e,a){"use strict";a.r(e);var t=()=>'\n    <div className="Header-main">\n      <div className="Header-logo">\n        <h1>\n          <a href="/">100TIFICOS</a>\n        </h1>\n      </div>\n\n      <div className="Header-nav">\n      <a href="#/about/">\n        About\n      </a></div>\n    </div>\n  ';const r="https://rickandmortyapi.com/api/character/";var i=async n=>{const e=n?`${r}${n}`:r;try{const n=await fetch(e);return n.json()}catch(n){console.log("Ups, algo paso. Fetch error: "+n)}};var c=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var o=()=>'\n    <div className="Error404">\n      <h2> UPS ERROR 404</h2>\n    </div>\n  ';var s=n=>{if(n.length<=3){return"/"===n?n:"/:id"}return"/"+n};const l={"/":async()=>`\n    <div class="Characters">\n      ${(await i()).results.map(n=>`\n        <article class="Characters--item">\n          <a href="#/${n.id}/" class="">\n            <img src="${n.image}" alt="${n.name}"/>\n            <h2 class="nameCharacter"> ${n.name} </h2>\n          </a>\n        </article>\n      `).join("")}\n    </div>\n   `,"/:id":async()=>{const n=c(),e=await i(n);return`\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="${e.image}" alt="${e.name}">\n        <h2>${e.name}</h2>\n      </article>\n      <article class="Characters-card">\n        <h3>Episodes: <span> ${e.episode.length} </span> </h3>\n        <h3>Status: ${e.status}</h3>\n        <h3>Species: ${e.species}</h3>\n        <h3>Gender: ${e.gender}</h3>\n        <h3>Origin: ${e.origin.name}</h3>\n        <h3>Last Location: ${e.location.name}</h3>\n      </article>\n    </div>\n  `},"/contact":"Contact"};var d=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await t();let a=c(),r=await s(a),i=l[r]?l[r]:o;e.innerHTML=await i()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);