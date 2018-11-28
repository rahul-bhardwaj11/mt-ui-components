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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

require('antd/lib/form/style/index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledForm = (0, _styledComponents2.default)(_form2.default).withConfig({
  displayName: 'Form__StyledForm',
  componentId: 'sc-24wvw7-0'
})(
  [
    '.ant-form-item-control{line-height:unset;.ant-form-explain{position:absolute;line-height:18px;font-size:12px;}}.ant-form-item{margin-bottom:0px;}.has-error .ant-select-selection,.has-error .ant-form-explain,.has-error .ant-form-split{border-color:',
    ';color:',
    ';}.ant-input .ant-select-search__field{border-color:',
    ';}'
  ],
  _theme2.default.colors.BITTERSWEET,
  _theme2.default.colors.BITTERSWEET,
  _theme2.default.colors.INDOGO
);

var Form = (function(_React$Component) {
  (0, _inherits3.default)(Form, _React$Component);

  function Form() {
    (0, _classCallCheck3.default)(this, Form);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Form, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(StyledForm, this.props);
      }
    }
  ]);
  return Form;
})(_react2.default.Component);

Form.create = _form2.default.create;
Form.Item = _form2.default.Item;
exports.default = Form;
