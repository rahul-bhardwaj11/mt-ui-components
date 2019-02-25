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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import message from "./message";

var ErrorpageWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'ErrorPage__ErrorpageWrapper',
  componentId: 'u21e1o-0'
})(['text-align:center;.errorPageTitle{width:200px;height:auto;margin-top:72px;margin-bottom:72px;}.errorPageIcon{margin:0 auto;}.errorPageHeading{margin-top:32px;', ';}.errorPageDescription{margin-top:12px;', ';font-weight:normal;}.errorPageActionButtons{margin-top:32px;.errorCommonButtonStyling{margin:0 4px;}}'], _mixins2.default.h2(), _mixins2.default.h3Grey());

var ErrorPage = function (_Component) {
  (0, _inherits3.default)(ErrorPage, _Component);

  function ErrorPage() {
    (0, _classCallCheck3.default)(this, ErrorPage);
    return (0, _possibleConstructorReturn3.default)(this, (ErrorPage.__proto__ || (0, _getPrototypeOf2.default)(ErrorPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ErrorPage, [{
    key: 'render',
    value: function render(styleTitle, styleIcon, styleHeading, styleDescription, styleActionButton) {
      return _react2.default.createElement(
        ErrorpageWrapper,
        null,
        _react2.default.createElement('img', { className: (0, _classnames2.default)("errorPageTitle", styleTitle), src: 'http://www.mindtickle.com/wp-content/uploads/2018/07/home-logo.png' }),
        _react2.default.createElement(_Icon2.default, {
          gradient: true,
          type: 'internalError',
          className: 'errorPageIcon',
          style: (0, _extends3.default)({}, styleIcon)
        }),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)("errorPageHeading", styleHeading) },
          'It not you. It us.'
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)("errorPageDescription", styleDescription) },
          'Lorem ipsum is a dummy text',
          _react2.default.createElement('br', null),
          'Lorem ipsum is a dummy text'
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)("errorPageActionButtons", styleActionButton) },
          _react2.default.createElement(
            _Button2.default,
            { type: 'secondary', className: 'errorCommonButtonStyling' },
            'Report Issue'
          ),
          _react2.default.createElement(
            _Button2.default,
            { type: 'primary', className: 'errorCommonButtonStyling' },
            'Try Again'
          )
        )
      );
    }
  }]);
  return ErrorPage;
}(_react.Component);

ErrorPage.propTypes = {
  styleTitle: _propTypes2.default.string,
  styleIcon: _propTypes2.default.string,
  styleHeading: _propTypes2.default.string,
  styleDescription: _propTypes2.default.string,
  styleActionButton: _propTypes2.default.string,
  styleHeadingText: _propTypes2.default.string.isRequired
};
ErrorPage.defaultProps = {
  onSearch: function onSearch() {},
  onPressEnter: function onPressEnter() {}
};
exports.default = ErrorPage;