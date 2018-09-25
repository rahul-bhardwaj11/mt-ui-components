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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

require('antd/lib/date-picker/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtDatePicker = (0, _styledComponents2.default)(_datePicker2.default).withConfig({
  displayName: 'DatePicker__MtDatePicker',
  componentId: 'sc-1uchw7k-0'
})(['']);

var noop = function noop() {
  return undefined;
};

var DatePicker = function (_Component) {
  (0, _inherits3.default)(DatePicker, _Component);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      date: _this.props.value ? (0, _moment2.default)(_this.props.value) : undefined
    }, _this.onChange = function (date) {
      _this.setState({ date: date });
      _this.props.onChange(+date);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DatePicker, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(MtDatePicker, (0, _extends3.default)({}, this.props, {
        showTime: false,
        allowClear: false,
        value: this.state.date,
        onChange: this.onChange
      }));
    }
  }]);
  return DatePicker;
}(_react.Component);

DatePicker.propTypes = {
  value: _propTypes2.default.number,
  className: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};
DatePicker.defaultProps = {
  onChange: noop
};
exports.default = DatePicker;