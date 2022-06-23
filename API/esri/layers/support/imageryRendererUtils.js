// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../core/lang ./RasterFunction ./rasterFunctionUtils ../../renderers/support/colorRampUtils ../../renderers/support/stretchRendererUtils ../../renderers/visualVariables/SizeVariable".split(" "),function(v,B,k,H,w,I,J){function C(a,b){for(const c in a)"raster"===c.toLowerCase()&&("RasterFunctionVariable"===a[c].type?(a[c]=b.rasterFunctionDefinition,a[c].type="RasterFunctionTemplate"):"RasterFunctionTemplate"===a[c].type&&C(a[c].arguments,b))}function q(a){const b=B.clone(H.schema[a.functionName+
"Function"]);a=a.functionArguments;for(const c in a)"raster"===c.toLowerCase()?(b.arguments[c]=q(a[c]),b.arguments[c].type="RasterFunctionTemplate"):"colormap"===c.toLowerCase()?(b.arguments[c].value=K(a[c]),b.arguments.ColorSchemeType.value=0):b.arguments[c].value=a[c];return b}function D(a){const b=a.Raster;return b&&"esri.layers.support.RasterFunction"===b.declaredClass?D(b.functionArguments):a}function L(a,b){const c=new k;c.functionName="VectorFieldRenderer";const {dataType:e,bandProperties:f}=
b,d="vector-uv"===e?!0:!1;let l,m;f&&2===f.length&&(l=f.map(h=>h.BandName.toLowerCase()).indexOf("magnitude"),m=f.map(h=>h.BandName.toLowerCase()).indexOf("direction"));if(-1===l||null===l)l=0,m=1;const u="arithmetic"===a.rotationType?1:2,x="flow-from"===a.flowRepresentation?0:1,p=a.visualVariables?a.visualVariables.find(h=>"Magnitude"===h.field):new J;a={magnitudeBandID:l,directionBandID:m,isUVComponents:d,referenceSystem:u,massFlowAngleRepresentation:x,symbolTileSize:50,symbolTileSizeUnits:100,
calculationMethod:"Vector Average",symbologyName:M[a.style.toLowerCase().replace("-","_")],minimumMagnitude:p.minDataValue,maximumMagnitude:p.maxDataValue,minimumSymbolSize:p.minSize,maximumSymbolSize:p.maxSize};c.functionArguments=a;return b.convertToRFT?new k({rasterFunctionDefinition:q(c)}):c}function N(a,b){const c=[],e=[],f=[],d=[],{pixelType:l,rasterAttributeTable:m}=b,u=m&&m.features,x=E(m);if(u&&Array.isArray(u)&&a.classBreakInfos){a.classBreakInfos.forEach((g,t)=>{const r=g.symbol.color;
let z;r.a&&u.forEach(F=>{z=F.attributes[a.field];(z>=g.minValue&&z<g.maxValue||t===a.classBreakInfos.length-1&&z>=g.minValue)&&d.push([F.attributes[x],r.r,r.g,r.b])})});var p=l?A(d,l):d,h=new k;h.functionName="Colormap";h.functionArguments={};h.functionArguments.Colormap=p;h.variableName="Raster";return b.convertToRFT?new k({rasterFunctionDefinition:q(h)}):h}a.classBreakInfos.forEach((g,t)=>{const r=g.symbol&&g.symbol.color;r.a?(0===t?c.push(g.minValue,g.maxValue+1E-6):c.push(g.minValue+1E-6,g.maxValue+
1E-6),e.push(t),d.push([t,r.r,r.g,r.b])):f.push(g.minValue,g.maxValue)});p=l?A(d,l):d;h=new k;h.functionName="Remap";h.functionArguments={InputRanges:c,OutputValues:e,NoDataRanges:f};h.variableName="Raster";const n=new k;n.functionName="Colormap";n.functionArguments={Colormap:p,Raster:h};return b.convertToRFT?new k({rasterFunctionDefinition:q(n)}):n}function A(a,b){(b=G[String(b).toLowerCase()])&&a.push([Math.floor(b[0]-1),0,0,0],[Math.ceil(b[1]+1),0,0,0]);return a}function E(a){if(a)return{fields:a}=
a,(a=a&&a.find(b=>b&&b.name&&"value"===b.name.toLowerCase()))&&a.name}function O(a,b){var c,e;const f=[],{pixelType:d,rasterAttributeTable:l}=b;var m=l&&l.features;const u=E(l),x=null==(c=a.defaultSymbol)?void 0:null==(e=c.color)?void 0:e.toRgb();if(c=a.uniqueValueInfos)if(m){const p=new Map;c.forEach(n=>{var g;const t=n.value;n=null==(g=n.symbol.color)?void 0:g.toRgb();null!=t&&n&&p.set(String(t),n)});const h=a.field;m.forEach(({attributes:n})=>{var g=String(n[h]);n=n[u];p.has(g)?(g=p.get(g),f.push([n,
...g])):x&&f.push([n,...x])})}else for(a=0;a<c.length;a++)if(e=c[a],m=e.symbol.color,e=+e.value,null!=m&&m.a){if(isNaN(e))return null;f.push([e,m.r,m.g,m.b])}c=d&&0<f.length?A(f,d):f;a=new k;a.functionName="Colormap";a.functionArguments={};a.functionArguments.Colormap=c;a.variableName="Raster";return b.convertToRFT?new k({rasterFunctionDefinition:q(a)}):a}function P(a){const b=[];a.forEach(c=>{Array.isArray(c)?b.push(c):null!=c.min&&null!=c.max&&b.push([c.min,c.max,c.avg||0,c.stddev||0])});return b}
function K(a){const b=[],c=[];a.forEach(e=>{b.push(e[0]);c.push(w.rgbaConvertTo32Bit([...e.slice(1),255]))});return{type:"RasterColormap",values:b,colors:c}}const G={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767]},M={simple_scalar:"Simple Scalar",wind_barb:"Wind Barb",single_arrow:"Single Arrow",beaufort_kn:"Beaufort Wind (Knots)",beaufort_m:"Beaufort Wind (MetersPerSecond)",ocean_current_m:"Ocean Current (MetersPerSecond)",ocean_current_kn:"Ocean Current (Knots)"},
Q=new Set("raster-stretch unique-value class-breaks raster-shaded-relief vector-field raster-colormap".split(" ")),y={none:0,standardDeviation:3,histogramEqualization:4,minMax:5,percentClip:6,sigmoid:9};v.combineRenderingRules=function(a,b){if(!a||!b)return B.clone(a||b);a=B.clone(a);if(b.rasterFunctionDefinition){const c=b.rasterFunctionDefinition;if(c.thumbnail||c.thumbnailEx)c.thumbnail=c.thumbnailEx=null;C(a.rasterFunctionDefinition.arguments,b)}else"none"!==b.functionName.toLowerCase()&&(D(a.functionArguments).Raster=
b);return a};v.convertRendererToRenderingRule=function(a,b){b=b||{};switch(a.type){case "raster-stretch":var c=b;b=c.convertToRFT;var e=new k;e.functionName="Stretch";var f=y[I.stretchTypeJSONDict.toJSON(a.stretchType)],d=P(a.statistics);d={StretchType:f,Statistics:d,DRA:a.dynamicRangeAdjustment,UseGamma:a.useGamma,Gamma:a.gamma,ComputeGamma:a.computeGamma};null!=a.outputMin&&(d.Min=a.outputMin);null!=a.outputMax&&(d.Max=a.outputMax);f===y.standardDeviation?(d.NumberOfStandardDeviations=a.numberOfStandardDeviations,
e.outputPixelType="u8"):f===y.percentClip?(d.MinPercent=a.minPercent,d.MaxPercent=a.maxPercent,e.outputPixelType="u8"):f===y.minMax?e.outputPixelType="u8":f===y.sigmoid&&(d.SigmoidStrengthLevel=a.sigmoidStrengthLevel);e.functionArguments=d;e.variableName="Raster";if(a.colorRamp){f=a.colorRamp;d=new k;if(b)d.functionArguments={ColorRamp:w.getRFxArgColorRampValue(f)};else{const l=w.getColorRampName(f);d.functionArguments=l?{colorRamp:l}:!c.convertColorRampToColormap||"algorithmic"!==f.type&&"multipart"!==
f.type?{colorRamp:a.colorRamp.toJSON()}:{Colormap:w.convertColorRampToColormap(f,256)}}d.variableName="Raster";d.functionName="Colormap";d.functionArguments.Raster=e;a=b?new k({rasterFunctionDefinition:q(d)}):d}else a=b?new k({rasterFunctionDefinition:q(e)}):e;return a;case "class-breaks":return N(a,b);case "unique-value":return O(a,b);case "raster-colormap":return c=b,(b=a.extractColormap())&&0!==b.length?({pixelType:a}=c,a=a?A(b,a):b,b=new k,b.functionName="Colormap",b.functionArguments={},b.functionArguments.Colormap=
a,a=c.convertToRFT?new k({rasterFunctionDefinition:q(b)}):b):a=void 0,a;case "vector-field":return L(a,b);case "raster-shaded-relief":return c=b.convertToRFT,"elevation"!==b.dataType?a=new k:(b=new k,b.functionName="Hillshade",e="traditional"===a.hillshadeType?0:1,f="none"===a.scalingType?1:3,d={HillshadeType:e,SlopeType:f,ZFactor:a.zFactor},0===e&&(d.Azimuth=a.azimuth,d.Altitude=a.altitude),3===f&&(d.PSPower=a.pixelSizePower,d.PSZFactor=a.pixelSizeFactor),b.functionArguments=d,b.variableName="Raster",
a.colorRamp&&(b.functionName="ShadedRelief",c?d.ColorRamp=w.getRFxArgColorRampValue(a.colorRamp):d.Colormap=w.convertColorRampToColormap(a.colorRamp,256)),a=c?new k({rasterFunctionDefinition:q(b)}):b),a;case "flow":throw Error("Unsupported rendering rule.");}};v.convertRenderingRuleToRFT=q;v.isSupportedRendererType=function(a){return Q.has(a.type)};v.pixelTypeRanges=G;Object.defineProperty(v,"__esModule",{value:!0})});