function createGridArray() {
    //create and return grid
    return [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
}

function createDivGrid(grid){
    for(row = 0; row <10;row++){
        for (col = 0; col<10;col++){
            //create div for each element in 2d grid
            let divEl = document.createElement("div");

            //Add class to each div element
            if (grid[row][col] === 1){
                divEl.classList.add("grey");
            } else if (grid[row][col] === 2){
                divEl.classList.add("player");
            }
            //add id to cell
            divEl.id = "cell" + row +"-"+col;

            //add dataset values with row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col;

            //add event listener
            divEl.addEventListener("click", cellClicked);
            //add div container
            document.getElementById("container").append(divEl);
        }
    }
    
}
function cellClicked(event){
    //set color of clicked cell

    //get value of color selected
    let color = document.getElementById("cell-color").value;

    //get row and col of clicked cell
    let row = event.target.dataset.row;
    let col = event.target.dataset.col;

    if (row != player.row && col != player.col){
    //update clicked cell based on selected color
    event.target.classList = ""; //empty cell classlist
    grid[row][col] = 0; //Set grid to white
    if (color === "grey"){
        event.target.classList.add("grey");
        grid[row][col] = 1; //Set grid to grey
    }}
}