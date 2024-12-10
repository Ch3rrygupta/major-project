// Block Blast
// Cherry Gupta
// Due sometime in january!!!


let bigLBlock = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 1, 1]
];

let medLBlock = [
  [1, 0],
  [1, 0],
  [1, 1]
];

let smallLBlock = [
  [1, 0],
  [1, 1]
];

let threeSquare = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];

let twoSquare = [
  [1, 1],
  [1, 1]
];

let tBlock = [
  [1, 1, 1],
  [0, 1, 0]
];

let threeLineBlock = [
  [1, 1, 1]
];

let fourLineBlock = [
  [1, 1, 1, 1]
];

let fiveLineBlock = [
  [1, 1, 1, 1, 1]
];

let sBlock = [
  [0, 1, 1],
  [1, 1, 0]
];

let zBlock = [
  [1, 1, 0],
  [0, 1, 1]
];

let oneSquareBlock = [
  [1]
];

let grid = [];
let gridSize = 8;
let cellSize = 50;
let currentBlocks = [];
let score = 0;
let selectedBlock = null;
let mouseOffset = { x: 0, y: 0 };

function setup() {
  createCanvas(gridSize * cellSize + 200, gridSize * cellSize);
  initializeGrid();
  generateBlocks();
}

function draw() {
  background(184,245, 255);
  drawGrid();
  drawBlocks();
  displayScore();
}

function initializeGrid() {
  for (let i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (let j = 0; j < gridSize; j++) {
      grid[i][j] = 0;
    }
  }
}

function drawGrid() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      fill(grid[i][j] ? 'pink' : 'white');
      stroke(0);
      rect(j * cellSize, i * cellSize, cellSize, cellSize);
    }
  }
}

function generateBlocks() {
  currentBlocks = [];
  for (let i = 0; i < 3; i++) {
    let block = [];
    let blockSize = int(random(1, 4)); // Random block size (1 to 3 cells)
    for (let j = 0; j < blockSize; j++) {
      block.push([j, 0]); // Simple horizontal blocks for simplicity
    }
    currentBlocks.push(block);
  }
}

function drawBlocks() {
  let xOffset = gridSize * cellSize + 20;
  for (let i = 0; i < currentBlocks.length; i++) {
    let block = currentBlocks[i];
    for (let j = 0; j < block.length; j++) {
      let x = xOffset + block[j][0] * cellSize + (i === selectedBlock ? mouseX - mouseOffset.x : 0);
      let y = 100 + i * 100 + block[j][1] * cellSize + (i === selectedBlock ? mouseY - mouseOffset.y : 0);
      fill('purple');
      stroke(0);
      rect(x, y, cellSize, cellSize);
    }
  }
}

function displayScore() {
  fill(0);
  textSize(16);
  text('Score: ' + score, gridSize * cellSize + 20, 50);
}

function mousePressed() {
  let xOffset = gridSize * cellSize + 20;
  for (let i = 0; i < currentBlocks.length; i++) {
    let block = currentBlocks[i];
    for (let j = 0; j < block.length; j++) {
      let x = xOffset + block[j][0] * cellSize;
      let y = 100 + i * 100 + block[j][1] * cellSize;
      if (mouseX > x && mouseX < x + cellSize && mouseY > y && mouseY < y + cellSize) {
        selectedBlock = i;
        mouseOffset.x = mouseX;
        mouseOffset.y = mouseY;
        return;
      }
    }
  }
}

function mouseReleased() {
  if (selectedBlock !== null) {
    placeBlock(selectedBlock);
    selectedBlock = null;
  }
}

function placeBlock(blockIndex) {
  let block = currentBlocks[blockIndex];
  let gridX = floor(mouseX / cellSize);
  let gridY = floor(mouseY / cellSize);

  if (gridX >= 0 && gridX < gridSize && gridY >= 0 && gridY < gridSize) {
    for (let i = 0; i < block.length; i++) {
      let x = gridX + block[i][0];
      let y = gridY + block[i][1];
      if (x < gridSize && y < gridSize && grid[y][x] === 0) {
        grid[y][x] = 1;
      } 
      else {
        return;
      }
    }
    currentBlocks.splice(blockIndex, 1);
    checkRowsAndColumns();
    if (currentBlocks.length === 0) {
      generateBlocks();
    }
  }
}

function checkRowsAndColumns() {
  for (let i = 0; i < gridSize; i++) {
    if (grid[i].every(cell => cell === 1)) {
      grid[i] = grid[i].map(() => 0);
      score += gridSize;
    }
    if (grid.every(row => row[i] === 1)) {
      for (let j = 0; j < gridSize; j++) {
        grid[j][i] = 0;
      }
      score += gridSize;
    }
  }
}

