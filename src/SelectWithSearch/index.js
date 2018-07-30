import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import './index.scss';

class SelectWithSearch extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    async: PropTypes.bool
  };
  render() {
    let { async } = this.props;
    if (async) {
      return <AsyncSelect {...this.props} />;
    }
    return <Select {...this.props} />;
  }
}

export default SelectWithSearch;
