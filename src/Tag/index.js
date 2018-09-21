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
  .ant-tag {
    background: #fff;
    color: ${theme.colors.OUTER_SPACE};
    font-size: 12px;
    line-height: 22px;
    border-radius: 16px;
    height: 24px;
    padding: 0 15px;
    margin: 0px;
    &:active {
      border: 1px solid ${theme.colors.TAG_HOVER_TEXT_COLOR};
      background-color: ${theme.colors.TROPICAL_BLUE};
      color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
    }
  }
`;

const DefaultTag = styled(ButtonWrapper)`
  &:focus {
    .ant-tag {
      border: 1px solid ${theme.colors.INDIGO};
      color: ${theme.colors.INDIGO};
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
  .tagIcon {
    font-size: 10px;
    margin-left: 8px;
  }
`;

const ActionTag = styled(ButtonWrapper)`
  .ant-tag {
    color: ${theme.colors.INDIGO};
    border: 1px solid ${theme.colors.INDIGO};
  }
`;
const AppliedTag = styled(ButtonWrapper)`
  .ant-tag {
    color: ${theme.colors.INDIGO};
    border: 1px solid ${theme.colors.INDIGO};
    background-color: ${theme.colors.TROPICAL_BLUE};
  }
`;

const DisabledTag = styled(ButtonWrapper)`
  .ant-tag {
    color: ${theme.colors.SILVER};
    border: 1px solid ${theme.colors.PEARL};
  }
`;
const CheckableWrappedTag = styled(ButtonWrapper)`
  .ant-tag-checkable:not(.ant-tag-checkable-checked) {
    border: 1px solid ${theme.colors.ALTO};
    &:hover {
      color: ${theme.colors.OUTER_SPACE};
    }
  }
  .ant-tag {
    &.ant-tag-checkable {
      &.ant-tag-checkable-checked {
        border: 1px solid ${theme.colors.TAG_HOVER_TEXT_COLOR};
        background-color: ${theme.colors.TROPICAL_BLUE};
        color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
        &:hover {
          border: 1px solid ${theme.colors.TAG_HOVER_TEXT_COLOR};
          background-color: ${theme.colors.TROPICAL_BLUE};
          color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
        }
      }
    }
  }
`;

const TYPES = {
  NORMAL: 'normal',
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
    type: TYPES.NORMAL,
    onClick: () => {},
    margin: {}
  };

  getWrappedTag = () => {
    let { applied, disabled, checkable } = this.props;
    if (applied) {
      return AppliedTag;
    } else if (disabled) {
      return DisabledTag;
    } else if (checkable) {
      return CheckableWrappedTag;
    }
    return DefaultTag;
  };
  render() {
    let { children, type, checkable } = this.props;
    let TagComponent;
    let AntTagComponent = checkable ? AntTag.CheckableTag : AntTag;
    let WrappedTag = this.getWrappedTag();
    let WrappedTagProps = {
      ...this.props,
      onClick: () => {}
    };
    switch (type) {
      case TYPES.NORMAL:
        TagComponent = (
          <WrappedTag {...WrappedTagProps}>
            <AntTagComponent {...this.props}>{children}</AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.ADD:
        TagComponent = (
          <WrappedTag {...WrappedTagProps}>
            <AntTagComponent {...this.props}>
              {children}
              <Icon type="edit" className="tagIcon" />
            </AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.ADDED:
        TagComponent = (
          <WrappedTag {...WrappedTagProps}>
            <AntTagComponent {...this.props}>
              {children}
              <Icon type="cross" className="tagIcon" />
            </AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.SELECTION:
        TagComponent = (
          <WrappedTag {...WrappedTagProps}>
            <AntTagComponent {...this.props}>
              {children}
              <Icon type="tick" className="tagIcon" />
            </AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.SELECTED:
        TagComponent = (
          <WrappedTag {...WrappedTagProps}>
            <AntTagComponent {...this.props}>{children}</AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.ACTION:
        TagComponent = (
          <WrappedTag {...WrappedTagProps}>
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
