'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .dateInput {\n    min-width: 180px;\n    padding: 8px;\n    cursor: pointer;\n    border-radius: 4px;\n    font-size: 12px;\n    &.dateNotSelected {\n      border: 1px solid ', ';\n    }\n    &.dateSelected {\n      font-weight: 600;\n      color: ', ';\n      background-color: ', ';\n      border: 1px solid rgba(77,124,199,0.2); // cannot use from theme as rgba support needed\n      .dateCaret {\n        color: ', ';\n      }\n    }\n    &.dropdownOpen {\n      .datePlaceholder {\n        color: ', ';\n      }\n      .dateCaret {\n        color: ', ';\n      }\n    }\n  }\n  .dateRangeDropdown {\n    top: 40px !important;\n  }\n  .dateCaret {\n    padding: 4px;\n    margin-left: 10px;\n    float: right;\n    color: ', ';\n    font-size: 10px;\n  }\n  .ant-calendar-input-wrap {\n    display: none;\n  }\n  .ant-calendar-selected-date, .ant-calendar-selected-start-date, .ant-calendar-selected-end-date {\n    .ant-calendar-date {\n      background: ', ';\n      &:hover {\n        background: ', ';\n      }\n    }\n  }\n  .ant-calendar-range .ant-calendar-in-range-cell:before {\n    background: ', '\n  }\n'], ['\n  .dateInput {\n    min-width: 180px;\n    padding: 8px;\n    cursor: pointer;\n    border-radius: 4px;\n    font-size: 12px;\n    &.dateNotSelected {\n      border: 1px solid ', ';\n    }\n    &.dateSelected {\n      font-weight: 600;\n      color: ', ';\n      background-color: ', ';\n      border: 1px solid rgba(77,124,199,0.2); // cannot use from theme as rgba support needed\n      .dateCaret {\n        color: ', ';\n      }\n    }\n    &.dropdownOpen {\n      .datePlaceholder {\n        color: ', ';\n      }\n      .dateCaret {\n        color: ', ';\n      }\n    }\n  }\n  .dateRangeDropdown {\n    top: 40px !important;\n  }\n  .dateCaret {\n    padding: 4px;\n    margin-left: 10px;\n    float: right;\n    color: ', ';\n    font-size: 10px;\n  }\n  .ant-calendar-input-wrap {\n    display: none;\n  }\n  .ant-calendar-selected-date, .ant-calendar-selected-start-date, .ant-calendar-selected-end-date {\n    .ant-calendar-date {\n      background: ', ';\n      &:hover {\n        background: ', ';\n      }\n    }\n  }\n  .ant-calendar-range .ant-calendar-in-range-cell:before {\n    background: ', '\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateFilterStyle = _styledComponents2.default.div(_templateObject, _theme2.default.colors.SILVER, _theme2.default.colors.INDIGO, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.INDIGO, _theme2.default.colors.SILVER, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.SILVER, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.PORCELAIN);

exports.default = DateFilterStyle;