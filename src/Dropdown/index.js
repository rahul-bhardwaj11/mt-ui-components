import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntDropdown from 'antd/lib/dropdown';
import Menu from '../Menu';
import 'antd/lib/dropdown/style/index.css';
import Button from 'antd/lib/button';
import styled from 'styled-components';
import 'antd/lib/button/style/index.css';

const MtWrapper = styled.div`
  display: inline-block;
`;

class Dropdown extends Component {
  static propTypes = {
    options: PropTypes.any.isRequired,
    trigger: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.string,
    label: PropTypes.string,
    getPopupContainer: PropTypes.func,
    placement: PropTypes.string
  };

  static defaultProps = {
    trigger: 'hover',
    placement: 'bottomRight'
  };

  onClick = key => {
    if (this.props.onClick) {
      this.props.onClick(key);
    }
  };

  render() {
    let {
      options,
      trigger,
      children,
      type,
      label,
      onClick,
      placement
    } = this.props;
    let overlay;
    if (options instanceof Array) {
      overlay = <Menu options={options} onClick={this.onClick} />;
    } else {
      overlay = options;
    }
    if (type === 'button') {
      children = <Button>{label || 'Button'}</Button>;
    }

    return (
      <MtWrapper
        innerRef={el => {
          if (el) {
            this.dropdownRef = el;
          }
        }}
      >
        <AntDropdown
          overlay={overlay}
          trigger={[trigger]}
          prefixCls={'ant-dropdown'}
          onClick={onClick}
          getPopupContainer={() => {
            return this.dropdownRef;
          }}
          placement={placement}
        >
          <div> {children} </div>
        </AntDropdown>
      </MtWrapper>
    );
  }
}
export default Dropdown;
