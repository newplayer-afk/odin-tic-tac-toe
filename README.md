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
