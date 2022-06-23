/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./Logger.js";import"./ensureType.js";import"../core/lang.js";import"../core/accessorSupport/decorators/property.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{D as s}from"./DynamicLayerView3D.js";import{M as r}from"./MapImageLayerView.js";import{a as i}from"./drapedUtils.js";import"../config.js";import"./object.js";import"./string.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/Error.js";import"./tracking.js";import"./asyncUtils.js";import"../core/promiseUtils.js";import"../core/watchUtils.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./common.js";import"./lineUtils.js";import"./vec2.js";import"../geometry/projection.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"./mat4.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./triangulationUtils.js";import"./earcut.js";import"./deduplicate.js";import"./ViewingMode.js";import"./vec4f64.js";import"./compilerUtils.js";import"./mat4f64.js";import"./ElevationProvider.js";import"./DefaultBufferWriter.js";import"./sphere.js";import"./ray.js";import"./vectorStacks.js";import"./byteSizeEstimations.js";import"./quatf64.js";import"./vec2f64.js";import"./mathUtils2.js";import"./basicInterfaces.js";import"./Material.js";import"./VertexAttribute.js";import"./aaBoundingBox.js";import"./Util.js";import"./utils2.js";import"./doublePrecisionUtils.js";import"./Evented.js";import"../core/Handles.js";import"../core/Collection.js";import"./shared.js";import"./frustum.js";import"./plane.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"../geometry/support/jsonUtils.js";import"./typeUtils.js";import"../layers/support/Field.js";import"./enumeration.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../Graphic.js";import"../geometry.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils3.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils4.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"./Loadable.js";import"./Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"./Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./glUtil3D.js";import"./geometryDataUtils.js";import"./triangle.js";import"./lineSegment.js";import"./BufferView.js";import"./ShaderBuilder.js";import"./mat4f32.js";import"./enums.js";import"./Texture.js";import"./context-util.js";import"./VertexElementDescriptor.js";import"./VertexArrayObject.js";import"./RenderSlot.js";import"./InterleavedLayout.js";import"./types.js";import"./vec2f32.js";import"./FramebufferObject.js";import"./NestedMap.js";import"./Camera.js";import"./glUtil.js";import"./OrderIndependentTransparency.js";import"./VisualVariables.glsl.js";import"./vec3f32.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./ReadShadowMap.glsl.js";import"./MemCache.js";import"./heatmapUtils.js";import"./ScreenSpacePass.js";import"./Intersector.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./mat3.js";import"./quat.js";import"./floatRGBA.js";import"./Scheduler.js";import"../core/reactiveUtils.js";import"./debugFlags.js";import"./LayerView3D.js";import"./RenderGeometry.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./pointUtils.js";import"./VerticalOffset.glsl.js";import"./GLMaterialTexture.js";import"./Texture2.js";import"./requestImageUtils.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./vec3.js";import"./visualVariableUtils.js";import"./sizeVariableUtils.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./VertexColor.glsl.js";import"./utils6.js";import"./jsonUtils.js";import"./parser.js";import"./_commonjsHelpers.js";import"./ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils7.js";import"./callExpressionWithFeature.js";import"./GeometryUtil.js";import"./lineStippleUtils.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./screenshotUtils.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./projection.js";import"./NativeLineMaterial.js";import"./ColorMaterial.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"./projectExtentUtils.js";import"./geometryServiceUtils.js";import"./project.js";import"./utils5.js";import"./scaleUtils.js";import"./floorFilterUtils.js";import"../rest/support/ProjectParameters.js";import"./ImageMaterial.js";import"../views/layers/LayerView.js";import"../core/HandleOwner.js";import"./RefreshableLayerView.js";import"./layerViewUtils.js";import"./commonProperties.js";import"../TimeExtent.js";import"./timeUtils.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./ExportImageParameters.js";import"./sublayerUtils.js";import"./popupUtils.js";let e=class extends(r(s)){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add((()=>this.exportImageVersion),(()=>this.updatingHandles.addPromise(this.refreshDebounced())))}createFetchPopupFeaturesQueryGeometry(t,o){return i(t,o,this.view)}getFetchOptions(){return{timeExtent:this.timeExtent}}};e=t([o("esri.views.3d.layers.MapImageLayerView3D")],e);const p=e;export{p as default};