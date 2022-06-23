// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/floatRGBA","../../../../core/maybe","../../../webgl/enums","../../../webgl/Texture"],function(q,r,k,p,t){function u(h,g){var a=h.map(c=>Math.round(c*g)),b=1/g;h=Math.floor(a.reduce((c,l)=>c+l));var d=a.reduce((c,l)=>Math.max(c,l));d=(Math.floor(.5*(d-1))+.5)*b;var e=[];let m=1;for(var f of a){for(let c=0;c<f;c++)e.push(m*(Math.min(c,f-1-c)+.5)*b/d*.5+.5);m=-m}f=Math.round(a[0]/2);f=[...e.slice(f),...e.slice(0,f)];a=h+2;b=new Uint8Array(4*a);e=4;for(const c of f)r.packFloatRGBA(c,
b,e),e+=4;b.copyWithin(0,e-4,e);b.copyWithin(e,4,8);return{encodedData:b,sdfNormalizer:d,paddedPixels:a,pixels:h}}let w=function(){function h(a){this._rctx=a;this.cache=new Map}var g=h.prototype;g.dispose=function(){this.cache.forEach(a=>a.texture=k.disposeMaybe(a.texture));this.cache.clear()};g._acquire=function(a){if(k.isNone(a))return null;const b=this._patternId(a);var d=this.cache.get(b);if(d)return d.refCount++,d.bind;d=a.pixelRatio;const {encodedData:e,sdfNormalizer:m,pixels:f,paddedPixels:c}=
u(a.pattern,d),l=f/d,n={refCount:1,texture:null,bind:v=>{k.isNone(n.texture)&&(n.texture=new t.Texture(this._rctx,{width:c,height:1,internalFormat:p.PixelFormat.RGBA,pixelFormat:p.PixelFormat.RGBA,dataType:p.PixelType.UNSIGNED_BYTE,wrapMode:p.TextureWrapMode.CLAMP_TO_EDGE},e));v.bindTexture(n.texture,"stipplePatternTexture");return{pixelSize:l,sdfNormalizer:m,pixels:f}}};this.cache.set(b,n);return n.bind};g.release=function(a){if(!k.isNone(a)){a=this._patternId(a);var b=this.cache.get(a);b&&(b.refCount--,
0===b.refCount&&(k.isSome(b.texture)&&b.texture.dispose(),this.cache.delete(a)))}};g.swap=function(a,b){b=this._acquire(b);this.release(a);return b};g._patternId=function(a){return`${a.pattern.join(",")}-r${a.pixelRatio}`};return h}();q.StippleTextureRepository=w;Object.defineProperty(q,"__esModule",{value:!0})});