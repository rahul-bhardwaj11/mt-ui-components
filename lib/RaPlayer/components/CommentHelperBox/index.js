'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommentHelperBox;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EmojiPicker = require('../EmojiPicker');

var _EmojiPicker2 = _interopRequireDefault(_EmojiPicker);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CommentHelperBox(_ref) {
  var timestampReadable = _ref.timestampReadable,
      commentHelperBoxClickHandler = _ref.commentHelperBoxClickHandler,
      emojiOnSelectHandler = _ref.emojiOnSelectHandler,
      downArrowStyle = _ref.downArrowStyle,
      boxRef = _ref.boxRef;

  return _react2.default.createElement(
    'div',
    { ref: boxRef, className: _index2.default.chBox },
    _react2.default.createElement('div', { className: _index2.default.downArrow, style: downArrowStyle }),
    _react2.default.createElement(
      'div',
      { className: _index2.default.chBoxContent },
      _react2.default.createElement(
        'div',
        {
          className: _index2.default.chBoxContentInfo,
          onClick: commentHelperBoxClickHandler
        },
        _react2.default.createElement(
          'span',
          { className: _index2.default.plusIcon },
          '+'
        ),
        ' Add Comments @',
        timestampReadable
      ),
      _react2.default.createElement(
        'div',
        { className: _index2.default.chBoxControls },
        _react2.default.createElement(_EmojiPicker2.default, { onSelect: emojiOnSelectHandler })
      ),
      _react2.default.createElement('div', { className: _index2.default.clear })
    )
  );
}
CommentHelperBox.propTypes = {
  commentHelperBoxClickHandler: _propTypes2.default.func.isRequired,
  timestampReadable: _propTypes2.default.string,
  emojiOnSelectHandler: _propTypes2.default.func,
  downArrowStyle: _propTypes2.default.object,
  boxRef: _propTypes2.default.func
};