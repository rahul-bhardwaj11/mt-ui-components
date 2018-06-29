import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Link from "./index";
import { withInfo } from "@storybook/addon-info";
import { withKnobs , text} from "@storybook/addon-knobs";

const stories = storiesOf("Link", module);
stories.addDecorator(withKnobs);

stories
  .add("anchor link", withInfo("Basic usage Anchor link")(() => <Link title="link" href="#" />))
  ;
