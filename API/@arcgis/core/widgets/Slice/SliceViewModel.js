/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../analysis/SliceAnalysis.js";import{q as s,x as i,i as r,b as a,r as o,m as n,o as l,u as p}from"../../core/lang.js";import{property as u}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as h}from"../../core/accessorSupport/decorators/subclass.js";import m from"../../analysis/SlicePlane.js";import{c}from"../../core/promiseUtils.js";import d from"../../core/Handles.js";import{watch as j,syncAndInitial as y}from"../../core/reactiveUtils.js";import{addFrameTask as k}from"../../core/scheduling.js";import{f as v,s as g,a as f}from"../../chunks/screenUtils.js";import{e as _,u as P,m as w}from"../../chunks/mat4.js";import{d as b,l as M,j as S,e as V,f as D,v as T,p as I,n as x,s as U,b as E}from"../../chunks/mathUtils.js";import{c as C,a as R,n as L,f as O}from"../../chunks/boundedPlane.js";import{k as F,c as H,i as A,n as G}from"../../chunks/plane.js";import{c as z}from"../../chunks/ray.js";import{s as B,a as q,d as K}from"../../chunks/vectorStacks.js";import{d as N}from"../../chunks/manipulatorUtils.js";import{k as Q,l as W,m as J,d as Z,e as X,h as Y,c as $,n as tt,o as et,q as st,R as it,r as rt,t as at,u as ot,S as nt,v as lt,D as pt,w as ut,f as ht,x as mt,y as ct,z as dt,A as jt,P as yt,j as kt,B as vt,C as gt,I as ft}from"../../chunks/sliceToolUtils.js";import{g as _t,a as Pt}from"../../chunks/Factory.js";import{a as wt}from"../../chunks/dragEventPipeline3D.js";import{a as bt}from"../../chunks/ray2.js";import{a as Mt,S as St}from"../../chunks/Intersector.js";import{I as Vt,c as Dt}from"../../chunks/InteractiveToolBase.js";import{c as Tt}from"../../chunks/screenUtils2.js";import{I as It}from"../../chunks/InteractiveAnalysisViewModel.js";import"../../chunks/Analysis.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/Error.js";import"../../chunks/nextTick.js";import"../../chunks/Clonable.js";import"../../chunks/Identifiable.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/shared.js";import"../../chunks/collectionUtils.js";import"../../chunks/RenderCoordsHelper.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/projectionEllipsoid.js";import"../../geometry/SpatialReference.js";import"../../chunks/JSONSupport.js";import"../../chunks/writer.js";import"../../chunks/Ellipsoid.js";import"../../geometry/projection.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/common.js";import"../../chunks/sphere.js";import"../../chunks/vec4f64.js";import"../../chunks/ElevationProvider.js";import"../../chunks/ViewingMode.js";import"../../chunks/spatialReferenceSupport.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/persistable.js";import"../../chunks/multiOriginJSONSupportUtils.js";import"../../chunks/uuid.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/mathUtils2.js";import"../../chunks/byteSizeEstimations.js";import"../../chunks/quatf64.js";import"../../chunks/mat4f64.js";import"../../chunks/vec2f64.js";import"../../chunks/lineSegment.js";import"../../chunks/compilerUtils.js";import"../../chunks/quat.js";import"../../chunks/LineVisualElement.js";import"../../chunks/vec4f32.js";import"../../chunks/Object3DVisualElement.js";import"../../chunks/VisualElement.js";import"../../chunks/basicInterfaces.js";import"../../chunks/DefaultBufferWriter.js";import"../../chunks/Material.js";import"../../chunks/VertexAttribute.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/Util.js";import"../../chunks/vec2.js";import"../../chunks/utils2.js";import"../../chunks/doublePrecisionUtils.js";import"../../chunks/frustum.js";import"../../chunks/dehydratedFeatures.js";import"../../chunks/quantizationUtils.js";import"../../layers/support/Field.js";import"../../chunks/enumeration.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils3.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils4.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../portal/Portal.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/glUtil3D.js";import"../../chunks/geometryDataUtils.js";import"../../chunks/triangle.js";import"../../chunks/BufferView.js";import"../../chunks/ShaderBuilder.js";import"../../chunks/mat4f32.js";import"../../chunks/enums.js";import"../../chunks/Texture.js";import"../../chunks/context-util.js";import"../../chunks/VertexElementDescriptor.js";import"../../chunks/VertexArrayObject.js";import"../../chunks/RenderSlot.js";import"../../chunks/InterleavedLayout.js";import"../../chunks/types.js";import"../../chunks/lineUtils.js";import"../../chunks/triangulationUtils.js";import"../../chunks/earcut.js";import"../../chunks/deduplicate.js";import"../../core/watchUtils.js";import"../../chunks/vec2f32.js";import"../../chunks/FramebufferObject.js";import"../../chunks/NestedMap.js";import"../../chunks/Camera.js";import"../../chunks/glUtil.js";import"../../chunks/OrderIndependentTransparency.js";import"../../chunks/VisualVariables.glsl.js";import"../../chunks/vec3f32.js";import"../../chunks/weather.js";import"../../views/3d/environment/CloudyWeather.js";import"../../views/3d/environment/FoggyWeather.js";import"../../views/3d/environment/RainyWeather.js";import"../../views/3d/environment/SunnyWeather.js";import"../../chunks/ReadShadowMap.glsl.js";import"../../chunks/MemCache.js";import"../../chunks/heatmapUtils.js";import"../../chunks/ScreenSpacePass.js";import"../../chunks/floatRGBA.js";import"../../chunks/Scheduler.js";import"../../chunks/debugFlags.js";import"../../chunks/verticalOffsetUtils.js";import"../../chunks/mat3.js";import"../../chunks/interfaces.js";import"../../chunks/GeometryUtil.js";import"../../chunks/ColorMaterial.js";import"../../chunks/VertexColor.glsl.js";import"../../chunks/ImageMaterial.js";import"../../chunks/GLMaterialTexture.js";import"../../chunks/NativeLineMaterial.js";import"../../chunks/Texture2.js";import"../../chunks/requestImageUtils.js";import"../../chunks/elevationInfoUtils.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/drawUtils.js";import"../../chunks/DOMContainer.js";import"../../chunks/domUtils.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../core/HandleOwner.js";import"../Popup.js";import"../../intl.js";import"../../chunks/messages.js";import"../../chunks/throttle.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../Feature.js";import"../Widget.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/widgetThemeUtils.js";import"../Attachments.js";import"../../chunks/unitFormatUtils.js";import"../Attachments/AttachmentsViewModel.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../chunks/messageBundle.js";import"../../chunks/jsxFactory.js";import"../Feature/FeatureViewModel.js";import"../../chunks/languageUtils.js";import"../../chunks/datetime.js";import"../../chunks/number3.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/DataLayerSource.js";import"../../rest/support/StatisticDefinition.js";import"../../rest/support/RelationshipQuery.js";import"../../tasks/QueryTask.js";import"../../chunks/executeForTopCount.js";import"../../chunks/utils5.js";import"../../chunks/scaleUtils.js";import"../../chunks/floorFilterUtils.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/featureConversionUtils.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../chunks/executeQueryJSON.js";import"../../tasks/Task.js";import"../../layers/FeatureLayer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../core/sql.js";import"../../form/FormTemplate.js";import"../../form/ExpressionInfo.js";import"../../form/elements/GroupElement.js";import"../../form/elements/FieldElement.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/SwitchInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../form/support/elements.js";import"../../geometry/HeightModelInfo.js";import"../../layers/Layer.js";import"../../chunks/FeatureIndex.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../core/workers/RemoteClient.js";import"../../chunks/APIKeyMixin.js";import"../../chunks/ArcGISService.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/CustomParametersMixin.js";import"../../chunks/FeatureEffectLayer.js";import"../../layers/support/FeatureEffect.js";import"../../layers/support/FeatureFilter.js";import"../../chunks/OperationalLayer.js";import"../../chunks/commonProperties.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/OrderedLayer.js";import"../../chunks/PortalLayer.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/RefreshableLayer.js";import"../../chunks/ScaleRangeLayer.js";import"../../chunks/TemporalLayer.js";import"../../TimeInterval.js";import"../../layers/support/TimeInfo.js";import"../../chunks/featureReductionUtils.js";import"../../layers/support/FeatureReductionSelection.js";import"../../layers/support/FeatureReductionCluster.js";import"../../layers/support/LabelClass.js";import"../../chunks/labelUtils.js";import"../../chunks/defaultsJSON.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../chunks/fieldProperties.js";import"../../layers/support/FieldsIndex.js";import"../../layers/support/GeometryFieldsInfo.js";import"../../chunks/labelingInfo.js";import"../../layers/support/LayerFloorInfo.js";import"../../layers/support/Relationship.js";import"../../chunks/versionUtils.js";import"../../chunks/styleUtils2.js";import"../../support/popupUtils.js";import"../../chunks/Heading.js";import"../support/widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/vmEvent.js";import"../Spinner/SpinnerViewModel.js";import"../../chunks/AnchorElementViewModel.js";import"../Popup/PopupViewModel.js";import"../../symbols/support/symbolUtils.js";import"../../chunks/utils6.js";import"../../chunks/ItemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/InputManager.js";import"../../chunks/Queue.js";import"../../chunks/layerViewUtils.js";import"../../chunks/actions.js";import"../../chunks/GoTo.js";import"../../chunks/InteractiveToolViewModel.js";let xt=class extends Vt{constructor(t){super(t),this.clock=c,this._previewPlaneOpacity=1,this.analysisView=null,this.layersMode="none",this.shiftManipulator=null,this.rotateHeadingManipulator=null,this.rotateTiltManipulator=null,this.resizeManipulators=null,this.disableEngineLayers=!1,this._handles=new d,this._viewHandles=new d,this._frameTask=null,this._prevPointerMoveTimeout=null,this._previewPlaneGridVisualElement=null,this._previewPlaneOutlineVisualElement=null,this._startPlane=C(),this._previewPlane=null,this._activeKeyModifiers={},this._lastCursorPosition=v(),this._resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}],this._intersector=Mt(t.view.state.viewingMode),this._intersector.options.store=St.MIN}initialize(){const t=()=>{if("creating"===this.toolState||"created"===this.toolState)throw new Error("Unexpected toolState");return!this.destroyed};if(!t())return;if(!t())return;if(null==this.analysis)throw new Error("SliceTool requires valid model, but null was provided.");this.analysisViewData=this.analysisView,this.rotateHeadingImage=_t(this.view.toolViewManager.textures),this.rotateTiltImage=Pt(this.view.toolViewManager.textures);const e=t=>{this._updateManipulatorsInteractive(t),t.grabbing||(r(this.analysisViewData.plane)&&R(this.analysisViewData.plane,this._startPlane),this.inputState=null)};this.shiftManipulator=Q(this.view),this.manipulators.add(this.shiftManipulator),this.shiftManipulator.events.on("grab-changed",(t=>{this._onShiftGrab(t),e(this.shiftManipulator)})),this._handles.add(this._createShiftDragPipeline(this.shiftManipulator)),this.rotateHeadingManipulator=W(this.view,this.rotateHeadingImage.texture),this.manipulators.add(this.rotateHeadingManipulator),this.rotateHeadingManipulator.events.on("grab-changed",(t=>{this._onRotateHeadingGrab(t),e(this.rotateHeadingManipulator)})),this._handles.add(this._createRotateHeadingDragPipeline(this.rotateHeadingManipulator)),this.rotateTiltManipulator=W(this.view,this.rotateTiltImage.texture),this.manipulators.add(this.rotateTiltManipulator),this.rotateTiltManipulator.events.on("grab-changed",(t=>{this._onRotateTiltGrab(t),e(this.rotateTiltManipulator)})),this._handles.add(this._createRotateTiltDragPipeline(this.rotateTiltManipulator)),this.resizeManipulators=this._resizeHandles.map(((t,s)=>{const i=J(this.view,t);return i.events.on("grab-changed",(t=>{this._onResizeGrab(t,s),e(i)})),this._handles.add(this._createResizeDragPipeline(i)),i})),this.manipulators.addMany(this.resizeManipulators),this._previewPlaneGridVisualElement=Z(this.view),this._previewPlaneOutlineVisualElement=X(this.view),this._previewPlaneOutlineVisualElement.width=Y,this._handles.add(this.analysisViewData.watch("plane",(()=>this._updateManipulators()),!0)),this.startToolCreation();const s=j((()=>this.state),(t=>{"sliced"===t&&this.finishToolCreation()}),y);this._handles.add([s,j((()=>this.view.state.camera),(()=>this._onCameraChange()))])}destroy(){this.rotateHeadingImage=s(this.rotateHeadingImage),this.rotateTiltImage=s(this.rotateTiltImage),this._handles=i(this._handles),this._viewHandles=i(this._viewHandles),this._removeFrameTask(),this._clearPointerMoveTimeout(),this._previewPlaneOutlineVisualElement=i(this._previewPlaneOutlineVisualElement),this._previewPlaneGridVisualElement=i(this._previewPlaneGridVisualElement)}get state(){const t=!!this.analysisViewData.plane,e=!!this.inputState;return t?t&&e?"slicing":t&&!e?"sliced":"ready":"ready"}get cursor(){return this._get("cursor")}set analysis(t){if(null==t)throw new Error("SliceTool requires valid model, but null was provided.");this._handles.remove("analysis"),this._set("analysis",t)}get inputState(){return this._get("inputState")}set inputState(t){this._set("inputState",t),this.analysisView.showGrid=r(t)&&"resize"===t.type,this._updateMaterials()}get _isPlacingSlicePlane(){return!this.inputState&&!this.analysisViewData.plane&&this.active}get _creatingPointerId(){return r(this.inputState)&&"shift"===this.inputState.type?this.inputState.creatingPointerId:null}enterExcludeLayerMode(){a(this.analysisViewData.plane)||(this._set("layersMode","exclude"),this.active||(this.view.activeTool=this))}exitExcludeLayerMode(){a(this.analysisViewData.plane)||(this._set("layersMode","none"),this.active&&(this.view.activeTool=null))}onDeactivate(){this._updateMouseCursor(),this._set("layersMode","none"),this._updatePreviewPlane(null)}onShow(){this._updateVisibility(!0)}onHide(){this._updateVisibility(!1)}_updateVisibility(t){this.analysis.visible=t,this._updateMouseCursor(),this._updateManipulators(),t||this._clearPointerMoveTimeout()}onInputEvent(t){switch(t.type){case"pointer-drag":if(!Et(t))return;this._isPlacingSlicePlane?this._onClickPlacePlane(t)&&(t.stopPropagation(),this._updateMouseCursor()):this._onPointerDrag(t)&&t.stopPropagation();break;case"pointer-move":this._onPointerMove(t),this._updateMouseCursor();break;case"pointer-up":this._onPointerUp(t)&&t.stopPropagation();break;case"immediate-click":if(!Et(t))return;this._onClickPlacePlane(t)&&(t.stopPropagation(),this._updateMouseCursor());break;case"click":if(!Et(t))return;this._onClickExcludeLayer(t)&&t.stopPropagation();break;case"drag":this.inputState&&t.stopPropagation();break;case"key-down":this._onKeyDown(t)&&t.stopPropagation();break;case"key-up":this._onKeyUp(t)&&t.stopPropagation()}}onEditableChange(){this.analysisView&&(this.analysisView.editable=this.editable)}_onPointerDrag(t){const e=this.inputState;if(t.pointerId===this._creatingPointerId&&r(e)&&"shift"===e.type){const s=Tt(t);return this.shiftManipulator.events.emit("drag",{action:e.hasBeenDragged?"update":"start",pointerType:t.pointerType,start:s,screenPoint:s}),e.hasBeenDragged=!0,!0}return!1}_onPointerMove(t){this._lastCursorPosition.x=t.x,this._lastCursorPosition.y=t.y,this._resetPointerMoveTimeout(),"touch"!==t.pointerType&&this._updatePreviewPlane(Tt(t),this._activeKeyModifiers)}_onCameraChange(){this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),this._updateManipulators()}_onPointerUp(t){if(t.pointerId===this._creatingPointerId&&r(this.analysisViewData.plane)){const e=Tt(t);return this.shiftManipulator.events.emit("drag",{action:"end",start:e,screenPoint:e}),R(this.analysisViewData.plane,this._startPlane),this.inputState=null,!0}return!1}_onClickPlacePlane(t){if("exclude"===this.layersMode)return!1;if(this._isPlacingSlicePlane){const e=Tt(t),s=C();if(this._pickPlane(e,!1,this._activeKeyModifiers,s)){if(R(s,this._startPlane),this.analysis.shape=$(s,this.view,this.view.spatialReference,new m),"pointer-drag"===t.type){const i=this._calculatePickRay(e);this.inputState=Ut(i,t.pointerId,s.origin,s)}return!0}}return!1}_onClickExcludeLayer(t){return!("exclude"!==this.layersMode||!this.created)&&(this.view.hitTest(Tt(t)).then((t=>{if(t.results.length){const e=t.results[0],s=e&&e.graphic;if(s){const t=s.sourceLayer||s.layer;t&&this.analysis.excludedLayers.push(t)}}else t.ground.layer?this.analysis.excludedLayers.push(t.ground.layer):this.analysis.excludeGroundSurface=!0})),this._set("layersMode","none"),this.active&&(this.view.activeTool=null),!0)}_onKeyDown(t){return(t.key===tt||t.key===et)&&(this._activeKeyModifiers[t.key]=!0,r(this._previewPlane)&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)}_onKeyUp(t){return!(t.key!==tt&&t.key!==et||!this._activeKeyModifiers[t.key])&&(delete this._activeKeyModifiers[t.key],r(this._previewPlane)&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)}_onShiftGrab(t){if("start"!==t.action||a(this.analysisViewData.plane))return;const e=this._calculatePickRay(t.screenPoint);R(this.analysisViewData.plane,this._startPlane),this.inputState=Ut(e,null,this.shiftManipulator.renderLocation,this.analysisViewData.plane)}_createShiftDragPipeline(t){return Dt(t,((t,e,s)=>{const i=this.inputState;if(a(i)||"shift"!==i.type)return;const o=r(this.analysisViewData.plane)?R(this.analysisViewData.plane,C()):null;e.next(wt(this.view,i.shiftPlane)).next(this._shiftDragAdjustSensitivity(i)).next(this._shiftDragUpdatePlane(i)),s.next((()=>{r(o)&&this._updateBoundedPlane(o)}))}))}_shiftDragAdjustSensitivity(t){return e=>{if(a(this.analysisViewData.plane))return null;const s=Math.min((1-Math.abs(b(L(this.analysisViewData.plane),e.ray.direction)/M(e.ray.direction)))/.001,1),i=-F(this._startPlane.plane,e.renderEnd),r=-F(this._startPlane.plane,t.startPoint);return t.depth=t.depth*(1-s)+i*s-r,e}}_shiftDragUpdatePlane(t){return()=>{if(a(this.analysisViewData.plane))return;const e=S(B.get(),this._startPlane.origin),s=S(B.get(),L(this._startPlane));V(s,s,-t.depth),D(s,s,e);const i=O(s,this.analysisViewData.plane.basis1,this.analysisViewData.plane.basis2,C());this._updateBoundedPlane(i)}}_onRotateHeadingGrab(t){if("start"!==t.action||a(this.analysisViewData.plane))return;const e=st(this.analysisViewData.plane,this.view.renderCoordsHelper,it.HEADING,H()),s=this._calculatePickRay(t.screenPoint),i=E();A(e,s,i)&&(R(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:e,startPoint:i})}_createRotateHeadingDragPipeline(t){return Dt(t,((t,e,s)=>{const i=this.inputState;if(a(i)||"rotate"!==i.type)return;const o=r(this.analysisViewData.plane)?R(this.analysisViewData.plane,C()):null;e.next(wt(this.view,i.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(i)).next(this._rotateDragUpdatePlaneFromRotate()),s.next((()=>{r(o)&&this._updateBoundedPlane(o)}))}))}_onRotateTiltGrab(t){if("start"!==t.action||a(this.analysisViewData.plane))return;const e=st(this.analysisViewData.plane,this.view.renderCoordsHelper,it.TILT,H()),s=this._calculatePickRay(t.screenPoint),i=E();A(e,s,i)&&(R(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:e,startPoint:i})}_createRotateTiltDragPipeline(t){return Dt(t,((t,e,s)=>{const i=this.inputState;if(a(i)||"rotate"!==i.type)return;const o=r(this.analysisViewData.plane)?R(this.analysisViewData.plane,C()):null;e.next(wt(this.view,i.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(i)).next(this._rotateDragUpdatePlaneFromRotate()),s.next((()=>{r(o)&&this._updateBoundedPlane(o)}))}))}_rotateDragRenderPlaneToRotate(t){return e=>{if(a(this.analysisViewData.plane))return null;const s=G(t.rotatePlane),i=N(t.startPoint,e.renderEnd,this.analysisViewData.plane.origin,s);return{...e,rotateAxis:s,rotateAngle:i}}}_rotateDragUpdatePlaneFromRotate(){return t=>{if(a(this.analysisViewData.plane))return;const e=_(q.get(),t.rotateAngle,t.rotateAxis),s=T(B.get(),this._startPlane.basis1,e),i=T(B.get(),this._startPlane.basis2,e),r=O(this.analysisViewData.plane.origin,s,i,C());this._updateBoundedPlane(r)}}_onResizeGrab(t,e){if("start"!==t.action||a(this.analysisViewData.plane))return;const s=this._calculatePickRay(t.screenPoint),i=B.get();A(this.analysisViewData.plane.plane,s,i)&&(R(this.analysisViewData.plane,this._startPlane),this.inputState={type:"resize",activeHandleIdx:e,startPoint:I(i)})}_createResizeDragPipeline(t){return Dt(t,((t,e,s)=>{const i=this.inputState;if(a(i)||"resize"!==i.type||a(this.analysisViewData.plane))return;const r=R(this.analysisViewData.plane,C());e.next(wt(this.view,this.analysisViewData.plane.plane)).next(this._resizeDragUpdatePlane(i)),s.next((()=>{this._updateBoundedPlane(r)}))}))}_resizeDragUpdatePlane(t){return e=>{if(a(this.analysisViewData.plane))return;const s=this._resizeHandles[t.activeHandleIdx],i=rt(s,t.startPoint,e.renderEnd,this.view.state.camera,this._startPlane,R(this.analysisViewData.plane));this._updateBoundedPlane(i)}}_updateBoundedPlane(t){const e=this.analysisViewData;if(!r(e))throw new Error("valid internal object expected");e.plane=t}_updatePreviewPlane(t,e={}){let s=this._previewPlane;if(this._previewPlane=null,a(t))return this._removeFrameTask(),void this._updateManipulators();if(!this.analysisViewData.plane&&this.active){const i=r(s)?s:C();if(s=r(s)?R(s,Ct):null,this._pickPlane(t,!0,e,i)){const t=gt;let e=!1;r(s)&&(e=b(s.plane,i.plane)<t||b(x(B.get(),s.basis1),x(B.get(),i.basis1))<t),e&&(this._previewPlaneOpacity=0),this._previewPlane=i}}r(this._previewPlane)&&a(this._frameTask)&&0===this._previewPlaneOpacity?this._frameTask=k({update:({deltaTime:t})=>{this._previewPlaneOpacity=Math.min(this._previewPlaneOpacity+t/(1e3*at),1),this._updateManipulators(),1===this._previewPlaneOpacity&&this._removeFrameTask()}}):a(this._previewPlane)&&r(this._frameTask)?this._removeFrameTask():r(this._previewPlane)&&this._updateManipulators()}_removeFrameTask(){this._frameTask=o(this._frameTask)}_calculatePickRay(t){const e=z(),s=g(t,Rt);return bt(this.view.state.camera,s,e),x(e.direction,e.direction),e}_pickMinResult(t){const e=g(t,K.get());return this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(e,this._intersector),this._intersector.results.min}_pickPlane(t,e,s,i){const r=this._pickMinResult(t),a=B.get();if(!r.getIntersectionPoint(a))return!1;const o=r.getTransformedNormal(B.get()),n=this.view.state.camera;b(o,n.viewForward)>0&&V(o,o,-1);const l=ot(a,n),p=(e?1:-1)*l*ft,u=V(B.get(),o,p);D(u,u,a);const h=this.analysis.tiltEnabled?nt.TILTED:nt.HORIZONTAL_OR_VERTICAL,m=s[tt]?nt.VERTICAL:s[et]?nt.HORIZONTAL:h;return lt(u,o,l,l,n,m,this.view.renderCoordsHelper,i),!0}_updateMouseCursor(){this._set("cursor",null),this._isPlacingSlicePlane||"exclude"===this.layersMode?this._set("cursor","crosshair"):r(this._creatingPointerId)&&this._set("cursor","grabbing")}_clearPointerMoveTimeout(){this._prevPointerMoveTimeout=o(this._prevPointerMoveTimeout)}_resetPointerMoveTimeout(){this._clearPointerMoveTimeout(),this.shiftManipulator.state|=pt,this.rotateHeadingManipulator.state|=pt,this.rotateTiltManipulator.state|=pt,this._prevPointerMoveTimeout=this.clock.setTimeout((()=>{this.shiftManipulator.state&=~pt,this.rotateHeadingManipulator.state&=~pt,this.rotateTiltManipulator.state&=~pt}),ut)}_updateManipulators(){if(this.disableEngineLayers)return;let t=null,e=!1;if(r(this.analysisViewData.plane))t=this.analysisViewData.plane,e=!1;else{if(!r(this._previewPlane))return this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach((t=>t.available=!1)),this._previewPlaneOutlineVisualElement.visible=!1,void(this._previewPlaneGridVisualElement.visible=!1);t=this._previewPlane,e=!0}const s=ht(t,q.get());e?(this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach((t=>t.available=!1)),this._previewPlaneOutlineVisualElement.visible=!0,this._previewPlaneGridVisualElement.visible=!0):(this.shiftManipulator.available=!0,this.rotateHeadingManipulator.available=!0,this.rotateTiltManipulator.available=this.analysis.tiltEnabled,this.resizeManipulators.forEach((t=>t.available=!0)),mt(this.shiftManipulator,s,t,this.view.state.camera),ct(this.rotateHeadingManipulator,s,t,this.view.renderCoordsHelper),dt(this.rotateTiltManipulator,s,t),this.resizeManipulators.forEach(((e,i)=>jt(e,this._resizeHandles[i],s,t))),this._previewPlaneOutlineVisualElement.visible=!1,this._previewPlaneGridVisualElement.visible=!1);const i=U(B.get(),M(t.basis1),M(t.basis2),1),a=P(q.get(),i),o=w(a,s,a);this._previewPlaneOutlineVisualElement.transform=o,this._previewPlaneGridVisualElement.transform=o,this._updateMaterials()}_updateMaterials(){const t=[yt[0],yt[1],yt[2],yt[3]*this._previewPlaneOpacity];this._previewPlaneOutlineVisualElement.color=t;const e=[kt[0],kt[1],kt[2],kt[3]*this._previewPlaneOpacity];this._previewPlaneGridVisualElement.backgroundColor=e,this._previewPlaneGridVisualElement.gridColor=[0,0,0,0]}_updateManipulatorsInteractive(t){if(!t.grabbing)return this.shiftManipulator.interactive=!0,this.rotateHeadingManipulator.interactive=!0,this.rotateTiltManipulator.interactive=!0,void this.resizeManipulators.forEach((t=>{t.interactive=!0}));this.shiftManipulator.interactive=this.shiftManipulator===t,this.rotateHeadingManipulator.interactive=this.rotateHeadingManipulator===t,this.rotateTiltManipulator.interactive=this.rotateTiltManipulator===t,this.resizeManipulators.forEach((e=>{e.interactive=e===t}))}testData(){return{plane:this.analysisViewData.plane}}};function Ut(t,e,s,i){const r=vt(s,L(i),t.direction,H()),a=E();return A(r,t,a)?{type:"shift",creatingPointerId:e,hasBeenDragged:!1,shiftPlane:r,depth:0,startPoint:a}:null}function Et(t){return"mouse"!==t.pointerType||0===t.button}t([u()],xt.prototype,"clock",void 0),t([u({constructOnly:!0})],xt.prototype,"view",void 0),t([u({constructOnly:!0})],xt.prototype,"analysisView",void 0),t([u()],xt.prototype,"analysisViewData",void 0),t([u({readOnly:!0})],xt.prototype,"state",null),t([u({readOnly:!0,value:null})],xt.prototype,"cursor",null),t([u()],xt.prototype,"analysis",null),t([u({readOnly:!0})],xt.prototype,"layersMode",void 0),t([u({value:null})],xt.prototype,"inputState",null),xt=t([h("esri.views.3d.interactive.analysisTools.slice.SliceTool")],xt);const Ct=C(),Rt=f(),Lt=xt,Ot=new Set;let Ft=class extends It{constructor(t){super(t),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="SliceViewModel is only supported in 3D views.",Ot.add(this)}destroy(){Ot.delete(this)}get state(){return this.disabled||!this.ready?"disabled":a(this.tool)||"pending"===this.tool.toolState?"ready":this.tool.state}get shape(){return this.analysis.shape}set shape(t){this.analysis.shape=t}get tiltEnabled(){return this.analysis.tiltEnabled}set tiltEnabled(t){this.analysis.tiltEnabled=t}get layersMode(){const t=n(this.tool,(t=>t.layersMode));return l(t,"none")}get excludedLayers(){return this.analysis.excludedLayers}set excludedLayers(t){this.analysis.excludedLayers=t}get excludeGroundSurface(){return this.analysis.excludeGroundSurface}set excludeGroundSurface(t){this.analysis.excludeGroundSurface=t}async start(){await super.start(),Ot.forEach((t=>{t.view===this.view&&t!==this&&t.clear()})),r(this.analysisView)&&(this.analysisView.active=!0)}clear(){this.removeTool(),this.shape=null}enterExcludeLayerMode(){r(this.tool)&&this.tool.enterExcludeLayerMode()}exitExcludeLayerMode(){r(this.tool)&&this.tool.exitExcludeLayerMode()}onConnectToAnalysisView(t){t.active=!0}constructAnalysis(){return new e}constructTool(){return new Lt({view:p(this.view),analysis:this.analysis,analysisView:p(this.analysisView),visible:this.visible})}};t([u({type:e})],Ft.prototype,"analysis",void 0),t([u({readOnly:!0})],Ft.prototype,"state",null),t([u()],Ft.prototype,"shape",null),t([u()],Ft.prototype,"tiltEnabled",null),t([u()],Ft.prototype,"layersMode",null),t([u()],Ft.prototype,"excludedLayers",null),t([u({nonNullable:!0})],Ft.prototype,"excludeGroundSurface",null),Ft=t([h("esri.widgets.Slice.SliceViewModel")],Ft);const Ht=Ft;export{Ht as default};