'use strict'

const curry = require('../curry/curry')

const reverse = curry(list => list.slice().reverse())

module.exports = reverse
