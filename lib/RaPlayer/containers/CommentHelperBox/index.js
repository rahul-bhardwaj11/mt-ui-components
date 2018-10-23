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

var _actions = require('../../actions');

var _core = require('../../utils/core');

var _providerHelper = require('../../utils/providerHelper');

var _EmojiPicker = require('../../components/EmojiPicker');

var _EmojiPicker2 = _interopRequireDefault(_EmojiPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BoxContent(_ref) {
  var timestampReadable = _ref.timestampReadable,
      commentHelperBoxClickHandler = _ref.commentHelperBoxClickHandler,
      emojiOnSelectHandler = _ref.emojiOnSelectHandler;

  return _react2.default.createElement(
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
  );
}
BoxContent.propTypes = {
  commentHelperBoxClickHandler: _propTypes2.default.func.isRequired,
  timestampReadable: _propTypes2.default.string,
  emojiOnSelectHandler: _propTypes2.default.func
};

var CommentHelperBox = function (_Component) {
  (0, _inherits3.default)(CommentHelperBox, _Component);

  function CommentHelperBox() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CommentHelperBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = CommentHelperBox.__proto__ || (0, _getPrototypeOf2.default)(CommentHelperBox)).call.apply(_ref2, [this].concat(args))), _this), _this.commentHelperBoxClickHandler = function () {
      /*
      300px: width of comment box
      8px: default left for down arrow
      */

      var _this$props = _this.props,
          xPos = _this$props.xPos,
          time = _this$props.time,
          downArrowXPos = _this$props.downArrowXPos;

      var clientWidth = _this.props.videoWidth - 20;
      var _xPos = xPos;
      var availableWindow = _xPos + 300,
          upperXLimit = clientWidth,
          _downArrowXPos = 8;

      _xPos -= 4;
      if (availableWindow > upperXLimit) {
        _xPos = clientWidth - 300;
        _downArrowXPos = xPos + downArrowXPos - _xPos - 6;
      }

      _downArrowXPos = _downArrowXPos < 8 ? 8 : _downArrowXPos;
      _downArrowXPos = _downArrowXPos > 274 ? 274 : _downArrowXPos;

      _this.props.hideCommentBox();
      _this.props.showCommentBox({
        xPos: _xPos,
        time: time,
        downArrowXPos: _downArrowXPos
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
    key: 'render',
    value: function render() {
      var _props = this.props,
          xPos = _props.xPos,
          time = _props.time,
          downArrowXPos = _props.downArrowXPos,
          BoxContentComp = _props.BoxContentComp;

      var divStyle = {
        left: xPos
      },
          timestampReadable = time ? (0, _core.toHHMMSS)(time) : '00:00',
          downArrowStyle = void 0;
      if (downArrowXPos) {
        downArrowStyle = {
          left: downArrowXPos + 'px'
        };
      }
      return _react2.default.createElement(
        'div',
        { style: divStyle, className: _index2.default.chBox },
        _react2.default.createElement('div', { className: _index2.default.downArrow, style: downArrowStyle }),
        _react2.default.createElement(BoxContentComp, {
          emojiOnSelectHandler: this.emojiOnSelectHandler,
          timestampReadable: timestampReadable,
          commentHelperBoxClickHandler: this.commentHelperBoxClickHandler
        })
      );
    }
  }]);
  return CommentHelperBox;
}(_react.Component);

CommentHelperBox.propTypes = {
  BoxContentComp: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  targetPlayerId: _propTypes2.default.string,
  xPos: _propTypes2.default.number,
  time: _propTypes2.default.number,
  downArrowXPos: _propTypes2.default.number,
  hideCommentBox: _propTypes2.default.func,
  showCommentBox: _propTypes2.default.func,
  hideCommentHelperBox: _propTypes2.default.func,
  onClickHandler: _propTypes2.default.func,
  postComment: _propTypes2.default.func,
  videoWidth: _propTypes2.default.number
};
CommentHelperBox.defaultProps = {
  BoxContentComp: BoxContent
};


function mapStateToProps(state) {
  return {
    xPos: state.commentHelperBox.data.xPos,
    time: state.commentHelperBox.data.time,
    downArrowXPos: state.commentHelperBox.data.downArrowXPos,
    videoWidth: state.media.videoWidth,
    postComment: state.postComment,
    BoxContentComp: state.BoxContentComp
  };
}

exports.default = (0, _providerHelper.connect)(mapStateToProps, _actions.actions)(CommentHelperBox);