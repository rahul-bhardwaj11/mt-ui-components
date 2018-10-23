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

var _enhancer = require('../../utils/enhancer');

var _CommentBox = require('../CommentBox');

var _CommentBox2 = _interopRequireDefault(_CommentBox);

var _CommentHelperBox = require('../CommentHelperBox');

var _CommentHelperBox2 = _interopRequireDefault(_CommentHelperBox);

var _TimeBar = require('../../components/TimeBar');

var _TimeBar2 = _interopRequireDefault(_TimeBar);

var _VolumeBar = require('../../components/VolumeBar');

var _VolumeBar2 = _interopRequireDefault(_VolumeBar);

var _CommentBarDot = require('../../components/CommentBarDot');

var _CommentBarDot2 = _interopRequireDefault(_CommentBarDot);

var _TracksList = require('../../components/TracksList');

var _TracksList2 = _interopRequireDefault(_TracksList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultControlOptions = {
  download: true,
  fullScreen: true
};

var VideoControls = function (_Component) {
  (0, _inherits3.default)(VideoControls, _Component);

  function VideoControls(props) {
    (0, _classCallCheck3.default)(this, VideoControls);

    var _this = (0, _possibleConstructorReturn3.default)(this, (VideoControls.__proto__ || (0, _getPrototypeOf2.default)(VideoControls)).call(this, props));

    _this.showTrackListHandler = function () {
      _this.setState({
        showTrackList: true
      });
    };

    _this.hideTrackListHandler = function () {
      _this.setState({
        showTrackList: false
      });
    };

    _this.togglePlayPause = function () {
      _this.props.onVideoPlayed();
      if (!_this.video.paused) {
        _this.props.updateMediaAttributes({
          state: 'PAUSE'
        });
        _this.video.pause();
      } else {
        _this.props.updateMediaAttributes({
          state: 'PLAY'
        });
        _this.video.play();
      }
    };

    _this.toggleFullscreen = function () {
      var pfx = (0, _core.getPrefixes)();
      var parent = _this.container.parentNode.parentNode;
      var that = _this;
      if ((0, _core.runPrefixMethod)(document, 'FullScreen') || (0, _core.runPrefixMethod)(document, 'IsFullScreen')) {
        (0, _core.runPrefixMethod)(document, 'CancelFullScreen');
        _this.props.updateMediaAttributes({ fullScreen: false });
        that.exitHandler();
      } else {
        _this.props.updateMediaAttributes({ fullScreen: true });
        (0, _core.runPrefixMethod)(parent, 'RequestFullScreen') || (0, _core.runPrefixMethod)(parent, 'RequestFullscreen');
        setTimeout(function () {
          pfx.forEach(function (prefix) {
            parent.addEventListener(prefix + 'fullscreenchange', that.exitHandler.bind(that), false);
          });
        }, 700);
      }
    };

    _this.showCommentHelperBox = function (e) {
      /*
      200px: width of helper box
      8px: default left for down arrow
      10px: padding left and right of video controls
      */
      if (_this.props.isCommentBoxActive) {
        return;
      }
      var targetOffset = (0, _core.getElementOffset)(e.target);
      var xPos = e.pageX - targetOffset.left;
      var percentage = 100 * xPos / e.target.clientWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      if (xPos < 0) {
        xPos = 0;
      }

      var time = percentage / 100 * _this.props.videoDuration,
          availableWindowForCommentHelperBox = xPos + 200,
          upperXLimit = e.target.clientWidth,
          downArrowXPos = void 0;
      downArrowXPos = 8;

      if (_this.isCommentBarDotWithin(time)) {
        return;
      }
      xPos -= 10;
      if (availableWindowForCommentHelperBox > upperXLimit) {
        xPos = e.target.clientWidth - 200;
        downArrowXPos = availableWindowForCommentHelperBox - upperXLimit;
      }

      downArrowXPos = downArrowXPos < 8 ? 8 : downArrowXPos;
      downArrowXPos = downArrowXPos > 183 ? 183 : downArrowXPos;

      _this.props.showCommentHelperBox({
        xPos: xPos,
        time: time,
        downArrowXPos: downArrowXPos
      });
      _this.props.hideCommentBox();
    };

    _this.commentBarDotOnMouseInHandler = function (e, comment) {
      if (_this.props.isCommentBoxActive) {
        return;
      }

      var style = window.getComputedStyle(e.target, null);
      var xPos = parseInt(style.getPropertyValue('left'));
      var targetElement = e.target.parentElement;
      var clientWidth = targetElement.clientWidth;

      var availableWindowForCommentHelperBox = xPos + 300,
          upperXLimit = clientWidth,
          downArrowXPos = void 0,
          _xPos = xPos;
      downArrowXPos = 8;

      _xPos -= 16;
      if (availableWindowForCommentHelperBox > upperXLimit) {
        _xPos = clientWidth - 300;
        downArrowXPos = xPos - _xPos - 8;
      }

      downArrowXPos = downArrowXPos < 8 ? 8 : downArrowXPos;
      downArrowXPos = downArrowXPos > 274 ? 274 : downArrowXPos;

      _this.props.hideCommentHelperBox();
      _this.props.showCommentBox((0, _extends3.default)({
        xPos: _xPos
      }, comment, {
        readOnly: true,
        downArrowXPos: downArrowXPos
      }));
    };

    _this.commentBarDotOnMouseOutHandler = function (event) {
      if (_this.props.isCommentBoxActive) {
        return;
      }
      var e = event.toElement || event.relatedTarget;
      if (_this.container.contains(e)) {
        return;
      }
      _this.props.hideCommentBox();
    };

    _this.onMouseOutHandler = function (event) {
      if (_this.props.isCommentBoxActive) {
        return;
      }
      var e = event.toElement || event.relatedTarget;
      if (_this.container.contains(e)) {
        return;
      }
      _this.props.hideCommentHelperBox();
      _this.props.hideCommentBox();
    };

    _this.render = function () {
      var _this$props = _this.props,
          targetPlayerId = _this$props.targetPlayerId,
          currentTime = _this$props.currentTime,
          commentBox = _this$props.commentBox,
          commentHelperBox = _this$props.commentHelperBox,
          comments = _this$props.comments,
          mediaState = _this$props.mediaState,
          edit = _this$props.edit,
          _this$props$volume = _this$props.volume,
          volume = _this$props$volume === undefined ? 0.5 : _this$props$volume,
          videoTracks = _this$props.videoTracks,
          onSelectTrack = _this$props.onSelectTrack,
          selectedTrack = _this$props.selectedTrack,
          onSeekHandler = _this$props.onSeekHandler,
          volumeUpdateHandler = _this$props.volumeUpdateHandler,
          namespace = _this$props.namespace,
          videoPauseAtTimeHandler = _this$props.videoPauseAtTimeHandler,
          _this$props$controlOp = _this$props.controlOptions,
          controlOptionsProp = _this$props$controlOp === undefined ? {} : _this$props$controlOp,
          downloadSrc = _this$props.downloadSrc,
          videoDuration = _this$props.videoDuration;
      var showTrackList = _this.state.showTrackList;

      _this.video = document.getElementById(targetPlayerId);
      var controlOptions = (0, _extends3.default)({}, defaultControlOptions, controlOptionsProp);
      var currentTimeString = '00:00',
          seekTime = 0;
      if (videoDuration) {
        currentTimeString = !currentTime || currentTime === 0 ? '00:00' : (0, _core.toHHMMSS)(currentTime) + ' / ' + (0, _core.toHHMMSS)(videoDuration);
        seekTime = currentTime / videoDuration * 100;
      }
      seekTime = seekTime ? seekTime - 0.01 : 0;
      var mediaPlayPauseKlass = void 0;
      switch (mediaState) {
        case 'PLAY':
          mediaPlayPauseKlass = _index2.default.pause;
          break;
        case 'PAUSE':
          mediaPlayPauseKlass = _index2.default.play;
          break;
      }

      var authors = comments.map(function (comment) {
        return comment.author.id;
      });
      var colorMap = (0, _core.getColorMap)(authors);

      var videoControlsStyle = {
        height: (0, _core.isIE)() ? '60px' : '55px'
      };

      return _react2.default.createElement(
        'div',
        {
          className: [_index2.default.videoControls].join(' '),
          onMouseOut: _this.onMouseOutHandler,
          ref: function ref(e) {
            return _this.container = e;
          },
          style: videoControlsStyle
        },
        _react2.default.createElement(_TimeBar2.default, {
          onMouseMove: _this.showCommentHelperBox,
          seekTime: seekTime,
          onSeekHandler: onSeekHandler
        }),
        _react2.default.createElement(
          'div',
          { className: _index2.default.controlsButtonContainer },
          _react2.default.createElement(
            'div',
            { className: _index2.default.playPauseButton },
            _react2.default.createElement('button', {
              style: { border: 'none' },
              type: 'button',
              className: [_index2.default.floatL, mediaPlayPauseKlass].join(' '),
              onClick: _this.togglePlayPause
            })
          ),
          _react2.default.createElement(_VolumeBar2.default, {
            volumeUpdateHandler: volumeUpdateHandler,
            volume: volume
          }),
          _react2.default.createElement(
            'div',
            {
              className: [_index2.default.floatL, _index2.default.color99, _index2.default.F12, _index2.default.lineHeight20].join(' '),
              style: { width: '120px', marginTop: '1px' }
            },
            currentTimeString
          ),
          _react2.default.createElement(
            'div',
            { className: _index2.default.floatR },
            videoTracks && videoTracks.length > 1 && _react2.default.createElement(
              'div',
              {
                className: _index2.default.controlButton,
                onMouseEnter: _this.showTrackListHandler,
                onMouseLeave: _this.hideTrackListHandler
              },
              _react2.default.createElement('button', {
                style: { border: 'none' },
                type: 'button',
                className: _index2.default.hd
              }),
              showTrackList && _react2.default.createElement(_TracksList2.default, {
                tracks: videoTracks,
                onSelect: onSelectTrack,
                selectedTrack: selectedTrack
              })
            ),
            controlOptions.download && downloadSrc && _react2.default.createElement(
              'div',
              { className: _index2.default.controlButton },
              _react2.default.createElement('a', {
                target: '_blank',
                rel: 'noopener noreferrer',
                style: { border: 'none' },
                type: 'button',
                href: downloadSrc,
                download: downloadSrc,
                className: _index2.default.download
              })
            ),
            controlOptions.fullScreen && _react2.default.createElement(
              'div',
              { className: _index2.default.controlButton },
              _react2.default.createElement('button', {
                style: { border: 'none' },
                type: 'button',
                className: _index2.default.fullScreen,
                onClick: _this.toggleFullscreen
              })
            )
          ),
          _react2.default.createElement('div', { className: _index2.default.clear })
        ),
        commentBox.show ? _react2.default.createElement(_CommentBox2.default, { edit: edit, namespace: namespace }) : null,
        commentHelperBox.show && edit ? _react2.default.createElement(_CommentHelperBox2.default, {
          targetPlayerId: targetPlayerId,
          namespace: namespace,
          onClickHandler: videoPauseAtTimeHandler
        }) : null,
        _react2.default.createElement(_CommentBarDot2.default, {
          comments: comments,
          onMouseIn: _this.commentBarDotOnMouseInHandler,
          onMouseOut: _this.commentBarDotOnMouseOutHandler,
          targetPlayerId: targetPlayerId,
          colorMap: colorMap,
          videoDuration: videoDuration
        })
      );
    };

    _this.showTrackList;
    _this.state = {
      showTrackList: false
    };
    return _this;
  }

  (0, _createClass3.default)(VideoControls, [{
    key: 'exitHandler',
    value: function exitHandler() {
      var pfx = (0, _core.getPrefixes)();
      var that = this;
      var parent = this.container.parentNode.parentNode;
      pfx.forEach(function (prefix) {
        parent.removeEventListener(prefix + 'fullscreenchange', that.exitHandler.bind(that));
      });
    }
  }, {
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
  }]);
  return VideoControls;
}(_react.Component);

VideoControls.propTypes = {
  onVideoPlayed: _propTypes2.default.func,
  updateMediaAttributes: _propTypes2.default.func,
  comments: _propTypes2.default.array,
  isCommentBoxActive: _propTypes2.default.bool,
  showCommentHelperBox: _propTypes2.default.func,
  hideCommentHelperBox: _propTypes2.default.func,
  hideCommentBox: _propTypes2.default.func,
  showCommentBox: _propTypes2.default.func,
  targetPlayerId: _propTypes2.default.string,
  currentTime: _propTypes2.default.number,
  commentBox: _propTypes2.default.object,
  commentHelperBox: _propTypes2.default.object,
  mediaState: _propTypes2.default.oneOf(['PLAY', 'PAUSE']),
  edit: _propTypes2.default.bool,
  volume: _propTypes2.default.number,
  videoTracks: _propTypes2.default.array,
  onSelectTrack: _propTypes2.default.func,
  selectedTrack: _propTypes2.default.number,
  onSeekHandler: _propTypes2.default.func,
  volumeUpdateHandler: _propTypes2.default.func,
  namespace: _propTypes2.default.string,
  videoPauseAtTimeHandler: _propTypes2.default.func,
  controlOptions: _propTypes2.default.func,
  downloadSrc: _propTypes2.default.string,
  videoDuration: _propTypes2.default.number
};


function mapStateToProps(state) {
  return (0, _extends3.default)({}, state, {
    currentTime: state.media.currentTime,
    comments: state.commentPane.activeComments,
    mediaState: state.media.state,
    videoDuration: state.media.duration,
    isCommentBoxActive: state.commentBox.show && !state.commentBox.data.readOnly
  });
}

exports.default = (0, _enhancer.namespaceConnect)(mapStateToProps, _actions.actions)(VideoControls);