'use strict'

const isArr = require('./isArr')
const fixtures = require('./type.fixtures')

describe('isArr()', () => {
  it('only returns true when given an array', () => {
    const match = fixtures.arr
    const nomatch = [].concat(
      fixtures.bool,
      fixtures.int,
      fixtures.num,
      fixtures.nan,
      fixtures.inf,
      fixtures.str,
      fixtures.obj,
      fixtures.pojo,
      fixtures.re,
      fixtures.sym,
      fixtures.fun
    )

    match.forEach(([s, val]) => {
      if (!isArr(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isArr(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
