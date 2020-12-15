// If the numbers 1 to 5 are written out in words: one, two, three, four, five, 
// then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, 
// how many letters would be used?
// 
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) 
// contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
// The use of "and" when writing out numbers is in compliance with British usage.

const digitsToWordMap = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '0': 'zero',
}

const twentyPlusDigitsToWordMap = {
  '2': 'twenty',
  '3': 'thirty',
  '4': 'forty',
  '5': 'fifty',
  '6': 'sixty',
  '7': 'seventy',
  '8': 'eighty',
  '9': 'ninety',
}

const tenthDigitsToWordMap = {
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
}

const getWrittenWordForNumber = (number) => {
  if (number > 1000) throw new Error('numbers larger than 1000 are not supported')
  const chars = number.toString().split('').reverse()
  const words = []
  for (let i = chars.length-1; i >= 0; i--) {
    const element = chars[i];
    if (i === 0 && digitsToWordMap[element] !== 'zero') {
      words.push(twentyPlusDigitsToWordMap[chars[i+1]] ? '-' + digitsToWordMap[element] : digitsToWordMap[element])
    }
    if (i === 1 && digitsToWordMap[element] !== 'zero') {
      if (words.length) words.push('and')
      if (digitsToWordMap[element] === 'one') {
        words.push(tenthDigitsToWordMap[element+chars[i-1]])
        i--
      } else {
        words.push(twentyPlusDigitsToWordMap[element])
      }
    }
    if (i === 2 && digitsToWordMap[element] !== 'zero') {
      if(words.length) words.push('and')
      words.push(digitsToWordMap[element])
      words.push('hundred')
    }
    if (i === 3) {
      words.push(digitsToWordMap[element])
      words.push('thousand')
    }
  }
  return words.reduce((prevElem, currElem) => {
    if(currElem.startsWith('-')) return prevElem + currElem
    else return prevElem + ' ' +  currElem
  })
}

// console.log('342:', getWrittenWordForNumber(342))
// console.log('115:', getWrittenWordForNumber(115))
// console.log('1000:', getWrittenWordForNumber(1000))

let totalSumOfLengthOfAllNumberOneToThousand = 0
for (let i = 100; i <= 999; i++) {
  const writtenWordForNumber = getWrittenWordForNumber(i)
  console.log(`${i}:[`, writtenWordForNumber, ']')
  totalSumOfLengthOfAllNumberOneToThousand += writtenWordForNumber.replace(' ', '').replace('-', '').length
}
console.log('totalSumOfLengthOfAllNumberOneToThousand:', totalSumOfLengthOfAllNumberOneToThousand)