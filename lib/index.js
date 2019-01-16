'use strict';



function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('antd/es/input/style/css');
var _Input = _interopDefault(require('antd/es/input'));
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/createClass'));
var _possibleConstructorReturn = _interopDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));
var _getPrototypeOf = _interopDefault(require('@babel/runtime/helpers/getPrototypeOf'));
var _inherits = _interopDefault(require('@babel/runtime/helpers/inherits'));
var React = require('react');
var React__default = _interopDefault(React);
require('prop-types');

___$insertStyle("* {\n  font-size: inherit;\n}");

var _jsxFileName = "/home/zhengxujiang/Github/react-antd-extend-library/src/index.jsx";

var MyInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MyInput, _PureComponent);

  function MyInput() {
    _classCallCheck(this, MyInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyInput).apply(this, arguments));
  }

  _createClass(MyInput, [{
    key: "render",
    value: function render() {
      return React__default.createElement(_Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      });
    }
  }]);

  return MyInput;
}(React.PureComponent);

exports.MyInput = MyInput;
