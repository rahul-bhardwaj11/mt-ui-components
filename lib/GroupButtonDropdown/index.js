'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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
    '\n  .ant-dropdown {\n    left: 0 !important;\n  }\n  .ant-dropdown-trigger {\n    .ant-btn-primary {\n      span {\n        font-size: 8px;\n        margin-top: 7px;\n        display: inline-block;\n        vertical-align: top;\n      }\n    }\n    &.dropdownBtn {\n      padding: 0px 10px;\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0;\n      border-left: 1px solid white;\n      &:hover,\n      &:focus {\n        border-left: 1px solid white;\n      }\n    }\n  }\n  .ant-dropdown-menu-light {\n    border: 1px solid rgba(205, 210, 217, 0.5);\n    border-radius: 4px;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);\n  }\n  .downFillCaretIcon {\n    font-size: 8px;\n  }\n  .labelBtn {\n    display: inline-block;\n    padding: 0px 10px;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n  }\n'
  ],
  [
    '\n  .ant-dropdown {\n    left: 0 !important;\n  }\n  .ant-dropdown-trigger {\n    .ant-btn-primary {\n      span {\n        font-size: 8px;\n        margin-top: 7px;\n        display: inline-block;\n        vertical-align: top;\n      }\n    }\n    &.dropdownBtn {\n      padding: 0px 10px;\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0;\n      border-left: 1px solid white;\n      &:hover,\n      &:focus {\n        border-left: 1px solid white;\n      }\n    }\n  }\n  .ant-dropdown-menu-light {\n    border: 1px solid rgba(205, 210, 217, 0.5);\n    border-radius: 4px;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);\n  }\n  .downFillCaretIcon {\n    font-size: 8px;\n  }\n  .labelBtn {\n    display: inline-block;\n    padding: 0px 10px;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n  }\n'
  ]
);

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

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MtGroupDropdown = _styledComponents2.default.div(_templateObject);

var GroupButtonDropdown = (function(_Component) {
  (0, _inherits3.default)(GroupButtonDropdown, _Component);

  function GroupButtonDropdown() {
    (0, _classCallCheck3.default)(this, GroupButtonDropdown);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (
        GroupButtonDropdown.__proto__ ||
        (0, _getPrototypeOf2.default)(GroupButtonDropdown)
      ).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(GroupButtonDropdown, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          label = _props.label,
          rest = (0, _objectWithoutProperties3.default)(_props, ['label']);

        return _react2.default.createElement(
          MtGroupDropdown,
          null,
          _react2.default.createElement(
            _Button2.default,
            { className: 'labelBtn', onClick: this.props.onSelect },
            label
          ),
          _react2.default.createElement(
            _Dropdown2.default,
            rest,
            _react2.default.createElement(
              _Button2.default,
              { className: 'dropdownBtn' },
              _react2.default.createElement(_Icon2.default, {
                type: 'down_fillcaret',
                className: 'downFillCaretIcon'
              })
            )
          )
        );
      }
    }
  ]);
  return GroupButtonDropdown;
})(_react.Component);

GroupButtonDropdown.propTypes = {
  options: _propTypes2.default.any.isRequired,
  trigger: _propTypes2.default.string,
  onSelect: _propTypes2.default.func,
  label: _propTypes2.default.string
};
GroupButtonDropdown.defaultProps = {
  trigger: 'click',
  onSelect: function onSelect() {}
};
exports.default = GroupButtonDropdown;
