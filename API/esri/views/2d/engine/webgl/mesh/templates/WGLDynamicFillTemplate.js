// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../color ../../definitions ../../GeometryUtils ../../number ../../materialKey/MaterialKey ./util ./WGLBaseFillTemplate ./WGLDynamicMeshTemplate ../../util/Result".split(" "),function(A,B,p,x,w,y,t,C,k,D,E,F){return function(z){function u(a,h,q){var b;var c=z.call(this,a)||this;c._minMaxZoom=t.i1616to32(Math.round(h*w.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(q*w.MIN_MAX_ZOOM_PRECISION_FACTOR));
k.isFunction(a.color)?c._dynamicPropertyMap.set("fillColor",(d,g,e)=>(d=a.color(d,g,e))&&x.premultiplyAlphaRGBA(d)||0):(h=a.color,c.fillColor=h&&x.premultiplyAlphaRGBA(h)||0);const f="CIMMarkerPlacementInsidePolygon"===(null==(b=a.cim.placement)?void 0:b.type)&&a.cim.placement.shiftOddRows?2:1,l=a.height;k.isFunction(l)?c._dynamicPropertyMap.set("_height",(d,g,e)=>l(d,g,e)*f):c._height=(l||0)*f;const m=a.offsetX;k.isFunction(m)?c._dynamicPropertyMap.set("_offsetX",(d,g,e)=>{d=p.pt2px(m(d,g,e))+128;
255<d?d=255:0>d&&(d=0);return d}):(b=p.pt2px(m||0)+128,255<b?b=255:0>b&&(b=0),c._offsetX=b);const r=a.offsetY;k.isFunction(r)?c._dynamicPropertyMap.set("_offsetY",(d,g,e)=>{d=p.pt2px(-r(d,g,e))+128;255<d?d=255:0>d&&(d=0);return d}):(b=p.pt2px(-r||0)+128,255<b?b=255:0>b&&(b=0),c._offsetY=b);b=a.scaleX;k.isFunction(b)?c._dynamicPropertyMap.set("_scaleX",b):c._scaleX=b||1;const n=a.angle;k.isFunction(n)?c._dynamicPropertyMap.set("_angle",(d,g,e)=>y.radToByte(n(d,g,e))):c._angle=y.radToByte(n)||0;B.isSome(a.effects)&&
(b=a.effects,k.isFunction(b)?c._dynamicPropertyMap.set("_effects",b):c._effects=b);c._cimFillLayer=a;c._fillMaterialKey=C.FillMaterialKey.load(a.materialKey);return c}A._inheritsLoose(u,z);u.fromCIMFill=function(a,h){const [q,b]=k.getMinMaxZoom(a.scaleInfo,h);return new u(a,q,b)};u.prototype.bindFeature=function(a,h,q){const b=a.readLegacyFeature();this._dynamicPropertyMap.forEach((l,m)=>{this[m]=l(b,h,q)});a=this._fillMaterialKey;var c=this._materialCache,f=this._cimFillLayer.materialHash;f=f(b,
h,q);f=c.get(f);c=null;f&&F.ok(f.spriteMosaicItem)&&(c=f.spriteMosaicItem);if(c){const {rect:l,width:m,height:r}=c;f=l.x+w.SPRITE_PADDING;const n=l.y+w.SPRITE_PADDING,d=f+m,g=n+r;let e=Math.round(p.pt2px(this._height));255<e?e=255:0>=e&&(e=g-n);let v=Math.round(p.pt2px(this._height/r*m||0));255<v?v=255:0>=v&&(v=d-f);const G=this._scaleX;this.tl=t.i1616to32(f,n);this.br=t.i1616to32(d,g);this.aux2=t.i8888to32(v,e,this._offsetX,this._offsetY);this.aux3=t.i8888to32(G,1,this._angle,0);a.sdf=c.sdf;a.pattern=
!0;a.textureBinding=c.textureBinding}else this.aux3=this.aux2=this.br=this.tl=0,a.sdf=!1,a.pattern=!1,a.textureBinding=0;this._materialKey=a.data};return u}(D(E))});