'use strict'

module.exports = {

  // Auto curry with placeholder
  curryN: require('./src/curry/curryN'),
  curry: require('./src/curry/curry'),
  _: require('./src/curry/placeholder'),

  // Types
  type: require('./src/types/type'),
  isDef: require('./src/types/isDef'),
  isUndef: require('./src/types/isUndef'),
  isNull: require('./src/types/isNull'),
  isBool: require('./src/types/isBool'),
  isNaN: require('./src/types/isNaN'),
  isFinite: require('./src/types/isFinite'),
  isNum: require('./src/types/isNum'),
  isInt: require('./src/types/isInt'),
  isStr: require('./src/types/isStr'),
  isArr: require('./src/types/isArr'),
  isObj: require('./src/types/isObj'),
  isPojo: require('./src/types/isPojo'),
  isRegExp: require('./src/types/isRegExp'),
  isFunc: require('./src/types/isFunc'),
  isSymbol: require('./src/types/isSymbol'),

  // Predicates
  // identical()
  // equals()
  // neg()
  // pos()
  // even()
  // odd()
  // decimal()
  // empty()
  // every()
  // some()
  // sequential()

  // Array higher-order
  map: require('./src/array-higher-order/map'),
  ap: require('./src/array-higher-order/ap'),
  chain: require('./src/array-higher-order/chain'),
  filter: require('./src/array-higher-order/filter'),
  reduce: require('./src/array-higher-order/reduce'),
  reduceRight: require('./src/array-higher-order/reduceRight'),
  find: require('./src/array-higher-order/find'),
  findIndex: require('./src/array-higher-order/findIndex'),
  sort: require('./src/array-higher-order/sort'),
  // mapsort

  // Array
  length: require('./src/array/length'),
  nth: require('./src/array/nth'),
  slice: require('./src/array/slice'),
  range: require('./src/array/range'),
  head: require('./src/array/head'),
  init: require('./src/array/init'),
  tail: require('./src/array/tail'),
  last: require('./src/array/last'),
  includes: require('./src/array/includes'),
  append: require('./src/array/append'),
  prepend: require('./src/array/prepend'),
  join: require('./src/array/join'),
  concat: require('./src/array/concat'),
  update: require('./src/array/update'),
  flatten: require('./src/array/flatten'),
  reverse: require('./src/array/reverse'),
  distinct: require('./src/array/distinct'),
  distinctFn: require('./src/array/distinctFn'),

  // Logic & Relation
  not: require('./src/logic/not'),
  and: require('./src/logic/and'),
  or: require('./src/logic/or'),
  xor: require('./src/logic/xor'),
  eq: require('./src/logic/eq'),
  lt: require('./src/logic/lt'),
  lte: require('./src/logic/lte'),
  gt: require('./src/logic/gt'),
  gte: require('./src/logic/gte'),
  min: require('./src/logic/min'),
  max: require('./src/logic/max'),
  defaultTo: require('./src/logic/defaultTo'),

  // Math
  add: require('./src/math/add'),
  subtract: require('./src/math/subtract'),
  multiply: require('./src/math/multiply'),
  divide: require('./src/math/divide'),
  inc: require('./src/math/inc'),
  dec: require('./src/math/dec'),
  floor: require('./src/math/floor'),
  ceil: require('./src/math/ceil'),
  trunc: require('./src/math/trunc'),
  round: require('./src/math/round'),
  rem: require('./src/math/rem'),
  mod: require('./src/math/mod'),
  negate: require('./src/math/negate'),
  sum: require('./src/math/sum'),
  product: require('./src/math/product'),
  mean: require('./src/math/mean'),
  median: require('./src/math/median'),

  // String
  split: require('./src/string/split'),
  trim: require('./src/string/trim'),
  test: require('./src/string/str-test'),
  match: require('./src/string/match'),
  replace: require('./src/string/replace'),
  lower: require('./src/string/lower'),
  upper: require('./src/string/upper'),

  // Object
  has: require('./src/object/has'),
  keys: require('./src/object/keys'),
  values: require('./src/object/values'),
  entries: require('./src/object/entries'),
  prop: require('./src/object/prop'),
  assoc: require('./src/object/assoc'),
  pick: require('./src/object/pick'),

  // Lenses
  lens: require('./src/lenses/lens'),
  view: require('./src/lenses/view'),
  set: require('./src/lenses/set'),
  over: require('./src/lenses/over'),
  lensIndex: require('./src/lenses/lensIndex'),
  lensProp: require('./src/lenses/lensProp'),

  // Function
  T: require('./src/function/T'),
  F: require('./src/function/F'),
  identity: require('./src/function/identity'),
  always: require('./src/function/always'),
  unary: require('./src/function/unary'),
  binary: require('./src/function/binary'),
  nAry: require('./src/function/nAry'),
  flip: require('./src/function/flip'),
  compose: require('./src/function/compose'),
  pipe: require('./src/function/pipe'),
  complement: require('./src/function/complement'),
  // call
  apply: require('./src/function/apply'),
  // tap

}
