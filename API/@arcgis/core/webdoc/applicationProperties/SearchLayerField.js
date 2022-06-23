/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{a as t}from"../../chunks/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{e as o}from"../../chunks/enumeration.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{k as c}from"../../chunks/fieldType.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/jsonMap.js";var p;let i=p=class extends t{constructor(s){super(s),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new p({exactMatch:this.exactMatch,type:this.type,name:this.name})}};s([r({type:Boolean,json:{write:!0}})],i.prototype,"exactMatch",void 0),s([r({type:String,json:{write:!0}})],i.prototype,"name",void 0),s([o(c)],i.prototype,"type",void 0),i=p=s([e("esri.webdoc.applicationProperties.SearchLayerField")],i);const n=i;export{n as default};
