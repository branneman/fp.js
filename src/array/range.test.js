'use strict'

const range = require('./range')

describe('range()', () => {
  it('counts up', () => {
    const result = range(0, 5)
    expect(result).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('counts down if min > max', () => {
    const result1 = range(5, 1)
    expect(result1).toEqual([5, 4, 3, 2, 1])
  })

  it('returns a list of 1 if min equals max', () => {
    const result = range(0, 0)
    expect(result).toEqual([0])
  })

  it('handles negative numbers', () => {
    const result1 = range(-3, 2)
    expect(result1).toEqual([-3, -2, -1, 0, 1, 2])

    const result2 = range(2, -2)
    expect(result2).toEqual([2, 1, 0, -1, -2])
  })

  xit('is curried', () => {})
})
