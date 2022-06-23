// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","./basicInterfaces"],function(d,e){return function(){function b(a){this._material=a.material;this._techniqueRep=a.techniqueRep;this._output=a.output}var c=b.prototype;c.dispose=function(){this._techniqueRep.release(this._technique)};c.ensureTechnique=function(a,f,g=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(a,this._material.getTechniqueConfig(g,f),this._technique)};c.ensureResources=function(a){return e.ResourceState.LOADED};
d._createClass(b,[{key:"technique",get:function(){return this._technique}}]);return b}()});