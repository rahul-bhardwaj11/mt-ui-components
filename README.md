# MT UI Components

> MT UI Components are a set of React UI components. The aim is to promote a consistent and reusable component library. 


##### [Demo](https://MindTickle.github.io/mt-ui-components/)

## Usage

```bash
$ npm i @mindtickle/mt-ui-components
```

```jsx
import Dropdown from "@mindtickle/mt-ui-components/lib/Dropdown"

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
