import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../styles/theme';
import AsyncSelect from './asyncSelect';
import SyncSelect from './syncSelect';
import mixin from '../styles/mixins';
import searchIcon from '../styles/icons/search.svg';
import arrowIcon from '../styles/icons/downFillcaret.svg';
import classnames from 'classnames';

const SelectBox = styled.div`
  position: relative;
  .mt-react-select__control {
    min-height: auto;
    background: ${theme.colors.WHITE};
    line-height: 18px;    
  }

  &.buttonSelect {
    .mt-react-select__control {
       width: 100%;
       height: 32px;
       border-bottom-left-radius: 0px;
       border-bottom-right-radius: 0px;
       border-bottom: none;              
     }
    .selectedItems{
      color: ${theme.colors.INDIGO};
      border: 1px solid ${theme.colors.INDIGO};
      background-color: ${theme.colors.TROPICAL_BLUE};
      &:hover{
        border: 1px solid ${theme.colors.INDIGO};
        color: ${theme.colors.INDIGO};
      }      
    }
    .activeSelect{
        color: ${theme.colors.INDIGO};
        border: 1px solid ${theme.colors.INDIGO};
        &:hover{
          border: 1px solid ${theme.colors.INDIGO};
          color: ${theme.colors.INDIGO};
        }
    }
    .selectWithSearchText{
      display: inline-block;
      line-height: 16px;      
      .discIcon{
        font-size: 4px;
        margin: -2px 8px 0px;
        vertical-align: middle;
        display: inline-block;        
      }
    }
  }
  
  .mt-react-select__single-value {
    color: ${theme.colors.DARK_OUTER_SPACE};
    left: 0px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .mt-react-select__single-value + div, .mt-react-select__placeholder + div {
    margin: 0px 2px;
    line-height: 22px;
  }

  .mt-react-select__value-container--is-multi {
    line-height: 26px;
  }

  .mt-react-select__value-container{
    margin-left: 10px;
    overflow: hidden;
    padding-left: 0px;
    margin-right: 32px;
    cursor: text;
    &:before {
      content: '';
      display: none;
    }
  }
  .mt-react-select__menu {
    z-index: 11;
    margin: 0px;
    ${props =>
      props.showSearch
        ? `border-top-left-radius: 0px;
    border-top-right-radius: 0px;`
        : `margin-top: 8px;`}    
    width: 210px;
    border: 1px solid ${theme.colors.PEARL};
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.08);
  }
  .mt-react-select__menu-list {
    padding: 8px;
    color: ${theme.colors.OUTER_SPACE};
  }

  .selectBoxWrapper{        
    border-radius: 4px; 
    position: relative;
    z-index: 10;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.08);
    ${props => (props.isButton ? 'margin-top: 10px' : '')};  
    .activeSearch {
      .mt-react-select__value-container{
        margin-left: 35px;
        line-height: 18px;
      }

      .activeInput {
        .icon-cross {
          display: block;
          position: absolute;
          right: 14px;
          top: 12px;
          font-size: 10px;
          cursor: pointer;
          &:before {
            float: right;
          }
        }
    }
    .mt-react-select__control {      
      height: 32px;
      &:before {
        display: block;
        background: url('${searchIcon}') no-repeat 1px 0px;
        height: 18px;
        width: 19px;
        content: '';
        background-size: 13px;
        left: 0;
        position: absolute;
        opacity: 0.6;
        left: 12px;
        top: 10px;
      }
    }
    .mt-react-select__dropdown-indicator {
      display: none;
    }
      .mt-react-select__single-value {
        margin-left: 20px;
        line-height: 26px;
      }

      .mt-react-select__placeholder {
          margin-left: 4px;
          ${mixin.inactiveLink()};
          ${mixin.truncate('100%')};
      }
    }

    .mt-react-select__dropdown-indicator {
      display: block;
      background: url('${arrowIcon}') no-repeat 0px 7px;
      background-size: 8px;

      svg {
        display: none;
      }
    }
 }

  .mt-react-select__clear-indicator{
    display: none;
  }

  .mt-react-select__control {
    border: 1px solid ${theme.colors.PEARL};
    border-bottom: none;
    position: relative;
    &:hover{
      border: 1px solid ${theme.colors.PEARL};
      border-bottom: none;
    }
  }

  .mt-react-select__control--is-focused {    
    border: 1px solid ${theme.colors.PEARL};
    border-bottom: none;
    box-shadow: none;
  }

  .mt-react-select__control--is-focused:hover {
    border: 1px solid ${theme.colors.PEARL};
    border-bottom: none;
  }

  .mt-react-select__option {
    border-radius: 4px;
    padding: 6px 20px 8px 16px;
    color: ${theme.colors.OUTER_SPACE};
    height: 32px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mt-react-select__option--is-selected {
    background-color:  ${theme.colors.WHITE};
    color: ${theme.colors.OUTER_SPACE};
  }

  .mt-react-select__option--is-focused {
    background-color:  ${theme.colors.INDIGO};
    color: ${theme.colors.WHITE};
    cursor: pointer;
  }
  .mt-react-select__indicator-separator {
    display: none;
  }

  .ant-checkbox-wrapper .ant-checkbox {
    vertical-align: middle;
    margin-right: 8px;
  }

  .mt-react-select__menu-list--is-multi {
    padding: 4px 24px 0px;
  }

  .selectedItem {
    margin-left: 2px;
    margin-right: 2px;
    font-size: 14px;
    color: ${theme.colors.DARK_OUTER_SPACE};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;

    .selectedItemLabel{
      max-width: calc(100% - 23px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

.componentWrapper {
  ${mixin.clearfix()};
  width: 100%;
  padding: 10px 0px;
  button{
    box-shadow: none;
  }
}

.buttonWrapperL {
  float: left;
  width: 50%; 
}

.buttonWrapperR {
  width: 50%;
  text-align: right;
  float: right;
  .activeBtnState {
   color: ${theme.colors.INDIGO};
  } 
}

.icon-cross {
  display: none;
}

.mt-react-select__value-container:before {
  height: 22px;
  width: 26px;
}

.checkboxWrapper {
  margin-top: 12px;    
  .labelText{
    ${mixin.truncate('auto')};
    display: block;
  }
}
.doneMarginR {
  margin-left: 5px;
}
`;
class SelectWithSearch extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    async: PropTypes.bool,
    placeholder: PropTypes.string,
    isMulti: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    isButton: PropTypes.bool,
    buttonMaxWidth: PropTypes.string,
    buttonWidth: PropTypes.string,
    className: PropTypes.string,
    showSearch: PropTypes.bool
  };
  static defaultProps = {
    placeholder: 'Type here to Search',
    showSearch: true
  };

  render() {
    let { async, isButton, className, showSearch } = this.props;
    let SelectComponent = SyncSelect;
    if (async) {
      SelectComponent = AsyncSelect;
    }
    let componentClassName = classnames(
      {
        buttonSelect: isButton
      },
      className
    );
    return (
      <SelectBox
        className={componentClassName}
        isButton={isButton}
        showSearch={showSearch}
      >
        <SelectComponent {...this.props} />
      </SelectBox>
    );
  }
}

export default SelectWithSearch;
