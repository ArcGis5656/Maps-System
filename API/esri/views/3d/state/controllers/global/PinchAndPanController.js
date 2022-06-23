// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/mathUtils ../../../../../core/screenUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec2 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/projectionEllipsoid ../../../../../geometry/support/axisAngle ../../../../../geometry/support/plane ../../../../../chunks/sphere ../../../camera/constraintUtils ../../../camera/constraintUtils/common ../../../input/util ../InteractiveController ../momentum/PanPlanarMomentumController ../momentum/PanSphericalMomentumController ../momentum/RotationMomentumController ../momentum/ZoomPlanarMomentumController ../momentum/ZoomSphericalMomentumController ../../utils/navigationUtils ../../../support/mathUtils ../../../webgl-engine/lib/Camera ../../../../navigation/PanPlanarMomentumEstimator ../../../../navigation/PanSphericalMomentumEstimator ../../../../navigation/RotationMomentumEstimator ../../../../navigation/ZoomMomentumEstimator".split(" "),
function(m,t,u,z,g,A,R,S,T,B,C,e,l,D,v,q,E,f,k,w,F,G,H,I,J,K,d,L,M,N,O,P,Q){m.PinchAndPanController=function(x){function r(a){a=x.call(this,a)||this;a.view=null;a.smoothRotation=new w.ExponentialFalloff(.05);a.rotationAxis=l.create();a.panningPlane=q.create();a.smoothScaling=new w.ExponentialFalloff(.05);a.zoomCenterScreen=g.createScreenPointArray();a.zoomMomentumEstimator=new Q.ZoomMomentumEstimator;a.rotationMomentumEstimator=new P.RotationMomentumEstimator;a.panSphericalMomentumEstimator=new O.PanSphericalMomentumEstimator;
a.panPlanarMomentumEstimator=new N.PanPlanarMomentumEstimator;a.adjustedSphere=E.create();a.tmp3d=l.create();a.tmpScreenPointArray=g.createScreenPointArray();a.beginScreenPoint=g.createScreenPointArray();a.beginScenePoint=l.create();a.screenPickPoint=g.createScreenPointArray();a.navMode=d.NavigationMode.Horizontal;a.tmpInteractionDirection=l.create();a.constraintOptions={selection:k.ConstraintTypes.ALL,interactionType:k.InteractionType.NONE,interactionFactor:0,interactionStartCamera:new M.default,
interactionDirection:null,tiltMode:k.TiltMode.TUMBLE};return a}t._inheritsLoose(r,x);var h=r.prototype;h.begin=function(a){if(this.active){var b=this.view.navigation.momentumEnabled;this.zoomMomentumEstimator.enabled=b;this.rotationMomentumEstimator.enabled=b;this.panPlanarMomentumEstimator.enabled=b;this.panSphericalMomentumEstimator.enabled=b;this.beginHeading=-L.cyclicalPI.normalize(z.deg2rad(this.view.camera.heading));this.beginRadius=a.radius;this.pointerCount=a.pointers.size;this.beginAngle=
a.angle;this.smoothRotation.reset();g.screenPointObjectToArray(a.center,this.screenPickPoint);C.copy(this.beginScreenPoint,this.screenPickPoint);b=D.getReferenceEllipsoid(this.view.spatialReference);var c=d.pickPointAndInitSphere(this.intersectionHelper,this.startCamera,this.screenPickPoint,!0,b);this.scenePickPoint=c.scenePickPoint;this.sphere=c.sphere;e.copy(this.beginScenePoint,this.scenePickPoint);this.navMode=d.decideNavigationMode(this.startCamera,this.screenPickPoint,c.hasGeometryIntersection,
b);this.navMode===d.NavigationMode.Vertical&&this._preparePlanarPanMode(a);this.constraintOptions.interactionStartCamera.copyFrom(this.startCamera)}};h._preparePlanarPanMode=function(a){var b=e.negate(this.tmp3d,this.startCamera.viewForward);q.fromPositionAndNormal(this.scenePickPoint,b,this.panningPlane);var c=g.createScreenPointArray(this.screenPickPoint[0],0);b=l.create();var n=e.length(this.startCamera.eye);this.adjustedSphere[3]=n<this.sphere[3]?n-100:this.sphere[3];d.sphereOrPlanePointFromScreenPoint(this.adjustedSphere,
this.startCamera,c,b);c=g.createRenderScreenPointArray3();this.startCamera.projectToRenderScreen(b,c);this.screenPickPoint[1]=Math.min(this.screenPickPoint[1],.9*c[1]);this.intersectionHelper.intersectScreen(this.screenPickPoint,this.scenePickPoint)&&q.fromPositionAndNormal(this.scenePickPoint,q.normal(this.panningPlane),this.panningPlane);b=l.create();c=l.create();n=l.create();e.subtract(b,this.scenePickPoint,this.currentCamera.eye);e.normalize(b,b);var p=5*Math.max(Math.abs(this.view.camera.position.z),
50);const y=this.view._stage.renderView.getMinimalDepthForArea(null,this.screenPickPoint[0],this.screenPickPoint[1],this.view.state.camera,80);p=y?Math.min(y,p):p;e.copy(n,e.add(c,this.currentCamera.eye,e.scale(c,b,p)));this.panningPlane[3]=-e.dot(this.panningPlane,n);this.startCamera.center=e.add(c,this.startCamera.eye,e.scale(c,this.startCamera.viewForward,p));a=g.screenPointObjectToArray(a.center,this.tmpScreenPointArray);d.intersectPlaneFromScreenPointAtEye(this.panningPlane,this.startCamera,
a,this.beginScenePoint)};h.update=function(a){if(this.active){this.currentCamera.copyFrom(this.startCamera);var b=1<a.pointers.size;this.navMode===d.NavigationMode.Horizontal?(b&&this._zoomSpherical(a),this._panningSpherical(a),b&&this._rotateSpherical(a)):(b&&this._zoomPlanar(a),this._panningPlanar(a),b&&this._rotatePlanar(a))}};h.end=function(a){a.pointers.size===this.pointerCount&&this.update(a);this.finishController();if(a=this.zoomMomentumEstimator.evaluateMomentum())return this.navMode===d.NavigationMode.Horizontal?
new K.ZoomSphericalMomentumController({view:this.view,momentum:a,screenCenter:this.zoomCenterScreen,sceneCenter:this.beginScenePoint,radius:this.sphere[3]}):new J.ZoomPlanarMomentumController({view:this.view,momentum:a,zoomCenter:this.beginScenePoint});if(a=this.rotationMomentumEstimator.evaluateMomentum())return new I.RotationMomentumController({view:this.view,momentum:a,center:this.sphere,axis:this.rotationAxis});if(this.navMode===d.NavigationMode.Horizontal){if(a=this.panSphericalMomentumEstimator.evaluateMomentum())return new H.PanSphericalMomentumController({view:this.view,
momentum:a})}else if(a=this.panPlanarMomentumEstimator.evaluateMomentum())return new G.PanPlanarMomentumController({view:this.view,momentum:a});return null};h._zoomSpherical=function(a){const b=this.beginRadius/a.radius;this.smoothScaling.gain=.001875*Math.min(Math.max(a.radius,40),120);this.smoothScaling.update(b);d.applyZoomOnSphere(this.sphere,this.currentCamera,this.smoothScaling.value);g.screenPointObjectToArray(a.center,this.zoomCenterScreen);this.zoomMomentumEstimator.add(this.smoothScaling.value,
.001*a.timestamp);this.constraintOptions.interactionType=k.InteractionType.ZOOM;this.constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius-this.beginRadius);f.applyAll(this.view,this.currentCamera,this.constraintOptions)};h._panningSpherical=function(a){const b=g.screenPointObjectToArray(a.center,this.tmpScreenPointArray);d.sphereOrPlanePointFromScreenPoint(this.sphere,this.currentCamera,b,this.tmp3d);d.preserveHeadingThreshold(this.beginScenePoint,e.dot(this.currentCamera.up,
this.beginScenePoint),this.sphere[3],this.beginHeading,this.view.camera.tilt,this.startCamera)?(d.applyPanSphericalPreserveHeading(this.sphere,this.currentCamera,this.beginScenePoint,this.tmp3d,this.beginHeading,this.view.camera.tilt,!1),this.panSphericalMomentumEstimator.addMomentumPreserveHeading(b,this.tmp3d,.001*a.timestamp,this.startCamera,this.sphere,this.beginHeading,this.view.camera.tilt)):(d.applyPanSphericalDirectRotation(this.sphere,this.currentCamera,this.beginScenePoint,this.tmp3d,this.view.camera.tilt,
!1),this.panSphericalMomentumEstimator.addMomentumDirectRotation(b,this.tmp3d,.001*a.timestamp,this.startCamera,this.sphere[3],this.view.camera.tilt));this.constraintOptions.interactionType=k.InteractionType.PAN;this.constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(this.screenPickPoint,b);f.applyAll(this.view,this.currentCamera,this.constraintOptions)};h._rotateSpherical=function(a){e.normalize(this.rotationAxis,this.scenePickPoint);this.currentCamera.aboveGround||e.negate(this.rotationAxis,
this.rotationAxis);var b=this.smoothRotation.value,c=d.normalizeRotationDelta(a.angle-b);b+=c;this.smoothRotation.gain=.00125*Math.min(Math.max(a.radius,40),120);this.smoothRotation.update(b);c=this.smoothRotation.value-this.beginAngle;this.rotationMomentumEstimator.add(c,.001*a.timestamp);d.applyRotation(this.currentCamera,this.sphere,v.wrapAxisAngle(this.rotationAxis,c));this.constraintOptions.interactionType=k.InteractionType.TUMBLE;this.constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius*
b);f.applyAll(this.view,this.currentCamera,this.constraintOptions)};h._panningPlanar=function(a){const b=g.screenPointObjectToArray(a.center,this.tmpScreenPointArray);d.intersectPlaneFromScreenPointAtEye(this.panningPlane,this.currentCamera,b,this.tmp3d)&&(d.applyPanPlanar(this.currentCamera,this.beginScenePoint,this.tmp3d),this.panPlanarMomentumEstimator.add(b,this.tmp3d,.001*a.timestamp),this.constraintOptions.interactionType=k.InteractionType.PAN,this.constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(this.beginScreenPoint,
b),this.constraintOptions.interactionDirection=this.view.renderCoordsHelper.worldUpAtPosition(this.currentCamera.eye,this.tmpInteractionDirection),f.applyAll(this.view,this.currentCamera,this.constraintOptions),this.constraintOptions.interactionDirection=null)};h._zoomPlanar=function(a){const b=this.beginRadius/a.radius;this.smoothScaling.gain=.001875*Math.min(Math.max(a.radius,40),120);this.smoothScaling.update(b);this.zoomMomentumEstimator.add(this.smoothScaling.value,.001*a.timestamp);d.applyZoomToPoint(this.currentCamera,
this.beginScenePoint,this.smoothScaling.value,this.view.state.constraints.minimumPoiDistance);this.constraintOptions.interactionType=k.InteractionType.ZOOM;this.constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius-this.beginRadius);f.applyAll(this.view,this.currentCamera,this.constraintOptions)};h._rotatePlanar=function(a){e.copy(this.rotationAxis,this.beginScenePoint);this.currentCamera.aboveGround||e.negate(this.rotationAxis,this.rotationAxis);var b=this.smoothRotation.value;
let c=a.angle-b;c=d.normalizeRotationDelta(c);this.smoothRotation.gain=.00125*Math.min(Math.max(a.radius,40),120);this.smoothRotation.update(b+c);b=this.smoothRotation.value-this.beginAngle;this.rotationMomentumEstimator.add(b,.001*a.timestamp);d.applyRotation(this.currentCamera,this.sphere,v.wrapAxisAngle(this.rotationAxis,b));this.constraintOptions.interactionType=k.InteractionType.TUMBLE;this.constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius*b);f.applyAll(this.view,
this.currentCamera,this.constraintOptions)};t._createClass(r,[{key:"intersectionHelper",get:function(){return this.view.sceneIntersectionHelper}}]);return r}(F.InteractiveController);u.__decorate([A.property({constructOnly:!0})],m.PinchAndPanController.prototype,"view",void 0);m.PinchAndPanController=u.__decorate([B.subclass("esri.views.3d.state.controllers.global.PinchAndPanController")],m.PinchAndPanController);Object.defineProperty(m,"__esModule",{value:!0})});