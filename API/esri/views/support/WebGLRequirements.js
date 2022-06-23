// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error","../webgl/capabilities","../webgl/context-util"],function(c,b,d,e){c.check=function(f){var a;a:{for(a=e.getContextTypes(f);1<a.length;){const g=d.getWebGLCapabilities(a.shift());if(g.available){a=g;break a}}a=d.getWebGLCapabilities(a.shift())}if(!a.available)return new b("webgl:required","WebGL is required but not supported.");if("3d"===f&&a.majorPerformanceCaveat)return new b("webgl:major-performance-caveat-detected","Your WebGL implementation doesn't seem to support hardware accelerated rendering. Check your browser settings or if your GPU is in a blocklist.");
if(!a.supportsHighPrecisionFragment)return new b("webgl:high-precision-fragment-required","WebGL support for high precision fragment shaders is required but not supported.");if(!a.supportsVertexShaderSamplers)return new b("webgl:vertex-shader-samplers-required","WebGL support for vertex shader samplers is required but not supported.");if(a.type===e.ContextType.WEBGL1){if(!a.supportsElementIndexUint)return new b("webgl:element-index-uint-required","WebGL support for uint vertex indices is required but not supported.");
if(!a.supportsStandardDerivatives)return new b("webgl:standard-derivatives-required","WebGL support for standard derivatives is required but not supported.");if(!a.supportsInstancedArrays)return new b("webgl:instanced-arrays-required","WebGL support for instanced rendering is required but not supported.")}return null};Object.defineProperty(c,"__esModule",{value:!0})});