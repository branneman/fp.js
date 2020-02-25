'use strict'

const distinct = require('./distinct')

describe('distinct()', () => {
  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3, 4]

    const x = distinct(xs)

    expect(x).not.toBe(xs)
  })
})
