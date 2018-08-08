import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTag from 'antd/lib/tag';
import 'antd/lib/tag/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import Icon from '../Icon';

const DefaultTag = styled.div`
  display: inline-block;
  .ant-tag {
    color: ${theme.colors.OUTER_SPACE};
    background: #fff;
    font-size: 12px;
    line-height: 24px;
    border-radius: 16px;
    height: 24px;
    padding: 0 15px;
    margin-bottom: 12px;
    &:hover {
      border: 1px solid ${theme.colors.SILVER};
      border-radius: 16px;
      background: #fff;
      color: ${theme.colors.OUTER_SPACE};
      .anticon-cross {
        color: ${theme.colors.OUTER_SPACE};
      }
    }
    &:active {
      border: 1px solid ${theme.colors.TAG_HOVER_TEXT_COLOR};
      border-radius: 16px;
      background-color: ${theme.colors.TROPICAL_BLUE};
      color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
    }
  }
  .ant-tag-checkable:not(.ant-tag-checkable-checked) {
    line-height: 24px;
    height: 24px;
    padding: 0 15px;
    margin-bottom: 10px;
    border: 1px solid #468ee5;
    border-radius: 16px;
    background-color: #e4effb;
    color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
  }
  .ant-tag {
    &.ant-tag-checkable {
      &.ant-tag-checkable-checked {
        border-radius: 16px;
        background: #fff;
        color: ${theme.colors.OUTER_SPACE};
        border: 1px solid ${theme.colors.ALTO};
        line-height: 24px;
        height: 24px;
        padding: 0 15px;
        margin-bottom: 10px;
        &:hover {
          border: 1px solid ${theme.colors.TAG_HOVER_TEXT_COLOR};
          border-radius: 16px;
          background-color: ${theme.colors.TROPICAL_BLUE};
          color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
        }
      }
    }
  }
`;

const ActionTag = styled.div`
  .ant-tag {
    border-radius: 16px;
    color: #4d7cc7;
    border: 1px solid #4d7cc7;
    background-color: #ffffff;
    font-size: 12px;
    line-height: 24px;
    border-radius: 16px;
    height: 24px;
    padding: 0 15px;
    margin-bottom: 12px;
  }
`;
const AppliedTag = styled.div`
  .ant-tag {
    border-radius: 16px;
    color: #4d7cc7;
    border: 1px solid #4d7cc7;
    background-color: #e4effb;
    font-size: 12px;
    line-height: 24px;
    border-radius: 16px;
    height: 24px;
    padding: 0 15px;
    margin-bottom: 12px;
  }
`;

const DisabledTag = styled.div`
  .ant-tag {
    border-radius: 16px;
    color: #bbbbbb;
    border: 1px solid #e8eaed;
    background-color: #ffffff;
    font-size: 12px;
    line-height: 24px;
    border-radius: 16px;
    height: 24px;
    padding: 0 15px;
    margin-bottom: 12px;
  }
`;

const TYPES = {
  DEAFULT: 'default',
  ADD: 'add',
  ADDED: 'added',
  SELECTED: 'selected',
  SELECTION: 'selection',
  APPLIED: 'applied',
  ACTION: 'action',
  DISABLED: 'disabled'
};

class CheckableTag extends Component {
  state = { checked: true };

  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    return (
      <AntTag.CheckableTag
        {...this.props}
        checked={this.state.checked}
        onChange={this.handleChange}
      />
    );
  }
}

// class AntTagComponent extends Component {
//   static propTypes = {
//     children: PropTypes.node,
//     checkable: PropTypes.bool
//   };
//   render() {
//     let { checkable , children} = this.props;
//     let Component = (checkable) ? CheckableTag : AntTag;
//     return (
//         <Component {...this.props} >{children}</Component>
//     );
//   }
// }

class Tag extends Component {
  static propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    applied: PropTypes.bool,
    action: PropTypes.bool,
    disabled: PropTypes.bool,
    checkable: PropTypes.bool
  };

  static defaultProps = {
    type: TYPES.default
  };

  getWrappedTag = () => {
    let { applied, action, disabled } = this.props;
    if (applied) {
      return AppliedTag;
    } else if (action) {
      return ActionTag;
    } else if (disabled) {
      return DisabledTag;
    }
    return DefaultTag;
  };
  render() {
    let { children, type, checkable } = this.props;
    let TagComponent;
    let AntTagComponent = checkable ? CheckableTag : AntTag;
    let WrappedTag = this.getWrappedTag();
    switch (type) {
      case TYPES.DEFAULT:
        TagComponent = (
          <WrappedTag>
            <AntTagComponent>{children}</AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.ADD:
        TagComponent = (
          <WrappedTag>
            <AntTagComponent>
              {children}
              <Icon type="edit" className="editIcon" />
            </AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.ADDED:
        TagComponent = (
          <WrappedTag>
            <AntTagComponent {...this.props}>
              {children}
              <Icon type="cross" />
            </AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.SELECTION:
        TagComponent = (
          <WrappedTag>
            <AntTagComponent {...this.props}>
              {children}
              <Icon type="tick" />
            </AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.SELECTED:
        TagComponent = (
          <WrappedTag>
            <AntTagComponent {...this.props}>{children}</AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.ACTION:
        TagComponent = (
          <WrappedTag>
            <AntTagComponent {...this.props}>{children}</AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.DISABLED:
        TagComponent = (
          <WrappedTag>
            <AntTagComponent {...this.props}>{children}</AntTagComponent>
          </WrappedTag>
        );
        break;
    }
    return TagComponent;
  }
}

Tag.CheckableTag = AntTag.CheckableTag;
export default Tag;
