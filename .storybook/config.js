import {
  configure,
  setAddon,
  addDecorator,
  setKindOrdering
} from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { version } from "../package.json";
setOptions({
  name: `MT UI Components v${version}`,
  url: "https://github.com/Mindtickle/mt-ui-components",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true
});

addDecorator(story => {
  return story();
});

addDecorator(story => (
  <div>
    <div style={{ margin: 20 }}>{story()}</div>
  </div>
));

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  require("../src/Introduction/introduction.stories");
  req.keys().forEach(filename => {
    if (filename.indexOf("introduction.stories") > -1) {
      return;
    }
    req(filename);
  });
}

configure(loadStories, module);
