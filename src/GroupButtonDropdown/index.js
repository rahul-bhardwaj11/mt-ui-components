import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import Button from '../Button';
import styled from 'styled-components';
import Icon from '../Icon';

const MtGroupDropdown = styled.div`
  .ant-dropdown {
    left: 0 !important;
  }
  .ant-dropdown-trigger {
    .ant-btn-primary {
      span {
        font-size: 8px;
        margin-top: 7px;
        display: inline-block;
        vertical-align: top;
      }
    }
  }
  .ant-dropdown-menu-light {
    border: 1px solid rgba(205, 210, 217, 0.5);
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  }
`;

class GroupButtonDropdown extends Component {
  static propTypes = {
    options: PropTypes.any.isRequired,
    trigger: PropTypes.string,
    onSelect: PropTypes.func,
    label: PropTypes.string
  };

  static defaultProps = {
    trigger: 'click',
    onSelect: () => {}
  };

  render() {
    let { label, ...rest } = this.props;
    return (
      <MtGroupDropdown>
        <Button
          style={{
            display: 'inline-block',
            padding: '0px 10px',
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0
          }}
          onClick={this.props.onSelect}
        >
          {label}
        </Button>

        <Dropdown {...rest}>
          <div>
            <Button
              style={{
                padding: '0px 10px',
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                borderLeft: '1px solid'
              }}
            >
              <Icon type="down_fillcaret" />
            </Button>
          </div>
        </Dropdown>
      </MtGroupDropdown>
    );
  }
}
export default GroupButtonDropdown;
