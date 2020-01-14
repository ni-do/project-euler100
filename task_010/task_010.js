// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

const isPrimeNumber = (number) => {
  if (number < 2) return false
  let i = 2
  while (i < number) {
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

const getSumOfAllPrimesBelow = (upperLimit) => {
  let sumOfPrimes = 0
  for (let i = 2; i < upperLimit; i = getNextPrimeNumberTo(i)) {
    sumOfPrimes += i
  }
  return sumOfPrimes
}

console.log('sum of primes below 10:', getSumOfAllPrimesBelow(10))
console.log('sum of primes below 2 million:', getSumOfAllPrimesBelow(2000000))
