function player(name) {
    return function marker(choice){
        return {name, choice}
    }
}

//PLAYERS
const sean = player('Sean')('X');
const jackie = player('Jackie')('O');

//PLAYER CHECK
console.log(sean)
console.log(jackie)