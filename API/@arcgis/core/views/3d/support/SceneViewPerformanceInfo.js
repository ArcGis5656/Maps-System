/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{B as r}from"../../../chunks/byteSizeEstimations.js";import{i as s}from"../../../core/lang.js";import o from"./LayerPerformanceInfo.js";import{i as t}from"../../../chunks/terrainUtils.js";import"../../../core/Collection.js";import"../../../chunks/tslib.es6.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/Evented.js";import"../../../core/Accessor.js";import"../../../chunks/deprecate.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/metadata.js";import"../../../chunks/tracking.js";import"../../../chunks/ensureType.js";import"../../../core/Error.js";import"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../chunks/shared.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/JSONSupport.js";import"../../../chunks/writer.js";import"../../../chunks/layerUtils.js";import"../../../chunks/ViewingMode.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../chunks/Util.js";import"../../../chunks/vec2.js";import"../../../chunks/vec2f64.js";import"../../../chunks/mathUtils.js";import"../../../chunks/common.js";import"../../../chunks/vec4f64.js";import"../../../chunks/Scheduler.js";import"../../../core/Handles.js";import"../../../core/reactiveUtils.js";import"../../../chunks/debugFlags.js";import"../../../geometry/projection.js";import"../../../chunks/unitUtils.js";import"../../../chunks/jsonMap.js";import"../../../chunks/projectionEllipsoid.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/mat4.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../chunks/pe.js";import"../../../chunks/assets.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/aaBoundingRect.js";import"../../../chunks/geodesicConstants.js";import"../../../geometry/support/GeographicTransformation.js";import"../../../geometry/support/GeographicTransformationStep.js";import"../../../chunks/zscale.js";import"../../../chunks/TerrainConst.js";import"../../../layers/support/TileInfo.js";import"../../../layers/support/LOD.js";function e(r){return"function"==typeof r.getUsedMemory}class i{constructor(i){this.totalMemory=0,this.usedMemory=0,this.quality=1,this.load=0,this.terrainMemory=0,this.edgesMemory=0,this.layerPerformanceInfos=new Array;const m=i.resourceController.memoryController;this.totalMemory=m.maxMemory*r.MEGABYTES,this.usedMemory=Math.round(m.usedMemory*this.totalMemory),this.quality=m.memoryFactor,this.load=i.resourceController.scheduler.load,this.terrainMemory=i.basemapTerrain?i.basemapTerrain.getUsedMemory():0;const p=i._stage&&i._stage.renderView&&i._stage.renderView.edgeView;this.edgesMemory=s(p)?p.usedMemory:0,i.allLayerViews.items.forEach((r=>{(e(r)||t(r))&&this.layerPerformanceInfos.push(new o(r,i))})),this.layerPerformanceInfos.sort(((r,s)=>s.memory-r.memory))}}export{i as default,e as i};