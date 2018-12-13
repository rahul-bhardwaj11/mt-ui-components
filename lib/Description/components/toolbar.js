"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolbar = function Toolbar(_ref) {
  var id = _ref.id;

  return _react2.default.createElement(
    "div",
    { id: id },
    _react2.default.createElement("button", { className: "ql-bold" }),
    _react2.default.createElement("button", { className: "ql-italic" }),
    _react2.default.createElement("button", { className: "ql-underline" }),
    _react2.default.createElement("button", { className: "ql-link" }),
    _react2.default.createElement("button", { className: "ql-list", value: "ordered" }),
    _react2.default.createElement("button", { className: "ql-list", value: "bullet" })
  );
};
Toolbar.propTypes = {
  id: _propTypes2.default.string.isRequired
};

exports.default = Toolbar;