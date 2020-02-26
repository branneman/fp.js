'use strict'

const length = require('./length')

describe('length()', () => {
  it('returns the length of a list', () => {
    const xs = [1, 3, 3, 7]

    const result = length(xs)

    expect(result).toEqual(4)
  })

  it('returns the length of a string', () => {
    const s = 'the quick brown fox'

    const result = length(s)

    expect(result).toEqual(19)
  })

  it('returns the arity of a function', () => {
    const sum3 = (a, b, c) => a + b + c

    const result = length(sum3)

    expect(result).toEqual(3)
  })

  xit('is curried', () => {})
})
