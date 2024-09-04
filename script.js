function player(name) {
    return function marker(choice){
        return {name, choice}
    }
}

//PLAYERS
const sean = player('Sean');
const jackie = player('Jackie');

//PLAYER CHECK
const player1  = sean('X')
const player2 = jackie('O')

console.log(player1)
console.log(player2)