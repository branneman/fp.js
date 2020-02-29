'use strict'

const always = require('./always')

describe('always()', () => {
  it("returns a function which always returns it's first argument", () => {
    const f = always(42)

    const result = f(52)

    expect(result).toEqual(42)
  })

  it("returns a reference to it's first argument, not a copy", () => {
    const x = { foo: 'bar' }
    const f = always(x)
    expect(f({ foo: 'baz' })).toBe(x)

    const y = [3.14, 1337]
    const g = always(y)
    expect(g(y)).toBe(y)
  })

  it('ignores all arguments except the first', () => {
    const f = always(42)

    expect(f(undefined)).toEqual(42)
    expect(f(null)).toEqual(42)
    expect(f(1337)).toEqual(42)
    expect(f(3.14, 42)).toEqual(42)
  })

  xit('is curried', () => {})
})
