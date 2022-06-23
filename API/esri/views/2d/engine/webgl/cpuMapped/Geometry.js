// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/maybe ../FeatureDisplayList ./Buffer ./DisplayRecordReader ../../../../webgl/VertexArrayObject".split(" "),function(t,k,x,u,v,y){let z=function(){function w(a,d){this._vaos=new Map;this._indicesInvalid=!1;this.geometryType=a}var m=w.prototype;m.destroy=function(){for(const [,a]of this._vaos)k.isSome(a)&&a.dispose(!1);this._indexBuffer=k.destroyMaybe(this._indexBuffer);this._vertexBuffer=k.destroyMaybe(this._vertexBuffer)};m.insert=function(a,d,e){if(a.records.byteLength)if(e=
a.stride,this._vertexBuffer&&this._indexBuffer){var b=a.vertices.byteLength/e;this._indexBuffer.ensure(a.indices.byteLength/4);this._vertexBuffer.ensure(b);const {vertices:c,indices:f}=a;a=v.DisplayRecordReader.from(a.records);const l=this._vertexBuffer.insert(c,0,c.byteLength/e,0),h=this._indexBuffer.insert(f,0,f.byteLength/4,l);a.forEach(g=>{g.indexFrom+=h;g.vertexFrom+=l});k.unwrapOrThrow(this._records,"Expected records to be defined").link(a);if(d)this._indicesInvalid=!0;else if(this._displayList)for(d=
a.getCursor();d.next();)this._displayList.addRecord(d)}else{b=a.indices.byteLength/4;const c=a.vertices.byteLength/e,f=e/Uint32Array.BYTES_PER_ELEMENT;this._records=v.DisplayRecordReader.from(a.records);this._indexBuffer=new u.Buffer("index",b,1);this._vertexBuffer=new u.Buffer("vertex",c,f);this._indexBuffer.insert(a.indices,0,a.indices.byteLength/4,0);this._vertexBuffer.insert(a.vertices,0,a.vertices.byteLength/e,0);d&&(this._indicesInvalid=!0)}};m.remove=function(a){if(!k.isNone(this._records))for(const d of a){a=
this._records.getCursor();if(!a.lookup(d))continue;const e=a.indexFrom,b=a.vertexFrom;let c=a.indexCount,f=a.vertexCount;for(;a.next()&&a.id===d;)c+=a.indexCount,f+=a.vertexCount;this._indexBuffer.free(e,c);this._vertexBuffer.free(b,f,!0);this._records.delete(d)}};m.getVAO=function(a,d,e,b){if(!this._vertexBuffer||!this._indexBuffer||k.isNone(this._records)||!this._vertexBuffer.bufferSize)return null;b=b?1:0;let c=this._vaos.get(b);if(this._vertexBuffer.invalidated||this._indexBuffer.invalidated)k.applySome(c,
h=>h.dispose(!1)),c=null;this._vertexBuffer.upload();this._indexBuffer.upload();const f=this._indexBuffer.getGPUBuffer(a,1===b),l=this._vertexBuffer.getGPUBuffer(a);c||(c=new y.VertexArrayObject(a,e,d,{geometry:l},f),this._vaos.set(b,c));return c};m.forEachCommand=function(a){if(!k.isNone(this._records)){this._sortIndices(this._records);if(!this._displayList){const d=this._cursorIndexOrder;this._displayList=x.FeatureDisplayList.from(this,this.geometryType,this._records.getCursor(),d)}this._displayList.forEach(a)}};
m._sortIndices=function(a){const d=!!this._indexBuffer.bufferSize;if(this._indicesInvalid){this._indicesInvalid=!1;for(var e=0,b=a.getCursor(),c=[],f=[],l=[];b.next();)f.push(b.index),l.push(b.sortKey),c.push(b.id);f.sort((r,n)=>{const p=l[n],q=l[r];return q===p?c[n]-c[r]:p-q});a=a.getCursor();b=d?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer();for(const r of f){if(!a.seekIndex(r))throw Error("Expected to find index");if(d){const {indexFrom:n,indexCount:p}=a;a.indexFrom=e;for(var h=
0;h<p;h++)this._indexBuffer.set(e++,b.array[n+h])}else{const {vertexFrom:n,vertexCount:p}=a;var g=this._vertexBuffer.strideInt;const q=n*g;h=q+p*g;a.vertexFrom=e/g;for(g=q;g<h;g++)this._vertexBuffer.set(e++,b.array[g])}}this._cursorIndexOrder=f;this._displayList=null}};return w}();t.Geometry=z;Object.defineProperty(t,"__esModule",{value:!0})});