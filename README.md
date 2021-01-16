# :space_invader: React Native Template CodeApp

<p>
  <a href="https://travis-ci.com/github/raivieiraadriano92/react-native-template-codeapp">
    <img alt="Build Status" src="https://travis-ci.com/raivieiraadriano92/react-native-template-codeapp.svg?branch=master" target="_blank" />
  </a>
  <a href="https://github.com/raivieiraadriano92/react-native-template-codeapp#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/raivieiraadriano92/react-native-template-codeapp/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/raivieiraadriano92/react-native-template-codeapp/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> Based on [@react-native-community/react-native-template-typescript](https://github.com/react-native-community/react-native-template-typescript).

## :star: Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- [Typescript](https://www.typescriptlang.org/)
- [Atomic Design](https://atomicdesign.bradfrost.com/)
- [React Navigation](https://reactnavigation.org/)
- [Styled-components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- [CodePush](https://github.com/microsoft/react-native-code-push)
- Basic components full responsive
- Dark mode

## :arrow_forward: Usage

```sh
npx react-native init MyAwesomeApp --template react-native-template-codeapp
```

### Note on the legacy CLI

There seems to be quite some confusion about the legacy CLI. This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`), for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

Further information can be found here: https://github.com/react-native-community/cli#about

## :rocket: CodePush

Changing CodePush keys:

### Android

1. Open the file `android/app/build.gradle`
2. In `buildTypes` we have three builds `debug`, `releaseStaging` and `release`. So just change `CodePushDeploymentKey` value by your key.

![build.gradle](https://cloud.githubusercontent.com/assets/116461/11601733/13011d5e-9a8a-11e5-9ce2-b100498ffb34.png)

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.

## :email: Contact

Raí Vieira Adriano - [Github](https://github.com/raivieiraadriano92) - **raivieiraadriano92@gmail.com**
