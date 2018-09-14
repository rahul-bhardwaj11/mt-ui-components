import React, { Component } from 'react';

import AntDatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/index.css';

class DatePicker extends Component {
  render() {
    return <AntDatePicker {...this.props} />;
  }
}

export default DatePicker;
