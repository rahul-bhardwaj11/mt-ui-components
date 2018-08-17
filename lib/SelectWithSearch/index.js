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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .mt-react-select__single-value {\n    padding-left: 30px;\n  }\n  .mt-react-select__value-container::before {\n    //content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5zZWFyY2g8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJEZXNrdG9wLUhEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzg1LjAwMDAwMCwgLTg0LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPHBhdGggZD0iTTM5Ny4yMDY2NzIsOTQuOTcyNDQ5MyBMNDAwLjc0NDM4NCw5OC41MTAxNjE0IEM0MDEuMDg1MjA1LDk4Ljg1MDk4MjYgNDAxLjA4NTIwNSw5OS40MDM1NjI5IDQwMC43NDQzODQsOTkuNzQ0Mzg0MSBDNDAwLjQwMzU2MywxMDAuMDg1MjA1IDM5OS44NTA5ODMsMTAwLjA4NTIwNSAzOTkuNTEwMTYxLDk5Ljc0NDM4NDEgTDM5NS45NzI0NDksOTYuMjA2NjcyIEMzOTQuODIxNjczLDk3LjA5NTQ2OTcgMzkzLjM3ODY0OCw5Ny42MjQyNDI0IDM5MS44MTIxMjEsOTcuNjI0MjQyNCBDMzg4LjA0OTg5MSw5Ny42MjQyNDI0IDM4NSw5NC41NzQzNTE5IDM4NSw5MC44MTIxMjEyIEMzODUsODcuMDQ5ODkwNiAzODguMDQ5ODkxLDg0IDM5MS44MTIxMjEsODQgQzM5NS41NzQzNTIsODQgMzk4LjYyNDI0Miw4Ny4wNDk4OTA2IDM5OC42MjQyNDIsOTAuODEyMTIxMiBDMzk4LjYyNDI0Miw5Mi4zNzg2NDggMzk4LjA5NTQ3LDkzLjgyMTY3MzMgMzk3LjIwNjY3Miw5NC45NzI0NDkzIFogTTM5MS44MTIxMjEsOTUuODc4Nzg3OSBDMzk0LjYxMDM2NCw5NS44Nzg3ODc5IDM5Ni44Nzg3ODgsOTMuNjEwMzYzOSAzOTYuODc4Nzg4LDkwLjgxMjEyMTIgQzM5Ni44Nzg3ODgsODguMDEzODc4NSAzOTQuNjEwMzY0LDg1Ljc0NTQ1NDUgMzkxLjgxMjEyMSw4NS43NDU0NTQ1IEMzODkuMDEzODc4LDg1Ljc0NTQ1NDUgMzg2Ljc0NTQ1NSw4OC4wMTM4Nzg1IDM4Ni43NDU0NTUsOTAuODEyMTIxMiBDMzg2Ljc0NTQ1NSw5My42MTAzNjM5IDM4OS4wMTM4NzgsOTUuODc4Nzg3OSAzOTEuODEyMTIxLDk1Ljg3ODc4NzkgWiIgaWQ9InNlYXJjaCI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);\n    //content: url(\'./assets/search.svg\')\n    padding-left: 5px;\n    padding-top: 5px;\n    position: absolute;\n    opacity: 0.6;\n  }\n  .mt-react-select__menu-list {\n    padding: 8px;\n  }\n  .mt-react-select__control {\n    border: 1px solid ', ';\n    width: ', ';\n  }\n  .mt-react-select__control--is-focused {\n    box-shadow: none;\n    border: 1px solid ', ';\n  }\n  .mt-react-select__control--is-focused:hover {\n    border: 1px solid ', ';\n  }\n  .mt-react-select__option {\n    border-radius: 4px;\n    padding: 6px 20px 8px 16px;\n    color: #989ca6;\n    height: 32px;\n  }\n  // .mt-react-select__option:hover{\n  //   background-color: ', ';\n  //   color: #ffffff;\n  //   cursor: pointer;\n  // }\n  .mt-react-select__option--is-selected {\n    background-color: #ffffff;\n    color: ', ';\n  }\n  .mt-react-select__option--is-focused {\n    background-color:  ', ';\n    color: #ffffff;\n    cursor: pointer;\n  }\n  .mt-react-select__input {\n    padding-left: 0px;\n  }\n  .mt-react-select__placeholder {\n    padding-left: 30px;\n  }\n  .mt-react-select__indicators {\n    display: none;\n  }\n'], ['\n  .mt-react-select__single-value {\n    padding-left: 30px;\n  }\n  .mt-react-select__value-container::before {\n    //content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5zZWFyY2g8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJEZXNrdG9wLUhEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzg1LjAwMDAwMCwgLTg0LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPHBhdGggZD0iTTM5Ny4yMDY2NzIsOTQuOTcyNDQ5MyBMNDAwLjc0NDM4NCw5OC41MTAxNjE0IEM0MDEuMDg1MjA1LDk4Ljg1MDk4MjYgNDAxLjA4NTIwNSw5OS40MDM1NjI5IDQwMC43NDQzODQsOTkuNzQ0Mzg0MSBDNDAwLjQwMzU2MywxMDAuMDg1MjA1IDM5OS44NTA5ODMsMTAwLjA4NTIwNSAzOTkuNTEwMTYxLDk5Ljc0NDM4NDEgTDM5NS45NzI0NDksOTYuMjA2NjcyIEMzOTQuODIxNjczLDk3LjA5NTQ2OTcgMzkzLjM3ODY0OCw5Ny42MjQyNDI0IDM5MS44MTIxMjEsOTcuNjI0MjQyNCBDMzg4LjA0OTg5MSw5Ny42MjQyNDI0IDM4NSw5NC41NzQzNTE5IDM4NSw5MC44MTIxMjEyIEMzODUsODcuMDQ5ODkwNiAzODguMDQ5ODkxLDg0IDM5MS44MTIxMjEsODQgQzM5NS41NzQzNTIsODQgMzk4LjYyNDI0Miw4Ny4wNDk4OTA2IDM5OC42MjQyNDIsOTAuODEyMTIxMiBDMzk4LjYyNDI0Miw5Mi4zNzg2NDggMzk4LjA5NTQ3LDkzLjgyMTY3MzMgMzk3LjIwNjY3Miw5NC45NzI0NDkzIFogTTM5MS44MTIxMjEsOTUuODc4Nzg3OSBDMzk0LjYxMDM2NCw5NS44Nzg3ODc5IDM5Ni44Nzg3ODgsOTMuNjEwMzYzOSAzOTYuODc4Nzg4LDkwLjgxMjEyMTIgQzM5Ni44Nzg3ODgsODguMDEzODc4NSAzOTQuNjEwMzY0LDg1Ljc0NTQ1NDUgMzkxLjgxMjEyMSw4NS43NDU0NTQ1IEMzODkuMDEzODc4LDg1Ljc0NTQ1NDUgMzg2Ljc0NTQ1NSw4OC4wMTM4Nzg1IDM4Ni43NDU0NTUsOTAuODEyMTIxMiBDMzg2Ljc0NTQ1NSw5My42MTAzNjM5IDM4OS4wMTM4NzgsOTUuODc4Nzg3OSAzOTEuODEyMTIxLDk1Ljg3ODc4NzkgWiIgaWQ9InNlYXJjaCI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);\n    //content: url(\'./assets/search.svg\')\n    padding-left: 5px;\n    padding-top: 5px;\n    position: absolute;\n    opacity: 0.6;\n  }\n  .mt-react-select__menu-list {\n    padding: 8px;\n  }\n  .mt-react-select__control {\n    border: 1px solid ', ';\n    width: ', ';\n  }\n  .mt-react-select__control--is-focused {\n    box-shadow: none;\n    border: 1px solid ', ';\n  }\n  .mt-react-select__control--is-focused:hover {\n    border: 1px solid ', ';\n  }\n  .mt-react-select__option {\n    border-radius: 4px;\n    padding: 6px 20px 8px 16px;\n    color: #989ca6;\n    height: 32px;\n  }\n  // .mt-react-select__option:hover{\n  //   background-color: ', ';\n  //   color: #ffffff;\n  //   cursor: pointer;\n  // }\n  .mt-react-select__option--is-selected {\n    background-color: #ffffff;\n    color: ', ';\n  }\n  .mt-react-select__option--is-focused {\n    background-color:  ', ';\n    color: #ffffff;\n    cursor: pointer;\n  }\n  .mt-react-select__input {\n    padding-left: 0px;\n  }\n  .mt-react-select__placeholder {\n    padding-left: 30px;\n  }\n  .mt-react-select__indicators {\n    display: none;\n  }\n']);
//import AsyncSelect from "react-select/lib/Async";
//import { Icon } from 'antd';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _asyncSelect = require('./asyncSelect');

var _asyncSelect2 = _interopRequireDefault(_asyncSelect);

var _syncSelect = require('./syncSelect');

var _syncSelect2 = _interopRequireDefault(_syncSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectBox = _styledComponents2.default.div(_templateObject, _theme2.default.colors.ALTO, function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 'auto' : _ref$width;
  return width;
}, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.LIGHT_BLUE);

var SelectWithSearch = function (_Component) {
  (0, _inherits3.default)(SelectWithSearch, _Component);

  function SelectWithSearch() {
    (0, _classCallCheck3.default)(this, SelectWithSearch);
    return (0, _possibleConstructorReturn3.default)(this, (SelectWithSearch.__proto__ || (0, _getPrototypeOf2.default)(SelectWithSearch)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectWithSearch, [{
    key: 'render',
    value: function render() {
      var async = this.props.async;

      if (async) {
        return _react2.default.createElement(
          SelectBox,
          null,
          _react2.default.createElement(_asyncSelect2.default, this.props)
        );
      } else return _react2.default.createElement(
        SelectBox,
        null,
        _react2.default.createElement(_syncSelect2.default, this.props)
      );
    }
  }]);
  return SelectWithSearch;
}(_react.Component);

SelectWithSearch.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  async: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  isMulti: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired
};
SelectWithSearch.defaultProps = {
  placeholder: 'Type here to Search'
};
exports.default = SelectWithSearch;
//# sourceMappingURL=index.js.map