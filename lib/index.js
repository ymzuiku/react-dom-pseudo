!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var n="object"==typeof exports?t(require("react")):t(e.react);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){"use strict";var o=n(/*! @babel/runtime/helpers/interopRequireDefault */1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(/*! @babel/runtime/helpers/extends */2)),i=o(n(/*! @babel/runtime/helpers/objectWithoutProperties */3)),u=o(n(/*! @babel/runtime/helpers/objectSpread */5)),l=o(n(/*! @babel/runtime/helpers/classCallCheck */7)),a=o(n(/*! @babel/runtime/helpers/createClass */8)),f=o(n(/*! @babel/runtime/helpers/possibleConstructorReturn */9)),c=o(n(/*! @babel/runtime/helpers/getPrototypeOf */12)),s=o(n(/*! @babel/runtime/helpers/inherits */13)),y=o(n(/*! react */15)),p=!1;"undefined"==typeof navigator?p=!0:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(p=!0);var d=function(e){function t(){var e,n;(0,l.default)(this,t);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(n=(0,f.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(a)))).state={hover:!1,focus:!1,active:!1,visited:!1},n.handleClick=function(){!1===n.state.visited&&n.setState({visited:!0})},n.handleMouseIn=function(){n.setState({hover:!0})},n.handleMouseOut=function(){n.setState({hover:!1,active:!1})},n.handleMouseDown=function(){n.setState({active:!0})},n.handleMouseUp=function(){n.setState({active:!1})},n.handleFocus=function(){n.setState({focus:!0})},n.handleBlur=function(){n.setState({focus:!1})},n.select=function(e,t,o){return n.state.focus?o:n.state.hover?t:e},n.fixStyle=function(){var e=n.props,t=e.merge,o=e.style,r=e.disable,i=e.focusStyle,l=e.hoverStyle,a=e.activeStyle,f=e.visitedStyle,c=e.disableStyle,s=e.alwayStyle,y=n.props.linkStyle;void 0!==f&&!0===n.state.visited&&(y=f);var p=t?(0,u.default)({},o,y):(0,u.default)({},y);return r?(0,u.default)({},p,c,s):a&&n.state.active?(0,u.default)({},p,a,s):i&&n.state.focus?(0,u.default)({},p,i,s):l&&n.state.hover?(0,u.default)({},p,l,s):(0,u.default)({},o,y,s)},n.renderDiv=function(e){var t=n.props,o=(t.style,t.merge,t.disable,t.linkStyle,t.focusStyle,t.hoverStyle,t.activeStyle,t.visitedStyle,t.disableStyle,t.alwayStyle,(0,i.default)(t,["style","merge","disable","linkStyle","focusStyle","hoverStyle","activeStyle","visitedStyle","disableStyle","alwayStyle"]));return y.default.createElement("div",(0,r.default)({},e,o))},n}return(0,s.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e;return e="function"==typeof this.props.children?this.props.children:this.renderDiv,this.props.disable?e({style:this.fixStyle()}):e(p?{onFocus:this.handleFocus,onBlur:this.handleBlur,style:this.fixStyle(),onClick:this.handleClick,onTouchStart:this.handleMouseDown,onTouchEnd:this.handleMouseUp,onTouchCancel:this.handleMouseOut}:{onMouseEnter:this.handleMouseIn,onMouseLeave:this.handleMouseOut,onFocus:this.handleFocus,onBlur:this.handleBlur,style:this.fixStyle(),onClick:this.handleClick,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp})}}]),t}(y.default.PureComponent);d.defaultProps={merge:!0,disable:!1,style:void 0,linkStyle:void 0,focusStyle:void 0,hoverStyle:void 0,activeStyle:void 0,visitedStyle:void 0,disableStyle:void 0,alwayStyle:void 0};var v=d;t.default=v},
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){var o=n(/*! ./objectWithoutPropertiesLoose */4);e.exports=function(e,t){if(null==e)return{};var n,r,i=o(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}},
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){var o=n(/*! ./defineProperty */6);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}},
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){var o=n(/*! ../helpers/typeof */10),r=n(/*! ./assertThisInitialized */11);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(e){return n(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(t)}e.exports=o},
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){var o=n(/*! ./setPrototypeOf */14);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(t,n){t.exports=e}])});
//# sourceMappingURL=index.js.map