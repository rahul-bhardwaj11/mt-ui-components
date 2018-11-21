'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.RANGE_PICKER_STATE = exports.DATE_FILTER_OPTIONS = exports.defaultFormatter = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var RANGE_PICKER_STATE = 'range-picker';

var defaultFormatter = (exports.defaultFormatter = function defaultFormatter(
  from,
  to
) {
  return from.format("D MMM' YY") + ' ~ ' + to.format("D MMM' YY");
});

var yesterday = (0, _moment2.default)().subtract(1, 'days');

var lastWeek = (0, _moment2.default)().subtract(1, 'week');
var lastWeekFrom = (0, _moment2.default)(lastWeek).startOf('isoweek');
var lastWeekTo = (0, _moment2.default)(lastWeek).endOf('isoweek');

var lastMonth = (0, _moment2.default)().subtract(1, 'month');

var lastQuarter = (0, _moment2.default)().subtract(1, 'Q');
var lastQuarterFrom = (0, _moment2.default)(lastQuarter).startOf('Q');
var lastQuarterTo = (0, _moment2.default)(lastQuarter).endOf('Q');

var DATE_FILTER_OPTIONS = {
  DAY: {
    key: '0',
    content: 'Yesterday',
    resolver: {
      from: (0, _moment2.default)(yesterday).startOf('day'),
      to: (0, _moment2.default)(yesterday).endOf('day'),
      display: yesterday.format("D MMMM' YY")
    }
  },
  WEEK: {
    key: '1',
    content: 'Last Week',
    resolver: {
      from: lastWeekFrom,
      to: lastWeekTo,
      display: defaultFormatter(lastWeekFrom, lastWeekTo)
    }
  },
  MONTH: {
    key: '2',
    content: 'Last Month',
    resolver: {
      from: (0, _moment2.default)(lastMonth).startOf('month'),
      to: (0, _moment2.default)(lastMonth).endOf('month'),
      display: '' + lastMonth.format('MMMM, YY')
    }
  },
  QUARTER: {
    key: '3',
    content: 'Last Quarter',
    resolver: {
      from: lastQuarterFrom,
      to: lastQuarterTo,
      display: defaultFormatter(lastQuarterFrom, lastQuarterTo)
    }
  },
  CUSTOM: {
    key: '4',
    content: 'Custom Range',
    resolver: RANGE_PICKER_STATE
  }
};

exports.DATE_FILTER_OPTIONS = DATE_FILTER_OPTIONS;
exports.RANGE_PICKER_STATE = RANGE_PICKER_STATE;
