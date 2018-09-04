import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'antd/lib/dropdown/style/css';
import AntSelect from 'antd/lib/select';
import 'antd/lib/select/style/index.css';
import '../styles/override.scss';
import styled from 'styled-components';
import selectArrowIcon from './assets/downFillcaret.svg';
import StringToHTML from '../StringToHTML';

const Option = AntSelect.Option;

const MtWrapper = styled.div`
  display: inline-block;
  .ant-select-arrow {
    display: block;
    background: url('${selectArrowIcon}') no-repeat 1px 4px;
    background-size: 8px;
    width: 9px;
    height: 9px;
    &::before {
      content: '';
    }  
  }
`;

class Select extends Component {
  static propTypes = {
    options: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    style: PropTypes.object,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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
        >
          {options.map(option => {
            return (
              <Option key={option.key} value={option.key}>
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
