'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _outlookCalendar = require('./assests/images/outlookCalendar.svg');

var _outlookCalendar2 = _interopRequireDefault(_outlookCalendar);

var _googleCalendar2 = require('./assests/images/googleCalendar.svg');

var _googleCalendar3 = _interopRequireDefault(_googleCalendar2);

var _keywordsFull2 = require('./assests/images/keywordsFull.svg');

var _keywordsFull3 = _interopRequireDefault(_keywordsFull2);

var _keywordsFullActive2 = require('./assests/images/keywordsFullActive.svg');

var _keywordsFullActive3 = _interopRequireDefault(_keywordsFullActive2);

var _textConditionFull2 = require('./assests/images/textConditionFull.svg');

var _textConditionFull3 = _interopRequireDefault(_textConditionFull2);

var _textConditionFullActive2 = require('./assests/images/textConditionFullActive.svg');

var _textConditionFullActive3 = _interopRequireDefault(_textConditionFullActive2);

var _internalError2 = require('./assests/images/internalError.svg');

var _internalError3 = _interopRequireDefault(_internalError2);

var _pageNotFound2 = require('./assests/images/pageNotFound.svg');

var _pageNotFound3 = _interopRequireDefault(_pageNotFound2);

var _serviceUnavailable2 = require('./assests/images/serviceUnavailable.svg');

var _serviceUnavailable3 = _interopRequireDefault(_serviceUnavailable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  outlookCalendar: function outlookCalendar(_ref) {
    var _ref$width = _ref.width,
        width = _ref$width === undefined ? 30 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? 30 : _ref$height;
    return {
      background: 'url(' + _outlookCalendar2.default + ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  },
  googleCalendar: function googleCalendar(_ref2) {
    var _ref2$width = _ref2.width,
        width = _ref2$width === undefined ? 30 : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === undefined ? 30 : _ref2$height;
    return {
      background: 'url(' + _googleCalendar3.default + ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  },
  keywordsFull: function keywordsFull(_ref3) {
    var _ref3$width = _ref3.width,
        width = _ref3$width === undefined ? 30 : _ref3$width,
        _ref3$height = _ref3.height,
        height = _ref3$height === undefined ? 30 : _ref3$height;
    return {
      background: 'url(' + _keywordsFull3.default + ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  },
  textConditionFull: function textConditionFull(_ref4) {
    var _ref4$width = _ref4.width,
        width = _ref4$width === undefined ? 30 : _ref4$width,
        _ref4$height = _ref4.height,
        height = _ref4$height === undefined ? 30 : _ref4$height;
    return {
      background: 'url(' + _textConditionFull3.default + ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  },
  keywordsFullActive: function keywordsFullActive(_ref5) {
    var _ref5$width = _ref5.width,
        width = _ref5$width === undefined ? 30 : _ref5$width,
        _ref5$height = _ref5.height,
        height = _ref5$height === undefined ? 30 : _ref5$height;
    return {
      background: 'url(' + _keywordsFullActive3.default + ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  },
  textConditionFullActive: function textConditionFullActive(_ref6) {
    var _ref6$width = _ref6.width,
        width = _ref6$width === undefined ? 30 : _ref6$width,
        _ref6$height = _ref6.height,
        height = _ref6$height === undefined ? 30 : _ref6$height;
    return {
      background: 'url(' + _textConditionFullActive3.default + ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  },
  internalError: function internalError(_ref7) {
    var _ref7$width = _ref7.width,
        width = _ref7$width === undefined ? 100 : _ref7$width,
        _ref7$height = _ref7.height,
        height = _ref7$height === undefined ? 100 : _ref7$height;
    return {
      background: 'url(' + _internalError3.default + ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  },
  pageNotFound: function pageNotFound(_ref8) {
    var _ref8$width = _ref8.width,
        width = _ref8$width === undefined ? 100 : _ref8$width,
        _ref8$height = _ref8.height,
        height = _ref8$height === undefined ? 100 : _ref8$height;
    return {
      background: 'url(' + _pageNotFound3.default + ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  },
  serviceUnavailable: function serviceUnavailable(_ref9) {
    var _ref9$width = _ref9.width,
        width = _ref9$width === undefined ? 100 : _ref9$width,
        _ref9$height = _ref9.height,
        height = _ref9$height === undefined ? 100 : _ref9$height;
    return {
      background: 'url(' + _serviceUnavailable3.default + ')  no-repeat 0 0 / contain transparent',
      width: width,
      height: height
    };
  }
};