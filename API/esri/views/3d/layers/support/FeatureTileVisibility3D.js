// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/mathUtils ../../../../core/ObjectPool ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projectionEllipsoid ../../../../geometry/support/frustum ../../../../geometry/support/plane ../../../../geometry/support/ray ../../../ViewingMode ./FeatureTileDescriptor3D ../../state/Frustum ../../support/FrustumExtentIntersection".split(" "),function(r,x,y,m,z,A,c,l,B,t,e,p,C){let D=function(){function f(a){this.renderCoordsHelper=a;this.surfaceElevation=
0;this.cache=new Map;this.frustum=new p.Frustum(a);this.extendedFrustum=new p.Frustum(a);this.intersector=new C.FrustumExtentIntersection({renderCoordsHelper:a});this.renderCoordsHelper=a}var h=f.prototype;h.begin=function(a,b){this.surfaceElevation=b;this.aboveGround=this.renderCoordsHelper.getAltitude(a.eye)>b;this.frustum.update(a);this._shortenFrustumFarPlane(this.frustum);this._updateExtendedFrustum(a)};h.end=function(){this.cache.clear()};h.calculate=function(a){if(this.allTilesInvisible)return e.Visibility.INVISIBLE;
const b=this.renderCoordsHelper.viewingMode===t.ViewingMode.Global&&2<=a.lij[0]&&6>a.lij[0],d=this._getOrCalculateSingleTileVisibility(a,!b);return d!==e.Visibility.INVISIBLE&&b?this._calculateAggregatedChildrenVisibility(a):d};h._shortenFrustumFarPlane=function(a){var b=p.Frustum.nearFarLineIndices;const d=a.mutablePoints;for(const n of b){const [k,q]=n;b=d[k];m.subtract(g,d[q],b);m.scale(g,g,.95);m.add(d[q],b,g)}a.updatePoints(d)};h._calculateAggregatedChildrenVisibility=function(a){let b=e.Visibility.INVISIBLE;
var d=this.cache.get(a.id);if(null!=d)return d;d=u.acquire();a.getChildren(d);for(const n of d){const k=this.calculate(n);if(k!==e.Visibility.INVISIBLE&&(b=k,k===e.Visibility.VISIBLE_ON_SURFACE))break}u.release(d);this.cache.set(a.id,b);return b};h._getOrCalculateSingleTileVisibility=function(a,b){var d=this.cache.get(a.id);if(null!=d)return d;d=this._calculateSingleTileVisibility(a);b&&this.cache.set(a.id,d);return d};h._calculateSingleTileVisibility=function(a){if(!this.aboveGround&&this.renderCoordsHelper.viewingMode===
t.ViewingMode.Global&&12>a.lij[0]){if(this._calculateSingleTileVisibilitySided(a,!1)===e.Visibility.INVISIBLE)return this._calculateSingleTileVisibilitySided(a,!0)}else return this._calculateSingleTileVisibilitySided(a,this.aboveGround)};h._calculateSingleTileVisibilitySided=function(a,b){this.intersector.update(a.extent,a.tilingScheme.spatialReference,this.surfaceElevation,b);a=A.getReferenceEllipsoid(a.tilingScheme.spatialReference).radius;return this.intersector.isVisibleInFrustum(this.extendedFrustum,
a)?this.intersector.isVisibleInFrustum(this.frustum,a,!0)?e.Visibility.VISIBLE_ON_SURFACE:e.Visibility.VISIBLE_WHEN_EXTENDED:e.Visibility.INVISIBLE};h._updateExtendedFrustum=function(a){this.extendedFrustum.update(a);this._shortenFrustumFarPlane(this.extendedFrustum);var b=this.renderCoordsHelper.worldUpAtPosition(a.eye,g);this.aboveGround||m.negate(b,b);b=x.acosClamped(-m.dot(b,a.viewForward));this.allTilesInvisible=b>(Math.PI+a.fovY)/2;if(!this.allTilesInvisible&&(this.hasExtendedFrustum=b>a.fovY/
2)){a=this._extendedFrustumParameters();b=this.extendedFrustum.mutablePoints;for(let d=0;4>d;d++){const n=a.pointIndices[d],k=b[n],q=this.renderCoordsHelper.getAltitude(k);if(a.needsAltitudeAdjustment(q)){this.renderCoordsHelper.worldUpAtPosition(k,g);switch(n){case c.PointIndex.FAR_BOTTOM_LEFT:case c.PointIndex.FAR_TOP_LEFT:case c.PointIndex.NEAR_BOTTOM_LEFT:case c.PointIndex.NEAR_TOP_LEFT:l.projectVector(this.extendedFrustum.planes[c.PlaneIndex.LEFT],g,g);break;case c.PointIndex.FAR_BOTTOM_RIGHT:case c.PointIndex.FAR_TOP_RIGHT:case c.PointIndex.NEAR_BOTTOM_RIGHT:case c.PointIndex.NEAR_TOP_RIGHT:l.projectVector(this.extendedFrustum.planes[c.PlaneIndex.RIGHT],
g,g)}m.scale(g,g,a.direction);this.renderCoordsHelper.intersectInfiniteManifold(B.wrap(k,g),a.zWithMargin,k)}}this.extendedFrustum.updatePoints(b);l.fromPoints(b[c.PointIndex.NEAR_BOTTOM_LEFT],b[c.PointIndex.NEAR_BOTTOM_RIGHT],b[c.PointIndex.NEAR_TOP_RIGHT],v);l.fromPoints(b[c.PointIndex.NEAR_BOTTOM_RIGHT],b[c.PointIndex.NEAR_TOP_RIGHT],b[c.PointIndex.NEAR_TOP_LEFT],w);0>m.dot(l.normal(v),l.normal(w))&&(a=this.extendedFrustum.mutablePoints,this.aboveGround?[a[c.PointIndex.NEAR_BOTTOM_LEFT],a[c.PointIndex.NEAR_BOTTOM_RIGHT]]=
[a[c.PointIndex.NEAR_BOTTOM_RIGHT],a[c.PointIndex.NEAR_BOTTOM_LEFT]]:[a[c.PointIndex.NEAR_TOP_LEFT],a[c.PointIndex.NEAR_TOP_RIGHT]]=[a[c.PointIndex.NEAR_TOP_RIGHT],a[c.PointIndex.NEAR_TOP_LEFT]],this.extendedFrustum.updatePoints(a))}};h._extendedFrustumParameters=function(){return this.aboveGround?this._extendedFrustumParametersAboveSurface():this._extendedFrustumParametersBelowSurface()};h._extendedFrustumParametersAboveSurface=function(){const a=this.surfaceElevation-1;return{zWithMargin:a,pointIndices:p.Frustum.planePointIndices.bottom,
direction:-1,needsAltitudeAdjustment(b){return b>a}}};h._extendedFrustumParametersBelowSurface=function(){const a=this.surfaceElevation+1;return{zWithMargin:a,pointIndices:p.Frustum.planePointIndices.top,direction:1,needsAltitudeAdjustment(b){return b<a}}};return f}();const g=z.create(),v=l.create(),w=l.create(),u=new y(Array,f=>{4!==f.length&&(f[0]=new e.FeatureTileDescriptor3D,f[1]=new e.FeatureTileDescriptor3D,f[2]=new e.FeatureTileDescriptor3D,f[3]=new e.FeatureTileDescriptor3D)},f=>{f[0].release();
f[1].release();f[2].release();f[3].release()});r.FeatureTileVisibility3D=D;Object.defineProperty(r,"__esModule",{value:!0})});