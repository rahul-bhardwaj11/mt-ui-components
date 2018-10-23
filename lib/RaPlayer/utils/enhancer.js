'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.normalizeStateForNamespace = normalizeStateForNamespace;
exports.namespaceConnect = namespaceConnect;

var _react = require('unistore/react');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Simple enhancer utility written over unistore to support namespacing which will allow running multiple instance of same component
*/

function normalizeStateForNamespace(namespace, object, state) {
  return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, namespace, (0, _extends4.default)({}, object)));
}

function namespaceStateToProps(mapStateToProps) {
  return function (state, ownProp) {
    var namespaceState = state[ownProp.namespace];
    if (typeof mapStateToProps === 'function') {
      return mapStateToProps(namespaceState);
    }
    return namespaceState;
  };
}

function namespaceActions(actions) {
  var keys = (0, _keys2.default)(actions());
  var wrappedActions = {};

  var _loop = function _loop(i) {
    var boundedAction = actions()[keys[i]]; // in case you want to access store in action, please pass store(getStore()) here
    wrappedActions[keys[i]] = function (state, payload) {
      var namespace = this.namespace;
      // in case no namespace is present, we won't dispatch action
      if (!namespace) {
        return state;
      }
      var namespaceState = state[namespace];
      var setState = function setState(mutatedState) {
        var obj = normalizeStateForNamespace(namespace, mutatedState, state);
        (0, _store.getStore)().setState(obj);
      };
      var updatedState = boundedAction(namespaceState, payload, setState);
      if (updatedState instanceof _promise2.default) {
        return new _promise2.default(function (resolve, reject) {
          updatedState.then(function (mutatedState) {
            // because this is promise, state might have been updated by that time,hence we are fetching state again
            var state = (0, _store.getStore)().getState();
            var namespaceState = state[namespace];
            var obj = normalizeStateForNamespace(namespace, (0, _extends4.default)({}, namespaceState, mutatedState), state);
            resolve(obj);
          }, function () {
            reject(state);
          });
        });
      }
      return normalizeStateForNamespace(namespace, (0, _extends4.default)({}, namespaceState, updatedState), state);
    };
  };

  for (var i = 0; i < keys.length; i++) {
    _loop(i);
  }

  /*eslint-disable*/
  return function (store) {
    return wrappedActions;
  };
  /*eslint-disable*/
}

function namespaceConnect(mapStateToProps, actions) {
  var wrappedMapStateToProps = namespaceStateToProps(mapStateToProps);
  var wrappedActions = namespaceActions(actions);
  return function (component) {
    return (0, _react.connect)(wrappedMapStateToProps, wrappedActions)(component);
  };
}