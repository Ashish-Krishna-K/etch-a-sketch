// Create variables for all dom elements
const container = document.querySelector('div.container');
const colorPicker = document.querySelector('input#color') as HTMLInputElement;
const singleColorBtn = document.querySelector('button.single-color') as HTMLInputElement;
const randomColorBtn = document.querySelector('button.random-color') as HTMLInputElement;
const eraserBtn = document.querySelector('button.eraser') as HTMLInputElement;
const clearBtn = document.querySelector('button.clear') as HTMLInputElement;
const gridSizeSelector = document.querySelector('input#grid-size') as HTMLInputElement;
const gridSizeDisplay = document.querySelector('span.grid-size-display');

// Create a variable for holding the fill mode
let fillMode = 'same';

// Create a function for creating the grid inside the container
const generateGrid = (gridSize:number) => {
    // First clear all existing elements inside container
    document.querySelectorAll('div.column').forEach(div => div.remove());
    // Let's display the current value of gridSize range input to the user
    if (gridSizeDisplay !== null) gridSizeDisplay.textContent = `${gridSize} X ${gridSize}`;
    // We'll use nested loops, the outer loop will create columns and inner loop will create 
    // individual cell inside the column.
    for (let i = 0; i < gridSize; i ++) {
        const column = document.createElement('div');
        column.classList.add('column');
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.addEventListener('mouseenter', changeColor);
            column?.appendChild(cell);
        }
        container?.appendChild(column);
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
const changeFillMode = (e:MouseEvent) => fillMode = (e.target as HTMLInputElement).value;

// Create a function to clear the grid
const clearGrid = () => {
    document.querySelectorAll('div.grid-cell').forEach(cell => (cell as HTMLElement).style.backgroundColor = '#ffffff');
}

// Create a function that changes the default value of gridSize based on user input
// Had to use function declaration to preserve the this context.
function changeGridSize (this: HTMLInputElement, ev:Event) {
    generateGrid(Number(this.value));
}

// Create a function that changes the color of the grid cell when hovered
const changeColor = (e:MouseEvent) => {
    (e.target as HTMLElement).style.backgroundColor = generateColorString();
};

// Tie up the event handlers to event listeners
[singleColorBtn, randomColorBtn, eraserBtn].forEach(btn => btn.addEventListener('click', changeFillMode));

clearBtn.addEventListener('click', clearGrid);

gridSizeSelector.addEventListener('input', changeGridSize);

generateGrid(16);