import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Dropdown from "./index";
import { withInfo } from "@storybook/addon-info";
import { withKnobs , object} from "@storybook/addon-knobs";

const styles = {
  textAlign: 'center',
};
const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

const stories = storiesOf("Dropdown", module);
stories.addDecorator(withKnobs);
stories.addDecorator(CenterDecorator);

const options = ['First Item','Second Item','Third item'];

stories
  .add("Default Dropdown", withInfo("Basic usage of the Dropdown")(() => <Dropdown options={object('options',options)} />));
