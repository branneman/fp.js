'use strict'

const prepend = require('./prepend')

describe('prepend()', () => {
  it('adds item at the beginning of a list', () => {
    const xs = [3, 3, 7]

    const result = prepend(1, xs)

    expect(result).toEqual([1, 3, 3, 7])
  })

  it('is immutable', () => {
    const xs = [1, 2, 3]

    prepend(42, xs)

    expect(xs).toEqual([1, 2, 3])
  })

  xit('is curried', () => {})
})
