import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./index";
import { withInfo } from "@storybook/addon-info";
import { text, withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

stories
  .add(
    "Primary button",
    withInfo("Adding type primary to button")(() => (
      <Button type={text('type','primary')}>{text('children','Submit')}</Button>
    ))
  )
  .add(
    "Secondary button",
    withInfo("Adding type secondary to button")(() => (
      <Button type={text('type','secondary')}>{text('children','Submit')}</Button>
    ))
  )
  .add(
    "Tertiary button",
    withInfo("Adding type tertiary to button")(() => (
      <Button type={text('type','tertiary')}>{text('children','Submit')}</Button>
    ))
  )
  .add(
    "Pills button",
    withInfo("Adding type tertiary to button")(() => (
      <Button type={text('type','pills')}>{text('children','Submit')}</Button>
    ))
  )
  .add(
    "text button",
    withInfo("Adding type text to button")(() => (
      <Button type={text('type','text')}>{text('children','Submit')}</Button>
    ))
  );
