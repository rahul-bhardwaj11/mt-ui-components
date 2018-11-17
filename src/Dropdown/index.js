import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    onSelect: PropTypes.func,
    type: PropTypes.string,
    label: PropTypes.string,
    getPopupContainer: PropTypes.func,
    placement: PropTypes.string,
    className: PropTypes.string,
    selectedKeys: PropTypes.array
  };

  static defaultProps = {
    trigger: 'hover',
    placement: 'bottomRight',
    onSelect: () => {}
  };
  dropdownRef = null;

  element = null;

  constructor(p) {
    super(p);
    this.element = document.createElement('div');
  }

  componentDidMount() {
    if (!this.props.getPopupContainer || !this.props.getPopupContainer())
      document.body.appendChild(this.element);
    // if (this.props.getPopupContainer && this.props.getPopupContainer())
    //   document.body.appendChild(this.props.getPopupContainer());
    // else {
    //   document.body.appendChild(this.element);
    // }
  }

  componentWillUnmount() {
    if (!this.props.getPopupContainer) document.body.removeChild(this.element);
    // if (this.props.getPopupContainer && this.props.getPopupContainer())
    //   document.body.removeChild(this.props.getPopupContainer());
    // else {
    //   document.body.removeChild(this.element);
    // }
  }

  render() {
    let {
      options,
      trigger,
      children,
      type,
      label,
      onSelect,
      placement,
      className,
      selectedKeys,
      ...rest
    } = this.props;

    const container =
      this.props.getPopupContainer && this.props.getPopupContainer();

    let overlay;
    if (options instanceof Array) {
      overlay = (
        <Menu
          options={options}
          onClick={onSelect}
          selectedKeys={selectedKeys}
        />
      );
    } else {
      overlay = options;
    }
    if (type === 'button') {
      children = <Button>{label || 'Button'}</Button>;
    }

    return (
      <React.Fragment>
        {/* <MtWrapper
          innerRef={el => {
            this.dropdownRef = el;
          }}
          className={className}
        > */}
        {ReactDOM.createPortal(
          <MtWrapper innerRef={e => e && (this.dropdownRef = e)} />,
          container || this.element
        )}
        <MtWrapper className={className}>
          <AntDropdown
            overlay={overlay}
            trigger={[trigger]}
            prefixCls={'ant-dropdown'}
            getPopupContainer={() => {
              return this.dropdownRef;
            }}
            placement={placement}
            {...rest}
          >
            {children}
          </AntDropdown>
        </MtWrapper>
        {/* </MtWrapper> */}
      </React.Fragment>
    );
  }
}
export default Dropdown;
