'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DateFilterStyle = _styledComponents2.default.div.withConfig({
  displayName: 'style__DateFilterStyle',
  componentId: 'rv03ae-0'
})(
  [
    '.dateInput{display:',
    ';position:relative;min-width:180px;padding:6px 12px;cursor:pointer;border-radius:4px;font-size:12px;&.dateNotSelected{background-color:',
    ';border:1px solid ',
    ';}&.dateSelected{font-weight:600;color:',
    ';background-color:',
    ';border:1px solid ',
    ';.dateCaret{color:',
    ';}}&.dropdownOpen{.datePlaceholder{color:',
    ';}.dateCaret{color:',
    ';}}}.dateRangeDropdown{top:40px !important;left:0 !important;}.dateCaret{padding:4px 0;margin-left:10px;float:right;color:',
    ';font-size:10px;}.ant-calendar-input-wrap{display:none;}.ant-calendar-selected-date,.ant-calendar-selected-start-date,.ant-calendar-selected-end-date{.ant-calendar-date{background:',
    ';&:hover{background:',
    ';}}}.ant-calendar-range .ant-calendar-in-range-cell:before{background:',
    ';}'
  ],
  function(props) {
    return props.mobile ? 'none' : 'block';
  },
  _theme2.default.colors.WHITE,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.TROPICAL_BLUE,
  _theme2.default.colors.OCEAN,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.DARK_OUTER_SPACE,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.PORCELAIN
);

exports.default = DateFilterStyle;
