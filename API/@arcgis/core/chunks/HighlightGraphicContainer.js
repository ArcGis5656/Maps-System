/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import"./Logger.js";import"./ensureType.js";import"../core/lang.js";import"../core/accessorSupport/decorators/property.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{W as s}from"./enums4.js";import{a as t}from"./BaseGraphicContainer.js";import{i as o}from"./enums.js";let i=class extends t{renderChildren(r){if(r.drawPhase!==s.HIGHLIGHT)return;if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,t=e.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(o.COLOR_BUFFER_BIT),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind()}};i=r([e("esri.views.2d.layers.support.HighlightGraphicContainer")],i);const a=i;export{a as H};
