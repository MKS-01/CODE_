// function array_sum_divisible(n, k, ar) {
//   let count = 0;
//
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (ar[i] < ar[j] && (ar[i] + ar[j]) % k === 0) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(array_sum_divisible(6, 5, [1, 2, 3, 4, 5, 6]));

function divisibleSumPairs(n, k, ar) {
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    console.log("loop", ar[i]);

    console.log("ccchecck", ar.slice(i + 1, n));
    result += ar.slice(i + 1, n).filter((item, index) => {
      if ((item + ar[i]) % k === 0) {
        console.log("item", item);
        return item;
      }
    }).length;
  }
  console.log("result", result);
  return result;
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
