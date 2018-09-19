import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntDatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/index.css';
import styled from 'styled-components';
import moment from 'moment';

const MtDatePicker = styled(AntDatePicker)``;

const noop = () => undefined;

class DatePicker extends Component {
  static propTypes = {
    value: PropTypes.number,
    className: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

  state = {
    date: this.props.value ? moment(this.props.value) : undefined
  };

  onChange = date => {
    this.setState({ date });
    this.props.onChange(+date);
  };

  render() {
    return (
      <MtDatePicker
        {...this.props}
        showTime={false}
        allowClear={false}
        value={this.state.date}
        onChange={this.onChange}
      />
    );
  }
}

export default DatePicker;
