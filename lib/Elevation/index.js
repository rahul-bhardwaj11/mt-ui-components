'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var Elevation = _styledComponents2.default.div.withConfig({
  displayName: 'Elevation',
  componentId: 'sc-204401-0'
})(['border:', ';border-radius:', ';background-color:#ffffff;box-sizing:border-box;box-shadow:', ';padding:', ';width:', ';min-height:', ';'], _theme2.default.colors.PEARL, function (_ref) {
  var _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === undefined ? '4px' : _ref$borderRadius;
  return borderRadius;
}, function (props) {
  return boxShadowWithLevel(props.level);
}, function (_ref2) {
  var padding = _ref2.padding;
  return padding;
}, function (_ref3) {
  var width = _ref3.width;
  return width;
}, function (_ref4) {
  var minHeight = _ref4.minHeight;
  return minHeight;
});

Elevation.propTypes = {
  width: _propTypes2.default.string,
  padding: _propTypes2.default.string,
  borderRadius: _propTypes2.default.string,
  level: _propTypes2.default.number,
  minHeight: _propTypes2.default.string
};

exports.default = Elevation;