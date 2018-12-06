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

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtMenu = _styledComponents2.default.div.withConfig({
  displayName: 'Menu__MtMenu',
  componentId: 'sc-13aw80-0'
})(['.ant-menu{font-family:inherit;}.ant-anchor-wrapper{overflow:hidden;}.ant-select-dropdown-menu-item{background-color:', ';color:#fff;}.ant-select-dropdown{background-color:', ';color:#fff;}.ant-select-dropdown-menu{background-color:#fff;color:', ';padding:0px 5px;margin:8px;border-radius:4px;height:32px;line-height:32px;}.ant-dropdown-menu{padding:4px 0px;}.ant-dropdown-menu-item:first-child,.ant-dropdown-menu-item:last-child{border-radius:4px;}.ant-dropdown-menu-submenu-title{-webkit-transition:all 0.2s;transition:all 0.2s;&:hover{background-color:', ';color:#fff;}}.ant-dropdown-menu-item{background-color:#fff;color:', ';padding:0px 15px;margin:4px 8px;border-radius:4px;height:32px;line-height:32px;-webkit-transition:all 0.2s;transition:all 0.2s;&:hover{background-color:', ';color:#fff;}}.ant-menu-horizontal{line-height:normal;& > .ant-menu-item{&:hover{color:', ';}}& > .ant-menu-submenu{&:hover{color:', ';}}& > .ant-menu-item-active,& > .ant-menu-submenu-active,& > .ant-menu-item-selected,& > .ant-menu-submenu-selected{color:', ';}}.ant-menu-vertical{& > .ant-menu-item{color:#8e9194;padding:0px;margin:0px;text-align:left;&:hover{color:black;}}}.ant-menu-item{font-size:15px;color:#8e9194;padding:0px 8px;&:hover{color:#fff;}b{font-weight:normal;}}.ant-dropdown-trigger{font-size:13px;}&{.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title{text-align:left;font-size:11px;text-transform:uppercase;height:auto;line-height:16px;margin:0px 0px 8px 0px;color:', ';&:hover{color:', ';}.ant-menu-submenu-arrow{display:none;}}}&{.ant-menu-sub.ant-menu-inline > .ant-menu-item{float:left;text-align:left;margin:0px;font-size:12px;}}.ant-anchor-link{padding:6px 0 6px 0px;line-height:1;display:list-item;margin-left:17px;list-style-type:disc;color:', ';a{color:', ';font-size:12px;', ';}}.ant-menu-inline,.ant-menu-light{border-right:0px;}.cautious{color:', ';&:active{background-color:', ';color:#fff;}&:hover{background-color:', ';color:#fff;}}.ant-dropdown-menu-item-selected{background-color:', ';}.ant-menu-vertical .ant-menu-item:not(:last-child),.ant-menu-vertical .ant-menu-item{margin-bottom:0px;}'], _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.GREY, _theme2.default.colors.INDIGO, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.INDIGO, _theme2.default.colors.CONGRESS_BLUE, _theme2.default.colors.CONGRESS_BLUE, _theme2.default.colors.CONGRESS_BLUE, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _mixins2.default.truncate('250px'), _theme2.default.colors.BITTERSWEET, _theme2.default.colors.BITTERSWEET, _theme2.default.colors.BITTERSWEET, _theme2.default.colors.TROPICAL_BLUE);

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

      _this.props.onClick(key);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Menu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          children = _props.children,
          itemStyle = _props.itemStyle;

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
              {
                key: option.key || index,
                style: itemStyle,
                className: option.cautious ? 'cautious' : ''
              },
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
  prefixCls: _propTypes2.default.string,
  itemStyle: _propTypes2.default.object
};
Menu.defaultProps = {
  style: { paddingLeft: '0px' },
  onClick: function onClick() {}
};


Menu.ItemGroup = _menu2.default.ItemGroup;
Menu.SubMenu = _menu2.default.SubMenu;
Menu.Item = _menu2.default.Item;
exports.default = Menu;