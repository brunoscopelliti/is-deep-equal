
var tape = require('tape');

var deepEqual = require('../dist/index.es5').default;


tape('module deep-equal:', function(t) { t.end(); });

tape('> primitives', function(t) { t.end(); });

tape('check primitives type', function(t) {

  t.ok(deepEqual(true, true), 'equal boolean');
  t.ok(deepEqual(42, 42), 'equal number');
  t.ok(deepEqual('hello', 'hello'), 'equal string');

  t.ok(!deepEqual(true, false), 'different boolean');
  t.ok(!deepEqual(42, 3), 'different number');
  t.ok(!deepEqual('hello', 'bye'), 'different string');

  t.ok(!deepEqual(true, 1), 'different type: no cast boolean/number');
  t.ok(!deepEqual('1', 1), 'different type: no cast string/number');

  t.end();

});

