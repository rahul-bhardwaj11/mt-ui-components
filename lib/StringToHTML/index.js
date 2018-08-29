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

var StringToHTML = function (_React$Component) {
  (0, _inherits3.default)(StringToHTML, _React$Component);

  function StringToHTML() {
    (0, _classCallCheck3.default)(this, StringToHTML);
    return (0, _possibleConstructorReturn3.default)(this, (StringToHTML.__proto__ || (0, _getPrototypeOf2.default)(StringToHTML)).apply(this, arguments));
  }

  (0, _createClass3.default)(StringToHTML, [{
    key: 'render',
    value: function render() {
      var content = this.props.content;

      return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: content } });
    }
  }]);
  return StringToHTML;
}(_react2.default.Component);

StringToHTML.propTypes = {
  content: _propTypes2.default.string
};
exports.default = StringToHTML;
//# sourceMappingURL=index.js.map