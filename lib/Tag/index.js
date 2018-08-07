'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  .ant-tag {\n    color: rgba(0, 0, 0, 0.65);\n    border-radius: 16px;\n    font-size: 12px;\n    background: #f6f7f9;\n    color: ', ';\n    line-height: 24px;\n    height: 24px;\n    padding: 0 15px;\n    margin-bottom: 12px;\n    &:hover {\n      border: 1px solid #468ee5;\n      border-radius: 16px;\n      background-color: #e4effb;\n      color: ', ';\n    }\n    a {\n      &:hover {\n        color: ', ';\n      }\n    }\n  }\n'], ['\n  display: inline-block;\n  .ant-tag {\n    color: rgba(0, 0, 0, 0.65);\n    border-radius: 16px;\n    font-size: 12px;\n    background: #f6f7f9;\n    color: ', ';\n    line-height: 24px;\n    height: 24px;\n    padding: 0 15px;\n    margin-bottom: 12px;\n    &:hover {\n      border: 1px solid #468ee5;\n      border-radius: 16px;\n      background-color: #e4effb;\n      color: ', ';\n    }\n    a {\n      &:hover {\n        color: ', ';\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tag = require('antd/lib/tag');

var _tag2 = _interopRequireDefault(_tag);

require('antd/lib/tag/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtTag = _styledComponents2.default.div(_templateObject, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TAG_HOVER_TEXT_COLOR);

var Tag = function (_Component) {
  (0, _inherits3.default)(Tag, _Component);

  function Tag() {
    (0, _classCallCheck3.default)(this, Tag);
    return (0, _possibleConstructorReturn3.default)(this, (Tag.__proto__ || (0, _getPrototypeOf2.default)(Tag)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tag, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        MtTag,
        null,
        _react2.default.createElement(
          _tag2.default,
          this.props,
          children
        )
      );
    }
  }]);
  return Tag;
}(_react.Component);

Tag.propTypes = {
  children: _propTypes2.default.node
};

Tag.CheckableTag = _tag2.default.CheckableTag;
exports.default = Tag;
//# sourceMappingURL=index.js.map