// Starting in the top left corner of a 2×2 grid, 
// and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?


const createGrid = (x, y) => {
    return Array(y).fill(Array(x).fill("x"))
}

const currentPosition = {
    x,
    y,
}

const moveRight = (currentPosition) => {
    currentPosition.y += 1
}

const moveDown = (currentPosition) => {
    currentPosition.x += 1
}

const grid = createGrid(20,20)

while (currentPosition.x !== 20 && currentPosition.y !== 20) {
    // target the bottom right corner
}
