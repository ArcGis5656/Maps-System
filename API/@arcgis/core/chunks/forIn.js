/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{a as t,b as r,r as e,f as o,c as n}from"./debounce.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */var c=Array.isArray;function u(t){return t}var a=/^(?:0|[1-9]\d*)$/;function i(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&a.test(t))&&t>-1&&t%1==0&&t<r}function b(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function f(t){return null!=t&&b(t.length)&&!function(t){if(!n(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}(t)}var p=Object.prototype;function y(e){return t(e)&&"[object Arguments]"==r(e)}var l=Object.prototype,j=l.hasOwnProperty,s=l.propertyIsEnumerable,v=y(function(){return arguments}())?y:function(r){return t(r)&&j.call(r,"callee")&&!s.call(r,"callee")};var d="object"==typeof exports&&exports&&!exports.nodeType&&exports,m=d&&"object"==typeof module&&module&&!module.nodeType&&module,A=m&&m.exports===d?e.Buffer:void 0,g=(A?A.isBuffer:void 0)||function(){return!1},h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1;var x,O="object"==typeof exports&&exports&&!exports.nodeType&&exports,F=O&&"object"==typeof module&&module&&!module.nodeType&&module,T=F&&F.exports===O&&o.process,w=function(){try{var t=F&&F.require&&F.require("util").types;return t||T&&T.binding&&T.binding("util")}catch(t){}}(),B=w&&w.isTypedArray,I=B?(x=B,function(t){return x(t)}):function(e){return t(e)&&b(e.length)&&!!h[r(e)]},P=Object.prototype.hasOwnProperty;function U(t,r){var e=c(t),o=!e&&v(t),n=!e&&!o&&g(t),u=!e&&!o&&!n&&I(t),a=e||o||n||u,b=a?function(t,r){for(var e=-1,o=Array(t);++e<t;)o[e]=r(e);return o}(t.length,String):[],f=b.length;for(var p in t)!r&&!P.call(t,p)||a&&("length"==p||n&&("offset"==p||"parent"==p)||u&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||i(p,f))||b.push(p);return b}var E=Object.prototype.hasOwnProperty;function S(t){if(!n(t))return function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r}(t);var r,e,o=(e=(r=t)&&r.constructor,r===("function"==typeof e&&e.prototype||p)),c=[];for(var u in t)("constructor"!=u||!o&&E.call(t,u))&&c.push(u);return c}function k(t){return f(t)?U(t,!0):S(t)}var q,D=function(t,r,e){for(var o=-1,n=Object(t),c=e(t),u=c.length;u--;){var a=c[q?u:++o];if(!1===r(n[a],a,n))break}return t};function M(t,r){return null==t?t:D(t,"function"==typeof(e=r)?e:u,k);var e}export{M as f,c as i};
