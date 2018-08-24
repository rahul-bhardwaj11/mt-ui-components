"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOADER_TYPE = exports.LOADING_SIZE = undefined;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _css = require("./css.js");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOADING_SIZE = exports.LOADING_SIZE = {
  sizeBig: "big",
  sizeXSmall: "xsmall",
  sizeSmall: "small"
};

var LOADER_TYPE = exports.LOADER_TYPE = {
  Small: "smallPageLoadingScreen",
  Full: "fullPageloadingScreen"
};

var Loader = function (_Component) {
  (0, _inherits3.default)(Loader, _Component);

  function Loader() {
    (0, _classCallCheck3.default)(this, Loader);
    return (0, _possibleConstructorReturn3.default)(this, (Loader.__proto__ || (0, _getPrototypeOf2.default)(Loader)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loader, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          message = _props.message,
          size = _props.size,
          type = _props.type,
          vCenter = _props.vCenter;

      var wrapperClasses = (0, _classnames3.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, LOADER_TYPE[type], true), (0, _defineProperty3.default)(_classnames, "loader", true), _classnames), className);
      return _react2.default.createElement(
        _css2.default,
        { className: wrapperClasses },
        _react2.default.createElement(
          "div",
          { className: "loadingHeading" },
          this.props.loadingMessage
        ),
        _react2.default.createElement(
          "div",
          { className: (0, _classnames3.default)("spinner", LOADING_SIZE[size], { centerDiv: vCenter }) },
          _react2.default.createElement("div", null),
          _react2.default.createElement("div", null),
          _react2.default.createElement("div", null),
          _react2.default.createElement("div", null)
        ),
        _react2.default.createElement(
          "p",
          null,
          message
        )
      );
    }
  }]);
  return Loader;
}(_react.Component);

Loader.propTypes = {
  className: _propTypes2.default.string,
  type: _propTypes2.default.oneOf((0, _keys2.default)(LOADER_TYPE)),
  size: _propTypes2.default.oneOf((0, _keys2.default)(LOADING_SIZE)),
  message: _propTypes2.default.string,
  loadingMessage: _propTypes2.default.string,
  vCenter: _propTypes2.default.bool
};
Loader.defaultProps = {
  type: "Small",
  size: "sizeBig",
  vCenter: true
};
exports.default = Loader;
//# sourceMappingURL=index.js.map