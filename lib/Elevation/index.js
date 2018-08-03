'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: ', ';\n  padding: 10px;\n'], ['\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: ', ';\n  padding: 10px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function boxShadowWithLevel(level) {
  var boxShadow = void 0;

  switch (level) {
    case 1:
      boxShadow = 'none';
      break;
    case 2:
      boxShadow = '0 2px 4px 0 rgba(0, 0, 0, 0.08)';
      break;
    case 3:
      boxShadow = '0 2px 4px 0 rgba(0, 0, 0, 0.08)';
      break;
    case 4:
      boxShadow = '0 2px 4px 0 rgba(0, 0, 0, 1)';
      break;
    default:
      boxShadow = 'none';
  }
  return boxShadow;
}

var Elevation = _styledComponents2.default.div(_templateObject, function (props) {
  return boxShadowWithLevel(props.level);
});

// function button(type){
//   let button;

//   switch (type) {
//     case 1:

//   }
// }
exports.default = Elevation;
//# sourceMappingURL=index.js.map