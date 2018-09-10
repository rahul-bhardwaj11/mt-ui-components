import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./index";
import Button from "../Button";
import PropTypes from "prop-types";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf("Modal", module);
stories.addDecorator(withKnobs);

class ModalStoryComponent extends Component {
  state = { visible: false };
  static propTypes = {
    type: PropTypes.oneOf(["small", "medium", "large", "full"])
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          type={this.props.type}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

stories.add(
  "Default Modal",
  withInfo("Basic usage of the Modal")(() => <ModalStoryComponent />)
);

stories.add(
  "Full width Modal",
  withInfo("Full width Modal")(() => <ModalStoryComponent type="full" />)
);
