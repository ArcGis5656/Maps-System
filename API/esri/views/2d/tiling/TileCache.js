// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["../../../chunks/vec2"],function(l){return function(){function m(a,c,d){this.maxSize=a;this.tileInfoView=c;this.removedFunc=d;this._tilePerId=new Map;this._tileKeysPerLevel=[]}var e=m.prototype;e.has=function(a){return this._tilePerId.has(a)};e.get=function(a){return this._tilePerId.get(a)};e.pop=function(a){const c=this._tilePerId.get(a);if(!c)return null;const d=this._tileKeysPerLevel[c.key.level];this._tilePerId["delete"](a);for(let b=0;b<d.length;b++)if(d[b].id===a){d.splice(b,1);break}c.visible=
!0;return c};e.add=function(a){a.visible=!1;const c=a.key,d=c.id;this._tilePerId.has(d)||(this._tilePerId.set(d,a),a=c.level,this._tileKeysPerLevel[a]||(this._tileKeysPerLevel[a]=[]),this._tileKeysPerLevel[a].push(c))};e.prune=function(a,c,d){let b=this._tilePerId.size;if(!(b<=this.maxSize)){for(var f=this._tileKeysPerLevel.length-1;b>this.maxSize&&0<=f;)f!==a&&(b=this._pruneAroundCenterTile(b,c,d,f)),f--;b>this.maxSize&&(b=this._pruneAroundCenterTile(b,c,d,a))}};e._pruneAroundCenterTile=function(a,
c,d,b){b=this._tileKeysPerLevel[b];if(!b||0===b.length)return a;const {size:f,origin:g}=this.tileInfoView.tileInfo,n=d*f[0],p=d*f[1],h=[0,0],k=[0,0];for(b.sort((q,r)=>{h[0]=g.x+n*(q.col+.5);h[1]=g.y-p*(q.row+.5);k[0]=g.x+n*(r.col+.5);k[1]=g.y-p*(r.row+.5);return l.squaredDistance(h,c)-l.squaredDistance(k,c)});0<b.length&&(d=b.pop(),this._removeTile(d.id),a--,a!==this.maxSize););return a};e._removeTile=function(a){const c=this._tilePerId.get(a);this.removedFunc&&this.removedFunc(c);this._tilePerId["delete"](a)};
return m}()});