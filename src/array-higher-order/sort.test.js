'use strict'

const sort = require('./sort')

describe('sort()', () => {
  xit('sorts the elements of a list', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const f = (a, b) => a - b
    const x = sort(f, xs)

    expect(x).not.toBe(xs)
  })

  xit('is curried', () => {})
})
