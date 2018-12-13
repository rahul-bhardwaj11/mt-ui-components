"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StringToHTML = require("../../StringToHTML");

var _StringToHTML2 = _interopRequireDefault(_StringToHTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DescriptionPreview = function DescriptionPreview(_ref) {
  var content = _ref.content,
      onEdit = _ref.onEdit;

  return _react2.default.createElement(
    "div",
    { className: "clearfix" },
    _react2.default.createElement(
      "span",
      { onClick: onEdit, className: "desc_editLink" },
      "Edit"
    ),
    _react2.default.createElement(_StringToHTML2.default, {
      content: content ? content : "No Description",
      className: "desc_preview"
    })
  );
};
DescriptionPreview.propTypes = {
  content: _propTypes2.default.string,
  onEdit: _propTypes2.default.func.isRequired
};

exports.default = DescriptionPreview;