'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

exports.default = ProviderHelperHoc;
exports.connect = connect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storeHelper = require('./storeHelper');

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createContext = (0, _react.createContext)(),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

function ProviderHelperHoc(Comp) {
  return function (_Component) {
    (0, _inherits3.default)(ProviderHelper, _Component);

    function ProviderHelper(props) {
      (0, _classCallCheck3.default)(this, ProviderHelper);

      var _this = (0, _possibleConstructorReturn3.default)(this, (ProviderHelper.__proto__ || (0, _getPrototypeOf2.default)(ProviderHelper)).call(this, props));

      _this.stateChanged = function () {
        _this.setState({});
      };

      _this.store = (0, _storeHelper.createStore)((0, _initialState2.default)(props));
      _this.unsubscribe = _this.store.subscribe(_this.stateChanged);
      return _this;
    }

    (0, _createClass3.default)(ProviderHelper, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var currentState = this.store.getState();
        var newState = (0, _deepmerge2.default)(currentState, nextProps);
        this.store.setState(newState);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.unsubscribe();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          Provider,
          { value: this.store },
          _react2.default.createElement(Comp, (0, _extends3.default)({}, this.props, { namespace: this.namespace }))
        );
      }
    }]);
    return ProviderHelper;
  }(_react.Component);
}

var noop = function noop(state) {
  return state;
};

function connect() {
  var mapStateToProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
  var actions = arguments[1];

  return function connectedWrapper(Comp) {
    function connected(ownProps) {
      return _react2.default.createElement(
        Consumer,
        null,
        function (store) {
          var stateProps = mapStateToProps(store.getState());
          var reducers = actions();
          var boundActions = {};
          (0, _keys2.default)(actions()).reduce(function (boundActions, v) {
            boundActions[v] = function bound(payload) {
              var newState = reducers[v](store.getState(), payload);
              store.setState(newState);
            };
            return boundActions;
          }, boundActions);
          var mergedProps = (0, _extends3.default)({}, stateProps, ownProps, boundActions);
          return _react2.default.createElement(Comp, mergedProps);
        }
      );
    }
    connected.displayName = 'Connected(' + (Comp.displayName || Comp.name) + ')';
    return connected;
  };
}