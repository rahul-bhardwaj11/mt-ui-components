'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.ANTD_BUTTON_SIZE_PADDING = exports.BUTTON_SIZES = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _ANTD_BUTTON_SIZE_PAD;

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    '\n  &.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only) {\n    .anticon{\n      display:none;\n    }\n  }\n  &.ant-btn {\n    font-family: inherit;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    border-radius: 4px;\n    ',
    ';\n    padding: ',
    ';\n\n    /*---------- Default Button styles ------------*/\n    &.ant-btn-default {\n      border: 1px solid ',
    ';\n      color: ',
    ';\n\n      &.ant-btn-sm {\n        font-size: 12px;\n        padding: 0px 12px;\n      }\n      &:hover {\n        color: ',
    ';\n        border: 1px solid ',
    ';\n      }\n      &:active,\n      &:focus,\n      &.active {\n        border: 1px solid ',
    ';\n        color: ',
    ';\n      }\n      &.disabled,\n      &:disabled,\n      &[disabled]:hover {\n        border: 1px solid ',
    ';\n        background-color: ',
    ';\n        color: ',
    ';\n      }\n    }\n\n    /*---------- Primary Button styles ------------*/\n    &.ant-btn-primary {\n      border: 1px solid ',
    ';\n      background-color: ',
    ';\n      color: #fff;\n      &.ant-btn-sm {\n        font-size: 12px;\n        padding: 0px 12px;\n      }\n      &:hover,\n      &:focus,\n      &:active,\n      &.active {\n        border: 1px solid ',
    ';\n        background: ',
    ';\n        color: #fff;\n      }\n      &.disabled,\n      &:disabled,\n      &[disabled]:hover {\n        border: 1px solid ',
    ';\n        background: ',
    ';\n        color: ',
    ';\n      }\n    }\n\n    /*---------- Edit Button styles ------------*/\n    &.ant-btn-edit {\n      border: 1px solid ',
    ';\n      color: ',
    ';\n      &.ant-btn-sm {\n        color: ',
    ';\n        font-size: 12px;\n        padding: 0px 12px;\n      }\n      &:hover,\n      &:focus,\n      &:active,\n      &.active {\n        border: 1px solid ',
    ';\n        color: ',
    ';\n        span {\n          color: ',
    ';\n        }\n      }\n      &.disabled,\n      &:disabled,\n      &[disabled]:hover {\n        background-color: ',
    ';\n        color: ',
    ';\n        border: 1px solid ',
    ';\n      }\n    }\n\n    /*---------- Dashed Button styles ------------*/\n    &.ant-btn-dashed {\n      border: 1px dashed ',
    ';\n      background-color: ',
    ';\n      color: ',
    ';\n\n      &.ant-btn-sm {\n        font-size: 12px;\n        padding: 0px 12px;\n      }\n      &:hover,\n      &:focus,\n      &:active,\n      &.active {\n        color: ',
    ';\n      }\n      &.disabled,\n      &:disabled,\n      &[disabled]:hover {\n        border: 1px dashed ',
    ';\n        background-color: ',
    ';\n        color: ',
    ';\n      }\n    }\n    /*---------- Text Button styles ------------*/\n    &.ant-btn-text {\n      border: 1px dashed transparent;\n      background-color: transparent;\n      color: ',
    ';\n      padding: 0 12px;\n\n      ',
    ';\n      ',
    ';\n\n      &:hover,\n      &:focus,\n      &:active {\n        border: 1px dashed transparent;\n        ',
    ';\n      }\n      &.ant-btn-sm {\n        font-size: 12px;\n        padding: 0px 12px;\n      }\n      &.disabled,\n      &:disabled,\n      &[disabled]:hover {\n        border: 1px solid transparent;\n        background-color: ',
    ';\n        color: ',
    ';\n      }\n    }\n    /*---------- Link Blue Button styles ------------*/\n    &.ant-btn-link {\n      border: 1px solid ',
    ';\n      background-color: #fff;\n      color: ',
    ';\n\n      &.ant-btn-sm {\n        font-size: 12px;\n        padding: 0px 12px;\n      }\n      &.disabled,\n      &:disabled {\n        background-color: ',
    ';\n        color: ',
    ';\n        border: 1px solid ',
    ';\n      }\n    }\n\n    &.disabled,\n    &:disabled {\n      border: 1px solid ',
    ';\n      color: ',
    ';\n      background: ',
    ';\n    }\n  }\n\n  &.ant-btn-clicked {\n    outline: none;\n    outline-style: none;\n  }\n  .editIcon {\n    padding: 3px;\n  }\n\n  /* loading Button styles */\n\n  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only) {\n    .anticon {\n      display: none;\n    }\n  }\n  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only) {\n    padding: 0 52px;\n  }\n  .ant-btn {\n    & > .anticon {\n      & + span {\n        display: none;\n      }\n    }\n  }\n'
  ],
  [
    '\n  &.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only) {\n    .anticon{\n      display:none;\n    }\n  }\n  &.ant-btn {\n    font-family: inherit;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    border-radius: 4px;\n    ',
    ';\n    padding: ',
    ';\n\n    /*---------- Default Button styles ------------*/\n    &.ant-btn-default {\n      border: 1px solid ',
    ';\n      color: ',
    ';\n\n      &.ant-btn-sm {\n        font-size: 12px;\n        padding: 0px 12px;\n      }\n      &:hover {\n        color: ',
    ';\n        border: 1px solid ',
    ';\n      }\n      &:active,\n      &:focus,\n      &.active {\n        border: 1px solid ',
    ';\n        color: ',
    ';\n      }\n      &.disabled,\n      &:disabled,\n      &[disabled]:hover {\n        border: 1px solid ',
    ';\n        background-color: ',
    ';\n        color: ',
    ';\n      }\n    }\n\n    /*---------- Primary Button styles ------------*/\n    &.ant-btn-primary {\n      border: 1px solid ',
    ';\n      background-color: ',
    ';\n      color: #fff;\n      &.ant-btn-sm {\n        font-size: 12px;\n        padding: 0px 12px;\n      }\n      &:hover,\n      &:focus,\n      &:active,\n      &.active {\n        border: 1px solid ',
    ';\n        background: ',
    ';\n        color: #fff;\n      }\n      &.disabled,\n      &:disabled,\n      &[disabled]:hover {\n        border: 1px solid ',
    ';\n        background: ',
    ';\n        color: ',
    ';\n      }\n    }\n\n    /*---------- Edit Button styles ------------*/\n    &.ant-btn-edit {\n      border: 1px solid ',
    ';\n      color: ',
    ';\n      &.ant-btn-sm {\n        color: ',
    ';\n        font-size: 12px;\n        padding: 0px 12px;\n      }\n      &:hover,\n      &:focus,\n      &:active,\n      &.active {\n        border: 1px solid ',
    ';\n        color: ',
    ';\n        span {\n          color: ',
    ';\n        }\n      }\n      &.disabled,\n      &:disabled,\n      &[disabled]:hover {\n        background-color: ',
    ';\n        color: ',
    ';\n        border: 1px solid ',
    ';\n      }\n    }\n\n    /*---------- Dashed Button styles ------------*/\n    &.ant-btn-dashed {\n      border: 1px dashed ',
    ';\n      background-color: ',
    ';\n      color: ',
    ';\n\n      &.ant-btn-sm {\n        font-size: 12px;\n        padding: 0px 12px;\n      }\n      &:hover,\n      &:focus,\n      &:active,\n      &.active {\n        color: ',
    ';\n      }\n      &.disabled,\n      &:disabled,\n      &[disabled]:hover {\n        border: 1px dashed ',
    ';\n        background-color: ',
    ';\n        color: ',
    ';\n      }\n    }\n    /*---------- Text Button styles ------------*/\n    &.ant-btn-text {\n      border: 1px dashed transparent;\n      background-color: transparent;\n      color: ',
    ';\n      padding: 0 12px;\n\n      ',
    ';\n      ',
    ';\n\n      &:hover,\n      &:focus,\n      &:active {\n        border: 1px dashed transparent;\n        ',
    ';\n      }\n      &.ant-btn-sm {\n        font-size: 12px;\n        padding: 0px 12px;\n      }\n      &.disabled,\n      &:disabled,\n      &[disabled]:hover {\n        border: 1px solid transparent;\n        background-color: ',
    ';\n        color: ',
    ';\n      }\n    }\n    /*---------- Link Blue Button styles ------------*/\n    &.ant-btn-link {\n      border: 1px solid ',
    ';\n      background-color: #fff;\n      color: ',
    ';\n\n      &.ant-btn-sm {\n        font-size: 12px;\n        padding: 0px 12px;\n      }\n      &.disabled,\n      &:disabled {\n        background-color: ',
    ';\n        color: ',
    ';\n        border: 1px solid ',
    ';\n      }\n    }\n\n    &.disabled,\n    &:disabled {\n      border: 1px solid ',
    ';\n      color: ',
    ';\n      background: ',
    ';\n    }\n  }\n\n  &.ant-btn-clicked {\n    outline: none;\n    outline-style: none;\n  }\n  .editIcon {\n    padding: 3px;\n  }\n\n  /* loading Button styles */\n\n  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only) {\n    .anticon {\n      display: none;\n    }\n  }\n  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only) {\n    padding: 0 52px;\n  }\n  .ant-btn {\n    & > .anticon {\n      & + span {\n        display: none;\n      }\n    }\n  }\n'
  ]
);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var BUTTON_SIZES = (exports.BUTTON_SIZES = {
  LARGE: 'large',
  SMALL: 'small',
  MEDIUM: 'medium'
});

