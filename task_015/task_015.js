// Starting in the top left corner of a 2×2 grid, 
// and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

const getNumofPathsForGridSize = (gridSize) => {
    let paths = 1
    for (let i = 0; i < gridSize; i++) {
        paths *= (2 * gridSize) - i;
        paths /= i + 1;
    }
    return paths
}

console.log('paths for grid size 2x2:', getNumofPathsForGridSize(2))
console.log('paths for grid size 20x20:', getNumofPathsForGridSize(20))
