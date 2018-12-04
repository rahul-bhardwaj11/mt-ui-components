'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateFilterStyle = _styledComponents2.default.div.withConfig({
  displayName: 'style__DateFilterStyle',
  componentId: 'rv03ae-0'
})(['.ant-dropdown-trigger{position:relative;}.ant-dropdown-trigger + div{position:relative !important;}.dateInput{display:', ';position:relative;min-width:180px;padding:6px 12px;cursor:pointer;border-radius:4px;font-size:12px;&.dateNotSelected{background-color:', ';border:1px solid ', ';}&.dateSelected{font-weight:600;color:', ';background-color:', ';border:1px solid ', ';.dateCaret{color:', ';}}&.dropdownOpen{.datePlaceholder{color:', ';}.dateCaret{color:', ';}}}.dateRangeDropdown{top:32px !important;left:0 !important;}.dateCaret{padding:4px 0;margin-left:10px;float:right;color:', ';font-size:10px;}.ant-calendar-input-wrap{display:none;}.ant-calendar-selected-date,.ant-calendar-selected-start-date,.ant-calendar-selected-end-date{.ant-calendar-date{background:', ';&:hover{background:', ';}}}.ant-calendar-range .ant-calendar-in-range-cell:before{background:', ';}@media only screen and (max-width:767px){.ant-dropdown{position:relative;.ant-dropdown-menu{box-shadow:none;background-color:transparent;.ant-dropdown-menu-item{height:36px;padding:8px 0;margin:0;line-height:36px;background-color:transparent;', ';div{line-height:20px;}&:hover{color:', ';background-color:transparent;}}}}.dateRangeDropdown{position:fixed;top:0 !important;left:0 !important;width:100%;height:100%;padding:8px;background-color:rgba(0,0,0,0.2);.ant-calendar{margin:0 auto;}}}'], function (props) {
  return props.mobile ? 'none' : 'block';
}, _theme2.default.colors.WHITE, _theme2.default.colors.SILVER, _theme2.default.colors.INDIGO, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.OCEAN, _theme2.default.colors.INDIGO, _theme2.default.colors.SILVER, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.SILVER, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.PORCELAIN, _mixins2.default.greyLink(), _theme2.default.colors.OUTER_SPACE);

exports.default = DateFilterStyle;