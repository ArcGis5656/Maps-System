// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["./chunks/_rollupPluginBabelHelpers","./colorUtils","./core/mathUtils","./core/maybe","./core/accessorSupport/ensureType"],function(q,m,r,n,t){function h(b){return r.clamp(t.ensureInteger(b),0,255)}function k(b,f,a){b=Number(b);return isNaN(b)?a:b<f?f:b>a?a:b}let l=function(){function b(a){this.b=this.g=this.r=255;this.a=1;a&&this.setColor(a)}b.blendColors=function(a,d,c,e=new b){e.r=Math.round(a.r+(d.r-a.r)*c);e.g=Math.round(a.g+(d.g-a.g)*c);e.b=Math.round(a.b+(d.b-a.b)*c);e.a=a.a+(d.a-a.a)*
c;return e._sanitize()};b.fromRgb=function(a,d){var c=a.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(c){a=c[2].split(/\s*,\s*/);c=c[1];if("rgb"===c&&3===a.length||"rgba"===c&&4===a.length)return c=a[0],"%"===c.charAt(c.length-1)?(c=a.map(e=>2.56*parseFloat(e)),4===a.length&&(c[3]=parseFloat(a[3])),b.fromArray(c,d)):b.fromArray(a.map(e=>parseFloat(e)),d);if("hsl"===c&&3===a.length||"hsla"===c&&4===a.length)return b.fromArray(m.hsla2rgba(parseFloat(a[0]),parseFloat(a[1])/100,parseFloat(a[2])/
100,parseFloat(a[3])),d)}return null};b.fromHex=function(a,d=new b){if(4!==a.length&&7!==a.length||"#"!==a[0])return null;const c=4===a.length?4:8,e=(1<<c)-1;let g=Number("0x"+a.substr(1));if(isNaN(g))return null;["b","g","r"].forEach(u=>{const p=g&e;g>>=c;d[u]=4===c?17*p:p});d.a=1;return d};b.fromArray=function(a,d=new b){d._set(Number(a[0]),Number(a[1]),Number(a[2]),Number(a[3]));isNaN(d.a)&&(d.a=1);return d._sanitize()};b.fromString=function(a,d){const c=m.isNamedColor(a)?m.getNamedColor(a):null;
return c&&b.fromArray(c,d)||b.fromRgb(a,d)||b.fromHex(a,d)};b.fromJSON=function(a){return a&&new b([a[0],a[1],a[2],a[3]/255])};b.toUnitRGB=function(a){return n.isSome(a)?[a.r/255,a.g/255,a.b/255]:null};b.toUnitRGBA=function(a){return n.isSome(a)?[a.r/255,a.g/255,a.b/255,null!=a.a?a.a:1]:null};var f=b.prototype;f.setColor=function(a){if("string"===typeof a)b.fromString(a,this);else if(Array.isArray(a))b.fromArray(a,this);else{var d,c,e,g;this._set(null!=(d=a.r)?d:0,null!=(c=a.g)?c:0,null!=(e=a.b)?
e:0,null!=(g=a.a)?g:1);a instanceof b||this._sanitize()}return this};f.toRgb=function(){return[this.r,this.g,this.b]};f.toRgba=function(){return[this.r,this.g,this.b,this.a]};f.toHex=function(){const a=this.r.toString(16),d=this.g.toString(16),c=this.b.toString(16);return`#${2>a.length?"0"+a:a}${2>d.length?"0"+d:d}${2>c.length?"0"+c:c}`};f.toCss=function(a=!1){const d=this.r+", "+this.g+", "+this.b;return a?`rgba(${d}, ${this.a})`:`rgb(${d})`};f.toString=function(){return this.toCss(!0)};f.toJSON=
function(){return this.toArray()};f.toArray=function(a=b.AlphaMode.ALWAYS){const d=h(this.r),c=h(this.g),e=h(this.b);return a===b.AlphaMode.ALWAYS||1!==this.a?[d,c,e,h(255*this.a)]:[d,c,e]};f.clone=function(){return new b(this.toRgba())};f.hash=function(){return this.r<<24|this.g<<16|this.b<<8|255*this.a};f.equals=function(a){return n.isSome(a)&&a.r===this.r&&a.g===this.g&&a.b===this.b&&a.a===this.a};f._sanitize=function(){this.r=Math.round(k(this.r,0,255));this.g=Math.round(k(this.g,0,255));this.b=
Math.round(k(this.b,0,255));this.a=k(this.a,0,1);return this};f._set=function(a,d,c,e){this.r=a;this.g=d;this.b=c;this.a=e};q._createClass(b,[{key:"isBright",get:function(){return 127<=.299*this.r+.587*this.g+.114*this.b}}]);return b}();l.prototype.declaredClass="esri.Color";(function(b){b=b.AlphaMode||(b.AlphaMode={});b[b.ALWAYS=0]="ALWAYS";b[b.UNLESS_OPAQUE=1]="UNLESS_OPAQUE"})(l||(l={}));return l});