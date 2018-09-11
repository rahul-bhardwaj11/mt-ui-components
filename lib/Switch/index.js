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

var _switch = require('antd/lib/switch');

var _switch2 = _interopRequireDefault(_switch);

require('antd/lib/switch/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtSwitch = _styledComponents2.default.div.withConfig({
  displayName: 'Switch__MtSwitch',
  componentId: 'sc-16gzvb4-0'
})(['.ant-switch-checked{background-color:', ';}.ant-switch{min-width:36px;height:20px;&:after{width:14px;height:14px;top:2px;margin-left:0px;}}.ant-switch-checked{&:after{width:14px;height:14px;top:2px;margin-left:-16px;}}'], _theme2.default.colors.TAG_HOVER_TEXT_COLOR);

var noop = function noop() {
  return undefined;
};

var Switch = function (_Component) {
  (0, _inherits3.default)(Switch, _Component);

  function Switch(props) {
    (0, _classCallCheck3.default)(this, Switch);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Switch.__proto__ || (0, _getPrototypeOf2.default)(Switch)).call(this, props));

    _this.onChange = function (checked) {
      _this.setState({
        checked: checked
      });
      _this.props.onChange(checked);
    };

    _this.state = {
      checked: _this.props.checked || false
    };
    return _this;
  }

  (0, _createClass3.default)(Switch, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.checked !== this.state.checked) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var checked = this.state.checked;

      return _react2.default.createElement(
        MtSwitch,
        null,
        _react2.default.createElement(_switch2.default, {
          checked: checked,
          className: this.props.className,
          onChange: this.onChange
        })
      );
    }
  }]);
  return Switch;
}(_react.Component);

Switch.propTypes = {
  checked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  className: _propTypes2.default.string
};
Switch.defaultProps = {
  onChange: noop
};
exports.default = Switch;