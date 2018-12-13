'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUndefined = exports.deepmerge = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.getPrefixes = getPrefixes;
exports.titleCase = titleCase;
exports.runPrefixMethod = runPrefixMethod;
exports.toHHMMSS = toHHMMSS;
exports.getElementOffset = getElementOffset;
exports.getColorMap = getColorMap;
exports.parseText = parseText;
exports.isIE = isIE;

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorMap = {};
exports.deepmerge = _deepmerge2.default;
function getPrefixes() {
  var pfx = ['webkit', 'moz', 'ms', 'o', '', 'MS'];
  return pfx;
}

var isUndefined = exports.isUndefined = function isUndefined(value) {
  return typeof value === 'undefined';
};

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

function runPrefixMethod(obj, method) {
  var pfx = getPrefixes();
  var p = 0,
      m,
      t;
  while (p < pfx.length && !obj[m]) {
    m = method;
    if (pfx[p] == '') {
      m = m.substr(0, 1).toLowerCase() + m.substr(1);
    }
    m = pfx[p] + m;
    t = (0, _typeof3.default)(obj[m]);
    if (t != 'undefined') {
      pfx = [pfx[p]];
      return t == 'function' ? obj[m]() : obj[m];
    }
    p++;
  }
}

function toHHMMSS(str) {
  if (!str) {
    return '00:00';
  }
  var sec_num = Math.round(str);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  var minsec = minutes + ':' + seconds;
  return hours != '00' ? hours + ':' + minsec : minsec;
}

function getElementOffset(element) {
  var de = document.documentElement;
  var box = element.getBoundingClientRect();
  var top = box.top + window.pageYOffset - de.clientTop;
  var left = box.left + window.pageXOffset - de.clientLeft;
  return { top: top, left: left };
}

function getColorMap(authors) {
  if (!authors || !authors.length) {
    return colorMap;
  }
  var colors = ['#0ed5c9', '#069eff', '#000000'];
  var j = 0;
  authors.map(function (author) {
    if (!colorMap[author]) {
      colorMap[author] = colors[j++];
    }
  });
  return colorMap;
}

function parseText(text) {
  if (!text) {
    return '';
  }
  return text.replace(/\r?\n/g, '\n');
}

function isIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}