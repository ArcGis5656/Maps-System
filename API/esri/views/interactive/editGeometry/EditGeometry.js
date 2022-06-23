// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../core/Evented ../../../core/maybe ../../../geometry/Polygon ../../../geometry/Polyline ../coordinateHelper ./unnormalizationHelper".split(" "),function(r,w,B,x,z,C,D,E,A){let t=function(){function m(d){this.component=d;this.rightEdge=this.leftEdge=null;this.type="vertex";this.index=null}w._createClass(m,[{key:"pos",get:function(){return this._pos},set:function(d){this._pos=d;this.component.unnormalizeVertexPositions()}}]);
return m}(),u=function(m,d,f){this.component=m;this.leftVertex=d;this.rightVertex=f;this.type="edge";d.rightEdge=this;f.leftEdge=this},v=function(){function m(f,a){this.spatialReference=f;this.viewingMode=a;this.vertices=[];this.edges=[]}var d=m.prototype;d.unnormalizeVertexPositions=function(){1>=this.vertices.length||A.unnormalize(this.vertices,A.getUnnormalizationInfo(this.spatialReference,this.viewingMode))};d.updateVertexIndex=function(f,a){if(0!==this.vertices.length){var c=this.vertices[0],
b=null;do b=f,b.index=a++,f=b.rightEdge?b.rightEdge.rightVertex:null;while(null!=f&&f!==c);b.leftEdge&&b!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(b),this.vertices.length-1)}};d.getFirstVertex=function(){return 0===this.vertices.length?null:this.vertices[0]};d.getLastVertex=function(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]};d.isClosed=function(){return 2<this.vertices.length&&null!==this.vertices[0].leftEdge};d.swapVertices=
function(f,a){const c=this.vertices[f];this.vertices[f]=this.vertices[a];this.vertices[a]=c};d.iterateVertices=function(f){if(0!==this.vertices.length){var a=this.vertices[0],c=a;do f(c,c.index),c=z.isSome(c.rightEdge)?c.rightEdge.rightVertex:null;while(c!==a&&null!=c)}};return m}();x=function(m){function d(a,c,b){var e=m.call(this)||this;e.type=a;e.coordinateHelper=c;e.viewingMode=b;e._geometry=null;e.dirty=!0;e.components=[];return e}w._inheritsLoose(d,m);var f=d.prototype;f.notifyChanges=function(a){this.dirty=
!0;this.emit("change",a)};f._toPoint=function(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)};f._toPolyline=function(){const a=[],c=this.coordinateHelper.vectorToArray;this.components.forEach((b,e)=>{e=[];const p=b=b.vertices.find(h=>null==h.leftEdge);do e.push(c(b.pos)),b=b.rightEdge?b.rightEdge.rightVertex:null;while(b&&b!==p);a.push(e)});return new D({paths:a,spatialReference:this.spatialReference,
hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})};f._toPolygon=function(){const a=[],c=this.coordinateHelper.vectorToArray;this.components.forEach((b,e)=>{e=[];const p=b.vertices[0];let h=p;const k=h;do e.push(c(h.pos)),h=z.isSome(h.rightEdge)?h.rightEdge.rightVertex:null;while(h&&h!==k);b.isClosed()&&e.push(c(p.pos));a.push(e)});return new C({rings:a,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})};d.fromGeometry=function(a,
c){var b=a.spatialReference;const e=E.createCoordinateHelper(a.hasZ,a.hasM,b),p=new d(a.type,e,c);switch(a.type){case "polygon":var h=a.rings;for(a=0;a<h.length;++a){var k=h[a],g=new v(b,c),l=2<k.length&&B.equals(k[0],k[k.length-1]),n=l?k.length-1:k.length;for(var q=0;q<n;++q){const F=e.arrayToVector(k[q]),y=new t(g);g.vertices.push(y);y.pos=F;y.index=q}k=g.vertices.length-1;for(n=0;n<k;++n)q=new u(g,g.vertices[n],g.vertices[n+1]),g.edges.push(q);l&&(l=new u(g,g.vertices[g.vertices.length-1],g.vertices[0]),
g.edges.push(l));p.components.push(g)}break;case "polyline":for(h of a.paths){a=new v(b,c);g=h.length;for(l=0;l<g;++l)k=e.arrayToVector(h[l]),n=new t(a),a.vertices.push(n),n.pos=k,n.index=l;g=a.vertices.length-1;for(l=0;l<g;++l)k=new u(a,a.vertices[l],a.vertices[l+1]),a.edges.push(k);p.components.push(a)}break;case "point":c=new v(b,c),b=new t(c),b.index=0,b.pos=e.pointToVector(a),c.vertices.push(b),p.components.push(c)}return p};w._createClass(d,[{key:"geometry",get:function(){if(this.dirty){switch(this.type){case "point":this._geometry=
this._toPoint();break;case "polyline":this._geometry=this._toPolyline();break;case "polygon":this._geometry=this._toPolygon()}this.dirty=!1}return this._geometry}},{key:"spatialReference",get:function(){return this.coordinateHelper.spatialReference}}]);return d}(x);r.Component=v;r.Edge=u;r.EditGeometry=x;r.Vertex=t;Object.defineProperty(r,"__esModule",{value:!0})});