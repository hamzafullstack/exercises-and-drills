// hello world - 
// print statement in javascript
console.log('Hello JS warrior'); console.log('JS warrior');

// 2) Code structure
console.log('hello world'); console.log('Hello Hamza'); console.log('Hey Github');
// i am a comment
/* Multi 
line
comment*/

// 3) The modern mode — "use strict"
// "use strict";
// x = 2.4; // error because of use strict mode.
// no error if we remove use strict;

// 4) Variables
let x = 10;
const y = 'fixed';
// y = 'tofixed'; //TypeError: Assignment to constant variable.
var z = 5;
var z = 6; // 5 will be overwrite by 6 new data is 6
console.log(z); // 6

// 5) Data types
// creating variables to store values. let {Block variables}
let str = 'string';
let nums = 13;
let bool = true;
let nu = null;
let un;
let bigInt = 122833933393333333333333333337833438433837483n;
let sym = Symbol('id');
// checking there types using typeof
console.log(typeof str); // string
console.log(typeof nums); // number
console.log(typeof bool); // boolean
console.log(typeof nu); // object but actuall gotcha null bug
console.log(typeof un); // undefined variable
console.log(typeof bigInt); // bigint
console.log(typeof sym); // symbol

// 6) Type Conversions

// Convert string "123" to number
let numString = '123';
let num1 = Number(numString);
let num2 = +numString;
let num3 = parseInt(numString);

console.log(num1, typeof num1); // 123 'number'
console.log(num2, typeof num2); // 123 'number'
console.log(num3, typeof num3); // 123 'number'

// Convert 0, "", null, undefined, " " to Boolean
console.log(Boolean(0));      // false
console.log(Boolean(""));     // false
console.log(Boolean(null));   // false
console.log(Boolean(undefined)); // false
console.log(Boolean(" "));    // true (non-empty string)

// Convert true, false, 123, 0, NaN, "" to string
console.log(String(true));   // 'true'
console.log(String(false));  // 'false'
console.log(String(123));    // '123'
console.log(String(0));      // '0'
console.log(String(NaN));    // 'NaN'
console.log(String(""));     // ''


// finished / Completed....
