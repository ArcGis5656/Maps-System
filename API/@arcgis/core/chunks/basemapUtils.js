/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import e,{e as r}from"../Basemap.js";import a from"../config.js";import n from"../core/Collection.js";import{L as t}from"./Logger.js";import{b as l,i as s}from"../core/lang.js";import{Url as i,makeAbsolute as u,normalize as c}from"../core/urlUtils.js";import{e as o}from"./ensureType.js";const f=t.getLogger("esri.support.basemapUtils");function p(){return{}}function y(e){for(const r in e){const a=e[r];!1===(null==a?void 0:a.destroyed)&&a.destroy(),delete e[r]}}function d(n,t){var l;let s;if("string"==typeof n){if(!(n in r)){const e=Object.entries(r).filter((([e,r])=>a.apiKey&&!r.classic||!a.apiKey&&r.classic&&!r.deprecated)).map((([e])=>`"${e}"`)).join(", ");return f.warn(`Unable to find basemap definition for: ${n}. Try one of these: ${e}`),null}t&&(s=t[n]),s||(s=e.fromId(n),t&&(t[n]=s))}else s=o(e,n);return null!=(l=s)&&l.destroyed&&(f.warn("The provided basemap is already destroyed",{basemap:s}),s=null),s}function m(r,a=null){const n=d(r);if(!n)return null;const t=new e({id:n.id,title:n.title,baseLayers:n.baseLayers.slice(),referenceLayers:n.referenceLayers.slice()});return a&&(t.baseLayers=v(t.baseLayers,a.baseLayers),t.referenceLayers=v(t.referenceLayers,a.referenceLayers)),t.load().catch((()=>{})),t.portalItem=n.portalItem,t}function b(e){let a=null;const n=w(e),t=!n.baseLayers.length;for(const e in r){const l=U(n,x(r[e]),{mustMatchReferences:t});if("equal"===l){a=e;break}"base-layers-equal"===l&&(a=e)}return a}function L(e,r){if(e===r)return!0;return"equal"===U(w(e),w(r),{mustMatchReferences:!0})}function v(e,r){const a=new n;return e.forEach((e=>{const n=r.find((r=>k(q(e),q(r))))||e;a.some((e=>e===n))?a.push(e):a.push(n)})),a}function g(e){return!(null==e||!e.baseLayers.concat(e.referenceLayers).some(S))}function S(e){if(I(e.url))return!0;if("vector-tile"===e.type)for(const r in e.sourceNameToSource){const a=e.sourceNameToSource[r];if(I(null==a?void 0:a.sourceUrl))return!0}return!1}function h(e,r){var a,n,t;if(l(r)||l(e))return{spatialReference:null,updating:!1};if("not-loaded"===r.loadStatus)return r.load(),{spatialReference:null,updating:!0};if(r.spatialReference)return{spatialReference:r.spatialReference,updating:!1};if(0===r.baseLayers.length)return{spatialReference:null,updating:!1};const s=r.baseLayers.getItemAt(0);switch(s.loadStatus){case"not-loaded":s.load();case"loading":return{spatialReference:null,updating:!0};case"failed":return{spatialReference:null,updating:!1}}const i=(("supportedSpatialReferences"in s?s.supportedSpatialReferences:null)||["tileInfo"in s?null==(a=s.tileInfo)?void 0:a.spatialReference:s.spatialReference]).filter(Boolean);return e.spatialReference?{spatialReference:null!=(n=null!=(t=i.find((r=>e.spatialReference.equals(r))))?t:i[0])?n:null,updating:!1}:{spatialReference:i[0],updating:!1}}const R=/^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;function I(e){if(!e)return!1;const r=new i(u(e));return R.test(r.authority)}function w(e){return e?!e.loaded&&e.resourceInfo?x(e.resourceInfo.data):{baseLayers:T(e.baseLayers),referenceLayers:T(e.referenceLayers)}:null}function T(e){return(n.isCollection(e)?e.toArray():e).map(q)}function q(e){var r,a;return{type:e.type,url:$("urlTemplate"in e&&e.urlTemplate||e.url||"styleUrl"in e&&e.styleUrl),minScale:"minScale"in e&&null!=e.minScale?e.minScale:0,maxScale:"maxScale"in e&&null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visible||!!e.visible,sublayers:"map-image"!==e.type&&"wms"!==e.type||!s(e.sublayers)||null==(r=e.sublayers)?void 0:r.map((e=>({id:e.id,visible:e.visible}))),activeLayerId:"wmts"===e.type?null==(a=e.activeLayer)?void 0:a.id:void 0}}function x(e){return e?{baseLayers:j(e.baseMapLayers.filter((e=>!e.isReference))),referenceLayers:j(e.baseMapLayers.filter((e=>e.isReference)))}:null}function j(e){return e.map((e=>function(e){let r;switch(e.layerType){case"VectorTileLayer":r="vector-tile";break;case"ArcGISTiledMapServiceLayer":r="tile";break;default:r="unknown"}return{type:r,url:$(e.templateUrl||e.urlTemplate||e.styleUrl||e.url),minScale:null!=e.minScale?e.minScale:0,maxScale:null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visibility||!!e.visibility,sublayers:void 0,activeLayerId:void 0}}(e)))}function U(e,r,a){if(null!=e!=(null!=r))return"not-equal";if(!e)return"equal";if(!M(e.baseLayers,r.baseLayers))return"not-equal";return M(e.referenceLayers,r.referenceLayers)?"equal":a.mustMatchReferences?"not-equal":"base-layers-equal"}function M(e,r){if(e.length!==r.length)return!1;for(let a=0;a<e.length;a++)if(!k(e[a],r[a]))return!1;return!0}function k(e,r){if(e.type!==r.type||e.url!==r.url||e.minScale!==r.minScale||e.maxScale!==r.maxScale||e.visible!==r.visible||e.opacity!==r.opacity)return!1;if(s(e.activeLayerId)||s(r.activeLayerId))return e.activeLayerId===r.activeLayerId;if(s(e.sublayers)||s(r.sublayers)){if(l(e.sublayers)||l(r.sublayers)||e.sublayers.length!==r.sublayers.length)return!1;for(let a=0;a<e.sublayers.length;a++){const n=e.sublayers.at(a),t=r.sublayers.at(a);if(n.id!==t.id||n.visible!==t.visible)return!1}}return!0}function $(e){return e?c(e).replace(/^\s*https?:/i,"").toLowerCase():""}export{m as a,L as b,p as c,y as d,d as e,h as f,b as g,g as h,S as i};
