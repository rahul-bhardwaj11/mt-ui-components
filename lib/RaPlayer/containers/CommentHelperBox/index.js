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

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = require('../../actions');

var _core = require('../../utils/core');

var _providerHelper = require('../../utils/providerHelper');

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentHelperBox = function (_Component) {
  (0, _inherits3.default)(CommentHelperBox, _Component);

  function CommentHelperBox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CommentHelperBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CommentHelperBox.__proto__ || (0, _getPrototypeOf2.default)(CommentHelperBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      xPos: null,
      downArrowXPos: null
    }, _this.ref = function (commentBox) {
      if (commentBox) {
        _this.commentBox = commentBox;
        _this.calculateXPos();
      }
    }, _this.calculateXPos = function () {
      var commentBox = _this.commentBox;
      var width = commentBox.getBoundingClientRect().width;
      var _this$props = _this.props,
          xPosRaw = _this$props.xPosRaw,
          time = _this$props.time,
          clientWidth = _this$props.clientWidth;

      var availableWindowForCommentHelperBox = xPosRaw + width / 2,
          upperXLimit = clientWidth,
          downArrowXPos = void 0;
      downArrowXPos = width / 2;

      if (_this.isCommentBarDotWithin(time)) {
        return;
      }
      xPosRaw -= width / 2;
      if (availableWindowForCommentHelperBox > upperXLimit) {
        xPosRaw = clientWidth - width;
        downArrowXPos = availableWindowForCommentHelperBox - upperXLimit + width / 2;
      }

      if (xPosRaw < 0) {
        downArrowXPos = xPosRaw + width / 2;
        xPosRaw = 0;
      }

      downArrowXPos = downArrowXPos < 10 ? 10 : downArrowXPos;
      downArrowXPos = downArrowXPos > width - 20 ? width - 20 : downArrowXPos;
      _this.setState({
        xPos: xPosRaw,
        downArrowXPos: downArrowXPos,
        selfWidth: width
      });
    }, _this.commentHelperBoxClickHandler = function () {
      /*
      300px: width of comment box
      8px: default left for down arrow
      */

      var time = _this.props.time;
      var _this$state = _this.state,
          xPos = _this$state.xPos,
          downArrowXPos = _this$state.downArrowXPos;

      var clientWidth = _this.props.videoWidth - 20;

      _this.props.hideCommentBox();
      _this.props.showCommentBox({
        xPosRaw: xPos + downArrowXPos,
        time: time,
        clientWidth: clientWidth,
        downArrowXPosRaw: downArrowXPos
      });
      _this.props.hideCommentHelperBox();
      if (typeof _this.props.onClickHandler === 'function') {
        _this.props.onClickHandler(time);
      }
    }, _this.emojiOnSelectHandler = function (selectedEmoji) {
      _this.props.postComment({
        time: _this.props.time,
        text: selectedEmoji
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CommentHelperBox, [{
    key: 'isCommentBarDotWithin',
    value: function isCommentBarDotWithin(time) {
      var isWithin = false;
      this.props.comments.forEach(function (comment) {
        if (parseInt(comment.time) === parseInt(time)) {
          isWithin = true;
        }
      });
      return isWithin;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.time !== this.props.time) {
        this.calculateXPos();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          time = _props.time,
          commentBoxHelperRenderer = _props.commentBoxHelperRenderer;
      var _state = this.state,
          xPos = _state.xPos,
          downArrowXPos = _state.downArrowXPos;

      var divCls = (0, _classnames2.default)(_index2.default.boxWrapper, (0, _defineProperty3.default)({}, _index2.default.hide, xPos === null));
      var divStyle = {
        left: xPos
      };
      var timestampReadable = time ? (0, _core.toHHMMSS)(time) : '00:00';
      var downArrowStyle = void 0;
      if (downArrowXPos) {
        downArrowStyle = {
          left: downArrowXPos + 'px'
        };
      }
      return _react2.default.createElement(
        'div',
        { style: divStyle, className: divCls },
        commentBoxHelperRenderer({
          emojiOnSelectHandler: this.emojiOnSelectHandler,
          timestampReadable: timestampReadable,
          commentHelperBoxClickHandler: this.commentHelperBoxClickHandler,
          downArrowStyle: downArrowStyle,
          boxRef: this.ref
        })
      );
    }
  }]);
  return CommentHelperBox;
}(_react.Component);

CommentHelperBox.propTypes = {
  commentBoxHelperRenderer: _propTypes2.default.func,
  targetPlayerId: _propTypes2.default.string,
  xPosRaw: _propTypes2.default.number,
  time: _propTypes2.default.number,
  downArrowXPos: _propTypes2.default.number,
  hideCommentBox: _propTypes2.default.func,
  showCommentBox: _propTypes2.default.func,
  hideCommentHelperBox: _propTypes2.default.func,
  onClickHandler: _propTypes2.default.func,
  postComment: _propTypes2.default.func,
  videoWidth: _propTypes2.default.number,
  clientWidth: _propTypes2.default.number,
  comments: _propTypes2.default.array
};


function mapStateToProps(state) {
  return {
    xPosRaw: state.commentHelperBox.data.xPosRaw,
    clientWidth: state.commentHelperBox.data.clientWidth,
    time: state.commentHelperBox.data.time,
    videoWidth: state.media.videoWidth,
    videoDuration: state.media.duration,
    postComment: state.postComment,
    comments: state.comments,
    commentBoxHelperRenderer: state.commentBoxHelperRenderer
  };
}

exports.default = (0, _providerHelper.connect)(mapStateToProps, _actions.actions)(CommentHelperBox);