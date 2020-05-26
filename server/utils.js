const { get } = require('lodash')

exports.getArr = (obj, ltr) => get(obj, ltr) || []