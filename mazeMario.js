/* eslint-disable no-console */

// 8. Find a way out of the maze

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

// 9. Find all the ways out of the maze
let traversal = function (maze, row = 0, col = 0, path = '') {
  if (row < 0 || col < 0 || row >= maze.length || col >= maze[row].length) {
    return;
  }
  console.log(row, col);
  if (maze[row][col] === 'e') {
    console.log(path);
  } else if (maze[row][col] === ' ') {
    maze[row][col] = '*';
    path += 'D';
    traversal(maze, row + 1, col, path);

    path += 'R';
    traversal(maze, row, col + 1, path);

    path += 'U';
    traversal(maze, row - 1, col, path);

    path += 'L';
    traversal(maze, row, col - 1, path);
    maze[row][col] = ' ';
  }
};

console.log(traversal(mySmallMaze));
