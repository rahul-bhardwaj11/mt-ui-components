import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar';
import 'antd/lib/avatar/style/index.css';
import mixin from '../styles/mixins';

const MtUserThumbnail = styled.div`
  .content {
    display: inline-block;
    vertical-align: middle;
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
    src: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'square']),
    size: PropTypes.string,
    icon: PropTypes.string,
    expanded: PropTypes.bool
  };

  static defaultProps = {
    shape: 'circle',
    size: 'large',
    expanded: false
  };

  getInitials = name => {
    var initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || '') + (initials.pop() || '')
    ).toUpperCase();
    return initials;
  };

  render() {
    const { expanded, ...rest } = this.props;
    const { name, email } = rest;
    let mtProps = Object.assign({}, rest);
    mtProps = !name ? Object.assign(mtProps, { icon: 'user' }) : mtProps;
    return (
      <MtUserThumbnail>
        <Avatar {...mtProps}>{name && this.getInitials(name)}</Avatar>
        {expanded && (
          <div className="content">
            {name && <div className={'name'}>{name}</div>}
            {email && <div className={'email'}>{email}</div>}
          </div>
        )}
      </MtUserThumbnail>
    );
  }
}

export { Avatar };

export default UserThumbnail;
