// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/lineSegment ./VisualElement ../../support/LaserLineRenderer ../../../../chunks/Laserlines.glsl".split(" "),function(k,l,b,n,e,f,h,p,q){h=function(m){function g(a){var c=m.call(this,a.view)||this;c._angleCutoff=q.defaultAngleCutoff;c._style={};c._heightManifoldTarget=e.create();c._heightManifoldEnabled=!1;c._intersectsLine=f.create();c._intersectsLineEnabled=
!1;c._intersectsLineInfinite=!1;c._lineVerticalPlaneSegment=null;c._pathVerticalPlaneBuffers=null;c._pointDistanceLine=null;c.applyProps(a);return c}l._inheritsLoose(g,m);var d=g.prototype;d.createResources=function(){this._ensureRenderer()};d.destroyResources=function(){this._disposeRenderer()};d.updateVisibility=function(){this._syncRenderer();this._syncHeightManifold();this._syncIntersectsLine();this._syncPathVerticalPlane();this._syncLineVerticalPlane();this._syncPointDistance()};d._syncRenderer=
function(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||b.isSome(this._pointDistanceLine)||b.isSome(this._pathVerticalPlaneBuffers))?this._ensureRenderer():this._disposeRenderer()};d._ensureRenderer=function(){b.isSome(this.renderer)||(this.renderer=new p.LaserLineRenderer(this.view.renderCoordsHelper,void 0,{contrastControlEnabled:!0}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),
this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this.renderer.renderSlots,this.renderer))};d._syncStyle=function(){b.isNone(this.renderer)||(this.renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this.renderer.intersectsLineRadius=this._style.intersectsLineRadius))};d._syncAngleCutoff=function(){b.isNone(this.renderer)||this.renderer.setParameters({angleCutoff:this._angleCutoff})};d._syncHeightManifold=
function(){b.isNone(this.renderer)||(this.renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this.renderer.heightManifoldTarget=this._heightManifoldTarget))};d._syncIntersectsLine=function(){b.isNone(this.renderer)||(this.renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this.renderer.intersectsLineSegment=this._intersectsLine))};d._syncIntersectsLineInfinite=function(){b.isNone(this.renderer)||
(this.renderer.intersectsLineInfinite=this._intersectsLineInfinite)};d._syncPathVerticalPlane=function(){b.isNone(this.renderer)||(this.renderer.pathVerticalPlaneEnabled=b.isSome(this._pathVerticalPlaneBuffers)&&this.visible,b.isSome(this._pathVerticalPlaneBuffers)&&(this.renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))};d._syncLineVerticalPlane=function(){b.isNone(this.renderer)||(this.renderer.lineVerticalPlaneEnabled=b.isSome(this._lineVerticalPlaneSegment)&&this.visible,b.isSome(this._lineVerticalPlaneSegment)&&
(this.renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))};d._syncPointDistance=function(){b.isNone(this.renderer)||(this.renderer.pointDistanceEnabled=b.isSome(this._pointDistanceLine)&&this.visible,b.isSome(this._pointDistanceLine)&&(this.renderer.pointDistanceOrigin=this._pointDistanceLine.origin,this.renderer.pointDistanceTarget=this._pointDistanceLine.target))};d._disposeRenderer=function(){b.isSome(this.renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this.renderer),
this.renderer=null)};l._createClass(g,[{key:"testData",get:function(){return this.renderer}},{key:"angleCutoff",get:function(){return this._angleCutoff},set:function(a){this._angleCutoff!==a&&(this._angleCutoff=a,this._syncAngleCutoff())}},{key:"style",get:function(){return this._style},set:function(a){this._style=a;this._syncStyle()}},{key:"heightManifoldTarget",get:function(){return this._heightManifoldEnabled?this._heightManifoldTarget:null},set:function(a){b.isSome(a)?(n.copy(this._heightManifoldTarget,
a),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1;this._syncRenderer();this._syncHeightManifold()}},{key:"intersectsWorldUpAtLocation",set:function(a){if(b.isNone(a))this.intersectsLine=null;else{var c=this.view.renderCoordsHelper.worldUpAtPosition(a,r);this.intersectsLine=f.fromValues(a,c);this.intersectsLineInfinite=!0}}},{key:"intersectsLine",get:function(){return this._intersectsLineEnabled?this._intersectsLine:null},set:function(a){b.isSome(a)?(f.copy(a,this._intersectsLine),
this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1;this._syncIntersectsLine();this._syncRenderer()}},{key:"intersectsLineInfinite",get:function(){return this._intersectsLineInfinite},set:function(a){this._intersectsLineInfinite=a;this._syncIntersectsLineInfinite()}},{key:"lineVerticalPlaneSegment",get:function(){return this._lineVerticalPlaneSegment},set:function(a){this._lineVerticalPlaneSegment=b.isSome(a)?f.copy(a):null;this._syncLineVerticalPlane();this._syncRenderer()}},{key:"pathVerticalPlane",
get:function(){return this._pathVerticalPlaneBuffers},set:function(a){this._pathVerticalPlaneBuffers=a;this._syncPathVerticalPlane();this._syncLineVerticalPlane();this._syncPointDistance();this._syncRenderer()}},{key:"pointDistanceLine",get:function(){return this._pointDistanceLine},set:function(a){this._pointDistanceLine=b.isSome(a)?{origin:e.clone(a.origin),target:e.clone(a.target)}:null;this._syncPointDistance();this._syncRenderer()}}]);return g}(h.VisualElement);const r=e.create();k.LaserlineVisualElement=
h;Object.defineProperty(k,"__esModule",{value:!0})});