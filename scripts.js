const container = document.querySelector('#container');

createGrid(16); // creating a default 16x16 grid as the page loads

function createColumns() {
    const newColumn = document.createElement('div');
    const columns = newColumn.classList;
    columns.add('columns');
    container.appendChild(newColumn);
};

function createRows(){
    const newRow = document.createElement('div');
    const rows = newRow.classList;
    rows.add('rows');
    const allColumns = container.querySelectorAll('.columns');
    allColumns.forEach(columns => columns.appendChild(newRow));
};


function createGrid (userChoice) {

    for (i = 1; i <= userChoice; i++){
        createColumns();
        for (j = 1; j <= userChoice; j++){
            createRows();
        }
    };

    const allCells = container.querySelectorAll('.rows');

    allCells.forEach(cell => cell.addEventListener('mouseover', function(){
        const cell = this.classList;
        cell.add('change-color');
}));

};

function resetGrid() {

    clearGrid();

    const newLine = "\r\n"
    const defaultValue = 16;

    const userChoice = prompt("Please input the size of grid you want." + newLine + "Note: The maximum grid size is 100.", defaultValue);

    if (userChoice <= 0) {
        alert("Please provide a valid input between 1-100");
    } else if (userChoice > 100){
         alert("Please provide a valid input between 1-100");
    } else if (!Number.isNaN(userChoice)) {
        alert("Please provide a valid input between 1-100");
    } else { createGrid(userChoice) };
};

function clearGrid() {
    const cells = container.querySelectorAll('.columns');
    cells.forEach(cell => cell.remove());
}
