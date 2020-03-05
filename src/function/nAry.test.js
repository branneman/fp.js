'use strict'

const nAry = require('./nAry')

describe('nAry()', () => {
  it('turns multiple-argument function into a nullary one', () => {
    const f = function() {
      return [...arguments]
    }

    const g = nAry(0, f)

    expect(g(1, 2, 3)).toEqual([])
  })

  it('turns multiple-argument function into a unary one', () => {
    const f = function() {
      return [...arguments]
    }

    const g = nAry(1, f)

    expect(g(1, 2, 3)).toEqual([1])
  })

  it('turns multiple-argument function into a binary one', () => {
    const f = function() {
      return [...arguments]
    }

    const g = nAry(2, f)

    expect(g(1, 2, 3)).toEqual([1, 2])
  })

  it('turns multiple-argument function into a ternary one', () => {
    const f = function() {
      return [...arguments]
    }

    const g = nAry(3, f)

    expect(g(1, 2, 3, 4)).toEqual([1, 2, 3])
  })

  xit('is curried', () => {})

  it('returns a curried function', () => {
    const f = function() {
      return [...arguments]
    }

    const g = nAry(2, f)
    const h = g(1)

    expect(typeof h).toEqual('function')
    expect(h(2)).toEqual([1, 2])
  })
})
