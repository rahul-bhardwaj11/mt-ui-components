'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledCheckBoxListOption = _styledComponents2.default.div.withConfig({
  displayName: 'customOptionWithCount__StyledCheckBoxListOption',
  componentId: 'sc-1wcjlv2-0'
})(['', ';', ';.ant-checkbox-wrapper .ant-checkbox{margin-right:0px;}.ant-checkbox-wrapper + span,.ant-checkbox + span{padding:0px;}.label{', ';', ';cursor:', ';padding-left:8px;}.checkBox{float:left;}.subLabel{float:right;', ';line-height:20px;padding-left:8px;cursor:', ';}'], _mixins2.default.clearfix(), _mixins2.default.truncate('100%'), _mixins2.default.truncate('100%'), function (props) {
  return props.checked ? _mixins2.default.blackLink() : _mixins2.default.greyLink();
}, function (props) {
  return props.disable ? 'no-drop' : 'pointer';
}, _mixins2.default.smallGreyLink(), function (props) {
  return props.disable ? 'no-drop' : 'pointer';
});
// import theme from "../styles/theme";
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
    _react2.default.createElement(
      'div',
      { className: 'label' },
      data.label
    )
  );
}

CheckBoxStyleRenderer.propTypes = {
  data: _propTypes2.default.object
};