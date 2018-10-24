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

var _index3 = require('../../components/Draggable/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../../components/Video/index');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Player = function (_Component) {
  (0, _inherits3.default)(Player, _Component);

  function Player() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Player);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Player.__proto__ || (0, _getPrototypeOf2.default)(Player)).call.apply(_ref, [this].concat(args))), _this), _this.togglePlayPause = function () {
      _this.props.onVideoPlayed();
      if (!_this.video.isPaused()) {
        _this.video.pause();
        if (_this.videoInset) {
          _this.videoInset.pause();
        }
      } else {
        _this.video.play();
        if (_this.videoInset) {
          _this.videoInset.play();
        }
      }
    }, _this.onVideoLoadedHandler = function () {
      _this.props.onVideoLoaded();
      if (_this.props.hidemedia) {
        return;
      }
    }, _this.onVideoEndedHandler = function () {
      _this.props.onVideoLoaded();
      if (_this.props.hidemedia) {
        return;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Player, [{
    key: 'pause',
    value: function pause() {
      this.video.pause();
      if (this.videoInset) {
        this.videoInset.pause();
      }
    }
  }, {
    key: 'play',
    value: function play() {
      this.video.play();
      if (this.videoInset) {
        this.videoInset.play();
      }
    }
  }, {
    key: 'getCurrentTime',
    value: function getCurrentTime() {
      return this.video.getCurrentTime();
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      this.video.unbind();
      if (this.videoInset) {
        this.videoInset.unbind();
      }
    }
  }, {
    key: 'pauseAtTime',
    value: function pauseAtTime(time) {
      this.video.moveToTime(time);
      this.video.pause();
      if (this.videoInset) {
        this.videoInset.moveToTime(time);
        this.videoInset.pause();
      }
    }
  }, {
    key: 'moveTo',
    value: function moveTo(value) {
      var time = this.video.getDuration() * value;
      this.video.moveToTime(time);
      if (this.videoInset) {
        this.videoInset.moveToTime(time);
      }
    }
  }, {
    key: 'seekToTime',
    value: function seekToTime(time) {
      this.video.moveToTime(time);
      if (this.videoInset) {
        this.videoInset.moveToTime(time);
      }
    }
  }, {
    key: 'updateVolume',
    value: function updateVolume(volume) {
      this.video.setVolume(volume);
    }
  }, {
    key: 'isPaused',
    value: function isPaused() {
      return this.video.isPaused();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          secondaryId = _props.secondaryId,
          src = _props.src,
          secondarySrc = _props.secondarySrc,
          updateMediaAttributes = _props.updateMediaAttributes,
          onRenderComplete = _props.onRenderComplete,
          hidemedia = _props.hidemedia,
          currentTime = _props.currentTime,
          mediaState = _props.mediaState;

      return _react2.default.createElement(
        'div',
        { onClick: this.togglePlayPause, className: _index2.default.playerContainer },
        _react2.default.createElement(_index6.default, {
          src: src,
          updateMediaAttributes: updateMediaAttributes,
          ref: function ref(e) {
            return _this2.video = e;
          },
          currentTime: currentTime,
          id: id,
          hidemedia: hidemedia,
          mediaState: mediaState,
          disableToggle: 'true',
          onVideoLoaded: this.onVideoLoadedHandler,
          onVideoEnded: this.onVideoEndedHandler,
          onRenderComplete: onRenderComplete
        }),
        secondarySrc && _react2.default.createElement(
          _index4.default,
          null,
          _react2.default.createElement(
            'div',
            { style: { width: '140px' } },
            _react2.default.createElement(_index6.default, {
              ref: function ref(e) {
                return _this2.videoInset = e;
              },
              src: secondarySrc,
              currentTime: currentTime,
              id: secondaryId,
              disableToggle: 'true',
              mute: 'true',
              heightAuto: 'true'
            })
          )
        )
      );
    }
  }]);
  return Player;
}(_react.Component);

Player.propTypes = {
  onVideoPlayed: _propTypes2.default.func,
  onVideoLoaded: _propTypes2.default.func,
  hidemedia: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  secondaryId: _propTypes2.default.string,
  src: _propTypes2.default.string,
  secondarySrc: _propTypes2.default.string,
  updateMediaAttributes: _propTypes2.default.func,
  onRenderComplete: _propTypes2.default.func,
  currentTime: _propTypes2.default.number,
  mediaState: _propTypes2.default.oneOf(["PLAY", "PAUSE"])
};
exports.default = Player;