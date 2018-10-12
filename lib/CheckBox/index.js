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
    '\n  &.ant-checkbox-wrapper {\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ',
    ";\n    }\n    .ant-checkbox-indeterminate .ant-checkbox-inner:after {\n      content: ' ';\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 9.14285714px;\n      height: 2px;\n      transform: translate(-50%, -50%) scale(1);\n      background-color: #ffffff;\n    }\n    .ant-checkbox-indeterminate.ant-checkbox-disabled\n      .ant-checkbox-inner:after {\n      border-color: rgba(0, 0, 0, 0.25);\n    }\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",
    ';\n      border-color: ',
    ';\n    }\n  }\n  &.ant-checkbox-wrapper {\n    font-weight: normal;\n    &:hover {\n      .ant-checkbox-inner {\n        border-color: ',
    ';\n      }\n    }\n    .checkBoxLabel {\n      ',
    ';\n    }\n\n    .ant-checkbox {\n      display: inline-block;\n      vertical-align: middle;\n    }\n    .ant-checkbox + span {\n      min-width: 125px;\n    }\n    .ant-checkbox-inner {\n      width: 14px;\n      height: 14px;\n      border-radius: 3px;\n      border: 1px solid ',
    ';\n      &:after {\n        left: 3.5px;\n        top: 1.2px;\n      }\n    }\n    .ant-checkbox-checked {\n      &.ant-checkbox-disabled {\n        .ant-checkbox-inner {\n          border: 1px solid ',
    ';\n          background-color: ',
    ';\n        }\n      }\n      & > .ant-checkbox-inner {\n        background-color: ',
    ';\n        border-color: ',
    ';\n      }\n    }\n    span {\n      color: ',
    ';\n    }\n  }\n'
  ],
  [
    '\n  &.ant-checkbox-wrapper {\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ',
    ";\n    }\n    .ant-checkbox-indeterminate .ant-checkbox-inner:after {\n      content: ' ';\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 9.14285714px;\n      height: 2px;\n      transform: translate(-50%, -50%) scale(1);\n      background-color: #ffffff;\n    }\n    .ant-checkbox-indeterminate.ant-checkbox-disabled\n      .ant-checkbox-inner:after {\n      border-color: rgba(0, 0, 0, 0.25);\n    }\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",
    ';\n      border-color: ',
    ';\n    }\n  }\n  &.ant-checkbox-wrapper {\n    font-weight: normal;\n    &:hover {\n      .ant-checkbox-inner {\n        border-color: ',
    ';\n      }\n    }\n    .checkBoxLabel {\n      ',
    ';\n    }\n\n    .ant-checkbox {\n      display: inline-block;\n      vertical-align: middle;\n    }\n    .ant-checkbox + span {\n      min-width: 125px;\n    }\n    .ant-checkbox-inner {\n      width: 14px;\n      height: 14px;\n      border-radius: 3px;\n      border: 1px solid ',
    ';\n      &:after {\n        left: 3.5px;\n        top: 1.2px;\n      }\n    }\n    .ant-checkbox-checked {\n      &.ant-checkbox-disabled {\n        .ant-checkbox-inner {\n          border: 1px solid ',
    ';\n          background-color: ',
    ';\n        }\n      }\n      & > .ant-checkbox-inner {\n        background-color: ',
    ';\n        border-color: ',
    ';\n      }\n    }\n    span {\n      color: ',
    ';\n    }\n  }\n'
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

require('antd/lib/checkbox/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var noop = function noop() {
  return undefined;
};

var MtCheckbox = (0, _styledComponents2.default)(_checkbox2.default)(
  _templateObject,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  function(props) {
    return props.checked
      ? '' + _mixins2.default.blackLink()
      : '' + _mixins2.default.greyLink();
  },
  _theme2.default.colors.ALTO,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.PEARL,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.OUTER_SPACE
);

var CheckBox = (function(_Component) {
  (0, _inherits3.default)(CheckBox, _Component);

  function CheckBox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CheckBox);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          CheckBox.__proto__ ||
          (0, _getPrototypeOf2.default)(CheckBox)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        checked: _this.props.checked
      }),
      (_this.onChange = function(event) {
        event.stopPropagation();
        var isChecked = !_this.state.checked;
        _this.setState({ checked: isChecked });
        _this.props.onChange(isChecked);
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(CheckBox, [
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var checked = this.state.checked;

        if (checked !== nextProps.checked) {
          this.setState({ checked: nextProps.checked });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          children = _props.children,
          indeterminate = _props.indeterminate,
          disabled = _props.disabled,
          className = _props.className;

        return _react2.default.createElement(
          MtCheckbox,
          {
            checked: this.state.checked,
            onChange: this.onChange,
            className: className,
            disabled: disabled,
            indeterminate: indeterminate
          },
          _react2.default.createElement(
            'span',
            { className: 'checkBoxLabel' },
            children
          )
        );
      }
    }
  ]);
  return CheckBox;
})(_react.Component);

CheckBox.propTypes = {
  children: _propTypes2.default.node,
  checked: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  indeterminate: _propTypes2.default.bool,
  className: _propTypes2.default.string
};
CheckBox.defaultProps = {
  onChange: noop
};
exports.default = CheckBox;
