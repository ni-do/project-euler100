// Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.

const { getOneHundred50digitNumbers } = require('./task_013_lib')

const oneHundred50digitNumbers = getOneHundred50digitNumbers()
// console.log('100 50-digit numbers:', oneHundred50digitNumbers)
const sum = oneHundred50digitNumbers.reduce((acc, val) => acc += val, 0)
// console.log('sum:', sum.toString())
const arrayOfFirst10Digits = sum.toString().replace('.', '').slice(0,10).split('')
console.log('arrayOfFirst10Digits:', arrayOfFirst10Digits)