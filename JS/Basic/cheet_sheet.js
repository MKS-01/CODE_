//use strict
/*The "use strict" directive switches the engine to the “modern” mode,
 changing the behavior of some built-in features.
 supports by all the  modern browser.
 */

/*
Strict mode is enabled by placing "use strict" at the top of a script or
function. Several language features, like “classes” and “modules”, enable
strict mode automatically.
*/

//variable
let abc = 1;
var xyz = "an";

//constant
const qwe = "any";

//comments: support single line as well
/*multiline
 comments
 */

/*
There are 8 basic data types in JavaScript.

number for numbers of any kind: integer or floating-point, integers are limited by ±253.
bigint is for integer numbers of arbitrary length.
string for strings. A string may have one or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
object for more complex data structures.
symbol for unique identifiers.
The typeof operator allows us to see which type is stored in a variable.

Two forms: typeof x or typeof(x).
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.
*/

//type conversion
let num = 12;
console.log("Number  to String:", String(num)); //num to string
console.log("Number to String", num.toString(), typeof num.toString());

let str = "125";
console.log("String to Number:", Number(str)); //str to num

console.log("Boolean conversion:", Boolean(str));
console.log("Boolean conversion:", Boolean(""));

// let result = condition ? value1 : value2; //conditional operator

//operator
// OR -> ||
//AND -> &&
//not -> !

//loop
/******************************************************************************/

console.log("while loop...");
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

console.log("do while...");
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

console.log("for loop...");
for (let k = 0; k < 3; k++) {
  console.log(k);
}

// for (;;) {
//   // repeats without limits
//   console.log(6);
// }

// while – The condition is checked before each iteration.
// do..while – The condition is checked after each iteration.

//switch
let a = 2 + 2;

switch (a) {
  case 3:
    console.log("Too small");
  case 4:
    console.log("Exactly!");
  case 5:
    console.log("Too big");
  default:
    console.log("I don't know such values");
}

//array
/******************************************************************************/
//declaration
// let arr = new Array();
// let arr = [];
let arr = [1, 6, 2, 8, 10, 2];

console.log(arr);

console.log("first element:", arr[0]); //retreive selected value

arr[3] = 5;
console.log("replace array:", arr); //replace an element

console.log("count array length:", arr.length);

console.log(arr.shift(10), arr);
