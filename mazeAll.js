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

//All maze paths

function findAllPaths(x, y, path, maze) {
  if (
    x < 0 ||
    y < 0 ||
    y >= maze.length ||
    x >= maze[y].length ||
    maze[y][x] === '*'
  ) {
    return [];
  }

  if (maze[y][x] === 'e') {
    return [path];
  }
  maze = maze.map((row) => [...row]);

  maze[y][x] = '*';
  return [
    ...findAllPaths(x + 1, y, path + 'R', maze),
    ...findAllPaths(x - 1, y, path + 'L', maze),
    ...findAllPaths(x, y - 1, path + 'U', maze),
    ...findAllPaths(x, y + 1, path + 'D', maze),
  ];
}

console.log(findAllPaths(0, 0, '', maze));
