'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    '\n  ',
    ';\n  ',
    ';\n  .ant-checkbox-wrapper .ant-checkbox {\n    margin-right: 0px;\n  }\n  .ant-checkbox-wrapper + span,\n  .ant-checkbox + span {\n    padding: 0px;\n  }\n  .label {\n    ',
    ';\n    ',
    ';\n    cursor: ',
    ';\n    padding-left: 8px;\n  }\n  .checkBox {\n    float: left;\n  }\n  .subLabel {\n    float: right;\n    ',
    ';\n    line-height: 20px;\n    padding-left: 8px;\n    cursor: ',
    ';\n  }\n'
  ],
  [
    '\n  ',
    ';\n  ',
    ';\n  .ant-checkbox-wrapper .ant-checkbox {\n    margin-right: 0px;\n  }\n  .ant-checkbox-wrapper + span,\n  .ant-checkbox + span {\n    padding: 0px;\n  }\n  .label {\n    ',
    ';\n    ',
    ';\n    cursor: ',
    ';\n    padding-left: 8px;\n  }\n  .checkBox {\n    float: left;\n  }\n  .subLabel {\n    float: right;\n    ',
    ';\n    line-height: 20px;\n    padding-left: 8px;\n    cursor: ',
    ';\n  }\n'
  ]
);
// import theme from "../styles/theme";

exports.CheckBoxStyleRenderer = CheckBoxStyleRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _CheckBox = require('../CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledCheckBoxListOption = _styledComponents2.default.div(
  _templateObject,
  _mixins2.default.clearfix(),
  _mixins2.default.truncate('100%'),
  _mixins2.default.truncate('100%'),
  function(props) {
    return props.checked
      ? _mixins2.default.blackLink()
      : _mixins2.default.greyLink();
  },
  function(props) {
    return props.disable ? 'no-drop' : 'pointer';
  },
  _mixins2.default.smallGreyLink(),
  function(props) {
    return props.disable ? 'no-drop' : 'pointer';
  }
);

function CheckBoxStyleRenderer(_ref) {
  var data = _ref.data;

  return _react2.default.createElement(
    StyledCheckBoxListOption,
    { disable: data.disabled, checked: data.checked },
    _react2.default.createElement(_CheckBox2.default, {
      disabled: data.disabled,
      className: 'checkBox',
      checked: data.checked
    }),
    _react2.default.createElement(
      'div',
      { className: 'subLabel' },
      data.subLabel
    ),
    _react2.default.createElement('div', { className: 'label' }, data.label)
  );
}

CheckBoxStyleRenderer.propTypes = {
  data: _propTypes2.default.object
};
