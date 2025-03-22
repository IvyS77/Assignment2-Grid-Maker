// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = null; 

// Add a row
function addR() {
    const table = document.getElementById("grid");
    const newRow = table.insertRow();

    if (numCols === 0) {
        numCols = 1;
    }

    for (let i = 0; i < numCols; i++) {
        //modified start
        const newCell = newRow.insertCell();
        newCell.addEventListener("click",function(){
            if(colorSelected && colorSelected!=="SELECT"){
                newCell.style.backgroundColor = colorSelected;
            }
        });
        //modified end
    }

    numRows++;
}

// Add a column
function addC() {
    const table = document.getElementById("grid");
    console.log("Before addC: numRows =", numRows, "numCols =", numCols);
    if (numRows === 0) {
        addR();
        console.log("After addC (added row): numRows =", numRows, "numCols =", numCols);
        return;
    } else {
        
        for (let i = 0; i < table.rows.length; i++) {
            //modified code
            const newCell = table.rows[i].insertCell();
            newCell.addEventListener("click",function(){
                if(colorSelected && colorSelected!== "SELECT"){
                    newCell.style.backgroundColor = colorSelected;
                }
            });
        }
    }
    numCols++;
    console.log("After addC: numRows =", numRows, "numCols =", numCols);
}


// Remove a row
function removeR() {
    const table = document.getElementById("grid");

    if (numRows > 0) {
        table.deleteRow(numRows - 1);
        numRows--;

        if (numRows === 0) {
            numCols = 0;
        }
    } 
}

// Remove a column
function removeC() {
    const table = document.getElementById("grid");
    console.log("Before removeC: numRows =", numRows, "numCols =", numCols);
    if (numCols > 0) {
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(numCols - 1);
        }
        numCols--;
        if (numCols === 0) {
            while (table.rows.length > 0) {
                table.deleteRow(0);
                numRows--;
            }
        }
    }
    console.log("After removeC: numRows =", numRows, "numCols =", numCols);
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

/*

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
*/