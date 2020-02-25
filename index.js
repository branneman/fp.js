'use strict'

module.exports = {

  // Auto curry with placeholder
  curryN: require('./src/curry/curryN'),
  curry: require('./src/curry/curry'),
  _: require('./src/curry/placeholder'),

  // Typechecks
  isUndef: require('./src/type-checks/isUndef'),
  isNull: require('./src/type-checks/isNull'),
  isBool: require('./src/type-checks/isBool'),
  isNum: require('./src/type-checks/isNum'),
  isInt: require('./src/type-checks/isInt'),
  isStr: require('./src/type-checks/isStr'),
  isArr: require('./src/type-checks/isArr'),
  isRegExp: require('./src/type-checks/isRegExp'),
  isFunc: require('./src/type-checks/isFunc'),
  isSymbol: require('./src/type-checks/isSymbol'),
  isObj: require('./src/type-checks/isObj'),

  // Array higher-order
  map: require('./src/array-higher-order/map'),
  filter: require('./src/array-higher-order/filter'),
  reduce: require('./src/array-higher-order/reduce'),
  reduceRight: require('./src/array-higher-order/reduceRight'),
  find: require('./src/array-higher-order/find'),
  // findIndex
  sort: require('./src/array-higher-order/sort'),
  includes: require('./src/array-higher-order/includes'),

  // Array
  length: require('./src/array/length'),
  nth: require('./src/array/nth'),
  slice: require('./src/array/slice'),
  range: require('./src/array/range'),
  head: require('./src/array/head'),
  init: require('./src/array/init'),
  tail: require('./src/array/tail'),
  last: require('./src/array/last'),
  // append
  // prepend
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
  str: require('./src/string/str'),
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
  // T
  // F
  // identity
  // always
  // unary
  // binary
  // flip
  compose: require('./src/function/compose'),
  pipe: require('./src/function/pipe'),
  complement: require('./src/function/complement'),
  // call
  apply: require('./src/function/apply'),
  // tap

}