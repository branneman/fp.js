'use strict'

const flip = require('./flip')

describe('flip()', () => {
  it('flips the first two arguments', () => {
    const f = (a, b) => a + b

    const fn = flip(f)
    const result = fn('a', 'b')

    expect(result).toEqual('ba')
  })

  it("doesn't fail on 0-arity", () => {
    const f = () => 'cd'

    const fn = flip(f)
    const result = fn('a', 'b')

    expect(result).toEqual('cd')
  })

  it("doesn't fail on 1-arity", () => {
    const f = a => a + 'b'

    const fn = flip(f)
    const result = fn('c', 'd')

    expect(result).toEqual('db')
  })

  it("doesn't fail on 3-arity", () => {
    const f = (a, b, c) => a + b + c

    const fn = flip(f)
    const result = fn('a', 'b', 'c')

    expect(result).toEqual('bac')
  })

  xit('is curried', () => {})
  xit('returns a function, curried to an arity of 2', () => {})
})
