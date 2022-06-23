// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../core/maybe ../../../../core/screenUtils ../../../../chunks/rbush ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/boundsUtils ../../../../geometry/support/normalizeUtils ../../../../geometry/support/normalizeUtilsCommon ../../../../symbols/cim/CIMSymbolDrawHelper ../../../../symbols/cim/CIMSymbolHelper ./GraphicStoreItem ./graphicsUtils".split(" "),function(x,y,D,q,E,F,G,H,C,B,v){function z(m,k,a,c,b){w.minX=k;w.minY=a;w.maxX=c;w.maxY=b;return m.search(w)}
function I(m){return{minX:m.bounds[0],minY:m.bounds[1],maxX:m.bounds[2],maxY:m.bounds[3]}}const w={minX:0,minY:0,maxX:0,maxY:0},u=q.create(),J=(m,k)=>{const a=v.graphicGeometryToNumber(m.graphic),c=v.graphicGeometryToNumber(k.graphic);return a===c?k.zorder-m.zorder:a-c};return function(){function m(a,c,b,d,e,f,g){this._graphics=d;this._onAdd=e;this._onRemove=f;this._hashToCIM=g;this._index=D.rbush(9,I);this._itemByGraphic=new Map;this._inflatedSizeHelper=new C.CIMSimbolInflatedSizeHelper;this._tileInfoView=
a;this._uidFieldName=b;if(a=a.getClosestInfoForScale(c))this._resolution=this._tileInfoView.getTileResolution(a.level)}var k=m.prototype;k.setResourceManager=function(a){this._cimResourceManager=a;this._hittestDrawHelper=new H.HittestDrawHelper(a)};k.hitTest=function(a,c,b,d,e){a=F.normalizeMapX(a,this._tileInfoView.spatialReference);var f=.5*d*window.devicePixelRatio*b;u[0]=a-f;u[1]=c-f;u[2]=a+f;u[3]=c+f;b=.5*d*(b+v.PIXEL_BUFFER);c=z(this._index,a-b,c-b,a+b,c+b);if(!c||0===c.length)return[];a=[];
b=q.create();f=q.create();for(var g of c){const {geometry:n,symbolResource:p}=g;this._getSymbolBounds(b,p,n,f,e);f[3]=f[2]=f[1]=f[0]=0;q.intersects(b,u)&&g.graphic.visible&&a.push(g)}if(0===a.length)return[];g=this._hittestDrawHelper;c=[];for(const n of a){const {geometry:p,symbolResource:r}=n,{hash:h,textInfo:l}=r;(a=this._hashToCIM.get(h))&&g.hitTest(u,a.symbol,p,l,e,d)&&c.push(n)}c.sort(J);return c.map(n=>n.graphic)};k.getGraphicsData=function(a,c,b){const d=this._searchForItems(c);if(0===d.length||
0===b.length)return[];d.sort((h,l)=>h.zorder-l.zorder);d[0].insertAfter=-1;for(var e=1;e<d.length;e++)d[e].insertAfter=d[e-1].graphic.uid;d.sort((h,l)=>h.graphic.uid-l.graphic.uid);b.sort((h,l)=>h.uid-l.uid);let f=e=0,g;const n=c.resolution,p=[],r={originPosition:"upperLeft",scale:[n,n],translate:[c.bounds[0],c.bounds[3]]};for(const h of b){for(f=-2;e<d.length;)if(g=d[e],e++,h.uid===g.graphic.uid){f=g.insertAfter;break}if(!g.geometry||-2===f)continue;b=g.getGeometryQuantized(r,c.bounds,this._tileInfoView.spatialReference,
n);const l={...g.graphic.attributes};l[this._uidFieldName]=h.uid;null==g.groupId&&(g.groupId=a.createTemplateGroup(g.symbol,null));p.push({centroid:B.getCentroidQuantized(g,r),geometry:b,attributes:l,symbol:g.symbol,groupId:g.groupId,insertAfter:f,zorder:g.zorder})}p.sort((h,l)=>h.zorder-l.zorder);return p};k.queryTileData=function(a,c){if(0===this._graphics.length)return[];const {bounds:b,resolution:d}=c,e=this._searchForItems(c),f=[];if(0===e.length)return f;this._createTileGraphics(f,a,e,{originPosition:"upperLeft",
scale:[d,d],translate:[b[0],b[3]]},c);return f};k.has=function(a){return this._itemByGraphic.has(a)};k.getBounds=function(a){return(a=this._itemByGraphic.get(a))?a.bounds:null};k.getAllBounds=function(){return Array.from(this._itemByGraphic.values()).filter(a=>a.graphic.visible).map(a=>a.bounds)};k.addOrModify=function(a,c,b){if(a&&!x.isNone(c)){this.has(a)&&this.remove(a);this._onAdd(a);var d=[0,0,0,0],e=this._getSymbolBounds(null,c,b,d,0);c=B.acquire(a,c,b,x.isSome(e)?e:null,d);this._itemByGraphic.set(a,
c);b&&this._index.insert(c);return c.bounds}};k.remove=function(a){if(this._itemByGraphic.has(a)){this._onRemove(a);var c=this._itemByGraphic.get(a);c.bounds&&this._index.remove(c);this._itemByGraphic.delete(a)}};k.updateZ=function(){const a=this._graphics.items;for(let b=0;b<a.length;b++){var c=a[b];if(c=this._itemByGraphic.get(c))c.zorder=b}};k.update=function(a,c,b){const d=this._itemByGraphic.get(a);d.groupId=null;const e=q.clone(d.bounds);this._index.remove(d);const f=this._getSymbolBounds(d.bounds,
c,b,d.size,0);x.isSome(f)&&d.set(a,c,b,f,d.size);b&&this._index.insert(d);return{oldBounds:e,newBounds:d.bounds}};k.updateLevel=function(a){if(this._resolution!==a){this._resolution=a;this._index.clear();var c=this._itemByGraphic;a=[];for(const [,b]of c)c=this._getSymbolBounds(b.bounds,b.symbolResource,b.geometry,b.size,0),b.geometry&&x.isSome(c)&&(b.bounds=c,a.push(b));this._index.load(a)}};k.clear=function(){this._itemByGraphic.clear();this._index.clear()};k._createTileGraphics=function(a,c,b,d,
e){const f=this._uidFieldName,g=this._tileInfoView.spatialReference,{bounds:n,resolution:p}=e;b.sort((t,A)=>t.zorder-A.zorder);let r,h,l;for(let t=0;t<b.length;t++){h=b[t];e=h.graphic;r=h.getGeometryQuantized(d,n,g,p);l=0===t?-1:b[t-1].graphic.uid;const A={...h.graphic.attributes};A[f]=e.uid;null==h.groupId&&(h.groupId=c.createTemplateGroup(h.symbol,null));a.push({centroid:B.getCentroidQuantized(h,d),geometry:r,attributes:A,symbol:h.symbol,groupId:h.groupId,insertAfter:l,zorder:h.zorder})}};k._searchForItems=
function(a){var c=this._tileInfoView.spatialReference,b=a.bounds;if(c.isWrappable){const [d,e]=G.getSpatialReferenceMinMaxX(c);c=1E-5>Math.abs(b[2]-e);const f=1E-5>Math.abs(b[0]-d);if(!(c&&f||!c&&!f))return a=a.resolution,a=c?q.create([d,b[1],d+a*v.PIXEL_BUFFER,b[3]]):q.create([e-a*v.PIXEL_BUFFER,b[1],e,b[3]]),b=z(this._index,b[0],b[1],b[2],b[3]),a=z(this._index,a[0],a[1],a[2],a[3]),[...new Set([...b,...a])]}return z(this._index,b[0],b[1],b[2],b[3])};k._getSymbolBounds=function(a,c,b,d,e){if(!c||
!c.symbol||!b)return null;a||(a=q.create());E.getBoundsXY(a,b);if(!d||0===d[0]&&0===d[1]&&0===d[2]&&0===d[3]){const {hash:f,textInfo:g}=c;c=this._hashToCIM.get(f);if(!c)return null;d||(d=[0,0,0,0]);e=this._inflatedSizeHelper.getSymbolInflateSize(d,c.symbol,this._cimResourceManager,e,g);d[0]=y.pt2px(e[0]);d[1]=y.pt2px(e[1]);d[2]=y.pt2px(e[2]);d[3]=y.pt2px(e[3])}e=this._resolution;d=C.CIMSimbolInflatedSizeHelper.safeSize(d);a[0]-=d*e;a[1]-=d*e;a[2]+=d*e;a[3]+=d*e;return a};return m}()});