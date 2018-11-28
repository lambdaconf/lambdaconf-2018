define(["require","exports","tslib","external/create-react-class","external/eventemitter3","react","external/react-dom","external/prop-types","external/lodash","modules/clean/analytics","modules/clean/comments/components/file_preview_annotations","modules/clean/comments/components/file_preview_overlay","modules/clean/comments/components/switch_revision_ui_container","modules/clean/comments/events","modules/clean/comments/flux","modules/clean/comments/more_option_helpers","modules/clean/comments/store","modules/clean/comments/url_handler","modules/clean/comments/utils","modules/clean/react/file_comments/file_comments_pane","modules/clean/react/file_comments/shared_link_signup_modals","modules/clean/react/file_viewer/file_viewer_interface_controller","modules/clean/react/file_viewer/more_dropdown/more_option_registry","modules/clean/react/file_viewer/utils","modules/core/exception","modules/clean/react/comments2/util","modules/clean/viewer"],function(e,t,n,i,o,r,s,a,l,u,c,m,d,p,h,v,f,w,C,y,_,g,F,R,I,S,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=n.__importDefault(i),o=n.__importDefault(o),r=n.__importDefault(r),s=n.__importStar(s),a=n.__importStar(a),l=n.__importStar(l),c=n.__importDefault(c),m=n.__importDefault(m),h=n.__importStar(h),v=n.__importStar(v),f=n.__importDefault(f),w=n.__importStar(w),C=n.__importStar(C),S=n.__importStar(S);var b=i.default({displayName:"FileCommentsPaneContainer",mixins:[h.sync(f.default),p.CommentsEventsMixin],propTypes:{actorId:a.number,commentsDisabledOnFile:a.bool,context:a.number,contextData:a.string,currentFile:a.object,oref:a.string,previewSelector:a.string.isRequired,shouldInitiallyFocusInput:a.bool,initialCommentsCount:a.number,actionCreators:a.object.isRequired,showToggleButton:a.bool},componentWillMount:function(){return this.initAnnotationReadyQueue(),this.initSignUpModalIfNecessary(),this.onCommentsEvent("preview-and-comments-ready",this.onPreviewAndCommentsReady),this.onCommentsEvent("revision-did-change",this.onViewingRevisionDidChange),this.onCommentsEvent("reveal-annotation",this.onRevealAnnotation),this.onCommentsEvent("show-sign-up-modal",this.onShowSignUpModal)},componentDidMount:function(){null!=this.props.context&&null!=this.props.contextData&&this.onFileViewerOpen(this.props),this.props.actionCreators.showOnboardingIfNecessary(),this.updateCommentsMoreOptionGroup(),this.renderSwitchRevisionUI()},componentWillReceiveProps:function(e){if(this.state.viewing.contextData!==e.contextData)return this.state.viewing.contextData?this.onFileViewerFlip(e):this.onFileViewerOpen(e)},componentDidUpdate:function(){return this.updateCommentsMoreOptionGroup()},componentWillUnmount:function(){return this.clearAnnotationReadyQueue(),this.removeCommentsMoreOptionGroup(),this.unmountSwitchRevisionUI(),this.onFileViewerClose()},_onViewingFileWillChange:function(e){u.CommentsVortexLogger.log("load-comments-attempt"),this.isAnnotationReady=!1,this.unmountFilePreviewComponents(),this.props.actionCreators.startViewingComments({actorId:e.actorId,context:e.context,contextData:e.contextData,oref:e.oref,file:e.currentFile,previewSelector:e.previewSelector,showCommentsOverride:e.shouldInitiallyFocusInput||null,showTutorialOverride:null}),this.asyncMountFilePreviewComponents()},onFileViewerOpen:function(e){return this._onViewingFileWillChange(e)},onFileViewerFlip:function(e){return this._onViewingFileWillChange(e),w.onFileViewerFlip()},onFileViewerClose:function(){return this.isAnnotationReady=!1,this.unmountFilePreviewComponents(),this.props.actionCreators.stopViewingComments(),w.onFileViewerClose()},onViewingRevisionDidChange:function(){return this.isAnnotationReady=!1,this.unmountFilePreviewComponents(),this.asyncMountFilePreviewComponents()},onPreviewAndCommentsReady:function(){return I.assert(null!=this.fileViewerInterfaceController,"File viewer interface controller is not initialized"),this.unmountFilePreviewAnnotations(),this.unmountFilePreviewOverlay(),this.mountFilePreviewAnnotations(),this.mountFilePreviewOverlay(),this.isAnnotationReady=!0,this.processAnnotationReadyQueue(),w.onPreviewAndCommentsReady(this.props.actionCreators)},renderSwitchRevisionUI:function(){return s.render(r.default.createElement(d.SwitchRevisionUIContainer,{actionCreators:this.props.actionCreators}),this.getOrCreateSwitchRevisionUIContainerNode())},unmountSwitchRevisionUI:function(){var e=this.getSwitchRevisionUIContainerNode();if(null!=e)return s.unmountComponentAtNode(e)},getSwitchRevisionUIContainerNode:function(){return document.getElementById("switch-revision-container")},getOrCreateSwitchRevisionUIContainerNode:function(){var e=this.getSwitchRevisionUIContainerNode();return null==e&&(e=document.createElement("div"),e.id="switch-revision-container",document.body.appendChild(e)),e},asyncMountFilePreviewComponents:function(){return this.createFileViewerInterfaceController()},unmountFilePreviewComponents:function(){return this.unmountFilePreviewAnnotations(),this.unmountFilePreviewOverlay(),this.destroyFileViewerInterfaceController(),"function"==typeof this.state.unsubscribePreviewAndCommentsReady?this.state.unsubscribePreviewAndCommentsReady():void 0},mountFilePreviewAnnotations:function(){var e=this.state.actorId?A.Viewer.get_viewer().get_user_by_id(this.state.actorId):void 0;S.isComments2ImageAnnotationsEnabled(e)||(this.filePreviewAnnotations=c.default.create(this.props.actionCreators),this.filePreviewAnnotations.mount(this.fileViewerInterfaceController))},unmountFilePreviewAnnotations:function(){if(null!=this.filePreviewAnnotations?this.filePreviewAnnotations.isMounted():void 0)return this.filePreviewAnnotations.unmount()},getOrCreateFilePreviewOverlayContainer:function(e){var t=document.getElementById("annotation-overlay");return t||(t=document.createElement("div"),t.id="annotation-overlay",e.appendChild(t)),t},mountFilePreviewOverlay:function(){var e=document.querySelector(this.props.previewSelector);if(!e)return void console.error("Preview container does not exist!");this.overlayContainerNode=this.getOrCreateFilePreviewOverlayContainer(e);var t=r.default.createElement(m.default,{previewContainer:e,actionCreators:this.props.actionCreators});return s.render(t,this.overlayContainerNode)},unmountFilePreviewOverlay:function(){if(this.overlayContainerNode)return s.unmountComponentAtNode(this.overlayContainerNode)},createFileViewerInterfaceController:function(){var e=this,t=f.default.state.viewing,n=t.context,i=t.file;return this.fileViewerInterfaceController=new g.FileViewerInterfaceController(R.getFileViewerInterfaceType(n,i.preview_type)),this.fileViewerInterfaceController.addListener("page-rendered",function(t){var n=null!=(null!=t?t.page:void 0);if(!n||n&&!e.state.isPreviewReady&&!(null!=t?t.isFullscreen:void 0))return e.props.actionCreators.notifyPreviewReady()}),this.fileViewerInterfaceController.dispatchEvent("file-feedback-ui-ready")},destroyFileViewerInterfaceController:function(){return null!=this.fileViewerInterfaceController?this.fileViewerInterfaceController.destroy():void 0},initAnnotationReadyQueue:function(){return this.annotationReadyQueue=new o.default},clearAnnotationReadyQueue:function(){return this.annotationReadyQueue.removeAllListeners()},processAnnotationReadyQueue:function(){return this.annotationReadyQueue.emit("reveal-annotation")},onRevealAnnotation:function(e){return this.isAnnotationReady?this.doRevealAnnotation(e):(this.annotationReadyQueue.removeAllListeners("reveal-annotation"),this.annotationReadyQueue.once("reveal-annotation",l.partial(this.doRevealAnnotation,e)))},doRevealAnnotation:function(e){return this.fileViewerInterfaceController.dispatchEvent("scroll-to-annotation",e)},onShowSignUpModal:function(e){var t=e.fileActivityKey,n=e.variant;return I.assert(null!=this.signUpModal,"Sign-up modal not initialized!"),this.signUpModal.set_activity_key(t),this.signUpModal.show_sign_in_modal(n)},initSignUpModalIfNecessary:function(){C.getActivityUser(this.state.actorId).is_signed_in||this.props.commentsDisabledOnFile||(this.signUpModal=_.CommentsSharedLinkSignupModals.createInstance())},_getRelevantStoreState:function(){return{isFileActivityReady:f.default.isFileActivityReady(),isCommentingEnabled:f.default.isCommentingEnabled(),isUserSubscribed:f.default.isUserSubscribed(this.props.actorId),showResolvedComments:f.default.state.showResolvedComments,canEnableComments:f.default.canEnableComments()}},updateCommentsMoreOptionGroup:function(){var e=v.generateMoreOptionGroup(this._getRelevantStoreState(),this.props,this.props.actionCreators);return null==e?this.removeCommentsMoreOptionGroup():null==this._moreOptionGroup?F.moreOptionRegistry.addOption(e):F.moreOptionRegistry.replaceOption(this._moreOptionGroup,e),this._moreOptionGroup=e},removeCommentsMoreOptionGroup:function(){if(null!=this._moreOptionGroup)return F.moreOptionRegistry.removeOption(this._moreOptionGroup)},getInitialCommentsCount:function(){return null!=this.props.initialCommentsCount?this.props.initialCommentsCount:null!=(null!=this.props.currentFile?this.props.currentFile.unresolved_comment_count:void 0)?null!=this.props.currentFile?this.props.currentFile.unresolved_comment_count:void 0:null},render:function(){var e=this.getInitialCommentsCount(),t=f.default.areCommentsHidden();return r.default.createElement(y.FileCommentsPaneClass,{ref:"fileCommentsPane",feedbackId:"file-comments",activity:this.state.activity,showLoadingSpinner:0!==e&&this.state.showLoadingSpinner,context:this.state.viewing.context,contextData:this.state.viewing.contextData,userId:this.state.actorId,file:this.props.currentFile,oref:this.state.oref,isPreviewReady:this.state.isPreviewReady,showResolvedComments:this.state.showResolvedComments,showTutorial:f.default.isTutorialShown(),currentTutorialStep:this.state.currentTutorialStep,revisions:this.state.revisions,isCommentsHidden:t,enableImport:!1,previewSelector:this.props.previewSelector,shouldAutoLinkify:!0,shouldInitiallyFocusInput:this.props.shouldInitiallyFocusInput,shouldUseSimpleModals:!1,showButtonColor:"white",initialCommentsCount:e,isUserSubscribed:f.default.isUserSubscribed(this.state.actorId),isRegionCreationEnabled:this.state.regionCreationEnabled,actionCreators:this.props.actionCreators,isCommentingEnabled:f.default.isCommentingEnabled(),showToggleButton:this.props.showToggleButton})}});t.default=b});
//# sourceMappingURL=file_comments_pane_container.min.js-vfl-ocHOD.map