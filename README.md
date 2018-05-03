# Rootquire
Allows users to avoid relative path dots hell.

Detect project root by looking for first existing `node_modules` folder from list in `require.main.paths`
# Install

```
npm install --save scbd/rootquire#version
```
# Usage

## With Rootquire
```js
var User = require('rootquire')('models/user');
```

## Without Rootquire
```js
var User = require('../../../../../models/user');
```

## Print root path
```js
require('rootquire').debug();
```


Similar to **Undot**. Undot is relative to start main module
https://github.com/gsanches/undot
