// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../request","../../../../core/promiseUtils","../../tiling/TileKey"],function(h,k,l,m){return function(){function e(a,b){this._tilemap=a;this._tileIndexUrl=b}var f=e.prototype;f.fetchTileIndex=function(){var a=h._asyncToGenerator(function*(b){this._tileIndexPromise||(this._tileIndexPromise=k(this._tileIndexUrl,{query:{...null==b?void 0:b.query}}).then(c=>c.data.index));return this._tileIndexPromise});return function(b){return a.apply(this,
arguments)}}();f.dataKey=function(a,b){const {level:c,row:n,col:p}=a,d=new m(a);return this._tilemap.fetchAvailabilityUpsample(c,n,p,d,b).then(()=>{d.world=a.world;return d}).catch(g=>{if(l.isAbortError(g))throw g;return null})};return e}()});