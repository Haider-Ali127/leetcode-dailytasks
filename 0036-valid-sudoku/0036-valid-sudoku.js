/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
   let rows = Array.from({ length: 9 }, () => new Set());
   let cols = Array.from({ length: 9 }, () => new Set());
   let boxes = Array.from({ length: 9 }, () => new Set());

   for(let i = 0; i < rows.length; i++){
    for(let j = 0; j < cols.length; j++){
        if(board[i][j] == '.'){
           continue
        }
        if(rows[i].has(board [i][j])){
            return false
        }
        rows[i].add(board [i][j])

        if(cols[j].has(board [i][j])){
            return false
        }
        cols[j].add(board [i][j])

        let boxIndex = Math.floor(i/3)*3 + Math.floor(j/3)

        if(boxes[boxIndex].has(board [i][j])){
            return false
        }
        boxes[boxIndex].add(board [i][j])
    }
   }
   return true
};