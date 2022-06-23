// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/vec2 ../../chunks/vec2f64 ../../chunks/vec3 ../../chunks/vec3f64 ../../chunks/vec4 ../../chunks/vec4f64 ../../geometry/Point".split(" "),function(l,p,m,q,h,t,n,k){var d;(function(f){f[f.Z=0]="Z";f[f.M=1]="M"})(d||(d={}));let u=function(){function f(a){this.spatialReference=a}var c=f.prototype;c.createVector=function(){return this._tag(m.create())};c.pointToVector=function(a){return this._tag(m.fromValues(a.x,a.y))};c.arrayToVector=function(a){return this._tag(m.fromValues(a[0],
a[1]))};c.vectorToArray=function(a){return[a[0],a[1]]};c.pointToArray=function(a){return[a.x,a.y]};c.vectorToPoint=function(a,b=new k){b.x=a[0];b.y=a[1];b.z=void 0;b.m=void 0;b.spatialReference=this.spatialReference;return b};c.arrayToPoint=function(a,b=new k){b.x=a[0];b.y=a[1];b.z=void 0;b.m=void 0;b.spatialReference=this.spatialReference;return b};c.vectorToDehydratedPoint=function(a,b={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){b.x=a[0];b.y=
a[1];b.z=void 0;b.m=void 0;b.hasZ=!1;b.hasM=!1;b.spatialReference=this.spatialReference;return b};c.lerp=function(a,b,e,g){return p.lerp(g,a,b,e)};c.addDelta=function(a,b,e){a[0]+=b;a[1]+=e};c.distance=function(a,b){return p.distance(a,b)};c.getZ=function(a,b){return b};c.hasZ=function(){return!1};c.getM=function(a,b){return b};c.hasM=function(){return!1};c.clone=function(a){return this._tag(m.fromArray(a))};c.copy=function(a,b){return p.copy(b,a)};c.fromXYZ=function(a){return this._tag(m.fromValues(a[0],
a[1]))};c.toXYZ=function(a,b=0){return h.fromValues(a[0],a[1],b)};c._tag=function(a){return a};return f}(),r=function(){function f(a,b){this.valueType=a;this.spatialReference=b}var c=f.prototype;c.createVector=function(){return this._tag(h.create())};c.pointToVector=function(a){return this._tag(h.fromValues(a.x,a.y,this.valueType===d.Z?a.z:a.m))};c.arrayToVector=function(a){return this._tag(h.fromValues(a[0],a[1],a[2]||0))};c.vectorToArray=function(a){return[a[0],a[1],a[2]]};c.pointToArray=function(a){return this.valueType===
d.Z?[a.x,a.y,a.z]:[a.x,a.y,a.m]};c.vectorToPoint=function(a,b=new k){b.x=a[0];b.y=a[1];b.z=this.valueType===d.Z?a[2]:void 0;b.m=this.valueType===d.M?a[2]:void 0;b.spatialReference=this.spatialReference;return b};c.arrayToPoint=function(a,b=new k){b.x=a[0];b.y=a[1];b.z=this.valueType===d.Z?a[2]:void 0;b.m=this.valueType===d.M?a[2]:void 0;b.spatialReference=this.spatialReference;return b};c.vectorToDehydratedPoint=function(a,b={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,
type:"point"}){const e=this.valueType===d.Z,g=this.valueType===d.M;b.x=a[0];b.y=a[1];b.z=e?a[2]:void 0;b.m=g?a[2]:void 0;b.hasZ=e;b.hasM=g;b.spatialReference=this.spatialReference;return b};c.lerp=function(a,b,e,g){return q.lerp(g,a,b,e)};c.addDelta=function(a,b,e,g){a[0]+=b;a[1]+=e;this.valueType===d.Z&&(a[2]+=g)};c.distance=function(a,b){return this.valueType===d.Z?q.distance(a,b):p.distance(a,b)};c.getZ=function(a,b){return this.valueType===d.Z?a[2]:b};c.hasZ=function(){return this.valueType===
d.Z};c.getM=function(a,b){return this.valueType===d.M?a[2]:b};c.hasM=function(){return this.valueType===d.M};c.clone=function(a){return this._tag(h.fromArray(a))};c.copy=function(a,b){return q.copy(b,a)};c.fromXYZ=function(a,b=0,e=0){return this._tag(h.fromValues(a[0],a[1],this.valueType===d.Z?2<a.length?a[2]:b:e))};c.toXYZ=function(a,b=0){return this._tag(h.fromValues(a[0],a[1],this.valueType===d.Z?a[2]:b))};c._tag=function(a){return a};return f}(),v=function(){function f(a){this.spatialReference=
a}var c=f.prototype;c.createVector=function(){return this._tag(n.create())};c.pointToVector=function(a){return this._tag(n.fromValues(a.x,a.y,a.z,a.m))};c.arrayToVector=function(a){return this._tag(n.fromValues(a[0],a[1],a[2]||0,a[3]||0))};c.vectorToArray=function(a){return[a[0],a[1],a[2],a[3]]};c.pointToArray=function(a){return[a.x,a.y,a.z,a.m]};c.vectorToPoint=function(a,b=new k){b.x=a[0];b.y=a[1];b.z=a[2];b.m=a[3];b.spatialReference=this.spatialReference;return b};c.arrayToPoint=function(a,b=new k){b.x=
a[0];b.y=a[1];b.z=a[2];b.m=a[3];b.spatialReference=this.spatialReference;return b};c.vectorToDehydratedPoint=function(a,b={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){b.x=a[0];b.y=a[1];b.z=a[2];b.m=a[3];b.hasZ=!0;b.hasM=!0;b.spatialReference=this.spatialReference;return b};c.lerp=function(a,b,e,g){return t.lerp(g,a,b,e)};c.addDelta=function(a,b,e,g){a[0]+=b;a[1]+=e;a[2]+=g};c.distance=function(a,b){return q.distance(a,b)};c.getZ=function(a){return a[2]};
c.hasZ=function(){return!0};c.getM=function(a){return a[3]};c.hasM=function(){return!0};c.clone=function(a){return this._tag(n.fromArray(a))};c.copy=function(a,b){return t.copy(b,a)};c.fromXYZ=function(a,b=0,e=0){return this._tag(n.fromValues(a[0],a[1],2<a.length?a[2]:b,e))};c.toXYZ=function(a){return h.fromValues(a[0],a[1],a[2])};c._tag=function(a){return a};return f}();l.CoordinateHelper2D=u;l.CoordinateHelper3D=r;l.CoordinateHelper4D=v;l.createCoordinateHelper=function(f,c,a){return f&&c?new v(a):
c?new r(d.M,a):f?new r(d.Z,a):new u(a)};Object.defineProperty(l,"__esModule",{value:!0})});