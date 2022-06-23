// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/collectionUtils ../core/Logger ../core/urlUtils ../core/Warning ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../portal/Portal ../chunks/persistableUrlUtils ./ExtrudeSymbol3DLayer ./FillSymbol3DLayer ./IconSymbol3DLayer ./LineSymbol3DLayer ./ObjectSymbol3DLayer ./PathSymbol3DLayer ./Symbol ./Symbol3DLayer ./TextSymbol3DLayer ./WaterSymbol3DLayer ./support/StyleOrigin ./support/Thumbnail".split(" "),
function(n,d,p,q,c,k,r,g,t,O,y,z,A,B,C,u,D,E,F,G,H,I,J,v,K,L,l,M){const w={icon:F,object:H,line:G,path:I,fill:E,extrude:D,text:K,water:L};t=p.ofType({base:v,key:"type",typeMap:w,errorContext:"symbol-layer"});const N=c.getLogger("esri.symbols.Symbol3D");c=function(x){function h(a){a=x.call(this,a)||this;a.styleOrigin=null;a.thumbnail=null;a.type=null;const e=a.__accessor__&&a.__accessor__.metadatas&&a.__accessor__.metadatas.symbolLayers;a._set("symbolLayers",new (e&&e.type||p));return a}n._inheritsLoose(h,
x);var m=h.prototype;m.readStyleOrigin=function(a,e,b){if(a.styleUrl&&a.name)return e=u.fromJSON(a.styleUrl,b),new l({styleUrl:e,name:a.name});if(a.styleName&&a.name)return new l({portal:b&&b.portal||C.getDefault(),styleName:a.styleName,name:a.name});b&&b.messages&&b.messages.push(new r("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:b,definition:a}))};m.writeStyleOrigin=function(a,e,b,f){a.styleUrl&&a.name?(b=u.toJSON(a.styleUrl,
f),k.isAbsolute(b)&&(b=k.normalize(b)),e.styleOrigin={styleUrl:b,name:a.name}):a.styleName&&a.name&&(a.portal&&f&&f.portal&&!k.hasSamePortal(a.portal.restUrl,f.portal.restUrl)?f&&f.messages&&f.messages.push(new r("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):e.styleOrigin={styleName:a.styleName,name:a.name})};m.normalizeCtorArgs=function(a){return a instanceof v||a&&w[a.type]?{symbolLayers:[a]}:
Array.isArray(a)?{symbolLayers:a}:a};n._createClass(h,[{key:"color",get:function(){return null},set:function(a){this.initialized&&N.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")}},{key:"symbolLayers",set:function(a){q.referenceSetter(a,this._get("symbolLayers"))}}]);return h}(J);d.__decorate([g.property({json:{read:!1,write:!1}})],c.prototype,"color",null);d.__decorate([g.property({type:t,nonNullable:!0,json:{write:!0}}),
y.cast(q.castForReferenceSetter)],c.prototype,"symbolLayers",null);d.__decorate([g.property({type:l})],c.prototype,"styleOrigin",void 0);d.__decorate([z.reader("styleOrigin")],c.prototype,"readStyleOrigin",null);d.__decorate([B.writer("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],c.prototype,"writeStyleOrigin",null);d.__decorate([g.property({type:M.Thumbnail,json:{read:!1}})],c.prototype,"thumbnail",void 0);d.__decorate([g.property({type:["point-3d",
"line-3d","polygon-3d","mesh-3d","label-3d"],readOnly:!0})],c.prototype,"type",void 0);return c=d.__decorate([A.subclass("esri.symbols.Symbol3D")],c)});