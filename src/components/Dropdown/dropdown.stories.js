import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Dropdown from "./index";
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import { withInfo } from "@storybook/addon-info";
import { withKnobs, object } from "@storybook/addon-knobs";

const styles = {
  textAlign: "center"
};

const stories = storiesOf("Dropdown", module);
stories.addDecorator(withKnobs);

const options = [
  { key: "1", content: "First Item" },
  { key: "2", content: "Second Item" },
  { key: "3", content: "Third Item" }
];

stories.add(
  "Default Dropdown",
  withInfo("Basic usage of the Dropdown")(() => (
    <Dropdown options={object("options", options)}>
      <a className="ant-dropdown-link" href="#">
        Hover me
      </a>
    </Dropdown>
  ))
)
.add(
  "Dropdown with button as children",
  withInfo("Basic usage of the Dropdown")(() => (
    <Dropdown options={object("options", options)}>
      <Button style={{ marginLeft: 8 }}>
        Button <Icon type="down" />
      </Button>
    </Dropdown>
  ))
);
