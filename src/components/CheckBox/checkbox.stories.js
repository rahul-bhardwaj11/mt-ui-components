import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import CheckBox from "./index";
import { withInfo } from "@storybook/addon-info";

storiesOf("CheckBox", module)
  .add("Default CheckBox", withInfo("Basic usage of the Checkbox")(() => <CheckBox />));
