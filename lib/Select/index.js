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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    "\n  display: inline-block;\n\n  .selectDropdownStyle {\n    .ant-select-dropdown-menu-item {\n     div {\n         width: 95%;\n         text-overflow: ellipsis;\n         overflow: hidden;\n         white-space: nowrap;\n       }\n     }\n   }\n\n  .ant-select, .ant-select-dropdown{\n    font-family: inherit;\n  }\n  .ant-select-arrow {\n    display: block;\n    background: url('",
    "') no-repeat 1px 4px;\n    background-size: 8px;\n    width: 9px;\n    height: 9px;\n    &::before {\n      content: '';\n    }\n    svg{\n      display:none;\n    }\n  }\n  .ant-select-selection {\n    &.ant-select-selection--single {\n      border: 1px solid get('colors.ALTO');\n      &:hover {\n        border: 1px solid get('colors.SILVER');\n      }\n      &:focus,\n      &:active {\n        box-shadow: none;\n        border: 1px solid get('colors.SILVER');\n      }\n      &.disabled {\n        background-color: #f8f8f8;\n        border: 1px solid #e8e8e8;\n      }\n    }\n    .ant-select-open {\n      .ant-select-selection {\n        border: 1px solid get('colors.SILVER');\n      }\n    }\n  }\n\n  .ant-select-open {\n    .ant-select-selection {\n      &.ant-select-selection--multiple {\n        border: 1px solid transparent;\n        outline: none;\n        &:hover,\n        &:focus,\n        &:active {\n          border: 0px;\n          border-color: transparent;\n          outline: none;\n          box-shadow: none;\n        }\n      }\n    }\n  }\n  .ant-select-dropdown-menu {\n    background-color: #fff;\n    color: get('colors.GREY');\n    margin: 8px;\n    padding-bottom: 8px;\n    .ant-select-dropdown-menu-item {\n      border-radius: 4px;\n      margin-bottom: px;\n      &:first-child {\n        background-color: #fff;\n      }\n      &:hover {\n        background-color: #4a90e2;\n        color: #fff;\n        border-radius: 4px;\n      }\n    }\n  }\n  .ant-select-selection-selected-value {\n    font-weight: normal;\n    div {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      max-width: 100%;\n    }\n  }\n  .ant-select-selection--multiple {\n    width: 688px;\n    padding: 5px;\n    border: 0px;\n    &:focus {\n      border-color: transparent;\n      box-shadow: none;\n    }\n    .ant-select-selection__rendered {\n      & > ul {\n        & > .ant-select-selection__choice {\n          border-radius: 14px;\n          border: 1px solid get('colors.ALTO');\n          border-radius: 16px;\n          background-color: #f5f6f7;\n          color: #989ca6;\n          font-size: 12px;\n          .ant-select-selection__choice__content {\n            margin-right: 5px;\n          }\n          &:hover {\n            border: 1px solid #468ee5;\n            background-color: #fff;\n            color: #468ee5;\n            cursor: pointer;\n            .ant-select-selection__choice__remove {\n              color: #468ee5;\n            }\n          }\n          .ant-select-selection__choice__remove {\n            color: #989ca6;\n            font-size: 16px;\n          }\n        }\n      }\n    }\n  }\n  .ant-select-dropdown--multiple {\n    z-index: 999999;\n  }\n"
  ],
  [
    "\n  display: inline-block;\n\n  .selectDropdownStyle {\n    .ant-select-dropdown-menu-item {\n     div {\n         width: 95%;\n         text-overflow: ellipsis;\n         overflow: hidden;\n         white-space: nowrap;\n       }\n     }\n   }\n\n  .ant-select, .ant-select-dropdown{\n    font-family: inherit;\n  }\n  .ant-select-arrow {\n    display: block;\n    background: url('",
    "') no-repeat 1px 4px;\n    background-size: 8px;\n    width: 9px;\n    height: 9px;\n    &::before {\n      content: '';\n    }\n    svg{\n      display:none;\n    }\n  }\n  .ant-select-selection {\n    &.ant-select-selection--single {\n      border: 1px solid get('colors.ALTO');\n      &:hover {\n        border: 1px solid get('colors.SILVER');\n      }\n      &:focus,\n      &:active {\n        box-shadow: none;\n        border: 1px solid get('colors.SILVER');\n      }\n      &.disabled {\n        background-color: #f8f8f8;\n        border: 1px solid #e8e8e8;\n      }\n    }\n    .ant-select-open {\n      .ant-select-selection {\n        border: 1px solid get('colors.SILVER');\n      }\n    }\n  }\n\n  .ant-select-open {\n    .ant-select-selection {\n      &.ant-select-selection--multiple {\n        border: 1px solid transparent;\n        outline: none;\n        &:hover,\n        &:focus,\n        &:active {\n          border: 0px;\n          border-color: transparent;\n          outline: none;\n          box-shadow: none;\n        }\n      }\n    }\n  }\n  .ant-select-dropdown-menu {\n    background-color: #fff;\n    color: get('colors.GREY');\n    margin: 8px;\n    padding-bottom: 8px;\n    .ant-select-dropdown-menu-item {\n      border-radius: 4px;\n      margin-bottom: px;\n      &:first-child {\n        background-color: #fff;\n      }\n      &:hover {\n        background-color: #4a90e2;\n        color: #fff;\n        border-radius: 4px;\n      }\n    }\n  }\n  .ant-select-selection-selected-value {\n    font-weight: normal;\n    div {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      max-width: 100%;\n    }\n  }\n  .ant-select-selection--multiple {\n    width: 688px;\n    padding: 5px;\n    border: 0px;\n    &:focus {\n      border-color: transparent;\n      box-shadow: none;\n    }\n    .ant-select-selection__rendered {\n      & > ul {\n        & > .ant-select-selection__choice {\n          border-radius: 14px;\n          border: 1px solid get('colors.ALTO');\n          border-radius: 16px;\n          background-color: #f5f6f7;\n          color: #989ca6;\n          font-size: 12px;\n          .ant-select-selection__choice__content {\n            margin-right: 5px;\n          }\n          &:hover {\n            border: 1px solid #468ee5;\n            background-color: #fff;\n            color: #468ee5;\n            cursor: pointer;\n            .ant-select-selection__choice__remove {\n              color: #468ee5;\n            }\n          }\n          .ant-select-selection__choice__remove {\n            color: #989ca6;\n            font-size: 16px;\n          }\n        }\n      }\n    }\n  }\n  .ant-select-dropdown--multiple {\n    z-index: 999999;\n  }\n"
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('antd/lib/dropdown/style/css');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

require('antd/lib/select/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _downFillcaret = require('../styles/icons/downFillcaret.svg');

var _downFillcaret2 = _interopRequireDefault(_downFillcaret);

var _StringToHTML = require('../StringToHTML');

var _StringToHTML2 = _interopRequireDefault(_StringToHTML);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Option = _select2.default.Option;

var MtWrapper = _styledComponents2.default.div(
  _templateObject,
  _downFillcaret2.default
);

var Select = (function(_Component) {
  (0, _inherits3.default)(Select, _Component);

  function Select() {
    (0, _classCallCheck3.default)(this, Select);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Select, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          options = _props.options,
          style = _props.style;

        return _react2.default.createElement(
          MtWrapper,
          {
            innerRef: function innerRef(el) {
              if (el) {
                _this2.selectDropdownRef = el;
              }
            },
            style: style
          },
          _react2.default.createElement(
            _select2.default,
            (0, _extends3.default)({}, this.props, {
              onClick: function onClick(event) {
                event.stopPropagation();
              },
              getPopupContainer: function getPopupContainer() {
                return _this2.selectDropdownRef;
              },
              dropdownClassName: 'selectDropdownStyle'
            }),
            options.map(function(option) {
              return _react2.default.createElement(
                Option,
                {
                  key: option.key,
                  value: option.key,
                  title: _this2.props.title || option.title
                },
                typeof option.content === 'string'
                  ? _react2.default.createElement(_StringToHTML2.default, {
                      content: option.content
                    })
                  : option.content
              );
            })
          )
        );
      }
    }
  ]);
  return Select;
})(_react.Component);

Select.propTypes = {
  options: _propTypes2.default.any.isRequired,
  onChange: _propTypes2.default.func,
  style: _propTypes2.default.object,
  defaultValue: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.number
  ]),
  title: _propTypes2.default.string
};
Select.defaultProps = {
  style: { minWidth: 125 }
};
exports.default = Select;
