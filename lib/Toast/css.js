'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    '\n  .toast {\n    border-radius: 4px;\n    text-align: center;\n    padding: 7px 24px 8px 24px;\n    &.toast-info {\n      background-color: #5dc778;\n    }\n    &.toast-success {\n      background-color: #5dc778;\n    }\n    &.toast-warning {\n      background-color: ',
    ';\n    }\n    &.toast-error {\n      background-color: ',
    ';\n      float: left;\n    }\n    &.toast-loading {\n      background-color: ',
    ';\n    }\n    .toastMessage {\n      ',
    ';\n    }\n  }\n  .toastReloadBtn {\n    ',
    ';\n    padding: 6px 24px 7px 24px;\n    border-radius: 4px;\n    cursor: pointer;\n    border: 1px solid ',
    ';\n    background-color: ',
    ';\n  }\n'
  ],
  [
    '\n  .toast {\n    border-radius: 4px;\n    text-align: center;\n    padding: 7px 24px 8px 24px;\n    &.toast-info {\n      background-color: #5dc778;\n    }\n    &.toast-success {\n      background-color: #5dc778;\n    }\n    &.toast-warning {\n      background-color: ',
    ';\n    }\n    &.toast-error {\n      background-color: ',
    ';\n      float: left;\n    }\n    &.toast-loading {\n      background-color: ',
    ';\n    }\n    .toastMessage {\n      ',
    ';\n    }\n  }\n  .toastReloadBtn {\n    ',
    ';\n    padding: 6px 24px 7px 24px;\n    border-radius: 4px;\n    cursor: pointer;\n    border: 1px solid ',
    ';\n    background-color: ',
    ';\n  }\n'
  ]
);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledToast = _styledComponents2.default.div(
  _templateObject,
  _theme2.default.colors.BITTERSWEET,
  _theme2.default.colors.BITTERSWEET,
  _theme2.default.colors.SHARK,
  _mixins2.default.whiteText(),
  _mixins2.default.darkText(),
  _theme2.default.colors.WHITE,
  _theme2.default.colors.WHITE
);

exports.default = StyledToast;
