let row = 100;
let column = 100;
let isMouseDown = false;
let color = "black";

let grid = document.querySelector("#grid");

let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", clear);


let colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("input", colorChange);

for(let i = 1; i <= row * column; i++){
    const gridBox = document.createElement("div");
    gridBox.setAttribute("class", "grid-box");
    grid.appendChild(gridBox);
    gridBox.addEventListener("mousedown", () => {isMouseDown = true;});
    gridBox.addEventListener("mouseup", () => { isMouseDown = false; });
    gridBox.addEventListener("mouseover", draw);
}

const squares = document.querySelectorAll(".grid-box");

function draw(e){
    if(isMouseDown){
        e.target.style.backgroundColor = color;
    }
}

function clear(){
    squares.forEach(square => {square.style.backgroundColor = "white"});
}

function colorChange(){
    color = colorPicker.value;
}
