import React from 'react';
import AntAutoComplete from 'antd/lib/auto-complete';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import 'antd/lib/auto-complete/style/index.css';
import 'antd/lib/select/style/index.css';
import theme from '../styles/theme';

const StyledAutoComplete = Styled.div`
.ant-select-dropdown-menu-item:hover{
  background-color:${theme.colors.INDIGO};
  color:${theme.colors.WHITE};
}
  .ant-select-auto-complete.ant-select .ant-select-selection .ant-input {
    &.active,
    &:focus,
    &:hover {
      border-color: ${theme.colors.SILVER};
      outline: 0;
      box-shadow: none;
    }
  }
  .ant-select-dropdown  {
     ${props =>
       props.inputHeight
         ? `top: calc(${props.inputHeight} + 5px) !important`
         : ''};
  }
  .ant - select - dropdown - menu {
  background - color: ${theme.colors.WHITE};
  color: ${theme.colors.GREY};
  margin: 8px;

    .ant - select - dropdown - menu - item {
    border - radius: 4px;
    margin - bottom: 4px;
      &: last - child{
      margin - bottom: 0px;
    }
    color: ${theme.colors.DARK_OUTER_SPACE};
    font - weight: normal;
      &: hover {
      background - color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
      color: ${theme.colors.WHITE};
      border - radius: 4px;
    }
  }
    .ant - select - dropdown - menu - item - active {
    background - color: ${theme.colors.WHITE};
    color: ${theme.colors.SHARK};
  }
   .ant - select - dropdown - menu - item - selected{
    background - color: ${theme.colors.TROPICAL_BLUE};
  }
}
`;

class AutoComplete extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    getPopupContainer: PropTypes.func,
    children: PropTypes.node
  };

  state = {};

  handleInputKeyDown = e => {
    if (!this.props.children) return;
    e.persist();
    setTimeout(() => {
      this.setState({ targetInput: e.target });
    }, 0);
  };
  getElementHeight = element => {
    return element && element.style && element.style.height;
  };
  render() {
    const { targetInput } = this.state;
    const inputHeight = this.getElementHeight(targetInput);

    const {
      className,
      getPopupContainer = () => {
        return this.popUpContainer;
      },
      ...rest
    } = this.props;

    return (
      <StyledAutoComplete
        inputHeight={inputHeight}
        innerRef={ele => {
          if (ele) this.popUpContainer = ele;
        }}
        className={className}
      >
        <AntAutoComplete
          {...rest}
          getPopupContainer={getPopupContainer}
          backfill
          onInputKeyDown={this.handleInputKeyDown}
        />
      </StyledAutoComplete>
    );
  }
}

AutoComplete.Option = AntAutoComplete.Option;
export default AutoComplete;
