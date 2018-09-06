'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  max-width: 100vw;\n  bottom: 0;\n  width: ', ';\n  left: 0;\n  right: 0;\n  margin: auto;\n  background-color: white;\n  padding: 16px 32px;\n  box-shadow: 0 -1px 0 0 #e7e8ec, 0 -2px 4px 0 rgba(0, 0, 0, 0.08);\n  .countText {\n    ', ';\n    margin-right: 29px;\n  }\n'], ['\n  position: fixed;\n  max-width: 100vw;\n  bottom: 0;\n  width: ', ';\n  left: 0;\n  right: 0;\n  margin: auto;\n  background-color: white;\n  padding: 16px 32px;\n  box-shadow: 0 -1px 0 0 #e7e8ec, 0 -2px 4px 0 rgba(0, 0, 0, 0.08);\n  .countText {\n    ', ';\n    margin-right: 29px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('antd/lib/button/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('../styles/mixins.js');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtActionBar = _styledComponents2.default.div(_templateObject, function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? '1248px' : _ref$width;
  return width;
}, _mixins2.default.blackLink());

var ActionBar = function ActionBar(_ref2) {
  var children = _ref2.children,
      countText = _ref2.countText,
      style = _ref2.style;

  return _react2.default.createElement(
    MtActionBar,
    style,
    _react2.default.createElement(
      'span',
      { className: 'countText' },
      countText
    ),
    children
  );
};

ActionBar.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.node),
  countText: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object
};

exports.default = ActionBar;
//# sourceMappingURL=index.js.map