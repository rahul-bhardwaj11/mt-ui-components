import React, { Component } from "react";
import PropTypes from "prop-types";
import AntInput from "antd/lib/input";
import "antd/lib/input/style/index.css";
import styled from "styled-components";

const HELP = "#BBB",
  DISABLE = "#E8E8E8";

const MtInput = styled.div`
  .ant-input {
    border: 1px solid #ddd;
  }
  .ant-input {
    &:hover {
      border-color: ${HELP};
    }
  }
  .ant-input {
    &:focus {
      border-color: ${HELP};
      font-weight: 500;
      outline: 0;
      box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2);
    }
  }
  .ant-input-disabled {
    border-color: ${DISABLE};
    background-color: #f8f8f8;
    color: ${HELP};
    &:hover {
      border-color: ${DISABLE};
    }
  }
  .ant-input-error {
    border-color: #ff6060;
  }
`;

class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string
  };

  render() {
    return (
      <MtInput>
        <AntInput
          {...this.props}
          onClick={event => {
            event.stopPropagation();
          }}
        />
      </MtInput>
    );
  }
}
Input.TextArea = AntInput.TextArea;
export default Input;
