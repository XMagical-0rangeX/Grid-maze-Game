// TITLE

//create arry to represent grid
let grid = createGridArray();

//Add player to grid array
let player = {
    row: 9,
    col: 4,
}

grid[player.row][player.col] = 2;

//create divs to model the grid array
createDivGrid(grid);

//key event listeners
document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
    if (event.code === "ArrowRight" && player.col < 9 && grid[player.col+1] !=1) {
        updatePlayer(player.row, player.col + 1);
    } else if (event.code === "ArrowLeft" && player.col > 0 && grid[player.col-1] !=1) {
        updatePlayer(player.row, player.col - 1);
    } else if (event.code === "ArrowUp" && player.row > 0 && grid[player.row-1] != 1) {
        updatePlayer(player.row - 1, player.col)
    } else if (event.code === "ArrowDown" && player.row < 9 && grid[player.row+1] != 1) {
        updatePlayer(player.row + 1, player.col)
    }
}
function updatePlayer(newRow, newCol) {
    //remove from current location
    let cellId = "cell" + player.row + "-" + player.col;
    document.getElementById(cellId).classList.remove("player");

    // set grid array to 0 for current location
    grid[player.row][player.col] = 0;

    //update player location
    player.row = newRow
    player.col = newCol;
    cellId = "cell" + player.row + "-" + player.col;
    document.getElementById(cellId).classList.add("player");
    grid[player.row][player.col] = 2;
}