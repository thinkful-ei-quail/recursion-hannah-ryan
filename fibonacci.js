// 6. Fibonacci

function fibo(n) {
  if (n < 2) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(7));

let fibonacci_series = function (n) {
  if (n === 1) {
    return [0, 1];
  } else {
    let s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci_series(3));
