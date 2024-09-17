// THE PROJECT IN QUESTION:
// https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe
// Currently, we are creating the game using factory functions and are required to
// use as little global variables as possible.
// In this case, we achieved this by only defining the players, sean and jackie.

//========================================================================================================================

//PLAYER FACTORY FUNCTION
function player(name) {
    return function marker(choice){
        return function order(turn){
            return {name, choice, turn}
        } 
    }
}

//========================================================================================================================

//CREATE PLAYERS
const sean = player('Sean')('X')('1');
const jackie = player('Jackie')('O')('2');

//GAMEBOARD FACTORY FUNCTION
const gameBoard = (function(player) {
    //DEFINE USER ARRAY BOARD
    let board = ['', '', '', '' ,'' ,'' ,'', '', '']
    let turn = 1

    //POPULATE ELEMENTS IN ARRAY BOARD
    const add = (player,num) => {
        //CHECK IF BOARD IS EMPTY, AND IT IS THEIR TURN
        if (board[num-1]== "" && player.turn == `${turn}`) {
            board[num-1] = player
            //ADJUST GAME TURN ACCORDINGLY
            player.turn%2 == 0 ? turn -=1 : turn +=1
            return `${player.name} added an ${player.choice} in position ${num}!`
        //IF THE BOARD IS NOT EMPTY
        } else if (board[num-1] != ""){
            return `${player.name} cannot add an ${player.choice} in position ${num} because there is already a marker in that spot!`
        //IF IT IS NOT THE CURRENT PLAYER'S TURN
        } else if (player.turn != turn){
            return 'It is not your turn to play'
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
    const reset = () => board = ['', '', '', '' ,'' ,'' ,'', '', '']

    //DEFINE TURN FUNCTION
    const whosTurn = () => turn

    //RETURN ADD TO ARRAY BOARD FUNCTIONS
    return {add, view, checkWin, reset, whosTurn};
})();

//========================================================================================================================

const  displayController = (function(player) {

    return {};
})();

/*
Creating flowControl Logic:

Function should take two arguments, Player 1, and Player 2

If player 1 plays their turn, the next player (Player 2) should have their turn.

2 variables
currentTurn
nextTurn

if it is Player 1's turn
currentTurn = P1
nextTurn = P2

if it is Player 2's turn
currentTurn = P2
nextTurn = P1

If Player 2 tries to play on Player 1's turn, you should get an error:
"It is not player.name's turn to play!"

The same happens vice-versa

function should be named startGame()
*/