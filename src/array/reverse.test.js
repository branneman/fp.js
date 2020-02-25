'use strict'

const reverse = require('./reverse')

describe('reverse()', () => {
  xit('reverses arrays', () => {})
  xit('reverses strings', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const x = reverse(xs)

    expect(x).not.toBe(xs)
    expect(xs).toEqual([1, 2, 3])
  })

  xit('is curried', () => {})
})
