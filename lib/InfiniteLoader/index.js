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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInfiniteScroller = require('react-infinite-scroller');

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _Loader = require('../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var InfiniteLoader = (function(_Component) {
  (0, _inherits3.default)(InfiniteLoader, _Component);

  function InfiniteLoader() {
    (0, _classCallCheck3.default)(this, InfiniteLoader);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (
        InfiniteLoader.__proto__ ||
        (0, _getPrototypeOf2.default)(InfiniteLoader)
      ).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(InfiniteLoader, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _reactInfiniteScroller2.default,
          this.props
        );
      }
    }
  ]);
  return InfiniteLoader;
})(_react.Component);

InfiniteLoader.propTypes = (0, _extends3.default)(
  {},
  _reactInfiniteScroller2.default.propTypes
);
InfiniteLoader.defaultProps = {
  loader: _react2.default.createElement(_Loader2.default, {
    key: '5647382910-loader',
    size: 'sizeXSmall'
  }) // has to be unique
};
exports.default = InfiniteLoader;
