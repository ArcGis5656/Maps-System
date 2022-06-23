/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{c as t}from"./mathUtils.js";import{c as e}from"./widgetUtils.js";import"../core/lang.js";import"./Logger.js";import{t as r}from"./jsxFactory.js";const s="esri-widget__heading";function i(t,i){const a=o(t.level),n=`h${a}`;return delete t.level,r(n,{...t,class:e(s,t.class),role:"heading","aria-level":String(a)},i)}function o(e){return t(Math.ceil(e),1,6)}function a(t,e=1){return o(t+e)}export{i as H,a as i};
