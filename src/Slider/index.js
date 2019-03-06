import React, { Component } from 'react';
import AntSlider from 'antd/lib/slider';
import styled from 'styled-components';
import 'antd/lib/slider/style/index.css';
import 'antd/lib/tooltip/style/index.css';
import theme from '../styles/theme';
import mixins from '../styles/mixins';
import PropTypes from 'prop-types';

const isEmpty = value => {
  return typeof value === 'undefined' || value === null;
};

const getSliderMarkColor = isEmpty => {
  return isEmpty ? theme.colors.DARK_OUTER_SPACE : theme.colors.INDIGO;
};

const MtSlider = styled.div`
  .ant-slider-handle {
    border: 2px solid ${props => getSliderMarkColor(props.isEmpty)}; 
    background-color: ${props => getSliderMarkColor(props.isEmpty)};
    ${mixins.size('12px', '12px')};
    &:focus {
      box-shadow: 0 0 0 0 ${theme.colors.DARK_OUTER_SPACE};
      border-color: 2px solid ${theme.colors.INDIGO};
    }
    &.ant-tooltip-open {
      &:hover {
        border: 2px solid ${props => getSliderMarkColor(props.isEmpty)};
      }
    }

    &:hover {
      .ant-slider-handle:not(.ant-tooltip-open) {
        background-color: ${props => getSliderMarkColor(props.isEmpty)};
        border: 2px solid ${props => getSliderMarkColor(props.isEmpty)};
      }
    }
  }
  .ant-slider-dot {
    background: transparent;
    border-color: transparent;
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
        background-color: ${props => getSliderMarkColor(props.isEmpty)};
        border: 2px solid ${props => getSliderMarkColor(props.isEmpty)};
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


  // css for disabled 

  .ant-slider-disabled{
    cursor:default;
    .ant-slider-track{
      border:2px solid  ${theme.colors.SILVER} !important;
    }

    &.ant-slider:hover .ant-slider-track{
      border:2px solid  ${theme.colors.SILVER};
    }
    &:hover{

    .ant-slider-track{
      background-color: ${theme.colors.SILVER} 
      &:hover{
          background-color: ${theme.colors.SILVER} 
      }
     }
    }

    .ant-slider-disabled.ant-slider:hover .ant-slider-track{
       border:2px solid  ${theme.colors.SILVER};
    }
    .ant-slider-mark-text, .ant-slider-disabled .ant-slider-dot{
      cursor:default !important;
    }
    .ant-slider-dot{
      display:none; 
      cursor:default !important;
    }
    .ant-slider-handle{
      background-color: ${theme.colors.SILVER} !important;
      border-color: ${theme.colors.SILVER} !important;
      cursor: default;
    }
  }

 
`;

class Slider extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
  };
  render() {
    const { value } = this.props;
    return (
      <MtSlider isEmpty={isEmpty(value)}>
        <AntSlider {...this.props} />
      </MtSlider>
    );
  }
}
export default Slider;
