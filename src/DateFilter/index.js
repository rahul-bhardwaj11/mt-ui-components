import React, { Component, createRef } from 'react';
import cs from 'classnames';
import PropTypes from 'prop-types';
import { RangePicker } from 'antd/lib/date-picker';
import moment from 'moment';

import { DATE_FILTER_OPTIONS, RANGE_PICKER_STATE } from './dateFilterOptions';
import Dropdown from '../Dropdown';
import DateFilterStyle from './style';
import Icon from '../Icon';

class DateFilter extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        resolver: PropTypes.func.isRequired
      })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    dateFormat: PropTypes.func
  };

  static defaultProps = {
    options: Object.keys(DATE_FILTER_OPTIONS).map(v => DATE_FILTER_OPTIONS[v]),
    placeholder: 'Date',
    onChange: () => {},
    disabledDate: startValue => startValue > moment()
  };

  state = {
    date: null,
    dropdownVisible: false
  };
  ref = createRef();

  onSelect = key => {
    let date = this.props.options.find(v => v.key === key).resolver();
    this.setDate(date);
    date !== RANGE_PICKER_STATE && this.dropdownVisibilityChange(false);
  };

  setDate(date) {
    this.setState({ date }, () => {
      this.state.date !== RANGE_PICKER_STATE &&
        this.props.onChange(this.state.date);
    });
  }

  onCustomDateSelect = ([from, to]) => {
    const date = {
      from,
      to,
      display: `${from.format("D MMM' YY")} ~ ${to.format("D MMM' YY")}`
    };
    this.setDate(date);
    this.dropdownVisibilityChange(false);
  };

  dropdownVisibilityChange = dropdownVisible =>
    this.setState({ dropdownVisible });

  render() {
    let {
      options,
      placeholder: date,
      dateFormat,
      ...rangePickerProps
    } = this.props;
    let { date: setDate, dropdownVisible } = this.state;
    const isDateSelected = setDate && setDate !== RANGE_PICKER_STATE;
    const dateInputClass = cs('dateInput', {
      dateSelected: isDateSelected,
      dateNotSelected: !isDateSelected,
      dropdownOpen: dropdownVisible && !isDateSelected
    });
    if (isDateSelected) {
      date = dateFormat ? dateFormat(setDate) : setDate.display;
    }
    return (
      <DateFilterStyle>
        <Dropdown
          onVisibleChange={this.dropdownVisibilityChange}
          placement="bottomLeft"
          options={options}
          trigger="click"
          onSelect={this.onSelect}
        >
          <div className={dateInputClass} ref={this.ref}>
            <span className="datePlaceholder">{date}</span>
            <Icon type="down_fillcaret" className="dateCaret" />
          </div>
        </Dropdown>
        {setDate === RANGE_PICKER_STATE && (
          <RangePicker
            {...rangePickerProps}
            open
            onChange={this.onCustomDateSelect}
            getCalendarContainer={() => this.ref.current}
            dropdownClassName="dateRangeDropdown"
            style={{
              display: 'none'
            }}
          />
        )}
      </DateFilterStyle>
    );
  }
}

export { DATE_FILTER_OPTIONS };

export default DateFilter;
