import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import { UnsupportedFileViewer } from '../css';

class ZipViewer extends Component {
  render() {
    const { title, src } = this.props;
    return (
      <UnsupportedFileViewer>
        <a href={src} className="fileName">
          {title}
        </a>
        <Icon type="zip" className="Icon" />
      </UnsupportedFileViewer>
    );
  }
}

ZipViewer.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string
};

export default ZipViewer;
