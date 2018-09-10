import React, { Component } from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import Button from "../Button";
import styled from "styled-components";

const MtGroupDropdown = styled.div`
  .ant-dropdown-trigger {
    .ant-btn-primary {
      span {
        font-size: 9px;
        margin-top: 4px;
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
    onClick: PropTypes.func,
    label: PropTypes.string
  };

  static defaultProps = {
    trigger: "click",
    onClick: () => {}
  };

  render() {
    let { label, onClick, ...rest } = this.props;
    return (
      <MtGroupDropdown>
        <Button
          style={{
            display: "inline-block",
            padding: "0px 10px",
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0
          }}
          onClick={onClick}
        >
          {label}
        </Button>

        <Dropdown {...rest}>
          <div>
            <Button
              style={{
                padding: "0px 10px",
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                borderLeft: "1px solid"
              }}
            >
              <span>&#9660;</span>
            </Button>
          </div>
        </Dropdown>
      </MtGroupDropdown>
    );
  }
}
export default GroupButtonDropdown;
