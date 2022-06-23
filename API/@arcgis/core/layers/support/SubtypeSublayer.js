/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import o from"../../PopupTemplate.js";import e from"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import t from"../../renderers/Renderer.js";import s from"../../renderers/SimpleRenderer.js";import i from"../../renderers/UniqueValueRenderer.js";import{read as p,w as n}from"../../renderers/support/jsonUtils.js";import{symbolTypesRenderer as l}from"../../symbols.js";import{HandleOwnerMixin as m}from"../../core/HandleOwner.js";import{I as a}from"../../chunks/Identifiable.js";import{L as u}from"../../chunks/Loadable.js";import{L as j}from"../../chunks/Logger.js";import{M as c}from"../../chunks/MultiOriginJSONSupport.js";import{property as y}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{r as d}from"../../chunks/reader.js";import{c as b,subclass as h}from"../../core/accessorSupport/decorators/subclass.js";import{l as f,b as k,m as g,c as S,a as I,p as v}from"../../chunks/commonProperties.js";import D from"./FeatureTemplate.js";import C from"./LabelClass.js";import{r as U}from"../../chunks/labelingInfo.js";import{createPopupTemplate as V}from"../../support/popupUtils.js";import"../../core/Collection.js";import"../../chunks/ArrayPool.js";import"../../chunks/Evented.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/shared.js";import"../../chunks/JSONSupport.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/writer.js";import"./fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../chunks/opacityUtils.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/screenUtils.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../chunks/Clonable.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils3.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils4.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../chunks/Promise.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../core/Handles.js";import"../../core/reactiveUtils.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/labelUtils.js";import"../../chunks/defaultsJSON.js";const L=j.getLogger("esri.layers.FeatureLayer"),w=b({types:l}),M={key:"type",base:t,typeMap:{simple:s,"unique-value":i,"class-breaks":e},errorContext:"renderer"};let P=class extends(m(c(a(u)))){constructor(r){super(r),this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.minScale=0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get effectiveScaleRange(){const{minScale:r,maxScale:o}=this;return{minScale:r,maxScale:o}}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(r){this._set("renderer",r)}readRenderer(r,o,e){const t=(o=o.layerDefinition||o).drawingInfo&&o.drawingInfo.renderer||void 0;if(t){const r=p(t,o,e)||void 0;return r||L.error("Failed to create renderer",{rendererDefinition:o.drawingInfo.renderer,layer:this,context:e}),r}if(o.defaultSymbol)return o.types&&o.types.length?new i({defaultSymbol:w(o.defaultSymbol,o,e),field:o.typeIdField,uniqueValueInfos:o.types.map((r=>({id:r.id,symbol:w(r.symbol,r,e)})))}):new s({symbol:w(o.defaultSymbol,o,e)})}readTemplates(r,o){return r=r&&r.map((r=>D.fromJSON(r)))}readVisible(r,o){return o.layerDefinition&&null!=o.layerDefinition.defaultVisibility?!!o.layerDefinition.defaultVisibility:null!=o.visibility?!!o.visibility:void 0}createPopupTemplate(r){const o=this.parent.fields;return V({...this,fields:o},r)}};r([y({json:{read:!1}})],P.prototype,"type",void 0),r([y(f)],P.prototype,"labelsVisible",void 0),r([y({type:[C],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:U},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:U},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],P.prototype,"labelingInfo",void 0),r([y(k)],P.prototype,"legendEnabled",void 0),r([y(g)],P.prototype,"minScale",void 0),r([y(S)],P.prototype,"maxScale",void 0),r([y({readOnly:!0})],P.prototype,"effectiveScaleRange",null),r([y(I)],P.prototype,"opacity",void 0),r([y()],P.prototype,"parent",void 0),r([y(v)],P.prototype,"popupEnabled",void 0),r([y({type:o,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],P.prototype,"popupTemplate",void 0),r([y({readOnly:!0})],P.prototype,"defaultPopupTemplate",null),r([y({types:M,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:n,write:{overridePolicy:(r,o,e)=>({ignoreOrigin:null==e?void 0:e.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(r,o,e)=>({ignoreOrigin:null==e?void 0:e.writeLayerSchema})}}})],P.prototype,"renderer",null),r([d("service","renderer",["drawingInfo.renderer","defaultSymbol"]),d("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],P.prototype,"readRenderer",null),r([y({type:Number,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.subtypeCode"},write:{target:"layerDefinition.subtypeCode"}}})],P.prototype,"subtypeCode",void 0),r([y({type:[D]})],P.prototype,"templates",void 0),r([d("templates",["editFieldsInfo","creatorField","editorField","templates"])],P.prototype,"readTemplates",null),r([y()],P.prototype,"title",void 0),r([y({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],P.prototype,"visible",void 0),r([d("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],P.prototype,"readVisible",null),P=r([h("esri.layers.support.SubtypeSublayer")],P);const R=P;export{R as default};
