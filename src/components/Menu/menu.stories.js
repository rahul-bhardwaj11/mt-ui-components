import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "./index";
import { withInfo } from "@storybook/addon-info";
import { withKnobs , object} from "@storybook/addon-knobs";

const stories = storiesOf("Menu", module);
stories.addDecorator(withKnobs);

const options = ['First Item','Second Item','Third item'];

stories
  .add("Default Menu", withInfo("Basic usage of the Menu")(() => <Menu options={object('options',options)} />));
