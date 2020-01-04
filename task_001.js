const isMultipleOf = (number, multiplicant) => {
    if(number % multiplicant === 0) return true
    else return false
}

const multiplesOf3 = []
const multiplesOf5 = []

for (let number = 1; number < 1000; number++) {
    if(isMultipleOf(number, 3)) multiplesOf3.push(number)
    if(isMultipleOf(number, 5)) multiplesOf5.push(number)
}

const sum3 = multiplesOf3.reduce((acc, currentValue) => {
    return acc + currentValue
}, 0)

const sum5 = multiplesOf5.reduce((acc, currentValue) => {
    return acc + currentValue
}, 0)

console.log('sum:', sum3 + sum5)