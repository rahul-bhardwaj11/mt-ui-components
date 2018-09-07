'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _ANT_BUTTON_SIZES_MAP, _ANTD_BUTTON_TYPE_MAP, _ANTD_BUTTON_SIZE_PAD;

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

var BUTTON_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  LINK: 'link',
  TEXT: 'text',
  EDIT: 'edit',
  DISABLED: 'disabled'
};

var BUTTON_SIZES = {
  LARGE: 'large',
  SMALL: 'small',
  MEDIUM: 'medium'
};

var ANT_BUTTON_SIZES_MAP = (_ANT_BUTTON_SIZES_MAP = {}, (0, _defineProperty3.default)(_ANT_BUTTON_SIZES_MAP, BUTTON_SIZES.LARGE, BUTTON_SIZES.LARGE), (0, _defineProperty3.default)(_ANT_BUTTON_SIZES_MAP, BUTTON_SIZES.MEDIUM, 'default'), (0, _defineProperty3.default)(_ANT_BUTTON_SIZES_MAP, BUTTON_SIZES.SMALL, BUTTON_SIZES.SMALL), _ANT_BUTTON_SIZES_MAP);

var ANTD_BUTTON_TYPE_MAP = (_ANTD_BUTTON_TYPE_MAP = {}, (0, _defineProperty3.default)(_ANTD_BUTTON_TYPE_MAP, BUTTON_TYPES.PRIMARY, 'primary'), (0, _defineProperty3.default)(_ANTD_BUTTON_TYPE_MAP, BUTTON_TYPES.SECONDARY, 'default'), (0, _defineProperty3.default)(_ANTD_BUTTON_TYPE_MAP, BUTTON_TYPES.TERTIARY, 'dashed'), (0, _defineProperty3.default)(_ANTD_BUTTON_TYPE_MAP, BUTTON_TYPES.LINK, 'link'), (0, _defineProperty3.default)(_ANTD_BUTTON_TYPE_MAP, BUTTON_TYPES.TEXT, 'text'), (0, _defineProperty3.default)(_ANTD_BUTTON_TYPE_MAP, BUTTON_TYPES.EDIT, 'edit'), (0, _defineProperty3.default)(_ANTD_BUTTON_TYPE_MAP, BUTTON_TYPES.DISABLED, 'disabled'), _ANTD_BUTTON_TYPE_MAP);

var ANTD_BUTTON_SIZE_PADDING = (_ANTD_BUTTON_SIZE_PAD = {}, (0, _defineProperty3.default)(_ANTD_BUTTON_SIZE_PAD, BUTTON_SIZES.LARGE, '0px 32px'), (0, _defineProperty3.default)(_ANTD_BUTTON_SIZE_PAD, BUTTON_SIZES.MEDIUM, '0px 24px'), (0, _defineProperty3.default)(_ANTD_BUTTON_SIZE_PAD, BUTTON_SIZES.SMALL, '0px 12px'), _ANTD_BUTTON_SIZE_PAD);

