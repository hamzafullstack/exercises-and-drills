// Exercise solutions. The exercise instructions are in day3drills.html

// A. Number
let number = 23; // declared number with value 23
console.log(typeof number); // number.

// A. Number
console.log(3 / 0); // infinity- dividing any num with zero returns infinity value

// A. Number
console.log('Not a Number. But a string' / 2); // NaN
// → JS cannot convert the string to a number, so it produces NaN.

// Alternative drills i try to learn more about the Numbers in JS:
console.log('23' / 2); //11.5 → numeric strings and non-numeric strings. 
//  numberic str like "23" and / divided it with any num like 2 operation will work.
console.log(typeof NaN); // number
console.log('23px' / 3); // partially numeric strings -> result is NaN
console.log(0 / 0); // NaN
console.log(' ' / 2); // 0 JS converts whitespace-only strings to 0

// A. Number
// campare NaN with NaN 
console.log(NaN == NaN); // False

// 🔀 Alternative drill:
console.log(NaN === NaN); // still returns false in strict

// B. BigInt
let theBigInt = 18228282282222222222222222n; // bigint declared
console.log(theBigInt); // bigint log

// B. BigInt
let bigInt1 = 12345678910111213n; // declared a bigint
// BigInt operations don’t mutate the original variable
// you must assign it if you want to keep the result:
bigInt1 = bigInt1 + 12345678910111213n // trying to add an bigint
console.log(bigInt1); // Result: 24691357820222426n

// B. BigInt
let normiNumber = 25;
let bigInt2 = 12345678910111213n; // declared a bigint
let convert = BigInt(normiNumber) + bigInt2; // converted using method
console.log(convert); // result: 12345678910111238n

// C. Strings
let userOne = 'John'; // string using Single Quotes. ''
let userTwo = "Elizabeth"; // string using Double Quotes. ""
let userThree = `Casandra`; // string using Backtrack Quotes ``

// C. Strings
let coderName = 'Hamza'; // declared variable assigned value Hamza
console.log(`He is ${coderName}!`); // using template literals

// C. Strings
let coder = `Ameer\nHamza`; // \n creates a line break inside the string
console.log(coder); // line break after ameer
// 🔀 Optional drills:
let theCoder = 'Ameer Hamza' // declare normal variable contains a string
console.log(`Hello ${theCoder}\nWelcome.`); // new line added after Ameer Hamza.

// D. Boolean
let bool = true; // created a boolean variable
console.log(typeof bool); // checking type result: Boolean

// D. Boolean
let isGreater = 4 > 2; // campare two nums
console.log(isGreater); // true

// D. Boolean
console.log(0 == false); // true
console.log(0 === false); // false.
// Use === almost always to avoid weird JS coercion bugs.
// == exists for legacy or very specific cases.

// E. Null & Undefined
let message; // declared a variable without assigning any value.
console.log(message); // undefined

// E. Null & Undefined
let newVariable = null; // declare var with value null.
console.log(typeof newVariable); // result: object. but in real its gotcha null bug.
// JS legacy bug; Null

// E. Null & Undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

// F. Symbol
let symbol1 = Symbol('My data'); // symbol1
let symbol2 = Symbol('My data'); // symbol2
let theSymbol = symbol1 == symbol2; // campare.
console.log(theSymbol); // false
console.log(symbol1 == symbol2); // false. aslo correct. short
console.log(symbol1 === symbol2); // false. aslo correct. short

// F. Symbol
let sym = Symbol('id') // declare var contains a symbol as a value
console.log(typeof sym); // symbol

// G. Object
// i haven't learned about objects yet.

// H. typeof Operator
// Check typeof for: number, bigint, string, boolean, undefined, null, symbol, and object.
console.log(typeof 0); // Number
console.log(typeof 10n); // bigint
console.log(typeof true); // Boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object, but in real gotcha null js legacy bug.
console.log(typeof Symbol('ID')); // Symbol
console.log(typeof {}); // object
console.log(typeof []); // object.