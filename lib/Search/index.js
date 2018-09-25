'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

require('antd/lib/input/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AntSearch = _antd.Input.Search;

var MtSearchInput = _styledComponents2.default.span.withConfig({
  displayName: 'Search__MtSearchInput',
  componentId: 'fvhlk1-0'
})(
  [
    '.ant-input-affix-wrapper{font-family:inherit;.ant-input:not(:last-child){padding:0px 0px 0px 30px;}}.ant-input-search:not(.ant-input-search-small){& > .ant-input-suffix{right:0px;left:12px;top:17px;width:14px;}}.ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled){border:1px solid ',
    ';&:hover{border:1px solid ',
    ';}}.ant-input{color:',
    ';font-family:inherit;font-size:12px;border:1px solid ',
    ';&:hover{border:1px solid ',
    ';}&:focus{border:1px solid ',
    ';box-shadow:none;}}.ant-input-search > .ant-input-suffix > .ant-input-search-icon{display:none;}.icon-search{color:',
    ';}.ant-input-search:focus .icon-search,.ant-input-search:active .icon-search,.ant-input-search:focus-within .icon-search{color:',
    ';}'
  ],
  _theme2.default.colors.ALTO,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SHARK,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.GREY
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
        var suffix = _react2.default.createElement(_Icon2.default, {
          type: 'search'
        });
        return _react2.default.createElement(
          MtSearchInput,
          null,
          _react2.default.createElement(
            AntSearch,
            (0, _extends3.default)({}, this.props, { suffix: suffix })
          )
        );
      }
    }
  ]);
  return Search;
})(_react.Component);

exports.default = Search;
