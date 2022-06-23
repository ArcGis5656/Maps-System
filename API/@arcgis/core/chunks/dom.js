/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{g as t}from"./guid.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const e={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"},n={loading:"Loading"};function r(e){return e?e.id=e.id||`${e.tagName.toLowerCase()}-${t()}`:""}function o(t){return Array.isArray(t)?t:Array.from(t)}function l(t){const n=d(t,`.${e.darkTheme}, .${e.lightTheme}`);return(null==n?void 0:n.classList.contains("calcite-theme-dark"))?"dark":"light"}function i(t){const e=d(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function u(t,e,n){const r=`[${e}]`,o=t.closest(r);return o?o.getAttribute(e):n}function s(t){return t.getRootNode()}function c(t){return t.host||null}function a(t,e){return function t(n,r){if(!n)return r;n.assignedSlot&&(n=n.assignedSlot);const o=s(n),l=Array.from(o.querySelectorAll(e)).filter((t=>!r.includes(t)));r=[...r,...l];const i=c(o);return i?t(i,r):r}(t,[])}function f(t,{selector:e,id:n}){return function t(r){if(!r)return null;r.assignedSlot&&(r=r.assignedSlot);const o=s(r),l=n?o.getElementById(n):e?o.querySelector(e):null,i=c(o);return l||(i?t(i):null)}(t)}function d(t,e){return function t(n){return n?n.closest(e)||t(c(s(n))):null}(t)}function m(t){return"function"==typeof(null==t?void 0:t.setFocus)}async function h(t){if(t)return m(t)?t.setFocus():t.focus()}function y(t,e,n){e&&!Array.isArray(e)&&"string"!=typeof e&&(n=e,e=null);const r=e?Array.isArray(e)?e.map((t=>`[slot="${t}"]`)).join(","):`[slot="${e}"]`:":not([slot])";return(null==n?void 0:n.all)?function(t,e,n){let r=":not([slot])"===e?g(t,":not([slot])"):Array.from(t.querySelectorAll(e));r=n&&!1===n.direct?r:r.filter((e=>e.parentElement===t)),r=(null==n?void 0:n.matches)?r.filter((t=>null==t?void 0:t.matches(n.matches))):r;const o=null==n?void 0:n.selector;return o?r.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,e)=>[...t,...e]),[]).filter((t=>!!t)):r}(t,r,n):function(t,e,n){let r=":not([slot])"===e?g(t,":not([slot])")[0]||null:t.querySelector(e);r=n&&!1===n.direct||(null==r?void 0:r.parentElement)===t?r:null,r=(null==n?void 0:n.matches)?(null==r?void 0:r.matches(n.matches))?r:null:r;const o=null==n?void 0:n.selector;return o?null==r?void 0:r.querySelector(o):r}(t,r,n)}function g(t,e){return t?Array.from(t.children||[]).filter((t=>null==t?void 0:t.matches(e))):[]}function A(t,e){return Array.from(t.children).filter((t=>t.matches(e)))}function v(t,e,n){return"string"==typeof e&&""!==e?e:""===e?t[n]:void 0}function p(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}export{e as C,n as T,i as a,a as b,d as c,u as d,l as e,h as f,y as g,A as h,p as i,r as j,m as k,o as n,f as q,v as s};