'use strict'

const isObj = require('./isObj')
const fixtures = require('./type.fixtures')

describe('isObj()', () => {
  it('only returns true when given an object', () => {
    const match = [].concat(fixtures.obj, fixtures.pojo)
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
      fixtures.sym,
      fixtures.re,
      fixtures.fun
    )

    match.forEach(([s, val]) => {
      if (!isObj(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isObj(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
