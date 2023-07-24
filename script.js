// Create variables for all dom elements
var container = document.querySelector('div.container');
var colorPicker = document.querySelector('input#color');
var singleColorBtn = document.querySelector('button.single-color');
var randomColorBtn = document.querySelector('button.random-color');
var eraserBtn = document.querySelector('button.eraser');
var clearBtn = document.querySelector('button.clear');
var gridSizeSelector = document.querySelector('input#grid-size');
// Create a variable for holding the fill mode
var fillMode = 'same';
var gridSize = 16;
// Create a function for creating the grid inside the container
var generateGrid = function (gridSize) {
    // First clear all existing elements inside container
    container === null || container === void 0 ? void 0 : container.childNodes.forEach(function (child) { return child.remove(); });
    // The function takes an input which specifies the grid size
    // then it creates a loop with gridSize number of iterations
    // In each iteration it creates a div and appends it to container div.
    var totalCells = gridSize * gridSize;
    for (var i = 0; i < totalCells; i++) {
        var cell = document.createElement('div');
        cell.addEventListener('mouseleave', changeColor);
        container === null || container === void 0 ? void 0 : container.appendChild(cell);
    }
};
// Create a helper function that generates a random number between 0 to 255;
var generateRandomNumber = function () { return Math.floor(Math.random() * 255); };
// Create a helper function that returns a string holdging color value 
// based on the fillMode value
var generateColorString = function () {
    if (fillMode === "same") {
        return colorPicker.value;
    }
    ;
    if (fillMode === "random") {
        return "rgb(".concat(generateRandomNumber(), ", ").concat(generateRandomNumber(), ", ").concat(generateRandomNumber(), ")");
    }
    ;
    return '#ffffff';
};
// Create a function which changes the fillMode value when an
// appropriate button is clicked
var changeFillMode = function (e) {
    fillMode = e.target.value;
};
// Create a function to clear the grid
var clearGrid = function () {
    container === null || container === void 0 ? void 0 : container.childNodes.forEach(function (cell) { return cell.style.backgroundColor = '#ffffff'; });
};
// Create a function that changes the default value of gridSize based on user input
function changeGridSize(ev) {
    gridSize = Number(this.value);
    generateGrid(gridSize);
}
// Create a function that changes the color of the grid cell when hovered
var changeColor = function (e) {
    e.target.style.backgroundColor = generateColorString();
};
// Tie up the event handlers to event listeners
[singleColorBtn, randomColorBtn, eraserBtn].forEach(function (btn) { return btn.addEventListener('click', changeFillMode); });
clearBtn.addEventListener('click', clearGrid);
gridSizeSelector.addEventListener('input', changeGridSize);
