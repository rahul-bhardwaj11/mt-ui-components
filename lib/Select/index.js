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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n'], ['\n  display: inline-block;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('antd/lib/dropdown/style/css');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

require('antd/lib/select/style/index.css');

require('../styles/override.scss');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StringToHTML = require('../StringToHTML');

var _StringToHTML2 = _interopRequireDefault(_StringToHTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;

var MtWrapper = _styledComponents2.default.div(_templateObject);

var Select = function (_Component) {
  (0, _inherits3.default)(Select, _Component);

  function Select() {
    (0, _classCallCheck3.default)(this, Select);
    return (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).apply(this, arguments));
  }

  (0, _createClass3.default)(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var options = this.props.options;


      return _react2.default.createElement(
        MtWrapper,
        {
          innerRef: function innerRef(el) {
            if (el) {
              _this2.selectDropdownRef = el;
            }
          }
        },
        _react2.default.createElement(
          _select2.default,
          (0, _extends3.default)({}, this.props, {
            onClick: function onClick(event) {
              event.stopPropagation();
            },
            getPopupContainer: function getPopupContainer() {
              return _this2.selectDropdownRef;
            }
          }),
          options.map(function (option) {
            return _react2.default.createElement(
              Option,
              { key: option.key, value: option.key },
              typeof option.content === 'string' ? _react2.default.createElement(_StringToHTML2.default, { content: option.content }) : option.content
            );
          })
        )
      );
    }
  }]);
  return Select;
}(_react.Component);

Select.propTypes = {
  options: _propTypes2.default.any.isRequired,
  onChange: _propTypes2.default.func,
  style: _propTypes2.default.object,
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
Select.defaultProps = {
  style: { minWidth: 125 }
};
exports.default = Select;
//# sourceMappingURL=index.js.map