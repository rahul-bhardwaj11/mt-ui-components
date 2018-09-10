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
    "\n  //  width: 0;\n  //  transition: width 2s;\n  //  &.active {\n  //    width: 100%;\n  //  }\n  &.buttonSelect {\n    .mt-react-select__control {\n      width: 0;\n      opacity: 0;\n      transition: width .85s, opacity 1s;\n    }\n\n    .activeSearch {\n      .mt-react-select__control {\n        width: 100%;\n        opacity: 1;\n\n      }\n    }\n  }\n  .mt-react-select__single-value {\n    padding-left: 0px;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  .mt-react-select__value-container{\n    padding-left: 12px;\n    &:before {\n    content: '';\n    display: none;\n    height: 22px;\n    width: 24px;\n    background-size: 14px;\n    padding-left: 5px;\n    padding-top: 5px;\n    left: 0;\n    position: absolute;\n    opacity: 0.6;\n  }\n  }\n  .mt-react-select__menu-list {\n    padding: 8px;\n    color: ",
    ";\n  }\n\n  .selectBoxWrapper{\n    height: 32px;\n   .activeSearch {\n    .mt-react-select__value-container{\n      &:before {\n          display: block;\n          background: url('",
    "') no-repeat 10px 5px;\n        }\n      }\n      .mt-react-select__single-value {\n        padding-left: 20px;\n      }\n      .mt-react-select__dropdown-indicator {\n        display: none;\n      }\n      .mt-react-select__placeholder {\n        padding-left: 20px;\n      }\n  }\n}\n\n  .mt-react-select__clear-indicator{\n    display: none;\n  }\n  .mt-react-select__control {\n    border: 1px solid ",
    ';\n    width: ',
    ';\n  }\n  .mt-react-select__control--is-focused {\n    box-shadow: none;\n    border: 1px solid ',
    ';\n  }\n  .mt-react-select__control--is-focused:hover {\n    border: 1px solid ',
    ';\n  }\n  .mt-react-select__option {\n    border-radius: 4px;\n    padding: 6px 20px 8px 16px;\n    color: ',
    ';\n    height: 32px;\n  }\n  // .mt-react-select__option:hover{\n  //   background-color: ',
    ';\n  //   color: #ffffff;\n  //   cursor: pointer;\n  // }\n  .mt-react-select__option--is-selected {\n    background-color: #ffffff;\n    color: ',
    ';\n  }\n  .mt-react-select__option--is-focused {\n    background-color:  ',
    ';\n    color: #ffffff;\n    cursor: pointer;\n  }\n  .mt-react-select__indicator-separator {\n    display: none;\n  }\n  .mt-react-select__input {\n    padding-left: 20px;\n  }\n  .mt-react-select__placeholder {\n    //padding-left: 20px;\n  }\n\n  .ant-checkbox-wrapper .ant-checkbox {\n    vertical-align: middle;\n    margin-right: 8px;\n  }\n\n  .mt-react-select__menu-list--is-multi {\n    padding: 19px 24px;\n  }\n\n  .ant-btn-text {\n    padding: 0px 24px;\n  }\n\n  .selectedItem {\n    margin-left: 2px;\n    margin-right: 2px;\n    //padding-left: 30px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%);\n  }\n.componentWrapper {\n  ',
    ';\n  width: 100%;\n}\n\n.buttonWrapperL {\n  float: left;\n  width: 50%;\n  padding-bottom: 10px;\n}\n\n.buttonWrapperR {\n  float: right;\n  padding-bottom: 10px;\n}\n\n.dataLabel {\n  ',
    ';\n}\n\n.icon-Cancel {\n  display: none;\n}\n\n.activeInput {\n  .icon-Cancel {\n    display: inline-block;\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    cursor: pointer;\n  }\n}\n\n.mt-react-select__value-container:before {\n  height: 22px;\n  width: 26px;\n}\n\n.checkboxWrapper {\n  margin-bottom: 5px;\n}\n.doneMarginR {\n  margin-left: 5px;\n}\n'
  ],
  [
    "\n  //  width: 0;\n  //  transition: width 2s;\n  //  &.active {\n  //    width: 100%;\n  //  }\n  &.buttonSelect {\n    .mt-react-select__control {\n      width: 0;\n      opacity: 0;\n      transition: width .85s, opacity 1s;\n    }\n\n    .activeSearch {\n      .mt-react-select__control {\n        width: 100%;\n        opacity: 1;\n\n      }\n    }\n  }\n  .mt-react-select__single-value {\n    padding-left: 0px;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  .mt-react-select__value-container{\n    padding-left: 12px;\n    &:before {\n    content: '';\n    display: none;\n    height: 22px;\n    width: 24px;\n    background-size: 14px;\n    padding-left: 5px;\n    padding-top: 5px;\n    left: 0;\n    position: absolute;\n    opacity: 0.6;\n  }\n  }\n  .mt-react-select__menu-list {\n    padding: 8px;\n    color: ",
    ";\n  }\n\n  .selectBoxWrapper{\n    height: 32px;\n   .activeSearch {\n    .mt-react-select__value-container{\n      &:before {\n          display: block;\n          background: url('",
    "') no-repeat 10px 5px;\n        }\n      }\n      .mt-react-select__single-value {\n        padding-left: 20px;\n      }\n      .mt-react-select__dropdown-indicator {\n        display: none;\n      }\n      .mt-react-select__placeholder {\n        padding-left: 20px;\n      }\n  }\n}\n\n  .mt-react-select__clear-indicator{\n    display: none;\n  }\n  .mt-react-select__control {\n    border: 1px solid ",
    ';\n    width: ',
    ';\n  }\n  .mt-react-select__control--is-focused {\n    box-shadow: none;\n    border: 1px solid ',
    ';\n  }\n  .mt-react-select__control--is-focused:hover {\n    border: 1px solid ',
    ';\n  }\n  .mt-react-select__option {\n    border-radius: 4px;\n    padding: 6px 20px 8px 16px;\n    color: ',
    ';\n    height: 32px;\n  }\n  // .mt-react-select__option:hover{\n  //   background-color: ',
    ';\n  //   color: #ffffff;\n  //   cursor: pointer;\n  // }\n  .mt-react-select__option--is-selected {\n    background-color: #ffffff;\n    color: ',
    ';\n  }\n  .mt-react-select__option--is-focused {\n    background-color:  ',
    ';\n    color: #ffffff;\n    cursor: pointer;\n  }\n  .mt-react-select__indicator-separator {\n    display: none;\n  }\n  .mt-react-select__input {\n    padding-left: 20px;\n  }\n  .mt-react-select__placeholder {\n    //padding-left: 20px;\n  }\n\n  .ant-checkbox-wrapper .ant-checkbox {\n    vertical-align: middle;\n    margin-right: 8px;\n  }\n\n  .mt-react-select__menu-list--is-multi {\n    padding: 19px 24px;\n  }\n\n  .ant-btn-text {\n    padding: 0px 24px;\n  }\n\n  .selectedItem {\n    margin-left: 2px;\n    margin-right: 2px;\n    //padding-left: 30px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%);\n  }\n.componentWrapper {\n  ',
    ';\n  width: 100%;\n}\n\n.buttonWrapperL {\n  float: left;\n  width: 50%;\n  padding-bottom: 10px;\n}\n\n.buttonWrapperR {\n  float: right;\n  padding-bottom: 10px;\n}\n\n.dataLabel {\n  ',
    ';\n}\n\n.icon-Cancel {\n  display: none;\n}\n\n.activeInput {\n  .icon-Cancel {\n    display: inline-block;\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    cursor: pointer;\n  }\n}\n\n.mt-react-select__value-container:before {\n  height: 22px;\n  width: 26px;\n}\n\n.checkboxWrapper {\n  margin-bottom: 5px;\n}\n.doneMarginR {\n  margin-left: 5px;\n}\n'
  ]
);
//import AsyncSelect from "react-select/lib/Async";
//import { Icon } from 'antd';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _asyncSelect = require('./asyncSelect');

