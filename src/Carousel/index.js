import React, { Component } from 'react';
import styled from 'styled-components';
import AntCarousel from 'antd/lib/carousel';
import 'antd/lib/carousel/style/index.css';
import leftArrow from '../styles/icons/leftCaret.svg';
import rightArrow from '../styles/icons/rightCaret.svg';
import PropTypes from 'prop-types';

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
`;

class Carousel extends Component {
  static propTypes = {
    style: PropTypes.object,
    fetchData: PropTypes.func,
    hasMore: PropTypes.bool,
    children: PropTypes.node,
    afterChange: PropTypes.func,
    pageSize: PropTypes.number
  };
  state = {
    children: this.props.children || [],
    hasMore: true
  };
  static defaultProps = {
    style: {},
    pageSize: 6
  };

  componentDidMount() {
    const { hasMore } = this.state;
    if (hasMore) {
      this.afterChange();
    }
  }
  componentWillMount(nextProps) {
    if (nextProps && nextProps.children != this.props.children) {
      this.setState({ children: this.nextProps.children });
    }
  }

  afterChange = params => {
    const { fetchData, afterChange, pageSize } = this.props;
    if (fetchData) {
      const { hasMore, children } = this.state;
      if (hasMore) {
        let offset = children.length;
        fetchData({ offset, pageSize }).then(data => {
          const newData = [...data, ...children];
          this.setState({
            children: newData,
            hasMore: data.length == pageSize
          });
        }, {});
      }
    }
    afterChange && afterChange(params);
  };
  render() {
    const { children } = this.state;
    return (
      <MtCarousel
        {...this.props}
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
