/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{e as t}from"../../../chunks/ensureType.js";import{g as n}from"../../../chunks/metadata.js";import"../../lang.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";const o=Object.prototype.toString;function s(n){const o="__accessorMetadata__"in n?t(n):n;return function(...t){if(t.push(o),"number"==typeof t[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16");return r.apply(this,t)}}function r(t,o,s,r){n(t,o).cast=r}function e(...t){var r;if(3!==t.length||"string"!=typeof t[1])return 1===t.length&&"[object Function]"===o.call(t[0])?s(t[0]):1===t.length&&"string"==typeof t[0]?(r=t[0],function(t,o){n(t,r).cast=t[o]}):void 0}export{e as cast};
