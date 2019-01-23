'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = require('../../actions');

var _core = require('../../utils/core');

var _providerHelper = require('../../utils/providerHelper');

var _Modal = require('../../../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _constants = require('../../config/constants');

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

    _this.state = {
      xPos: null,
      downArrowXPos: null
    };

    _this.inputRef = function (node) {
      _this.commentTextArea = node;
    };

    _this.boxRef = function (commentBox) {
      if (commentBox) {
        _this.commentBox = commentBox;
        _this.calculateXPos();
      }
    };

    _this.calculateXPos = function () {
      var _this$props = _this.props,
          xPosRaw = _this$props.xPosRaw,
          clientWidth = _this$props.clientWidth;

      var width = _this.commentBox.getBoundingClientRect().width;
      var _xPos = xPosRaw;
      var availableWindow = _xPos + width / 2,
          upperXLimit = clientWidth;

      _xPos -= width / 2;
      if (availableWindow > upperXLimit) {
        _xPos = clientWidth - width;
      }

      if (_xPos < 0) {
        _xPos = 0;
      }
      var downArrowXPos = xPosRaw - _xPos - 25;
      downArrowXPos = downArrowXPos < 30 ? 30 : downArrowXPos;
      downArrowXPos = downArrowXPos > width - 30 ? width - 30 : downArrowXPos;
      _this.setState({
        xPos: _xPos,
        downArrowXPos: downArrowXPos
      });
    };

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
      if (this.commentTextArea && this.commentTextArea.value.length < _constants.MAX_CHAR_LIMIT_COMMENT) {
        var text = this.commentTextArea.value + selectedEmoji;
        this.props.showCommentBox({
          text: text
        });
        this.setState({
          disableSaveButton: false
        });
        this.commentTextArea.focus();
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
      if (!this.commentTextArea) {
        return;
      }
      this.commentTextArea.addEventListener('keydown', this.autosize.bind(this));
      this.commentTextArea.focus();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.autosize();
      if (!this.props.readOnly && this.commentTextArea) {
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
          id: this.props.id,
          text: text,
          time: this.props.time
        });
      } else {
        this.props.postComment({
          text: text,
          time: this.props.time
        });
      }
      this.closeSelf();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.state.timer);
      clearTimeout(this.autoSizeTimer);
      this.commentTextArea && this.commentTextArea.removeEventListener('keydown', this.autosize);
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
      var _props = this.props,
          time = _props.time,
          commentText = _props.commentText,
          readOnly = _props.readOnly,
          edit = _props.edit,
          showError = _props.showError,
          author = _props.author,
          commentBoxRenderer = _props.commentBoxRenderer;
      var _state = this.state,
          xPos = _state.xPos,
          downArrowXPos = _state.downArrowXPos;
      var disableSaveButton = this.state.disableSaveButton;

      var divCls = (0, _classnames2.default)(_index2.default.boxWrapper, (0, _defineProperty3.default)({}, _index2.default.hide, xPos === null));
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
        { style: divStyle, className: divCls },
        commentBoxRenderer({
          id: this.props.id,
          commentText: commentText,
          edit: edit,
          showError: showError,
          disableSaveButton: disableSaveButton,
          timestampReadable: timestampReadable,
          downArrowStyle: downArrowStyle,
          timeStampColor: timeStampColor,
          readOnly: readOnly,
          textAreaOpts: opts,
          editClickHandler: this.editClickHandler,
          deleteClickHandler: this.deleteClickHandler,
          textAreaChangeHandler: this.textAreaChangeHandler,
          emojiOnSelectHandler: this.emojiOnSelectHandler,
          postCommentHandler: this.postCommentHandler,
          closeSelf: this.closeSelf,
          inputRef: this.inputRef,
          boxRef: this.boxRef
        })
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
  xPosRaw: _propTypes2.default.number,
  commentText: _propTypes2.default.string,
  edit: _propTypes2.default.bool,
  showError: _propTypes2.default.bool,
  author: _propTypes2.default.object,
  commentBoxRenderer: _propTypes2.default.func,
  clientWidth: _propTypes2.default.number
};


function mapStateToProps(state) {
  return {
    xPosRaw: state.commentBox.data.xPosRaw,
    clientWidth: state.commentBox.data.clientWidth,
    time: state.commentBox.data.time,
    author: state.commentBox.data.author,
    commentText: state.commentBox.data.text,
    readOnly: state.commentBox.data.readOnly,
    id: state.commentBox.data.id,
    showError: state.commentBox.error,
    postComment: state.postComment,
    editComment: state.editComment,
    deleteComment: state.deleteComment,
    commentBoxRenderer: state.commentBoxRenderer
  };
}

exports.default = (0, _providerHelper.connect)(mapStateToProps, _actions.actions)(CommentBox);