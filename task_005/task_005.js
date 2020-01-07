// 2520 is the smallest number that can be divided by 
// each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by 
// all of the numbers from 1 to 20?

const getSmallestPositiveNumberDivisibleBy = (from, to) => {
    let number = to
    numberFound = false
    while (true) {
        for (let i = from; i <= to; i++) {
            if(number % i === 0){
                if (i === to) numberFound = true
                continue
            } else {
                number++
                i = to // end for loop
            }
        }
        if (numberFound) return number
    }
}

const result1 = getSmallestPositiveNumberDivisibleBy(1, 10)
const result2 = getSmallestPositiveNumberDivisibleBy(1, 20)

console.log('result1:', result1)
console.log('result2:', result2)