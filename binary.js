function toBinary(x) {
  if (x < 0) {
    throw new Error('Only enter positive numbers');
  }
  if (x <= 1) {
    return x.toString();
  }

  const leastSignificantBit = (x % 2).toString();
  const restOfBits = Math.floor(x / 2);

  return toBinary(restOfBits) + leastSignificantBit;
}

console.log(toBinary(33225));

// Each bit makes a power of 2

// console.log(2 ** 0); // 1
// console.log(2 ** 1); // 2
// console.log(2 ** 2); // 4
// console.log(2 ** 3); // 8

/*
8  4  2  1
-----------
0  0  0  1  --> 0 * 8 + 0 * 4 + 0 * 2 + 1 * 1 = 1
0  0  1  0  --> 2
0  1  1  0  --> 6
1  0  1  0
1  1  1  1



*/
