module.exports = function solveSudoku(matrix) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (matrix[i][j] == '0') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(matrix, i, j, k)) {
            matrix[i][j] = k;
          if (solveSudoku(matrix)) {
           return matrix;
          } else {
           matrix[i][j] = '0';
          }
         }
       }
       return false;
     }
   }
 }
 return matrix;
}
function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}
