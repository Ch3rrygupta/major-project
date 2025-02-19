// Block Blast!
// Cherry Gupta
// Jan 21, 2025

// Project Description:
// Recreate a simpler and computer version of block blast! 
// In this game the objective is so reach the highest score possible by filling up rows and columns in a grid with random block shapes given to user my the code.



// Block Class, will manage everything to do with blocks
class Block {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.isDragging = false;
  }

  // checking if a point is somewhere in the block
  containsPoint(px, py, cellSize) {
    for (let row = 0; row < this.shape.length; row++) {
      for (let col = 0; col < this.shape[row].length; col++) {
        if (this.shape[row][col] === 1) {
          let x = this.x + col * cellSize;
          let y = this.y + row * cellSize;
          if (px > x && px < x + cellSize && py > y && py < y + cellSize) {
            return true;
          }
        }
      }
    }
    return false;
  }
}


// game class, manages everything to do with the gameplay
class Game {
  constructor(gridSize, cellSize) {
    this.gridSize = gridSize;
    this.cellSize = cellSize;
    this.grid = [];
    this.currentBlocks = [];
    this.score = 0;
    this.highScore = 0;
    this.draggedBlock = null;
    this.offset = { x: 0, y: 0 };
    this.colors = ["pink","yellow", "purple", "green", "blue", "orange"];
    this.state = "start"; // start, playing, end
    
  }

