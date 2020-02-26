'use strict'

const nth = require('./nth')

describe('nth()', () => {
  it('returns match on list', () => {
    const xs = [1, 3, 4, 6]

    const result = nth(2, xs)

    expect(result).toEqual(4)
  })

  it('returns match on object', () => {
    const x = {
      '0': 4,
      '1': 2,
      length: 2
    }

    const result = nth(1, x)

    expect(result).toEqual(2)
  })

  it('returns `undefined` if no match was found', () => {
    const xs = [3, 14]

    const result = nth(42, xs)

    expect(result).toEqual(undefined)
  })

  xit('is curried', () => {})
})
