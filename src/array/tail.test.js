'use strict'

const tail = require('./tail')

describe('tail()', () => {
  xit('returns all but the first element', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const x = tail(xs)

    expect(x).not.toBe(xs)
    expect(xs).toEqual([1, 2, 3])
  })

  xit('is curried', () => {})
})
