/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import s from"../request.js";import e from"../core/Error.js";import{HandleOwnerMixin as t}from"../core/HandleOwner.js";import{i as o}from"../core/lang.js";import{M as i}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as p}from"../core/promiseUtils.js";import{urlToObject as n,objectToQuery as a,makeAbsolute as l}from"../core/urlUtils.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import{cast as u}from"../core/accessorSupport/decorators/cast.js";import{r as c}from"../chunks/reader.js";import{subclass as j}from"../core/accessorSupport/decorators/subclass.js";import{w as h}from"../chunks/writer.js";import y from"../geometry/SpatialReference.js";import d from"./Layer.js";import{A as b}from"../chunks/APIKeyMixin.js";import{A as k}from"../chunks/ArcGISCachedService.js";import{S as f,A as S}from"../chunks/SublayersOwner.js";import{A as g}from"../chunks/ArcGISService.js";import{B as v}from"../chunks/BlendLayer.js";import{C as U}from"../chunks/CustomParametersMixin.js";import{O as _}from"../chunks/OperationalLayer.js";import{P as C}from"../chunks/PortalLayer.js";import{R as D}from"../chunks/RefreshableLayer.js";import{S as L}from"../chunks/ScaleRangeLayer.js";import{p as I,i as P,b as R}from"../chunks/arcgisLayerUrl.js";import{u as T}from"../chunks/commonProperties.js";import M from"./support/Sublayer.js";import"../config.js";import"../chunks/object.js";import"../kernel.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/ensureType.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/Evented.js";import"../chunks/shared.js";import"../core/reactiveUtils.js";import"../chunks/JSONSupport.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../chunks/Identifiable.js";import"../chunks/Loadable.js";import"../chunks/Promise.js";import"../chunks/TilemapCache.js";import"./support/TileInfo.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"./support/LOD.js";import"../chunks/byteSizeEstimations.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/Version.js";import"../chunks/CollectionFlattener.js";import"../chunks/sublayerUtils.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/colorUtils.js";import"../chunks/screenUtils.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/asyncUtils.js";import"../portal/Portal.js";import"../chunks/locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalItem.js";import"../chunks/assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/persistableUrlUtils.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"./support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/opacityUtils.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils3.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils4.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../chunks/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../renderers/DotDensityRenderer.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"./support/FeatureType.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"./support/FeatureTemplate.js";import"./support/Field.js";import"../chunks/fieldType.js";import"./support/FieldsIndex.js";import"./support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaultsJSON.js";import"./support/LayerFloorInfo.js";import"../chunks/DataLayerSource.js";import"../rest/support/Query.js";import"../rest/support/StatisticDefinition.js";import"../support/popupUtils.js";import"../chunks/floorFilterUtils.js";const O=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let V=class extends(v(f(L(_(C(k(S(g(i(t(D(b(U(d)))))))))))))){constructor(...r){super(...r),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(r,s){return"string"==typeof r?{url:r,...s}:r}load(r){const s=o(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},r).catch(p).then((()=>this._fetchService(s)))),Promise.resolve(this)}get attributionDataUrl(){var r;const s=null==(r=this.parsedUrl)?void 0:r.path.toLowerCase();return s&&this._getDefaultAttribution(this._getMapName(s))}readSpatialReference(r,s){return(r=r||s.tileInfo&&s.tileInfo.spatialReference)&&y.fromJSON(r)}writeSublayers(r,s,e,t){if(!this.loaded||!r)return;const o=r.slice().reverse().flatten((({sublayers:r})=>r&&r.toArray().reverse())).toArray(),i=[],p={writeSublayerStructure:!1,...t};o.forEach((r=>{const s=r.write({},p);i.push(s)}));i.some((r=>Object.keys(r).length>1))&&(s.layers=i)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(r){return Array.isArray(r)?r.map((r=>n(r).path)):null}fetchTile(r,e,t,o={}){const{signal:i}=o,p=this.getTileUrl(r,e,t),n={responseType:"image",signal:i,query:{...this.refreshParameters}};return s(p,n).then((r=>r.data))}getTileUrl(r,s,e){const t=!this.tilemapCache&&this.supportsBlankTile,o=a({...this.parsedUrl.query,blankTile:!t&&null,...this.customParameters,token:this.apiKey}),i=this.tileServers;return`${i&&i.length?i[s%i.length]:this.parsedUrl.path}/tile/${r}/${s}/${e}${o?"?"+o:""}`}_fetchService(r){return new Promise(((t,i)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new e("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new e("tile-layer:undefined-url","layer's url is not defined");const p=I(this.parsedUrl.path);if(o(p)&&"ImageServer"===p.serverType)throw new e("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");s(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(t,i)})).then((s=>{if(s.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=s.data,this.read(s.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!P(this.url))return this._fetchServerVersion(this.url,r).then((r=>{this.read({currentVersion:r})})).catch((()=>{}))}))}_fetchServerVersion(r,t){if(!R(r))return Promise.reject();const o=r.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return s(o,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((r=>{if(r.data&&r.data.currentVersion)return r.data.currentVersion;throw new e("tile-layer:version-not-available")}))}_getMapName(r){const s=r.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return s&&s[2]}_getDefaultAttribution(r){if(!r)return;let s;r=r.toLowerCase();for(let e=0,t=O.length;e<t;e++)if(s=O[e],s.toLowerCase().indexOf(r)>-1)return l("//static.arcgis.com/attribution/"+s)}_getDefaultTileServers(r){const s=-1!==r.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),e=-1!==r.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return s||e?[r,r.replace(s?/server\.arcgisonline/i:/services\.arcgisonline/i,s?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};r([m({readOnly:!0})],V.prototype,"attributionDataUrl",null),r([m({type:["show","hide","hide-children"]})],V.prototype,"listMode",void 0),r([m({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],V.prototype,"isReference",void 0),r([m({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],V.prototype,"operationalLayerType",void 0),r([m({type:Boolean})],V.prototype,"resampling",void 0),r([m()],V.prototype,"sourceJSON",void 0),r([m({type:y})],V.prototype,"spatialReference",void 0),r([c("spatialReference",["spatialReference","tileInfo"])],V.prototype,"readSpatialReference",null),r([m({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],V.prototype,"path",void 0),r([m({readOnly:!0})],V.prototype,"sublayers",void 0),r([h("sublayers",{layers:{type:[M]}})],V.prototype,"writeSublayers",null),r([m({json:{read:!1,write:!1}})],V.prototype,"popupEnabled",void 0),r([m()],V.prototype,"tileServers",null),r([u("tileServers")],V.prototype,"castTileServers",null),r([m({readOnly:!0,json:{read:!1}})],V.prototype,"type",void 0),r([m(T)],V.prototype,"url",void 0),V=r([j("esri.layers.TileLayer")],V),V.prototype.fetchTile.__isDefault__=!0;const w=V;export{w as default};
