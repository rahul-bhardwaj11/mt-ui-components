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

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

var _actions = require('../../actions');

var _core = require('../../utils/core');

var _providerHelper = require('../../utils/providerHelper');

var _Modal = require('../../../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _constants = require('../../config/constants');

var _EmojiPicker = require('../../components/EmojiPicker');

var _EmojiPicker2 = _interopRequireDefault(_EmojiPicker);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentBox = function (_Component) {
  (0, _inherits3.default)(CommentBox, _Component);
  (0, _createClass3.default)(CommentBox, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (props.showError && state.disableSaveButton) {
        clearTimeout(state.timer);
        state.disableSaveButton = false;
        state.timer = setTimeout(function () {
          props.hideCommentBoxError();
        }, 3000);
        return state;
      }
      return null;
    }
  }]);

  function CommentBox() {
    (0, _classCallCheck3.default)(this, CommentBox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CommentBox.__proto__ || (0, _getPrototypeOf2.default)(CommentBox)).call(this));

    _this.textAreaChangeHandler = _this.textAreaChangeHandler.bind(_this);
    _this.editClickHandler = _this.editClickHandler.bind(_this);
    _this.deleteClickHandler = _this.deleteClickHandler.bind(_this);
    _this.closeSelf = _this.closeSelf.bind(_this);
    _this.emojiOnSelectHandler = _this.emojiOnSelectHandler.bind(_this);
    _this.postCommentHandler = _this.postCommentHandler.bind(_this);
    var intialState = {
      disableSaveButton: true
    };
    _this.state = intialState;
    return _this;
  }

  (0, _createClass3.default)(CommentBox, [{
    key: 'emojiOnSelectHandler',
    value: function emojiOnSelectHandler(selectedEmoji) {
      if (this.commentTextArea.value.length < _constants.MAX_CHAR_LIMIT_COMMENT) {
        var text = this.commentTextArea.value + selectedEmoji;
        this.props.showCommentBox({
          text: text
        });
        this.setState({
          disableSaveButton: false
        });
      }
    }
  }, {
    key: 'textAreaChangeHandler',
    value: function textAreaChangeHandler(e) {
      var text = e.target.value;
      text = text && text.trim();
      this.setState({
        disableSaveButton: text ? false : true
      });
      this.props.showCommentBox({
        text: e.target.value
      });
    }
  }, {
    key: 'closeSelf',
    value: function closeSelf() {
      this.props.hideCommentBox();
    }
  }, {
    key: 'editClickHandler',
    value: function editClickHandler() {
      this.props.showCommentBox({
        readOnly: false
      });
      this.setState({
        disableSaveButton: false
      });
      this.commentTextArea.addEventListener('keydown', this.autosize.bind(this));
      this.commentTextArea.focus();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.autosize();
      if (!this.props.readOnly) {
        this.commentTextArea.addEventListener('keydown', this.autosize.bind(this));
        this.commentTextArea.focus();
      }
    }
  }, {
    key: 'deleteClickHandler',
    value: function deleteClickHandler(event) {
      var _this2 = this;

      event.stopPropagation();
      var props = this.props;
      _Modal2.default.confirm({
        showFooter: true,
        title: _constants.STRING_DELETED_COMMENT_CANT_BE_RESTORED,
        okText: _constants.STRING_DELETE,
        cancelText: _constants.STRING_CANCEL,
        closable: true,
        onOk: function onOk() {
          _this2.props.deleteComment({
            id: props.id
          });
          _this2.props.hideCommentBox();
        }
      });
    }
  }, {
    key: 'postCommentHandler',
    value: function postCommentHandler() {
      if (this.state.disableSaveButton) {
        return;
      }
      var text = this.commentTextArea.value && this.commentTextArea.value.trim();
      if (!text) {
        return;
      }
      this.setState({
        disableSaveButton: true
      });
      if (this.props.id) {
        this.props.editComment({
          commentObj: {
            id: this.props.id,
            text: text,
            time: this.props.time
          },
          isCommentBox: true,
          author: this.props.author
        });
        return;
      }
      this.props.postComment({
        commentObj: {
          text: text,
          time: this.props.time
        }
      });
      this.closeSelf();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.state.timer);
      clearTimeout(this.autoSizeTimer);
      this.commentTextArea.removeEventListener('keydown', this.autosize);
    }
  }, {
    key: 'autosize',
    value: function autosize() {
      var el = this.commentTextArea;
      if (!el) {
        return;
      }
      this.autoSizeTimer = setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      }, 0);
    }
  }, {
    key: 'commentDidUpdate',
    value: function commentDidUpdate() {
      this.autosize();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          xPos = _props.xPos,
          time = _props.time,
          commentText = _props.commentText,
          readOnly = _props.readOnly,
          downArrowXPos = _props.downArrowXPos,
          edit = _props.edit,
          showError = _props.showError,
          author = _props.author;
      var disableSaveButton = this.state.disableSaveButton;

      var divStyle = {
        left: xPos
      },
          timestampReadable = (0, _core.toHHMMSS)(time),
          downArrowStyle = void 0,
          timeStampColor = void 0;
      var opts = {};
      if (readOnly) {
        opts['readOnly'] = 'readOnly';
      }
      if (downArrowXPos) {
        downArrowStyle = {
          left: downArrowXPos + 'px'
        };
      }
      var colorMap = (0, _core.getColorMap)();
      if (author && author.id && colorMap[author.id]) {
        timeStampColor = {
          backgroundColor: colorMap[author.id]
        };
      }

      return _react2.default.createElement(
        'div',
        { style: divStyle, className: _index2.default.acBox },
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
          edit && this.props.id && disableSaveButton && _react2.default.createElement(
            'div',
            { className: _index2.default.acControlTopRight },
            _react2.default.createElement('span', {
              onClick: this.editClickHandler,
              title: 'edit',
              className: _index2.default.edit
            }),
            _react2.default.createElement('span', {
              onClick: this.deleteClickHandler,
              title: 'delete',
              className: _index2.default.delete
            })
          ),
          _react2.default.createElement('textarea', (0, _extends3.default)({
            className: _index2.default.acBoxText,
            onChange: this.textAreaChangeHandler,
            onKeyUp: this.textAreaChangeHandler,
            maxLength: _constants.MAX_CHAR_LIMIT_COMMENT
          }, opts, {
            rows: '1',
            ref: function ref(input) {
              _this3.commentTextArea = input;
            },
            value: (0, _core.parseText)(commentText)
          })),
          _react2.default.createElement(
            'div',
            {
              className: _index2.default.acBoxControls + ' ' + (readOnly ? _index2.default.hide : _index2.default.show)
            },
            _react2.default.createElement(_EmojiPicker2.default, { toLeft: 'true', onSelect: this.emojiOnSelectHandler }),
            _react2.default.createElement('span', {
              title: 'save',
              className: [_index2.default.acActionButton, _index2.default.save, disableSaveButton ? _index2.default.disable : ''].join(' '),
              onClick: this.postCommentHandler
            }),
            _react2.default.createElement('span', {
              title: 'discard',
              className: [_index2.default.acActionButton, _index2.default.cancel].join(' '),
              onClick: this.closeSelf
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
  }]);
  return CommentBox;
}(_react.Component);

CommentBox.propTypes = {
  showCommentBox: _propTypes2.default.func,
  hideCommentBox: _propTypes2.default.func,
  readOnly: _propTypes2.default.bool,
  deleteComment: _propTypes2.default.func,
  id: _propTypes2.default.string,
  editComment: _propTypes2.default.func,
  time: _propTypes2.default.number,
  postComment: _propTypes2.default.func,
  xPos: _propTypes2.default.number,
  commentText: _propTypes2.default.string,
  downArrowXPos: _propTypes2.default.number,
  edit: _propTypes2.default.bool,
  showError: _propTypes2.default.bool,
  author: _propTypes2.default.object
};


function mapStateToProps(state) {
  return {
    xPos: state.commentBox.data.xPos,
    time: state.commentBox.data.time,
    author: state.commentBox.data.author,
    commentText: state.commentBox.data.text,
    readOnly: state.commentBox.data.readOnly,
    id: state.commentBox.data.id,
    downArrowXPos: state.commentBox.data.downArrowXPos,
    showError: state.commentBox.error,
    postComment: state.postComment,
    editComment: state.editComment,
    deleteComment: state.deleteComment
  };
}

exports.default = (0, _providerHelper.connect)(mapStateToProps, _actions.actions)(CommentBox);