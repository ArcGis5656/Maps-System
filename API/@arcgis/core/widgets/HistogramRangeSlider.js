/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import s from"../Color.js";import{watch as o}from"../core/watchUtils.js";import{aliasOf as e}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import{I as i}from"../chunks/ensureType.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import a from"./Histogram.js";import l from"./Slider.js";import p from"./Widget.js";import m from"./HistogramRangeSlider/HistogramRangeSliderViewModel.js";import{getDeviationValues as u}from"./smartMapping/support/utils.js";import"../chunks/widgetUtils.js";import{m as d}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{t as c}from"../chunks/jsxFactory.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"./Histogram/HistogramViewModel.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/widgetThemeUtils.js";import"./Slider/SliderViewModel.js";import"../chunks/utils13.js";import"../chunks/numberUtils.js";import"../renderers/visualVariables/support/ColorStop.js";import"../chunks/JSONSupport.js";import"../chunks/writer.js";import"../renderers/visualVariables/SizeVariable.js";import"../chunks/screenUtils.js";import"../chunks/reader.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils3.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils4.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../chunks/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../chunks/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";const h="esri-histogram-range-slider",j="esri-histogram-range-slider__slider-container",b="esri-histogram-range-slider__histogram-container",y="esri-histogram-range-slider__range-type--",g="esri-widget",k="esri-disabled";let v=class extends p{constructor(t,o){super(t,o),this._barElements=[],this._histogram=null,this._slider=null,this.average=null,this.barCreatedFunction=null,this.bins=null,this.dataLines=null,this.dataLineCreatedFunction=null,this.excludedBarColor=new s("#d7e5f0"),this.hasTimeData=null,this.includedBarColor=new s("#599dd4"),this.label=void 0,this.labelFormatFunction=null,this.max=null,this.messages=null,this.min=null,this.precision=4,this.rangeType=null,this.standardDeviation=null,this.standardDeviationCount=1,this.values=null,this.viewModel=new m}initialize(){const{average:t,bins:s,hasTimeData:e,max:i,min:r,viewModel:n}=this;this._updateBarFill=this._updateBarFill.bind(this),this._histogram=new a({average:t,bins:s,barCreatedFunction:(t,s)=>{0===t&&(this._barElements=[]),this._barElements.push(s),this._updateBarFill(t,s),this.barCreatedFunction&&this.barCreatedFunction(t,s)},dataLines:this._getDataLines(),dataLineCreatedFunction:(t,s)=>{this.dataLineCreatedFunction&&this.dataLineCreatedFunction(t,s)},labelFormatFunction:this.labelFormatFunction,layout:"horizontal",max:i,min:r}),this._slider=new l({labelFormatFunction:this.labelFormatFunction,layout:"horizontal",visibleElements:{labels:!0,rangeLabels:!0},rangeLabelInputsEnabled:!e,viewModel:n}),this.own(this._slider.on(["max-change","min-change"],(t=>this.emit(t.type,t))),this._slider.on(["segment-drag","thumb-change","thumb-drag"],(t=>{this._updateBarFills(),this.emit(t.type,t)})),o(this,"bins",(()=>{const{_histogram:t,bins:s}=this;if(s&&t.bins){const o=t.bins.length-s.length;this._barElements.splice(-o,o)}else this._barElements=[];t.set({bins:s}),this._updateBarFills(),this.scheduleRender()})),o(this,["max","min","rangeType","values"],(()=>{const{_histogram:t,max:s,min:o}=this;t.set({max:s,min:o}),this._updateBarFills(),this.scheduleRender()})),o(this,["average","dataLines","standardDeviation","standardDeviationCount"],(()=>{const{_histogram:t,average:s}=this;t.set({average:s,dataLines:this._getDataLines()})})),o(this,"labelFormatFunction",(()=>{const{_histogram:t,labelFormatFunction:s}=this;t.set({labelFormatFunction:s})})),o(this,"hasTimeData",(()=>{this._slider.set({rangeLabelInputsEnabled:!this.hasTimeData})})))}generateWhereClause(t){return this.viewModel.generateWhereClause(t)}render(){const{rangeType:t,viewModel:s,label:o}=this,e=this.classes(h,g,`${y}${t}`,"disabled"===s.state?k:null);return c("div",{"aria-label":o,class:e},"disabled"===s.state?null:this.renderContent())}renderContent(){return[this.renderHistogram(),this.renderSlider()]}renderSlider(){return c("div",{key:`${this.id}-slider-container`,class:j},this._slider.render())}renderHistogram(){return c("div",{class:b},this._histogram.render())}_getDataLines(){return[...this._getStandardDeviationDataLines(),...this.dataLines||[]]}_getStandardDeviationDataLines(){const{average:t,standardDeviation:s,standardDeviationCount:o}=this;return u(s,t,o).map((t=>({value:t})))}_updateBarFills(){this._barElements.forEach(((t,s)=>this._updateBarFill(s,t)))}_updateBarFill(t,s){s.setAttribute("fill",this._getFillForBar(t).toHex())}_getFillForBar(t){const{bins:s,rangeType:o,values:e}=this;if(!(s&&s.length&&o&&e.length))return null;const i=s[t];if(!i)return null;const{maxValue:r,minValue:n}=i,a=r-n,l=e[0]>n&&e[0]<r;switch(o){case"equal":case"not-equal":return this.includedBarColor;case"less-than":case"at-most":return l?this._getBlendedColor((e[0]-n)/a):r<=e[0]?this.includedBarColor:this.excludedBarColor;case"greater-than":case"at-least":return l?this._getBlendedColor(1-(e[0]-n)/a):n>=e[0]?this.includedBarColor:this.excludedBarColor;case"between":if(2===e.length)return e[0]>n&&e[0]<r?this._getBlendedColor(1-(e[0]-n)/a):e[1]>n&&e[1]<r?this._getBlendedColor((e[1]-n)/a):n>=e[0]&&r<=e[1]?this.includedBarColor:this.excludedBarColor;case"not-between":if(2===e.length)return e[0]>n&&e[0]<r?this._getBlendedColor((e[0]-n)/a):e[1]>n&&e[1]<r?this._getBlendedColor(1-(e[1]-n)/a):n>e[0]&&r<e[1]?this.excludedBarColor:this.includedBarColor;default:return this.includedBarColor}}_getBlendedColor(t){return s.blendColors(this.excludedBarColor,this.includedBarColor,t)}};t([e("viewModel.average")],v.prototype,"average",void 0),t([r()],v.prototype,"barCreatedFunction",void 0),t([e("viewModel.bins")],v.prototype,"bins",void 0),t([r()],v.prototype,"dataLines",void 0),t([r()],v.prototype,"dataLineCreatedFunction",void 0),t([r({type:s,json:{type:[i],write:!0}})],v.prototype,"excludedBarColor",void 0),t([e("viewModel.hasTimeData")],v.prototype,"hasTimeData",void 0),t([r({type:s,json:{type:[i],write:!0}})],v.prototype,"includedBarColor",void 0),t([r({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],v.prototype,"label",void 0),t([e("viewModel.labelFormatFunction")],v.prototype,"labelFormatFunction",void 0),t([e("viewModel.max")],v.prototype,"max",void 0),t([r(),d("esri/widgets/HistogramRangeSlider/t9n/HistogramRangeSlider")],v.prototype,"messages",void 0),t([e("viewModel.min")],v.prototype,"min",void 0),t([e("viewModel.precision")],v.prototype,"precision",void 0),t([e("viewModel.rangeType")],v.prototype,"rangeType",void 0),t([e("viewModel.standardDeviation")],v.prototype,"standardDeviation",void 0),t([r()],v.prototype,"standardDeviationCount",void 0),t([e("viewModel.values")],v.prototype,"values",void 0),t([r()],v.prototype,"viewModel",void 0),v=t([n("esri.widgets.HistogramRangeSlider")],v);const C=v;export{C as default};
