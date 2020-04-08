function plusMinus(arr) {
  let plus = 0,
    minus = 0,
    zero = 0;

  for (let i = 0; i < arr.length; i++) {
    let sign = Math.sign(arr[i]);

    switch (sign) {
      case 1:
        plus++;
        break;
      case -1:
        minus++;
        break;
      case 0:
        zero++;
        break;
    }
  }
  console.log("plus", plus, plus / arr.length);
  console.log("minus", minus);
  console.log("zero", zero);
}

plusMinus([2, 4, -1, 0, -1, 0, 0, -3]);

// console.log(plusMinus([1, 2, 3, 0, -3, -9]));
