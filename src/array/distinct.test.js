'use strict'

const distinct = require('./distinct')

describe('distinct()', () => {
  it('returns a list with duplicates removed', () => {
    const xs = [1, 3, 3, 7]

    const x = distinct(xs)

    expect(x).toEqual([1, 3, 7])
  })

  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3, 4]

    const x = distinct(xs)

    expect(x).not.toBe(xs)
  })
})
