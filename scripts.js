//Javascript


createDiv(16);

//Start again button
let button = document.querySelector('button');
button.addEventListener('click', startButtonPrompt);

function startButtonPrompt() {

    let newGridSize;
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

            gridCell.initialColor = getComputedStyle(gridCell).backgroundColor;

            gridCell.hoverColor = "rgb(253, 223, 73)";

            gridCell.addEventListener('mouseover', selectGridCell);
            

        }
    }
}

//Select a cell and process when the mouse hovers
function selectGridCell(e) {

    if (e.target.initialColor == getComputedStyle(e.target).backgroundColor) {
    e.target.style.cssText = "background-color: #FDDF49;";
    } else {

        //ten highlights until black
        //e.target.rgbDifference = divideRgbBy10(e.target.hoverColor);
        //console.log(e.target.rgbDifference);
        //let newRgbString = subtractFromRgb(getComputedStyle(e.target).backgroundColor, e.target.rgbDifference);
        //console.log(newRgbString);
        //e.target.style.cssText = "background-color: " + newRgbString + ";";

        //hover changes cell back to initial color
        e.target.style.cssText = "background-color: " + e.target.initialColor + ";";


    }


}

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

//Rgb string to array
function rgbToArray(rgb) {
    let rgbString = rgb;
    rgbString = rgbString.replaceAll(' ', '');
    rgbString = rgbString.replace('rgb(', '');
    rgbString = rgbString.replace(')', '');
    rgbString = rgbString.split(',');
    return rgbString;
}


//Subtract array from rgb string and round
function subtractFromRgb(rgbString, array) {
    let rgbArray = rgbToArray(rgbString);
    let toBeSubtracted = array;

    rgbArray.forEach(subtract);
    function subtract (currentValue, index, array) {
        array[index] = Math.round(currentValue - toBeSubtracted[index]);
    }

    let resultString = arrayToRgbString(rgbArray);

    return resultString;

    function arrayToRgbString(array) {
        let rgbArray = array;
        let rgbString = "rgb(" + rgbArray.join(", ") + ")";
        return rgbString;
    }

    function rgbToArray(rgb) {
        let rgbString = rgb;
        rgbString = rgbString.replaceAll(' ', '');
        rgbString = rgbString.replace('rgb(', '');
        rgbString = rgbString.replace(')', '');
        rgbString = rgbString.split(',');
        return rgbString;
    }
}

//Divide rbg values by 10, given an rgb string. Return an array
function divideRgbBy10(string) {
    rgbArray = rgbToArray(string);
    rgbArray.forEach(divideByTen)
    return rgbArray;

    function divideByTen(item, index, array) {
        array[index] = item / 10;
    }

    function rgbToArray(rgb) {
        let rgbString = rgb;
        rgbString = rgbString.replaceAll(' ', '');
        rgbString = rgbString.replace('rgb(', '');
        rgbString = rgbString.replace(')', '');
        rgbString = rgbString.split(',');
        return rgbString;
    }
}
