'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CustomRangePicker = (function(_Component) {
  (0, _inherits3.default)(CustomRangePicker, _Component);

  function CustomRangePicker() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CustomRangePicker);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          CustomRangePicker.__proto__ ||
          (0, _getPrototypeOf2.default)(CustomRangePicker)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        from: null
      }),
      (_this.setStartDate = function(from) {
        _this.dateClick = true;
        _this.setState({
          from: from
        });
      }),
      (_this.setEndDate = function(to) {
        _this.dateClick = true;
        _this.props.onChange([_this.state.from, to]);
        _this.setState({
          from: null
        });
      }),
      (_this.disabledEndDate = function(date) {
        var disabled = _this.props.disabledDate(date);
        if (!_this.state.from || !date) {
          return false;
        }
        return disabled || date.valueOf() <= _this.state.from.valueOf();
      }),
      (_this.onBlur = function() {
        if (_this.dateClick) {
          _this.dateClick = false;
          return;
        }
        _this.setState({
          from: null
        });
        _this.props.onBlur();
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(CustomRangePicker, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          open = _props.open,
          disabledDate = _props.disabledDate,
          commonProps = (0, _objectWithoutProperties3.default)(_props, [
            'open',
            'disabledDate'
          ]);

        var startOpen = open && !this.state.from;
        var endOpen = open && this.state.from;
        var commonCustomProps = {
          onBlur: this.onBlur
        };
        return _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            _datePicker2.default,
            (0, _extends3.default)({}, commonProps, commonCustomProps, {
              open: startOpen,
              placeholder: 'Start',
              onChange: this.setStartDate,
              disabledDate: disabledDate
            })
          ),
          _react2.default.createElement(
            _datePicker2.default,
            (0, _extends3.default)({}, commonProps, commonCustomProps, {
              open: endOpen,
              placeholder: 'End',
              onChange: this.setEndDate,
              disabledDate: this.disabledEndDate
            })
          )
        );
      }
    }
  ]);
  return CustomRangePicker;
})(_react.Component);

CustomRangePicker.propTypes = {
  open: _propTypes2.default.bool.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  disabledDate: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func.isRequired
};
exports.default = CustomRangePicker;
