/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{i as t,b as s}from"../core/lang.js";import{m as r,c as n,g as o,h as a}from"./mat4.js";import{c as e}from"./mat4f64.js";import{s as i}from"./Util.js";import{e as f}from"./doublePrecisionUtils.js";function m(t,r){return s(t)&&(t=[]),t.push(r),t}function c(t,r){if(s(t))return null;const n=t.filter((t=>t!==r));return 0===n.length?null:n}function l(s){return!!t(s)&&!s.visible}function u(s,e,f){const m=s.origin.vec3;i(b,-m[0],-m[1],-m[2]),t(s.transformation)?r(e,b,s.transformation):n(e,b),f&&(o(f,e),a(f,f))}function g(t,s,r,n,o){p[0]=t.get(s,0),p[1]=t.get(s,1),p[2]=t.get(s,2),f(p,j,3),r.set(o,0,j[0]),n.set(o,0,j[1]),r.set(o,1,j[2]),n.set(o,1,j[3]),r.set(o,2,j[4]),n.set(o,2,j[5])}const p=new Float64Array(3),j=new Float32Array(6),b=e();export{m as a,u as c,g as e,l as i,c as r};
