# ODIN TIC-TAC-TOE

## HOW THE GAMEBOARD IS DESIGNED

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

## CONTROL FLOW LOGIC
The current turn must match the player's turn.

For instance, if Sean is player 1, and Jackie is player 2:

To start the game, if Jackie tries to play, Jackie will not be able to place her marker 
on the board since it is not her turn.

If Sean tries to play, he will be allowed to since player.turn == 1 which is equal to the current game's turn.

## CREATE PLAYER
To create a player, you need to define 3 parameters:

name, choice, turn

This will allow us to keep track of game control flow and what marker to update the webpage with.

## TEST WINS BY ROWS 

gameBoard.add(sean, 1)
gameBoard.add(jackie, 4)
gameBoard.add(sean, 2)
gameBoard.add(jackie, 5)
gameBoard.add(sean, 3)
gameBoard.view()
gameBoard.checkWin(sean)
gameBoard.checkWin(jackie)

## TEST WINS BY COLUMNS

gameBoard.add(sean, 1)
gameBoard.add(jackie, 2)
gameBoard.add(sean, 4)
gameBoard.add(jackie, 5)
gameBoard.add(sean, 7)
gameBoard.checkWin(sean)
gameBoard.checkWin(jackie)


## TEST WINS BY COLUMNS

gameBoard.add(sean, 1)
gameBoard.add(jackie, 4)
gameBoard.add(sean, 5)
gameBoard.add(jackie, 7)
gameBoard.add(sean, 9)
gameBoard.checkWin(sean)
gameBoard.checkWin(jackie)

## TEST FALSE POSITIVES

gameBoard.add(sean, 1)
gameBoard.add(jackie, 4)
gameBoard.add(sean, 2)
gameBoard.add(jackie, 5)
gameBoard.add(sean, 8)
gameBoard.checkWin(sean)
gameBoard.checkWin(jackie)

## CURRENT TO-DO LIST:

- Add displayController function when full game is implemented
- Create turn randomizer function
