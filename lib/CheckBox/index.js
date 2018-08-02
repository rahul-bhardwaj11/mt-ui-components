'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  vertical-align: middle;\n  .ant-checkbox-wrapper {\n    font-weight: normal;\n    display: inherit;\n    .ant-checkbox {\n      display: inline-block;\n      vertical-align: middle;\n    }\n    .ant-checkbox + span {\n      display: inline-block;\n      vertical-align: top;\n      min-width: 125px;\n      font-size: 14px;\n    }\n    .ant-checkbox-checked + span {\n      color: ', ';\n    }\n    span {\n      color: ', ';\n    }\n  }\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n  .ant-checkbox-wrapper {\n    font-weight: normal;\n    display: inherit;\n    .ant-checkbox {\n      display: inline-block;\n      vertical-align: middle;\n    }\n    .ant-checkbox + span {\n      display: inline-block;\n      vertical-align: top;\n      min-width: 125px;\n      font-size: 14px;\n    }\n    .ant-checkbox-checked + span {\n      color: ', ';\n    }\n    span {\n      color: ', ';\n    }\n  }\n']);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtCheckbox = _styledComponents2.default.div(_templateObject, _theme2.default.colors.DARK, _theme2.default.colors.OUTER_SPACE);

var CheckBox = function (_Component) {
  (0, _inherits3.default)(CheckBox, _Component);

  function CheckBox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CheckBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CheckBox.__proto__ || (0, _getPrototypeOf2.default)(CheckBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      checked: _this.props.checked
    }, _this.onChange = function (event) {
      event.stopPropagation();
      var isChecked = !_this.state.checked;
      _this.setState({ checked: isChecked });
      _this.props.onChange(isChecked);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CheckBox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.checked !== 'undefined') {
        this.setState({ checked: nextProps.checked });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var label = this.props.label;

      return _react2.default.createElement(
        MtCheckbox,
        null,
        _react2.default.createElement(
          _checkbox2.default,
          { checked: this.state.checked, onChange: this.onChange },
          label
        )
      );
    }
  }]);
  return CheckBox;
}(_react.Component);

CheckBox.propTypes = {
  label: _propTypes2.default.string,
  checked: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  onChange: _propTypes2.default.func
};
exports.default = CheckBox;
//# sourceMappingURL=index.js.map