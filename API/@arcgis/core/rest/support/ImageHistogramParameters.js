/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{geometryTypes as r}from"../../geometry.js";import e from"../../TimeExtent.js";import{a as o}from"../../chunks/JSONSupport.js";import{clone as s}from"../../core/lang.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{w as m}from"../../chunks/writer.js";import{fromJSON as n,getJsonType as c}from"../../geometry/support/jsonUtils.js";import u from"../../layers/support/MosaicRule.js";import l from"../../layers/support/RasterFunction.js";import j from"../../geometry/Point.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/timeUtils.js";import"../../layers/support/DimensionalDefinition.js";import"../../chunks/enumeration.js";var a;let y=a=class extends o{constructor(){super(...arguments),this.geometry=null,this.mosaicRule=null,this.renderingRule=null,this.pixelSize=null,this.raster=void 0,this.timeExtent=null}writeGeometry(t,r,e){null!=t&&(r.geometryType=c(t),r[e]=t.toJSON())}clone(){return new a(s({geometry:this.geometry,mosaicRule:this.mosaicRule,renderingRule:this.renderingRule,pixelSize:this.pixelSize,raster:this.raster,timeExtent:this.timeExtent}))}};t([i({types:r,json:{read:n}})],y.prototype,"geometry",void 0),t([m("geometry")],y.prototype,"writeGeometry",null),t([i({type:u,json:{write:!0}})],y.prototype,"mosaicRule",void 0),t([i({type:l,json:{write:!0}})],y.prototype,"renderingRule",void 0),t([i({type:j,json:{write:!0}})],y.prototype,"pixelSize",void 0),t([i({json:{write:!0}})],y.prototype,"raster",void 0),t([i({type:e,json:{read:{source:"time"},write:{target:"time"}}})],y.prototype,"timeExtent",void 0),y=a=t([p("esri.rest.support.ImageHistogramParameters")],y);const h=y;export{h as default};
