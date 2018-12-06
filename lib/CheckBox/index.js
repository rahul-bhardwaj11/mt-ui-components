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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {
  return undefined;
};

var MtCheckbox = (0, _styledComponents2.default)(_checkbox2.default).withConfig({
  displayName: 'CheckBox__MtCheckbox',
  componentId: 'sc-1466g8a-0'
})(['&.ant-checkbox-wrapper{font-family:inherit;.ant-checkbox:hover .ant-checkbox-inner,.ant-checkbox-input:focus + .ant-checkbox-inner{border-color:', ';}.ant-checkbox-indeterminate .ant-checkbox-inner:after{content:\' \';position:absolute;left:50%;top:50%;width:9.14285714px;height:2px;transform:translate(-50%,-50%) scale(1);background-color:#ffffff;}.ant-checkbox-indeterminate.ant-checkbox-disabled .ant-checkbox-inner:after{border-color:rgba(0,0,0,0.25);}.ant-checkbox-indeterminate .ant-checkbox-inner{background-color:', ';border-color:', ';}}&.ant-checkbox-wrapper{font-weight:normal;&:hover{.ant-checkbox-inner{border-color:', ';}}.checkBoxLabel{', ';}.ant-checkbox{display:inline-block;vertical-align:middle;}.ant-checkbox + span{min-width:125px;padding:0px;}.ant-checkbox-inner{width:14px;height:14px;border-radius:3px;border:1px solid ', ';&:after{left:3.5px;top:1.2px;}}.ant-checkbox-disabled{.ant-checkbox-inner{border:1px solid ', ';background-color:', ';}}.ant-checkbox-checked{&.ant-checkbox-disabled{.ant-checkbox-inner{border:1px solid ', ';background-color:', ';}}& > .ant-checkbox-inner{background-color:', ';border-color:', ';}}span{color:', ';}}'], _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, function (props) {
  return props.checked ? '' + _mixins2.default.blackLink() : '' + _mixins2.default.greyLink();
}, _theme2.default.colors.ALTO, _theme2.default.colors.ALTO, _theme2.default.colors.PEARL, _theme2.default.colors.ALTO, _theme2.default.colors.PEARL, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.OUTER_SPACE);

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
      var checked = this.state.checked;

      if (checked !== nextProps.checked) {
        this.setState({ checked: nextProps.checked });
      }
    }
  }, {
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
  }]);
  return CheckBox;
}(_react.Component);

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