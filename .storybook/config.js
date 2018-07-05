import { configure, setAddon, addDecorator, setKindOrdering } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
setOptions({
  name: "MT React Components",
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
    <div style={{ padding: 10 }}>{story()}</div>
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
