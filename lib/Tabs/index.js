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
    '\n  .ant-tabs {\n    font-family: inherit;\n  }\n  .ant-tabs-bar {\n    font-family: inherit;\n    border-bottom: 1px solid #e7e8ec;\n    margin-bottom: 40px;\n  }\n  .ant-tabs-nav {\n    .ant-tabs-tab {\n      font-weight: 600;\n      color: ',
    ';\n      margin: 0 1px 0 0;\n      padding: 12px 10px;\n    }\n  }\n  .ant-tabs-nav {\n    .ant-tabs-tab {\n      &:hover {\n        color: ',
    ';\n      }\n    }\n    .ant-tabs-tab-active {\n      color: ',
    ';\n    }\n  }\n  .ant-tabs-content > .ant-tabs-tabpane {\n    padding: 0 10px;\n  }\n'
  ],
  [
    '\n  .ant-tabs {\n    font-family: inherit;\n  }\n  .ant-tabs-bar {\n    font-family: inherit;\n    border-bottom: 1px solid #e7e8ec;\n    margin-bottom: 40px;\n  }\n  .ant-tabs-nav {\n    .ant-tabs-tab {\n      font-weight: 600;\n      color: ',
    ';\n      margin: 0 1px 0 0;\n      padding: 12px 10px;\n    }\n  }\n  .ant-tabs-nav {\n    .ant-tabs-tab {\n      &:hover {\n        color: ',
    ';\n      }\n    }\n    .ant-tabs-tab-active {\n      color: ',
    ';\n    }\n  }\n  .ant-tabs-content > .ant-tabs-tabpane {\n    padding: 0 10px;\n  }\n'
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tabs = require('antd/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

require('antd/lib/tabs/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MtTabs = _styledComponents2.default.div(
  _templateObject,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.SHARK,
  _theme2.default.colors.SHARK
);

var Tabs = (function(_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs() {
    (0, _classCallCheck3.default)(this, Tabs);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Tabs, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          options = _props.options,
          className = _props.className;

        return _react2.default.createElement(
          MtTabs,
          null,
          _react2.default.createElement(
            _tabs2.default,
            { defaultActiveKey: this.props.activeKey, className: className },
            options.map(function(option) {
              return _react2.default.createElement(
                _tabs2.default.TabPane,
                { tab: option.title, key: option.key },
                option.content
              );
            })
          )
        );
      }
    }
  ]);
  return Tabs;
})(_react.Component);

Tabs.propTypes = {
  options: _propTypes2.default.array.isRequired,
  activeKey: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  className: _propTypes2.default.string
};
exports.default = Tabs;
