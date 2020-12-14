// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

const getSumOfDigits = (number) => {
  const digits = number.toString().split('').map(Number)
  return digits.reduce((priorVal, currVal) => priorVal + currVal, 0)
}

const number = BigInt(2 ** 1000)
console.log('sum of digits for 2^1000:', getSumOfDigits(number))
