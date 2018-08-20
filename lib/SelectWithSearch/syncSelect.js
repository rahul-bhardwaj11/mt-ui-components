'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _CheckBox = require('../CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {
  return undefined;
};

var SyncSelect = function (_Component) {
  (0, _inherits3.default)(SyncSelect, _Component);

  function SyncSelect() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SyncSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SyncSelect.__proto__ || (0, _getPrototypeOf2.default)(SyncSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      options: _this.props.options,
      selectedItems: [],
      showSelectedValues: true,
      menuIsOpen: false,
      showButton: false,
      showInput: false
    }, _this.__sortOptions = function (selectedItems, options) {
      var optionsToSort = options.filter(function (option) {
        return selectedItems.indexOf(option) < 0;
      });
      optionsToSort.sort(function (item1, item2) {
        return item1.label > item2.label;
      });
      var sortedOptions = [].concat((0, _toConsumableArray3.default)(selectedItems), (0, _toConsumableArray3.default)(optionsToSort));
      return sortedOptions;
    }, _this.onCheckboxClick = function (data) {
      var selectedItems = [].concat((0, _toConsumableArray3.default)(_this.state.selectedItems));
      var index = selectedItems.indexOf(data);
      if (index < 0) {
        selectedItems.push(data);
      } else {
        selectedItems.splice(index, 1);
      }
      _this.setState({ selectedItems: selectedItems });
    }, _this.onClearAll = function () {
      var selectedItems = [];
      _this.setState({ selectedItems: selectedItems });
    }, _this.onDone = function () {
      var _this$state = _this.state,
          selectedItems = _this$state.selectedItems,
          options = _this$state.options;

      var selectedValues = selectedItems.map(function (selectedItem) {
        return selectedItem.value;
      });
      _this.props.onChange(selectedValues);
      if (_this.props.isButton) {
        _this.toggleButton();
      }
      var sortedOptions = _this.__sortOptions(selectedItems, options);
      var newState = {
        options: sortedOptions,
        menuIsOpen: false,
        showInput: false,
        showSelectedValues: true
      };
      _this.setState((0, _extends3.default)({}, newState));
    }, _this.toggleButton = function () {
      _this.setState(function (prevState) {
        return {
          showButton: !prevState.showButton,
          menuIsOpen: !prevState.menuIsOpen,
          showInput: !prevState.showInput,
          showSelectedValues: !prevState.showSelectedValues
        };
      });
    }, _this.handleDisplayValue = function (_ref2) {
      var data = _ref2.data;
      var selectedItems = _this.state.selectedItems;

      if (data.value == selectedItems[0].value) return _react2.default.createElement(
        'div',
        null,
        '' + data.label + (selectedItems.length > 1 ? '+' + (selectedItems.length - 1) : '')
      );
      return null;
    }, _this.optionWithCheckBox = function (_ref3) {
      var isDisabled = _ref3.isDisabled,
          data = _ref3.data;
      var selectedItems = _this.state.selectedItems;

      return !isDisabled ? _react2.default.createElement(
        'div',
        { onClick: function onClick() {
            return _this.onCheckboxClick(data);
          } },
        _react2.default.createElement(_CheckBox2.default, { checked: selectedItems.indexOf(data) > -1 }),
        data.label
      ) : null;
    }, _this.valueContainer = function (_ref4) {
      var children = _ref4.children,
          props = (0, _objectWithoutProperties3.default)(_ref4, ['children']);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ onClick: _this.onInputClick }, props),
        children
      );
    }, _this.buildMenu = function (props) {
      var selectedItems = _this.state.selectedItems;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactSelect.components.Menu,
          props,
          props.children,
          _react2.default.createElement(
            _Button2.default,
            { type: 'primary', onClick: _this.onClearAll },
            'Clear All'
          ),
          _react2.default.createElement(
            _Button2.default,
            { type: 'primary', onClick: _this.onDone },
            'Done' + (selectedItems.length ? '(' + selectedItems.length + ')' : '')
          )
        )
      );
    }, _this.handleControl = function (arg) {
      return _react2.default.createElement(
        'div',
        {
          onClick: function onClick() {
            _this.setState({
              menuIsOpen: true,
              showInput: true,
              showSelectedValues: false
            });
          }
        },
        _react2.default.createElement(_reactSelect.components.Control, arg)
      );
    }, _this.getButtonText = function () {
      var selectedItems = _this.state.selectedItems;
      var buttonLabel = _this.props.buttonLabel;

      var selectedItemsLength = selectedItems.length;
      if (selectedItemsLength) {
        if (selectedItemsLength == 1) return '' + selectedItems[0].label;
        return buttonLabel + '.' + selectedItems.length;
      }
      return buttonLabel;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SyncSelect, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          isButton = _props.isButton,
          options = _props.options;

      if (isButton) {
        this.setState({ showButton: true });
      }
      var selectedItems = [];
      if (defaultValue) {
        if (defaultValue.length) {
          defaultValue.map(function (option) {
            selectedItems.push(option);
          });
        } else {
          selectedItems.push(defaultValue);
        }
      }
      var sortedOptions = this.__sortOptions(selectedItems, options);
      this.setState({ selectedItems: selectedItems, options: sortedOptions });
    }
  }, {
    key: 'render',
    value: function render() {
      var isMulti = this.props.isMulti;
      var _state = this.state,
          options = _state.options,
          selectedItems = _state.selectedItems,
          showSelectedValues = _state.showSelectedValues,
          menuIsOpen = _state.menuIsOpen,
          showButton = _state.showButton,
          showInput = _state.showInput;

      var multiProps = isMulti ? {
        onChange: this.onCheckboxClick,
        hideSelectedOptions: false,
        components: {
          Option: this.optionWithCheckBox,
          MultiValueContainer: this.handleDisplayValue,
          Menu: this.buildMenu,
          Control: this.handleControl
        },
        value: selectedItems,
        closeMenuOnSelect: false,
        controlShouldRenderValue: showSelectedValues,
        menuIsOpen: menuIsOpen,
        isSearchable: showInput,
        autoFocus: showInput,
        onBlur: this.onDone
      } : {};

      if (showButton) {
        return _react2.default.createElement(
          _Button2.default,
          { onClick: this.toggleButton, type: 'primary' },
          this.getButtonText()
        );
      }
      return _react2.default.createElement(_reactSelect2.default, (0, _extends3.default)({}, this.props, {
        options: options,
        classNamePrefix: 'mt-react-select'
      }, multiProps));
    }
  }]);
  return SyncSelect;
}(_react.Component);

SyncSelect.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]),
  isMulti: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  isButton: _propTypes2.default.bool,
  buttonLabel: _propTypes2.default.string
};
SyncSelect.defaultProps = {
  buttonLabel: 'filter',
  onChange: noop
};
exports.default = SyncSelect;
//# sourceMappingURL=syncSelect.js.map