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

const getTimeSlotFromTimeObject = (timeObject = {}) => {
  const { hour = 0, min = 0 } = timeObject;
  return 2 * hour + (min ? 1 : 0);
};

class TimePicker extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    defaultValue: PropTypes.shape({
      hour: PropTypes.number,
      min: PropTypes.number
    })
  };
  static defaultPropTypes = {
    onSelect: noop
  };
  onSelect = key => {
    this.props.onSelect(getHoursAndMinutesFromTimeSlot(key));
  };
  render() {
    const { defaultValue: timeObject } = this.props;
    return (
      <Select
        {...this.props}
        onSelect={this.onSelect}
        options={getTimeSelectOptions()}
        defaultValue={getTimeSlotFromTimeObject(timeObject)}
      />
    );
  }
}

export default TimePicker;
