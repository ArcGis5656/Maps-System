"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9275],{48027:(e,t,r)=>{r.d(t,{Z:()=>d});var n,i,s=r(54174),a=r(82426),o=r(76506),l=r(91306);function u(e){return(0,a.c)((0,l.m)(e),0,255)}function c(e,t,r){return e=Number(e),isNaN(e)?r:e<t?t:e>r?r:e}r(29794),r(92143),r(31450),r(71552),r(40642);class m{constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}static blendColors(e,t,r,n=new m){return n.r=Math.round(e.r+(t.r-e.r)*r),n.g=Math.round(e.g+(t.g-e.g)*r),n.b=Math.round(e.b+(t.b-e.b)*r),n.a=e.a+(t.a-e.a)*r,n._sanitize()}static fromRgb(e,t){const r=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(r){const e=r[2].split(/\s*,\s*/),n=r[1];if("rgb"===n&&3===e.length||"rgba"===n&&4===e.length){const r=e[0];if("%"===r.charAt(r.length-1)){const r=e.map((e=>2.56*parseFloat(e)));return 4===e.length&&(r[3]=parseFloat(e[3])),m.fromArray(r,t)}return m.fromArray(e.map((e=>parseFloat(e))),t)}if("hsl"===n&&3===e.length||"hsla"===n&&4===e.length)return m.fromArray((0,s.h)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new m){if(4!==e.length&&7!==e.length||"#"!==e[0])return null;const r=4===e.length?4:8,n=(1<<r)-1;let i=Number("0x"+e.substr(1));return isNaN(i)?null:(["b","g","r"].forEach((e=>{const s=i&n;i>>=r,t[e]=4===r?17*s:s})),t.a=1,t)}static fromArray(e,t=new m){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const r=(0,s.i)(e)?(0,s.g)(e):null;return r&&m.fromArray(r,t)||m.fromRgb(e,t)||m.fromHex(e,t)}static fromJSON(e){return e&&new m([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return(0,o.i)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return(0,o.i)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){if("string"==typeof e)m.fromString(e,this);else if(Array.isArray(e))m.fromArray(e,this);else{var t,r,n,i;this._set(null!=(t=e.r)?t:0,null!=(r=e.g)?r:0,null!=(n=e.b)?n:0,null!=(i=e.a)?i:1),e instanceof m||this._sanitize()}return this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),t=this.g.toString(16),r=this.b.toString(16);return`#${e.length<2?"0"+e:e}${t.length<2?"0"+t:t}${r.length<2?"0"+r:r}`}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b;return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=m.AlphaMode.ALWAYS){const t=u(this.r),r=u(this.g),n=u(this.b);return e===m.AlphaMode.ALWAYS||1!==this.a?[t,r,n,u(255*this.a)]:[t,r,n]}clone(){return new m(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return(0,o.i)(e)&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(c(this.r,0,255)),this.g=Math.round(c(this.g,0,255)),this.b=Math.round(c(this.b,0,255)),this.a=c(this.a,0,1),this}_set(e,t,r,n){this.r=e,this.g=t,this.b=r,this.a=n}}m.prototype.declaredClass="esri.Color",(i=(n=m||(m={})).AlphaMode||(n.AlphaMode={}))[i.ALWAYS=0]="ALWAYS",i[i.UNLESS_OPAQUE=1]="UNLESS_OPAQUE";const d=m},59275:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h}),r(74569);var n=r(76506),i=r(50667),s=r(22337),a=r(40558),o=r(98264),l=r(52182),u=r(7534),c=r(22572),m=r(35717),d=r(21801);r(91306),r(92143),r(31450),r(71552),r(40642),r(73796),r(74673),r(21972),r(23639),r(60474),r(66396),r(22723),r(17533),r(86656),r(6540),r(60991),r(91055),r(34250),r(19657),r(6906),r(50406),r(97714),r(60947),r(2906),r(84069),r(91597),r(86787),r(35132),r(89623),r(44567),r(98380),r(92896),r(22781),r(57251),r(32422),r(73173),r(82058),r(88762),r(32101),r(72246),r(62484),r(48027),r(54174),r(82426),r(29794),r(53785),r(95587),r(12381),r(1623),r(65775),r(92482),r(92624),r(92847),r(59465);class h{convertVectorFieldData(e){const t=s.Z.fromJSON(e.pixelBlock),r=(0,u.c)(t,e.type);return Promise.resolve((0,n.i)(r)&&r.toJSON())}async decode(e){const t=await(0,a.d)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=s.Z.fromJSON(e.pixelBlock),e.extent=e.extent?d.Z.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve((0,n.i)(t)&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=a.R.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(t=this.symbolizer)?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(s.Z.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve((0,n.i)(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=(0,o.f)(s.Z.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=(0,o.g)(s.Z.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach(((e,r)=>{t.set(r,null==e?void 0:e.toJSON())})),Promise.resolve(t)}async mosaicAndTransform(e){var t;const r=e.srcPixelBlocks.map((e=>e?new s.Z(e):null)),i=(0,o.m)(r,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let a,l=i;return e.coefs&&(l=(0,o.k)(i,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(a=(0,o.n)(e.destDimension,e.gcsGrid),l=(0,n.u)((0,u.d)(l,e.isUV?"vector-uv":"vector-magdir",a))),{pixelBlock:null==(t=l)?void 0:t.toJSON(),localNorthDirections:a}}async createStreamlinesMesh(e,t){const r={data:new Float32Array(e.flowData.buffer),width:e.flowData.width,height:e.flowData.height},{vertexData:n,indexData:i}=await(0,m.c)(e.rendererSettings,r,t.signal);return{result:{vertexBuffer:n.buffer,indexBuffer:i.buffer},transferList:[n.buffer,i.buffer]}}async getProjectionOffsetGrid(e){const t=d.Z.fromJSON(e.projectedExtent),r=d.Z.fromJSON(e.srcBufferExtent);let n=null;e.datumTransformationSteps&&(n=new i.Z({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,l.r)(t.spatialReference,r.spatialReference,n))&&await(0,l.l)();const s=e.rasterTransform?(0,c.r)(e.rasterTransform):null;return(0,l.d)({...e,projectedExtent:t,srcBufferExtent:r,datumTransformation:n,rasterTransform:s})}}},54174:(e,t,r)=>{r.d(t,{a:()=>a,b:()=>u,g:()=>s,h:()=>l,i:()=>i});const n={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]};function i(e){return n[e]||n[e.toLowerCase()]}function s(e){var t;return null!=(t=n[e])?t:n[e.toLowerCase()]}function a(e){return[...s(e)]}function o(e,t,r){r<0&&++r,r>1&&--r;const n=6*r;return n<1?e+(t-e)*n:2*r<1?t:3*r<2?e+(t-e)*(2/3-r)*6:e}function l(e,t,r,n=1){const i=(e%360+360)%360/360,s=r<=.5?r*(t+1):r+t-r*t,a=2*r-s;return[Math.round(255*o(a,s,i+1/3)),Math.round(255*o(a,s,i)),Math.round(255*o(a,s,i-1/3)),n]}function u(e){const t=e.length>5,r=t?8:4,n=(1<<r)-1,i=t?1:17,s=t?9===e.length:5===e.length;let a=Number("0x"+e.substr(1));if(isNaN(a))return null;const o=[0,0,0,1];let l;return s&&(l=a&n,a>>=r,o[3]=i*l/255),l=a&n,a>>=r,o[2]=i*l,l=a&n,a>>=r,o[1]=i*l,l=a&n,a>>=r,o[0]=i*l,o}},59465:(e,t,r)=>{r.d(t,{e:()=>s});var n=r(57251),i=r(34250);function s(e,t={}){var r;const s=e instanceof n.J?e:new n.J(e,t),a={type:null==(r=null==t?void 0:t.ignoreUnknown)||r?s.apiValues:String,json:{type:s.jsonValues,read:(null==t||!t.readOnly)&&{reader:s.read},write:{writer:s.write}}};return void 0!==(null==t?void 0:t.readOnly)&&(a.readOnly=!!t.readOnly),void 0!==(null==t?void 0:t.default)&&(a.json.default=t.default),void 0!==(null==t?void 0:t.name)&&(a.json.name=t.name),(0,i.Cb)(a)}},95587:(e,t,r)=>{r.d(t,{S:()=>a,W:()=>u,a:()=>c,b:()=>o,c:()=>l,d:()=>d,g:()=>m});var n=r(60947),i=r(89623);function s(e){return new n.Z({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const a=s(i.e),o=s(i.m),l=s(i.a),u=new n.Z({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${i.e.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function c(e){return e&&((0,n.f)(e)||e===o)?o:e&&((0,n.h)(e)||e===l)?l:a}function m(e){return e&&((0,n.f)(e)||e===o)?i.m:e&&((0,n.h)(e)||e===l)?i.a:i.e}function d(e){return(0,n.c)(e)?i.m:(0,n.d)(e)?i.a:i.e}},22781:(e,t,r)=>{r.d(t,{f:()=>i,t:()=>s});var n=r(57251);const i=(0,n.s)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),s=(0,n.s)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},53785:(e,t,r)=>{r.d(t,{b:()=>B,c:()=>w,d:()=>O,e:()=>G,f:()=>T,g:()=>N,h:()=>J,i:()=>l,l:()=>v,u:()=>U,v:()=>q});var n=r(76506),i=r(57251),s=r(95587),a=r(60947),o=r(89623);const l=39.37,u=o.e.radius*Math.PI/200,c=/UNIT\[([^\]]+)\]\]$/i,m=a.o,d=/UNIT\[([^\]]+)\]/i,h=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),f=(0,i.s)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),g=e=>e*e,y=e=>e*e*e,b={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:g(.001)},"square-centimeters":{inBaseUnits:g(.01)},"square-decimeters":{inBaseUnits:g(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:g(1e3)},"square-inches":{inBaseUnits:g(.0254)},"square-feet":{inBaseUnits:g(.3048)},"square-yards":{inBaseUnits:g(.9144)},"square-miles":{inBaseUnits:g(1609.344)},"square-us-feet":{inBaseUnits:g(1200/3937)},acres:{inBaseUnits:.0015625*g(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*y(.001)},"cubic-centimeters":{inBaseUnits:1e3*y(.01)},"cubic-decimeters":{inBaseUnits:1e3*y(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*y(1e3)},"cubic-inches":{inBaseUnits:1e3*y(.0254)},"cubic-feet":{inBaseUnits:1e3*y(.3048)},"cubic-yards":{inBaseUnits:1e3*y(.9144)},"cubic-miles":{inBaseUnits:1e3*y(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},p=function(){const e={};for(const t in b)for(const r in b[t].units)e[r]=t;return e}();function S(e){const t=p[e];if(t)return t;throw new Error("unknown type")}function k(e,t=null){return t=t||S(e),b[t].baseUnit===e}function w(e,t,r){if(t===r)return e;const n=S(t);if(n!==S(r))throw new Error("incompatible units");const i=k(t,n)?e:function(e,t,r){return e*b[r].units[t].inBaseUnits}(e,t,n);return k(r,n)?i:function(e,t,r){return e/b[r].units[t].inBaseUnits}(i,r,n)}function v(e,t,r){return w(e,t,"meters")/(r*Math.PI/180)}function U(e){return f.fromJSON(e.toLowerCase())||null}function B(e){if(e&&"object"==typeof e&&!(0,a.b)(e))return 1;const t=N(e);return t>1e5?1:t}function O(e){return N(e)>=(e instanceof a.Z?(0,s.g)(e).metersPerDegree:1e5)?"meters":q(e)}function N(e,t=o.e.metersPerDegree){return G(e,!0)||t}function G(e,t=!1){let r,n,i=null;if(null!=e&&("object"==typeof e?(r=e.wkid,n=e.wkt):"number"==typeof e?r=e:"string"==typeof e&&(n=e)),r){if((0,a.c)(r))return o.m.metersPerDegree;if((0,a.d)(r))return o.a.metersPerDegree;i=m.values[m[r]],!i&&t&&h.has(r)&&(i=u)}else n&&(x(n)?i=A(c.exec(n),i):M(n)&&(i=A(d.exec(n),i)));return i}function A(e,t){return e&&e[1]?P(e[1]):t}function P(e){return parseFloat(e.split(",")[1])}function q(e){let t,r,i=null;if(null!=e&&("object"==typeof e?(t=e.wkid,r=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(r=e)),t)i=m.units[m[t]];else if(r){const e=x(r)?c:M(r)?d:null;if(e){const t=e.exec(r);t&&t[1]&&(i=function(e){const t=/[\\"\\']{1}([^\\"\\']+)/.exec(e);let r=t&&t[1];if(!r||-1===m.units.indexOf(r)){const t=P(e);r=null;const n=m.values;for(let e=0;e<n.length;++e)if(Math.abs(t-n[e])<1e-7){r=m.units[e];break}}return r}(t[1]))}}return(0,n.i)(i)?U(i):null}function M(e){return/^GEOCCS/i.test(e)}function x(e){return/^PROJCS/i.test(e)}const Z={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},E={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},T=(0,i.s)()(Z),J=(0,i.s)()(E);(0,i.s)()({...Z,...E})},74569:(e,t,r)=>{r.d(t,{qM:()=>c});var n=r(91306),i=r(21801),s=r(73796),a=r(84069),o=r(91597),l=r(44567),u=r(92896);r(60947),r(22781),r(32422),r(76506),r(92143),r(31450),r(71552),r(40642),r(34250),r(60474),r(66396),r(22723),r(86656),r(60991),r(17533),r(6540),r(35132),r(89623),r(74673),r(21972),r(23639),r(91055),r(19657),r(6906),r(50406),r(2906),r(97714),r(86787),r(98380),r(57251);const c={base:s.Z,key:"type",typeMap:{extent:i.Z,multipoint:a.Z,point:o.Z,polyline:u.Z,polygon:l.Z}};(0,n.a)(c)},32422:(e,t,r)=>{r.d(t,{im:()=>g,q9:()=>p,Ji:()=>y,YX:()=>c,aW:()=>m,wp:()=>d,oU:()=>f,l9:()=>h});var n=r(76506),i=r(21801),s=r(73796),a=r(84069),o=r(91597),l=r(44567),u=r(92896);function c(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function m(e){return void 0!==e.points}function d(e){return void 0!==e.x&&void 0!==e.y}function h(e){return void 0!==e.paths}function f(e){return void 0!==e.rings}function g(e){return(0,n.b)(e)?null:e instanceof s.Z?e:d(e)?o.Z.fromJSON(e):h(e)?u.Z.fromJSON(e):f(e)?l.Z.fromJSON(e):m(e)?a.Z.fromJSON(e):c(e)?i.Z.fromJSON(e):null}function y(e){return e?d(e)?"esriGeometryPoint":h(e)?"esriGeometryPolyline":f(e)?"esriGeometryPolygon":c(e)?"esriGeometryEnvelope":m(e)?"esriGeometryMultipoint":null:null}r(40642),r(71552),r(34250),r(92143),r(31450),r(91306),r(60474),r(66396),r(22723),r(86656),r(60991),r(17533),r(6540),r(60947),r(74673),r(21972),r(23639),r(91055),r(19657),r(6906),r(50406),r(2906),r(35132),r(89623),r(97714),r(86787),r(98380);const b={esriGeometryPoint:o.Z,esriGeometryPolyline:u.Z,esriGeometryPolygon:l.Z,esriGeometryEnvelope:i.Z,esriGeometryMultipoint:a.Z};function p(e){return e&&b[e]||null}}}]);