// THE PROJECT IN QUESTION:
// https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe
// Currently, we are creating the game using factory functions and are required to
// use as little global variables as possible.
// In this case, we achieved this by only defining the players, sean and jackie.

//PLAYER FACTORY FUNCTION
function player(name) {
    return function marker(choice){
        return {name, choice}
    }
}

//CREATE PLAYERS
const sean = player('Sean')('X');
const jackie = player('Jackie')('O');

//GAMEBOARD FACTORY FUNCTION
const gameBoard = (function(player) {
    //DEFINE USER ARRAY BOARD
    let board = ['', '', '', '' ,'' ,'' ,'', '', '']

    //POPULATE ELEMENTS IN ARRAY BOARD
    const add = (player,num) => {
        if (board[num-1]== "") {
            board[num-1] = player
            return `${player.name} added an ${player.choice} in position ${num}!`
        } else {
            return `${player.name} cannot add an ${player.choice} in position ${num} because there is already a marker in that spot!`
        }};
    

    //DEFINE CHECK WIN ROW FUNCTION
    const checkWinRow = (player) => {
        check = 0
        //CHECK ROWS
        if (board[0] == board[1] == board[2] == player) {
            check += 1
        } else if (board[3] == board[4] == board[5] == player)  {
            check += 1
        } else if (board[6] == board[7] == board[8] == player)  {
            check += 1
        } else {
            return check
            }
    }

    //DEFINE CHECK WIN COLUMN FUNCTION
    const checkWinCol = (player) => {
        check = 0
        //CHECK ROWS
        if (board[0] == board[3] == board[6] == player) {
            check += 1
        } else if (board[1] == board[4] == board[7] == player)  {
            check += 1
        } else if (board[2] == board[5] == board[8] == player)  {
            check += 1
        } else {
            return check
            }
    }

    //DEFINE CHECK WIN DIAG FUNCTION
    const checkWinDiag = (player) => {
        check = 0
        //CHECK ROWS
        if (board[0] == board[4] == board[8] == player) {
            check += 1
        } else if (board[2] == board[4] == board[6] == player)  {
            check += 1
        } else {
            check += 1
            }
            return check
    }

    //DEFINE CHECK WIN DIAG FUNCTION
    const checkWin = (player) => {
        //CHECK WIN CONDITIONS, results should be non-zero if a player has met a win conditions.
        let results = checkWinRow(player) + checkWinCol(player) + checkWinDiag(player);
        //COUNT HOW MANY CELLS WERE PLAYED
        let count = 0
        for (i in board) {
            if (board[i] != '') {
                count += 1
            }
        }
        //IF ANY 1 WIN CONDITION IS MET, WIN THE GAME
        if (results > 0) {
            return `${player.name} wins!`
        //IF ALL CELLS HAVE VALUES
        //AND NO ONE HAS WON VIA ANY WIN CONDITION
        } else if (count == 9 && results == 0){
            return "The game has ended in a tie!"
        //IF NOT ALL CELLS WERE PLAYED, AND NO WIN CONDITION HAS BEEN MET
        } else {
            return `${player.name} does not win!`
        }
        
    }
    //DEFINE VIEW FUNCTION
    const view = () => board

    //DEFINE RESET FUNCTION
    const reset = () => board = [['','',''],['','',''],['','','']]

    //RETURN ADD TO ARRAY BOARD FUNCTIONS
    return {add, view, checkWin, reset};
})();



/*
HOW THE GAMEBOARD IS DESIGNED
-----------------------------
Each cell in the gameboard will hold a particular value. If the cell is empty or 0, it has not been played yet.
To play a turn, you will add a player's object to that cell.

[1] [2] [3]
[4] [5] [6]
[7] [8] [9]

Despite it being held in a 1x9 array on the javascript side, we will visualize this as a 3x3 grid when styling the actual webpage.

To start the game, you will have an empty array

[0] [0] [0] 
[0] [0] [0] 
[0] [0] [0] 

To play a turn, for instance, X plays in slot 1. You will set the following element in the empty gameboard to the player name:

[0] [0] [0]     [Player1] [0] [0]
[0] [0] [0]  => [0] [0] [0]
[0] [0] [0]     [0] [0] [0]


To play the second turn, for instance, O plays in slot 3. You will set the following element in the empty gameboard:

[Player1] [0] [0]     [Player1] [0] [Player2]
[0] [0] [0]  => [0] [0] [0]
[0] [0] [0]     [0] [0] [0]

The view function will allow the user to see the current state of the board

The reset function will allow the user to wipe the board clean

The checkWin function will check all the win conditions to determine whether or not someone has won the game
*/
