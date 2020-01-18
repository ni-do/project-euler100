// In the 20×20 grid below, four numbers along a diagonal line 
// have been marked in red.
// The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
// What is the greatest product of four adjacent numbers 
// in the same direction (up, down, left, right, or diagonally) 
// in the 20×20 grid?

const grid = require('./task_011_lib')

const adjacentProductToTheRight = (startingPoint) => {
    const { x, y } = startingPoint
    let productToTheRight = grid[y][x]
    for (let i = 1; i < 4 && grid[y][x+i]; i++) {
        productToTheRight *= grid[y][x+i]
    }
    return productToTheRight
}

const adjacentProductUp = (startingPoint) => {
    const { x, y } = startingPoint
    let productUp = grid[y][x]
    for (let i = 1; i < 4 && grid[y-i] && grid[y-i][x]; i++) {
        productUp *= grid[y-i][x]
    }
    return productUp
}

const adjacentProductDown = (startingPoint) => {
    const { x, y } = startingPoint
    let productDown = grid[y][x]
    for (let i = 1; i < 4 && grid[y+i] && grid[y+i][x]; i++) {
        productDown *= grid[y+i][x]
    }
    return productDown
}

const adjacentProductDiagonallyDown = (startingPoint) => {
    const { x, y } = startingPoint
    let productDiagonallyDown = grid[y][x]
    for (let i = 1; i < 4 && grid[y+i] && grid[y+i][x+i]; i++) {
        productDiagonallyDown *= grid[y+i][x]
    }
    return productDiagonallyDown
}

const adjacentProductDiagonallyUp = (startingPoint) => {
    const { x, y } = startingPoint
    let productDiagonallyUp = grid[y][x]
    for (let i = 1; i < 4 && grid[y-i] && grid[y-i][x+i]; i++) {
        productDiagonallyUp *= grid[y-i][x+i]
    }
    return productDiagonallyUp
}

let maxAdjacentProduct = 0
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        let startingPoint = {
            x: j,
            y: i,
        }
        const productToTheRight = adjacentProductToTheRight(startingPoint)
        const productUp = adjacentProductUp(startingPoint)
        const productDown = adjacentProductDown(startingPoint)
        const productDiagonallyDown = adjacentProductDiagonallyDown(startingPoint)
        const productDiagonallyUp = adjacentProductDiagonallyUp(startingPoint)

        if (productToTheRight > maxAdjacentProduct) maxAdjacentProduct = productToTheRight
        if (productUp > maxAdjacentProduct) maxAdjacentProduct = productUp
        if (productDown > maxAdjacentProduct) maxAdjacentProduct = productDown
        if (productDiagonallyDown > maxAdjacentProduct) maxAdjacentProduct = productDiagonallyDown
        if (productDiagonallyUp > maxAdjacentProduct) maxAdjacentProduct = productDiagonallyUp
    }
}

console.log('max product:', maxAdjacentProduct)