// Block Blast
// Cherry Gupta
// Due sometime in january!!!


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  circle(mouseX, mouseY, 100);
}

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


