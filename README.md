# create-react-app with MobX example

## To use @decoraotr

You have to do two things.

1. run `npm run eject`

```sh
% npm run eject
```

2. install babel plugin `babel-plugin-transform-decorators-legacy`

```sh
% npm install --save-dev babel-plugin-transform-decorators-legacy
```

3. modify `package.json`

```json
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    "transform-decorators-legacy" // add here to use plugin
  ]
}
```