/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let answer = 0;
    
    for (let row of grid) {
        row.sort((a, b) => b - a);
    }

    let m = grid.length;
    let n = grid[0].length;

    for (let j = 0; j < n; j++) {
        let curValue = 0;
        for (let i = 0; i < m; i++) {
            curValue = Math.max(curValue, grid[i][j]);
        }
        answer += curValue;
    }

    return answer;
};