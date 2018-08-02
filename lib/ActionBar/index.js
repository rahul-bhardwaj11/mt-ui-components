'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  max-width: 100vw;\n  bottom: 0;\n  width: 1248px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  background-color: white;\n  padding: 1.5em 0;\n  box-shadow: 0 -1px 0 0 #e7e8ec, 0 -2px 4px 0 rgba(0, 0, 0, 0.08);\n  .countText {\n    padding: 0 2em;\n    color: ', ';\n    font-size: 14px;\n    font-weight: 600;\n  }\n'], ['\n  position: fixed;\n  max-width: 100vw;\n  bottom: 0;\n  width: 1248px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  background-color: white;\n  padding: 1.5em 0;\n  box-shadow: 0 -1px 0 0 #e7e8ec, 0 -2px 4px 0 rgba(0, 0, 0, 0.08);\n  .countText {\n    padding: 0 2em;\n    color: ', ';\n    font-size: 14px;\n    font-weight: 600;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('antd/lib/button/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtActionBar = _styledComponents2.default.div(_templateObject, _theme2.default.colors.SHARK);

var ActionBar = function ActionBar(_ref) {
  var children = _ref.children,
      countText = _ref.countText;

  return _react2.default.createElement(
    MtActionBar,
    null,
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
  countText: _propTypes2.default.string.isRequired
};

exports.default = ActionBar;
//# sourceMappingURL=index.js.map