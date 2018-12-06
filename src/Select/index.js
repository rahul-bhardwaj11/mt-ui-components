import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'antd/lib/dropdown/style/css';
import AntSelect from 'antd/lib/select';
import 'antd/lib/select/style/index.css';
import styled from 'styled-components';
import selectArrowIcon from '../styles/icons/downFillcaret.svg';
import StringToHTML from '../StringToHTML';
import classnames from 'classnames';
import theme from '../styles/theme';
import Icon from '../Icon';
const Option = AntSelect.Option;
import ReactDOM from 'react-dom';

const MtWrapper = styled.span`
  .selectDropdownStyle {
    z-index: 999999;
    .ant-select-dropdown-menu-item {
     div {
         width: 95%;
         text-overflow: ellipsis;
         overflow: hidden;
         white-space: nowrap;
       }
     }
   }
  .icon-tick {
    display: none;
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
      border: 1px solid ${theme.colors.ALTO};
      &:hover {
        border: 1px solid ${theme.colors.SILVER};
      }
      &:focus,
      &:active {
        box-shadow: none;
        border: 1px solid ${theme.colors.SILVER};
      }
      &.disabled {
        background-color: #f8f8f8;
        border: 1px solid #e8e8e8;
      }
    }
    .ant-select-open {
      .ant-select-selection {
        border: 1px solid ${theme.colors.SILVER};
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
    background-color: ${theme.colors.WHITE};
    color: ${theme.colors.GREY};
    margin: 8px;
    .ant-select-dropdown-menu-item {
      border-radius: 4px;
      color: #606369;
      // &:first-child {
      //   background-color: ${theme.colors.WHITE};
      // }
      &:hover {
        background-color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
        color: ${theme.colors.WHITE};
        border-radius: 4px;
      }
    }
    .ant-select-dropdown-menu-item-active {
      background-color: ${theme.colors.TROPICAL_BLUE};
      color: ${theme.colors.SHARK};
    }

  .ant-select-dropdown-menu-item-selected{
      .icon-tick {
        content: '';
        font-size: 7px;
        font-weight: bold;
        position: absolute;
        display: block;
        right: 5px;
        top: 13px;
      }
      &:hover {
        .icon-tick {
          display: block;
        }
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
          border: 1px solid ${theme.colors.ALTO};
          border-radius: 16px;
          background-color: ${theme.colors.PORCELAIN};
          color: ${theme.colors.OUTER_SPACE};
          font-size: 12px;
          .ant-select-selection__choice__content {
            margin-right: 5px;
          }
          &:hover {
            border: 1px solid #468ee5;
            background-color: ${theme.colors.WHITE};
            color: #468ee5;
            cursor: pointer;
            .ant-select-selection__choice__remove {
              color: #468ee5;
            }
          }
          .ant-select-selection__choice__remove {
            color: ${theme.colors.OUTER_SPACE};
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
    title: PropTypes.string,
    className: PropTypes.string,
    getPopupContainer: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array
    ])
  };

  static defaultProps = {
    style: { minWidth: 125 }
  };

  element = null;
  constructor(p) {
    super(p);
    this.element = document.createElement('div');
    this.selectRef = React.createRef();
  }

  state = {
    key: 'select'
  };

  componentDidMount() {
    document.body.appendChild(this.element);
  }

  componentWillUnmount() {
    document.body.removeChild(this.element);
  }

  // hack for controlled value
  componentWillReceiveProps(nextProps) {
    if (nextProps.value != this.props.value) {
      this.setState({ key: nextProps.value });
    }
  }

  render() {
    let { options, style } = this.props;
    const container =
      this.props.getPopupContainer && this.props.getPopupContainer();
    return (
      <div key={this.state.key}>
        {ReactDOM.createPortal(
          <MtWrapper style={style} innerRef={this.selectRef} />,
          container || this.element
        )}
        <MtWrapper style={style}>
          <AntSelect
            {...this.props}
            onClick={event => {
              event.stopPropagation();
            }}
            getPopupContainer={() => {
              return this.selectRef.current;
            }}
            dropdownClassName={classnames(
              'selectDropdownStyle',
              this.props.className
            )}
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
                  <Icon type="tick" />
                </Option>
              );
            })}
          </AntSelect>
        </MtWrapper>
      </div>
    );
  }
}

export default Select;
