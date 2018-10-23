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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _collapse = require('antd/lib/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

require('antd/lib/collapse/style/index.css');

var _StringToHTML = require('../StringToHTML');

var _StringToHTML2 = _interopRequireDefault(_StringToHTML);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtCollapse = _styledComponents2.default.div.withConfig({
  displayName: 'Collapse__MtCollapse',
  componentId: 'sc-10ohtjv-0'
})(['.ant-collapse{font-family:inherit;border:0px;border-radius:0px;background:transparent;}.ant-collapse{& > .ant-collapse-item{&:last-child{border-radius:0px;}}& > .ant-collapse-item{&:last-child{& > .ant-collapse-header{border-radius:0px;}}}}.ant-collapse-header{font-weight:bold;background:', ';}.ant-collapse{& > .ant-collapse-item{& > .ant-collapse-header{.arrow{font-size:0px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:7px solid #6f7583;border-radius:2px;margin-bottom:20px;position:absolute;left:91%;}}}}.ant-collapse{& > .ant-collapse-item{& > .ant-collapse-header[aria-expanded=\'true\']{.arrow{transform:rotate(-90deg);position:absolute;left:91%;}}}}.ant-collapse-content{border-top:1px;}'], _theme2.default.colors.WHITE);

var Collapse = function (_Component) {
  (0, _inherits3.default)(Collapse, _Component);

  function Collapse() {
    (0, _classCallCheck3.default)(this, Collapse);
    return (0, _possibleConstructorReturn3.default)(this, (Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).apply(this, arguments));
  }

  (0, _createClass3.default)(Collapse, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          panelStyle = _props.panelStyle;

      return _react2.default.createElement(
        MtCollapse,
        null,
        _react2.default.createElement(
          _collapse2.default,
          (0, _extends3.default)({ defaultActiveKey: ['0'] }, this.props),
          options.map(function (option, index) {
            return _react2.default.createElement(
              _collapse2.default.Panel,
              {
                key: option.value || index,
                header: option.header,
                style: panelStyle,
                className: option.className
              },
              typeof option.content === 'string' ? _react2.default.createElement(_StringToHTML2.default, { content: option.content }) : option.content
            );
          })
        )
      );
    }
  }]);
  return Collapse;
}(_react.Component);

Collapse.propTypes = {
  options: _propTypes2.default.any.isRequired,
  accordion: _propTypes2.default.bool,
  panelStyle: _propTypes2.default.object
};
exports.default = Collapse;