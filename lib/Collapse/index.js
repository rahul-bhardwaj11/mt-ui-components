'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = undefined;

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .ant-collapse {\n    border: 0px;\n    border-radius: 0px;\n  }\n  .ant-collapse {\n    & > .ant-collapse-item {\n      &:last-child {\n        border-radius: 0px;\n      }\n    }\n    & > .ant-collapse-item {\n      &:last-child {\n        & > .ant-collapse-header {\n          border-radius: 0px;\n        }\n      }\n    }\n  }\n  .ant-collapse-header {\n    font-weight: bold;\n    background: #fff;\n  }\n  .ant-collapse {\n    & > .ant-collapse-item {\n      & > .ant-collapse-header {\n        padding: 12px 12px 12px 15px;\n      }\n    }\n  }\n  .ant-collapse {\n    & > .ant-collapse-item {\n      & > .ant-collapse-header {\n        .arrow {\n          font-size: 0px;\n          width: 0;\n          height: 0;\n          border-left: 6px solid transparent;\n          border-right: 6px solid transparent;\n          border-top: 7px solid #6f7583;\n          border-radius: 2px;\n          position: absolute;\n          left: 91%;\n        }\n      }\n    }\n  }\n  .ant-collapse {\n    & > .ant-collapse-item {\n      & > .ant-collapse-header[aria-expanded=\'true\'] {\n        .arrow {\n          transform: rotate(-90deg);\n          position: absolute;\n          left: 91%;\n          top: 43%;\n        }\n      }\n    }\n  }\n'], ['\n  .ant-collapse {\n    border: 0px;\n    border-radius: 0px;\n  }\n  .ant-collapse {\n    & > .ant-collapse-item {\n      &:last-child {\n        border-radius: 0px;\n      }\n    }\n    & > .ant-collapse-item {\n      &:last-child {\n        & > .ant-collapse-header {\n          border-radius: 0px;\n        }\n      }\n    }\n  }\n  .ant-collapse-header {\n    font-weight: bold;\n    background: #fff;\n  }\n  .ant-collapse {\n    & > .ant-collapse-item {\n      & > .ant-collapse-header {\n        padding: 12px 12px 12px 15px;\n      }\n    }\n  }\n  .ant-collapse {\n    & > .ant-collapse-item {\n      & > .ant-collapse-header {\n        .arrow {\n          font-size: 0px;\n          width: 0;\n          height: 0;\n          border-left: 6px solid transparent;\n          border-right: 6px solid transparent;\n          border-top: 7px solid #6f7583;\n          border-radius: 2px;\n          position: absolute;\n          left: 91%;\n        }\n      }\n    }\n  }\n  .ant-collapse {\n    & > .ant-collapse-item {\n      & > .ant-collapse-header[aria-expanded=\'true\'] {\n        .arrow {\n          transform: rotate(-90deg);\n          position: absolute;\n          left: 91%;\n          top: 43%;\n        }\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _collapse = require('antd/lib/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

require('antd/lib/collapse/style/index.css');

var _StringToHTML = require('../StringToHTML');

var _StringToHTML2 = _interopRequireDefault(_StringToHTML);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtCollapse = _styledComponents2.default.div(_templateObject);

var Collapse = function (_Component) {
  (0, _inherits3.default)(Collapse, _Component);

  function Collapse() {
    (0, _classCallCheck3.default)(this, Collapse);
    return (0, _possibleConstructorReturn3.default)(this, (Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).apply(this, arguments));
  }

  (0, _createClass3.default)(Collapse, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          panelStyle = _props.panelStyle,
          children = _props.children;

      return _react2.default.createElement(
        MtCollapse,
        null,
        _react2.default.createElement(
          _collapse2.default,
          this.props,
          options && options.map(function (option, index) {
            return _react2.default.createElement(
              _collapse2.default.Panel,
              {
                key: index,
                header: option.header || option.title,
                style: panelStyle
              },
              typeof option.content === 'string' ? _react2.default.createElement(_StringToHTML2.default, { content: option.content }) : option.content
            );
          }) || children
        )
      );
    }
  }]);
  return Collapse;
}(_react.Component);

Collapse.propTypes = {
  options: _propTypes2.default.any.isRequired,
  accordion: _propTypes2.default.bool,
  panelStyle: _propTypes2.default.object
};
Collapse.defaultprops = {
  defaultActiveKey: ['0']
};
var Panel = _collapse2.default.Panel;
exports.Panel = Panel;
exports.default = Collapse;
//# sourceMappingURL=index.js.map