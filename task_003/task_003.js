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

const isDividableBy = (divident, divisor) => {
    return (divident % divisor === 0)
}

const getQuerSumFrom = (number) => {
    let digits = number.toString().split('')
    return digits.reduce((acc, currItem) => acc + +currItem, 0)
}

const getNextPrimeNumberTo = (primeNumber) => {
    let nextNumber = primeNumber + 1
    while(!isPrimeNumber(nextNumber)) nextNumber++
    return nextNumber
}

const getLargestPrimeFactorOf = (number) => {
    const primeFactors = []
    let currentPrimeNumber = 2

    let rest = number
    do {
        if(currentPrimeNumber !== 3 && isDividableBy(rest, currentPrimeNumber)) {
            rest /= currentPrimeNumber
            primeFactors.push(currentPrimeNumber)
        } else if(isDividableBy(getQuerSumFrom(rest), 3)) {
            rest /= 3
            primeFactors.push(3)
        } else {
            currentPrimeNumber = getNextPrimeNumberTo(currentPrimeNumber)
        }
    } while (!isPrimeNumber(rest))
    primeFactors.push(rest)
    return primeFactors.pop()
}

const result1 = getLargestPrimeFactorOf(616)
const result2 = getLargestPrimeFactorOf(13195)
const result3 = getLargestPrimeFactorOf(600851475143)

console.log('result1:', result1)
console.log('result2:', result2)
console.log('result3:', result3)