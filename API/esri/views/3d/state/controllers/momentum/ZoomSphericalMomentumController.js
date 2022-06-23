// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/screenUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3f64 ../../../../../geometry/support/axisAngle ../../../../../chunks/sphere ../../../camera/constraintUtils ./MomentumController ../../utils/navigationUtils ../../../camera/constraintUtils/common".split(" "),
function(b,k,c,q,d,w,x,y,r,l,m,t,u,v,g,h){b.ZoomSphericalMomentumController=function(n){function e(a){a=n.call(this,a)||this;a.interactionType=h.InteractionType.ZOOM;a.radius=0;a.tmpSceneCenter=l.create();a.tmpZoomAxisAngle=m.create();a.sphere=t.create();return a}k._inheritsLoose(e,n);var p=e.prototype;p.initialize=function(){this.sphere[3]=this.radius};p.momentumStep=function(a,f){a=this.momentum.valueDelta(0,a);g.applyZoomOnSphere(this.sphere,f,a);this.constraintOptions.interactionType=h.InteractionType.ZOOM;
u.applyAll(this.view,f,this.constraintOptions);g.sphereOrPlanePointFromScreenPoint(this.sphere,f,this.screenCenter,this.tmpSceneCenter);m.fromPoints(this.sceneCenter,this.tmpSceneCenter,this.tmpZoomAxisAngle);g.applyRotation(f,this.sphere,this.tmpZoomAxisAngle);this.constraintOptions.interactionType=h.InteractionType.PAN};k._createClass(e,[{key:"screenCenter",set:function(a){this._set("screenCenter",q.createScreenPointArray(a[0],a[1]))}},{key:"sceneCenter",set:function(a){this._set("sceneCenter",
l.clone(a))}}]);return e}(v.MomentumController);c.__decorate([d.property({constructOnly:!0})],b.ZoomSphericalMomentumController.prototype,"momentum",void 0);c.__decorate([d.property({constructOnly:!0})],b.ZoomSphericalMomentumController.prototype,"screenCenter",null);c.__decorate([d.property({constructOnly:!0})],b.ZoomSphericalMomentumController.prototype,"sceneCenter",null);c.__decorate([d.property({constructOnly:!0})],b.ZoomSphericalMomentumController.prototype,"radius",void 0);b.ZoomSphericalMomentumController=
c.__decorate([r.subclass("esri.views.3d.state.controllers.momentum.ZoomSphericalMomentumController")],b.ZoomSphericalMomentumController);Object.defineProperty(b,"__esModule",{value:!0})});