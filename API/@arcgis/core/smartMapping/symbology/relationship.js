/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import e from"../../Color.js";import{clone as r}from"../../core/lang.js";import{c as o}from"../../chunks/colors2.js";import{c as s,g as a,a as t,f as i,b as n}from"../../chunks/symbologyUtils.js";import{t as l,h as p}from"../../chunks/utils15.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/utils10.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../geometry/Geometry.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/shared.js";import"../../chunks/collectionUtils.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../core/urlUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalItem.js";import"../../chunks/assets.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/messages.js";import"../../chunks/writeUtils.js";import"../../chunks/screenUtils.js";const m={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"},darker:{color:[26,26,26,.25],width:"1px"}},c={lightBasemaps:{primary:"relationship-blue-orange-brown",secondary:["relationship-brewer-yellow-blue-black","relationship-brewer-pink-blue-purple","relationship-purple-green-blue","relationship-blue-green-purple","relationship-blue-orange-green","relationship-mustard-blue-wine","relationship-pink-blue-purple","relationship-olive-blue-green","relationship-yellow-cyan-blue","relationship-blue-pink-purple","relationship-purple-green-wine","relationship-blue-peach-purple","relationship-mint-mustard-green","relationship-purple-mustard-darkpurple","relationship-blue-orange-purple","relationship-pink-periwinkle-violet","relationship-blue-tan-green","relationship-blue-red-pink","relationship-blue-green-brightgreen","relationship-blue-orange-lavender","relationship-pink-purple-peach","relationship-purple-mustard-eggshell","relationship-blue-brick-green","relationship-orange-purple-lavender","relationship-brown-purple-lilac","relationship-teal-yellow-lightteal"]},darkBasemaps:{primary:"relationship-blue-green-brightgreen",secondary:["relationship-blue-red-pink","relationship-blue-orange-lavender","relationship-pink-purple-peach","relationship-purple-mustard-eggshell","relationship-blue-brick-green","relationship-orange-purple-lavender","relationship-brown-purple-lilac","relationship-teal-yellow-lightteal","relationship-blue-orange-brown","relationship-brewer-yellow-blue-black","relationship-brewer-pink-blue-purple","relationship-purple-green-blue","relationship-blue-green-purple","relationship-blue-orange-green","relationship-mustard-blue-wine","relationship-pink-blue-purple","relationship-olive-blue-green","relationship-yellow-cyan-blue","relationship-blue-pink-purple","relationship-purple-green-wine","relationship-blue-peach-purple","relationship-mint-mustard-green","relationship-purple-mustard-darkpurple","relationship-blue-orange-purple","relationship-pink-periwinkle-violet","relationship-blue-tan-green"]}},u=s({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features based on relationship between two attributes.",schemes:{point:{light:{common:{noDataColor:"#aaaaaa",outline:m.light,size:"8px"},primary:c.lightBasemaps.primary,secondary:c.lightBasemaps.secondary},dark:{common:{noDataColor:"#aaaaaa",outline:m.darker,size:"8px"},primary:c.darkBasemaps.primary,secondary:c.darkBasemaps.secondary}},polyline:{light:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:c.lightBasemaps.primary,secondary:c.lightBasemaps.secondary},dark:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:c.darkBasemaps.primary,secondary:c.darkBasemaps.secondary}},polygon:{light:{common:{noDataColor:"#aaaaaa",outline:m.light,fillOpacity:.8},primary:c.lightBasemaps.primary,secondary:c.lightBasemaps.secondary},dark:{common:{noDataColor:"#aaaaaa",outline:m.dark,fillOpacity:.8},primary:c.darkBasemaps.primary,secondary:c.darkBasemaps.secondary}}}}}});function h(e){return a(u,e)}function d(e){const r=t({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme,theme:u.get("default")});if(!r)return;const{schemesInfo:o,basemapId:s,basemapTheme:a}=r,i={...e,basemap:s};return{primaryScheme:F(i,o.primary,o.common),secondarySchemes:o.secondary.map((e=>F(i,e,o.common))).filter(Boolean),basemapId:s,basemapTheme:a}}function g(e){return i(e.name,d(e))}function y(e){return n(e.includedTags,e.excludedTags,d(e))}function k(r){if(!r)return;const o={...r};return o.colorsForClassBreaks=o.colorsForClassBreaks.map((r=>({numClasses:r.numClasses,colors:r.colors.map((r=>r.map((r=>new e(r)))))}))),o.tags=[...o.tags],o.noDataColor&&(o.noDataColor=new e(o.noDataColor)),"outline"in o&&o.outline&&(o.outline={color:o.outline.color&&new e(o.outline.color),width:o.outline.width}),o}function j(e,o){e=r(e);let s=[];const a=(o||"HH").split(""),t=a[0],i=a[1];"L"===t&&e.reverse();const n="H"===i;return e.forEach((e=>{n&&e.reverse(),s=s.concat(e)})),s}function b(r,o,s){let a;return r.colorsForClassBreaks.some((e=>(e.numClasses===o&&(a=e.colors),!!a))),a=a.map((r=>r.map((r=>new e(r))))),a?j(a,s):null}function w(e,r){const o=r?e:k(e);return o.colorsForClassBreaks.forEach((e=>{const r=e.colors.reverse(),o=[];for(let s=0;s<e.numClasses;s++){const e=[];r.forEach((r=>{e.push(r[s])})),o.push(e)}e.colors=o})),o}function f(e){const r=e.theme||"default",o=e.geometryType,s=e.colors,a=e.numClasses,t=u.get(r);if(!t)return;const i=t.supportedBasemaps,n=[];return i.forEach((e=>{const t=d({theme:r,basemap:e,geometryType:o});if(t){let e=D(t.primaryScheme,s,a);e&&n.push(e),t.secondarySchemes.forEach((r=>{e=D(r,s,a),e&&n.push(e)}))}})),n}function C(e,r,o,s){let a;const t=b(e,o,s);if(t){1===p(r,t)&&(a=e)}return a}function B(e,r,o,s){let a,t=1;do{a=C(e,r,o,s),a||(e=w(e),t++)}while(!a&&t<=4);return a}function D(e,r,o){return B(e,r,o,"HH")||B(e,r,o,"HL")||B(e,r,o,"LH")||B(e,r,o,"LL")}function F(r,s,a){const t="mesh"!==r.geometryType&&r.worldScale?r.view:null,i=o[s],n=r.theme||"default";if(!i)return;const p=n+"/"+r.basemap+"/"+s,m=[];for(const e in i)if("stops"!==e&&"name"!==e&&"tags"!==e){const r=+e,o=i[e];m.push({numClasses:r,colors:o})}switch(r.geometryType){case"point":case"multipoint":{const r=a;return function(r,o){return{id:r.id,name:r.name,tags:[...r.tags],colorsForClassBreaks:U(r.colorsForClassBreaks),noDataColor:new e(r.noDataColor),outline:{color:new e(r.outline.color),width:r.outline.width},size:o?l(r.size,o):r.size,opacity:r.opacity}}({id:p,name:i.name,tags:i.tags,colorsForClassBreaks:m,noDataColor:r.noDataColor,opacity:1,outline:r.outline,size:r.size},t)}case"polyline":{const r=a;return function(r,o){return{id:r.id,name:r.name,tags:[...r.tags],colorsForClassBreaks:U(r.colorsForClassBreaks),noDataColor:new e(r.noDataColor),opacity:r.opacity,width:o?l(r.width,o):r.width}}({id:p,name:i.name,tags:i.tags,colorsForClassBreaks:m,noDataColor:r.noDataColor,opacity:1,width:r.width},t)}case"polygon":{const r=a,o={id:p,name:i.name,tags:i.tags,colorsForClassBreaks:m,noDataColor:r.noDataColor,opacity:r.fillOpacity,outline:r.outline};return{id:(c=o).id,name:c.name,tags:[...c.tags],colorsForClassBreaks:U(c.colorsForClassBreaks),noDataColor:new e(c.noDataColor),outline:{color:new e(c.outline.color),width:c.outline.width},opacity:c.opacity}}case"mesh":{const r=a;return function(r){return{id:r.id,name:r.name,tags:[...r.tags],colorsForClassBreaks:U(r.colorsForClassBreaks),noDataColor:new e(r.noDataColor),opacity:r.opacity}}({id:p,name:i.name,tags:i.tags,colorsForClassBreaks:m,noDataColor:r.noDataColor,opacity:r.fillOpacity})}}var c}function U(r){return r.map((r=>({numClasses:r.numClasses,colors:r.colors.map((r=>r.map((r=>new e(r)))))})))}export{k as cloneScheme,j as flatten2DArray,w as flipColors,b as getColors,f as getMatchingSchemes,g as getSchemeByName,d as getSchemes,y as getSchemesByTag,h as getThemes};
