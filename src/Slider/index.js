import React, { Component } from 'react';
import AntSlider from 'antd/lib/slider';
import styled from 'styled-components';
import 'antd/lib/slider/style/index.css';
import 'antd/lib/tooltip/style/index.css';
import theme from '../styles/theme';
import mixins from '../styles/mixins';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';

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
    background: white;
    &.ant-slider-dot-active {
      border-color: ${theme.colors.INDIGO};
    }
    border-color: ${theme.colors.ALTO};
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

.toolTip{
  width:100%;
  .ant-tooltip{
    left:calc(${props => `${props.offsetLeft}`} - ${props =>
  `${props.offset}px`}) !important;
  }
}
`;

const SLIDER_STEP_CLASS = 'ant-slider-step',
  SLIDER_MARK_CLASS = 'ant-slider-dot',
  SLIDER_TOOLTIP_CLASS = 'ant-tooltip-inner';

class Slider extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    step: PropTypes.number,
    marks: PropTypes.object,
    disabled: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
      marks: this.formatMarks()
    };
  }

  static defaultProps = {
    min: 0,
    max: 10,
    step: 1
  };

  formatMarks = () => {
    const { min, max, marks, step } = this.props;
    if (!marks) return {};

    let newMarks = {};
    for (let i = min; i <= max; i += step) {
      newMarks[i] = marks[i] ? marks[i] : { tooltip: i };
    }
    return newMarks;
  };

  percentageToMarksMap = {};

  componentDidMount() {
    const { marks } = this.props;
    if (marks) {
      this.calculatePercentageToMark();
    }
  }

  calculatePercentageToMark = () => {
    const { step, min } = this.props;
    const marksNodeParent = this.ref.getElementsByClassName(SLIDER_STEP_CLASS);
    const marksNodes = marksNodeParent[0].children;
    let mark = min;
    for (let i = 0; i < marksNodes.length; i++) {
      var percentageLeft = marksNodes[i].style.left;
      this.percentageToMarksMap[percentageLeft] = mark;
      mark += step;
    }
  };

  setTooltipWidth = () => {
    if (!this.tooltipRef) return;
    var tooltipContent = this.tooltipRef
      .getRef()
      .getElementsByClassName(SLIDER_TOOLTIP_CLASS);
    let contentWidth = tooltipContent[0] && tooltipContent[0].clientWidth;

    if (contentWidth != this.state.contentWidth) {
      this.setState({ contentWidth });
    }
  };

  handleHover = e => {
    const { marks, disabled } = this.props;
    const { showTooltip } = this.state;
    if (!marks || disabled) return;

    const targetClass = e.target.className.split(' ');
    if (targetClass[0] == SLIDER_MARK_CLASS) {
      const offsetLeft = e.clientX;
      const leftPercentage = e.target.style.left;
      const mark = this.percentageToMarksMap[leftPercentage];
      const title = (marks[mark] && marks[mark].tooltip) || mark;
      this.setState({ showTooltip: true, offsetLeft, title });

      setTimeout(() => {
        this.setTooltipWidth();
      }, 0);
      return;
    }
    showTooltip && this.setState({ showTooltip: false });
  };

  render() {
    const { value } = this.props;
    const { offsetLeft, showTooltip, contentWidth, title, marks } = this.state;
    const offset = contentWidth / 2 || 0;
    const toolTipLeftPos = `calc(${offsetLeft}px - ${offset}px)`;
    return (
      <MtSlider
        isEmpty={isEmpty(value)}
        offsetLeft={offsetLeft}
        offset={contentWidth / 2 || 0}
      >
        <div
          onMouseOver={this.handleHover}
          style={{ position: 'relative' }}
          ref={el => {
            if (el) this.ref = el;
          }}
        >
          <Tooltip
            title={title}
            visible={showTooltip}
            className="toolTip"
            style={{ left: toolTipLeftPos }}
            getPopupContainer={() => document.body}
            ref={el => (this.tooltipRef = el)}
          >
            <div>
              <AntSlider {...this.props} marks={marks} />
            </div>
          </Tooltip>
        </div>
      </MtSlider>
    );
  }
}
export default Slider;
