// The four adjacent digits in the 1000-digit number that have the greatest product are 
// 9 × 9 × 8 × 9 = 5832.
// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product.
// What is the value of this product?

const { get1000DigitNumberArray } = require('./task_008_lib')

const getProductOfAdjacentDigits = (numOfAdjacentDigits) => {
  const hugeDigitNumberArray = get1000DigitNumberArray()

  // iterate digits
  let productOfAdjacentDigitsArray = []
  for (let i = 0; i < hugeDigitNumberArray.length - numOfAdjacentDigits; i++) {
    let productOfAdjacentDigits = hugeDigitNumberArray[i]

    // iterate adjacent digits
    for (let j = 1; j < numOfAdjacentDigits; j++) {
      productOfAdjacentDigits = productOfAdjacentDigits * hugeDigitNumberArray[i+j]
    }
    productOfAdjacentDigitsArray[i] = productOfAdjacentDigits 
  }

  return productOfAdjacentDigitsArray.sort((a, b) => b < a).pop()
}

const result1 = getProductOfAdjacentDigits(4)
const result2 = getProductOfAdjacentDigits(13)

console.log('result1:', result1)
console.log('result2:', result2)
