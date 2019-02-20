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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentBarDot = function (_Component) {
  (0, _inherits3.default)(CommentBarDot, _Component);

  function CommentBarDot(props) {
    (0, _classCallCheck3.default)(this, CommentBarDot);
    return (0, _possibleConstructorReturn3.default)(this, (CommentBarDot.__proto__ || (0, _getPrototypeOf2.default)(CommentBarDot)).call(this, props));
  }

  (0, _createClass3.default)(CommentBarDot, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          comments = _props.comments,
          onMouseIn = _props.onMouseIn,
          onMouseOut = _props.onMouseOut,
          colorMap = _props.colorMap,
          videoDuration = _props.videoDuration,
          commentBarClassName = _props.commentBarClassName;

      if (!videoDuration) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(commentBarClassName, _index2.default.container) },
        comments.map(function (comment) {
          var position = comment.time * 100 / videoDuration;
          var divStyle = {
            left: position + '%',
            background: colorMap[comment.author.id]
          };
          return _react2.default.createElement('div', {
            className: _index2.default.commentBarDot,
            style: divStyle,
            text: comment.text,
            key: comment.id,
            onMouseOver: function onMouseOver(e) {
              return onMouseIn(e, comment);
            },
            onMouseOut: onMouseOut
          });
        })
      );
    }
  }]);
  return CommentBarDot;
}(_react.Component);

CommentBarDot.propTypes = {
  comments: _propTypes2.default.array,
  onMouseIn: _propTypes2.default.func,
  onMouseOut: _propTypes2.default.func,
  colorMap: _propTypes2.default.object,
  videoDuration: _propTypes2.default.number,
  commentBarClassName: _propTypes2.default.string
};
exports.default = CommentBarDot;