'use strict'

const last = require('./last')

describe('last()', () => {
  xit('returns the last element', () => {})
  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const x = last(xs)

    expect(x).not.toBe(xs)
    expect(xs).toEqual([1, 2, 3])
  })
})
