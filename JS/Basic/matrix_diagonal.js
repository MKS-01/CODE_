function matrixDiagonalSums(matrix) {
  let diagonal1 = 0,
    diagonal2 = 0;

  for (let row = 0; row < matrix.length; row++) {
    diagonal1 += matrix[row][row];
    diagonal2 += matrix[row][matrix.length - row - 1];
  }
  console.log(diagonal1 + ", " + diagonal2);
}

let myMatrix1 = [[20, 40], [10, 60]];
let myMatrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

matrixDiagonalSums(myMatrix1); // should output 80, 50
matrixDiagonalSums(myMatrix2); // should output 15, 15
