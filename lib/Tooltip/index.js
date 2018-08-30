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

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: inline;\n"], ["\n  display: inline;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _tooltip = require("antd/lib/tooltip");

var _tooltip2 = _interopRequireDefault(_tooltip);

require("antd/lib/tooltip/style/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtTooltip = _styledComponents2.default.div(_templateObject);

var Tooltip = function (_Component) {
  (0, _inherits3.default)(Tooltip, _Component);

  function Tooltip() {
    (0, _classCallCheck3.default)(this, Tooltip);
    return (0, _possibleConstructorReturn3.default)(this, (Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tooltip, [{
    key: "render",
    value: function render() {
      var children = this.props.children;


      return _react2.default.createElement(
        MtTooltip,
        null,
        _react2.default.createElement(
          _tooltip2.default,
          this.props,
          children
        )
      );
    }
  }]);
  return Tooltip;
}(_react.Component);

Tooltip.propTypes = {
  children: _propTypes2.default.node,
  title: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string])
};
exports.default = Tooltip;
//# sourceMappingURL=index.js.map