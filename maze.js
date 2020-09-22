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

let anotherMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', '*', ' ', '*', ' '],
  [' ', '*', '*', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', '*', 'e'],
];

let complicatedMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', '*', ' ', '*', ' '],
  [' ', '*', '*', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', '*', 'e'],
];

const mazeOneExit = (maze, location = [0, 0], path = '') => {
  let x = location[0];
  let y = location[1];
  //console.log(location);
  //console.log(maze);

  if (maze[x][y] === 'e') return path;
  else if (
    (maze[x][y + 1] === ' ' || maze[x][y + 1] === 'e') &&
    path[path.length - 1] !== 'L'
  ) {
    path += 'R';
    //console.log(path);
    return mazeOneExit(maze, [x, y + 1], path);
  } else if (
    maze[x + 1] &&
    (maze[x + 1][y] === ' ' || maze[x + 1][y] === 'e') &&
    path[path.length - 1] !== 'U'
  ) {
    path += 'D';
    //console.log(path);
    return mazeOneExit(maze, [x + 1, y], path);
  } else if (
    (maze[x][y - 1] === ' ' || maze[x][y - 1] === 'e') &&
    path[path.length - 1] !== 'R'
  ) {
    path += 'L';
    //console.log(path);
    return mazeOneExit(maze, [x, y - 1], path);
  } else if (
    maze[x - 1] &&
    (maze[x - 1][y] === ' ' || maze[x - 1][y] === 'e') &&
    path[path.length - 1] !== 'D'
  ) {
    path += 'U';
    //console.log(path);
    return mazeOneExit(maze, [x - 1, y], path);
  }
};

console.log(mazeOneExit(mySmallMaze));
