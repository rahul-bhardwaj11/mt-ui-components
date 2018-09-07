import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AntDatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/index.css';
import styled from 'styled-components';
// import theme from '../styles/theme';

const MtDatePicker = styled.div`
  .ant-calendar-picker-input.ant-input {
    padding: 6px 24px;
  }
  .ant-calendar-picker-icon {
    display: none;
  }

  .dropdown {
    color: blue;
    border: 1px solid red;
    .ant-calendar {
      border: 1px solid red;
      .ant-calendar-panel {
        border: 1px solid red;
        .ant-calendar-input-wrap {
          border: 1px solid red;
          display: none;
          height: 50px;
        }
      }
    }
  }
`;

class DatePicker extends Component {
  render() {
    return (
      <MtDatePicker
        innerRef={el => {
          if (el) {
            this.dropdownRef = el;
          }
        }}
      >
        <AntDatePicker
          {...this.props}
          getCalendarContainer={() => {
            return this.dropdownRef;
          }}
        />
      </MtDatePicker>
    );
  }
}

export default DatePicker;
