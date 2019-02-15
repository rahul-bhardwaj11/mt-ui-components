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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorpageWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'ErrorPage__ErrorpageWrapper',
  componentId: 'u21e1o-0'
})(['text-align:center;.errorPageTitle{}.errorPageHeading{', ';}.errorPageDescription{', ';font-weight:normal;}.errorCommonButtonStyling{margin:0 4px;}'], _mixins2.default.h2(), _mixins2.default.h3Grey());

var ErrorPage = function (_Component) {
  (0, _inherits3.default)(ErrorPage, _Component);

  function ErrorPage() {
    (0, _classCallCheck3.default)(this, ErrorPage);
    return (0, _possibleConstructorReturn3.default)(this, (ErrorPage.__proto__ || (0, _getPrototypeOf2.default)(ErrorPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ErrorPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        ErrorpageWrapper,
        null,
        _react2.default.createElement(
          'div',
          { className: 'errorPageTitle' },
          'MindTickle'
        ),
        _react2.default.createElement(_Icon2.default, { type: 'edit' }),
        _react2.default.createElement(
          'div',
          { className: 'errorPageHeading' },
          'It not you. It us.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'errorPageDescription' },
          'Lorem ipsum is a dummy text'
        ),
        _react2.default.createElement(
          'div',
          { className: 'errorPageDescription' },
          'Lorem ipsum is a dummy text'
        ),
        _react2.default.createElement(
          'div',
          { className: 'errorPageActionButtons' },
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
  styleTitle: _propTypes2.default.object,
  styleIcon: _propTypes2.default.object,
  styleHeading: _propTypes2.default.object,
  styleDescription: _propTypes2.default.object,
  styleActionButton: _propTypes2.default.object
};
ErrorPage.defaultProps = {
  onSearch: function onSearch() {},
  onPressEnter: function onPressEnter() {}
};
exports.default = ErrorPage;