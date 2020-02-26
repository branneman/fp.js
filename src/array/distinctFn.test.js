'use strict'

const distinctFn = require('./distinctFn')
const curry = require('../curry/curry')

describe('distinctFn()', () => {
  it('returns a list with duplicates removed', () => {
    const pred = x => y => x === y
    const xs = [1, 3, 3, 7]

    const x = distinctFn(pred, xs)

    expect(x).toEqual([1, 3, 7])
  })

  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3, 4]

    const pred = curry((x, y) => x === y)
    const x = distinctFn(pred, xs)

    expect(x).not.toBe(xs)
  })
})
