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

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _ConfirmBox = require('../ConfirmBox');

var _ConfirmBox2 = _interopRequireDefault(_ConfirmBox);

var _Tag = require('../Tag');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PdfPlayer = (function(_Component) {
  (0, _inherits3.default)(PdfPlayer, _Component);

  function PdfPlayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PdfPlayer);

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
          PdfPlayer.__proto__ ||
          (0, _getPrototypeOf2.default)(PdfPlayer)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        edit: false,
        title: _this.props.title
      }),
      (_this.pageChanged = function(event) {
        var onPageChange = _this.props.onPageChange;

        var data = event.data.split('.');
        if (data[0] == 'A') {
          var pageNumber = parseInt(data[1]);
          onPageChange && onPageChange(pageNumber);
        }
      }),
      (_this.goToPage = function(pageNumber) {
        _this.iframe.contentWindow.postMessage('page.' + pageNumber, '*');
      }),
      (_this.handleTitleChange = function() {
        var onTitleEdit = _this.props.onTitleEdit;

        _this.setState({ title: _this.newTitle, edit: false });
        onTitleEdit && onTitleEdit(_this.newTitle);
      }),
      (_this.activeEditMode = function() {
        _this.setState({ edit: true });
        _this.newTitle = _this.state.title;
      }),
      (_this.renderEditTitleDiv = function() {
        var _this$state = _this.state,
          edit = _this$state.edit,
          title = _this$state.title;

        return edit
          ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_Input2.default, {
                defaultValue: title,
                onChange: function onChange(e, value) {
                  _this.newTitle = value;
                }
              }),
              _react2.default.createElement(
                _Tag2.default,
                { onClick: _this.handleTitleChange },
                'save'
              ),
              _react2.default.createElement(
                _Tag2.default,
                {
                  onClick: function onClick() {
                    return _this.setState({ edit: false });
                  }
                },
                'cancel'
              )
            )
          : _react2.default.createElement(
              'div',
              { onClick: _this.activeEditMode },
              title
            );
      }),
      (_this.renderReplaceDiv = function() {
        var onRemove = _this.props.onRemove;

        return _react2.default.createElement(
          _ConfirmBox2.default,
          {
            onConfirm: function onConfirm() {
              onRemove && onRemove();
            }
          },
          'Replace'
        );
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(PdfPlayer, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
          url = _props.url,
          uuid = _props.uuid;

        var staticUrl = uuid + '&width=547&height=401';
        staticUrl = staticUrl.replace('crocodoc', 'pdfViewer');

        var form = document.createElement('form');
        form.action = staticUrl;
        form.target = uuid;
        form.method = 'post';
        form.style.display = 'none';

        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'pdf';
        input.value = url;
        form.appendChild(input);

        var iframe = document.createElement('iframe');
        this.iframe = iframe;
        iframe.name = uuid;
        iframe.scrolling = 'no';
        iframe.style.width = '100%';
        iframe.style.height = '100%';

        this.ref.appendChild(iframe);
        this.ref.appendChild(form);
        form.submit();

        if (!window.addEventListener) {
          window.attachEvent('onmessage', this.pageChanged);
        } else {
          window.addEventListener('message', this.pageChanged, false);
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (!window.removeEventListener) {
          window.detachEvent('onmessage', this.pageChanged);
        } else {
          window.removeEventListener('message', this.pageChanged, false);
        }
      }
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.nextPage != this.props.nextPage) {
          this.goToPage(nextProps.nextPage);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props2 = this.props,
          style = _props2.style,
          isEditMode = _props2.isEditMode;

        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          isEditMode &&
            _react2.default.createElement(
              'div',
              null,
              this.renderEditTitleDiv(),
              this.renderReplaceDiv()
            ),
          _react2.default.createElement('div', {
            ref: function ref(e) {
              return (_this2.ref = e);
            },
            style: style
          })
        );
      }
    }
  ]);
  return PdfPlayer;
})(_react.Component);

PdfPlayer.propTypes = {
  nextPage: _propTypes2.default.number,
  url: _propTypes2.default.string.isRequired,
  uuid: _propTypes2.default.string.isRequired,
  onPageChange: _propTypes2.default.func,
  isEditMode: _propTypes2.default.bool,
  onRemove: _propTypes2.default.func,
  onTitleEdit: _propTypes2.default.func,
  style: _propTypes2.default.object,
  title: _propTypes2.default.string
};
PdfPlayer.defaultProps = {
  style: { width: 650, height: 378 }
};
exports.default = PdfPlayer;
