import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTag from 'antd/lib/tag';
import 'antd/lib/tag/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import Icon from '../Icon';

const getMargin = props => {
  let {
    marginTop = '0px',
    marginRight = '5px',
    marginBottom = '12px',
    marginLeft = '0px'
  } = props.margin;
  return `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`;
};

const ButtonWrapper = styled.button`
  display: inline-block;
  margin: ${props => getMargin(props)};
  border: none;
  background: transparent;
  border-radius: 16px;
`;

const DefaultTag = styled(ButtonWrapper)`
  ${props =>
    props.type === 'default'
      ? `
    &:focus {
      .ant-tag {
        border: 1px solid ${theme.colors.TAG_HOVER_TEXT_COLOR};
        color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
      }
    }
    &:hover {
      .ant-tag {
        border: 1px solid ${theme.colors.SILVER};
        color: ${theme.colors.OUTER_SPACE};
      }
      .anticon-cross {
        color: ${theme.colors.OUTER_SPACE};
      }
    }
  `
      : ``} ${props =>
    props.checkable
      ? `
      margin-bottom: 10px;
      .ant-tag-checkable:not(.ant-tag-checkable-checked) {
        line-height: 24px;
        height: 24px;
        padding: 0 15px;
        border: 1px solid ${theme.colors.ALTO};
        border-radius: 16px;
        &:hover {
          color: ${theme.colors.OUTER_SPACE};
        }
      }
      .ant-tag {
        &.ant-tag-checkable {
          &.ant-tag-checkable-checked {
            border-radius: 16px;
            background: #fff;
            border: 1px solid ${theme.colors.TAG_HOVER_TEXT_COLOR};
            background-color: ${theme.colors.TROPICAL_BLUE};
            color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
            line-height: 24px;
            height: 24px;
            padding: 0 15px;
            &:hover {
              border: 1px solid ${theme.colors.TAG_HOVER_TEXT_COLOR};
              border-radius: 16px;
              background-color: ${theme.colors.TROPICAL_BLUE};
              color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
            }
          }
        }
      }
      `
      : ``}
  
  .ant-tag {
    color: ${theme.colors.OUTER_SPACE};
    background: #fff;
    font-size: 12px;
    line-height: 24px;
    border-radius: 16px;
    height: 24px;
    padding: 0 15px;
    margin: 0px;
    &:active {
      border: 1px solid ${theme.colors.TAG_HOVER_TEXT_COLOR};
      border-radius: 16px;
      background-color: ${theme.colors.TROPICAL_BLUE};
      color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
    }
  }

  .tagIcon {
    font-size: 10px;
    margin-left: 8px;
  }
`;

const ActionTag = styled(ButtonWrapper)`
  .ant-tag {
    border-radius: 16px;
    color: ${theme.colors.INDIGO};
    border: 1px solid ${theme.colors.INDIGO};
    background-color: #ffffff;
    font-size: 12px;
    line-height: 24px;
    border-radius: 16px;
    height: 24px;
    padding: 0 15px;
  }
`;
const AppliedTag = styled(ButtonWrapper)`
  .ant-tag {
    border-radius: 16px;
    color: ${theme.colors.INDIGO};
    border: 1px solid ${theme.colors.INDIGO};
    background-color: ${theme.colors.TROPICAL_BLUE};
    font-size: 12px;
    line-height: 24px;
    border-radius: 16px;
    height: 24px;
    padding: 0 15px;
  }
`;

const DisabledTag = styled(ButtonWrapper)`
  .ant-tag {
    border-radius: 16px;
    color: ${theme.colors.SILVER};
    border: 1px solid ${theme.colors.PEARL};
    background-color: #ffffff;
    font-size: 12px;
    line-height: 24px;
    border-radius: 16px;
    height: 24px;
    padding: 0 15px;
  }
`;

const TYPES = {
  DEAFULT: 'default',
  ADD: 'add',
  ADDED: 'added',
  SELECTED: 'selected',
  SELECTION: 'selection',
  ACTION: 'action'
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
    margin: PropTypes.shape({
      marginTop: PropTypes.string,
      marginRight: PropTypes.string,
      marginBottom: PropTypes.string,
      marginLeft: PropTypes.string
    })
  };

  static defaultProps = {
    type: TYPES.DEFAULT,
    onClick: () => {},
    margin: {}
  };

  styleProps = {
    margin: this.props.margin
  };

  getWrappedTag = () => {
    let { applied, disabled } = this.props;
    if (applied) {
      return AppliedTag;
    } else if (disabled) {
      return DisabledTag;
    }
    return DefaultTag;
  };
  render() {
    let { children, type, checkable } = this.props;
    let TagComponent;
    let AntTagComponent = checkable ? AntTag.CheckableTag : AntTag;
    let WrappedTag = this.getWrappedTag();
    switch (type) {
      case TYPES.DEFAULT:
        TagComponent = (
          <WrappedTag {...this.props} {...this.styleProps}>
            <AntTagComponent {...this.props}>{children}</AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.ADD:
        TagComponent = (
          <WrappedTag {...this.props} {...this.styleProps}>
            <AntTagComponent {...this.props}>
              {children}
              <Icon type="edit" className="tagIcon" />
            </AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.ADDED:
        TagComponent = (
          <WrappedTag {...this.props} {...this.styleProps}>
            <AntTagComponent {...this.props}>
              {children}
              <Icon type="cross" className="tagIcon" />
            </AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.SELECTION:
        TagComponent = (
          <WrappedTag {...this.props} {...this.styleProps}>
            <AntTagComponent {...this.props}>
              {children}
              <Icon type="tick" className="tagIcon" />
            </AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.SELECTED:
        TagComponent = (
          <WrappedTag {...this.props} {...this.styleProps}>
            <AntTagComponent {...this.props}>{children}</AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.ACTION:
        TagComponent = (
          <WrappedTag {...this.props} {...this.styleProps}>
            <ActionTag {...this.props}>
              <AntTagComponent {...this.props}>{children}</AntTagComponent>
            </ActionTag>
          </WrappedTag>
        );
        break;
    }
    return TagComponent;
  }
}

Tag.CheckableTag = AntTag.CheckableTag;
export default Tag;
