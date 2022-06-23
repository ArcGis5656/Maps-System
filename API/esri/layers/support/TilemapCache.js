// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../request ../../core/Accessor ../../core/byteSizeEstimations ../../core/Error ../../core/HandleOwner ../../core/Logger ../../core/LRUCache ../../core/PooledArray ../../core/promiseUtils ../../core/reactiveUtils ../../core/scheduling ../../core/urlUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ./Tilemap".split(" "),
function(f,x,n,C,D,E,y,F,G,H,I,t,A,J,K,u,O,P,L,M,v){var p;const N=G.getLogger("esri.layers.support.TilemapCache");f.TilemapCache=p=function(B){function w(a){a=B.call(this,a)||this;a._pendingTilemapRequests={};a._availableLevels={};a.levels=5;a.cacheByteSize=2*E.ByteSizeUnit.MEGABYTES;a.request=C;a._prefetchingEnabled=!0;return a}x._inheritsLoose(w,B);var h=w.prototype;h.initialize=function(){this._tilemapCache=new H(this.cacheByteSize);this.handles.add([this.watch(["layer.parsedUrl","layer.tileServers?",
"layer.apiKey?","layer.customParameters?"],()=>this._initializeTilemapDefinition()),A.watch(()=>{var a,b;return null==(a=this.layer)?void 0:null==(b=a.tileInfo)?void 0:b.lods},a=>this._initializeAvailableLevels(a),A.syncAndInitial)]);this._initializeTilemapDefinition()};h.castLevels=function(a){return 2>=a?(N.error("Minimum levels for Tilemap is 3, but got ",a),3):a};h.fetchTilemap=function(a,b,d,c){if(!this._availableLevels[a])return Promise.reject(new y("tilemap-cache:level-unavailable",`Level ${a} is unavailable in the service`));
const e=this._tmpTilemapDefinition;if(a=this._tilemapFromCache(a,b,d,e))return Promise.resolve(a);const m=c&&c.signal;c={...c,signal:null};return new Promise((q,k)=>{t.onAbort(m,()=>k(t.createAbortError()));const g=v.tilemapDefinitionId(e);let l=this._pendingTilemapRequests[g];if(!l){l=v.Tilemap.fromDefinition(e,c).then(z=>{this._tilemapCache.put(g,z,z.byteSize);return z});const r=()=>delete this._pendingTilemapRequests[g];this._pendingTilemapRequests[g]=l;l.then(r,r)}l.then(q,k)})};h.getAvailability=
function(a,b,d){return this._availableLevels[a]?(a=this._tilemapFromCache(a,b,d,this._tmpTilemapDefinition))?a.getAvailability(b,d):"unknown":"unavailable"};h.fetchAvailability=function(a,b,d,c){return this._availableLevels[a]?this.fetchTilemap(a,b,d,c).catch(e=>e).then(e=>{if(e instanceof v.Tilemap)return e=e.getAvailability(b,d),"unavailable"===e?Promise.reject(new y("tile-map:tile-unavailable","Tile is not available",{level:a,row:b,col:d})):e;if(t.isAbortError(e))throw e;return"unknown"}):Promise.reject(new y("tilemap-cache:level-unavailable",
`Level ${a} is unavailable in the service`))};h.fetchAvailabilityUpsample=function(a,b,d,c,e){c.level=a;c.row=b;c.col=d;const m=this.layer.tileInfo;m.updateTileInfo(c);const q=this.fetchAvailability(a,b,d,e).catch(k=>{if(t.isAbortError(k))throw k;if(m.upsampleTile(c))return this.fetchAvailabilityUpsample(c.level,c.row,c.col,c);throw k;});this._fetchAvailabilityUpsamplePrefetch(c.id,a,b,d,e,q);return q};h._fetchAvailabilityUpsamplePrefetch=function(){var a=x._asyncToGenerator(function*(b,d,c,e,m,q){if(this._prefetchingEnabled){var k=
`prefetch-${b}`;if(!this.handles.has(k)){var g=new AbortController;q.then(()=>g.abort(),()=>g.abort());var l=!1;this.handles.add({remove(){l||(l=!0,g.abort())}},k);yield J.waitTicks(10,g.signal).catch(()=>{});l||(l=!0,this.handles.remove(k));if(!t.isAborted(g))for(b={id:b,level:d,row:c,col:e},m={...m,signal:g.signal},d=this.layer.tileInfo,c=0;p._prefetches.length<p._maxPrefetch&&d.upsampleTile(b);++c){const r=this.fetchAvailability(b.level,b.row,b.col,m);p._prefetches.push(r);e=()=>{p._prefetches.removeUnordered(r)};
r.then(e,e)}}}});return function(b,d,c,e,m,q){return a.apply(this,arguments)}}();h._initializeTilemapDefinition=function(){var a;if(this.layer.parsedUrl){var {parsedUrl:b,apiKey:d,customParameters:c}=this.layer;this._tilemapCache.clear();this._tmpTilemapDefinition={service:{url:b.path,query:K.objectToQuery({...b.query,...c,token:null!=d?d:null==(a=b.query)?void 0:a.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,
col:0}}};h._tilemapFromCache=function(a,b,d,c){c.level=a;c.row=b-b%this.size;c.col=d-d%this.size;a=v.tilemapDefinitionId(c);return this._tilemapCache.get(a)};h._initializeAvailableLevels=function(a){this._availableLevels={};a&&a.forEach(b=>this._availableLevels[b.level]=!0)};x._createClass(w,[{key:"size",get:function(){return 1<<this.levels}},{key:"test",get:function(){const a=this;return{get prefetchingEnabled(){return a._prefetchingEnabled},set prefetchingEnabled(b){a._prefetchingEnabled=b},hasTilemap(b,
d,c){return!!a._tilemapFromCache(b,d,c,a._tmpTilemapDefinition)}}}}]);return w}(F.HandleOwnerMixin(D));f.TilemapCache._maxPrefetch=4;f.TilemapCache._prefetches=new I({initialSize:p._maxPrefetch});n.__decorate([u.property({constructOnly:!0,type:Number})],f.TilemapCache.prototype,"levels",void 0);n.__decorate([L.cast("levels")],f.TilemapCache.prototype,"castLevels",null);n.__decorate([u.property({readOnly:!0,type:Number})],f.TilemapCache.prototype,"size",null);n.__decorate([u.property({constructOnly:!0,
type:Number})],f.TilemapCache.prototype,"cacheByteSize",void 0);n.__decorate([u.property({constructOnly:!0})],f.TilemapCache.prototype,"layer",void 0);n.__decorate([u.property({constructOnly:!0})],f.TilemapCache.prototype,"request",void 0);f.TilemapCache=p=n.__decorate([M.subclass("esri.layers.support.TilemapCache")],f.TilemapCache);Object.defineProperty(f,"__esModule",{value:!0})});