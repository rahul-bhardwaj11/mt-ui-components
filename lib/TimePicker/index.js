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

var _Select = require('../Select');

var _Select2 = _interopRequireDefault(_Select);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {
  return undefined;
};

var getTimeSelectOptions = function getTimeSelectOptions() {
  var options = [];
  for (var i = 0; i < 48; i++) {
    var hour = Math.floor(i / 2);
    var min = i % 2 * 30;
    var content = ('0' + hour).slice(-2) + ':' + ('0' + min).slice(-2);
    options.push({
      key: i,
      content: content
    });
  }
  return options;
};

var getHoursAndMinutesFromTimeSlot = function getHoursAndMinutesFromTimeSlot(slot) {
  var hour = Math.floor(slot / 2);
  var min = slot % 2 * 30;
  return { hour: hour, min: min };
};

var getTimeSlotFromTimeObject = function getTimeSlotFromTimeObject() {
  var timeObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _timeObject$hour = timeObject.hour,
      hour = _timeObject$hour === undefined ? 0 : _timeObject$hour,
      _timeObject$min = timeObject.min,
      min = _timeObject$min === undefined ? 0 : _timeObject$min;

  return 2 * hour + (min ? 1 : 0);
};

var TimePicker = function (_Component) {
  (0, _inherits3.default)(TimePicker, _Component);

  function TimePicker() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TimePicker.__proto__ || (0, _getPrototypeOf2.default)(TimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.onSelect = function (key) {
      _this.props.onSelect(getHoursAndMinutesFromTimeSlot(key));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TimePicker, [{
    key: 'render',
    value: function render() {
      var timeObject = this.props.defaultValue;

      return _react2.default.createElement(_Select2.default, (0, _extends3.default)({}, this.props, {
        onSelect: this.onSelect,
        options: getTimeSelectOptions(),
        defaultValue: getTimeSlotFromTimeObject(timeObject)
      }));
    }
  }]);
  return TimePicker;
}(_react.Component);

TimePicker.propTypes = {
  onSelect: _propTypes2.default.func.isRequired,
  defaultValue: _propTypes2.default.shape({
    hour: _propTypes2.default.number,
    min: _propTypes2.default.number
  })
};
TimePicker.defaultPropTypes = {
  onSelect: noop
};
exports.default = TimePicker;