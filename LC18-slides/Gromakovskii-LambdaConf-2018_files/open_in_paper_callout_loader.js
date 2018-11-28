define(["require","exports","tslib","react","modules/clean/react/paper/utils","modules/clean/react/paper/utils","modules/clean/growth/gating","modules/clean/react/paper/open_in_paper_callout","modules/clean/react/size_class/constants","modules/clean/file_store/utils","modules/clean/growth/paper/paper_tracker"],function(e,t,r,n,a,o,s,i,p,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=r.__importDefault(n);var c=function(e){return a.fileSupportsCopyToPaper(e)?"paper_open_from_dropbox":"paper_embed_from_dropbox"},d=function(e){return a.fileSupportsCopyToPaper(e)?u.PaperActions.OPEN_FROM_DROPBOX_CALLOUT_DISMISS:u.PaperActions.EMBED_FROM_DROPBOX_CALLOUT_DISMISS},f=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={show:!1},t.checkShouldShowCallout=function(){var e=t.props,r=e.user,n=e.file,a=e.sharedLink,i=o.shouldShowOpenInPaper({user:r,file:n,sharedLink:a}),p=c(n);null!=r?s.growthCheckGating(r,p).then(function(e){var r=e.is_active;t.setState({show:i&&r})}):t.setState({show:i})},t.getCurrentVariant=function(){return a.getOpenInPaperButtonVariant({file:t.props.file,user:t.props.user,sharedLink:t.props.sharedLink})},t.trackUserActionOnDismiss=function(){var e=t.props,r=e.file,n=e.user;if(n){t.tracker||(t.tracker=new u.PaperTracker(n.id));var a=l.getExtension(r),o={extra:{extension:a}},s=d(r);t.tracker.track(s,o)}},t}return r.__extends(t,e),t.prototype.componentDidMount=function(){this.checkShouldShowCallout()},t.prototype.render=function(){var e=this.props,t=e.file,r=e.targetNode,o=e.variant,s=e.sizeClass,l=e.parentHasBeenClicked;return!this.state.show||o!==this.getCurrentVariant()||s&&s!==p.SizeClass.Large?null:n.default.createElement(i.OpenInPaperCallout,{file:t,targetNode:r,position:a.getCalloutPosition(o),parentHasBeenClicked:l,trackUserActionOnDismiss:this.trackUserActionOnDismiss})},t})(n.default.Component);t.OpenInPaperCalloutLoader=f});
//# sourceMappingURL=open_in_paper_callout_loader.min.js-vflqweH_C.map