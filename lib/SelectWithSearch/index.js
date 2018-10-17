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

var _search = require('../styles/icons/search.svg');

var _search2 = _interopRequireDefault(_search);

var _downFillcaret = require('../styles/icons/downFillcaret.svg');

var _downFillcaret2 = _interopRequireDefault(_downFillcaret);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectBox = _styledComponents2.default.div.withConfig({
  displayName: 'SelectWithSearch__SelectBox',
  componentId: 'i3891z-0'
})(['position:relative;.mt-react-select__control{min-height:auto;background:', ';line-height:18px;}&.buttonSelect{.mt-react-select__control{width:100%;}}.mt-react-select__single-value{color:', ';left:0px;position:absolute;top:50%;transform:translateY(-50%);}.mt-react-select__single-value + div,.mt-react-select__placeholder + div{margin:0px 2px;line-height:22px;}.mt-react-select__value-container--is-multi{line-height:26px;}.mt-react-select__value-container{margin-left:10px;overflow:hidden;padding-left:0px;margin-right:20px;&:before{content:\'\';display:none;}}.mt-react-select__menu{z-index:11;}.mt-react-select__menu-list{padding:8px;color:', ';}.selectBoxWrapper{', ';position:relative;z-index:10;.activeSearch{.mt-react-select__value-container{margin-left:35px;line-height:18px;}.activeInput{.icon-cross{display:block;position:absolute;right:10px;bottom:12px;font-size:10px;top:12px;cursor:pointer;&:before{float:right;}}}.mt-react-select__control{&:before{display:block;background:url(\'', '\') no-repeat 1px 0px;height:18px;width:19px;content:\'\';background-size:13px;left:0;position:absolute;opacity:0.6;left:15px;top:10px;}}.mt-react-select__dropdown-indicator{display:none;}.mt-react-select__single-value{margin-left:20px;line-height:26px;}.mt-react-select__placeholder{margin-left:4px;}}.mt-react-select__dropdown-indicator{display:block;background:url(\'', '\') no-repeat 0px 7px;background-size:8px;svg{display:none;}}}.mt-react-select__clear-indicator{display:none;}.mt-react-select__control{border:1px solid ', ';position:relative;}.mt-react-select__control--is-focused{box-shadow:none;border:1px solid ', ';}.mt-react-select__control--is-focused:hover{border:1px solid ', ';}.mt-react-select__option{border-radius:4px;padding:6px 20px 8px 16px;color:', ';height:32px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.mt-react-select__option--is-selected{background-color:', ';color:', ';}.mt-react-select__option--is-focused{background-color:', ';color:', ';cursor:pointer;}.mt-react-select__indicator-separator{display:none;}.ant-checkbox-wrapper .ant-checkbox{vertical-align:middle;margin-right:8px;}.mt-react-select__menu-list--is-multi{padding:19px 24px;}.selectedItem{margin-left:2px;margin-right:2px;font-size:14px;color:', ';position:absolute;top:50%;transform:translateY(-50%);width:100%;.selectedItemLabel{max-width:calc(100% - 23px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}}.componentWrapper{', ';width:100%;}.buttonWrapperL{float:left;width:50%;padding-bottom:10px;}.buttonWrapperR{width:50%;text-align:right;float:right;padding-bottom:10px;}.icon-cross{display:none;}.mt-react-select__value-container:before{height:22px;width:26px;}.checkboxWrapper{margin-bottom:5px;', ';}.doneMarginR{margin-left:5px;}'], _theme2.default.colors.WHITE, _theme2.default.colors.DARK_OUTER_SPACE, _theme2.default.colors.OUTER_SPACE, function (props) {
  return props.isButton ? 'margin-top: 10px' : '';
}, _search2.default, _downFillcaret2.default, _theme2.default.colors.ALTO, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.WHITE, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.INDIGO, _theme2.default.colors.WHITE, _theme2.default.colors.DARK_OUTER_SPACE, _mixins2.default.clearfix(), function () {
  return _mixins2.default.truncate('100%');
});

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
          isButton = _props.isButton,
          className = _props.className;

      var SelectComponent = _syncSelect2.default;
      if (async) {
        SelectComponent = _asyncSelect2.default;
      }
      var componentClassName = (0, _classnames2.default)({
        buttonSelect: isButton
      }, className);
      return _react2.default.createElement(
        SelectBox,
        { className: componentClassName, isButton: isButton },
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
  isButton: _propTypes2.default.bool,
  buttonMaxWidth: _propTypes2.default.string,
  buttonWidth: _propTypes2.default.string,
  className: _propTypes2.default.string
};
SelectWithSearch.defaultProps = {
  placeholder: 'Type here to Search'
};
exports.default = SelectWithSearch;