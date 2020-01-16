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
    let productUp = grid[y][x]
    for (let i = 1; i < 4 && grid[y+i] && grid[y+i][x]; i++) {
        productUp *= grid[y+i][x]
    }
    return productUp
}

const adjacentProductDiagonallyDown = (startingPoint) => {
    const { x, y } = startingPoint
    let productUp = grid[y][x]
    for (let i = 1; i < 4 && grid[y+i] && grid[y+i][x+i]; i++) {
        productUp *= grid[y+i][x]
    }
    return productUp
}

const adjacentProductDiagonallyUp = (startingPoint) => {
    const { x, y } = startingPoint
    let productUp = grid[y][x]
    for (let i = 1; i < 4 && grid[y-i] && grid[y-i][x+i]; i++) {
        productUp *= grid[y-i][x+i]
    }
    return productUp
}

// iterate rows
// let maxAdjacentProduct = 0
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

        // maxAdjacentProduct 

        console.log('product for element [', i, ',', j, '] 4 to the right:', productToTheRight)
        console.log('product for element [', i, ',', j, '] 4 up:', productUp)
        console.log('product for element [', i, ',', j, '] 4 down:', productDown)
        console.log('product for element [', i, ',', j, '] 4 diagonally up:', productDiagonallyUp)
        console.log('product for element [', i, ',', j, '] 4 diagonally down:', productDiagonallyDown)
    }
}