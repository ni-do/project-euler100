// A Pythagorean triplet is a set 
// of three natural numbers, a < b < c, for which,
//
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

let a = 3, b = 4

do {
    b % 2 === 0 ? b++ : a++
} while (a**2 + b**2 < 1000) 

console.log('result: a:', a, 'b:', b, 'a^2 + b^2=', a**2 + b**2)