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

var _theme = require('../../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoViewer = function (_Component) {
  (0, _inherits3.default)(PhotoViewer, _Component);

  function PhotoViewer() {
    (0, _classCallCheck3.default)(this, PhotoViewer);
    return (0, _possibleConstructorReturn3.default)(this, (PhotoViewer.__proto__ || (0, _getPrototypeOf2.default)(PhotoViewer)).apply(this, arguments));
  }

  (0, _createClass3.default)(PhotoViewer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var height = this.props.height;

      var width = this.containerRef.clientWidth;
      var containerBorderRadius = this.containerRef.style.borderRadius;
      var image = new Image();
      image.src = this.props.src;
      var self = this;
      image.onload = function () {
        var imageHeight = this.height;
        var imageWidth = this.width;
        if (imageHeight >= height) {
          imageHeight = height;
        }
        if (imageWidth > width) {
          imageWidth = width + 'px';
        } else {
          imageWidth = 'auto';
        }

        imageHeight += 'px';

        self.imageRef.setAttribute('src', self.props.src);
        self.imageRef.setAttribute('style', 'display: block;\n         width: ' + imageWidth + ';\n         height:' + imageHeight + ';\n         position:absolute;\n         left: 50%;\n         top: 50%;\n         transform: translate(-50%,-50%);\n         border-radius: ' + (containerBorderRadius ? containerBorderRadius : 0) + '\n         ');
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          height = _props.height,
          style = _props.style;

      var containerStyle = (0, _extends3.default)({}, style, {
        width: '100%',
        height: height,
        background: '' + _theme2.default.colors.IVORY,
        position: 'relative'
      });

      return _react2.default.createElement(
        'div',
        { style: containerStyle, ref: function ref(e) {
            return _this2.containerRef = e;
          } },
        _react2.default.createElement('img', { ref: function ref(e) {
            return _this2.imageRef = e;
          } })
      );
    }
  }]);
  return PhotoViewer;
}(_react.Component);

PhotoViewer.propTypes = {
  src: _propTypes2.default.string.isRequired,
  height: _propTypes2.default.number,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string
};
PhotoViewer.defaultProps = {
  height: 200
};
exports.default = PhotoViewer;