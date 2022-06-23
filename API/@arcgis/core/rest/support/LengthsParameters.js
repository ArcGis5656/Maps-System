/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{a as t}from"../../chunks/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{e as s}from"../../chunks/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{fromJSON as i}from"../../geometry/support/jsonUtils.js";import p from"../../geometry/Polyline.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";let m=class extends t{constructor(o){super(o),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};o([r({type:String,json:{write:!0}})],m.prototype,"calculationType",void 0),o([r({type:Boolean,json:{write:!0}})],m.prototype,"geodesic",void 0),o([r({json:{write:!0}})],m.prototype,"lengthUnit",void 0),o([r({type:[p],json:{read:{reader:o=>o?o.map((o=>i(o))):null},write:{writer:(o,t)=>{t.polylines=o.map((o=>o.toJSON()))}}}})],m.prototype,"polylines",void 0),m=o([e("esri.rest.support.LengthsParameters")],m),m.from=s(m);const n=m;export{n as default};