(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"0366":function(t,e,n){var r=n("59ed");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("a04b"),c=n("1a2d"),l=n("0cfb"),u=Object.getOwnPropertyDescriptor;e.f=r?u:function(t,e){if(t=s(t),e=a(e),l)try{return u(t,e)}catch(n){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e){t.exports=function(t){try{return String(t)}catch(e){return"Object"}}},1626:function(t,e){t.exports=function(t){return"function"===typeof t}},"19aa":function(t,e){t.exports=function(t,e,n){if(t instanceof e)return t;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},"1a2d":function(t,e,n){var r=n("7b0b"),i={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return i.call(r(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(l){return void n(l)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)}))}}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return _})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return F})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return P})),n.d(e,"i",(function(){return v})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return D})),n.d(e,"l",(function(){return $})),n.d(e,"m",(function(){return W})),n.d(e,"n",(function(){return N})),n.d(e,"o",(function(){return j})),n.d(e,"p",(function(){return g})),n.d(e,"q",(function(){return b})),n.d(e,"r",(function(){return y})),n.d(e,"s",(function(){return I})),n.d(e,"t",(function(){return O})),n.d(e,"u",(function(){return R})),n.d(e,"v",(function(){return M})),n.d(e,"w",(function(){return A})),n.d(e,"x",(function(){return U})),n.d(e,"y",(function(){return q})),n.d(e,"z",(function(){return k}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(t,e){if(!t)throw o(e)},o=function(t){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},s=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},a=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,l=e>>2,u=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const l=i<t.length,u=l?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==u)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==u){const t=c<<6&192|u;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},l=function(t){const e=s(t);return c.encodeByteArray(e,!0)},u=function(t){return l(t).replace(/\./g,"")},h=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(t){return f(void 0,t)}function f(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&p(n)&&(t[n]=f(t[n],e[n]));return t}function p(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[u(JSON.stringify(n)),u(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function g(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class C extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=w,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?T(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new C(r,s,n);return a}}function T(t,e){return t.replace(x,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){return JSON.parse(t)}function k(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=O(h(o[0])||""),n=O(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:e,claims:n,data:r,signature:i}},I=function(t){const e=S(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},N=function(t){const e=S(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function A(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function j(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function R(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function D(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(L(n)&&L(o)){if(!D(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let u=0;u<16;u++)n[u]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let u=0;u<16;u++)n[u]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let u=16;u<80;u++){const t=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(t<<1|t>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):u<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const t=(o<<5|o>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<e){if(0===o)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<e)if(i[o]=t[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[r]>>e&255,++n;return t}}function $(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);if(o>=55296&&o<=56319){const e=o-55296;r++,i(r<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(r)-56320;o=65536+(e<<10)+n}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=63&o|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=63&o|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=63&o|128)}return e},U=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("825a"),i=n("e95a"),o=n("07fa"),s=n("0366"),a=n("9a1f"),c=n("35a1"),l=n("2a62"),u=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var h,d,f,p,_,v,m,g=n&&n.that,y=!(!n||!n.AS_ENTRIES),b=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),C=s(e,g,1+y+w),E=function(t){return h&&l(h,"normal",t),new u(!0,t)},T=function(t){return y?(r(t),w?C(t[0],t[1],E):C(t[0],t[1])):w?C(t,E):C(t)};if(b)h=t;else{if(d=c(t),!d)throw TypeError(String(t)+" is not iterable");if(i(d)){for(f=0,p=o(t);p>f;f++)if(_=T(t[f]),_&&_ instanceof u)return _;return new u(!1)}h=a(t,d)}v=h.next;while(!(m=v.call(h)).done){try{_=T(m.value)}catch(x){l(h,"throw",x)}if("object"==typeof _&&_&&_ instanceof u)return _}return new u(!1)}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),l=n("94ca");t.exports=function(t,e){var n,u,h,d,f,p,_=t.target,v=t.global,m=t.stat;if(u=v?r:m?r[_]||a(_,{}):(r[_]||{}).prototype,u)for(h in e){if(f=e[h],t.noTargetGet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(v?h:_+(m?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&o(f,"sham",!0),s(u,h,f,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"260b":function(t,e,n){"use strict";var r=n("5606");n.d(e,"a",(function(){return r["e"]}));var i="firebase",o="9.1.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(i,o,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},"2a62":function(t,e,n){var r=n("825a"),i=n("dc4a");t.exports=function(t,e,n){var o,s;r(t);try{if(o=i(t,"return"),!o){if("throw"===e)throw n;return n}o=o.call(t)}catch(a){s=!0,o=a}if("throw"===e)throw n;if(s)throw o;return r(o),n}},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function s(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function u(t){return"[object Object]"===l.call(t)}function h(t){return"[object RegExp]"===l.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function _(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var m=v("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var y=Object.prototype.hasOwnProperty;function b(t,e){return y.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var C=/-(\w)/g,E=w((function(t){return t.replace(C,(function(t,e){return e?e.toUpperCase():""}))})),T=w((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),x=/\B([A-Z])/g,O=w((function(t){return t.replace(x,"-$1").toLowerCase()}));function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function S(t,e){return t.bind(e)}var I=Function.prototype.bind?S:k;function N(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function A(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function j(t,e,n){}var R=function(t,e,n){return!1},D=function(t){return t};function L(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return L(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return L(t[n],e[n])}))}catch(l){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if(L(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var $="data-server-rendered",q=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],W={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:R,isReservedAttr:R,isUnknownElement:R,getTagNamespace:j,parsePlatformTagName:D,mustUseProp:R,async:!0,_lifecycleHooks:U},z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function V(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var B=new RegExp("[^"+z.source+".$_\\d]");function G(t){if(!B.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Y,K="__proto__"in{},Q="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=X&&WXEnvironment.platform.toLowerCase(),Z=Q&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,rt=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===J),it=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),ot={}.watch,st=!1;if(Q)try{var at={};Object.defineProperty(at,"passive",{get:function(){st=!0}}),window.addEventListener("test-passive",null,at)}catch(Ts){}var ct=function(){return void 0===Y&&(Y=!Q&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),Y},lt=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ut(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&ut(Symbol)&&"undefined"!==typeof Reflect&&ut(Reflect.ownKeys);ht="undefined"!==typeof Set&&ut(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=j,pt=0,_t=function(){this.id=pt++,this.subs=[]};_t.prototype.addSub=function(t){this.subs.push(t)},_t.prototype.removeSub=function(t){g(this.subs,t)},_t.prototype.depend=function(){_t.target&&_t.target.addDep(this)},_t.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},_t.target=null;var vt=[];function mt(t){vt.push(t),_t.target=t}function gt(){vt.pop(),_t.target=vt[vt.length-1]}var yt=function(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},bt={child:{configurable:!0}};bt.child.get=function(){return this.componentInstance},Object.defineProperties(yt.prototype,bt);var wt=function(t){void 0===t&&(t="");var e=new yt;return e.text=t,e.isComment=!0,e};function Ct(t){return new yt(void 0,void 0,void 0,String(t))}function Et(t){var e=new yt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Tt=Array.prototype,xt=Object.create(Tt),Ot=["push","pop","shift","unshift","splice","sort","reverse"];Ot.forEach((function(t){var e=Tt[t];V(xt,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var kt=Object.getOwnPropertyNames(xt),St=!0;function It(t){St=t}var Nt=function(t){this.value=t,this.dep=new _t,this.vmCount=0,V(t,"__ob__",this),Array.isArray(t)?(K?Pt(t,xt):At(t,xt,kt),this.observeArray(t)):this.walk(t)};function Pt(t,e){t.__proto__=e}function At(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];V(t,o,e[o])}}function jt(t,e){var n;if(c(t)&&!(t instanceof yt))return b(t,"__ob__")&&t.__ob__ instanceof Nt?n=t.__ob__:St&&!ct()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Nt(t)),e&&n&&n.vmCount++,n}function Rt(t,e,n,r,i){var o=new _t,s=Object.getOwnPropertyDescriptor(t,e);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=t[e]);var l=!i&&jt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return _t.target&&(o.depend(),l&&(l.dep.depend(),Array.isArray(e)&&Mt(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,l=!i&&jt(e),o.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Rt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Lt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Mt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Mt(e)}Nt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Rt(t,e[n])},Nt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)jt(t[e])};var Ft=W.optionMergeStrategies;function $t(t,e){if(!e)return t;for(var n,r,i,o=dt?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=t[n],i=e[n],b(t,n)?r!==i&&u(r)&&u(i)&&$t(r,i):Dt(t,n,i));return t}function qt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?$t(r,i):i}:e?t?function(){return $t("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Ut(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Wt(n):n}function Wt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function zt(t,e,n,r){var i=Object.create(t||null);return e?P(i,e):i}Ft.data=function(t,e,n){return n?qt(t,e,n):e&&"function"!==typeof e?t:qt(t,e)},U.forEach((function(t){Ft[t]=Ut})),q.forEach((function(t){Ft[t+"s"]=zt})),Ft.watch=function(t,e,n,r){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in P(i,t),e){var s=i[o],a=e[o];s&&!Array.isArray(s)&&(s=[s]),i[o]=s?s.concat(a):Array.isArray(a)?a:[a]}return i},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return P(i,t),e&&P(i,e),i},Ft.provide=qt;var Ht=function(t,e){return void 0===e?t:e};function Vt(t,e){var n=t.props;if(n){var r,i,o,s={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=E(i),s[o]={type:null})}else if(u(n))for(var a in n)i=n[a],o=E(a),s[o]=u(i)?i:{type:i};else 0;t.props=s}}function Bt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(u(n))for(var o in n){var s=n[o];r[o]=u(s)?P({from:o},s):{from:s}}else 0}}function Gt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Yt(t,e,n){if("function"===typeof e&&(e=e.options),Vt(e,n),Bt(e,n),Gt(e),!e._base&&(e.extends&&(t=Yt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Yt(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)b(t,o)||a(o);function a(r){var i=Ft[r]||Ht;s[r]=i(t[r],e[r],n,r)}return s}function Kt(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var o=E(n);if(b(i,o))return i[o];var s=T(o);if(b(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Qt(t,e,n,r){var i=e[t],o=!b(n,t),s=n[t],a=ee(Boolean,i.type);if(a>-1)if(o&&!b(i,"default"))s=!1;else if(""===s||s===O(t)){var c=ee(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Xt(r,i,t);var l=St;It(!0),jt(s),It(l)}return s}function Xt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Zt(e.type)?r.call(t):r}}var Jt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Jt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){mt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Ts){ie(Ts,r,"errorCaptured hook")}}}ie(t,e,n)}finally{gt()}}function re(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&f(o)&&!o._handled&&(o.catch((function(t){return ne(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Ts){ne(Ts,r,i)}return o}function ie(t,e,n){if(W.errorHandler)try{return W.errorHandler.call(null,t,e,n)}catch(Ts){Ts!==t&&oe(Ts,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!Q&&!X||"undefined"===typeof console)throw t;console.error(t)}var se,ae=!1,ce=[],le=!1;function ue(){le=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ut(Promise)){var he=Promise.resolve();se=function(){he.then(ue),rt&&setTimeout(j)},ae=!0}else if(tt||"undefined"===typeof MutationObserver||!ut(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())se="undefined"!==typeof setImmediate&&ut(setImmediate)?function(){setImmediate(ue)}:function(){setTimeout(ue,0)};else{var de=1,fe=new MutationObserver(ue),pe=document.createTextNode(String(de));fe.observe(pe,{characterData:!0}),se=function(){de=(de+1)%2,pe.data=String(de)},ae=!0}function _e(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(Ts){ne(Ts,e,"nextTick")}else n&&n(e)})),le||(le=!0,se()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ve=new ht;function me(t){ge(t,ve),ve.clear()}function ge(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof yt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)ge(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)ge(t[r[n]],e)}}}var ye=w((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function be(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return re(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)re(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function we(t,e,n,i,s,a){var c,l,u,h;for(c in t)l=t[c],u=e[c],h=ye(c),r(l)||(r(u)?(r(l.fns)&&(l=t[c]=be(l,a)),o(h.once)&&(l=t[c]=s(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,t[c]=u));for(c in e)r(t[c])&&(h=ye(c),i(h.name,e[c],h.capture))}function Ce(t,e,n){var s;t instanceof yt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),g(s.fns,c)}r(a)?s=be([c]):i(a.fns)&&o(a.merged)?(s=a,s.fns.push(c)):s=be([a,c]),s.merged=!0,t[e]=s}function Ee(t,e,n){var o=e.options.props;if(!r(o)){var s={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var l in o){var u=O(l);Te(s,c,l,u,!0)||Te(s,a,l,u,!1)}return s}}function Te(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function xe(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Oe(t){return a(t)?[Ct(t)]:Array.isArray(t)?Se(t):void 0}function ke(t){return i(t)&&i(t.text)&&s(t.isComment)}function Se(t,e){var n,s,c,l,u=[];for(n=0;n<t.length;n++)s=t[n],r(s)||"boolean"===typeof s||(c=u.length-1,l=u[c],Array.isArray(s)?s.length>0&&(s=Se(s,(e||"")+"_"+n),ke(s[0])&&ke(l)&&(u[c]=Ct(l.text+s[0].text),s.shift()),u.push.apply(u,s)):a(s)?ke(l)?u[c]=Ct(l.text+s):""!==s&&u.push(Ct(s)):ke(s)&&ke(l)?u[c]=Ct(l.text+s.text):(o(t._isVList)&&i(s.tag)&&r(s.key)&&i(e)&&(s.key="__vlist"+e+"_"+n+"__"),u.push(s)));return u}function Ie(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ne(t){var e=Pe(t.$options.inject,t);e&&(It(!1),Object.keys(e).forEach((function(n){Rt(t,n,e[n])})),It(!0))}function Pe(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from,a=e;while(a){if(a._provided&&b(a._provided,s)){n[o]=a._provided[s];break}a=a.$parent}if(!a)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function Ae(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var l in n)n[l].every(je)&&delete n[l];return n}function je(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Re(t){return t.isComment&&t.asyncFactory}function De(t,e,r){var i,o=Object.keys(e).length>0,s=t?!!t.$stable:!o,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&r&&r!==n&&a===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Le(e,c,t[c]))}else i={};for(var l in e)l in i||(i[l]=Me(e,l));return t&&Object.isExtensible(t)&&(t._normalized=i),V(i,"$stable",s),V(i,"$key",a),V(i,"$hasNormal",o),i}function Le(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Oe(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Re(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Me(t,e){return function(){return t[e]}}function Fe(t,e){var n,r,o,s,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(dt&&t[Symbol.iterator]){n=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)n.push(e(u.value,n.length)),u=l.next()}else for(s=Object.keys(t),n=new Array(s.length),r=0,o=s.length;r<o;r++)a=s[r],n[r]=e(t[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function $e(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=P(P({},r),n)),i=o(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function qe(t){return Kt(this.$options,"filters",t,!0)||D}function Ue(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function We(t,e,n,r,i){var o=W.keyCodes[e]||n;return i&&r&&!W.keyCodes[e]?Ue(i,r):o?Ue(o,t):r?O(r)!==e:void 0===t}function ze(t,e,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=A(n));var s=function(s){if("class"===s||"style"===s||m(s))o=t;else{var a=t.attrs&&t.attrs.type;o=r||W.mustUseProp(e,a,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=E(s),l=O(s);if(!(c in o)&&!(l in o)&&(o[s]=n[s],i)){var u=t.on||(t.on={});u["update:"+s]=function(t){n[s]=t}}};for(var a in n)s(a)}else;return t}function He(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Be(r,"__static__"+t,!1)),r}function Ve(t,e,n){return Be(t,"__once__"+e+(n?"_"+n:""),!0),t}function Be(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ge(t[r],e+"_"+r,n);else Ge(t,e,n)}function Ge(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ye(t,e){if(e)if(u(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Ke(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Ke(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Qe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Xe(t,e){return"string"===typeof t?e+t:t}function Je(t){t._o=Ve,t._n=_,t._s=p,t._l=Fe,t._t=$e,t._q=L,t._i=M,t._m=He,t._f=qe,t._k=We,t._b=ze,t._v=Ct,t._e=wt,t._u=Ke,t._g=Ye,t._d=Qe,t._p=Xe}function Ze(t,e,r,i,s){var a,c=this,l=s.options;b(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var u=o(l._compiled),h=!u;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Pe(l.inject,i),this.slots=function(){return c.$slots||De(t.scopedSlots,c.$slots=Ae(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return De(t.scopedSlots,this.slots())}}),u&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=De(t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var o=fn(a,t,e,n,r,h);return o&&!Array.isArray(o)&&(o.fnScopeId=l._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return fn(a,t,e,n,r,h)}}function tn(t,e,r,o,s){var a=t.options,c={},l=a.props;if(i(l))for(var u in l)c[u]=Qt(u,l,e||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var h=new Ze(r,c,s,o,t),d=a.render.call(null,h._c,h);if(d instanceof yt)return en(d,r,h.parent,a,h);if(Array.isArray(d)){for(var f=Oe(d)||[],p=new Array(f.length),_=0;_<f.length;_++)p[_]=en(f[_],r,h.parent,a,h);return p}}function en(t,e,n,r,i){var o=Et(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function nn(t,e){for(var n in e)t[E(n)]=e[n]}Je(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var r=t.componentInstance=an(t,Pn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Ln(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,qn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):Fn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$n(e,!0):e.$destroy())}},on=Object.keys(rn);function sn(t,e,n,s,a){if(!r(t)){var l=n.$options._base;if(c(t)&&(t=l.extend(t)),"function"===typeof t){var u;if(r(t.cid)&&(u=t,t=En(u,l),void 0===t))return Cn(u,e,n,s,a);e=e||{},Cr(t),i(e.model)&&un(t.options,e);var h=Ee(e,t,a);if(o(t.options.functional))return tn(t,h,e,n,s);var d=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}cn(e);var p=t.options.name||a,_=new yt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:s},u);return _}}}function an(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var r=on[n],i=e[r],o=rn[r];i===o||i&&i._merged||(e[r]=i?ln(o,i):o)}}function ln(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function un(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),s=o[r],a=e.model.callback;i(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(o[r]=[a].concat(s)):o[r]=a}var hn=1,dn=2;function fn(t,e,n,r,i,s){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),o(s)&&(i=dn),pn(t,e,n,r,i)}function pn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return wt();if(i(n)&&i(n.is)&&(e=n.is),!e)return wt();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===dn?r=Oe(r):o===hn&&(r=xe(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||W.getTagNamespace(e),s=W.isReservedTag(e)?new yt(W.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Kt(t.$options,"components",e))?new yt(e,n,r,void 0,void 0,t):sn(c,n,t,r,e)):s=sn(e,n,t,r);return Array.isArray(s)?s:i(s)?(i(a)&&_n(s,a),i(n)&&vn(n),s):wt()}function _n(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var s=0,a=t.children.length;s<a;s++){var c=t.children[s];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&_n(c,e,n)}}function vn(t){c(t.style)&&me(t.style),c(t.class)&&me(t.class)}function mn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Ae(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return fn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return fn(t,e,n,r,i,!0)};var o=r&&r.data;Rt(t,"$attrs",o&&o.attrs||n,null,!0),Rt(t,"$listeners",e._parentListeners||n,null,!0)}var gn,yn=null;function bn(t){Je(t.prototype),t.prototype.$nextTick=function(t){return _e(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=De(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{yn=e,t=r.call(e._renderProxy,e.$createElement)}catch(Ts){ne(Ts,e,"render"),t=e._vnode}finally{yn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof yt||(t=wt()),t.parent=i,t}}function wn(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function Cn(t,e,n,r,i){var o=wt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function En(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=yn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var s=t.owners=[n],a=!0,l=null,u=null;n.$on("hook:destroyed",(function(){return g(s,n)}));var h=function(t){for(var e=0,n=s.length;e<n;e++)s[e].$forceUpdate();t&&(s.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},d=F((function(n){t.resolved=wn(n,e),a?s.length=0:h(!0)})),p=F((function(e){i(t.errorComp)&&(t.error=!0,h(!0))})),_=t(d,p);return c(_)&&(f(_)?r(t.resolved)&&_.then(d,p):f(_.component)&&(_.component.then(d,p),i(_.error)&&(t.errorComp=wn(_.error,e)),i(_.loading)&&(t.loadingComp=wn(_.loading,e),0===_.delay?t.loading=!0:l=setTimeout((function(){l=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),_.delay||200)),i(_.timeout)&&(u=setTimeout((function(){u=null,r(t.resolved)&&p(null)}),_.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function Tn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||Re(n)))return n}}function xn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&In(t,e)}function On(t,e){gn.$on(t,e)}function kn(t,e){gn.$off(t,e)}function Sn(t,e){var n=gn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function In(t,e,n){gn=t,we(e,n||{},On,kn,Sn,t),gn=void 0}function Nn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;var a=s.length;while(a--)if(o=s[a],o===e||o.fn===e){s.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?N(n):n;for(var r=N(arguments,1),i='event handler for "'+t+'"',o=0,s=n.length;o<s;o++)re(n[o],e,r,e,i)}return e}}var Pn=null;function An(t){var e=Pn;return Pn=t,function(){Pn=e}}function jn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Rn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=An(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){qn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),qn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Dn(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=wt),qn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new rr(t,r,j,{before:function(){t._isMounted&&!t._isDestroyed&&qn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,qn(t,"mounted")),t}function Ln(t,e,r,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),l=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){It(!1);for(var u=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;u[f]=Qt(f,p,e,t)}It(!0),t.$options.propsData=e}r=r||n;var _=t.$options._parentListeners;t.$options._parentListeners=r,In(t,r,_),l&&(t.$slots=Ae(o,i.context),t.$forceUpdate())}function Mn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Fn(t,e){if(e){if(t._directInactive=!1,Mn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);qn(t,"activated")}}function $n(t,e){if((!e||(t._directInactive=!0,!Mn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$n(t.$children[n]);qn(t,"deactivated")}}function qn(t,e){mt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)re(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),gt()}var Un=[],Wn=[],zn={},Hn=!1,Vn=!1,Bn=0;function Gn(){Bn=Un.length=Wn.length=0,zn={},Hn=Vn=!1}var Yn=0,Kn=Date.now;if(Q&&!tt){var Qn=window.performance;Qn&&"function"===typeof Qn.now&&Kn()>document.createEvent("Event").timeStamp&&(Kn=function(){return Qn.now()})}function Xn(){var t,e;for(Yn=Kn(),Vn=!0,Un.sort((function(t,e){return t.id-e.id})),Bn=0;Bn<Un.length;Bn++)t=Un[Bn],t.before&&t.before(),e=t.id,zn[e]=null,t.run();var n=Wn.slice(),r=Un.slice();Gn(),tr(n),Jn(r),lt&&W.devtools&&lt.emit("flush")}function Jn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&qn(r,"updated")}}function Zn(t){t._inactive=!1,Wn.push(t)}function tr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Fn(t[e],!0)}function er(t){var e=t.id;if(null==zn[e]){if(zn[e]=!0,Vn){var n=Un.length-1;while(n>Bn&&Un[n].id>t.id)n--;Un.splice(n+1,0,t)}else Un.push(t);Hn||(Hn=!0,_e(Xn))}}var nr=0,rr=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=j)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var t;mt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Ts){if(!this.user)throw Ts;ne(Ts,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&me(t),gt(),this.cleanupDeps()}return t},rr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},rr.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():er(this)},rr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:j,set:j};function or(t,e,n){ir.get=function(){return this[e][n]},ir.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ir)}function sr(t){t._watchers=[];var e=t.$options;e.props&&ar(t,e.props),e.methods&&_r(t,e.methods),e.data?cr(t):jt(t._data={},!0),e.computed&&hr(t,e.computed),e.watch&&e.watch!==ot&&vr(t,e.watch)}function ar(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||It(!1);var s=function(o){i.push(o);var s=Qt(o,e,n,t);Rt(r,o,s),o in t||or(t,"_props",o)};for(var a in e)s(a);It(!0)}function cr(t){var e=t.$options.data;e=t._data="function"===typeof e?lr(e,t):e||{},u(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&b(r,o)||H(o)||or(t,"_data",o)}jt(e,!0)}function lr(t,e){mt();try{return t.call(e,e)}catch(Ts){return ne(Ts,e,"data()"),{}}finally{gt()}}var ur={lazy:!0};function hr(t,e){var n=t._computedWatchers=Object.create(null),r=ct();for(var i in e){var o=e[i],s="function"===typeof o?o:o.get;0,r||(n[i]=new rr(t,s||j,j,ur)),i in t||dr(t,i,o)}}function dr(t,e,n){var r=!ct();"function"===typeof n?(ir.get=r?fr(e):pr(n),ir.set=j):(ir.get=n.get?r&&!1!==n.cache?fr(e):pr(n.get):j,ir.set=n.set||j),Object.defineProperty(t,e,ir)}function fr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),_t.target&&e.depend(),e.value}}function pr(t){return function(){return t.call(this,this)}}function _r(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?j:I(e[n],t)}function vr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)mr(t,n,r[i]);else mr(t,n,r)}}function mr(t,e,n,r){return u(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function gr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Lt,t.prototype.$watch=function(t,e,n){var r=this;if(u(e))return mr(r,t,e,n);n=n||{},n.user=!0;var i=new rr(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';mt(),re(e,r,[i.value],r,o),gt()}return function(){i.teardown()}}}var yr=0;function br(t){t.prototype._init=function(t){var e=this;e._uid=yr++,e._isVue=!0,t&&t._isComponent?wr(e,t):e.$options=Yt(Cr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,jn(e),xn(e),mn(e),qn(e,"beforeCreate"),Ne(e),sr(e),Ie(e),qn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function wr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Cr(t){var e=t.options;if(t.super){var n=Cr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Er(t);i&&P(t.extendOptions,i),e=t.options=Yt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Er(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Tr(t){this._init(t)}function xr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=N(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Or(t){t.mixin=function(t){return this.options=Yt(this.options,t),this}}function kr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Yt(n.options,t),s["super"]=n,s.options.props&&Sr(s),s.options.computed&&Ir(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,q.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=P({},s.options),i[r]=s,s}}function Sr(t){var e=t.options.props;for(var n in e)or(t.prototype,"_props",n)}function Ir(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function Nr(t){q.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Pr(t){return t&&(t.Ctor.options.name||t.tag)}function Ar(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function jr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&Rr(n,o,r,i)}}}function Rr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,g(n,e)}br(Tr),gr(Tr),Nn(Tr),Rn(Tr),bn(Tr);var Dr=[String,RegExp,Array],Lr={name:"keep-alive",abstract:!0,props:{include:Dr,exclude:Dr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:Pr(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&Rr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Rr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){jr(t,(function(t){return Ar(e,t)}))})),this.$watch("exclude",(function(e){jr(t,(function(t){return!Ar(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Tn(t),n=e&&e.componentOptions;if(n){var r=Pr(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!Ar(o,r))||s&&r&&Ar(s,r))return e;var a=this,c=a.cache,l=a.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[u]?(e.componentInstance=c[u].componentInstance,g(l,u),l.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},Mr={KeepAlive:Lr};function Fr(t){var e={get:function(){return W}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:P,mergeOptions:Yt,defineReactive:Rt},t.set=Dt,t.delete=Lt,t.nextTick=_e,t.observable=function(t){return jt(t),t},t.options=Object.create(null),q.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,P(t.options.components,Mr),xr(t),Or(t),kr(t),Nr(t)}Fr(Tr),Object.defineProperty(Tr.prototype,"$isServer",{get:ct}),Object.defineProperty(Tr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Tr,"FunctionalRenderContext",{value:Ze}),Tr.version="2.6.14";var $r=v("style,class"),qr=v("input,textarea,option,select,progress"),Ur=function(t,e,n){return"value"===n&&qr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Wr=v("contenteditable,draggable,spellcheck"),zr=v("events,caret,typing,plaintext-only"),Hr=function(t,e){return Kr(e)||"false"===e?"false":"contenteditable"===t&&zr(e)?e:"true"},Vr=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Br="http://www.w3.org/1999/xlink",Gr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Yr=function(t){return Gr(t)?t.slice(6,t.length):""},Kr=function(t){return null==t||!1===t};function Qr(t){var e=t.data,n=t,r=t;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Xr(r.data,e));while(i(n=n.parent))n&&n.data&&(e=Xr(e,n.data));return Jr(e.staticClass,e.class)}function Xr(t,e){return{staticClass:Zr(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Jr(t,e){return i(t)||i(e)?Zr(t,ti(e)):""}function Zr(t,e){return t?e?t+" "+e:t:e||""}function ti(t){return Array.isArray(t)?ei(t):c(t)?ni(t):"string"===typeof t?t:""}function ei(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=ti(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ni(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),si=function(t){return ii(t)||oi(t)};function ai(t){return oi(t)?"svg":"math"===t?"math":void 0}var ci=Object.create(null);function li(t){if(!Q)return!0;if(si(t))return!1;if(t=t.toLowerCase(),null!=ci[t])return ci[t];var e=document.createElement(t);return t.indexOf("-")>-1?ci[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ci[t]=/HTMLUnknownElement/.test(e.toString())}var ui=v("text,number,password,search,email,tel,url");function hi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function di(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fi(t,e){return document.createElementNS(ri[t],e)}function pi(t){return document.createTextNode(t)}function _i(t){return document.createComment(t)}function vi(t,e,n){t.insertBefore(e,n)}function mi(t,e){t.removeChild(e)}function gi(t,e){t.appendChild(e)}function yi(t){return t.parentNode}function bi(t){return t.nextSibling}function wi(t){return t.tagName}function Ci(t,e){t.textContent=e}function Ei(t,e){t.setAttribute(e,"")}var Ti=Object.freeze({createElement:di,createElementNS:fi,createTextNode:pi,createComment:_i,insertBefore:vi,removeChild:mi,appendChild:gi,parentNode:yi,nextSibling:bi,tagName:wi,setTextContent:Ci,setStyleScope:Ei}),xi={create:function(t,e){Oi(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Oi(t,!0),Oi(e))},destroy:function(t){Oi(t,!0)}};function Oi(t,e){var n=t.data.ref;if(i(n)){var r=t.context,o=t.componentInstance||t.elm,s=r.$refs;e?Array.isArray(s[n])?g(s[n],o):s[n]===o&&(s[n]=void 0):t.data.refInFor?Array.isArray(s[n])?s[n].indexOf(o)<0&&s[n].push(o):s[n]=[o]:s[n]=o}}var ki=new yt("",{},[]),Si=["create","activate","update","remove","destroy"];function Ii(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Ni(t,e)||o(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function Ni(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o||ui(r)&&ui(o)}function Pi(t,e,n){var r,o,s={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(s[o]=r);return s}function Ai(t){var e,n,s={},c=t.modules,l=t.nodeOps;for(e=0;e<Si.length;++e)for(s[Si[e]]=[],n=0;n<c.length;++n)i(c[n][Si[e]])&&s[Si[e]].push(c[n][Si[e]]);function u(t){return new yt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=l.parentNode(t);i(e)&&l.removeChild(e,t)}function f(t,e,n,r,s,a,c){if(i(t.elm)&&i(a)&&(t=a[c]=Et(t)),t.isRootInsert=!s,!p(t,e,n,r)){var u=t.data,h=t.children,d=t.tag;i(d)?(t.elm=t.ns?l.createElementNS(t.ns,d):l.createElement(d,t),C(t),y(t,h,e),i(u)&&w(t,e),g(n,t.elm,r)):o(t.isComment)?(t.elm=l.createComment(t.text),g(n,t.elm,r)):(t.elm=l.createTextNode(t.text),g(n,t.elm,r))}}function p(t,e,n,r){var s=t.data;if(i(s)){var a=i(t.componentInstance)&&s.keepAlive;if(i(s=s.hook)&&i(s=s.init)&&s(t,!1),i(t.componentInstance))return _(t,e),g(n,t.elm,r),o(a)&&m(t,e,n,r),!0}}function _(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?(w(t,e),C(t)):(Oi(t),e.push(t))}function m(t,e,n,r){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,i(o=a.data)&&i(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](ki,a);e.push(a);break}g(n,t.elm,r)}function g(t,e,n){i(t)&&(i(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function y(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0,e,r)}else a(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function w(t,n){for(var r=0;r<s.create.length;++r)s.create[r](ki,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(ki,t),i(e.insert)&&n.push(t))}function C(t){var e;if(i(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}i(e=Pn)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function E(t,e,n,r,i,o){for(;r<=i;++r)f(n[r],o,t,e,!1,n,r)}function T(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<s.destroy.length;++e)s.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)T(t.children[n])}function x(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(O(r),T(r)):d(r.elm))}}function O(t,e){if(i(e)||i(t.data)){var n,r=s.remove.length+1;for(i(e)?e.listeners+=r:e=h(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&O(n,e),n=0;n<s.remove.length;++n)s.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else d(t.elm)}function k(t,e,n,o,s){var a,c,u,h,d=0,p=0,_=e.length-1,v=e[0],m=e[_],g=n.length-1,y=n[0],b=n[g],w=!s;while(d<=_&&p<=g)r(v)?v=e[++d]:r(m)?m=e[--_]:Ii(v,y)?(I(v,y,o,n,p),v=e[++d],y=n[++p]):Ii(m,b)?(I(m,b,o,n,g),m=e[--_],b=n[--g]):Ii(v,b)?(I(v,b,o,n,g),w&&l.insertBefore(t,v.elm,l.nextSibling(m.elm)),v=e[++d],b=n[--g]):Ii(m,y)?(I(m,y,o,n,p),w&&l.insertBefore(t,m.elm,v.elm),m=e[--_],y=n[++p]):(r(a)&&(a=Pi(e,d,_)),c=i(y.key)?a[y.key]:S(y,e,d,_),r(c)?f(y,o,t,v.elm,!1,n,p):(u=e[c],Ii(u,y)?(I(u,y,o,n,p),e[c]=void 0,w&&l.insertBefore(t,u.elm,v.elm)):f(y,o,t,v.elm,!1,n,p)),y=n[++p]);d>_?(h=r(n[g+1])?null:n[g+1].elm,E(t,h,n,p,g,o)):p>g&&x(e,d,_)}function S(t,e,n,r){for(var o=n;o<r;o++){var s=e[o];if(i(s)&&Ii(t,s))return o}}function I(t,e,n,a,c,u){if(t!==e){i(e.elm)&&i(a)&&(e=a[c]=Et(e));var h=e.elm=t.elm;if(o(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?A(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(t,e);var p=t.children,_=e.children;if(i(f)&&b(e)){for(d=0;d<s.update.length;++d)s.update[d](t,e);i(d=f.hook)&&i(d=d.update)&&d(t,e)}r(e.text)?i(p)&&i(_)?p!==_&&k(h,p,_,n,u):i(_)?(i(t.text)&&l.setTextContent(h,""),E(h,null,_,0,_.length-1,n)):i(p)?x(p,0,p.length-1):i(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(t,e)}}}function N(t,e,n){if(o(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var P=v("attrs,class,staticClass,staticStyle,key");function A(t,e,n,r){var s,a=e.tag,c=e.data,l=e.children;if(r=r||c&&c.pre,e.elm=t,o(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(s=c.hook)&&i(s=s.init)&&s(e,!0),i(s=e.componentInstance)))return _(e,n),!0;if(i(a)){if(i(l))if(t.hasChildNodes())if(i(s=c)&&i(s=s.domProps)&&i(s=s.innerHTML)){if(s!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<l.length;d++){if(!h||!A(h,l[d],n,r)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else y(e,l,n);if(i(c)){var f=!1;for(var p in c)if(!P(p)){f=!0,w(e,n);break}!f&&c["class"]&&me(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!r(e)){var c=!1,h=[];if(r(t))c=!0,f(e,h);else{var d=i(t.nodeType);if(!d&&Ii(t,e))I(t,e,h,null,null,a);else{if(d){if(1===t.nodeType&&t.hasAttribute($)&&(t.removeAttribute($),n=!0),o(n)&&A(t,e,h))return N(e,h,!0),t;t=u(t)}var p=t.elm,_=l.parentNode(p);if(f(e,h,p._leaveCb?null:_,l.nextSibling(p)),i(e.parent)){var v=e.parent,m=b(e);while(v){for(var g=0;g<s.destroy.length;++g)s.destroy[g](v);if(v.elm=e.elm,m){for(var y=0;y<s.create.length;++y)s.create[y](ki,v);var w=v.data.hook.insert;if(w.merged)for(var C=1;C<w.fns.length;C++)w.fns[C]()}else Oi(v);v=v.parent}}i(_)?x([t],0,0):i(t.tag)&&T(t)}}return N(e,h,c),e.elm}i(t)&&T(t)}}var ji={create:Ri,update:Ri,destroy:function(t){Ri(t,ki)}};function Ri(t,e){(t.data.directives||e.data.directives)&&Di(t,e)}function Di(t,e){var n,r,i,o=t===ki,s=e===ki,a=Mi(t.data.directives,t.context),c=Mi(e.data.directives,e.context),l=[],u=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,$i(i,"update",e,t),i.def&&i.def.componentUpdated&&u.push(i)):($i(i,"bind",e,t),i.def&&i.def.inserted&&l.push(i));if(l.length){var h=function(){for(var n=0;n<l.length;n++)$i(l[n],"inserted",e,t)};o?Ce(e,"insert",h):h()}if(u.length&&Ce(e,"postpatch",(function(){for(var n=0;n<u.length;n++)$i(u[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||$i(a[n],"unbind",t,t,s)}var Li=Object.create(null);function Mi(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=Li),i[Fi(r)]=r,r.def=Kt(e.$options,"directives",r.name,!0);return i}function Fi(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function $i(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Ts){ne(Ts,n.context,"directive "+t.name+" "+e+" hook")}}var qi=[xi,ji];function Ui(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var o,s,a,c=e.elm,l=t.data.attrs||{},u=e.data.attrs||{};for(o in i(u.__ob__)&&(u=e.data.attrs=P({},u)),u)s=u[o],a=l[o],a!==s&&Wi(c,o,s,e.data.pre);for(o in(tt||nt)&&u.value!==l.value&&Wi(c,"value",u.value),l)r(u[o])&&(Gr(o)?c.removeAttributeNS(Br,Yr(o)):Wr(o)||c.removeAttribute(o))}}function Wi(t,e,n,r){r||t.tagName.indexOf("-")>-1?zi(t,e,n):Vr(e)?Kr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):Wr(e)?t.setAttribute(e,Hr(e,n)):Gr(e)?Kr(n)?t.removeAttributeNS(Br,Yr(e)):t.setAttributeNS(Br,e,n):zi(t,e,n)}function zi(t,e,n){if(Kr(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Hi={create:Ui,update:Ui};function Vi(t,e){var n=e.elm,o=e.data,s=t.data;if(!(r(o.staticClass)&&r(o.class)&&(r(s)||r(s.staticClass)&&r(s.class)))){var a=Qr(e),c=n._transitionClasses;i(c)&&(a=Zr(a,ti(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Bi,Gi={create:Vi,update:Vi},Yi="__r",Ki="__c";function Qi(t){if(i(t[Yi])){var e=tt?"change":"input";t[e]=[].concat(t[Yi],t[e]||[]),delete t[Yi]}i(t[Ki])&&(t.change=[].concat(t[Ki],t.change||[]),delete t[Ki])}function Xi(t,e,n){var r=Bi;return function i(){var o=e.apply(null,arguments);null!==o&&to(t,i,n,r)}}var Ji=ae&&!(it&&Number(it[1])<=53);function Zi(t,e,n,r){if(Ji){var i=Yn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Bi.addEventListener(t,e,st?{capture:n,passive:r}:n)}function to(t,e,n,r){(r||Bi).removeEventListener(t,e._wrapper||e,n)}function eo(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Bi=e.elm,Qi(n),we(n,i,Zi,to,Xi,e.context),Bi=void 0}}var no,ro={create:eo,update:eo};function io(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,o,s=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in i(c.__ob__)&&(c=e.data.domProps=P({},c)),a)n in c||(s[n]="");for(n in c){if(o=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),o===a[n])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===n&&"PROGRESS"!==s.tagName){s._value=o;var l=r(o)?"":String(o);oo(s,l)&&(s.value=l)}else if("innerHTML"===n&&oi(s.tagName)&&r(s.innerHTML)){no=no||document.createElement("div"),no.innerHTML="<svg>"+o+"</svg>";var u=no.firstChild;while(s.firstChild)s.removeChild(s.firstChild);while(u.firstChild)s.appendChild(u.firstChild)}else if(o!==a[n])try{s[n]=o}catch(Ts){}}}}function oo(t,e){return!t.composing&&("OPTION"===t.tagName||so(t,e)||ao(t,e))}function so(t,e){var n=!0;try{n=document.activeElement!==t}catch(Ts){}return n&&t.value!==e}function ao(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return _(n)!==_(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var co={create:io,update:io},lo=w((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function uo(t){var e=ho(t.style);return t.staticStyle?P(t.staticStyle,e):e}function ho(t){return Array.isArray(t)?A(t):"string"===typeof t?lo(t):t}function fo(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=uo(i.data))&&P(r,n)}(n=uo(t.data))&&P(r,n);var o=t;while(o=o.parent)o.data&&(n=uo(o.data))&&P(r,n);return r}var po,_o=/^--/,vo=/\s*!important$/,mo=function(t,e,n){if(_o.test(e))t.style.setProperty(e,n);else if(vo.test(n))t.style.setProperty(O(e),n.replace(vo,""),"important");else{var r=yo(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},go=["Webkit","Moz","ms"],yo=w((function(t){if(po=po||document.createElement("div").style,t=E(t),"filter"!==t&&t in po)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<go.length;n++){var r=go[n]+e;if(r in po)return r}}));function bo(t,e){var n=e.data,o=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var s,a,c=e.elm,l=o.staticStyle,u=o.normalizedStyle||o.style||{},h=l||u,d=ho(e.data.style)||{};e.data.normalizedStyle=i(d.__ob__)?P({},d):d;var f=fo(e,!0);for(a in h)r(f[a])&&mo(c,a,"");for(a in f)s=f[a],s!==h[a]&&mo(c,a,null==s?"":s)}}var wo={create:bo,update:bo},Co=/\s+/;function Eo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Co).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function To(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Co).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function xo(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&P(e,Oo(t.name||"v")),P(e,t),e}return"string"===typeof t?Oo(t):void 0}}var Oo=w((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),ko=Q&&!et,So="transition",Io="animation",No="transition",Po="transitionend",Ao="animation",jo="animationend";ko&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(No="WebkitTransition",Po="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ao="WebkitAnimation",jo="webkitAnimationEnd"));var Ro=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Do(t){Ro((function(){Ro(t)}))}function Lo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Eo(t,e))}function Mo(t,e){t._transitionClasses&&g(t._transitionClasses,e),To(t,e)}function Fo(t,e,n){var r=qo(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===So?Po:jo,c=0,l=function(){t.removeEventListener(a,u),n()},u=function(e){e.target===t&&++c>=s&&l()};setTimeout((function(){c<s&&l()}),o+1),t.addEventListener(a,u)}var $o=/\b(transform|all)(,|$)/;function qo(t,e){var n,r=window.getComputedStyle(t),i=(r[No+"Delay"]||"").split(", "),o=(r[No+"Duration"]||"").split(", "),s=Uo(i,o),a=(r[Ao+"Delay"]||"").split(", "),c=(r[Ao+"Duration"]||"").split(", "),l=Uo(a,c),u=0,h=0;e===So?s>0&&(n=So,u=s,h=o.length):e===Io?l>0&&(n=Io,u=l,h=c.length):(u=Math.max(s,l),n=u>0?s>l?So:Io:null,h=n?n===So?o.length:c.length:0);var d=n===So&&$o.test(r[No+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function Uo(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Wo(e)+Wo(t[n])})))}function Wo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function zo(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=xo(t.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){var s=o.css,a=o.type,l=o.enterClass,u=o.enterToClass,h=o.enterActiveClass,d=o.appearClass,f=o.appearToClass,p=o.appearActiveClass,v=o.beforeEnter,m=o.enter,g=o.afterEnter,y=o.enterCancelled,b=o.beforeAppear,w=o.appear,C=o.afterAppear,E=o.appearCancelled,T=o.duration,x=Pn,O=Pn.$vnode;while(O&&O.parent)x=O.context,O=O.parent;var k=!x._isMounted||!t.isRootInsert;if(!k||w||""===w){var S=k&&d?d:l,I=k&&p?p:h,N=k&&f?f:u,P=k&&b||v,A=k&&"function"===typeof w?w:m,j=k&&C||g,R=k&&E||y,D=_(c(T)?T.enter:T);0;var L=!1!==s&&!et,M=Bo(A),$=n._enterCb=F((function(){L&&(Mo(n,N),Mo(n,I)),$.cancelled?(L&&Mo(n,S),R&&R(n)):j&&j(n),n._enterCb=null}));t.data.show||Ce(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),A&&A(n,$)})),P&&P(n),L&&(Lo(n,S),Lo(n,I),Do((function(){Mo(n,S),$.cancelled||(Lo(n,N),M||(Vo(D)?setTimeout($,D):Fo(n,a,$)))}))),t.data.show&&(e&&e(),A&&A(n,$)),L||M||$()}}}function Ho(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var o=xo(t.data.transition);if(r(o)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var s=o.css,a=o.type,l=o.leaveClass,u=o.leaveToClass,h=o.leaveActiveClass,d=o.beforeLeave,f=o.leave,p=o.afterLeave,v=o.leaveCancelled,m=o.delayLeave,g=o.duration,y=!1!==s&&!et,b=Bo(f),w=_(c(g)?g.leave:g);0;var C=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),y&&(Mo(n,u),Mo(n,h)),C.cancelled?(y&&Mo(n,l),v&&v(n)):(e(),p&&p(n)),n._leaveCb=null}));m?m(E):E()}function E(){C.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),y&&(Lo(n,l),Lo(n,h),Do((function(){Mo(n,l),C.cancelled||(Lo(n,u),b||(Vo(w)?setTimeout(C,w):Fo(n,a,C)))}))),f&&f(n,C),y||b||C())}}function Vo(t){return"number"===typeof t&&!isNaN(t)}function Bo(t){if(r(t))return!1;var e=t.fns;return i(e)?Bo(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Go(t,e){!0!==e.data.show&&zo(e)}var Yo=Q?{create:Go,activate:Go,remove:function(t,e){!0!==t.data.show?Ho(t,e):e()}}:{},Ko=[Hi,Gi,ro,co,wo,Yo],Qo=Ko.concat(qi),Xo=Ai({nodeOps:Ti,modules:Qo});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&os(t,"input")}));var Jo={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Ce(n,"postpatch",(function(){Jo.componentUpdated(t,e,n)})):Zo(t,e,n.context),t._vOptions=[].map.call(t.options,ns)):("textarea"===n.tag||ui(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",rs),t.addEventListener("compositionend",is),t.addEventListener("change",is),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Zo(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,ns);if(i.some((function(t,e){return!L(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return es(t,i)})):e.value!==e.oldValue&&es(e.value,i);o&&os(t,"change")}}}};function Zo(t,e,n){ts(t,e,n),(tt||nt)&&setTimeout((function(){ts(t,e,n)}),0)}function ts(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=M(r,ns(s))>-1,s.selected!==o&&(s.selected=o);else if(L(ns(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function es(t,e){return e.every((function(e){return!L(e,t)}))}function ns(t){return"_value"in t?t._value:t.value}function rs(t){t.target.composing=!0}function is(t){t.target.composing&&(t.target.composing=!1,os(t.target,"input"))}function os(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function ss(t){return!t.componentInstance||t.data&&t.data.transition?t:ss(t.componentInstance._vnode)}var as={bind:function(t,e,n){var r=e.value;n=ss(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,zo(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=ss(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?zo(n,(function(){t.style.display=t.__vOriginalDisplay})):Ho(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},cs={model:Jo,show:as},ls={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function us(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?us(Tn(e.children)):t}function hs(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[E(o)]=i[o];return e}function ds(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fs(t){while(t=t.parent)if(t.data.transition)return!0}function ps(t,e){return e.key===t.key&&e.tag===t.tag}var _s=function(t){return t.tag||Re(t)},vs=function(t){return"show"===t.name},ms={name:"transition",props:ls,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(_s),n.length)){0;var r=this.mode;0;var i=n[0];if(fs(this.$vnode))return i;var o=us(i);if(!o)return i;if(this._leaving)return ds(t,i);var s="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?s+"comment":s+o.tag:a(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var c=(o.data||(o.data={})).transition=hs(this),l=this._vnode,u=us(l);if(o.data.directives&&o.data.directives.some(vs)&&(o.data.show=!0),u&&u.data&&!ps(o,u)&&!Re(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=P({},c);if("out-in"===r)return this._leaving=!0,Ce(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ds(t,i);if("in-out"===r){if(Re(o))return l;var d,f=function(){d()};Ce(c,"afterEnter",f),Ce(c,"enterCancelled",f),Ce(h,"delayLeave",(function(t){d=t}))}}return i}}},gs=P({tag:String,moveClass:String},ls);delete gs.mode;var ys={props:gs,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=An(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=hs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){for(var l=[],u=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=s,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d)}this.kept=t(e,null,l),this.removed=u}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(bs),t.forEach(ws),t.forEach(Cs),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Lo(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Po,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Po,t),n._moveCb=null,Mo(n,e))})}})))},methods:{hasMove:function(t,e){if(!ko)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){To(n,t)})),Eo(n,e),n.style.display="none",this.$el.appendChild(n);var r=qo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function bs(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function ws(t){t.data.newPos=t.elm.getBoundingClientRect()}function Cs(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Es={Transition:ms,TransitionGroup:ys};Tr.config.mustUseProp=Ur,Tr.config.isReservedTag=si,Tr.config.isReservedAttr=$r,Tr.config.getTagNamespace=ai,Tr.config.isUnknownElement=li,P(Tr.options.directives,cs),P(Tr.options.components,Es),Tr.prototype.__patch__=Q?Xo:j,Tr.prototype.$mount=function(t,e){return t=t&&Q?hi(t):void 0,Dn(this,t,e)},Q&&setTimeout((function(){W.devtools&&lt&&lt.emit("init",Tr)}),0),e["a"]=Tr}).call(this,n("c8ba"))},"2cf4":function(t,e,n){var r,i,o,s,a=n("da84"),c=n("1626"),l=n("d039"),u=n("0366"),h=n("1be4"),d=n("cc12"),f=n("1cdc"),p=n("605d"),_=a.setImmediate,v=a.clearImmediate,m=a.process,g=a.MessageChannel,y=a.Dispatch,b=0,w={},C="onreadystatechange";try{r=a.location}catch(k){}var E=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},T=function(t){return function(){E(t)}},x=function(t){E(t.data)},O=function(t){a.postMessage(String(t),r.protocol+"//"+r.host)};_&&v||(_=function(t){var e=[],n=arguments.length,r=1;while(n>r)e.push(arguments[r++]);return w[++b]=function(){(c(t)?t:Function(t)).apply(void 0,e)},i(b),b},v=function(t){delete w[t]},p?i=function(t){m.nextTick(T(t))}:y&&y.now?i=function(t){y.now(T(t))}:g&&!f?(o=new g,s=o.port2,o.port1.onmessage=x,i=u(s.postMessage,s,1)):a.addEventListener&&c(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!l(O)?(i=O,a.addEventListener("message",x,!1)):i=C in d("script")?function(t){h.appendChild(d("script"))[C]=function(){h.removeChild(this),E(t)}}:function(t){setTimeout(T(t),0)}),t.exports={set:_,clear:v}},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u?(r=u.split("."),i=r[0]<4?1:r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||o[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=s(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},"3bbe":function(t,e,n){var r=n("1626");t.exports=function(t){if("object"===typeof t||r(t))return t;throw TypeError("Can't set "+String(t)+" as a prototype")}},"3f8c":function(t,e){t.exports={}},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[s])?e:i(n)}},"485a":function(t,e,n){var r=n("1626"),i=n("861d");t.exports=function(t,e){var n,o;if("string"===e&&r(n=t.toString)&&!i(o=n.call(t)))return o;if(r(n=t.valueOf)&&!i(o=n.call(t)))return o;if("string"!==e&&r(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(t){return function(e,n,s){var a,c=r(e),l=o(c),u=i(s,l);if(t&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"4fc1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function u(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...o)=>{const s=o.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:s,args:o,type:e.name})}}}},5087:function(t,e,n){var r=n("68ee"),i=n("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(i(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},"51b0":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Gs})),n.d(e,"b",(function(){return $s})),n.d(e,"c",(function(){return Rs}));var r=n("5606"),i=n("ffa6"),o=n("1fd5"),s=n("4fc1");const a="@firebase/database",c="0.12.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="";function u(t){l=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Object(o["z"])(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:Object(o["t"])(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return Object(o["h"])(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t){try{if("undefined"!==typeof window&&"undefined"!==typeof window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h(e)}}catch(e){}return new d},p=f("localStorage"),_=f("sessionStorage"),v=new s["b"]("@firebase/database"),m=function(){let t=1;return function(){return t++}}(),g=function(t){const e=Object(o["y"])(t),n=new o["c"];n.update(e);const r=n.digest();return o["f"].encodeByteArray(r)},y=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?e+=y.apply(null,r):e+="object"===typeof r?Object(o["z"])(r):r,e+=" "}return e};let b=null,w=!0;const C=function(t,e){Object(o["d"])(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(v.logLevel=s["a"].VERBOSE,b=v.log.bind(v),e&&_.set("logging_enabled",!0)):"function"===typeof t?b=t:(b=null,_.remove("logging_enabled"))},E=function(...t){if(!0===w&&(w=!1,null===b&&!0===_.get("logging_enabled")&&C(!0)),b){const e=y.apply(null,t);b(e)}},T=function(t){return function(...e){E(t,...e)}},x=function(...t){const e="FIREBASE INTERNAL ERROR: "+y(...t);v.error(e)},O=function(...t){const e="FIREBASE FATAL ERROR: "+y(...t);throw v.error(e),new Error(e)},k=function(...t){const e="FIREBASE WARNING: "+y(...t);v.warn(e)},S=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},I=function(t){return"number"===typeof t&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},N=function(t){if(Object(o["q"])()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},P="[MIN_NAME]",A="[MAX_NAME]",j=function(t,e){if(t===e)return 0;if(t===P||e===A)return-1;if(e===P||t===A)return 1;{const n=B(t),r=B(e);return null!==n?null!==r?n-r===0?t.length-e.length:n-r:-1:null!==r?1:t<e?-1:1}},R=function(t,e){return t===e?0:t<e?-1:1},D=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Object(o["z"])(e))},L=function(t){if("object"!==typeof t||null===t)return Object(o["z"])(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)0!==r&&(n+=","),n+=Object(o["z"])(e[r]),n+=":",n+=L(t[e[r]]);return n+="}",n},M=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function F(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $=function(t){Object(o["d"])(!I(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,a,c,l;0===t?(s=0,a=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=c+r,a=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let t=parseInt(h.substr(l,8),2).toString(16);1===t.length&&(t="0"+t),d+=t}return d.toLowerCase()},q=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},U=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function W(t,e){let n="Unknown Error";"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===t?n="Client doesn't have permission to access the desired data.":"unavailable"===t&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const z=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,V=2147483647,B=function(t){if(z.test(t)){const e=Number(t);if(e>=H&&e<=V)return e}return null},G=function(t){try{t()}catch(e){setTimeout(()=>{const t=e.stack||"";throw k("Exception was thrown by user callback.",t),e},Math.floor(0))}},Y=function(){const t="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},K=function(t,e){const n=setTimeout(t,e);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then(t=>this.appCheck=t)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((e,n)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(e,n):e(null)},0)})}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then(e=>e.addTokenListener(t))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(t=>this.auth_=t)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(t=>t&&"auth/token-not-initialized"===t.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((e,n)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(e,n):e(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(e=>e.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(e=>e.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(t)}}class J{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",tt="v",et="s",nt="r",rt="f",it=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ot="ls",st="p",at="ac",ct="websocket",lt="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(t,e,n,r,i=!1,o="",s=!1){this.secure=e,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${t}${this.host}/${e}`}}function ht(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dt(t,e,n){let r;if(Object(o["d"])("string"===typeof e,"typeof type must == string"),Object(o["d"])("object"===typeof n,"typeof params must == object"),e===ct)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==lt)throw new Error("Unknown connection type: "+e);r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}ht(t)&&(n["ns"]=t.namespace);const i=[];return F(n,(t,e)=>{i.push(t+"="+e)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.counters_={}}incrementCounter(t,e=1){Object(o["h"])(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return Object(o["j"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={},_t={};function vt(t){const e=t.toString();return pt[e]||(pt[e]=new ft),pt[e]}function mt(t,e){const n=t.toString();return _t[n]||(_t[n]=e()),_t[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){this.pendingResponses[t]=e;while(this.pendingResponses[this.currentResponseNum]){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&G(()=>{this.onMessage_(t[e])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="start",bt="close",wt="pLPCommand",Ct="pRTLPCB",Et="id",Tt="pw",xt="ser",Ot="cb",kt="seg",St="ts",It="d",Nt="dframe",Pt=1870,At=30,jt=Pt-At,Rt=25e3,Dt=3e4;class Lt{constructor(t,e,n,r,i,o,s){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(t),this.stats_=vt(e),this.urlFn=t=>(this.appCheckToken&&(t[at]=this.appCheckToken),dt(e,lt,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new gt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Dt)),N(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mt((...t)=>{const[e,n,r,i,o]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===yt)this.id=n,this.password=r;else{if(e!==bt)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)},()=>{this.onClosed_()},this.urlFn);const t={};t[yt]="t",t[xt]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[Ot]=this.scriptTagHolder.uniqueCallbackIdentifier),t[tt]=Z,this.transportSessionId&&(t[et]=this.transportSessionId),this.lastSessionId&&(t[ot]=this.lastSessionId),this.applicationId&&(t[st]=this.applicationId),this.appCheckToken&&(t[at]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(t[nt]=rt);const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Lt.forceAllow_=!0}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){return!Object(o["q"])()&&(!!Lt.forceAllow_||!Lt.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!q()&&!U())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=Object(o["z"])(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=Object(o["g"])(e),r=M(n,jt);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if(Object(o["q"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Nt]="t",n[Et]=t,n[Tt]=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=Object(o["z"])(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Mt{constructor(t,e,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(o["q"])())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=m(),window[wt+this.uniqueCallbackIdentifier]=t,window[Ct+this.uniqueCallbackIdentifier]=e,this.myIFrame=Mt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const t=document.domain;n='<script>document.domain="'+t+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){E("frame writing exception"),i.stack&&E(i.stack),E(i)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{const e=t.contentWindow.document;e||E("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){this.myID=t,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Et]=this.myID,t[Tt]=this.myPW,t[xt]=this.currentSerial;let e=this.urlFn(t),n="",r=0;while(this.pendingSegs.length>0){const t=this.pendingSegs[0];if(!(t.d.length+At+n.length<=Pt))break;{const t=this.pendingSegs.shift();n=n+"&"+kt+r+"="+t.seg+"&"+St+r+"="+t.ts+"&"+It+r+"="+t.d,r++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},r=setTimeout(n,Math.floor(Rt)),i=()=>{clearTimeout(r),n()};this.addTag(t,i)}addTag(t,e){Object(o["q"])()?this.doNodeLongPoll(t,e):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{E("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=16384,$t=45e3;let qt=null;"undefined"!==typeof MozWebSocket?qt=MozWebSocket:"undefined"!==typeof WebSocket&&(qt=WebSocket);class Ut{constructor(t,e,n,r,i,o,s){this.connId=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=vt(e),this.connURL=Ut.connectionURL_(e,o,s,r),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,r){const i={};return i[tt]=Z,!Object(o["q"])()&&"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(i[nt]=rt),e&&(i[et]=e),n&&(i[ot]=n),r&&(i[at]=r),dt(t,ct,i)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(o["q"])()){const e=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${l}/${t.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",BASE_URL:"/translation-comments/"}),i=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];i&&(n["proxy"]={origin:i}),this.mySock=new qt(this.connURL,[],n)}else{const t={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new qt(this.connURL,[],t)}}catch(r){this.log_("Error instantiating WebSocket.");const t=r.message||r.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){Ut.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==qt&&!Ut.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=Object(o["t"])(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(Object(o["d"])(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=Object(o["z"])(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=M(e,Ft);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($t))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ut.responsesRequiredToBeHealthy=2,Ut.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Lt,Ut]}initTransports_(t){const e=Ut&&Ut["isAvailable"]();let n=e&&!Ut.previouslyFailed();if(t.webSocketOnly&&(e||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ut];else{const t=this.transports_=[];for(const e of Wt.ALL_TRANSPORTS)e&&e["isAvailable"]()&&t.push(e)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=6e4,Ht=5e3,Vt=10240,Bt=102400,Gt="t",Yt="d",Kt="s",Qt="r",Xt="e",Jt="o",Zt="a",te="n",ee="p",ne="h";class re{constructor(t,e,n,r,i,o,s,a,c,l){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new Wt(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(e,n)},Math.floor(0));const r=t["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=K(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bt?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Vt?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Gt in t){const e=t[Gt];e===Zt?this.upgradeIfSecondaryHealthy_():e===Qt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Jt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=D("t",t),n=D("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ee,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:te,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=D("t",t),n=D("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=D(Gt,t);if(Yt in t){const n=t[Yt];if(e===ne)this.onHandshake_(n);else if(e===te){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Kt?this.onConnectionShutdown_(n):e===Qt?this.onReset_(n):e===Xt?x("Server Error: "+n):e===Jt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):x("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),Z!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),K(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zt))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):K(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ht))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ee,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{put(t,e,n,r){}merge(t,e,n,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t){this.allowedEvents_=t,this.listeners_={},Object(o["d"])(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const r=this.getInitialEvent(t);r&&e.apply(n,r)}off(t,e,n){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let i=0;i<r.length;i++)if(r[i].callback===e&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(t){Object(o["d"])(this.allowedEvents_.find(e=>e===t),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends oe{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(o["p"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new se}getInitialEvent(t){return Object(o["d"])("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=32,ce=768;class le{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function ue(){return new le("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function de(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function pe(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function _e(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ve(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function me(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof le)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new le(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function be(t,e){const n=he(t),r=he(e);if(null===n)return e;if(n===r)return be(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function we(t,e){if(de(t)!==de(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ce(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(de(t)>de(e))return!1;while(n<t.pieces_.length){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Ee{constructor(t,e){this.errorPrefix_=e,this.parts_=ve(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(o["x"])(this.parts_[n]);Oe(this)}}function Te(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Object(o["x"])(e),Oe(t)}function xe(t){const e=t.parts_.pop();t.byteLength_-=Object(o["x"])(e),t.parts_.length>0&&(t.byteLength_-=1)}function Oe(t){if(t.byteLength_>ce)throw new Error(t.errorPrefix_+"has a key path longer than "+ce+" bytes ("+t.byteLength_+").");if(t.parts_.length>ae)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ae+") or object contains a cycle "+ke(t))}function ke(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends oe{constructor(){let t,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))},!1)}static getInstance(){return new Se}getInitialEvent(t){return Object(o["d"])("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=1e3,Ne=3e5,Pe=3e3,Ae=3e4,je=1.3,Re=3e4,De="server_kill",Le=3;class Me extends ie{constructor(t,e,n,r,i,s,a,c){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Me.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ie,this.maxReconnectDelay_=Ne,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(o["q"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Se.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&se.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const r=++this.requestNumber_,i={r:r,a:t,b:e};this.log_(Object(o["z"])(i)),Object(o["d"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(t){this.initConnection_();const e=new o["a"],n={p:t._path.toString(),q:t._queryObject},r={action:"g",request:n,onComplete:t=>{const r=t["d"];"ok"===t["s"]?(this.onDataUpdate_(n["p"],r,!1,null),e.resolve(r)):e.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const t=this.outstandingGets_[i];void 0!==t&&r===t&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),e.reject(new Error("Client is offline.")))},Pe),this.connected_&&this.sendGet_(i),e.promise}listen(t,e,n,r){this.initConnection_();const i=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Object(o["d"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(o["d"])(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:e,query:t,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)})}sendListen_(t){const e=t.query,n=e._path.toString(),r=e._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";t.tag&&(i["q"]=e._queryObject,i["t"]=t.tag),i["h"]=t.hashFn(),this.sendRequest(o,i,i=>{const o=i["d"],s=i["s"];Me.warnOnListenWarnings_(o,e);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===t&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),t.onComplete&&t.onComplete(s,o))})}static warnOnListenWarnings_(t,e){if(t&&"object"===typeof t&&Object(o["h"])(t,"w")){const n=Object(o["w"])(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){const e=t&&40===t.length;(e||Object(o["n"])(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ae)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=Object(o["s"])(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(e,n,e=>{const n=e["s"],r=e["d"]||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const e=t["s"],n=t["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)})}unlisten(t,e){const n=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(o["d"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,t._queryObject,e)}sendUnlisten_(t,e,n,r){this.log_("Unlisten on "+t+" for "+e);const i={p:t},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,r){const i={p:e,d:n};this.log_("onDisconnect "+t,i),this.sendRequest(t,i,t=>{r&&setTimeout(()=>{r(t["s"],t["d"])},Math.floor(0))})}put(t,e,n,r){this.putInternal("p",t,e,n,r)}merge(t,e,n,r){this.putInternal("m",t,e,n,r)}putInternal(t,e,n,r,i){this.initConnection_();const o={p:e,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:t,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,t=>{const e=t["s"];if("ok"!==e){const e=t["d"];this.log_("reportStats","Error sending stats: "+e)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Object(o["z"])(t));const e=t["r"],n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t["b"]))}else{if("error"in t)throw"A server-side error has occurred: "+t["error"];"a"in t&&this.onDataPush_(t["a"],t["b"])}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===t?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===t?this.onListenRevoked_(e["p"],e["q"]):"ac"===t?this.onAuthRevoked_(e["s"],e["d"]):"apc"===t?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===t?this.onSecurityDebugPacket_(e):x("Unrecognized action received from server: "+Object(o["z"])(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){Object(o["d"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ie,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Ie,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const t=(new Date).getTime()-this.lastConnectionEstablishedTime_;t>Re&&(this.reconnectDelay_=Ie),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*je)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Me.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},l=function(t){Object(o["d"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(t)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new re(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,t=>{k(t+" ("+this.repoInfo_.toString()+")"),this.interrupt(De)},i))}catch(x){this.log_("Failed to get token: "+x),s||(this.repoInfo_.nodeAdmin&&k(x),c())}}}interrupt(t){E("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){E("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Object(o["o"])(this.interruptReasons_)&&(this.reconnectDelay_=Ie,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map(t=>L(t)).join("$"):"default";const r=this.removeListen_(t,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,e){const n=new le(t).toString();let r;if(this.listens.has(n)){const t=this.listens.get(n);r=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(t,e){E("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Le&&(this.reconnectDelay_=Ae,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){E("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Le&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);while(this.onDisconnectRequestQueue_.length){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";Object(o["q"])()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+l.replace(/\./g,"-")]=1,Object(o["p"])()?t["framework.cordova"]=1:Object(o["r"])()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=se.getInstance().currentlyOnline();return Object(o["o"])(this.interruptReasons_)&&t}}Me.nextPersistentConnectionId_=0,Me.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Fe(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Fe(P,t),r=new Fe(P,e);return 0!==this.compare(n,r)}minPost(){return Fe.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe;class Ue extends $e{static get __EMPTY_NODE(){return qe}static set __EMPTY_NODE(t){qe=t}compare(t,e){return j(t.name,e.name)}isDefinedOn(t){throw Object(o["e"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Fe.MIN}maxPost(){return new Fe(A,qe)}makePost(t,e){return Object(o["d"])("string"===typeof t,"KeyIndex indexValue must always be a string."),new Fe(t,qe)}toString(){return".key"}}const We=new Ue;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!t.isEmpty())if(t=t,o=e?n(t.key,e):1,r&&(o*=-1),o<0)t=this.isReverse_?t.left:t.right;else{if(0===o){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class He{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:He.RED,this.left=null!=r?r:Be.EMPTY_NODE,this.right=null!=i?i:Be.EMPTY_NODE}copy(t,e,n,r,i){return new He(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,r;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return Be.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}He.RED=!0,He.BLACK=!1;class Ve{copy(t,e,n,r,i){return this}insert(t,e,n){return new He(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Be{constructor(t,e=Be.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new Be(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(t){return new Be(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,He.BLACK,null,null))}get(t){let e,n=this.root_;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,r=null;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}e<0?n=n.left:e>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new ze(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new ze(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new ze(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new ze(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(t,e){return j(t.name,e.name)}function Ye(t,e){return j(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ke;function Qe(t){Ke=t}Be.EMPTY_NODE=new Ve;const Xe=function(t){return"number"===typeof t?"number:"+$(t):"string:"+t},Je=function(t){if(t.isLeafNode()){const e=t.val();Object(o["d"])("string"===typeof e||"number"===typeof e||"object"===typeof e&&Object(o["h"])(e,".sv"),"Priority must be a string or number.")}else Object(o["d"])(t===Ke||t.isEmpty(),"priority of unexpected type.");Object(o["d"])(t===Ke||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ze,tn,en;class nn{constructor(t,e=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,Object(o["d"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Je(this.priorityNode_)}static set __childrenNodeConstructor(t){Ze=t}static get __childrenNodeConstructor(){return Ze}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new nn(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ye(t)?this:".priority"===he(t)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=he(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:(Object(o["d"])(".priority"!==n||1===de(t),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Xe(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?$(this.value_):this.value_,this.lazyHash_=g(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===nn.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof nn.__childrenNodeConstructor?-1:(Object(o["d"])(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,r=nn.VALUE_TYPE_ORDER.indexOf(e),i=nn.VALUE_TYPE_ORDER.indexOf(n);return Object(o["d"])(r>=0,"Unknown leaf type: "+e),Object(o["d"])(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function rn(t){tn=t}function on(t){en=t}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends $e{compare(t,e){const n=t.node.getPriority(),r=e.node.getPriority(),i=n.compareTo(r);return 0===i?j(t.name,e.name):i}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Fe.MIN}maxPost(){return new Fe(A,new nn("[PRIORITY-POST]",en))}makePost(t,e){const n=tn(t);return new Fe(e,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new sn,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t){const e=t=>parseInt(Math.log(t)/cn,10),n=t=>parseInt(Array(t+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const r=n(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const un=function(t,e,n,r){t.sort(e);const i=function(e,r){const o=r-e;let s,a;if(0===o)return null;if(1===o)return s=t[e],a=n?n(s):s,new He(a,s.node,He.BLACK,null,null);{const c=parseInt(o/2,10)+e,l=i(e,c),u=i(c+1,r);return s=t[c],a=n?n(s):s,new He(a,s.node,He.BLACK,l,u)}},o=function(e){let r=null,o=null,s=t.length;const a=function(e,r){const o=s-e,a=s;s-=e;const l=i(o+1,a),u=t[o],h=n?n(u):u;c(new He(h,u.node,r,null,l))},c=function(t){r?(r.left=t,r=t):(o=t,r=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),r=Math.pow(2,e.count-(t+1));n?a(r,He.BLACK):(a(r,He.BLACK),a(r,He.RED))}return o},s=new ln(t.length),a=o(s);return new Be(r||e,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class fn{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return Object(o["d"])(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new fn({".priority":dn},{".priority":an}),hn}get(t){const e=Object(o["w"])(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof Be?e:null}hasIndex(t){return Object(o["h"])(this.indexSet_,t.toString())}addIndex(t,e){Object(o["d"])(t!==We,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=e.getIterator(Fe.Wrap);let s,a=i.getNext();while(a)r=r||t.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?un(n,t.getCompare()):dn;const c=t.toString(),l=Object.assign({},this.indexSet_);l[c]=t;const u=Object.assign({},this.indexes_);return u[c]=s,new fn(u,l)}addToIndexes(t,e){const n=Object(o["u"])(this.indexes_,(n,r)=>{const i=Object(o["w"])(this.indexSet_,r);if(Object(o["d"])(i,"Missing index implementation for "+r),n===dn){if(i.isDefinedOn(t.node)){const n=[],r=e.getIterator(Fe.Wrap);let o=r.getNext();while(o)o.name!==t.name&&n.push(o),o=r.getNext();return n.push(t),un(n,i.getCompare())}return dn}{const r=e.get(t.name);let i=n;return r&&(i=i.remove(new Fe(t.name,r))),i.insert(t,t.node)}});return new fn(n,this.indexSet_)}removeFromIndexes(t,e){const n=Object(o["u"])(this.indexes_,n=>{if(n===dn)return n;{const r=e.get(t.name);return r?n.remove(new Fe(t.name,r)):n}});return new fn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class _n{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Je(this.priorityNode_),this.children_.isEmpty()&&Object(o["d"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new _n(new Be(Ye),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(t){return this.children_.isEmpty()?this:new _n(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?pn:e}}getChild(t){const e=he(t);return null===e?this:this.getImmediateChild(e).getChild(fe(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if(Object(o["d"])(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Fe(t,e);let r,i;e.isEmpty()?(r=this.children_.remove(t),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(t,e),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?pn:this.priorityNode_;return new _n(r,o,i)}}updateChild(t,e){const n=he(t);if(null===n)return e;{Object(o["d"])(".priority"!==he(t)||1===de(t),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(fe(t),e);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,r=0,i=!0;if(this.forEachChild(an,(o,s)=>{e[o]=s.val(t),n++,i&&_n.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!t&&i&&r<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Xe(this.getPriority().val())+":"),this.forEachChild(an,(e,n)=>{const r=n.hash();""!==r&&(t+=":"+e+":"+r)}),this.lazyHash_=""===t?"":g(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Fe(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Fe(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Fe(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal(t=>e(t.name,t.node)):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,t=>t);{const n=this.children_.getIteratorFrom(t.name,Fe.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,t=>t);{const n=this.children_.getReverseIteratorFrom(t.name,Fe.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)>0)n.getNext(),r=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===mn?-1:0}withIndex(t){if(t===We||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new _n(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===We||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(an),n=e.getIterator(an);let r=t.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=t.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(t){return t===We?null:this.indexMap_.get(t.toString())}}_n.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vn extends _n{constructor(){super(new Be(Ye),_n.EMPTY_NODE,fn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return _n.EMPTY_NODE}isEmpty(){return!1}}const mn=new vn;Object.defineProperties(Fe,{MIN:{value:new Fe(P,_n.EMPTY_NODE)},MAX:{value:new Fe(A,mn)}}),Ue.__EMPTY_NODE=_n.EMPTY_NODE,nn.__childrenNodeConstructor=_n,Qe(mn),on(mn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=!0;function yn(t,e=null){if(null===t)return _n.EMPTY_NODE;if("object"===typeof t&&".priority"in t&&(e=t[".priority"]),Object(o["d"])(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==typeof t||".sv"in t){const n=t;return new nn(n,yn(e))}if(t instanceof Array||!gn){let n=_n.EMPTY_NODE;return F(t,(e,r)=>{if(Object(o["h"])(t,e)&&"."!==e.substring(0,1)){const t=yn(r);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}}),n.updatePriority(yn(e))}{const n=[];let r=!1;const i=t;if(F(i,(t,e)=>{if("."!==t.substring(0,1)){const i=yn(e);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Fe(t,i)))}}),0===n.length)return _n.EMPTY_NODE;const o=un(n,Ge,t=>t.name,Ye);if(r){const t=un(n,an.getCompare());return new _n(o,yn(e),new fn({".priority":t},{".priority":an}))}return new _n(o,yn(e),fn.Default)}}rn(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn extends $e{constructor(t){super(),this.indexPath_=t,Object(o["d"])(!ye(t)&&".priority"!==he(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),r=this.extractChild(e.node),i=n.compareTo(r);return 0===i?j(t.name,e.name):i}makePost(t,e){const n=yn(t),r=_n.EMPTY_NODE.updateChild(this.indexPath_,n);return new Fe(e,r)}maxPost(){const t=_n.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Fe(A,t)}toString(){return ve(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends $e{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?j(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Fe.MIN}maxPost(){return Fe.MAX}makePost(t,e){const n=yn(t);return new Fe(e,n)}toString(){return".value"}}const Cn=new wn,En="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let t=0;const e=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tn(t){return{type:"value",snapshotNode:t}}function xn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function On(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function kn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Sn(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t){this.index_=t}updateChild(t,e,n,r,i,s){Object(o["d"])(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(e);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?t:(null!=s&&(n.isEmpty()?t.hasChild(e)?s.trackChildChange(On(e,a)):Object(o["d"])(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(xn(e,n)):s.trackChildChange(kn(e,n,a))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))}updateFullNode(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(an,(t,r)=>{e.hasChild(t)||n.trackChildChange(On(t,r))}),e.isLeafNode()||e.forEachChild(an,(e,r)=>{if(t.hasChild(e)){const i=t.getImmediateChild(e);i.equals(r)||n.trackChildChange(kn(e,r,i))}else n.trackChildChange(xn(e,r))})),e.withIndex(this.index_)}updatePriority(t,e){return t.isEmpty()?_n.EMPTY_NODE:t.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.indexedFilter_=new In(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Nn.getStartPost_(t),this.endPost_=Nn.getEndPost_(t)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0}updateChild(t,e,n,r,i,o){return this.matches(new Fe(e,n))||(n=_n.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,r,i,o)}updateFullNode(t,e,n){e.isLeafNode()&&(e=_n.EMPTY_NODE);let r=e.withIndex(this.index_);r=r.updatePriority(_n.EMPTY_NODE);const i=this;return e.forEachChild(an,(t,e)=>{i.matches(new Fe(t,e))||(r=r.updateImmediateChild(t,_n.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t){this.rangedFilter_=new Nn(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}updateChild(t,e,n,r,i,o){return this.rangedFilter_.matches(new Fe(e,n))||(n=_n.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,r,i,o):this.fullLimitUpdateChild_(t,e,n,i,o)}updateFullNode(t,e,n){let r;if(e.isLeafNode()||e.isEmpty())r=_n.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let t;r=_n.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(t.hasNext()&&n<this.limit_){const e=t.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),e)<=0:this.index_.compare(e,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(e.name,e.node),n++}}else{let t,n,i,o;if(r=e.withIndex(this.index_),r=r.updatePriority(_n.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),t=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const e=this.index_.getCompare();i=(t,n)=>e(n,t)}else o=r.getIterator(this.index_),t=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;while(o.hasNext()){const e=o.getNext();!a&&i(t,e)<=0&&(a=!0);const c=a&&s<this.limit_&&i(e,n)<=0;c?s++:r=r.updateImmediateChild(e.name,_n.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,e,n,r,i){let s;if(this.reverse_){const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else s=this.index_.getCompare();const a=t;Object(o["d"])(a.numChildren()===this.limit_,"");const c=new Fe(e,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(e)){const t=a.getImmediateChild(e);let o=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=o&&(o.name===e||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(kn(e,n,t)),a.updateImmediateChild(e,n);{null!=i&&i.trackChildChange(On(e,t));const n=a.updateImmediateChild(e,_n.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(xn(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?t:u&&s(l,c)>=0?(null!=i&&(i.trackChildChange(On(l.name,l.node)),i.trackChildChange(xn(e,n))),a.updateImmediateChild(e,n).updateImmediateChild(l.name,_n.EMPTY_NODE)):t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(o["d"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(o["d"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(o["d"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(o["d"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:A}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(o["d"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const t=new An;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function jn(t){return t.loadsAllData()?new In(t.getIndex()):t.hasLimit()?new Pn(t):new Nn(t)}function Rn(t){const e={};if(t.isDefault())return e;let n;return t.index_===an?n="$priority":t.index_===Cn?n="$value":t.index_===We?n="$key":(Object(o["d"])(t.index_ instanceof bn,"Unrecognized index type!"),n=t.index_.toString()),e["orderBy"]=Object(o["z"])(n),t.startSet_&&(e["startAt"]=Object(o["z"])(t.indexStartValue_),t.startNameSet_&&(e["startAt"]+=","+Object(o["z"])(t.indexStartName_))),t.endSet_&&(e["endAt"]=Object(o["z"])(t.indexEndValue_),t.endNameSet_&&(e["endAt"]+=","+Object(o["z"])(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e["limitToFirst"]=t.limit_:e["limitToLast"]=t.limit_),e}function Dn(t){const e={};if(t.startSet_&&(e["sp"]=t.indexStartValue_,t.startNameSet_&&(e["sn"]=t.indexStartName_)),t.endSet_&&(e["ep"]=t.indexEndValue_,t.endNameSet_&&(e["en"]=t.indexEndName_)),t.limitSet_){e["l"]=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e["vf"]=n}return t.index_!==an&&(e["i"]=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends ie{constructor(t,e,n,r){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=T("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:(Object(o["d"])(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,r){const i=t._path.toString();this.log_("Listen called for "+i+" "+t._queryIdentifier);const s=Ln.getListenId_(t,n),a={};this.listens_[s]=a;const c=Rn(t._queryParams);this.restRequest_(i+".json",c,(t,e)=>{let c=e;if(404===t&&(c=null,t=null),null===t&&this.onDataUpdate_(i,c,!1,n),Object(o["w"])(this.listens_,s)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",r(e,null)}})}unlisten(t,e){const n=Ln.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Rn(t._queryParams),n=t._path.toString(),r=new o["a"];return this.restRequest_(n+".json",e,(t,e)=>{let i=e;404===t&&(i=null,t=null),null===t?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(e["auth"]=r.accessToken),i&&i.token&&(e["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Object(o["v"])(e);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=Object(o["t"])(a.responseText)}catch(t){k("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.rootNode_=_n.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return{value:null,children:new Map}}function $n(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const r=he(e);t.children.has(r)||t.children.set(r,Fn());const i=t.children.get(r);e=fe(e),$n(i,e,n)}}function qn(t,e,n){null!==t.value?n(e,t.value):Un(t,(t,r)=>{const i=new le(e.toString()+"/"+t);qn(r,i,n)})}function Un(t,e){t.children.forEach((t,n)=>{e(n,t)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&F(this.last_,(t,n)=>{e[t]=e[t]-n}),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=1e4,Hn=3e4,Vn=3e5;class Bn{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Wn(t);const n=zn+(Hn-zn)*Math.random();K(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;F(t,(t,r)=>{r>0&&Object(o["h"])(this.statsToReport_,t)&&(e[t]=r,n=!0)}),n&&this.server_.reportStats(e),K(this.reportStats_.bind(this),Math.floor(2*Math.random()*Vn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn;function Yn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qn(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["OVERWRITE"]=0]="OVERWRITE",t[t["MERGE"]=1]="MERGE",t[t["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",t[t["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Gn||(Gn={}));class Xn{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Gn.ACK_USER_WRITE,this.source=Yn()}operationForChild(t){if(ye(this.path)){if(null!=this.affectedTree.value)return Object(o["d"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new le(t));return new Xn(ue(),e,this.revert)}}return Object(o["d"])(he(this.path)===t,"operationForChild called for unrelated child."),new Xn(fe(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e){this.source=t,this.path=e,this.type=Gn.LISTEN_COMPLETE}operationForChild(t){return ye(this.path)?new Jn(this.source,ue()):new Jn(this.source,fe(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Gn.OVERWRITE}operationForChild(t){return ye(this.path)?new Zn(this.source,ue(),this.snap.getImmediateChild(t)):new Zn(this.source,fe(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Gn.MERGE}operationForChild(t){if(ye(this.path)){const e=this.children.subtree(new le(t));return e.isEmpty()?null:e.value?new Zn(this.source,ue(),e.value):new tr(this.source,ue(),e)}return Object(o["d"])(he(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new tr(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ye(t))return this.isFullyInitialized()&&!this.filtered_;const e=he(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function rr(t,e,n,r){const i=[],o=[];return e.forEach(e=>{"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&o.push(Sn(e.childName,e.snapshotNode))}),ir(t,i,"child_removed",e,r,n),ir(t,i,"child_added",e,r,n),ir(t,i,"child_moved",o,r,n),ir(t,i,"child_changed",e,r,n),ir(t,i,"value",e,r,n),i}function ir(t,e,n,r,i,o){const s=r.filter(t=>t.type===n);s.sort((e,n)=>sr(t,e,n)),s.forEach(n=>{const r=or(t,n,o);i.forEach(i=>{i.respondsTo(n.type)&&e.push(i.createEvent(r,t.query_))})})}function or(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function sr(t,e,n){if(null==e.childName||null==n.childName)throw Object(o["e"])("Should only compare child_ events.");const r=new Fe(e.childName,e.snapshotNode),i=new Fe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e){return{eventCache:t,serverCache:e}}function cr(t,e,n,r){return ar(new er(e,n,r),t.serverCache)}function lr(t,e,n,r){return ar(t.eventCache,new er(e,n,r))}function ur(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;const fr=()=>(dr||(dr=new Be(R)),dr);class pr{constructor(t,e=fr()){this.value=t,this.children=e}static fromObject(t){let e=new pr(null);return F(t,(t,n)=>{e=e.set(new le(t),n)}),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:ue(),value:this.value};if(ye(t))return null;{const n=he(t),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(fe(t),e);if(null!=i){const t=ge(new le(n),i.path);return{path:t,value:i.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ye(t))return this;{const e=he(t),n=this.children.get(e);return null!==n?n.subtree(fe(t)):new pr(null)}}set(t,e){if(ye(t))return new pr(e,this.children);{const n=he(t),r=this.children.get(n)||new pr(null),i=r.set(fe(t),e),o=this.children.insert(n,i);return new pr(this.value,o)}}remove(t){if(ye(t))return this.children.isEmpty()?new pr(null):new pr(null,this.children);{const e=he(t),n=this.children.get(e);if(n){const r=n.remove(fe(t));let i;return i=r.isEmpty()?this.children.remove(e):this.children.insert(e,r),null===this.value&&i.isEmpty()?new pr(null):new pr(this.value,i)}return this}}get(t){if(ye(t))return this.value;{const e=he(t),n=this.children.get(e);return n?n.get(fe(t)):null}}setTree(t,e){if(ye(t))return e;{const n=he(t),r=this.children.get(n)||new pr(null),i=r.setTree(fe(t),e);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new pr(this.value,o)}}fold(t){return this.fold_(ue(),t)}fold_(t,e){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(ge(t,r),e)}),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,ue(),e)}findOnPath_(t,e,n){const r=!!this.value&&n(e,this.value);if(r)return r;if(ye(t))return null;{const r=he(t),i=this.children.get(r);return i?i.findOnPath_(fe(t),ge(e,r),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,ue(),e)}foreachOnPath_(t,e,n){if(ye(t))return this;{this.value&&n(e,this.value);const r=he(t),i=this.children.get(r);return i?i.foreachOnPath_(fe(t),ge(e,r),n):new pr(null)}}foreach(t){this.foreach_(ue(),t)}foreach_(t,e){this.children.inorderTraversal((n,r)=>{r.foreach_(ge(t,n),e)}),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal((e,n)=>{n.value&&t(e,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t){this.writeTree_=t}static empty(){return new _r(new pr(null))}}function vr(t,e,n){if(ye(e))return new _r(new pr(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(null!=r){const i=r.path;let o=r.value;const s=be(i,e);return o=o.updateChild(s,n),new _r(t.writeTree_.set(i,o))}{const r=new pr(n),i=t.writeTree_.setTree(e,r);return new _r(i)}}}function mr(t,e,n){let r=t;return F(n,(t,n)=>{r=vr(r,ge(e,t),n)}),r}function gr(t,e){if(ye(e))return _r.empty();{const n=t.writeTree_.setTree(e,new pr(null));return new _r(n)}}function yr(t,e){return null!=br(t,e)}function br(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(be(n.path,e)):null}function wr(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,(t,n)=>{e.push(new Fe(t,n))}):t.writeTree_.children.inorderTraversal((t,n)=>{null!=n.value&&e.push(new Fe(t,n.value))}),e}function Cr(t,e){if(ye(e))return t;{const n=br(t,e);return new _r(null!=n?new pr(n):t.writeTree_.subtree(e))}}function Er(t){return t.writeTree_.isEmpty()}function Tr(t,e){return xr(ue(),t.writeTree_,e)}function xr(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((e,i)=>{".priority"===e?(Object(o["d"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=xr(ge(t,e),i,n)}),n.getChild(t).isEmpty()||null===r||(n=n.updateChild(ge(t,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t,e){return Yr(e,t)}function kr(t,e,n,r,i){Object(o["d"])(r>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=vr(t.visibleWrites,e,n)),t.lastWriteId=r}function Sr(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Ir(t,e){const n=t.allWrites.findIndex(t=>t.writeId===e);Object(o["d"])(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,a=t.allWrites.length-1;while(i&&a>=0){const e=t.allWrites[a];e.visible&&(a>=n&&Nr(e,r.path)?i=!1:Ce(r.path,e.path)&&(s=!0)),a--}if(i){if(s)return Pr(t),!0;if(r.snap)t.visibleWrites=gr(t.visibleWrites,r.path);else{const e=r.children;F(e,e=>{t.visibleWrites=gr(t.visibleWrites,ge(r.path,e))})}return!0}return!1}function Nr(t,e){if(t.snap)return Ce(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ce(ge(t.path,n),e))return!0;return!1}function Pr(t){t.visibleWrites=jr(t.allWrites,Ar,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ar(t){return t.visible}function jr(t,e,n){let r=_r.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const t=s.path;let e;if(s.snap)Ce(n,t)?(e=be(n,t),r=vr(r,e,s.snap)):Ce(t,n)&&(e=be(t,n),r=vr(r,ue(),s.snap.getChild(e)));else{if(!s.children)throw Object(o["e"])("WriteRecord should have .snap or .children");if(Ce(n,t))e=be(n,t),r=mr(r,e,s.children);else if(Ce(t,n))if(e=be(t,n),ye(e))r=mr(r,ue(),s.children);else{const t=Object(o["w"])(s.children,he(e));if(t){const n=t.getChild(fe(e));r=vr(r,ue(),n)}}}}}return r}function Rr(t,e,n,r,i){if(r||i){const o=Cr(t.visibleWrites,e);if(!i&&Er(o))return n;if(i||null!=n||yr(o,ue())){const o=function(t){return(t.visible||i)&&(!r||!~r.indexOf(t.writeId))&&(Ce(t.path,e)||Ce(e,t.path))},s=jr(t.allWrites,o,e),a=n||_n.EMPTY_NODE;return Tr(s,a)}return null}{const r=br(t.visibleWrites,e);if(null!=r)return r;{const r=Cr(t.visibleWrites,e);if(Er(r))return n;if(null!=n||yr(r,ue())){const t=n||_n.EMPTY_NODE;return Tr(r,t)}return null}}}function Dr(t,e,n){let r=_n.EMPTY_NODE;const i=br(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(an,(t,e)=>{r=r.updateImmediateChild(t,e)}),r;if(n){const i=Cr(t.visibleWrites,e);return n.forEachChild(an,(t,e)=>{const n=Tr(Cr(i,new le(t)),e);r=r.updateImmediateChild(t,n)}),wr(i).forEach(t=>{r=r.updateImmediateChild(t.name,t.node)}),r}{const n=Cr(t.visibleWrites,e);return wr(n).forEach(t=>{r=r.updateImmediateChild(t.name,t.node)}),r}}function Lr(t,e,n,r,i){Object(o["d"])(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ge(e,n);if(yr(t.visibleWrites,s))return null;{const e=Cr(t.visibleWrites,s);return Er(e)?i.getChild(n):Tr(e,i.getChild(n))}}function Mr(t,e,n,r){const i=ge(e,n),o=br(t.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const e=Cr(t.visibleWrites,i);return Tr(e,r.getNode().getImmediateChild(n))}return null}function Fr(t,e){return br(t.visibleWrites,e)}function $r(t,e,n,r,i,o,s){let a;const c=Cr(t.visibleWrites,e),l=br(c,ue());if(null!=l)a=l;else{if(null==n)return[];a=Tr(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&t.length<i)0!==e(c,r)&&t.push(c),c=n.getNext();return t}}function qr(){return{visibleWrites:_r.empty(),allWrites:[],lastWriteId:-1}}function Ur(t,e,n,r){return Rr(t.writeTree,t.treePath,e,n,r)}function Wr(t,e){return Dr(t.writeTree,t.treePath,e)}function zr(t,e,n,r){return Lr(t.writeTree,t.treePath,e,n,r)}function Hr(t,e){return Fr(t.writeTree,ge(t.treePath,e))}function Vr(t,e,n,r,i,o){return $r(t.writeTree,t.treePath,e,n,r,i,o)}function Br(t,e,n){return Mr(t.writeTree,t.treePath,e,n)}function Gr(t,e){return Yr(ge(t.treePath,e),t.writeTree)}function Yr(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;Object(o["d"])("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),Object(o["d"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===e&&"child_removed"===i)this.changeMap.set(n,kn(n,t.snapshotNode,r.snapshotNode));else if("child_removed"===e&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===i)this.changeMap.set(n,On(n,r.oldSnap));else if("child_changed"===e&&"child_added"===i)this.changeMap.set(n,xn(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==i)throw Object(o["e"])("Illegal combination of changes: "+t+" occurred after "+r);this.changeMap.set(n,kn(n,t.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}}const Xr=new Qr;class Jr{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Br(this.writes_,t,e)}}getChildAfterChild(t,e,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:hr(this.viewCache_),i=Vr(this.writes_,r,e,1,n,t);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t){return{filter:t}}function ti(t,e){Object(o["d"])(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Object(o["d"])(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ei(t,e,n,r,i){const s=new Kr;let a,c;if(n.type===Gn.OVERWRITE){const l=n;l.source.fromUser?a=oi(t,e,l.path,l.snap,r,i,s):(Object(o["d"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered()&&!ye(l.path),a=ii(t,e,l.path,l.snap,r,i,c,s))}else if(n.type===Gn.MERGE){const l=n;l.source.fromUser?a=ai(t,e,l.path,l.children,r,i,s):(Object(o["d"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered(),a=li(t,e,l.path,l.children,r,i,c,s))}else if(n.type===Gn.ACK_USER_WRITE){const o=n;a=o.revert?di(t,e,o.path,r,i,s):ui(t,e,o.path,o.affectedTree,r,i,s)}else{if(n.type!==Gn.LISTEN_COMPLETE)throw Object(o["e"])("Unknown operation type: "+n.type);a=hi(t,e,n.path,r,s)}const l=s.getChanges();return ni(e,a,l),{viewCache:a,changes:l}}function ni(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=ur(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Tn(ur(e)))}}function ri(t,e,n,r,i,s){const a=e.eventCache;if(null!=Hr(r,n))return e;{let c,l;if(ye(n))if(Object(o["d"])(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=hr(e),i=n instanceof _n?n:_n.EMPTY_NODE,o=Wr(r,i);c=t.filter.updateFullNode(e.eventCache.getNode(),o,s)}else{const n=Ur(r,hr(e));c=t.filter.updateFullNode(e.eventCache.getNode(),n,s)}else{const u=he(n);if(".priority"===u){Object(o["d"])(1===de(n),"Can't have a priority with additional path components");const i=a.getNode();l=e.serverCache.getNode();const s=zr(r,n,i,l);c=null!=s?t.filter.updatePriority(i,s):a.getNode()}else{const o=fe(n);let h;if(a.isCompleteForChild(u)){l=e.serverCache.getNode();const t=zr(r,n,a.getNode(),l);h=null!=t?a.getNode().getImmediateChild(u).updateChild(o,t):a.getNode().getImmediateChild(u)}else h=Br(r,u,e.serverCache);c=null!=h?t.filter.updateChild(a.getNode(),u,h,o,i,s):a.getNode()}}return cr(e,c,a.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function ii(t,e,n,r,i,o,s,a){const c=e.serverCache;let l;const u=s?t.filter:t.filter.getIndexedFilter();if(ye(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const t=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),t,null)}else{const t=he(n);if(!c.isCompleteForPath(n)&&de(n)>1)return e;const i=fe(n),o=c.getNode().getImmediateChild(t),s=o.updateChild(i,r);l=".priority"===t?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),t,s,i,Xr,null)}const h=lr(e,l,c.isFullyInitialized()||ye(n),u.filtersNodes()),d=new Jr(i,h,o);return ri(t,h,n,i,d,a)}function oi(t,e,n,r,i,o,s){const a=e.eventCache;let c,l;const u=new Jr(i,e,o);if(ye(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,s),c=cr(e,l,!0,t.filter.filtersNodes());else{const i=he(n);if(".priority"===i)l=t.filter.updatePriority(e.eventCache.getNode(),r),c=cr(e,l,a.isFullyInitialized(),a.isFiltered());else{const o=fe(n),l=a.getNode().getImmediateChild(i);let h;if(ye(o))h=r;else{const t=u.getCompleteChild(i);h=null!=t?".priority"===pe(o)&&t.getChild(me(o)).isEmpty()?t:t.updateChild(o,r):_n.EMPTY_NODE}if(l.equals(h))c=e;else{const n=t.filter.updateChild(a.getNode(),i,h,o,u,s);c=cr(e,n,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function si(t,e){return t.eventCache.isCompleteForChild(e)}function ai(t,e,n,r,i,o,s){let a=e;return r.foreach((r,c)=>{const l=ge(n,r);si(e,he(l))&&(a=oi(t,a,l,c,i,o,s))}),r.foreach((r,c)=>{const l=ge(n,r);si(e,he(l))||(a=oi(t,a,l,c,i,o,s))}),a}function ci(t,e,n){return n.foreach((t,n)=>{e=e.updateChild(t,n)}),e}function li(t,e,n,r,i,o,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c,l=e;c=ye(n)?r:new pr(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){const c=e.serverCache.getNode().getImmediateChild(n),u=ci(t,c,r);l=ii(t,l,new le(n),u,i,o,s,a)}}),c.children.inorderTraversal((n,r)=>{const c=!e.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!c){const c=e.serverCache.getNode().getImmediateChild(n),u=ci(t,c,r);l=ii(t,l,new le(n),u,i,o,s,a)}}),l}function ui(t,e,n,r,i,o,s){if(null!=Hr(i,n))return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(null!=r.value){if(ye(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ii(t,e,n,c.getNode().getChild(n),i,o,a,s);if(ye(n)){let r=new pr(null);return c.getNode().forEachChild(We,(t,e)=>{r=r.set(new le(t),e)}),li(t,e,n,r,i,o,a,s)}return e}{let l=new pr(null);return r.foreach((t,e)=>{const r=ge(n,t);c.isCompleteForPath(r)&&(l=l.set(t,c.getNode().getChild(r)))}),li(t,e,n,l,i,o,a,s)}}function hi(t,e,n,r,i){const o=e.serverCache,s=lr(e,o.getNode(),o.isFullyInitialized()||ye(n),o.isFiltered());return ri(t,s,n,r,Xr,i)}function di(t,e,n,r,i,s){let a;if(null!=Hr(r,n))return e;{const c=new Jr(r,e,i),l=e.eventCache.getNode();let u;if(ye(n)||".priority"===he(n)){let n;if(e.serverCache.isFullyInitialized())n=Ur(r,hr(e));else{const t=e.serverCache.getNode();Object(o["d"])(t instanceof _n,"serverChildren would be complete if leaf node"),n=Wr(r,t)}n=n,u=t.filter.updateFullNode(l,n,s)}else{const i=he(n);let o=Br(r,i,e.serverCache);null==o&&e.serverCache.isCompleteForChild(i)&&(o=l.getImmediateChild(i)),u=null!=o?t.filter.updateChild(l,i,o,fe(n),c,s):e.eventCache.getNode().hasChild(i)?t.filter.updateChild(l,i,_n.EMPTY_NODE,fe(n),c,s):l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Ur(r,hr(e)),a.isLeafNode()&&(u=t.filter.updateFullNode(u,a,s)))}return a=e.serverCache.isFullyInitialized()||null!=Hr(r,ue()),cr(e,u,a,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e){this.query_=t,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new In(n.getIndex()),i=jn(n);this.processor_=Zr(i);const o=e.serverCache,s=e.eventCache,a=r.updateFullNode(_n.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(_n.EMPTY_NODE,s.getNode(),null),l=new er(a,o.isFullyInitialized(),r.filtersNodes()),u=new er(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=ar(u,l),this.eventGenerator_=new nr(this.query_)}get query(){return this.query_}}function pi(t){return t.viewCache_.serverCache.getNode()}function _i(t,e){const n=hr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function vi(t){return 0===t.eventRegistrations_.length}function mi(t,e){t.eventRegistrations_.push(e)}function gi(t,e,n){const r=[];if(n){Object(o["d"])(null==e,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(t=>{const e=t.createCancelEvent(n,i);e&&r.push(e)})}if(e){let n=[];for(let r=0;r<t.eventRegistrations_.length;++r){const i=t.eventRegistrations_[r];if(i.matches(e)){if(e.hasAnyCallback()){n=n.concat(t.eventRegistrations_.slice(r+1));break}}else n.push(i)}t.eventRegistrations_=n}else t.eventRegistrations_=[];return r}function yi(t,e,n,r){e.type===Gn.MERGE&&null!==e.source.queryId&&(Object(o["d"])(hr(t.viewCache_),"We should always have a full cache before handling merges"),Object(o["d"])(ur(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ei(t.processor_,i,e,n,r);return ti(t.processor_,s.viewCache),Object(o["d"])(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,wi(t,s.changes,s.viewCache.eventCache.getNode(),null)}function bi(t,e){const n=t.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const t=n.getNode();t.forEachChild(an,(t,e)=>{r.push(xn(t,e))})}return n.isFullyInitialized()&&r.push(Tn(n.getNode())),wi(t,r,n.getNode(),e)}function wi(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return rr(t.eventGenerator_,e,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci,Ei;class Ti{constructor(){this.views=new Map}}function xi(t){Object(o["d"])(!Ci,"__referenceConstructor has already been defined"),Ci=t}function Oi(){return Object(o["d"])(Ci,"Reference.ts has not been loaded"),Ci}function ki(t){return 0===t.views.size}function Si(t,e,n,r){const i=e.source.queryId;if(null!==i){const s=t.views.get(i);return Object(o["d"])(null!=s,"SyncTree gave us an op for an invalid query."),yi(s,e,n,r)}{let i=[];for(const o of t.views.values())i=i.concat(yi(o,e,n,r));return i}}function Ii(t,e,n,r,i){const o=e._queryIdentifier,s=t.views.get(o);if(!s){let t=Ur(n,i?r:null),o=!1;t?o=!0:r instanceof _n?(t=Wr(n,r),o=!1):(t=_n.EMPTY_NODE,o=!1);const s=ar(new er(t,o,!1),new er(r,i,!1));return new fi(e,s)}return s}function Ni(t,e,n,r,i,o){const s=Ii(t,e,r,i,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,s),mi(s,n),bi(s,n)}function Pi(t,e,n,r){const i=e._queryIdentifier,o=[];let s=[];const a=Li(t);if("default"===i)for(const[c,l]of t.views.entries())s=s.concat(gi(l,n,r)),vi(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||o.push(l.query));else{const e=t.views.get(i);e&&(s=s.concat(gi(e,n,r)),vi(e)&&(t.views.delete(i),e.query._queryParams.loadsAllData()||o.push(e.query)))}return a&&!Li(t)&&o.push(new(Oi())(e._repo,e._path)),{removed:o,events:s}}function Ai(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ji(t,e){let n=null;for(const r of t.views.values())n=n||_i(r,e);return n}function Ri(t,e){const n=e._queryParams;if(n.loadsAllData())return Mi(t);{const n=e._queryIdentifier;return t.views.get(n)}}function Di(t,e){return null!=Ri(t,e)}function Li(t){return null!=Mi(t)}function Mi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){Object(o["d"])(!Ei,"__referenceConstructor has already been defined"),Ei=t}function $i(){return Object(o["d"])(Ei,"Reference.ts has not been loaded"),Ei}let qi=1;class Ui{constructor(t){this.listenProvider_=t,this.syncPointTree_=new pr(null),this.pendingWriteTree_=qr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wi(t,e,n,r,i){return kr(t.pendingWriteTree_,e,n,r,i),i?Zi(t,new Zn(Yn(),e,n)):[]}function zi(t,e,n=!1){const r=Sr(t.pendingWriteTree_,e),i=Ir(t.pendingWriteTree_,e);if(i){let e=new pr(null);return null!=r.snap?e=e.set(ue(),!0):F(r.children,t=>{e=e.set(new le(t),!0)}),Zi(t,new Xn(r.path,e,n))}return[]}function Hi(t,e,n){return Zi(t,new Zn(Kn(),e,n))}function Vi(t,e,n){const r=pr.fromObject(n);return Zi(t,new tr(Kn(),e,r))}function Bi(t,e){return Zi(t,new Jn(Kn(),e))}function Gi(t,e,n){const r=oo(t,n);if(r){const n=so(r),i=n.path,o=n.queryId,s=be(i,e),a=new Jn(Qn(o),s);return ao(t,i,a)}return[]}function Yi(t,e,n,r){const i=e._path,o=t.syncPointTree_.get(i);let s=[];if(o&&("default"===e._queryIdentifier||Di(o,e))){const a=Pi(o,e,n,r);ki(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=a.removed;s=a.events;const l=-1!==c.findIndex(t=>t._queryParams.loadsAllData()),u=t.syncPointTree_.findOnPath(i,(t,e)=>Li(e));if(l&&!u){const e=t.syncPointTree_.subtree(i);if(!e.isEmpty()){const n=co(e);for(let e=0;e<n.length;++e){const r=n[e],i=r.query,o=no(t,r);t.listenProvider_.startListening(lo(i),ro(t,i),o.hashFn,o.onComplete)}}}if(!u&&c.length>0&&!r)if(l){const n=null;t.listenProvider_.stopListening(lo(e),n)}else c.forEach(e=>{const n=t.queryToTagMap.get(io(e));t.listenProvider_.stopListening(lo(e),n)});uo(t,c)}return s}function Ki(t,e,n,r){const i=oo(t,r);if(null!=i){const r=so(i),o=r.path,s=r.queryId,a=be(o,e),c=new Zn(Qn(s),a,n);return ao(t,o,c)}return[]}function Qi(t,e,n,r){const i=oo(t,r);if(i){const r=so(i),o=r.path,s=r.queryId,a=be(o,e),c=pr.fromObject(n),l=new tr(Qn(s),a,c);return ao(t,o,l)}return[]}function Xi(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(t,e)=>{const n=be(t,r);i=i||ji(e,n),s=s||Li(e)});let a,c=t.syncPointTree_.get(r);if(c?(s=s||Li(c),i=i||ji(c,ue())):(c=new Ti,t.syncPointTree_=t.syncPointTree_.set(r,c)),null!=i)a=!0;else{a=!1,i=_n.EMPTY_NODE;const e=t.syncPointTree_.subtree(r);e.foreachChild((t,e)=>{const n=ji(e,ue());n&&(i=i.updateImmediateChild(t,n))})}const l=Di(c,e);if(!l&&!e._queryParams.loadsAllData()){const n=io(e);Object(o["d"])(!t.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ho();t.queryToTagMap.set(n,r),t.tagToQueryMap.set(r,n)}const u=Or(t.pendingWriteTree_,r);let h=Ni(c,e,n,u,i,a);if(!l&&!s){const n=Ri(c,e);h=h.concat(fo(t,e,n))}return h}function Ji(t,e,n){const r=!0,i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(t,n)=>{const r=be(t,e),i=ji(n,r);if(i)return i});return Rr(i,e,o,n,r)}function Zi(t,e){return to(e,t.syncPointTree_,null,Or(t.pendingWriteTree_,ue()))}function to(t,e,n,r){if(ye(t.path))return eo(t,e,n,r);{const i=e.get(ue());null==n&&null!=i&&(n=ji(i,ue()));let o=[];const s=he(t.path),a=t.operationForChild(s),c=e.children.get(s);if(c&&a){const t=n?n.getImmediateChild(s):null,e=Gr(r,s);o=o.concat(to(a,c,t,e))}return i&&(o=o.concat(Si(i,t,r,n))),o}}function eo(t,e,n,r){const i=e.get(ue());null==n&&null!=i&&(n=ji(i,ue()));let o=[];return e.children.inorderTraversal((e,i)=>{const s=n?n.getImmediateChild(e):null,a=Gr(r,e),c=t.operationForChild(e);c&&(o=o.concat(eo(c,i,s,a)))}),i&&(o=o.concat(Si(i,t,r,n))),o}function no(t,e){const n=e.query,r=ro(t,n);return{hashFn:()=>{const t=pi(e)||_n.EMPTY_NODE;return t.hash()},onComplete:e=>{if("ok"===e)return r?Gi(t,n._path,r):Bi(t,n._path);{const r=W(e,n);return Yi(t,n,null,r)}}}}function ro(t,e){const n=io(e);return t.queryToTagMap.get(n)}function io(t){return t._path.toString()+"$"+t._queryIdentifier}function oo(t,e){return t.tagToQueryMap.get(e)}function so(t){const e=t.indexOf("$");return Object(o["d"])(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function ao(t,e,n){const r=t.syncPointTree_.get(e);Object(o["d"])(r,"Missing sync point for query tag that we're tracking");const i=Or(t.pendingWriteTree_,e);return Si(r,n,i,null)}function co(t){return t.fold((t,e,n)=>{if(e&&Li(e)){const t=Mi(e);return[t]}{let t=[];return e&&(t=Ai(e)),F(n,(e,n)=>{t=t.concat(n)}),t}})}function lo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($i())(t._repo,t._path):t}function uo(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const e=io(r),n=t.queryToTagMap.get(e);t.queryToTagMap.delete(e),t.tagToQueryMap.delete(n)}}}function ho(){return qi++}function fo(t,e,n){const r=e._path,i=ro(t,e),s=no(t,n),a=t.listenProvider_.startListening(lo(e),i,s.hashFn,s.onComplete),c=t.syncPointTree_.subtree(r);if(i)Object(o["d"])(!Li(c.value),"If we're adding a query, it shouldn't be shadowed");else{const e=c.fold((t,e,n)=>{if(!ye(t)&&e&&Li(e))return[Mi(e).query];{let t=[];return e&&(t=t.concat(Ai(e).map(t=>t.query))),F(n,(e,n)=>{t=t.concat(n)}),t}});for(let n=0;n<e.length;++n){const r=e[n];t.listenProvider_.stopListening(lo(r),ro(t,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new po(e)}node(){return this.node_}}class _o{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=ge(this.path_,t);return new _o(this.syncTree_,e)}node(){return Ji(this.syncTree_,this.path_)}}const vo=function(t){return t=t||{},t["timestamp"]=t["timestamp"]||(new Date).getTime(),t},mo=function(t,e,n){return t&&"object"===typeof t?(Object(o["d"])(".sv"in t,"Unexpected leaf node or priority contents"),"string"===typeof t[".sv"]?go(t[".sv"],e,n):"object"===typeof t[".sv"]?yo(t[".sv"],e):void Object(o["d"])(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},go=function(t,e,n){switch(t){case"timestamp":return n["timestamp"];default:Object(o["d"])(!1,"Unexpected server value: "+t)}},yo=function(t,e,n){t.hasOwnProperty("increment")||Object(o["d"])(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t["increment"];"number"!==typeof r&&Object(o["d"])(!1,"Unexpected increment value: "+r);const i=e.node();if(Object(o["d"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},bo=function(t,e,n,r){return Co(e,new _o(n,t),r)},wo=function(t,e,n){return Co(t,new po(e),n)};function Co(t,e,n){const r=t.getPriority().val(),i=mo(r,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const r=t,o=mo(r.getValue(),e,n);return o!==r.getValue()||i!==r.getPriority().val()?new nn(o,yn(i)):t}{const r=t;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new nn(i))),r.forEachChild(an,(t,r)=>{const i=Co(r,e.getImmediateChild(t),n);i!==r&&(o=o.updateImmediateChild(t,i))}),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function To(t,e){let n=e instanceof le?e:new le(e),r=t,i=he(n);while(null!==i){const t=Object(o["w"])(r.node.children,i)||{children:{},childCount:0};r=new Eo(i,r,t),n=fe(n),i=he(n)}return r}function xo(t){return t.node.value}function Oo(t,e){t.node.value=e,jo(t)}function ko(t){return t.node.childCount>0}function So(t){return void 0===xo(t)&&!ko(t)}function Io(t,e){F(t.node.children,(n,r)=>{e(new Eo(n,t,r))})}function No(t,e,n,r){n&&!r&&e(t),Io(t,t=>{No(t,e,!0,r)}),n&&r&&e(t)}function Po(t,e,n){let r=n?t:t.parent;while(null!==r){if(e(r))return!0;r=r.parent}return!1}function Ao(t){return new le(null===t.parent?t.name:Ao(t.parent)+"/"+t.name)}function jo(t){null!==t.parent&&Ro(t.parent,t.name,t)}function Ro(t,e,n){const r=So(n),i=Object(o["h"])(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,jo(t)):r||i||(t.node.children[e]=n.node,t.node.childCount++,jo(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=/[\[\].#$\/\u0000-\u001F\u007F]/,Lo=/[\[\].#$\u0000-\u001F\u007F]/,Mo=10485760,Fo=function(t){return"string"===typeof t&&0!==t.length&&!Do.test(t)},$o=function(t){return"string"===typeof t&&0!==t.length&&!Lo.test(t)},qo=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$o(t)},Uo=function(t,e,n){const r=n instanceof le?new Ee(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+ke(r));if("function"===typeof e)throw new Error(t+"contains a function "+ke(r)+" with contents = "+e.toString());if(I(e))throw new Error(t+"contains "+e.toString()+" "+ke(r));if("string"===typeof e&&e.length>Mo/3&&Object(o["x"])(e)>Mo)throw new Error(t+"contains a string greater than "+Mo+" utf8 bytes "+ke(r)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let n=!1,i=!1;if(F(e,(e,o)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(i=!0,!Fo(e)))throw new Error(t+" contains an invalid key ("+e+") "+ke(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Te(r,e),Uo(t,o,r),xe(r)}),n&&i)throw new Error(t+' contains ".value" child '+ke(r)+" in addition to actual children.")}},Wo=function(t,e,n,r){if((!r||void 0!==n)&&!$o(n))throw new Error(Object(o["l"])(t,e)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},zo=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wo(t,e,n,r)},Ho=function(t,e){const n=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!Fo(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!qo(n))throw new Error(Object(o["l"])(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bo(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],o=i.getPath();null===n||we(o,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function Go(t,e,n){Bo(t,n),Ko(t,t=>we(t,e))}function Yo(t,e,n){Bo(t,n),Ko(t,t=>Ce(t,e)||Ce(e,t))}function Ko(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const o=i.path;e(o)?(Qo(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Qo(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const r=n.getEventRunner();b&&E("event: "+n.toString()),G(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="repo_interrupt",Jo=25;class Zo{constructor(t,e,n,r){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Vo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fn(),this.transactionQueueTree_=new Eo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ts(t,e,n){if(t.stats_=vt(t.repoInfo_),t.forceRestClient_||Y())t.server_=new Ln(t.repoInfo_,(e,n,r,i)=>{rs(t,e,n,r,i)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>is(t,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(o["z"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Me(t.repoInfo_,e,(e,n,r,i)=>{rs(t,e,n,r,i)},e=>{is(t,e)},e=>{os(t,e)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(e=>{t.server_.refreshAuthToken(e)}),t.appCheckProvider_.addTokenChangeListener(e=>{t.server_.refreshAppCheckToken(e.token)}),t.statsReporter_=mt(t.repoInfo_,()=>new Bn(t.stats_,t.server_)),t.infoData_=new Mn,t.infoSyncTree_=new Ui({startListening:(e,n,r,i)=>{let o=[];const s=t.infoData_.getNode(e._path);return s.isEmpty()||(o=Hi(t.infoSyncTree_,e._path,s),setTimeout(()=>{i("ok")},0)),o},stopListening:()=>{}}),ss(t,"connected",!1),t.serverSyncTree_=new Ui({startListening:(e,n,r,i)=>(t.server_.listen(e,r,n,(n,r)=>{const o=i(n,r);Yo(t.eventQueue_,e._path,o)}),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function es(t){const e=t.infoData_.getNode(new le(".info/serverTimeOffset")),n=e.val()||0;return(new Date).getTime()+n}function ns(t){return vo({timestamp:es(t)})}function rs(t,e,n,r,i){t.dataUpdateCount++;const s=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(i)if(r){const e=Object(o["u"])(n,t=>yn(t));a=Qi(t.serverSyncTree_,s,e,i)}else{const e=yn(n);a=Ki(t.serverSyncTree_,s,e,i)}else if(r){const e=Object(o["u"])(n,t=>yn(t));a=Vi(t.serverSyncTree_,s,e)}else{const e=yn(n);a=Hi(t.serverSyncTree_,s,e)}let c=s;a.length>0&&(c=vs(t,s)),Yo(t.eventQueue_,c,a)}function is(t,e){ss(t,"connected",e),!1===e&&cs(t)}function os(t,e){F(e,(e,n)=>{ss(t,e,n)})}function ss(t,e,n){const r=new le("/.info/"+e),i=yn(n);t.infoData_.updateSnapshot(r,i);const o=Hi(t.infoSyncTree_,r,i);Yo(t.eventQueue_,r,o)}function as(t){return t.nextWriteId_++}function cs(t){ds(t,"onDisconnectEvents");const e=ns(t),n=Fn();qn(t.onDisconnect_,ue(),(r,i)=>{const o=bo(r,i,t.serverSyncTree_,e);$n(n,r,o)});let r=[];qn(n,ue(),(e,n)=>{r=r.concat(Hi(t.serverSyncTree_,e,n));const i=Cs(t,e);vs(t,i)}),t.onDisconnect_=Fn(),Yo(t.eventQueue_,ue(),r)}function ls(t,e,n){let r;r=".info"===he(e._path)?Xi(t.infoSyncTree_,e,n):Xi(t.serverSyncTree_,e,n),Go(t.eventQueue_,e._path,r)}function us(t,e,n){let r;r=".info"===he(e._path)?Yi(t.infoSyncTree_,e,n):Yi(t.serverSyncTree_,e,n),Go(t.eventQueue_,e._path,r)}function hs(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Xo)}function ds(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),E(n,...e)}function fs(t,e,n){return Ji(t.serverSyncTree_,e,n)||_n.EMPTY_NODE}function ps(t,e=t.transactionQueueTree_){if(e||ws(t,e),xo(e)){const n=ys(t,e);Object(o["d"])(n.length>0,"Sending zero length transaction queue");const r=n.every(t=>0===t.status);r&&_s(t,Ao(e),n)}else ko(e)&&Io(e,e=>{ps(t,e)})}function _s(t,e,n){const r=n.map(t=>t.currentWriteId),i=fs(t,e,r);let s=i;const a=i.hash();for(let u=0;u<n.length;u++){const t=n[u];Object(o["d"])(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;const r=be(e,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}const c=s.val(!0),l=e;t.server_.put(l.toString(),c,r=>{ds(t,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let e=0;e<n.length;e++)n[e].status=2,i=i.concat(zi(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&r.push(()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved)),n[e].unwatcher();ws(t,To(t.transactionQueueTree_,e)),ps(t,t.transactionQueueTree_),Yo(t.eventQueue_,e,i);for(let t=0;t<r.length;t++)G(r[t])}else{if("datastale"===r)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{k("transaction at "+l.toString()+" failed: "+r);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=r}vs(t,e)}},a)}function vs(t,e){const n=gs(t,e),r=Ao(n),i=ys(t,n);return ms(t,i,r),r}function ms(t,e,n){if(0===e.length)return;const r=[];let i=[];const s=e.filter(t=>0===t.status),a=s.map(t=>t.currentWriteId);for(let c=0;c<e.length;c++){const s=e[c],l=be(n,s.path);let u,h=!1;if(Object(o["d"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,i=i.concat(zi(t.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=Jo)h=!0,u="maxretry",i=i.concat(zi(t.serverSyncTree_,s.currentWriteId,!0));else{const n=fs(t,s.path,a);s.currentInputSnapshot=n;const r=e[c].update(n.val());if(void 0!==r){Uo("transaction failed: Data returned ",r,s.path);let e=yn(r);const c="object"===typeof r&&null!=r&&Object(o["h"])(r,".priority");c||(e=e.updatePriority(n.getPriority()));const l=s.currentWriteId,u=ns(t),h=wo(e,n,u);s.currentOutputSnapshotRaw=e,s.currentOutputSnapshotResolved=h,s.currentWriteId=as(t),a.splice(a.indexOf(l),1),i=i.concat(Wi(t.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(zi(t.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(zi(t.serverSyncTree_,s.currentWriteId,!0))}Yo(t.eventQueue_,n,i),i=[],h&&(e[c].status=2,function(t){setTimeout(t,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&("nodata"===u?r.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):r.push(()=>e[c].onComplete(new Error(u),!1,null))))}ws(t,t.transactionQueueTree_);for(let o=0;o<r.length;o++)G(r[o]);ps(t,t.transactionQueueTree_)}function gs(t,e){let n,r=t.transactionQueueTree_;n=he(e);while(null!==n&&void 0===xo(r))r=To(r,n),e=fe(e),n=he(e);return r}function ys(t,e){const n=[];return bs(t,e,n),n.sort((t,e)=>t.order-e.order),n}function bs(t,e,n){const r=xo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Io(e,e=>{bs(t,e,n)})}function ws(t,e){const n=xo(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Oo(e,n.length>0?n:void 0)}Io(e,e=>{ws(t,e)})}function Cs(t,e){const n=Ao(gs(t,e)),r=To(t.transactionQueueTree_,e);return Po(r,e=>{Es(t,e)}),Es(t,r),No(r,e=>{Es(t,e)}),n}function Es(t,e){const n=xo(e);if(n){const r=[];let i=[],s=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?(Object(o["d"])(s===e-1,"All SENT items should be at beginning of queue."),s=e,n[e].status=3,n[e].abortReason="set"):(Object(o["d"])(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),i=i.concat(zi(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&r.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Oo(e,void 0):n.length=s+1,Yo(t.eventQueue_,Ao(e),i);for(let t=0;t<r.length;t++)G(r[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let t=n[i];try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(r){}e+="/"+t}return e}function xs(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${t}'`)}return e}const Os=function(t,e){const n=ks(t),r=n.namespace;"firebase.com"===n.domain&&O(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||O("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||S();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ut(n.host,n.secure,r,e,i,"",r!==n.subdomain),path:new le(n.pathString)}},ks=function(t){let e="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof t){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");-1===u&&(u=t.length);let h=t.indexOf("?");-1===h&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Ts(t.substring(u,h)));const d=xs(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");r=e.substring(0,t).toLowerCase(),n=e.substring(t+1),o=r}"ns"in d&&(o=d["ns"])}return{host:e,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(t,e,n,r){this.eventType=t,this.eventRegistration=e,this.snapshot=n,this.prevName=r}getPath(){const t=this.snapshot.ref;return"value"===this.eventType?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(o["z"])(this.snapshot.exportVal())}}class Is{constructor(t,e,n){this.eventRegistration=t,this.error=e,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e){this.snapshotCallback=t,this.cancelCallback=e}onValue(t,e){this.snapshotCallback.call(null,t,e)}onCancel(t){return Object(o["d"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ps{constructor(t,e,n,r){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=r}get key(){return ye(this._path)?null:pe(this._path)}get ref(){return new As(this._repo,this._path)}get _queryIdentifier(){const t=Dn(this._queryParams),e=L(t);return"{}"===e?"default":e}get _queryObject(){return Dn(this._queryParams)}isEqual(t){if(t=Object(o["m"])(t),!(t instanceof Ps))return!1;const e=this._repo===t._repo,n=we(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return e&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+_e(this._path)}}class As extends Ps{constructor(t,e){super(t,e,new An,!1)}get parent(){const t=me(this._path);return null===t?null:new As(this._repo,t)}get root(){let t=this;while(null!==t.parent)t=t.parent;return t}}class js{constructor(t,e,n){this._node=t,this.ref=e,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const e=new le(t),n=Ds(this.ref,t);return new js(this._node.getChild(e),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,(e,n)=>t(new js(n,Ds(this.ref,e),an)))}hasChild(t){const e=new le(t);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rs(t,e){return t=Object(o["m"])(t),t._checkNotDeleted("ref"),void 0!==e?Ds(t._root,e):t._root}function Ds(t,e){return t=Object(o["m"])(t),null===he(t._path)?zo("child","path",e,!1):Wo("child","path",e,!1),new As(t._repo,ge(t._path,e))}class Ls{constructor(t){this.callbackContext=t}respondsTo(t){return"value"===t}createEvent(t,e){const n=e._queryParams.getIndex();return new Ss("value",this,new js(t.snapshotNode,new As(e._repo,e._path),n))}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new Is(this,t,e):null}matches(t){return t instanceof Ls&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ms{constructor(t,e){this.eventType=t,this.callbackContext=e}respondsTo(t){let e="children_added"===t?"child_added":t;return e="children_removed"===e?"child_removed":e,this.eventType===e}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new Is(this,t,e):null}createEvent(t,e){Object(o["d"])(null!=t.childName,"Child events should have a childName.");const n=Ds(new As(e._repo,e._path),t.childName),r=e._queryParams.getIndex();return new Ss(t.type,this,new js(t.snapshotNode,n,r),t.prevName)}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof Ms&&(this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Fs(t,e,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const e=n,r=(n,r)=>{us(t._repo,t,a),e(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new Ns(n,o||void 0),a="value"===e?new Ls(s):new Ms(e,s);return ls(t._repo,t,a),()=>us(t._repo,t,a)}function $s(t,e,n,r){return Fs(t,"value",e,n,r)}xi(As),Fi(As);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qs="FIREBASE_DATABASE_EMULATOR_HOST",Us={};let Ws=!1;function zs(e,n,r,i,o){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||O("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",e.options.projectId),s=e.options.projectId+"-default-rtdb.firebaseio.com");let a,c=Os(s,o),l=c.repoInfo,u=void 0;"undefined"!==typeof t&&(u=Object({NODE_ENV:"production",BASE_URL:"/translation-comments/"})[qs]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,c=Os(s,o),l=c.repoInfo):a=!c.repoInfo.secure;const h=o&&a?new J(J.OWNER):new X(e.name,e.options,n);Ho("Invalid Firebase Database URL",c),ye(c.path)||O("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Vs(l,e,h,new Q(e.name,r));return new Bs(d,e)}function Hs(t,e){const n=Us[e];n&&n[t.key]===t||O(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hs(t),delete n[t.key]}function Vs(t,e,n,r){let i=Us[e.name];i||(i={},Us[e.name]=i);let o=i[t.toURLString()];return o&&O("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Zo(t,Ws,n,r),i[t.toURLString()]=o,o}class Bs{constructor(t,e){this._repoInternal=t,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ts(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new As(this._repo,ue())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Hs(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&O("Cannot call "+t+" on a deleted database.")}}function Gs(t=Object(r["d"])(),e){return Object(r["b"])(t,"database").getImmediate({identifier:e})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ys(t){u(r["a"]),Object(r["c"])(new i["a"]("database",(t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return zs(n,r,i,e)},"PUBLIC").setMultipleInstances(!0)),Object(r["f"])(a,c,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},Me.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Ys()}).call(this,n("4362"))},5606:function(t,e,n){"use strict";n.d(e,"a",(function(){return B})),n.d(e,"b",(function(){return W})),n.d(e,"c",(function(){return U})),n.d(e,"d",(function(){return Y})),n.d(e,"e",(function(){return G})),n.d(e,"f",(function(){return K}));var r=n("ffa6"),i=n("4fc1"),o=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",l="0.7.3",u=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",_="@firebase/app-check",v="@firebase/auth",m="@firebase/auth-compat",g="@firebase/database",y="@firebase/database-compat",b="@firebase/functions",w="@firebase/functions-compat",C="@firebase/installations",E="@firebase/installations-compat",T="@firebase/messaging",x="@firebase/messaging-compat",O="@firebase/performance",k="@firebase/performance-compat",S="@firebase/remote-config",I="@firebase/remote-config-compat",N="@firebase/storage",P="@firebase/storage-compat",A="@firebase/firestore",j="@firebase/firestore-compat",R="firebase",D="9.1.2",L="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[_]:"fire-app-check",[p]:"fire-app-check-compat",[v]:"fire-auth",[m]:"fire-auth-compat",[g]:"fire-rtdb",[y]:"fire-rtdb-compat",[b]:"fire-fn",[w]:"fire-fn-compat",[C]:"fire-iid",[E]:"fire-iid-compat",[T]:"fire-fcm",[x]:"fire-fcm-compat",[O]:"fire-perf",[k]:"fire-perf-compat",[S]:"fire-rc",[I]:"fire-rc-compat",[N]:"fire-gcs",[P]:"fire-gcs-compat",[A]:"fire-fst",[j]:"fire-fst-compat","fire-js":"fire-js",[R]:"fire-js-all"},F=new Map,$=new Map;function q(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function U(t){const e=t.name;if($.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;$.set(e,t);for(const n of F.values())q(n,t);return!0}function W(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},H=new o["b"]("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=D;function G(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:L,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["k"])(t,s.options)&&Object(o["k"])(n,s.config))return s;throw H.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of $.values())a.addComponent(r);const c=new V(t,n,a);return F.set(i,c),c}function Y(t=L){const e=F.get(t);if(!e)throw H.create("no-app",{appName:t});return e}function K(t,e,n){var i;let o=null!==(i=M[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}U(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(t){U(new r["a"]("platform-logger",t=>new s(t),"PRIVATE")),K(c,l,t),K("fire-js","")}Q()},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=o.f;return n?e.concat(n(t)):e}},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("1626"),i=n("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(i(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),s=n("7418"),a=n("d1e7"),c=n("7b0b"),l=n("44ad"),u=Object.assign,h=Object.defineProperty;t.exports=!u||i((function(){if(r&&1!==u({b:1},u(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=u({},t)[n]||o(u({},e)).join("")!=i}))?function(t,e){var n=c(t),i=arguments.length,u=1,h=s.f,d=a.f;while(i>u){var f,p=l(arguments[u++]),_=h?o(p).concat(h(p)):o(p),v=_.length,m=0;while(v>m)f=_[m++],r&&!d.call(p,f)||(n[f]=p[f])}return n}:u},"66ce":function(t,e,n){"use strict";var r=n("51b0");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]}))},"68ee":function(t,e,n){var r=n("d039"),i=n("1626"),o=n("f5df"),s=n("d066"),a=n("8925"),c=[],l=s("Reflect","construct"),u=/^\s*(?:class|function)\b/,h=u.exec,d=!u.exec((function(){})),f=function(t){if(!i(t))return!1;try{return l(Object,c,t),!0}catch(e){return!1}},p=function(t){if(!i(t))return!1;switch(o(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!h.call(u,a(t))};t.exports=!l||r((function(){var t;return f(f.call)||!f(Object)||!f((function(){t=!0}))||t}))?p:f},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),l=n("9112"),u=n("1a2d"),h=n("c6cd"),d=n("f772"),f=n("d012"),p="Object already initialized",_=a.WeakMap,v=function(t){return o(t)?i(t):r(t,{})},m=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var g=h.state||(h.state=new _),y=g.get,b=g.has,w=g.set;r=function(t,e){if(b.call(g,t))throw new TypeError(p);return e.facade=t,w.call(g,t,e),e},i=function(t){return y.call(g,t)||{}},o=function(t){return b.call(g,t)}}else{var C=d("state");f[C]=!0,r=function(t,e){if(u(t,C))throw new TypeError(p);return e.facade=t,l(t,C,e),e},i=function(t){return u(t,C)?t[C]:{}},o=function(t){return u(t,C)}}t.exports={set:r,get:i,has:o,enforce:v,getterFor:m}},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),l=n("69f3"),u=n("5e77").CONFIGURABLE,h=l.get,d=l.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var l,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,_=!!c&&!!c.noTargetGet,v=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||u&&n.name!==v)&&s(n,"name",v),l=d(n),l.source||(l.source=f.join("string"==typeof v?v:""))),t!==r?(h?!_&&t[e]&&(p=!0):delete t[e],p?t[e]=n:s(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),l=n("cc12"),u=n("f772"),h=">",d="<",f="prototype",p="script",_=u("IE_PROTO"),v=function(){},m=function(t){return d+p+h+t+d+"/"+p+h},g=function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=l("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(m("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?g(r):y():g(r);var t=s.length;while(t--)delete b[f][s[t]];return b()};a[_]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(v[f]=i(t),n=new v,v[f]=null,n[_]=t):n=b(),void 0===e?n:o(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("5e77"),s=n("1626"),a=n("9ed3"),c=n("e163"),l=n("d2bb"),u=n("d44e"),h=n("9112"),d=n("6eeb"),f=n("b622"),p=n("3f8c"),_=n("ae93"),v=o.PROPER,m=o.CONFIGURABLE,g=_.IteratorPrototype,y=_.BUGGY_SAFARI_ITERATORS,b=f("iterator"),w="keys",C="values",E="entries",T=function(){return this};t.exports=function(t,e,n,o,f,_,x){a(n,e,o);var O,k,S,I=function(t){if(t===f&&R)return R;if(!y&&t in A)return A[t];switch(t){case w:return function(){return new n(this,t)};case C:return function(){return new n(this,t)};case E:return function(){return new n(this,t)}}return function(){return new n(this)}},N=e+" Iterator",P=!1,A=t.prototype,j=A[b]||A["@@iterator"]||f&&A[f],R=!y&&j||I(f),D="Array"==e&&A.entries||j;if(D&&(O=c(D.call(new t)),O!==Object.prototype&&O.next&&(i||c(O)===g||(l?l(O,g):s(O[b])||d(O,b,T)),u(O,N,!0,!0),i&&(p[N]=T))),v&&f==C&&j&&j.name!==C&&(!i&&m?h(A,"name",C):(P=!0,R=function(){return j.call(this)})),f)if(k={values:I(C),keys:_?R:I(w),entries:I(E)},x)for(S in k)(y||P||!(S in A))&&d(A,S,k[S]);else r({target:e,proto:!0,forced:y||P},k);return i&&!x||A[b]===R||d(A,b,R,{name:f}),p[e]=R,k}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;t.exports=i(s)&&/native code/.test(o(s))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(r(t))return t;throw TypeError(String(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"===typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("1626"),i=n("c6cd"),o=Function.toString;r(i.inspectSource)||(i.inspectSource=function(t){return o.call(t)}),t.exports=i.inspectSource},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==u||n!=l&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";t.exports=s},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(A){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),s=new I(r||[]);return o._invoke=x(t,n,s),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(A){return{type:"throw",arg:A}}}t.wrap=l;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",_={};function v(){}function m(){}function g(){}var y={};c(y,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(N([])));w&&w!==n&&r.call(w,o)&&(y=w);var C=g.prototype=v.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(i,o,s,a){var c=u(t[i],t,o);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function x(t,e,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return P()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=O(s,n);if(a){if(a===_)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=u(t,e,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===_)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return _;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var i=u(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,_;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,_):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,_)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=g,c(C,"constructor",g),c(g,"constructor",m),m.displayName=c(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,a,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},E(T.prototype),c(T.prototype,s,(function(){return this})),t.AsyncIterator=T,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new T(l(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},E(C),c(C,a,"Generator"),c(C,o,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),l=r.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),_}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(t,e,n){var r=n("59ed"),i=n("825a"),o=n("35a1");t.exports=function(t,e){var n=arguments.length<2?o(t):e;if(r(n))return i(n.call(t));throw TypeError(String(t)+" is not iterable")}},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("a04b"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=s(e),o(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var l=e+" Iterator";return t.prototype=i(r,{next:o(1,n)}),s(t,l,!1,!0),a[l]=c,t}},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:String(e)}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),l=n("4840"),u=n("cdf9"),h=n("6eeb"),d=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(t){var e=l(this,a("Promise")),n=c(t);return this.then(n?function(n){return u(e,t()).then((function(){return n}))}:t,n?function(n){return u(e,t()).then((function(){throw n}))}:t)}}),!i&&c(o)){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&h(o.prototype,"finally",f,{unsafe:!0})}},ae93:function(t,e,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),l=n("e163"),u=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=l(l(o)),i!==Object.prototype&&(r=i)):p=!0);var _=void 0==r||s((function(){var t={};return r[f].call(t)!==t}));_?r={}:d&&(r=c(r)),a(r[f])||u(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("9bf2").f,s=Function.prototype,a=s.toString,c=/^\s*function ([^ (]*)/,l="name";r&&!i&&o(s,l,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,o,s,a,c,l,u,h=n("da84"),d=n("06cf").f,f=n("2cf4").set,p=n("1cdc"),_=n("d4c3"),v=n("a4b4"),m=n("605d"),g=h.MutationObserver||h.WebKitMutationObserver,y=h.document,b=h.process,w=h.Promise,C=d(h,"queueMicrotask"),E=C&&C.value;E||(r=function(){var t,e;m&&(t=b.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?s():o=void 0,n}}o=void 0,t&&t.enter()},p||m||v||!g||!y?!_&&w&&w.resolve?(l=w.resolve(void 0),l.constructor=w,u=l.then,s=function(){u.call(l,r)}):s=m?function(){b.nextTick(r)}:function(){f.call(h,r)}:(a=!0,c=y.createTextNode(""),new g(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),t.exports=E||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,s()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),l=i("wks"),u=r.Symbol,h=c?u:u&&u.withoutSetter||s;t.exports=function(t){return o(l,t)&&(a||"string"==typeof l[t])||(a&&o(u,t)?l[t]=u[t]:l[t]=h("Symbol."+t)),l[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},c04e:function(t,e,n){var r=n("861d"),i=n("d9b5"),o=n("dc4a"),s=n("485a"),a=n("b622"),c=a("toPrimitive");t.exports=function(t,e){if(!r(t)||i(t))return t;var n,a=o(t,c);if(a){if(void 0===e&&(e="default"),n=a.call(t,e),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("1a2d"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,l=[];for(n in a)!r(s,n)&&r(a,n)&&l.push(n);while(e.length>c)r(a,n=e[c++])&&(~o(l,n)||l.push(n));return l}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d9b5:function(t,e,n){var r=n("1626"),i=n("d066"),o=n("fdbf");t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return r(e)&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var l=[];for(c=a;c<i.length;c++)l.push("..");return l=l.concat(o.slice(a)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("1a2d"),i=n("1626"),o=n("7b0b"),s=n("f772"),a=n("e177"),c=s("IE_PROTO"),l=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof Object?l:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",l=s.set,u=s.getterFor(c);t.exports=a(Array,"Array",(function(t,e){l(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),l=n("da84"),u=n("d066"),h=n("fea9"),d=n("6eeb"),f=n("e2cc"),p=n("d2bb"),_=n("d44e"),v=n("2626"),m=n("59ed"),g=n("1626"),y=n("861d"),b=n("19aa"),w=n("8925"),C=n("2266"),E=n("1c7e"),T=n("4840"),x=n("2cf4").set,O=n("b575"),k=n("cdf9"),S=n("44de"),I=n("f069"),N=n("e667"),P=n("69f3"),A=n("94ca"),j=n("b622"),R=n("6069"),D=n("605d"),L=n("2d00"),M=j("species"),F="Promise",$=P.get,q=P.set,U=P.getterFor(F),W=h&&h.prototype,z=h,H=W,V=l.TypeError,B=l.document,G=l.process,Y=I.f,K=Y,Q=!!(B&&B.createEvent&&l.dispatchEvent),X=g(l.PromiseRejectionEvent),J="unhandledrejection",Z="rejectionhandled",tt=0,et=1,nt=2,rt=1,it=2,ot=!1,st=A(F,(function(){var t=w(z),e=t!==String(z);if(!e&&66===L)return!0;if(c&&!H["finally"])return!0;if(L>=51&&/native code/.test(t))return!1;var n=new z((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[M]=r,ot=n.then((function(){}))instanceof r,!ot||!e&&R&&!X})),at=st||!E((function(t){z.all(t)["catch"]((function(){}))})),ct=function(t){var e;return!(!y(t)||!g(e=t.then))&&e},lt=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;O((function(){var r=t.value,i=t.state==et,o=0;while(n.length>o){var s,a,c,l=n[o++],u=i?l.ok:l.fail,h=l.resolve,d=l.reject,f=l.domain;try{u?(i||(t.rejection===it&&ft(t),t.rejection=rt),!0===u?s=r:(f&&f.enter(),s=u(r),f&&(f.exit(),c=!0)),s===l.promise?d(V("Promise-chain cycle")):(a=ct(s))?a.call(s,h,d):h(s)):d(r)}catch(p){f&&!c&&f.exit(),d(p)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ht(t)}))}},ut=function(t,e,n){var r,i;Q?(r=B.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),l.dispatchEvent(r)):r={promise:e,reason:n},!X&&(i=l["on"+t])?i(r):t===J&&S("Unhandled promise rejection",n)},ht=function(t){x.call(l,(function(){var e,n=t.facade,r=t.value,i=dt(t);if(i&&(e=N((function(){D?G.emit("unhandledRejection",r,n):ut(J,n,r)})),t.rejection=D||dt(t)?it:rt,e.error))throw e.value}))},dt=function(t){return t.rejection!==rt&&!t.parent},ft=function(t){x.call(l,(function(){var e=t.facade;D?G.emit("rejectionHandled",e):ut(Z,e,t.value)}))},pt=function(t,e,n){return function(r){t(e,r,n)}},_t=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=nt,lt(t,!0))},vt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw V("Promise can't be resolved itself");var r=ct(e);r?O((function(){var n={done:!1};try{r.call(e,pt(vt,n,t),pt(_t,n,t))}catch(i){_t(n,i,t)}})):(t.value=e,t.state=et,lt(t,!1))}catch(i){_t({done:!1},i,t)}}};if(st&&(z=function(t){b(this,z,F),m(t),r.call(this);var e=$(this);try{t(pt(vt,e),pt(_t,e))}catch(n){_t(e,n)}},H=z.prototype,r=function(t){q(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:tt,value:void 0})},r.prototype=f(H,{then:function(t,e){var n=U(this),r=Y(T(this,z));return r.ok=!g(t)||t,r.fail=g(e)&&e,r.domain=D?G.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=tt&&lt(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=$(t);this.promise=t,this.resolve=pt(vt,e),this.reject=pt(_t,e)},I.f=Y=function(t){return t===z||t===o?new i(t):K(t)},!c&&g(h)&&W!==Object.prototype)){s=W.then,ot||(d(W,"then",(function(t,e){var n=this;return new z((function(t,e){s.call(n,t,e)})).then(t,e)}),{unsafe:!0}),d(W,"catch",H["catch"],{unsafe:!0}));try{delete W.constructor}catch(mt){}p&&p(W,H)}a({global:!0,wrap:!0,forced:st},{Promise:z}),_(z,F,!1,!0),v(F),o=u(F),a({target:F,stat:!0,forced:st},{reject:function(t){var e=Y(this);return e.reject.call(void 0,t),e.promise}}),a({target:F,stat:!0,forced:c||st},{resolve:function(t){return k(c&&this===o?z:this,t)}}),a({target:F,stat:!0,forced:at},{all:function(t){var e=this,n=Y(e),r=n.resolve,i=n.reject,o=N((function(){var n=m(e.resolve),o=[],s=0,a=1;C(t,(function(t){var c=s++,l=!1;o.push(void 0),a++,n.call(e,t).then((function(t){l||(l=!0,o[c]=t,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=Y(e),r=n.reject,i=N((function(){var i=m(e.resolve);C(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=s.f,c=o.f,l=0;l<n.length;l++){var u=n[l];r(t,u)||a(t,u,c(e,u))}}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f5df:function(t,e,n){var r=n("00ee"),i=n("1626"),o=n("c6b6"),s=n("b622"),a=s("toStringTag"),c="Arguments"==o(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=Object(t),a))?n:c?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise},ffa6:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p}));function r(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{c(r.next(t))}catch(e){o(e)}}function a(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(s,a)}c((r=r.apply(t,e||[])).next())}))}function i(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function o(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function a(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create;var c=n("1fd5"),l=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),u="[DEFAULT]",h=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new c["a"];if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(f(t))try{this.getOrInitializeService({instanceIdentifier:u})}catch(p){}try{for(var r=o(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var a=s(i.value,2),c=a[0],l=a[1],h=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:h});l.resolve(d)}catch(p){}}}catch(_){e={error:_}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=u),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return r(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(a(a([],s(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),s(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=u),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=u),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.options,i=void 0===r?{}:r,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:a,options:i});try{for(var l=o(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var h=s(u.value,2),d=h[0],f=h[1],p=this.normalizeInstanceIdentifier(d);a===p&&f.resolve(c)}}catch(_){e={error:_}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(e)throw e.error}}return c},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,r,i=this.onInitCallbacks.get(e);if(i)try{for(var s=o(i),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(t,e)}catch(l){}}}catch(u){n={error:u}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:d(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=u),this.component?this.component.multipleInstances?t:u:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function d(t){return t===u?void 0:t}function f(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new h(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()}}]);
//# sourceMappingURL=chunk-vendors.86dacbad.js.map