'use strict';

Object.defineProperty(exports, '__esModule', {
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

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    '\n  font-family: inherit;\n  .ant-popover-message-title {\n    ',
    ';\n    padding-left: 0px;\n  }\n  .ant-popover-inner-content {\n    padding: 22px 26px;\n  }\n  .ant-popover-message > .anticon {\n    display: none;\n  }\n  .ant-popover-buttons {\n    .ant-btn {\n      ',
    ';\n      ',
    ';\n      color: ',
    ';\n      min-width: 75px;\n\n      &.ant-btn-primary {\n        ',
    ';\n        ',
    ';\n        color: #fff;\n        &:hover {\n          ',
    ';\n          color: #fff;\n        }\n        &:focus,\n        &.active {\n          ',
    ';\n          color: #fff;\n        }\n      }\n      &:hover,\n      &:focus {\n        ',
    ';\n        color: ',
    ';\n      }\n    }\n  }\n'
  ],
  [
    '\n  font-family: inherit;\n  .ant-popover-message-title {\n    ',
    ';\n    padding-left: 0px;\n  }\n  .ant-popover-inner-content {\n    padding: 22px 26px;\n  }\n  .ant-popover-message > .anticon {\n    display: none;\n  }\n  .ant-popover-buttons {\n    .ant-btn {\n      ',
    ';\n      ',
    ';\n      color: ',
    ';\n      min-width: 75px;\n\n      &.ant-btn-primary {\n        ',
    ';\n        ',
    ';\n        color: #fff;\n        &:hover {\n          ',
    ';\n          color: #fff;\n        }\n        &:focus,\n        &.active {\n          ',
    ';\n          color: #fff;\n        }\n      }\n      &:hover,\n      &:focus {\n        ',
    ';\n        color: ',
    ';\n      }\n    }\n  }\n'
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popconfirm = require('antd/lib/popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

require('antd/lib/popconfirm/style/css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledPopconfirm = _styledComponents2.default.div(
  _templateObject,
  _mixins2.default.blackLink(),
  _mixins2.default.textBtn(),
  _mixins2.default.button(),
  _theme2.default.colors.OUTER_SPACE,
  _mixins2.default.primaryBtn(),
  _mixins2.default.button(),
  _mixins2.default.primaryBtnHover(),
  _mixins2.default.primaryBtnHover(),
  _mixins2.default.textBtn(),
  _theme2.default.colors.ICON
);

var ConfirmBox = (function(_Component) {
  (0, _inherits3.default)(ConfirmBox, _Component);

  function ConfirmBox(p) {
    (0, _classCallCheck3.default)(this, ConfirmBox);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (ConfirmBox.__proto__ || (0, _getPrototypeOf2.default)(ConfirmBox)).call(
        this,
        p
      )
    );

    _this.confirmContainer = null;
    _this.element = null;

    _this.element = document.createElement('div');
    return _this;
  }

  (0, _createClass3.default)(ConfirmBox, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.body.appendChild(this.element);
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.body.removeChild(this.element);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var children = this.props.children;

        var container =
          this.props.getPopupContainer && this.props.getPopupContainer();

        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _reactDom2.default.createPortal(
            _react2.default.createElement(StyledPopconfirm, {
              innerRef: function innerRef(e) {
                return e && (_this2.confirmContainer = e);
              }
            }),
            container || this.element
          ),
          _react2.default.createElement(
            _popconfirm2.default,
            (0, _extends3.default)({}, this.props, {
              getPopupContainer: function getPopupContainer() {
                return _this2.confirmContainer;
              }
            }),
            children
          )
        );
      }
    }
  ]);
  return ConfirmBox;
})(_react.Component);

ConfirmBox.propTypes = {
  children: _propTypes2.default.node,
  placement: _propTypes2.default.string,
  getPopupContainer: _propTypes2.default.func
};
exports.default = ConfirmBox;
