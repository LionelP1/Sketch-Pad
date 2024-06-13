const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 32;
const DEFAULT_MODE = "drawing";
const DEFAULT_BACKGROUND_COLOR = 'white';


let isMouseDown = false;
let drawingColor = DEFAULT_COLOR;
let size = DEFAULT_SIZE;
let backgroundColor = DEFAULT_BACKGROUND_COLOR;
let mode = DEFAULT_MODE;

const grid = document.querySelector("#grid");
const clearButton = document.querySelector("#clearButton");
const eraserButton = document.querySelector("#eraserButton");
const drawingButton = document.querySelector("#drawingButton");
const colorPicker = document.querySelector("#colorPicker");
const backgroundPicker = document.querySelector("#backgroundPicker");
const sizeSlider = document.querySelector("#sizeSlider");
const sizeValue = document.querySelector("#sizeValue");

clearButton.addEventListener("click", () => backgroundColorChange(backgroundColor));
eraserButton.addEventListener("click", () => eraser());
drawingButton.addEventListener("click", () => drawing());
colorPicker.addEventListener("input", (e) => {colorChange(e.target.value)});
backgroundPicker.addEventListener("change", (e) => {backgroundColorChange(e.target.value)});
sizeSlider.addEventListener("mousemove", (e) => {changeSliderText(e.target.value)});
sizeSlider.addEventListener("change", (e) => {gridSizeChange(e.target.value)});


createGrid(DEFAULT_SIZE);

function eraser(){
  eraserButton.style.backgroundColor = "#5ab8ff";
  drawingButton.style.backgroundColor = "white";
  mode = "eraser";
}

function drawing(){
  drawingButton.style.backgroundColor = "#5ab8ff";
  eraserButton.style.backgroundColor = "white";
  mode = "drawing";

}

function colorChange(newColor){
  drawingColor = newColor;
}

function changeSliderText(newValue){
  sizeValue.textContent = `${newValue} x ${newValue}`;
}

function gridSizeChange(newSize){
  size = newSize;
  removeGrid();
  createGrid(size);
}

function backgroundColorChange(newbackgroundColor){
  backgroundColor = newbackgroundColor;
  setGridColor(newbackgroundColor);
}

function setGridColor(newbackgroundColor){
  let squares = document.querySelectorAll(".grid-box");
  squares.forEach(square => {square.style.backgroundColor = newbackgroundColor});
}

function removeGrid(){
  grid.innerHTML = '';
}

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('grid-box');
    gridBox.addEventListener("mousedown", () => {isMouseDown = true;});
    gridBox.addEventListener("mouseup", () => {isMouseDown = false; });
    gridBox.addEventListener("mouseover", changeColor);
    grid.appendChild(gridBox);
  }
}

function changeColor(e) {
  if(isMouseDown){
    if(mode === "drawing"){
    e.target.style.backgroundColor = drawingColor;
    }
    else if(mode === "eraser"){
      e.target.style.backgroundColor = backgroundColor;
    }
  }
}
