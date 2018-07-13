import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'antd/lib/dropdown/style/css';
import AntSelect from 'antd/lib/select';
import 'antd/lib/select/style/index.css';
import './index.scss';

const Option = AntSelect.Option;

class Select extends Component {
  static propTypes = {
    options: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    style: PropTypes.object,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    style: { minWidth: 120 }
  };

  render() {
    let { options } = this.props;
    return (
      <AntSelect
        {...this.props}
        onClick={event => {
          event.stopPropagation();
        }}
      >
        {options.map(option => {
          return (
            <Option key={option.key} value={option.key}>
              {option.content}
            </Option>
          );
        })}
      </AntSelect>
    );
  }
}

export default Select;
