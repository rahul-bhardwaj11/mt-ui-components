'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RANGE_PICKER_STATE = exports.DATE_FILTER_OPTIONS = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RANGE_PICKER_STATE = 'range-picker';

var DATE_FILTER_OPTIONS = {
  DAY: {
    key: '0',
    content: 'Yesterday',
    resolver: function resolver() {
      var yesterday = (0, _moment2.default)().subtract(1, 'days');
      var from = (0, _moment2.default)(yesterday).startOf('day');
      var to = (0, _moment2.default)(yesterday).endOf('day');
      return {
        from: from,
        to: to,
        display: yesterday.format("D MMMM' YY")
      };
    }
  },
  WEEK: {
    key: '1',
    content: 'Last Week',
    resolver: function resolver() {
      var lastWeek = (0, _moment2.default)().subtract(1, 'week');
      var from = (0, _moment2.default)(lastWeek).startOf('isoweek');
      var to = (0, _moment2.default)(lastWeek).endOf('isoweek');
      return {
        from: from,
        to: to,
        display: from.format("D MMM' YY") + ' ~ ' + to.format("D MMM' YY")
      };
    }
  },
  MONTH: {
    key: '2',
    content: 'Last Month',
    resolver: function resolver() {
      var lastMonth = (0, _moment2.default)().subtract(1, 'month');
      var from = (0, _moment2.default)(lastMonth).startOf('month');
      var to = (0, _moment2.default)(lastMonth).endOf('month');
      return {
        from: from,
        to: to,
        display: '' + lastMonth.format("MMMM, YY")
      };
    }
  },
  QUARTER: {
    key: '3',
    content: 'Last Quarter',
    resolver: function resolver() {
      var lastQuarter = (0, _moment2.default)().subtract(1, 'Q');
      var from = (0, _moment2.default)(lastQuarter).startOf('Q');
      var to = (0, _moment2.default)(lastQuarter).endOf('Q');
      return {
        from: from,
        to: to,
        display: from.format("MMM' YY") + ' ~ ' + to.format("MMM' YY")
      };
    }
  },
  CUSTOM: {
    key: '4',
    content: 'Custom Range',
    resolver: function resolver() {
      return RANGE_PICKER_STATE;
    }
  }
};

exports.DATE_FILTER_OPTIONS = DATE_FILTER_OPTIONS;
exports.RANGE_PICKER_STATE = RANGE_PICKER_STATE;