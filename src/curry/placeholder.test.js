'use strict'

const curry = require('./curry')
const _ = require('./placeholder')

describe('placeholder', () => {
  it('it allows gaps via placeholder value', () => {
    const sum3 = (a, b, c) => a + b + c
    const fn = curry(sum3)

    const result = [
      fn(10, 20, 30),
      fn(_, 20, 30)(10),
      fn(_, _, 30)(10)(20),
      fn(_, _, 30)(10, 20),
      fn(_, 20)(10)(30),
      fn(_, 20)(10, 30),
      fn(_, 20)(_, 30)(10)
    ]

    expect(result.every(x => x === 60)).toBe(true)
  })
})
