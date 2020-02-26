'use strict'

const includes = require('./includes')

describe('includes()', () => {
  it('returns `true` if an element is in a list', () => {
    const xs = [42]
    expect(includes(42, xs)).toEqual(true)

    const ys = [3.14, 42]
    expect(includes(42, ys)).toEqual(true)

    const zs = [3.14, 42, 1337]
    expect(includes(42, zs)).toEqual(true)
  })

  it('returns `false` if an element is not in a list', () => {
    const xs = [42]
    expect(includes(2, xs)).toEqual(false)

    const ys = [3.14, 42]
    expect(includes(2, ys)).toEqual(false)

    const zs = [3.14, 42, 1337]
    expect(includes(2, zs)).toEqual(false)
  })

  it('returns `false` for the empty list', () => {
    const xs = []

    const result = includes(2, xs)

    expect(result).toEqual(false)
  })

  xit('is curried', () => {})
})
