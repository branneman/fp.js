'use strict'

const isNull = require('./isNull')
const fixtures = require('./type.fixtures')

describe('isNull()', () => {
  it('only returns true when given null', () => {
    const match = fixtures.nil
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.bool,
      fixtures.int,
      fixtures.num,
      fixtures.nan,
      fixtures.inf,
      fixtures.str,
      fixtures.arr,
      fixtures.obj,
      fixtures.pojo,
      fixtures.re,
      fixtures.sym,
      fixtures.fun
    )

    match.forEach(([s, val]) => {
      if (!isNull(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isNull(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
