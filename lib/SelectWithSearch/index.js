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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _asyncSelect = require('./asyncSelect');

var _asyncSelect2 = _interopRequireDefault(_asyncSelect);

var _syncSelect = require('./syncSelect');

var _syncSelect2 = _interopRequireDefault(_syncSelect);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _search = require('./assets/search.svg');

var _search2 = _interopRequireDefault(_search);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectBox = (0, _styledComponents2.default)('div').withConfig({
  displayName: 'SelectWithSearch__SelectBox',
  componentId: 'i3891z-0'
})(['&.buttonSelect{.mt-react-select__control{width:0;opacity:0;transition:width .85s,opacity 1s;}.activeSearch{.mt-react-select__control{width:100%;opacity:1;}}}.mt-react-select__single-value{padding-left:0px;position:absolute;top:50%;transform:translateY(-50%);}.mt-react-select__value-container{padding-left:12px;&:before{content:\'\';display:none;height:22px;width:24px;background-size:14px;padding-left:5px;padding-top:5px;left:0;position:absolute;opacity:0.6;}}.mt-react-select__menu-list{padding:8px;color:', ';}.selectBoxWrapper{height:32px;.activeSearch{.mt-react-select__value-container{&:before{display:block;background:url(\'', '\') no-repeat 10px 5px;}}.mt-react-select__single-value{padding-left:20px;}.mt-react-select__dropdown-indicator{display:none;}.mt-react-select__placeholder{padding-left:20px;}}}.mt-react-select__clear-indicator{display:none;}.mt-react-select__control{border:1px solid ', ';width:', ';}.mt-react-select__control--is-focused{box-shadow:none;border:1px solid ', ';}.mt-react-select__control--is-focused:hover{border:1px solid ', ';}.mt-react-select__option{border-radius:4px;padding:6px 20px 8px 16px;color:', ';height:32px;}.mt-react-select__option--is-selected{background-color:#ffffff;color:', ';}.mt-react-select__option--is-focused{background-color:', ';color:#ffffff;cursor:pointer;}.mt-react-select__indicator-separator{display:none;}.mt-react-select__input{padding-left:20px;}.mt-react-select__placeholder{}.ant-checkbox-wrapper .ant-checkbox{vertical-align:middle;margin-right:8px;}.mt-react-select__menu-list--is-multi{padding:19px 24px;}.ant-btn-text{padding:0px 24px;}.selectedItem{margin-left:2px;margin-right:2px;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.componentWrapper{', ';width:100%;}.buttonWrapperL{float:left;width:50%;padding-bottom:10px;}.buttonWrapperR{float:right;padding-bottom:10px;}.dataLabel{', ';}.icon-Cancel{display:none;}.activeInput{.icon-Cancel{display:inline-block;position:absolute;right:10px;bottom:10px;cursor:pointer;}}.mt-react-select__value-container:before{height:22px;width:26px;}.checkboxWrapper{margin-bottom:5px;}.doneMarginR{margin-left:5px;}'], _theme2.default.colors.OUTER_SPACE, _search2.default, _theme2.default.colors.ALTO, function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 'auto' : _ref$width;
  return width;
}, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.INDIGO, _mixins2.default.clearfix(), _mixins2.default.displayIB());
//import AsyncSelect from "react-select/lib/Async";
//import { Icon } from 'antd';

var SelectWithSearch = function (_Component) {
  (0, _inherits3.default)(SelectWithSearch, _Component);

  function SelectWithSearch() {
    (0, _classCallCheck3.default)(this, SelectWithSearch);
    return (0, _possibleConstructorReturn3.default)(this, (SelectWithSearch.__proto__ || (0, _getPrototypeOf2.default)(SelectWithSearch)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectWithSearch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          async = _props.async,
          isButton = _props.isButton;

      var SelectComponent = _syncSelect2.default;
      if (async) {
        SelectComponent = _asyncSelect2.default;
      }
      var className = (0, _classnames2.default)({
        buttonSelect: isButton
      });
      return _react2.default.createElement(
        SelectBox,
        { className: className },
        _react2.default.createElement(SelectComponent, this.props)
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
  onChange: _propTypes2.default.func.isRequired,
  isButton: _propTypes2.default.bool
};
SelectWithSearch.defaultProps = {
  placeholder: 'Type here to Search'
};
exports.default = SelectWithSearch;
//# sourceMappingURL=index.js.map