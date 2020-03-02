'use strict'

const ap = require('./ap')
const identity = require('../function/identity')

describe('ap()', () => {
  const multiply = x => y => x * y
  const add = x => y => x + y

  it('applies a list of functions to a list of values', () => {
    const fs = [multiply(2), add(3)]
    const xs = [1, 2, 3]

    const result = ap(fs, xs)
    expect(result).toEqual([2, 4, 6, 4, 5, 6])
  })

  it('dispatches to fantasy-land/ap method', () => {
    class Identity {
      constructor(x) {
        this.x = x
      }
      static of(x) {
        return new Identity(x)
      }
      ['fantasy-land/map'](f) {
        return Identity.of(f(this.x))
      }
      ['fantasy-land/ap'](m) {
        return this['fantasy-land/map'](m.x)
      }
      ['fantasy-land/chain'](f) {
        return f(this.x)
      }
    }

    const resultM = ap(Identity.of(add(4)), Identity.of(1))
    const result = resultM['fantasy-land/chain'](identity)

    expect(result).toEqual(5)
  })

  xit('is curried', () => {})
})
