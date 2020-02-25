'use strict'

const type = require('./type')
const fixtures = require('./type.fixtures')

const testMatches = (x, match, nomatch) => {
  match.forEach(([s, val]) => {
    if (type(val) !== x) throw new Error(`should match: ${s}`)
  })
  nomatch.forEach(([s, val]) => {
    if (type(val) === x) throw new Error(`should not match: ${s}`)
  })
}

describe('type()', () => {
  it('handles undefined', () => {
    const match = fixtures.undef
    const nomatch = [].concat(
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
      fixtures.sym,
      fixtures.fun
    )

    testMatches('undefined', match, nomatch)
  })

  it('handles null', () => {
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

    testMatches('null', match, nomatch)
  })

  it('handles boolean', () => {
    const match = fixtures.bool
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.nil,
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

    testMatches('boolean', match, nomatch)
  })

  it('handles infinity', () => {
    const match = fixtures.inf
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.nil,
      fixtures.bool,
      fixtures.int,
      fixtures.num,
      fixtures.nan,
      fixtures.str,
      fixtures.arr,
      fixtures.obj,
      fixtures.pojo,
      fixtures.re,
      fixtures.sym,
      fixtures.fun
    )

    testMatches('infinity', match, nomatch)
  })

  it('handles nan', () => {
    const match = fixtures.nan
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.nil,
      fixtures.bool,
      fixtures.int,
      fixtures.num,
      fixtures.inf,
      fixtures.str,
      fixtures.arr,
      fixtures.obj,
      fixtures.pojo,
      fixtures.re,
      fixtures.sym,
      fixtures.fun
    )

    testMatches('nan', match, nomatch)
  })

  it('handles number', () => {
    const match = [].concat(fixtures.int, fixtures.num)
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.nil,
      fixtures.bool,
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

    testMatches('number', match, nomatch)
  })

  it('handles string', () => {
    const match = fixtures.str
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.nil,
      fixtures.bool,
      fixtures.int,
      fixtures.num,
      fixtures.nan,
      fixtures.inf,
      fixtures.arr,
      fixtures.obj,
      fixtures.pojo,
      fixtures.re,
      fixtures.sym,
      fixtures.fun
    )

    testMatches('string', match, nomatch)
  })

  it('handles array', () => {
    const match = fixtures.arr
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.nil,
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

    testMatches('array', match, nomatch)
  })

  it('handles regexp', () => {
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

    testMatches('regexp', match, nomatch)
  })

  it('handles symbol', () => {
    const match = fixtures.sym
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
      fixtures.pojo,
      fixtures.fun
    )

    testMatches('symbol', match, nomatch)
  })

  it('handles function', () => {
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

    testMatches('function', match, nomatch)
  })

  it('handles object', () => {
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
      fixtures.re,
      fixtures.sym,
      fixtures.fun
    )

    testMatches('object', match, nomatch)
  })

  xit('is curried', () => {})
})
