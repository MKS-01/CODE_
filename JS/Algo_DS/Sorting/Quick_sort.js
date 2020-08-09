console.time("quickSort");
const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (list, a, b) => ([list[a], list[b]] = [list[b], list[a]]);

  let pivot = arr[start],
    pointer = start;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] < pivot) {
      pointer++;
      swap(arr, pointer, i);
    }
  }
  swap(arr, start, pointer);

  return pointer;
};

const quickSort = (arr, start = 0, end = arr.length) => {
  let pivotIndex = pivot(arr, start, end);

  if (start >= end) return arr;
  quickSort(arr, start, pivotIndex);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
};

console.timeEnd("quickSort");

const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 10];
console.log(quickSort(unsortedArr));

// console.log(quickSort([1, 5, 2, 62, 2, 6, 4]));

// Find a "pivot" element in the array to compare all other
// elements against and then shift elements before or after
// pivot depending on their values

console.time("quick");

function QuickSort(arr, left = 0, right = arr.length - 1) {
  let len = arr.length,
    index;

  if (len > 1) {
    index = partition(arr, left, right);

    if (left < index - 1) {
      QuickSort(arr, left, index - 1);
    }

    if (index < right) {
      QuickSort(arr, index, right);
    }
  }

  return arr;
}

function partition(arr, left, right) {
  let middle = Math.floor((right + left) / 2),
    pivot = arr[middle],
    i = left, // Start pointer at the first item in the array
    j = right; // Start pointer at the last item in the array

  while (i <= j) {
    // Move left pointer to the right until the value at the
    // left is greater than the pivot value
    while (arr[i] < pivot) {
      i++;
    }

    // Move right pointer to the left until the value at the
    // right is less than the pivot value
    while (arr[j] > pivot) {
      j--;
    }

    // If the left pointer is less than or equal to the
    // right pointer, then swap values
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // ES6 destructuring swap
      i++;
      j--;
    }
  }

  return i;
}

console.timeEnd("quick");
console.log(QuickSort([1, 5, 6, 52, 66, 14, -1]));
