import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import Icon from '../Icon';
import MtButton, { BUTTON_SIZES } from './style';

export const BUTTON_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  LINK: 'link',
  TEXT: 'text',
  EDIT: 'edit'
};

const BUTTON_TO_SIZE_MAP = {
  [BUTTON_TYPES.PRIMARY]: {
    [BUTTON_SIZES.LARGE]: BUTTON_SIZES.LARGE,
    [BUTTON_SIZES.MEDIUM]: 'default',
    [BUTTON_SIZES.SMALL]: BUTTON_SIZES.SMALL
  },
  [BUTTON_TYPES.SECONDARY]: {
    [BUTTON_SIZES.LARGE]: BUTTON_SIZES.LARGE,
    [BUTTON_SIZES.MEDIUM]: 'default',
    [BUTTON_SIZES.SMALL]: BUTTON_SIZES.SMALL
  },
  [BUTTON_TYPES.TERTIARY]: {
    [BUTTON_SIZES.LARGE]: BUTTON_SIZES.LARGE,
    [BUTTON_SIZES.MEDIUM]: 'medium',
    [BUTTON_SIZES.SMALL]: BUTTON_SIZES.SMALL
  },
  [BUTTON_TYPES.LINK]: {
    [BUTTON_SIZES.LARGE]: BUTTON_SIZES.LARGE,
    [BUTTON_SIZES.MEDIUM]: 'medium',
    [BUTTON_SIZES.SMALL]: BUTTON_SIZES.SMALL
  },
  [BUTTON_TYPES.TEXT]: {
    [BUTTON_SIZES.LARGE]: BUTTON_SIZES.LARGE,
    [BUTTON_SIZES.MEDIUM]: 'medium',
    [BUTTON_SIZES.SMALL]: BUTTON_SIZES.SMALL
  },
  [BUTTON_TYPES.EDIT]: {
    [BUTTON_SIZES.LARGE]: BUTTON_SIZES.LARGE,
    [BUTTON_SIZES.MEDIUM]: 'medium',
    [BUTTON_SIZES.SMALL]: BUTTON_SIZES.SMALL
  }
};

const ANTD_BUTTON_TYPE_MAP = {
  [BUTTON_TYPES.PRIMARY]: 'primary',
  [BUTTON_TYPES.SECONDARY]: 'default',
  [BUTTON_TYPES.TERTIARY]: 'dashed',
  [BUTTON_TYPES.LINK]: 'link',
  [BUTTON_TYPES.TEXT]: 'text',
  [BUTTON_TYPES.EDIT]: 'edit'
};

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
    active: PropTypes.bool,
    loading: PropTypes.bool
  };
  static defaultProps = {
    onClick: noop,
    children: 'Submit',
    disabled: false,
    type: BUTTON_TYPES.PRIMARY,
    size: 'large'
  };

  render() {
    const {
      children,
      type,
      style = {},
      active,
      disabled,
      size,
      loading
    } = this.props;
    let antdType = ANTD_BUTTON_TYPE_MAP[type];
    let { className, ...rest } = this.props;
    return (
      <MtButton
        {...rest}
        active={active}
        disabled={disabled}
        className={className}
        type={antdType}
        style={style}
        size={
          BUTTON_TO_SIZE_MAP[type][size] || BUTTON_TO_SIZE_MAP[type]['large']
        }
      >
        {loading ? <Loader size="sizeXSmall" /> : children}

        {type === 'edit' && <Icon type="edit" className="editIcon" />}
      </MtButton>
    );
  }
}
export default Button;
