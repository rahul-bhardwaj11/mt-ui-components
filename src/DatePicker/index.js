import React, { Component } from 'react';

import AntDatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';

const StyledDatePicker = styled.div`
  .ant-calendar-selected-day {
    .ant-calendar-date {
      background: ${theme.colors.INDIGO};
      border: 1px solid ${theme.colors.INDIGO};
      border-radius: 4px;
      color: #fff;
    }
  }
  .ant-calendar-last-month-cell {
    .ant-calendar-date {
      color: ${theme.colors.OUTER_SPACE};
    }
  }
  .ant-calendar-date {
    color: ${theme.colors.DARK_OUTER_SPACE};
    font-size: 12px;
    font-weight: 600;

    &:hover {
      background: ${theme.colors.INDIGO};
      border: 1px solid ${theme.colors.INDIGO};
      border-radius: 4px;
      color: #fff;
    }
  }
  .ant-calendar-column-header-inner {
    color: ${theme.colors.OUTER_SPACE};
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .ant-calendar-next-month-btn-day .ant-calendar-date {
    color: ${theme.colors.OUTER_SPACE};
  }
`;

class DatePicker extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledDatePicker innerRef={e => (this.datePickerContainer = e)} />
        <AntDatePicker
          {...this.props}
          getCalendarContainer={() => this.datePickerContainer}
        />
      </React.Fragment>
    );
  }
}

export default DatePicker;
