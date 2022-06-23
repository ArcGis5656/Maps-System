/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{h as e}from"../core/lang.js";import o from"../views/3d/environment/CloudyWeather.js";import r from"../views/3d/environment/FoggyWeather.js";import t from"../views/3d/environment/RainyWeather.js";import{_ as n}from"./tslib.es6.js";import s from"../core/Accessor.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{e as p}from"./enumeration.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import c from"../views/3d/environment/SunnyWeather.js";var m;let y=m=class extends s{constructor(e){super(e),this.type="snowy",this.cloudCover=.5,this.precipitation=.5}clone(){return new m({cloudCover:this.cloudCover,precipitation:this.precipitation})}};n([p({snowy:"snowy"})],y.prototype,"type",void 0),n([i({type:Number,nonNullable:!0,range:{min:0,max:1}})],y.prototype,"cloudCover",void 0),n([i({type:Number,nonNullable:!0,range:{min:0,max:1}})],y.prototype,"precipitation",void 0),y=m=n([a("esri.views.3d.environment.SnowyWeather")],y);const u=y,l={key:"type",base:null,typeMap:{sunny:c,cloudy:o,rainy:t,snowy:u,foggy:r}},v=Object.keys(l.typeMap);function d(){return e("enable-feature:precipitation")?v:v.filter((e=>"snowy"!==e))}function f(e,o){return!!d().includes(e)||(o.error(`"${e}" is not a valid weather type`),!1)}const w=1e4;export{u as S,l as a,d as g,f as v,w};