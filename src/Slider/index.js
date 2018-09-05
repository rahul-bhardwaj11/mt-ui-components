import React, { Component } from 'react';
import AntSlider from 'antd/lib/slider';
import styled from 'styled-components';
import 'antd/lib/slider/style/index.css';
import theme from '../styles/theme';
import mixins from '../styles/mixins';

const MtSlider = styled.div`
  .ant-slider-handle {
    border: 2px solid ${theme.colors.INDIGO};
    background-color: ${theme.colors.INDIGO};
    ${mixins.size('12px', '12px')};
    &.ant-tooltip-open {
      &:hover {
        border: 2px solid ${theme.colors.INDIGO};
      }
    }

    &:hover {
      .ant-slider-handle:not(.ant-tooltip-open) {
        background-color: ${theme.colors.INDIGO};
        border: 2px solid ${theme.colors.INDIGO};
      }
    }
  }
  .ant-slider-rail {
    background: ${theme.colors.ALTO};
    height: 3px;
  }
  .ant-slider-track {
    background-color: ${theme.colors.INDIGO};
  }

  .ant-slider {
    &:hover {
      .ant-slider-handle:not(.ant-tooltip-open) {
        background-color: ${theme.colors.INDIGO};
        border: 2px solid ${theme.colors.INDIGO};
      }
    }
  }
  .ant-slider {
    &:hover {
      .ant-slider-track {
        background-color: ${theme.colors.INDIGO};
        border: 2px solid ${theme.colors.INDIGO};
      }
    }
  }
`;

class Slider extends Component {
  render() {
    return (
      <MtSlider>
        <AntSlider {...this.props} />
      </MtSlider>
    );
  }
}
export default Slider;
