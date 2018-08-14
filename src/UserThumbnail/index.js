import styled from 'styled-components';
import React from 'react';
import Icon from './../Icon';
import PropTypes from 'prop-types';
// import theme from "./../styles/theme";
/**
 * To display user profile with name
 */

const MtUserThumbnail = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  .userIcon {
    ${props => props.imgUrl && `height: 100%;`};
    color: #aaa;
    margin-right: ${props => (props.name ? '10px' : '0')};
    float: ${props => (props.name ? 'left' : 'none')};
    ${props => props.imgUrl && `border-radius: 50%;`};
  }
`;

const UserThumbnail = props => {
  const { name, email, imgUrl } = props;
  return (
    <MtUserThumbnail {...props}>
      {imgUrl ? (
        <img className={'userIcon'} src={imgUrl} />
      ) : (
        <Icon type="userProfile" className={'userIcon'} />
      )}
      {name && <div>{name}</div>}
      {email && <div>{email}</div>}
    </MtUserThumbnail>
  );
};

UserThumbnail.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  imgUrl: PropTypes.string
};

export default UserThumbnail;
