'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _companylogo = require('./assets/companylogo.png');

var _companylogo2 = _interopRequireDefault(_companylogo);

var _error_page_logo = require('./assets/error_page_logo.png');

var _error_page_logo2 = _interopRequireDefault(_error_page_logo);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ErrorBoundary = (function(_Component) {
  (0, _inherits3.default)(ErrorBoundary, _Component);

  function ErrorBoundary(props) {
    (0, _classCallCheck3.default)(this, ErrorBoundary);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        ErrorBoundary.__proto__ || (0, _getPrototypeOf2.default)(ErrorBoundary)
      ).call(this, props)
    );

    _this.reload = function() {
      return _this.setState({ error: null, hasError: false, errorInfo: null });
    };

    _this.state = { hasError: false, error: null, errorInfo: null };
    return _this;
  }

  (0, _createClass3.default)(ErrorBoundary, [
    {
      key: 'componentDidCatch',
      value: function componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true, error: error, errorInfo: errorInfo });
        // if (process.env.NODE_ENV === "production") PostErrors(error, info);
      }
    },
    {
      key: 'render',
      value: function render() {
        if (this.state.hasError) {
          return _react2.default.createElement(
            _style2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'innerWrapperErrorBoundary' },
              _react2.default.createElement(
                'div',
                { className: 'logo' },
                _react2.default.createElement('img', {
                  src: _companylogo2.default
                }),
                _react2.default.createElement('img', {
                  src: _error_page_logo2.default
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'subErrorText' },
                'Something went wrong'
              ),
              _react2.default.createElement(
                'div',
                { className: 'errorWrapper' },
                _react2.default.createElement(
                  _Button2.default,
                  {
                    onClick: this.reload,
                    type: 'secondary',
                    className: 'marginB24'
                  },
                  'Reload'
                ),
                process.env.NODE_ENV === 'production'
                  ? null
                  : _react2.default.createElement(
                      'details',
                      { style: { whiteSpace: 'pre-wrap' } },
                      this.state.error && this.state.error.toString(),
                      _react2.default.createElement('br', null),
                      this.state.errorInfo.componentStack
                    )
              )
            )
          );
        }
        return this.props.children;
      }
    }
  ]);
  return ErrorBoundary;
})(_react.Component);

ErrorBoundary.propTypes = {
  children: _propTypes2.default.node.isRequired
};
exports.default = ErrorBoundary;
