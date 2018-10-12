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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n'], ['\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autoComplete = require('antd/lib/auto-complete');

var _autoComplete2 = _interopRequireDefault(_autoComplete);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledAutoComplete = (0, _styledComponents2.default)(
  _autoComplete2.default
)(_templateObject);

var AutoComplete = (function(_React$Component) {
  (0, _inherits3.default)(AutoComplete, _React$Component);

  function AutoComplete() {
    (0, _classCallCheck3.default)(this, AutoComplete);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (
        AutoComplete.__proto__ || (0, _getPrototypeOf2.default)(AutoComplete)
      ).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(AutoComplete, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(StyledAutoComplete, this.props);
      }
    }
  ]);
  return AutoComplete;
})(_react2.default.Component);

exports.default = AutoComplete;
