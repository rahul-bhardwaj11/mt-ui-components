import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntRadio from 'antd/lib/radio';
import 'antd/lib/radio/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';

const MtRadioGroup = styled(AntRadio.Group)`
  &.ant-radio-group {
    font-family: inherit;
  }
`;
const MtRadio = styled(AntRadio)`
  .ant-radio-checked {
    .ant-radio-inner {
      border-color: ${theme.colors.INDIGO};
      background-color: ${theme.colors.INDIGO};
      &::after {
        background-color: ${theme.colors.WHITE};
      }
    }
  }
  &.ant-radio-wrapper {
    .ant-radio-disabled {
      .ant-radio-inner {
        border-color: ${theme.colors.DISABLE} !important;
        background-color: ${theme.colors.PEARL};
        &::after {
          background-color: ${theme.colors.WHITE};
        }
      }
    }
  }

  &.ant-radio-wrapper {
    font-family: inherit;
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
  &.ant-radio-wrapper-checked {
    span.ant-radio + * {
      ${mixins.blackLink()};
    }
  }
  span.ant-radio + * {
    ${mixins.greyLink()};
  }

  &.ant-radio-wrapper-disabled {
    span.ant-radio + * {
      color: ${theme.colors.OUTER_SPACE};
    }
  }
  .ant-radio-disabled .ant-radio-inner {
    border-color: ${theme.colors.DISABLE} !important;
    background-color: #f8f8f8;
  }
  &.ant-radio-wrapper.ant-radio-wrapper-disabled:hover span.ant-radio + * {
    color: ${theme.colors.OUTER_SPACE};
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
Radio.Group = MtRadioGroup;
Radio.Button = AntRadio.Button;
export default Radio;
