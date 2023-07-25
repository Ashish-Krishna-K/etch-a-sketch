// Create variables for all dom elements
var container = document.querySelector('div.container');
var colorPicker = document.querySelector('input#color');
var singleColorBtn = document.querySelector('button.single-color');
var randomColorBtn = document.querySelector('button.random-color');
var eraserBtn = document.querySelector('button.eraser');
var clearBtn = document.querySelector('button.clear');
var gridSizeSelector = document.querySelector('input#grid-size');
var gridSizeDisplay = document.querySelector('span.grid-size-display');
// Create a variable for holding the fill mode
var fillMode = 'same';
// Create a function for creating the grid inside the container
var generateGrid = function (gridSize) {
    // First clear all existing elements inside container
    document.querySelectorAll('div.column').forEach(function (div) { return div.remove(); });
    // Let's display the current value of gridSize range input to the user
    if (gridSizeDisplay !== null)
        gridSizeDisplay.textContent = "".concat(gridSize, " X ").concat(gridSize);
    // We'll use nested loops, the outer loop will create columns and inner loop will create 
    // individual cell inside the column.
    for (var i = 0; i < gridSize; i++) {
        var column = document.createElement('div');
        column.classList.add('column');
        for (var j = 0; j < gridSize; j++) {
            var cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.addEventListener('mouseenter', changeColor);
            column === null || column === void 0 ? void 0 : column.appendChild(cell);
        }
        container === null || container === void 0 ? void 0 : container.appendChild(column);
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
    document.querySelectorAll('div.grid-cell').forEach(function (cell) { return cell.style.backgroundColor = '#ffffff'; });
};
// Create a function that changes the default value of gridSize based on user input
function changeGridSize(ev) {
    generateGrid(Number(this.value));
}
// Create a function that changes the color of the grid cell when hovered
var changeColor = function (e) {
    e.target.style.backgroundColor = generateColorString();
};
// Tie up the event handlers to event listeners
[singleColorBtn, randomColorBtn, eraserBtn].forEach(function (btn) { return btn.addEventListener('click', changeFillMode); });
clearBtn.addEventListener('click', clearGrid);
gridSizeSelector.addEventListener('input', changeGridSize);
generateGrid(16);
