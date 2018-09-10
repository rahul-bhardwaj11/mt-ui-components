'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtGroupDropdown = _styledComponents2.default.div.withConfig({
  displayName: 'GroupButtonDropdown__MtGroupDropdown',
  componentId: 'sc-1w88rk0-0'
})(['.ant-dropdown-trigger{.ant-btn-primary{span{font-size:9px;margin-top:4px;display:inline-block;vertical-align:top;}}}.ant-dropdown-menu-light{border:1px solid rgba(205,210,217,0.5);border-radius:4px;background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.08);}']);

var GroupButtonDropdown = function (_Component) {
  (0, _inherits3.default)(GroupButtonDropdown, _Component);

  function GroupButtonDropdown() {
    (0, _classCallCheck3.default)(this, GroupButtonDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (GroupButtonDropdown.__proto__ || (0, _getPrototypeOf2.default)(GroupButtonDropdown)).apply(this, arguments));
  }

  (0, _createClass3.default)(GroupButtonDropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          onClick = _props.onClick,
          rest = (0, _objectWithoutProperties3.default)(_props, ['label', 'onClick']);

      return _react2.default.createElement(
        MtGroupDropdown,
        null,
        _react2.default.createElement(
          _Button2.default,
          {
            style: {
              display: 'inline-block',
              padding: '0px 10px',
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0
            },
            onClick: onClick
          },
          label
        ),
        _react2.default.createElement(
          _Dropdown2.default,
          rest,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _Button2.default,
              {
                style: {
                  padding: '0px 10px',
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: 0,
                  borderLeft: '1px solid'
                }
              },
              _react2.default.createElement(
                'span',
                null,
                '\u25BC'
              )
            )
          )
        )
      );
    }
  }]);
  return GroupButtonDropdown;
}(_react.Component);

GroupButtonDropdown.propTypes = {
  options: _propTypes2.default.any.isRequired,
  trigger: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  label: _propTypes2.default.string
};
GroupButtonDropdown.defaultProps = {
  trigger: 'click',
  onClick: function onClick() {}
};
exports.default = GroupButtonDropdown;