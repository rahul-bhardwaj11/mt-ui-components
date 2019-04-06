import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import { UnsupportedFileViewer } from '../css';

class UnsupportedViewer extends Component {
  render() {
    const { title, src } = this.props;
    return (
      <UnsupportedFileViewer>
        <a href={src} className="fileName">
          {title}
        </a>
        <Icon type="media" className="Icon" />
      </UnsupportedFileViewer>
    );
  }
}

UnsupportedViewer.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string
};

export default UnsupportedViewer;
