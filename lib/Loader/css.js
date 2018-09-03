'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  &.fullPageloadingScreen {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    left: 0px;\n    top: 0px;\n    background: #fff;\n\n    & .loader {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    }\n  }\n\n  &.smallPageLoadingScreen,\n  &.fullPageloadingScreen {\n    //padding: 2%;\n    //@include z-index(loader);\n    & .loader {\n      text-align: center;\n      p {\n        font-size: 14px;\n        margin-bottom: 0;\n      }\n    }\n    .loadingHeading {\n      text-align: center;\n      color: #000;\n      font-size: 20px;\n      line-height: 30px;\n      font-weight: 700;\n    }\n  }\n\n  .spinner {\n    text-align: center;\n    margin: auto;\n    display: block;\n    position: relative;\n    &.xsmall {\n      width: 30px;\n      height: 30px;\n      div {\n        ', ';\n        border-width: 2px;\n      }\n    }\n    &.small {\n      width: 40px;\n      height: 40px;\n      div {\n        ', ';\n        border-width: 2px;\n      }\n    }\n    &.big {\n      width: 64px;\n      height: 64px;\n      div {\n        ', ';\n        border-width: 3px;\n      }\n    }\n    div {\n      box-sizing: border-box;\n      display: block;\n      position: absolute;\n      margin: 6px;\n      border: 6px solid #fff;\n      border-radius: 50%;\n      animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n      border-color: ', ' transparent transparent transparent;\n      &:nth-child(1) {\n        animation-delay: -0.45s;\n      }\n      &:nth-child(2) {\n        animation-delay: -0.3s;\n      }\n      &:nth-child(3) {\n        animation-delay: -0.15s;\n      }\n    }\n  }\n  @keyframes spinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n'], ['\n  &.fullPageloadingScreen {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    left: 0px;\n    top: 0px;\n    background: #fff;\n\n    & .loader {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    }\n  }\n\n  &.smallPageLoadingScreen,\n  &.fullPageloadingScreen {\n    //padding: 2%;\n    //@include z-index(loader);\n    & .loader {\n      text-align: center;\n      p {\n        font-size: 14px;\n        margin-bottom: 0;\n      }\n    }\n    .loadingHeading {\n      text-align: center;\n      color: #000;\n      font-size: 20px;\n      line-height: 30px;\n      font-weight: 700;\n    }\n  }\n\n  .spinner {\n    text-align: center;\n    margin: auto;\n    display: block;\n    position: relative;\n    &.xsmall {\n      width: 30px;\n      height: 30px;\n      div {\n        ', ';\n        border-width: 2px;\n      }\n    }\n    &.small {\n      width: 40px;\n      height: 40px;\n      div {\n        ', ';\n        border-width: 2px;\n      }\n    }\n    &.big {\n      width: 64px;\n      height: 64px;\n      div {\n        ', ';\n        border-width: 3px;\n      }\n    }\n    div {\n      box-sizing: border-box;\n      display: block;\n      position: absolute;\n      margin: 6px;\n      border: 6px solid #fff;\n      border-radius: 50%;\n      animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n      border-color: ', ' transparent transparent transparent;\n      &:nth-child(1) {\n        animation-delay: -0.45s;\n      }\n      &:nth-child(2) {\n        animation-delay: -0.3s;\n      }\n      &:nth-child(3) {\n        animation-delay: -0.15s;\n      }\n    }\n  }\n  @keyframes spinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('../styles/mixins.js');

var _mixins2 = _interopRequireDefault(_mixins);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledLoader = _styledComponents2.default.div(_templateObject, _mixins2.default.square('16px'), _mixins2.default.square('30px'), _mixins2.default.square('51px'), _theme2.default.colors.INDIGO);

exports.default = StyledLoader;
//# sourceMappingURL=css.js.map