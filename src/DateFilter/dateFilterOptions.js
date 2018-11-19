import moment from 'moment';
const RANGE_PICKER_STATE = 'range-picker';

const DATE_FILTER_OPTIONS = {
  DAY: {
    key: '0',
    content: 'Yesterday',
    resolver: () => {
      const yesterday = moment().subtract(1, 'days');
      const from = moment(yesterday).startOf('day');
      const to = moment(yesterday).endOf('day');
      return {
        from,
        to,
        display: yesterday.format("D MMMM' YY")
      };
    }
  },
  WEEK: {
    key: '1',
    content: 'Last Week',
    resolver: () => {
      const lastWeek = moment().subtract(1, 'week');
      const from = moment(lastWeek).startOf('isoweek');
      const to = moment(lastWeek).endOf('isoweek');
      return {
        from,
        to,
        display: `${from.format("D MMM' YY")} ~ ${to.format("D MMM' YY")}`
      };
    }
  },
  MONTH: {
    key: '2',
    content: 'Last Month',
    resolver: () => {
      const lastMonth = moment().subtract(1, 'month');
      const from = moment(lastMonth).startOf('month');
      const to = moment(lastMonth).endOf('month');
      return {
        from,
        to,
        display: `${lastMonth.format('MMMM, YY')}`
      };
    }
  },
  QUARTER: {
    key: '3',
    content: 'Last Quarter',
    resolver: () => {
      const lastQuarter = moment().subtract(1, 'Q');
      const from = moment(lastQuarter).startOf('Q');
      const to = moment(lastQuarter).endOf('Q');
      return {
        from,
        to,
        display: `${from.format("MMM' YY")} ~ ${to.format("MMM' YY")}`
      };
    }
  },
  CUSTOM: {
    key: '4',
    content: 'Custom Range',
    resolver: () => RANGE_PICKER_STATE
  }
};

export { DATE_FILTER_OPTIONS, RANGE_PICKER_STATE };
