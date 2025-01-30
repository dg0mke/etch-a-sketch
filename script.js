const grid = document.querySelector(".grid-container");
const btnGenerator = document.querySelector(".btn-generator");
const btnClear = document.querySelector(".btn-clear");
const DEFAULT_GRID_SIZE = 10;

function getRandomColor() {
    // Every color channel has range from 0 to 255
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

function generateGrid(size) {
    // Create empty grid
    grid.textContent = "";

    for (let i = 0; i < size; i++) {
        const rows = document.createElement("div");
        rows.classList.add("rows");
    
        grid.appendChild(rows);
    
        for (let j = 0; j < size; j++) {
            const cols = document.createElement("div");
            cols.classList.add("cols");
    
            rows.appendChild(cols);
            // Size of single cell depends on the grid dimensions and the number of rows and columns
            cols.style.width = (grid.clientWidth / size) + "px";
            cols.style.height = (grid.clientHeight / size) + "px";
            
            cols.addEventListener("mouseover", () => {
                cols.style.backgroundColor = getRandomColor();
            });
        }
    }
}

generateGrid(DEFAULT_GRID_SIZE);

btnGenerator.addEventListener("click", () => {
    while (true) {
        const gridSize = parseInt(prompt("Enter grid size (max size of 100): "));

        // Limit user input
        if (gridSize > 0 && gridSize <= 100) {
            generateGrid(gridSize);
            break;
        } else if (gridSize > 100) {
            alert("Grid size limit exceeded. Try again!");
        } else {
            alert("Invalid input. Try again!");
        }
    }
});

btnClear.addEventListener("click", () => {
   const currentGridSize = grid.children.length;

   generateGrid(currentGridSize);
});