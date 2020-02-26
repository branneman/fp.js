'use strict'

const tail = require('./tail')

describe('tail()', () => {
  it('returns all but the first element', () => {
    const xs = [1, 3, 3, 7]

    const result = tail(xs)

    expect(result).toEqual([3, 3, 7])
  })

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const x = tail(xs)

    expect(x).not.toBe(xs)
    expect(xs).toEqual([1, 2, 3])
  })

  xit('is curried', () => {})
})
