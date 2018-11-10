!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(/*! @babel/runtime/helpers/extends */2)),i=r(n(/*! @babel/runtime/helpers/objectWithoutProperties */3)),l=r(n(/*! @babel/runtime/helpers/objectSpread */4)),u=r(n(/*! @babel/runtime/helpers/classCallCheck */5)),s=r(n(/*! @babel/runtime/helpers/createClass */6)),a=r(n(/*! @babel/runtime/helpers/possibleConstructorReturn */7)),d=r(n(/*! @babel/runtime/helpers/getPrototypeOf */8)),f=r(n(/*! @babel/runtime/helpers/inherits */9)),c=r(n(/*! react */10)),h=!1;"undefined"==typeof navigator?h=!0:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(h=!0);var p=function(e){function t(){var e,n;(0,u.default)(this,t);for(var r=arguments.length,s=new Array(r),f=0;f<r;f++)s[f]=arguments[f];return(n=(0,a.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(s)))).state={hover:!1,focus:!1,active:!1,visited:!1},n.handleClick=function(){!1===n.state.visited&&n.setState({visited:!0})},n.handleMouseIn=function(){n.setState({hover:!0})},n.handleMouseOut=function(){n.setState({hover:!1,active:!1})},n.handleMouseDown=function(){n.setState({active:!0})},n.handleMouseUp=function(){n.setState({active:!1})},n.handleFocus=function(){n.setState({focus:!0})},n.handleBlur=function(){n.setState({focus:!1})},n.select=function(e,t,r){return n.state.focus?r:n.state.hover?t:e},n.fixStyle=function(){var e=n.props,t=e.merge,r=e.style,o=e.disable,i=e.focusStyle,u=e.hoverStyle,s=e.activeStyle,a=e.visitedStyle,d=e.disableStyle,f=e.alwayStyle,c=n.props.linkStyle;void 0!==a&&!0===n.state.visited&&(c=a);var h=t?(0,l.default)({},r,c):(0,l.default)({},c);return o?(0,l.default)({},h,d,f):s&&n.state.active?(0,l.default)({},h,s,f):i&&n.state.focus?(0,l.default)({},h,i,f):u&&n.state.hover?(0,l.default)({},h,u,f):(0,l.default)({},r,c,f)},n.renderDiv=function(e){var t=n.props,r=(t.style,t.merge,t.disable,t.linkStyle,t.focusStyle,t.hoverStyle,t.activeStyle,t.visitedStyle,t.disableStyle,t.alwayStyle,(0,i.default)(t,["style","merge","disable","linkStyle","focusStyle","hoverStyle","activeStyle","visitedStyle","disableStyle","alwayStyle"]));return c.default.createElement("div",(0,o.default)({},e,r))},n}return(0,f.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e;return e="function"==typeof this.props.children?this.props.children:this.renderDiv,this.props.disable?e({style:this.fixStyle()},(0,l.default)({},this.state)):e(h?{onFocus:this.handleFocus,onBlur:this.handleBlur,style:this.fixStyle(),onClick:this.handleClick,onTouchStart:this.handleMouseDown,onTouchEnd:this.handleMouseUp,onTouchCancel:this.handleMouseOut}:{onMouseEnter:this.handleMouseIn,onMouseLeave:this.handleMouseOut,onFocus:this.handleFocus,onBlur:this.handleBlur,style:this.fixStyle(),onClick:this.handleClick,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp},(0,l.default)({},this.state))}}]),t}(c.default.PureComponent);p.defaultProps={merge:!0,disable:!1,style:void 0,linkStyle:void 0,focusStyle:void 0,hoverStyle:void 0,activeStyle:void 0,visitedStyle:void 0,disableStyle:void 0,alwayStyle:void 0};var y=p;t.default=y},
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=require("@babel/runtime/helpers/interopRequireDefault")},
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=require("@babel/runtime/helpers/extends")},
/*!*****************************************************************!*\
  !*** external "@babel/runtime/helpers/objectWithoutProperties" ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=require("@babel/runtime/helpers/objectWithoutProperties")},
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=require("@babel/runtime/helpers/objectSpread")},
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=require("react")}])});
//# sourceMappingURL=index.js.map