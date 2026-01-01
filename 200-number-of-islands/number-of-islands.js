/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    let rows = grid.length;
    let columns = grid[0].length;
    let island = 0;

    function dfs(row, column) {
        if (!grid[row]?.[column] || grid[row][column] === '0') {
            return;
        }

        grid[row][column] = '0';

        dfs(row, column + 1);
        dfs(row - 1, column);
        dfs(row + 1, column);
        dfs(row, column - 1);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                island++;
            }
        }
    }

    return island;
}