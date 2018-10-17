import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import Icon from '../Icon';
import MtButton, {
  BUTTON_SIZES,
  BUTTON_TYPES,
  MT_SIZE_TO_ANT_BUTTON_SIZE_MAP,
  MT_TYPE_ANT_BUTTON_TYPE_MAP
} from './style';

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
    let antdType = MT_TYPE_ANT_BUTTON_TYPE_MAP[type];
    let { className, ...rest } = this.props;
    return (
      <MtButton
        {...rest}
        active={active ? 1 : 0}
        disabled={disabled}
        className={className}
        type={antdType}
        style={style}
        size={
          MT_SIZE_TO_ANT_BUTTON_SIZE_MAP[size] ||
          MT_SIZE_TO_ANT_BUTTON_SIZE_MAP['large']
        }
      >
        {loading ? <Loader size="sizeXSmall" /> : children}

        {type === 'edit' && <Icon type="edit" className="editIcon" />}
      </MtButton>
    );
  }
}
export default Button;
