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

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoCommentBox = function (_Component) {
  (0, _inherits3.default)(NoCommentBox, _Component);

  function NoCommentBox() {
    (0, _classCallCheck3.default)(this, NoCommentBox);
    return (0, _possibleConstructorReturn3.default)(this, (NoCommentBox.__proto__ || (0, _getPrototypeOf2.default)(NoCommentBox)).call(this));
  }

  (0, _createClass3.default)(NoCommentBox, [{
    key: 'render',
    value: function render(_ref) {
      var text = _ref.text,
          image = _ref.image;

      return _react2.default.createElement(
        'div',
        { className: _index2.default.noCommentContainer },
        _react2.default.createElement('img', { src: image }),
        _react2.default.createElement(
          'div',
          null,
          text
        )
      );
    }
  }]);
  return NoCommentBox;
}(_react.Component);

exports.default = NoCommentBox;