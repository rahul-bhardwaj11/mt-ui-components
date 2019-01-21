'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    '\n  .ant-drawer-header {\n    ',
    ';\n    padding: 24px 32px;\n    border-bottom: 1px solid ',
    ';\n  }\n  .ant-drawer-close-x {\n    width: 16px;\n    height: 16px;\n    line-height: 16px;\n    margin: 24px 32px;\n    font-size: 16px;\n    color: ',
    ';\n  }\n  .ant-drawer-body {\n    padding: 24px 32px;\n  }\n'
  ],
  [
    '\n  .ant-drawer-header {\n    ',
    ';\n    padding: 24px 32px;\n    border-bottom: 1px solid ',
    ';\n  }\n  .ant-drawer-close-x {\n    width: 16px;\n    height: 16px;\n    line-height: 16px;\n    margin: 24px 32px;\n    font-size: 16px;\n    color: ',
    ';\n  }\n  .ant-drawer-body {\n    padding: 24px 32px;\n  }\n'
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _drawer = require('antd/lib/drawer');

var _drawer2 = _interopRequireDefault(_drawer);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('antd/lib/drawer/style/index.css');

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MtDrawer = (0, _styledComponents2.default)(_drawer2.default)(
  _templateObject,
  _mixins2.default.h2(),
  _theme2.default.colors.PEARL,
  _theme2.default.colors.ICON
);

var Drawer = (function(_Component) {
  (0, _inherits3.default)(Drawer, _Component);

  function Drawer() {
    (0, _classCallCheck3.default)(this, Drawer);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Drawer.__proto__ || (0, _getPrototypeOf2.default)(Drawer)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Drawer, [
    {
      key: 'render',
      value: function render() {
        var children = this.props.children;

        return _react2.default.createElement(MtDrawer, this.props, children);
      }
    }
  ]);
  return Drawer;
})(_react.Component);

Drawer.propTypes = {
  children: _propTypes2.default.node
};
exports.default = Drawer;
