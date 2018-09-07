import React, { Component } from 'react';

import AntDatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/index.css';
import styled from 'styled-components';

const MtDatePicker = styled(AntDatePicker)``;

class DatePicker extends Component {
  render() {
    return <MtDatePicker {...this.props} />;
  }
}

export default DatePicker;
