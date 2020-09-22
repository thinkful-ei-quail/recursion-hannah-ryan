function solveMaze(maze) {
  console.log('Created maze object.');
  this.maze = maze;
  this.path = [];
  this.traverse = function (column, row) {
    if (this.maze[column][row] == 'e') {
      console.log(`Path to the exit: ${this.path}`);
    } else if (this.maze[column][row] == ' ') {
      this.maze[column][row] = 'X';
      if (column < this.maze.length - 1) {
        console.log('Checking down');
        // check down path
      }
      if (row < this.maze[column].length - 1) {
        console.log('Checking right');
        // check right path
      }
      if (column > 0) {
        console.log('Checking up');
        // check up path
      }
      if (row > 0) {
        console.log('Checking left');
        // check left path
      }

      // Mark path and decided direction or direction at fork.

      // Actually follow a path.
      switch (direction) {
      case 'U':
        this.path.push('U');
        this.traverse(column - 1, row);
        break;
      case 'D':
        this.path.push('D');
        this.traverse(column + 1, row);
        break;
      case 'L':
        this.path.push('L');
        this.traverse(column, row - 1);
        break;
      case 'R':
        this.path.push('R');
        this.traverse(column, row + 1);
        break;
      }
    } else {
      this.path.pop();
    }
  };
}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

//let solveSmall = new solveMaze(mySmallMaze);
//solveSmall.traverse(0, 0);

let solveBigMaze = new solveMaze(maze);
//solveBigMaze.traverse(0,0);
solveBigMaze.traverse(2, 0);
