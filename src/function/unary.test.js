'use strict'

const unary = require('./unary')

describe('unary()', () => {
  it('turns multiple-argument function into a nullary one', () => {
    const f = function() {
      return [...arguments]
    }

    const g = unary(f)

    expect(g(1, 2, 3)).toEqual([1])
  })

  xit('is curried', () => {})

  it('returns a curried function', () => {
    const f = function() {
      return [...arguments]
    }

    const g = unary(f)
    const h = g()

    expect(typeof h).toEqual('function')
    expect(h(1)).toEqual([1])
  })
})
