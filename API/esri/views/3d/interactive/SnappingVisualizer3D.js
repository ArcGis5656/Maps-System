// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../Color ../../../core/has ../../../core/handleUtils ../../../chunks/vec3 ../../../chunks/vec3f64 ./visualElements/ExtendedLineVisualElement ./visualElements/ParallelLineVisualElement ./visualElements/PointVisualElement ./visualElements/RightAngleQuadVisualElement ../webgl-engine/lib/Material ../../interactive/snapping/Settings ../../interactive/snapping/snappingUtils ../../interactive/snapping/SnappingVisualizer".split(" "),function(q,
z,l,r,m,A,t,u,B,v,C,n,c,g,D){r=function(w){function p(){return w.apply(this,arguments)||this}z._inheritsLoose(p,w);var h=p.prototype;h.visualizeIntersectionPoint=function(b,a){const {coordinateHelper:d,elevationInfo:e,view:f}=a;return m.destroyHandle(new v.PointVisualElement({view:f,primitive:"circle",geometry:d.vectorToPoint(b.intersectionPoint),elevationInfo:e,size:20,outlineSize:2,color:[0,0,0,0],outlineColor:l.toUnitRGBA(c.defaults.orange),pixelSnappingEnabled:!1}))};h.visualizePoint=function(b,
a){const {coordinateHelper:d,elevationInfo:e,view:f}=a;return m.destroyHandle(new v.PointVisualElement({view:f,primitive:"circle",geometry:d.vectorToPoint(b.point),elevationInfo:e,size:20,outlineSize:2,color:[0,0,0,0],outlineColor:l.toUnitRGBA(c.defaults.orange),pixelSnappingEnabled:!1}))};h.visualizeLine=function(b,a){const {coordinateHelper:d,elevationInfo:e,view:f}=a;return m.destroyHandle(this._createLineSegmentHintFromMap(b.type,b.lineStart,b.lineEnd,d,e,f,b.fadeLeft,b.fadeRight))};h.visualizeParallelSign=
function(b,a){const {coordinateHelper:d,elevationInfo:e,view:f}=a,k=g.anyMapPointToRender(b.lineStart,d,e,a.view);b=g.anyMapPointToRender(b.lineEnd,d,e,a.view);b=A.lerp(b,k,b,.5);a=new B.ParallelLineVisualElement({view:f,attached:!1,offset:c.defaults.parallelLineHintOffset,length:c.defaults.parallelLineHintLength,width:c.defaults.parallelLineHintWidth,color:l.toUnitRGBA(c.defaults.orange),location:b,renderOccluded:n.RenderOccludedFlag.Opaque});a.setDirectionFromPoints(k,b);a.attached=!0;return m.destroyHandle(a)};
h.visualizeRightAngleQuad=function(b,a){const {coordinateHelper:d,elevationInfo:e,view:f}=a;return m.destroyHandle(new C.RightAngleQuadVisualElement({view:f,attached:!0,color:l.toUnitRGBA(c.defaults.orange),renderOccluded:n.RenderOccludedFlag.Transparent,outlineRenderOccluded:n.RenderOccludedFlag.Opaque,outlineColor:l.toUnitRGBA(c.defaults.orange),outlineSize:c.defaults.rightAngleHintOutlineSize,size:c.defaults.rightAngleHintSize,geometry:{previous:g.anyMapPointToRender(b.previousVertex,d,e,f),center:g.anyMapPointToRender(b.centerVertex,
d,e,f),next:g.anyMapPointToRender(b.nextVertex,d,e,f)}}))};h._createLineSegmentHintFromMap=function(b,a,d,e,f,k,E=!0,F=!0){const x=t.create(),y=t.create();g.anyMapPointsToRenderWithEqualZ(a,d,e,f,k,x,y);return this._createLineSegmentHint(b,k,x,y,E,F)};h._createLineSegmentHint=function(b,a,d,e,f=!0,k=!0){a=new u.ExtendedLineVisualElement({view:a,extensionType:u.ExtensionType.FADED,start:d,end:e,color:l.toUnitRGBA(c.defaults.orange),renderOccluded:n.RenderOccludedFlag.Opaque});switch(b){case g.LineSegmentHintType.TARGET:a.width=
c.defaults.lineHintWidthTarget;a.fadedExtensions={start:0,end:c.defaults.lineHintFadedExtensions};break;case g.LineSegmentHintType.REFERENCE_EXTENSION:a.width=c.defaults.lineHintWidthReference;a.fadedExtensions={start:0,end:0};break;case g.LineSegmentHintType.REFERENCE:a.width=c.defaults.lineHintWidthReference,a.fadedExtensions={start:f?c.defaults.lineHintFadedExtensions:0,end:k?c.defaults.lineHintFadedExtensions:0}}a.attached=!0;return a};return p}(D.SnappingVisualizer);q.SnappingVisualizer3D=r;
Object.defineProperty(q,"__esModule",{value:!0})});