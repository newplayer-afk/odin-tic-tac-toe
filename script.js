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
const sean = player('Sean')('X')('2');
const jackie = player('Jackie')('O')('1');
const boardDOM = [document.getElementById('one'), document.getElementById('two'), document.getElementById('three'), document.getElementById('four'), document.getElementById('five'), document.getElementById('six'), document.getElementById('seven'), document.getElementById('eight'), document.getElementById('nine')];
let currentPlayer = {}

//GAMEBOARD FACTORY FUNCTION
const gameBoard = (function(player) {
    //DEFINE USER ARRAY BOARD
    let board = [' ', ' ', ' ', ' ' ,' ' ,' ' ,' ', ' ', ' ']
    let turn = 1
    let players = [sean, jackie]

    //POPULATE ELEMENTS IN ARRAY BOARD
    const add = (player,num) => {
        //TRANSLATE NUMBER TO ARRAY NUMBER (NUM -> BOARD SLOT)
        slot = num - 1
        //CHECK IF BOARD IS EMPTY, AND IT IS THEIR TURN
        if (board[slot]== " " && player.turn == `${turn}`) {
            board[slot] = `${player.choice}`
            boardDOM[slot].textContent = `${player.choice}`
            return `${player.name} added an ${player.choice} in position ${num}!`
        //IF THE BOARD IS NOT EMPTY
        } else if (board[slot] != " "){
            return `${player.name} cannot add an ${player.choice} in position ${num} because there is already a marker in that spot!`
        //IF IT IS NOT THE CURRENT PLAYER'S TURN
        } else if (player.turn != turn){
            return 'It is not your turn to play'
        }
    };
    
    //DEFINE UPDATE TURN FUNCTION
    const updateTurn = () => {
        turn == 1 ? turn +=1 : turn -=1
        for (const name in players) {
            if (players[name].turn == turn) {
                currentPlayer = players[name]
                console.log(`The player who's playing next is ${currentPlayer.name}`)
            }
        }
    }
   
    //DEFINE VIEW FUNCTION
    const view = () => board

    //DEFINE RESET FUNCTION
    const reset = () => {
        board = [' ', ' ', ' ', ' ' ,' ' ,' ' ,' ', ' ', ' ']
        for (i in boardDOM) {
            boardDOM[i].textContent = ""
        }
    }

    //DEFINE TURN FUNCTION
    const whosTurn = () => turn

    //DEFINE CHECK WIN FUNCTION
    const checkWin = (player) => {
        //TRACK IF CONDITIONS HAVE BEEN MET
        let win = 0
        let cond = ''
        
        //DEFINE WIN CONDITIONS
        const rows = [[board[0], board[1], board[2]],[[board[3],board[4],board[5]]],[board[6],board[7],board[8]]]
        const cols = [[board[0], board[3], board[6]],[[board[1],board[4],board[7]]],[board[2],board[5],board[8]]]
        const diags = [[board[0],board[4],board[8]],[board[2],board[4],board[6]]]
        const allEqual = arr => arr.every(val => val === arr[0]);
        
    
        //FOR EACH ROW, CHECK IF THEY ARE ALL EQUAL, NOT EMPTY, AND MATCH PLAYER CHOICE
        //ASSIGN A POINT TO WIN
        rows.forEach((row) => {
             if (allEqual(row) == true && row[0] != '' && row[0] === player.choice) {
                condition = 'rows'
                win += 1
             }
        })
        //FOR EACH COL, CHECK IF THEY ARE ALL EQUAL, NOT EMPTY, AND MATCH PLAYER CHOICE
        //ASSIGN A POINT TO WIN
        cols.forEach((col) => {
            if (allEqual(col) == true && col[0] != '' && col[0] === player.choice) {
                condition = 'columns'
                win += 1
             }
        })
        //FOR EACH DIAG, CHECK IF THEY ARE ALL EQUAL, NOT EMPTY, AND MATCH PLAYER CHOICE
        //ASSIGN A POINT TO WIN
        diags.forEach((diag) => {
            if (allEqual(diag) == true && diag[0] != '' && diag[0] === player.choice) {
                condition = 'diagonals'
                win += 1
             }
        })
        //CHECK IF WIN, RETURN WIN STATEMENT
        if (win > 0) {
            return `${player.name} has won by ${condition}!`
        } else {
            return `${player.name} has not won yet!`
        }
    }

    //RETURN ADD TO ARRAY BOARD FUNCTIONS
    return {add, view, reset, whosTurn, checkWin, updateTurn};
})();

//========================================================================================================================

const  displayController = (function() {
    //ADD EVENT LISTENERS FOR EACH TILE
   boardDOM.forEach((ele) => {
    ele.addEventListener('click', () => {
        spot = boardDOM.indexOf(ele)
        gameBoard.updateTurn()
        gameBoard.add(currentPlayer, spot+1)
        console.log(`${currentPlayer.name} played a ${currentPlayer.choice} in spot ${ele.id}.`)

     })
   })
    return {};
})();