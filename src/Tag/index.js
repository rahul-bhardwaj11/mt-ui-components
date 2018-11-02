import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTag from 'antd/lib/tag';
import 'antd/lib/tag/style/index.css';
import Icon from '../Icon';
import WrappedTag, { TYPES } from './style';

const ICON_TYPE = {
  [TYPES.ADD]: 'add',
  [TYPES.ADDED]: 'cross',
  [TYPES.SELECTION]: 'tick'
};

class Tag extends Component {
  static propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    applied: PropTypes.bool,
    disabled: PropTypes.bool,
    checkable: PropTypes.bool,
    padding: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
    // margin: PropTypes.shape({
    //   marginTop: PropTypes.string,
    //   marginRight: PropTypes.string,
    //   marginBottom: PropTypes.string,
    //   marginLeft: PropTypes.string
    // })
  };

  static defaultProps = {
    type: TYPES.NORMAL,
    onClick: () => {}
    // margin: {}
  };

  state = { checked: true };

  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    let {
      children,
      type,
      checkable,
      //margin,
      disabled,
      className,
      applied,
      ...rest
    } = this.props;
    let AntTagComponent = checkable ? AntTag.CheckableTag : AntTag;

    let WrappedTagProps = {
      //margin,
      disabled,
      className,
      type,
      checkable,
      applied,
      onClick: () => {}
    };

    let TagProps = {
      ...rest
    };

    return (
      <WrappedTag {...WrappedTagProps}>
        <AntTagComponent {...TagProps}>
          {children}
          {ICON_TYPE[type] && (
            <Icon
              type={ICON_TYPE[type]}
              className={ICON_TYPE[type] ? 'tagIcon' : ''}
            />
          )}
        </AntTagComponent>
      </WrappedTag>
    );
  }
}

Tag.CheckableTag = AntTag.CheckableTag;
export default Tag;
