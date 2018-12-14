"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = require("../../styles/theme");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoViewer = function (_Component) {
  (0, _inherits3.default)(PhotoViewer, _Component);

  function PhotoViewer() {
    (0, _classCallCheck3.default)(this, PhotoViewer);
    return (0, _possibleConstructorReturn3.default)(this, (PhotoViewer.__proto__ || (0, _getPrototypeOf2.default)(PhotoViewer)).apply(this, arguments));
  }

  (0, _createClass3.default)(PhotoViewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var height = this.props.height;

      var image = new Image();
      image.src = this.props.src;
      var self = this;
      image.onload = function () {
        var imageWidth = this.width;
        var imageHeight = this.height;
        var suffix = "px";
        if (imageHeight > height) {
          imageWidth = "100";
          imageHeight = "100";
          suffix = "%";
        }
        imageWidth += suffix;
        imageHeight += suffix;

        self.imageRef.setAttribute("style", "background-image: url('" + self.props.src + "');\n            background-size: contain;\n            width: " + imageWidth + ";\n            height: " + imageHeight + ";\n            position:absolute;\n            top:50%;\n            left:50%;\n            transform:translate(-50%,-50%);\n            background-repeat: no-repeat;\n            background-position: center;");
        self.setState({
          loaded: true
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var height = this.props.height;

      var containerStyle = {
        width: "100%",
        height: height,
        background: "" + _theme2.default.colors.IVORY,
        position: "relative",
        borderRadius: "8px"
      };

      return _react2.default.createElement(
        "div",
        { style: containerStyle },
        _react2.default.createElement("div", { ref: function ref(e) {
            return _this2.imageRef = e;
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
  height: 200
};
exports.default = PhotoViewer;