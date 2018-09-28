'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
);

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _ANT_BUTTON_SIZES_MAP, _ANTD_BUTTON_TYPE_MAP;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var BUTTON_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  LINK: 'link',
  TEXT: 'text',
  EDIT: 'edit'
};

var ANT_BUTTON_SIZES_MAP = ((_ANT_BUTTON_SIZES_MAP = {}),
(0, _defineProperty3.default)(
  _ANT_BUTTON_SIZES_MAP,
  _style.BUTTON_SIZES.LARGE,
  _style.BUTTON_SIZES.LARGE
),
(0, _defineProperty3.default)(
  _ANT_BUTTON_SIZES_MAP,
  _style.BUTTON_SIZES.MEDIUM,
  'default'
),
(0, _defineProperty3.default)(
  _ANT_BUTTON_SIZES_MAP,
  _style.BUTTON_SIZES.SMALL,
  _style.BUTTON_SIZES.SMALL
),
_ANT_BUTTON_SIZES_MAP);

var ANTD_BUTTON_TYPE_MAP = ((_ANTD_BUTTON_TYPE_MAP = {}),
(0, _defineProperty3.default)(
  _ANTD_BUTTON_TYPE_MAP,
  BUTTON_TYPES.PRIMARY,
  'primary'
),
(0, _defineProperty3.default)(
  _ANTD_BUTTON_TYPE_MAP,
  BUTTON_TYPES.SECONDARY,
  'default'
),
(0, _defineProperty3.default)(
  _ANTD_BUTTON_TYPE_MAP,
  BUTTON_TYPES.TERTIARY,
  'dashed'
),
(0, _defineProperty3.default)(_ANTD_BUTTON_TYPE_MAP, BUTTON_TYPES.LINK, 'link'),
(0, _defineProperty3.default)(_ANTD_BUTTON_TYPE_MAP, BUTTON_TYPES.TEXT, 'text'),
(0, _defineProperty3.default)(_ANTD_BUTTON_TYPE_MAP, BUTTON_TYPES.EDIT, 'edit'),
_ANTD_BUTTON_TYPE_MAP);

var noop = function noop() {
  return undefined;
};

var Button = (function(_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Button, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          children = _props.children,
          type = _props.type,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          active = _props.active,
          disabled = _props.disabled,
          size = _props.size;

        var antdType = ANTD_BUTTON_TYPE_MAP[type];
        var _props2 = this.props,
          className = _props2.className,
          rest = (0, _objectWithoutProperties3.default)(_props2, ['className']);

        return _react2.default.createElement(
          _style2.default,
          (0, _extends3.default)({}, rest, {
            active: active,
            disabled: disabled,
            className: className,
            type: antdType,
            style: style,
            size: ANT_BUTTON_SIZES_MAP[size] || ANT_BUTTON_SIZES_MAP['large']
          }),
          children,
          type === 'edit' &&
            _react2.default.createElement(_Icon2.default, {
              type: 'edit',
              className: 'editIcon'
            })
        );
      }
    }
  ]);
  return Button;
})(_react.Component);

Button.propTypes = {
  onClick: _propTypes2.default.func,
  type: _propTypes2.default.oneOf((0, _values2.default)(BUTTON_TYPES)),
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf((0, _values2.default)(_style.BUTTON_SIZES)),
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
