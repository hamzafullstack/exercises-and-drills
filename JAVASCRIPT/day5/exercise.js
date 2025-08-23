// 📝 Exercises: Data Types in JS

// 01 Number Basics
/* Change the code to make sure total always shows 2 decimal places (hint: use toFixed).
let price = 19.99;
let quantity = 3;
let total = price * quantity;
alert("Total cost: " + total);
*/
let price = 19.99;
let quantity = 3;
let total = price * quantity;
alert("Total cost: " + total.toFixed(2));

// Feedback By mentor:
/*Perfect, Hamza ✅
This is exactly what I wanted to see:   
You used .toFixed(2) correctly — guarantees 2 decimal places no matter what the numbers are.
Output for 19.99 * 3 will still show 59.97, but now even if values change, it will always format as money.
You followed the principle, not just relied on default behavior.
No corrections needed here — this is spot-on.*/


/* 2 BigInt
Fix the code so it actually handles this as a BigInt, not a broken Number.
let big = 123456789012345678901234567890;
alert(big);
*/
let big = 123456789012345678901234567890n;
alert(big);

// Feedback By mentor:
/* Perfect, Hamza ✅
You correctly added the n at the end → this makes it a BigInt instead of a Number.
JavaScript can now safely handle arbitrarily large integers without losing precision.
alert(big) will display the full number correctly.
No corrections needed — this is exactly how BigInt works.*/


// 3 String Interpolation
/* Make a sentence using backticks and ${} instead of +.
let user = "Hamza";
let age = 25;
let hobby = "Gaming";
*/
let user = "Hamza";
let age = 25;
let hobby = "Gaming";
alert(`Hello I am ${user} my age is ${age} and i love ${hobby}.`);

// Feedback By mentor:
/* Perfect, Hamza ✅
You used backticks and ${} correctly — this is template literal syntax.
No + concatenation needed, everything is neat and readable.
Output: Hello I am Hamza my age is 25 and i love Gaming. */
//This is exactly how modern JS strings should be written.


// 4 Boolean Check
/* Assign isAdult to be true if age ≥ 18. Show it in an alert.
let age = 25;
let isAdult; // fill this
*/
let age = 25;
let isAdult = age >= 18; // true if age is 18 or older
alert(isAdult); // true
// Feedback By mentor:
/* Perfect, Hamza ✅
his is spot-on.
age >= 18 correctly returns a boolean, and isAdult now holds true.
alert(isAdult) will display true.
You’ve nailed the Boolean concept for now. */

// 5 Null vs Undefined
/*👉 Write an alert that clearly says which variable is undefined and which is null.
let userName;
let car = null;
*/
let userName;
let car = null;
alert(userName);
alert(car);

//Perfect, Hamza ✅
/*userName is declared but not assigned → its value is undefined.
car is explicitly set to null → represents “empty” or “unknown value”.
Alerts will show:
undefined
null
Key distinction:
undefined = variable exists but has no value yet.
null = variable is intentionally empty.*/
// You’ve demonstrated the difference between undefined and null perfectly. No corrections needed.

// 6 typeof Gotcha.
/*What’s the output of:
alert(typeof null);
alert(typeof undefined);
Write down your predicted answers before running*/

alert(typeof null); // object
alert(typeof undefined); // undefine
// null is an object, and undefined will remain undefined


// Feedback By mentor: ⚠️⚠️⚠️⚠️
/* Close, Hamza — mostly right, but let’s be precise:
typeof null returns "object", even though null is not really an object. This is a historical quirk in JavaScript.
typeof undefined correctly returns "undefined".
null ==> null gotcha (this is a long-standing JS bug)
Key takeaway: always remember the null “gotcha”. It’s common in interviews and real-world debugging. */
// You understood undefined correctly, but be careful with null. It’s a classic pitfall in JavaScript.