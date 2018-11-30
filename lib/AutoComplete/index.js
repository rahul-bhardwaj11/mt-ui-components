'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autoComplete = require('antd/lib/auto-complete');

var _autoComplete2 = _interopRequireDefault(_autoComplete);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('antd/lib/auto-complete/style/index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledAutoComplete = _styledComponents2.default.div(_templateObject);

var AutoComplete = (function(_React$Component) {
  (0, _inherits3.default)(AutoComplete, _React$Component);

  function AutoComplete() {
    (0, _classCallCheck3.default)(this, AutoComplete);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (
        AutoComplete.__proto__ || (0, _getPrototypeOf2.default)(AutoComplete)
      ).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(AutoComplete, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          className = _props.className,
          rest = (0, _objectWithoutProperties3.default)(_props, ['className']);

        return _react2.default.createElement(
          StyledAutoComplete,
          {
            innerRef: function innerRef(ele) {
              if (ele) _this2.popUpContainer = ele;
            },
            className: className
          },
          _react2.default.createElement(
            _autoComplete2.default,
            (0, _extends3.default)({}, rest, {
              getPopupContainer: function getPopupContainer() {
                return _this2.popUpContainer;
              }
            })
          )
        );
      }
    }
  ]);
  return AutoComplete;
})(_react2.default.Component);

AutoComplete.propTypes = {
  className: _propTypes2.default.string
};

AutoComplete.Option = _autoComplete2.default.Option;
exports.default = AutoComplete;
