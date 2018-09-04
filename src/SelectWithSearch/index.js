import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import AsyncSelect from "react-select/lib/Async";
//import { Icon } from 'antd';
import styled from 'styled-components';
import theme from '../styles/theme';
import AsyncSelect from './asyncSelect';
import SyncSelect from './syncSelect';
import mixin from '../styles/mixins';
import searchIcon from './assets/search.svg';
import arrowIcon from './assets/downFillcaret.svg';
import classnames from 'classnames';
import cancel from './assets/cancel.svg';

const SelectBox = styled.div`

 &.buttonSelect {
    .mt-react-select__control {
       width: 100%;
       min-height: 32px;
     }

  }
  .mt-react-select__single-value {
    padding-left: 0px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .mt-react-select__value-container{
    margin-left: 20px;
    overflow: hidden;
    padding-left: 0px;
    margin-right: 20px;
    &:before {
      content: '';
      display: none;
      height: 22px;
      width: 24px;
      background-size: 14px;
      padding-left: 5px;
      padding-top: 5px;
      left: 0;
      position: absolute;
      opacity: 0.6;
  }
  }
  .mt-react-select__menu-list {
    padding: 8px;
    color: ${theme.colors.OUTER_SPACE};
  }

  .selectBoxWrapper{
    max-height: 32px;
    margin-top: 10px;
  .activeSearch {
    // .icon-Cancel {
    //   display: inline-block;
    //   position: absolute;
    //   right: 10px;
    //   bottom: 10px;
    //   cursor: pointer;
    // }
    .mt-react-select__control {
      &:before {
        display: block;
        background: url('${searchIcon}') no-repeat 10px 5px;
        height: 18px;
        width: 19px;
        content: '';
        background-size: 14px;
        padding-top: 5px;
        left: 0;
        position: absolute;
        opacity: 0.6;
        margin-left: 20px;
        top: 9px;
        background-position: 1px 0px;
      }
      &:after {
        display: block;
        background: url('${cancel}') no-repeat 10px 5px;
        height: 18px;
        width: 19px;
        content: '';
        background-size: 10px;
        padding-top: 5px;
        right: 0;
        position: absolute;
        opacity: 0.6;
        margin-left: 5px;
        top: 10px;
        background-position: 1px 0px;
      }
    }
    .mt-react-select__dropdown-indicator {
      display: none;
      background-size: 8px;
    }
      .mt-react-select__single-value {
        margin-left: 20px;
      }
      
      .mt-react-select__placeholder {
        margin-left: 0px;
        padding-left: 28px;
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
    border: 1px solid ${theme.colors.ALTO};
    position: relative;
    //width: ${({ width = 'auto' }) => width};
  }

  .mt-react-select__control--is-focused {
    box-shadow: none;
    border: 1px solid ${theme.colors.SILVER};
  }

  .mt-react-select__control--is-focused:hover {
    border: 1px solid ${theme.colors.SILVER};
  }

  .mt-react-select__option {
    border-radius: 4px;
    padding: 6px 20px 8px 16px;
    color: ${theme.colors.OUTER_SPACE};
    height: 32px;
  }

  .mt-react-select__option--is-selected {
    background-color: #ffffff;
    color: ${theme.colors.OUTER_SPACE};
  }
  .mt-react-select__option--is-focused {
    background-color:  ${theme.colors.INDIGO};
    color: #ffffff;
    cursor: pointer;
  }
  .mt-react-select__indicator-separator {
    display: none;
  }
  .mt-react-select__input {
    //margin-left: 10px;
  }
  .mt-react-select__placeholder {
    //padding-left: 20px;
  }

  .ant-checkbox-wrapper .ant-checkbox {
    vertical-align: middle;
    margin-right: 8px;
  }

  .mt-react-select__menu-list--is-multi {
    padding: 19px 24px;
  }

  .ant-btn-text {
    padding: 0px 24px;
  }

  .selectedItem {
    margin-left: 2px;
    margin-right: 2px;
    font-size: 14px;
    color: ${theme.colors.DARK_OUTER_SPACE};
    //padding-left: 20px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
.componentWrapper {
  ${mixin.clearfix()};
  width: 100%;
}

.buttonWrapperL {
  float: left;
  width: 50%;
  padding-bottom: 10px;
}

.buttonWrapperR {
  width: 50%;
  text-align: right;
  float: right;
  padding-bottom: 10px;
}

.dataLabel {
  ${mixin.displayIB()};
  ${mixin.greyText()};
}

.icon-Cancel {
  display: none;
}

.mt-react-select__value-container:before {
  height: 22px;
  width: 26px;
}

.checkboxWrapper {
  margin-bottom: 5px;
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
    isButton: PropTypes.bool
  };
  static defaultProps = {
    placeholder: 'Type here to Search'
  };

  render() {
    let { async, isButton } = this.props;
    let SelectComponent = SyncSelect;
    if (async) {
      SelectComponent = AsyncSelect;
    }
    let className = classnames({
      buttonSelect: isButton
    });
    return (
      <SelectBox className={className}>
        <SelectComponent {...this.props} />
      </SelectBox>
    );
  }
}

export default SelectWithSearch;
