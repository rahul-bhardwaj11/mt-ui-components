import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import DateFilter, { DATE_FILTER_OPTIONS } from './index';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import moment from 'moment';

const stories = storiesOf('DateFilter', module);
stories.addDecorator(withKnobs);

const dates = [
  [moment().subtract(1, 'M'), moment()],
  [moment().subtract(2, 'M'), moment().subtract(1, 'M')],
  [moment().subtract(3, 'M'), moment().subtract(2, 'M')]
];

const dateChangeActionLogger = action('Date Filter Selected');

stories
  .add(
    'Date filter with selected options',
    withInfo('')(() => {
      const mappedObject = Object.keys(DATE_FILTER_OPTIONS).reduce((map, v) => {
        map[v] = boolean(v, true);
        return map;
      }, {});
      return (
        <DateFilter
          onChange={dateChangeActionLogger}
          options={Object.keys(mappedObject)
            .map(v => mappedObject[v] && DATE_FILTER_OPTIONS[v])
            .filter(v => v)}
        />
      );
    })
  )
  .add(
    'Date Filter with controlled input',
    withInfo('')(() => <ControlledDateFilter />)
  );

class ControlledDateFilter extends Component {
  state = {
    current: 0
  };
  changeDate = () => {
    const { current } = this.state;
    this.setState({
      current: (current + 1) % dates.length
    });
  };

  dateOnChange = (from, to) => {
    dateChangeActionLogger(from, to);
    this.selectedDate = [+from, +to];
  };

  render() {
    const date = this.selectedDate
      ? this.selectedDate.map(v => moment(v))
      : dates[this.state.current];
    return (
      <Fragment>
        <DateFilter value={date} onChange={this.dateOnChange} />
        <button onClick={this.changeDate}>Click to change date</button>
      </Fragment>
    );
  }
}
