// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../Widget ../css ./LegendItem ../../support/widgetUtils ../../../core/Logger ../../support/jsxFactory".split(" "),function(b,k,e,l,m,f,u,v,w,n,p,q,r,x,y,t){b.Legend=function(h){function g(a,
c){a=h.call(this,a,c)||this;a._items=new l;a._expandedLine=null;return a}k._inheritsLoose(g,h);var d=g.prototype;d.initialize=function(){this.own([m.init(this,"profiles",a=>{this._destroyItems();this._items.addMany(a.map(c=>this._createItemForLine(c)))}),this.watch("effectiveUnits",a=>{this._items.forEach(c=>{c.effectiveUnits=a})})])};d.destroy=function(){this._destroyItems()};d.render=function(){return t.tsx("div",{class:q.LEGEND_CSS.base},this._items.toArray().map(a=>a.render()))};d._onExpandedToggle=
function(a){this._expandedLine=a===this._expandedLine?null:a;this._items.forEach(c=>c.expanded=c.line===this._expandedLine)};d._createItemForLine=function(a){return new r.LegendItem({line:a,effectiveUnits:this.effectiveUnits,expanded:a===this._expandedLine,checkboxVisible:1<this.profiles.length,onExpandedToggle:()=>this._onExpandedToggle(a)})};d._destroyItems=function(){this._items.drain(a=>a.destroy())};return g}(p);e.__decorate([f.property()],b.Legend.prototype,"profiles",void 0);e.__decorate([f.property()],
b.Legend.prototype,"effectiveUnits",void 0);e.__decorate([f.property()],b.Legend.prototype,"_items",void 0);e.__decorate([f.property()],b.Legend.prototype,"_expandedLine",void 0);b.Legend=e.__decorate([n.subclass("esri.widgets.ElevationProfile.Legend")],b.Legend);Object.defineProperty(b,"__esModule",{value:!0})});