# MT UI Components

> MT UI Components are a set of React UI components. The aim is to promote a consistent and reusable component library. 


##### [Demo](https://MindTickle.github.io/mt-ui-components/)

## Getting Started

### Installation
```bash
$ npm config set @mindtickle:registry http://verdaccio.ops.mindtickle.com
$ npm i @mindtickle/mt-ui-components
```

### Install dependencies
Ensure packages are installed with correct version numbers by running:
```sh
  (
    export PKG=@mindtickle/mt-ui-components;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
  )
```
### Usage

```jsx
import React from 'react';
import Button from '@mindtickle/mt-ui-components/lib/Button';

const MyComponent = () =>
  <Button onClick={() => console.log('Button clicked!)')}>
    Click me!
  </Button>;
```

## Deployment

This project follows semantic versioning.We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes

```bash
$ npm run deploy major
$ npm run deploy minor
$ npm run deploy patch

Additionaly, you can tag your release to some prelease label as well
$ npm run deploy patch alpha
$ npm run deploy patch beta

```
### Deploying storybook

```
$ npm run deploy:sb
```

### Running storybook locally
```
$ npm run start
```

### Local Development
For faster local development with this module, you can link them with npm as described below:

```
$ cd ~/mt-ui-components 
$ npm link
$ cd ~/your-project
$ npm link @mindtickle/mt-ui-components 
```
