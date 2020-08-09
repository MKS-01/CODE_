// console.time("factorial test");

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(99));

// console.timeEnd("factorial test");
