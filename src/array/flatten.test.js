'use strict'

const flatten = require('./flatten')

describe('flatten()', () => {
  xit('turns a nested list into one flat list', () => {})
  xit('flattens an array of empty arrays', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]
    const x = flatten(xs)
    expect(x).not.toBe(xs)

    const ys = [1, [2, 3]]
    const y = flatten(ys)
    expect(y).not.toBe(ys)
  })

  xit('is curried', () => {})
})
