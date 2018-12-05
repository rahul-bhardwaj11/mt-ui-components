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

var _Tag = require('../Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledEditableContent = _styledComponents2.default.div.withConfig({
  displayName: 'EditableContent__StyledEditableContent',
  componentId: 'sc-1mp4qap-0'
})([
  'padding:6px 12px;.editableText{float:left;cursor:pointer;margin-right:12px;}.icon-edit{cursor:pointer;}'
]);

var StyledEditableInput = _styledComponents2.default.div.withConfig({
  displayName: 'EditableContent__StyledEditableInput',
  componentId: 'sc-1mp4qap-1'
})([
  '.editableInputControl{width:40%;float:left;.icon-close{font-size:10px;}}.editableContentSaveBtn,.editableContentCancelBtn{margin:4px 0px 0px 12px;padding:0px 12px;}'
]);

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
          StyledEditableInput,
          null,
          _react2.default.createElement(
            'div',
            { className: 'editableInputControl' },
            _react2.default.createElement(
              _Input2.default,
              (0, _extends3.default)({}, inputProps, {
                value: this.state.nextValue,
                onChange: this.handleInputChange
              })
            )
          ),
          !editOnEnter &&
            _react2.default.createElement(
              _react2.default.Fragment,
              null,
              _react2.default.createElement(
                _Tag2.default,
                {
                  className: 'editableContentSaveBtn',
                  type: 'action',
                  onClick: this.handleSave
                },
                'Save'
              ),
              _react2.default.createElement(
                _Tag2.default,
                {
                  className: 'editableContentCancelBtn',
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
        //const {className} = this.props;
        return _react2.default.createElement(
          StyledEditableContent,
          { className: 'editableContentWrapper' },
          _react2.default.createElement(
            'div',
            { onClick: this.toggleEditMode },
            _react2.default.createElement(
              'div',
              { className: 'editableText' },
              this.props.value
            ),
            _react2.default.createElement(_Icon2.default, { type: 'edit' })
          )
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
  editOnEnter: _propTypes2.default.bool,
  className: _propTypes2.default.string
};
EditableContent.defaultProps = {
  placeholder: 'Add Content',
  editOnEnter: false,
  value: ''
};
exports.default = EditableContent;
