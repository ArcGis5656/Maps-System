// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports"],function(k){let p=function(){function l(a){this.readFile=a}var g=l.prototype;g.resolveIncludes=function(a){return this._resolve(a)};g._resolve=function(a,b=new Map){if(b.has(a))return b.get(a);const c=this._read(a);if(!c)throw Error(`cannot find shader file ${a}`);const m=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let d=m.exec(c);const n=[];for(;null!=d;)n.push({path:d[1],start:d.index,length:d[0].length}),d=m.exec(c);let h=0,e="";n.forEach(f=>{e+=c.slice(h,f.start);e+=b.has(f.path)?
"":this._resolve(f.path,b);h=f.start+f.length});e+=c.slice(h);b.set(a,e);return e};g._read=function(a){return this.readFile(a)};return l}();k.ShaderCompiler=p;Object.defineProperty(k,"__esModule",{value:!0})});