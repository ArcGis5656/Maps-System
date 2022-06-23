// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../chunks/mat4 ../../chunks/mat4f64 ../../chunks/vec3 ../../chunks/vec3f64 ../Point ../projection ../projectionEllipsoid ./axisAngleDegrees ./buffer/BufferView ../../chunks/vec32 ../../chunks/vec33".split(" "),function(v,
e,d,C,f,H,I,J,D,g,m,r,h,E,w,F,n,x,y,G){var t;d=t=function(z){function p(a){a=z.call(this,a)||this;a.origin=h.create();a.translation=h.create();a.rotation=n.create();a.scale=h.fromValues(1,1,1);a.geographic=!0;return a}v._inheritsLoose(p,z);var k=p.prototype;k.applyLocal=function(a,b){return r.transformMat4(b,a,this.localMatrix)};k.applyLocalInverse=function(a,b){return r.transformMat4(b,a,this.localMatrixInverse)};k.project=function(a,b){const c=new Float64Array(a.length),l=x.BufferViewVec3f64.fromTypedArray(c);
a=x.BufferViewVec3f64.fromTypedArray(a);if(this.geographic){const A=F.getSphericalPCPF(b),q=m.create();w.computeTranslationToOriginAndRotation(b,this.origin,q,A);g.multiply(q,q,this.localMatrix);y.transformMat4(l,a,q);w.projectBuffer(c,A,0,c,b,0,c.length/3);return c}const {localMatrix:B,origin:u}=this;g.equals(B,m.IDENTITY)?G.copy(l,a):y.transformMat4(l,a,B);for(b=0;b<c.length;b+=3)c[b+0]+=u[0],c[b+1]+=u[1],c[b+2]+=u[2];return c};k.getOriginPoint=function(a){const [b,c,l]=this.origin;return new E({x:b,
y:c,z:l,spatialReference:a})};k.equals=function(a){return C.isSome(a)&&this.geographic===a.geographic&&r.exactEquals(this.origin,a.origin)&&g.exactEquals(this.localMatrix,a.localMatrix)};k.clone=function(){const a={origin:h.clone(this.origin),translation:h.clone(this.translation),rotation:n.create(this.rotation),scale:h.clone(this.scale),geographic:this.geographic};return new t(a)};v._createClass(p,[{key:"localMatrix",get:function(){const a=m.create();g.fromScaling(a,this.scale);g.rotate(a,a,n.angleRad(this.rotation),
n.axis(this.rotation));g.translate(a,a,this.translation);return a}},{key:"localMatrixInverse",get:function(){return g.invert(m.create(),this.localMatrix)}}]);return p}(d.JSONSupport);e.__decorate([f.property({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"origin",void 0);e.__decorate([f.property({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"translation",void 0);e.__decorate([f.property({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"rotation",void 0);e.__decorate([f.property({type:[Number],
nonNullable:!0,json:{write:!0}})],d.prototype,"scale",void 0);e.__decorate([f.property({type:Boolean,nonNullable:!0,json:{write:!0}})],d.prototype,"geographic",void 0);e.__decorate([f.property()],d.prototype,"localMatrix",null);e.__decorate([f.property()],d.prototype,"localMatrixInverse",null);return d=t=e.__decorate([D.subclass("esri.geometry.support.MeshTransform")],d)});