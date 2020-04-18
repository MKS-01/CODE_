//variable
let abc = 1;
var xyz = "an";

//constant
const qwe = "any";

//comments: support single line as well
/*multiline
 comments
 */

/*The "use strict" directive switches the engine to the “modern” mode,
 changing the behavior of some built-in features.
 supports by all the  modern browser.

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
