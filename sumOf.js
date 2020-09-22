// Write an algorithm that calculates the sum of all the
// numbers in an array.

const sumOf = function (list) {
  // Base case
  if (list.length === 1) {
    return list[0];
  }
  // General case
  return list[0] + sumOf(list.slice(1));
};

let lst = [2, 4, 6, 8, 10];
console.log(sumOf(lst));
