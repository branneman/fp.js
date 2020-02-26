'use strict'

const findIndex = require('./findIndex')

describe('findIndex()', () => {
  it('returns the element that satisfies the predicate', () => {
    const f = x => x === 42

    const xs = [42]
    expect(findIndex(f, xs)).toEqual(0)

    const ys = [42, 1337]
    expect(findIndex(f, ys)).toEqual(0)

    const zs = [3.14, 42, 1337]
    expect(findIndex(f, zs)).toEqual(1)
  })

  it('returns only the first element that satisfies the predicate', () => {
    const f = x => x[0] === '4'

    const xs = ['3.14', '4', '42', '1337']

    expect(findIndex(f, xs)).toEqual(1) // not 2
  })

  it('returns `undefined` without at match', () => {
    const f = () => false
    const xs = [1, 3, 3, 7]

    const result = findIndex(f, xs)

    expect(result).toEqual(undefined)
  })

  it('returns `undefined` when given an empty list', () => {
    const f = jest.fn(() => false)
    const xs = []

    const result = findIndex(f, xs)

    expect(result).toEqual(undefined)
    expect(f).not.toHaveBeenCalled()
  })

  xit('is curried', () => {})
})
