(function(t){function e(e){for(var a,c,o=e[0],r=e[1],d=e[2],h=0,u=[];h<o.length;h++)c=o[h],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&u.push(s[c][0]),s[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);l&&l(e);while(u.length)u.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},i=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/TheF2E_week02/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"185b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),s={class:"Window"},i=Object(a["d"])("section",{class:"Background"},null,-1),c={class:"Contenet"},o=Object(a["d"])("div",{class:"BG_space"},null,-1),r={class:"Bf_Contenet"},d={class:"Contenet_page"};function l(t,e,n,l,h,u){var v=Object(a["h"])("navbar"),b=Object(a["h"])("find-station-page"),f=Object(a["h"])("Footer");return Object(a["g"])(),Object(a["c"])(a["a"],null,[Object(a["d"])("div",s,[i,Object(a["d"])("section",c,[o,Object(a["d"])("div",r,[Object(a["f"])(v),Object(a["d"])("div",d,[Object(a["f"])(b)])])])]),Object(a["f"])(f)],64)}var h=n("a5f2"),u={class:"FindStaion_Page"},v=Object(a["d"])("div",{class:"FindStaion_cover"},null,-1),b={class:"FindStaion_bar"},f=Object(a["d"])("div",{class:"FindStaion_map",id:"FindStaion_map"},null,-1);function p(t,e,n,s,i,c){var o=Object(a["h"])("find-staion-list");return Object(a["g"])(),Object(a["c"])("section",u,[v,Object(a["d"])("div",b,[Object(a["f"])(o)]),f])}var O={class:"FindStaion_list"},j=Object(a["e"])('<div class="Staion_list_title"><h3>站點列表</h3></div><div class="FindStaion_listWarp"><div class="Staion_list"><h3>捷運松山站 (3號出口)</h3><h4 class="safe_station">正常營運</h4></div><div class="Staion_list"><h3>敦北公園</h3><h4 class="danger_station">正常營運</h4></div><div class="Staion_list"><h3>西松高中</h3><h4 class="stop_station">正常營運</h4></div><div class="Staion_list"><h3>捷運松山站 (3號出口)</h3><h4 class="safe_station">正常營運</h4></div><div class="Staion_list"><h3>敦北公園</h3><h4 class="danger_station">正常營運</h4></div><div class="Staion_list"><h3>西松高中</h3><h4 class="stop_station">正常營運</h4></div><div class="Staion_list"><h3>捷運松山站 (3號出口)</h3><h4 class="safe_station">正常營運</h4></div><div class="Staion_list"><h3>敦北公園</h3><h4 class="danger_station">正常營運</h4></div><div class="Staion_list"><h3>西松高中</h3><h4 class="stop_station">正常營運</h4></div><div class="Staion_list"><h3>捷運松山站 (3號出口)</h3><h4 class="safe_station">正常營運</h4></div><div class="Staion_list"><h3>敦北公園</h3><h4 class="danger_station">正常營運</h4></div><div class="Staion_list"><h3>西松高中</h3><h4 class="stop_station">正常營運</h4></div></div>',2),_=[j];function g(t,e){return Object(a["g"])(),Object(a["c"])("div",O,_)}var m=n("6b0d"),S=n.n(m);const y={},w=S()(y,[["render",g]]);var F=w,T={components:{"find-staion-list":F}};const x=S()(T,[["render",p]]);var P=x;function M(){var t="2d9b9a569dab44dfbf33035ed2846ac6",e="0Ly8nNY_Mw4fL3dcFmKXx4y1mZo",n=(new Date).toGMTString(),a=new h["default"]("SHA-1","TEXT");a.setHMACKey(e,"TEXT"),a.update("x-date: "+n);var s=a.getHMAC("B64"),i='hmac username="'+t+'", algorithm="hmac-sha1", headers="x-date", signature="'+s+'"';return{Authorization:i,"X-Date":n}}var k={components:{"find-station-page":P},data:function(){return{TPXData:[]}},methods:{getdata:function(){var t=this,e=30,n="https://ptx.transportdata.tw/MOTC/v2/Bike/Station/Taichung?$top=".concat(e,"&$format=JSON");console.log(n),this.axios.get(n,{headers:M()}).then((function(e){t.TPXData=e.data,console.log(t.TPXData)}))}}};n("bbd1");const B=S()(k,[["render",l]]);var X=B,C=n("db48"),D=n.n(C),A={class:"Navbar"},I=Object(a["d"])("div",{class:"Navbar_warp"},[Object(a["d"])("div",{class:"navLogo"},[Object(a["d"])("img",{src:D.a,alt:""}),Object(a["d"])("h5",{class:"animate__animated animate__bounce"}," Bike Fun！自行車旅遊網 ")]),Object(a["d"])("div",{class:"navItemWarp"},[Object(a["d"])("div",{class:"navItem"},[Object(a["d"])("h4",null,"最新消息")]),Object(a["d"])("div",{class:"navItem"},[Object(a["d"])("h4",null,"探索路線")]),Object(a["d"])("div",{class:"navItem"},[Object(a["d"])("h4",null,"尋找站點")]),Object(a["d"])("div",{class:"navItem"},[Object(a["d"])("h4",null,"常見問題")])])],-1),E=[I];function J(t,e){return Object(a["g"])(),Object(a["c"])("div",A,E)}const N={},W=S()(N,[["render",J]]);var H=W,L={class:"footer"},$=Object(a["d"])("h5",null,"BikeFun © 2021 Designer Vum. Engineer JamesW. All rights reserved.",-1),G=[$];function K(t,e){return Object(a["g"])(),Object(a["c"])("section",L,G)}const z={},V=S()(z,[["render",K]]);var Y=V,Z=(n("77ed"),n("725c"),n("5e34"),n("8206")),q=n.n(Z),Q=n("130e"),R=(n("f9e3"),n("2dd8"),n("1157")),U=n.n(R);window.$=U.a;var tt=n("a5f2"),et=Object(a["b"])(X);et.component("navbar",H),et.component("Footer",Y),et.use(Q["a"],q.a),et.use(tt),et.mount("#app")},bbd1:function(t,e,n){"use strict";n("185b")},db48:function(t,e,n){t.exports=n.p+"img/logo_yellow.72c123fd.png"}});
//# sourceMappingURL=app.902f47a4.js.map