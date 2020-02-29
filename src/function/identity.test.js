'use strict'

const identity = require('./identity')

describe('identity()', () => {
  it("returns it's first argument", () => {
    expect(identity(42)).toEqual(42)
  })

  it("returns a reference to it's first argument, not a copy", () => {
    const x = { foo: 'bar' }
    expect(identity(x)).toBe(x)

    const y = [3.14, 1337]
    expect(identity(y)).toBe(y)
  })

  it('ignores all arguments except the first', () => {
    expect(identity(undefined)).toEqual(undefined)
    expect(identity(null)).toEqual(null)
    expect(identity(1337)).toEqual(1337)
    expect(identity(3.14, 42)).toEqual(3.14)
  })

  xit('is curried', () => {})
})
