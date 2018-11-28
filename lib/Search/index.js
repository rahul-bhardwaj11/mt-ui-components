'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var MtSearchInput = _styledComponents2.default.span.withConfig({
  displayName: 'Search__MtSearchInput',
  componentId: 'fvhlk1-0'
})(
  [
    '.ant-input-affix-wrapper{font-family:inherit;.ant-input:not(:last-child){padding:0px 30px 0px 30px;}}.ant-input-search:not(.ant-input-search-small){& > .ant-input-suffix{right:0px;left:12px;top:17px;width:14px;}}.ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled){border:1px solid ',
    ';&:hover{border:1px solid ',
    ';}}.ant-input{color:',
    ';font-family:inherit;font-size:12px;border:1px solid ',
    ';&:hover{border:1px solid ',
    ';}&:focus{border:1px solid ',
    ';box-shadow:none;}}.ant-input-search > .ant-input-prefix > .ant-input-search-icon{display:none;}.icon-search{font-size:12px;color:',
    ';}.ant-input-affix-wrapper:focus .icon-search,.ant-input-affix-wrapper:active .icon-search,.ant-input-affix-wrapper:focus-within .icon-search{color:',
    ';}.ant-input-affix-wrapper .ant-input-suffix{top:17px;}.icon-close{font-size:10px;font-weight:600;color:',
    ';cursor:pointer;}'
  ],
  _theme2.default.colors.ALTO,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SHARK,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.GREY,
  _theme2.default.colors.GREY
);

var Search = (function(_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Search);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        query: _this.props.value || ''
      }),
      (_this.handleClear = function() {
        _this.setState({ query: '' });
        _this.props.onSearch('');
      }),
      (_this.handleChange = function(event) {
        var query = event.target.value;
        var onSearch = _this.props.onSearch;

        _this.setState({ query: query });
        onSearch(query);
      }),
      (_this.handleSearch = function(event) {
        _this.props.onPressEnter(event.target.value);
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(Search, [
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (
          typeof nextProps.value !== 'undefined' &&
          nextProps.value !== this.state.query
        ) {
          this.setState({
            query: nextProps.value
          });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var query = this.state.query;
        var _props = this.props,
          onSearch = _props.onSearch,
          rest = (0, _objectWithoutProperties3.default)(_props, ['onSearch']); //eslint-disable-line

        var inputProps = (0, _extends3.default)({}, rest, {
          onChange: this.handleChange,
          onPressEnter: this.handleSearch,
          prefix: _react2.default.createElement(_Icon2.default, {
            type: 'search'
          }),
          suffix:
            query &&
            _react2.default.createElement(_Icon2.default, {
              type: 'close',
              onClick: this.handleClear
            }),
          value: query
        });
        return _react2.default.createElement(
          MtSearchInput,
          null,
          _react2.default.createElement(_antd.Input, inputProps)
        );
      }
    }
  ]);
  return Search;
})(_react.Component);

Search.propTypes = {
  value: _propTypes2.default.string,
  onSearch: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func,
  onPressEnter: _propTypes2.default.func
};
Search.defaultProps = {
  onSearch: function onSearch() {},
  onPressEnter: function onPressEnter() {}
};
exports.default = Search;
