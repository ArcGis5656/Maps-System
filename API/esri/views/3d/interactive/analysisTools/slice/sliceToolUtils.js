// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../geometry ../../../../../analysis/SlicePlane ../../../../../core/compilerUtils ../../../../../core/Logger ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/screenUtils ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../../../chunks/quat ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/projection ../../../../../geometry/support/Axis ../../../../../chunks/boundedPlane ../../../../../geometry/support/plane ../../../../../geometry/support/ray ../../../../../geometry/support/vector ../../../../../geometry/support/vectorStacks ../../../analysis/support/projectionUtils ../../Manipulator3D ../../manipulatorUtils ./sliceToolConfig ../../visualElements/LineVisualElement ../../visualElements/SlicePlaneVisualElement ../../../support/RenderCoordsHelper ../../../support/geometryUtils/ray ../../../webgl-engine/lib/basicInterfaces ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Material ../../../webgl-engine/lib/VertexAttribute ../../../webgl-engine/materials/ColorMaterial ../../../webgl-engine/materials/ImageMaterial ../../../webgl-engine/materials/NativeLineMaterial ../../../webgl-engine/materials/RibbonLineMaterial ../../../../interactive/interfaces ../../../../../geometry/Extent".split(" "),
function(l,Da,na,oa,pa,J,x,S,w,T,aa,e,z,qa,U,D,K,ra,L,m,sa,V,ta,q,ua,va,ba,wa,M,xa,E,C,N,O,ya,W,za,y,Aa){function ca(a,b,c,d,f,h){const g=e.dot(a,b),k=m.sv3d.get(),p=m.sv3d.get();switch(d===l.SliceOrientation.HORIZONTAL_OR_VERTICAL?Math.abs(g)>q.VERTICAL_DOT_THRESHOLD?l.SliceOrientation.HORIZONTAL:l.SliceOrientation.VERTICAL:d){case l.SliceOrientation.VERTICAL:e.cross(k,Math.abs(g)<=q.SMALL_ANGLE_DOT_THRESHOLD?a:c.viewUp,b);e.copy(p,b);break;case l.SliceOrientation.HORIZONTAL:e.cross(k,c.viewUp,b);
e.cross(p,b,k);break;case l.SliceOrientation.TILTED:e.cross(k,Math.abs(g)<=q.SMALL_ANGLE_DOT_THRESHOLD?b:c.viewUp,a),e.cross(p,a,k)}a=e.cross(m.sv3d.get(),k,p);0<e.dot(a,c.viewForward)&&e.scale(p,p,-1);e.normalize(f,k);e.normalize(h,p)}function da(a,b,c){var d=b.worldUpAtPosition(a.origin,m.sv3d.get());b=a.basis1;d=L.angleAroundAxis(d,a.basis2,a.basis1)+F;return D.rotate(a,Math.round(d/F)*F-d,b,c)}function X(a,b){switch(b){case G.POSITIVE_X:return{basis:a.basis1,direction:1,position:e.add(m.sv3d.get(),
a.origin,a.basis1),edge:b};case G.POSITIVE_Y:return{basis:a.basis2,direction:1,position:e.add(m.sv3d.get(),a.origin,a.basis2),edge:b};case G.NEGATIVE_X:return{basis:a.basis1,direction:-1,position:e.subtract(m.sv3d.get(),a.origin,a.basis1),edge:b};case G.NEGATIVE_Y:return{basis:a.basis2,direction:-1,position:e.subtract(m.sv3d.get(),a.origin,a.basis2),edge:b}}}function Y(a,b,c){const d=c.projectToRenderScreen(e.add(m.sv3d.get(),a,b),S.castRenderScreenPointArray3(m.sv3d.get()));a=c.projectToRenderScreen(e.subtract(m.sv3d.get(),
a,b),S.castRenderScreenPointArray3(m.sv3d.get()));return e.squaredLength(e.subtract(d,d,a))}function H(a){const b=e.length(a.basis1);a=e.length(a.basis2);return q.RESIZE_HANDLE_EDGE_PADDING_FRAC*Math.min(b,a)}function P(a){return 0!==a.direction[0]&&0!==a.direction[1]}function ea(a,b,c){const d=f=>{const h=(f?b:a).slice(0);var g=e.subtract(m.sv3d.get(),h[0],h[1]);e.normalize(g,g);var k=e.subtract(m.sv3d.get(),h[h.length-1],h[h.length-2]);e.normalize(k,k);if(0<c.padding){var p=e.scale(z.create(),k,
-c.padding);h[h.length-1]=e.add(p,p,h[h.length-1]);c.bothEnds&&(p=e.scale(z.create(),g,-c.padding),h[0]=e.add(p,p,h[0]))}var n=f?c.tipFocusMultiplier:1;p=c.tipLength*(c.focusTipLength?n:1);const u=c.tipRadius*n;n=w.identity(m.sm4d.get());if(0<c.padding){var r=p/4,t=e.set(m.sv3d.get(),0,r,0);r=1+c.padding/r;w.translate(n,n,t);w.scale(n,n,e.set(m.sv3d.get(),r,r,r));w.translate(n,n,e.scale(t,t,-1/r))}r=w.identity(T.create());t=z.fromValues(0,1,0);k=w.fromQuat(T.create(),aa.rotationTo(m.sq4d.get(),t,
k));k[12]=h[h.length-1][0];k[13]=h[h.length-1][1];k[14]=h[h.length-1][2];w.multiply(k,k,n);{f=c.tubeRadius*(f?c.tubeFocusMultiplier:1)+c.padding;var v=c.flat;const Z=[];if(x.isSome(v))Z.push([f,v.thickness/2],[-f,v.thickness/2],[-f,-v.thickness/2],[f,-v.thickness/2]);else for(v=0;12>v;v++){const fa=v/12*2*Math.PI;Z.push([Math.cos(fa)*f,Math.sin(fa)*f])}f=E.createPathExtrusionGeometry(Z,h,[],[],!1)}f=[{part:"tube",geometry:f,transform:r}];let B;x.isSome(c.flat)?r=E.createExtrudedTriangle(p,u,u,c.flat.thickness):
(r=E.createConeGeometry(p,u,24,!1,!1,!0),B=E.createConeGeometry(p,u,24,!1,!0,!1));f.push({part:"tip",geometry:r,transform:k});B&&f.push({part:"cap",geometry:B,transform:k});c.bothEnds&&(g=w.fromQuat(T.create(),aa.rotationTo(m.sq4d.get(),t,g)),g[12]=h[0][0],g[13]=h[0][1],g[14]=h[0][2],w.multiply(g,g,n),f.push({part:"tip",geometry:r,transform:g}),B&&f.push({part:"cap",geometry:B,transform:g}));return f};return{normal:d(!1),focused:d(!0)}}function ha(a,b){const c=e.subtract(z.create(),a[a.length-1],
a[a.length-2]);e.normalize(c,c);e.scale(c,c,q.ROTATE_HEADING_TIP_LENGTH);e.add(c,c,a[a.length-1]);return b?(b=e.subtract(z.create(),a[0],a[1]),e.normalize(b,b),e.scale(b,b,q.ROTATE_HEADING_TIP_LENGTH),e.add(b,b,a[0]),[b,...a,c]):[...a,c]}function ia(a,b,c){if(x.isNone(a))return null;const d=a.origin,f=m.sv3d.get(),h=m.sv3d.get(),g=m.sv3d.get(),k=m.sv3d.get();e.add(f,d,a.basis1);e.add(f,f,a.basis2);e.add(h,d,a.basis1);e.sub(h,h,a.basis2);e.sub(g,d,a.basis1);e.sub(g,g,a.basis2);e.sub(k,d,a.basis1);
e.add(k,k,a.basis2);let p,n,u,r,t,v;for(const B of[f,h,g,k]){a=b.fromRenderCoords(B,B,c);if(x.isNone(a))return null;p=null==p?a[0]:Math.min(p,a[0]);n=null==n?a[0]:Math.max(n,a[0]);u=null==u?a[1]:Math.min(u,a[1]);r=null==r?a[1]:Math.max(r,a[1]);t=null==t?a[2]:Math.min(t,a[2]);v=null==v?a[2]:Math.max(v,a[2])}return new Aa({xmin:p,xmax:n,ymin:u,ymax:r,zmin:t,zmax:v,spatialReference:c})}function Ba(a,b,c,d,f,h,g=D.create()){if(!h.toRenderCoords(a,g.origin))return Ca.error(`Failed to project slice plane position, projection from ${a.spatialReference.wkid} is not supported`),
null;h.worldBasisAtPosition(g.origin,U.Axis.X,g.basis1);h.worldBasisAtPosition(g.origin,U.Axis.Y,g.basis2);K.fromVectorsAndPoint(g.basis2,g.basis1,g.origin,g.plane);D.rotate(g,-J.deg2rad(b),D.normal(g),g);D.rotate(g,J.deg2rad(c),g.basis1,g);e.scale(g.basis1,g.basis1,d/2);e.scale(g.basis2,g.basis2,f/2);D.updateUnboundedPlane(g);return g}function ja(a,b){if(x.isNone(a)||x.isNone(a.position))return null;const c=sa.applyProjectionAndElevationAlignment(a.position,b.spatialReference,b.elevationProvider);
if(x.isNone(c))return null;b=ba.RenderCoordsHelper.renderUnitScaleFactor(a.position.spatialReference,b.spatialReference);return{position:c,heading:a.heading,tilt:a.tilt,renderWidth:a.width*b,renderHeight:a.height*b}}function ka(a,b,c,d=D.create()){a=ja(a,b);return x.isNone(a)?null:la(a,b,c,d)}function la(a,b,c,d=D.create()){if(x.isNone(a))return null;a=Ba(a.position,a.heading,a.tilt,a.renderWidth,a.renderHeight,b.renderCoordsHelper,d);!c.tiltEnabled&&x.isSome(a)&&da(a,b.renderCoordsHelper,a);return a}
const Ca=pa.getLogger("esri.views.3d.interactive.analysisTools.slice.sliceToolUtils");var G;(function(a){a[a.POSITIVE_X=0]="POSITIVE_X";a[a.POSITIVE_Y=1]="POSITIVE_Y";a[a.NEGATIVE_X=2]="NEGATIVE_X";a[a.NEGATIVE_Y=3]="NEGATIVE_Y"})(G||(G={}));const A=y.ManipulatorStateCustomFlags.Custom1;l.RotationAxis=void 0;(function(a){a[a.HEADING=1]="HEADING";a[a.TILT=2]="TILT"})(l.RotationAxis||(l.RotationAxis={}));l.SliceOrientation=void 0;(function(a){a[a.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL";a[a.HORIZONTAL=
1]="HORIZONTAL";a[a.VERTICAL=2]="VERTICAL";a[a.TILTED=3]="TILTED"})(l.SliceOrientation||(l.SliceOrientation={}));const I=y.ManipulatorStateCustomFlags.Custom2,Q=ra.create(),F=Math.PI/2,R=y.ManipulatorStateCustomFlags.Custom1,ma=y.ManipulatorStateCustomFlags.Custom2;l.OffsetMode=void 0;(function(a){a[a.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT";a[a.CENTER_ON_ARROW=1]="CENTER_ON_ARROW"})(l.OffsetMode||(l.OffsetMode={}));l.DidPointerMoveRecentlyFlag=A;l.IsShiftEdgeOnScreenFlag=I;l.addArrowTips=ha;l.calculateBoundedPlaneTranslateRotate=
function(a,b){return ta.calculateTranslateRotateFromBases(a.basis1,a.basis2,a.origin,b)};l.calculateDiagonalResizeHandleScale=function(a){return H(a)};l.calculatePlaneHalfSize=function(a,b){return q.INITIAL_PLANE_HALF_SIZE_VIEW_PROPORTION*Math.min(b.width,b.height)*b.computeRenderPixelSizeAt(a)};l.calculateResizeHandlePadding=H;l.calculateScreenSpaceBasisLength2=Y;l.createArrowGeometry=ea;l.createGridVisualElement=function(a){return new va.SlicePlaneVisualElement({view:a,attached:!0,backgroundColor:[...q.PLANE_BACKGROUND_COLOR],
gridColor:q.GRID_COLOR,gridWidth:4,renderOccluded:C.RenderOccludedFlag.OccludeAndTransparent})};l.createOutlineVisualElement=function(a){return new ua.LineVisualElement({view:a,attached:!0,color:q.PLANE_OUTLINE_COLOR,width:q.PLANE_OUTLINE_WIDTH,writeDepthEnabled:!1,renderOccluded:C.RenderOccludedFlag.OccludeAndTransparent,geometry:[[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]]})};l.createPlane=function(a,b,c,d,f,h,g,k){g=g.worldUpAtPosition(a,m.sv3d.get());ca(b,g,f,h,k.basis1,k.basis2);e.scale(k.basis1,
k.basis1,c);e.scale(k.basis2,k.basis2,d);e.copy(k.origin,a);K.fromVectorsAndPoint(k.basis2,k.basis1,k.origin,k.plane);return k};l.createResizeManipulator=function(a,b){const c=(b=P(b))?[z.fromValues(1,0,0),z.fromValues(0,0,0),z.fromValues(0,1,0)]:[z.fromValues(1,0,0),z.fromValues(-1,0,0)];var d=E.createPolylineGeometry(c);const f=q.RESIZE_HANDLE_COLOR,h=u=>new za.RibbonLineMaterial({color:f,width:u,renderOccluded:C.RenderOccludedFlag.OccludeAndTransparent}),g=()=>new W.NativeLineMaterial({color:f,
renderOccluded:C.RenderOccludedFlag.OccludeAndTransparent}),k=b?q.RESIZE_HANDLE_CORNER_WIDTH:q.RESIZE_HANDLE_EDGE_WIDTH,p=k*q.DISPLAY_FOCUS_MULTIPLIER,n=q.RESIZE_HANDLE_EDGE_WIDTH;d=[{geometry:d,material:1<k?h(k):g(),stateMask:y.ManipulatorStateFlags.Unfocused|R},{geometry:d,material:1<p?h(p):g(),stateMask:y.ManipulatorStateFlags.Focused|R},{geometry:d,material:1<n?h(n):g(),stateMask:ma}];a=new V.Manipulator3D({view:a,renderObjects:d,collisionType:{type:"line",paths:[c]},autoScaleRenderObjects:!1,
worldSized:!0,radius:b?q.RESIZE_HANDLE_CORNER_INPUT_RADIUS:q.RESIZE_HANDLE_EDGE_INPUT_RADIUS});a.state=R;return a};l.createRotateManipulator=function(a,b){var c=new ya.ImageMaterial({transparent:!0,writeDepth:!1,textureId:b.id,renderOccluded:C.RenderOccludedFlag.Opaque});const d=q.ROTATE_HEADING_OFFSET_DISTANCE;b=q.ROTATE_HEADING_DISC_RADIUS;const f=b*q.ROTATE_HEADING_DISC_RADIUS_FOCUS_MULTIPLIER,h=n=>{const u=new Uint32Array([0,1,2,2,3,0]);return new xa.Geometry([[N.VertexAttribute.POSITION,{size:3,
data:[d-n,-n,0,d+n,-n,0,d+n,n,0,d-n,n,0],exclusive:!0}],[N.VertexAttribute.UV0,{size:2,data:[0,0,1,0,1,1,0,1]}]],[[N.VertexAttribute.POSITION,u],[N.VertexAttribute.UV0,u]])},g=E.createPolylineGeometry([[0,0,0],[d-b,0,0]]),k=E.createPolylineGeometry([[0,0,0],[d-f,0,0]]),p=new W.NativeLineMaterial({color:q.ROTATE_HEADING_CALLOUT_COLOR,renderOccluded:C.RenderOccludedFlag.OccludeAndTransparent});c=[{geometry:h(b),material:c,stateMask:y.ManipulatorStateFlags.Unfocused|A},{geometry:g,material:p,stateMask:y.ManipulatorStateFlags.Unfocused|
A},{geometry:h(f),material:c,stateMask:y.ManipulatorStateFlags.Focused|A},{geometry:k,material:p,stateMask:y.ManipulatorStateFlags.Focused|A}];return new V.Manipulator3D({view:a,renderObjects:c,autoScaleRenderObjects:!1,collisionType:{type:"disc",direction:[0,0,1],offset:[d,0,0]},collisionPriority:1,radius:b/2,state:A})};l.createRotatePlane=function(a,b,c,d){b=b.worldUpAtPosition(a.origin,m.sv3d.get());const f=m.sv3d.get();switch(c){case l.RotationAxis.HEADING:e.copy(f,b);break;case l.RotationAxis.TILT:e.copy(f,
a.basis1)}return K.fromPositionAndNormal(a.origin,f,d)};l.createShiftManipulator=function(a,b=l.OffsetMode.CENTER_ON_ARROW){var c=b===l.OffsetMode.CENTER_ON_CALLOUT?q.SHIFT_RESTART_OFFSET_DISTANCE:0;const d=[z.fromValues(c,0,-q.SHIFT_RESTART_ARROW_LENGTH/2),z.fromValues(c,0,q.SHIFT_RESTART_ARROW_LENGTH/2)];b=ha(d,!0);var f=(t,v)=>ea(d,d,{tubeRadius:q.SHIFT_RESTART_TUBE_RADIUS,tipRadius:q.SHIFT_RESTART_TIP_RADIUS,tipLength:q.SHIFT_RESTART_TIP_LENGTH,tubeFocusMultiplier:q.SHIFT_RESTART_TUBE_FOCUS_MULTIPLIER,
tipFocusMultiplier:q.SHIFT_RESTART_TIP_FOCUS_MULTIPLIER,padding:t,bothEnds:!0,flat:null,focusTipLength:!0,addCap:v});const h=f(0,!1);f=f(q.SHIFT_RESTART_ARROW_OUTLINE_WIDTH,!0);const g=new O.ColorMaterial({color:q.SHIFT_RESTART_ARROW_TIP_COLOR,cullFace:M.CullFaceOptions.Back,renderOccluded:C.RenderOccludedFlag.Opaque}),k=new O.ColorMaterial({color:q.SHIFT_RESTART_ARROW_CAP_COLOR,cullFace:M.CullFaceOptions.Back,renderOccluded:C.RenderOccludedFlag.Opaque}),p=new O.ColorMaterial({color:q.SHIFT_RESTART_TUBE_COLOR,
cullFace:M.CullFaceOptions.Back,renderOccluded:C.RenderOccludedFlag.Opaque}),n=new O.ColorMaterial({color:q.SHIFT_RESTART_OUTLINE_COLOR,transparent:!0,writeDepth:!1,cullFace:M.CullFaceOptions.Front,renderOccluded:C.RenderOccludedFlag.Transparent}),u=E.createPolylineGeometry([[c,0,0],[c-q.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]);c=E.createPolylineGeometry([[c,0,0],[c-q.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]);const r=new W.NativeLineMaterial({color:q.SHIFT_RESTART_CALLOUT_COLOR,renderOccluded:C.RenderOccludedFlag.OccludeAndTransparent});
return new V.Manipulator3D({view:a,renderObjects:[...h.normal.map(({part:t,geometry:v,transform:B})=>({geometry:v,material:"tip"===t?g:"cap"===t?k:p,transform:B,stateMask:y.ManipulatorStateFlags.Unfocused|A})),...f.normal.map(({geometry:t,transform:v})=>({geometry:t,material:n,transform:v,stateMask:y.ManipulatorStateFlags.Unfocused|A})),{geometry:u,material:r,stateMask:y.ManipulatorStateFlags.Unfocused|A|I},...h.focused.map(({part:t,geometry:v,transform:B})=>({geometry:v,material:"tip"===t?g:"cap"===
t?k:p,transform:B,stateMask:y.ManipulatorStateFlags.Focused|A})),...f.focused.map(({geometry:t,transform:v})=>({geometry:t,material:n,transform:v,stateMask:y.ManipulatorStateFlags.Focused|A})),{geometry:c,material:r,stateMask:y.ManipulatorStateFlags.Focused|A|I}],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[b]},collisionPriority:1,radius:q.SHIFT_RESTART_TIP_RADIUS,state:A})};l.createShiftPlane=function(a,b,c,d){c=e.cross(m.sv3d.get(),b,c);e.cross(c,c,b);return K.fromPositionAndNormal(a,
c,d)};l.forceHorizontalOrVertical=da;l.isAlwaysDrapedLayer=function(a){switch(a.type){case "analysis":case "building-scene":case "csv":case "feature":case "geo-rss":case "geojson":case "graphics":case "group":case "integrated-mesh":case "kml":case "map-notes":case "ogc-feature":case "point-cloud":case "route":case "scene":case "stream":case "voxel":case "subtype-group":case "unknown":case "unsupported":case "wfs":case null:return!1;case "base-dynamic":case "base-elevation":case "base-tile":case "bing-maps":case "elevation":case "imagery":case "imagery-tile":case "map-image":case "open-street-map":case "tile":case "vector-tile":case "wcs":case "web-tile":case "wms":case "wmts":return!0;
default:return oa.neverReached(a.type),!1}};l.isDiagonalResizeHandle=P;l.isIBuildingSceneLayerView3D=function(a){return x.isSome("building-scene-3d"===a.type?a:null)};l.normalToBases=ca;l.planeToExtent=ia;l.planeToShape=function(a,b,c,d=new na){if(x.isNone(a))return null;var {renderCoordsHelper:f}=b,h=f.fromRenderCoords(a.origin,b.spatialReference);if(x.isNone(h))return null;h=qa.tryProjectWithZConversion(h,c);if(x.isNone(h))return null;d.position=h;h=f.worldUpAtPosition(a.origin,m.sv3d.get());f=
f.worldBasisAtPosition(a.origin,U.Axis.Y,m.sv3d.get());const g=2*e.length(a.basis1),k=2*e.length(a.basis2);b=ba.RenderCoordsHelper.renderUnitScaleFactor(b.spatialReference,c);d.width=g*b;d.height=k*b;d.tilt=J.rad2deg(L.angleAroundAxis(h,a.basis2,a.basis1)+F);d.heading=J.rad2deg(L.angleAroundAxis(a.basis1,f,h)-F);return d};l.projectAndElevationAlignShape=ja;l.projectedShapeToPlane=la;l.resizeNormal=R;l.resizeOutlineOnly=ma;l.resizePlane=function(a,b,c,d,f,h){const g=e.copy(m.sv3d.get(),f.origin);e.add(g,
g,e.scale(m.sv3d.get(),f.basis1,0>a.direction[0]?1:-1));e.add(g,g,e.scale(m.sv3d.get(),f.basis2,0>a.direction[1]?1:-1));var k=e.length(f.basis1);const p=e.length(f.basis2);c=e.subtract(m.sv3d.get(),c,g);var n=e.subtract(m.sv3d.get(),b,g);let u=0;b=0;if(P(a)){var r=H(f);const t=H(h);u=k-.5*a.direction[0]*e.dot(f.basis1,n)/k;b=p-.5*a.direction[1]*e.dot(f.basis2,n)/p;n=t/r;u*=n;b*=n}n=.5*a.direction[0]*e.dot(f.basis1,c)/k;r=.5*a.direction[1]*e.dot(f.basis2,c)/p;c=u+n;b+=r;k=e.scale(m.sv3d.get(),f.basis1,
c/k);f=e.scale(m.sv3d.get(),f.basis2,b/p);(0>=c||Y(h.origin,k,d)<=q.PLANE_MIN_BASIS_SCREEN_LEN2)&&e.copy(k,h.basis1);(0>=b||Y(h.origin,f,d)<=q.PLANE_MIN_BASIS_SCREEN_LEN2)&&e.copy(f,h.basis2);d=e.copy(m.sv3d.get(),g);e.add(d,d,e.scale(m.sv3d.get(),k,0>a.direction[0]?-1:1));e.add(d,d,e.scale(m.sv3d.get(),f,0>a.direction[1]?-1:1));return D.fromValues(d,k,f,h)};l.shapeToExtent=function(a,b,c){if(x.isNone(a)||x.isNone(a.position))return null;const {spatialReference:d}=a.position;c=ka(a,{renderCoordsHelper:b,
spatialReference:d},c);b=ia(c,b,d);!a.position.hasZ&&x.isSome(b)&&(b.zmin=null,b.zmax=null);return b};l.shapeToPlane=ka;l.updateResizeHandle=function(a,b,c,d){var f=e.length(d.basis1);const h=e.length(d.basis2);var g=H(d);const k=H(d),p=e.set(m.sv3d.get(),0,0,0);e.add(p,e.scale(m.sv3d.get(),d.basis1,b.direction[0]),e.scale(m.sv3d.get(),d.basis2,b.direction[1]));e.add(p,d.origin,p);d=0;let n=1;P(b)?(1===b.direction[0]&&-1===b.direction[1]?d=F:1===b.direction[0]&&1===b.direction[1]?d=Math.PI:-1===b.direction[0]&&
1===b.direction[1]&&(d=3*Math.PI/2),n=k):(b=0!==b.direction[0]?1:2,f=1===b?h:f,d=1===b?F:0,n=f-g);g=w.fromZRotation(m.sm4d.get(),d);w.scale(g,g,e.set(m.sv3d.get(),n,n,n));w.multiply(g,c,g);g[12]=0;g[13]=0;g[14]=0;a.modelTransform=g;a.renderLocation=p};l.updateRotateHeadingHandle=function(a,b,c,d){d=d.worldUpAtPosition(c.origin,m.sv3d.get());const f=X(c,G.POSITIVE_X),h=w.fromZRotation(m.sm4d.get(),f.edge*Math.PI/2);w.rotateX(h,h,-(L.angleAroundAxis(d,c.basis2,c.basis1)+F));w.multiply(h,b,h);h[12]=
0;h[13]=0;h[14]=0;a.modelTransform=h;a.renderLocation=f.position};l.updateRotateTiltHandle=function(a,b,c){c=X(c,G.POSITIVE_Y);const d=w.fromZRotation(m.sm4d.get(),c.edge*Math.PI/2);w.rotateX(d,d,F);w.multiply(d,b,d);d[12]=0;d[13]=0;d[14]=0;a.modelTransform=d;a.renderLocation=c.position};l.updateShiftRestartHandle=function(a,b,c,d){var f=X(c,G.NEGATIVE_X);const h=m.sm4d.get();w.rotateZ(h,b,f.edge*Math.PI/2);b=e.normalize(m.sv3d.get(),f.basis);b=e.scale(m.sv3d.get(),b,f.direction*d.computeScreenPixelSizeAt(f.position)*
q.SHIFT_RESTART_OFFSET_DISTANCE);e.add(b,b,f.position);f=d.projectToRenderScreen(b,S.castRenderScreenPointArray3(m.sv3d.get()));{const [k,p,n,u]=d.viewport;var g=Math.min(n,u)/16;let r=!0;f[0]<k+g?(f[0]=k+g,r=!1):f[0]>k+n-g&&(f[0]=k+n-g,r=!1);f[1]<p+g?(f[1]=p+g,r=!1):f[1]>p+u-g&&(f[1]=p+u-g,r=!1);g=r}wa.fromRender(d,f,Q);e.normalize(Q.direction,Q.direction);d=m.sv3d.get();!g&&D.intersectRay(c,Q,d)&&(b=d);h[12]=0;h[13]=0;h[14]=0;a.modelTransform=h;a.renderLocation=z.clone(b);a.state=g?a.state|I:a.state&
~I};Object.defineProperty(l,"__esModule",{value:!0})});