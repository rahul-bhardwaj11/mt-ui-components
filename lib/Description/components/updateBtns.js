'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UpdateButtons = function UpdateButtons(_ref) {
  var onOk = _ref.onOk,
      onCancel = _ref.onCancel;

  return _react2.default.createElement(
    'div',
    { className: 'desc_buttons' },
    _react2.default.createElement(
      _Button2.default,
      {
        name: 'sendFeedback',
        type: 'PrimaryRoundBtn',
        className: 'marginR5',
        onClick: onOk
      },
      _react2.default.createElement(_Icon2.default, { type: 'tick' })
    ),
    _react2.default.createElement(
      _Button2.default,
      { name: 'sendFeedback', type: 'DefaultRoundBtn', onClick: onCancel },
      _react2.default.createElement(_Icon2.default, { type: 'close' })
    )
  );
};
UpdateButtons.propTypes = {
  onOk: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired
};

exports.default = UpdateButtons;