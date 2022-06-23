// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../ViewingMode","../../state/controllers/GamepadKeyboardController","../../../input/InputHandler"],function(l,m,n,p,f){var c;(function(a){a[a.LEFT=0]="LEFT";a[a.RIGHT=1]="RIGHT";a[a.FORWARD=2]="FORWARD";a[a.BACKWARD=3]="BACKWARD";a[a.UP=4]="UP";a[a.DOWN=5]="DOWN";a[a.HEADINGLEFT=6]="HEADINGLEFT";a[a.HEADINGRIGHT=7]="HEADINGRIGHT";a[a.TILTUP=8]="TILTUP";a[a.TILTDOWN=9]="TILTDOWN";a[a.ZOOMIN=10]="ZOOMIN";a[a.ZOOMOUT=11]="ZOOMOUT"})(c||
(c={}));f=function(a){function g(d,b){var e=a.call(this,!0)||this;e.view=d;e.disableMovements={pan:!0,zoom:!1,ascend:!0,rotate:!1,mode:n.ViewingMode.Local};e.keyToNumber={[b.left]:c.LEFT,[b.right]:c.RIGHT,[b.forward]:c.FORWARD,[b.backward]:c.BACKWARD,[b.up]:c.UP,[b.down]:c.DOWN,[b.headingLeft]:c.HEADINGLEFT,[b.headingRight]:c.HEADINGRIGHT,[b.tiltUp]:c.TILTUP,[b.tiltDown]:c.TILTDOWN,[b.zoomIn]:c.ZOOMIN,[b.zoomOut]:c.ZOOMOUT};e.registerIncoming("key-down",null,h=>e._handleKeyDown(h));e.registerIncoming("key-up",
null,h=>e._handleKeyUp(h));e.registerIncoming("blur",null,()=>e._handleBlur());return e}m._inheritsLoose(g,a);var k=g.prototype;k._handleKeyDown=function(d){if(!d.data.native.ctrlKey&&!d.data.native.metaKey){var b=this.keyToNumber[d.data.key];null!=b&&(this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active||(this.cameraControllerKeyboard=new p.GamepadKeyboardController({view:this.view,disableMovements:this.disableMovements}),this.view.state.switchCameraController(this.cameraControllerKeyboard)),
this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.activateDirection(b),d.stopPropagation()))}};k._handleBlur=function(){this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.finishController(),this.cameraControllerKeyboard=null)};k._handleKeyUp=function(d){if(!d.data.native.ctrlKey&&!d.data.native.metaKey){var b=this.keyToNumber[d.data.key];null!=b&&this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.deactivateDirection(b),
d.stopPropagation())}};return g}(f.InputHandler);l.KeyboardNavigation=f;Object.defineProperty(l,"__esModule",{value:!0})});