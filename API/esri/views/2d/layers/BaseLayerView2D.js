// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/aaBoundingRect ../../../geometry/support/spatialReferenceUtils ../tiling/PagedTileQueue ../tiling/TileInfoView ../tiling/TileKey ../tiling/TileQueue ../tiling/TileStrategy ./LayerView2D ./support/Display ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),
function(k,r,u,h,I,J,x,y,z,K,A,L,M,N,B,C,D,E){const t=new Set,l=[],m=[];let F=function(n,g,c,a,b,e,d,p=[0,0],f=y.create()){this.id=n;this.level=g;this.row=c;this.col=a;this.world=b;this.resolution=e;this.scale=d;this.coords=p;this.bounds=f};h=function(n){function g(a){a=n.call(this,a)||this;a._tileMap=new Map;a.container=new C.Display(k._assertThisInitialized(a));a.layer=null;a.tiles=[];return a}k._inheritsLoose(g,n);var c=g.prototype;c.attach=function(){};c.detach=function(){};c.requestRender=function(){this.container.requestRender()};
c.tilesChanged=function(a,b){};c.supportsSpatialReference=function(a){var b;const e=null==(b=this.layer)?void 0:b.tileInfo;return e?z.equals(e.spatialReference,a):!0};c.doRefresh=function(){var a=k._asyncToGenerator(function*(){});return function(){return a.apply(this,arguments)}}();c.isUpdating=function(){return!1};c.update=function(a){var b=this._tileInfoView;const e=this.tiles;if(b){a=b.getTileCoverage(a.state,0);const {spans:p,lodInfo:f}=a;({level:a}=f);if(p.length)for(const {row:v,colFrom:G,
colTo:H}of p)for(b=G;b<=H;b++){var d=f.normalizeCol(b);const w=f.getWorldForColumn(b),q=`${a}/${v}/${d}/${w}`;this._tileMap.has(q)||(d=new F(q,a,v,d,w,f.resolution,f.scale),f.getTileCoords(d.coords,d,!1),f.getTileBounds(d.bounds,d,!0),this._tileMap.set(q,d),e.push(d),l.push(d));t.add(q)}}for(a=e.length-1;0<=a;a--)b=e[a],t.has(b.id)||(e.splice(a,1),m.push(b),this._tileMap.delete(b.id));if(l.length||m.length)this.tilesChanged(l,m),l.length=m.length=0;t.clear();this.requestRender()};c.moveStart=function(){};
c.viewChange=function(){this.requestUpdate()};c.moveEnd=function(){};k._createClass(g,[{key:"_tileInfoView",get:function(){const a=this.layer&&this.layer.tileInfo;return a?new A(a):null}}]);return g}(E.RefreshableLayerView(B.LayerView2DMixin(D)));r.__decorate([u.property()],h.prototype,"_tileInfoView",null);r.__decorate([u.property()],h.prototype,"layer",void 0);return h=r.__decorate([x.subclass("esri.views.2d.layers.BaseLayerView2D")],h)});