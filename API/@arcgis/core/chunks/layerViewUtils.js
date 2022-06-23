/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{b as n}from"../core/lang.js";function e(n){return n&&"function"==typeof n.highlight}function t(n){return n&&"function"==typeof n.maskOccludee}function a(e,t,a){return n(e)||e>a&&(0===t||e<t)}function c(n,e){return n>0||e>0}function o(n){var e,t;const a=n.effectiveScaleRange;return{minScale:null!=(e=null==a?void 0:a.minScale)?e:0,maxScale:null!=(t=null==a?void 0:a.maxScale)?t:0}}export{o as e,e as h,c as i,t as o,a as s};
