/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(t){this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=t,this.view.watch("ready",(t=>{this._resourcesCreated&&(t?this._createResources():this._destroyResources())}))}applyProps(t){let e=!1;for(const s in t)s in this?"attached"===s?e=t[s]:this[s]=t[s]:console.error("Cannot set unknown property",s);this.attached=e}destroy(){this.attached=!1}get attached(){return this._attached}set attached(t){t!==this._attached&&this.view._stage&&(this._attached=t,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources())}get visible(){return this._visible}set visible(t){t!==this._visible&&(this._visible=t,this.attached&&this.updateVisibility(t))}_createResources(){this.createResources(),this._resourcesCreated=!0,this.visible||this.updateVisibility(!1)}_destroyResources(){this.destroyResources(),this._resourcesCreated=!1}}export{t as V};