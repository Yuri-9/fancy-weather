!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};t(3)(o,r);o.locals&&(e.exports=o.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".wrapper_img {\n  width: 100%;\n  max-width: 1440px;\n  height: 100vh;\n  margin: 0 auto;\n  font-family: 'Montserrat';\n  background-size: cover;\n  background-position: center center;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  text-shadow: black 0 0 2px;\n}\n\n.wrapper {\n  margin: 0px 3em 0 3em;\n  padding-top: 2em;\n}\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.controls--btn {\n  display: block;\n  position: relative;\n  height: 3.2em;\n  width: 3.2em;\n  background: #b4b8bb;\n  border-radius: 5px;\n  cursor: pointer;\n  text-align: center;\n  line-height: 3.2em;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\n\n.controls--en, .controls--temp-C {\n  margin-left: 5px;\n}\n\n.controls .select {\n  background: #66849c;\n}\n\n.controls--img {\n  position: absolute;\n  top: 12px;\n  left: 15px;\n}\n\n.search {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 5px;\n  position: relative;\n}\n\n.search--alert {\n  position: absolute;\n  display: none;\n  font-size: 0.8em;\n  font-family: Arial;\n  color: #d62f2f;\n}\n\n.search--item {\n  height: 3.4em;\n  width: 100%;\n  max-width: 240px;\n  background: rgba(236, 228, 226, 0.6);\n  border: 1px solid rgba(228, 227, 227, 0.2);\n}\n\n.search--btn {\n  display: block;\n  height: 3.2em;\n  width: 9.3em;\n  background: #b4b8bb;\n  text-align: center;\n  line-height: 3.2em;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  cursor: pointer;\n}\n\n.search--btn:hover {\n  background: #66849c;\n}\n\n.main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.weather {\n  margin-top: 50px;\n  width: 38em;\n}\n\n.weather_today {\n  width: auto;\n  color: #FFFFFF;\n  font-weight: bold;\n  font-size: 1.5em;\n}\n\n.weather_today--place {\n  font-style: normal;\n  font-size: 2em;\n  line-height: 54px;\n  text-transform: uppercase;\n}\n\n.weather_today--date {\n  font-style: normal;\n  line-height: 29px;\n}\n\n.weather_today--icon-container {\n  display: inline-block;\n  height: 5em;\n  width: 7em;\n  position: relative;\n  overflow: hidden;\n}\n\n.weather_today--icon-container .icon {\n  width: 10em;\n  margin: auto;\n  position: absolute;\n  top: -60px;\n  right: -35px;\n}\n\n.weather_today--temp {\n  font-size: 7em;\n  float: left;\n  font-weight: bold;\n  margin: 0.1em 0 0 0.1em;\n}\n\n.weather_today--info {\n  line-height: 1.5em;\n  display: table;\n  margin: auto;\n}\n\n.weather_today .item {\n  line-height: 1.5em;\n}\n\n.weather_3day {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n}\n\n.weather_3day--item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border: 1px solid black;\n  color: #FFFFFF;\n  font-weight: bold;\n  font-size: 1.5em;\n}\n\n.weather_3day--temp {\n  font-size: 2em;\n  float: left;\n  font-weight: bold;\n  margin: 0.1em 0 0 0.2em;\n}\n\n.weather_3day--icon-container {\n  display: inline-block;\n  height: 2em;\n  width: 2.8em;\n  position: relative;\n  overflow: hidden;\n}\n\n.weather_3day .icon {\n  width: 4em;\n  margin: auto;\n  position: absolute;\n  top: -26px;\n  right: -14px;\n}\n\n.map {\n  -ms-flex-negative: 2;\n      flex-shrink: 2;\n  margin-top: 50px;\n  width: 100%;\n  max-width: 500px;\n}\n\n.map--item {\n  width: 100%;\n  height: 31em;\n}\n\n.map--coord {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  text-align: right;\n  color: white;\n}\n\n@media (max-width: 900px) {\n  .wrapper_img {\n    height: 100%;\n  }\n  .wrapper {\n    margin: 0 0 0 0;\n  }\n  .main {\n    display: block;\n  }\n  .weather {\n    margin-top: 50px;\n    margin: 0 auto;\n    width: auto;\n    max-width: 36em;\n  }\n  .map {\n    margin: 0 auto;\n    width: auto;\n    width: 100%;\n    max-width: 36em;\n  }\n}\n\n@media (max-width: 550px) {\n  .header {\n    display: block;\n  }\n  .weather_3day--item {\n    font-size: 1em;\n  }\n}",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var i,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var i=0;i<e.length;i++){var s=e[i];null!=s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),n.push(s))}},n}},function(e,n,t){"use strict";var o,r={},a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function s(e,n){for(var t=[],o={},r=0;r<e.length;r++){var a=e[r],i=n.base?a[0]+n.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(s):t.push(o[i]={id:i,parts:[s]})}return t}function c(e,n){for(var t=0;t<e.length;t++){var o=e[t],a=r[o.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(y(o.parts[i],n))}else{for(var s=[];i<o.parts.length;i++)s.push(y(o.parts[i],n));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var o=t.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function p(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=u(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function m(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function y(e,n){var t,o,r;if(n.singleton){var a=h++;t=f||(f=l(n)),o=p.bind(null,t,a,!1),r=p.bind(null,t,a,!0)}else t=l(n),o=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=s(e,n);return c(t,n),function(e){for(var o=[],a=0;a<t.length;a++){var i=t[a],l=r[i.id];l&&(l.refs--,o.push(l))}e&&c(s(e,n),n);for(var d=0;d<o.length;d++){var u=o[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete r[u.id]}}}}},function(e,n,t){"use strict";t.r(n);async function o(e,n){const t=await function(e){const n=document.querySelector(".controls--en").classList.contains("select")?"en":"ru",t=document.querySelector(".controls--temp_C").classList.contains("select")?"Metric":"Imperial";return fetch(`https://api.openweathermap.org/data/2.5/forecast?${e}&lang=${n}&units=${t}&APPID=24120eb4d8c2dc0f04ddddd17bf5214a`).then(e=>e.json())}(`lat=${e}&lon=${n}`),{description:o,icon:r,main:a}=t.list[0].weather[0],{temp:i,humidity:s,pressure:c,feels_like:l}=t.list[0].main,{speed:d}=t.list[0].wind,{pod:u}=t.list[0].sys,p={description:o,icon:r,temp:i,humidity:s,pressure:c,feelsLike:l,speed:d,timeOfDay:"d"===u?"day":"night",main:a},m=t.list.findIndex(e=>e.dt_txt.includes("00:00:00"))+4-Math.round(t.city.timezone/3600/3),f=[];for(let e=0;e<3;e++)f[e]=t.list[m+8*e];return p.next3Data=f,p}function r(e,n,t){return fetch(`https://api.unsplash.com/photos/random?query= ${e}+${n}+${t}&client_id=7b76a47280b1e328889c12e58cfac9f74a7b39257fe1b4d8a8a4ddb681e74211`).then(e=>{if(200===e.status)return e.json();console.log("Number of requests image exceeded")})}let a,i={};async function s(e,n,t){e?(i={timeOfYear:e,timeOfDay:n,main:t},a=await r(e,n,t)):a=await r(i.timeOfYear,i.timeOfDay,i.main);const o=document.querySelector(".wrapper_img");o.style.backgroundImage=a?`url(${a.urls.small})`:"url(https://images.unsplash.com/photo-1482542319871-7200a336e779?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEwMTYzNX0)"}t.p;t(0);var c=function(e){const n=document.querySelector(".controls--en").classList.contains("select")?"en":"ru",t=new Date;t.setSeconds(t.getSeconds()+e+60*t.getTimezoneOffset());const o={};let r;o.day=t.toLocaleString(n,{weekday:"short"}),o.date=t.getDate(),o.month=t.toLocaleString(n,{month:"long"}),o.hours=`0${t.getHours()}`.slice(-2),o.minutes=`0${t.getMinutes()}`.slice(-2),t.getMonth(),r=["winter","summer"],o.timeOfYear=r,o.dayNext=[];for(let e=0;e<3;e++)t.setDate(t.getDate()+1),o.dayNext[e]=t.toLocaleString(n,{weekday:"long"});return o};function l(e){return`${Math.trunc(+e)}°${Math.trunc(60*(+e-Math.trunc(+e)))}'`}const d={feelsLike:"Feels like",humidity:"Humidity",wind:"Wind",pressure:"Pressure",latitude:"Latitude",longitude:"Longitude",search:"Search",searchAlert:"No such city"},u={feelsLike:"Ощущается",humidity:"Влажность",wind:"Ветер",pressure:"Давление",latitude:"Широта",longitude:"Долгота",search:"Поиск",searchAlert:"Нет такого города"};var p=function(e,n,t){const o=document.querySelector(".controls--en").classList.contains("select")?d:u,r=`\n    <p class="weather_today--place">${t.city}, ${t.country}</p>\n    <p class="weather_today--date"> ${n.day} ${n.date} ${n.month}    ${n.hours}:${n.minutes}</p>\n    <p class="weather_today--temp">${Math.round(e.temp)}</p>\n    <div class="weather_today--icon-container">\n      <img class="icon" src="https://openweathermap.org/img/wn/${e.icon}@2x.png">\n    </div>\n    <div class="weather_today--info">\n    <p>${e.description.toUpperCase()}</p>\n    <p>${o.feelsLike}: ${Math.round(e.feelsLike)}</p>\n    <p>${o.humidity}: ${e.humidity} %</p>\n    <p>${o.wind}: ${Math.round(e.speed)} m/s</p>\n    <p>${o.pressure}: ${Math.round(e.pressure)} mm</p>\n    </div>\n    `,a=document.querySelector(".weather_today");for(;a.firstChild;)a.removeChild(a.firstChild);document.querySelector(".weather_today").insertAdjacentHTML("beforeend",r);let i="";for(let t=0;t<3;t++)i+=`\n    <div class="weather_3day--item">\n    <p>${n.dayNext[t]}</p>\n    <p class="weather_3day--temp">${Math.round(e.next3Data[t].main.temp)}</p>\n    <div class="weather_3day--icon-container">\n      <img class="icon" src="https://openweathermap.org/img/wn/${e.next3Data[t].weather[0].icon}@2x.png">\n    </div>\n  </div>`;const s=document.querySelector(".weather_3day");for(;s.firstChild;)s.removeChild(s.firstChild);document.querySelector(".weather_3day").insertAdjacentHTML("beforeend",i),document.querySelector(".map--latitude").innerText=`${o.latitude}: ${l(t.lat)}`,document.querySelector(".map--longitude").innerText=`${o.longitude}: ${l(t.lng)}`,document.querySelector(".search--btn").innerText=`${o.search}`,document.querySelector(".search--alert").innerText=`${o.searchAlert}`};async function m(e){const n=await function(e){const n=document.querySelector(".controls--en").classList.contains("select")?"en":"ru";return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${e}&key=44b11e6afc0642b3aff01b4b2a080437&language=${n}`).then(e=>e.json())}(e);if(0===n.results.length)return;const{lat:t,lng:o}=n.results[0].geometry,{offset_sec:r}=n.results[0].annotations.timezone,{city:a,state:i,country:s,county:c}=n.results[0].components;return{lat:t,lng:o,offsetSec:r,city:a||c||i||" ",country:s}}document.querySelector("body").insertAdjacentHTML("afterbegin",'\n  <div class="wrapper_img">\n  <div class="wrapper">\n    <div class="header">\n      <ul class="controls">\n        <li class="controls--btn controls--refresh">\n          <img class="controls--img" src="./43639d0c29ed561c5b83730525a42182.png" alt="">\n        </li>\n        <li class="controls--btn controls--en lang">\n          EN\n        </li>\n        <li class="controls--btn controls--ru lang">\n          RU\n        </li>\n        <li class="controls--btn controls--temp_C temp">\n        &degC\n        </li>\n        <li class="controls--btn controls--temp_F temp">\n        &degF\n        </li>\n      </ul>\n      <form action="#" class="search">\n      <p class="search--alert"></p>\n        <input type="search" id="search" placeholder="Search city" class="search--item"/>\n        <label for="search" class="search--btn">SEARCH</label>\n      </form>\n    </div>\n    <div class="main">\n      <div class="weather">\n        <div class="weather_today">\n        </div>\n        <div class="weather_3day">\n        </div>\n      </div>\n      <div class="map">\n        <div class="map--item" id = "map"></div>\n        <p class="map--coord map--latitude">\n            Latitude:\n        </p>\n        <p class="map--coord map--longitude">\n            Longitude:\n        </p>\n      </div>\n    </div>\n  </div>\n  </div>\n');let f,h,y={};async function g(){const e=document.querySelector("#search").value;if(""===e)return;const n=await m(e);if(!n){return void(document.querySelector(".search--alert").style.display="block")}f=n.city;const t=c(n.offsetSec);!async function(e,n,t){e.flyTo({center:[t,n],zoom:11})}(y,n.lat,n.lng);const r=await o(n.lat,n.lng,n.offsetSec);p(r,t,n),s(n.lat>0?t.timeOfYear[0]:t.timeOfYear[1],r.timeOfDay,r.main),h=n.offsetSec}function b(e,n){document.querySelectorAll(n).forEach(e=>e.classList.remove("select")),e.target.classList.add("select")}"ru"===localStorage.getItem("lang")?document.querySelector(".controls--ru").classList.add("select"):document.querySelector(".controls--en").classList.add("select"),"F"===localStorage.getItem("temp")?document.querySelector(".controls--temp_F").classList.add("select"):document.querySelector(".controls--temp_C").classList.add("select"),async function(){const e=await fetch("https://ipinfo.io/json?token=1513b741ca8484").then(e=>e.json()),{loc:n,city:t,country:r}=e,a=n.split(","),i={lat:a[0],lng:a[1],city:t,country:r},l=60*(new Date).getTimezoneOffset(),d=c(-l),u=await o(i.lat,i.lng);var m,g;p(u,d,i),m=i.lng,g=i.lat,mapboxgl.accessToken="pk.eyJ1IjoieXVyaS05IiwiYSI6ImNrM3ZqM3d5aDA3OWMzZW9veDh0ZGN3MzYifQ.xxTlBOPgGA9r2UIxaHgSmg",y=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[m,g],zoom:11}),s(i.lat>0?d.timeOfYear[0]:d.timeOfYear[1],u.timeOfDay,u.main),f=i.city,h=-l}(),document.querySelector(".search--btn").addEventListener("click",()=>{g()}),document.addEventListener("keydown",e=>{"Enter"!==e.code&&"NumpadEnter"!==e.code||g()}),document.querySelector(".controls--refresh").addEventListener("mousedown",()=>{s(),document.querySelector(".controls--refresh").classList.add("select")}),document.querySelector(".controls--refresh").addEventListener("mouseup",()=>{document.querySelector(".controls--refresh").classList.remove("select")}),document.querySelector(".controls").addEventListener("mousedown",e=>{e.target.classList.contains("temp")&&!e.target.classList.contains("select")?(b(e,".temp"),function(e){let n=document.querySelector(".weather_today--temp").innerText;n=e.target.className.includes("F")?Math.round(1.8*n+32):Math.round((n-32)/1.8),document.querySelector(".weather_today--temp").innerText=n;for(let t=0;t<3;t++)n=document.querySelectorAll(".weather_3day--temp")[t].innerText,n=e.target.className.includes("F")?Math.round(1.8*n+32):Math.round((n-32)/1.8),document.querySelectorAll(".weather_3day--temp")[t].innerText=n}(e)):e.target.classList.contains("lang")&&(b(e,".lang"),async function(){const e=await m(f),n=c(e.offsetSec),t=await o(e.lat,e.lng,e.offsetSec);p(t,n,e)}())}),window.addEventListener("unload",()=>{const e=document.querySelector(".controls--en").classList.contains("select")?"en":"ru";localStorage.setItem("lang",e);const n=document.querySelector(".controls--temp_C").classList.contains("select")?"C":"F";localStorage.setItem("temp",n)}),setInterval((function(){if(document.querySelector(".weather_today--date")){const e=c(h);document.querySelector(".weather_today--date").innerText=`${e.day} ${e.date} ${e.month}    ${e.hours}:${e.minutes}`}}),3e4),document.querySelector(".search--item").addEventListener("mousedown",()=>{document.querySelector(".search--alert").style.display="none"}),document.addEventListener("keydown",()=>{document.querySelector(".search--alert").style.display="none"})}]);
//# sourceMappingURL=app.bundle.js.map