'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  .ant-tag {\n    color: ', ';\n    background: #fff;\n    font-size: 12px;\n    line-height: 24px;\n    border-radius: 16px;\n    height: 24px;\n    padding: 0 15px;\n    margin-bottom: 12px;\n    &:hover {\n      border: 1px solid ', ';\n      border-radius: 16px;\n      background: #fff;\n      color: ', ';\n      .anticon-cross {\n        color: ', ';\n      }\n    }\n    &:active {\n      border: 1px solid ', ';\n      border-radius: 16px;\n      background-color: ', ';\n      color: ', ';\n    }\n  }\n  .ant-tag-checkable:not(.ant-tag-checkable-checked) {\n    line-height: 24px;\n    height: 24px;\n    padding: 0 15px;\n    margin-bottom: 10px;\n    border: 1px solid #468ee5;\n    border-radius: 16px;\n    //background-color: ', ';\n    //color: ', ';\n  }\n  .ant-tag {\n    &.ant-tag-checkable {\n      &.ant-tag-checkable-checked {\n        border-radius: 16px;\n        background: #fff;\n        //color: ', ';\n        border: 1px solid ', ';\n        background-color: ', ';\n        color: ', ';\n        line-height: 24px;\n        height: 24px;\n        padding: 0 15px;\n        margin-bottom: 10px;\n        &:hover {\n          border: 1px solid ', ';\n          border-radius: 16px;\n          background-color: ', ';\n          color: ', ';\n        }\n      }\n    }\n  }\n  .tagIcons {\n    margin-left: 5px;\n    display: inline-block;\n    vertical-align: middle;\n    img {\n      vertical-align: middle;\n      margin-top: -4px;\n    }\n  }\n'], ['\n  display: inline-block;\n  .ant-tag {\n    color: ', ';\n    background: #fff;\n    font-size: 12px;\n    line-height: 24px;\n    border-radius: 16px;\n    height: 24px;\n    padding: 0 15px;\n    margin-bottom: 12px;\n    &:hover {\n      border: 1px solid ', ';\n      border-radius: 16px;\n      background: #fff;\n      color: ', ';\n      .anticon-cross {\n        color: ', ';\n      }\n    }\n    &:active {\n      border: 1px solid ', ';\n      border-radius: 16px;\n      background-color: ', ';\n      color: ', ';\n    }\n  }\n  .ant-tag-checkable:not(.ant-tag-checkable-checked) {\n    line-height: 24px;\n    height: 24px;\n    padding: 0 15px;\n    margin-bottom: 10px;\n    border: 1px solid #468ee5;\n    border-radius: 16px;\n    //background-color: ', ';\n    //color: ', ';\n  }\n  .ant-tag {\n    &.ant-tag-checkable {\n      &.ant-tag-checkable-checked {\n        border-radius: 16px;\n        background: #fff;\n        //color: ', ';\n        border: 1px solid ', ';\n        background-color: ', ';\n        color: ', ';\n        line-height: 24px;\n        height: 24px;\n        padding: 0 15px;\n        margin-bottom: 10px;\n        &:hover {\n          border: 1px solid ', ';\n          border-radius: 16px;\n          background-color: ', ';\n          color: ', ';\n        }\n      }\n    }\n  }\n  .tagIcons {\n    margin-left: 5px;\n    display: inline-block;\n    vertical-align: middle;\n    img {\n      vertical-align: middle;\n      margin-top: -4px;\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  .ant-tag {\n    border-radius: 16px;\n    color: ', ';\n    border: 1px solid ', ';\n    background-color: #ffffff;\n    font-size: 12px;\n    line-height: 24px;\n    border-radius: 16px;\n    height: 24px;\n    padding: 0 15px;\n    margin-bottom: 12px;\n  }\n'], ['\n  .ant-tag {\n    border-radius: 16px;\n    color: ', ';\n    border: 1px solid ', ';\n    background-color: #ffffff;\n    font-size: 12px;\n    line-height: 24px;\n    border-radius: 16px;\n    height: 24px;\n    padding: 0 15px;\n    margin-bottom: 12px;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  .ant-tag {\n    border-radius: 16px;\n    color: ', ';\n    border: 1px solid ', ';\n    background-color: ', ';\n    font-size: 12px;\n    line-height: 24px;\n    border-radius: 16px;\n    height: 24px;\n    padding: 0 15px;\n    margin-bottom: 12px;\n  }\n'], ['\n  .ant-tag {\n    border-radius: 16px;\n    color: ', ';\n    border: 1px solid ', ';\n    background-color: ', ';\n    font-size: 12px;\n    line-height: 24px;\n    border-radius: 16px;\n    height: 24px;\n    padding: 0 15px;\n    margin-bottom: 12px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tag = require('antd/lib/tag');

var _tag2 = _interopRequireDefault(_tag);

require('antd/lib/tag/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _add = require('./assests/add.svg');

var _add2 = _interopRequireDefault(_add);

var _tick = require('./assests/tick.svg');

var _tick2 = _interopRequireDefault(_tick);

var _cancel = require('./assests/cancel.svg');

var _cancel2 = _interopRequireDefault(_cancel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Icon from '../Icon';

var DefaultTag = _styledComponents2.default.div(_templateObject, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.SILVER, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.ALTO, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR);

var ActionTag = _styledComponents2.default.div(_templateObject2, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO);
var AppliedTag = _styledComponents2.default.div(_templateObject3, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.TROPICAL_BLUE);

var DisabledTag = _styledComponents2.default.div(_templateObject2, _theme2.default.colors.SILVER, _theme2.default.colors.PEARL);

var TYPES = {
  DEAFULT: 'default',
  ADD: 'add',
  ADDED: 'added',
  SELECTED: 'selected',
  SELECTION: 'selection',
  ACTION: 'action'
};

// class CheckableTag extends Component {
//   state = { checked: true };

//   handleChange = checked => {
//     this.setState({ checked });
//   };

//   render() {
//     return (
//       <AntTag.CheckableTag
//         {...this.props}
//         checked={this.state.checked}
//         onChange={this.handleChange}
//       />
//     );
//   }
// }

// class AntTagComponent extends Component {
//   static propTypes = {
//     children: PropTypes.node,
//     checkable: PropTypes.bool
//   };
//   render() {
//     let { checkable , children} = this.props;
//     let Component = (checkable) ? CheckableTag : AntTag;
//     return (
//         <Component {...this.props} >{children}</Component>
//     );
//   }
// }

var Tag = function (_Component) {
  (0, _inherits3.default)(Tag, _Component);

  function Tag() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tag.__proto__ || (0, _getPrototypeOf2.default)(Tag)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.props.onClick(e);
    }, _this.getWrappedTag = function () {
      var _this$props = _this.props,
          applied = _this$props.applied,
          disabled = _this$props.disabled;

      if (applied) {
        return AppliedTag;
      } else if (disabled) {
        return DisabledTag;
      }
      return DefaultTag;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          type = _props.type,
          checkable = _props.checkable;

      var TagComponent = void 0;
      var AntTagComponent = checkable ? _tag2.default.CheckableTag : _tag2.default;
      var WrappedTag = this.getWrappedTag();
      var mergedProps = (0, _extends3.default)({}, this.props, { onClick: this.onClick });
      switch (type) {
        case TYPES.DEFAULT:
          TagComponent = _react2.default.createElement(
            WrappedTag,
            mergedProps,
            _react2.default.createElement(
              AntTagComponent,
              mergedProps,
              children
            )
          );
          break;
        case TYPES.ADD:
          TagComponent = _react2.default.createElement(
            WrappedTag,
            mergedProps,
            _react2.default.createElement(
              AntTagComponent,
              mergedProps,
              children,
              _react2.default.createElement(
                'span',
                { className: 'tagIcons' },
                _react2.default.createElement('img', { src: _add2.default, width: '10', className: 'img' })
              )
            )
          );
          break;
        case TYPES.ADDED:
          TagComponent = _react2.default.createElement(
            WrappedTag,
            mergedProps,
            _react2.default.createElement(
              AntTagComponent,
              mergedProps,
              children,
              _react2.default.createElement(
                'span',
                { className: 'tagIcons' },
                _react2.default.createElement('img', { src: _cancel2.default, width: '8' })
              )
            )
          );
          break;
        case TYPES.SELECTION:
          TagComponent = _react2.default.createElement(
            WrappedTag,
            mergedProps,
            _react2.default.createElement(
              AntTagComponent,
              mergedProps,
              children,
              _react2.default.createElement(
                'span',
                { className: 'tagIcons' },
                _react2.default.createElement('img', { src: _tick2.default, width: '10' })
              )
            )
          );
          break;
        case TYPES.SELECTED:
          TagComponent = _react2.default.createElement(
            WrappedTag,
            mergedProps,
            _react2.default.createElement(
              AntTagComponent,
              mergedProps,
              children
            )
          );
          break;
        case TYPES.ACTION:
          TagComponent = _react2.default.createElement(
            WrappedTag,
            mergedProps,
            _react2.default.createElement(
              ActionTag,
              mergedProps,
              _react2.default.createElement(
                AntTagComponent,
                mergedProps,
                children
              )
            )
          );
          break;
      }
      return TagComponent;
    }
  }]);
  return Tag;
}(_react.Component);

Tag.propTypes = {
  children: _propTypes2.default.node,
  type: _propTypes2.default.string,
  applied: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  checkable: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};
Tag.defaultProps = {
  type: TYPES.default,
  onClick: function onClick() {}
};


Tag.CheckableTag = _tag2.default.CheckableTag;
exports.default = Tag;
//# sourceMappingURL=index.js.map