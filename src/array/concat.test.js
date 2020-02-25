'use strict'

const concat = require('./concat')

describe('concat()', () => {
  xit('combines the elements of two lists', () => {})
  xit('works on strings', () => {})

  it('is immutable', () => {
    const xs = [1, 2]
    const ys = [3, 4]

    const x = concat(xs, ys)

    expect(x).not.toBe(xs)
    expect(x).not.toBe(ys)
  })

  xit('is curried', () => {})
})
