/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import o from"../../Color.js";import{i as s}from"../../core/lang.js";import{watch as i}from"../../core/watchUtils.js";import{aliasOf as e}from"../../core/accessorSupport/decorators/aliasOf.js";import{cast as r}from"../../core/accessorSupport/decorators/cast.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import p from"../Histogram.js";import a from"../Slider.js";import l from"../Widget.js";import{getDeviationValues as c}from"./support/utils.js";import"../../chunks/widgetUtils.js";import"../../chunks/Logger.js";import{t as u}from"../../chunks/jsxFactory.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/ensureType.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../Histogram/HistogramViewModel.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/messageBundle.js";import"../../chunks/domUtils.js";import"../../chunks/Evented.js";import"../../core/Handles.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/Promise.js";import"../../core/reactiveUtils.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/widgetThemeUtils.js";import"../Slider/SliderViewModel.js";import"../../chunks/utils13.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/JSONSupport.js";import"../../chunks/writer.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/screenUtils.js";import"../../chunks/reader.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils3.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils4.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../chunks/Loadable.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../chunks/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";const h="zoom-cap",d="zoom-cap--max",j="zoom-cap--min",g="zoom-cap--line",b="zoom-cap--mask",y="zoom-cap--underline",k={interactiveTrack:!1};let S=class extends l{constructor(t,o){var s;super(t,o),this.hasTimeData=null,this.histogram=new p({layout:"vertical"}),this.histogramConfig=null,this.inputFormatFunction=null,this.inputParseFunction=null,this.labelFormatFunction=null,this.precision=4,this.slider=new a({syncedSegmentsEnabled:!0,thumbsConstrained:!1,layout:"vertical",visibleElements:{labels:!0,rangeLabels:!0},labelInputsEnabled:!0,rangeLabelInputsEnabled:!0}),this.state=null,this.syncedSegmentsEnabled=!1,this.viewModel=null,this.visibleElements={...k},this.zoomOptions=null;const e=this.slider;null==t||!t.hasTimeData||null!=t&&t.inputParseFunction||null!=t&&t.inputFormatFunction||e.set({labelInputsEnabled:!1,rangeLabelInputsEnabled:!1}),e.draggableSegmentsEnabled=!(null==t||null==(s=t.visibleElements)||!s.interactiveTrack),this.own(e.on("max-change",(t=>this.emit("max-change",t))),e.on("max-click",(t=>this.emit("max-click",t))),e.on("min-change",(t=>this.emit("min-change",t))),e.on("min-click",(t=>this.emit("min-click",t))),e.on("segment-click",(t=>this.emit("segment-click",t))),e.on("segment-drag",(t=>this.emit("segment-drag",t))),e.on("thumb-change",(t=>this.emit("thumb-change",t))),e.on("thumb-click",(t=>this.emit("thumb-click",t))),e.on("thumb-drag",(t=>this.emit("thumb-drag",t))),e.on("track-click",(t=>this.emit("track-click",t))),i(this,["histogramConfig","max","min","zoomOptions"],(()=>{const{histogram:t,histogramConfig:o,viewModel:{max:s,min:i}}=this,e=this.getParamsFromHistogramConfig(o);t.set({...e,max:s,min:i})})),i(this,"labelFormatFunction",(()=>{const{histogram:t,labelFormatFunction:o}=this;t.set({labelFormatFunction:o})})),i(this,"hasTimeData",(t=>{const{labelInputsEnabled:o,rangeLabelInputsEnabled:s}=this.slider,i=!t||this.inputFormatFunction&&this.inputParseFunction;e.set({labelInputsEnabled:o&&i,rangeLabelInputsEnabled:s&&i})})),i(this,"visibleElements.interactiveTrack",(t=>{e.draggableSegmentsEnabled=!!t}))),this._onMaxZoomCapPointerDown=this._onMaxZoomCapPointerDown.bind(this),this._onMinZoomCapPointerDown=this._onMinZoomCapPointerDown.bind(this)}initialize(){const{histogramConfig:t={},viewModel:o}=this,{labelFormatFunction:s,max:e,min:r}=o,n=this.getParamsFromHistogramConfig(t);this.own(i(o,"max",(()=>this.notifyChange("max"))),i(o,"min",(()=>this.notifyChange("min")))),this.histogram.set({labelFormatFunction:s,...n,max:e,min:r}),this.slider.set({viewModel:o})}get max(){return this.viewModel?this.viewModel.getUnzoomedMax():null}set max(t){this.viewModel.max=t,this._set("max",t)}get min(){return this.viewModel?this.viewModel.getUnzoomedMin():null}set min(t){this.viewModel.min=t,this._set("min",t)}castVisibleElements(t){return{...k,...t}}renderContent(t,o,s){return this.slider.extraNodes=[t,this.renderHistogram(s)],u("div",{class:o},this.slider.render())}renderHistogram(t){return this.histogramConfig?u("div",{key:"histogram",class:t||null},this.histogram.render()):null}renderBackgroundFillDefinition(t){return u("pattern",{id:t,patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"15",height:"15"},u("image",{x:"0",y:"0",width:"15",height:"15",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNjY2MiIC8+PHBhdGggZD0iTTAgMCBMOCAwIEw4IDggTDAgOCBaIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDgpIiAvPjxwYXRoIGQ9Ik0wIDAgTDggMCBMOCA4IEwwIDggWiIgZmlsbD0iI2NjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCw4KSIgLz48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMCkiIC8+PC9zdmc+"}))}renderRampFillDefinition(t,o){return u("linearGradient",{id:t,x1:"0",x2:"0",y1:"0",y2:"1"},this.renderRampFillStops(o))}renderRampFillStops(t){return t.reverse().map(((t,o)=>this.renderStop(t,o)))}renderStop(t,o){const{color:s,offset:i,opacity:e}=this.getPropsForStop(t);return u("stop",{key:`${o}-stop`,offset:i,"stop-color":s,"stop-opacity":e})}renderZoomCaps(){return[this.renderMaxZoomCap(),this.renderMinZoomCap()]}renderMinZoomCap(){if(this.zoomOptions&&s(this.zoomOptions.min))return u("svg",{key:"bottom",class:this.classes(h,j),viewBox:"0 0 30 11",xmlns:"http://www.w3.org/2000/svg",onpointerdown:this._onMinZoomCapPointerDown},u("polygon",{class:b,key:"mask",fill:"#1B8617",points:"0 11.3846154 30 11.3846154 30 1 25 5.38461538 20 1 15 5.38461538 10 1 5 5.38461538 0 1"}),u("polygon",{class:y,key:"underline",fill:"#69DCFF",points:"0 0 5 4.38461538 10 0 15 4.38461538 20 0 25 4.38461538 30 0 30 4.61538462 25 9 20 4.61538462 15 9 10 4.61538462 5 9 0 4.61538462"}),u("polygon",{class:g,key:"line",fill:"#DA5656",points:"0 1 5 5.38461538 10 1 15 5.38461538 20 1 25 5.38461538 30 1 30 5.61538462 25 10 20 5.61538462 15 10 10 5.61538462 5 10 0 5.61538462"}))}renderMaxZoomCap(){if(this.zoomOptions&&s(this.zoomOptions.max))return u("svg",{key:"top",class:this.classes(h,d),viewBox:"0 0 30 11",xmlns:"http://www.w3.org/2000/svg",onpointerdown:this._onMaxZoomCapPointerDown},u("polygon",{class:b,key:"mask",points:"0 -1.81994377e-12 30 -1.81994377e-12 30 8.23076923 25 3.61538462 20 8.23076923 15 3.61538462 10 8.23076923 5 3.61538462 0 8.23076923"}),u("polygon",{class:y,key:"underline",points:"0 5.61538462 5 1 10 5.61538462 15 1 20 5.61538462 25 1 30 5.61538462 30 10.2307692 25 5.61538462 20 10.2307692 15 5.61538462 10 10.2307692 5 5.61538462 0 10.2307692"}),u("polygon",{class:g,key:"line",points:"0 4.61538462 5 -1.87329639e-12 10 4.61538462 15 -1.87329639e-12 20 4.61538462 25 -1.87329639e-12 30 4.61538462 30 9.23076923 25 4.61538462 20 9.23076923 15 4.61538462 10 9.23076923 5 4.61538462 0 9.23076923"}))}getPropsForStop(t){const{color:s,offset:i}=t;return{color:s instanceof o?s.toCss(!0):o.fromString(s).toCss(!0),offset:(100*i).toFixed(2)+"%",opacity:s instanceof o?s.toRgba()[3]:null}}getParamsFromHistogramConfig(t){if(!t)return null;const{average:o,barCreatedFunction:s,bins:i,dataLineCreatedFunction:e,dataLineUpdatedFunction:r}=t;return{average:o,barCreatedFunction:s,bins:i,dataLineCreatedFunction:e,dataLineUpdatedFunction:r,dataLines:this._getDataLines(t)}}_onMaxZoomCapPointerDown(){const{zoomOptions:t}=this;if(t&&s(t.max)){const{min:o}=t;this.zoomOptions=s(o)?{min:o}:null}}_onMinZoomCapPointerDown(){const{zoomOptions:t}=this;if(t&&s(t.min)){const{max:o}=t;this.zoomOptions=s(o)?{max:o}:null}}_getDataLines(t){const{average:o,standardDeviation:s,standardDeviationCount:i}=t,{max:e,min:r}=this.viewModel.getBounds();return[...this._getStandardDeviationDataLines(s,o,i||1),...t.dataLines||[]].filter((({value:t})=>t<=e&&t>=r))}_getStandardDeviationDataLines(t,o,s){const{max:i,min:e}=this.viewModel,r=.06*(i-e);return c(t,o,s).filter((t=>Math.abs(o-t)>r)).map(((t,s,i)=>{const e=this.labelFormatFunction?this.labelFormatFunction(t):t,r=i.length/2,n=s>=r?s-r+1:r-s;return{value:t,label:`${t>o?"+":"-"}${1===n?"":n}σ ${e}`}}))}};t([e("viewModel.hasTimeData")],S.prototype,"hasTimeData",void 0),t([n()],S.prototype,"histogram",void 0),t([n()],S.prototype,"histogramConfig",void 0),t([e("viewModel.inputFormatFunction")],S.prototype,"inputFormatFunction",void 0),t([e("viewModel.inputParseFunction")],S.prototype,"inputParseFunction",void 0),t([e("viewModel.labelFormatFunction")],S.prototype,"labelFormatFunction",void 0),t([n()],S.prototype,"max",null),t([n()],S.prototype,"min",null),t([e("viewModel.precision")],S.prototype,"precision",void 0),t([n()],S.prototype,"slider",void 0),t([e("viewModel.state")],S.prototype,"state",void 0),t([e("slider.syncedSegmentsEnabled")],S.prototype,"syncedSegmentsEnabled",void 0),t([e("viewModel.values")],S.prototype,"values",void 0),t([n()],S.prototype,"viewModel",void 0),t([n()],S.prototype,"visibleElements",void 0),t([r("visibleElements")],S.prototype,"castVisibleElements",null),t([e("viewModel.zoomOptions")],S.prototype,"zoomOptions",void 0),S=t([m("esri.widgets.smartMapping.SmartMappingSliderBase")],S);export{S as SmartMappingSliderBase};