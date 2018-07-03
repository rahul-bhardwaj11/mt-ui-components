import React from "react";

import { storiesOf } from "@storybook/react";
import Button from "antd/lib/button";
import { action } from "@storybook/addon-actions";
import Popover from "./index";
import { withInfo } from "@storybook/addon-info";
import { withKnobs , text} from "@storybook/addon-knobs";

const popoverButtons = () => ([
      <Button type="default">Cancel</Button>,
      <Button type="primary">Delete</Button>
  ]
)

const stories = storiesOf("Popover", module);
stories.addDecorator(withKnobs);

stories
  .add("Popover", withInfo("Basic usage popover")(() => <div>
    <Popover title="text will come here" content={popoverButtons()} trigger="hover" />
</div>));
