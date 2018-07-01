import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Tooltip from "./index";
import { withInfo } from "@storybook/addon-info";
import { withKnobs , text} from "@storybook/addon-knobs";

const stories = storiesOf("tooltip", module);
stories.addDecorator(withKnobs);

stories
  .add("Tooltip", withInfo("Basic usage tooltip")(() => <div>
    <Tooltip title="prompt text">
      <span>Tooltip will show when mouse enter.</span>
  </Tooltip>
</div>));
