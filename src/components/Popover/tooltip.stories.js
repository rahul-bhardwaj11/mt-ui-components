import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Popover from "./index";
import { withInfo } from "@storybook/addon-info";
import { withKnobs , text} from "@storybook/addon-knobs";

const stories = storiesOf("Popover", module);
stories.addDecorator(withKnobs);

stories
  .add("Popover", withInfo("Basic usage popover")(() => <div>
    <Popover title="prompt text" content="xxx" trigger="hover" />
</div>));
