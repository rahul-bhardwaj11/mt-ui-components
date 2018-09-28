'use strict';

Object.defineProperty(exports, '__esModule', {
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

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
    [
      '\n  font-family: inherit;\n  .ant-calendar-selected-day {\n    .ant-calendar-date {\n      background: ',
      ';\n      border: 1px solid ',
      ';\n      border-radius: 4px;\n      color: #fff;\n    }\n  }\n  .ant-calendar-last-month-cell {\n    .ant-calendar-date {\n      color: ',
      ';\n    }\n  }\n  .ant-calendar-date {\n    color: ',
      ';\n    font-size: 12px;\n    font-weight: 600;\n\n    &:hover {\n      background: ',
      ';\n      border: 1px solid ',
      ';\n      border-radius: 4px;\n      color: #fff;\n    }\n  }\n  .ant-calendar-column-header-inner {\n    color: ',
      ';\n    font-size: 12px;\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .ant-calendar-next-month-btn-day .ant-calendar-date {\n    color: ',
      ';\n  }\n'
    ],
    [
      '\n  font-family: inherit;\n  .ant-calendar-selected-day {\n    .ant-calendar-date {\n      background: ',
      ';\n      border: 1px solid ',
      ';\n      border-radius: 4px;\n      color: #fff;\n    }\n  }\n  .ant-calendar-last-month-cell {\n    .ant-calendar-date {\n      color: ',
      ';\n    }\n  }\n  .ant-calendar-date {\n    color: ',
      ';\n    font-size: 12px;\n    font-weight: 600;\n\n    &:hover {\n      background: ',
      ';\n      border: 1px solid ',
      ';\n      border-radius: 4px;\n      color: #fff;\n    }\n  }\n  .ant-calendar-column-header-inner {\n    color: ',
      ';\n    font-size: 12px;\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .ant-calendar-next-month-btn-day .ant-calendar-date {\n    color: ',
      ';\n  }\n'
    ]
  ),
  _templateObject2 = (0, _taggedTemplateLiteral3.default)(
    [
      '\n  position: relative;\n\n  .ant-input {\n    &:hover {\n      border: 1px solid ',
      ';\n    }\n    &:focus {\n      box-shadow: 0 0 0 0 transparent;\n    }\n  }\n\n  .ant-calendar-picker-input {\n    z-index: 1;\n    background: transparent;\n    padding-right: 20px;\n  }\n  .ant-calendar-picker-icon,\n  .ant-calendar-picker-clear {\n    display: none;\n\n    &:hover {\n      display: none;\n    }\n  }\n  .customCalendarIcon {\n    position: absolute;\n    right: 7px;\n    top: 2px;\n    color: ',
      ';\n  }\n'
    ],
    [
      '\n  position: relative;\n\n  .ant-input {\n    &:hover {\n      border: 1px solid ',
      ';\n    }\n    &:focus {\n      box-shadow: 0 0 0 0 transparent;\n    }\n  }\n\n  .ant-calendar-picker-input {\n    z-index: 1;\n    background: transparent;\n    padding-right: 20px;\n  }\n  .ant-calendar-picker-icon,\n  .ant-calendar-picker-clear {\n    display: none;\n\n    &:hover {\n      display: none;\n    }\n  }\n  .customCalendarIcon {\n    position: absolute;\n    right: 7px;\n    top: 2px;\n    color: ',
      ';\n  }\n'
    ]
  );

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

require('antd/lib/date-picker/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledDatePicker = _styledComponents2.default.div(
  _templateObject,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.DARK_OUTER_SPACE,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.OUTER_SPACE
);

var StyleSelectCalendar = _styledComponents2.default.span(
  _templateObject2,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.OUTER_SPACE
);

var DatePicker = (function(_Component) {
  (0, _inherits3.default)(DatePicker, _Component);

  function DatePicker(props) {
    (0, _classCallCheck3.default)(this, DatePicker);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).call(
        this,
        props
      )
    );

    var mountOn = document.body.appendChild(document.createElement('div'));
    _reactDom2.default.render(
      _react2.default.createElement(StyledDatePicker, {
        innerRef: function innerRef(e) {
          return (_this.datePickerContainer = e);
        }
      }),
      mountOn
    );
    return _this;
  }

  (0, _createClass3.default)(DatePicker, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          StyleSelectCalendar,
          null,
          _react2.default.createElement(
            _datePicker2.default,
            (0, _extends3.default)({}, this.props, {
              iconSource: this.timeIcon,
              showToday: false,
              getCalendarContainer: function getCalendarContainer() {
                return _this2.datePickerContainer;
              }
            })
          ),
          _react2.default.createElement(_Icon2.default, {
            type: 'editSchedule',
            className: 'customCalendarIcon'
          })
        );
      }
    }
  ]);
  return DatePicker;
})(_react.Component);

exports.default = DatePicker;
