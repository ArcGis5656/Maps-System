/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{substitute as t}from"../intl.js";import s from"../core/Collection.js";import{h as o}from"../chunks/handleUtils.js";import{r as i,x as r,b as n,i as l}from"../core/lang.js";import{aliasOf as a}from"../core/accessorSupport/decorators/aliasOf.js";import{cast as p}from"../core/accessorSupport/decorators/cast.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import u from"../views/interactive/snapping/SnappingOptions.js";import h from"./Widget.js";import d from"./Sketch/SketchViewModel.js";import{i as j}from"../chunks/widgetUtils.js";import{m as y}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{t as v}from"../chunks/jsxFactory.js";import{E as g}from"../chunks/Evented.js";import"../chunks/ensureType.js";import k from"../core/Accessor.js";import{HandleOwnerMixin as b}from"../core/HandleOwner.js";import"../symbols.js";import f from"../core/Handles.js";import w from"../layers/GraphicsLayer.js";import _ from"../symbols/SimpleFillSymbol.js";import S from"../symbols/SimpleLineSymbol.js";import C from"../symbols/SimpleMarkerSymbol.js";import T from"./support/SnappingControls.js";import{v as M}from"../chunks/vmEvent.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/object.js";import"../chunks/locale.js";import"../chunks/string.js";import"../chunks/messages.js";import"../core/Error.js";import"../config.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/shared.js";import"../chunks/tracking.js";import"../chunks/utils.js";import"../chunks/get.js";import"../chunks/metadata.js";import"../chunks/deprecate.js";import"../chunks/watch.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"../chunks/Settings2.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/JSONSupport.js";import"../chunks/domUtils.js";import"../chunks/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/widgetThemeUtils.js";import"../geometry/projection.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../chunks/Ellipsoid.js";import"../chunks/mat4.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../chunks/pe.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/DOMContainer.js";import"./Popup.js";import"../chunks/throttle.js";import"../core/watchUtils.js";import"./Feature.js";import"./Attachments.js";import"../chunks/unitFormatUtils.js";import"../chunks/byteSizeEstimations.js";import"./Attachments/AttachmentsViewModel.js";import"../Graphic.js";import"../geometry.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/Clonable.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils3.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils4.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../chunks/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./Feature/FeatureViewModel.js";import"../chunks/languageUtils.js";import"../chunks/datetime.js";import"../chunks/number3.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"../chunks/executeForTopCount.js";import"../chunks/utils5.js";import"../chunks/scaleUtils.js";import"../chunks/floorFilterUtils.js";import"../chunks/query.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../chunks/compilerUtils.js";import"../chunks/featureConversionUtils.js";import"../rest/support/FeatureSet.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../chunks/executeQueryJSON.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../geometry/HeightModelInfo.js";import"../layers/Layer.js";import"../chunks/FeatureIndex.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"../chunks/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/mat4f32.js";import"../chunks/_commonjsHelpers.js";import"../chunks/CustomParametersMixin.js";import"../chunks/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../chunks/OperationalLayer.js";import"../chunks/commonProperties.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/OrderedLayer.js";import"../chunks/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/RefreshableLayer.js";import"../chunks/ScaleRangeLayer.js";import"../chunks/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../chunks/featureReductionUtils.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaultsJSON.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"../chunks/Heading.js";import"./support/widget.js";import"../chunks/accessibleHandler.js";import"./Spinner/SpinnerViewModel.js";import"../chunks/AnchorElementViewModel.js";import"./Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"../chunks/utils6.js";import"../chunks/ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils7.js";import"../chunks/InputManager.js";import"../chunks/Queue.js";import"../chunks/layerViewUtils.js";import"../chunks/actions.js";import"../chunks/GoTo.js";import"../chunks/elevationInfoUtils.js";import"../geometry/Circle.js";import"../geometry/support/geodesicUtils.js";import"../chunks/keybindings.js";import"../chunks/vec2.js";import"../chunks/QueryEngineResult.js";import"../chunks/quantizationUtils.js";import"../core/sql/WhereClause.js";import"../chunks/utils11.js";import"../chunks/generateRendererUtils.js";import"../chunks/projectionSupport.js";import"../chunks/json.js";import"../chunks/utils17.js";import"../chunks/vec2f64.js";import"../chunks/RightAngleSnappingHint.js";import"../chunks/geometry2dUtils.js";import"../chunks/screenUtils2.js";import"../chunks/GraphicsCollection.js";import"./support/SnappingControls/SnappingControlsViewModel.js";import"../chunks/layerListUtils.js";import"./LayerList/LayerListViewModel.js";import"./LayerList/ListItem.js";import"../chunks/ActionSlider.js";import"./LayerList/ListItemPanel.js";async function O(){return async function(){return import("../chunks/geometryEngineJSON.js").then((e=>e.g))}().then((({contains:e,intersects:t,overlaps:s,simplify:o})=>({contains:e,intersects:t,overlaps:s,simplify:o})))}async function U(e){const{selector:t,candidates:s,currentSelection:o,options:i,view:r}=e;if(!(s&&s.length&&o&&r))return{added:[],removed:[]};const{overlaps:n,intersects:l,contains:a}=i,{spatialReference:p}=r;if(!t){return{added:[],removed:o.removeAll()}}const c=t,m=await O(),u=[],h=[];return s.forEach((e=>{const t=e.geometry,s=n&&!!m.overlaps(p,c,t),i=l&&!!m.intersects(p,c,t),r=a&&!!m.contains(p,c,t),d=o.includes(e);s||i||r?!d&&u.push(e):d&&h.push(e)})),o.removeMany(h),o.addMany(u),{added:u,removed:h}}let I=class extends g.EventedAccessor{constructor({candidates:e,options:t,view:o}){super(),this._activeOptions=null,this._dashedFillSymbol=new _({color:[0,0,0,0],outline:{style:"dash",color:[12,207,255],width:2}}),this._dashedLineSymbol=new S({style:"dash",color:[12,207,255],width:2}),this._defaultOptions={createTool:"rectangle",createOptions:null,selectionOptions:{overlaps:!0,intersects:!0,contains:!1}},this._completed=!1,this._handles=new f,this._sketchViewModel=new d,this._sketchGraphicsLayer=new w({listMode:"hide",internal:!0}),this._transparentPointSymbol=new C({color:[0,0,0,0],outline:{style:"none",width:0}}),this.candidates=null,this.geometry=null,this.options=null,this.selection=new s,this.view=null,this.candidates=e,this.options=t,this.view=o;const{_dashedFillSymbol:i,_dashedLineSymbol:r,_sketchViewModel:n,_sketchGraphicsLayer:l,_transparentPointSymbol:a}=this;n.set({layer:l,view:this.view,activePointSymbol:a,activeLineSymbol:r,activeVertexSymbol:a,activeFillSymbol:i,pointSymbol:a,polygonSymbol:i,polylineSymbol:r,vertexSymbol:a}),this._handles.add([n.on("create",(e=>this._onSketchEvent(e))),n.on(["undo","redo"],(e=>this._onSketchEvent(e)))])}initialize(){this._load()}destroy(){this._handles.destroy(),this._handles=null}get state(){const{_completed:e,_sketchViewModel:{state:t}}=this;return e?"complete":"active"===t?"active":"disabled"}cancel(){this._sketchViewModel.cancel()}async _load(){await this.view.whenReady();const{options:e}=this,{createTool:t,createOptions:s}=this._activeOptions={...this._defaultOptions,...e};this._sketchViewModel.create(t,s)}_onSketchEvent(e){const t="create"===e.type?e.graphic:e.graphics[0],s=(null==t?void 0:t.geometry)||null,o="create"===e.type&&"cancel"===e.state,i="create"===e.type&&"complete"===e.state;this._processSelectionGeometry(s,i,o)}_processSelectionGeometry(e,t,s){if(this._set("geometry",e),(t||s)&&(this._completed=!0),s)return void this._onComplete([],!0);const{_activeOptions:o,candidates:i,selection:r,view:n}=this;U({selector:e,candidates:i,currentSelection:r,options:o.selectionOptions,view:n}).then((({added:e,removed:s})=>{t?this._onComplete(this.selection.toArray(),!1):(e.length||s.length)&&this.emit("selection-change",{added:e,removed:s,type:"selection-change"})}))}_onComplete(e,t){this._handles.removeAll(),this.notifyChange("state"),this.emit("complete",{aborted:t,selection:e,type:"complete"})}};e([c()],I.prototype,"_completed",void 0),e([c()],I.prototype,"candidates",void 0),e([c({readOnly:!0})],I.prototype,"geometry",void 0),e([c()],I.prototype,"options",void 0),e([c({readOnly:!0})],I.prototype,"selection",void 0),e([c({readOnly:!0})],I.prototype,"state",null),e([c({value:null})],I.prototype,"view",void 0),I=e([m("esri.widgets.support.Selector2D.SelectionOperation2D")],I);const L=I;let E=class extends(b(k)){constructor(e){super(e),this._defaultSelectionOptions={intersects:!0,overlaps:!0,contains:!0},this.candidates=null,this.options=null,this.view=null}draw(e){const{_defaultSelectionOptions:t,candidates:s,options:o,view:i}=this,r={...t,...o,...null==e?void 0:e.selectionOptions};return new L({candidates:s,options:{...e,selectionOptions:r},view:i})}async selectionFrom(e,t){const{_defaultSelectionOptions:o,candidates:i,options:r,view:n}=this,l=new s,a={...o,...r,...t};return await U({selector:e,candidates:i,currentSelection:l,options:a,view:n}),l.toArray()}};e([c()],E.prototype,"candidates",void 0),e([c()],E.prototype,"options",void 0),e([c({value:null})],E.prototype,"view",void 0),E=e([m("esri.widgets.support.Selector2D")],E);const R=E;let V=class extends g.EventedAccessor{constructor(e){super(e),this._operationHandlesGroup=null,this.activeOperation=null,this.layers=null,this.selector=new R}destroy(){this._operationHandlesGroup=i(this._operationHandlesGroup),this.selector.destroy()}get state(){var e,t;return this.activeOperation?"active":null!=(e=this.view)&&e.ready&&null!=(t=this.layers)&&t.length?"ready":"disabled"}set view(e){this.selector.view=e,this._set("view",e)}cancel(){"active"===this.state&&(this.activeOperation.cancel(),this.activeOperation=null),this.selector.candidates=null}activate(e){const{state:t}=this;if("disabled"===t)return;"active"===t&&this.cancel(),this.selector.candidates=this._getCandidates();const s=this.selector.draw(e);return this._operationHandlesGroup=o([s.once("complete",(e=>this._onOperationComplete(e))),s.on("selection-change",(e=>this._onOperationSelectionChange(e)))]),this.activeOperation=s,s}_getCandidates(){let e=[];return this.layers.forEach((t=>{e=e.concat(...t.graphics.toArray())})),e}_onOperationSelectionChange(e){this.emit("selection-change",e)}_onOperationComplete(e){this._operationHandlesGroup=i(this._operationHandlesGroup),this.activeOperation=null,this.emit("complete",e)}};e([c()],V.prototype,"activeOperation",void 0),e([c()],V.prototype,"layers",void 0),e([c({readOnly:!0})],V.prototype,"selector",void 0),e([c({readOnly:!0})],V.prototype,"state",null),e([c()],V.prototype,"view",null),V=e([m("esri.widgets.support.SelectionToolbar.SelectionToolbarViewModel")],V);const D=V,P={lassoTool:!0,rectangleTool:!0},x={createTool:"polygon",createOptions:{mode:"freehand"}},F={createTool:"rectangle"},B="esri-selection-toolbar",G="esri-selection-toolbar__container",A="esri-selection-toolbar__tool-button",H="esri-widget";let N=class extends h{constructor(e,t){super(e,t),this._viewModelHandlesGroup=null,this.activeToolInfo=null,this.label=void 0,this.layers=[],this.messages=null,this.toolConfigs=[],this.view=null,this.viewModel=new D,this.visibleElements={...P},this._viewModelHandlesGroup=o([this.viewModel.on("selection-change",(e=>this.emit("selection-change",e))),this.viewModel.on("complete",(e=>{this._set("activeToolInfo",null),this.emit("complete",e)}))])}destroy(){this._viewModelHandlesGroup=i(this._viewModelHandlesGroup)}loadDependencies(){return Promise.all([import("../chunks/calcite-action.js"),import("../chunks/calcite-icon.js")])}castVisibleElements(e){return{...P,...e}}activate(e){switch(this.cancel(),e){case"lasso":this._activateTool("lasso");case"rectangle":this._activateTool("rectangle");default:this._activateTool(e)}}cancel(){this.viewModel.cancel(),this._set("activeToolInfo",null)}render(){return v("div",{"aria-label":this.label,class:this.classes(B,H)},v("div",{class:G},this.renderDefaultTools(),this.renderCustomTools()))}renderDefaultTools(){var e;if("2d"===(null==(e=this.view)?void 0:e.type))return[this.renderRectangleTool(),this.renderLassoTool()]}renderCustomTools(){if(this.toolConfigs&&this.toolConfigs.length)return this.toolConfigs.map((e=>{var t;return v("calcite-action",{active:(null==(t=this.activeToolInfo)?void 0:t.toolName)===e.toolName,bind:this,class:A,label:e.toolName,onclick:()=>this._onCustomToolClick(e.toolName),scale:"s",text:e.toolName,title:e.toolName},v("calcite-icon",{scale:"s",icon:e.icon||"selection"}))}))}renderLassoTool(){const{activeToolInfo:e,messages:t,visibleElements:s}=this;if(s.lassoTool)return v("calcite-action",{active:"lasso"===(null==e?void 0:e.toolName),bind:this,label:t.selectByLasso,onclick:this._onLassoToolClick,scale:"s",text:t.selectByLasso,title:t.selectByLasso},v("calcite-icon",{scale:"s",icon:"lasso"}))}renderRectangleTool(){const{activeToolInfo:e,messages:t,visibleElements:s}=this;if(s.rectangleTool)return v("calcite-action",{active:"rectangle"===(null==e?void 0:e.toolName),bind:this,label:t.selectByRectangle,onclick:this._onRectangleToolClick,scale:"s",text:t.selectByRectangle,title:t.selectByRectangle},v("calcite-icon",{scale:"s",icon:"cursor-marquee"}))}_onCustomToolClick(e){this._toggleTool(e)}_onLassoToolClick(){this._toggleTool("lasso")}_onRectangleToolClick(){this._toggleTool("rectangle")}_activateTool(e){const t=this._getToolOptions(e);if(!t)return;const s=this.viewModel.activate(t);this._set("activeToolInfo",{toolName:e,operation:s})}_toggleTool(e){if(this.activeToolInfo){const t=this.activeToolInfo.toolName;if(this.cancel(),t===e)return}this._activateTool(e)}_getToolOptions(e){if("lasso"===e)return x;if("rectangle"===e)return F;const t=this.toolConfigs.find((t=>t.toolName===e));if(!t)return;const{createTool:s,createOptions:o,selectionOptions:i}=t;return{createTool:s,createOptions:o,selectionOptions:i}}};e([c({readOnly:!0})],N.prototype,"activeToolInfo",void 0),e([c({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],N.prototype,"label",void 0),e([a("viewModel.layers")],N.prototype,"layers",void 0),e([c(),y("esri/widgets/support/SelectionToolbar/t9n/SelectionToolbar")],N.prototype,"messages",void 0),e([c()],N.prototype,"toolConfigs",void 0),e([a("viewModel.view")],N.prototype,"view",void 0),e([c()],N.prototype,"viewModel",void 0),e([c()],N.prototype,"visibleElements",void 0),e([p("visibleElements")],N.prototype,"castVisibleElements",null),N=e([m("esri.widgets.support.SelectionToolbar")],N);const z=N,Q="esri-sketch",q="esri-sketch--vertical",J="esri-sketch__panel",W="esri-sketch__info-panel",K="esri-sketch__section",Z="esri-sketch__tool-section",X="esri-sketch__info-section",Y="esri-sketch__info-count-section",$="esri-sketch__menu-container",ee="esri-sketch__menu-header",te="esri-sketch__menu-title",se="esri-sketch__feature-count-badge",oe="esri-sketch__feature-count-number",ie="esri-disabled",re="esri-widget",ne="esri-icon-edit",le={createTools:{point:!0,polyline:!0,polygon:!0,rectangle:!0,circle:!0},selectionTools:{"rectangle-selection":!0,"lasso-selection":!0},undoRedoMenu:!0,settingsMenu:!0,snappingControls:!0,snappingControlsElements:{header:!1,enabledToggle:!0,selfEnabledToggle:!0,featureEnabledToggle:!0,layerList:!0}};let ae=class extends h{constructor(e,t){super(e,t),this._activeCreateOptions=null,this._defaultViewModel=null,this._menuOpen=!1,this._selectionToolbar=null,this._selectionHandlesGroup=null,this._snappingControls=null,this._viewModelHandlesGroup=null,this.availableCreateTools=["point","polyline","polygon","rectangle","circle"],this.createGraphic=null,this.creationMode="continuous",this.defaultCreateOptions=null,this.defaultUpdateOptions=null,this.iconClass=ne,this.label=void 0,this.layer=null,this.layout="horizontal",this.messages=null,this.snappingOptions=new u,this.updateGraphics=new s,this.view=null,this.visibleElements={...le},this._activateCreateTool=this._activateCreateTool.bind(this),null!=e&&e.viewModel||(this._defaultViewModel=new d,this.viewModel=this._defaultViewModel)}initialize(){const{layer:e,view:t}=this,s=new z({view:"2d"===(null==t?void 0:t.type)?t:null,layers:e?[e]:null});this._selectionHandlesGroup=o([s.watch("activeToolInfo",(e=>{e&&this.viewModel.cancel()})),s.on("complete",(e=>this._onSelectionOperationComplete(e)))]),this._selectionToolbar=s,this._setUpSnappingControls()}loadDependencies(){return Promise.all([import("../chunks/calcite-action.js"),import("../chunks/calcite-icon.js")])}destroy(){this._selectionToolbar.destroy(),this._cleanupViewModel(),this._selectionHandlesGroup=i(this._selectionHandlesGroup),this._snappingControls=r(this._snappingControls)}get activeTool(){const e=this._selectionToolbar.activeToolInfo;if(e)switch(e.toolName){case"lasso":return"lasso-selection";case"rectangle":return"rectangle-selection";case"default":return"custom-selection"}return this.viewModel.activeTool}get state(){return this._selectionToolbar.activeToolInfo?"active":this.viewModel.state}set viewModel(e){e!==this._get("viewModel")&&((n(this._defaultViewModel)||this._defaultViewModel!==e)&&this._cleanupViewModel(),this._set("viewModel",e),this.viewModel&&(this._viewModelHandlesGroup=o([this.viewModel.on("create",(e=>{this.scheduleRender(),this._onCreateOperation(e)})),this.viewModel.on("update",(()=>this.scheduleRender())),this.viewModel.on("delete",(e=>this.emit("delete",e))),this.viewModel.on("undo",(()=>this.scheduleRender())),this.viewModel.on("redo",(()=>this.scheduleRender())),this.viewModel.watch("layer",(e=>{this._selectionToolbar.layers=e?[e]:null})),this.viewModel.watch("view",(e=>{this._selectionToolbar.view="2d"===(null==e?void 0:e.type)?e:null,this._setUpSnappingControls()})),this.viewModel.watch("state",(()=>this.notifyChange("state")))])))}castVisibleElements(e){const t={...le,...e,createTools:{...le.createTools,...null==e?void 0:e.createTools},selectionTools:{...le.selectionTools,...null==e?void 0:e.selectionTools},snappingControlsElements:{...le.snappingControlsElements,...null==e?void 0:e.snappingControlsElements}};return l(this._snappingControls)&&(this._snappingControls.visibleElements=t.snappingControlsElements),t}create(e,t){this._activeCreateOptions=t||null,this.viewModel.create(e,t)}update(e,t){return this.viewModel.update(e,t)}complete(){}cancel(){this._selectionToolbar.cancel(),this.viewModel.cancel()}undo(){var e;this.viewModel.undo(),null==(e=this.view)||e.focus()}redo(){var e;this.viewModel.redo(),null==(e=this.view)||e.focus()}delete(){}render(){const{label:e,layout:t,viewModel:{state:s}}=this;return v("div",{"aria-label":e,class:this.classes(Q,re,{[ie]:"disabled"===s,[q]:"vertical"===t})},v("div",{role:"toolbar",class:J},this.renderTopPanelContents()),v("div",{class:this.classes(J,W)},this.renderInfoPanelContents()))}renderTopPanelContents(){const e=this.classes(K,Z),{availableCreateTools:t,visibleElements:s}=this;return[v("div",{role:"menu",key:"selection-button-container",class:e},this.renderDefaultSelectionButton(),this.renderSelectionToolbar()),t&&t.length?v("div",{role:"menu",class:e},this.renderDrawButtons()):null,s.undoRedoMenu?v("div",{role:"menu",key:"undo-redo-menu-button-container",class:e},this.renderUndoRedoMenuButtons()):null,s.settingsMenu?v("div",{key:"settings-menu-button-container",class:K},this.renderSettingsMenuButton()):null]}renderInfoPanelContents(){return this._menuOpen?this.renderSettingsMenu():this.updateGraphics.length?[v("div",{class:this.classes(K,X,Y),key:"feature-count-container"},this.renderFeatureCount()),v("div",{class:this.classes(K,X),key:"delete-button-container"},this.renderDeleteButton())]:void 0}renderSettingsMenu(){const{settings:e}=this.messages;return[v("div",{role:"menu",class:$,key:"settings-menu-container"},v("header",{class:ee,key:"settings-menu-header"},v("span",{class:te},e)),this.renderSnappingControls())]}renderSnappingControls(){const{snappingControls:e}=this.visibleElements;if(l(this._snappingControls)&&e)return this._snappingControls.render()}renderFeatureCount(){const{layout:e,messages:s,updateGraphics:{length:o}}=this,i=t(1===o?s.featureCount:s.featuresCount,{count:o});return v("div",{class:se,"aria-label":i},v("span",{class:oe},"vertical"===e?o:i))}renderDeleteButton(){const e=this.messages.deleteFeature;return v("calcite-action",{bind:this,label:e,onclick:this.delete,scale:"s",text:e,title:e},v("calcite-icon",{scale:"s",icon:"trash"}))}renderDefaultSelectionButton(){if(!this.viewModel.updateOnGraphicClick)return;const e=this.messages.selectFeature;return v("calcite-action",{active:"ready"===this.state,bind:this,label:e,onclick:this._activateDefaultSelectTool,scale:"s",text:e,title:e},v("calcite-icon",{scale:"s",icon:"cursor"}))}renderSelectionToolbar(){var e;if("2d"!==(null==(e=this.view)?void 0:e.type))return;const t=this.visibleElements.selectionTools;return this._selectionToolbar.visibleElements={lassoTool:!!t["lasso-selection"],rectangleTool:!!t["rectangle-selection"]},this._selectionToolbar.render()}renderDrawButtons(){const e=this.visibleElements.createTools;return this.availableCreateTools.map((t=>"point"===t&&e.point?this.renderPointButton():"polyline"===t&&e.polyline?this.renderPolylineButton():"polygon"===t&&e.polygon?this.renderPolygonButton():"rectangle"===t&&e.rectangle?this.renderRectangleButton():"circle"===t&&e.circle?this.renderCircleButton():void 0))}renderPointButton(){const e="point",t=this.messages.drawPoint;return v("calcite-action",{active:this.activeTool===e,bind:this,label:t,onclick:()=>this._activateCreateTool(e),scale:"s",text:t,title:t},v("calcite-icon",{scale:"s",icon:"pin"}))}renderPolygonButton(){const e="polygon",t=this.messages.drawPolygon;return v("calcite-action",{active:this.activeTool===e,bind:this,label:t,onclick:()=>this._activateCreateTool(e),scale:"s",text:t,title:t},v("calcite-icon",{scale:"s",icon:"polygon"}))}renderPolylineButton(){const e="polyline",t=this.messages.drawPolyline;return v("calcite-action",{active:this.activeTool===e,bind:this,label:t,onclick:()=>this._activateCreateTool(e),scale:"s",text:t,title:t},v("calcite-icon",{scale:"s",icon:"line"}))}renderCircleButton(){const e="circle",t=this.messages.drawCircle;return v("calcite-action",{active:this.activeTool===e,bind:this,label:t,onclick:()=>this._activateCreateTool(e),scale:"s",text:t,title:t},v("calcite-icon",{scale:"s",icon:"circle"}))}renderRectangleButton(){const e="rectangle",t=this.messages.drawRectangle;return v("calcite-action",{active:this.activeTool===e,bind:this,label:t,onclick:()=>this._activateCreateTool(e),scale:"s",text:t,title:t},v("calcite-icon",{scale:"s",icon:"rectangle"}))}renderUndoRedoMenuButtons(){return[this.renderUndoButton(),this.renderRedoButton()]}renderUndoButton(){const e=this.messages.undo;return v("calcite-action",{disabled:!this.viewModel.canUndo(),bind:this,label:e,onclick:this.undo,scale:"s",text:e,title:e},v("calcite-icon",{scale:"s",icon:j(this.container)?"redo":"undo"}))}renderRedoButton(){const e=this.messages.redo;return v("calcite-action",{disabled:!this.viewModel.canRedo(),bind:this,label:e,onclick:this.redo,scale:"s",text:e,title:e},v("calcite-icon",{scale:"s",icon:j(this.container)?"undo":"redo"}))}renderSettingsMenuButton(){const e=this.messages.settings;return v("calcite-action",{active:this._menuOpen,bind:this,label:e,onclick:this._toggleMenu,scale:"s",text:e,title:e},v("calcite-icon",{scale:"s",icon:"gear"}))}_activateCreateTool(e){this.activeTool!==e?(this._selectionToolbar.cancel(),this.create(e)):this.cancel()}_onCreateOperation(e){if("complete"!==e.state)return;const{creationMode:t}=this,{type:s}=e;if("create"===s){const{tool:s,graphic:o}=e,i=this._activeCreateOptions;this._activeCreateOptions=null,"continuous"===t?this.create(s,i):"update"===t&&this.update([o])}}_toggleMenu(){this._menuOpen=!this._menuOpen,this.scheduleRender()}_onSelectionOperationComplete(e){const{viewModel:{defaultUpdateOptions:t}}=this,{selection:s}=e;if(!e.aborted&&s.length){const e=t.tool,o=s.length>1&&"reshape"===e?"transform":e;this.update(s,{...t,tool:o})}this.notifyChange("state")}_activateDefaultSelectTool(){var e;this.cancel(),null==(e=this.view)||e.focus()}_cleanupViewModel(){this._defaultViewModel=r(this._defaultViewModel),this._viewModelHandlesGroup=i(this._viewModelHandlesGroup)}_setUpSnappingControls(){const{snappingOptions:e,view:t}=this;if(this._snappingControls=r(this._snappingControls),!e||!t)return;const s=new T({snappingOptions:e,view:t,visibleElements:this.visibleElements.snappingControlsElements});this._snappingControls=s}};e([c()],ae.prototype,"activeTool",null),e([c({cast:e=>{if(!e||!e.length)return null;const t=new Set(["point","polyline","polygon","rectangle","circle"]);return e.filter((e=>t.has(e)))}})],ae.prototype,"availableCreateTools",void 0),e([a("viewModel.createGraphic")],ae.prototype,"createGraphic",void 0),e([c()],ae.prototype,"creationMode",void 0),e([a("viewModel.defaultCreateOptions")],ae.prototype,"defaultCreateOptions",void 0),e([a("viewModel.defaultUpdateOptions")],ae.prototype,"defaultUpdateOptions",void 0),e([c()],ae.prototype,"iconClass",void 0),e([c({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],ae.prototype,"label",void 0),e([a("viewModel.layer")],ae.prototype,"layer",void 0),e([c({type:["horizontal","vertical"]})],ae.prototype,"layout",void 0),e([c(),y("esri/widgets/Sketch/t9n/Sketch")],ae.prototype,"messages",void 0),e([a("viewModel.snappingOptions")],ae.prototype,"snappingOptions",void 0),e([c()],ae.prototype,"state",null),e([a("viewModel.updateGraphics")],ae.prototype,"updateGraphics",void 0),e([a("viewModel.view")],ae.prototype,"view",void 0),e([c(),M(["create","update","undo","redo"])],ae.prototype,"viewModel",null),e([c()],ae.prototype,"visibleElements",void 0),e([p("visibleElements")],ae.prototype,"castVisibleElements",null),e([a("viewModel.complete")],ae.prototype,"complete",null),e([a("viewModel.delete")],ae.prototype,"delete",null),ae=e([m("esri.widgets.Sketch")],ae);const pe=ae;export{pe as default};