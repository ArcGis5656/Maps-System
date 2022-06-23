/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../intl.js";import{n as t}from"../chunks/compilerUtils.js";import{i,b as s}from"../core/lang.js";import{aliasOf as o}from"../core/accessorSupport/decorators/aliasOf.js";import"../chunks/ensureType.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{g as l,getFieldRange as a}from"../layers/support/fieldUtils.js";import u from"./Widget.js";import p from"./FeatureForm/FeatureFormViewModel.js";import{H as m,i as d}from"../chunks/Heading.js";import"../chunks/widgetUtils.js";import{m as c}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{v as h}from"../chunks/vmEvent.js";import{t as f}from"../chunks/jsxFactory.js";import{D as y}from"../chunks/datetime.js";import{g as b}from"../chunks/locale.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/messages.js";import"../core/Error.js";import"../config.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/widgetThemeUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils3.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils4.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../chunks/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../chunks/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../core/HandleOwner.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../form/support/elements.js";import"../chunks/arcgisLayerUrl.js";import"./FeatureForm/InputField.js";import"./FeatureForm/InputFieldGroup.js";const _="esri-feature-form",j="esri-feature-form__form",v="esri-feature-form__form-header",g="esri-feature-form__label",I="esri-feature-form__input",F="esri-feature-form__input--date",k="esri-feature-form__input--time",w="esri-feature-form__input--radio-group",D="esri-feature-form__input--radio",V="esri-feature-form__input--radio-label",M="esri-feature-form__input--disabled",S="esri-feature-form__input--switch",x="esri-feature-form__input--invalid",C="esri-feature-form__description-text",N="esri-feature-form__date-input-part",E="esri-feature-form__date-input-part--lone",T="esri-feature-form__date-input-container",U="esri-feature-form__date-format-hint",L="esri-feature-form__group",O="esri-feature-form__group-label",P="esri-feature-form__group-header",$="esri-feature-form__group-title",B="esri-feature-form__group-description",R="esri-feature-form__group-toggle-icon",A="esri-feature-form__group--collapsed",G="esri-feature-form__group--sequential",H="esri-feature-form__group--active",K="esri-icon-up",W="esri-icon-down",q="esri-widget",J="esri-widget--panel",z="esri-input",Q={datePattern:"D",timePattern:"tt"};function X(e){return e&&e.inputFields}let Y=class extends u{constructor(e,t){super(e,t),this._activeDateFieldEdit=null,this._activeInputName=null,this._activeNumberFieldEdit=null,this._fieldFocusNeeded=!1,this._fieldToInitialIncompatibleDomainValue=new Map,this._switchFieldsWithInitialIncompatibleValue=new Set,this._userUpdatedInputFieldNames=new Set,this.description=null,this.feature=null,this.fieldConfig=null,this.formTemplate=null,this.groupDisplay="all",this.headingLevel=2,this.label=void 0,this.layer=null,this.messages=null,this.messagesTemplates=null,this.strict=null,this.title=null,this.viewModel=new p,this._handleSwitchClick=e=>{e.target===e.currentTarget&&e.stopImmediatePropagation()},this._handleRadioInputChange=e=>{this._commitInputValue(e.target)},this._handleInputInput=e=>{this._commitInputValue(e.currentTarget,!0)},this._handleFormKeyDown=this._handleFormKeyDown.bind(this),this._handleInputBlur=this._handleInputBlur.bind(this),this._handleInputFocus=this._handleInputFocus.bind(this),this._handleNumberInputMouseDown=this._handleNumberInputMouseDown.bind(this),this._handleInputKeyDown=this._handleInputKeyDown.bind(this),this._handleOptionChange=this._handleOptionChange.bind(this),this._handleGroupClick=this._handleGroupClick.bind(this),this._handleSubmit=this._handleSubmit.bind(this),this._afterInputCreateOrUpdate=this._afterInputCreateOrUpdate.bind(this)}initialize(){this.own(this.watch("feature",(()=>{const e=this._getFocusableInput("forward");this._activeInputName=e&&e.name,this._userUpdatedInputFieldNames.clear(),this._fieldToInitialIncompatibleDomainValue.clear(),this._switchFieldsWithInitialIncompatibleValue.clear(),this._fieldFocusNeeded=!0})),this.on("submit",(e=>{if(e.invalid.length>0){const[t]=e.invalid;e.invalid.forEach((e=>this._userUpdatedInputFieldNames.add(e))),this._activeInputName=t,this._fieldFocusNeeded=!0,this.scheduleRender()}})))}loadDependencies(){return Promise.all([import("../chunks/calcite-combobox.js"),import("../chunks/calcite-combobox-item.js"),import("../chunks/calcite-combobox-item-group.js"),import("../chunks/calcite-input-message.js"),import("../chunks/calcite-switch.js")])}destroy(){this._userUpdatedInputFieldNames.clear(),this._userUpdatedInputFieldNames=null}getValues(){return null}submit(){return null}render(){const{state:e}=this.viewModel;return f("div",{class:this.classes(_,q,J)},"ready"===e?this.renderForm():null)}renderForm(){const e=this.title?f(m,{key:"title",level:this.headingLevel},this.title):null,t=this.description?f("p",{class:C,key:"description"},this.description):null,i=e||t?f("div",{class:v},e,t):null;return f("form",{class:j,novalidate:!0,onsubmit:this._handleSubmit,onkeydown:this._handleFormKeyDown},i,this.renderFields())}renderFields(){const{viewModel:{inputFields:e}}=this;return e.map(((e,t)=>X(e)?this.renderGroup(e,t):this.renderLabeledField(e)))}renderGroup(e,t){const{description:i,inputFields:s,label:o,state:r}=e,n=s.filter((e=>e.visible)),l=this.viewModel.findField(this._activeInputName),a=!(!l||l.group!==e),u=`${this.id}_group_${t}`,p=`${this.id}_group-label_${t}`,c=`${this.id}_group-description_${t}`,h=i?f("p",{class:this.classes(B,C),id:c},i):null,y="sequential"===this.groupDisplay,b=y?a:"expanded"===r,_=b?K:W;return f("fieldset",{"aria-expanded":b.toString(),"aria-labelledby":p,"aria-describedby":i?c:"",class:this.classes(L,y?G:null,b?null:A,a?H:null),"data-group":e,id:u,key:t,onclick:this._handleGroupClick},f("button",{role:y?"presentation":void 0,class:P,type:"button",tabIndex:y?-1:0},f("div",{class:$},f(m,{class:O,id:p,level:this.title?d(this.headingLevel):this.headingLevel},o),h),y?null:f("span",{class:this.classes(_,R)})),n.map((e=>this.renderLabeledField(e))))}_getFocusableInput(e,t){const i=this.viewModel.allInputFields,s="forward"===e?i:i.slice().reverse();let o;if(t)if(X(t))o=s.indexOf(t.inputFields[0]);else{let i;if(this._isInputFieldInGroup(t)&&"collapsed"===t.group.state){const{inputFields:s}=t.group;i="forward"===e?s[s.length-1]:s[0]}else i=t;o=s.indexOf(i)+1}else o=0;for(let e=o;e<s.length;e++){const t=s[e];if(t.visible)return t}return null}renderLabeledField(e){const{label:t,layer:i,type:s}=e;return f("label",{key:`${i.id}-${e.name}`,class:g},[t,"unsupported"!==s?this.renderInputField(e):this.renderUnsupportedField(e),this.renderAuxiliaryText(e)])}renderInputField(e){const{domain:t,name:s,type:o,value:r}=e,n=this.getCommonInputProps(e);if("coded-value"===(null==t?void 0:t.type)){if(this._inputFieldHasInputType(e,"switch")){const{fieldElement:t}=e;if(!(this._switchFieldsWithInitialIncompatibleValue.has(s)||null==r||t.input.onValue!==r&&t.input.offValue!==r))return this.renderSwitchInputField(e,n);this._switchFieldsWithInitialIncompatibleValue.add(s)}return"radio-buttons"===e.inputType?this.renderRadioButtonsInputField(e,t.codedValues.map((({code:e,name:t})=>({value:e,name:t}))),n):this.renderSelectInputField(e,this._getFieldValueOptions(s,t),n)}return"datetime-picker"===e.inputType||"date"===o?this.renderDateInputField(e,n):"number"===o?f("input",{type:"number",...n,value:i(this._activeNumberFieldEdit)&&this._activeNumberFieldEdit.fieldName===e.name?this._activeNumberFieldEdit.value:`${n.value}`}):"text-area"===e.inputType?f("textarea",{...n}):f("input",{type:"text",...n})}_parseDateTime(e,t,i){if(i){var s;let o=y.fromJSDate(this._parseDate(e,i));const r=y.fromMillis(null!=(s=t.value)?s:Date.now());return o="date"===i?o.set({hour:r.hour,minute:r.minute,second:r.second}):o.set({day:r.day,month:r.month,year:r.year}),o.isValid?o.toMillis():null}const o=y.fromJSDate(this._parseDate(e));return o.isValid?o.toMillis():null}renderDateInputField(e,t){const{value:i,includeTime:s}=e,{date:o,time:r}=this._formatDate(0),n=`${this.id}-${t.key}`,l=`${n}-date`,a=`${n}-time`,{_activeDateFieldEdit:u}=this;let{date:p,time:m}=this._formatDate(i);var d,c,h,y;(null==u?void 0:u.fieldName)===e.name&&(p=null!=(d=null==(c=u.date.input)?void 0:c.value)?d:p,m=null!=(h=null==(y=u.time.input)?void 0:y.value)?h:m);return f("div",{key:`${t.key}-date`,class:T},f("div",{class:this.classes(N,s?null:E)},f("input",{"aria-label":e.label,"aria-describedby":l,type:"text",...t,"data-date-part":"date",class:this.classes(t.class,F),value:p}),f("div",{class:U,id:l},o)),s?f("div",{class:N,key:"time-input"},f("input",{"aria-describedby":a,"aria-label":e.label,type:"text",...t,"data-date-part":"time",class:this.classes(t.class,k),value:m}),f("div",{class:U,id:a},r)):null)}renderUnsupportedField(e){const t=this.getCommonInputProps(e);return f("input",{afterCreate:t.afterCreate,afterUpdate:t.afterUpdate,class:this.classes(z,I,M),onfocus:t.onfocus,readOnly:!0,tabIndex:t.tabIndex,type:"text",value:t.value,"data-field-name":t["data-field-name"]})}renderSelectInputField(e,t,i){const{value:o}=e,{messages:r,messagesTemplates:n}=this,l=t.map((e=>e.map((e=>f("calcite-combobox-item",{value:`${e.value}`,"text-label":e.name,key:`#${e.value}`,selected:o===e.value}))))),[a,u]=l;this._registerIncompatibleValue(o,t.flat(),e,(e=>{u.unshift(f("calcite-combobox-item",{value:`${e}`,"text-label":`${e}`,key:"incompatible-option",readOnly:!0}))}));const p=u.length>0?[f("calcite-combobox-item-group",{key:"recommended",label:r.recommended},a),f("calcite-combobox-item-group",{key:"other",label:n.other},u)]:a,m=s(e.fieldElement)||this._inputFieldHasInputType(e,"combo-box")&&e.fieldElement.input.showNoValueOption;if(!e.required&&m){const t="",i=this._inputFieldHasInputType(e,"combo-box")&&e.fieldElement.input.noValueOptionLabel||this.messages.empty;p.unshift(f("calcite-combobox-item",{value:t,"text-label":this.messages.empty,key:"empty-option"},i))}return f("calcite-combobox",{...i,"selection-mode":"single",disabled:i.readOnly,allowCustomValues:!1,onCalciteComboboxChange:e=>this._handleOptionChange(e.target)},p)}_registerIncompatibleValue(e,t,i,s){const o=this._fieldToInitialIncompatibleDomainValue,r=o.has(i.name);(r||null!=e&&""!==e&&!t.find((t=>t.value===e))||r)&&(r||o.set(i.name,e),null==s||s(o.get(i.name)))}renderRadioButtonsInputField(e,t,i){const{value:o}=e,r=t.map((t=>this.renderRadioButton({key:t.name,label:t.name,name:e.name,value:t.value,selected:t.value===o,props:i})));this._registerIncompatibleValue(o,t,e);const n=s(e.fieldElement)||this._inputFieldHasInputType(e,"radio-buttons")&&e.fieldElement.input.showNoValueOption;if(!e.required&&n){const t="",s=this._inputFieldHasInputType(e,"radio-buttons")&&e.fieldElement.input.noValueOptionLabel||this.messages.empty,n=o===t||null===o;r.unshift(this.renderRadioButton({key:"empty-option",label:s,name:e.name,value:t,selected:n,props:i}))}return f("div",{key:`${i.key}-radio`,class:w},r)}renderSwitchInputField(e,t){const{value:i}=e,s=!!this._inputFieldHasInputType(e,"switch")&&i===e.fieldElement.input.onValue;return f("calcite-switch",{...t,class:S,onclick:this._handleSwitchClick,checked:s,disabled:t.readOnly})}renderRadioButton({key:e,name:t,value:i,selected:s,label:o,props:r}){return f("label",{key:e,class:V},f("input",{...r,class:D,name:t,type:"radio",value:i,checked:s,onchange:this._handleRadioInputChange}),o)}renderAuxiliaryText(e){const t=this._userUpdatedInputFieldNames.has(e.name)&&!e.valid?e.errorMessage:i(this.viewModel.contingencyConstraintViolations.get(e.name))?this.messages.validationErrors.valuesIncompatible:null;return i(t)?f("calcite-input-message",{status:"invalid",icon:!0,active:!0},t):e.description?f("div",{key:"description",class:C},e.description):void 0}getCommonInputProps(e){const{groupDisplay:t}=this,{editable:s,group:o,hint:r,maxLength:n,minLength:l,name:a,required:u,type:p,valid:m,value:d}=e,c=this._userUpdatedInputFieldNames.has(a),h=!s,f="all"===t&&i(o)&&"collapsed"===o.state;return{afterCreate:this._afterInputCreateOrUpdate,afterUpdate:this._afterInputCreateOrUpdate,"aria-invalid":m?"false":"true",class:this.classes(z,I,h?M:null,c&&!m?x:null),key:a,label:a,minlength:l>-1?`${l}`:"",maxlength:n>-1?`${n}`:"",...this._getNumberFieldConstraints(e),readOnly:h,value:null==d?"":`${d}`,"data-field-name":a,onfocus:this._handleInputFocus,oninput:this._handleInputInput,onblur:this._handleInputBlur,onkeydown:this._handleInputKeyDown,onmousedown:"number"===p?this._handleNumberInputMouseDown:null,placeholder:"number"===p||"text"===p?r:"",required:u,tabIndex:f?-1:0}}_isInputFieldInGroup(e){return!X(e)&&i(e.group)}_handleNumberInputMouseDown({target:e}){e.focus(),this.scheduleRender()}_getFieldValueOptions(e,t){const i=t.codedValues.map((({code:e,name:t})=>({value:e,name:t}))),s=this.viewModel.fieldsWithContingentValues.has(e)?this._getContingentValueOptions(e):[];if(s.length>0){const e=new Set(s.map((e=>e.value)));return[s,i.filter((t=>!e.has(t.value)))]}return[i,[]]}_getContingentValueOptions(e){const t={};for(const i of this.viewModel.allInputFields){const{name:o,value:r}=i;!s(r)&&o!==e&&this.viewModel.fieldsWithContingentValues.has(o)&&(t[o]=r)}const i=this.viewModel.joinedContingentValues.slice(),o=new Map;for(const r of i){const i=r.values[e];if(s(i)||"code"!==i.objectType&&"null"!==i.objectType)continue;const{code:n,name:l}="null"===i.objectType?{code:"",name:this.messages.empty}:i.codedValue;if(o.has(n))continue;Object.entries(t).every((([e,t])=>!r.values.hasOwnProperty(e)||this._valueIsValidContingentValue(t,r.values[e])))&&o.set(n,{name:l,value:n})}return[...o.values()]}_getInputFieldFromInput(e){return this.viewModel.findField(e.getAttribute("data-field-name"))}_getNumberFieldConstraints(e){const t=l(e.domain)||a(e.field);return t&&t.max!==Number.MAX_VALUE&&t.min!==Number.MIN_VALUE?t:{min:null,max:null}}_afterInputCreateOrUpdate(e){const{viewModel:t}=this,i=this._getInputFieldFromInput(e),s=t.findField(this._activeInputName),o=this._fieldToInitialIncompatibleDomainValue.get(i.name)===i.value;this._fieldFocusNeeded&&s===i&&("radio-buttons"!==i.inputType||o||e.checked)&&(this._fieldFocusNeeded=!1,e.focus())}_handleInputFocus(e){const t=e.target,i=this._getInputFieldFromInput(t);this._activeInputName=i.name,"date"===i.type?this._syncDateFieldEdits(t):this._isNumberInputField(i)&&this._setUpNumberFieldEdit(t)}_isNumberInputField({domain:e,inputType:t="text-box",type:i}){return"number"===i&&"text-box"===t&&(!e||"coded-value"!==e.type)}_handleInputBlur(e){const t=e.target,s=this._getInputFieldFromInput(t);if("date"===s.type){const i=e.relatedTarget,r=i&&this._getInputFieldFromInput(i);if(r&&"date"===s.type&&"date"===r.type&&s.field===r.field){if(""!==t.value&&""===i.value){var o;const r=i.getAttribute("data-date-part");i.value=this._formatDate(null!=(o=s.value)?o:Date.now())[r],this._parseDate(t.value,t.getAttribute("data-date-part"))&&this._commitInputValue(e.target,!0,!1)}return}}"number"===s.type&&i(this._activeNumberFieldEdit)&&(this._activeNumberFieldEdit.input.value=`${s.value}`,this._activeNumberFieldEdit=null),this._commitInputValue(t),this.scheduleRender()}_commitInputValue(e,t=!1,s=!0){const o=this._getInputFieldFromInput(e);if(this._activeDateFieldEdit){const{date:i,time:u}=this._activeDateFieldEdit,p=this._parseDateTime(e.value,o,i.active?"date":"time"),m=null!==this.viewModel.getValue(o.name),d=i.input&&(u.input||!o.includeTime),c=null===p;if(t){if(c)return;(d||!s||m)&&this._updateDateFieldValue(o,p)}else{var r,n;if(""===(null==(r=i.input)?void 0:r.value)||""===(null==(n=u.input)?void 0:n.value))this._updateDateFieldValue(o,null);else if(d){var l,a;const e=`${i.input.value} ${null!=(l=null==(a=u.input)?void 0:a.value)?l:""}`,t=this._parseDateTime(e,o);!(null!==t)&&m||this._updateDateFieldValue(o,t)}this._activeDateFieldEdit=null}}else i(this._activeNumberFieldEdit)&&this._isNumberInputField(o)&&(this._activeNumberFieldEdit.value=e.value),this._updateFieldValue(e)}_handleInputKeyDown(e){const{key:t,altKey:i,ctrlKey:s,metaKey:o}=e,r=this._getInputFieldFromInput(e.target);if("Enter"===t)this._isInputFieldInGroup(r)&&"collapsed"===r.group.state&&(r.group.state="expanded");else{const{type:n}=r.field,l="single"===n||"double"===n,a=!i&&!s&&!o;if(("integer"===n||"small-integer"===n||l)&&a&&1===t.length){const i=Number(t),s=["-","+"],o=["e","."],r=l?[...s,...o]:s;isNaN(i)&&-1===r.indexOf(t)&&e.preventDefault()}}}_setUpNumberFieldEdit(e){const t=this._getInputFieldFromInput(e);this._activeNumberFieldEdit={fieldName:t.name,input:e,value:e.value}}_syncDateFieldEdits(e){var t,i;const s=this._getInputFieldFromInput(e);if("date"!==s.type)return;const o=e.getAttribute("data-date-part"),r="date"===o?{value:e.value,input:e,active:!0}:{...null==(t=this._activeDateFieldEdit)?void 0:t.date,active:!1},n="time"===o?{value:e.value,input:e,active:!0}:{...null==(i=this._activeDateFieldEdit)?void 0:i.time,active:!1};this._activeDateFieldEdit={fieldName:s.name,date:r,time:n}}_updateFieldValue(e){const t=e.getAttribute("data-field-name");if(this.viewModel.setValue(t,this._parseValue(e)),this._userUpdatedInputFieldNames.add(t),this.viewModel.fieldsWithContingentValues.has(t)){const e=Object.fromEntries(Object.entries(this.getValues()).filter((([e,t])=>i(t))));this.viewModel.validateContingencyConstraints(e)}}_updateDateFieldValue(e,t){this.viewModel.setValue(e.name,t),this._userUpdatedInputFieldNames.add(e.name)}_parseValue(e){const t=this._getInputFieldFromInput(e),i=e.value;if(this._inputFieldHasInputType(t,"switch")&&"CALCITE-COMBOBOX"!==e.tagName)return e.checked?t.fieldElement.input.onValue:t.fieldElement.input.offValue;if("radio-buttons"===t.inputType&&"radio"===e.type&&!e.checked)return t.value;const{type:s}=t;if("number"===s)return i?parseFloat(i):null;if("date"===s){if(!i)return null;const s=Number(i);if(!isNaN(s))return s;const o=e.getAttribute("data-date-part"),r=this._parseDate(i,o);if(!r)return null;let n=y.fromJSDate(r);const l=t.domain,a=y.now();let u=a;if(l&&"range"===l.type){const e=y.fromMillis(l.maxValue);a<e&&(u=e)}const p=this.viewModel.getValue(t.name),m=null!=p?y.fromMillis(p):u;return n="date"===o?n.set({hour:m.hour,minute:m.minute,second:m.second}):n.set({day:m.day,month:m.month,year:m.year}),n.toMillis()}return i}_handleOptionChange(e){this._commitInputValue(e),this.scheduleRender()}_handleGroupClick(e){var t;const i=e.currentTarget["data-group"],s="expanded"===i.state,o="sequential"===this.groupDisplay,r=`.${P}`;if(!(s&&!e.target.closest(r))){if(this._activeInputName=null==(t=this._getFocusableInput("forward",i))?void 0:t.name,o){const t=e.target.closest(r);if(s&&!t)return;this.viewModel.inputFields.forEach((e=>{X(e)&&e!==i&&(e.state="collapsed")}))}i.state=s?"collapsed":"expanded",this._fieldFocusNeeded=o,this.scheduleRender()}}_handleSubmit(e){e.preventDefault()}_handleFormKeyDown(e){"Enter"===e.key&&this.viewModel.submit()}_formatDate(e){if(null==e)return{date:"",time:""};const t=y.fromMillis(e,{locale:b(),numberingSystem:"latn"});return{date:t.toLocaleString({year:"numeric",month:"2-digit",day:"2-digit"}),time:t.toFormat(Q.timePattern)}}_parseDate(e,t){if(null==e||""===e)return null;const{timePattern:i,datePattern:s}=Q,o=t?"date"===t?s:i:`${s} ${i}`,r=y.fromFormat(e,o,{locale:b(),numberingSystem:"latn"});return r.isValid?r.toJSDate():null}_inputFieldHasInputType(e,t){var s;return i(e.fieldElement)&&(null==(s=e.fieldElement.input)?void 0:s.type)===t}_valueIsValidContingentValue(e,i){var s;switch(i.objectType){case"any":return!0;case"null":return null==e;case"code":return e===(null==(s=i.codedValue)?void 0:s.code);case"range":return e>=i.minValue&&e<=i.maxValue;default:return t(i.objectType),!1}}};e([o("viewModel.description")],Y.prototype,"description",void 0),e([o("viewModel.feature")],Y.prototype,"feature",void 0),e([o("viewModel.fieldConfig")],Y.prototype,"fieldConfig",void 0),e([o("viewModel.formTemplate")],Y.prototype,"formTemplate",void 0),e([r()],Y.prototype,"groupDisplay",void 0),e([r()],Y.prototype,"headingLevel",void 0),e([r({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],Y.prototype,"label",void 0),e([o("viewModel.layer")],Y.prototype,"layer",void 0),e([r(),c("esri/widgets/FeatureForm/t9n/FeatureForm")],Y.prototype,"messages",void 0),e([r(),c("esri/widgets/FeatureTemplates/t9n/FeatureTemplates")],Y.prototype,"messagesTemplates",void 0),e([o("viewModel.strict")],Y.prototype,"strict",void 0),e([o("viewModel.title")],Y.prototype,"title",void 0),e([r(),h(["value-change","submit"])],Y.prototype,"viewModel",void 0),e([o("viewModel.getValues")],Y.prototype,"getValues",null),e([o("viewModel.submit")],Y.prototype,"submit",null),Y=e([n("esri.widgets.FeatureForm")],Y);const Z=Y;export{Z as default};
