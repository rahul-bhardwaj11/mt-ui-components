import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./index";
import { withInfo } from "@storybook/addon-info";

storiesOf("Button", module)
  .add("Default button", withInfo("Basic usage of the button")(() => <Button>Submit</Button>))
  .add("Primary button", withInfo("Adding type primary to button")(() => <Button type="primary">Submit</Button>))
  .add("Dashed button", withInfo("Adding type dashed to button")(() => <Button type="dashed">Submit</Button>))
  .add("Danger button", withInfo("Adding type danger to button")(() => <Button type="danger">Submit</Button>));
