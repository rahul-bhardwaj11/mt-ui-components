"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  border-radius: 8px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n  counter-reset: rowNumber;\n\n  \n  .ant-table-default > .ant-table-content > .ant-table-body > table,\n  .ant-table-middle > .ant-table-content > .ant-table-body > table,\n  .ant-table-small > .ant-table-content > .ant-table-body > table, \n  .ant-table-default > .ant-table-content > .ant-table-scroll > .ant-table-header > .ant-table-fixed,\n  .ant-table-default > .ant-table-content > .ant-table-scroll > .ant-table-body > .ant-table-fixed,\n  .ant-table-default > .ant-table-content > .ant-table-fixed-left > .ant-table-header > .ant-table-fixed,\n  .ant-table-default > .ant-table-content > .ant-table-fixed-left > .ant-table-body > .ant-table-fixed,\n  .ant-table-default > .ant-table-content > .ant-table-fixed-right > .ant-table-header > .ant-table-fixed,\n  .ant-table-default > .ant-table-content > .ant-table-fixed-right > .ant-table-body > .ant-table-fixed {\n    padding: 0px;\n    .ant-table-thead {\n      & > tr {\n        color: ", ";\n        & > th {\n          background-color: white;\n          border-bottom: 1px solid ", ";\n          padding: ", ";\n          &:last-child {\n            padding: 16px 24px;\n          }\n        }\n      }\n    }\n    .ant-table-tbody {\n      & > tr {\n        color: ", ";\n        & > td {\n          background-color: white;\n          border-bottom: 1px solid ", ";\n          padding: ", ";\n          &:last-child {\n            padding: 12px 24px;\n          }\n        }\n      }\n    }\n\n    .ant-table-row {\n      counter-increment: rowNumber;\n      &:hover {\n        .ant-table-selection-column {\n          ", ";\n        }\n      }\n    }\n\n    .ant-table-tbody {\n      .ant-table-selection-column {\n        ", ";\n      }\n      & > tr {\n        color: ", ";\n        td {\n          border-bottom: 1px solid ", ";\n          padding: ", ";\n        }\n        &:last-child {\n          padding: 12px 24px;\n        }\n        &:hover {\n          & > td {\n            background: ", ";\n            cursor: pointer;\n          }\n        }\n        &:active {\n          & > td {\n            background: ", ";\n            cursor: pointer;\n          }\n        }\n      }\n    }\n  }\n"], ["\n  border-radius: 8px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n  counter-reset: rowNumber;\n\n  \n  .ant-table-default > .ant-table-content > .ant-table-body > table,\n  .ant-table-middle > .ant-table-content > .ant-table-body > table,\n  .ant-table-small > .ant-table-content > .ant-table-body > table, \n  .ant-table-default > .ant-table-content > .ant-table-scroll > .ant-table-header > .ant-table-fixed,\n  .ant-table-default > .ant-table-content > .ant-table-scroll > .ant-table-body > .ant-table-fixed,\n  .ant-table-default > .ant-table-content > .ant-table-fixed-left > .ant-table-header > .ant-table-fixed,\n  .ant-table-default > .ant-table-content > .ant-table-fixed-left > .ant-table-body > .ant-table-fixed,\n  .ant-table-default > .ant-table-content > .ant-table-fixed-right > .ant-table-header > .ant-table-fixed,\n  .ant-table-default > .ant-table-content > .ant-table-fixed-right > .ant-table-body > .ant-table-fixed {\n    padding: 0px;\n    .ant-table-thead {\n      & > tr {\n        color: ", ";\n        & > th {\n          background-color: white;\n          border-bottom: 1px solid ", ";\n          padding: ", ";\n          &:last-child {\n            padding: 16px 24px;\n          }\n        }\n      }\n    }\n    .ant-table-tbody {\n      & > tr {\n        color: ", ";\n        & > td {\n          background-color: white;\n          border-bottom: 1px solid ", ";\n          padding: ", ";\n          &:last-child {\n            padding: 12px 24px;\n          }\n        }\n      }\n    }\n\n    .ant-table-row {\n      counter-increment: rowNumber;\n      &:hover {\n        .ant-table-selection-column {\n          ", ";\n        }\n      }\n    }\n\n    .ant-table-tbody {\n      .ant-table-selection-column {\n        ", ";\n      }\n      & > tr {\n        color: ", ";\n        td {\n          border-bottom: 1px solid ", ";\n          padding: ", ";\n        }\n        &:last-child {\n          padding: 12px 24px;\n        }\n        &:hover {\n          & > td {\n            background: ", ";\n            cursor: pointer;\n          }\n        }\n        &:active {\n          & > td {\n            background: ", ";\n            cursor: pointer;\n          }\n        }\n      }\n    }\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _table = require("antd/lib/table");

var _table2 = _interopRequireDefault(_table);

require("antd/lib/table/style/index.css");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require("../styles/theme");

var _theme2 = _interopRequireDefault(_theme);

var _ActionBar = require("../ActionBar");

var _ActionBar2 = _interopRequireDefault(_ActionBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtTable = _styledComponents2.default.div(_templateObject, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.ALTO, function (_ref) {
  var _ref$headingCellPaddi = _ref.headingCellPadding,
      headingCellPadding = _ref$headingCellPaddi === undefined ? '16px 0px 16px 24px' : _ref$headingCellPaddi;
  return headingCellPadding;
}, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.PEARL, function (_ref2) {
  var _ref2$contentCellPadd = _ref2.contentCellPadding,
      contentCellPadding = _ref2$contentCellPadd === undefined ? '12px 0px 12px 24px' : _ref2$contentCellPadd;
  return contentCellPadding;
}, function (props) {
  return !props.showMultiSelect && "&:before {\n            visibility: hidden;\n          }\n          & > span {\n            visibility: visible;\n          }";
}, function (props) {
  return !props.showMultiSelect && "&:before {\n          content: counter(rowNumber);\n          margin-left: 5px;\n          position: absolute;\n          color: " + _theme2.default.colors.OUTER_SPACE + ";\n          font-size: 12px;\n        }\n        & > span {\n          visibility: hidden;\n        }";
}, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.PEARL, function (_ref3) {
  var _ref3$cellPadding = _ref3.cellPadding,
      cellPadding = _ref3$cellPadding === undefined ? '12px 0px 12px 24px' : _ref3$cellPadding;
  return cellPadding;
}, _theme2.default.colors.PORCELAIN, _theme2.default.colors.TROPICAL_BLUE);

var Table = function (_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    var _ref4;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref4 = Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
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
  // static defaultProps = {
  //   size: "small"
  // }


  (0, _createClass3.default)(Table, [{
    key: "render",
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
        { showMultiSelect: showMultiSelect },
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