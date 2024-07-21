const container = document.querySelector("#container");
const center = document.querySelector("#input");
let temp;
const input = document.createElement("input");
input.placeholder = "Enter grid size";
input.style.border = "2px solid #DB0000";
input.style.outline = "none"; // Removes the default focus outline
input.style.padding = "8px"; // Optional: Add some padding
input.style.borderRadius = "2px"; // Optional: Rounded corners
input.style.fontFamily = "Comfortaa"
center.appendChild(input);

input.focus();

input.value="32";
createGrid()

input.addEventListener('change', createGrid);

document.getElementById("input").focus();

function createGrid() {
    if (input.value > 120){
        alert("Enter num < 120 !")
        return
    }
    if (input.value < 0){
        alert("Enter positive number !")
        return
    }
    container.innerHTML = '';
    temp = input.value;
    input.value ='';
    const numRows = temp; // Number of rows (or columns) in the grid
    const num = numRows * numRows; // Total number of squares
    const containerSize = 500; // Container width (fixed size for this example)
    
    // Calculate the size of each square
    const squareSize = containerSize / numRows;
    //prompt("Grid Size :");
    for (let i = 0; i < num; i++){
    const content = document.createElement("div")
    content.classList.add("content");
    content.style.boxSizing = "border-box"
    content.style.border = "1px solid #eeeeee"
    content.style.width = `${squareSize}px`
    content.style.height = `${squareSize}px`
    content.addEventListener("mouseenter", hover)
    container.appendChild(content)
}
}

let system = "colorred"

function red(){
    system = "colorred"
}

function rgb(){
    system = "rgb"
}

function progressive(){
    system = "progressive"
}

let opacity = 0

function hover(event){
    if (system === "colorred"){
    event.target.classList.add(system);
    }
    else if (system === "rgb"){
    event.target.style.backgroundColor = random_rgba()
    }
    else if (system === "progressive"){

    const computedStyle = window.getComputedStyle(event.target);
    const currentOpacity = parseFloat(computedStyle.opacity); // Convert opacity to a number
    let targetOppacity = currentOpacity+0.1;
    }
}

// All grid = red with opacity = 0
// everytime we hover add 0.1 to current opacity
// max opacity = 1

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 1 + ')';
}

var color = random_rgba();

function reset(){
    input.value = temp;
    createGrid()
    input.focus();
}
