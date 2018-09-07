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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .ant-slider-handle {\n    border: 2px solid ', ';\n    background-color: ', ';\n    ', ';\n    &.ant-tooltip-open {\n      &:hover {\n        border: 2px solid ', ';\n      }\n    }\n\n    &:hover {\n      .ant-slider-handle:not(.ant-tooltip-open) {\n        background-color: ', ';\n        border: 2px solid ', ';\n      }\n    }\n  }\n  .ant-slider-dot {\n    background: transparent;\n    border-color: transparent;\n  }\n  .ant-slider-rail {\n    background: ', ';\n    height: 3px;\n  }\n  .ant-slider-track {\n    background-color: ', ';\n  }\n\n  .ant-slider {\n    &:hover {\n      .ant-slider-handle:not(.ant-tooltip-open) {\n        background-color: ', ';\n        border: 2px solid ', ';\n      }\n    }\n  }\n  .ant-slider {\n    &:hover {\n      .ant-slider-track {\n        background-color: ', ';\n        border: 2px solid ', ';\n      }\n    }\n  }\n'], ['\n  .ant-slider-handle {\n    border: 2px solid ', ';\n    background-color: ', ';\n    ', ';\n    &.ant-tooltip-open {\n      &:hover {\n        border: 2px solid ', ';\n      }\n    }\n\n    &:hover {\n      .ant-slider-handle:not(.ant-tooltip-open) {\n        background-color: ', ';\n        border: 2px solid ', ';\n      }\n    }\n  }\n  .ant-slider-dot {\n    background: transparent;\n    border-color: transparent;\n  }\n  .ant-slider-rail {\n    background: ', ';\n    height: 3px;\n  }\n  .ant-slider-track {\n    background-color: ', ';\n  }\n\n  .ant-slider {\n    &:hover {\n      .ant-slider-handle:not(.ant-tooltip-open) {\n        background-color: ', ';\n        border: 2px solid ', ';\n      }\n    }\n  }\n  .ant-slider {\n    &:hover {\n      .ant-slider-track {\n        background-color: ', ';\n        border: 2px solid ', ';\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slider = require('antd/lib/slider');

var _slider2 = _interopRequireDefault(_slider);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('antd/lib/slider/style/index.css');

require('antd/lib/tooltip/style/index.css');

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtSlider = _styledComponents2.default.div(_templateObject, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _mixins2.default.size('12px', '12px'), _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.ALTO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO);

var Slider = function (_Component) {
  (0, _inherits3.default)(Slider, _Component);

  function Slider() {
    (0, _classCallCheck3.default)(this, Slider);
    return (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).apply(this, arguments));
  }

  (0, _createClass3.default)(Slider, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        MtSlider,
        null,
        _react2.default.createElement(_slider2.default, this.props)
      );
    }
  }]);
  return Slider;
}(_react.Component);

exports.default = Slider;
//# sourceMappingURL=index.js.map