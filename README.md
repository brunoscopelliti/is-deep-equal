# is-deep-equal

Check if two objects are deep equal.

Install
---

```npm i is-deep-equal```

use as:

```
const deepEquals = require('is-deep-equal');

const subject = { val: 42, list: [ { lv: 1 }, { lv: 2 } ] };

isDeepEqual(subject, { val: 42, list: [ { lv: 1 }, { lv: 2 } ] }); // true
isDeepEqual(subject, { val: 42, list: [ { lv: 1 }, { lv: 2, foo: 'bar' } ] }); // false
```

##ECMAScript 2015 module

`is-deep-equal` is written as an ECMAScript2015 module; it could be used in the browser using a module loader such as [jspm](http://jspm.io/), or transpiled to commonjs module format in order to be used in nodejs.
