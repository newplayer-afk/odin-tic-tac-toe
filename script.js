//PLAYER FACTORY FUNCTION
function player(name) {
    return function marker(choice){
        return {name, choice}
    }
}

//CREATE PLAYERS
const sean = player('Sean')('X');
const jackie = player('Jackie')('O');

//PLAYER CHECK
console.log(sean)
console.log(jackie)

//GAMEBOARD FACTORY FUNCTION
const gameBoard = (function() {
    const board = [[],[],[]]

    return {board}
})

console.log(gameBoard())