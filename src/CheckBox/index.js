import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AntCheckbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';

const MtCheckbox = styled.div`
  display: inline-block;
  vertical-align: middle;
  .ant-checkbox-wrapper {
    font-weight: normal;
    display: inherit;
    .ant-checkbox {
      display: inline-block;
      vertical-align: middle;
    }
    .ant-checkbox + span {
      display: inline-block;
      vertical-align: top;
      min-width: 125px;
      font-size: 14px;
    }
    .ant-checkbox-inner {
      width: 14px;
      height: 14px;
      border-radius: 3px;
      &:after {
        left: 3.5px;
        top: 1.2px;
      }
    }
    .ant-checkbox-checked {
      & > .ant-checkbox-inner {
        background-color: ${theme.colors.LIGHT_BLUE};
        border-color: ${theme.colors.LIGHT_BLUE};
      }
    }
    .ant-checkbox-checked + span {
      color: ${theme.colors.DARK};
    }
    span {
      color: ${theme.colors.OUTER_SPACE};
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
        <AntCheckbox checked={this.state.checked} onChange={this.onChange}>
          {label}
        </AntCheckbox>
      </MtCheckbox>
    );
  }
}
export default CheckBox;
