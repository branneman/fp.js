'use strict'

const append = require('./append')

describe('append()', () => {
  it('adds item at the end of a list', () => {
    const xs = [1, 3, 3]

    const result = append(7, xs)

    expect(result).toEqual([1, 3, 3, 7])
  })

  it('is immutable', () => {
    const xs = [1, 2, 3]

    append(42, xs)

    expect(xs).toEqual([1, 2, 3])
  })

  xit('is curried', () => {})
})
