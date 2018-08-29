'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  margin: ', ';\n  border: none;\n  background: transparent;\n  border-radius: 16px;\n  .ant-tag {\n    background: #fff;\n    color: ', ';\n    font-size: 12px;\n    line-height: 24px;\n    border-radius: 16px;\n    height: 24px;\n    padding: 0 15px;\n    margin: 0px;\n    &:active {\n      border: 1px solid ', ';\n      background-color: ', ';\n      color: ', ';\n    }\n  }\n'], ['\n  display: inline-block;\n  margin: ', ';\n  border: none;\n  background: transparent;\n  border-radius: 16px;\n  .ant-tag {\n    background: #fff;\n    color: ', ';\n    font-size: 12px;\n    line-height: 24px;\n    border-radius: 16px;\n    height: 24px;\n    padding: 0 15px;\n    margin: 0px;\n    &:active {\n      border: 1px solid ', ';\n      background-color: ', ';\n      color: ', ';\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  &:focus {\n    .ant-tag {\n      border: 1px solid ', ';\n      color: ', ';\n    }\n  }\n  &:hover {\n    .ant-tag {\n      border: 1px solid ', ';\n      color: ', ';\n    }\n    .anticon-cross {\n      color: ', ';\n    }\n  }\n  .tagIcon {\n    font-size: 10px;\n    margin-left: 8px;\n  }\n'], ['\n  &:focus {\n    .ant-tag {\n      border: 1px solid ', ';\n      color: ', ';\n    }\n  }\n  &:hover {\n    .ant-tag {\n      border: 1px solid ', ';\n      color: ', ';\n    }\n    .anticon-cross {\n      color: ', ';\n    }\n  }\n  .tagIcon {\n    font-size: 10px;\n    margin-left: 8px;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  .ant-tag {\n    color: ', ';\n    border: 1px solid ', ';\n  }\n'], ['\n  .ant-tag {\n    color: ', ';\n    border: 1px solid ', ';\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  .ant-tag {\n    color: ', ';\n    border: 1px solid ', ';\n    background-color: ', ';\n  }\n'], ['\n  .ant-tag {\n    color: ', ';\n    border: 1px solid ', ';\n    background-color: ', ';\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  .ant-tag-checkable:not(.ant-tag-checkable-checked) {\n    border: 1px solid ', ';\n    &:hover {\n      color: ', ';\n    }\n  }\n  .ant-tag {\n    &.ant-tag-checkable {\n      &.ant-tag-checkable-checked {\n        border: 1px solid ', ';\n        background-color: ', ';\n        color: ', ';\n        &:hover {\n          border: 1px solid ', ';\n          background-color: ', ';\n          color: ', ';\n        }\n      }\n    }\n  }\n'], ['\n  .ant-tag-checkable:not(.ant-tag-checkable-checked) {\n    border: 1px solid ', ';\n    &:hover {\n      color: ', ';\n    }\n  }\n  .ant-tag {\n    &.ant-tag-checkable {\n      &.ant-tag-checkable-checked {\n        border: 1px solid ', ';\n        background-color: ', ';\n        color: ', ';\n        &:hover {\n          border: 1px solid ', ';\n          background-color: ', ';\n          color: ', ';\n        }\n      }\n    }\n  }\n']);

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

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ButtonWrapper = _styledComponents2.default.button(_templateObject, function (props) {
  return getMargin(props);
}, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR);

var DefaultTag = (0, _styledComponents2.default)(ButtonWrapper)(_templateObject2, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.SILVER, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.OUTER_SPACE);

var ActionTag = (0, _styledComponents2.default)(ButtonWrapper)(_templateObject3, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO);
var AppliedTag = (0, _styledComponents2.default)(ButtonWrapper)(_templateObject4, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.TROPICAL_BLUE);

var DisabledTag = (0, _styledComponents2.default)(ButtonWrapper)(_templateObject3, _theme2.default.colors.SILVER, _theme2.default.colors.PEARL);
var CheckableWrappedTag = (0, _styledComponents2.default)(ButtonWrapper)(_templateObject5, _theme2.default.colors.ALTO, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TAG_HOVER_TEXT_COLOR, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.TAG_HOVER_TEXT_COLOR);

var TYPES = {
  NORMAL: 'normal',
  ADD: 'add',
  ADDED: 'added',
  SELECTED: 'selected',
  SELECTION: 'selection',
  ACTION: 'action'
};

var Tag = function (_Component) {
  (0, _inherits3.default)(Tag, _Component);

  function Tag() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tag.__proto__ || (0, _getPrototypeOf2.default)(Tag)).call.apply(_ref, [this].concat(args))), _this), _this.getWrappedTag = function () {
      var _this$props = _this.props,
          applied = _this$props.applied,
          disabled = _this$props.disabled,
          checkable = _this$props.checkable;

      if (applied) {
        return AppliedTag;
      } else if (disabled) {
        return DisabledTag;
      } else if (checkable) {
        return CheckableWrappedTag;
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
      switch (type) {
        case TYPES.NORMAL:
          TagComponent = _react2.default.createElement(
            WrappedTag,
            this.props,
            _react2.default.createElement(
              AntTagComponent,
              this.props,
              children
            )
          );
          break;
        case TYPES.ADD:
          TagComponent = _react2.default.createElement(
            WrappedTag,
            this.props,
            _react2.default.createElement(
              AntTagComponent,
              this.props,
              children,
              _react2.default.createElement(_Icon2.default, { type: 'edit', className: 'tagIcon' })
            )
          );
          break;
        case TYPES.ADDED:
          TagComponent = _react2.default.createElement(
            WrappedTag,
            this.props,
            _react2.default.createElement(
              AntTagComponent,
              this.props,
              children,
              _react2.default.createElement(_Icon2.default, { type: 'cross', className: 'tagIcon' })
            )
          );
          break;
        case TYPES.SELECTION:
          TagComponent = _react2.default.createElement(
            WrappedTag,
            this.props,
            _react2.default.createElement(
              AntTagComponent,
              this.props,
              children,
              _react2.default.createElement(_Icon2.default, { type: 'tick', className: 'tagIcon' })
            )
          );
          break;
        case TYPES.SELECTED:
          TagComponent = _react2.default.createElement(
            WrappedTag,
            this.props,
            _react2.default.createElement(
              AntTagComponent,
              this.props,
              children
            )
          );
          break;
        case TYPES.ACTION:
          TagComponent = _react2.default.createElement(
            WrappedTag,
            this.props,
            _react2.default.createElement(
              ActionTag,
              this.props,
              _react2.default.createElement(
                AntTagComponent,
                this.props,
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
  padding: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  margin: _propTypes2.default.shape({
    marginTop: _propTypes2.default.string,
    marginRight: _propTypes2.default.string,
    marginBottom: _propTypes2.default.string,
    marginLeft: _propTypes2.default.string
  })
};
Tag.defaultProps = {
  type: TYPES.NORMAL,
  onClick: function onClick() {},
  margin: {}
};


Tag.CheckableTag = _tag2.default.CheckableTag;
exports.default = Tag;
//# sourceMappingURL=index.js.map