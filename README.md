# arvis-notifier

> Notify update for your [Arvis](https://github.com/jopemachine/arvis) extension

This repository is inspired and cloned by [alfred-notifier](https://github.com/SamVerschueren/alfred-notifier/blob/master/readme.md)

## Install

```
$ npm install --save arvis-notifier
```

## Usage

### Example

```js
const arvish = require('arvish');

const { checkUpdate } = require('arvis-notifier');

// Checks for available update
checkUpdate();

arvish.output([
	{title: '🦄'},
	{title: '🌈'}
]);
```

## Realted

- [arvish](https://github.com/jopemachine/arvish) - Arvis workflow, plugin creator tools
