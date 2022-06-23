// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/MapUtils ../../../../core/maybe ../../../../core/uid ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ./GeometryRecord ./ModelDirtyTypes ./Util".split(" "),function(x,u,p,y,v,C,z,F,G,H,D,A,d,w){p=function(B){function t(a){a=B.call(this,
a)||this;a._residentGeomRecords=new Map;a._dirtyGeomRecords=new Map;a.dirty=!1;return a}x._inheritsLoose(t,B);var e=t.prototype;e.commit=function(a){this.dirty=!1;this._dirtyGeomRecords.forEach((b,c)=>this.commitLayer(c,a))};e.commitLayer=function(a,b){const c=this._dirtyGeomRecords.get(a);c&&(c.forEach((m,g)=>{const k=this._ensureGeomRecord(a,g);m.forEach((f,n)=>{var l=f[0],h=f[1],q=f[2];f=!1;if(h&d.ModelDirty.Geometry.UPDATE){var r=k.get(n);if(r){r=r[1];if(q&d.ModelDirty.State.TRANSFORMATION){const E=
this.model.getObject(g);this.model.updateRenderGeometryTransformation(E,l,r)&&(f=!0)}f||b.updates.push({renderGeometry:r,updateType:q})}else w.assert(!1,"ModelDirtySet.getAddRemoveListFilteredByLayers: invalid update")}if(h&d.ModelDirty.Geometry.REMOVE||f)(q=k.get(n))?(b.removes.push(q[1]),k.delete(n),q[0].disposed&&A.GeometryRecord.pool.release(q[0])):h===d.ModelDirty.Geometry.REMOVE&&w.assert(!1,"ModelDirtySet.getAddRemoveListFilteredByLayers: invalid remove");if(h&d.ModelDirty.Geometry.ADD||f)h=
this.model.getObject(g),v.isSome(h)&&(h=this.model.getRenderGeometry(h,l),l=[l,h],b.adds.push(h),k.set(n,l))});0===k.size&&this._residentGeomRecords.get(a).delete(g)}),0===this._residentGeomRecords.get(a).size&&this._residentGeomRecords.delete(a),this._dirtyGeomRecords.delete(a))};e.getResidentRenderGeometries=function(a,b){(a=this._residentGeomRecords.get(a))&&a.forEach(c=>c.forEach(m=>b.push(m[1])))};e._objectStateChanged=function(a,b){for(const c of b.geometryRecords)this._updateOrCreateDirtyRecord(b,
c,null,d.ModelDirty.Geometry.UPDATE,0,0,d.ModelDirty.Geometry.UPDATE,d.ModelDirty.Geometry.ADD|d.ModelDirty.Geometry.REMOVE,a)};e.visibilityChanged=function(a){this._objectStateChanged(d.ModelDirty.State.VISIBILITIES,a)};e.highlightChanged=function(a){this._objectStateChanged(d.ModelDirty.State.HIGHLIGHTS,a)};e.occlusionChanged=function(a){this._objectStateChanged(d.ModelDirty.State.OCCLUDEES,a)};e.vertexAttrsUpdated=function(a){this._updateOrCreateDirtyRecord(a.object,a.record,null,d.ModelDirty.Geometry.UPDATE,
0,0,d.ModelDirty.Geometry.UPDATE,d.ModelDirty.Geometry.ADD|d.ModelDirty.Geometry.REMOVE,d.ModelDirty.State.VERTEXATTRS)};e.layerAdded=function(a){a.objects.forAll(b=>this._layerObjectAdded(a,b))};e.layerRemoved=function(a){a.objects.forAll(b=>this._layerObjectRemoved(a,b))};e.layerObjectAdded=function(a){this._layerObjectAdded(a.layer,a.object)};e._layerObjectAdded=function(a,b){a=a.id;for(const c of b.geometryRecords)this._objectGeometryAdded(b,c,a)};e.layerObjectRemoved=function(a){this._layerObjectRemoved(a.layer,
a.object)};e.layerObjectsAdded=function(a){for(const b of a.objects)this._layerObjectAdded(a.layer,b)};e.layerObjectsRemoved=function(a){for(const b of a.objects)this._layerObjectRemoved(a.layer,b)};e._layerObjectRemoved=function(a,b){a=a.id;for(const c of b.geometryRecords)this._objectGeometryRemoved(b,c,a)};e.shaderTransformationChanged=function(a){(a=this._residentGeomRecords.get(a.id))&&a.forEach((b,c)=>{(c=this.model.getObject(c))&&c.hasVolativeTransformation()&&b.forEach(m=>{m[1].shaderTransformationChanged()})})};
e.objectTransformation=function(a){const b=this._getParentLayerId(a);this._ensureGeomRecord(b,a.id).forEach(c=>{this._updateOrCreateDirtyRecord(a,c[0],b,d.ModelDirty.Geometry.UPDATE,0,0,d.ModelDirty.Geometry.UPDATE,d.ModelDirty.Geometry.ADD|d.ModelDirty.Geometry.REMOVE,d.ModelDirty.State.TRANSFORMATION)})};e.objectGeometryAdded=function(a){this._objectGeometryAdded(a.object,a.record)};e._objectGeometryAdded=function(a,b,c=null){this._updateOrCreateDirtyRecord(a,b,c,d.ModelDirty.Geometry.ADD,d.ModelDirty.Geometry.REMOVE,
0,0,0)};e.objectGeometryRemoved=function(a){this._objectGeometryRemoved(a.object,a.record)};e._objectGeometryRemoved=function(a,b,c=null){this._updateOrCreateDirtyRecord(a,b,c,d.ModelDirty.Geometry.REMOVE,d.ModelDirty.Geometry.ADD,d.ModelDirty.Geometry.UPDATE,0,0)};e._updateOrCreateDirtyRecord=function(a,b,c,m,g,k,f,n,l){c=v.unwrapOr(c,this._getParentLayerId(a));const h=b.id;a=this._ensureDirtyRecord(c,a.id);(c=a.get(h))?(b=c[1],b&g?(a.delete(h),c[0].disposed&&A.GeometryRecord.pool.release(c[0])):
b&k?(c[1]=m,c[2]=l):b&f?c[2]|=l:b&n||w.assert(!1,"ModelDirtySet.objectGeometryAdded: inconsistent state")):a.set(h,[b,m,l]);this.dirty=this._hasDirtyGeometryRecords};e._ensureGeomRecord=function(a,b){let c=this._residentGeomRecords.get(a);c||(c=new Map,this._residentGeomRecords.set(a,c));a=c.get(b);a||(a=new Map,c.set(b,a));return a};e._ensureDirtyRecord=function(a,b){let c=this._dirtyGeomRecords.get(a);c||(c=new Map,this._dirtyGeomRecords.set(a,c));a=c.get(b);a||(a=new Map,c.set(b,a));return a};
e._getParentLayerId=function(a){return v.isSome(a.parentLayer)?a.parentLayer.id:C.NullUID};e.formatDebugInfo=function(){const a=["ADD","UPD",void 0,"REM"];let b="";this._dirtyGeomRecords.forEach((c,m)=>{c.forEach((g,k)=>{0<b.length&&(b+="\n");b+=m+"."+k;const f=[];g.forEach(n=>{const l=n[1];f[l]||(f[l]=[]);f[l].push(n[0].geometry.id)});for(g=0;g<f.length;g++)if(f[g])for(b+=" "+a[g-1]+": ",k=0;k<f[g].length;k++)b+=f[g][k]+", "})});return b};x._createClass(t,[{key:"_hasDirtyGeometryRecords",get:function(){return y.someMap(this._dirtyGeomRecords,
a=>y.someMap(a,b=>b&&0<b.size))}},{key:"test",get:function(){const a=this;return{get residentLayerCount(){return a._residentGeomRecords.size},get residentObjectCount(){return Array.from(a._residentGeomRecords.values()).reduce((b,c)=>b+c.size,0)}}}}]);return t}(p);u.__decorate([z.property({constructOnly:!0})],p.prototype,"model",void 0);u.__decorate([z.property()],p.prototype,"dirty",void 0);return p=u.__decorate([D.subclass("esri.views.3d.webgl-engine.lib.ModelDirtySet")],p)});