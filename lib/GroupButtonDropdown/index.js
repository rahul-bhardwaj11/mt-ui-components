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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  div {\n    display: inline-block;\n  }\n  .ant-dropdown-trigger {\n    .ant-btn-primary {\n      span {\n        font-size: 9px;\n        margin-top: 4px;\n        display: inline-block;\n        vertical-align: top;\n      }\n    }\n  }\n  .ant-dropdown-menu-light {\n    border: 1px solid rgba(205, 210, 217, 0.5);\n    border-radius: 4px;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);\n  }\n'], ['\n  div {\n    display: inline-block;\n  }\n  .ant-dropdown-trigger {\n    .ant-btn-primary {\n      span {\n        font-size: 9px;\n        margin-top: 4px;\n        display: inline-block;\n        vertical-align: top;\n      }\n    }\n  }\n  .ant-dropdown-menu-light {\n    border: 1px solid rgba(205, 210, 217, 0.5);\n    border-radius: 4px;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtGroupDropdown = _styledComponents2.default.div(_templateObject);

var GroupButtonDropdown = function (_Component) {
  (0, _inherits3.default)(GroupButtonDropdown, _Component);

  function GroupButtonDropdown() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GroupButtonDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GroupButtonDropdown.__proto__ || (0, _getPrototypeOf2.default)(GroupButtonDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (key) {
      if (_this.props.onClick) {
        _this.props.onClick(key);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GroupButtonDropdown, [{
    key: 'render',
    value: function render() {
      var label = this.props.label;

      return _react2.default.createElement(
        MtGroupDropdown,
        null,
        _react2.default.createElement(
          _Button2.default,
          {
            className: 'eeee',
            style: {
              display: 'inline-block',
              padding: '0px 10px',
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0
            }
          },
          label
        ),
        _react2.default.createElement(
          _Dropdown2.default,
          (0, _extends3.default)({}, this.props, { onClick: this.onClick }),
          _react2.default.createElement(
            'div',
            { style: { display: 'inline-block' } },
            _react2.default.createElement(
              _Button2.default,
              {
                style: {
                  padding: '0px 10px',
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: 0,
                  borderLeft: '1px solid'
                }
              },
              _react2.default.createElement(
                'span',
                null,
                '\u25BC'
              )
            )
          )
        )
      );
    }
  }]);
  return GroupButtonDropdown;
}(_react.Component);

GroupButtonDropdown.propTypes = {
  options: _propTypes2.default.any.isRequired,
  trigger: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  label: _propTypes2.default.string
};
GroupButtonDropdown.defaultProps = {
  trigger: 'click'
};
exports.default = GroupButtonDropdown;
//# sourceMappingURL=index.js.map