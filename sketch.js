// Block Blast
// Cherry Gupta
// Due sometime in january!!!


let grid = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

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

const GRID_SIZE = 8;
let cellSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
}

function draw() {
  background(220);
  //draw the grid
  displayGrid();

  circle(mouseX, mouseY, 100);
}


// display the grid
function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 0) {
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

// make the drag and drop block section
 

// clear the rows if they all get full
function rowCleared(){

  //idk if this approach will even work
  for (let y = 0; y < GRID_SIZE; y++) {
    if(grid[y] === 1){
      grid[y] === 0;
    }
  }

  for (let x = 0; x < GRID_SIZE; x++) {
    if(grid[x] === 1){
      grid[x] === 0;
    }
  }

  // another approach I could try
  cellCounter = 0;

  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      // idk
    }
  }
}



// 
