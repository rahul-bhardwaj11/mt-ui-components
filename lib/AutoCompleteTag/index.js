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

var _reactTagsinput = require('react-tagsinput');

var _reactTagsinput2 = _interopRequireDefault(_reactTagsinput);

require('react-tagsinput/react-tagsinput.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// If using WebPack and style-loader.

var AutoCompleteTag = function (_React$Component) {
  (0, _inherits3.default)(AutoCompleteTag, _React$Component);

  function AutoCompleteTag() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AutoCompleteTag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AutoCompleteTag.__proto__ || (0, _getPrototypeOf2.default)(AutoCompleteTag)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tags: _this.props.tags.length && _this.props.tags || []
    }, _this.handleChange = function (tags) {
      _this.setState({ tags: tags });
      _this.props.onChange(tags);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AutoCompleteTag, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactTagsinput2.default, (0, _extends3.default)({}, this.props, {
        value: this.state.tags,
        onChange: this.handleChange,
        onlyUnique: true
      }));
    }
  }]);
  return AutoCompleteTag;
}(_react2.default.Component);

AutoCompleteTag.propTypes = {
  onChange: _propTypes2.default.func,
  tags: _propTypes2.default.array
};
exports.default = AutoCompleteTag;