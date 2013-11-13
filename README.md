node-charter
============

Nodejs library for [Charter App](http://pbosetti.github.io/Charter/)


### Installation

```
npm i charter
```


### Example

```javascript
var Client = require('charter');

var c = new Client(1);
c.clear();
c.names(['default']);
c.labels(['time', 'value']);

for (var i = 0; i < 100; i++)
  c.push([i, Math.round(Math.random() * 100)]);
```
