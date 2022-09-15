//Javascript


createDiv(16);

//Clear grid

function clearGrid() {
    //remove cells
    const gridCells = document.querySelectorAll('.gridCell');
    gridCells.forEach(gridCell => {gridCell.remove()});
    console.log("removing cells");
    //remove rows
    const gridRows = document.querySelectorAll('.gridRow');
    gridRows.forEach(gridRow => {gridRow.remove()});
    console.log("removing rows");
}


//Generate grid

function createDiv(gridWidth) {

    let gridHeight = gridWidth;
    let gridContainer = document.querySelector('.gridContainer');

    for (i = 1; i <= gridHeight; i++) {

        //create row
        let gridRow = document.createElement('div');
        gridRow.classList.add("gridRow" + i);
        gridRow.classList.add("gridRow");
        gridContainer.appendChild(gridRow);

        for (h = 1; h <= gridWidth; h++) {

            //create individual cells
            let gridCell = document.createElement(('div'));
            gridCell.classList.add("gridCell");
            let currentRow = document.querySelector(`.gridRow${i}`);
            currentRow.appendChild(gridCell);
        }
    }
}



//Start again button

let button = document.querySelector('button');
button.addEventListener('click', startButtonPrompt);

let newGridSize;

function startButtonPrompt() {
    
    let keepGoing = true;
    while (keepGoing == true) {

        newGridSize = +prompt("How many squares should be in the new grid? 0-100");

        if (newGridSize < 0 || newGridSize > 100) {
            alert("Out of range");
            return;
        } else if (newGridSize >= 0 || newGridSize <= 100) {
            keepGoing = false;
        } else {
            alert("Cancelled");
            return;
        }
    }
    
    clearGrid();
    createDiv(newGridSize);

    

}

