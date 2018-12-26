import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

export default class PhotoViewer extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  };

  static defaultProps = {
    height: 200
  };

  componentDidMount() {
    const { height } = this.props;
    const image = new Image();
    image.src = this.props.src;
    const self = this;
    image.onload = function() {
      let imageWidth = this.width;
      let imageHeight = this.height;
      let suffix = 'px';
      if (imageHeight > height) {
        imageWidth = '100';
        imageHeight = '100';
        suffix = '%';
      }
      imageWidth += suffix;
      imageHeight += suffix;

      self.imageRef.setAttribute(
        'style',
        `background-image: url('${self.props.src}');
            background-size: contain;
            width: ${imageWidth};
            height: ${imageHeight};
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            background-repeat: no-repeat;
            background-position: center;`
      );
      self.setState({
        loaded: true
      });
    };
  }

  render() {
    const { height } = this.props;
    const containerStyle = {
      width: '100%',
      height,
      background: `${theme.colors.IVORY}`,
      position: 'relative',
      borderRadius: '8px'
    };

    return (
      <div style={containerStyle}>
        <div ref={e => (this.imageRef = e)} />
      </div>
    );
  }
}
