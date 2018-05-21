import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "./index";
import { withInfo } from "@storybook/addon-info";
import { withKnobs , text} from "@storybook/addon-knobs";

const stories = storiesOf("Input", module);
stories.addDecorator(withKnobs);

const styles = {
  width: '200px',
};

stories
  .add("Default Input", withInfo("Basic usage of the Input")(() => <div style={styles}><Input placeholder={text('placeholder','Input some text')}  /></div>));
