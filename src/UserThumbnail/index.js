import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar';
import 'antd/lib/avatar/style/index.css';
import mixin from '../styles/mixins';

const MtUserThumbnail = styled.div`
  .userThumbnailAvatar {
    float: left;
  }
  .userThumbnailInfo {
    height: 40px;
    margin-left: 56px;
    padding-top: 2px;

    .name {
      ${mixin.blackText()};
      ${mixin.truncate()};
    }
    .content {
      ${mixin.smallDarkLink()};
      ${mixin.truncate()};
    }
  }
`;

class UserThumbnailInfo extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    const { className, title, content } = this.props;

    return (
      <div className={className}>
        {title && <div className={'name'}>{title}</div>}
        {content && <div className={'content'}>{content}</div>}
      </div>
    );
  }
}

class UserThumbnail extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
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
    const { expanded, className, ...rest } = this.props;
    const { title, content } = rest;

    let mtProps = Object.assign({}, rest);
    mtProps = !title ? Object.assign(mtProps, { icon: 'user' }) : mtProps;

    let mtInfoProps = {
      title: title,
      content: content
    };

    return (
      <MtUserThumbnail className={className}>
        <Avatar className="userThumbnailAvatar" {...mtProps}>
          {title && this.getInitials(title)}
        </Avatar>
        {expanded && (
          <UserThumbnailInfo {...mtInfoProps} className="userThumbnailInfo" />
        )}
      </MtUserThumbnail>
    );
  }
}

export { Avatar };

export default UserThumbnail;
