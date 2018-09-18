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
    '\n  .ant-calendar-selected-day {\n    .ant-calendar-date {\n      background: ',
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
    '\n  .ant-calendar-selected-day {\n    .ant-calendar-date {\n      background: ',
    ';\n      border: 1px solid ',
    ';\n      border-radius: 4px;\n      color: #fff;\n    }\n  }\n  .ant-calendar-last-month-cell {\n    .ant-calendar-date {\n      color: ',
    ';\n    }\n  }\n  .ant-calendar-date {\n    color: ',
    ';\n    font-size: 12px;\n    font-weight: 600;\n\n    &:hover {\n      background: ',
    ';\n      border: 1px solid ',
    ';\n      border-radius: 4px;\n      color: #fff;\n    }\n  }\n  .ant-calendar-column-header-inner {\n    color: ',
    ';\n    font-size: 12px;\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .ant-calendar-next-month-btn-day .ant-calendar-date {\n    color: ',
    ';\n  }\n'
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

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

var DatePicker = (function(_Component) {
  (0, _inherits3.default)(DatePicker, _Component);

  function DatePicker() {
    (0, _classCallCheck3.default)(this, DatePicker);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(DatePicker, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(StyledDatePicker, {
            innerRef: function innerRef(e) {
              return (_this2.datePickerContainer = e);
            }
          }),
          _react2.default.createElement(
            _datePicker2.default,
            (0, _extends3.default)({}, this.props, {
              getCalendarContainer: function getCalendarContainer() {
                return _this2.datePickerContainer;
              }
            })
          )
        );
      }
    }
  ]);
  return DatePicker;
})(_react.Component);

exports.default = DatePicker;
