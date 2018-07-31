"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCopyToClipboard = require("react-copy-to-clipboard");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CopyToClip = function (_Component) {
  (0, _inherits3.default)(CopyToClip, _Component);

  function CopyToClip() {
    (0, _classCallCheck3.default)(this, CopyToClip);
    return (0, _possibleConstructorReturn3.default)(this, (CopyToClip.__proto__ || (0, _getPrototypeOf2.default)(CopyToClip)).apply(this, arguments));
  }

  (0, _createClass3.default)(CopyToClip, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          text = _props.text,
          onCopy = _props.onCopy,
          children = _props.children;

      return _react2.default.createElement(
        _reactCopyToClipboard.CopyToClipboard,
        {
          text: text,
          onCopy: onCopy
        },
        children
      );
    }
  }]);
  return CopyToClip;
}(_react.Component);
//import classnames from "classnames";


CopyToClip.propTypes = {
  text: _propTypes2.default.string.isRequired,
  onCopy: _propTypes2.default.func,
  children: _propTypes2.default.node
};
exports.default = CopyToClip;
//# sourceMappingURL=index.js.map