import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PhotoViewer extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  };
  state = {
    loaded: false
  };
  static defaultProps = {
    width: 200,
    height: 200
  };

  componentDidMount() {
    const image = new Image();
    image.src = this.props.src;
    image.onload = () => {
      this.imageRef.setAttribute(
        'style',
        `background-image: url('${
          this.props.src
        }');background-size: contain;width: 100%;height: 100%`
      );
      this.setState({
        loaded: true
      });
    };
  }

  render() {
    const { loaded } = this.state;
    const { width, height } = this.props;
    const containerStyle = {
      width,
      height
    };

    return (
      <div style={containerStyle}>
        {!loaded ? (
          <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <rect width={width} height={height} rx="10" ry="10" fill="#CCC" />
          </svg>
        ) : null}
        <div ref={e => (this.imageRef = e)} />
      </div>
    );
  }
}
