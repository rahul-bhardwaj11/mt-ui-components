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

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/input/style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextArea = function (_Component) {
  (0, _inherits3.default)(TextArea, _Component);

  function TextArea(props) {
    (0, _classCallCheck3.default)(this, TextArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextArea.__proto__ || (0, _getPrototypeOf2.default)(TextArea)).call(this, props));

    _this.onChange = function (event) {
      var onChange = _this.props.onChange;

      var value = event.target.value;
      _this.setState({ value: value });
      onChange(event, value);
    };

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  (0, _createClass3.default)(TextArea, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var value = this.props.value;
      var newValue = newProps.value;

      if (newValue !== value) {
        this.setState({ value: newValue });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value;

      return _react2.default.createElement(_input2.default.TextArea, (0, _extends3.default)({}, this.props, {
        value: value,
        onChange: this.onChange
      }));
    }
  }]);
  return TextArea;
}(_react.Component);

TextArea.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  placeholder: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};
TextArea.defaultProps = {
  onChange: function onChange() {}
};
exports.default = TextArea;