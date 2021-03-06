'use strict'

const find = require('./find')

describe('find()', () => {
  it('returns the element that satisfies the predicate', () => {
    const f = x => x === 42

    const xs = [42]
    expect(find(f, xs)).toEqual(42)

    const ys = [42, 1337]
    expect(find(f, ys)).toEqual(42)

    const zs = [3.14, 42, 1337]
    expect(find(f, zs)).toEqual(42)
  })

  it('returns only the first element that satisfies the predicate', () => {
    const f = x => x[0] === '4'

    const xs = ['3.14', '4', '42', '1337']

    expect(find(f, xs)).toEqual('4') // not 42
  })

  it('returns `undefined` without at match', () => {
    const f = () => false
    const xs = [1, 3, 3, 7]

    const result = find(f, xs)

    expect(result).toEqual(undefined)
  })

  it('returns `undefined` when given an empty list', () => {
    const f = jest.fn(() => false)
    const xs = []

    const result = find(f, xs)

    expect(result).toEqual(undefined)
    expect(f).not.toHaveBeenCalled()
  })

  xit('is curried', () => {})
})
