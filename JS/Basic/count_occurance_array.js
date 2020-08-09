// Count the occurrences of a value in an array

let array = [2, 1, 3, 3, 2, 3];

const count = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

console.log(count(array, 2));

// Count the occurrences of array elements

const countElement = (arr) =>
  arr.reduce((prev, cur) => ((prev[cur] = ++prev[cur] || 1), prev), {});

console.log(countElement(array));