var ANTD_BUTTON_SIZE_PADDING = (exports.ANTD_BUTTON_SIZE_PADDING = ((_ANTD_BUTTON_SIZE_PAD = {}),
(0, _defineProperty3.default)(
  _ANTD_BUTTON_SIZE_PAD,
  BUTTON_SIZES.LARGE,
  '0px 24px'
),
(0, _defineProperty3.default)(_ANTD_BUTTON_SIZE_PAD, 'default', '0px 12px'),
(0, _defineProperty3.default)(_ANTD_BUTTON_SIZE_PAD, 'medium', '0px 16px'),
(0, _defineProperty3.default)(
  _ANTD_BUTTON_SIZE_PAD,
  BUTTON_SIZES.SMALL,
  '0px 12px'
),
_ANTD_BUTTON_SIZE_PAD));

var MtButton = (0, _styledComponents2.default)(_button2.default)(
  _templateObject,
  _mixins2.default.button(),
  function(props) {
    return ANTD_BUTTON_SIZE_PADDING[props.size];
  },
  _theme2.default.colors.ALTO,
  _theme2.default.colors.DARK_OUTER_SPACE,
  _theme2.default.colors.DARK_OUTER_SPACE,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.DISABLE,
  _theme2.default.colors.PORCELAIN,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.NEPTUNE,
  _theme2.default.colors.NEPTUNE,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.PORCELAIN,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.DISABLE,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.SHARK,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.OUTER_SPACE,
  function(props) {
    return props.active
      ? 'color: ' +
          _theme2.default.colors.INDIGO +
          ';\n          background-color: ' +
          _theme2.default.colors.TROPICAL_BLUE
      : null;
  },
  function(props) {
    return props.disabled
      ? 'color: ' + _theme2.default.colors.OUTER_SPACE
      : null;
  },
  function(props) {
    return props.active
      ? 'color: ' +
          _theme2.default.colors.INDIGO +
          ';\n            background-color: ' +
          _theme2.default.colors.TROPICAL_BLUE
      : 'background-color: transparent;\n              color: ' +
          _theme2.default.colors.INDIGO;
  },
  _theme2.default.colors.WHITE,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.DISABLE,
  _theme2.default.colors.DISABLE,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.ALTO
);

exports.default = MtButton;
