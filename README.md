# Pixudi Bridge

![Screen Shot 2022-07-16 at 10 37 05](https://user-images.githubusercontent.com/61367249/179345334-76c6adb3-0f65-44cf-ac71-0d3072067e4c.png)

## Interface

![my wallet](https://user-images.githubusercontent.com/61367249/179351482-99ffe99d-6dde-4db7-8424-76dfbf5456d4.jpg)

## Installation

First, install [NodeJS](https://nodejs.org/) v16. Use [NVM](https://github.com/nvm-sh/nvm) as the best solution to manage NodeJS versions.

Next, install NPM globally. If you're using NVM - you don't need to install NPM.

```
npm intall npm -g
```

Then, install  dependencies with the command below:

```
npm ci
```

## Development

To start developing - run the command below:

```
npm start
```

It will be start Webpack Dev Server with HMR.

## Build production distributive

For build production distributive run the command below:

```
npm run build
```

It will build production-ready distributive.

## License

[AGPL v3](/LICENSE)
