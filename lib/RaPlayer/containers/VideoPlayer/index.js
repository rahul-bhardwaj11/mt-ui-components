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

var _actions = require('../../actions');

var _providerHelper = require('../../utils/providerHelper');

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

var _Player = require('../../components/Player');

var _Player2 = _interopRequireDefault(_Player);

var _VideoControls = require('../VideoControls');

var _VideoControls2 = _interopRequireDefault(_VideoControls);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var VideoPlayerContainer = function (_Component) {
  (0, _inherits3.default)(VideoPlayerContainer, _Component);

  function VideoPlayerContainer(props) {
    (0, _classCallCheck3.default)(this, VideoPlayerContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (VideoPlayerContainer.__proto__ || (0, _getPrototypeOf2.default)(VideoPlayerContainer)).call(this, props));

    _this.render = function () {
      var _this$props = _this.props,
          primaryTracks = _this$props.primaryTracks,
          secondaryTracks = _this$props.secondaryTracks,
          fullScreen = _this$props.fullScreen,
          edit = _this$props.edit,
          id = _this$props.id,
          secondaryId = _this$props.secondaryId,
          onRenderComplete = _this$props.onRenderComplete,
          showControlsOnly = _this$props.showControlsOnly,
          namespace = _this$props.namespace,
          controlOptions = _this$props.controlOptions,
          downloadSrc = _this$props.downloadSrc,
          currentTime = _this$props.currentTime,
          mediaState = _this$props.mediaState,
          className = _this$props.className;
      var _this$state = _this.state,
          controls = _this$state.controls,
          selectedTrack = _this$state.selectedTrack,
          showPlayButton = _this$state.showPlayButton;

      controls = showControlsOnly || controls;
      var downloadSrcLink = primaryTracks[selectedTrack].src;
      if (showControlsOnly) {
        downloadSrcLink = downloadSrc ? downloadSrc : undefined;
      }
      return _react2.default.createElement(
        'div',
        {
          ref: function ref(e) {
            return _this.container = e;
          },
          className: (0, _classnames2.default)(_this.props.className, [_index2.default.videoContainer, _index2.default.posRel, fullScreen ? _index2.default.fullScreen : ''].join(' ')),
          onMouseOver: _this.showControls,
          onMouseOut: _this.hideControls
        },
        showPlayButton && !showControlsOnly && _react2.default.createElement('div', { className: _index2.default.play, onClick: _this.togglePlayPause }),
        _react2.default.createElement(_Player2.default, {
          ref: function ref(e) {
            return _this.videoPlayer = e;
          },
          src: primaryTracks[selectedTrack].src,
          secondarySrc: secondaryTracks && secondaryTracks[0] && secondaryTracks[0].src,
          updateMediaAttributes: _this.updateMediaAttributes,
          onVideoLoaded: _this.onVideoLoadedHandler,
          onVideoEnded: _this.onVideoEndedHandler,
          onVideoPlayed: _this.onVideoPlayedHandler,
          onRenderComplete: onRenderComplete,
          hidemedia: showControlsOnly,
          currentTime: currentTime,
          id: id,
          secondaryId: secondaryId,
          mediaState: mediaState
        }),
        _react2.default.createElement(
          'div',
          {
            className: [_index2.default.videoControls, controls ? _index2.default.showControls : _index2.default.hideControls].join(' ')
          },
          _react2.default.createElement(_VideoControls2.default, {
            edit: edit,
            targetPlayerId: id,
            videoTracks: primaryTracks,
            downloadSrc: downloadSrcLink,
            selectedTrack: selectedTrack,
            onSelectTrack: _this.onSelectTrack,
            onVideoPlayed: _this.onVideoPlayedHandler,
            onSeekHandler: _this.onSeekHandler,
            volumeUpdateHandler: _this.volumeUpdateHandler,
            videoPauseAtTimeHandler: _this.videoPauseAtTimeHandler,
            controlOptions: controlOptions,
            namespace: namespace,
            currentTime: currentTime
          })
        )
      );
    };

    _this.state = {};
    _this.showControls = _this.showControls.bind(_this);
    _this.hideControls = _this.hideControls.bind(_this);
    _this.onSelectTrack = _this.onSelectTrack.bind(_this);
    _this.onSeekHandler = _this.onSeekHandler.bind(_this);
    _this.volumeUpdateHandler = _this.volumeUpdateHandler.bind(_this);
    _this.onVideoLoadedHandler = _this.onVideoLoadedHandler.bind(_this);
    _this.onVideoEndedHandler = _this.onVideoEndedHandler.bind(_this);
    _this.onVideoPlayedHandler = _this.onVideoPlayedHandler.bind(_this);
    _this.videoPauseAtTimeHandler = _this.videoPauseAtTimeHandler.bind(_this);
    _this.updateMediaAttributes = _this.props.updateMediaAttributes.bind(_this.props);
    _this.togglePlayPause = _this.togglePlayPause.bind(_this);
    _this.setTrackOnStart();
    return _this;
  }

  /* 
    	Later we can optimize this method to check for best suitable track for end uses
    */

  (0, _createClass3.default)(VideoPlayerContainer, [{
    key: 'setTrackOnStart',
    value: function setTrackOnStart() {
      var selectedTrack = 0;
      var defaultTrack = this.props.primaryTracks.find(function (track) {
        return track.default;
      }) || this.props.primaryTracks[0];
      this.state = (0, _extends3.default)({}, this.state, {
        selectedTrack: this.props.primaryTracks.indexOf(defaultTrack)
      });
    }
  }, {
    key: 'togglePlayPause',
    value: function togglePlayPause() {
      if (this.videoPlayer) {
        this.videoPlayer.togglePlayPause();
      }
    }
  }, {
    key: 'showControls',
    value: function showControls() {
      this.setState({
        controls: true
      });
    }
  }, {
    key: 'hideControls',
    value: function hideControls(event) {
      var e = event.toElement || event.relatedTarget;
      if (this.container.contains(e)) {
        return;
      }
      this.setState({
        controls: false
      });
    }
  }, {
    key: 'onSelectTrack',
    value: function onSelectTrack(selectedTrack) {
      var _this2 = this;

      var currentTime = this.props.currentTime;
      var isPaused = this.videoPlayer.isPaused();
      this.setState({
        selectedTrack: selectedTrack
      });
      setTimeout(function () {
        _this2.videoPlayer.seekToTime(currentTime);
        if (!isPaused) {
          _this2.videoPlayer.play();
          _this2.setState({
            showPlayButton: false
          });
        }
      }, 500);
    }
  }, {
    key: 'onSeekHandler',
    value: function onSeekHandler(seekbarValue) {
      this.videoPlayer.moveTo(seekbarValue);
    }
  }, {
    key: 'volumeUpdateHandler',
    value: function volumeUpdateHandler(volume) {
      this.videoPlayer.updateVolume(volume);
    }
  }, {
    key: 'onVideoLoadedHandler',
    value: function onVideoLoadedHandler() {
      var showPlayButton = this.videoPlayer.isPaused();
      this.setState({
        showPlayButton: showPlayButton,
        controls: false
      });
    }
  }, {
    key: 'onVideoEndedHandler',
    value: function onVideoEndedHandler() {
      this.setState({
        showPlayButton: true,
        controls: false
      });
    }
  }, {
    key: 'onVideoPlayedHandler',
    value: function onVideoPlayedHandler() {
      this.setState({
        showPlayButton: false,
        controls: true
      });
    }
  }, {
    key: 'videoPauseAtTimeHandler',
    value: function videoPauseAtTimeHandler(time) {
      this.videoPlayer.pauseAtTime(time);
    }
  }]);
  return VideoPlayerContainer;
}(_react.Component);

/* eslint-disable */

function mapStateToProps(state) {
  return {
    fullScreen: state.media.fullScreen,
    currentTime: state.media.currentTime,
    mediaState: state.media.state
  };
}

exports.default = (0, _providerHelper.connect)(mapStateToProps, _actions.actions)(VideoPlayerContainer);