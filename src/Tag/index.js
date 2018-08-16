import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTag from 'antd/lib/tag';
import 'antd/lib/tag/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import add from './assests/add.svg';
import tick from './assests/tick.svg';
import cancel from './assests/cancel.svg';
// import Icon from '../Icon';

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
    border: 1px solid ${theme.colors.ALTO};
    border-radius: 16px;
    &:hover {
      color: #989ca6;
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
  .tagIcons {
    margin-left: 5px;
    display: inline-block;
    vertical-align: middle;
    img {
      vertical-align: middle;
      margin-top: -4px;
    }
  }
`;

const ActionTag = styled.div`
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
    margin-bottom: 12px;
  }
`;
const AppliedTag = styled.div`
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
    margin-bottom: 12px;
  }
`;

const DisabledTag = styled.div`
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
    margin-bottom: 12px;
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

// class CheckableTag extends Component {
//   state = { checked: true };

//   handleChange = checked => {
//     this.setState({ checked });
//   };

//   render() {
//     return (
//       <AntTag.CheckableTag
//         {...this.props}
//         checked={this.state.checked}
//         onChange={this.handleChange}
//       />
//     );
//   }
// }

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
    disabled: PropTypes.bool,
    checkable: PropTypes.bool,
    onClick: PropTypes.func
  };

  static defaultProps = {
    type: TYPES.default,
    onClick: () => {}
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
          <WrappedTag {...this.props}>
            <AntTagComponent {...this.props}>{children}</AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.ADD:
        TagComponent = (
          <WrappedTag {...this.props}>
            <AntTagComponent {...this.props}>
              {children}
              <span className="tagIcons">
                <img src={add} width="10" className="img" />
              </span>
              {/* <Icon type="edit" className="editIcon" /> */}
            </AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.ADDED:
        TagComponent = (
          <WrappedTag {...this.props}>
            <AntTagComponent {...this.props}>
              {children}
              <span className="tagIcons">
                <img src={cancel} width="8" />
              </span>
              {/* <Icon type="cross" /> */}
            </AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.SELECTION:
        TagComponent = (
          <WrappedTag {...this.props}>
            <AntTagComponent {...this.props}>
              {children}
              <span className="tagIcons">
                <img src={tick} width="10" />
              </span>
              {/* <Icon type="tick" /> */}
            </AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.SELECTED:
        TagComponent = (
          <WrappedTag {...this.props}>
            <AntTagComponent {...this.props}>{children}</AntTagComponent>
          </WrappedTag>
        );
        break;
      case TYPES.ACTION:
        TagComponent = (
          <WrappedTag {...this.props}>
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
