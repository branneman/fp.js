'use strict'

const isPlaceholder = x =>
  x === Object(x) && x['@@functional/placeholder'] === true
const filterPlaceholders = xs => xs.filter(isPlaceholder)
const filterValues = xs => xs.filter(x => !isPlaceholder(x))

const curryN = (arity, f, accIn = []) => (...xs) => {
  const accOut = accIn.slice()

  if (filterPlaceholders(accIn).length > 0) {
    filterValues(xs).forEach(val => {
      const i = accOut.findIndex(isPlaceholder)
      const idx = i === -1 ? accOut.length : i
      accOut[idx] = val
    })
  } else {
    accOut.push(...xs)
  }

  if (filterValues(accOut).length >= arity) {
    return f.apply(null, accOut)
  }
  return curryN(arity, f, accOut)
}

module.exports = curryN
