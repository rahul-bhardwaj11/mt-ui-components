'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.DEFAULT_TD_PADDING = exports.DEFAULT_TH_PADDING = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    '\n  counter-reset: rowNumber;\n  position: relative;\n  margin-bottom: ',
    ';\n\n  .ant-spin-nested-loading > div > .ant-spin .ant-spin-text {\n    ',
    ';\n    color: #999999;\n  }\n  .ant-spin-nested-loading > div > .ant-spin .ant-spin-dot {\n    transform: translate(-50%, -50%);\n    height: 64px;\n    width: 64px;\n    margin: 0px;\n    margin-top: 16px;\n  }\n  .ant-table-placeholder {\n    min-height: 60px;\n    padding: 0px;\n    .emptyTableContainer {\n      ',
    ';\n      position: absolute;\n    }\n    .emptyTableTitle {\n      color: #999999;\n      font-size: 18px;\n      text-align: center;\n      font-weight: 600;\n    }\n    .emptyTableSubtitle {\n      color: #999999;\n      font-size: 13px;\n      text-align: center;\n      margin-top: 5px;\n    }\n  }\n  .ant-table {\n    font-family: inherit;\n  }\n  .ant-table-content {\n    .ant-table-body > table {\n      padding-bottom: ',
    ';\n    }\n  }\n  .ant-table-empty .ant-table-content {\n    .ant-table-body > table {\n      padding-bottom: 0px;\n    }\n  }\n\n  .ant-table-default > .ant-table-content > .ant-table-body > table,\n  .ant-table-middle > .ant-table-content > .ant-table-body > table,\n  .ant-table-small > .ant-table-content > .ant-table-body > table,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-scroll\n    > .ant-table-header\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-scroll\n    > .ant-table-body\n    > .ant-table-fixed,\n  .ant-table-default > .ant-table-content > .ant-table-scroll > .ant-table-body,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-scroll\n    > .ant-table-header,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-left\n    > .ant-table-header\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-left\n    > .ant-table-body-outer\n    > .ant-table-body-inner\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-right\n    > .ant-table-header\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-right\n    > .ant-table-body-outer\n    > .ant-table-body-inner\n    > .ant-table-fixed {\n    .ant-table-thead {\n      & > tr {\n        color: ',
    ';\n        & > th {\n          ',
    ';\n          background-color: white;\n          border-bottom: 1px solid ',
    ';\n          padding: ',
    ';\n          &:last-child {\n            padding: ',
    ';\n          }\n          span {\n          }\n          &:hover {\n            &.ant-table-column-has-filters .ant-table-column-sorter {\n              visibility: visible;\n            }\n          }\n          .ant-table-column-sorter-up:hover .anticon,\n          .ant-table-column-sorter-down:hover .anticon {\n            color: ',
    ';\n          }\n          &.ant-table-column-has-filters .ant-table-column-sorter {\n            visibility: hidden;\n          }\n          .ant-table-column-sorter > .ant-table-column-sorter-down {\n            margin-top: 0;\n          }\n          &.ant-table-column-has-filters.ant-table-column-sort\n            .ant-table-column-sorter {\n            visibility: visible;\n          }\n        }\n      }\n    }\n    .ant-table-tbody {\n      .row-disabled {\n        opacity: 0.4;\n      }\n      & > tr {\n        color: ',
    ';\n        & > td {\n          ',
    ';\n          background-color: white;\n          border-bottom: 1px solid ',
    ';\n          padding: ',
    ';\n          &:last-child {\n            padding: ',
    ';\n          }\n        }\n      }\n    }\n\n    .ant-table-row {\n      counter-increment: rowNumber;\n      &:hover {\n        .ant-table-selection-column {\n          ',
    ';\n        }\n      }\n    }\n\n    .ant-table-tbody {\n      counter-reset: rowNumber;\n      .ant-table-selection-column {\n        ',
    ';\n      }\n      & > tr {\n        color: ',
    ';\n        &:focus-within {\n          & > td {\n            background: ',
    ';\n          }\n        }\n        td {\n          ',
    ';\n          border-bottom: 1px solid ',
    ';\n          padding: ',
    ';\n          &:last-child {\n            padding: ',
    ';\n          }\n        }\n        &.ant-table-row-selected {\n          & > td {\n            background: ',
    ';\n          }\n          &:hover {\n            & > td {\n              background: ',
    ';\n            }\n          }\n        }\n        &.ant-table-row-hover {\n          & > td {\n            background: ',
    ';\n          }\n          &:hover {\n            & > td {\n              background: ',
    ';\n            }\n          }\n        }\n        &:hover {\n          & > td {\n            background: ',
    ';\n          }\n        }\n      }\n    }\n  }\n  .ant-table-thead > tr > th.ant-table-selection-column,\n  .ant-table-tbody > tr > td.ant-table-selection-column {\n    min-width: auto;\n  }\n\n  .ant-checkbox-wrapper {\n    &:hover .ant-checkbox-inner {\n      border-color: ',
    ';\n    }\n    & .ant-checkbox > .ant-checkbox-inner {\n      width: 14px;\n      height: 14px;\n      border-radius: 3px;\n      transition: none;\n      &:after {\n        left: 3.5px;\n        top: 1.2px;\n      }\n    }\n    .ant-checkbox-disabled {\n      .ant-checkbox-inner {\n        border: 1px solid ',
    ';\n        background-color: ',
    ';\n      }\n    }\n    & > .ant-checkbox-checked {\n      &.ant-checkbox-disabled {\n        & > .ant-checkbox-inner {\n          border: 1px solid ',
    ';\n          background-color: ',
    ';\n        }\n      }\n      & > .ant-checkbox-inner {\n        background-color: ',
    ';\n        border-color: ',
    ';\n        &:after {\n          left: 3.5px;\n          top: 1.2px;\n        }\n      }\n    }\n\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ',
    ";\n    }\n\n    .ant-checkbox-indeterminate .ant-checkbox-inner:after {\n      content: ' ';\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 9.14285714px;\n      height: 2px;\n      transform: translate(-50%, -50%) scale(1);\n      background-color: #ffffff;\n    }\n    .ant-checkbox-indeterminate.ant-checkbox-disabled\n      .ant-checkbox-inner:after {\n      border-color: rgba(0, 0, 0, 0.25);\n    }\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",
    ';\n      border-color: ',
    ';\n    }\n  }\n  .ant-table-column-sorter {\n    margin-left: 2px;\n    margin-top: -4px;\n    .anticon-caret-up,\n    .anticon-caret-down {\n      color: ',
    ';\n    }\n  }\n\n  .ant-table-column-sorter-up.on .anticon-caret-up,\n  .ant-table-column-sorter-down.on .anticon-caret-up,\n  .ant-table-column-sorter-up.on .anticon-caret-down,\n  .ant-table-column-sorter-down.on .anticon-caret-down {\n    color: ',
    ';\n  }\n  .loadMoreBtnDiv {\n    margin-top: 32px;\n    text-align: center;\n  }\n'
  ],
  [
    '\n  counter-reset: rowNumber;\n  position: relative;\n  margin-bottom: ',
    ';\n\n  .ant-spin-nested-loading > div > .ant-spin .ant-spin-text {\n    ',
    ';\n    color: #999999;\n  }\n  .ant-spin-nested-loading > div > .ant-spin .ant-spin-dot {\n    transform: translate(-50%, -50%);\n    height: 64px;\n    width: 64px;\n    margin: 0px;\n    margin-top: 16px;\n  }\n  .ant-table-placeholder {\n    min-height: 60px;\n    padding: 0px;\n    .emptyTableContainer {\n      ',
    ';\n      position: absolute;\n    }\n    .emptyTableTitle {\n      color: #999999;\n      font-size: 18px;\n      text-align: center;\n      font-weight: 600;\n    }\n    .emptyTableSubtitle {\n      color: #999999;\n      font-size: 13px;\n      text-align: center;\n      margin-top: 5px;\n    }\n  }\n  .ant-table {\n    font-family: inherit;\n  }\n  .ant-table-content {\n    .ant-table-body > table {\n      padding-bottom: ',
    ';\n    }\n  }\n  .ant-table-empty .ant-table-content {\n    .ant-table-body > table {\n      padding-bottom: 0px;\n    }\n  }\n\n  .ant-table-default > .ant-table-content > .ant-table-body > table,\n  .ant-table-middle > .ant-table-content > .ant-table-body > table,\n  .ant-table-small > .ant-table-content > .ant-table-body > table,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-scroll\n    > .ant-table-header\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-scroll\n    > .ant-table-body\n    > .ant-table-fixed,\n  .ant-table-default > .ant-table-content > .ant-table-scroll > .ant-table-body,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-scroll\n    > .ant-table-header,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-left\n    > .ant-table-header\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-left\n    > .ant-table-body-outer\n    > .ant-table-body-inner\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-right\n    > .ant-table-header\n    > .ant-table-fixed,\n  .ant-table-default\n    > .ant-table-content\n    > .ant-table-fixed-right\n    > .ant-table-body-outer\n    > .ant-table-body-inner\n    > .ant-table-fixed {\n    .ant-table-thead {\n      & > tr {\n        color: ',
    ';\n        & > th {\n          ',
    ';\n          background-color: white;\n          border-bottom: 1px solid ',
    ';\n          padding: ',
    ';\n          &:last-child {\n            padding: ',
    ';\n          }\n          span {\n          }\n          &:hover {\n            &.ant-table-column-has-filters .ant-table-column-sorter {\n              visibility: visible;\n            }\n          }\n          .ant-table-column-sorter-up:hover .anticon,\n          .ant-table-column-sorter-down:hover .anticon {\n            color: ',
    ';\n          }\n          &.ant-table-column-has-filters .ant-table-column-sorter {\n            visibility: hidden;\n          }\n          .ant-table-column-sorter > .ant-table-column-sorter-down {\n            margin-top: 0;\n          }\n          &.ant-table-column-has-filters.ant-table-column-sort\n            .ant-table-column-sorter {\n            visibility: visible;\n          }\n        }\n      }\n    }\n    .ant-table-tbody {\n      .row-disabled {\n        opacity: 0.4;\n      }\n      & > tr {\n        color: ',
    ';\n        & > td {\n          ',
    ';\n          background-color: white;\n          border-bottom: 1px solid ',
    ';\n          padding: ',
    ';\n          &:last-child {\n            padding: ',
    ';\n          }\n        }\n      }\n    }\n\n    .ant-table-row {\n      counter-increment: rowNumber;\n      &:hover {\n        .ant-table-selection-column {\n          ',
    ';\n        }\n      }\n    }\n\n    .ant-table-tbody {\n      counter-reset: rowNumber;\n      .ant-table-selection-column {\n        ',
    ';\n      }\n      & > tr {\n        color: ',
    ';\n        &:focus-within {\n          & > td {\n            background: ',
    ';\n          }\n        }\n        td {\n          ',
    ';\n          border-bottom: 1px solid ',
    ';\n          padding: ',
    ';\n          &:last-child {\n            padding: ',
    ';\n          }\n        }\n        &.ant-table-row-selected {\n          & > td {\n            background: ',
    ';\n          }\n          &:hover {\n            & > td {\n              background: ',
    ';\n            }\n          }\n        }\n        &.ant-table-row-hover {\n          & > td {\n            background: ',
    ';\n          }\n          &:hover {\n            & > td {\n              background: ',
    ';\n            }\n          }\n        }\n        &:hover {\n          & > td {\n            background: ',
    ';\n          }\n        }\n      }\n    }\n  }\n  .ant-table-thead > tr > th.ant-table-selection-column,\n  .ant-table-tbody > tr > td.ant-table-selection-column {\n    min-width: auto;\n  }\n\n  .ant-checkbox-wrapper {\n    &:hover .ant-checkbox-inner {\n      border-color: ',
    ';\n    }\n    & .ant-checkbox > .ant-checkbox-inner {\n      width: 14px;\n      height: 14px;\n      border-radius: 3px;\n      transition: none;\n      &:after {\n        left: 3.5px;\n        top: 1.2px;\n      }\n    }\n    .ant-checkbox-disabled {\n      .ant-checkbox-inner {\n        border: 1px solid ',
    ';\n        background-color: ',
    ';\n      }\n    }\n    & > .ant-checkbox-checked {\n      &.ant-checkbox-disabled {\n        & > .ant-checkbox-inner {\n          border: 1px solid ',
    ';\n          background-color: ',
    ';\n        }\n      }\n      & > .ant-checkbox-inner {\n        background-color: ',
    ';\n        border-color: ',
    ';\n        &:after {\n          left: 3.5px;\n          top: 1.2px;\n        }\n      }\n    }\n\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ',
    ";\n    }\n\n    .ant-checkbox-indeterminate .ant-checkbox-inner:after {\n      content: ' ';\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 9.14285714px;\n      height: 2px;\n      transform: translate(-50%, -50%) scale(1);\n      background-color: #ffffff;\n    }\n    .ant-checkbox-indeterminate.ant-checkbox-disabled\n      .ant-checkbox-inner:after {\n      border-color: rgba(0, 0, 0, 0.25);\n    }\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",
    ';\n      border-color: ',
    ';\n    }\n  }\n  .ant-table-column-sorter {\n    margin-left: 2px;\n    margin-top: -4px;\n    .anticon-caret-up,\n    .anticon-caret-down {\n      color: ',
    ';\n    }\n  }\n\n  .ant-table-column-sorter-up.on .anticon-caret-up,\n  .ant-table-column-sorter-down.on .anticon-caret-up,\n  .ant-table-column-sorter-up.on .anticon-caret-down,\n  .ant-table-column-sorter-down.on .anticon-caret-down {\n    color: ',
    ';\n  }\n  .loadMoreBtnDiv {\n    margin-top: 32px;\n    text-align: center;\n  }\n'
  ]
);

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

exports.default = _styledComponents2.default.div(
  _templateObject,
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
