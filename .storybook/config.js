import { configure, setAddon,addDecorator} from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'MT React Components',
  url: 'https://github.com/Mindtickle/mt-ui-components',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true,
});

addDecorator((story) => {
  return story();
});

addDecorator(story => (
  <div>
    <div style={{ padding: 10}}>
      {story()}
    </div>
  </div>
));



const req = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
