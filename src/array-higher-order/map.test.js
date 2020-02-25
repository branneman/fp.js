'use strict'

const map = require('./map')

describe('map()', () => {
  xit('maps functions over arrays', () => {})
  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const f = x => x
    const x = map(f, xs)

    expect(x).not.toBe(xs)
  })
})
