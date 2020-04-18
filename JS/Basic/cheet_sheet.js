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
