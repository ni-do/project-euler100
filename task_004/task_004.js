// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

let factor1 = 999, factor2 = 999, result = factor1 * factor2

const isPalindrome = (number) => {
  const numberArray = number.toString().split('')
  // if(numberArray.length % 2 === 0) {
    for (let i = 1; i <= numberArray.length; i++) {
      if (+numberArray[i-1] !== +numberArray[numberArray.length - i]) return false
    }
    return true
}

while (!isPalindrome(result) && factor1 > 100) {
  factor1--
  factor2 = 999
  result = factor1 * factor2
  while (!isPalindrome(result) && factor2 > 100) {
    result = factor1 * factor2
    factor2--
  }
}

console.log('factor1:', factor1, 'factor2:', factor2)
console.log('result:', result, 'isPalindrome:', isPalindrome(result))