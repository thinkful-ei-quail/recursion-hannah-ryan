let altMaze = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// Given a 2D array representing a maze with the following constraints:
// - cells with zero (0) values represent walls
// - cells with number one (1) values represent paths
// - cells with number two (2)  represents the exit of our maze.

// Write an program that takes two parameters, a 2D array (the maze) and initial position (r, c) where we start traversing. The program should output every step from point (r, c) to the maze exit (cell with value 2)

function MazeSolver(maze) {
  this.maze = maze;
}

MazeSolver.prototype.traverseMaze = function (row, col) {
  if (this.maze[row][col] === 2) {
    console.log('We solved the maze at (' + row + ', ' + col + ')');
    return;
  } else {
    if (this.maze[row][col] === 1) {
      console.log('At valid position (' + row + ', ' + col + ')');
      this.maze[row][col] = 9;
      if (row < this.maze.length - 1) {
        this.traverseMaze(row + 1, col);
      }
      if (col < this.maze[row].length - 1) {
        this.traverseMaze(row, col + 1);
      }
      if (row > 0) {
        this.traverseMaze(row - 1, col);
      }
      if (col > 0) {
        this.traverseMaze(row, col - 1);
      }
    }
  }
};

var s = new MazeSolver(altMaze);
s.traverseMaze(2, 2);
