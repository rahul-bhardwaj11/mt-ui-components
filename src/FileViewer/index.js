import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PdfPlayer, PhotoViewer, UnsupportedViewer } from './drivers';

class FileViewer extends Component {
  getDriver() {
    const type = this.props.src.split('.').pop();
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
      default: {
        return UnsupportedViewer;
      }
    }
  }

  render() {
    const Driver = this.getDriver(this.props);
    return <Driver {...this.props} />;
  }
}

FileViewer.propTypes = {
  src: PropTypes.string.isRequired
};

export default FileViewer;
