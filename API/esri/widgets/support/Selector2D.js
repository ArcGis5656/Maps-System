// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/HandleOwner ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./Selector2D/SelectionOperation2D ./Selector2D/selectorUtils".split(" "),function(l,c,b,q,r,f,y,z,A,t,u,v){b=function(m){function g(a){a=m.call(this,a)||this;a._defaultSelectionOptions={intersects:!0,
overlaps:!0,contains:!0};a.candidates=null;a.options=null;a.view=null;return a}l._inheritsLoose(g,m);var n=g.prototype;n.draw=function(a){const {_defaultSelectionOptions:d,candidates:e,options:h,view:k}=this;return new u({candidates:e,options:{...a,selectionOptions:{...d,...h,...null==a?void 0:a.selectionOptions}},view:k})};n.selectionFrom=function(){var a=l._asyncToGenerator(function*(d,e){const {_defaultSelectionOptions:h,candidates:k,options:w,view:x}=this,p=new q;yield v.updateSelection({selector:d,
candidates:k,currentSelection:p,options:{...h,...w,...e},view:x});return p.toArray()});return function(d,e){return a.apply(this,arguments)}}();return g}(r.HandleOwnerMixin(b));c.__decorate([f.property()],b.prototype,"candidates",void 0);c.__decorate([f.property()],b.prototype,"options",void 0);c.__decorate([f.property({value:null})],b.prototype,"view",void 0);return b=c.__decorate([t.subclass("esri.widgets.support.Selector2D")],b)});