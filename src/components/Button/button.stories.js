import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./index";
import { withInfo } from "@storybook/addon-info";
import { text, withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

stories
  .add("Default button", withInfo("Basic usage of the button")(() => <Button>{text('Label','Submit')}</Button>))
  .add(
    "Primary button",
    withInfo("Adding type primary to button")(() => (
      <Button type="{text('type','primary'}">{text('Label','Submit')}</Button>
    ))
  )
  .add(
    "Dashed button",
    withInfo("Adding type dashed to button")(() => (
      <Button type="{text('type','dashed'}">{text('Label','Submit')}</Button>
    ))
  )
  .add(
    "Danger button",
    withInfo("Adding type danger to button")(() => (
      <Button type="{text('type','danger'}">{text('Label','Submit')}</Button>
    ))
  );
