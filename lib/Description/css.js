'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    '\n  .desc_Heading {\n    float: left;\n    font-size: 13px;\n    font-weight: bold;\n    margin-bottom: 10px;\n    width: 90%;\n  }\n  .desc_preview {\n    font-size: 13px;\n    max-height: 136px;\n    overflow-y: auto;\n    dl {\n      padding-left: 15px;\n    }\n    ol,\n    ul {\n      padding-left: 35px;\n    }\n  }\n  .desc_buttons {\n    position: absolute;\n    right: -60px;\n    bottom: 0px;\n  }\n  .desc_editLink {\n    color: #0072bc;\n    cursor: pointer;\n    float: right;\n    text-decoration: none;\n    font-size: 13px;\n    margin: 0px 2px;\n  }\n  .desc_editor {\n    float: left;\n    .ql-editor {\n      box-sizing: border-box;\n      line-height: 20px;\n      height: 100%;\n      outline: none;\n      overflow-y: auto;\n      padding: 0px 6px;\n      tab-size: 4;\n      text-align: left;\n      color: ',
    ';\n      white-space: pre-wrap;\n      word-wrap: break-word;\n      &.ql-blank::before {\n        content: attr(data-placeholder);\n        pointer-events: none;\n        position: absolute;\n      }\n    }\n\n    .ql-container.ql-snow {\n      border: 1px solid #ccc;\n      background: ',
    ';\n      max-height: 100px;\n      padding: 5px 0px 5px 5px;\n      margin-bottom: 10px;\n    }\n\n    .ql-snow {\n      box-sizing: border-box;\n    }\n    .ql-editor,\n    p {\n      outline: none;\n      margin-bottom: 10px;\n      color: ',
    ';\n      dl {\n        padding-left: 15px;\n      }\n      ol,\n      ul {\n        padding-left: 15px;\n      }\n    }\n    .ql-container {\n      box-sizing: border-box;\n      font-size: 13px;\n      height: 100%;\n      margin: 0px;\n      position: relative;\n      &.ql-snow {\n        border: 1px solid #ccc;\n        background: ',
    ';\n        height: 80px;\n        &:hover,\n        &:active,\n        &.active {\n          border: 1px solid ',
    ';\n        }\n      }\n    }\n\n    .ql-toolbar.ql-snow {\n      border: 1px solid ',
    ";\n      box-sizing: border-box;\n      position: absolute;\n      right: 0px;\n      font-family: 'Open sans', arial, sans-serif;\n      padding: 5px 0px 5px 5px;\n      top: -31px;\n      background: ",
    ';\n      cursor: pointer;\n      box-shadow: none;\n    }\n\n    .ql-snow.ql-toolbar button {\n      background: none;\n      border: 1px solid ',
    ';\n      cursor: pointer;\n      display: inline-block;\n      float: left;\n      color: #999;\n      height: 20px;\n      padding: 3px 5px;\n      width: auto;\n      &:hover,\n      &.ql-active {\n        border: 1px solid ',
    ';\n        background: ',
    ';\n      }\n      svg {\n        float: left;\n        height: 100%;\n      }\n    }\n    .ql-snow .ql-stroke {\n      fill: none;\n      stroke: #444;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-width: 2;\n    }\n\n    .ql-editor li:not(.ql-direction-rtl)::before {\n      margin-left: -1.5em;\n      margin-right: 0.3em;\n      text-align: right;\n    }\n\n    .ql-editor li::before {\n      display: inline-block;\n      white-space: nowrap;\n      width: 1.2em;\n    }\n\n    .ql-clipboard {\n      left: -100000px;\n      height: 1px;\n      overflow-y: hidden;\n      position: absolute;\n      top: 50%;\n    }\n\n    .ql-snow .ql-even {\n      fill-rule: evenodd;\n    }\n    .ql-snow .ql-thin,\n    .ql-snow .ql-stroke.ql-thin {\n      stroke-width: 1;\n    }\n  }\n  .ql-container {\n    box-sizing: border-box;\n    font-size: 13px;\n    height: 100%;\n    margin: 0px;\n    position: relative;\n  }\n  .ql-container.ql-disabled .ql-tooltip {\n    visibility: hidden;\n  }\n  .ql-snow .ql-tooltip {\n    position: absolute;\n    transform: translateY(10px);\n  }\n  .ql-snow .ql-tooltip a {\n    cursor: pointer;\n    text-decoration: none;\n  }\n  .ql-snow .ql-tooltip.ql-flip {\n    transform: translateY(-10px);\n  }\n  .ql-snow .ql-tooltip {\n    background-color: ',
    ';\n    border: 1px solid #ccc;\n    box-shadow: 0px 0px 5px ',
    ";\n    color: #444;\n    padding: 5px 12px;\n    white-space: nowrap;\n    margin-left: 80px;\n  }\n  .ql-snow .ql-tooltip::before {\n    content: 'Visit URL:';\n    line-height: 26px;\n    margin-right: 8px;\n  }\n  .ql-snow .ql-tooltip input[type='text'] {\n    display: none;\n    border: 1px solid #ccc;\n    font-size: 13px;\n    height: 26px;\n    margin: 0px;\n    padding: 3px 5px;\n    width: 170px;\n  }\n  .ql-snow .ql-tooltip a.ql-preview {\n    display: inline-block;\n    max-width: 200px;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    vertical-align: top;\n  }\n  .ql-snow .ql-tooltip a.ql-action::after {\n    border-right: 1px solid #ccc;\n    content: 'Edit';\n    margin-left: 16px;\n    padding-right: 8px;\n  }\n  .ql-snow .ql-tooltip a.ql-remove::before {\n    content: 'Remove';\n    margin-left: 8px;\n  }\n  .ql-snow .ql-tooltip a {\n    line-height: 26px;\n  }\n  .ql-snow .ql-tooltip.ql-editing a.ql-preview,\n  .ql-snow .ql-tooltip.ql-editing a.ql-remove {\n    display: none;\n  }\n  .ql-snow .ql-tooltip.ql-editing input[type='text'] {\n    display: inline-block;\n  }\n  .ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n    border-right: 0px;\n    content: 'Save';\n    padding-right: 0px;\n  }\n  .ql-snow .ql-tooltip[data-mode='link']::before {\n    content: 'Enter link:';\n  }\n  .ql-snow .ql-tooltip[data-mode='formula']::before {\n    content: 'Enter formula:';\n  }\n  .ql-snow .ql-tooltip[data-mode='video']::before {\n    content: 'Enter video:';\n  }\n  .ql-snow a {\n    color: #06c;\n  }\n  .ql-container.ql-snow {\n    border: 1px solid #ccc;\n  }\n\n  .ql-snow.ql-toolbar button:active:hover,\n  .ql-snow .ql-toolbar button:active:hover {\n    outline: none;\n  }\n  .ql-snow.ql-toolbar input.ql-image[type='file'],\n  .ql-snow .ql-toolbar input.ql-image[type='file'] {\n    display: none;\n  }\n  .ql-snow {\n    box-sizing: border-box;\n  }\n  .ql-snow * {\n    box-sizing: border-box;\n  }\n  .ql-snow .ql-hidden {\n    display: none;\n  }\n  .ql-snow .ql-out-bottom,\n  .ql-snow .ql-out-top {\n    visibility: hidden;\n  }\n}\n"
  ],
  [
    '\n  .desc_Heading {\n    float: left;\n    font-size: 13px;\n    font-weight: bold;\n    margin-bottom: 10px;\n    width: 90%;\n  }\n  .desc_preview {\n    font-size: 13px;\n    max-height: 136px;\n    overflow-y: auto;\n    dl {\n      padding-left: 15px;\n    }\n    ol,\n    ul {\n      padding-left: 35px;\n    }\n  }\n  .desc_buttons {\n    position: absolute;\n    right: -60px;\n    bottom: 0px;\n  }\n  .desc_editLink {\n    color: #0072bc;\n    cursor: pointer;\n    float: right;\n    text-decoration: none;\n    font-size: 13px;\n    margin: 0px 2px;\n  }\n  .desc_editor {\n    float: left;\n    .ql-editor {\n      box-sizing: border-box;\n      line-height: 20px;\n      height: 100%;\n      outline: none;\n      overflow-y: auto;\n      padding: 0px 6px;\n      tab-size: 4;\n      text-align: left;\n      color: ',
    ';\n      white-space: pre-wrap;\n      word-wrap: break-word;\n      &.ql-blank::before {\n        content: attr(data-placeholder);\n        pointer-events: none;\n        position: absolute;\n      }\n    }\n\n    .ql-container.ql-snow {\n      border: 1px solid #ccc;\n      background: ',
    ';\n      max-height: 100px;\n      padding: 5px 0px 5px 5px;\n      margin-bottom: 10px;\n    }\n\n    .ql-snow {\n      box-sizing: border-box;\n    }\n    .ql-editor,\n    p {\n      outline: none;\n      margin-bottom: 10px;\n      color: ',
    ';\n      dl {\n        padding-left: 15px;\n      }\n      ol,\n      ul {\n        padding-left: 15px;\n      }\n    }\n    .ql-container {\n      box-sizing: border-box;\n      font-size: 13px;\n      height: 100%;\n      margin: 0px;\n      position: relative;\n      &.ql-snow {\n        border: 1px solid #ccc;\n        background: ',
    ';\n        height: 80px;\n        &:hover,\n        &:active,\n        &.active {\n          border: 1px solid ',
    ';\n        }\n      }\n    }\n\n    .ql-toolbar.ql-snow {\n      border: 1px solid ',
    ";\n      box-sizing: border-box;\n      position: absolute;\n      right: 0px;\n      font-family: 'Open sans', arial, sans-serif;\n      padding: 5px 0px 5px 5px;\n      top: -31px;\n      background: ",
    ';\n      cursor: pointer;\n      box-shadow: none;\n    }\n\n    .ql-snow.ql-toolbar button {\n      background: none;\n      border: 1px solid ',
    ';\n      cursor: pointer;\n      display: inline-block;\n      float: left;\n      color: #999;\n      height: 20px;\n      padding: 3px 5px;\n      width: auto;\n      &:hover,\n      &.ql-active {\n        border: 1px solid ',
    ';\n        background: ',
    ';\n      }\n      svg {\n        float: left;\n        height: 100%;\n      }\n    }\n    .ql-snow .ql-stroke {\n      fill: none;\n      stroke: #444;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-width: 2;\n    }\n\n    .ql-editor li:not(.ql-direction-rtl)::before {\n      margin-left: -1.5em;\n      margin-right: 0.3em;\n      text-align: right;\n    }\n\n    .ql-editor li::before {\n      display: inline-block;\n      white-space: nowrap;\n      width: 1.2em;\n    }\n\n    .ql-clipboard {\n      left: -100000px;\n      height: 1px;\n      overflow-y: hidden;\n      position: absolute;\n      top: 50%;\n    }\n\n    .ql-snow .ql-even {\n      fill-rule: evenodd;\n    }\n    .ql-snow .ql-thin,\n    .ql-snow .ql-stroke.ql-thin {\n      stroke-width: 1;\n    }\n  }\n  .ql-container {\n    box-sizing: border-box;\n    font-size: 13px;\n    height: 100%;\n    margin: 0px;\n    position: relative;\n  }\n  .ql-container.ql-disabled .ql-tooltip {\n    visibility: hidden;\n  }\n  .ql-snow .ql-tooltip {\n    position: absolute;\n    transform: translateY(10px);\n  }\n  .ql-snow .ql-tooltip a {\n    cursor: pointer;\n    text-decoration: none;\n  }\n  .ql-snow .ql-tooltip.ql-flip {\n    transform: translateY(-10px);\n  }\n  .ql-snow .ql-tooltip {\n    background-color: ',
    ';\n    border: 1px solid #ccc;\n    box-shadow: 0px 0px 5px ',
    ";\n    color: #444;\n    padding: 5px 12px;\n    white-space: nowrap;\n    margin-left: 80px;\n  }\n  .ql-snow .ql-tooltip::before {\n    content: 'Visit URL:';\n    line-height: 26px;\n    margin-right: 8px;\n  }\n  .ql-snow .ql-tooltip input[type='text'] {\n    display: none;\n    border: 1px solid #ccc;\n    font-size: 13px;\n    height: 26px;\n    margin: 0px;\n    padding: 3px 5px;\n    width: 170px;\n  }\n  .ql-snow .ql-tooltip a.ql-preview {\n    display: inline-block;\n    max-width: 200px;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    vertical-align: top;\n  }\n  .ql-snow .ql-tooltip a.ql-action::after {\n    border-right: 1px solid #ccc;\n    content: 'Edit';\n    margin-left: 16px;\n    padding-right: 8px;\n  }\n  .ql-snow .ql-tooltip a.ql-remove::before {\n    content: 'Remove';\n    margin-left: 8px;\n  }\n  .ql-snow .ql-tooltip a {\n    line-height: 26px;\n  }\n  .ql-snow .ql-tooltip.ql-editing a.ql-preview,\n  .ql-snow .ql-tooltip.ql-editing a.ql-remove {\n    display: none;\n  }\n  .ql-snow .ql-tooltip.ql-editing input[type='text'] {\n    display: inline-block;\n  }\n  .ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n    border-right: 0px;\n    content: 'Save';\n    padding-right: 0px;\n  }\n  .ql-snow .ql-tooltip[data-mode='link']::before {\n    content: 'Enter link:';\n  }\n  .ql-snow .ql-tooltip[data-mode='formula']::before {\n    content: 'Enter formula:';\n  }\n  .ql-snow .ql-tooltip[data-mode='video']::before {\n    content: 'Enter video:';\n  }\n  .ql-snow a {\n    color: #06c;\n  }\n  .ql-container.ql-snow {\n    border: 1px solid #ccc;\n  }\n\n  .ql-snow.ql-toolbar button:active:hover,\n  .ql-snow .ql-toolbar button:active:hover {\n    outline: none;\n  }\n  .ql-snow.ql-toolbar input.ql-image[type='file'],\n  .ql-snow .ql-toolbar input.ql-image[type='file'] {\n    display: none;\n  }\n  .ql-snow {\n    box-sizing: border-box;\n  }\n  .ql-snow * {\n    box-sizing: border-box;\n  }\n  .ql-snow .ql-hidden {\n    display: none;\n  }\n  .ql-snow .ql-out-bottom,\n  .ql-snow .ql-out-top {\n    visibility: hidden;\n  }\n}\n"
  ]
);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledDescription = _styledComponents2.default.div(
  _templateObject,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.DARK_OUTER_SPACE,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.TROPICAL_BLUE,
  _theme2.default.colors.TROPICAL_BLUE,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.ALTO
);
exports.default = StyledDescription;
