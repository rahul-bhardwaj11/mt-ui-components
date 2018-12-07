'use strict';

Object.defineProperty(exports, '__esModule', {
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

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    '\n  position: absolute;\n  .ant-popover {\n    font-family: inherit;\n    z-index: ',
    ';\n  }\n  .ant-popover-title {\n    border-bottom: 1px solid transparent;\n    padding: 20px 20px 0px 20px;\n    font-size: 14px;\n  }\n  .ant-popover-inner {\n    border: 1px solid rgba(205, 210, 217, 0.5);\n    border-radius: 4px;\n    background-color: ',
    ';\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);\n  }\n  .ant-popover-inner-content {\n    text-align: left;\n    padding: 20px;\n    button {\n      margin-left: 15px;\n    }\n  }\n'
  ],
  [
    '\n  position: absolute;\n  .ant-popover {\n    font-family: inherit;\n    z-index: ',
    ';\n  }\n  .ant-popover-title {\n    border-bottom: 1px solid transparent;\n    padding: 20px 20px 0px 20px;\n    font-size: 14px;\n  }\n  .ant-popover-inner {\n    border: 1px solid rgba(205, 210, 217, 0.5);\n    border-radius: 4px;\n    background-color: ',
    ';\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);\n  }\n  .ant-popover-inner-content {\n    text-align: left;\n    padding: 20px;\n    button {\n      margin-left: 15px;\n    }\n  }\n'
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

require('antd/lib/popover/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme.js');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins.js');

var _mixins2 = _interopRequireDefault(_mixins);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledPopover = _styledComponents2.default.div(
  _templateObject,
  _mixins2.default.zIndex.POPOVER,
  _theme2.default.colors.WHITE
);

var Popover = (function(_Component) {
  (0, _inherits3.default)(Popover, _Component);

  function Popover() {
    (0, _classCallCheck3.default)(this, Popover);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Popover, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var className = this.props.className;

        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(StyledPopover, {
            className: className,
            innerRef: function innerRef(e) {
              return (_this2.popoverContainer = e);
            }
          }),
          _react2.default.createElement(
            _popover2.default,
            (0, _extends3.default)({}, this.props, {
              getPopupContainer: function getPopupContainer() {
                return _this2.popoverContainer;
              }
            })
          )
        );
      }
    }
  ]);
  return Popover;
})(_react.Component);

Popover.propTypes = {
  className: _propTypes2.default.string
};
exports.default = Popover;
