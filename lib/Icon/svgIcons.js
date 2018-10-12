'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _outlookCalendar = require('./assests/images/outlookCalendar.svg');

var _outlookCalendar2 = _interopRequireDefault(_outlookCalendar);

var _googleCalendar = require('./assests/images/googleCalendar.svg');

var _googleCalendar2 = _interopRequireDefault(_googleCalendar);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  outlookCalendar: {
    background:
      'url(' +
      _outlookCalendar2.default +
      ')  no-repeat 0 0 / contain transparent',
    width: 30,
    height: 30,
    float: 'left'
  },
  googleCalendar: {
    background:
      'url(' +
      _googleCalendar2.default +
      ')  no-repeat 0 0 / contain transparent',
    width: 30,
    height: 30,
    float: 'left'
  }
};
