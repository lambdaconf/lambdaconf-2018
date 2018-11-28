define(["require","exports","tslib","react","classnames","spectrum_comments/comment_avatar","spectrum_comments/comment_editor/draft_utils","spectrum_comments/comment_editor/core/editor_component"],function(e,t,n,s,i,r,o,c){"use strict";function m(e){var t=i("sc-comment-editor-mentions-suggestion",e.className);return s.createElement("li",{key:e.key},s.createElement("button",{className:t,onClick:e.onClick,onMouseDown:function(e){return e.preventDefault()}},s.createElement("div",null,e.children)))}Object.defineProperty(t,"__esModule",{value:!0}),t.MentionsListItem=m;var a=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onUserClick=function(e){t.triggers.suggestion.updateSelectedIndex(e),t.triggers.macro.apply(null)},t.onEmailClick=function(){t.triggers.macro.apply(null)},t}return n.__extends(t,e),t.prototype.renderInactive=function(){return s.createElement("span",null)},t.prototype.renderNoResults=function(){return s.createElement("div",{className:"sc-comment-editor-mentions-list-container"},s.createElement("div",{className:"sc-comment-editor-mentions-list-header"},this.localization.searchingMsg))},t.prototype.renderEmptyResults=function(e){var t=o.parseEmail(e.content.substring(1));return s.createElement("div",{className:"sc-comment-editor-mentions-list-container"},s.createElement("div",{className:"sc-comment-editor-mentions-list-header"},this.localization.noUsersFoundMsg),t&&s.createElement("ul",{className:"sc-comment-editor-mentions-list"},s.createElement(m,{className:"sc-comment-editor-mentions-suggestion-selected",onClick:this.onEmailClick},t[0])))},t.prototype.render=function(){var e=this,t=this,n=t.status,o=t.localization,c=n.macro,a=n.mentionSuggestions.users,l=c.active;if(!l)return this.renderInactive();if(null===a)return this.renderNoResults();if(!a.length)return this.renderEmptyResults(l);var u=n.suggestion.selectedIndex;return s.createElement("div",{className:"sc-comment-editor-mentions-list-container",contentEditable:!1},s.createElement("div",{className:"sc-comment-editor-mentions-list-header"},o.searchingMsg),s.createElement("ul",{className:"sc-comment-editor-mentions-list"},a.map(function(t,n){var o=i({"sc-comment-editor-mentions-suggestion-selected":u===n});return s.createElement(m,{key:t.id,className:o,onClick:function(){return e.onUserClick(n)}},s.createElement(r.CommentAvatar,{user:t}),s.createElement("div",{className:"sc-comment-editor-mentions-user"},s.createElement("div",{className:"sc-comment-editor-mentions-name"},t.name.display),s.createElement("div",{className:"sc-comment-editor-mentions-email"},t.email)))})))},t})(c.EditorComponent);t.MentionSuggestionsListComponent=a});
//# sourceMappingURL=mention_suggestions_list_component.min.js-vflPrql_g.map