const container = document.querySelector("#container");

createGrid()

function createGrid() {

    //const input = document.createElement(in)
    const numRows = 30; // Number of rows (or columns) in the grid
    const num = numRows * numRows; // Total number of squares
    const containerSize = 600; // Container width (fixed size for this example)
    
    // Calculate the size of each square
    const squareSize = containerSize / numRows;
    //prompt("Grid Size :");
    for (let i = 0; i < num; i++){
    const content = document.createElement("div")
    content.classList.add("content");
    content.style.boxSizing = "border-box"
    content.style.border = "1px solid lightgray"
    content.style.width = `${squareSize}px`
    content.style.height = `${squareSize}px`
    container.appendChild(content)
}
}