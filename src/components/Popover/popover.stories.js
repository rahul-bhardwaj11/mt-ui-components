import React from "react";
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import Popover from "./index";
import ConfirmBox from "../ConfirmBox";
import {withInfo} from "@storybook/addon-info";
import {withKnobs, text} from "@storybook/addon-knobs";

const stories = storiesOf("Popover", module);
stories.addDecorator(withKnobs);

stories.add("Popover", withInfo("Basic usage popover")(() =>
  <Popover title="text will come here" content="This is a Popover" trigger="hover">hover me</Popover>
))
.add("Pop with contentover", withInfo("Basic usage popover")(() =>
  <Popover trigger="click" content={<ConfirmBox title="Are you sure you want to delete this Parameter?"></ConfirmBox>}>
  hover me
</Popover>));
