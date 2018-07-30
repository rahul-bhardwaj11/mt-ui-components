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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .ant-select-dropdown-menu-item {\n    background-color: ', ';\n    color: #fff;\n  }\n  .ant-select-dropdown {\n    background-color: ', ';\n    color: #fff;\n  }\n  .ant-select-dropdown-menu {\n    background-color: #fff;\n    color: #888;\n    padding: 0px 5px;\n    margin: 8px;\n    border-radius: 4px;\n    height: 32px;\n    line-height: 32px;\n  }\n  .ant-dropdown-menu-submenu-title {\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n    &:hover {\n      background-color: #4a90e2;\n      color: #fff;\n    }\n  }\n  .ant-dropdown-menu-item {\n    background-color: #fff;\n    color: #989ca6;\n    padding: 0px 15px;\n    margin: 8px;\n    border-radius: 4px;\n    height: 32px;\n    line-height: 32px;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n    &:hover {\n      background-color: #4a90e2;\n      color: #fff;\n    }\n  }\n  .ant-menu-horizontal {\n    & > .ant-menu-item {\n      &:hover {\n        color: #202a39;\n      }\n    }\n    & > .ant-menu-submenu {\n      &:hover {\n        color: #202a39;\n      }\n    }\n    & > .ant-menu-item-active,\n    & > .ant-menu-submenu-active,\n    & > .ant-menu-item-selected,\n    & > .ant-menu-submenu-selected {\n      border-bottom: 3px solid ', ';\n      color: #202a39;\n    }\n  }\n  .ant-menu-vertical {\n    & > .ant-menu-item {\n      color: #8e9194;\n      &:hover {\n        color: black;\n      }\n    }\n  }\n  .ant-menu-item {\n    font-size: 15px;\n    padding: 0px 8px;\n    color: #8e9194;\n    &:hover {\n      color: #fff;\n    }\n    b {\n      font-weight: normal;\n    }\n  }\n  .ant-dropdown-trigger {\n    font-size: 13px;\n  }\n'], ['\n  .ant-select-dropdown-menu-item {\n    background-color: ', ';\n    color: #fff;\n  }\n  .ant-select-dropdown {\n    background-color: ', ';\n    color: #fff;\n  }\n  .ant-select-dropdown-menu {\n    background-color: #fff;\n    color: #888;\n    padding: 0px 5px;\n    margin: 8px;\n    border-radius: 4px;\n    height: 32px;\n    line-height: 32px;\n  }\n  .ant-dropdown-menu-submenu-title {\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n    &:hover {\n      background-color: #4a90e2;\n      color: #fff;\n    }\n  }\n  .ant-dropdown-menu-item {\n    background-color: #fff;\n    color: #989ca6;\n    padding: 0px 15px;\n    margin: 8px;\n    border-radius: 4px;\n    height: 32px;\n    line-height: 32px;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n    &:hover {\n      background-color: #4a90e2;\n      color: #fff;\n    }\n  }\n  .ant-menu-horizontal {\n    & > .ant-menu-item {\n      &:hover {\n        color: #202a39;\n      }\n    }\n    & > .ant-menu-submenu {\n      &:hover {\n        color: #202a39;\n      }\n    }\n    & > .ant-menu-item-active,\n    & > .ant-menu-submenu-active,\n    & > .ant-menu-item-selected,\n    & > .ant-menu-submenu-selected {\n      border-bottom: 3px solid ', ';\n      color: #202a39;\n    }\n  }\n  .ant-menu-vertical {\n    & > .ant-menu-item {\n      color: #8e9194;\n      &:hover {\n        color: black;\n      }\n    }\n  }\n  .ant-menu-item {\n    font-size: 15px;\n    padding: 0px 8px;\n    color: #8e9194;\n    &:hover {\n      color: #fff;\n    }\n    b {\n      font-weight: normal;\n    }\n  }\n  .ant-dropdown-trigger {\n    font-size: 13px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

require('antd/lib/menu/style/index.css');

var _StringToHTML = require('../StringToHTML');

var _StringToHTML2 = _interopRequireDefault(_StringToHTML);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtMenu = _styledComponents2.default.div(_templateObject, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.LIGHT_BLUE);

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (_ref2) {
      var key = _ref2.key;

      if (_this.props.onClick) {
        _this.props.onClick(key);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Menu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          children = _props.children;

      return _react2.default.createElement(
        MtMenu,
        null,
        _react2.default.createElement(
          _menu2.default,
          (0, _extends3.default)({}, this.props, { onClick: this.onClick }),
          !options && children,
          options && options.map(function (option, index) {
            return _react2.default.createElement(
              _menu2.default.Item,
              { key: option.key || index },
              typeof option.content === 'string' ? _react2.default.createElement(_StringToHTML2.default, { content: option.content }) : option.content
            );
          })
        )
      );
    }
  }]);
  return Menu;
}(_react.Component);

Menu.propTypes = {
  options: _propTypes2.default.array,
  onClick: _propTypes2.default.func,
  mode: _propTypes2.default.string,
  children: _propTypes2.default.node,
  prefixCls: _propTypes2.default.string
};


Menu.ItemGroup = _menu2.default.ItemGroup;
Menu.SubMenu = _menu2.default.SubMenu;
Menu.Item = _menu2.default.Item;
exports.default = Menu;
//# sourceMappingURL=index.js.map