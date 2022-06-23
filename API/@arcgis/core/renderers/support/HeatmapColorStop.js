/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{a as s}from"../../chunks/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";var i;let p=i=class extends s{constructor(o){super(o),this.color=null,this.ratio=null}clone(){return new i({color:this.color,ratio:this.ratio})}};o([t({type:r,json:{write:!0}})],p.prototype,"color",void 0),o([t({type:Number,json:{write:!0}})],p.prototype,"ratio",void 0),p=i=o([c("esri.renderers.support.HeatmapColorStop")],p);const e=p;export{e as default};