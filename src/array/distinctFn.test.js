'use strict'

const distinctFn = require('./distinctFn')
const curry = require('../curry/curry')

describe('distinctFn()', () => {
  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3, 4]

    const f = curry((x, y) => x === y)
    const x = distinctFn(f, xs)

    expect(x).not.toBe(xs)
  })
})
