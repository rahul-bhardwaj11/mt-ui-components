'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
);

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
    '\n  position: relative;\n  .counterStyle {\n    ',
    ';\n    line-height: 20px;\n    position: absolute;\n    right: 0px;\n  }\n  .displayN {\n    display: none;\n  }\n  .error {\n    font-size: 12px;\n    bottom: -20px;\n    left: 2px;\n    position: absolute;\n    color: ',
    ';\n  }\n  .ant-input.errorInputStyle {\n    border: 1px solid red;\n    &:focus,\n    &:hover {\n      border: 1px solid #f5222d;\n    }\n  }\n\n  .ant-input {\n    border: 1px solid ',
    ';\n    font-family: inherit;\n  }\n  .ant-input {\n    &:hover {\n      border-color: ',
    ';\n    }\n  }\n  .ant-input {\n    &.active,\n    &:focus {\n      border-color: ',
    ';\n      outline: 0;\n      box-shadow: none;\n    }\n  }\n  .ant-input-disabled {\n    border-color: ',
    ';\n    background-color: #f8f8f8;\n    color: ',
    ';\n    &:hover {\n      border-color: ',
    ';\n    }\n  }\n  .ant-input-error {\n    border-color: #ff6060;\n  }\n'
  ],
  [
    '\n  position: relative;\n  .counterStyle {\n    ',
    ';\n    line-height: 20px;\n    position: absolute;\n    right: 0px;\n  }\n  .displayN {\n    display: none;\n  }\n  .error {\n    font-size: 12px;\n    bottom: -20px;\n    left: 2px;\n    position: absolute;\n    color: ',
    ';\n  }\n  .ant-input.errorInputStyle {\n    border: 1px solid red;\n    &:focus,\n    &:hover {\n      border: 1px solid #f5222d;\n    }\n  }\n\n  .ant-input {\n    border: 1px solid ',
    ';\n    font-family: inherit;\n  }\n  .ant-input {\n    &:hover {\n      border-color: ',
    ';\n    }\n  }\n  .ant-input {\n    &.active,\n    &:focus {\n      border-color: ',
    ';\n      outline: 0;\n      box-shadow: none;\n    }\n  }\n  .ant-input-disabled {\n    border-color: ',
    ';\n    background-color: #f8f8f8;\n    color: ',
    ';\n    &:hover {\n      border-color: ',
    ';\n    }\n  }\n  .ant-input-error {\n    border-color: #ff6060;\n  }\n'
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/input/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var noop = function noop() {
  return undefined;
};

var isString = function isString(value) {
  return typeof value === 'string';
};

var MtInput = _styledComponents2.default.div(
  _templateObject,
  _mixins2.default.smallGreyLink(),
  _theme2.default.colors.BITTERSWEET,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.DISABLE,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.DISABLE
);

var Input = (function(_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input(props) {
    (0, _classCallCheck3.default)(this, Input);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(
        this,
        props
      )
    );

    _this.handleValue = function(value) {
      var trimmedValue = isString(value) ? value.trim() : value;
      trimmedValue = trimmedValue || '';
      value = trimmedValue.length ? value : trimmedValue;
      var maxLength = _this.props.maxLength;

      if (maxLength) {
        return maxLength <= value.length
          ? value
          : value.substring(0, maxLength);
      }
      return value;
    };

    _this.onChange = function(event) {
      var onChange = _this.props.onChange;

      var value = _this.handleValue(event.target.value);
      _this.setState({ value: value });
      onChange(event, value);
    };

    _this.moveCaretAtEnd = function(e) {
      var temp_value = e.target.value;
      e.target.value = '';
      e.target.value = temp_value;
      _this.props.onFocus(e);
    };

    _this.state = {
      value: _this.handleValue(_this.props.value)
    };
    return _this;
  }

  (0, _createClass3.default)(Input, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _props = this.props,
          value = _props.value,
          defaultValue = _props.defaultValue;

        if (!value) {
          value = defaultValue ? defaultValue : '';
        }

        this.setState({ value: this.handleValue(value) });
      }
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        var value = this.props.value;
        var newValue = newProps.value;

        if (newValue !== value) {
          this.setState({ value: this.handleValue(newValue) });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _classnames;

        var _props2 = this.props,
          errors = _props2.errors,
          maxLength = _props2.maxLength,
          maxLengthClassName = _props2.maxLengthClassName,
          showMaxLength = _props2.showMaxLength,
          className = _props2.className,
          rest = (0, _objectWithoutProperties3.default)(_props2, [
            'errors',
            'maxLength',
            'maxLengthClassName',
            'showMaxLength',
            'className'
          ]);
        var value = this.state.value;

        return _react2.default.createElement(
          MtInput,
          null,
          _react2.default.createElement(
            _input2.default,
            (0, _extends3.default)({}, rest, {
              value: value,
              onChange: this.onChange,
              onFocus: this.moveCaretAtEnd,
              className: (0, _classnames3.default)(className, {
                errorInputStyle: errors[0]
              })
            })
          ),
          maxLength &&
            showMaxLength &&
            _react2.default.createElement(
              'div',
              {
                key: 'maxLength',
                className: (0, _classnames3.default)(
                  ((_classnames = {}),
                  (0, _defineProperty3.default)(
                    _classnames,
                    'counterStyle',
                    maxLength
                  ),
                  (0, _defineProperty3.default)(
                    _classnames,
                    'displayN',
                    !maxLength
                  ),
                  _classnames),
                  maxLengthClassName
                )
              },
              maxLength && maxLength - value.length
            ),
          _react2.default.createElement(
            'div',
            {
              key: 'error',
              className: (0, _classnames3.default)(
                errors[0] ? 'error' : 'displayN'
              )
            },
            errors[0]
          )
        );
      }
    }
  ]);
  return Input;
})(_react.Component);

Input.propTypes = {
  className: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  maxLength: _propTypes2.default.oneOfType([
    _propTypes2.default.bool,
    _propTypes2.default.number
  ]),
  maxLengthClassName: _propTypes2.default.string,
  showMaxLength: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  value: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string
  ]),
  defaultValue: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string
  ]),
  type: _propTypes2.default.oneOf(['text', 'number', 'password', 'file']),
  errors: _propTypes2.default.array
};
Input.defaultProps = {
  onChange: noop,
  onFocus: noop,
  errors: [],
  type: 'text'
};
exports.default = Input;
