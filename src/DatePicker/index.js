import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AntDatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/index.css';
import styled from 'styled-components';
// import theme from '../styles/theme';

const MtDatePicker = styled(AntDatePicker)`
  &.datepicker {
    .ant-calendar-picker-input.ant-input {
      padding: 6px 24px;
    }
    .ant-calendar-picker-icon {
      display: none;
    }
  }
  .dropdown {
    left: 1px;
    top: 40px;
    border: 1px solid red;
    &.ant-calendar-picker-container {
      position: relative;
      display: inline-block;
      margin-top: 40px;
    }
    .ant-calendar {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
      height: 248px;
      width: 346px;
      border-radius: 0px;
      .ant-calendar-panel {
        .ant-calendar-input-wrap {
          display: none;
        }
      }
    }
  }
`;

class DatePicker extends Component {
  render() {
    return (
      <MtDatePicker
        {...this.props}
        /* getCalendarContainer={() => {
            return this.dropdownRef;
          }}*/
      />
    );
  }
}

export default DatePicker;
