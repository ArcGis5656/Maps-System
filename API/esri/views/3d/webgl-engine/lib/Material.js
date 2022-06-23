// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ./ContentObject ./ContentObjectType ./DefaultVertexAttributeLocations ../materials/internal/MaterialUtil".split(" "),function(e,h,l,g,m,n,k){g=function(b){function f(a,p){var c=b.call(this)||this;c.type=m.ContentObjectType.Material;c.supportsEdges=!1;c._visible=!0;c._renderPriority=0;c._insertOrder=0;c._vertexAttributeLocations=n.Default3D;c._parameters=k.copyParameters(a,p);c.validateParameters(c._parameters);return c}
h._inheritsLoose(f,b);var d=f.prototype;d.dispose=function(){};d.update=function(a){return!1};d.setParameters=function(a){k.updateParameters(this._parameters,a)&&(this.validateParameters(this._parameters),this.parametersChanged())};d.validateParameters=function(a){};d.shouldRender=function(a){return this.isVisible()&&this.isVisibleInPass(a.pass)&&0!==(this.renderOccluded&a.renderOccludedMask)};d.isVisibleInPass=function(a){return!0};d.isVisible=function(){return this._visible};d.parametersChanged=
function(){l.isSome(this.repository)&&this.repository.materialChanged(this)};h._createClass(f,[{key:"parameters",get:function(){return this._parameters}},{key:"visible",get:function(){return this._visible},set:function(a){a!==this._visible&&(this._visible=a,this.parametersChanged())}},{key:"renderOccluded",get:function(){return this.parameters.renderOccluded}},{key:"renderPriority",get:function(){return this._renderPriority},set:function(a){a!==this._renderPriority&&(this._renderPriority=a,this.parametersChanged())}},
{key:"insertOrder",get:function(){return this._insertOrder},set:function(a){a!==this._insertOrder&&(this._insertOrder=a,this.parametersChanged())}},{key:"vertexAttributeLocations",get:function(){return this._vertexAttributeLocations}}]);return f}(g.ContentObject);e.RenderOccludedFlag=void 0;(function(b){b[b.Occlude=1]="Occlude";b[b.Transparent=2]="Transparent";b[b.OccludeAndTransparent=4]="OccludeAndTransparent";b[b.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil";b[b.Opaque=16]="Opaque"})(e.RenderOccludedFlag||
(e.RenderOccludedFlag={}));e.DefaultMaterialParameters={renderOccluded:e.RenderOccludedFlag.Occlude};e.Material=g;Object.defineProperty(e,"__esModule",{value:!0})});