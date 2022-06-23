/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{clone as e}from"../core/lang.js";import{a as r,b as o}from"./screenUtils.js";import{b as n,f as t,n as s}from"./vec2.js";import{b as c}from"./mathUtils.js";function a(r,o){return{...r,...e(o)}}function f(e,r,o,n){for(;e.length<r;)e.push(o());if(n)for(;e.length>r;){n(e.pop())}else e.length=r}function p(e,r,o,n){n.projectToRenderScreen(e,u),n.projectToRenderScreen(r,h),t(o,g,j),s(o,o)}function i(e,r,o){const n=o.state.camera;o.renderCoordsHelper.toRenderCoords(e,d),n.projectToRenderScreen(d,l),o.state.camera.renderToScreen(l,r)}function m(e,r,o){return i(e,R,o),i(r,S,o),n(R,S)}const d=c(),l=o(),u=o(),j=u,h=o(),g=h,R=r(),S=r();export{a as c,m as p,f as r,p as s};
