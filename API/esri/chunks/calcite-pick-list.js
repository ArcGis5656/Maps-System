// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./resources3 ./dom ./array2 ./debounce ./observers ./icon ./input ./loader ./progress ./scrim ./forIn".split(" "),function(x,g,t,q,G,y,H,z,A,B,C,D,I){function J(){this.setUpItems();this.setUpFilter();this.deselectRemovedItems()}function K(a){return!!L.find(c=>c===a)}function M(a){const {el:c,items:b,multiple:f,selectedValues:e}=this;f||c.contains(a.relatedTarget)||b.forEach(d=>{l(d,0===e.size?d.contains(a.target)||a.target===d:d.selected)})}function N(a){const {key:c,
target:b}=a;if(K(c)){var {items:f,multiple:e,selectionFollowsFocus:d}=this,{length:h}=f,u=f.indexOf(b);if(h&&-1!==u){a.preventDefault();a=G.getRoundRobinIndex(u+("ArrowUp"===c?-1:1),h);var m=f[a];f.forEach(n=>l(n,n===m));!e&&d&&(m.selected=!0);q.focusElement(m)}}}function O(){this.calciteListChange.emit(this.selectedValues)}function P(a){if(!a.defaultPrevented){a=a.target;var c=this.selectedValues;"CALCITE-PICK-LIST-GROUP"===a.parentElement.tagName?(a.parentElement.remove(),Array.from(a.parentElement.children).forEach(b=>
c.delete(b.value))):(a.remove(),c.delete(a.value));this.emitCalciteListChange()}}function l(a,c){c?a.removeAttribute("tabindex"):a.setAttribute("tabindex","-1")}async function Q(a){if(this.filterEnabled&&"filter"===a)await q.focusElement(this.filterEl);else{var {items:c,multiple:b,selectionFollowsFocus:f}=this;if(0!==c.length){if(b)return c[0].setFocus();a=c.find(e=>e.selected)||c[0];f&&(a.selected=!0);return a.setFocus()}}}function R(a){this.items=Array.from(this.el.querySelectorAll(a));let c=!1;
({items:a}=this);a.forEach(b=>{b.icon=this.getIconType();this.multiple||(b.disableDeselect=!0,l(b,!1));b.selected&&(c=!0,l(b,!0),this.selectedValues.set(b.value,b))});[a]=a;!c&&a&&l(a,!0)}function S(){const a=this.selectedValues,c=this.items.map(({value:b})=>b);a.forEach(b=>{c.includes(b.value)||this.selectedValues.delete(b.value)})}function T(a){this.items.forEach(c=>{c.value!==a.value&&(c.toggleSelected(!1),this.selectedValues.has(c.value)&&this.selectedValues.delete(c.value))})}function U(a,c=
!1){if(this.lastSelectedItem){var {items:b}=this,f=b.findIndex(d=>d.value===this.lastSelectedItem.value),e=b.findIndex(d=>d.value===a.value);b.slice(Math.min(f,e),Math.max(f,e)).forEach(d=>{d.toggleSelected(!c);c?this.selectedValues.delete(d.value):this.selectedValues.set(d.value,d)})}}function V(a){({filteredItems:a}=a.currentTarget);const c=a.map(e=>e.value);let b=!1;r||(r=new Set);const f=this.items.filter(e=>{var d=e.parentElement;d.matches("calcite-pick-list-group")&&r.add(d);d=c.includes(e.value);
e.hidden=!d;b||(b=d&&e.selected);return d});r.forEach(e=>{var d=f.some(h=>e.contains(h));e.hidden=!d;d&&(d=q.getSlotted(e,"parent-item"))&&(d.hidden=!1,f.includes(d)&&Array.from(e.children).forEach(h=>h.hidden=!1))});r.clear();0<f.length&&!b&&!this.multiple&&l(f[0],!0)}function W(){return this.items.map(a=>({label:a.label,description:a.description,metadata:a.metadata,value:a.value}))}function E(){"undefined"!==typeof customElements&&"calcite-filter calcite-icon calcite-input calcite-loader calcite-progress calcite-scrim".split(" ").forEach(a=>
{switch(a){case "calcite-filter":customElements.get(a)||customElements.define(a,w);break;case "calcite-icon":customElements.get(a)||z.defineCustomElement();break;case "calcite-input":customElements.get(a)||A.defineCustomElement();break;case "calcite-loader":customElements.get(a)||B.defineCustomElement();break;case "calcite-progress":customElements.get(a)||C.defineCustomElement();break;case "calcite-scrim":customElements.get(a)||D.defineCustomElement()}})}function F(){"undefined"!==typeof customElements&&
"calcite-pick-list calcite-filter calcite-icon calcite-input calcite-loader calcite-progress calcite-scrim".split(" ").forEach(a=>{switch(a){case "calcite-pick-list":customElements.get(a)||customElements.define(a,v);break;case "calcite-filter":customElements.get(a)||E();break;case "calcite-icon":customElements.get(a)||z.defineCustomElement();break;case "calcite-input":customElements.get(a)||A.defineCustomElement();break;case "calcite-loader":customElements.get(a)||B.defineCustomElement();break;case "calcite-progress":customElements.get(a)||
C.defineCustomElement();break;case "calcite-scrim":customElements.get(a)||D.defineCustomElement()}})}const L=["ArrowUp","ArrowDown"];let r;const X=a=>{var {props:{disabled:c,loading:b,filterEnabled:f,dataForFilter:e,handleFilter:d,filterPlaceholder:h,setFilterEl:u}}=a,m=["props"],n={},k;for(k in a)Object.prototype.hasOwnProperty.call(a,k)&&0>m.indexOf(k)&&(n[k]=a[k]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var p=0;for(k=Object.getOwnPropertySymbols(a);p<k.length;p++)0>m.indexOf(k[p])&&
Object.prototype.propertyIsEnumerable.call(a,k[p])&&(n[k[p]]=a[k[p]])}a=g.h("slot",null);return g.h(g.Host,Object.assign({"aria-busy":b.toString(),"aria-disabled":c.toString(),role:"menu"},n),g.h("section",null,g.h("header",{class:{[t.CSS.sticky]:!0}},f?g.h("calcite-filter",{"aria-label":h,disabled:b||c,items:e,onCalciteFilterChange:d,placeholder:h,ref:u}):null,g.h("slot",{name:t.SLOTS.menuActions})),b||c?g.h("calcite-scrim",{loading:b}):null,a))};let w=class extends g.H{constructor(){super();this.__registerHost();
this.__attachShadow();this.calciteFilterChange=g.createEvent(this,"calciteFilterChange",7);this.disabled=!1;this.filteredItems=[];this.scale="m";this.filter=y.debounce(a=>{const c=new RegExp(a,"i");if(0===this.items.length)this.updateFiltered([]);else{var b=(f,e)=>{let d=!1;I.forIn(f,h=>{"function"!==typeof h&&(Array.isArray(h)||"object"===typeof h&&null!==h?b(h,e)&&(d=!0):e.test(h)&&(d=!0))});return d};a=this.items.filter(f=>b(f,c));this.updateFiltered(a)}},250);this.inputHandler=a=>{this.value=
a.target.value};this.keyDownHandler=({key:a})=>{"Escape"===a&&this.clear()};this.clear=()=>{this.value="";this.setFocus()}}watchItemsHandler(){this.filter(this.value)}valueHandler(a){this.filter(a)}async setFocus(){q.focusElement(this.textInput)}updateFiltered(a){this.filteredItems.length=0;this.filteredItems=this.filteredItems.concat(a);this.calciteFilterChange.emit()}render(){const {disabled:a,scale:c}=this;return g.h(g.Fragment,null,a?g.h("calcite-scrim",null):null,g.h("div",{class:"container"},
g.h("label",null,g.h("calcite-input",{"aria-label":this.intlLabel||"Filter",disabled:this.disabled,icon:"search",onCalciteInputInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,ref:b=>{this.textInput=b},scale:c,type:"text",value:this.value})),this.value?g.h("button",{"aria-label":this.intlClear||"Clear filter",class:"clear-button",onClick:this.clear},g.h("calcite-icon",{icon:"x",scale:c})):null))}get el(){return this}static get watchers(){return{items:["watchItemsHandler"],
value:["valueHandler"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;width:100%}.container{display:-ms-flexbox;display:flex;width:100%;padding:0.5rem}label{position:relative;margin-left:0.25rem;margin-right:0.25rem;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;overflow:hidden}input[type\x3dtext]{margin-bottom:0.25rem;width:100%;border-style:none;background-color:transparent;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:0.25rem;padding-left:1.5rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);-webkit-transition:padding var(--calcite-animation-timing), -webkit-box-shadow var(--calcite-animation-timing);transition:padding var(--calcite-animation-timing), -webkit-box-shadow var(--calcite-animation-timing);transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing);transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing), -webkit-box-shadow var(--calcite-animation-timing)}input[type\x3dtext]::-ms-clear{display:none}calcite-input{width:100%}.search-icon{position:absolute;display:-ms-flexbox;display:flex;color:var(--calcite-ui-text-2);inset-inline-start:0;-webkit-transition:left var(--calcite-animation-timing), right var(--calcite-animation-timing), opacity var(--calcite-animation-timing);transition:left var(--calcite-animation-timing), right var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type\x3dtext]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type\x3dtext]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-ui-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}"}};
w=g.proxyCustomElement(w,[1,"calcite-filter",{items:[1040],disabled:[516],filteredItems:[1040],intlClear:[1,"intl-clear"],intlLabel:[1,"intl-label"],placeholder:[1],scale:[513],value:[1025],setFocus:[64]}]);E();let v=class extends g.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteListChange=g.createEvent(this,"calciteListChange",7);this.selectionFollowsFocus=this.multiple=this.loading=this.filterEnabled=this.disabled=!1;this.selectedValues=new Map;this.dataForFilter=
[];this.lastSelectedItem=null;this.mutationObserver=H.createObserver("mutation",J.bind(this));this.setFilterEl=a=>{this.filterEl=a};this.deselectRemovedItems=S.bind(this);this.deselectSiblingItems=T.bind(this);this.selectSiblings=U.bind(this);this.handleFilter=V.bind(this);this.getItemData=W.bind(this);this.keyDownHandler=N.bind(this)}connectedCallback(){this.setUpItems();this.setUpFilter();this.emitCalciteListChange=y.debounce(O.bind(this),0);var a;null===(a=this.mutationObserver)||void 0===a?void 0:
a.observe(this.el,{childList:!0,subtree:!0})}disconnectedCallback(){var a;null===(a=this.mutationObserver)||void 0===a?void 0:a.disconnect()}calciteListItemRemoveHandler(a){P.call(this,a)}calciteListItemChangeHandler(a){{const {selectedValues:c}=this,{item:b,value:f,selected:e,shiftPressed:d}=a.detail;e?(this.multiple&&d&&this.selectSiblings(b),this.multiple||this.deselectSiblingItems(b),c.set(f,b)):(c.delete(f),this.multiple&&d&&this.selectSiblings(b,!0));this.multiple||(l(b,e),e&&q.focusElement(b));
this.lastSelectedItem=b;this.emitCalciteListChange()}}calciteListItemPropsChangeHandler(a){a.stopPropagation();this.setUpFilter()}calciteListItemValueChangeHandler(a){{a.stopPropagation();const c=a.detail.oldValue,b=this.selectedValues;if(b.has(c)){const f=b.get(c);b.delete(c);b.set(a.detail.newValue,f)}}}calciteListFocusOutHandler(a){M.call(this,a)}setUpItems(){R.call(this,"calcite-pick-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}async getSelectedItems(){return this.selectedValues}async setFocus(a){return Q.call(this,
a)}getIconType(){return this.multiple?t.ICON_TYPES.square:t.ICON_TYPES.circle}render(){return g.h(X,{onKeyDown:this.keyDownHandler,props:this})}get el(){return this}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host([filter-enabled]) header{margin-bottom:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:end;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:-webkit-sticky;position:sticky;top:0px;z-index:1}calcite-filter{margin-bottom:0px}:host([loading][disabled]){min-height:2rem}"}};
v=g.proxyCustomElement(v,[1,"calcite-pick-list",{disabled:[516],filterEnabled:[516,"filter-enabled"],filterPlaceholder:[513,"filter-placeholder"],headingLevel:[2,"heading-level"],loading:[516],multiple:[516],selectionFollowsFocus:[4,"selection-follows-focus"],selectedValues:[32],dataForFilter:[32],getSelectedItems:[64],setFocus:[64]},[[0,"calciteListItemRemove","calciteListItemRemoveHandler"],[0,"calciteListItemChange","calciteListItemChangeHandler"],[0,"calciteListItemPropsChange","calciteListItemPropsChangeHandler"],
[0,"calciteListItemValueChange","calciteListItemValueChangeHandler"],[0,"focusout","calciteListFocusOutHandler"]]]);F();x.CalcitePickList=v;x.defineCustomElement=F});