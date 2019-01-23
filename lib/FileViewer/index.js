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

var _drivers = require('./drivers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileViewer = function (_Component) {
  (0, _inherits3.default)(FileViewer, _Component);

  function FileViewer() {
    (0, _classCallCheck3.default)(this, FileViewer);
    return (0, _possibleConstructorReturn3.default)(this, (FileViewer.__proto__ || (0, _getPrototypeOf2.default)(FileViewer)).apply(this, arguments));
  }

  (0, _createClass3.default)(FileViewer, [{
    key: 'getDriver',
    value: function getDriver() {
      var _props = this.props,
          passedType = _props.type,
          _props$src = _props.src,
          src = _props$src === undefined ? '' : _props$src;

      var type = passedType || src.split('.').pop().split(/#|\?/)[0];
      switch (type) {
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'bmp':
        case 'png':
          {
            return _drivers.PhotoViewer;
          }
        case 'pdf':
          {
            return _drivers.PdfPlayer;
          }
        case 'mp3':
        case 'mp4':
        case 'webm':
          {
            return _drivers.RaPlayer;
          }
        default:
          {
            return _drivers.UnsupportedViewer;
          }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var Driver = this.getDriver();
      return _react2.default.createElement(Driver, this.props);
    }
  }]);
  return FileViewer;
}(_react.Component);

FileViewer.propTypes = {
  src: _propTypes2.default.string,
  type: _propTypes2.default.string
};

exports.default = FileViewer;