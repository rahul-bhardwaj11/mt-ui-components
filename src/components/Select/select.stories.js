import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Select from "./index";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, object } from "@storybook/addon-knobs";

const stories = storiesOf("Select", module);
stories.addDecorator(withKnobs);

const options = [
  { key: "1", content: "First Item" },
  { key: "2", content: "Second Item" },
  { key: "3", content: "Third Item" }
];

stories.add(
  "Default Select",
  withInfo("Basic usage of the Select")(() => (
    <Select options={object("options", options)}>
    </Select>
  ))
);
