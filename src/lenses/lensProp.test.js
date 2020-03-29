'use strict'

const lensProp = require('./lensProp')
const view = require('./view')
const set = require('./set')
const over = require('./over')
const add = require('../math/add')
const inc = require('../math/inc')
const identity = require('../function/identity')
const compose = require('../function/compose')

describe('lensProp()', () => {
  const testObj = { a: 1, b: 2, c: 3 }

  it('view() focuses object the specified object property', () => {
    expect(view(lensProp('a'), testObj)).toEqual(1)
  })

  it('view() returns undefined if the specified property does not exist', () => {
    expect(view(lensProp('X'), testObj)).toEqual(undefined)
  })

  it('set() sets the value of the object property specified', () => {
    expect(set(lensProp('a'), 0, testObj)).toEqual({ a: 0, b: 2, c: 3 })
  })

  it("set() adds the property to the object if it doesn't exist", () => {
    expect(set(lensProp('d'), 4, testObj)).toEqual({ a: 1, b: 2, c: 3, d: 4 })
  })

  it('over() applies function to the value of the specified object property', () => {
    expect(over(lensProp('a'), inc, testObj)).toEqual({ a: 2, b: 2, c: 3 })
  })

  it("over() applies function to undefined and adds the property if it doesn't exist", () => {
    expect(over(lensProp('X'), identity, testObj)).toEqual({
      a: 1,
      b: 2,
      c: 3,
      X: undefined
    })
  })

  xit('is composable', () => {
    const nestedObj = { a: { b: 1 }, c: 2 }
    const composedLens = compose(lensProp('a'), lensProp('b'))

    expect(view(composedLens, nestedObj)).toEqual(1)
  })

  it('is immutable', () => {
    const o = { x: 1, amount: 10 }

    const amountLens = lensProp('amount')

    over(amountLens, add(5), o)

    expect(o).toEqual({ x: 1, amount: 10 })
  })

  xit('is curried', () => {})
})
