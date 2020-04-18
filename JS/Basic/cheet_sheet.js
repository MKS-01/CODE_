// https://javascript.info/
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

//function
/******************************************************************************/
function showMessage() {
  console.log("Hello everyone!");
}
showMessage();

let sum = (a, b) => a + b;
console.log("arrow func", sum(2, 3));

const func = () => {};
console.log("empty func", func);

//object
/******************************************************************************/
// let user = new Object(); // "object constructor" syntax
// let user = {}; // "object literal" syntax

let obj1 = {
  name: "abc",
  age: 23
};
let obj2 = {
  city: "mumbai"
};
let newObj = { ...obj1, ...obj2 };
console.log("merge two obj", newObj);

//interate over obj
for (let key in newObj) {
  console.log(key, ":", newObj[key]);
}

/*
Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow to take the key
from a variable, like obj[varWithKey].
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.*/

// There are many other kinds of objects in JavaScript:
//
// Array to store ordered data collections,
// Date to store the information about the date and time,
// Error to store the information about an error.
// …And so on.

//array
/******************************************************************************/
//declaration
// let arr = new Array();
// let arr = [];

let arr = [1, 6, 2, 8, 10, 2];

console.log("array:", arr);

console.log("first element:", arr[0]); //retreive selected value

arr[3] = 5;
console.log("replace array:", arr); //replace an element

console.log("count array length:", arr.length);

console.log("pop:", arr.pop(), arr); //Extracts the last element of the array and returns it:
console.log("push:", arr.push(100), arr); //Append the element to the end of the array:
console.log("shift:", arr.shift(), arr); //Extracts the first element of the array and returns it:
console.log("unshift", arr.unshift(200), arr); //Add the element to the beginning of the array:

//
// A queue is one of the most common uses of an array. In computer science,
//this means an ordered collection of elements which supports two operations:
//
// push appends an element to the end.
// shift get an element from the beginning, advancing the queue, so that the 2nd
//element becomes the 1st.
//

//
//There’s another use case for arrays – the data structure named stack.
// It supports two operations:
//
// push adds an element to the end.
// pop takes an element from the end.
//
