define(["require","exports","tslib","external/reflux","modules/clean/previews/preview_toolbar_actions"],function(t,e,i,o,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o=i.__importStar(o),e.PreviewToolbarStore=o.createStore({listenables:r.PreviewToolbarActions,init:function(){this.state=this.getInitialState()},getInitialState:function(){return{hideToolbar:!1}},onHideToolbar:function(){this.state.hideToolbar=!0,this.trigger(this.state)},onShowToolbar:function(){this.state.hideToolbar=!1,this.trigger(this.state)}})});
//# sourceMappingURL=preview_toolbar_store.min.js-vflqslo_s.map