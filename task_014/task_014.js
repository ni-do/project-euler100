// The following iterative sequence is defined for the set of positive integers:
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
// Although it has not been proved yet (Collatz Problem), 
// it is thought that all starting numbers finish at 1.
// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.


const nIsEven = n => n/2
const nIsOdd = n => 3 * n + 1

let offset = 1
let n = 1
const OffsetWithMaxChainLength = {
    offset: 0,
    chainLength: 0,
}

while(offset < 1000000) {
    let chain = []
    n = offset
    chain.push(n)
    while (n > 1) {
        if(n % 2 === 0) n = nIsEven(n)
        else n = nIsOdd(n)
        chain.push(n)
    }
    if (n !== 1) chain.push(1)

    if(chain.length > OffsetWithMaxChainLength.chainLength) {
        OffsetWithMaxChainLength.offset = offset
        OffsetWithMaxChainLength.chainLength = chain.length
    }

    // console.log('length of chain for offset', offset, ':', chain.length)
    offset++
}

console.log('offset with max chain length:', OffsetWithMaxChainLength.offset)
console.log('max chain length:', OffsetWithMaxChainLength.chainLength)