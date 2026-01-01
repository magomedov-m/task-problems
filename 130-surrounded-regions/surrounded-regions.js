/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let rows = board.length;
    let columns = board[0].length;
    
    function dfs(row, col) {
        let cur = board[row]?.[col];
        if (!cur || cur === 'X' || cur === 1) return;

        board[row][col] = 1;

        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (i === 0 || i === rows - 1 || j === 0 || j === columns - 1) {
                dfs(i, j);
            }
        }
    }

    for (let b = 0; b < rows; b++) {
        for (let c = 0; c < columns; c++) {
            if (board[b][c] === 1) {
                board[b][c] = 'O'
            }else {
                board[b][c] = 'X'
            }
        }
    }

    return board;
};