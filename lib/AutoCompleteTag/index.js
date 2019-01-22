'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _search = require('../styles/icons/search.svg');

var _search2 = _interopRequireDefault(_search);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// If using WebPack and style-loader.
var StyleAutoCompleteTag = _styledComponents2.default.div.withConfig({
  displayName: 'AutoCompleteTag__StyleAutoCompleteTag',
  componentId: 'sc-4ajhlz-0'
})(['.react-tagsinput{position:relative;font-family:inherit;min-height:32px;background-color:', ';overflow:hidden;padding:0px;border-radius:4px;border:1px solid  ', ';padding-left:', ';&:before{display:', ';background:url(\'', '\') no-repeat 1px 0px;height:15px;width:15px;content:\'\';background-size:13px;position:absolute;opacity:0.6;left:12px;top:9px;}}.react-tagsinput-input{background:transparent;border:0;color:', ';font-size:12px;font-weight:500;outline:none;width:auto;padding:0 4px 0 4px;margin:0;line-height:30px;float:left;}.react-tagsinput-tag{height:24px;border:1px solid  ', ';border-radius:16px;background-color:', ';padding:3px 12px;', ';margin:3px 5px;float:left;}.react-tagsinput-remove{cursor:pointer;color:', ';font-size:14px;margin-left:6px;}'], _theme2.default.colors.WHITE, _theme2.default.colors.SILVER, function (props) {
  return props.withSearch ? '30px' : '16px';
}, function (props) {
  return props.withSearch ? 'block' : 'none';
}, _search2.default, _theme2.default.colors.SHARK, _theme2.default.colors.ALTO, _theme2.default.colors.PORCELAIN, _mixins2.default.smallGreyLink(), _theme2.default.colors.SILVER);

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
      tags: _this.props.tags || []
    }, _this.handleChange = function (tags) {
      _this.setState({ tags: tags });
      _this.props.onChange(tags);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AutoCompleteTag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          withSearch = _props.withSearch,
          rest = (0, _objectWithoutProperties3.default)(_props, ['className', 'withSearch']);

      return _react2.default.createElement(
        StyleAutoCompleteTag,
        { className: className, withSearch: withSearch },
        _react2.default.createElement(_reactTagsinput2.default, (0, _extends3.default)({
          inputProps: {
            placeholder: 'Search words'
          }
        }, rest, {
          value: this.state.tags,
          onChange: this.handleChange,
          onlyUnique: true
        }))
      );
    }
  }]);
  return AutoCompleteTag;
}(_react2.default.Component);

AutoCompleteTag.propTypes = {
  onChange: _propTypes2.default.func,
  tags: _propTypes2.default.array,
  className: _propTypes2.default.string,
  withSearch: _propTypes2.default.bool
};
AutoCompleteTag.defaultProps = {
  withSearch: true
};
exports.default = AutoCompleteTag;