function compareTriplate(a, b) {
  let x = 0,
    y = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      x++;
    } else if (a[i] < b[i]) {
      y++;
    }
  }
  return [x, y];
}

console.log(compareTriplate([1, 2, 3], [3, 2, 1]));
