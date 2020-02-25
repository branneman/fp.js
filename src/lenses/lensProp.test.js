'use strict'

const lensProp = require('./lensProp')
const over = require('./over')
const add = require('../math/add')

describe('lensProp()', () => {
  xit('focuses object the specified object property', () => {})
  xit('returns undefined if the specified property does not exist', () => {})
  xit('sets the value of the object property specified', () => {})
  xit("adds the property to the object if it doesn't exist", () => {})
  xit('applies function to the value of the specified object property', () => {})
  xit("applies function to undefined and adds the property if it doesn't exist", () => {})
  xit('is composable', () => {})

  it('is immutable', () => {
    const o = { x: 1, amount: 10 }

    const amountLens = lensProp('amount')

    over(amountLens)(add(5))(o)

    expect(o).toEqual({ x: 1, amount: 10 })
  })

  xit('is curried', () => {})
})
