import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PdfPlayer, RaPlayer, PhotoViewer, UnsupportedViewer } from './drivers';

class FileViewer extends Component {
  getDriver() {
    const { type: passedType, src = '' } = this.props;
    const type =
      passedType ||
      src
        .split('.')
        .pop()
        .split(/#|\?/)[0];
    switch (type) {
      case 'jpg':
      case 'jpeg':
      case 'gif':
      case 'bmp':
      case 'png': {
        return PhotoViewer;
      }
      case 'pdf': {
        return PdfPlayer;
      }
      case 'mp3':
      case 'mp4':
      case 'webm': {
        return RaPlayer;
      }
      default: {
        return UnsupportedViewer;
      }
    }
  }

  render() {
    const Driver = this.getDriver();
    return <Driver {...this.props} />;
  }
}

FileViewer.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string
};

export default FileViewer;
