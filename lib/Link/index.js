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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _anchor = require('antd/lib/anchor');

var _anchor2 = _interopRequireDefault(_anchor);

require('antd/lib/anchor/style/index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MtAnchor = _styledComponents2.default.span.withConfig({
  displayName: 'Link__MtAnchor',
  componentId: 'x9rckf-0'
})([
  '.ant-anchor-wrapper{.ant-anchor{display:inline-block;}.ant-anchor-ink{&:before{background-color:transparent;}}}'
]);

var Link = (function(_Component) {
  (0, _inherits3.default)(Link, _Component);

  function Link() {
    (0, _classCallCheck3.default)(this, Link);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Link, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          MtAnchor,
          null,
          _react2.default.createElement(
            _anchor2.default,
            null,
            _react2.default.createElement(_anchor2.default.Link, this.props)
          )
        );
      }
    }
  ]);
  return Link;
})(_react.Component);

Link.propTypes = {
  href: _propTypes2.default.string,
  title: _propTypes2.default.string,
  className: _propTypes2.default.string
};
exports.default = Link;
