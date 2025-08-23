// Day 5 - JavaScript Data Types Solutions

// Number Basics
let price = 19.99;
let quantity = 3;
let total = price * quantity;
alert("Total cost: " + total.toFixed(2));

// BigInt
let big = 123456789012345678901234567890n;
alert(big);

// String Interpolation
let user = "Hamza";
let age = 25;
let hobby = "Gaming";
alert(`Hello I am ${user}, my age is ${age} and I love ${hobby}.`);

// Boolean Comparisons
let isAdult = age >= 18;
alert(isAdult);

// Null and Undefined
let userName;
let car = null;
alert(userName);
alert(car);

// typeof Checks
alert(typeof null);        // "object"
alert(typeof undefined);   // "undefined"
alert(typeof isAdult);     // "boolean"
alert(typeof big);         // "bigint"
alert(typeof hobby);       // "string"
