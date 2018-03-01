
var config = {
        bluePlayerName: "Player 1",
        redPlayerName: "Player 2",
        startingPlayer: "blue", // Choose 'blue' or 'red'.
        takenMsg: "This position is already taken. Please make another choice.",
        drawMsg: "This game is a draw.",
        playerPrefix: "Current Player is : ",
        winPrefix: "The winner is: ",
        countToWin: 4,
    };

// Define the empty board as a two-dimensional array, full of zeros. In our
// game, 0 represents empty, 'red' represents a red disc, and 'blue' represents
// a blue disc.
var board = [[0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0]];

// Set the starting player.
var currentPlayer = config.startingPlayer;
