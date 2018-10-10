import AntButton from 'antd/lib/button';
import 'antd/lib/button/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';

export const BUTTON_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  LINK: 'link',
  TEXT: 'text',
  EDIT: 'edit'
};
export const BUTTON_SIZES = {
  LARGE: 'large',
  SMALL: 'small',
  MEDIUM: 'medium'
};

export const ANTD_BUTTON_SIZE_PADDING = {
  [BUTTON_SIZES.LARGE]: '0px 24px',
  default: '0px 12px',
  [BUTTON_SIZES.SMALL]: '0px 12px'
};

const MtButton = styled(AntButton)`
  &.ant-btn {
    font-family: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 4px;
    ${mixins.button()};
    padding: ${props => ANTD_BUTTON_SIZE_PADDING[props.size]};

    /*---------- Default Button styles ------------*/
    &.ant-btn-default {
      border: 1px solid ${theme.colors.ALTO};
      color: ${theme.colors.DARK_OUTER_SPACE};

      &.ant-btn-sm {
        font-size: 12px;
        padding: 0px 12px;
      }
      &:hover {
        color: ${theme.colors.DARK_OUTER_SPACE};
        border: 1px solid ${theme.colors.SILVER};
      }
      &:active,
      &:focus,
      &.active {
        border: 1px solid ${theme.colors.INDIGO};
        color: ${theme.colors.INDIGO};
      }
      &.disabled,
      &:disabled,
      &[disabled]:hover {
        border: 1px solid ${theme.colors.DISABLE};
        background-color: ${theme.colors.PORCELAIN};
        color: ${theme.colors.SILVER};
      }
    }

    /*---------- Primary Button styles ------------*/
    &.ant-btn-primary {
      border: 1px solid ${theme.colors.INDIGO};
      background-color: ${theme.colors.INDIGO};
      color: #fff;
      &.ant-btn-sm {
        font-size: 12px;
        padding: 0px 12px;
      }
      &:hover,
      &:focus,
      &:active,
      &.active {
        border: 1px solid ${theme.colors.NEPTUNE};
        background: ${theme.colors.NEPTUNE};
        color: #fff;
      }
      &.disabled,
      &:disabled,
      &[disabled]:hover {
        border: 1px solid ${theme.colors.ALTO};
        background: ${theme.colors.ALTO};
        color: ${theme.colors.WHITE};
      }
    }

    /*---------- Edit Button styles ------------*/
    &.ant-btn-edit {
      border: 1px solid ${theme.colors.ALTO};
      color: ${theme.colors.SILVER};
      &.ant-btn-sm {
        color: ${theme.colors.SILVER};
        font-size: 12px;
        padding: 0px 12px;
      }
      &:hover,
      &:focus,
      &:active,
      &.active {
        border: 1px solid ${theme.colors.ALTO};
        color: ${theme.colors.SILVER};
        span {
          color: ${theme.colors.SILVER};
        }
      }
      &.disabled,
      &:disabled,
      &[disabled]:hover {
        background-color: ${theme.colors.PORCELAIN};
        color: ${theme.colors.SILVER};
        border: 1px solid ${theme.colors.DISABLE};
      }
    }

    /*---------- Dashed Button styles ------------*/
    &.ant-btn-dashed {
      border: 1px dashed ${theme.colors.ALTO};
      background-color: ${theme.colors.WHITE};
      color: ${theme.colors.OUTER_SPACE};
      padding: ${props =>
        BUTTON_TYPES[props.tertiary] ? `padding: 0 16px` : null};

      &.ant-btn-sm {
        font-size: 12px;
        padding: 0px 12px;
      }
      &:hover,
      &:focus,
      &:active,
      &.active {
        color: ${theme.colors.SHARK};
      }
      &.disabled,
      &:disabled,
      &[disabled]:hover {
        border: 1px dashed ${theme.colors.ALTO};
        background-color: ${theme.colors.WHITE};
        color: ${theme.colors.SILVER};
      }
    }
    /*---------- Text Button styles ------------*/
    &.ant-btn-text {
      border: 1px dashed transparent;
      background-color: transparent;
      color: ${theme.colors.OUTER_SPACE};
      padding: 0 12px;

      ${props =>
        props.active
          ? `color: ${theme.colors.INDIGO};
          background-color: ${theme.colors.TROPICAL_BLUE}`
          : null};
      ${props =>
        props.disabled ? `color: ${theme.colors.OUTER_SPACE}` : null};

      &:hover,
      &:focus,
      &:active {
        border: 1px dashed transparent;
        ${props =>
          props.active
            ? `color: ${theme.colors.INDIGO};
            background-color: ${theme.colors.TROPICAL_BLUE}`
            : `background-color: transparent;
              color: ${theme.colors.INDIGO}`};
      }
      &.ant-btn-sm {
        font-size: 12px;
        padding: 0px 12px;
      }
      &.disabled,
      &:disabled,
      &[disabled]:hover {
        border: 1px solid transparent;
        background-color: ${theme.colors.WHITE};
        color: ${theme.colors.SILVER};
      }
    }
    /*---------- Link Blue Button styles ------------*/
    &.ant-btn-link {
      border: 1px solid ${theme.colors.INDIGO};
      background-color: #fff;
      color: ${theme.colors.INDIGO};

      &.ant-btn-sm {
        font-size: 12px;
        padding: 0px 12px;
      }
      &.disabled,
      &:disabled {
        background-color: ${theme.colors.WHITE};
        color: ${theme.colors.SILVER};
        border: 1px solid ${theme.colors.DISABLE};
      }
    }

    &.disabled,
    &:disabled {
      border: 1px solid ${theme.colors.DISABLE};
      color: ${theme.colors.WHITE};
      background: ${theme.colors.ALTO};
    }
  }

  &.ant-btn-clicked {
    outline: none;
    outline-style: none;
  }
  .editIcon {
    padding: 3px;
  }

  /* loading Button styles */

  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only) {
    .anticon {
      display: none;
    }
  }
  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only) {
    padding: 0 52px;
  }
  .ant-btn {
    & > .anticon {
      & + span {
        display: none;
      }
    }
  }
`;

export default MtButton;
