// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/events ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./support/widgetUtils ./support/decorators/messageBundle ../core/Logger ./support/jsxFactory ./Swipe/SwipeViewModel".split(" "),function(r,e,z,t,d,D,E,n,A,B,F,C,G,p,w){const x={handle:!0,divider:!0};d=function(y){function u(a,
b){a=y.call(this,a,b)||this;a.direction=null;a.disabled=!1;a.dragLabel=void 0;a.iconClass="esri-icon-up-down-arrows";a.label=void 0;a.leadingLayers=null;a.messages=null;a.position=null;a.trailingLayers=null;a.view=null;a.viewModel=new w;a._pointerOffset=null;a._container=null;a._onContainerPointerDown=a._onContainerPointerDown.bind(r._assertThisInitialized(a));a._onContainerPointerMove=a._onContainerPointerMove.bind(r._assertThisInitialized(a));a._onContainerPointerUp=a._onContainerPointerUp.bind(r._assertThisInitialized(a));
return a}r._inheritsLoose(u,y);var f=u.prototype;f.render=function(){const {state:a,direction:b}=this.viewModel,c="disabled"===a||this.disabled;return p.tsx("div",{class:this.classes("esri-swipe","esri-widget",{["esri-disabled"]:c,["esri-swipe--disabled"]:c,["esri-swipe--vertical"]:"vertical"===b,["esri-swipe--horizontal"]:"horizontal"===b})},"disabled"===a?null:this.renderContainer())};f.renderHandle=function(){var {direction:a}=this.viewModel,{visibleElements:b}=this;a={["esri-icon-drag-horizontal"]:"vertical"===
a,["esri-icon-drag-vertical"]:"horizontal"===a};b=this.classes("esri-swipe__handle",!b.handle&&"esri-swipe__handle--hidden");return p.tsx("div",{key:"handle",role:"presentation",class:b},p.tsx("span",{"aria-hidden":"true",class:this.classes("esri-swipe__handle-icon",a)}))};f.renderDivider=function(){const {visibleElements:a}=this;return a&&a.divider?p.tsx("div",{key:"divider",role:"presentation",class:"esri-swipe__divider"}):null};f.renderContent=function(){return[this.renderDivider(),this.renderHandle()]};
f.renderContainer=function(){const {disabled:a,dragLabel:b,viewModel:c}=this,{max:h,min:m,direction:k,position:q}=c,g=`${q}%`,l={top:"vertical"===k?g:null,left:"vertical"===k?null:g},v=this.renderContent();return a?p.tsx("div",{key:"container",role:"presentation",styles:l,class:"esri-swipe__container"},v):p.tsx("div",{tabIndex:0,key:"container",bind:this,afterCreate:this._afterContainerCreate,onkeydown:this._onContainerKeyDown,"touch-action":"none",role:"slider",title:b,"aria-label":b,"aria-orientation":k,
"aria-valuemax":`${h}`,"aria-valuemin":`${m}`,"aria-valuenow":`${q}`,"aria-valuetext":g,styles:l,class:"esri-swipe__container"},v)};f._afterContainerCreate=function(a){this._container=a;a.addEventListener("pointerdown",this._onContainerPointerDown)};f._calculatePointerOffset=function(a){const {direction:b}=this;var c=a.target;const h=("vertical"===b?c.clientHeight:c.clientWidth)/2,m=c.getBoundingClientRect();c=a.clientX-m.left;a=a.clientY-m.top;this._pointerOffset="vertical"===b?a-h:c-h};f._onContainerPointerDown=
function(a){a.preventDefault();this._container&&document.activeElement!==this.container&&this._container.focus();this._calculatePointerOffset(a);document.addEventListener("pointerup",this._onContainerPointerUp);document.addEventListener("pointermove",this._onContainerPointerMove)};f._onContainerPointerUp=function(a){a.preventDefault();document.removeEventListener("pointerup",this._onContainerPointerUp);document.removeEventListener("pointermove",this._onContainerPointerMove)};f._onContainerPointerMove=
function(a){a.preventDefault();const {_pointerOffset:b,container:c,direction:h}=this,{clientX:m,clientY:k}=a,{top:q,left:g,width:l,height:v}=c.getBoundingClientRect();this.position=("vertical"===h?k-q-b:m-g-b)/("vertical"===h?v:l)*100};f._getKeyPosition=function(a){const b=z.eventKey(a),{position:c}=this,{max:h,min:m,step:k,stepMultiplier:q,direction:g}=this.viewModel,l=k*q;-1<"ArrowUp ArrowDown ArrowLeft ArrowRight Home End PageUp PageDown".split(" ").indexOf(b)&&(a.preventDefault(),a.stopPropagation());
return("vertical"===g?"ArrowDown"===b||"ArrowRight"===b:"ArrowUp"===b||"ArrowRight"===b)?c+(a.shiftKey?l:k):("vertical"===g?"ArrowUp"===b||"ArrowLeft"===b:"ArrowDown"===b||"ArrowLeft"===b)?c-(a.shiftKey?l:k):"Home"===b?m:"End"===b?h:("vertical"===g?"PageDown"===b:"PageUp"===b)?c+l:("vertical"===g?"PageUp"===b:"PageDown"===b)?c-l:null};f._onContainerKeyDown=function(a){a=this._getKeyPosition(a);"number"===typeof a&&(this.position=a)};r._createClass(u,[{key:"visibleElements",get:function(){return this._get("visibleElements")||
x},set:function(a){this._set("visibleElements",{...x,...a})}}]);return u}(B);e.__decorate([t.aliasOf("viewModel.direction")],d.prototype,"direction",void 0);e.__decorate([n.property()],d.prototype,"disabled",void 0);e.__decorate([n.property({aliasOf:{source:"messages.dragLabel",overridable:!0}})],d.prototype,"dragLabel",void 0);e.__decorate([n.property()],d.prototype,"iconClass",void 0);e.__decorate([n.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],d.prototype,"label",void 0);
e.__decorate([t.aliasOf("viewModel.leadingLayers")],d.prototype,"leadingLayers",void 0);e.__decorate([n.property(),C.messageBundle("esri/widgets/Swipe/t9n/Swipe")],d.prototype,"messages",void 0);e.__decorate([t.aliasOf("viewModel.position")],d.prototype,"position",void 0);e.__decorate([t.aliasOf("viewModel.trailingLayers")],d.prototype,"trailingLayers",void 0);e.__decorate([t.aliasOf("viewModel.view")],d.prototype,"view",void 0);e.__decorate([n.property({type:w})],d.prototype,"viewModel",void 0);
e.__decorate([n.property()],d.prototype,"visibleElements",null);return d=e.__decorate([A.subclass("esri.widgets.Swipe")],d)});