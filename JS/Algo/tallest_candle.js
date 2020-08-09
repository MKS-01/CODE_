let arr = [2, 4, 1, 4];

function tallestCandle(arr) {
  let max = Math.max(...arr);

  let filter = arr.filter(value => value === max);

  return filter.length;
}

console.log(tallestCandle(arr));
