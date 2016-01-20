
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



tape('> array', function(t) { t.end(); });

tape('* same array instance', function(t) {
  var arr = [1, 2];
  t.ok(deepEqual(arr, arr), 'same reference');
  t.end();
});

tape('* equal array (with symbol)', function(t) {

  t.ok(deepEqual([1, 'b', 'iii'], [1, 'b', 'iii']), 'equal array');

  var s = Symbol();

  var arr1 = [1, 2];
  var arr2 = [1, 2];

  arr1[s] = arr2[s] = '3';
  t.ok(deepEqual(arr1, arr2), 'equal array with symbol');

  t.end();

});

tape('* different length', function(t) {
  t.ok(!deepEqual([1, 2], [1, 2, 3]), 'different arrays');
  t.end();
});

tape('* different order', function(t) {
  t.ok(!deepEqual([1, 2, 3], [1, 3, 2]), 'different arrays');
  t.end();
});

tape('* different symbols', function(t) {

  var arr1 = [1, 2];
  var arr2 = [1, 2];

  arr1[Symbol()] = arr2[Symbol()] = '3';
  t.ok(!deepEqual(arr1, arr2), 'different symbol, means different arrays');

  t.end();

});




tape('> object', function(t) { t.end(); });

tape('* same object instance', function(t) {
  var obj = { val: 100 };
  t.ok(deepEqual(obj, obj), 'same reference');
  t.end();
});

tape('* object with same props (order does not matter)', function(t) {
  var now = new Date();
  t.ok(deepEqual({ v: 10, now: now, me: 'Bruno', submodel: { active: true } }, { me: 'Bruno', v: 10, now: now, submodel: { active: true } }), 'same properties');
  t.end();
});

tape('* complex object', function(t) {
  t.ok(deepEqual({ v: 10, arr: [1, 2, 3], sub: { arr: [1,'a',true,2], arrObj: [ {v:1}, {v:2, flag: true, sub: { sub1: {v:1} }} ] }},
    { v: 10, arr: [1, 2, 3], sub: { arr: [1,'a',true,2], arrObj: [ {v:1}, {v:2, flag: true, sub: { sub1: {v:1} }} ] }}), 'same properties');
  t.end();
});

tape('* nested property difference', function(t) {
  t.ok(!deepEqual({ v: 1, sub1: { v: 10, sub2: {enabled: true} } }, { v: 1, sub1: { v: 10, sub2: {enabled: false} } }), 'there is a different property');
  t.ok(!deepEqual({ v: 1, sub1: { v: 10, sub2: {[Symbol()]: true} } }, { v: 1, sub1: { v: 10, sub2: {[Symbol()]: false} } }), 'there is a different symbol');
  t.end();
});

tape('* complex object difference', function(t) {
  t.ok(!deepEqual({ v: 10, arr: [1, 2, 3], sub: { arr: [1,'a',true,2], arrObj: [ {v:1}, {v:2, flag: true, sub: { sub1: {v:1} }} ] }},
    { v: 10, arr: [1, 2, 3], sub: { arr: [1,'a',true,2], arrObj: [ {v:1}, {v:2, flag: true, sub: { sub1: {v:2} }} ] }}), 'nested array difference');
  t.end();
});

tape('* different instance value', function(t) {

  function A(name) {
    this.val = name;
  }

  var a1 = new A('foo');
  var a2 = new A('bar');

  t.ok(!deepEqual(a1, a2), 'different instance value');
  t.end();
});

tape('* different prototype', function(t) {

  function A(name) {
    this.val = name;
  }

  A.prototype.noop = function() {};

  function B(name) {
    this.val = name;
  }

  B.prototype.noop = function() {};

  var a = new A('foo');
  var b = new B('foo');

  t.ok(!deepEqual(a, b), 'different prototype');
  t.end();
});
