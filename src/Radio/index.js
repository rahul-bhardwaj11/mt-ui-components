import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntRadio from 'antd/lib/radio';
import 'antd/lib/radio/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';

const MtRadio = styled(AntRadio)`
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
      span.ant-radio + * {
        color: ${theme.colors.SHARK};
      }
      .ant-radio {
        .ant-radio-inner {
          border: 1px solid ${theme.colors.OUTER_SPACE};
        }
      }
    }
  }
  .ant-radio-wrapper-checked {
    span.ant-radio + * {
      color: ${theme.colors.SHARK};
    }
  }
  span.ant-radio + * {
    color: ${theme.colors.SILVER};
  }
`;

class Radio extends Component {
  static propTypes = {
    children: PropTypes.node,
    checked: PropTypes.bool
  };
  render() {
    let { children } = this.props;
    return <MtRadio {...this.props}>{children}</MtRadio>;
  }
}
Radio.Group = AntRadio.Group;
export default Radio;
