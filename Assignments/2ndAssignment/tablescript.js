
function generateTableOfTwo() {
 const tableContainer = document.getElementById('table-container');
 const table = document.createElement('table');
    for (let i = 1; i <= 10; i++) {
     
const row = document.createElement('tr');
        
const cell1 = document.createElement('td');
cell1.textContent = `2 x ${i}`;
row.appendChild(cell1);
const cell2 = document.createElement('td');
cell2.textContent = `= ${2 * i}`;
row.appendChild(cell2);
table.appendChild(row);
    }
    
    
tableContainer.appendChild(table);
}

generateTableOfTwo();