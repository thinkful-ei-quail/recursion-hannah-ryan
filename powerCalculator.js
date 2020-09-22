//2 Power Calculator

function powerCalculator(x, n) {
  if (n === 0) {
    return 1;
  } else if (n % 2 === 0) {
    const y = powerCalculator(x, n / 2);
    return x * y;
  } else {
    return x * powerCalculator(x, n - 1);
  }
}

const aNumber = powerCalculator(100, 2);
console.log(aNumber);
