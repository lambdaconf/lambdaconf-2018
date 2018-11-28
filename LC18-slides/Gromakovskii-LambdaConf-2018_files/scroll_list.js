define(["require","exports","tslib","react","react-dom","spectrum_comments/utils/animate_scroll"],function(e,n,t,o,i,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=(function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.setRef=function(e){n.listRef=e},n.scrollToElem=function(e){var t=i.findDOMNode(n);if(t){var o=t.getBoundingClientRect().top,s=e.getBoundingClientRect().top-o-16,l=t.scrollTop+s;return r.animateScroll({timing:r.Timing.QuadEaseOut,container:t,yPos:l,duration:600})}},n}return t.__extends(n,e),n.prototype.componentDidMount=function(){this.props.onScroll&&this.listRef.addEventListener("scroll",this.props.onScroll),this.props.onWindowResize&&window.addEventListener("resize",this.props.onWindowResize)},n.prototype.componentWillUnmount=function(){this.props.onScroll&&this.listRef.removeEventListener("scroll",this.props.onScroll),this.props.onWindowResize&&window.removeEventListener("resize",this.props.onWindowResize)},n.prototype.render=function(){var e=this,n=this.props,i=n.children,r=(n.onWindowResize,t.__rest(n,["children","onWindowResize"]));return o.createElement("ul",t.__assign({},r,{ref:this.setRef}),o.Children.map(i,function(n){return o.cloneElement(n,{scrollToElem:e.scrollToElem})}))},n})(o.Component);n.ScrollList=s});
//# sourceMappingURL=scroll_list.min.js-vflLqumUC.map