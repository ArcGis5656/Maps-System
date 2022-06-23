/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import o from"../core/Accessor.js";import{C as e}from"./Clonable.js";import{I as r}from"./Identifiable.js";import{i as s}from"../core/lang.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";let n=0,l=class extends(e(r(o))){constructor(t){super(t),this.id=`${Date.now().toString(16)}-analysis-${n++}`,this.title=null,this.parent=null,this.visible=!0}get isEditable(){return this.requiredPropertiesForEditing.every(s)}};t([i({type:String,constructOnly:!0,clonable:!1})],l.prototype,"id",void 0),t([i({type:String})],l.prototype,"title",void 0),t([i({constructOnly:!0})],l.prototype,"type",void 0),t([i({clonable:!1})],l.prototype,"parent",void 0),t([i({readOnly:!0})],l.prototype,"extent",void 0),t([i({type:Boolean})],l.prototype,"visible",void 0),t([i({readOnly:!0})],l.prototype,"isEditable",null),t([i({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",void 0),t([i({readOnly:!0})],l.prototype,"nonEditableMessage",void 0),l=t([p("esri.analysis.Analysis")],l);const a=l;export{a as A};
