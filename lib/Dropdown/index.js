'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

require('antd/lib/dropdown/style/index.css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function (_Component) {
  (0, _inherits3.default)(Dropdown, _Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (key) {
      if (_this.props.onClick) {
        _this.props.onClick(key);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          trigger = _props.trigger,
          children = _props.children,
          type = _props.type,
          label = _props.label,
          onClick = _props.onClick,
          getPopupContainer = _props.getPopupContainer;

      var overlay = void 0;
      if (options instanceof Array) {
        overlay = _react2.default.createElement(_Menu2.default, { options: options, onClick: this.onClick });
      } else {
        overlay = options;
      }
      if (type === 'button') {
        children = _react2.default.createElement(
          _button2.default,
          null,
          label || 'Button'
        );
      }
      return _react2.default.createElement(
        _dropdown2.default,
        {
          overlay: overlay,
          trigger: [trigger],
          prefixCls: 'ant-dropdown',
          onClick: onClick,
          getPopupContainer: getPopupContainer
        },
        _react2.default.createElement(
          'div',
          null,
          ' ',
          children,
          ' '
        )
      );
    }
  }]);
  return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
  options: _propTypes2.default.any.isRequired,
  trigger: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  type: _propTypes2.default.string,
  label: _propTypes2.default.string,
  getPopupContainer: _propTypes2.default.func
};
Dropdown.defaultProps = {
  trigger: 'hover'
};
exports.default = Dropdown;
//# sourceMappingURL=index.js.map