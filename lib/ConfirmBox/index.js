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

var _popconfirm = require('antd/lib/popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

require('antd/lib/popconfirm/style/css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledPopconfirm = _styledComponents2.default.div.withConfig({
  displayName: 'ConfirmBox__StyledPopconfirm',
  componentId: 'sc-29gfdp-0'
})(['.ant-popover-message-title{', ';padding-left:0px;}.ant-popover-inner-content{padding:22px 26px;}.ant-popover-message > .anticon{display:none;}.ant-popover-buttons{.ant-btn{', ';', ';color:', ';min-width:75px;&.ant-btn-primary{', ';', ';color:#fff;&:hover{', ';color:#fff;}&:focus,&.active{', ';color:#fff;}}&:hover,&:focus{', ';color:', ';}}}'], _mixins2.default.blackLink(), _mixins2.default.textBtn(), _mixins2.default.button(), _theme2.default.colors.OUTER_SPACE, _mixins2.default.primaryBtn(), _mixins2.default.button(), _mixins2.default.primaryBtnHover(), _mixins2.default.primaryBtnHover(), _mixins2.default.textBtn(), _theme2.default.colors.ICON);

var ConfirmBox = function (_Component) {
  (0, _inherits3.default)(ConfirmBox, _Component);

  function ConfirmBox() {
    (0, _classCallCheck3.default)(this, ConfirmBox);
    return (0, _possibleConstructorReturn3.default)(this, (ConfirmBox.__proto__ || (0, _getPrototypeOf2.default)(ConfirmBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfirmBox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(StyledPopconfirm, { innerRef: function innerRef(e) {
            return _this2.datePickerContainer = e;
          } }),
        _react2.default.createElement(
          _popconfirm2.default,
          (0, _extends3.default)({}, this.props, {
            getPopupContainer: function getPopupContainer() {
              return _this2.datePickerContainer;
            }
          }),
          children
        )
      );
    }
  }]);
  return ConfirmBox;
}(_react.Component);

ConfirmBox.propTypes = {
  children: _propTypes2.default.node,
  placement: _propTypes2.default.string
};
exports.default = ConfirmBox;