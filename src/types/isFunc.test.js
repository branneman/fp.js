'use strict'

const isFunc = require('./isFunc')
const fixtures = require('./type.fixtures')

describe('isFunc()', () => {
  it('only returns true when given a function', () => {
    const match = fixtures.fun
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
      fixtures.re,
      fixtures.sym
    )

    match.forEach(([s, val]) => {
      if (!isFunc(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isFunc(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
