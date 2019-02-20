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

var TimeBar = function (_Component) {
  (0, _inherits3.default)(TimeBar, _Component);

  function TimeBar(props) {
    (0, _classCallCheck3.default)(this, TimeBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TimeBar.__proto__ || (0, _getPrototypeOf2.default)(TimeBar)).call(this, props));

    _this.setVideoTime = _this.setVideoTime.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TimeBar, [{
    key: 'setVideoTime',
    value: function setVideoTime() {
      if (this.seekBar) {
        this.props.onSeekHandler(parseInt(this.seekBar.value) / 100);
      }
    }
  }, {
    key: 'attachEvent',
    value: function attachEvent() {
      this.seekBar.addEventListener('input', this.setVideoTime.bind(this));
      this.seekBar.addEventListener('change', this.setVideoTime.bind(this));
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

      var _props = this.props,
          seekTime = _props.seekTime,
          onMouseMove = _props.onMouseMove,
          className = _props.className;

      var containerHeight = (0, _core.isIE)() ? 15 : 4;
      var seekBarStyle = {
        backgroundImage: !(0, _core.isIE)() ? '-webkit-gradient(linear, left top, right top, color-stop(' + seekTime / 100 + ', #ff8a16), color-stop(' + seekTime / 100 + ', #ffffff))' : null,
        height: !(0, _core.isIE)() ? '100%' : 'auto'
      },
          containerStyle = {
        height: containerHeight + 'px'
      };
      return _react2.default.createElement(
        'div',
        { style: containerStyle, className: _index2.default.container },
        _react2.default.createElement('input', {
          type: 'range',
          ref: function ref(e) {
            return _this2.seekBar = e;
          },
          value: seekTime,
          readOnly: true,
          min: '0',
          max: '100',
          step: '0.01',
          className: [_index2.default.marginR12, _index2.default.marginT14, _index2.default.rangeBar, className].join(' '),
          onMouseMove: onMouseMove,
          style: seekBarStyle
        })
      );
    }
  }]);
  return TimeBar;
}(_react.Component);

TimeBar.propTypes = {
  onSeekHandler: _propTypes2.default.func,
  seekTime: _propTypes2.default.number,
  onMouseMove: _propTypes2.default.func,
  className: _propTypes2.default.string
};
exports.default = TimeBar;