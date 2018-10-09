import styled, { css } from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';

export const TYPES = {
  NORMAL: 'normal',
  ADD: 'add',
  ADDED: 'added',
  SELECTED: 'selected',
  SELECTION: 'selection',
  ACTION: 'action'
};

const getMargin = props => {
  let {
    marginTop = '0px',
    marginRight = '5px',
    marginBottom = '12px',
    marginLeft = '0px'
  } = props.margin;
  return `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`;
};

const AppliedStyle = css`
  .ant-tag {
    color: ${theme.colors.INDIGO};
    border: 1px solid ${theme.colors.INDIGO};
    background-color: ${theme.colors.TROPICAL_BLUE};
  }
`;

const DisabledStyle = css`
  &:disabled {
    .ant-tag {
      border: 1px solid ${theme.colors.PEARL};
      color: ${theme.colors.SILVER};
      background-color: ${theme.colors.WHITE};
      cursor: not-allowed;
    }
  }
  &:hover {
    .ant-tag {
      border: 1px solid ${theme.colors.PEARL};
      color: ${theme.colors.SILVER};
    }
  }
`;

const DefaultTag = css`
  &:focus {
    .ant-tag {
      border: 1px solid ${theme.colors.INDIGO};
      color: ${theme.colors.INDIGO};
      background-color: ${theme.colors.TROPICAL_BLUE};
    }
  }
  &:hover {
    .ant-tag {
      border: 1px solid ${theme.colors.SILVER};
      color: ${theme.colors.OUTER_SPACE};
      opacity: 1;
    }
    .anticon-cross {
      color: ${theme.colors.OUTER_SPACE};
    }
  }
  &:active {
    .ant-tag {
      border: 1px solid ${theme.colors.INDIGO};
      color: ${theme.colors.INDIGO};
    }
  }
`;

const ActionTag = css`
  .ant-tag {
    color: ${theme.colors.INDIGO};
    border: 1px solid ${theme.colors.INDIGO};
  }
  &:focus {
    .ant-tag {
      border: 1px solid ${theme.colors.INDIGO};
      color: ${theme.colors.INDIGO};
      background-color: ${theme.colors.TROPICAL_BLUE};
    }
  }
  &:hover {
    .ant-tag {
      border: 1px solid ${theme.colors.JODHPUR};
      color: ${theme.colors.JODHPUR};
      opacity: 1;
    }
    .anticon-cross {
      color: ${theme.colors.OUTER_SPACE};
    }
  }
  &:active {
    .ant-tag {
      border: 1px solid ${theme.colors.NEPTUNE};
      color: ${theme.colors.NEPTUNE};
    }
  }
`;

const AddTag = css`
  &:hover {
    .ant-tag {
      border: 1px solid ${theme.colors.SILVER};
      color: ${theme.colors.OUTER_SPACE};
      opacity: 1;
    }
    .anticon-cross {
      color: ${theme.colors.OUTER_SPACE};
    }
  }
  &:active {
    .ant-tag {
      border: 1px solid ${theme.colors.SILVER};
      color: ${theme.colors.DARK_OUTER_SPACE};
    }
  }
`;

const AddedTag = css`
  .ant-tag {
    background-color: ${theme.colors.PORCELAIN};
  }
  &:hover {
    .ant-tag {
      border: 1px solid ${theme.colors.SILVER};
      color: ${theme.colors.OUTER_SPACE};
      background-color: ${theme.colors.PORCELAIN};
      opacity: 1;
    }
    .anticon-cross {
      color: ${theme.colors.OUTER_SPACE};
    }
  }
  &:active {
    .ant-tag {
      border: 1px solid ${theme.colors.SILVER};
      color: ${theme.colors.DARK_OUTER_SPACE};
      background-color: ${theme.colors.PORCELAIN};
    }
  }
`;

const SelectionTag = css`
  .ant-tag {
    background-color: ${theme.colors.PORCELAIN};
  }
  &:hover {
    .ant-tag {
      border: 1px solid ${theme.colors.SILVER};
      color: ${theme.colors.OUTER_SPACE};
      background-color: ${theme.colors.PORCELAIN};
      opacity: 1;
    }
    .anticon-cross {
      color: ${theme.colors.OUTER_SPACE};
    }
  }
  &:active {
    .ant-tag {
      border: 1px solid ${theme.colors.SILVER};
      color: ${theme.colors.DARK_OUTER_SPACE};
      background-color: ${theme.colors.PORCELAIN};
    }
  }
`;

const CheckableWrappedTag = css`
  &:focus {
    .ant-tag.ant-tag-checkable {
      border: 1px solid ${theme.colors.ALTO};
      color: ${theme.colors.OUTER_SPACE};
      background-color: ${theme.colors.WHITE};
    }
  }
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
  ${props => (props.disabled ? DisabledStyle : '')};
`;

const ButtonWrapper = styled.button`
  margin: ${props => getMargin(props)};
  border: none;
  background: transparent;
  border-radius: 16px;
  display: inline-block;
  padding: 0px;

  .ant-tag {
    background: ${theme.colors.WHITE};
    font-family: inherit;
    border: 1px solid ${theme.colors.ALTO};
    ${mixins.smallGreyLink()};
    font-weight: 600;
    border-radius: 16px;
    line-height: 22px;
    height: 24px;
    padding: 0px 15px;
    margin: 0px;
    &:focus,
    &:active {
      outline: none;
    }
  }
  .tagIcon {
    font-size: 10px;
    margin-left: 8px;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;

const WrappedTag = styled(ButtonWrapper)`
  ${props => {
    switch (props.type) {
      case TYPES.NORMAL:
        return DefaultTag;
      case TYPES.ADD:
        return AddTag;
      case TYPES.ADDED:
        return AddedTag;
      case TYPES.SELECTED:
        return CheckableWrappedTag;
      case TYPES.SELECTION:
        return SelectionTag;
      case TYPES.ACTION:
        return ActionTag;
    }
  }};
  ${props => (props.checkable ? CheckableWrappedTag : '')};
  ${props => (props.applied ? AppliedStyle : '')};
  ${props => (props.disabled ? DisabledStyle : '')};
`;

export default WrappedTag;
