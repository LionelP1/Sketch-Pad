const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 32;
const DEFAULT_MODE = 'color';
const DEFAULT_BACKGROUND_COLOR = 'white';


let isMouseDown = false;
let drawingColor = DEFAULT_COLOR;
let size = DEFAULT_SIZE;
let backgroundColor = DEFAULT_BACKGROUND_COLOR;
let mode = DEFAULT_MODE;

const grid = document.querySelector("#grid");
const clearButton = document.querySelector("#clearButton");
const colorPicker = document.querySelector("#colorPicker");
const backgroundPicker = document.querySelector("#backgroundPicker");

clearButton.addEventListener("click", () => backgroundColorChange(backgroundColor));
colorPicker.addEventListener("input", (e) => {colorChange(e.target.value)});
backgroundPicker.addEventListener("input", (e) => {backgroundColorChange(e.target.value)});

createGrid(DEFAULT_SIZE);
const squares = document.querySelectorAll(".grid-box");

function colorChange(newColor){
  drawingColor = newColor;
}



function backgroundColorChange(newbackgroundColor){
  backgroundColor = newbackgroundColor;
  setGridColor(newbackgroundColor);
}

function setGridColor(newbackgroundColor){
  squares.forEach(square => {square.style.backgroundColor = newbackgroundColor});
}


function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('grid-box');
    gridBox.addEventListener("mousedown", () => {isMouseDown = true;});
    gridBox.addEventListener("mouseup", () => { isMouseDown = false; });
    gridBox.addEventListener("mouseover", changeColor);
    grid.appendChild(gridBox);
  }
}


function changeColor(e) {
  if(isMouseDown){
    e.target.style.backgroundColor = drawingColor;
  }
}


