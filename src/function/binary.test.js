'use strict'

const binary = require('./binary')

describe('binary()', () => {
  it('turns multiple-argument function into a binary one', () => {
    const f = function() {
      return [...arguments]
    }

    const g = binary(f)

    expect(g(1, 2, 3)).toEqual([1, 2])
  })

  xit('is curried', () => {})

  it('returns a curried function', () => {
    const f = function() {
      return [...arguments]
    }

    const g = binary(f)
    const h = g(1)

    expect(typeof h).toEqual('function')
    expect(h(2)).toEqual([1, 2])
  })
})
