'use strict'

const complement = require('./complement')

describe('complement()', () => {
  it('creates boolean-returning function that reverses another', () => {
    const f = x => x === 42

    const g = complement(f)

    expect(f(42)).toEqual(true)
    expect(g(42)).toEqual(false)
  })

  it('accepts a function with an arity of 0', () => {
    const T = () => true

    const F = complement(T)

    expect(T()).toEqual(true)
    expect(F()).toEqual(false)
  })

  it('accepts a function with an arity of 2', () => {
    const f = (x, y) => x === y

    const g = complement(f)

    expect(f(42, 42)).toEqual(true)
    expect(g(42, 42)).toEqual(false)
  })

  xit('is curried', () => {})
})
