'use strict'

const last = require('./last')

describe('last()', () => {
  it('returns the last element', () => {
    const xs = [1, 3, 3, 7]

    const result = last(xs)

    expect(result).toEqual(7)
  })

  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const x = last(xs)

    expect(x).not.toBe(xs)
    expect(xs).toEqual([1, 2, 3])
  })
})