var _asyncSelect2 = _interopRequireDefault(_asyncSelect);

var _syncSelect = require('./syncSelect');

var _syncSelect2 = _interopRequireDefault(_syncSelect);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _search = require('./assets/search.svg');

var _search2 = _interopRequireDefault(_search);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SelectBox = _styledComponents2.default.div(
  _templateObject,
  _theme2.default.colors.OUTER_SPACE,
  _search2.default,
  _theme2.default.colors.ALTO,
  function(_ref) {
    var _ref$width = _ref.width,
      width = _ref$width === undefined ? 'auto' : _ref$width;
    return width;
  },
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.INDIGO,
  _mixins2.default.clearfix(),
  _mixins2.default.displayIB()
);

var SelectWithSearch = (function(_Component) {
  (0, _inherits3.default)(SelectWithSearch, _Component);

  function SelectWithSearch() {
    (0, _classCallCheck3.default)(this, SelectWithSearch);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (
        SelectWithSearch.__proto__ ||
        (0, _getPrototypeOf2.default)(SelectWithSearch)
      ).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(SelectWithSearch, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          async = _props.async,
          isButton = _props.isButton;

        var SelectComponent = _syncSelect2.default;
        if (async) {
          SelectComponent = _asyncSelect2.default;
        }
        var className = (0, _classnames2.default)({
          buttonSelect: isButton
        });
        return _react2.default.createElement(
          SelectBox,
          { className: className },
          _react2.default.createElement(SelectComponent, this.props)
        );
      }
    }
  ]);
  return SelectWithSearch;
})(_react.Component);

SelectWithSearch.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  async: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  isMulti: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  isButton: _propTypes2.default.bool,
  buttonMaxWidth: _propTypes2.default.number,
  buttonWidth: _propTypes2.default.number
};
SelectWithSearch.defaultProps = {
  placeholder: 'Type here to Search'
};
exports.default = SelectWithSearch;
