// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../chunks/mat4","../../../../../../chunks/mat4f32"],function(c,g,h){function e(b,a,d){g.translate(f,d,a);b.setUniform3fv("localOrigin",a);b.setUniformMatrix4fv("view",f)}const f=h.create();c.bindCameraPosition=function(b,a,d){b.setUniform3f("cameraPosition",d[3]-a[0],d[7]-a[1],d[11]-a[2])};c.bindProjectionMatrix=function(b,a){b.setUniformMatrix4fv("proj",a)};c.bindView=function(b,a){e(b,a.origin,a.camera.viewMatrix)};c.bindViewCustomOrigin=e;c.bindViewport=function(b,
a){b.setUniform4fv("viewport",a.camera.fullViewport)};Object.defineProperty(c,"__esModule",{value:!0})});