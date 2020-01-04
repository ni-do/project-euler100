const isMultipleOf = (number, multiplicant) => {
    if(number % multiplicant === 0) return true
    else return false
}

const multiplesOf3or5 = []

for (let number = 1; number < 1000; number++) {
    if(isMultipleOf(number, 3) || isMultipleOf(number, 5)) multiplesOf3or5.push(number)
}

const sum = multiplesOf3or5.reduce((acc, currentValue) => {
    return acc + currentValue
}, 0)

console.log('sum:', sum)