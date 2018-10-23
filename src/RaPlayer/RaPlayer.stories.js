/* eslint-disable */
import React from 'react';

import { storiesOf } from '@storybook/react';
import RaPlayer from './index';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('RaPlayer', module);
// stories.addDecorator(withKnobs);

const props = {
  targetVideoContainer: 'targetContainer',
  targetCommentContainer: 'targetCommentContainer',
  primaryTracks: [
    {
      src: '360p.mp4',
      label: '360p'
    },
    {
      src: '360p.mp4',
      label: '144p'
    }
  ],
  app: {
    subjectId: 123,
    companyName: 423,
    socialId: 111,
    author: { id: '1222222', name: '123' }
  },
  showControlsOnly: false,
  edit: true,
  showOnboarding: true,
  onRenderComplete: function() {
    console.info('dne...');
  },
  onCommentPaneRender: function(count) {
    console.info(count);
  },
  postComment: function(comment) {
    console.log(comment);
  },
  deleteComment: function(comment) {
    console.log(comment);
  },
  editComment: function(comment) {
    console.log(comment);
  }
};

stories.add('Default Player', () => <RaPlayer {...props} />);

const secondaryPlayerProps = {
  ...props,
  secondaryTracks: [
    {
      src: '360p.mp4',
      label: 'ok'
    }
  ]
};

stories.add('With secondary player', () => (
  <RaPlayer {...secondaryPlayerProps} />
));

const commentProps = {
  ...props,
  commentPane: {
    activeComments: [
      {
        time: 2,
        id: 3,
        cname: 4,
        author: {
          id: 12,
          name: 'Rama'
        },
        text: 'Abc'
      }
    ]
  }
};

stories.add('With pre existing comments', () => <RaPlayer {...commentProps} />);
