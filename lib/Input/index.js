'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/input/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {
  return undefined;
};

var isString = function isString(value) {
  return typeof value === 'string';
};

var MtInput = _styledComponents2.default.div.withConfig({
  displayName: 'Input__MtInput',
  componentId: 'sc-1in5ceg-0'
})(['.counterStyle{color:#696969;font-size:12px;margin-left:0;padding:4px 8px;border:1px solid #ccc;border-left:none;line-height:20px;float:left;}.displayN{display:none;}.error{font-size:12px;bottom:-24px;left:8px;position:absolute;color:#c63434;font-weight:bold;}.ant-input{border:1px solid ', ';}.ant-input{&:hover{border-color:', ';}}.ant-input{&:focus{border-color:', ';outline:0;box-shadow:0 0 0 0px rgba(24,144,255,0.2);}}.ant-input-disabled{border-color:', ';background-color:#f8f8f8;color:', ';&:hover{border-color:', ';}}.ant-input-error{border-color:#ff6060;}'], _theme2.default.colors.ALTO, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.DISABLE, _theme2.default.colors.SILVER, _theme2.default.colors.DISABLE);

var Input = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input(props) {
    (0, _classCallCheck3.default)(this, Input);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, props));

    _this.handleValue = function (value) {
      var trimmedValue = isString(value) ? value.trim() : value;
      trimmedValue = trimmedValue || '';
      value = trimmedValue.length ? value : trimmedValue;
      var maxLength = _this.props.maxLength;

      if (maxLength) {
        return maxLength <= value.length ? value : value.substring(0, maxLength);
      }
      return value;
    };

    _this.onChange = function (event) {
      var onChange = _this.props.onChange;

      var value = _this.handleValue(event.target.value);
      _this.setState({ value: value });
      onChange(event, value);
    };

    _this.moveCaretAtEnd = function (e) {
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

  (0, _createClass3.default)(Input, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props$value = this.props.value,
          value = _props$value === undefined ? '' : _props$value;

      this.setState({ value: this.handleValue(value) });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var value = this.props.value;
      var newValue = newProps.value;

      if (newValue !== value) {
        this.setState({ value: this.handleValue(newValue) });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          errors = _props.errors,
          maxLength = _props.maxLength,
          maxLengthClassName = _props.maxLengthClassName;
      var value = this.state.value;

      return _react2.default.createElement(
        MtInput,
        null,
        _react2.default.createElement(_input2.default, (0, _extends3.default)({}, this.props, {
          value: value,
          onChange: this.onChange,
          onFocus: this.moveCaretAtEnd
        })),
        _react2.default.createElement(
          'div',
          {
            key: 'maxLength',
            className: (0, _classnames3.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, 'counterStyle', maxLength), (0, _defineProperty3.default)(_classnames, 'displayN', !maxLength), _classnames), maxLengthClassName)
          },
          maxLength && maxLength - value.length
        ),
        _react2.default.createElement(
          'div',
          {
            key: 'error',
            className: (0, _classnames3.default)(errors[0] ? 'error' : 'displayN')
          },
          errors[0]
        )
      );
    }
  }]);
  return Input;
}(_react.Component);

Input.propTypes = {
  placeholder: _propTypes2.default.string,
  maxLength: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number]),
  maxLengthClassName: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  type: _propTypes2.default.oneOf(['text', 'number', 'password', 'file']),
  errors: _propTypes2.default.array
};
Input.defaultProps = {
  onChange: noop,
  onFocus: noop,
  errors: [],
  type: 'text'
};

Input.TextArea = _input2.default.TextArea;
exports.default = Input;