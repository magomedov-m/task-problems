function numIslands(grid: string[][]): number {
    const rowCount: number = grid.length;
    const columnCount: number = grid[0].length;
    let islandCount: number = 0;
  
    /**
     * Depth-first search to mark all connected land cells as visited
     * @param row - Current row index
     * @param column - Current column index
     */
    const markIslandVisited = (row: number, column: number): void => {
        // Check if current cell is out of bounds or not a land cell
        if (grid[row]?.[column] !== '1') {
            return;
        }
      
        // Mark current land cell as visited by changing it to water
        grid[row][column] = '0';
      
        // Recursively visit all four adjacent cells (up, down, left, right)
        markIslandVisited(row + 1, column); // Check cell below
        markIslandVisited(row - 1, column); // Check cell above
        markIslandVisited(row, column + 1); // Check cell to the right
        markIslandVisited(row, column - 1); // Check cell to the left
    };
  
    // Iterate through each cell in the grid
    for (let row: number = 0; row < rowCount; row++) {
        for (let column: number = 0; column < columnCount; column++) {
            // If we find an unvisited land cell, it's a new island
            if (grid[row][column] === '1') {
                // Mark all connected land cells as visited
                markIslandVisited(row, column);
                // Increment the island counter
                islandCount++;
            }
        }
    }
  
    return islandCount;
}