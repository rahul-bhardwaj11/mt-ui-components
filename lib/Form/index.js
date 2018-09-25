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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n'], ['\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledForm = (0, _styledComponents2.default)(_form2.default)(
  _templateObject
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
