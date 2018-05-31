import React, { Component } from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import Button from "../Button";
import classnames from "classnames";
import styled from 'styled-components';

const Container = styled.div`
  display-inline: block
`;


class GroupButtonDropdown extends Component {
  static propTypes = {
    options: PropTypes.any.isRequired,
    trigger: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string
  };

  static defaultProps = {
    trigger: "click"
  };

  onClick = (key) => {
    if (this.props.onClick) {
      this.props.onClick(key);
    }
  };

  render() {
    let { options, trigger, label } = this.props;
    return (
      <Container>
        <Button
          style={{
            "borderBottomRightRadius": 0,
            "borderTopRightRadius": 0
          }}
        >
          {label}
        </Button>
        <Dropdown options={options} onClick={this.onClick} trigger={trigger}>
          <div style={{ display: "inline-block" }}>
            <Button
              style={{
                "borderBottomLeftRadius": 0,
                "borderTopLeftRadius": 0,
                "borderLeft": "1px solid"
              }}
            >
              <span>&#9660;</span>
            </Button>
          </div>
        </Dropdown>
      </Container>
    );
  }

}
export default GroupButtonDropdown;
