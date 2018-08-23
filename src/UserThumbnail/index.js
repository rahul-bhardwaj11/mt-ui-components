import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar';
import 'antd/lib/avatar/style/index.css';
import mixin from '../styles/mixins';

const MtUserThumbnail = styled.div`
  display: inline-block;

  .ant-avatar-sm {
    width: 27px;
    height: 27px;
    line-height: 27px;
    border-radius: 50%;
    border: 1.5px solid #ffffff;
  }

  .content {
    display: inline-block;
    vertical-align: bottom;
    margin-left: 16px;
    .name {
      ${mixin.blackText()};
      line-height: 22px;
    }
    .email {
      ${mixin.smallDarkLink()};
      line-height: 17px;
    }
  }
`;
class UserThumbnail extends Component {
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    imgUrl: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'square']),
    size: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    shape: 'circle',
    size: 'large',
    icon: 'user'
  };

  render() {
    const { name, email } = this.props;

    return (
      <MtUserThumbnail>
        <Avatar {...this.props} />
        {(name || email) && (
          <div className="content">
            {name && <div className={'name'}>{name}</div>}
            {email && <div className={'email'}>{email}</div>}
          </div>
        )}
      </MtUserThumbnail>
    );
  }
}

export default UserThumbnail;
