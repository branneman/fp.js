'use strict'

const isRegExp = require('./isRegExp')
const fixtures = require('./type.fixtures')

describe('isRegExp()', () => {
  it('only returns true when given a regular expression', () => {
    const match = fixtures.re
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.nil,
      fixtures.bool,
      fixtures.int,
      fixtures.num,
      fixtures.nan,
      fixtures.inf,
      fixtures.str,
      fixtures.arr,
      fixtures.obj,
      fixtures.pojo,
      fixtures.sym,
      fixtures.fun
    )

    match.forEach(([s, val]) => {
      if (!isRegExp(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isRegExp(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
