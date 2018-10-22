'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _ICON_TYPE;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tag = require('antd/lib/tag');

var _tag2 = _interopRequireDefault(_tag);

require('antd/lib/tag/style/index.css');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ICON_TYPE = (_ICON_TYPE = {}, (0, _defineProperty3.default)(_ICON_TYPE, _style.TYPES.ADD, 'add'), (0, _defineProperty3.default)(_ICON_TYPE, _style.TYPES.ADDED, 'cross'), (0, _defineProperty3.default)(_ICON_TYPE, _style.TYPES.SELECTION, 'tick'), _ICON_TYPE);

var Tag = function (_Component) {
  (0, _inherits3.default)(Tag, _Component);

  function Tag() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tag.__proto__ || (0, _getPrototypeOf2.default)(Tag)).call.apply(_ref, [this].concat(args))), _this), _this.state = { checked: true }, _this.handleChange = function (checked) {
      _this.setState({ checked: checked });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          type = _props.type,
          checkable = _props.checkable,
          margin = _props.margin,
          disabled = _props.disabled,
          className = _props.className,
          applied = _props.applied,
          rest = (0, _objectWithoutProperties3.default)(_props, ['children', 'type', 'checkable', 'margin', 'disabled', 'className', 'applied']);

      var AntTagComponent = checkable ? _tag2.default.CheckableTag : _tag2.default;

      var WrappedTagProps = {
        margin: margin,
        disabled: disabled,
        className: className,
        type: type,
        checkable: checkable,
        applied: applied,
        onClick: function onClick() {}
      };

      var TagProps = (0, _extends3.default)({}, rest);

      return _react2.default.createElement(
        _style2.default,
        WrappedTagProps,
        _react2.default.createElement(
          AntTagComponent,
          TagProps,
          children,
          ICON_TYPE[type] && _react2.default.createElement(_Icon2.default, {
            type: ICON_TYPE[type],
            className: ICON_TYPE[type] ? 'tagIcon' : ''
          })
        )
      );
    }
  }]);
  return Tag;
}(_react.Component);

Tag.propTypes = {
  children: _propTypes2.default.node,
  type: _propTypes2.default.string,
  applied: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  checkable: _propTypes2.default.bool,
  padding: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  margin: _propTypes2.default.shape({
    marginTop: _propTypes2.default.string,
    marginRight: _propTypes2.default.string,
    marginBottom: _propTypes2.default.string,
    marginLeft: _propTypes2.default.string
  })
};
Tag.defaultProps = {
  type: _style.TYPES.NORMAL,
  onClick: function onClick() {},
  margin: {}
};


Tag.CheckableTag = _tag2.default.CheckableTag;
exports.default = Tag;