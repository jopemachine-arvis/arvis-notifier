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
const versionCheck = require('arvis-notifier');

// Checks for available update
versionCheck();

arvish.output([
	{title: '🦄'},
	{title: '🌈'}
]);
```

## Realted

- [arvish](https://github.com/jopemachine/arvish) - Arvis workflow, plugin creator tools
