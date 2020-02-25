'use strict'

const update = require('./update')

describe('update()', () => {
  xit('updates the value at the given index of the supplied array', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    update(1, 4, xs)

    expect(xs).toEqual([1, 2, 3])
  })

  xit('is curried', () => {})
})
