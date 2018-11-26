'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
);

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

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var EditableContent = (function(_Component) {
  (0, _inherits3.default)(EditableContent, _Component);

  function EditableContent() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EditableContent);

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
          EditableContent.__proto__ ||
          (0, _getPrototypeOf2.default)(EditableContent)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        editing: !_this.props.value,
        nextValue: _this.props.value
      }),
      (_this.toggleEditMode = function() {
        return _this.setState(function(prevState) {
          return { editing: !prevState.editing };
        });
      }),
      (_this.handleSave = function() {
        _this.props.onChange(_this.state.nextValue);
        _this.toggleEditMode();
      }),
      (_this.handleCancel = function() {
        _this.setState({ nextValue: _this.props.value }); // resetting to older value
        _this.toggleEditMode();
      }),
      (_this.handleInputChange = function(event) {
        _this.setState({ nextValue: event.target.value });
      }),
      (_this.handleClear = function() {
        return _this.setState({ nextValue: '' });
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(EditableContent, [
    {
      key: 'renderEditingComponent',
      value: function renderEditingComponent() {
        var _props = this.props,
          editOnEnter = _props.editOnEnter,
          inputProps = (0, _objectWithoutProperties3.default)(_props, [
            'editOnEnter'
          ]);

        if (editOnEnter) {
          inputProps.onPressEnter = this.handleSave;
          inputProps.onBlur = this.handleSave;
          inputProps.suffix = _react2.default.createElement(_Icon2.default, {
            type: 'close',
            onClick: this.handleClear
          });
        }
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Input2.default,
            (0, _extends3.default)({}, inputProps, {
              value: this.state.nextValue,
              onChange: this.handleInputChange
            })
          ),
          !editOnEnter &&
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _Button2.default,
                { size: 'small', onClick: this.handleSave },
                'Save'
              ),
              _react2.default.createElement(
                _Button2.default,
                {
                  size: 'small',
                  type: 'secondary',
                  onClick: this.handleCancel
                },
                'Cancel'
              )
            )
        );
      }
    },
    {
      key: 'renderStaticComponent',
      value: function renderStaticComponent() {
        return _react2.default.createElement(
          'div',
          { onClick: this.toggleEditMode },
          _react2.default.createElement('div', null, this.props.value),
          _react2.default.createElement(_Icon2.default, { type: 'edit' })
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        return this.state.editing
          ? this.renderEditingComponent()
          : this.renderStaticComponent();
      }
    }
  ]);
  return EditableContent;
})(_react.Component);

EditableContent.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.string,
  editOnEnter: _propTypes2.default.bool
};
EditableContent.defaultProps = {
  placeholder: 'Add Content',
  editOnEnter: false,
  value: ''
};
exports.default = EditableContent;
