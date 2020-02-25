'use strict'

module.exports = {
  undef: [
    ['undefined', undefined],
    ['void 42', void 42]
  ],
  nil: [['null', null]],
  bool: [
    ['false', false],
    ['true', true],
    ['Boolean()', Boolean()]
  ],
  int: [
    ['0', 0],
    ['1', 1],
    ['0xBADA55', 0xbada55], // Base 16: hex
    ['0o2471', 0o2471], // Base 8: octal,
    ['Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER]
  ],
  num: [
    ['1.01', 1.01],
    ['0.30000000000000004', 0.30000000000000004] // 0.1 + 0.2
  ],
  nan: [
    ['NaN', NaN],
    ['-NaN', -NaN]
  ],
  inf: [
    ['Infinity', Infinity],
    ['-Infinity', -Infinity]
  ],
  str: [
    ["''", ''],
    ['String()', String()],
    ["String('')", String('')],
    ["String('abc')", String('abc')],
    ["'latin'", 'latin'],
    ["'日本語'", '日本語']
  ],
  arr: [
    ['[]', []],
    ["[1, 'two']", [1, 'two']],
    ['Array(3)', Array(3)], // [ <3 empty items> ]
    ['[null, undefined]', [null, undefined]],
    ['new (class A extends Array {})()', new (class A extends Array {})()] // []
  ],
  obj: [
    ['new (class A {})()', new (class A {})()],
    ['new (function Foo() {})()', new (function Foo() {})()],
    ['Object.prototype', Object.prototype],
    ['Object.create(null)', Object.create(null)],
    ['Object.create({})', Object.create({})],
    ['new Date()', new Date()]
  ],
  pojo: [
    ['{}', {}],
    ['Object()', Object()],
    ['new Object()', new Object()],
    ['Object.create(Object.prototype)', Object.create(Object.prototype)],
    ['{ length: 0 }', { length: 0 }], // Not an array
    ["{ length: 1, '0': 42 }", { length: 1, '0': 42 }], // Not an array
    ['{ answer: 42 }', { answer: 42 }]
  ],
  re: [
    ['new RegExp()', new RegExp()],
    ['/abc/i', /abc/i]
  ],
  sym: [
    ['Symbol()', Symbol()],
    ["Symbol('label')", Symbol('label')]
  ],
  fun: [
    ['() => 0', () => 0],
    ['function() {}', function() {}],
    ['function named() {}', function named() {}],
    ['Function()', Function()],
    ['parseInt', parseInt],
    ['Symbol', Symbol] // Function
  ]
}
