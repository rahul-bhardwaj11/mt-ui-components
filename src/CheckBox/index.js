import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import style from './index.scss';
import AntCheckbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/index.css';
import styled from 'styled-components';
import { DARK, OUTER_SPACE } from '../colors';

const MtCheckbox = styled.div`
  .ant-checkbox-wrapper {
    font-weight: 500;
    display: inherit;
    .ant-checkbox {
      float: left;
    }
    .ant-checkbox + span {
      float: left;
      min-width: 125px;
      font-size: 12px;
    }
    .ant-checkbox-checked + span {
      color: ${DARK};
    }

    span {
      color: ${OUTER_SPACE};
    }
  }
`;

class CheckBox extends Component {
  static propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func
  };

  state = {
    checked: this.props.checked
  };

  onChange = event => {
    event.stopPropagation();
    const isChecked = !this.state.checked;
    this.setState({ checked: isChecked });
    this.props.onChange(isChecked);
  };

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.checked !== 'undefined') {
      this.setState({ checked: nextProps.checked });
    }
  }

  render() {
    const { label } = this.props;
    return (
      <MtCheckbox>
        <AntCheckbox
          checked={this.state.checked}
          onChange={this.onChange}
          onClick={event => {
            event.stopPropagation();
          }}
        >
          {label}
        </AntCheckbox>
      </MtCheckbox>
    );
  }
}
export default CheckBox;
