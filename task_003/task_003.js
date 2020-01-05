// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const isPrimeNumber = (number) => {
    if (number < 2) return false

    let i = 2
    while (i < number) {
        if(number % i === 0) return false
        i++
    } 
    return true
}

const isDividableByTwo = (number) => {
    return (number % 2 === 0)
}

const isDividableByFive = (number) => {
    return (number % 5 === 0)
}

const isDividableByThree = (number) => {
    return (number % 3 === 0)
}

const getQuerSumFrom = (number) => {
    let digits = number.toString().split('')
    return digits.reduce((acc, currItem) => acc + currItem, 0)
    
}

const getNextPrimeNumberTo = (primeNumber) => {
    let nextNumber = primeNumber + 1
    while(!isPrimeNumber(nextNumber)) nextNumber++
    return nextNumber
}

const getLargestPrimeFactorOf = (number) => {
    const primeFactors = [1]
    while(primeFactors.reduce((acc, currItem) => acc * currItem, 1) <= number) {
        primeFactors.push(getNextPrimeNumberTo(primeFactors[primeFactors.length - 1]))
    }
    console.log('primeFactors:', primeFactors)
    return primeFactors.pop()
}

const result1 = getLargestPrimeFactorOf(13195)
const result2 = getLargestPrimeFactorOf(600851475143)

console.log('result1:', result1)
console.log('result2:', result2)