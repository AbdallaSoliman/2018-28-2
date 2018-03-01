
function addDiscToBoard(color, x_pos, y_pos) {
    board[y_pos][x_pos] = color;
}


function printBoard() {

    for (var y = 0; y <= 5; y++) {
        for (var x = 0; x <= 6; x++) {
            if (board[y][x] !== 0) {
               var cell =  document.getElementById("board").rows[y].cells[x];
               cell.getElementsByTagName('button')[0].style.backgroundColor = board[y][x];
            }
        }
    }
}


function changePlayer() {
  
    if (currentPlayer === 'blue') {
        currentPlayer = 'red';
    } else {
        currentPlayer = 'blue';
    }

    
    document.getElementById("player").innerHTML=(config[currentPlayer + "PlayerName"]);
  
}


function dropToBottom(x_pos, y_pos) {

    for (var y = 5; y > y_pos; y--) {
        if (board[y][x_pos] === 0) {
            return y;
        }
    }

    return y_pos;
}


function positionIsTaken(x_pos, y_pos) {
    var value = board[y_pos][x_pos];

    return value === 0 ? false : true;
}


function gameIsDraw() {
    for (var y = 0; y <= 5; y++) {
        for (var x = 0; x <= 6; x++) {
            if (board[y][x] === 0) {
                return false;
            }
        }
    }

 
    return true;
}


function horizontalWin() {
    var currentValue = null,
        previousValue = 0,
        connY = 0;


    for (var y = 0; y <= 5; y++) {
        for (var x = 0; x <= 6; x++) {
            currentValue = board[y][x];
            if (currentValue === previousValue && currentValue !== 0) {
                connY += 1;
            } else {

                connY = 0;
            }
            if (connY === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;
        }

 
        connY = 0;
        previousValue = 0;
    }

 
    return false;
}


function verticalWin() {
    var currentValue = null,
        previousValue = 0,
        connY = 0;

 
  
    for (var x = 0; x <= 6; x++) {
        for (var y = 0; y <= 5; y++) {
            currentValue = board[y][x];
            if (currentValue === previousValue && currentValue !== 0) {
                connY += 1;
            } else {
                // Reset the connY if you find a gap.
                connY = 0;
            }
            if (connY === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;
        }

  
        connY = 0;
        previousValue = 0;
    }

  
    return false;
}


function diagonalWin() {
    var x = null,
        y = null,
        xtemp = null,
        ytemp = null,
        currentValue = null,
        previousValue = 0,
        connY = 0;

  
    for (x = 0; x <= 6; x++) {
        xtemp = x;
        ytemp = 0;

        while (xtemp <= 6 && ytemp <= 5) {
            currentValue = board[ytemp][xtemp];
            if (currentValue === previousValue && currentValue !== 0) {
                connY += 1;
            } else {
  
                connY = 0;
            }
            if (connY === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;

  
            xtemp++;
            ytemp++;
        }
  
        connY = 0;
        previousValue = 0;
    }

 
    for (x = 0; x <= 6; x++) {
        xtemp = x;
        ytemp = 0;

        while (0 <= xtemp && ytemp <= 5) {
            currentValue = board[ytemp][xtemp];
            if (currentValue === previousValue && currentValue !== 0) {
                connY += 1;
            } else {
 
                connY = 0;
            }
            if (connY === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;

 
            xtemp--;
            ytemp++;
        }
 
        connY = 0;
        previousValue = 0;
    }

 
    for (y = 0; y <= 5; y++) {
        xtemp = 0;
        ytemp = y;

        while (xtemp <= 6 && ytemp <= 5) {
            currentValue = board[ytemp][xtemp];
            if (currentValue === previousValue && currentValue !== 0) {
                connY += 1;
            } else {

                connY = 0;
            }
            if (connY === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;


            xtemp++;
            ytemp++;
        }

        connY = 0;
        previousValue = 0;
    }


    for (y = 0; y <= 5; y++) {
        xtemp = 6;
        ytemp = y;

        while (0 <= xtemp && ytemp <= 5) {
            currentValue = board[ytemp][xtemp];
            if (currentValue === previousValue && currentValue !== 0) {
                connY += 1;
            } else {

                connY = 0;
            }
            if (connY === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;


            xtemp--;
            ytemp++;
        }

        connY = 0;
        previousValue = 0;
    }


    return false;
}
