import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'antd/lib/dropdown/style/css';
import AntSelect from 'antd/lib/select';
import 'antd/lib/select/style/index.css';
import styled from 'styled-components';
import selectArrowIcon from '../styles/icons/downFillcaret.svg';
import StringToHTML from '../StringToHTML';

const Option = AntSelect.Option;

const MtWrapper = styled.div`
  display: inline-block;

  .selectDropdownStyle {
    .ant-select-dropdown-menu-item {
     div {
         width: 95%;
         text-overflow: ellipsis;
         overflow: hidden;
         white-space: nowrap;
       }
     }
   }

  .ant-select, .ant-select-dropdown{
    font-family: inherit;
  }
  .ant-select-arrow {
    display: block;
    background: url('${selectArrowIcon}') no-repeat 1px 4px;
    background-size: 8px;
    width: 9px;
    height: 9px;
    &::before {
      content: '';
    }
    svg{
      display:none;
    }
  }
  .ant-select-selection {
    &.ant-select-selection--single {
      border: 1px solid get('colors.ALTO');
      &:hover {
        border: 1px solid get('colors.SILVER');
      }
      &:focus,
      &:active {
        box-shadow: none;
        border: 1px solid get('colors.SILVER');
      }
      &.disabled {
        background-color: #f8f8f8;
        border: 1px solid #e8e8e8;
      }
    }
    .ant-select-open {
      .ant-select-selection {
        border: 1px solid get('colors.SILVER');
      }
    }
  }

  .ant-select-open {
    .ant-select-selection {
      &.ant-select-selection--multiple {
        border: 1px solid transparent;
        outline: none;
        &:hover,
        &:focus,
        &:active {
          border: 0px;
          border-color: transparent;
          outline: none;
          box-shadow: none;
        }
      }
    }
  }
  .ant-select-dropdown-menu {
    background-color: #fff;
    color: get('colors.GREY');
    margin: 8px;
    padding-bottom: 8px;
    .ant-select-dropdown-menu-item {
      border-radius: 4px;
      margin-bottom: px;
      &:first-child {
        background-color: #fff;
      }
      &:hover {
        background-color: #4a90e2;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
  .ant-select-selection-selected-value {
    font-weight: normal;
    div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
    }
  }
  .ant-select-selection--multiple {
    width: 688px;
    padding: 5px;
    border: 0px;
    &:focus {
      border-color: transparent;
      box-shadow: none;
    }
    .ant-select-selection__rendered {
      & > ul {
        & > .ant-select-selection__choice {
          border-radius: 14px;
          border: 1px solid get('colors.ALTO');
          border-radius: 16px;
          background-color: #f5f6f7;
          color: #989ca6;
          font-size: 12px;
          .ant-select-selection__choice__content {
            margin-right: 5px;
          }
          &:hover {
            border: 1px solid #468ee5;
            background-color: #fff;
            color: #468ee5;
            cursor: pointer;
            .ant-select-selection__choice__remove {
              color: #468ee5;
            }
          }
          .ant-select-selection__choice__remove {
            color: #989ca6;
            font-size: 16px;
          }
        }
      }
    }
  }
  .ant-select-dropdown--multiple {
    z-index: 999999;
  }
`;

class Select extends Component {
  static propTypes = {
    options: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    style: PropTypes.object,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string
  };

  static defaultProps = {
    style: { minWidth: 125 }
  };

  render() {
    let { options, style } = this.props;

    return (
      <MtWrapper
        innerRef={el => {
          if (el) {
            this.selectDropdownRef = el;
          }
        }}
        style={style}
      >
        <AntSelect
          {...this.props}
          onClick={event => {
            event.stopPropagation();
          }}
          getPopupContainer={() => {
            return this.selectDropdownRef;
          }}
          dropdownClassName="selectDropdownStyle"
        >
          {options.map(option => {
            return (
              <Option
                key={option.key}
                value={option.key}
                title={this.props.title || option.title}
              >
                {typeof option.content === 'string' ? (
                  <StringToHTML content={option.content} />
                ) : (
                  option.content
                )}
              </Option>
            );
          })}
        </AntSelect>
      </MtWrapper>
    );
  }
}

export default Select;
