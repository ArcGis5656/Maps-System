// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],function(g,m){let l=function(){function d(a,b,c=0,e,h){this.TypedArrayConstructor=a;this.elementCount=1;a=this.TypedArrayConstructor;void 0===e&&(e=a.BYTES_PER_ELEMENT);const k=0===b.byteLength?0:c;this.typedBuffer=null==h?new a(b,k):new a(b,k,(h-c)/a.BYTES_PER_ELEMENT);this.typedBufferStride=e/a.BYTES_PER_ELEMENT;this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride);this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}
var f=d.prototype;f.sliceBuffer=function(a,b,c=this.count-b){b=this.typedBuffer.byteOffset+b*this.stride;return new a(this.buffer,b,this.stride,b+c*this.stride)};f.get=function(a){return this.typedBuffer[a*this.typedBufferStride]};f.set=function(a,b){this.typedBuffer[a*this.typedBufferStride]=b};m._createClass(d,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]);return d}();l.ElementCount=1;g.BufferViewScalarImpl=l;Object.defineProperty(g,"__esModule",{value:!0})});