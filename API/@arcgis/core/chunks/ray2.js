/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{b as r}from"../core/lang.js";import{c as e}from"./screenUtils.js";import{c as n}from"./vec2.js";import{h as t,j as o,s}from"./mathUtils.js";import{s as c}from"./vectorStacks.js";function i(r,n,t){return a(r,r.screenToRender(n,e(c.get())),t)}function a(o,s,i){const a=e(n(c.get(),s));if(a[2]=0,!o.unprojectFromRenderScreen(a,i.origin))return null;const u=e(n(c.get(),s));u[2]=1;const m=o.unprojectFromRenderScreen(u,c.get());return r(m)?null:(t(i.direction,m,i.origin),i)}function u(r,n,t){return m(r,r.screenToRender(n,e(c.get())),t)}function m(e,n,i){o(i.origin,e.eye);const a=s(c.get(),n[0],n[1],1),u=e.unprojectFromRenderScreen(a,c.get());return r(u)?null:(t(i.direction,u,i.origin),i)}export{i as a,u as b,m as c,a as f};
