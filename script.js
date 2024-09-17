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
const boardDOM = [document.getElementById('one'), document.getElementById('two'), document.getElementById('three'), document.getElementById('four'), document.getElementById('five'), document.getElementById('six'), document.getElementById('seven'), document.getElementById('eight'), document.getElementById('nine')]

//GAMEBOARD FACTORY FUNCTION
const gameBoard = (function(player) {
    //DEFINE USER ARRAY BOARD
    let board = ['', '', '', '' ,'' ,'' ,'', '', '']
    let turn = 1

    //POPULATE ELEMENTS IN ARRAY BOARD
    const add = (player,num) => {
        //TRANSLATE NUMBER TO ARRAY NUMBER (NUM -> BOARD SLOT)
        slot = num - 1
        //CHECK IF BOARD IS EMPTY, AND IT IS THEIR TURN
        if (board[slot]== "" && player.turn == `${turn}`) {
            board[slot] = player
            boardDOM[slot].textContent = `${player.choice}`
            //ADJUST GAME TURN ACCORDINGLY
            player.turn%2 == 0 ? turn -=1 : turn +=1
            return `${player.name} added an ${player.choice} in position ${num}!`
        //IF THE BOARD IS NOT EMPTY
        } else if (board[slot] != ""){
            return `${player.name} cannot add an ${player.choice} in position ${num} because there is already a marker in that spot!`
        //IF IT IS NOT THE CURRENT PLAYER'S TURN
        } else if (player.turn != turn){
            return 'It is not your turn to play'
        }};
    

   
    //DEFINE VIEW FUNCTION
    const view = () => board

    //DEFINE RESET FUNCTION
    const reset = () => {
        board = ['', '', '', '' ,'' ,'' ,'', '', '']
        for (i in boardDOM) {
            boardDOM[i].textContent = ""
        }
    }

    //DEFINE TURN FUNCTION
    const whosTurn = () => turn

    //DEFINE CHECK WIN FUNCTION
    const checkWin = (player) => {
        //TRACK WIN CONDITIONS
        let win = 0
        
        //CHECK CONDITIONS
        const rows = [[board[0], board[1], board[2]],[[board[3],board[4],board[5]]],[board[6],board[7],board[8]]]
        const cols = [[board[0], board[3], board[6]],[[board[1],board[4],board[7]]],[board[2],board[5],board[8]]]
        const diags = [[board[0],board[4],board[8]],[board[2],board[4],board[6]]]
        const allEqual = arr => arr.every( i => i === arr[0])
        check  = (condition)  => {
            for (i in condition) {
                allEqual(condition[i])
                win += 1
            }
        }
        check(rows)
        check(cols)
        check(diags)
    }

    //RETURN ADD TO ARRAY BOARD FUNCTIONS
    return {add, view, reset, whosTurn, checkWin};
})();

//========================================================================================================================

const  displayController = (function(player) {

    return {};
})();

/*
TEST WINS
gameBoard.add(sean, 1)
gameBoard.add(jackie, 4)
gameBoard.add(sean, 2)
gameBoard.add(jackie, 5)
gameBoard.add(sean, 3)
gameBoard.checkWin(sean)
*/