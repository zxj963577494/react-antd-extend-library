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

import 'antd/es/input/style/css';
import _Input from 'antd/es/input';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import React, { PureComponent } from 'react';
import 'prop-types';

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
      return React.createElement(_Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      });
    }
  }]);

  return MyInput;
}(PureComponent);

export { MyInput };
