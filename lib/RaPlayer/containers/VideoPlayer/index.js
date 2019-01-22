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

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var showControls = (0, _symbol2.default)('showControls');
var hideControls = (0, _symbol2.default)('hideControls');
var onSelectTrack = (0, _symbol2.default)('onSelectTrack');
var onSeekHandler = (0, _symbol2.default)('onSeekHandler');
var volumeUpdateHandler = (0, _symbol2.default)('volumeUpdateHandler');
var onVideoLoadedHandler = (0, _symbol2.default)('onVideoLoadedHandler');
var onVideoEndedHandler = (0, _symbol2.default)('onVideoEndedHandler');
var onVideoPlayedHandler = (0, _symbol2.default)('onVideoPlayedHandler');
var videoPauseAtTimeHandler = (0, _symbol2.default)('videoPauseAtTimeHandler');
var updateMediaAttributes = (0, _symbol2.default)('updateMediaAttributes');
var togglePlayPause = (0, _symbol2.default)('togglePlayPause');
var videoPlayer = (0, _symbol2.default)('videoPlayer');
var container = (0, _symbol2.default)('container');

var VideoPlayerContainer = function (_Component) {
  (0, _inherits3.default)(VideoPlayerContainer, _Component);

  function VideoPlayerContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, VideoPlayerContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = VideoPlayerContainer.__proto__ || (0, _getPrototypeOf2.default)(VideoPlayerContainer)).call.apply(_ref, [this].concat(args))), _this), _this[updateMediaAttributes] = _this.props.updateMediaAttributes.bind(_this.props), _this.state = {
      selectedTrack: _this.props.defaultTrack
    }, _this.getCurrentTime = function () {
      return _this[videoPlayer].getCurrentTime();
    }, _this.play = function () {
      _this[videoPlayer].play();
    }, _this.pause = function () {
      _this[videoPlayer].pause();
    }, _this.seekToTime = function (time) {
      _this[videoPlayer].seekToTime(time);
    }, _this[togglePlayPause] = function () {
      if (_this[videoPlayer]) {
        _this[videoPlayer].togglePlayPause();
      }
    }, _this[showControls] = function () {
      _this.setState({
        controls: true
      });
    }, _this[hideControls] = function (event) {
      var e = event.toElement || event.relatedTarget;
      if (_this[container].contains(e)) {
        return;
      }
      // this.setState({
      //   controls: false
      // });
    }, _this[onSelectTrack] = function (selectedTrack) {
      var currentTime = _this.props.currentTime;
      var isPaused = _this[videoPlayer].isPaused();
      _this.setState({
        selectedTrack: selectedTrack
      });
      setTimeout(function () {
        _this[videoPlayer].seekToTime(currentTime);
        if (!isPaused) {
          _this[videoPlayer].play();
          _this.setState({
            showPlayButton: false
          });
        }
      }, 500);
    }, _this[onSeekHandler] = function (seekbarValue) {
      _this[videoPlayer].moveTo(seekbarValue);
    }, _this[volumeUpdateHandler] = function (volume) {
      _this[videoPlayer].updateVolume(volume);
    }, _this[onVideoLoadedHandler] = function () {
      var showPlayButton = _this[videoPlayer].isPaused();
      _this.setState({
        showPlayButton: showPlayButton,
        controls: false
      });
    }, _this[onVideoEndedHandler] = function () {
      _this.setState({
        showPlayButton: true,
        controls: false
      });
    }, _this[onVideoPlayedHandler] = function () {
      _this.setState({
        showPlayButton: false,
        controls: true
      });
    }, _this[videoPauseAtTimeHandler] = function (time) {
      _this[videoPlayer].pauseAtTime(time);
    }, _this.render = function () {
      var _cs;

      var _this$props = _this.props,
          primaryTracks = _this$props.primaryTracks,
          secondaryTracks = _this$props.secondaryTracks,
          fullScreen = _this$props.fullScreen,
          edit = _this$props.edit,
          id = _this$props.id,
          secondaryId = _this$props.secondaryId,
          onRenderComplete = _this$props.onRenderComplete,
          showControlsOnly = _this$props.showControlsOnly,
          controlOptions = _this$props.controlOptions,
          downloadSrc = _this$props.downloadSrc,
          currentTime = _this$props.currentTime,
          mediaState = _this$props.mediaState,
          className = _this$props.className,
          videoControlsClassName = _this$props.videoControlsClassName;
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
            return _this[container] = e;
          },
          className: [_index2.default.videoContainer, _index2.default.posRel, fullScreen ? _index2.default.fullScreen : '', className].join(' '),
          onMouseOver: _this[showControls],
          onMouseOut: _this[hideControls]
        },
        showPlayButton && !showControlsOnly && _react2.default.createElement('div', { className: _index2.default.play, onClick: _this[togglePlayPause] }),
        _react2.default.createElement(_Player2.default, {
          ref: function ref(e) {
            return _this[videoPlayer] = e;
          },
          src: primaryTracks[selectedTrack].src,
          secondarySrc: secondaryTracks && secondaryTracks[0] && secondaryTracks[0].src,
          updateMediaAttributes: _this[updateMediaAttributes],
          onVideoLoaded: _this[onVideoLoadedHandler],
          onVideoEnded: _this[onVideoEndedHandler],
          onVideoPlayed: _this[onVideoPlayedHandler],
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
            className: (0, _classnames2.default)(videoControlsClassName, _index2.default.videoControls, (_cs = {}, (0, _defineProperty3.default)(_cs, _index2.default.showControls, controls), (0, _defineProperty3.default)(_cs, _index2.default.hideControls, !controls), _cs))
          },
          _react2.default.createElement(_VideoControls2.default, {
            edit: edit,
            targetPlayerId: id,
            videoTracks: primaryTracks,
            downloadSrc: downloadSrcLink,
            selectedTrack: selectedTrack,
            onSelectTrack: _this[onSelectTrack],
            onVideoPlayed: _this[onVideoPlayedHandler],
            onSeekHandler: _this[onSeekHandler],
            volumeUpdateHandler: _this[volumeUpdateHandler],
            videoPauseAtTimeHandler: _this[videoPauseAtTimeHandler],
            controlOptions: controlOptions,
            currentTime: currentTime
          })
        )
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // Public Methods


  return VideoPlayerContainer;
}(_react.Component);

VideoPlayerContainer.propTypes = {
  updateMediaAttributes: _propTypes2.default.func,
  defaultTrack: _propTypes2.default.number,
  currentTime: _propTypes2.default.number,
  primaryTracks: _propTypes2.default.array.isRequired,
  secondaryTracks: _propTypes2.default.array,
  fullScreen: _propTypes2.default.bool,
  edit: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  secondaryId: _propTypes2.default.string,
  onRenderComplete: _propTypes2.default.func,
  showControlsOnly: _propTypes2.default.bool,
  controlOptions: _propTypes2.default.object,
  downloadSrc: _propTypes2.default.bool,
  mediaState: _propTypes2.default.string,
  videoControlsClassName: _propTypes2.default.string,
  className: _propTypes2.default.string
};


function mapStateToProps(state) {
  return {
    fullScreen: state.media.fullScreen,
    currentTime: state.media.currentTime,
    mediaState: state.media.state,
    defaultTrack: state.defaultTrack,
    videoControlsClassName: state.videoControlsClassName
  };
}

exports.default = (0, _providerHelper.connect)(mapStateToProps, _actions.actions)(VideoPlayerContainer);