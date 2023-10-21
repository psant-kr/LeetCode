/**
 * @param {number[][]} moves
 * @return {string}
 */

 let mp = {
     'A' : 'X',
     'B' : '0'
 }

 function  winCheck(grid, player) {
     // check rows
     // row 0
     if(grid[0][0] == mp[player] && grid[0][1] == mp[player] && grid[0][2] == mp[player]) {
         return true; // current player wins
     }
     // row 1
     if(grid[1][0] == mp[player] && grid[1][1] == mp[player] && grid[1][2] == mp[player]) {
         return true; // current player wins
     }
     // row 2
     if(grid[2][0] == mp[player] && grid[2][1] == mp[player] && grid[2][2] == mp[player]) {
         return true; // current player wins
     }

     //col check
     // col 0
     if(grid[0][0] == mp[player] && grid[1][0] == mp[player] && grid[2][0] == mp[player]){
         return true; // current player wins
     }
     // col 1
     if(grid[0][1] == mp[player] && grid[1][1] == mp[player] && grid[2][1] == mp[player]){
         return true; // current player wins
     }
     // col 2
     if(grid[0][2] == mp[player] && grid[1][2] == mp[player] && grid[2][2] == mp[player]){
         return true; // current player wins
     }
     // check diagonal
     // diag 0
     if(grid[0][0] == mp[player] && grid[1][1] == mp[player] && grid[2][2] == mp[player]){
        return true; // current player wins 
     }
     // giag 1
      if(grid[2][0] == mp[player] && grid[1][1] == mp[player] && grid[0][2] == mp[player]){
        return true; // current player wins 
     }
     return false // current player didnt win yet.
 }
var tictactoe = function(moves) {
    let turn = 0; // 0-> A , 1-> B
    let grid = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]; // tic tac toe grid
    // let state = "pending";
    let count = 0;
    for(let i = 0; i < moves.length; i++){
        let curMove = moves[i];
        let x = curMove[0];
        let y = curMove[1];
        let player = (turn == 0) ? 'A' : 'B';
        if(turn == 0 && grid[x][y] == ' '){
            grid[x][y] = 'X';
        } else if(turn == 1 && grid[x][y] == ' '){
            grid[x][y] = '0';
        }
        count++;
        let doesPlayerWin = winCheck(grid, player);
        if(doesPlayerWin){
            return player;
        }
        if(count == 9){
            return "Draw";
        }
        turn = (turn+1) % 2; // method to change the turn from one to zero and zero to one
    }
    return "Pending";
};