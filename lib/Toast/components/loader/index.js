'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(props) {
  return _react2.default.createElement(
    _css2.default,
    { className: (0, _classnames2.default)(props.className, 'delayLoaderCont') },
    _react2.default.createElement('div', { className: 'delayLoader' })
  );
};
Loader.propTypes = { className: _propTypes2.default.string };

exports.default = Loader;
//# sourceMappingURL=index.js.map