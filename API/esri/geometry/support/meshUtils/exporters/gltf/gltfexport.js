// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/urlUtils ./index ./node ./asset ./scene".split(" "),function(e,h,f,k,l,m){let n=function(){function b(a,c){this._file={type:"model/gltf-binary",data:a};this.origin=c}var d=b.prototype;d.buffer=function(){return Promise.resolve(this._file)};d.download=function(a){h.downloadBlobAsFile(new Blob([this._file.data],{type:this._file.type}),a)};return b}();e.toBinaryGLTF=function(b,d){const a=new l.Asset,c=new m.Scene;a.addScene(c);c.addNode(new k.Node(b));return f.exportGLB(a,
d).then(g=>new n(g[f.MODEL_NAME_GLB],g.origin))};Object.defineProperty(e,"__esModule",{value:!0})});