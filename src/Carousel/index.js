import React, { Component } from 'react';
import styled from 'styled-components';
import AntCarousel from 'antd/lib/carousel';
import 'antd/lib/carousel/style/index.css';
import leftArrow from '../styles/icons/leftCaret.svg';
import rightArrow from '../styles/icons/rightCaret.svg';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MtCarousel = styled(AntCarousel)`
padding: 0 2em;
font-family: inherit;
.slick-disabled {
  visibility: hidden;
 }
.slick-initialized .slick-slide{
  margin-right:20px;
}
.slick-next:before, .slick-prev:before {
  color: #000;
}
h3 {
  background: #5f9ea0;
  color: #fff;
  font-size: 36px;
  line-height: 100px;
  margin: 10px;
  padding: 2%;
  position: relative;
  text-align: center;
}

.slick-next:before, .slick-prev:before {
  font-family: slick;
  font-size: 20px;
  line-height: 1;
  opacity: .75;
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slick-arrow.slick-prev{
    left:0px;
    font-size:20px;
    background-image: url('${leftArrow}');
    background-repeat: no-repeat;
    background-size: 38%;
    background-color: #989CA6;
    border-radius: 22px;
    background-position: 5px 4px;
    width: 20px;
    height: 20px;
    z-index:2;

  &:hover, &:focus{
    background: url('${leftArrow}');
    background-repeat: no-repeat;
    background-size: 38%;
    background-color: #989CA6;
    border-radius: 22px;
    background-position: 5px 4px;
    width: 20px;
    height: 20px;
  }
  &:before{
    display:none;
  }
}
.slick-arrow.slick-next{
    right:0px;
    font-size:20px;
    background: url('${rightArrow}');
    background-repeat: no-repeat;
    background-size: 38%;
    background-color: #989CA6;
    border-radius: 22px;
    background-position: 7px 4px;
    width: 20px;
    height: 20px;
    z-index:2;

  &:hover, &:focus{
    background: url('${rightArrow}');
    background-repeat: no-repeat;
    background-size: 38%;
    background-color: #989CA6;
    border-radius: 22px;
    background-position: 7px 4px;
    width: 20px;
    height: 20px;
    display:inline-block;
  }
  &:before{
    display:none;
  }
}
.slick-slide{
  ${props => `padding-right: ${props.style.paddingRight}`};
}
&.slick-slider:before {
    content: "";
    position: absolute;
    z-index:1;
    left: 0;
    top: 0;
    width: 120px;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0)
    );
  }
&.slick-slider:after {
    content: "";
    position: absolute;
    z-index:1;
    top: 0;
    right: 0;
    width: 120px;
    height:100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0)
    );
  }
  &.left_arrow--disabled{
    &.slick-slider:before{
    visibility: hidden;
    }
  }
  &.right_arrow--disabled{
    &.slick-slider::after {
    visibility: hidden;
    }
   }

`;

const noop = () => undefined;

class Carousel extends Component {
  static propTypes = {
    style: PropTypes.object,
    fetchData: PropTypes.func,
    hasMore: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
  };
  static defaultProps = {
    style: {},
    fetchData: noop
  };
  state = {
    current: 0
  };
  componentDidMount() {
    const { hasMore } = this.props;
    if (hasMore) {
      this.fetch();
    }
  }
  fetch = async () => {
    const { hasMore, fetchData } = this.props;
    if (hasMore) {
      await fetchData();
    }
  };

  afterChange = (current, next) => {
    this.fetch();
    this.setState({
      current,
      next
    });
  };

  canGoNext = spec => {
    let canGo = true;
    if (!spec.infinite) {
      if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
        canGo = false;
      } else if (
        spec.slideCount <= spec.slidesToShow ||
        spec.current >= spec.slideCount - spec.slidesToShow
      ) {
        canGo = false;
      }
    }
    return canGo;
  };

  getClassName = () => {
    const current = this.state;
    const infinite = this.props;
    const slideCount = React.Children.count(this.props.children);
    let className = '';
    if (!infinite && current === 0) {
      className = 'left_arrow--disabled';
    }
    if (!this.canGoNext({ ...this.props, slideCount, current })) {
      className += 'right_arrow--disabled';
    }
    return classnames(this.props.className, className);
  };

  render() {
    const { children } = this.props;
    const { className } = this.getClassName();
    return (
      <MtCarousel
        {...this.props}
        className={className}
        arrows={true}
        dots={false}
        afterChange={this.afterChange}
      >
        {children}
      </MtCarousel>
    );
  }
}

export default Carousel;
