(function(t){function e(e){for(var r,c,s=e[0],i=e[1],u=e[2],f=0,p=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/translation-comments/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"flex flex-col md:container mx-auto px-6"},[n("h1",{staticClass:"text-3xl font-bold text-gray-700 mb-12 select-none"},[t._v("Список вопросов")]),n("div",{staticClass:"flex flex-row flex-wrap items-center justify-center w-full mx-auto mb-7"},t._l(t.sections,(function(e,r){return n("div",{key:r,class:["flex flex-row items-center justify-center md:w-auto w-full mb-4 md:mb-0 px-6 py-4 rounded-lg shadow-md md:mr-4 cursor-pointer bg-blue-200 hover:bg-blue-400 hover:text-white select-none font-semibold",t.activeTab.index===r?"bg-blue-400 text-white":"text-gray-800"],on:{click:function(e){return t.selectTab(r)}}},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"comment"},t._l(t.questions,(function(e,r){return n("div",{key:r,staticClass:"comment__item relative"},[n("span",{staticClass:"text-base font-semibold text-gray-600"},[t._v(t._s(e.date))]),n("h1",{staticClass:"comment__h1 break-all text-left w-11/12 mr-4 text-base"},[t._v(t._s(e.username))]),n("p",{staticClass:"comment__p break-all text-left"},[t._v(t._s(e.comment))]),n("TrashIcon",{staticClass:"text-xl absolute right-4 top-4 cursor-pointer hover:text-red-700 transition duration-500",on:{click:function(e){return t.removeQuestion(r)}}})],1)})),0)])])},a=[],c=n("1da1"),s=(n("96cf"),n("b0c0"),n("b64b"),n("99af"),n("ddc6")),i=n("66ce"),u={name:"App",components:{TrashIcon:s["a"]},data:function(){return{result:null,activeTab:{index:null,name:null}}},computed:{questions:function(){return!!this.result&&this.result[this.activeTab.name]},sections:function(){return!!this.result&&Object.keys(this.result)}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Object(i["a"])(),r=Object(i["c"])(n),Object(i["b"])(r,(function(e){t.result=e.val(),t.activeTab={index:0,name:Object.keys(t.result)[0]}}));case 3:case"end":return e.stop()}}),e)})))()},methods:{selectTab:function(t){this.activeTab={name:this.sections[t],index:t}},removeQuestion:function(t){var e=Object(i["a"])();Object(i["d"])(Object(i["c"])(e,"".concat(this.activeTab.name,"/").concat(t)))}}},l=u,f=(n("5c0b"),n("2877")),p=Object(f["a"])(l,o,a,!1,null,null,null),b=p.exports,d={apiKey:Object({NODE_ENV:"production",BASE_URL:"/translation-comments/"}).VUE_FIREBASE_API_KEY,authDomain:"translation-bac1c.firebaseapp.com",projectId:"translation-bac1c",storageBucket:"translation-bac1c.appspot.com",messagingSenderId:Object({NODE_ENV:"production",BASE_URL:"/translation-comments/"}).VUE_FIREBASE_MESSAGE_ID,appId:Object({NODE_ENV:"production",BASE_URL:"/translation-comments/"}).VUE_FIREBASE_APP_ID},m=n("260b");r["a"].config.productionTip=!1,Object(m["a"])(d),new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.a40ac06e.js.map