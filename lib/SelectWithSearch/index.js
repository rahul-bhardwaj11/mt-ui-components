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
    '\n  position: relative;\n  .mt-react-select__control {\n    min-height: auto;\n    background: ',
    ';\n    line-height: 18px;\n  }\n\n  &.buttonSelect {\n    .mt-react-select__control {\n       width: 100%;\n       height: 32px;\n       border-bottom-left-radius: 0px;\n       border-bottom-right-radius: 0px;\n       border-bottom: none;\n     }\n    .selectedItems{\n      color: ',
    ';\n      border: 1px solid ',
    ';\n      background-color: ',
    ';\n      &:hover{\n        border: 1px solid ',
    ';\n        color: ',
    ';\n      }      \n    }\n    .activeSelect{\n        color: ',
    ';\n        border: 1px solid ',
    ';\n        &:hover{\n          border: 1px solid ',
    ';\n          color: ',
    ';\n        }\n    }\n    .selectWithSearchText{\n      display: inline-block;\n      line-height: 16px;      \n      .discIcon{\n        font-size: 6px;\n        margin: 0px 8px;\n        vertical-align: middle;\n        line-height: 15px;\n      }\n    }\n  }\n  \n  .mt-react-select__single-value {\n    color: ',
    ";\n    left: 0px;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  .mt-react-select__single-value + div, .mt-react-select__placeholder + div {\n    margin: 0px 2px;\n    line-height: 22px;\n  }\n\n  .mt-react-select__value-container--is-multi {\n    line-height: 26px;\n  }\n\n  .mt-react-select__value-container{\n    margin-left: 10px;\n    overflow: hidden;\n    padding-left: 0px;\n    margin-right: 20px;\n    cursor: text;\n    &:before {\n      content: '';\n      display: none;\n    }\n  }\n  .mt-react-select__menu {\n    z-index: 11;\n    margin: 0px;\n    ",
    '    \n    width: 210px;\n    border: 1px solid ',
    ';\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.08);\n  }\n  .mt-react-select__menu-list {\n    padding: 8px;\n    color: ',
    ';\n  }\n\n  .selectBoxWrapper{\n    ',
    ";\n    position: relative;\n    z-index: 10;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.08);\n    .activeSearch {\n      .mt-react-select__value-container{\n        margin-left: 35px;\n        line-height: 18px;\n      }\n\n      .activeInput {\n        .icon-cross {\n          display: block;\n          position: absolute;\n          right: 10px;\n          bottom: 12px;\n          font-size: 10px;\n          top: 12px;\n          cursor: pointer;\n          &:before {\n            float: right;\n          }\n        }\n    }\n    .mt-react-select__control {\n      &:before {\n        display: block;\n        background: url('",
    "') no-repeat 1px 0px;\n        height: 18px;\n        width: 19px;\n        content: '';\n        background-size: 13px;\n        left: 0;\n        position: absolute;\n        opacity: 0.6;\n        left: 15px;\n        top: 10px;\n      }\n    }\n    .mt-react-select__dropdown-indicator {\n      display: none;\n    }\n      .mt-react-select__single-value {\n        margin-left: 20px;\n        line-height: 26px;\n      }\n\n      .mt-react-select__placeholder {\n          margin-left: 4px;\n          ",
    ";\n      }\n    }\n\n    .mt-react-select__dropdown-indicator {\n      display: block;\n      background: url('",
    "') no-repeat 0px 7px;\n      background-size: 8px;\n\n      svg {\n        display: none;\n      }\n    }\n }\n\n  .mt-react-select__clear-indicator{\n    display: none;\n  }\n\n  .mt-react-select__control {\n    border: 1px solid ",
    ';\n    border-bottom: none;\n    position: relative;\n    &:hover{\n      border: 1px solid ',
    ';\n      border-bottom: none;\n    }\n  }\n\n  .mt-react-select__control--is-focused {    \n    border: 1px solid ',
    ';\n    border-bottom: none;\n    box-shadow: none;\n  }\n\n  .mt-react-select__control--is-focused:hover {\n    border: 1px solid ',
    ';\n    border-bottom: none;\n  }\n\n  .mt-react-select__option {\n    border-radius: 4px;\n    padding: 6px 20px 8px 16px;\n    color: ',
    ';\n    height: 32px;\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .mt-react-select__option--is-selected {\n    background-color:  ',
    ';\n    color: ',
    ';\n  }\n\n  .mt-react-select__option--is-focused {\n    background-color:  ',
    ';\n    color: ',
    ';\n    cursor: pointer;\n  }\n  .mt-react-select__indicator-separator {\n    display: none;\n  }\n\n  .ant-checkbox-wrapper .ant-checkbox {\n    vertical-align: middle;\n    margin-right: 8px;\n  }\n\n  .mt-react-select__menu-list--is-multi {\n    padding: 19px 24px;\n  }\n\n  .selectedItem {\n    margin-left: 2px;\n    margin-right: 2px;\n    font-size: 14px;\n    color: ',
    ';\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 100%;\n\n    .selectedItemLabel{\n      max-width: calc(100% - 23px);\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n\n.componentWrapper {\n  ',
    ';\n  width: 100%;\n}\n\n.buttonWrapperL {\n  float: left;\n  width: 50%;\n  padding-bottom: 10px;\n}\n\n.buttonWrapperR {\n  width: 50%;\n  text-align: right;\n  float: right;\n  padding-bottom: 10px;\n  .activeBtnState {\n   color: ',
    ';\n  } \n}\n\n.icon-cross {\n  display: none;\n}\n\n.mt-react-select__value-container:before {\n  height: 22px;\n  width: 26px;\n}\n\n.checkboxWrapper {\n  margin-bottom: 5px;\n  ',
    ';\n}\n\n.doneMarginR {\n  margin-left: 5px;\n}\n\n'
  ],
  [
    '\n  position: relative;\n  .mt-react-select__control {\n    min-height: auto;\n    background: ',
    ';\n    line-height: 18px;\n  }\n\n  &.buttonSelect {\n    .mt-react-select__control {\n       width: 100%;\n       height: 32px;\n       border-bottom-left-radius: 0px;\n       border-bottom-right-radius: 0px;\n       border-bottom: none;\n     }\n    .selectedItems{\n      color: ',
    ';\n      border: 1px solid ',
    ';\n      background-color: ',
    ';\n      &:hover{\n        border: 1px solid ',
    ';\n        color: ',
    ';\n      }      \n    }\n    .activeSelect{\n        color: ',
    ';\n        border: 1px solid ',
    ';\n        &:hover{\n          border: 1px solid ',
    ';\n          color: ',
    ';\n        }\n    }\n    .selectWithSearchText{\n      display: inline-block;\n      line-height: 16px;      \n      .discIcon{\n        font-size: 6px;\n        margin: 0px 8px;\n        vertical-align: middle;\n        line-height: 15px;\n      }\n    }\n  }\n  \n  .mt-react-select__single-value {\n    color: ',
    ";\n    left: 0px;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  .mt-react-select__single-value + div, .mt-react-select__placeholder + div {\n    margin: 0px 2px;\n    line-height: 22px;\n  }\n\n  .mt-react-select__value-container--is-multi {\n    line-height: 26px;\n  }\n\n  .mt-react-select__value-container{\n    margin-left: 10px;\n    overflow: hidden;\n    padding-left: 0px;\n    margin-right: 20px;\n    cursor: text;\n    &:before {\n      content: '';\n      display: none;\n    }\n  }\n  .mt-react-select__menu {\n    z-index: 11;\n    margin: 0px;\n    ",
    '    \n    width: 210px;\n    border: 1px solid ',
    ';\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.08);\n  }\n  .mt-react-select__menu-list {\n    padding: 8px;\n    color: ',
    ';\n  }\n\n  .selectBoxWrapper{\n    ',
    ";\n    position: relative;\n    z-index: 10;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.08);\n    .activeSearch {\n      .mt-react-select__value-container{\n        margin-left: 35px;\n        line-height: 18px;\n      }\n\n      .activeInput {\n        .icon-cross {\n          display: block;\n          position: absolute;\n          right: 10px;\n          bottom: 12px;\n          font-size: 10px;\n          top: 12px;\n          cursor: pointer;\n          &:before {\n            float: right;\n          }\n        }\n    }\n    .mt-react-select__control {\n      &:before {\n        display: block;\n        background: url('",
    "') no-repeat 1px 0px;\n        height: 18px;\n        width: 19px;\n        content: '';\n        background-size: 13px;\n        left: 0;\n        position: absolute;\n        opacity: 0.6;\n        left: 15px;\n        top: 10px;\n      }\n    }\n    .mt-react-select__dropdown-indicator {\n      display: none;\n    }\n      .mt-react-select__single-value {\n        margin-left: 20px;\n        line-height: 26px;\n      }\n\n      .mt-react-select__placeholder {\n          margin-left: 4px;\n          ",
    ";\n      }\n    }\n\n    .mt-react-select__dropdown-indicator {\n      display: block;\n      background: url('",
    "') no-repeat 0px 7px;\n      background-size: 8px;\n\n      svg {\n        display: none;\n      }\n    }\n }\n\n  .mt-react-select__clear-indicator{\n    display: none;\n  }\n\n  .mt-react-select__control {\n    border: 1px solid ",
    ';\n    border-bottom: none;\n    position: relative;\n    &:hover{\n      border: 1px solid ',
    ';\n      border-bottom: none;\n    }\n  }\n\n  .mt-react-select__control--is-focused {    \n    border: 1px solid ',
    ';\n    border-bottom: none;\n    box-shadow: none;\n  }\n\n  .mt-react-select__control--is-focused:hover {\n    border: 1px solid ',
    ';\n    border-bottom: none;\n  }\n\n  .mt-react-select__option {\n    border-radius: 4px;\n    padding: 6px 20px 8px 16px;\n    color: ',
    ';\n    height: 32px;\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .mt-react-select__option--is-selected {\n    background-color:  ',
    ';\n    color: ',
    ';\n  }\n\n  .mt-react-select__option--is-focused {\n    background-color:  ',
    ';\n    color: ',
    ';\n    cursor: pointer;\n  }\n  .mt-react-select__indicator-separator {\n    display: none;\n  }\n\n  .ant-checkbox-wrapper .ant-checkbox {\n    vertical-align: middle;\n    margin-right: 8px;\n  }\n\n  .mt-react-select__menu-list--is-multi {\n    padding: 19px 24px;\n  }\n\n  .selectedItem {\n    margin-left: 2px;\n    margin-right: 2px;\n    font-size: 14px;\n    color: ',
    ';\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 100%;\n\n    .selectedItemLabel{\n      max-width: calc(100% - 23px);\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n\n.componentWrapper {\n  ',
    ';\n  width: 100%;\n}\n\n.buttonWrapperL {\n  float: left;\n  width: 50%;\n  padding-bottom: 10px;\n}\n\n.buttonWrapperR {\n  width: 50%;\n  text-align: right;\n  float: right;\n  padding-bottom: 10px;\n  .activeBtnState {\n   color: ',
    ';\n  } \n}\n\n.icon-cross {\n  display: none;\n}\n\n.mt-react-select__value-container:before {\n  height: 22px;\n  width: 26px;\n}\n\n.checkboxWrapper {\n  margin-bottom: 5px;\n  ',
    ';\n}\n\n.doneMarginR {\n  margin-left: 5px;\n}\n\n'
  ]
);

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

