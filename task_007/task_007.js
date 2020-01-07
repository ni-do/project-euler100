// By listing the first six prime numbers: 
// 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

const isPrimeNumber = (number) => {
    if (number < 2) return false
    let i = 2
    while (i <= number) {
        if(number % i === 0) return false
        i++
    } 
    return true
}

const getNextPrimeNumberTo = (primeNumber) => {
    let nextNumber = primeNumber + 1
    while(!isPrimeNumber(nextNumber)) nextNumber++
    return nextNumber
}

const primeNumbers = [2]
let i = 1
while (i < 10001) {
    primeNumbers.push(getNextPrimeNumberTo(primeNumbers[primeNumbers.length - 1]))
    i++
}

console.log('result:', primeNumbers.pop())