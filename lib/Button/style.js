'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ANTD_BUTTON_SIZE_PADDING = exports.BUTTON_SIZES = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _ANTD_BUTTON_SIZE_PAD;

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BUTTON_SIZES = exports.BUTTON_SIZES = {
  LARGE: 'large',
  SMALL: 'small',
  MEDIUM: 'medium'
};

var ANTD_BUTTON_SIZE_PADDING = exports.ANTD_BUTTON_SIZE_PADDING = (_ANTD_BUTTON_SIZE_PAD = {}, (0, _defineProperty3.default)(_ANTD_BUTTON_SIZE_PAD, BUTTON_SIZES.LARGE, '0px 32px'), (0, _defineProperty3.default)(_ANTD_BUTTON_SIZE_PAD, 'default', '0px 24px'), (0, _defineProperty3.default)(_ANTD_BUTTON_SIZE_PAD, BUTTON_SIZES.SMALL, '0px 12px'), _ANTD_BUTTON_SIZE_PAD);

var MtButton = (0, _styledComponents2.default)(_button2.default).withConfig({
  displayName: 'style__MtButton',
  componentId: 'sc-1pbrce5-0'
})(['&.ant-btn{font-family:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;border-radius:4px;', ';padding:', ';&.ant-btn-default{border:1px solid ', ';color:', ';&.ant-btn-sm{font-size:12px;padding:0px 12px;}&:not([disabled]):hover{color:', ';border:1px solid ', ';}&:active,&:focus,&.active{border:1px solid ', ';color:', ';}&.disabled,&:disabled{background-color:', ';color:', ';}}&.ant-btn-primary{border:1px solid ', ';background-color:', ';color:#fff;&.ant-btn-sm{font-size:12px;padding:0px 12px;}&:not([disabled]):hover{border:1px solid ', ';background:', ';}&:focus,&:active,&.active{border:1px solid ', ';background:', ';color:#fff;}&.disabled,&:disabled{border:1px solid ', ';}}&.ant-btn-edit{border:1px solid ', ';color:', ';&.ant-btn-sm{color:', ';font-size:12px;padding:0px 12px;}&:not([disabled]):hover{border:1px solid ', ';color:', ';span{color:', ';}}&:focus,&:active,&.active{border:1px solid ', ';color:', ';span{color:', ';}}&.disabled,&:disabled{background-color:', ';color:', ';}}&.ant-btn-dashed{border:1px dashed ', ';background-color:', ';color:', ';&.ant-btn-sm{font-size:12px;padding:0px 12px;}&:hover,&:focus,&:active,&.active{color:', ';}&.disabled,&:disabled{border:1px dashed ', ';background-color:', ';color:', ';}}&.ant-btn-text{border:1px dashed transparent;background-color:transparent;color:', ';', ';', ';&:not([disabled]):hover,&:focus,&:active{border:1px dashed transparent;', ';}&.ant-btn-sm{font-size:12px;padding:0px 12px;}&.disabled,&:disabled{border:1px solid transparent;background-color:', ';color:', ';}}&.ant-btn-link{border:1px solid ', ';background-color:#fff;color:', ';&.ant-btn-sm{font-size:12px;padding:0px 12px;}&.disabled,&:disabled{background-color:', ';color:', ';}}&.disabled,&:disabled{border:1px solid ', ';color:#fff;background:', ';}}&.ant-btn-clicked{outline:none;outline-style:none;}.editIcon{padding:3px;}.ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only){.anticon{display:none;}}.ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only){padding:0 52px;}.ant-btn{& > .anticon{& + span{display:none;}}}'], _mixins2.default.button(), function (props) {
  return ANTD_BUTTON_SIZE_PADDING[props.size];
}, _theme2.default.colors.ALTO, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.SILVER, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.PORCELAIN, _theme2.default.colors.SILVER, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.JODHPUR, _theme2.default.colors.JODHPUR, _theme2.default.colors.NEPTUNE, _theme2.default.colors.NEPTUNE, _theme2.default.colors.ALTO, _theme2.default.colors.ALTO, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.ALTO, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.ALTO, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.PORCELAIN, _theme2.default.colors.SILVER, _theme2.default.colors.ALTO, _theme2.default.colors.WHITE, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.SHARK, _theme2.default.colors.ALTO, _theme2.default.colors.WHITE, _theme2.default.colors.SILVER, _theme2.default.colors.OUTER_SPACE, function (props) {
  return props.active ? 'color: ' + _theme2.default.colors.INDIGO + ';\n          background-color: ' + _theme2.default.colors.TROPICAL_BLUE : null;
}, function (props) {
  return props.disabled ? 'color: ' + _theme2.default.colors.OUTER_SPACE : null;
}, function (props) {
  return props.active ? 'color: ' + _theme2.default.colors.INDIGO + ';\n            background-color: ' + _theme2.default.colors.TROPICAL_BLUE : 'background-color: transparent;\n              color: ' + _theme2.default.colors.INDIGO;
}, _theme2.default.colors.WHITE, _theme2.default.colors.SILVER, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.WHITE, _theme2.default.colors.SILVER, _theme2.default.colors.DISABLE, _theme2.default.colors.ALTO);

exports.default = MtButton;