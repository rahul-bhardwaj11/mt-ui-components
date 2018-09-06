'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('../styles/mixins.js');

var _mixins2 = _interopRequireDefault(_mixins);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledLoader = (0, _styledComponents2.default)('div').withConfig({
  displayName: 'css__StyledLoader',
  componentId: 'sc-10q2200-0'
})(['&.fullPageloadingScreen{position:absolute;width:100%;height:100%;left:0px;top:0px;background:#fff;& .loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}}&.smallPageLoadingScreen,&.fullPageloadingScreen{& .loader{text-align:center;p{font-size:14px;margin-bottom:0;}}.loadingHeading{text-align:center;color:#000;font-size:20px;line-height:30px;font-weight:700;}}.spinner{text-align:center;margin:auto;display:block;position:relative;&.xsmall{width:30px;height:30px;div{', ';border-width:2px;}}&.small{width:40px;height:40px;div{', ';border-width:2px;}}&.big{width:64px;height:64px;div{', ';border-width:3px;}}div{box-sizing:border-box;display:block;position:absolute;margin:6px;border:6px solid #fff;border-radius:50%;animation:spinner 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:', ' transparent transparent transparent;&:nth-child(1){animation-delay:-0.45s;}&:nth-child(2){animation-delay:-0.3s;}&:nth-child(3){animation-delay:-0.15s;}}}@keyframes spinner{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}'], _mixins2.default.square('16px'), _mixins2.default.square('30px'), _mixins2.default.square('51px'), _theme2.default.colors.INDIGO);

exports.default = StyledLoader;
//# sourceMappingURL=css.js.map