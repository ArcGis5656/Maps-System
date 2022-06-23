// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./Expand/ExpandViewModel ./support/widget ./support/decorators/messageBundle ./support/decorators/accessibleHandler ./support/jsxFactory".split(" "),function(p,d,l,c,A,B,g,w,x,t,q,u,y,h){c=function(v){function m(b,e){var a=v.call(this,
b,e)||this;a.autoCollapse=null;a.closeOnEsc=!0;a.collapseTooltip="";a.content="";a.expanded=null;a.expandTooltip="";a.group=null;a.iconNumber=0;a.label=void 0;a.messages=null;a.messagesCommon=null;a.mode="auto";a.view=null;a.viewModel=new t;a._handleKeyDown=k=>{const {closeOnEsc:n,_toggleButtonEl:r,expanded:z}=p._assertThisInitialized(a);z&&n&&k.target!==r&&"Escape"===k.key&&("function"===typeof n?n(k):n)&&(a.expanded=!1,null==r?void 0:r.focus())};return a}p._inheritsLoose(m,v);var f=m.prototype;
f.expand=function(){this.viewModel.expanded=!0};f.collapse=function(){this.viewModel.expanded=!1};f.toggle=function(){this.viewModel.expanded=!this.viewModel.expanded};f.render=function(){const {mode:b}=this;return h.tsx("div",{class:this.classes("esri-expand esri-widget",{["esri-expand--auto"]:"auto"===b,["esri-expand--drawer"]:"drawer"===b,["esri-expand--floating"]:"floating"===b}),onkeydown:this._handleKeyDown},this.renderMask(),this.renderContainer())};f.renderContainer=function(){const {expanded:b}=
this;return h.tsx("div",{class:this.classes("esri-expand__container",{["esri-expand__container--expanded"]:b})},this.renderPanel(),this.renderContent())};f.renderMask=function(){const {expanded:b}=this;return h.tsx("div",{bind:this,onclick:this._toggle,class:this.classes("esri-expand__mask",{["esri-expand__mask--expanded"]:b})})};f.renderBadgeNumber=function(){const {expanded:b,iconNumber:e}=this;return e&&!b?h.tsx("span",{key:"expand__icon-number",class:"esri-expand__icon-number"},e):null};f.renderPanelNumber=
function(){const {iconNumber:b,expanded:e}=this;return b&&e?h.tsx("span",{key:"expand__expand-icon-number",class:this.classes("esri-expand__icon-number","esri-expand__icon-number--expanded")},b):null};f.renderIcon=function(){const {collapseIconClass:b,expandIconClass:e,expanded:a}=this,k={["esri-expand__icon--expanded"]:a,[b]:a,[e]:!a};b===e&&(k[b]=!0);return h.tsx("span",{"aria-hidden":"true",class:this.classes("esri-collapse__icon",k)})};f.renderTitle=function(){return h.tsx("span",{class:"esri-icon-font-fallback-text"},
this.expandTitle)};f.renderExpandButton=function(){const {expanded:b,expandTitle:e,contentId:a}=this;return h.tsx("div",{afterCreate:this._storeToggleButtonEl,"aria-controls":a,"aria-expanded":b?"true":"false",bind:this,class:"esri-widget--button",onclick:this._toggle,onkeydown:this._toggle,role:"button",tabindex:"0",title:e},this.renderBadgeNumber(),this.renderIcon(),this.renderTitle())};f.renderPanel=function(){return h.tsx("div",{class:"esri-expand__panel"},this.renderExpandButton(),this.renderPanelNumber())};
f.renderContent=function(){const {expanded:b,contentId:e,content:a}=this,k={id:e,role:"region",class:this.classes("esri-expand__content",{["esri-expand__content--expanded"]:b})};return"string"===typeof a?h.tsx("div",{key:"content__string",innerHTML:a,...k}):q.isWidget(a)?h.tsx("div",{key:"content__widget",...k},a.render()):a instanceof HTMLElement?h.tsx("div",{key:"content__html-element",bind:a,afterCreate:this._attachToNode,...k}):q.hasDomNode(a)?h.tsx("div",{key:"content__node",bind:a.domNode,afterCreate:this._attachToNode,
...k}):null};f._toggle=function(){this.toggle()};f._attachToNode=function(b){b.appendChild(this)};f._storeToggleButtonEl=function(b){this._toggleButtonEl=b};p._createClass(m,[{key:"contentId",get:function(){return`${this.id}_controls_content`}},{key:"expandTitle",get:function(){const {expanded:b,messagesCommon:e,collapseTooltip:a,expandTooltip:k}=this;return b?a||e.collapse:k||e.expand}},{key:"collapseIconClass",get:function(){return"esri-icon-collapse"},set:function(b){b?this._override("collapseIconClass",
b):this._clearOverride("collapseIconClass")}},{key:"expandIconClass",get:function(){return q.isWidget(this.content)?this.content.iconClass:"esri-icon-expand"},set:function(b){b?this._override("expandIconClass",b):this._clearOverride("expandIconClass")}}]);return m}(x);d.__decorate([g.property({readOnly:!0})],c.prototype,"contentId",null);d.__decorate([g.property({readOnly:!0})],c.prototype,"expandTitle",null);d.__decorate([l.aliasOf("viewModel.autoCollapse")],c.prototype,"autoCollapse",void 0);d.__decorate([g.property()],
c.prototype,"closeOnEsc",void 0);d.__decorate([g.property()],c.prototype,"collapseIconClass",null);d.__decorate([g.property()],c.prototype,"collapseTooltip",void 0);d.__decorate([g.property()],c.prototype,"content",void 0);d.__decorate([l.aliasOf("viewModel.expanded")],c.prototype,"expanded",void 0);d.__decorate([g.property()],c.prototype,"expandIconClass",null);d.__decorate([g.property()],c.prototype,"expandTooltip",void 0);d.__decorate([l.aliasOf("viewModel.group")],c.prototype,"group",void 0);
d.__decorate([g.property()],c.prototype,"iconNumber",void 0);d.__decorate([g.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],c.prototype,"label",void 0);d.__decorate([g.property(),u.messageBundle("esri/widgets/Expand/t9n/Expand")],c.prototype,"messages",void 0);d.__decorate([g.property(),u.messageBundle("esri/t9n/common")],c.prototype,"messagesCommon",void 0);d.__decorate([g.property()],c.prototype,"mode",void 0);d.__decorate([l.aliasOf("viewModel.view")],c.prototype,"view",void 0);
d.__decorate([g.property({type:t})],c.prototype,"viewModel",void 0);d.__decorate([y.accessibleHandler()],c.prototype,"_toggle",null);return c=d.__decorate([w.subclass("esri.widgets.Expand")],c)});