var MtButton = (0, _styledComponents2.default)('span').withConfig({
  displayName: 'Button__MtButton',
  componentId: 'qzbo19-0'
})(['.ant-btn-default{border:1px solid ', ';color:#6f7583;height:32px;padding:', ';font-size:14px;&.ant-btn-sm{color:', ';font-size:12px;padding:0px 12px;}&:hover{color:', ';border:1px solid ', ';}&:active,&:focus,&.active{border:1px solid ', ';color:', ';}}.ant-btn{&.disabled{border:1px solid ', ';border-radius:4px;color:#fff;background:', ';}}.ant-btn-primary{border:1px solid ', ';background-color:', ';color:#fff;font-size:14px;height:32px;padding:', ';&.ant-btn-sm{color:#fff;font-size:12px;padding:0px 12px;}&:hover{border:1px solid ', ';background:', ';}&:focus,&:active,&.active{border:1px solid ', ';background:', ';color:#fff;}}.ant-btn{&.disabled{border:1px solid ', ';background-color:', ';color:#fff;border-radius:4px;}}.ant-btn{&.disabled{border:1px solid ', ';background-color:', ';color:#fff;}}.ant-btn-edit{border:1px solid ', ';color:', ';height:32px;padding:0px 12px;font-size:14px;&.ant-btn-sm{color:', ';font-size:12px;padding:0px 12px;}&:hover{border:1px solid ', ';color:', ';span{color:', ';}}&:focus,&:active,&.active{border:1px solid ', ';color:', ';span{color:', ';}}}.ant-btn{&.disabled{border:1px solid ', ';border-radius:4px;background-color:', ';color:#fff;}}.ant-btn-dashed{border:1px dashed ', ';background-color:rgba(255,255,255,0);color:', ';font-size:14px;height:32px;padding:0px 32px;&.ant-btn-sm{color:#fff;font-size:12px;padding:0px 12px;}&:hover{color:', ';}&:focus,&:active,&.active{color:', ';}}.ant-btn{&.disabled{border:1px solid ', ';background-color:', ';color:#fff;}}.ant-btn-clicked{outline:none;outline-style:none;}.ant-btn-text{border:1px dashed transparent;background-color:transparent;font-size:14px;height:32px;padding:0px 32px;color:', ';', ';', ';&:hover,&:focus,&:active{border:1px dashed transparent;', ';}&.ant-btn-sm{color:#fff;font-size:12px;padding:0px 12px;}}.ant-btn{&.disabled{border:1px solid ', ';background-color:', ';color:#fff;}}.ant-btn-clicked{outline:none;outline-style:none;}.ant-btn-link{border:1px solid ', ';background-color:#fff;font-size:14px;height:32px;padding:0px 32px;color:', ';&.ant-btn-sm{color:#fff;font-size:12px;padding:0px 12px;}}.ant-btn{&.disabled{border:1px solid ', ';background-color:', ';color:#fff;}}.ant-btn-clicked{outline-style:none;}.editIcon{padding:3px;}'], _theme2.default.colors.ALTO, function (props) {
  return ANTD_BUTTON_SIZE_PADDING[props.size];
}, _theme2.default.colors.GREY, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.SILVER, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.DISABLE, _theme2.default.colors.ALTO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, function (props) {
  return ANTD_BUTTON_SIZE_PADDING[props.size];
}, _theme2.default.colors.JODHPUR, _theme2.default.colors.JODHPUR, _theme2.default.colors.NEPTUNE, _theme2.default.colors.NEPTUNE, _theme2.default.colors.ALTO, _theme2.default.colors.ALTO, _theme2.default.colors.ALTO, _theme2.default.colors.ALTO, _theme2.default.colors.ALTO, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.ALTO, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.ALTO, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.DISABLE, _theme2.default.colors.ALTO, _theme2.default.colors.ALTO, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.SHARK, _theme2.default.colors.SHARK, _theme2.default.colors.ALTO, _theme2.default.colors.ALTO, _theme2.default.colors.OUTER_SPACE, function (props) {
  return props.active ? 'color: ' + _theme2.default.colors.INDIGO + ';\n      background-color: ' + _theme2.default.colors.TROPICAL_BLUE : null;
}, function (props) {
  return props.disabled ? 'color: ' + _theme2.default.colors.OUTER_SPACE : null;
}, function (props) {
  return props.active ? 'color: ' + _theme2.default.colors.INDIGO + ';\n        background-color: ' + _theme2.default.colors.TROPICAL_BLUE : 'background-color: transparent;\n          color: ' + _theme2.default.colors.INDIGO + ';';
}, _theme2.default.colors.ALTO, _theme2.default.colors.ALTO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.ALTO, _theme2.default.colors.ALTO);

var noop = function noop() {
  return undefined;
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
          type = _props.type,
          style = _props.style,
          active = _props.active,
          disabled = _props.disabled,
          size = _props.size;

      var antdType = ANTD_BUTTON_TYPE_MAP[type];
      return _react2.default.createElement(
        MtButton,
        { active: active, disabled: disabled, size: size },
        _react2.default.createElement(
          _button2.default,
          (0, _extends3.default)({}, this.props, {
            type: antdType,
            style: style,
            size: ANT_BUTTON_SIZES_MAP[size] || ANT_BUTTON_SIZES_MAP.LARGE
          }),
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
  type: _propTypes2.default.oneOf((0, _values2.default)(BUTTON_TYPES)),
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf((0, _values2.default)(BUTTON_SIZES)),
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool
};
Button.defaultProps = {
  onClick: noop,
  children: 'Submit',
  disabled: false,
  type: BUTTON_TYPES.PRIMARY,
  size: 'large'
};
exports.default = Button;
//# sourceMappingURL=index.js.map