'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    '\n  background: ',
    ';\n  text-align: center;\n  height: 100vh;\n  display: table;\n  width: 100%;\n.innerWrapperErrorBoundary{\n  display: table-cell;\n  vertical-align: middle;\n}\n  .subErrorText {\n  ',
    ';\n  margin: 24px 0 24px;\n  }\n}\n'
  ],
  [
    '\n  background: ',
    ';\n  text-align: center;\n  height: 100vh;\n  display: table;\n  width: 100%;\n.innerWrapperErrorBoundary{\n  display: table-cell;\n  vertical-align: middle;\n}\n  .subErrorText {\n  ',
    ';\n  margin: 24px 0 24px;\n  }\n}\n'
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

var ErrorBoundaryWrapper = _styledComponents2.default.div(
  _templateObject,
  _theme2.default.colors.WHITE,
  _mixins2.default.h2()
);

exports.default = ErrorBoundaryWrapper;
