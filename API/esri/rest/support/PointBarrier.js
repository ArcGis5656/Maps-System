// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../PopupTemplate ../../symbols ../../core/JSONSupport ../../core/lang ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/Point ../route/utils ./networkEnums ../../symbols/support/jsonUtils".split(" "),function(r,d,n,t,b,u,e,f,
A,v,w,x,p,y,c,z){var k;b=k=function(q){function l(a){a=q.call(this,a)||this;a.addedCost=null;a.barrierType=null;a.costs=null;a.curbApproach=null;a.fullEdge=null;a.geometry=null;a.name=null;a.objectId=null;a.popupTemplate=null;a.sideOfEdge=null;a.sourceId=null;a.sourceOid=null;a.status=null;a.symbol=null;return a}r._inheritsLoose(l,q);var m=l.prototype;m.readCosts=function(a,g){return y.getPrefixedProperties(g.attributes,"Attr_")};m.writeCosts=function(a,g){if(!e.isNone(a)){g.attributes||(g.attributes=
{});for(const h in a)g.attributes[`Attr_${h}`]=a[h]}};l.fromPortalJSON=function(a){var g,h;return new k({addedCost:null!=(g=a.attributes.AddedCost)?g:null,barrierType:e.isSome(a.attributes.BarrierType)?c.barrierTypeJsonMap.fromJSON(a.attributes.BarrierType):null,costs:e.isSome(a.attributes.Costs)?JSON.parse(a.attributes.Costs):null,curbApproach:e.isSome(a.attributes.CurbApproach)?c.curbApproachJsonMap.fromJSON(a.attributes.CurbApproach):null,fullEdge:e.isSome(a.attributes.FullEdge)?c.fullEdgeJsonMap.fromJSON(a.attributes.FullEdge):
null,geometry:p.fromJSON(a.geometry),name:null!=(h=a.attributes.Name)?h:null,objectId:a.attributes.__OBJECTID,popupTemplate:e.isSome(a.popupInfo)?n.fromJSON(a.popupInfo):null,status:e.isSome(a.attributes.Status)?c.statusJsonMap.fromJSON(a.attributes.Status):null,symbol:e.isSome(a.symbol)?z.fromJSON(a.symbol):null})};m.clone=function(){return new k(u.clone({addedCost:this.addedCost,barrierType:this.barrierType,costs:this.costs,curbApproach:this.curbApproach,fullEdge:this.fullEdge,geometry:this.geometry,
name:this.name,objectId:this.objectId,popupTemplate:this.popupTemplate,sideOfEdge:this.sideOfEdge,sourceId:this.sourceId,sourceOid:this.sourceOid,status:this.status,symbol:this.symbol}))};m.toPortalJSON=function(){return{geometry:e.isSome(this.geometry)?this.geometry.toJSON():null,attributes:{__OBJECTID:e.unwrap(this.objectId),AddedCost:this.addedCost,BarrierType:e.isSome(this.barrierType)?c.barrierTypeJsonMap.toJSON(this.barrierType):null,Costs:e.isSome(this.costs)?JSON.stringify(this.costs):null,
CurbApproach:e.isSome(this.curbApproach)?c.curbApproachJsonMap.toJSON(this.curbApproach):null,FullEdge:e.isSome(this.fullEdge)?c.fullEdgeJsonMap.toJSON(this.fullEdge):null,Name:this.name,Status:e.isSome(this.status)?c.statusJsonMap.toJSON(this.status):null},symbol:e.isSome(this.symbol)?this.symbol.toJSON():null,popupInfo:e.isSome(this.popupTemplate)?this.popupTemplate.toJSON():null}};return l}(b.JSONSupport);b.fields=[{name:"__OBJECTID",alias:"OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1,
domain:null},{name:"AddedCost",alias:"Added Cost",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0,domain:null},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNABarrierType",codedValues:[{name:"Restriction",code:0},{name:"Scaled Cost",code:1},{name:"Added Cost",code:2}]}},{name:"Costs",alias:"Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"CurbApproach",
alias:"Curb Approach",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1,domain:{type:"codedValue",name:"esriNACurbApproachType",codedValues:[{name:"Either side",code:0},{name:"From the right",code:1},{name:"From the left",code:2},{name:"Depart in the same direction",code:3}]}},{name:"FullEdge",alias:"Full Edge",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNAIntYesNo",codedValues:[{name:"No",code:0},{name:"Yes",code:1}]}},{name:"Name",
alias:"Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"Status",alias:"Status",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNAObjectStatus",codedValues:[{name:"OK",code:0},{name:"Not Located on Network",code:1},{name:"Network Unbuilt",code:2},{name:"Prohibited Street",code:3},{name:"Invalid Field Values",code:4},{name:"Cannot Reach",code:5},{name:"Time Window Violation",code:6}]}}];b.popupInfo={title:"Point Barriers",
fieldInfos:[{fieldName:"Name",label:"Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"BarrierType",label:"Barrier Type",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"AddedCost",label:"Added Cost",isEditable:!0,tooltip:"",visible:!0,format:{places:3,digitSeparator:!0},stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]};d.__decorate([f.property({json:{read:!1}})],b.prototype,"addedCost",void 0);d.__decorate([f.property({type:c.barrierTypeJsonMap.apiValues,
json:{name:"attributes.BarrierType",read:{reader:c.barrierTypeJsonMap.read},write:{writer:c.barrierTypeJsonMap.write}}})],b.prototype,"barrierType",void 0);d.__decorate([f.property()],b.prototype,"costs",void 0);d.__decorate([v.reader("costs",["attributes"])],b.prototype,"readCosts",null);d.__decorate([x.writer("costs")],b.prototype,"writeCosts",null);d.__decorate([f.property({type:c.curbApproachJsonMap.apiValues,json:{read:{source:"attributes.CurbApproach",reader:c.curbApproachJsonMap.read}}})],
b.prototype,"curbApproach",void 0);d.__decorate([f.property({type:c.fullEdgeJsonMap.apiValues,json:{name:"attributes.FullEdge",read:{reader:c.fullEdgeJsonMap.read},write:{writer:c.fullEdgeJsonMap.write}}})],b.prototype,"fullEdge",void 0);d.__decorate([f.property({type:p,json:{write:!0}})],b.prototype,"geometry",void 0);d.__decorate([f.property({json:{name:"attributes.Name",write:!0}})],b.prototype,"name",void 0);d.__decorate([f.property({json:{name:"attributes.ObjectID",write:!0}})],b.prototype,"objectId",
void 0);d.__decorate([f.property({type:n,json:{read:!1}})],b.prototype,"popupTemplate",void 0);d.__decorate([f.property({type:c.sideOfEdgeJsonMap.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:c.sideOfEdgeJsonMap.read}}})],b.prototype,"sideOfEdge",void 0);d.__decorate([f.property({json:{read:{source:"attributes.SourceID"}}})],b.prototype,"sourceId",void 0);d.__decorate([f.property({json:{read:{source:"attributes.SourceOID"}}})],b.prototype,"sourceOid",void 0);d.__decorate([f.property({type:c.statusJsonMap.apiValues,
json:{read:{source:"attributes.Status",reader:c.statusJsonMap.read}}})],b.prototype,"status",void 0);d.__decorate([f.property({types:t.symbolTypes,json:{read:!1}})],b.prototype,"symbol",void 0);return b=k=d.__decorate([w.subclass("esri.rest.support.PointBarrier")],b)});