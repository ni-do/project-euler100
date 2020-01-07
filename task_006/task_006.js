// The sum of the squares of the first ten natural numbers is,
// 12^2 + 22^2 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the 
// first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the 
// first one hundred natural numbers and the square of the sum.

const getSumSquareDifference = (toBaseNumber) => {
    let sum = 0, sumOfSquares = 0
    for (let i = 1; i <= toBaseNumber; i++) {
        sumOfSquares += i * i
        sum += i
    }
    let squareOfSum = sum * sum
    return squareOfSum - sumOfSquares
}

const result1 = getSumSquareDifference(10)
const result2 = getSumSquareDifference(100)

console.log('result1:', result1)
console.log('result2:', result2)