'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledToast = _styledComponents2.default.div.withConfig({
  displayName: 'css__StyledToast',
  componentId: 'r6rvuk-0'
})(['.toast{border-radius:4px;text-align:center;padding:7px 24px 8px 24px;&.toast-info{background-color:#5dc778;}&.toast-success{background-color:#5dc778;}&.toast-warning{background-color:', ';}&.toast-error{background-color:', ';float:left;}&.toast-loading{background-color:', ';}.toastMessage{', ';}}.toastReloadBtn{', ';padding:6px 24px 7px 24px;border-radius:4px;cursor:pointer;border:1px solid ', ';background-color:', ';}'], _theme2.default.colors.BITTERSWEET, _theme2.default.colors.BITTERSWEET, _theme2.default.colors.SHARK, _mixins2.default.whiteText(), _mixins2.default.darkText(), _theme2.default.colors.WHITE, _theme2.default.colors.WHITE);

exports.default = StyledToast;