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

var TracksList = function (_Component) {
  (0, _inherits3.default)(TracksList, _Component);

  function TracksList() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TracksList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TracksList.__proto__ || (0, _getPrototypeOf2.default)(TracksList)).call.apply(_ref, [this].concat(args))), _this), _this.onClickHandler = function (selectedIndex) {
      _this.props.onSelect(selectedIndex);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TracksList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tracks = _props.tracks,
          selectedTrack = _props.selectedTrack;

      return _react2.default.createElement(
        'ul',
        { className: _index2.default.trackContainer },
        /* eslint-disable*/
        tracks.map(function (track, i) {
          var kClass = '';
          if (selectedTrack === i) {
            kClass = _index2.default.active;
          }
          return _react2.default.createElement(
            'li',
            {
              className: [_index2.default.eachTrack, kClass].join(' '),
              key: i,
              onClick: _this2.onClickHandler.bind(_this2, i)
            },
            track.label
          );
        })
      );
    }
  }]);
  return TracksList;
}(_react.Component);

TracksList.propTypes = {
  onSelect: _propTypes2.default.func,
  tracks: _propTypes2.default.array,
  selectedTrack: _propTypes2.default.number
};
exports.default = TracksList;