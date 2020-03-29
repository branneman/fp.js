'use strict'

const lensIndex = require('./lensIndex')
const view = require('./view')
const set = require('./set')
const over = require('./over')
const keys = require('../object/keys')
const compose = require('../function/compose')

describe('lensIndex()', () => {
  const testList = [{ a: 1 }, { b: 2 }, { c: 3 }]

  it('view() focuses list element at the specified index', () => {
    expect(view(lensIndex(0), testList)).toEqual({ a: 1 })
  })

  it('view() returns undefined if the specified index does not exist', () => {
    expect(view(lensIndex(10), testList)).toEqual(undefined)
  })

  it('set() sets the list value at the specified index', () => {
    expect(set(lensIndex(0), 0, testList)).toEqual([0, { b: 2 }, { c: 3 }])
  })

  it('over() applies function to the value at the specified list index', () => {
    expect(over(lensIndex(2), keys, testList)).toEqual([
      { a: 1 },
      { b: 2 },
      ['c']
    ])
  })

  xit('is composable', () => {
    const nestedList = [0, [10, 11, 12], 1, 2]
    const composedLens = compose(lensIndex(1), lensIndex(0))

    expect(view(composedLens, nestedList)).toEqual(10)
  })

  xit('is curried', () => {})
})
