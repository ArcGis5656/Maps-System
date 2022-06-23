// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../CurveHelper"],function(t,x,n,y){function p(c,d){const g=Math.PI;for(;Math.abs(d-c)>g+2E-15;)d=d-c>g?d-2*g:d+2*g;return(c+d)/2}let u=function(){function c(){}c.local=function(){null===c.instance&&(c.instance=new c);return c.instance};c.prototype.execute=function(d,g,a,b){return new z(d,g,a)};return c}();u.instance=null;let z=function(c){function d(a,b,k){a=c.call(this,a,!0,!0)||this;a._curveHelper=new y.CurveHelper;a._angleToLine=
void 0!==b.angleToLine?b.angleToLine:!0;a._offset=void 0!==b.offset?b.offset*k:0;a._endPoints=void 0!==b.placeOnEndPoints?b.placeOnEndPoints:!0;a._controlPoints=void 0!==b.placeOnControlPoints?b.placeOnControlPoints:!0;a._regularVertices=void 0!==b.placeOnRegularVertices?b.placeOnRegularVertices:!0;a._tags=[];a._tagIterator=0;return a}x._inheritsLoose(d,c);var g=d.prototype;g.processPath=function(a){this.iteratePath||(this._preparePath(a),this.iteratePath=!0);if(this._tagIterator>=this._tags.length)return this._tagIterator=
this._tags.length=0,this.iteratePath=!1,null;a=this._tags[this._tagIterator];this._angleToLine&&this.internalPlacement.setRotate(a[2]);let b=a[0],k=a[1];if(0!==this._offset){const h=Math.cos(a[2]);b-=this._offset*Math.sin(a[2]);k+=this._offset*h}this.internalPlacement.setTranslate(b,k);this._tagIterator++;return this.internalPlacement};g._preparePath=function(a){this._tagIterator=this._tags.length=0;const b=n.isClosedPath(a),k=a.length-1;let h=0,q=0,v=0,m=0,l=0,e,f;for(;h<k;){h++;e=a[h-1];f=a[h];
const r=n.getId(e),w=n.getId(f);if(this._angleToLine||0!==this._offset)m=this._curveHelper.getAngle(e,f,0);1===h?b?(q=m,v=r):(this._endPoints||this._controlPoints&&1===r)&&this._tags.push([e[0],e[1],m]):1===r?this._controlPoints&&this._tags.push([e[0],e[1],p(l,m)]):this._regularVertices&&this._tags.push([e[0],e[1],p(l,m)]);if(this._angleToLine||0!==this._offset)l=this._curveHelper.getAngle(e,f,1);h===k&&(b?1===w||1===v?this._controlPoints&&this._tags.push([f[0],f[1],p(l,q)]):this._regularVertices&&
this._tags.push([f[0],f[1],p(l,q)]):(this._endPoints||this._controlPoints&&1===w)&&this._tags.push([f[0],f[1],l]))}this._tagIterator=0};return d}(n.PathTransformationCursor);t.PlacementOnVertices=u;Object.defineProperty(t,"__esModule",{value:!0})});