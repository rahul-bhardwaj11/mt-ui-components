'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledToast = _styledComponents2.default.div.withConfig({
  displayName: 'css__StyledToast',
  componentId: 'r6rvuk-0'
})(['.toast{width:100%;height:50px;border-radius:0px;padding:10px 20px;line-height:30px;position:fixed;font-size:14px;top:0;left:0;opacity:0;transition:opacity;transition-timing-function:ease;z-index:99999;.toastReloadBtn{line-height:28px;padding:0px 30px;border:1px solid #0072bc;border-radius:100px;cursor:pointer;color:#0072bc;font-size:13px;}&.show{opacity:1;}&.toast-info{color:#000;background-color:#a7cfef;}&.toast-success{color:#16b22c;background-color:#dbf4df;}&.toast-warning{color:#b30707;background-color:#fae8e8;}&.toast-error{color:#b30707;background-color:#fae8e8;}}@-webkit-keyframes fadein{from{top:-30px;opacity:0;}to{top:0px;opacity:1;}}@keyframes fadein{from{top:-30px;opacity:0;}to{top:0;opacity:1;}}@-webkit-keyframes fadeout{from{top:0px;opacity:1;}to{top:-30px;opacity:0;}}@keyframes fadeout{from{top:0;opacity:1;}to{top:-30px;opacity:0;}}.freezeScreen{width:100%;height:calc(100vh - 50px);background:rgba(0,0,0,0.5);top:50px;left:0;position:absolute;z-index:100;}}']);
exports.default = StyledToast;