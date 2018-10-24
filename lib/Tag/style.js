'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPES = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPES = exports.TYPES = {
  NORMAL: 'normal',
  ADD: 'add',
  ADDED: 'added',
  SELECTED: 'selected',
  SELECTION: 'selection',
  ACTION: 'action'
};

var getMargin = function getMargin(props) {
  var _props$margin = props.margin,
      _props$margin$marginT = _props$margin.marginTop,
      marginTop = _props$margin$marginT === undefined ? '0px' : _props$margin$marginT,
      _props$margin$marginR = _props$margin.marginRight,
      marginRight = _props$margin$marginR === undefined ? '5px' : _props$margin$marginR,
      _props$margin$marginB = _props$margin.marginBottom,
      marginBottom = _props$margin$marginB === undefined ? '12px' : _props$margin$marginB,
      _props$margin$marginL = _props$margin.marginLeft,
      marginLeft = _props$margin$marginL === undefined ? '0px' : _props$margin$marginL;

  return marginTop + ' ' + marginRight + ' ' + marginBottom + ' ' + marginLeft;
};

var AppliedStyle = (0, _styledComponents.css)(['.ant-tag{color:', ';border:1px solid ', ';background-color:', ';}'], _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.TROPICAL_BLUE);

var DisabledStyle = (0, _styledComponents.css)(['&:disabled{.ant-tag{border:1px solid ', ';color:', ';background-color:', ';cursor:not-allowed;}}&:hover{.ant-tag{border:1px solid ', ';color:', ';}}'], _theme2.default.colors.PEARL, _theme2.default.colors.SILVER, _theme2.default.colors.WHITE, _theme2.default.colors.PEARL, _theme2.default.colors.SILVER);

var DefaultTag = (0, _styledComponents.css)(['&:focus{.ant-tag{border:1px solid ', ';color:', ';background-color:', ';}}&:hover{.ant-tag{border:1px solid ', ';color:', ';opacity:1;}.anticon-cross{color:', ';}}&:active{.ant-tag{border:1px solid ', ';color:', ';}}'], _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.SILVER, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO);

var ActionTag = (0, _styledComponents.css)(['.ant-tag{color:', ';border:1px solid ', ';}&:focus{.ant-tag{border:1px solid ', ';color:', ';background-color:', ';}}&:hover{.ant-tag{border:1px solid ', ';color:', ';opacity:1;}.anticon-cross{color:', ';}}&:active{.ant-tag{border:1px solid ', ';color:', ';}}'], _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.JODHPUR, _theme2.default.colors.JODHPUR, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.NEPTUNE, _theme2.default.colors.NEPTUNE);

var AddTag = (0, _styledComponents.css)(['&:hover{.ant-tag{border:1px solid ', ';color:', ';opacity:1;}.anticon-cross{color:', ';}}&:active{.ant-tag{border:1px solid ', ';color:', ';}}'], _theme2.default.colors.SILVER, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.SILVER, _theme2.default.colors.DARK_OUTER_SPACE);

var AddedTag = (0, _styledComponents.css)(['.ant-tag{background-color:', ';}&:hover{.ant-tag{border:1px solid ', ';color:', ';background-color:', ';opacity:1;}.anticon-cross{color:', ';}}&:active{.ant-tag{border:1px solid ', ';color:', ';background-color:', ';}}'], _theme2.default.colors.PORCELAIN, _theme2.default.colors.SILVER, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.PORCELAIN, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.SILVER, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.PORCELAIN);

var SelectionTag = (0, _styledComponents.css)(['.ant-tag{background-color:', ';}&:hover{.ant-tag{border:1px solid ', ';color:', ';background-color:', ';opacity:1;}.anticon-cross{color:', ';}}&:active{.ant-tag{border:1px solid ', ';color:', ';background-color:', ';}}'], _theme2.default.colors.PORCELAIN, _theme2.default.colors.SILVER, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.PORCELAIN, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.SILVER, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.PORCELAIN);

var CheckableWrappedTag = (0, _styledComponents.css)(['&:focus{.ant-tag.ant-tag-checkable{border:1px solid ', ';color:', ';background-color:', ';}}.ant-tag-checkable:not(.ant-tag-checkable-checked){border:1px solid ', ';&:hover{color:', ';}}.ant-tag{&.ant-tag-checkable{&.ant-tag-checkable-checked{border:1px solid ', ';background-color:', ';color:', ';&:hover{border:1px solid ', ';background-color:', ';color:', ';}}}}', ';'], _theme2.default.colors.ALTO, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.WHITE, _theme2.default.colors.ALTO, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, function (props) {
  return props.disabled ? DisabledStyle : '';
});

var ButtonWrapper = _styledComponents2.default.button.withConfig({
  displayName: 'style__ButtonWrapper',
  componentId: 'sc-95bsey-0'
})(['margin:', ';border:none;background:transparent;border-radius:16px;display:inline-block;padding:0px;.ant-tag{background:', ';font-family:inherit;border:1px solid ', ';', ';font-weight:600;border-radius:16px;line-height:22px;height:24px;padding:0px 15px;margin:0px;&:focus,&:active{outline:none;}}.tagIcon{font-size:10px;margin-left:8px;}&:focus,&:active{outline:none;}'], function (props) {
  return getMargin(props);
}, _theme2.default.colors.WHITE, _theme2.default.colors.ALTO, _mixins2.default.smallGreyLink());

var WrappedTag = (0, _styledComponents2.default)(ButtonWrapper).withConfig({
  displayName: 'style__WrappedTag',
  componentId: 'sc-95bsey-1'
})(['', ';', ';', ';', ';'], function (props) {
  switch (props.type) {
    case TYPES.NORMAL:
      return DefaultTag;
    case TYPES.ADD:
      return AddTag;
    case TYPES.ADDED:
      return AddedTag;
    case TYPES.SELECTED:
      return CheckableWrappedTag;
    case TYPES.SELECTION:
      return SelectionTag;
    case TYPES.ACTION:
      return ActionTag;
  }
}, function (props) {
  return props.checkable ? CheckableWrappedTag : '';
}, function (props) {
  return props.applied ? AppliedStyle : '';
}, function (props) {
  return props.disabled ? DisabledStyle : '';
});

exports.default = WrappedTag;