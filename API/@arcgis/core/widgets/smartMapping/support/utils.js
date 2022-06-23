/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import o from"../../../Color.js";import{i as s}from"../../../core/lang.js";import{f as t,a as r}from"../../../chunks/number.js";import{t as i}from"../../../chunks/utils13.js";import p from"../../../renderers/visualVariables/SizeVariable.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mathUtils.js";import"../../../chunks/common.js";import"../../../chunks/ensureType.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/jsonMap.js";import"../../../chunks/locale.js";import"../../../chunks/numberUtils.js";import"../../../intl.js";import"../../../chunks/messages.js";import"../../../core/Error.js";import"../../../core/promiseUtils.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../chunks/assets.js";import"../../../renderers/visualVariables/support/ColorStop.js";import"../../../chunks/tslib.es6.js";import"../../../chunks/JSONSupport.js";import"../../../core/Accessor.js";import"../../../chunks/deprecate.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/metadata.js";import"../../../chunks/tracking.js";import"../../../chunks/ArrayPool.js";import"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../chunks/writer.js";import"../../../chunks/screenUtils.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../chunks/reader.js";import"../../../renderers/visualVariables/VisualVariable.js";import"../../../chunks/LegendOptions.js";import"../../../renderers/visualVariables/support/SizeStop.js";import"../../../chunks/sizeVariableUtils.js";import"../../../chunks/visualVariableUtils.js";import"../../../Graphic.js";import"../../../geometry.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../geometry/SpatialReference.js";import"../../../geometry/Point.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../PopupTemplate.js";import"../../../core/Collection.js";import"../../../chunks/Evented.js";import"../../../chunks/shared.js";import"../../../layers/support/fieldUtils.js";import"../../../chunks/arcadeOnDemand.js";import"../../../popup/content.js";import"../../../popup/content/AttachmentsContent.js";import"../../../popup/content/Content.js";import"../../../popup/content/CustomContent.js";import"../../../popup/content/ExpressionContent.js";import"../../../popup/ElementExpressionInfo.js";import"../../../popup/content/FieldsContent.js";import"../../../popup/FieldInfo.js";import"../../../chunks/enumeration.js";import"../../../popup/support/FieldInfoFormat.js";import"../../../chunks/date.js";import"../../../popup/content/MediaContent.js";import"../../../popup/content/BarChartMediaInfo.js";import"../../../chunks/chartMediaInfoUtils.js";import"../../../chunks/MediaInfo.js";import"../../../popup/content/support/ChartMediaInfoValue.js";import"../../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../../popup/content/ColumnChartMediaInfo.js";import"../../../popup/content/ImageMediaInfo.js";import"../../../popup/content/support/ImageMediaInfoValue.js";import"../../../popup/content/LineChartMediaInfo.js";import"../../../popup/content/PieChartMediaInfo.js";import"../../../popup/content/TextContent.js";import"../../../popup/ExpressionInfo.js";import"../../../popup/LayerOptions.js";import"../../../popup/RelatedRecordsInfo.js";import"../../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../../support/actions/ActionBase.js";import"../../../chunks/Identifiable.js";import"../../../support/actions/ActionButton.js";import"../../../support/actions/ActionToggle.js";import"../../../symbols.js";import"../../../symbols/CIMSymbol.js";import"../../../symbols/Symbol.js";import"../../../symbols/ExtrudeSymbol3DLayer.js";import"../../../symbols/Symbol3DLayer.js";import"../../../chunks/utils3.js";import"../../../symbols/edges/Edges3D.js";import"../../../chunks/materialUtils.js";import"../../../chunks/opacityUtils.js";import"../../../symbols/edges/SketchEdges3D.js";import"../../../symbols/edges/SolidEdges3D.js";import"../../../chunks/Symbol3DMaterial.js";import"../../../symbols/FillSymbol.js";import"../../../symbols/SimpleLineSymbol.js";import"../../../symbols/LineSymbol.js";import"../../../symbols/LineSymbolMarker.js";import"../../../chunks/lineMarkers.js";import"../../../symbols/FillSymbol3DLayer.js";import"../../../symbols/patterns/LineStylePattern3D.js";import"../../../symbols/patterns/StylePattern3D.js";import"../../../chunks/utils4.js";import"../../../chunks/colors.js";import"../../../chunks/symbolLayerUtils3D.js";import"../../../chunks/aaBoundingBox.js";import"../../../chunks/aaBoundingRect.js";import"../../../symbols/Font.js";import"../../../symbols/IconSymbol3DLayer.js";import"../../../chunks/persistableUrlUtils.js";import"../../../symbols/LabelSymbol3D.js";import"../../../symbols/Symbol3D.js";import"../../../chunks/collectionUtils.js";import"../../../portal/Portal.js";import"../../../chunks/Loadable.js";import"../../../chunks/Promise.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalGroup.js";import"../../../symbols/LineSymbol3DLayer.js";import"../../../symbols/LineStyleMarker3D.js";import"../../../chunks/Clonable.js";import"../../../symbols/ObjectSymbol3DLayer.js";import"../../../symbols/PathSymbol3DLayer.js";import"../../../symbols/TextSymbol3DLayer.js";import"../../../symbols/WaterSymbol3DLayer.js";import"../../../chunks/Thumbnail.js";import"../../../chunks/Symbol3DVerticalOffset.js";import"../../../symbols/callouts/Callout3D.js";import"../../../symbols/callouts/LineCallout3D.js";import"../../../symbols/LineSymbol3D.js";import"../../../symbols/MarkerSymbol.js";import"../../../symbols/MeshSymbol3D.js";import"../../../symbols/PictureFillSymbol.js";import"../../../chunks/urlUtils.js";import"../../../symbols/PictureMarkerSymbol.js";import"../../../symbols/PointSymbol3D.js";import"../../../symbols/PolygonSymbol3D.js";import"../../../symbols/SimpleFillSymbol.js";import"../../../symbols/SimpleMarkerSymbol.js";import"../../../symbols/TextSymbol.js";import"../../../symbols/WebStyleSymbol.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/lengthUtils.js";import"../../../chunks/unitUtils.js";import"../../../chunks/projectionEllipsoid.js";function e(o){return t(new Date(o),i)}function m(o){const s=Math.floor(Math.log10(Math.abs(o)))+1,t=s<4||s>6?4:s,i=Math.abs(o)>=1e6?"compact":"standard";return r(o,{notation:i,minimumSignificantDigits:2,maximumSignificantDigits:t})}function n(o,t,r){if(!s(t)||!s(o))return[];const i=[];for(let s=-1*r;s<=r;s++)0!==s&&i.push(t+s*o);return i}function l(o){const{max:s,min:t,padding:r,pathHeight:i,pathWidth:p,stops:e}=o,m=s-t;let n,l=`M0 0 L${p} 0 `;const a=3===e.length?[e[0],e[1],e[2]]:[e[0],e[2],e[4]],u=Math.min.apply(Math,a.map((o=>o.size))),j=Math.max(Math.abs(a[0].size-a[1].size),Math.abs(a[2].size-a[1].size));return a.reverse(),a.forEach((({size:o,value:s},e)=>{const a=Math.round((o-u)/j*100)/100,c=Math.round(i-(s-t)/m*i);n=a*p,0===n&&(n=r*p),0===e&&(l+=`L${n} 0 `),l+=`L${n} ${c} `})),l+=`L${n} ${i} L0 ${i} L0 0 Z`,l}function a(o){const{bottomValue:s,bottomWidth:t,max:r,min:i,pathHeight:p,pathWidth:e,topValue:m,topWidth:n}=o,l=n*e,a=t*e,u=r-i,j=Math.round(p-(s-i)/u*p);return`M${l} 0 L${l} ${Math.round(p-(m-i)/u*p)} L${a} ${j} L${a} ${p} L0 ${p} L0 0 Z`}function u(o){let s=o.maxSize,t=o.minSize;return s instanceof p&&(s=s.stops[0].size),t instanceof p&&(t=t.stops[0].size),[s,t]}function j(o,s,t){const r=t.length-1,i=t[0],p=t[r]-i,e=s-o,m=[];for(let s=1;s<r;s++){const r=(t[s]-i)/p*e+o;m.push({index:s,value:r})}return m.unshift({index:0,value:o}),m.push({index:r,value:s}),m}function c(s){return s instanceof o?s.toCss(!0):o.fromString(s).toCss(!0)}export{e as formatDateLabel,m as formatNumberLabel,n as getDeviationValues,l as getDynamicPathForSizeStops,c as getFillFromColor,a as getPathForSizeStops,u as getSizesFromVariable,j as getStopChanges};
