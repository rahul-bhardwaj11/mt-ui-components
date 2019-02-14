'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentBoxHelperRenderer = commentBoxHelperRenderer;
exports.commentBoxRenderer = commentBoxRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CommentHelperBox = require('../components/CommentHelperBox');

var _CommentHelperBox2 = _interopRequireDefault(_CommentHelperBox);

var _CommentBox = require('../components/CommentBox');

var _CommentBox2 = _interopRequireDefault(_CommentBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function commentBoxHelperRenderer(props) {
  return _react2.default.createElement(_CommentHelperBox2.default, props);
}

function commentBoxRenderer(props) {
  return _react2.default.createElement(_CommentBox2.default, props);
}