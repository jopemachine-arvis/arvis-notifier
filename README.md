# arvis-notifier
[![CodeFactor](https://www.codefactor.io/repository/github/jopemachine/arvis-notifier/badge)](https://www.codefactor.io/repository/github/jopemachine/arvis-notifier)
[![Known Vulnerabilities](https://snyk.io/test/github/jopemachine/arvis-notifier/badge.svg)]()
[![NPM download total](https://img.shields.io/npm/dt/arvis-notifier)](http://badge.fury.io/js/arvis-notifier)
[![NPM version](https://badge.fury.io/js/arvis-notifier.svg)](http://badge.fury.io/js/arvis-notifier)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![GitHub issues](https://img.shields.io/github/issues/jopemachine/arvis-notifier.svg)](https://GitHub.com/jopemachine/arvis-notifier/issues/)

> Notify update for your [Arvis](https://github.com/jopemachine/arvis) extension

This repository is inspired and cloned by [alfred-notifier](https://github.com/SamVerschueren/alfred-notifier/blob/master/readme.md)

## Install

```
$ npm install --save arvis-notifier
```

## Usage

### Simple example

```js
const arvishNotifier = require('arvish-notifier');

arvishNotifier();
```

You don't need to call `arvish-notifier` directly if you are using [arvish](https://github.com/jopemachine/arvish) because arvish do this instead.


## Realted

- [arvish](https://github.com/jopemachine/arvish) - Arvis workflow, plugin creator tools

- [arvis-extension-updater](https://github.com/jopemachine/arvis-extension-updater) - Arvis extension updater (only installed by npm)
