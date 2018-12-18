'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.DEFAULT_TD_PADDING = exports.DEFAULT_TH_PADDING = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins.js');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DEFAULT_TH_PADDING = (exports.DEFAULT_TH_PADDING = {
  pTop: '16px',
  pRight: '0',
  pBottom: '16px',
  pLeft: '32px'
});

var DEFAULT_TD_PADDING = (exports.DEFAULT_TD_PADDING = {
  pTop: '12px',
  pRight: '0',
  pBottom: '12px',
  pLeft: '32px'
});

exports.default = _styledComponents2.default.div.withConfig({
  displayName: 'style',
  componentId: 'sc-1m6i4e-0'
})(
  [
    'counter-reset:rowNumber;position:relative;margin-bottom:',
    ';.ant-spin-nested-loading > div > .ant-spin .ant-spin-text{',
    ';color:#999999;}.ant-spin-nested-loading > div > .ant-spin .ant-spin-dot{transform:translate(-50%,-50%);height:64px;width:64px;margin:0px;margin-top:16px;}.ant-table-placeholder{min-height:60px;padding:0px;.emptyTableContainer{',
    ';position:absolute;}.emptyTableTitle{color:#999999;font-size:18px;text-align:center;font-weight:600;}.emptyTableSubtitle{color:#999999;font-size:13px;text-align:center;margin-top:5px;}}.ant-table{font-family:inherit;}.ant-table-content{.ant-table-body > table{padding-bottom:',
    ';}}.ant-table-empty .ant-table-content{.ant-table-body > table{padding-bottom:0px;}}.ant-table-default > .ant-table-content > .ant-table-body > table,.ant-table-middle > .ant-table-content > .ant-table-body > table,.ant-table-small > .ant-table-content > .ant-table-body > table,.ant-table-default > .ant-table-content > .ant-table-scroll > .ant-table-header > .ant-table-fixed,.ant-table-default > .ant-table-content > .ant-table-scroll > .ant-table-body > .ant-table-fixed,.ant-table-default > .ant-table-content > .ant-table-scroll > .ant-table-body,.ant-table-default > .ant-table-content > .ant-table-scroll > .ant-table-header,.ant-table-default > .ant-table-content > .ant-table-fixed-left > .ant-table-header > .ant-table-fixed,.ant-table-default > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > .ant-table-fixed,.ant-table-default > .ant-table-content > .ant-table-fixed-right > .ant-table-header > .ant-table-fixed,.ant-table-default > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > .ant-table-fixed{.ant-table-thead{& > tr{color:',
    ';& > th{',
    ';background-color:white;border-bottom:1px solid ',
    ';padding:',
    ';&:last-child{padding:',
    ';}span{}&:hover{&.ant-table-column-has-filters .ant-table-column-sorter{visibility:visible;}}.ant-table-column-sorter-up:hover .anticon,.ant-table-column-sorter-down:hover .anticon{color:',
    ';}&.ant-table-column-has-filters .ant-table-column-sorter{visibility:hidden;}.ant-table-column-sorter > .ant-table-column-sorter-down{margin-top:0;}&.ant-table-column-has-filters.ant-table-column-sort .ant-table-column-sorter{visibility:visible;}}}}.ant-table-tbody{.row-disabled{opacity:0.4;}& > tr{color:',
    ';& > td{',
    ';background-color:white;border-bottom:1px solid ',
    ';padding:',
    ';&:last-child{padding:',
    ';}}}}.ant-table-row{counter-increment:rowNumber;&:hover{.ant-table-selection-column{',
    ';}}}.ant-table-tbody{counter-reset:rowNumber;.ant-table-selection-column{',
    ';}& > tr{color:',
    ';&:focus-within{& > td{background:',
    ';}}td{',
    ';border-bottom:1px solid ',
    ';padding:',
    ';&:last-child{padding:',
    ';}}&.ant-table-row-selected{& > td{background:',
    ';}&:hover{& > td{background:',
    ';}}}&.ant-table-row-hover{& > td{background:',
    ';}&:hover{& > td{background:',
    ';}}}&:hover{& > td{background:',
    ';}}}}}.ant-table-thead > tr > th.ant-table-selection-column,.ant-table-tbody > tr > td.ant-table-selection-column{min-width:auto;}.ant-checkbox-wrapper{&:hover .ant-checkbox-inner{border-color:',
    ';}& .ant-checkbox > .ant-checkbox-inner{width:14px;height:14px;border-radius:3px;transition:none;&:after{left:3.5px;top:1.2px;}}.ant-checkbox-disabled{.ant-checkbox-inner{border:1px solid ',
    ';background-color:',
    ';}}& > .ant-checkbox-checked{&.ant-checkbox-disabled{& > .ant-checkbox-inner{border:1px solid ',
    ';background-color:',
    ';}}& > .ant-checkbox-inner{background-color:',
    ';border-color:',
    ';&:after{left:3.5px;top:1.2px;}}}.ant-checkbox:hover .ant-checkbox-inner,.ant-checkbox-input:focus + .ant-checkbox-inner{border-color:',
    ";}.ant-checkbox-indeterminate .ant-checkbox-inner:after{content:' ';position:absolute;left:50%;top:50%;width:9.14285714px;height:2px;transform:translate(-50%,-50%) scale(1);background-color:#ffffff;}.ant-checkbox-indeterminate.ant-checkbox-disabled .ant-checkbox-inner:after{border-color:rgba(0,0,0,0.25);}.ant-checkbox-indeterminate .ant-checkbox-inner{background-color:",
    ';border-color:',
    ';}}.ant-table-column-sorter{margin-left:2px;margin-top:-4px;.anticon-caret-up,.anticon-caret-down{color:',
    ';}}.ant-table-column-sorter-up.on .anticon-caret-up,.ant-table-column-sorter-down.on .anticon-caret-up,.ant-table-column-sorter-up.on .anticon-caret-down,.ant-table-column-sorter-down.on .anticon-caret-down{color:',
    ';}.loadMoreBtnDiv{margin-top:32px;text-align:center;}'
  ],
  function(props) {
    return props.showActionBar ? '60px' : '0px';
  },
  _mixins2.default.h2(),
  _mixins2.default.centerDiv(),
  function(props) {
    return props.infiniteScroll ? '54px' : '0px';
  },
  _theme2.default.colors.DARK_OUTER_SPACE,
  _mixins2.default.smallDarkLink(),
  _theme2.default.colors.ALTO,
  function(props) {
    var _props$headerCellPadd = props.headerCellPadding;
    _props$headerCellPadd =
      _props$headerCellPadd === undefined
        ? DEFAULT_TH_PADDING
        : _props$headerCellPadd;
    var pTop = _props$headerCellPadd.pTop,
      pRight = _props$headerCellPadd.pRight,
      pBottom = _props$headerCellPadd.pBottom,
      pLeft = _props$headerCellPadd.pLeft;

    return pTop + ' ' + pRight + ' ' + pBottom + '  ' + pLeft;
  },
  function(props) {
    var _props$headerCellPadd2 = props.headerCellPadding;
    _props$headerCellPadd2 =
      _props$headerCellPadd2 === undefined
        ? DEFAULT_TH_PADDING
        : _props$headerCellPadd2;
    var pTop = _props$headerCellPadd2.pTop,
      pBottom = _props$headerCellPadd2.pBottom,
      pLeft = _props$headerCellPadd2.pLeft;

    return pTop + ' ' + pLeft + ' ' + pBottom + '  ' + pLeft;
  },
  _theme2.default.colors.GREY,
  _theme2.default.colors.DARK_OUTER_SPACE,
  _mixins2.default.darkText(),
  _theme2.default.colors.PEARL,
  function(props) {
    var _props$contentCellPad = props.contentCellPadding;
    _props$contentCellPad =
      _props$contentCellPad === undefined
        ? DEFAULT_TD_PADDING
        : _props$contentCellPad;
    var pTop = _props$contentCellPad.pTop,
      pRight = _props$contentCellPad.pRight,
      pBottom = _props$contentCellPad.pBottom,
      pLeft = _props$contentCellPad.pLeft;

    return pTop + ' ' + pRight + ' ' + pBottom + ' ' + pLeft;
  },
  function(props) {
    var _props$contentCellPad2 = props.contentCellPadding;
    _props$contentCellPad2 =
      _props$contentCellPad2 === undefined
        ? DEFAULT_TD_PADDING
        : _props$contentCellPad2;
    var pTop = _props$contentCellPad2.pTop,
      pBottom = _props$contentCellPad2.pBottom,
      pLeft = _props$contentCellPad2.pLeft;

    return pTop + ' ' + pLeft + ' ' + pBottom + ' ' + pLeft;
  },
  function(props) {
    return (
      !props.showMultiSelect &&
      '&:before {\n              visibility: hidden;\n            }\n            & > span {\n              visibility: visible;\n            }'
    );
  },
  function(props) {
    return (
      !props.showMultiSelect &&
      '&:before {\n            content: counter(rowNumber);\n            margin-left: 5px;\n            position: absolute;\n            color: ' +
        _theme2.default.colors.OUTER_SPACE +
        ';\n            font-size: 12px;\n          }\n          & > span {\n            visibility: hidden;\n          }'
    );
  },
  _theme2.default.colors.DARK_OUTER_SPACE,
  _theme2.default.colors.PORCELAIN,
  _mixins2.default.darkText(),
  _theme2.default.colors.PEARL,
  function(props) {
    var _props$contentCellPad3 = props.contentCellPadding;
    _props$contentCellPad3 =
      _props$contentCellPad3 === undefined
        ? DEFAULT_TD_PADDING
        : _props$contentCellPad3;
    var pTop = _props$contentCellPad3.pTop,
      pRight = _props$contentCellPad3.pRight,
      pBottom = _props$contentCellPad3.pBottom,
      pLeft = _props$contentCellPad3.pLeft;

    return pTop + ' ' + pRight + ' ' + pBottom + ' ' + pLeft;
  },
  function(props) {
    var _props$contentCellPad4 = props.contentCellPadding;
    _props$contentCellPad4 =
      _props$contentCellPad4 === undefined
        ? DEFAULT_TD_PADDING
        : _props$contentCellPad4;
    var pTop = _props$contentCellPad4.pTop,
      pBottom = _props$contentCellPad4.pBottom,
      pLeft = _props$contentCellPad4.pLeft;

    return pTop + ' ' + pLeft + ' ' + pBottom + ' ' + pLeft;
  },
  _theme2.default.colors.TROPICAL_BLUE,
  _theme2.default.colors.TROPICAL_BLUE,
  _theme2.default.colors.PORCELAIN,
  _theme2.default.colors.PORCELAIN,
  _theme2.default.colors.PORCELAIN,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.PEARL,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.PEARL,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.GREY
);
