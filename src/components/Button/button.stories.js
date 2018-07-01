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
    "link button",
    withInfo("Adding type link to button")(() => (
      <Button type={text('type','link')}>{text('children','Submit')}</Button>
    ))
  );
