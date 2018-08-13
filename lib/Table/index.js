'use strict';

Object.defineProperty(exports, "__esModule", {
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

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  counter-reset: rowNumber;\n\n  .ant-table-default > .ant-table-content > .ant-table-body > table,\n  .ant-table-middle > .ant-table-content > .ant-table-body > table,\n  .ant-table-small > .ant-table-content > .ant-table-body > table,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-scroll\n    > .ant-table-header\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-scroll\n    > .ant-table-body\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-left\n    > .ant-table-header\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-left\n    > .ant-table-body\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-right\n    > .ant-table-header\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-right\n    > .ant-table-body\n    > .ant-table-fixed {\n    padding: 0px;\n    .ant-table-thead {\n      & > tr {\n        color: ', ';\n        & > th {\n          ', ';\n          background-color: white;\n          border-bottom: 1px solid ', ';\n          padding: ', ';\n          &:last-child {\n            padding: ', ';\n          }\n        }\n      }\n    }\n    .ant-table-tbody {\n      & > tr {\n        color: ', ';\n        & > td {\n          ', ';\n          background-color: white;\n          border-bottom: 1px solid ', ';\n          padding: ', ';\n          &:last-child {\n            padding: ', ';\n          }\n        }\n      }\n    }\n\n    .ant-table-row {\n      counter-increment: rowNumber;\n      &:hover {\n        .ant-table-selection-column {\n          ', ';\n        }\n      }\n    }\n\n    .ant-table-tbody {\n      .ant-table-selection-column {\n        ', ';\n      }\n      & > tr {\n        color: ', ';\n        td {\n          ', ';\n          border-bottom: 1px solid ', ';\n          padding: ', ';\n          &:last-child {\n            padding: ', ';\n          }\n        }\n        &:hover {\n          & > td {\n            background: ', ';\n            cursor: pointer;\n          }\n        }\n        &:active {\n          & > td {\n            background: ', ';\n            cursor: pointer;\n          }\n        }\n      }\n    }\n  }\n'], ['\n  counter-reset: rowNumber;\n\n  .ant-table-default > .ant-table-content > .ant-table-body > table,\n  .ant-table-middle > .ant-table-content > .ant-table-body > table,\n  .ant-table-small > .ant-table-content > .ant-table-body > table,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-scroll\n    > .ant-table-header\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-scroll\n    > .ant-table-body\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-left\n    > .ant-table-header\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-left\n    > .ant-table-body\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-right\n    > .ant-table-header\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-right\n    > .ant-table-body\n    > .ant-table-fixed {\n    padding: 0px;\n    .ant-table-thead {\n      & > tr {\n        color: ', ';\n        & > th {\n          ', ';\n          background-color: white;\n          border-bottom: 1px solid ', ';\n          padding: ', ';\n          &:last-child {\n            padding: ', ';\n          }\n        }\n      }\n    }\n    .ant-table-tbody {\n      & > tr {\n        color: ', ';\n        & > td {\n          ', ';\n          background-color: white;\n          border-bottom: 1px solid ', ';\n          padding: ', ';\n          &:last-child {\n            padding: ', ';\n          }\n        }\n      }\n    }\n\n    .ant-table-row {\n      counter-increment: rowNumber;\n      &:hover {\n        .ant-table-selection-column {\n          ', ';\n        }\n      }\n    }\n\n    .ant-table-tbody {\n      .ant-table-selection-column {\n        ', ';\n      }\n      & > tr {\n        color: ', ';\n        td {\n          ', ';\n          border-bottom: 1px solid ', ';\n          padding: ', ';\n          &:last-child {\n            padding: ', ';\n          }\n        }\n        &:hover {\n          & > td {\n            background: ', ';\n            cursor: pointer;\n          }\n        }\n        &:active {\n          & > td {\n            background: ', ';\n            cursor: pointer;\n          }\n        }\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

require('antd/lib/table/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins.js');

var _mixins2 = _interopRequireDefault(_mixins);

var _ActionBar = require('../ActionBar');

var _ActionBar2 = _interopRequireDefault(_ActionBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_TH_PADDING = {
  pTop: '16px',
  pRight: '0',
  pBottom: '16px',
  pLeft: '24px'
};

var DEFAULT_TD_PADDING = {
  pTop: '12px',
  pRight: '0',
  pBottom: '12px',
  pLeft: '24px'
};

var MtTable = _styledComponents2.default.div(_templateObject, _theme2.default.colors.DARK_OUTER_SPACE, _mixins2.default.smallDarkLink(), _theme2.default.colors.ALTO, function (props) {
  debugger; //eslint-disable-line
  var _props$contentCellPad = props.contentCellPadding;
  _props$contentCellPad = _props$contentCellPad === undefined ? DEFAULT_TH_PADDING : _props$contentCellPad;
  var pTop = _props$contentCellPad.pTop,
      pRight = _props$contentCellPad.pRight,
      pBottom = _props$contentCellPad.pBottom,
      pLeft = _props$contentCellPad.pLeft;

  return pTop + ' ' + pRight + ' ' + pBottom + '  ' + pLeft;
}, function (props) {
  var _props$contentCellPad2 = props.contentCellPadding;
  _props$contentCellPad2 = _props$contentCellPad2 === undefined ? DEFAULT_TH_PADDING : _props$contentCellPad2;
  var pTop = _props$contentCellPad2.pTop,
      pBottom = _props$contentCellPad2.pBottom,
      pLeft = _props$contentCellPad2.pLeft;

  return pTop + ' ' + pLeft + ' ' + pBottom + '  ' + pLeft;
}, _theme2.default.colors.DARK_OUTER_SPACE, _mixins2.default.blackText(), _theme2.default.colors.PEARL, function (props) {
  var _props$contentCellPad3 = props.contentCellPadding;
  _props$contentCellPad3 = _props$contentCellPad3 === undefined ? DEFAULT_TD_PADDING : _props$contentCellPad3;
  var pTop = _props$contentCellPad3.pTop,
      pRight = _props$contentCellPad3.pRight,
      pBottom = _props$contentCellPad3.pBottom,
      pLeft = _props$contentCellPad3.pLeft;

  return pTop + ' ' + pRight + ' ' + pBottom + ' ' + pLeft;
}, function (props) {
  var _props$contentCellPad4 = props.contentCellPadding;
  _props$contentCellPad4 = _props$contentCellPad4 === undefined ? DEFAULT_TD_PADDING : _props$contentCellPad4;
  var pTop = _props$contentCellPad4.pTop,
      pBottom = _props$contentCellPad4.pBottom,
      pLeft = _props$contentCellPad4.pLeft;

  return pTop + ' ' + pLeft + ' ' + pBottom + ' ' + pLeft;
}, function (props) {
  return !props.showMultiSelect && '&:before {\n            visibility: hidden;\n          }\n          & > span {\n            visibility: visible;\n          }';
}, function (props) {
  return !props.showMultiSelect && '&:before {\n          content: counter(rowNumber);\n          margin-left: 5px;\n          position: absolute;\n          color: ' + _theme2.default.colors.OUTER_SPACE + ';\n          font-size: 12px;\n        }\n        & > span {\n          visibility: hidden;\n        }';
}, _theme2.default.colors.DARK_OUTER_SPACE, _mixins2.default.blackText(), _theme2.default.colors.PEARL, function (props) {
  var _props$contentCellPad5 = props.contentCellPadding;
  _props$contentCellPad5 = _props$contentCellPad5 === undefined ? DEFAULT_TD_PADDING : _props$contentCellPad5;
  var pTop = _props$contentCellPad5.pTop,
      pRight = _props$contentCellPad5.pRight,
      pBottom = _props$contentCellPad5.pBottom,
      pLeft = _props$contentCellPad5.pLeft;

  return pTop + ' ' + pRight + ' ' + pBottom + ' ' + pLeft;
}, function (props) {
  var _props$contentCellPad6 = props.contentCellPadding;
  _props$contentCellPad6 = _props$contentCellPad6 === undefined ? DEFAULT_TD_PADDING : _props$contentCellPad6;
  var pTop = _props$contentCellPad6.pTop,
      pBottom = _props$contentCellPad6.pBottom,
      pLeft = _props$contentCellPad6.pLeft;

  return pTop + ' ' + pLeft + ' ' + pBottom + ' ' + pLeft;
}, _theme2.default.colors.PORCELAIN, _theme2.default.colors.TROPICAL_BLUE);

var Table = function (_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showActionBar: false,
      showMultiSelect: false
    }, _this.onChange = function (selectedRowKeys, selectedRows) {
      var _this$props = _this.props,
          actionBar = _this$props.actionBar,
          onChange = _this$props.rowSelection.onChange;

      _this.setState(function () {
        return {
          showActionBar: actionBar && selectedRows.length > 0,
          showMultiSelect: actionBar && selectedRows.length > 0
        };
      });
      onChange && onChange(selectedRowKeys, selectedRows);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Table, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rowSelection = _props.rowSelection,
          actionBar = _props.actionBar,
          children = _props.children;
      var _state = this.state,
          showActionBar = _state.showActionBar,
          showMultiSelect = _state.showMultiSelect;

      /**
       * Check if rowSelection props is been passed, If yes override the onChange property of it.
       * Also if onChange prop is passed and the rowSelection is not available, create a new rowSelection object with onChange method.
       */

      var updatedRowSelection = rowSelection ? (0, _extends3.default)({}, rowSelection, { onChange: this.onChange }) : null;

      var antProps = updatedRowSelection ? (0, _extends3.default)({}, this.props, {
        rowSelection: updatedRowSelection
      }) : (0, _extends3.default)({}, this.props);
      return _react2.default.createElement(
        MtTable,
        (0, _extends3.default)({ showMultiSelect: showMultiSelect }, this.props),
        _react2.default.createElement(
          _table2.default,
          antProps,
          children
        ),
        showActionBar && _react2.default.createElement(
          _ActionBar2.default,
          actionBar,
          actionBar ? actionBar.actionItem : false
        )
      );
    }
  }]);
  return Table;
}(_react.Component);

Table.propTypes = {
  children: _propTypes2.default.node,
  actionBar: _propTypes2.default.shape({
    countText: _propTypes2.default.string.isRequired,
    actionItem: _propTypes2.default.arrayOf(_propTypes2.default.node)
  }),
  onChange: _propTypes2.default.func,
  rowSelection: _propTypes2.default.object,
  columns: _propTypes2.default.array,
  size: _propTypes2.default.string
};

Table.Column = _table2.default.Column;
exports.default = Table;
//# sourceMappingURL=index.js.map