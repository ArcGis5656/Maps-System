// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","./sources/resolver","../../../../webgl/programUtils"],function(h,k,m){const l=a=>{const b={};for(const d in a){{let e=void 0;var c=d;e=""+c[0].toUpperCase();for(let g=1;g<c.length;g++){const f=c[g];f===f.toUpperCase()?(e+="_",e+=f):e+=f.toUpperCase()}c=e}b[c]=a[d]}return m.glslifyDefineMap(b)};h.createProgramTemplate=(a,b,c,d)=>{a+=a.substring(a.lastIndexOf("/"));b+=b.substring(b.lastIndexOf("/"));return{attributes:c,shaders:{vertexShader:l(d)+k.resolveIncludes(`${a}.vert`),fragmentShader:l(d)+
k.resolveIncludes(`${b}.frag`)}}};Object.defineProperty(h,"__esModule",{value:!0})});