import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntButton from 'antd/lib/button';
import 'antd/lib/button/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import Icon from '../Icon';

const BUTTON_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'default',
  TERTIARY: 'tertiary',
  LINK: 'link',
  TEXT: 'text',
  EDIT: 'edit',
  DISABLED: 'disabled'
};

const BUTTON_SIZES = {
  LARGE: 'large',
  SMALL: 'small',
  MEDIUM: 'medium'
};

const ANTD_BUTTON_TYPE_MAP = {
  [BUTTON_TYPES.PRIMARY]: 'primary',
  [BUTTON_TYPES.SECONDARY]: 'default',
  [BUTTON_TYPES.TERTIARY]: 'dashed',
  [BUTTON_TYPES.LINK]: 'link',
  [BUTTON_TYPES.TEXT]: 'text',
  [BUTTON_TYPES.EDIT]: 'edit',
  [BUTTON_TYPES.DISABLED]: 'disabled'
};

const ANTD_BUTTON_SIZE_PADDING = {
  [BUTTON_SIZES.LARGE]: '0px 32px',
  [BUTTON_SIZES.MEDIUM]: '0px 24px',
  [BUTTON_SIZES.SMALL]: '0px 12px'
};

const MtButton = styled.div`
  /* Default Button styles */
  .ant-btn-default {
    border: 1px solid ${theme.colors.ALTO};
    color: #6f7583;
    height: 32px;
    padding: ${props => ANTD_BUTTON_SIZE_PADDING[props.size]};
    font-size: 14px;
    &.ant-btn-sm {
      color: ${theme.colors.GREY};
      font-size: 12px;
      padding: 0px 12px;
    }
    &:hover {
      border: 1px solid ${theme.colors.SILVER};
    }
    &:focus,
    &.active {
      border: 1px solid ${theme.colors.INDIGO};
      color: ${theme.colors.INDIGO};
    }
  }
  .ant-btn {
    &.disabled {
      border: 1px solid ${theme.colors.DISABLE};
      border-radius: 4px;
      color: #fff;
      background: ${theme.colors.ALTO};
    }
  }
  /* edit Button styles */
  .ant-btn-edit {
    border: 1px solid ${theme.colors.ALTO};
    color: ${theme.colors.SILVER};
    height: 32px;
    padding: 0px 12px;
    font-size: 14px;

    &.ant-btn-sm {
      color: ${theme.colors.SILVER};
      font-size: 12px;
      padding: 0px 12px;
    }
    &:hover {
      border: 1px solid ${theme.colors.ALTO};
      color: ${theme.colors.SILVER};

      span {
        color: ${theme.colors.SILVER};
      }
    }
    &:focus,
    &.active {
      border: 1px solid ${theme.colors.ALTO};
      color: ${theme.colors.SILVER};
      span {
        color: ${theme.colors.SILVER};
      }
    }
  }
  .ant-btn {
    &.disabled {
      border: 1px solid ${theme.colors.DISABLE};
      border-radius: 4px;
      background-color: ${theme.colors.ALTO};
      color: #fff;
    }
  }

  /* Primary Button styles */
  .ant-btn-primary {
    border: 1px solid ${theme.colors.INDIGO};
    background-color: ${theme.colors.INDIGO};
    color: #fff;
    font-size: 14px;
    height: 32px;
    padding: ${props => ANTD_BUTTON_SIZE_PADDING[props.size]};
    &.ant-btn-sm {
      color: #fff;
      font-size: 12px;
      padding: 0px 12px;
    }
    &:hover {
      border: 1px solid ${theme.colors.JODHPUR};
      background: ${theme.colors.JODHPUR};
    }
    &:focus,
    &.active {
      border: 1px solid ${theme.colors.NEPTUNE};
      background: ${theme.colors.NEPTUNE};
      color: #fff;
    }
  }
  .ant-btn {
    &.disabled {
      border: 1px solid ${theme.colors.ALTO};
      background-color: ${theme.colors.ALTO};
      color: #fff;
      border-radius: 4px;
    }
  }
  .ant-btn {
    &.disabled {
      border: 1px solid ${theme.colors.ALTO};
      background-color: ${theme.colors.ALTO};
      color: #fff;
    }
  }
  /* Dashed Button styles */
  .ant-btn-dashed {
    border: 1px dashed ${theme.colors.ALTO};
    background-color: rgba(255, 255, 255, 0);
    color: ${theme.colors.OUTER_SPACE};
    font-size: 14px;
    height: 32px;
    padding: 0px 32px;
    &.ant-btn-sm {
      color: #fff;
      font-size: 12px;
      padding: 0px 12px;
    }
    &:hover {
      color: ${theme.colors.SHARK};
    }
    &:focus,
    &.active {
      color: ${theme.colors.SHARK};
    }
  }
  .ant-btn {
    &.disabled {
      border: 1px solid ${theme.colors.ALTO};
      background-color: ${theme.colors.ALTO};
      color: #fff;
    }
  }
  .ant-btn-clicked {
    outline: none;
    outline-style: none;
  }
  /* Text Button styles */
  .ant-btn-text {
    border: 1px dashed transparent;
    background-color: transparent;
    font-size: 14px;
    height: 32px;
    padding: 0px 32px;
    color: ${theme.colors.OUTER_SPACE};
    ${props =>
      props.active
        ? `color: ${theme.colors.INDIGO};
      background-color: ${theme.colors.TROPICAL_BLUE}`
        : null};
    ${props => (props.disabled ? `color: ${theme.colors.OUTER_SPACE}` : null)};

    &:hover,
    &:focus,
    &:active {
      border: 1px dashed transparent;
      ${props =>
        props.active
          ? `color: ${theme.colors.INDIGO};
        background-color: ${theme.colors.TROPICAL_BLUE}`
          : `background-color: transparent;
          color: ${theme.colors.INDIGO};`};
    }
    &.ant-btn-sm {
      color: #fff;
      font-size: 12px;
      padding: 0px 12px;
    }
  }
  .ant-btn {
    &.disabled {
      border: 1px solid ${theme.colors.ALTO};
      background-color: ${theme.colors.ALTO};
      color: #fff;
    }
  }
  .ant-btn-clicked {
    outline: none;
    outline-style: none;
  }

  /* link Blue Button styles */
  .ant-btn-link {
    border: 1px solid ${theme.colors.INDIGO};
    background-color: #fff;
    font-size: 14px;
    height: 32px;
    padding: 0px 32px;
    color: ${theme.colors.INDIGO};
    &.ant-btn-sm {
      color: #fff;
      font-size: 12px;
      padding: 0px 12px;
    }
  }
  .ant-btn {
    &.disabled {
      border: 1px solid ${theme.colors.ALTO};
      background-color: ${theme.colors.ALTO};
      color: #fff;
    }
  }
  .ant-btn-clicked {
    outline-style: none;
  }
  .editIcon {
    padding: 3px;
  }
`;

const noop = () => undefined;

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
    children: PropTypes.node,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
    style: PropTypes.object,
    className: PropTypes.string,
    active: PropTypes.bool
  };
  static defaultProps = {
    onClick: noop,
    children: 'Submit',
    disabled: false,
    type: BUTTON_TYPES.PRIMARY,
    size: 'large'
  };

  render() {
    const { children, type, style, active, disabled, size } = this.props;
    let antdType = ANTD_BUTTON_TYPE_MAP[type];
    return (
      <MtButton active={active} disabled={disabled} size={size}>
        <AntButton {...this.props} type={antdType} style={style}>
          {children}
          {type === 'edit' && <Icon type="edit" className="editIcon" />}
        </AntButton>
      </MtButton>
    );
  }
}
export default Button;
