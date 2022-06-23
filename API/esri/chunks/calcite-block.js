// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./dom ./popover ./conditionalSlot ./action ./action-menu ./icon ./loader ./scrim ./tooltip-manager".split(" "),function(p,b,l,q,r,A,B,t,C,D,E){function u(){"undefined"!==typeof customElements&&["calcite-handle","calcite-icon"].forEach(a=>{switch(a){case "calcite-handle":customElements.get(a)||customElements.define(a,m);break;case "calcite-icon":customElements.get(a)||t.defineCustomElement()}})}function v(){"undefined"!==typeof customElements&&"calcite-block calcite-action calcite-action-menu calcite-handle calcite-icon calcite-loader calcite-popover calcite-scrim calcite-tooltip-manager".split(" ").forEach(a=>
{switch(a){case "calcite-block":customElements.get(a)||customElements.define(a,f);break;case "calcite-action":customElements.get(a)||A.defineCustomElement();break;case "calcite-action-menu":customElements.get(a)||B.defineCustomElement();break;case "calcite-handle":customElements.get(a)||u();break;case "calcite-icon":customElements.get(a)||t.defineCustomElement();break;case "calcite-loader":customElements.get(a)||C.defineCustomElement();break;case "calcite-popover":customElements.get(a)||q.defineCustomElement();
break;case "calcite-scrim":customElements.get(a)||D.defineCustomElement();break;case "calcite-tooltip-manager":customElements.get(a)||E.defineCustomElement()}})}let m=class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteHandleNudge=b.createEvent(this,"calciteHandleNudge",7);this.activated=!1;this.textTitle="handle";this.handleKeyDown=a=>{switch(a.key){case " ":this.activated=!this.activated;break;case "ArrowUp":case "ArrowDown":this.activated&&(a=a.key.toLowerCase().replace("arrow",
""),this.calciteHandleNudge.emit({handle:this.el,direction:a}))}};this.handleBlur=()=>{this.activated=!1}}async setFocus(){this.handleButton.focus()}render(){return b.h("span",{"aria-pressed":this.activated.toString(),class:{["handle"]:!0,["handle--activated"]:this.activated},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,ref:a=>{this.handleButton=a},role:"button",tabindex:"0",title:this.textTitle},b.h("calcite-icon",{icon:"drag",scale:"s"}))}get el(){return this}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex}.handle{display:-ms-flexbox;display:flex;cursor:move;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-item-align:stretch;align-self:stretch;border-style:none;background-color:transparent;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;color:var(--calcite-ui-border-3);padding:0.75rem 0.25rem;line-height:0}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}"}};
m=b.proxyCustomElement(m,[1,"calcite-handle",{activated:[1540],textTitle:[513,"text-title"],setFocus:[64]}]);u();const g={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle",refresh:"refresh"};let f=class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteBlockToggle=b.createEvent(this,"calciteBlockToggle",7);this.dragHandle=this.disabled=this.collapsible=!1;this.intlLoading="Loading";this.intlOptions="Options";
this.open=this.loading=!1;this.onHeaderClick=()=>{this.open=!this.open;this.calciteBlockToggle.emit()}}connectedCallback(){r.connectConditionalSlotComponent(this)}disconnectedCallback(){r.disconnectConditionalSlotComponent(this)}renderScrim(){const {disabled:a,loading:d}=this,c=b.h("slot",null);return[d||a?b.h("calcite-scrim",{loading:d}):null,c]}renderIcon(){const {el:a,status:d}=this;var c=this.loading&&!this.open;const e=c?g.refresh:g[d],n=l.getSlotted(a,"icon")||e;c=e?b.h("calcite-icon",{class:{["status-icon"]:!0,
["valid"]:"valid"==d,["invalid"]:"invalid"==d,["loading"]:c},icon:e,scale:"m"}):b.h("slot",{key:"icon-slot",name:"icon"});return n?b.h("div",{class:"icon"},c):null}renderTitle(){const {heading:a,headingLevel:d,summary:c}=this;return a||c?b.h("div",{class:"title"},b.h(q.Heading,{class:"heading",level:d||4},a),c?b.h("div",{class:"summary"},c):null):null}render(){const {collapsible:a,disabled:d,el:c,intlCollapse:e,intlExpand:n,loading:w,open:h,intlLoading:F}=this;var k=h?e||"Collapse":n||"Expand";const x=
b.h("header",{class:"header"},this.renderIcon(),this.renderTitle()),y=!!l.getSlotted(c,"control"),z=!!l.getSlotted(c,"header-menu-actions"),G=h?g.opened:g.closed;k=b.h("div",{class:"header-container"},this.dragHandle?b.h("calcite-handle",null):null,a?b.h("button",{"aria-expanded":a?h.toString():null,"aria-label":k,class:"toggle",onClick:this.onHeaderClick,title:k},x,y||z?null:b.h("calcite-icon",{"aria-hidden":"true",class:"toggle-icon",icon:G,scale:"s"})):x,w?b.h("calcite-loader",{inline:!0,"is-active":!0,
label:F}):y?b.h("div",{class:"control-container"},b.h("slot",{name:"control"})):null,z?b.h("calcite-action-menu",{label:this.intlOptions||"Options"},b.h("slot",{name:"header-menu-actions"})):null);return b.h(b.Host,{tabIndex:d?-1:null},b.h("article",{"aria-busy":w.toString(),class:{["article"]:!0}},k,b.h("div",{class:"content",hidden:!h},this.renderScrim())))}get el(){return this}static get style(){return'@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-direction:column;flex-direction:column;border-width:0px;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding:0px;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);-ms-flex-preferred-size:auto;flex-basis:auto}.header{margin:0px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-align:center;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{-ms-flex:1 1 auto;flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.header{-ms-flex-pack:start;justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;-ms-flex-align:stretch;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-2);-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.summary{margin-top:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{-webkit-margin-start:0.75rem;margin-inline-start:0.75rem;-webkit-margin-end:0px;margin-inline-end:0px;margin-block:0.75rem}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.status-icon.loading{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.toggle-icon{margin-top:0.75rem;margin-bottom:0.75rem;-ms-flex-item-align:center;align-self:center;justify-self:end;color:var(--calcite-ui-text-3);-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-margin-end:1rem;margin-inline-end:1rem;-webkit-margin-start:auto;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.content{position:relative}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{-webkit-animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem}.control-container{margin:0px;display:-ms-flexbox;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-top:0.5rem;margin-bottom:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([disabled]){pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([disabled]) .header-container{opacity:0.5}'}};
f=b.proxyCustomElement(f,[1,"calcite-block",{collapsible:[4],disabled:[516],dragHandle:[516,"drag-handle"],heading:[1],headingLevel:[2,"heading-level"],intlCollapse:[1,"intl-collapse"],intlExpand:[1,"intl-expand"],intlLoading:[1,"intl-loading"],intlOptions:[1,"intl-options"],loading:[516],open:[1540],status:[513],summary:[1]}]);v();p.CalciteBlock=f;p.defineCustomElement=v});