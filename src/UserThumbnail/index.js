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
    cursor: default;

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

const ThumbnailInfoWrapper = styled.div`
  .wrapper {
    display: table;
    table-layout: fixed;
    border-spacing: 0px;
    height: 40px;
    width: 100%;
  }
  .info {
    vertical-align: middle;
    display: table-cell;
    width: 100%;
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
      <ThumbnailInfoWrapper className={className}>
        <div className="wrapper">
          <div className="info">
            {title && <div className={'name'}>{title}</div>}
            {content && <div className={'content'}>{content}</div>}
          </div>
        </div>
      </ThumbnailInfoWrapper>
    );
  }
}

class UserThumbnail extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    src: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'square']),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.string,
    expanded: PropTypes.bool,
    className: PropTypes.string
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

    const thumbnailInfoProps = {
      title: title,
      content: content
    };

    return (
      <MtUserThumbnail className={className}>
        <Avatar className="userThumbnailAvatar" {...mtProps}>
          {title && this.getInitials(title)}
        </Avatar>
        {expanded && (
          <UserThumbnailInfo
            {...thumbnailInfoProps}
            className="userThumbnailInfo"
          />
        )}
      </MtUserThumbnail>
    );
  }
}

export { Avatar };

export default UserThumbnail;
