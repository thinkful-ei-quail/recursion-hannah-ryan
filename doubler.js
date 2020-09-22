// Take every number of an array and double it.

function doubler(arr) {
  // base case:
  if (arr.length === 0) {
    return arr;
  }

  const newArr = [];
  newArr.push(arr[0] * 2);
  const remaining = arr.slice(1);
  const doubledRemaining = doubler(remaining);
  return newArr.concat(doubledRemaining);
}

console.log(doubler([1, 2, 3, 4]));
