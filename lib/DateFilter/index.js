'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.DATE_FILTER_OPTIONS = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _datePicker = require('antd/lib/date-picker');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _dateFilterOptions = require('./dateFilterOptions');

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DateFilter = (function(_Component) {
  (0, _inherits3.default)(DateFilter, _Component);

  function DateFilter() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DateFilter);

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
          DateFilter.__proto__ ||
          (0, _getPrototypeOf2.default)(DateFilter)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        date: null,
        dropdownVisible: false
      }),
      (_this.ref = (0, _react.createRef)()),
      (_this.onSelect = function(key) {
        var date = _this.props.options
          .find(function(v) {
            return v.key === key;
          })
          .resolver();
        _this.setDate(date);
        date !== _dateFilterOptions.RANGE_PICKER_STATE &&
          _this.dropdownVisibilityChange(false);
      }),
      (_this.onCustomDateSelect = function(_ref2) {
        var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
          from = _ref3[0],
          to = _ref3[1];

        var date = {
          from: from,
          to: to,
          display: from.format("D MMM' YY") + ' ~ ' + to.format("D MMM' YY")
        };
        _this.setDate(date);
        _this.dropdownVisibilityChange(false);
      }),
      (_this.dropdownVisibilityChange = function(dropdownVisible) {
        return _this.setState({ dropdownVisible: dropdownVisible });
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(DateFilter, [
    {
      key: 'setDate',
      value: function setDate(date) {
        var _this2 = this;

        this.setState({ date: date }, function() {
          _this2.state.date !== _dateFilterOptions.RANGE_PICKER_STATE &&
            _this2.props.onChange(_this2.state.date);
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _props = this.props,
          options = _props.options,
          date = _props.placeholder,
          dateFormat = _props.dateFormat,
          rangePickerProps = (0, _objectWithoutProperties3.default)(_props, [
            'options',
            'placeholder',
            'dateFormat'
          ]);
        var _state = this.state,
          setDate = _state.date,
          dropdownVisible = _state.dropdownVisible;

        var isDateSelected =
          setDate && setDate !== _dateFilterOptions.RANGE_PICKER_STATE;
        var dateInputClass = (0, _classnames2.default)('dateInput', {
          dateSelected: isDateSelected,
          dateNotSelected: !isDateSelected,
          dropdownOpen: dropdownVisible && !isDateSelected
        });
        if (isDateSelected) {
          date = dateFormat ? dateFormat(setDate) : setDate.display;
        }
        return _react2.default.createElement(
          _style2.default,
          null,
          _react2.default.createElement(
            _Dropdown2.default,
            {
              onVisibleChange: this.dropdownVisibilityChange,
              placement: 'bottomLeft',
              options: options,
              trigger: 'click',
              onSelect: this.onSelect
            },
            _react2.default.createElement(
              'div',
              { className: dateInputClass, ref: this.ref },
              _react2.default.createElement(
                'span',
                { className: 'datePlaceholder' },
                date
              ),
              _react2.default.createElement(_Icon2.default, {
                type: 'down_fillcaret',
                className: 'dateCaret'
              })
            )
          ),
          setDate === _dateFilterOptions.RANGE_PICKER_STATE &&
            _react2.default.createElement(
              _datePicker.RangePicker,
              (0, _extends3.default)({}, rangePickerProps, {
                open: true,
                onChange: this.onCustomDateSelect,
                getCalendarContainer: function getCalendarContainer() {
                  return _this3.ref.current;
                },
                dropdownClassName: 'dateRangeDropdown',
                style: {
                  display: 'none'
                }
              })
            )
        );
      }
    }
  ]);
  return DateFilter;
})(_react.Component);

DateFilter.propTypes = {
  options: _propTypes2.default.arrayOf(
    _propTypes2.default.shape({
      key: _propTypes2.default.string.isRequired,
      content: _propTypes2.default.string.isRequired,
      resolver: _propTypes2.default.func.isRequired
    })
  ).isRequired,
  onChange: _propTypes2.default.func.isRequired,
  placeholder: _propTypes2.default.string,
  dateFormat: _propTypes2.default.func
};
DateFilter.defaultProps = {
  options: (0, _keys2.default)(_dateFilterOptions.DATE_FILTER_OPTIONS).map(
    function(v) {
      return _dateFilterOptions.DATE_FILTER_OPTIONS[v];
    }
  ),
  placeholder: 'Date',
  onChange: function onChange() {},
  disabledDate: function disabledDate(startValue) {
    return startValue > (0, _moment2.default)();
  }
};
exports.DATE_FILTER_OPTIONS = _dateFilterOptions.DATE_FILTER_OPTIONS;
exports.default = DateFilter;
