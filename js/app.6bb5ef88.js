(function(t){function e(e){for(var r,a,u=e[0],i=e[1],s=e[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},c={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var p=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"headline"},[t._v("Список вопросов")]),t.commentsArray?n("div",{staticClass:"comment"},t._l(t.commentsArray,(function(e,r){return n("div",{key:r,staticClass:"comment__item"},[n("h1",{staticClass:"comment__h1"},[t._v(t._s(e.username))]),n("p",{staticClass:"comment__p"},[t._v(t._s(e.comment))])])})),0):t._e()])},o=[],a=n("1da1"),u=(n("96cf"),n("07ac"),n("66ce")),i={name:"App",data:function(){return{comments:null}},computed:{commentsArray:function(){return!!this.comments&&Object.values(this.comments)}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Object(u["a"])(),r=Object(u["c"])(n),Object(u["b"])(r,(function(e){t.comments=e.val()}));case 3:case"end":return e.stop()}}),e)})))()}},s=i,p=(n("5c0b"),n("2877")),l=Object(p["a"])(s,c,o,!1,null,null,null),f=l.exports,m={apiKey:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_FIREBASE_API_KEY,authDomain:"translation-bac1c.firebaseapp.com",projectId:"translation-bac1c",storageBucket:"translation-bac1c.appspot.com",messagingSenderId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_FIREBASE_MESSAGE_ID,appId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_FIREBASE_APP_ID},d=n("260b");r["a"].config.productionTip=!1,Object(d["a"])(m),new r["a"]({render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.6bb5ef88.js.map