'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = CommentBox;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require('../../utils/core');

var _EmojiPicker = require('../../components/EmojiPicker');

var _EmojiPicker2 = _interopRequireDefault(_EmojiPicker);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

var _constants = require('../../config/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CommentBox(_ref) {
  var id = _ref.id,
      downArrowStyle = _ref.downArrowStyle,
      edit = _ref.edit,
      disableSaveButton = _ref.disableSaveButton,
      commentText = _ref.commentText,
      showError = _ref.showError,
      timestampReadable = _ref.timestampReadable,
      timeStampColor = _ref.timeStampColor,
      readOnly = _ref.readOnly,
      textAreaOpts = _ref.textAreaOpts,
      editClickHandler = _ref.editClickHandler,
      deleteClickHandler = _ref.deleteClickHandler,
      textAreaChangeHandler = _ref.textAreaChangeHandler,
      emojiOnSelectHandler = _ref.emojiOnSelectHandler,
      postCommentHandler = _ref.postCommentHandler,
      closeSelf = _ref.closeSelf,
      inputRef = _ref.inputRef,
      boxRef = _ref.boxRef;

  return _react2.default.createElement(
    'div',
    { className: _index2.default.acBox, ref: boxRef },
    _react2.default.createElement('div', { className: _index2.default.downArrow, style: downArrowStyle }),
    _react2.default.createElement(
      'div',
      { className: _index2.default.acBoxContent },
      _react2.default.createElement(
        'div',
        { className: _index2.default.acBoxContentInfo },
        _react2.default.createElement(
          'span',
          { className: _index2.default.time, style: timeStampColor },
          timestampReadable
        )
      ),
      edit && id && disableSaveButton && _react2.default.createElement(
        'div',
        { className: _index2.default.acControlTopRight },
        _react2.default.createElement('span', {
          onClick: editClickHandler,
          title: 'edit',
          className: _index2.default.edit
        }),
        _react2.default.createElement('span', {
          onClick: deleteClickHandler,
          title: 'delete',
          className: _index2.default.delete
        })
      ),
      _react2.default.createElement('textarea', (0, _extends3.default)({
        className: _index2.default.acBoxText,
        onChange: textAreaChangeHandler,
        onKeyUp: textAreaChangeHandler,
        maxLength: _constants.MAX_CHAR_LIMIT_COMMENT
      }, textAreaOpts, {
        rows: '1',
        ref: inputRef,
        value: (0, _core.parseText)(commentText)
      })),
      _react2.default.createElement(
        'div',
        {
          className: _index2.default.acBoxControls + ' ' + (readOnly ? _index2.default.hide : _index2.default.show)
        },
        _react2.default.createElement(_EmojiPicker2.default, { toLeft: 'true', onSelect: emojiOnSelectHandler }),
        _react2.default.createElement('span', {
          title: 'save',
          className: [_index2.default.acActionButton, _index2.default.save, disableSaveButton ? _index2.default.disable : ''].join(' '),
          onClick: postCommentHandler
        }),
        _react2.default.createElement('span', {
          title: 'discard',
          className: [_index2.default.acActionButton, _index2.default.cancel].join(' '),
          onClick: closeSelf
        })
      ),
      showError && _react2.default.createElement(
        'div',
        { className: [_index2.default.error, _index2.default.floatR].join(' ') },
        'Something went wrong.Please try again..'
      )
    )
  );
}

CommentBox.propTypes = {
  id: _propTypes2.default.string,
  downArrowStyle: _propTypes2.default.object,
  edit: _propTypes2.default.bool,
  disableSaveButton: _propTypes2.default.bool,
  commentText: _propTypes2.default.string,
  showError: _propTypes2.default.bool,
  timestampReadable: _propTypes2.default.string,
  timeStampColor: _propTypes2.default.object,
  readOnly: _propTypes2.default.bool,
  textAreaOpts: _propTypes2.default.object,
  editClickHandler: _propTypes2.default.func,
  deleteClickHandler: _propTypes2.default.func,
  textAreaChangeHandler: _propTypes2.default.func,
  emojiOnSelectHandler: _propTypes2.default.func,
  postCommentHandler: _propTypes2.default.func,
  closeSelf: _propTypes2.default.func,
  inputRef: _propTypes2.default.func,
  boxRef: _propTypes2.default.func
};