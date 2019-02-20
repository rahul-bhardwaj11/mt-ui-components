import React, { Component } from 'react';
import { hideLoader } from 'mt-ui-core/utils/loader';
import { ERROR_CODES_INFO_MAP } from './config';
import PropTypes from 'prop-types';

import style from './index.scss';
export default class NetworkErrors extends Component {
  static propTypes = {
    errorCode: PropTypes.number.isRequired
  };
  componentDidMount() {
    hideLoader();
  }
  goHome = () => {
    //window.history && window.history.go(-1);
    window.location.href = '/';
  };
  render() {
    const { errorCode } = this.props;
    const errorInfo = ERROR_CODES_INFO_MAP[errorCode]
      ? ERROR_CODES_INFO_MAP[errorCode]
      : ERROR_CODES_INFO_MAP['default'];
    return (
      <div className={style.errorpage}>
        <div className={style.logo} />
        <div className={style.errorWrapper}>
          <div className={style.mainErrorText}>{errorCode || 500}</div>
          <div className={style.subErrorText}>{errorInfo.title}</div>
          <div className={style.errorLogo} />
          <div className={style.supportLink}>
            <span className={style.backLink} onClick={this.goHome}>
              Home
            </span>
            <span className={style.divider}>|</span>
            <span className={style.contactText}>Contact</span>
            <span className={style.supportText}>support@mindtickle.com</span>
          </div>
        </div>
      </div>
    );
  }
}
