define(["require","exports","tslib","modules/clean/react/file_viewer/interface"],function(e,t,n,r){"use strict";function i(e){return JSON.stringify(e)}function a(e){try{return JSON.parse(e)}catch(e){return}}Object.defineProperty(t,"__esModule",{value:!0});var o=(function(e){function t(t){var n=e.call(this,t)||this;return n.handleMessageFromWindow=function(e){var t=a(e.data);t&&n.eventEmitter.emit(t.action,t.parameters)},window.addEventListener("message",n.handleMessageFromWindow),n}return n.__extends(t,e),t.prototype.dispatchEvent=function(e,t){window.postMessage(i({action:e,parameters:t}),"*")},t.prototype.destroy=function(){window.removeEventListener("message",this.handleMessageFromWindow)},t})(r.FileViewerInterface);t.FileViewerWindowInterface=o});
//# sourceMappingURL=window_interface.min.js-vfl0zZyS4.map