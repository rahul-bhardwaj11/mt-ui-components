'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MtCheckableTag = exports.TYPES = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _tag = require('antd/lib/tag');

var _tag2 = _interopRequireDefault(_tag);

require('antd/lib/tag/style/index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TYPES = (exports.TYPES = {
  NORMAL: 'normal',
  ADD: 'add',
  ADDED: 'added',
  SELECTED: 'selected',
  SELECTION: 'selection',
  ACTION: 'action'
});

var AppliedStyle = (0, _styledComponents.css)(
  [
    '&.ant-tag,&.ant-tag:hover{color:',
    ';border:1px solid ',
    ';background-color:',
    ';}'
  ],
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.TROPICAL_BLUE
);

var DisabledStyle = (0, _styledComponents.css)(
  [
    '&.ant-tag{border:1px solid ',
    ';color:',
    ';background-color:',
    ';cursor:not-allowed;outline:none;&:hover{border:1px solid ',
    ';color:',
    ';background-color:',
    ';outline:none;}}'
  ],
  _theme2.default.colors.PEARL,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.PEARL,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.WHITE
);

var DefaultTag = (0, _styledComponents.css)(
  [
    '&.ant-tag{&:hover{border:1px solid ',
    ';color:',
    ';opacity:1;}&:active{border:1px solid ',
    ';color:',
    ';}}'
  ],
  _theme2.default.colors.SILVER,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO
);

var ActionTag = (0, _styledComponents.css)(
  [
    '&.ant-tag{color:',
    ';border:1px solid ',
    ';&:hover{border:1px solid ',
    ';color:',
    ';opacity:1;}&:active{border:1px solid ',
    ';color:',
    ';}}'
  ],
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.JODHPUR,
  _theme2.default.colors.JODHPUR,
  _theme2.default.colors.NEPTUNE,
  _theme2.default.colors.NEPTUNE
);

var AddTag = (0, _styledComponents.css)(
  [
    '&.ant-tag{&:hover{border:1px solid ',
    ';color:',
    ';opacity:1;}&:active{border:1px solid ',
    ';color:',
    ';}}'
  ],
  _theme2.default.colors.SILVER,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.DARK_OUTER_SPACE
);

var AddedTag = (0, _styledComponents.css)(
  [
    '&.ant-tag{background-color:',
    ';&:hover{border:1px solid ',
    ';color:',
    ';background-color:',
    ';opacity:1;}&:active{border:1px solid ',
    ';color:',
    ';background-color:',
    ';}}'
  ],
  _theme2.default.colors.PORCELAIN,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.PORCELAIN,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.DARK_OUTER_SPACE,
  _theme2.default.colors.PORCELAIN
);

var SelectionTag = (0, _styledComponents.css)(
  [
    '&.ant-tag{background-color:',
    ';&:hover{border:1px solid ',
    ';color:',
    ';background-color:',
    ';opacity:1;}&:active{border:1px solid ',
    ';color:',
    ';background-color:',
    ';}}'
  ],
  _theme2.default.colors.PORCELAIN,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.PORCELAIN,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.DARK_OUTER_SPACE,
  _theme2.default.colors.PORCELAIN
);

var CheckableTag = (0, _styledComponents.css)(
  [
    '&.ant-tag{&.ant-tag-checkable:not(.ant-tag-checkable-checked){border:1px solid ',
    ';&:hover{color:',
    ';}}&.ant-tag-checkable{&:active{background-color:',
    ';}&.ant-tag-checkable-checked{border:1px solid ',
    ';background-color:',
    ';color:',
    ';&:hover{border:1px solid ',
    ';background-color:',
    ';color:',
    ';}}}}',
    ';'
  ],
  _theme2.default.colors.ALTO,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.TROPICAL_BLUE,
  _theme2.default.colors.TAG_HOVER_TEXT_COLOR,
  _theme2.default.colors.TROPICAL_BLUE,
  _theme2.default.colors.TAG_HOVER_TEXT_COLOR,
  _theme2.default.colors.TAG_HOVER_TEXT_COLOR,
  _theme2.default.colors.TROPICAL_BLUE,
  _theme2.default.colors.TAG_HOVER_TEXT_COLOR,
  function(props) {
    return props.disabled ? DisabledStyle : '';
  }
);

var TagStyle = (0, _styledComponents.css)(
  [
    '&.ant-tag{background-color:',
    ';font-family:inherit;border:1px solid ',
    ';',
    ';font-weight:600;border-radius:16px;line-height:22px;height:24px;padding:0px 15px;&:active{outline:none;}.anticon-cross{color:',
    ';}.tagIcon{font-size:10px;margin-left:8px;}}'
  ],
  function(props) {
    return props.closable
      ? _theme2.default.colors.PORCELAIN
      : _theme2.default.colors.WHITE;
  },
  _theme2.default.colors.ALTO,
  _mixins2.default.smallGreyLink(),
  _theme2.default.colors.OUTER_SPACE
);

var TagWrapper = (0, _styledComponents2.default)(_tag2.default).withConfig({
  displayName: 'style__TagWrapper',
  componentId: 'sc-95bsey-0'
})(['display:inline-block;', ';'], TagStyle);

var MtTag = (0, _styledComponents2.default)(TagWrapper).withConfig({
  displayName: 'style__MtTag',
  componentId: 'sc-95bsey-1'
})(
  ['', ';', ';', ';'],
  function(props) {
    switch (props.type) {
      case TYPES.NORMAL:
        return DefaultTag;
      case TYPES.ADD:
        return AddTag;
      case TYPES.ADDED:
        return AddedTag;
      case TYPES.SELECTED:
        return CheckableTag;
      case TYPES.SELECTION:
        return SelectionTag;
      case TYPES.ACTION:
        return ActionTag;
    }
  },
  function(props) {
    return props.applied ? AppliedStyle : '';
  },
  function(props) {
    return props.disabled ? DisabledStyle : '';
  }
);

var MtCheckableTag = (exports.MtCheckableTag = (0, _styledComponents2.default)(
  _tag2.default.CheckableTag
).withConfig({
  displayName: 'style__MtCheckableTag',
  componentId: 'sc-95bsey-2'
})(['display:inline-block;', ';', ';'], TagStyle, CheckableTag));

exports.default = MtTag;
