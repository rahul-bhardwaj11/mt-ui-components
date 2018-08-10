'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  border: ', ';\n  border-radius: ', ';\n  background-color: #ffffff;\n  box-sizing: border-box;\n  box-shadow: ', ';\n  padding: ', ';\n  width: ', ';\n'], ['\n  border: ', ';\n  border-radius: ', ';\n  background-color: #ffffff;\n  box-sizing: border-box;\n  box-shadow: ', ';\n  padding: ', ';\n  width: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function boxShadowWithLevel(level) {
  var boxShadow = void 0;

  switch (level) {
    case 1:
      boxShadow = '0 2px 4px 0 rgba(0,0,0,0.08)';
      break;
    case 2:
      boxShadow = '0 4px 8px 0 rgba(0,0,0,0.08)';
      break;
    case 3:
      boxShadow = '0 8px 16px 0 rgba(0,0,0,0.1)';
      break;
    case 4:
      boxShadow = '0 16px 32px 0 rgba(0,0,0,0.12)';
      break;
    default:
      boxShadow = '0 2px 4px 0 rgba(0,0,0,0.08)';
  }
  return boxShadow;
}

var Elevation = _styledComponents2.default.div(_templateObject, function (props) {
  return props.level1 ? '1px solid #E7E8EC' : '1px solid rgba(205,210,217,0.5)';
}, function (_ref) {
  var _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === undefined ? '4px' : _ref$borderRadius;
  return borderRadius;
}, function (props) {
  return boxShadowWithLevel(props.level);
}, function (_ref2) {
  var wrapperPadding = _ref2.wrapperPadding;
  return wrapperPadding;
}, function (_ref3) {
  var wrapperWidth = _ref3.wrapperWidth;
  return wrapperWidth;
});

exports.default = Elevation;
//# sourceMappingURL=index.js.map