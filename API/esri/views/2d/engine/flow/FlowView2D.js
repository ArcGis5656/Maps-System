// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Graphic ../../../../core/HandleOwner ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ./dataUtils ./FlowContainer ./FlowStrategy ./FlowStyle".split(" "),function(k,c,t,b,l,d,z,A,B,u,q,v,w,x){b=function(r){function m(){var a=r.apply(this,
arguments)||this;a._loadImagery=(e,g,h,n,p)=>q.loadImagery(a.layer,e,g,h,n,p);a._createStreamlinesMesh=(e,g,h)=>a.layer.createStreamlinesMesh({flowData:g,rendererSettings:e},{signal:h});a.attached=!1;a.container=null;a.layer=null;a.type="flow";a.timeExtent=null;a.redrawOrRefetch=k._asyncToGenerator(function*(){a._updateVisualization()});return a}k._inheritsLoose(m,r);var f=m.prototype;f.attach=function(){const {layer:a}=this,e=()=>{this._loadImagery=(g,h,n,p,y)=>q.loadImagery(a,g,h,n,p,y);this._updateVisualization()};
"multidimensionalDefinition"in a?this.handles.add(l.watch(()=>a.multidimensionalDefinition,e)):this.handles.add([l.watch(()=>a.mosaicRule,e),l.watch(()=>a.renderingRule,e),l.watch(()=>a.definitionExpression,e)]);this.container=new v;this._strategy=new w({flowContainer:this.container});this._updateVisualization()};f.detach=function(){this._strategy.destroy();this.container.removeAllChildren();this.container=null;this.handles.removeAll()};f.update=function(a){a.stationary?this._strategy.update(a):this.layerView.requestUpdate()};
f.hitTest=function(a){return new t({attributes:{},geometry:a.clone(),layer:this.layer})};f.moveEnd=function(){};f.doRefresh=function(){var a=k._asyncToGenerator(function*(){});return function(){return a.apply(this,arguments)}}();f._updateVisualization=function(){if("flow"===this.layer.renderer.type){var a=new x(this._loadImagery,this._createStreamlinesMesh,this.layer.renderer,this.timeExtent);this.container.flowStyle=a;this.layerView.requestUpdate()}};k._createClass(m,[{key:"updating",get:function(){return!this._strategy||
this._strategy.updating}}]);return m}(b.HandleOwner);c.__decorate([d.property()],b.prototype,"_strategy",void 0);c.__decorate([d.property()],b.prototype,"attached",void 0);c.__decorate([d.property()],b.prototype,"container",void 0);c.__decorate([d.property()],b.prototype,"layer",void 0);c.__decorate([d.property()],b.prototype,"layerView",void 0);c.__decorate([d.property()],b.prototype,"type",void 0);c.__decorate([d.property()],b.prototype,"updating",null);c.__decorate([d.property()],b.prototype,"timeExtent",
void 0);return b=c.__decorate([u.subclass("esri.views.2d.engine.flow.FlowView2D")],b)});