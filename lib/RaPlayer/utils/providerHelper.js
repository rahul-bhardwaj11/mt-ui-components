'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

      _this.store = (0, _storeHelper.createStore)((0, _initialState2.default)(props));
      window.raPlayer = _this.store;
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
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          Provider,
          { value: this.store },
          _react2.default.createElement(Comp, this.props)
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
    var _class, _temp;

    return _temp = _class = function (_Component2) {
      (0, _inherits3.default)(Connected, _Component2);

      function Connected() {
        (0, _classCallCheck3.default)(this, Connected);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Connected.__proto__ || (0, _getPrototypeOf2.default)(Connected)).call(this));

        _this2.stateChanged = function () {
          _this2.setState({});
        };

        _this2.createBoundActions = function () {
          var reducers = actions();
          var boundActions = {};
          (0, _keys2.default)(actions()).reduce(function (boundActions, v) {
            boundActions[v] = function (payload) {
              var newState = reducers[v](_this2.store.getState(), payload);
              _this2.store.setState(newState);
            };
            return boundActions;
          }, boundActions);
          _this2.boundActions = boundActions;
        };

        _this2.stateChanged = _this2.stateChanged.bind(_this2);
        return _this2;
      }

      (0, _createClass3.default)(Connected, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.unsubscribe();
        }
      }, {
        key: 'render',
        value: function render() {
          var _this3 = this;

          var ownProps = this.props;
          return _react2.default.createElement(
            Consumer,
            null,
            function (store) {
              var stateProps = mapStateToProps(store.getState());
              _this3.store = store;
              _this3.unsubscribe = store.subscribe(_this3.stateChanged);
              if (!_this3.boundActions) {
                _this3.createBoundActions();
              }
              // TODO: have to fix this through memorization
              var mergedProps = (0, _assign2.default)({}, ownProps, stateProps, _this3.boundActions);
              return _react2.default.createElement(Comp, mergedProps);
            }
          );
        }
      }]);
      return Connected;
    }(_react.Component), _class.displayName = 'Connected(' + (Comp.displayName || Comp.name) + ')', _temp;
  };
}