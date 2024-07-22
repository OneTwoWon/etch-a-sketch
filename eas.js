const container = document.querySelector("#container");
const center = document.querySelector("#input");
let temp;
const input = document.createElement("input");
input.placeholder = "Enter grid size";
input.style.border = "2px solid #DB0000";
input.style.outline = "none";
input.style.padding = "8px";
input.style.borderRadius = "2px";
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
    for (let i = 0; i < num; i++){
    const content = document.createElement("div");
    content.classList.add("content");
    content.style.boxSizing = "border-box";
    content.style.border = "1px solid #eeeeee";
    content.style.width = `${squareSize}px`;
    content.style.height = `${squareSize}px`;
    content.dataset.hoverCount = 0;
    content.addEventListener("mouseenter", hover);
    container.appendChild(content);
}
}

let system = "colorred"

function red(){system = "colorred"}
function rgb(){system = "rgb"}
function progressive(){system = "progressive"}

let opacity = 0

function hover(event) {
    const target = event.target;
    if (system === "colorred") {
        target.style.backgroundColor = `rgba(219, 0, 0, 1)`;
    } else if (system === "rgb") {
        target.style.backgroundColor = random_rgba();
    } else if (system === "progressive") {
        let hoverCount = parseInt(target.dataset.hoverCount);
        if (hoverCount < 10) {
            hoverCount++;
            target.dataset.hoverCount = hoverCount;
            const intensity = (hoverCount * 10);
            target.style.backgroundColor = `rgba(219, 0, 0, ${intensity / 100})`;
        }
    }
}

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
