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

const SelectBox = styled.div`
  .mt-react-select__single-value {
    padding-left: 0px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .mt-react-select__value-container{
    padding-left: 12px;
    &:before {
    content: '';
    display: none;
    height: 25px;
    width: 30px;
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

  .activeSearch {
    .mt-react-select__value-container{
      &:before {
          display: block;
          background: url('${searchIcon}') no-repeat 10px 5px;
        }
      }
      .mt-react-select__single-value {
        padding-left: 20px;
      }
      .mt-react-select__dropdown-indicator {
        display: none;
      }
      .mt-react-select__placeholder {
        padding-left: 20px;
      }
  }
  .mt-react-select__clear-indicator{
    display: none;
  }
  .mt-react-select__control {
    border: 1px solid ${theme.colors.ALTO};
    width: ${({ width = 'auto' }) => width};
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
  // .mt-react-select__option:hover{
  //   background-color: ${theme.colors.INDIGO};
  //   color: #ffffff;
  //   cursor: pointer;
  // }
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
    padding-left: 20px;
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
    //padding-left: 30px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
.componentWrapper {
  ${mixin.clearfix()};
}

.buttonWrapperL {
  float: left;
  padding-bottom: 15px;
  padding-top: 15px;
}

.buttonWrapperR {
  float: right;
  padding-bottom: 15px;
  padding-top: 15px;
}

.dataLabel {
  ${mixin.displayIB()};
}

.icon-Cancel {
  display: none;
}

.activeInput {
  .icon-Cancel {
    display: inline-block;
  }
}

.checkboxWrapper {
  margin-bottom: 5px;
}
`;

class SelectWithSearch extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    async: PropTypes.bool,
    placeholder: PropTypes.string,
    isMulti: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  };
  static defaultProps = {
    placeholder: 'Type here to Search'
  };

  render() {
    let { async } = this.props;
    let SelectComponent = SyncSelect;
    if (async) {
      SelectComponent = AsyncSelect;
    }
    return (
      <SelectBox>
        <SelectComponent {...this.props} />
      </SelectBox>
    );
  }
}

export default SelectWithSearch;
