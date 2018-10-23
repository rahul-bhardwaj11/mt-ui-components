"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;
function createStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var state = initialState;
  var subscribers = [];

  var getState = function getState() {
    return state;
  };

  var setState = function setState(newState) {
    state = newState;
    subscribers.map(function (fn) {
      return fn();
    });
  };

  var subscribe = function subscribe(fn) {
    if (!subscribers.includes(fn)) {
      subscribers.push(fn);
    }
    return function () {
      subscribers = subscribers.filter(function (fn) {
        return !subscribers.includes(fn);
      });
    };
  };

  return {
    getState: getState,
    setState: setState,
    subscribe: subscribe
  };
}