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

let board = []
//GAMEBOARD FACTORY FUNCTION
const gameBoard = (function(player) {
    const add1 = (player) => board + [[player, 0, 0], [0, 0, 0], [0, 0, 0]]
    const add2 = (player) => board + [[0, player, 0], [0, 0, 0], [0, 0, 0]]
    const add3 = (player) => board + [[0, 0, player], [0, 0, 0], [0, 0, 0]]
    const add4 = (player) => board + [[0, 0, 0], [player, 0, 0], [0, 0, 0]]
    const add5 = (player) => board + [[0, 0, 0], [0, player, 0], [0, 0, 0]]
    const add6 = (player) => board + [[0, 0, 0], [0, 0, player], [0, 0, 0]]
    const add7 = (player) => board + [[0, 0, 0], [0, 0, 0], [player, 0, 0]]
    const add8 = (player) => board + [[0, 0, 0], [0, 0, 0], [0, player, 0]]
    const add9 = (player) => board + [[0, 0, 0], [0, 0, 0], [0, 0, player]]
    return { add1, add2, add3, add4, add5, add6, add7, add8, add9 };
})();



console.log(gameBoard.add1(sean))
console.log(gameBoard.add3(jackie))

/*
HOW THE GAMEBOARD IS DESIGNED
-----------------------------
Each cell in the gameboard will hold a particular value. If the cell is empty or 0, it has not been played yet.
To play a turn, you will add a player's object to that cell.

[1] [2] [3]
[4] [5] [6]
[7] [8] [9]

This will be created by 3 arrays
1.) [1], [2]. [3]
2.) [4], [5], [6]
3.) [7], [8], [9]


Despite it being held in a series of 1x3 arrays, it will make sense when visualizing this graphic.

To start the game, you will have an empty array

[0] [0] [0] 
[0] [0] [0] 
[0] [0] [0] 

To play a turn, for instance, X plays in slot 1. You will add the following array to the empty gameboard:

[0] [0] [0]   [X] [0] [0]   [X] [0] [0] 
[0] [0] [0] + [0] [0] [0] = [0] [0] [0] 
[0] [0] [0]   [0] [0] [0]   [0] [0] [0] 

To play the second turn, for instance, O plays in slot 3. You will add the following array:

[X] [0] [0]   [0] [0] [O]   [X] [0] [O] 
[0] [0] [0] + [0] [0] [0] = [0] [0] [0] 
[0] [0] [0]   [0] [0] [0]   [0] [0] [0] 

Hence the function names: add1, add2, add3... signifying adding that player's object to that particular cell.
*/
