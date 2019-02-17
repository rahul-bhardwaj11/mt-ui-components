'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    '\n  .ant-modal .ant-modal-body {\n    min-height: 150px;\n  }\n  .getHelpMsg {\n    margin-top: 65px;\n    ',
    ';\n    text-align: center;\n  }\n'
  ],
  [
    '\n  .ant-modal .ant-modal-body {\n    min-height: 150px;\n  }\n  .getHelpMsg {\n    margin-top: 65px;\n    ',
    ';\n    text-align: center;\n  }\n'
  ]
);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyleAlertBox = (0, _styledComponents2.default)(_Modal2.default)(
  _templateObject,
  _mixins2.default.h3()
);

exports.default = StyleAlertBox;
