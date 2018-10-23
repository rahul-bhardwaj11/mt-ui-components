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

var _core = require('../../utils/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeBar = function (_Component) {
  (0, _inherits3.default)(VolumeBar, _Component);

  function VolumeBar(props) {
    (0, _classCallCheck3.default)(this, VolumeBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (VolumeBar.__proto__ || (0, _getPrototypeOf2.default)(VolumeBar)).call(this, props));

    _this.setVideoVolume = _this.setVideoVolume.bind(_this);
    _this.mute = _this.mute.bind(_this);
    var initialState = {
      volume: props.volume
    };
    _this.state = initialState;
    return _this;
  }

  (0, _createClass3.default)(VolumeBar, [{
    key: 'mute',
    value: function mute() {
      var volume = 0;
      if (!this.state.volume) {
        volume = 0.5;
      }
      this.setState({
        volume: volume
      });
      this.props.volumeUpdateHandler(volume);
    }
  }, {
    key: 'setVideoVolume',
    value: function setVideoVolume() {
      var volume = this.volumeBar.value;
      this.setState({
        volume: volume
      });
      this.props.volumeUpdateHandler(volume);
    }
  }, {
    key: 'attachEvent',
    value: function attachEvent() {
      this.volumeBar.addEventListener('change', this.setVideoVolume.bind(this));
      this.volumeBar.addEventListener('input', this.setVideoVolume.bind(this));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.attachEvent();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var volume = this.state.volume;

      var volumeKlass = _index2.default.volume;
      if (!volume) {
        volumeKlass = _index2.default.mute;
      }
      var volumeBarStyle = {
        height: !(0, _core.isIE)() ? '4px' : 'auto',
        top: (0, _core.isIE)() ? '-4px' : '8px',
        background: (0, _core.isIE)() ? 'transparent' : '#fff'
      };
      // let parentStyle = {
      // 	top: !isIE() ? '8px': '-4px'
      // };
      return _react2.default.createElement(
        'div',
        { className: _index2.default.soundContainer },
        _react2.default.createElement('button', {
          style: { border: 'none' },
          type: 'button',
          className: [_index2.default.floatL, volumeKlass, _index2.default.marginR12].join(' '),
          onClick: this.mute
        }),
        _react2.default.createElement(
          'div',
          { className: _index2.default.volumeBarParent },
          _react2.default.createElement('input', {
            type: 'range',
            className: [_index2.default.volumeBar, _index2.default.rangeBar].join(' '),
            ref: function ref(e) {
              return _this2.volumeBar = e;
            },
            min: '0',
            max: '1',
            step: '0.1',
            defaultValue: volume,
            style: volumeBarStyle
          })
        )
      );
    }
  }]);
  return VolumeBar;
}(_react.Component);

VolumeBar.propTypes = {
  volume: _propTypes2.default.number,
  volumeUpdateHandler: _propTypes2.default.func
};
exports.default = VolumeBar;