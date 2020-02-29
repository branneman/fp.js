'use strict'

const apply = require('./apply')

describe('apply()', () => {
  it('applies function to argument list', () => {
    const f = (a, b, c) => a + b + c
    const xs = [1300, 30, 7]

    const result = apply(f, xs)

    expect(result).toEqual(1337)
  })

  it('supports variadic functions', () => {
    const xs = [1, 2, 3, -99, 42, 6, 7]

    const result = apply(Math.max, xs)

    expect(result).toEqual(42)
  })

  it("has 'undefined' as its context", () => {
    let _this
    const f = function() {
      _this = this
      return true
    }

    apply(f, [])

    expect(_this).toEqual(undefined)
  })

  xit('is curried', () => {})
})
