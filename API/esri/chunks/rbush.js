// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","./quickselect"],function(D,E){function u(a,b){if(!(this instanceof u))return new u(a,b);this._maxEntries=Math.max(4,a||9);this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries));b&&("function"===typeof b?this.toBBox=b:this._initFormat(b));this.clear()}function p(a,b){r(a,0,a.children.length,b,a)}function r(a,b,c,e,d){d||(d=q(null));d.minX=Infinity;d.minY=Infinity;d.maxX=-Infinity;d.maxY=-Infinity;for(var g;b<c;b++)g=a.children[b],t(d,a.leaf?e(g):g);return d}function t(a,b){a.minX=
Math.min(a.minX,b.minX);a.minY=Math.min(a.minY,b.minY);a.maxX=Math.max(a.maxX,b.maxX);a.maxY=Math.max(a.maxY,b.maxY);return a}function A(a,b){return a.minX-b.minX}function B(a,b){return a.minY-b.minY}function y(a){return(a.maxX-a.minX)*(a.maxY-a.minY)}function v(a){return a.maxX-a.minX+(a.maxY-a.minY)}function z(a,b){return a.minX<=b.minX&&a.minY<=b.minY&&b.maxX<=a.maxX&&b.maxY<=a.maxY}function w(a,b){return b.minX<=a.maxX&&b.minY<=a.maxY&&b.maxX>=a.minX&&b.maxY>=a.minY}function q(a){return{children:a,
height:1,leaf:!0,minX:Infinity,minY:Infinity,maxX:-Infinity,maxY:-Infinity}}function C(a,b,c,e,d){for(var g=[b,c],f;g.length;)c=g.pop(),b=g.pop(),c-b<=e||(f=b+Math.ceil((c-b)/e/2)*e,E.quickselect(a,f,b,c,d),g.push(b,f,f,c))}u.prototype={all:function(){return this._all(this.data,[])},search:function(a){var b=this.data,c=[],e=this.toBBox;if(!w(a,b))return c;for(var d=[],g,f,h,k;b;){g=0;for(f=b.children.length;g<f;g++)h=b.children[g],k=b.leaf?e(h):h,w(a,k)&&(b.leaf?c.push(h):z(a,k)?this._all(h,c):d.push(h));
b=d.pop()}return c},collides:function(a){var b=this.data,c=this.toBBox;if(!w(a,b))return!1;for(var e=[],d,g,f,h;b;){d=0;for(g=b.children.length;d<g;d++)if(f=b.children[d],h=b.leaf?c(f):f,w(a,h)){if(b.leaf||z(a,h))return!0;e.push(f)}b=e.pop()}return!1},load:function(a){if(!a||!a.length)return this;if(a.length<this._minEntries){for(var b=0,c=a.length;b<c;b++)this.insert(a[b]);return this}a=this._build(a.slice(),0,a.length-1,0);this.data.children.length?this.data.height===a.height?this._splitRoot(this.data,
a):(this.data.height<a.height&&(b=this.data,this.data=a,a=b),this._insert(a,this.data.height-a.height-1,!0)):this.data=a;return this},insert:function(a){a&&this._insert(a,this.data.height-1);return this},clear:function(){this.data=q([]);return this},remove:function(a,b){if(!a)return this;for(var c=this.data,e=this.toBBox(a),d=[],g=[],f,h,k,l;c||d.length;){c||(c=d.pop(),h=d[d.length-1],f=g.pop(),l=!0);if(c.leaf){a:{k=a;var m=c.children,n=b;if(n){for(var x=0;x<m.length;x++)if(n(k,m[x])){k=x;break a}k=
-1}else k=m.indexOf(k)}if(-1!==k){c.children.splice(k,1);d.push(c);this._condense(d);break}}l||c.leaf||!z(c,e)?h?(f++,c=h.children[f],l=!1):c=null:(d.push(c),g.push(f),f=0,h=c,c=c.children[0])}return this},toBBox:function(a){return a},compareMinX:A,compareMinY:B,toJSON:function(){return this.data},fromJSON:function(a){this.data=a;return this},_all:function(a,b){for(var c=[];a;)a.leaf?b.push.apply(b,a.children):c.push.apply(c,a.children),a=c.pop();return b},_build:function(a,b,c,e){var d=c-b+1,g=this._maxEntries;
if(d<=g){var f=q(a.slice(b,c+1));p(f,this.toBBox);return f}e||(e=Math.ceil(Math.log(d)/Math.log(g)),g=Math.ceil(d/Math.pow(g,e-1)));f=q([]);f.leaf=!1;f.height=e;d=Math.ceil(d/g);g=d*Math.ceil(Math.sqrt(g));var h;for(C(a,b,c,g,this.compareMinX);b<=c;b+=g){var k=Math.min(b+g-1,c);C(a,b,k,d,this.compareMinY);for(h=b;h<=k;h+=d){var l=Math.min(h+d-1,k);f.children.push(this._build(a,h,l,e-1))}}p(f,this.toBBox);return f},_chooseSubtree:function(a,b,c,e){for(var d,g,f,h,k,l,m,n;;){e.push(b);if(b.leaf||e.length-
1===c)break;m=n=Infinity;d=0;for(g=b.children.length;d<g;d++)f=b.children[d],k=y(f),l=(Math.max(f.maxX,a.maxX)-Math.min(f.minX,a.minX))*(Math.max(f.maxY,a.maxY)-Math.min(f.minY,a.minY))-k,l<n?(n=l,m=k<m?k:m,h=f):l===n&&k<m&&(m=k,h=f);b=h||b.children[0]}return b},_insert:function(a,b,c){var e=this.toBBox;c=c?a:e(a);e=[];var d=this._chooseSubtree(c,this.data,b,e);d.children.push(a);for(t(d,c);0<=b;)if(e[b].children.length>this._maxEntries)this._split(e,b),b--;else break;this._adjustParentBBoxes(c,e,
b)},_split:function(a,b){var c=a[b],e=c.children.length,d=this._minEntries;this._chooseSplitAxis(c,d,e);e=this._chooseSplitIndex(c,d,e);e=q(c.children.splice(e,c.children.length-e));e.height=c.height;e.leaf=c.leaf;p(c,this.toBBox);p(e,this.toBBox);b?a[b-1].children.push(e):this._splitRoot(c,e)},_splitRoot:function(a,b){this.data=q([a,b]);this.data.height=a.height+1;this.data.leaf=!1;p(this.data,this.toBBox)},_chooseSplitIndex:function(a,b,c){var e,d;var g=d=Infinity;for(e=b;e<=c-b;e++){var f=r(a,
0,e,this.toBBox);var h=r(a,e,c,this.toBBox);var k=Math.max(0,Math.min(f.maxX,h.maxX)-Math.max(f.minX,h.minX))*Math.max(0,Math.min(f.maxY,h.maxY)-Math.max(f.minY,h.minY));f=y(f)+y(h);if(k<g){g=k;var l=e;d=f<d?f:d}else k===g&&f<d&&(d=f,l=e)}return l},_chooseSplitAxis:function(a,b,c){var e=a.leaf?this.compareMinX:A,d=a.leaf?this.compareMinY:B,g=this._allDistMargin(a,b,c,e);b=this._allDistMargin(a,b,c,d);g<b&&a.children.sort(e)},_allDistMargin:function(a,b,c,e){a.children.sort(e);e=this.toBBox;var d=
r(a,0,b,e),g=r(a,c-b,c,e),f=v(d)+v(g),h;for(h=b;h<c-b;h++){var k=a.children[h];t(d,a.leaf?e(k):k);f+=v(d)}for(h=c-b-1;h>=b;h--)k=a.children[h],t(g,a.leaf?e(k):k),f+=v(g);return f},_adjustParentBBoxes:function(a,b,c){for(;0<=c;c--)t(b[c],a)},_condense:function(a){for(var b=a.length-1,c;0<=b;b--)0===a[b].children.length?0<b?(c=a[b-1].children,c.splice(c.indexOf(a[b]),1)):this.clear():p(a[b],this.toBBox)},_initFormat:function(a){var b=["return a"," - b",";"];this.compareMinX=new Function("a","b",b.join(a[0]));
this.compareMinY=new Function("a","b",b.join(a[1]));this.toBBox=new Function("a","return {minX: a"+a[0]+", minY: a"+a[1]+", maxX: a"+a[2]+", maxY: a"+a[3]+"};")}};D.rbush=u});