'use strict'

require('source-map-support').install()
require('ts-node').register({})

// @ts-ignore
exports.createPages = require('./lib/createPages').createPages
