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

require('antd/lib/dropdown/style/css');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

require('antd/lib/select/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _downFillcaret = require('../styles/icons/downFillcaret.svg');

var _downFillcaret2 = _interopRequireDefault(_downFillcaret);

var _StringToHTML = require('../StringToHTML');

var _StringToHTML2 = _interopRequireDefault(_StringToHTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;

var MtWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Select__MtWrapper',
  componentId: 'pwbkh2-0'
})(['display:inline-block;.ant-select,.ant-select-dropdown{font-family:inherit;}.ant-select-arrow{display:block;background:url(\'', '\') no-repeat 1px 4px;background-size:8px;width:9px;height:9px;&::before{content:\'\';}svg{display:none;}}.ant-select-selection{&.ant-select-selection--single{border:1px solid get(\'colors.ALTO\');&:hover{border:1px solid get(\'colors.SILVER\');}&:focus,&:active{box-shadow:none;border:1px solid get(\'colors.SILVER\');}&.disabled{background-color:#f8f8f8;border:1px solid #e8e8e8;}}.ant-select-open{.ant-select-selection{border:1px solid get(\'colors.SILVER\');}}}.ant-select-open{.ant-select-selection{&.ant-select-selection--multiple{border:1px solid transparent;outline:none;&:hover,&:focus,&:active{border:0px;border-color:transparent;outline:none;box-shadow:none;}}}}.ant-select-dropdown-menu{background-color:#fff;color:get(\'colors.GREY\');margin:8px;padding-bottom:8px;.ant-select-dropdown-menu-item{border-radius:4px;margin-bottom:px;&:first-child{background-color:#fff;}&:hover{background-color:#4a90e2;color:#fff;border-radius:4px;}}}.ant-select-selection-selected-value{font-weight:normal;}.ant-select-selection--multiple{width:688px;padding:5px;border:0px;&:focus{border-color:transparent;box-shadow:none;}.ant-select-selection__rendered{& > ul{& > .ant-select-selection__choice{border-radius:14px;border:1px solid get(\'colors.ALTO\');border-radius:16px;background-color:#f5f6f7;color:#989ca6;font-size:12px;.ant-select-selection__choice__content{margin-right:5px;}&:hover{border:1px solid #468ee5;background-color:#fff;color:#468ee5;cursor:pointer;.ant-select-selection__choice__remove{color:#468ee5;}}.ant-select-selection__choice__remove{color:#989ca6;font-size:16px;}}}}}.ant-select-dropdown--multiple{z-index:999999;}'], _downFillcaret2.default);

var Select = function (_Component) {
  (0, _inherits3.default)(Select, _Component);

  function Select() {
    (0, _classCallCheck3.default)(this, Select);
    return (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).apply(this, arguments));
  }

  (0, _createClass3.default)(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          options = _props.options,
          style = _props.style;


      return _react2.default.createElement(
        MtWrapper,
        {
          innerRef: function innerRef(el) {
            if (el) {
              _this2.selectDropdownRef = el;
            }
          },
          style: style
        },
        _react2.default.createElement(
          _select2.default,
          (0, _extends3.default)({}, this.props, {
            onClick: function onClick(event) {
              event.stopPropagation();
            },
            getPopupContainer: function getPopupContainer() {
              return _this2.selectDropdownRef;
            }
          }),
          options.map(function (option) {
            return _react2.default.createElement(
              Option,
              {
                key: option.key,
                value: option.key,
                title: _this2.props.title || option.title
              },
              typeof option.content === 'string' ? _react2.default.createElement(_StringToHTML2.default, { content: option.content }) : option.content
            );
          })
        )
      );
    }
  }]);
  return Select;
}(_react.Component);

Select.propTypes = {
  options: _propTypes2.default.any.isRequired,
  onChange: _propTypes2.default.func,
  style: _propTypes2.default.object,
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  title: _propTypes2.default.string
};
Select.defaultProps = {
  style: { minWidth: 125 }
};
exports.default = Select;