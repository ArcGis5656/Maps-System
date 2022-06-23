// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../analysis/AreaMeasurementAnalysis ../../core/maybe ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../properties/defaultUnit ../../views/3d/interactive/measurementTools/areaMeasurement3D/AreaMeasurement3DTool ../support/InteractiveAnalysisViewModel".split(" "),function(n,d,p,f,l,g,
c,x,y,t,u,v,w){c=function(q){function k(a){a=q.call(this,a)||this;a.analysis=null;a.supportedViewType="3d";a.unsupportedErrorMessage="AreaMeasurement3DViewModel is only supported in 3D views.";a._userUnitOptions=null;a._userUnit=null;return a}n._inheritsLoose(k,q);var h=k.prototype;h.initialize=function(){this.analysis.unit=this.unit};h.clear=function(){this.removeTool();this.analysis.geometry=null};h.constructAnalysis=function(){return new p};h.constructTool=function(){return new v({view:f.unwrap(this.view),
analysis:this.analysis,analysisView:f.unwrap(this.analysisView),visible:this.visible})};h._findSelectableUnit=function(a,b){const e=this.unitOptions;return-1!==e.indexOf(a)?a:f.isSome(b)?this._findSelectableUnit(b):e[0]};h._filteredOrAllUnits=function(a){if(f.isNone(a))return l.measurementAreaUnits.slice();a=a.filter(b=>-1!==l.measurementAreaUnits.indexOf(b));return 0===a.length?l.measurementAreaUnits.slice():a};n._createClass(k,[{key:"state",get:function(){return this.disabled||!this.ready?"disabled":
f.isNone(this.tool)?"ready":this.tool.state}},{key:"measurement",get:function(){if(f.isNone(this.tool)||this.disabled||this.tool.destroyed||"pending"===this.tool.toolState)return null;var a=this.tool.measurementView;if(a.destroyed)return null;a=a.analysisVisualization;var b=a.viewData,e=b.measurementData;const m=b.validMeasurement;b="euclidean"===b.mode;const r=(e=0===(b?e.intersectingSegments:e.geodesicIntersectingSegments).size)?m?"available":"unavailable":"invalid";return{mode:b?"euclidean":"geodesic",
area:{text:e&&m?a.areaLabel:null,state:r},perimeterLength:{text:e&&m?a.perimeterLengthLabel:null,state:r}}}},{key:"unitOptions",get:function(){return this._filteredOrAllUnits(this._userUnitOptions)},set:function(a){this._userUnitOptions=a;this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}},{key:"unit",get:function(){return f.isSome(this._userUnit)?this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit):this._findSelectableUnit(this.defaultUnit)},set:function(a){this._userUnit=
a?this._findSelectableUnit(a,this._userUnit):null;this.analysis.unit=this._userUnit}}]);return k}(w.InteractiveAnalysisViewModel);d.__decorate([g.property({type:p})],c.prototype,"analysis",void 0);d.__decorate([g.property({readOnly:!0})],c.prototype,"state",null);d.__decorate([g.property({readOnly:!0})],c.prototype,"measurement",null);d.__decorate([g.property()],c.prototype,"unitOptions",null);d.__decorate([g.property()],c.prototype,"unit",null);d.__decorate([g.property(u.defaultUnitPropertyMetadata)],
c.prototype,"defaultUnit",void 0);d.__decorate([g.property()],c.prototype,"_userUnit",void 0);return c=d.__decorate([t.subclass("esri.widgets.AreaMeasurement3D.AreaMeasurement3DViewModel")],c)});