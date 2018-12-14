"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UnsupportedViewer = function UnsupportedViewer() {
  return _react2.default.createElement(
    "div",
    { className: "unsupported-message" },
    _react2.default.createElement(
      "p",
      { className: "alert" },
      _react2.default.createElement(
        "b",
        null,
        "File "
      ),
      " is not supported."
    )
  );
};

exports.default = UnsupportedViewer;