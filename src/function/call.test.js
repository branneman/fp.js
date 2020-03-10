'use strict'

const call = require('./call')

describe('call()', () => {
  it('applies function to positional arguments', () => {
    const f = (a, b, c) => a + b + c

    const result = call(f, 1300, 30, 7)

    expect(result).toEqual(1337)
  })

  it('supports variadic functions', () => {
    const result = call(Math.max, 1, 2, 3, -99, 42, 6, 7)

    expect(result).toEqual(42)
  })

  it("has 'undefined' as its context", () => {
    let _this
    const f = function() {
      _this = this
      return true
    }

    call(f, 42)

    expect(_this).toEqual(undefined)
  })

  xit('is curried', () => {})
})
