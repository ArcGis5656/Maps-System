/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var t,n;let e;var r,o;null!=(t=globalThis.dojoConfig)&&t.has||null!=(n=globalThis.esriConfig)&&n.has?e={...null==(r=globalThis.dojoConfig)?void 0:r.has,...null==(o=globalThis.esriConfig)?void 0:o.has}:e={};function a(t){return"function"==typeof e[t]?e[t]=e[t](globalThis):e[t]}a.add=(t,n,r,o)=>((o||void 0===e[t])&&(e[t]=n),r&&a(t)),a.cache=e,a.add("esri-deprecation-warnings",!0),(()=>{var t;a.add("host-webworker",void 0!==globalThis.WorkerGlobalScope&&self instanceof globalThis.WorkerGlobalScope);const n="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document;if(a.add("host-browser",n),a.add("host-node","object"==typeof globalThis.process&&(null==(t=globalThis.process.versions)?void 0:t.node)&&globalThis.process.versions.v8),a.add("dom",n),a("host-browser")){const t=navigator,n=t.userAgent,e=t.appVersion,r=parseFloat(e);if(a.add("wp",parseFloat(n.split("Windows Phone")[1])||void 0),a.add("msapp",parseFloat(n.split("MSAppHost/")[1])||void 0),a.add("khtml",e.includes("Konqueror")?r:void 0),a.add("edge",parseFloat(n.split("Edge/")[1])||void 0),a.add("opr",parseFloat(n.split("OPR/")[1])||void 0),a.add("webkit",!a("wp")&&!a("edge")&&parseFloat(n.split("WebKit/")[1])||void 0),a.add("chrome",!a("edge")&&!a("opr")&&parseFloat(n.split("Chrome/")[1])||void 0),a.add("android",!a("wp")&&parseFloat(n.split("Android ")[1])||void 0),a.add("safari",!e.includes("Safari")||a("wp")||a("chrome")||a("android")||a("edge")||a("opr")?void 0:parseFloat(e.split("Version/")[1])),a.add("mac",e.includes("Macintosh")),!a("wp")&&n.match(/(iPhone|iPod|iPad)/)){const t=RegExp.$1.replace(/P/,"p"),e=n.match(/OS ([\d_]+)/)?RegExp.$1:"1",r=parseFloat(e.replace(/_/,".").replace(/_/g,""));a.add(t,r),a.add("ios",r)}a.add("trident",parseFloat(e.split("Trident/")[1])||void 0),a("webkit")||(!n.includes("Gecko")||a("wp")||a("khtml")||a("trident")||a("edge")||a.add("mozilla",r),a("mozilla")&&a.add("ff",parseFloat(n.split("Firefox/")[1]||n.split("Minefield/")[1])||void 0))}})(),(()=>{if(globalThis.navigator){const t=navigator.userAgent,n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(t),e=/iPhone/i.test(t);n&&a.add("esri-mobile",n),e&&a.add("esri-iPhone",e),a.add("esri-geolocation",!!navigator.geolocation)}a.add("esri-canvas-svg-support",!a("trident")),a.add("esri-wasm","WebAssembly"in globalThis),a.add("esri-shared-array-buffer",(()=>{const t="SharedArrayBuffer"in globalThis,n=!1===globalThis.crossOriginIsolated;return t&&!n})),a.add("esri-atomics","Atomics"in globalThis),a.add("esri-workers","Worker"in globalThis),a.add("web-feat:cache","caches"in globalThis),a.add("esri-workers-arraybuffer-transfer",!a("safari")||Number(a("safari"))>=12),a.add("featurelayer-simplify-thresholds",[.5,.5,.5,.5]),a.add("featurelayer-simplify-payload-size-factors",[1,1,4]),a.add("featurelayer-snapshot-enabled",!0),a.add("featurelayer-snapshot-point-min-threshold",8e4),a.add("featurelayer-snapshot-point-max-threshold",4e5),a.add("featurelayer-snapshot-point-coverage",.1),a.add("featurelayer-advanced-symbols",!1),a.add("featurelayer-pbf",!0),a.add("featurelayer-pbf-statistics",!1),a.add("feature-layers-workers",!0),a.add("feature-polyline-generalization-factor",1),a.add("mapview-transitions-duration",200),a.add("mapview-srswitch-adjust-rotation-scale-threshold",24e6),a.add("mapserver-pbf-enabled",!1),a("host-webworker")||a("host-browser")&&(a.add("esri-csp-restrictions",(()=>{try{new Function}catch{return!0}return!1})),a.add("esri-image-decode",(()=>{if("decode"in new Image){const t=new Image;return t.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',void t.decode().then((()=>{a.add("esri-image-decode",!0,!0,!0)})).catch((()=>{a.add("esri-image-decode",!1,!0,!0)}))}return!1})),a.add("esri-url-encodes-apostrophe",(()=>{const t=window.document.createElement("a");return t.href="?'",t.href.includes("?%27")})))})();const i=null;function s(t){return null!=t}function c(t){return null==t}function u(t){return void 0===t}function l(t,n){return s(t)?n(t):null}function f(t){return t}function d(t,n){if(c(t))throw new Error(n);return t}function h(t,n){return s(t)?t:"function"==typeof n?n():n}function p(t,n){return s(t)?t:n}function g(t){return s(t)&&t.destroy(),null}function y(t){return s(t)&&t.dispose(),null}function m(t){return s(t)&&t.remove(),null}function b(t){return s(t)&&t.abort(),null}function w(t){return s(t)&&t.release(),null}function v(t,n){return s(t)&&s(n)?t.equals(n):t===n}function A(t){return null}function T(t,n){const e=new Array;return t.forEach((t=>{const r=n(t);s(r)&&e.push(r)})),e}function F(t,n){const e=new Array;for(const r of t)e.push(O(r,null,n));return e}function M(t,n){for(const e of t)l(e,n)}function O(t,n,e){return s(t)?e(t):n}function P(t){return t.filter((t=>s(t)))}function j(t,...n){let e=t;for(let t=0;t<n.length&&e;++t)e=e[n[t]];return e}function _(t){return t}class k{constructor(t=1){this._seed=t}set seed(t){this._seed=null==t?Math.random()*k._m:t}getInt(){return this._seed=(k._a*this._seed+k._c)%k._m,this._seed}getFloat(){return this.getInt()/(k._m-1)}getIntRange(t,n){return Math.round(this.getFloatRange(t,n))}getFloatRange(t,n){const e=n-t;return t+this.getInt()/k._m*e}}function x(t){if(!t)return;const n=t.length;return n>0?t[n-1]:void 0}function E(t){return t}function I(t,n=E){return function(t,n=E){if(!t||0===t.length)return;let e=t[0],r=n(e);for(let o=1;o<t.length;++o){const a=t[o],i=Number(n(a));i>r&&(r=i,e=a)}return e}(t,(t=>-n(t)))}function S(t,n){return n?t.filter(((t,e,r)=>r.findIndex(n.bind(null,t))===e)):t.filter(((t,n,e)=>e.indexOf(t)===n))}function N(t,n,e){if(c(t)&&c(n))return!0;if(c(t)||c(n)||t.length!==n.length)return!1;if(e){for(let r=0;r<t.length;r++)if(!e(t[r],n[r]))return!1}else for(let e=0;e<t.length;e++)if(t[e]!==n[e])return!1;return!0}function z(t,n,e){let r,o;return e?(r=n.filter((n=>!t.some((t=>e(t,n))))),o=t.filter((t=>!n.some((n=>e(n,t)))))):(r=n.filter((n=>!t.includes(n))),o=t.filter((t=>!n.includes(t)))),{added:r,removed:o}}function U(t){return t&&"number"==typeof t.length}function C(t,n){const e=t.length;if(0===e)return[];const r=[];for(let o=0;o<e;o+=n)r.push(t.slice(o,o+n));return r}k._m=2147483647,k._a=48271,k._c=0;const R=!!Array.prototype.fill;function B(t,n){if(R)return new Array(t).fill(n);const e=new Array(t);for(let r=0;r<t;r++)e[r]=n;return e}function D(t,n){void 0===n&&(n=t,t=0);const e=new Array(n-t);for(let r=t;r<n;r++)e[r-t]=r;return e}function W(t,n,e){const r=t.length;let o=0,a=r-1;for(;o<a;){const e=o+Math.floor((a-o)/2);n>t[e]?o=e+1:a=e}const i=t[o];return e?n>=t[r-1]?-1:i===n?o:o-1:i===n?o:-1}function G(t,n,e){if(!t||0===t.length)return;const r=t.length-1,o=t[0];if(n<=e(o))return o;const a=t[r];if(n>=e(a))return a;let i=0,s=0,c=r;for(;i<c;){s=i+Math.floor((c-i)/2);const o=t[s],a=e(o);if(a===n)return o;if(n<a){if(s>0){const r=t[s-1],i=e(r);if(n>i)return n-i>=a-n?o:r}c=s}else{if(s<r){const r=t[s+1],i=e(r);if(n<i)return n-a>=i-n?r:o}i=s+1}}return t[s]}function V(t){return t.reduce(((t,n)=>t.concat(n||[])),[])}class q{constructor(){this.last=0}}const K=new q;function L(t,n,e,r){r=r||K;const o=Math.max(0,r.last-10);for(let a=o;a<e;++a)if(t[a]===n)return r.last=a,a;const a=Math.min(o,e);for(let e=0;e<a;++e)if(t[e]===n)return r.last=e,e;return-1}function $(t,n,e,r){const o=null==e?t.length:e,a=L(t,n,o,r);if(-1!==a)return t[a]=t[o-1],null==e&&t.pop(),n}const H=new Set;function J(t,n,e=t.length,r=n.length,o,a){if(0===r||0===e)return e;H.clear();for(let t=0;t<r;++t)H.add(n[t]);o=o||K;const i=Math.max(0,o.last-10);for(let n=i;n<e;++n)if(H.has(t[n])&&(a&&a.push(t[n]),H.delete(t[n]),t[n]=t[e-1],--e,--n,0===H.size||0===e))return H.clear(),e;for(let n=0;n<i;++n)if(H.has(t[n])&&(a&&a.push(t[n]),H.delete(t[n]),t[n]=t[e-1],--e,--n,0===H.size||0===e))return H.clear(),e;return H.clear(),e}function Q(t,n,e){const r=t.length;if(n>=r)return t.slice(0);const o=X(e),a=new Set,i=[];for(;i.length<n;){const n=Math.floor(o()*r);a.has(n)||(a.add(n),i.push(t[n]))}return i}function X(t){return t?(Z.seed=t,()=>Z.getFloat()):Math.random}function Y(t,n){const e=X(n);for(let n=t.length-1;n>0;n--){const r=Math.floor(e()*(n+1)),o=t[n];t[n]=t[r],t[r]=o}return t}const Z=new k;function tt(t,n){const e=t.indexOf(n);return-1!==e?(t.splice(e,1),n):null}function nt(t,n){if(t.forEach)t.forEach(n);else for(let e=0;e<t.length;e++)n(t[e],e,t)}function et(t,n,e){if(t.slice)return t.slice(n,e);void 0===n?n=0:(n<0&&(n+=t.length),n=Math.min(t.length,Math.max(0,n))),void 0===e?e=t.length:(e<0&&(e+=t.length),e=Math.min(t.length,Math.max(0,e)));const r=Math.max(0,e-n),o=new(0,t.constructor)(r);for(let e=0;e<r;e++)o[e]=t[n+e];return o}function rt(t){return t instanceof ArrayBuffer||t&&t.constructor&&"ArrayBuffer"===t.constructor.name}function ot(t){return t instanceof Uint8Array||t&&t.constructor&&"Uint8Array"===t.constructor.name}function at(t){return t instanceof Int16Array||t&&t.constructor&&"Int16Array"===t.constructor.name}function it(t){return t instanceof Uint16Array||t&&t.constructor&&"Uint16Array"===t.constructor.name}function st(t){return t instanceof Int32Array||t&&t.constructor&&"Int32Array"===t.constructor.name}function ct(t){return t instanceof Uint32Array||t&&t.constructor&&"Uint32Array"===t.constructor.name}function ut(t){return t instanceof Float32Array||t&&t.constructor&&"Float32Array"===t.constructor.name}function lt(t){return t instanceof Float64Array||t&&t.constructor&&"Float64Array"===t.constructor.name}function ft(t){const n=new Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e];return n}function dt(t){return c(t)?0:128+t.buffer.byteLength+64}function ht(t,n){let e;if(n)for(e in t)t.hasOwnProperty(e)&&(void 0===t[e]?delete t[e]:t[e]instanceof Object&&ht(t[e],!0));else for(e in t)t.hasOwnProperty(e)&&void 0===t[e]&&delete t[e];return t}function pt(t){if(!t||"object"!=typeof t||"function"==typeof t)return t;const n=wt(t);if(s(n))return n;if(yt(t))return t.clone();if(mt(t))return t.map(pt);if(bt(t))return t.clone();const e={};for(const n of Object.getOwnPropertyNames(t))e[n]=pt(t[n]);return e}function gt(t){if(!t||"object"!=typeof t||"function"==typeof t)return t;const n=wt(t);if(s(n))return n;if(mt(t)){let n=!0;const e=t.map((t=>{const e=gt(t);return null!=t&&null==e&&(n=!1),e}));return n?e:null}if(yt(t))return t.clone();if(!bt(t)){const n=new(0,Object.getPrototypeOf(t).constructor);for(const e of Object.getOwnPropertyNames(t)){const r=t[e],o=gt(r);if(null!=r&&null==o)return null;n[e]=o}return n}return null}function yt(t){return"function"==typeof t.clone}function mt(t){return"function"==typeof t.map&&"function"==typeof t.forEach}function bt(t){return"function"==typeof t.notifyChange&&"function"==typeof t.watch}function wt(t){if((n=t)instanceof Int8Array||n&&n.constructor&&"Int8Array"===n.constructor.name||ot(t)||function(t){return t instanceof Uint8ClampedArray||t&&t.constructor&&"Uint8ClampedArray"===t.constructor.name}(t)||at(t)||it(t)||st(t)||ct(t)||ut(t)||lt(t))return et(t);var n;if(t instanceof Date)return new Date(t.getTime());if(t instanceof ArrayBuffer){return t.slice(0,t.byteLength)}if(t instanceof Map){const n=new Map;return t.forEach(((t,e)=>{n.set(e,pt(t))})),n}if(t instanceof Set){const n=new Set;return t.forEach((t=>{n.add(pt(t))})),n}return null}function vt(t,n){return t===n||"number"==typeof t&&isNaN(t)&&"number"==typeof n&&isNaN(n)||"function"==typeof(t||{}).getTime&&"function"==typeof(n||{}).getTime&&t.getTime()===n.getTime()||!1}function At(t,n){return t===n||(null==t||"string"==typeof t?t===n:"number"==typeof t?t===n||"number"==typeof n&&isNaN(t)&&isNaN(n):t instanceof Date?n instanceof Date&&t.getTime()===n.getTime():Array.isArray(t)?Array.isArray(n)&&N(t,n):t instanceof Set?n instanceof Set&&function(t,n){if(t.size!==n.size)return!1;for(const e of t)if(!n.has(e))return!1;return!0}(t,n):t instanceof Map?n instanceof Map&&function(t,n){if(t.size!==n.size)return!1;for(const[e,r]of t){const t=n.get(e);if(t!==r||void 0===t&&!n.has(e))return!1}return!0}(t,n):"object"==typeof t&&("object"==typeof n&&function(t,n){if(null===t||null===n)return!1;const e=Object.keys(t),r=e.length;if(null===n||Object.keys(n).length!==r)return!1;for(const r of e)if(t[r]!==n[r]||!Object.prototype.hasOwnProperty.call(n,r))return!1;return!0}(t,n)))}const Tt=function(t={},...n){return a("esri-deprecation-warnings")&&console.warn("[esri.core.lang] 🛑 DEPRECATED - Function: mixin()\n\t🛠️ Replacement: Use Object.assign() directly\n\t⚙️ Version: 4.19"),Object.assign(t,...n)};export{st as $,ct as A,U as B,O as C,B as D,p as E,P as F,Q as G,S as H,b as I,i as J,z as K,W as L,ot as M,rt as N,D as O,q as P,nt as Q,k as R,V as S,G as T,M as U,C as V,I as W,x as X,u as Y,F as Z,at as _,_ as a,Y as a0,T as a1,c as b,L as c,pt as clone,$ as d,N as e,vt as equals,At as equalsShallow,J as f,ht as fixJson,tt as g,a as h,s as i,bt as isAccessorLike,j,d as k,v as l,l as m,Tt as mixin,A as n,h as o,y as p,w as q,m as r,et as s,ut as t,gt as tryClone,wt as tryCloneBuiltInObject,f as u,lt as v,ft as w,g as x,dt as y,it as z};
