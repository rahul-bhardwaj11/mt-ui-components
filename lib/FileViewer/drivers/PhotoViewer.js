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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoViewer = function (_Component) {
  (0, _inherits3.default)(PhotoViewer, _Component);

  function PhotoViewer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PhotoViewer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PhotoViewer.__proto__ || (0, _getPrototypeOf2.default)(PhotoViewer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loaded: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PhotoViewer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var image = new Image();
      image.src = this.props.src;
      image.onload = function () {
        _this2.imageRef.setAttribute('style', 'background-image: url(\'' + _this2.props.src + '\');background-size: contain;width: 100%;height: 100%');
        _this2.setState({
          loaded: true
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var loaded = this.state.loaded;
      var _props = this.props,
          width = _props.width,
          height = _props.height;

      var containerStyle = {
        width: width,
        height: height
      };

      return _react2.default.createElement(
        'div',
        { style: containerStyle },
        !loaded ? _react2.default.createElement(
          'svg',
          { width: width, height: height, viewBox: '0 0 ' + width + ' ' + height },
          _react2.default.createElement('rect', { width: width, height: height, rx: '10', ry: '10', fill: '#CCC' })
        ) : null,
        _react2.default.createElement('div', { ref: function ref(e) {
            return _this3.imageRef = e;
          } })
      );
    }
  }]);
  return PhotoViewer;
}(_react.Component);

PhotoViewer.propTypes = {
  src: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number
};
PhotoViewer.defaultProps = {
  width: 200,
  height: 200
};
exports.default = PhotoViewer;