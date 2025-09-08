// JavaScript Type Conversion Exercises | This is only solution file, exercise details are in the drills4.html
// Date: 29-August-2025 : Friday : 10:00 AM.

// Exercise 1: Implicit Type Conversion (Coercion)

// 1. Number + String
let num = 55; // var contains a number.
let str = 'Hamza'; // var contains a string.
console.log(str + num); // concatenate hamza55.
// Additonal drill.
console.log('22' + 55); // 2255 
// if either operand is a string, JS converts the other to string and concatenates.

// 2. String - Number
console.log('NaN' - 2)// NaN = Not a number
console.log('23' - 3); // 20: '23' is numeric → JS converts string to number → 20.
console.log('abc123' - 2); // NaN
// Key idea: subtraction forces numeric conversion.

// 3. Boolean + Number
console.log(true + 1); // 2 because boolean numberic is 1
console.log(false + 1); // 1 because default value of false is 0.
// Key idea reinforced: Booleans convert to numbers automatically in arithmetic operations.

// 4. String * String
let str1 = 'Hamza'; // var contains str
let str2 = 'kashif'; // var contains a str
console.log(str1 * str2); //NaN
// but this may work..
console.log('12' * '2'); // force conversion to the number.

//5. Number / String
console.log('hamzeee' / 2); // NaN; because you can't divide a string
// but this will work.. force conversion, numeric string to number.
console.log('12' / 2); // 6, force conversion.
// lets divide a number with a string..
console.log(50 / 'hamzee'); // NaN because hamzee is string,
console.log(100 / '50') // 2 force conversion to number
// Key takeaway reinforced: /, *, - always coerce strings to numbers if possible; otherwise NaN.

// Exercise 2: Explicit Type Conversion

// 1. Strings to numbers
let age = '25'; // var contains a string as number value
console.log(Number(age)); // converted to number using number function

// 2. Numbers to strings
let userAge = 23; // var contains a number as a value
let convert = String(userAge); // convert to string using String function
console.log(convert); //23 is a string
// lets type check of convert variable
console.log(typeof convert); // string
// actually we dont need to declare a seprate variable to convert num to string
console.log(String(userAge)); // work same as convert variable does. | Shortcode
//Key idea: Explicit conversion functions can be used inline or stored in variables depending on need.

// 3. Different values to boolean
let isGreater = 4 > 0; // eqaulity check
console.log(isGreater); // true because 4 is greater than 0
let isLess = 5 > 8;
console.log(isLess); // false because 8 is greater than 4
// Key idea; any comparison or logical operation automatically produces a Boolean.

// Exercise 3: Understanding NaN

// 1. Converting non-numeric strings to numbers
let noNumber = 'hamza22'; // var contain a string with alphabets and numbers
let convertToNum = Number(noNumber); // converting using Number function.
console.log(convertToNum); // NaN because noNumber var contains alphabet strings

// 2. Invalid arithmetic operations
var nameOne = 'Hamza'; // contains a string
var nameTwo = 'Baloch'; // var contains a string.
// you cant perform arithmetic operations on strings because its invalid
console.log(nameOne * nameTwo); // NaN 

// 3. 0 / 0
console.log( 0 / 0); // NaN.  0/0 doesn't have a single, well-defined value.
// before this exercise i thought answer will be infinity but its NaN

// Exercise 4: Truthy and Falsy Values

// 1. 0 "0" "" "false" {} [] NaN ' '
console.log(Boolean(0)); // false;
console.log(Boolean("0")); // true
console.log(Boolean("")); // false
console.log(Boolean('false')); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(' ')); // true


