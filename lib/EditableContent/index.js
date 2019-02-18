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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
    [
      '\n  padding: 6px 12px;\n\n  .editableText {\n    float: left;\n    cursor: pointer;\n    padding-right: 26px;\n  }\n\n  .icon-edit {\n    cursor: pointer;\n    position: absolute;\n    top: 3px;\n    right: 0px;\n  }\n\n  .editableWrapper {\n    float: left;\n    position: relative;\n    max-width: 100%;\n  }\n'
    ],
    [
      '\n  padding: 6px 12px;\n\n  .editableText {\n    float: left;\n    cursor: pointer;\n    padding-right: 26px;\n  }\n\n  .icon-edit {\n    cursor: pointer;\n    position: absolute;\n    top: 3px;\n    right: 0px;\n  }\n\n  .editableWrapper {\n    float: left;\n    position: relative;\n    max-width: 100%;\n  }\n'
    ]
  ),
  _templateObject2 = (0, _taggedTemplateLiteral3.default)(
    [
      '\n  .editableInputControl {\n    width: 40%;\n    float: left;\n    position: relative;\n\n    .icon-close {\n      font-size: 10px;\n    }\n  }\n\n  .editableContentSaveBtn,\n  .editableContentCancelBtn {\n    margin: 4px 0px 0px 12px;\n    padding: 0px 12px;\n  }\n\n  .ant-input-group-addon {\n    width: 32px;\n    font-size: 11px;\n    padding: 0 6px;\n    background-color: ',
      ';\n  }\n'
    ],
    [
      '\n  .editableInputControl {\n    width: 40%;\n    float: left;\n    position: relative;\n\n    .icon-close {\n      font-size: 10px;\n    }\n  }\n\n  .editableContentSaveBtn,\n  .editableContentCancelBtn {\n    margin: 4px 0px 0px 12px;\n    padding: 0px 12px;\n  }\n\n  .ant-input-group-addon {\n    width: 32px;\n    font-size: 11px;\n    padding: 0 6px;\n    background-color: ',
      ';\n  }\n'
    ]
  );

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

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledEditableContent = _styledComponents2.default.div(_templateObject);

var StyledEditableInput = _styledComponents2.default.div(
  _templateObject2,
  _theme2.default.colors.WHITE
);

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
      (_this.getInitialState = function() {
        return {
          editing: false,
          nextValue: _this.props.value
        };
      }),
      (_this.state = _this.getInitialState()),
      (_this.toggleEditMode = function(editing) {
        return _this.setState(function(prevState) {
          return {
            editing:
              typeof editing === 'undefined' ? !prevState.editing : editing
          };
        });
      }),
      (_this.handleSave = function() {
        if (_this.state.nextValue) {
          // do not save empty value in edit mode
          _this.props.onSave(_this.state.nextValue.trim());
          _this.toggleEditMode();
        } else {
          // set the initial state when we click on close with empty value
          _this.setState(_this.getInitialState());
        }
      }),
      (_this.handleCancel = function() {
        var onCancel = _this.props.onCancel;

        _this.setState({ nextValue: _this.props.value }); // resetting to older value
        _this.toggleEditMode();
        onCancel && onCancel();
      }),
      (_this.handleInputChange = function(event) {
        var onChange = _this.props.onChange;

        var content = event.target.value;
        _this.setState({ nextValue: content });
        onChange && onChange(content);
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
      key: 'componentDidUpdate',
      value: function componentDidUpdate(oldProps) {
        var newProps = this.props;
        if (oldProps.value !== newProps.value) {
          this.setState(this.getInitialState()); // reset to older state
        }
      }
    },
    {
      key: 'renderEditingComponent',
      value: function renderEditingComponent() {
        var _props = this.props,
          editOnEnter = _props.editOnEnter,
          showRemainingCharacterCount = _props.showRemainingCharacterCount,
          inputProps = (0, _objectWithoutProperties3.default)(_props, [
            'editOnEnter',
            'showRemainingCharacterCount'
          ]);

        if (editOnEnter) {
          inputProps.onPressEnter = this.handleSave;
          inputProps.onBlur = this.handleSave;
          inputProps.suffix = _react2.default.createElement(_Icon2.default, {
            type: 'close',
            onClick: this.handleClear
          });
        }
        var hasError = inputProps.errors && inputProps.errors.length;
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
                onChange: this.handleInputChange,
                addonAfter:
                  showRemainingCharacterCount &&
                  inputProps.maxLength &&
                  inputProps.maxLength - this.state.nextValue.length
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
                  onClick: !hasError && this.handleSave,
                  disabled: hasError
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
        return _react2.default.createElement(
          StyledEditableContent,
          { className: 'editableContentWrapper' },
          _react2.default.createElement(
            'div',
            {
              className: 'clearfix editableWrapper',
              onClick: this.toggleEditMode
            },
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
  editOnEnter: _propTypes2.default.bool,
  showRemainingCharacterCount: _propTypes2.default.bool,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onSave: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func
};
EditableContent.defaultProps = {
  placeholder: 'Add Content',
  editOnEnter: false,
  value: '',
  showRemainingCharacterCount: false
};
exports.default = EditableContent;
