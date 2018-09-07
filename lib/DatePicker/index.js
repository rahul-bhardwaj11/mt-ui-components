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

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

require('antd/lib/date-picker/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import theme from '../styles/theme';

var MtDatePicker = (0, _styledComponents2.default)('div').withConfig({
  displayName: 'DatePicker__MtDatePicker',
  componentId: 'sc-1uchw7k-0'
})(['.ant-calendar-picker-input.ant-input{padding:6px 24px;}.ant-calendar-picker-icon{display:none;}.dropdown{color:blue;border:1px solid red;.ant-calendar{border:1px solid red;.ant-calendar-panel{border:1px solid red;.ant-calendar-input-wrap{border:1px solid red;display:none;height:50px;}}}}']);
// import PropTypes from 'prop-types';

var DatePicker = function (_Component) {
  (0, _inherits3.default)(DatePicker, _Component);

  function DatePicker() {
    (0, _classCallCheck3.default)(this, DatePicker);
    return (0, _possibleConstructorReturn3.default)(this, (DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).apply(this, arguments));
  }

  (0, _createClass3.default)(DatePicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        MtDatePicker,
        {
          innerRef: function innerRef(el) {
            if (el) {
              _this2.dropdownRef = el;
            }
          }
        },
        _react2.default.createElement(_datePicker2.default, (0, _extends3.default)({}, this.props, {
          getCalendarContainer: function getCalendarContainer() {
            return _this2.dropdownRef;
          }
        }))
      );
    }
  }]);
  return DatePicker;
}(_react.Component);

exports.default = DatePicker;
//# sourceMappingURL=index.js.map