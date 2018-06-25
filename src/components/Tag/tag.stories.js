import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Tag from "./index";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

const stories = storiesOf("Tag", module);
stories.addDecorator(withKnobs);
function preventDefault(e) {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
}
stories
  .add(
    "Default tag",
    withInfo("Basic usage of the Default tag")(() => (
      <Tag>{text("children", "tag")}</Tag>
    ))
  )
  .add(
    "Link tag",
    withInfo("Basic usage of Link tag")(() => (
     <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
    ))
  )
  .add(
    "Close tag",
    withInfo("Basic usage of tag with close option")(() => (
     <Tag closable onClose={""}>Tag Close</Tag>
    ))
  )
  .add(
    "Prevent Tag",
    withInfo("Basic usage of Prevent Tag")(() => (
      <Tag closable onClose={preventDefault}>Prevent Default</Tag>
    ))
  );
