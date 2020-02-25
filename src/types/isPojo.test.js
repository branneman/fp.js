'use strict'

const isPojo = require('./isPojo')
const fixtures = require('./type.fixtures')

describe('isPojo()', () => {
  it('only returns true when given a pojo (plain-old-javascript-object)', () => {
    const match = fixtures.pojo
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
      fixtures.re,
      fixtures.sym,
      fixtures.fun
    )

    match.forEach(([s, val]) => {
      if (!isPojo(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isPojo(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
