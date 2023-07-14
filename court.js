
const gridContainer = document.getElementById("grid-container");
  
// Create the grid cells
for (let row = 0; row < 36; row++) {
  for (let col = 0; col < 19; col++) {
    // Create a new div element for each cell
    const gridCell = document.createElement("div");
    gridCell.className = "grid-cell";

    // Append the cell to the grid container
    gridContainer.appendChild(gridCell);
  }
}