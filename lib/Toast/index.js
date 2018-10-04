'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.TOAST_TYPES = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _constants = require('./constants');

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TOAST_TYPES = (exports.TOAST_TYPES = [
  'success',
  'warning',
  'error',
  'info',
  'loading'
]);

var ReloadBtn = function ReloadBtn() {
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames3.default)('floatR'),
      onClick: function onClick() {
        window.location.href = window.location.href; // eslint-disable-line
      }
    },
    _react2.default.createElement(
      'span',
      {
        className: (0, _classnames3.default)(
          'floatR',
          'marginL8',
          'toastReloadBtn'
        )
      },
      'Reload'
    )
  );
};

var HideBtn = function HideBtn(_ref) {
  var hide = _ref.hide;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames3.default)('floatR', 'link'), onClick: hide },
    'Hide'
  );
};

var FreezeOverlay = function FreezeOverlay() {
  return _react2.default.createElement('div', {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1
    }
  });
};

HideBtn.propTypes = {
  hide: _propTypes2.default.func.isRequired
};

var Toast = (function(_Component) {
  (0, _inherits3.default)(Toast, _Component);

  function Toast() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Toast);

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
        (_ref2 =
          Toast.__proto__ || (0, _getPrototypeOf2.default)(Toast)).call.apply(
          _ref2,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        timer: null
      }),
      (_this.style = {
        transitionDuration: _constants.ANIMATION_TRANSITION_DURATION + 'ms'
      }),
      (_this.removeToast = function() {
        return setTimeout(_this.props.onHide, _constants.TOAST_REMOVE_TIME);
      }),
      (_this.stopTimer = function() {
        var timer = _this.state.timer;

        if (timer) {
          clearTimeout(timer);
          _this.setState({ timer: null });
        }
      }),
      (_this.hideToast = function() {
        _this.stopTimer();
        _this.removeToast();
        _this.mountOn &&
          _reactDom2.default.unmountComponentAtNode(_this.mountOn);
      }),
      (_this.startTimer = function(time) {
        var timer = _this.state.timer;

        _this.stopTimer();
        timer = setTimeout(function() {
          _this.setState({ timer: null });
          _this.removeToast();
        }, time);
        _this.setState({ timer: timer });
      }),
      (_this.handleTimer = function(props) {
        var autoHide = props.autoHide,
          freeze = props.freeze,
          timeout = props.timeout;

        if (freeze) {
          _this.stopTimer();
        } else if (autoHide) {
          _this.startTimer(timeout);
        }
      }),
      (_this.getClasses = function() {
        var _classnames;

        var timer = _this.state.timer;
        var _this$props = _this.props,
          type = _this$props.type,
          autoHide = _this$props.autoHide,
          freeze = _this$props.freeze;

        return (0, _classnames3.default)(
          ((_classnames = {
            toast: true,
            show: freeze || (autoHide && timer) || !autoHide
          }),
          (0, _defineProperty3.default)(_classnames, 'toast-' + type, true),
          (0, _defineProperty3.default)(_classnames, 'clearfix', true),
          _classnames)
        );
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(Toast, [
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        this.handleTimer(newProps);
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var freeze = this.props.freeze;

        this.handleTimer(this.props);
        if (freeze) {
          this.mountOn = document.body.appendChild(
            document.createElement('div')
          );
          _reactDom2.default.render(
            _react2.default.createElement(FreezeOverlay, null),
            this.mountOn
          );
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          message = _props.message,
          hideBtn = _props.hideBtn,
          reloadBtn = _props.reloadBtn,
          freeze = _props.freeze;

        return _react2.default.createElement(
          _css2.default,
          null,
          _react2.default.createElement(
            'div',
            { className: this.getClasses(), style: this.style },
            _react2.default.createElement(
              'span',
              { className: 'toastMessage' },
              message
            )
          ),
          _react2.default.createElement(
            'span',
            null,
            hideBtn &&
              !freeze &&
              _react2.default.createElement(HideBtn, { hide: this.hideToast })
          ),
          _react2.default.createElement(
            'span',
            null,
            freeze &&
              reloadBtn &&
              _react2.default.createElement(ReloadBtn, null)
          )
        );
      }
    }
  ]);
  return Toast;
})(_react.Component);

Toast.propTypes = {
  message: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.oneOf(TOAST_TYPES),
  hideBtn: _propTypes2.default.bool,
  reloadBtn: _propTypes2.default.bool,
  freeze: _propTypes2.default.bool,
  autoHide: _propTypes2.default.bool,
  timeout: _propTypes2.default.number,
  onHide: _propTypes2.default.func
};
Toast.defaultProps = {
  timeout: _constants.DEFAULT_HIDE_TIMER,
  autoHide: true,
  hideBtn: true,
  freeze: false,
  load: false
};
exports.default = Toast;
