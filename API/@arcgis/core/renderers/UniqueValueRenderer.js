/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{ensureType as t}from"../symbols.js";import s from"../core/Error.js";import{b as o,clone as i,o as r,u as l}from"../core/lang.js";import{L as n}from"../chunks/Logger.js";import{d as a}from"../chunks/object.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import{cast as u}from"../core/accessorSupport/decorators/cast.js";import{e as m}from"../chunks/enumeration.js";import{r as c}from"../chunks/reader.js";import{subclass as y}from"../core/accessorSupport/decorators/subclass.js";import{w as d}from"../chunks/writer.js";import{d as h}from"../chunks/diffUtils.js";import{e as f,n as j}from"../chunks/ensureType.js";import{collectArcadeFieldNames as b,collectField as g}from"../layers/support/fieldUtils.js";import S from"../portal/Portal.js";import v from"./Renderer.js";import{V as k}from"../chunks/VisualVariablesMixin.js";import{r as V,a as I}from"../chunks/commonProperties2.js";import{L as U}from"../chunks/LegendOptions.js";import q from"./support/UniqueValueInfo.js";import{l as D}from"../chunks/arcadeOnDemand.js";import{f as O,t as w}from"../chunks/persistableUrlUtils.js";import{f as _}from"../chunks/styleUtils.js";import F from"../symbols/WebStyleSymbol.js";import"../symbols/CIMSymbol.js";import"../chunks/string.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../config.js";import"../chunks/jsonMap.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils3.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils4.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"../symbols/LabelSymbol3D.js";import"../core/Collection.js";import"../chunks/Evented.js";import"../chunks/shared.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../chunks/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../kernel.js";import"../request.js";import"../chunks/Loadable.js";import"../chunks/Promise.js";import"../chunks/locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"./support/AuthoringInfo.js";import"./support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./visualVariables/ColorVariable.js";import"./visualVariables/VisualVariable.js";import"./visualVariables/support/ColorStop.js";import"./visualVariables/OpacityVariable.js";import"./visualVariables/support/OpacityStop.js";import"./visualVariables/RotationVariable.js";import"./visualVariables/SizeVariable.js";import"./visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";var M;const x=n.getLogger("esri.renderers.UniqueValueRenderer"),E=f(q);let P=M=class extends(k(v)){constructor(e){super(e),this._valueInfoMap={},this._isDefaultSymbolDerived=!1,this.type="unique-value",this.backgroundFillSymbol=null,this.field=null,this.field2=null,this.field3=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null,this.defaultLabel=null,this.fieldDelimiter=null,this.portal=null,this.styleOrigin=null,this.diff={uniqueValueInfos(e,t){if(!e&&!t)return;if(!e||!t)return{type:"complete",oldValue:e,newValue:t};let s=!1;const o={type:"collection",added:[],removed:[],changed:[],unchanged:[]};for(let i=0;i<t.length;i++){const r=e.find((e=>e.value===t[i].value));r?h(r,t[i])?(o.changed.push({type:"complete",oldValue:r,newValue:t[i]}),s=!0):o.unchanged.push({oldValue:r,newValue:t[i]}):(o.added.push(t[i]),s=!0)}for(let i=0;i<e.length;i++){t.find((t=>t.value===e[i].value))||(o.removed.push(e[i]),s=!0)}return s?o:void 0}},this._set("uniqueValueInfos",[])}get _cache(){return{compiledFunc:null}}castField(e){return null==e||"function"==typeof e?e:j(e)}writeField(e,t,o,i){"string"==typeof e?t[o]=e:i&&i.messages?i.messages.push(new s("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):x.error(".field: cannot write field to JSON since it's not a string value")}set defaultSymbol(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)}readPortal(e,t,s){return s.portal||S.getDefault()}readStyleOrigin(e,t,s){if(t.styleName)return Object.freeze({styleName:t.styleName});if(t.styleUrl){const e=O(t.styleUrl,s);return Object.freeze({styleUrl:e})}}writeStyleOrigin(e,t,s,o){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=w(e.styleUrl,o))}set uniqueValueInfos(e){this.styleOrigin?x.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap())}addUniqueValueInfo(e,s){if(this.styleOrigin)return void x.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");let o;o="object"==typeof e?E(e):new q({value:e,symbol:t(s)}),this.uniqueValueInfos.push(o),this._valueInfoMap[o.value]=o}removeUniqueValueInfo(e){if(this.styleOrigin)x.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");else for(let t=0;t<this.uniqueValueInfos.length;t++){if(this.uniqueValueInfos[t].value===e+""){delete this._valueInfoMap[e],this.uniqueValueInfos.splice(t,1);break}}}async getUniqueValueInfo(e,t){let s=t;return this.valueExpression&&(o(t)||o(t.arcade))&&(s={...s,arcade:await D()}),this._getUniqueValueInfo(e,s)}getSymbol(e,t){if(this.valueExpression&&(o(t)||o(t.arcade)))return void x.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const s=this._getUniqueValueInfo(e,t);return s&&s.symbol||this.defaultSymbol}async getSymbolAsync(e,t){let s=t;if(this.valueExpression&&(o(s)||o(s.arcade))){const e=await D(),{arcadeUtils:t}=e;t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),s={...s,arcade:e}}const i=this._getUniqueValueInfo(e,s);return i&&i.symbol||this.defaultSymbol}getSymbols(){const e=[];for(const t of this.uniqueValueInfos)t.symbol&&e.push(t.symbol);return this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return`${JSON.stringify(this.backgroundFillSymbol)}.${JSON.stringify(this.defaultSymbol)}.${this.uniqueValueInfos.reduce(((e,t)=>e+t.getMeshHash()),"")}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`}clone(){const e=new M({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:i(this.defaultSymbol),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:i(this.visualVariables),legendOptions:i(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:i(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal);const t=i(this.uniqueValueInfos);return this.styleOrigin&&(e._set("styleOrigin",Object.freeze(i(this.styleOrigin))),Object.freeze(t)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(e,t){const s=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)];await Promise.all(s)}async collectSymbolFields(e,t){const s=[...this.getSymbols().map((s=>s.collectRequiredFields(e,t))),b(e,t,this.valueExpression)];g(e,t,this.field),g(e,t,this.field2),g(e,t,this.field3),await Promise.all(s)}populateFromStyle(){return _(this.styleOrigin,{portal:this.portal}).then((e=>{const t=[];return this._valueInfoMap={},e&&e.data&&Array.isArray(e.data.items)&&e.data.items.forEach((s=>{const o=new F({styleUrl:e.styleUrl,styleName:e.styleName,portal:this.portal,name:s.name});this.defaultSymbol||s.name!==e.data.defaultItem||(this.defaultSymbol=o,this._isDefaultSymbolDerived=!0);const i=new q({value:s.name,symbol:o});t.push(i),this._valueInfoMap[s.name]=i})),this._set("uniqueValueInfos",Object.freeze(t)),!this.defaultSymbol&&this.uniqueValueInfos.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0),this}))}_updateValueInfoMap(){this._valueInfoMap={},this.uniqueValueInfos.forEach((e=>this._valueInfoMap[e.value+""]=e))}_getUniqueValueInfo(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)}_getUnqiueValueInfoForExpression(e,t){const{viewingMode:s,scale:o,spatialReference:i,arcade:n}=r(t,{});let a=this._cache.compiledFunc;const p=l(n).arcadeUtils;if(!a){const e=p.createSyntaxTree(this.valueExpression);a=p.createFunction(e),this._cache.compiledFunc=a}const u=p.executeFunction(a,p.createExecContext(e,p.getViewInfo({viewingMode:s,scale:o,spatialReference:i})));return this._valueInfoMap[u+""]}_getUnqiueValueInfoForFields(e){const t=this.field,s=e.attributes;let o;if("function"!=typeof t&&this.field2){const e=this.field2,i=this.field3,r=[];t&&r.push(s[t]),e&&r.push(s[e]),i&&r.push(s[i]),o=r.join(this.fieldDelimiter||"")}else"function"==typeof t?o=t(e):t&&(o=s[t]);return this._valueInfoMap[o+""]}static fromPortalStyle(e,t){const s=new M(t&&t.properties);s._set("styleOrigin",Object.freeze({styleName:e})),s._set("portal",t&&t.portal||S.getDefault());const o=s.populateFromStyle();return o.catch((t=>{x.error(`#fromPortalStyle('${e}'[, ...])`,"Failed to create unique value renderer from style name",t)})),o}static fromStyleUrl(e,t){const s=new M(t&&t.properties);s._set("styleOrigin",Object.freeze({styleUrl:e}));const o=s.populateFromStyle();return o.catch((t=>{x.error(`#fromStyleUrl('${e}'[, ...])`,"Failed to create unique value renderer from style URL",t)})),o}};e([p({readOnly:!0})],P.prototype,"_cache",null),e([m({uniqueValue:"unique-value"})],P.prototype,"type",void 0),e([p(V)],P.prototype,"backgroundFillSymbol",void 0),e([p({json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],P.prototype,"field",void 0),e([u("field")],P.prototype,"castField",null),e([d("field")],P.prototype,"writeField",null),e([p({type:String,json:{write:!0}})],P.prototype,"field2",void 0),e([p({type:String,json:{write:!0}})],P.prototype,"field3",void 0),e([p({type:String,json:{write:!0}})],P.prototype,"valueExpression",void 0),e([p({type:String,json:{write:!0}})],P.prototype,"valueExpressionTitle",void 0),e([p({type:U,json:{write:!0}})],P.prototype,"legendOptions",void 0),e([p({type:String,json:{write:!0}})],P.prototype,"defaultLabel",void 0),e([p(a({...I},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],P.prototype,"defaultSymbol",null),e([p({type:String,json:{write:!0}})],P.prototype,"fieldDelimiter",void 0),e([p({type:S,readOnly:!0})],P.prototype,"portal",void 0),e([c("portal",["styleName"])],P.prototype,"readPortal",null),e([p({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],P.prototype,"styleOrigin",void 0),e([c("styleOrigin",["styleName","styleUrl"])],P.prototype,"readStyleOrigin",null),e([d("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],P.prototype,"writeStyleOrigin",null),e([p({type:[q],json:{write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],P.prototype,"uniqueValueInfos",null),P=M=e([y("esri.renderers.UniqueValueRenderer")],P);const L=P;export{L as default};
