// A Pythagorean triplet is a set 
// of three natural numbers, a < b < c, for which,
//
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const getPythagoreanTriplet = () => {
    let a = 0, b = 0, c = 0
    for(a = 1; a < 1000; a++) {
        for(b = a; b < 1000; b++) {
            let c = 1000 - a - b
            if (a**2 + b**2 === c**2) {
                return { a, b, c };
            }
        }
    }
    throw Error('could not find pythagorean triplet for a + b + c = 1000')
}

const { a, b, c } = getPythagoreanTriplet()
console.log('result: a:', a, 'b:', b, 'c:', c)
