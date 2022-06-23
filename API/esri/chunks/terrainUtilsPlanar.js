// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../core/Error ../core/maybe ./vec3 ./vec3f64 ../geometry/projection ../geometry/support/aaBoundingRect ../views/3d/terrain/TerrainConst ../views/3d/terrain/TilingScheme".split(" "),function(p,u,q,h,l,A,r,w,v){function x(a,c,d=0){a=a.extent;return q.isNone(a)?!1:0===d?r.containsPoint(a,c):r.containsPointWithMargin(a,c,d*Math.min(a[2]-a[0],a[3]-a[1]))}function t(a,c,d,b){h.copy(m,d);m[b]=c[b];b=h.subtract(m,m,c);var e=h.subtract(B,a,c);e=h.dot(e,b);const k=h.dot(b,b);c=0>=e?c:k<=e?d:
h.add(m,c,h.scale(b,b,e/k));a=h.subtract(m,a,c);return Math.PI/2-Math.atan(a[2]/Math.sqrt(a[0]*a[0]+a[1]*a[1]))}function y(a,c,d){a=a.extent;if(q.isNone(a))return 0;f[0]=a[0];f[1]=a[1];f[2]=d;g[0]=a[2];g[1]=a[3];g[2]=d;a=d=Infinity;c[0]<f[0]?d=t(c,f,g,0):c[0]>g[0]&&(d=t(c,g,f,0));c[1]<f[1]?a=t(c,f,g,1):c[1]>g[1]&&(a=t(c,g,f,1));return Math.min(d,a)}function z(a,c,d){if(q.isNone(a))return v.getMissingTileInfoError();if(a.spatialReference.isGeographic&&!A.canProjectToWGS84ComparableLonLat(a.spatialReference))return new u("tilingscheme:local-unsupported-spatial-reference",
"The tiling scheme spatial reference is not supported in local scenes");var b=v.default.checkUnsupported(a);if(q.isSome(b))return b;{var e=a.lods;b=e[0].resolution*2**e[0].level;var k=[b*a.size[0],b*a.size[1]];const C=[a.origin.x,a.origin.y];d=r.fromExtent(d);const n=r.create();v.default.computeRowColExtent(d,k,C,n);k=(n[2]-n[0])*(n[3]-n[1]);k>w.MAX_ROOT_TILES?(e=e[0].scale*2**e[0].level,b=Math.max((d[3]-d[1])/a.size[1],(d[2]-d[0])/a.size[0])*e/b,d=Math.floor(Math.log(b)/Math.log(10)),b=Math.ceil(b/
10**d)*10**d,b=new u("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(e).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+b.toLocaleString()+".",{level0Scale:e,suggestedLevel0Scale:b,requiredNumRootTiles:k,allowedNumRootTiles:w.MAX_ROOT_TILES})):b=null}if(b)return b;a=a.spatialReference;return!c||a.equals(c)||c.isWGS84&&a.isWebMercator?null:new u("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene")}
const m=l.create(),B=l.create(),f=l.create(),g=l.create();l=Object.freeze({__proto__:null,isInsideExtent:x,tiltToExtentEdge:y,checkIfTileInfoSupportedForViewSR:z});p.checkIfTileInfoSupportedForViewSR=z;p.isInsideExtent=x;p.terrainUtilsPlanar=l;p.tiltToExtentEdge=y});