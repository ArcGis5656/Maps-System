// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/promiseUtils ../core/unitUtils ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./DistanceMeasurement2D/DistanceMeasurement2DViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ../core/Logger ./support/jsxFactory ./support/widgetUtils".split(" "),
function(D,d,E,F,k,c,O,P,g,G,H,v,w,x,Q,a,R){c=function(y){function q(b,e){b=y.call(this,b,e)||this;b.iconClass="esri-icon-measure-line";b.label=void 0;b.messages=null;b.messagesUnits=null;b.unit=null;b.unitOptions=null;b.view=null;b.viewModel=new v;return b}D._inheritsLoose(q,y);var r=q.prototype;r.render=function(){const {id:b,messages:e,messagesUnits:z,viewModel:I,visible:J}=this,{active:A,supported:B,measurementLabel:K,state:m,unit:L,unitOptions:M}=I;var n="disabled"===m;const p="measuring"===
m||"measured"===m;var t=A&&"ready"===m?a.tsx("section",{key:"hint",class:"esri-distance-measurement-2d__hint"},a.tsx("p",{class:"esri-distance-measurement-2d__hint-text"},e.hint)):null;const N=B?null:a.tsx("section",{key:"unsupported",class:"esri-distance-measurement-2d__panel--error"},a.tsx("p",null,e.unsupported));var u=(f,l,C)=>l?a.tsx("div",{key:`${C}-enabled`,class:"esri-distance-measurement-2d__measurement-item"},a.tsx("span",{class:"esri-distance-measurement-2d__measurement-item-title"},f),
a.tsx("span",{class:"esri-distance-measurement-2d__measurement-item-value"},l)):a.tsx("div",{key:`${C}-disabled`,class:this.classes("esri-distance-measurement-2d__measurement-item","esri-distance-measurement-2d__measurement-item--disabled"),"aria-disabled":"true"},a.tsx("span",{class:"esri-distance-measurement-2d__measurement-item-title"},f));u=p?a.tsx("section",{key:"measurement",class:"esri-distance-measurement-2d__measurement"},u(e.distance,K,"distance")):null;var h=`${b}-units`;h=p?a.tsx("section",
{key:"units",class:"esri-distance-measurement-2d__units"},a.tsx("label",{class:"esri-distance-measurement-2d__units-label",for:h},e.unit),a.tsx("div",{class:"esri-distance-measurement-2d__units-select-wrapper"},a.tsx("select",{class:"esri-distance-measurement-2d__units-select esri-select",id:h,onchange:this._changeUnit,bind:this,value:L},M.map(f=>{var l;return a.tsx("option",{key:f,value:f},F.isMeasurementSystem(f)?z.systems[f]:null==(l=z.units[f])?void 0:l.pluralCapitalized)})))):null;h=p?a.tsx("div",
{key:"settings",class:"esri-distance-measurement-2d__settings"},h):null;n=!B||A&&!p?null:a.tsx("div",{class:"esri-distance-measurement-2d__actions"},a.tsx("button",{disabled:n,class:this.classes("esri-distance-measurement-2d__clear-button esri-button esri-button--primary",n&&"esri-button--disabled"),bind:this,onclick:this._newMeasurement,title:e.newMeasurement,"aria-label":e.newMeasurement,type:"button"},e.newMeasurement));t=J?a.tsx("div",{class:"esri-distance-measurement-2d__container"},N,t,h,u,
n):null;return a.tsx("div",{class:"esri-distance-measurement-2d esri-widget esri-widget--panel"},t)};r._newMeasurement=function(){E.ignoreAbortErrors(this.viewModel.start())};r._changeUnit=function(b){b=b.target;if(b=b.options[b.selectedIndex])this.viewModel.unit=b.value};return q}(H);d.__decorate([k.aliasOf("viewModel.active")],c.prototype,"active",void 0);d.__decorate([g.property()],c.prototype,"iconClass",void 0);d.__decorate([g.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],
c.prototype,"label",void 0);d.__decorate([g.property()],c.prototype,"uiStrings",void 0);d.__decorate([g.property(),x.messageBundle("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],c.prototype,"messages",void 0);d.__decorate([g.property(),x.messageBundle("esri/core/t9n/Units")],c.prototype,"messagesUnits",void 0);d.__decorate([k.aliasOf("viewModel.unit")],c.prototype,"unit",void 0);d.__decorate([k.aliasOf("viewModel.unitOptions")],c.prototype,"unitOptions",void 0);d.__decorate([k.aliasOf("viewModel.view")],
c.prototype,"view",void 0);d.__decorate([g.property({type:v})],c.prototype,"viewModel",void 0);d.__decorate([k.aliasOf("viewModel.visible")],c.prototype,"visible",void 0);d.__decorate([w.accessibleHandler()],c.prototype,"_newMeasurement",null);d.__decorate([w.accessibleHandler()],c.prototype,"_changeUnit",null);return c=d.__decorate([G.subclass("esri.widgets.DistanceMeasurement2D")],c)});