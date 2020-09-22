// 4. nth Triangular Number

function triangle(n) {
  if (n < 1) {
    return 1;
  }

  return n + 1 + triangle(n - 1);
}

console.log(triangle(5));
