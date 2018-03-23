import uniqueRandomArray from 'unique-random-array'
const monsterNames = require('./monster-names.json')

const mainExport = {
  all: monsterNames,
  random: uniqueRandomArray(monsterNames)
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
