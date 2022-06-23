/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{b as n}from"../core/lang.js";function r(r,t){if(n(r))return null;const e={},o=new RegExp(`^${t}`,"i");for(const n in r)r.hasOwnProperty(n)&&o.test(n)&&(e[n.substring(t.length)]=r[n]);return e}function t(r,t){return n(r)||n(t)?null:Math.round((r-t)/6e4)}export{t as a,r as g};
