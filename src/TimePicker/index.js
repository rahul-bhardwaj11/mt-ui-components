import React, { Component } from 'react';
import Select from '../Select';
import PropTypes from 'prop-types';

const noop = () => undefined;

const getTimeSelectOptions = () => {
  let options = [];
  for (let i = 0; i < 48; i++) {
    let hour = Math.floor(i / 2);
    let min = (i % 2) * 30;
    let content = ('0' + hour).slice(-2) + ':' + ('0' + min).slice(-2);
    options.push({
      key: i,
      content
    });
  }
  return options;
};

const getHoursAndMinutesFromTimeSlot = slot => {
  var hour = Math.floor(slot / 2);
  var min = (slot % 2) * 30;
  return { hour: hour, min: min };
};

class TimePicker extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired
  };
  static defaultPropTypes = {
    onSelect: noop
  };
  onSelect = key => {
    this.props.onSelect(getHoursAndMinutesFromTimeSlot(key));
  };
  render() {
    return (
      <Select
        {...this.props}
        onSelect={this.onSelect}
        options={getTimeSelectOptions()}
        defaultValue={0}
      />
    );
  }
}

export default TimePicker;
