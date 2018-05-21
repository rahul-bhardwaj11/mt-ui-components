import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Radio from "./index";
import { withInfo } from "@storybook/addon-info";
import { withKnobs , text, boolean} from "@storybook/addon-knobs";

const stories = storiesOf("Radio", module);
stories.addDecorator(withKnobs);


stories
  .add("Default Radio", withInfo("Basic usage of the Input")(() => <Radio label={text('label','Radio')} checked={boolean('checked',true)} />));
