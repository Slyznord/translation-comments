(function(t){function e(e){for(var r,a,i=e[0],s=e[1],u=e[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/translation-comments/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"flex flex-col md:container mx-auto px-6"},[n("h1",{staticClass:"text-3xl font-bold text-gray-700 mb-12 select-none"},[t._v("Список вопросов")]),n("div",{staticClass:"flex flex-row flex-wrap items-center justify-center w-full mx-auto mb-7"},t._l(t.sections,(function(e,r){return n("div",{key:r,class:["flex flex-row items-center justify-center md:w-auto w-full mb-4 md:mb-0 px-6 py-4 rounded-lg shadow-md md:mr-4 cursor-pointer bg-blue-200 hover:bg-blue-400 hover:text-white select-none font-semibold",t.activeTab.index===r?"bg-blue-400 text-white":"text-gray-800"],on:{click:function(e){return t.selectTab(r)}}},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"comment"},t._l(t.questions,(function(e,r){return n("div",{key:r,staticClass:"comment__item relative"},[n("h1",{staticClass:"comment__h1 break-all text-left w-11/12"},[t._v(t._s(e.username))]),n("p",{staticClass:"comment__p break-all text-left"},[t._v(t._s(e.comment))]),n("TrashIcon",{staticClass:"text-xl absolute right-4 top-4 cursor-pointer hover:text-red-700 transition duration-500",on:{click:function(e){return t.removeQuestion(r)}}})],1)})),0)])])},c=[],a=n("1da1"),i=(n("96cf"),n("b0c0"),n("b64b"),n("99af"),n("ddc6")),s=n("66ce"),u={name:"App",components:{TrashIcon:i["a"]},data:function(){return{result:null,activeTab:{index:null,name:null}}},computed:{questions:function(){return!!this.result&&this.result[this.activeTab.name]},sections:function(){return!!this.result&&Object.keys(this.result)}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Object(s["a"])(),r=Object(s["c"])(n),Object(s["b"])(r,(function(e){t.result=e.val(),t.activeTab={index:0,name:Object.keys(t.result)[0]}}));case 3:case"end":return e.stop()}}),e)})))()},methods:{selectTab:function(t){this.activeTab={name:this.sections[t],index:t}},removeQuestion:function(t){var e=Object(s["a"])();Object(s["d"])(Object(s["c"])(e,"".concat(this.activeTab.name,"/").concat(t)))}}},l=u,f=(n("5c0b"),n("2877")),p=Object(f["a"])(l,o,c,!1,null,null,null),b=p.exports,d={apiKey:Object({NODE_ENV:"production",BASE_URL:"/translation-comments/"}).VUE_FIREBASE_API_KEY,authDomain:"translation-bac1c.firebaseapp.com",projectId:"translation-bac1c",storageBucket:"translation-bac1c.appspot.com",messagingSenderId:Object({NODE_ENV:"production",BASE_URL:"/translation-comments/"}).VUE_FIREBASE_MESSAGE_ID,appId:Object({NODE_ENV:"production",BASE_URL:"/translation-comments/"}).VUE_FIREBASE_APP_ID},m=n("260b");r["a"].config.productionTip=!1,Object(m["a"])(d),new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.da5250dd.js.map