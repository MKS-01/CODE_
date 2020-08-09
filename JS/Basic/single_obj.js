const toObj = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

console.log(
  toObj(
    [
      { id: "1", name: "Alpha", gender: "Male" },
      { id: "2", name: "Bravo", gender: "Male" },
      { id: "3", name: "Charlie", gender: "Female" },
    ],
    "id"
  )
);
