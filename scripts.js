const container = document.querySelector('#container');
const userChoice = 64;

// const finalValue = userChoice * userChoice;

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

for (i = 1; i <= userChoice; i++){
    createColumns();
    for (j = 1; j <= userChoice; j++){
        createRows();
    }
};