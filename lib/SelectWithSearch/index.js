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
})(['position:relative;.mt-react-select__control{min-height:auto;background:', ';line-height:18px;}.mt-react-select__placeholder{color:', ';}&.buttonSelect{.mt-react-select__control{width:100%;height:32px;border-bottom-left-radius:0px;border-bottom-right-radius:0px;border-bottom:1px solid transparent;}.selectedItems{color:', ';border:1px solid ', ';background-color:', ';&:hover{border:1px solid ', ';color:', ';}}.activeSelect{color:', ';border:1px solid ', ';&:hover{border:1px solid ', ';color:', ';}}.selectWithSearchText{display:inline-block;line-height:16px;.discIcon{font-size:4px;margin:-2px 8px 0px;vertical-align:middle;display:inline-block;}}}.mt-react-select__single-value{color:', ';left:0px;position:absolute;top:50%;transform:translateY(-50%);}.mt-react-select__single-value + div,.mt-react-select__placeholder + div{margin:0px 2px;line-height:22px;}.mt-react-select__value-container--is-multi{line-height:26px;}.mt-react-select__value-container{margin-left:10px;overflow:hidden;padding-left:0px;margin-right:32px;cursor:text;&:before{content:\'\';display:none;}}.mt-react-select__menu{z-index:11;margin:0px;', '         border:1px solid ', ';box-shadow:0 4px 8px 0 rgba(0,0,0,0.08);}.mt-react-select__menu-list{padding:0;margin:8px 0;color:', ';}.selectBoxWrapper{border-radius:4px;position:relative;z-index:2;', ';.activeSearch{.mt-react-select__value-container{margin-left:34px;line-height:30px;}.activeInput{.icon-cross{display:block;position:absolute;right:14px;top:12px;font-size:10px;cursor:pointer;&:before{float:right;}}}.mt-react-select__control{height:32px;border-bottom-left-radius:0px;border-bottom-right-radius:0px;border-bottom:1px solid transparent;&:before{display:block;background:url(\'', '\') no-repeat 1px 0px;height:18px;width:19px;content:\'\';background-size:13px;left:0;position:absolute;opacity:0.6;left:16px;top:9px;line-height:30px;}}.mt-react-select__dropdown-indicator{display:none;}.mt-react-select__single-value{margin-left:20px;line-height:26px;}.mt-react-select__placeholder{margin-left:4px;', ';', ';}}.mt-react-select__dropdown-indicator{display:block;background:url(\'', '\') no-repeat 0px 7px;background-size:8px;svg{display:none;}}}.mt-react-select__clear-indicator{display:none;}.mt-react-select__control{border:1px solid ', ';position:relative;&:hover{border:1px solid ', ';}}.mt-react-select__control--is-focused{border:1px solid ', ';box-shadow:none;}.mt-react-select__control--is-focused:hover{border:1px solid ', ';}.mt-react-select__option{border-radius:4px;padding:6px 20px 8px 16px;color:', ';height:32px;width:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.mt-react-select__option--is-selected{background-color:', ';color:', ';}.mt-react-select__option--is-focused{background-color:', ';color:', ';cursor:pointer;}.mt-react-select__indicator-separator{display:none;}.ant-checkbox-wrapper .ant-checkbox{vertical-align:middle;margin-right:8px;}.selectedItem{margin-left:2px;margin-right:2px;font-size:14px;color:', ';position:absolute;top:50%;transform:translateY(-50%);width:100%;.selectedItemLabel{max-width:calc(100% - 23px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}}.componentWrapper{', ';width:100%;padding:10px 0px;button{box-shadow:none;}}.buttonWrapperL{float:left;width:50%;}.buttonWrapperR{width:50%;text-align:right;float:right;.activeBtnState{color:', ';}}.buttonWrapperL,.buttonWrapperR{.ant-btn{padding:0 16px;}};.icon-cross{display:none;}.mt-react-select__value-container:before{height:22px;width:26px;}.checkboxWrapper{float:none;padding:6px 8px;margin:0 8px;line-height:initial;', ';.ant-checkbox-wrapper .ant-checkbox{margin-right:0px;}.labelText{', ';display:block;}&:hover{.ant-checkbox-wrapper .checkBoxLabel{color:', ';}}}.doneMarginR{margin-left:5px;}'], _theme2.default.colors.WHITE, _theme2.default.colors.SILVER, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.TROPICAL_BLUE, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _theme2.default.colors.DARK_OUTER_SPACE, function (props) {
  return props.showSearch ? 'border-top-left-radius: 0px;\n    border-top-right-radius: 0px;' : 'margin-top: 8px;';
}, _theme2.default.colors.PEARL, _theme2.default.colors.OUTER_SPACE, function (props) {
  return props.isButton ? 'margin-top: 10px' : '';
}, _search2.default, _mixins2.default.inactiveLink(), _mixins2.default.truncate('100%'), _downFillcaret2.default, _theme2.default.colors.PEARL, _theme2.default.colors.PEARL, _theme2.default.colors.PEARL, _theme2.default.colors.PEARL, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.WHITE, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.INDIGO, _theme2.default.colors.WHITE, _theme2.default.colors.DARK_OUTER_SPACE, _mixins2.default.clearfix(), _theme2.default.colors.INDIGO, _mixins2.default.truncate('100%'), _mixins2.default.truncate('100%'), _theme2.default.colors.SHARK);

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
          className = _props.className,
          showSearch = _props.showSearch;

      var SelectComponent = _syncSelect2.default;
      if (async) {
        SelectComponent = _asyncSelect2.default;
      }
      var componentClassName = (0, _classnames2.default)({
        buttonSelect: isButton
      }, className);
      return _react2.default.createElement(
        SelectBox,
        {
          className: componentClassName,
          isButton: isButton,
          showSearch: showSearch
        },
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
  className: _propTypes2.default.string,
  showSearch: _propTypes2.default.bool
};
SelectWithSearch.defaultProps = {
  placeholder: 'Type here to Search',
  onChange: function onChange() {},
  showSearch: true
};
exports.default = SelectWithSearch;