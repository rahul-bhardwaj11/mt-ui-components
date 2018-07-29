# MT UI Components

> MT UI Components are a set of React UI components. The aim is to promote a consistent and reusable component library. 


##### [Demo](https://MindTickle.github.io/mt-ui-components/)

## Getting Started

### Installation
```bash
$ npm i 
```

### Usage

To use it inside your project
```bash
$ npm i git+https://github.com/MindTickle/mt-ui-components.git#master --save
```bash
Ensure that all peerDependencies are also installed.

```jsx
import React from 'react';
import Button from '@mindtickle/mt-ui-components/lib/Button';
```
```jsx
const MyComponent = () =>
  <Button onClick={() => console.log('Button clicked!)')}>
    Click me!
  </Button>;
```

## Deployment

This project follows branch wise release. Just run following command from the branch you want ot build and commit/publish the artifacts.

$ npm run build:prod


```
### Deploying storybook

```
$ npm run deploy:sb
```

### Running storybook locally
```
$ npm run start
```

### Build component locally
```
$ npm run build:watch
```

### Local Development
For faster local development with this module, you can link them with npm as described below:

```
$ cd ~/mt-ui-components 
$ npm link
$ cd ~/your-project
$ npm link @mindtickle/mt-ui-components 
```
