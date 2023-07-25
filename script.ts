// Create variables for all dom elements
const container = document.querySelector('div.container');
const colorPicker = document.querySelector('input#color') as HTMLInputElement;
const singleColorBtn = document.querySelector('button.single-color') as HTMLInputElement;
const randomColorBtn = document.querySelector('button.random-color') as HTMLInputElement;
const eraserBtn = document.querySelector('button.eraser') as HTMLInputElement;
const clearBtn = document.querySelector('button.clear') as HTMLInputElement;
const gridSizeSelector = document.querySelector('input#grid-size') as HTMLInputElement;
// Create a variable for holding the fill mode
let fillMode = 'same';
let gridSize = 16;
// Create a function for creating the grid inside the container
const generateGrid = (gridSize:number) => {
    // First clear all existing elements inside container
    container?.childNodes.forEach(child => child.remove());
    // The function takes an input which specifies the grid size
    // then it creates a loop with gridSize number of iterations
    // In each iteration it creates a div and appends it to container div.
    const totalCells = gridSize * gridSize;
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseleave', changeColor);
        container?.appendChild(cell);
    }
}
// Create a helper function that generates a random number between 0 to 255;
const generateRandomNumber = () => Math.floor(Math.random() * 255);
// Create a helper function that returns a string holdging color value 
// based on the fillMode value
const generateColorString = () => {
    if (fillMode === "same") {
        return colorPicker.value;
    };
    if (fillMode === "random") {
        return `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
    };
    return '#ffffff'
}
// Create a function which changes the fillMode value when an
// appropriate button is clicked
const changeFillMode = (e:MouseEvent) => {
    fillMode = (e.target as HTMLInputElement).value;
}
// Create a function to clear the grid
const clearGrid = () => {
    container?.childNodes.forEach(cell => (cell as HTMLElement).style.backgroundColor = '#ffffff')
}
// Create a function that changes the default value of gridSize based on user input
function changeGridSize (this: HTMLInputElement, ev:Event) {
    gridSize = Number(this.value);
    generateGrid(gridSize);
}
// Create a function that changes the color of the grid cell when hovered
const changeColor = (e:MouseEvent) => {
    (e.target as HTMLElement).style.backgroundColor = generateColorString();
};

// Tie up the event handlers to event listeners
[singleColorBtn, randomColorBtn, eraserBtn].forEach(btn => btn.addEventListener('click', changeFillMode));

clearBtn.addEventListener('click', clearGrid);

gridSizeSelector.addEventListener('input', changeGridSize);

generateGrid(gridSize);