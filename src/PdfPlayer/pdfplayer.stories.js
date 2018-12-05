import React from 'react';

import { storiesOf } from '@storybook/react';
import PdfPlayer from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('PdfPlayer', module);
stories.addDecorator(withKnobs);

stories
  .add(
    'Default PdfViewer',
    withInfo('displaying PDF')(() => (
      <PdfPlayer
        url={
          '//s3-ap-southeast-1.amazonaws.com/mtdocs-conversion/51783e46-12d2-4f73-8773-401b51936e70/doc.pdf?AWSAccessKeyId=AKIAJSWL5CYIG6NTG6VA&Expires=1543919486&Signature=IL3icXV0p1PEGBgFQDC9EhwtGKk%3D'
        }
        uuid={
          '//mediaplayer.mindtickle.com/crocodoc/?data=NTE3ODNlNDYtMTJkMi00ZjczLTg3NzMtNDAxYjUxOTM2ZTcwIzE%3D&sig=emKSoUiUER6RYUN2AxM5SMm4YWE%3D&time=1543919486'
        }
        title={'Sample PDF'}
      />
    ))
  )
  .add(
    'PdfViewer Edit Mode',
    withInfo('displaying PDF')(() => (
      <PdfPlayer
        url={
          '//s3-ap-southeast-1.amazonaws.com/mtdocs-conversion/51783e46-12d2-4f73-8773-401b51936e70/doc.pdf?AWSAccessKeyId=AKIAJSWL5CYIG6NTG6VA&Expires=1543919486&Signature=IL3icXV0p1PEGBgFQDC9EhwtGKk%3D'
        }
        uuid={
          '//mediaplayer.mindtickle.com/crocodoc/?data=NTE3ODNlNDYtMTJkMi00ZjczLTg3NzMtNDAxYjUxOTM2ZTcwIzE%3D&sig=emKSoUiUER6RYUN2AxM5SMm4YWE%3D&time=1543919486'
        }
        //onPageChange={page => console.log(page)}
        isEditMode={true}
        title={'Sample PDF'}
      />
    ))
  );
