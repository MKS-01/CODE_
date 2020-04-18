// Imagine you work at a clothing store and you have a large pile of socks
//that you must pair by color before the store opens. The purpose of this
//function is to determine how many sock pairs you can pair together with
//their matching colors. The array contains integers representing the color
// type.

// let n = 7; // the array length
// let ar = [1, 2, 1, 2, 4, 4, 2];
//3

function sockMerchant(n, arr) {
  let sorted = arr.sort((a, b) => a - b);
  let pairs = 0;

  for (let i = 0; i < n - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      i += 1;
    }
  }

  return pairs;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 4, 4, 2]));
