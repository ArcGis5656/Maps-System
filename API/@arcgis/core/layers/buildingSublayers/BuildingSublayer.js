/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{I as s}from"../../chunks/Identifiable.js";import{a as o}from"../../chunks/MultiOriginJSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{I as i}from"../../chunks/ensureType.js";import{r as e}from"../../chunks/reader.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{r as n}from"../../chunks/commonProperties.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/JSONSupport.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/writer.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/persistableUrlUtils.js";import"../../core/urlUtils.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/jsonMap.js";import"../support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/opacityUtils.js";let m=class extends(s(o)){constructor(t){super(t),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(t,s){return"string"==typeof s.alias?s.alias:"string"==typeof s.name?s.name:""}readIdOnlyOnce(t){return-1!==this.id?this.id:"number"==typeof t?t:void 0}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],m.prototype,"title",void 0),t([e("service","title",["alias","name"])],m.prototype,"readTitle",null),t([r()],m.prototype,"layer",void 0),t([r({type:i,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],m.prototype,"id",void 0),t([e("service","id")],m.prototype,"readIdOnlyOnce",null),t([r(n(String))],m.prototype,"modelName",void 0),t([r(n(Boolean))],m.prototype,"isEmpty",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],m.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],m.prototype,"opacity",void 0),m=t([p("esri.layers.buildingSublayers.BuildingSublayer")],m);const c=m;export{c as default};