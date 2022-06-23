/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import"../../lang.js";import{a as e}from"../../../chunks/metadata.js";import{t}from"../../../chunks/tracking.js";import{d as r}from"../../../chunks/ensureType.js";import{L as n}from"../../../chunks/Logger.js";import{s as o}from"../../../chunks/object.js";import i,{M as s}from"../../Error.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../config.js";import"../../../chunks/string.js";var a;!function(e){e[e.INITIALIZING=0]="INITIALIZING",e[e.CONSTRUCTING=1]="CONSTRUCTING",e[e.CONSTRUCTED=2]="CONSTRUCTED"}(a||(a={}));class u extends s{constructor(e,t,r){if(super(e,t,r),!(this instanceof u))return new u(e,t,r)}}function c(e){return!!e&&e.prototype&&e.prototype.declaredClass&&0===e.prototype.declaredClass.indexOf("esri.core.Collection")}u.prototype.type="warning";const p=n.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");function f(e,t,r){var n,i;e&&(!r&&!t.read||null!=(n=t.read)&&n.reader||!1===(null==(i=t.read)?void 0:i.enabled)||function(e){if("types"in e)return m(e.types);return g(e.type)}(e)&&o("read.reader",y(e),t))}function y(e){var t;const r=null!=(t=e.ndimArray)?t:0;if(r>1)return function(e){var t;const r=l(e),n=d.bind(null,r),o=null!=(t=e.ndimArray)?t:0;return(e,t,r)=>{if(null==e)return e;e=n(e,r,o);let i=o,s=e;for(;i>0&&Array.isArray(s);)i--,s=s[0];if(void 0!==s)for(let t=0;t<i;t++)e=[e];return e}}(e);if(1===r)return w(e);if("type"in e&&j(e.type)){var n,o;const t=null==(n=e.type.prototype)||null==(o=n.itemType)?void 0:o.Type,r=w("function"==typeof t?{type:t}:{types:t});return(t,n,o)=>{const i=r(t,n,o);return i?new e.type(i):i}}return l(e)}function l(t){return"type"in t?function(e){if(e.prototype.read)return(t,r,n)=>{if(null==t)return t;const o=typeof t;if("object"!==o)return void p.error(`Expected JSON value of type 'object' to deserialize type '${e.prototype.declaredClass}', but got '${o}'`);const i=new e;return i.read(t,n),i};return e.fromJSON}(t.type):function(t){var r;let n=null;const o=null!=(r=t.errorContext)?r:"type";return(r,i,s)=>{if(null==r)return r;const a=typeof r;if("object"!==a)return void p.error(`Expected JSON value of type 'object' to deserialize, but got '${a}'`);n||(n=function(t){const r={};for(const i in t.typeMap){var n,o;const s=t.typeMap[i],a=e(s.prototype);if("function"==typeof t.key)continue;const u=a.properties[t.key];if(!u)continue;null!=(n=u.json)&&n.type&&Array.isArray(u.json.type)&&1===u.json.type.length&&"string"==typeof u.json.type[0]&&(r[u.json.type[0]]=s);const c=null==(o=u.json)?void 0:o.write;if(!c||!c.writer){r[i]=s;continue}const p=c.target,f="string"==typeof p?p:t.key,y={};c.writer(i,y,f),y[f]&&(r[y[f]]=s)}return r}(t));const c=t.key;if("string"!=typeof c)return;const f=r[c],y=f?n[f]:t.defaultKeyValue?t.typeMap[t.defaultKeyValue]:void 0;if(!y){const e=`Type '${f||"unknown"}' is not supported`;return s&&s.messages&&r&&s.messages.push(new u(`${o}:unsupported`,e,{definition:r,context:s})),void p.error(e)}const l=new y;return l.read(r,s),l}}(t.types)}function d(e,t,r,n){return 0!==n&&Array.isArray(t)?t.map((t=>d(e,t,r,n-1))):e(t,void 0,r)}function w(e){const t=l(e);return(e,r,n)=>{if(null==e)return e;if(Array.isArray(e)){const r=[];for(const o of e){const e=t(o,void 0,n);void 0!==e&&r.push(e)}return r}const o=t(e,void 0,n);return void 0!==o?[o]:void 0}}function j(e){if(!c(e))return!1;const t=e.prototype.itemType;return!(!t||!t.Type)&&("function"==typeof t.Type?g(t.Type):m(t.Type))}function g(e){return!Array.isArray(e)&&(!!e&&e.prototype&&("read"in e.prototype||"fromJSON"in e||j(e)))}function m(e){for(const t in e.typeMap){if(!g(e.typeMap[t]))return!1}return!0}function b(e){e.name&&(e.read&&"object"==typeof e.read?void 0===e.read.source&&(e.read.source=e.name):e.read={source:e.name},e.write&&"object"==typeof e.write?void 0===e.write.target&&(e.write.target=e.name):e.write={target:e.name})}function h(e){"boolean"==typeof e.read?e.read={enabled:e.read}:"function"==typeof e.read?e.read={enabled:!0,reader:e.read}:e.read&&"object"==typeof e.read&&void 0===e.read.enabled&&(e.read.enabled=!0)}function v(e){"boolean"==typeof e.write?e.write={enabled:e.write}:"function"==typeof e.write?e.write={enabled:!0,writer:e.write}:e.write&&"object"==typeof e.write&&void 0===e.write.enabled&&(e.write.enabled=!0)}const A=n.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer");function O(e,t){var r;if(!t.write||t.write.writer||!1===t.write.enabled&&!t.write.overridePolicy)return;const n=null!=(r=null==e?void 0:e.ndimArray)?r:0;var i,s;e&&(1===n||"type"in e&&c(e.type))?t.write.writer=k:n>1?t.write.writer=(s=n,function(e,t,r,n){let i;if(null===e)i=null;else{i=S(e,n,s);let t=s,r=i;for(;t>0&&Array.isArray(r);)t--,r=r[0];if(void 0!==r)for(let e=0;e<t;e++)i=[i]}o(r,i,t)}):t.types?Array.isArray(t.types)?t.write.writer=(i=t.types[0],(e,t,r,n)=>e&&Array.isArray(e)?C(e.filter((e=>T(e,i,n))),t,r,n):C(e,t,r,n)):t.write.writer=function(e){return(t,r,n,o)=>t?T(t,e,o)?C(t,r,n,o):void 0:C(t,r,n,o)}(t.types):t.write.writer=C}function T(e,t,r){for(const r in t.typeMap)if(e instanceof t.typeMap[r])return!0;if(null!=r&&r.messages){var n,o;const s=null!=(n=t.errorContext)?n:"type",a=`Values of type '${null!=(o="function"!=typeof t.key?e[t.key]:e.declaredClass)?o:"Unknown"}' cannot be written`;r&&r.messages&&e&&r.messages.push(new i(`${s}:unsupported`,a,{definition:e,context:r})),A.error(a)}return!1}function C(e,t,r,n){o(r,N(e,n),t)}function N(e,t){return e&&"function"==typeof e.write?e.write({},t):e&&"function"==typeof e.toJSON?e.toJSON():"number"==typeof e?_(e):e}function _(e){return e===-1/0?-Number.MAX_VALUE:e===1/0?Number.MAX_VALUE:isNaN(e)?null:e}function k(e,t,r,n){let i;null===e?i=null:e&&"function"==typeof e.map?(i=e.map((e=>N(e,n))),"function"==typeof i.toArray&&(i=i.toArray())):i=[N(e,n)],o(r,i,t)}function S(e,t,r){return 0!==r&&Array.isArray(e)?e.map((e=>S(e,t,r-1))):N(e,t)}function x(e,t){return z(e,"read",t)}function I(e,t){return z(e,"write",t)}function z(e,t,r){let n=e&&e.json;if(e&&e.json&&e.json.origins&&r){const o=e.json.origins[r.origin];o&&("any"===t||t in o)&&(n=o)}return n}function E(e){const t=function(e){if(e.json.types)return $(e.json);if(e.type)return P(e);return $(e)}(e);if(e.json.origins)for(const r in e.json.origins){const n=e.json.origins[r],o=n.types?M(n):t;f(o,n,!1),n.types&&!n.write&&e.json.write&&e.json.write.enabled&&(n.write={...e.json.write}),O(o,n)}f(t,e.json,!0),O(t,e.json)}function M(e){return e.type?P(e):$(e)}function P(e){if(!e.type)return;let t=0,n=e.type;for(;Array.isArray(n)&&!r(n);)n=n[0],t++;return{type:n,ndimArray:t}}function $(e){if(!e.types)return;let t=0,r=e.types;for(;Array.isArray(r);)r=r[0],t++;return{types:r,ndimArray:t}}function L(e){(function(e){if(e.json||(e.json={}),h(e.json),v(e.json),b(e.json),e.json.origins)for(const t in e.json.origins)h(e.json.origins[t]),v(e.json.origins[t]),b(e.json.origins[t]);return!0})(e)&&(!function(e){if(e.json&&e.json.origins){const t=e.json.origins,r={"web-document":["web-scene","web-map"]};for(const e in r)if(t[e]){const n=t[e];r[e].forEach((e=>{t[e]=n})),delete t[e]}}}(e),E(e))}const U=new Set,J=new Set;function R(t){return r=>{r.prototype.declaredClass=t,G(r);const n=[],o=[];let i=r.prototype;for(;i;)i.hasOwnProperty("initialize")&&!U.has(i.initialize)&&(U.add(i.initialize),n.push(i.initialize)),i.hasOwnProperty("destroy")&&!J.has(i.destroy)&&(J.add(i.destroy),o.push(i.destroy)),i=Object.getPrototypeOf(i);U.clear(),J.clear();class s extends r{constructor(...e){if(super(...e),this.constructor===s&&"function"==typeof this.postscript){if(n.length&&Object.defineProperty(this,"initialize",{enumerable:!1,configurable:!0,value(){for(let e=n.length-1;e>=0;e--)n[e].call(this)}}),o.length){let e=!1;Object.defineProperty(this,"destroy",{enumerable:!1,configurable:!0,value(){if(!e){e=!0;for(let e=0;e<o.length;e++)o[e].call(this)}}})}this.postscript(...e)}}}return s.__accessorMetadata__=e(r.prototype),s.prototype.declaredClass=t,s}}function V(e,r){return null==r.get?function(){const r=this.__accessor__.properties.get(e);if(void 0===r)return;t(r);const n=this.__accessor__.store;return n.has(e)?n.get(e):r.metadata.value}:function(){const t=this.__accessor__.properties.get(e);if(void 0!==t)return t.getComputed()}}function G(t){const r=t.prototype,n=e(r).properties,o={};for(const e of Object.getOwnPropertyNames(n)){const t=n[e];L(t),o[e]={enumerable:!0,configurable:!0,get:V(e,t),set(r){const n=this.__accessor__;if(void 0!==n){if(!Object.isFrozen(this)){if(n.initialized&&t.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${e}' of ${this.declaredClass}`);if(n.lifecycle===a.CONSTRUCTED&&t.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${e}' of ${this.declaredClass}`);n.set(e,r)}}else Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r})}}}Object.defineProperties(t.prototype,o)}export{a as L,u as W,z as a,I as b,y as c,G as finalizeClass,_ as n,x as o,R as subclass};
