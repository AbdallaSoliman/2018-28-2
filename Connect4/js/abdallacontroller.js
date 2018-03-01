	flag =true;
onload= function ready(){
    config.bluePlayerName = prompt("Please enter the first player's name. This player will use black game pieces.",
     config.bluePlayerName) || config.bluePlayerName;
    config.redPlayerName = prompt("Please enter the second player's name. This player will use red game pieces.", 
    config.redPlayerName) || config.redPlayerName;
    document.getElementById("prefix").innerHTML=config.playerPrefix;
    document.getElementById("player").innerHTML=(config[currentPlayer + "PlayerName"]);
}
function play(x_pos,y_pos){
        // Trigger the game sequence by clicking on a position button on the board.
    
if(flag)
{
        // Ensure the piece falls to the bottom of the column.
        y_pos = dropToBottom(x_pos, y_pos);

        if (positionIsTaken(x_pos, y_pos)) {
            alert(config.takenMsg);
            return;
        }

        addDiscToBoard(currentPlayer, x_pos, y_pos);
        printBoard();

        // Check to see if we have a winner.
        if (verticalWin() || horizontalWin() || diagonalWin()) {
            // Destroy our click listener to prevent further play.
            flag=false;
             document.getElementById("prefix").innerHTML=config.winPrefix;
             document.getElementById('play-again').style.display = 'inline-block'; // show
            return;

        } else if (gameIsDraw()) {
            // Destroy our click listener to prevent further play.
            flag=false;
            document.getElementById("prefix").innerHTML=config.drawMsg;
            document.getElementById('play-again').style.display = 'inline-block'; // show
            return;
        }

        changePlayer();
    }
}
