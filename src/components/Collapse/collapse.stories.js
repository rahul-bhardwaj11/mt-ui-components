import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Collapse from "./index";
import Switch from "../Switch";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, object } from "@storybook/addon-knobs";


const stories = storiesOf("Collapse", module);
stories.addDecorator(withKnobs);


const options = [
  { header: "This is panel header 1", content: ["First Item"] },
  { header: "This is panel header 2", content: "<b>Second Item</b>" },
  { header: "This is panel header 3", content: "Third Item" }
];


stories.add(
  "Default Collapse",
  withInfo("Basic usage of the Collapse")(() => (
    <Collapse options={object("options", options)} />
  ))
);