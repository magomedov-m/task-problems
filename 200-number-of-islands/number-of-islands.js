/**
 * @param {character[][]} grid
 * @return {number}
 */

function numIslands(grid) {
    let count = 0;
    
    function bfs(i, j) {
        if (!grid[i]?.[j] || grid[i][j] === '0') {
            return;
        }
        
        grid[i][j] = '0';
        
        bfs(i - 1, j)
        bfs(i, j - 1)
        bfs(i + 1, j)
        bfs(i, j + 1);
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                bfs(i, j);
            }
        }
    }
    
    return count;
}