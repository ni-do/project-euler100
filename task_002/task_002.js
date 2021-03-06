// Each new term in the Fibonacci sequence is generated by 
// adding the previous two terms. 
// By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence 
// whose values do not exceed four million, 
// find the sum of the even-valued terms.

const fiboEvenSum = (n) => {
    let i = 3, fminus2Element = 1, fminus1Element = 2
    let nextElement = fminus1Element + fminus2Element
    let sum = BigInt(2)
    while (i <= n) {
        nextElement = fminus1Element + fminus2Element
        // sum up even-valued terms
        if(nextElement % 2 === 0) {
            sum += BigInt(nextElement)
        }

        fminus2Element = fminus1Element
        fminus1Element = nextElement
        i++
    }
    return sum
}

console.log('fiboEvenSum(10):', fiboEvenSum(10))
console.log('fiboEvenSum(18):', fiboEvenSum(18))
console.log('fiboEvenSum(23):', fiboEvenSum(23))
console.log('fiboEvenSum(43):', fiboEvenSum(43))
console.log('fiboEvenSum(4000000):', fiboEvenSum(4000000))