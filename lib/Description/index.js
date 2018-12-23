'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _preview = require('./components/preview');

var _preview2 = _interopRequireDefault(_preview);

var _editor = require('./components/editor');

var _editor2 = _interopRequireDefault(_editor);

var _constants = require('./constants');

var _Toast = require('../Toast');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var trimNewLine = function trimNewLine(text) {
  return text ? text.replace(/^\n|\n$/g, '') : text;
};

var noop = function noop() {};

var Description = (function(_Component) {
  (0, _inherits3.default)(Description, _Component);

  function Description() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Description);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          Description.__proto__ ||
          (0, _getPrototypeOf2.default)(Description)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        content: _this.props.content,
        availableLength: _this.props.maxLength,
        mode: _this.props.preview
          ? _constants.MODES.PREVIEW
          : _constants.MODES.EDIT
      }),
      (_this.onChange = function(value, editor) {
        var trigger =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : true;

        //const { content } = this.state;
        var _this$props = _this.props,
          maxLength = _this$props.maxLength,
          required = _this$props.required;

        var text = trimNewLine(editor.getText().trim());
        var contentLength = text.length;
        if (contentLength > maxLength && editor.deleteText) {
          editor.deleteText(maxLength, contentLength);
          value = editor.root.innerHTML;
          contentLength = trimNewLine(editor.getText()).length;
        }
        _this.setState({
          content: value,
          availableLength: maxLength - contentLength
        });
        contentLength && _this.props.onChange(value);
        !contentLength &&
          trigger &&
          required &&
          (0, _Toast.errorToast)({ message: 'Description can not be empty' });
      }),
      (_this.editorHelpers = {
        onOk: function onOk() {
          _this.props.ok(_this.state.content);
          _this.editorHelpers.onCancel();
        },
        onCancel: function onCancel() {
          _this.setState({
            mode: _constants.MODES.PREVIEW,
            content: _this.props.content,
            availableLength: _this.props.maxLength
          });
        }
      }),
      (_this.onEdit = function() {
        _this.setState({
          mode: _constants.MODES.EDIT
        });
      }),
      (_this.renderContent = function() {
        var _this$state = _this.state,
          content = _this$state.content,
          mode = _this$state.mode,
          availableLength = _this$state.availableLength;
        var _this$props2 = _this.props,
          placeholder = _this$props2.placeholder,
          preview = _this$props2.preview,
          heading = _this$props2.heading,
          className = _this$props2.className,
          readOnly = _this$props2.readOnly,
          scrollingContainer = _this$props2.scrollingContainer;

        return mode == _constants.MODES.EDIT
          ? _react2.default.createElement(
              'div',
              {
                className: (0, _classnames2.default)('desc_editor', 'pos_rel')
              },
              _react2.default.createElement(_editor2.default, {
                id: 'task-description',
                readOnly: readOnly,
                value: content,
                onChange: _this.onChange,
                placeholder: placeholder,
                showButtons: preview,
                helpers: _this.editorHelpers,
                availableLength: availableLength,
                className: className,
                onMount: _this.onChange.bind(_this),
                scrollingContainer: scrollingContainer
              })
            )
          : _react2.default.createElement(_preview2.default, {
              content: content ? content.toString('html') : '',
              heading: heading,
              onEdit: _this.onEdit
            });
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(Description, [
    {
      key: 'render',

      // componentWillReceiveProps(nextProps) {
      //   if (nextProps.content != this.props.content) {
      //     this.setState({
      //       content: nextProps.content
      //     });
      //   }
      // }

      value: function render() {
        var _props = this.props,
          heading = _props.heading,
          className = _props.className;

        return _react2.default.createElement(
          _css2.default,
          { className: (0, _classnames2.default)('clearfix', className) },
          heading &&
            _react2.default.createElement(
              'span',
              { className: 'desc_Heading' },
              heading
            ),
          this.renderContent()
        );
      }
    }
  ]);
  return Description;
})(_react.Component);

Description.propTypes = {
  content: _propTypes2.default.string,
  className: _propTypes2.default.string,
  heading: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  preview: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  maxLength: _propTypes2.default.number,
  ok: _propTypes2.default.func,
  readOnly: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  scrollingContainer: _propTypes2.default.string
};
Description.defaultProps = {
  content: '',
  placeholder: 'Type here...',
  onChange: noop,
  ok: noop,
  maxLength: 1000,
  preview: false
};
exports.default = Description;
