function getMinMax(arr) {
  let sortedArray = arr.sort((a, b) => a - b);

  let maxSet = sortedArray.slice(1);
  let minSet = sortedArray.slice(0, -1);

  let sum = sortedArray.reduce((a, b) => a + b);

  return [sum - sortedArray[sortedArray.length - 1], sum - sortedArray[0]];
}

console.log(getMinMax([1, 4, 5, 2, 3]));
