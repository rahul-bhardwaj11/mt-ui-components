'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    '\n  .ant-tooltip-inner {\n    min-height: unset;\n    padding: 4px 8px 6px;\n    ',
    ';\n    color: #ffffff;\n    font-weight: 600;\n    text-align: center;\n  }\n'
  ],
  [
    '\n  .ant-tooltip-inner {\n    min-height: unset;\n    padding: 4px 8px 6px;\n    ',
    ';\n    color: #ffffff;\n    font-weight: 600;\n    text-align: center;\n  }\n'
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

require('antd/lib/tooltip/style/index.css');

var _mixins = require('../styles/mixins.js');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MtTooltip = _styledComponents2.default.div(
  _templateObject,
  _mixins2.default.smallInactiveLink()
);

var Tooltip = (function(_Component) {
  (0, _inherits3.default)(Tooltip, _Component);

  function Tooltip() {
    (0, _classCallCheck3.default)(this, Tooltip);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Tooltip, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          children = _props.children,
          className = _props.className;

        return _react2.default.createElement(
          MtTooltip,
          {
            className: className,
            innerRef: function innerRef(ele) {
              return (_this2.popUpContainer = ele);
            }
          },
          _react2.default.createElement(
            _tooltip2.default,
            (0, _extends3.default)({}, this.props, {
              getPopupContainer: function getPopupContainer() {
                return _this2.popUpContainer;
              }
            }),
            children
          )
        );
      }
    }
  ]);
  return Tooltip;
})(_react.Component);

Tooltip.propTypes = {
  children: _propTypes2.default.node,
  title: _propTypes2.default.oneOfType([
    _propTypes2.default.node,
    _propTypes2.default.string
  ]),
  className: _propTypes2.default.string
};
exports.default = Tooltip;
