/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import r from"../../core/Collection.js";import{a as s}from"../../chunks/JSONSupport.js";import{clone as t}from"../../core/lang.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{r as i}from"../../chunks/reader.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import{w as n}from"../../chunks/writer.js";import c from"./SearchLayer.js";import p from"./SearchTable.js";import"../../chunks/ArrayPool.js";import"../../chunks/Evented.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/shared.js";import"./SearchLayerField.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/fieldType.js";import"./SearchTableField.js";function d(e){return{enabled:!(null==e||!e.length)}}var l;const h=r.ofType(c),m=r.ofType(p);let u=l=class extends s{constructor(e){super(e),this.addressSearchEnabled=!0,this.enabled=!0,this.hintText=null,this.layers=new h,this.tables=new m}readAddressSearchEnabled(e){return!e}writeAddressSearchEnabled(e,r,s){r[s]=!e}clone(){return new l(t({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers,tables:this.tables}))}};e([o({type:Boolean,nonNullable:!0,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder",isRequired:!0},origins:{"web-scene":{read:!1,write:!1}}}})],u.prototype,"addressSearchEnabled",void 0),e([i("addressSearchEnabled")],u.prototype,"readAddressSearchEnabled",null),e([n("addressSearchEnabled")],u.prototype,"writeAddressSearchEnabled",null),e([o({type:Boolean,nonNullable:!0,json:{write:!0,origins:{"web-map":{write:{isRequired:!0}},"web-scene":{default:!0,write:!0}}}})],u.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],u.prototype,"hintText",void 0),e([o({type:h,json:{write:{overridePolicy:d},origins:{"web-scene":{write:{isRequired:!0}}}}})],u.prototype,"layers",void 0),e([o({type:m,json:{read:!0,write:{overridePolicy:d}}})],u.prototype,"tables",void 0),u=l=e([a("esri.webdoc.applicationProperties.Search")],u);const j=u;export{j as default};
