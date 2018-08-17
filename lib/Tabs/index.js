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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .ant-tabs-bar {\n    border-bottom: 1px solid #e7e8ec;\n    margin-bottom: 40px;\n  }\n  .ant-tabs-nav {\n    .ant-tabs-tab {\n      font-weight: 500;\n      color: ', ';\n      margin: 0 1px 0 0;\n      padding: 12px 10px;\n    }\n  }\n  .ant-tabs-nav {\n    .ant-tabs-tab {\n      &:hover {\n        color: ', ';\n      }\n    }\n    .ant-tabs-tab-active {\n      color: ', ';\n    }\n  }\n  .ant-tabs-content > .ant-tabs-tabpane {\n    padding: 0 10px;\n  }\n'], ['\n  .ant-tabs-bar {\n    border-bottom: 1px solid #e7e8ec;\n    margin-bottom: 40px;\n  }\n  .ant-tabs-nav {\n    .ant-tabs-tab {\n      font-weight: 500;\n      color: ', ';\n      margin: 0 1px 0 0;\n      padding: 12px 10px;\n    }\n  }\n  .ant-tabs-nav {\n    .ant-tabs-tab {\n      &:hover {\n        color: ', ';\n      }\n    }\n    .ant-tabs-tab-active {\n      color: ', ';\n    }\n  }\n  .ant-tabs-content > .ant-tabs-tabpane {\n    padding: 0 10px;\n  }\n']);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtTabs = _styledComponents2.default.div(_templateObject, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.SHARK, _theme2.default.colors.SHARK);

var Tabs = function (_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeKey: _this.props.activeKey
    }, _this.onChange = function (activeKey) {
      _this.setState({ activeKey: activeKey });
      if (_this.props.onChange) {
        _this.props.onChange(activeKey);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.activeKey !== 'undefined') {
        this.setState({ activeKey: nextProps.activeKey });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.props.options;

      return _react2.default.createElement(
        MtTabs,
        null,
        _react2.default.createElement(
          _tabs2.default,
          { activeKey: this.state.activeKey, onChange: this.onChange },
          options.map(function (option) {
            return _react2.default.createElement(
              _tabs2.default.TabPane,
              { tab: option.title, key: option.key },
              option.title
            );
          })
        )
      );
    }
  }]);
  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  options: _propTypes2.default.array.isRequired,
  activeKey: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};
exports.default = Tabs;
//# sourceMappingURL=index.js.map