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

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _drawer = require('antd/lib/drawer');

var _drawer2 = _interopRequireDefault(_drawer);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('antd/lib/drawer/style/index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import mixins from "../styles/mixins";
// import theme from "../styles/theme";

var MtDrawer = (0, _styledComponents2.default)(_drawer2.default)(
  _templateObject
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
