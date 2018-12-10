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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ontimeUpdateHandler = function ontimeUpdateHandler() {
  if (!this.video) {
    return;
  }
  if (typeof this.props.updateMediaAttributes !== 'function') {
    return;
  }
  this.props.updateMediaAttributes({
    currentTime: this.video.currentTime
  });
};

var onloadstartHandler = function onloadstartHandler() {
  if (!this.video) {
    return;
  }
  this.showLoading();
};

var onendedHandler = function onendedHandler() {
  if (!this.video) {
    return;
  }
  this.video.currentTime = 0;
  this.video.pause();
  if (typeof this.props.onVideoEnded === 'function') {
    this.props.onVideoEnded();
  }
  if (typeof this.props.updateMediaAttributes !== 'function') {
    return;
  }

  this.props.updateMediaAttributes({
    state: 'PAUSE',
    currentTime: 0
  });
};

var canplayHandler = function canplayHandler() {
  if (!this.video) {
    return;
  }
  this.hideLoading();
  if (typeof this.props.updateMediaAttributes !== 'function') {
    return;
  }

  this.props.updateMediaAttributes({
    currentTime: this.video.currentTime
  });
};

var onloadeddataHandler = function onloadeddataHandler() {
  if (!this.video) {
    return;
  }
  this.hideLoading();
  if (typeof this.props.updateMediaAttributes === 'function') {
    this.props.updateMediaAttributes({
      duration: this.video.duration,
      videoWidth: this.video.parentNode.clientWidth
    });
  }
  if (typeof this.props.onVideoLoaded === 'function') {
    this.props.onVideoLoaded();
  }
};

var Video = function (_Component) {
  (0, _inherits3.default)(Video, _Component);

  function Video(props) {
    (0, _classCallCheck3.default)(this, Video);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Video.__proto__ || (0, _getPrototypeOf2.default)(Video)).call(this, props));

    _this.togglePlayPause = function () {
      if (_this.props.disableToggle) {
        return;
      }
      if (!_this.video.paused) {
        _this.video.pause();
        _this.props.updateMediaAttributes({
          state: 'PAUSE'
        });
      } else {
        _this.video.play();
        _this.props.updateMediaAttributes({
          currentTime: _this.video.currentTime,
          state: 'PLAY'
        });
      }
    };

    _this.play = function () {
      _this.video.play();
      if (typeof _this.props.updateMediaAttributes === 'function') {
        _this.props.updateMediaAttributes({
          state: 'PLAY'
        });
      }
    };

    _this.pause = function () {
      _this.video.pause();
      if (typeof _this.props.updateMediaAttributes === 'function') {
        _this.props.updateMediaAttributes({
          state: 'PAUSE'
        });
      }
    };

    _this.showLoading = function () {
      _this.setState({
        loading: true
      });
    };

    _this.hideLoading = function () {
      _this.setState({
        loading: false
      });
    };

    _this.updateVideoState = function (mediaState) {
      if (!_this.video) {
        return;
      }
      switch (mediaState) {
        case 'PLAY':
          _this.play();
          break;
        case 'PAUSE':
          _this.pause();
          break;
      }
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  (0, _createClass3.default)(Video, [{
    key: 'isPaused',
    value: function isPaused() {
      return this.video.paused;
    }
  }, {
    key: 'moveToTime',
    value: function moveToTime(time) {
      this.video.currentTime = time;
    }
  }, {
    key: 'getDuration',
    value: function getDuration() {
      return this.video.duration;
    }
  }, {
    key: 'getCurrentTime',
    value: function getCurrentTime() {
      return this.video.currentTime;
    }
  }, {
    key: 'setVolume',
    value: function setVolume(volume) {
      this.video.volume = volume;
    }
  }, {
    key: 'getVolume',
    value: function getVolume() {
      return this.video.volume;
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      this.video.removeEventListener('timeupdate', ontimeUpdateHandler.bind(this));
      this.video.removeEventListener('loadstart', onloadstartHandler.bind(this));
      this.video.removeEventListener('ended', onendedHandler.bind(this));
      this.video.removeEventListener('canplay', canplayHandler.bind(this));
      this.video.removeEventListener('loadeddata', onloadeddataHandler.bind(this));
    }
  }, {
    key: 'attachEvents',
    value: function attachEvents() {
      this.video.addEventListener('timeupdate', ontimeUpdateHandler.bind(this));
      this.video.addEventListener('loadstart', onloadstartHandler.bind(this));
      this.video.addEventListener('ended', onendedHandler.bind(this));
      this.video.addEventListener('loadeddata', onloadeddataHandler.bind(this));
      this.video.addEventListener('canplay', canplayHandler.bind(this));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.attachEvents();
      this.video.volume = 0.5;
      if (this.props.mute) {
        this.video.volume = 0;
      }
      if (typeof this.props.onRenderComplete === 'function') {
        this.props.onRenderComplete();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.currentTime !== this.props.currentTime) return true;
      if (nextProps.mediaState !== this.props.mediaState) return true;
      if (nextProps.src !== this.props.src) return true;
      if (nextState.loading !== this.state.loading) return true;else return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          src = _props.src,
          hidemedia = _props.hidemedia,
          heightAuto = _props.heightAuto,
          mediaState = _props.mediaState;

      this.updateVideoState(mediaState);
      var loading = this.state.loading;

      var kClass = void 0;
      if (hidemedia) {
        kClass = _index2.default.hide;
      }
      return _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '100%' } },
        loading && _react2.default.createElement('div', { className: _index2.default.loading }),
        _react2.default.createElement('video', {
          id: id,
          ref: function ref(e) {
            return _this2.video = e;
          },
          seek: '1',
          style: heightAuto ? { height: 'auto' } : null,
          className: [_index2.default.media, kClass].join(' '),
          control: 'false',
          preload: 'auto',
          src: src,
          onWaiting: this.showLoading,
          onPlaying: this.hideLoading,
          onClick: this.togglePlayPause
        })
      );
    }
  }]);
  return Video;
}(_react.Component);

Video.propTypes = {
  disableToggle: _propTypes2.default.string,
  updateMediaAttributes: _propTypes2.default.func,
  mute: _propTypes2.default.string,
  onRenderComplete: _propTypes2.default.func,
  currentTime: _propTypes2.default.number,
  src: _propTypes2.default.string,
  id: _propTypes2.default.string,
  heightAuto: _propTypes2.default.string,
  hidemedia: _propTypes2.default.bool,
  mediaState: _propTypes2.default.oneOf(['PLAY', 'PAUSE'])
};
exports.default = Video;