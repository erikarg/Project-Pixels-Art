const boardMinimumSize = 5;
const colors = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');
const button = document.getElementById('clear-board');
const generateButton = document.getElementById('generate-board');

function createPixelBoard(size) {
  for (let index = 0; index < size; index += 1) {
    const divFather = document.createElement('div');
    pixelBoard.appendChild(divFather);
    for (let index2 = 0; index2 < size; index2 += 1) {
      const div = document.createElement('div');
      div.className = 'pixel';
      div.style.backgroundColor = 'white';
      divFather.appendChild(div);
    }
  }
}
createPixelBoard(boardMinimumSize);

function selectBlackAsInitialColor() {
  const black = document.getElementById('black');
  black.classList.add('selected');
}
selectBlackAsInitialColor();

function removeColor() {
  colors.forEach((color) => color.classList.remove('selected'));
  this.classList.add('selected');
}

function clickAndSelectColor() {
  colors.forEach((element) => element.addEventListener('click', removeColor));
}
clickAndSelectColor();

function paintingTheBoard({ target }) {
  let colorId;
  const selectedPixel = target;
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.contains('selected')) colorId = colors[index].id;
    if (selectedPixel.classList.contains('pixel')) selectedPixel.style.backgroundColor = colorId;
  }
}
pixelBoard.addEventListener('click', paintingTheBoard);

function erasingTheColors() {
  const pixels = document.querySelectorAll('.pixel');
  const color = 'white';
  for (let index = 0; index < pixels.length; index += 1) {
    if (pixels[index].style.backgroundColor !== color) pixels[index].style.backgroundColor = color;
  }
}
button.addEventListener('click', erasingTheColors);

function definingBoardSize() {
  const sizeInput = document.getElementById('board-size');
  if (!sizeInput.value) alert('Board inválido!');
  if (sizeInput.value < 5) sizeInput.value = 5;
  if (sizeInput.value > 50) sizeInput.value = 50;
  if (!pixelBoard) {
    createPixelBoard(sizeInput.value);
  } else {
    createPixelBoard(boardMinimumSize);
  }
}
generateButton.addEventListener('click', definingBoardSize);
