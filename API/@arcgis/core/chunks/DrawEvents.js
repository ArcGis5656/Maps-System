/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(t,e,s,i){this.view=t,this.native=e,this.vertexIndex=s,this.vertices=i,this.defaultPrevented=!1,this.type="vertex-add"}preventDefault(){this.defaultPrevented=!0}}class e{constructor(t,e,s,i){this.view=t,this.native=e,this.vertexIndex=s,this.vertices=i,this.defaultPrevented=!1,this.type="vertex-remove"}preventDefault(){this.defaultPrevented=!0}}class s{constructor(t,e,s,i,r=null){this.view=t,this.native=e,this.vertexIndex=s,this.vertices=i,this.mapPoint=r,this.coordinates=null,this.defaultPrevented=!1,this.type="cursor-update",this.coordinates=1===i.length?i[0]:null}preventDefault(){this.defaultPrevented=!0}}class i{constructor(t,e){this.native=t,this.vertices=e,this.coordinates=null,this.defaultPrevented=!1,this.type="draw-complete",this.coordinates=1===e.length?e[0]:null}preventDefault(){this.defaultPrevented=!0}}export{s as C,i as D,e as V,t as a};
