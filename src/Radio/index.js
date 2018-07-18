import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntRadio from 'antd/lib/radio';
import 'antd/lib/radio/style/index.css';
import styled from 'styled-components';
import theme from '../theme';

const MtRadio = styled.div`
  .ant-radio-inner:after {
    background-color: white;
  }
  .ant-radio-checked {
    .ant-radio-inner {
      border-color: ${theme.colors.INDIGO};
      background: ${theme.colors.INDIGO};
    }
  }
  .ant-radio-wrapper {
    &:hover {
      .ant-radio .ant-radio-inner {
        border: 1px solid ${theme.colors.INDIGO};
      }
    }
  }
`;

class Radio extends Component {
  static propTypes = {
    children: PropTypes.node,
    checked: PropTypes.bool
  };
  render() {
    let { children } = this.props;
    return (
      <MtRadio>
        <AntRadio {...this.props}>{children}</AntRadio>
      </MtRadio>
    );
  }
}
Radio.Group = AntRadio.Group;
export default Radio;
