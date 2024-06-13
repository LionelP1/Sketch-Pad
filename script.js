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
const eraserButton = document.querySelector("#eraserButton");
const colorPicker = document.querySelector("#colorPicker");
const backgroundPicker = document.querySelector("#backgroundPicker");
const sizeSlider = document.querySelector("#sizeSlider");
const sizeValue = document.querySelector("#sizeValue");

clearButton.addEventListener("click", () => backgroundColorChange(backgroundColor));
eraserButton.addEventListener("click", () => colorChange(backgroundColor));
colorPicker.addEventListener("input", (e) => {colorChange(e.target.value)});
backgroundPicker.addEventListener("change", (e) => {backgroundColorChange(e.target.value)});
sizeSlider.addEventListener("mousemove", (e) => {changeSliderText(e.target.value)});
sizeSlider.addEventListener("change", (e) => {gridSizeChange(e.target.value)});


createGrid(DEFAULT_SIZE);

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
    if(mode === 'color'){
    e.target.style.backgroundColor = drawingColor;
    }
    else if(mode === 'eraser'){
      e.target.style.backgroundColor = drawingColor;
    }
  }
}






/*
function colorChange(newColor){
  drawingColor = newColor;
}

function backgroundColorChange(newbackgroundColor){
  backgroundColor = newbackgroundColor;
}

function gridSizeChange(newSize){
  size = newSize;

}

function modeChange(newMode){

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
*/




  /*
  const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

function setCurrentColor(newColor) {
  currentColor = newColor
}

function setCurrentMode(newMode) {
  activateButton(newMode)
  currentMode = newMode
}

function setCurrentSize(newSize) {
  currentSize = newSize
}

const colorPicker = document.getElementById('colorPicker')
const colorBtn = document.getElementById('colorBtn')
const rainbowBtn = document.getElementById('rainbowBtn')
const eraserBtn = document.getElementById('eraserBtn')
const clearBtn = document.getElementById('clearBtn')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const grid = document.getElementById('grid')

colorPicker.oninput = (e) => setCurrentColor(e.target.value)
colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
eraserBtn.onclick = () => setCurrentMode('eraser')
clearBtn.onclick = () => reloadGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function reloadGrid() {
  clearGrid()
  setupGrid(currentSize)
}

function clearGrid() {
  grid.innerHTML = ''
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    grid.appendChild(gridElement)
  }
}

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  if (currentMode === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  } else if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = '#fefefe'
  }
}

function activateButton(newMode) {
  if (currentMode === 'rainbow') {
    rainbowBtn.classList.remove('active')
  } else if (currentMode === 'color') {
    colorBtn.classList.remove('active')
  } else if (currentMode === 'eraser') {
    eraserBtn.classList.remove('active')
  }

  if (newMode === 'rainbow') {
    rainbowBtn.classList.add('active')
  } else if (newMode === 'color') {
    colorBtn.classList.add('active')
  } else if (newMode === 'eraser') {
    eraserBtn.classList.add('active')
  }
}

window.onload = () => {
  setupGrid(DEFAULT_SIZE)
  activateButton(DEFAULT_MODE)
}
  
  */