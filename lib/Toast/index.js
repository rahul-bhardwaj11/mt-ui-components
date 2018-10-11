'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingToast = exports.infoToast = exports.warningToast = exports.successToast = exports.errorToast = exports.TOAST_TYPES = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

exports.hideToast = hideToast;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _constants = require('./constants');

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOAST_TYPES = exports.TOAST_TYPES = ['success', 'warning', 'error', 'info', 'loading'];

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
      { className: (0, _classnames3.default)('floatR', 'marginL8', 'toastReloadBtn') },
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
      zIndex: _mixins2.default.zIndex.OVERLAY
    }
  });
};

HideBtn.propTypes = {
  hide: _propTypes2.default.func.isRequired
};

var Toast = function (_Component) {
  (0, _inherits3.default)(Toast, _Component);

  function Toast(props) {
    (0, _classCallCheck3.default)(this, Toast);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Toast.__proto__ || (0, _getPrototypeOf2.default)(Toast)).call(this, props));

    _initialiseProps.call(_this);

    var freeze = props.freeze;

    if (freeze) {
      _this.element = document.createElement('div');
    }
    return _this;
  }

  (0, _createClass3.default)(Toast, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.handleTimer(newProps);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var freeze = this.props.freeze;

      this.handleTimer(this.props);
      freeze && document.body.appendChild(this.element);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var freeze = this.props.freeze;

      if (freeze) {
        document.body.removeChild(this.element);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          hideBtn = _props.hideBtn,
          reloadBtn = _props.reloadBtn,
          freeze = _props.freeze;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        freeze && _reactDom2.default.createPortal(_react2.default.createElement(FreezeOverlay, null), this.element),
        _react2.default.createElement(
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
            hideBtn && !freeze && _react2.default.createElement(HideBtn, { hide: this.hideToast })
          ),
          _react2.default.createElement(
            'span',
            null,
            freeze && reloadBtn && _react2.default.createElement(ReloadBtn, null)
          )
        )
      );
    }
  }]);
  return Toast;
}(_react.Component);

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
  hideBtn: false,
  freeze: false,
  load: false
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = {
    timer: null
  };
  this.element = null;
  this.style = {
    transitionDuration: _constants.ANIMATION_TRANSITION_DURATION + 'ms'
  };

  this.removeToast = function () {
    return setTimeout(function () {
      return _this2.props.onHide;
    }, _constants.TOAST_REMOVE_TIME);
  };

  this.stopTimer = function () {
    var timer = _this2.state.timer;

    if (timer) {
      clearTimeout(timer);
      _this2.setState({ timer: null });
    }
  };

  this.hideToast = function () {
    _this2.stopTimer();
    _this2.removeToast();
    _this2.mountOn && _reactDom2.default.unmountComponentAtNode(_this2.mountOn);
  };

  this.startTimer = function (time) {
    var timer = _this2.state.timer;

    _this2.stopTimer();
    timer = setTimeout(function () {
      _this2.setState({ timer: null });
      _this2.removeToast();
    }, time);
    _this2.setState({ timer: timer });
  };

  this.handleTimer = function (props) {
    var autoHide = props.autoHide,
        freeze = props.freeze,
        timeout = props.timeout;

    if (freeze) {
      _this2.stopTimer();
    } else if (autoHide) {
      _this2.startTimer(timeout);
    }
  };

  this.getClasses = function () {
    var _classnames;

    var timer = _this2.state.timer;
    var _props2 = _this2.props,
        type = _props2.type,
        autoHide = _props2.autoHide,
        freeze = _props2.freeze;


    return (0, _classnames3.default)((_classnames = {
      toast: true,
      show: freeze || autoHide && timer || !autoHide
    }, (0, _defineProperty3.default)(_classnames, 'toast-' + type, true), (0, _defineProperty3.default)(_classnames, 'clearfix', true), _classnames));
  };
};

exports.default = Toast;


function addBodyOverflow(overflow) {
  document.getElementsByTagName('body')[0].style.overflow = overflow;
}

var MountOn = void 0;
var show = function show(_ref2) {
  var message = _ref2.message,
      _ref2$type = _ref2.type,
      type = _ref2$type === undefined ? 'success' : _ref2$type,
      freeze = _ref2.freeze,
      mountId = _ref2.mountId,
      rest = (0, _objectWithoutProperties3.default)(_ref2, ['message', 'type', 'freeze', 'mountId']);

  mountId = mountId || 'toast';
  MountOn = document.getElementById(mountId);
  if (!MountOn) {
    return;
  }
  if (message) {
    _reactDom2.default.render(_react2.default.createElement(Toast, (0, _extends3.default)({ message: message, type: type, onHide: hideToast }, rest)), MountOn);
  }
  freeze && addBodyOverflow('hidden');
};

function hideToast() {
  if (!MountOn) {
    return;
  }
  _reactDom2.default.unmountComponentAtNode(MountOn);
  addBodyOverflow('auto');
}

var errorToast = function errorToast(_ref3) {
  var message = _ref3.message,
      rest = (0, _objectWithoutProperties3.default)(_ref3, ['message']);

  show((0, _extends3.default)({ message: message, type: 'error' }, rest));
};
exports.errorToast = errorToast;
var successToast = function successToast(_ref4) {
  var message = _ref4.message,
      rest = (0, _objectWithoutProperties3.default)(_ref4, ['message']);

  show((0, _extends3.default)({ message: message, type: 'success' }, rest));
};
exports.successToast = successToast;
var warningToast = function warningToast(_ref5) {
  var message = _ref5.message,
      rest = (0, _objectWithoutProperties3.default)(_ref5, ['message']);

  show((0, _extends3.default)({ message: message, type: 'warning' }, rest));
};
exports.warningToast = warningToast;
var infoToast = function infoToast(_ref6) {
  var message = _ref6.message,
      rest = (0, _objectWithoutProperties3.default)(_ref6, ['message']);

  show((0, _extends3.default)({ message: message, type: 'info' }, rest));
};
exports.infoToast = infoToast;
var loadingToast = function loadingToast(_ref7) {
  var message = _ref7.message,
      rest = (0, _objectWithoutProperties3.default)(_ref7, ['message']);

  show((0, _extends3.default)({ message: message, type: 'loading' }, rest));
};
exports.loadingToast = loadingToast;