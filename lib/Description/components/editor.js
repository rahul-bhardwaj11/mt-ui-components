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

var _reactQuill = require('react-quill');

var _reactQuill2 = _interopRequireDefault(_reactQuill);

var _updateBtns = require('./updateBtns');

var _updateBtns2 = _interopRequireDefault(_updateBtns);

var _toolbar = require('./toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { debounce } from "@mt-ui-core/utils";

var noop = function noop() {
  return undefined;
};

var Editor = function (_Component) {
  (0, _inherits3.default)(Editor, _Component);

  function Editor() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Editor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Editor.__proto__ || (0, _getPrototypeOf2.default)(Editor)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (value) {
      _this.quillRef && _this.props.onChange(value, _this.quillRef.editor);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Editor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.quillRef) {
        this.props.onMount(this.props.value, this.quillRef.getEditor(), false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          showButtons = _props.showButtons,
          helpers = _props.helpers,
          value = _props.value,
          availableLength = _props.availableLength,
          id = _props.id,
          placeholder = _props.placeholder,
          readOnly = _props.readOnly,
          scrollingContainer = _props.scrollingContainer;

      var toolbarId = id + '-toolbar';
      var modules = {};
      modules.toolbar = readOnly ? false : {
        container: '#' + toolbarId
      };
      return _react2.default.createElement(
        'div',
        null,
        !readOnly && _react2.default.createElement(_toolbar2.default, { id: toolbarId }),
        _react2.default.createElement(_reactQuill2.default, {
          ref: function ref(el) {
            _this2.quillRef = el;
          },
          scrollingContainer: scrollingContainer,
          readOnly: readOnly,
          placeholder: placeholder,
          defaultValue: value,
          onChange: this.onChange,
          modules: modules,
          formats: _constants.FORMATS
        }),
        !readOnly && _react2.default.createElement(
          'span',
          { className: 'customLength' },
          availableLength,
          ' Char'
        ),
        showButtons && _react2.default.createElement(_updateBtns2.default, helpers),
        _react2.default.createElement('span', null)
      );
    }
  }]);
  return Editor;
}(_react.Component);

Editor.propTypes = {
  id: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  helpers: _propTypes2.default.object.isRequired,
  showButtons: _propTypes2.default.bool.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onMount: _propTypes2.default.func.isRequired,
  availableLength: _propTypes2.default.number.isRequired,
  placeholder: _propTypes2.default.string,
  readOnly: _propTypes2.default.bool,
  scrollingContainer: _propTypes2.default.string
};
Editor.defaultProps = {
  onMount: noop
};
exports.default = Editor;