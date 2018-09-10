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
    '\n  .ant-input-affix-wrapper {\n    .ant-input:not(:last-child) {\n      padding: 0px 0px 0px 30px;\n    }\n  }\n  .ant-input-search:not(.ant-input-search-small) {\n    & > .ant-input-suffix {\n      right: 0px;\n      left: 12px;\n      top: 17px;\n      width: 14px;\n    }\n  }\n\n  .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {\n    border: 1px solid ',
    ';\n    &:hover {\n      border: 1px solid ',
    ';\n    }\n  }\n  .ant-input {\n    color: ',
    ';\n    font-size: 12px;\n    border: 1px solid ',
    ';\n    &:hover {\n      border: 1px solid ',
    ';\n    }\n    &:focus {\n      border: 1px solid ',
    ';\n      box-shadow: none;\n    }\n  }\n'
  ],
  [
    '\n  .ant-input-affix-wrapper {\n    .ant-input:not(:last-child) {\n      padding: 0px 0px 0px 30px;\n    }\n  }\n  .ant-input-search:not(.ant-input-search-small) {\n    & > .ant-input-suffix {\n      right: 0px;\n      left: 12px;\n      top: 17px;\n      width: 14px;\n    }\n  }\n\n  .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {\n    border: 1px solid ',
    ';\n    &:hover {\n      border: 1px solid ',
    ';\n    }\n  }\n  .ant-input {\n    color: ',
    ';\n    font-size: 12px;\n    border: 1px solid ',
    ';\n    &:hover {\n      border: 1px solid ',
    ';\n    }\n    &:focus {\n      border: 1px solid ',
    ';\n      box-shadow: none;\n    }\n  }\n'
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

require('antd/lib/input/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AntSearch = _antd.Input.Search;

var MtSearchInput = _styledComponents2.default.span(
  _templateObject,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SHARK,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SILVER
);

var Search = (function(_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    (0, _classCallCheck3.default)(this, Search);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Search, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          MtSearchInput,
          null,
          _react2.default.createElement(AntSearch, this.props)
        );
      }
    }
  ]);
  return Search;
})(_react.Component);

exports.default = Search;