  // sets all data for grid
  initializeGrid() {
    for (let i = 0; i < this.gridSize; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.gridSize; j++) {
        this.grid[i][j] = 0;
      }
    }
  }

  // generate the blocks
  generateBlocks() {
    this.currentBlocks = [];
    for (let i = 0; i < 3; i++) {
      let randomIndex = floor(random(blockShapes.length));
      let shape = blockShapes[randomIndex];
      let color = this.colors[i % this.colors.length];
      let block = new Block(shape, color);
      block.x = this.gridSize * this.cellSize + 40;
      block.y = 100 + i * 120;
      this.currentBlocks.push(block);
    }
  }

  // draw the grid
  drawGrid() {
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        // navy when square value is 0,  gold when it is filled
        fill(this.grid[i][j] ? "gold" : "navy");
        stroke(0);
        rect(j * this.cellSize + 20, i * this.cellSize + this.cellSize, this.cellSize, this.cellSize);
      }
    }
  }

  // draw the blocks
  drawBlocks() {
    for (let block of this.currentBlocks) {
      for (let row = 0; row < block.shape.length; row++) {
        for (let col = 0; col < block.shape[row].length; col++) {
          if (block.shape[row][col] === 1) {
            let x = block.x + col * this.cellSize;
            let y = block.y + row * this.cellSize;
            fill(block.color);
            stroke(0);
            rect(x, y, this.cellSize, this.cellSize);
          }
        }
      }
    }
  }


  // display the scores in the screen
  displayScore() {
    fill(255, 222, 0);
    textSize(16);
    text("Score: " + this.score, this.gridSize * this.cellSize + 100, 50);
    text(" 👑 High Score: " + this.highScore, this.gridSize * this.cellSize + 100, 70);
  }


  // check if the block can be placed in a spot
  canPlaceBlock(block, gridX, gridY) {
    for (let row = 0; row < block.shape.length; row++) {
      for (let col = 0; col < block.shape[row].length; col++) {
        
        if (block.shape[row][col] === 1) {
          let x = gridX + col;
          let y = gridY + row;
          if (
            x < 0 ||
            x >= this.gridSize ||
            y < 0 ||
            y >= this.gridSize ||
            this.grid[y][x] === 1
          ) {
            return false;
          }
        }
      }
    }
    return true;
  }


  // places the block after checking if it can even be placed
  placeBlock(block) {
    let gridX = floor((block.x - 20) / this.cellSize);
    let gridY = floor((block.y - this.cellSize) / this.cellSize);

    // checks if block can be placed
    if (this.canPlaceBlock(block, gridX, gridY)) {
      for (let row = 0; row < block.shape.length; row++) {
        for (let col = 0; col < block.shape[row].length; col++) {
          if (block.shape[row][col] === 1) {
            this.grid[gridY + row][gridX + col] = 1;
          }
        }
      }
      this.currentBlocks.splice(this.currentBlocks.indexOf(block), 1);
      this.checkRowsAndColumns();
      if (this.currentBlocks.length === 0) {
        this.generateBlocks();
      }
    }
  }

  // check if there are any rows and colums that are full
  checkRowsAndColumns() {
    for (let i = 0; i < this.gridSize; i++) {
      if (this.grid[i].every((cell) => cell === 1)) {
        this.grid[i] = this.grid[i].map(() => 0);
        this.score += this.gridSize;
        
      }
    }
    for (let j = 0; j < this.gridSize; j++) {
      if (this.grid.every((row) => row[j] === 1)) {
        for (let i = 0; i < this.gridSize; i++) {
          this.grid[i][j] = 0;
        }
        this.score += this.gridSize;
        
      }
    }
  }

  // checks if there are any moves left
  canPlaceAnyBlock() {
    for (let block of this.currentBlocks) {
      for (let y = 0; y < this.gridSize; y++) {
        for (let x = 0; x < this.gridSize; x++) {
          if (this.canPlaceBlock(block, x, y)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  // draw the start screen
  drawStartScreen() {
    background(70, 100, 185);
    fill(255, 222, 0);
    textAlign(CENTER, CENTER);
    textSize(60);
    text("BLOCK BLAST", width / 2, height / 2 - 50);
    textSize(24);
    text("Click to Start", width / 2, height / 2);
  }

  // draws the ending screen
  drawEndScreen() {
    background(70, 100, 185);
    fill(255, 222, 0);
    textAlign(CENTER, CENTER);
    textSize(60);
    text("NO SPACES LEFT", width / 2, height / 2 - 50);
    textSize(24);
    text("Score: " + this.score, width / 2, height / 2);
    text(" 👑 High Score: " + this.highScore, width / 2, height / 2 + 30);
    text("Click to Play Again", width / 2, height / 2 + 60);
  }

  // resets the game after the round is over or after the game starts
  resetGame() {
    this.score = 0;
    this.initializeGrid();
    this.generateBlocks();
    this.state = "playing";
  }

  // updates the data after each moves, checks if the game state needs to be changed
  update() {
    if (this.state === "playing" && !this.canPlaceAnyBlock()) {
      this.state = "end";
      this.highScore = max(this.highScore, this.score);
    }
  }

  // draws the game
  draw() {
    if (this.state === "start") {
      this.drawStartScreen();
    }
    else if (this.state === "playing") {
      background(70, 100, 185);
      this.drawGrid();
      this.drawBlocks();
      this.displayScore();
    }
    else if (this.state === "end") {
      this.drawEndScreen();
    }
  }
}

let game;

// Hard coding all the different block shapes
let blockShapes = [
  [
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1]
  ],
  [
    [0, 0, 1],
    [0, 0, 1],
    [1, 1, 1]
  ],
  [
    [1, 0],
    [1, 0],
    [1, 1]
  ],
  [
    [0, 1],
    [0, 1],
    [1, 1]
  ],
  [
    [1, 0],
    [1, 1]
  ],
  [
    [0, 1],
    [1, 1]
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ],
  [
    [1, 1],
    [1, 1]
  ],
  [
    [1, 1, 1],
    [0, 1, 0]
  ],
  [
    [1, 1, 1]
  ],
  [
    [1, 1, 1, 1]
  ],
  [
    [1, 1, 1, 1, 1]
  ],
  [
    [0, 1, 1],
    [1, 1, 0]
  ],
  [
    [1, 1, 0],
    [0, 1, 1]
  ],
  [[1]]
];

// initialize everuything to ensure the game looks how I want
function setup() {
  createCanvas(750, 550);
  game = new Game(8, 50);
  game.initializeGrid();
}

// using the game class to keep the draw loop clean, calls the draw after each move and check it the game state needs to update
function draw() {
  game.update();
  game.draw();
}



function mousePressed() {
  // click the start screen
  if (game.state === "start") {
    game.resetGame();
  }
  // resets the game after losing
  else if (game.state === "end") {
    game.resetGame();
  }
  else if (game.state === "playing") {
    for (let block of game.currentBlocks) {
      if (block.containsPoint(mouseX, mouseY, game.cellSize)) {
        game.draggedBlock = block;
        game.offset.x = mouseX - block.x;
        game.offset.y = mouseY - block.y;
        block.isDragging = true;
        return;
      }
    }
  }
}

// will pick up the block while the mouse it dragged
function mouseDragged() {
  if (game.draggedBlock) {
    game.draggedBlock.x = mouseX - game.offset.x;
    game.draggedBlock.y = mouseY - game.offset.y;
  }
}

// will then check if the block is in a valid spot
function mouseReleased() {
  if (game.draggedBlock) {
    game.placeBlock(game.draggedBlock);
    game.draggedBlock.isDragging = false;
    game.draggedBlock = null;
  }
}



