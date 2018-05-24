import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GroupButtonDropdown from "./index";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, object, text } from "@storybook/addon-knobs";

const stories = storiesOf("GroupButtonDropdown", module);
stories.addDecorator(withKnobs);

const options = [
  { key: "1", content: "First Item" },
  { key: "2", content: "Second Item" },
  { key: "3", content: "Third Item" }
];

stories.add(
  "Default GroupButtonDropdown",
  withInfo("Basic usage of the GroupButtonDropdown")(() => (
    <GroupButtonDropdown options={object("options", options)} label={text("label","Add")} />
  ))
);
