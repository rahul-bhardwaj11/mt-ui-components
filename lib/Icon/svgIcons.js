'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _outlookCalendar = require('./assests/images/outlookCalendar.svg');

var _outlookCalendar2 = _interopRequireDefault(_outlookCalendar);

var _googleCalendar = require('./assests/images/googleCalendar.svg');

var _googleCalendar2 = _interopRequireDefault(_googleCalendar);

var _keywordsFull2 = require('./assests/images/keywordsFull.svg');

var _keywordsFull3 = _interopRequireDefault(_keywordsFull2);

var _keywordsFullActive2 = require('./assests/images/keywordsFullActive.svg');

var _keywordsFullActive3 = _interopRequireDefault(_keywordsFullActive2);

var _textConditionFull2 = require('./assests/images/textConditionFull.svg');

var _textConditionFull3 = _interopRequireDefault(_textConditionFull2);

var _textConditionFullActive2 = require('./assests/images/textConditionFullActive.svg');

var _textConditionFullActive3 = _interopRequireDefault(
  _textConditionFullActive2
);

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
  },
  // googleCalendar:(width=30,height=30)=> ({
  //   background: `url(${googleCalendar})  no-repeat 0 0 / contain transparent`,
  //   width: width,
  //   height: height,
  // }),
  keywordsFull: function keywordsFull(_ref) {
    var _ref$width = _ref.width,
      width = _ref$width === undefined ? 30 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 30 : _ref$height;
    return {
      background:
        'url(' +
        _keywordsFull3.default +
        ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  },
  textConditionFull: function textConditionFull(_ref2) {
    var _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? 30 : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === undefined ? 30 : _ref2$height;
    return {
      background:
        'url(' +
        _textConditionFull3.default +
        ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  },
  keywordsFullActive: function keywordsFullActive(_ref3) {
    var _ref3$width = _ref3.width,
      width = _ref3$width === undefined ? 30 : _ref3$width,
      _ref3$height = _ref3.height,
      height = _ref3$height === undefined ? 30 : _ref3$height;
    return {
      background:
        'url(' +
        _keywordsFullActive3.default +
        ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  },
  textConditionFullActive: function textConditionFullActive(_ref4) {
    var _ref4$width = _ref4.width,
      width = _ref4$width === undefined ? 30 : _ref4$width,
      _ref4$height = _ref4.height,
      height = _ref4$height === undefined ? 30 : _ref4$height;
    return {
      background:
        'url(' +
        _textConditionFullActive3.default +
        ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  }
};
