import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "./index";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, object } from "@storybook/addon-knobs";

const stories = storiesOf("Menu", module);
stories.addDecorator(withKnobs);

const options = [
  { key: "1", content: "<span>First Item</span>" },
  { key: "2", content: "Second Item" },
  { key: "3", content: "Third Item" }
];

stories.add("Default Menu", withInfo("Basic usage of the Menu")(() => <Menu options={object("options", options)} />));
