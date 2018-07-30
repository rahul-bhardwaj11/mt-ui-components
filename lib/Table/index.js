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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  \n  border-radius: 8px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n  padding:15px 8px;\n\n  .ant-table-thead{\n    & > tr{\n      color: ', ';\n      & > th{\n        background-color:white;\n        border-bottom:0px;\n        span{\n        }\n      }\n    }\n  }\n\n  .ant-table-tbody{\n    & > tr{\n      color: ', ';\n    td{\n      border-bottom:1px solid ', ';\n      padding:16px !important;\n    }\n    &:last-child{\n      td{\n        border-bottom:0px;\n        }\n      }\n    }\n  }\n\n  .ant-table-tbody{\n    & > tr{\n      &:hover{\n        & > td{\n          background: ', ';\n          cursor:pointer;\n      }\n    }\n }\n'], ['\n  \n  border-radius: 8px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n  padding:15px 8px;\n\n  .ant-table-thead{\n    & > tr{\n      color: ', ';\n      & > th{\n        background-color:white;\n        border-bottom:0px;\n        span{\n        }\n      }\n    }\n  }\n\n  .ant-table-tbody{\n    & > tr{\n      color: ', ';\n    td{\n      border-bottom:1px solid ', ';\n      padding:16px !important;\n    }\n    &:last-child{\n      td{\n        border-bottom:0px;\n        }\n      }\n    }\n  }\n\n  .ant-table-tbody{\n    & > tr{\n      &:hover{\n        & > td{\n          background: ', ';\n          cursor:pointer;\n      }\n    }\n }\n']);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtTable = _styledComponents2.default.div(_templateObject, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.PEARL, _theme2.default.colors.PORCELAIN);

var Table = function (_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    (0, _classCallCheck3.default)(this, Table);
    return (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).apply(this, arguments));
  }

  (0, _createClass3.default)(Table, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        MtTable,
        null,
        _react2.default.createElement(
          _table2.default,
          this.props,
          this.props.children
        )
      );
    }
  }]);
  return Table;
}(_react.Component);

Table.propTypes = {
  children: _propTypes2.default.node.isRequired
};
exports.default = Table;
//# sourceMappingURL=index.js.map