var _search = require('../styles/icons/search.svg');

var _search2 = _interopRequireDefault(_search);

var _downFillcaret = require('../styles/icons/downFillcaret.svg');

var _downFillcaret2 = _interopRequireDefault(_downFillcaret);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SelectBox = _styledComponents2.default.div(
  _templateObject,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.TROPICAL_BLUE,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.DARK_OUTER_SPACE,
  function(props) {
    return props.showSearch
      ? 'border-top-left-radius: 0px;\n    border-top-right-radius: 0px;'
      : 'margin-top: 8px;';
  },
  _theme2.default.colors.PEARL,
  _theme2.default.colors.OUTER_SPACE,
  function(props) {
    return props.isButton ? 'margin-top: 10px' : '';
  },
  _search2.default,
  _mixins2.default.inactiveLink(),
  _downFillcaret2.default,
  _theme2.default.colors.PEARL,
  _theme2.default.colors.PEARL,
  _theme2.default.colors.PEARL,
  _theme2.default.colors.PEARL,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.DARK_OUTER_SPACE,
  _mixins2.default.clearfix(),
  _theme2.default.colors.INDIGO,
  function() {
    return _mixins2.default.truncate('100%');
  }
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
          isButton = _props.isButton,
          className = _props.className,
          showSearch = _props.showSearch;

        var SelectComponent = _syncSelect2.default;
        if (async) {
          SelectComponent = _asyncSelect2.default;
        }
        var componentClassName = (0, _classnames2.default)(
          {
            buttonSelect: isButton
          },
          className
        );
        return _react2.default.createElement(
          SelectBox,
          {
            className: componentClassName,
            isButton: isButton,
            showSearch: showSearch
          },
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
  buttonMaxWidth: _propTypes2.default.string,
  buttonWidth: _propTypes2.default.string,
  className: _propTypes2.default.string,
  showSearch: _propTypes2.default.bool
};
SelectWithSearch.defaultProps = {
  placeholder: 'Type here to Search',
  showSearch: true
};
exports.default = SelectWithSearch;
