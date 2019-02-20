'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BADGE_TYPES = undefined;

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

var _BADGE_COLOR_TYPE_MAP;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _badge = require('antd/lib/badge');

var _badge2 = _interopRequireDefault(_badge);

require('antd/lib/badge/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BADGE_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  ELSALVA: 'elsalva',
  DEFAULT: 'default'
};

var BADGE_COLOR_TYPE_MAP = (_BADGE_COLOR_TYPE_MAP = {}, (0, _defineProperty3.default)(_BADGE_COLOR_TYPE_MAP, BADGE_TYPES.SUCCESS, '' + _theme2.default.colors.PASTEL_GREEN), (0, _defineProperty3.default)(_BADGE_COLOR_TYPE_MAP, BADGE_TYPES.ERROR, '' + _theme2.default.colors.BITTERSWEET), (0, _defineProperty3.default)(_BADGE_COLOR_TYPE_MAP, BADGE_TYPES.WARNING, '' + _theme2.default.colors.KOROMIKO), (0, _defineProperty3.default)(_BADGE_COLOR_TYPE_MAP, BADGE_TYPES.ELSALVA, '' + _theme2.default.colors.ELSALVA), (0, _defineProperty3.default)(_BADGE_COLOR_TYPE_MAP, BADGE_TYPES.DEFAULT, '' + _theme2.default.colors.SILVER), _BADGE_COLOR_TYPE_MAP);

var MtBadge = (0, _styledComponents2.default)(_badge2.default).withConfig({
  displayName: 'Badge__MtBadge',
  componentId: 'vr8u9b-0'
})(['.ant-badge,.ant-badge-dot,.ant-badge-count,.ant-badge-not-a-wrapper{background-color:', ';box-shadow:none;z-index:0;}'], function (props) {
  return BADGE_COLOR_TYPE_MAP[props.type];
});

var Badge = function (_Component) {
  (0, _inherits3.default)(Badge, _Component);

  function Badge() {
    (0, _classCallCheck3.default)(this, Badge);
    return (0, _possibleConstructorReturn3.default)(this, (Badge.__proto__ || (0, _getPrototypeOf2.default)(Badge)).apply(this, arguments));
  }

  (0, _createClass3.default)(Badge, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          type = _props.type;

      return _react2.default.createElement(
        MtBadge,
        (0, _extends3.default)({}, this.props, { type: type }),
        children
      );
    }
  }]);
  return Badge;
}(_react.Component);

Badge.propTypes = {
  children: _propTypes2.default.node,
  type: _propTypes2.default.oneOf((0, _values2.default)(BADGE_TYPES)).isRequired
};
exports.default = Badge;
exports.BADGE_TYPES = BADGE_TYPES;