'use strict';

Object.defineProperty(exports, "__esModule", {
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

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n\n  /* Default Button styles */\n  .ant-btn-default {\n    border: 1px solid ', ';\n    color: #6f7583;\n    height: 32px;\n    padding: 0px 32px;\n    font-size: 14px;\n    &.ant-btn-sm {\n      color: ', ';\n      font-size: 12px;\n      padding: 0px 12px;\n    }\n    &:hover {\n      border: 1px solid ', ';\n    }\n    &:focus,\n    &.active {\n      border: 1px solid ', ';\n      color: ', ';\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      border: 1px solid ', ';\n      border-radius: 4px;\n      background-color: ', ';\n      color: ', ';\n    }\n  }\n  /* edit Button styles */\n  .ant-btn-edit {\n    border: 1px solid ', ';\n    color: ', ';\n    height: 32px;\n    padding: 0px 12px;\n    font-size: 14px;\n\n    &.ant-btn-sm {\n      color: ', ';\n      font-size: 12px;\n      padding: 0px 12px;\n    }\n    &:hover {\n      border: 1px solid ', ';\n      color: ', ';\n\n      span {\n        color: ', ';\n      }\n    }\n    &:focus,\n    &.active {\n      border: 1px solid ', ';\n      color: ', ';\n      span {\n        color: ', ';\n      }\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      border: 1px solid ', ';\n      border-radius: 4px;\n      background-color: ', ';\n      color: ', ';\n    }\n  }\n\n  /* Primary Button styles */\n  .ant-btn-primary {\n    border: 1px solid ', ';\n    background-color: ', ';\n    color: #fff;\n    font-size: 14px;\n    height: 32px;\n    padding: 0px 32px;\n    &.ant-btn-sm {\n      color: #fff;\n      font-size: 12px;\n      padding: 0px 12px;\n    }\n    &:hover {\n      border: 1px solid ', ';\n      background: ', ';\n    }\n    &:focus,\n    &.active {\n      border: 1px solid ', ';\n      background: ', ';\n      color: #fff;\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      border: 1px solid #ced2db;\n      border-radius: 4px;\n      background-color: #ced2db;\n      color: #fff;\n    }\n  }\n  /* pillsDefault Button styles */\n  .ant-btn-pillsDefault {\n    border: 1px solid ', ';\n    color: #6f7583;\n    height: 24px;\n    padding: 0px 12px;\n    font-size: 11px;\n    border-radius: 16px;\n    &.ant-btn-sm {\n      color: ', ';\n      font-size: 12px;\n      padding: 0px 12px;\n\n      &:focus,\n      &.active {\n        border: 1px solid ', ';\n        color: ', ';\n      }\n    }\n    &:focus,\n    &:hover,\n    &.active {\n      border: 1px solid ', ';\n      color: ', ';\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      border: 1px solid ', ';\n      border-radius: 16px;\n      background-color: ', ';\n      color: ', ';\n    }\n  }\n\n  /* pillsPrimary Button styles */\n  .ant-btn-pillsPrimary {\n    border: 1px solid ', ';\n    color: ', ';\n    height: 24px;\n    padding: 0px 12px;\n    font-size: 11px;\n    border-radius: 16px;\n    &.ant-btn-sm {\n      color: ', ';\n      font-size: 12px;\n      padding: 0px 12px;\n\n      &:focus,\n      &.active {\n        border: 1px solid ', ';\n        color: ', ';\n      }\n    }\n    &:focus,\n    &:hover,\n    &.active {\n      border: 1px solid ', ';\n      color: ', ';\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      border: 1px solid ', ';\n      border-radius: 16px;\n      background-color: ', ';\n      color: ', ';\n    }\n  }\n  /* Dashed Button styles */\n  .ant-btn-dashed {\n    border: 1px dashed ', ';\n    background-color: rgba(255, 255, 255, 0);\n    color: ', ';\n    font-size: 14px;\n    height: 32px;\n    padding: 0px 32px;\n    &.ant-btn-sm {\n      color: #fff;\n      font-size: 12px;\n      padding: 0px 12px;\n    }\n    &:hover {\n      color: ', ';\n    }\n    &:focus,\n    &.active {\n      color: ', ';\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      color: ', ';\n    }\n  }\n  .ant-btn-clicked {\n    outline: none;\n    outline-style: none;\n  }\n  /* Dashed Button styles */\n  .ant-btn-text {\n    border: 1px dashed transparent;\n    background-color: transparent;\n    font-size: 14px;\n    height: 32px;\n    padding: 0px 32px;\n    color: ', ';\n\n    &:hover,\n    &:focus {\n      border: 1px dashed transparent;\n      background-color: transparent;\n      color: ', ';\n    }\n    &.ant-btn-sm {\n      color: #fff;\n      font-size: 12px;\n      padding: 0px 12px;\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      color: ', ';\n    }\n  }\n  .ant-btn-clicked {\n    outline: none;\n    outline-style: none;\n  }\n\n  /* link Blue Button styles */\n  .ant-btn-link {\n    border: 1px solid ', ';\n    background-color: #fff;\n    font-size: 14px;\n    height: 32px;\n    padding: 0px 32px;\n    color: ', ';\n    &.ant-btn-sm {\n      color: #fff;\n      font-size: 12px;\n      padding: 0px 12px;\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      color: ', ';\n    }\n  }\n  .ant-btn-clicked {\n    outline-style: none;\n  }\n  .editIcon {\n    padding: 3px;\n  }\n'], ['\n  display: inline-block;\n\n  /* Default Button styles */\n  .ant-btn-default {\n    border: 1px solid ', ';\n    color: #6f7583;\n    height: 32px;\n    padding: 0px 32px;\n    font-size: 14px;\n    &.ant-btn-sm {\n      color: ', ';\n      font-size: 12px;\n      padding: 0px 12px;\n    }\n    &:hover {\n      border: 1px solid ', ';\n    }\n    &:focus,\n    &.active {\n      border: 1px solid ', ';\n      color: ', ';\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      border: 1px solid ', ';\n      border-radius: 4px;\n      background-color: ', ';\n      color: ', ';\n    }\n  }\n  /* edit Button styles */\n  .ant-btn-edit {\n    border: 1px solid ', ';\n    color: ', ';\n    height: 32px;\n    padding: 0px 12px;\n    font-size: 14px;\n\n    &.ant-btn-sm {\n      color: ', ';\n      font-size: 12px;\n      padding: 0px 12px;\n    }\n    &:hover {\n      border: 1px solid ', ';\n      color: ', ';\n\n      span {\n        color: ', ';\n      }\n    }\n    &:focus,\n    &.active {\n      border: 1px solid ', ';\n      color: ', ';\n      span {\n        color: ', ';\n      }\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      border: 1px solid ', ';\n      border-radius: 4px;\n      background-color: ', ';\n      color: ', ';\n    }\n  }\n\n  /* Primary Button styles */\n  .ant-btn-primary {\n    border: 1px solid ', ';\n    background-color: ', ';\n    color: #fff;\n    font-size: 14px;\n    height: 32px;\n    padding: 0px 32px;\n    &.ant-btn-sm {\n      color: #fff;\n      font-size: 12px;\n      padding: 0px 12px;\n    }\n    &:hover {\n      border: 1px solid ', ';\n      background: ', ';\n    }\n    &:focus,\n    &.active {\n      border: 1px solid ', ';\n      background: ', ';\n      color: #fff;\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      border: 1px solid #ced2db;\n      border-radius: 4px;\n      background-color: #ced2db;\n      color: #fff;\n    }\n  }\n  /* pillsDefault Button styles */\n  .ant-btn-pillsDefault {\n    border: 1px solid ', ';\n    color: #6f7583;\n    height: 24px;\n    padding: 0px 12px;\n    font-size: 11px;\n    border-radius: 16px;\n    &.ant-btn-sm {\n      color: ', ';\n      font-size: 12px;\n      padding: 0px 12px;\n\n      &:focus,\n      &.active {\n        border: 1px solid ', ';\n        color: ', ';\n      }\n    }\n    &:focus,\n    &:hover,\n    &.active {\n      border: 1px solid ', ';\n      color: ', ';\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      border: 1px solid ', ';\n      border-radius: 16px;\n      background-color: ', ';\n      color: ', ';\n    }\n  }\n\n  /* pillsPrimary Button styles */\n  .ant-btn-pillsPrimary {\n    border: 1px solid ', ';\n    color: ', ';\n    height: 24px;\n    padding: 0px 12px;\n    font-size: 11px;\n    border-radius: 16px;\n    &.ant-btn-sm {\n      color: ', ';\n      font-size: 12px;\n      padding: 0px 12px;\n\n      &:focus,\n      &.active {\n        border: 1px solid ', ';\n        color: ', ';\n      }\n    }\n    &:focus,\n    &:hover,\n    &.active {\n      border: 1px solid ', ';\n      color: ', ';\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      border: 1px solid ', ';\n      border-radius: 16px;\n      background-color: ', ';\n      color: ', ';\n    }\n  }\n  /* Dashed Button styles */\n  .ant-btn-dashed {\n    border: 1px dashed ', ';\n    background-color: rgba(255, 255, 255, 0);\n    color: ', ';\n    font-size: 14px;\n    height: 32px;\n    padding: 0px 32px;\n    &.ant-btn-sm {\n      color: #fff;\n      font-size: 12px;\n      padding: 0px 12px;\n    }\n    &:hover {\n      color: ', ';\n    }\n    &:focus,\n    &.active {\n      color: ', ';\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      color: ', ';\n    }\n  }\n  .ant-btn-clicked {\n    outline: none;\n    outline-style: none;\n  }\n  /* Dashed Button styles */\n  .ant-btn-text {\n    border: 1px dashed transparent;\n    background-color: transparent;\n    font-size: 14px;\n    height: 32px;\n    padding: 0px 32px;\n    color: ', ';\n\n    &:hover,\n    &:focus {\n      border: 1px dashed transparent;\n      background-color: transparent;\n      color: ', ';\n    }\n    &.ant-btn-sm {\n      color: #fff;\n      font-size: 12px;\n      padding: 0px 12px;\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      color: ', ';\n    }\n  }\n  .ant-btn-clicked {\n    outline: none;\n    outline-style: none;\n  }\n\n  /* link Blue Button styles */\n  .ant-btn-link {\n    border: 1px solid ', ';\n    background-color: #fff;\n    font-size: 14px;\n    height: 32px;\n    padding: 0px 32px;\n    color: ', ';\n    &.ant-btn-sm {\n      color: #fff;\n      font-size: 12px;\n      padding: 0px 12px;\n    }\n  }\n  .ant-btn {\n    &.disabled {\n      color: ', ';\n    }\n  }\n  .ant-btn-clicked {\n    outline-style: none;\n  }\n  .editIcon {\n    padding: 3px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtButton = _styledComponents2.default.div(_templateObject, _theme2.default.colors.ALTO, _theme2.default.colors.GREY, _theme2.default.colors.SILVER, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.DISABLE, _theme2.default.colors.DISABLE_INNER_SPACE, _theme2.default.colors.SILVER, _theme2.default.colors.ALTO, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.ALTO, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.ALTO, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.DISABLE, _theme2.default.colors.DISABLE_INNER_SPACE, _theme2.default.colors.SILVER, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.JODHPUR, _theme2.default.colors.JODHPUR, _theme2.default.colors.NEPTUNE, _theme2.default.colors.NEPTUNE, _theme2.default.colors.ALTO, _theme2.default.colors.GREY, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.DISABLE, _theme2.default.colors.DISABLE, _theme2.default.colors.SILVER, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.GREY, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.DISABLE, _theme2.default.colors.DISABLE, _theme2.default.colors.SILVER, _theme2.default.colors.ALTO, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.SHARK, _theme2.default.colors.SHARK, _theme2.default.colors.SILVER, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.GREY, _theme2.default.colors.SILVER, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.SILVER);

var noop = function noop() {
  return undefined;
};

var typeMap = {
  primary: 'primary',
  secondary: 'default',
  tertiary: 'dashed',
  link: 'link',
  text: 'text',
  edit: 'edit'
};

var Button = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          type = _props.type;

      var antdType = typeMap[type];
      return _react2.default.createElement(
        MtButton,
        null,
        _react2.default.createElement(
          _button2.default,
          (0, _extends3.default)({}, this.props, { type: antdType }),
          children,
          type === 'edit' && _react2.default.createElement(_Icon2.default, { type: 'edit', className: 'editIcon' })
        )
      );
    }
  }]);
  return Button;
}(_react.Component);

Button.propTypes = {
  onClick: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['primary', 'default', 'dashed', 'link', 'text', 'edit']),
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string
};
Button.defaultProps = {
  onClick: noop,
  children: 'Submit',
  disabled: false,
  type: 'primary'
};
exports.default = Button;
//# sourceMappingURL=index.js.map