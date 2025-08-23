// The Questions /Problems are in drills.html file

// Drill 1 – Numbers
let price1 = 15.567; // defined variable price1
let price2 =  23.456; // defined variable price2
// multiply price1 and price2 and store in multiply variable
let multiply = price1 * price2;
alert('Result1: '  + multiply.toFixed(1));
// divide price2 by price1 and store in divider variable
let divider = price2 / price1;
alert('Result2: ' + divider.toFixed(2));


// Drill 2 – BigInt
let bigA = 9007199254740991000n; // defined variable bigInt
let bigB = 12345678901234567890n; // defined var with bigInt 2
let add = bigA + bigB; // plus bigA and BigB - addition
let sub = bigA - bigB; // minus - substration of bigA and Bigb
// i am using alert function to see results in nodejs or browser popup
alert('Addition Result: ' + add);
alert('Subtracting Result: ' + sub);

// Drill 3 – Strings / Template Literals
// declaring variables in one line -> firstname lastname and skill
let firstName = 'Ameer', lastName = 'Hamza' , skill = 'Gaming';
// i am using template literal to show My name is Ameer Hamza. I love Gaming.
alert(`My name is ${firstName} ${lastName}. I Love ${skill}.`);
// now i am using to the manual Concatenate
alert('My name is ' + firstName + ' ' + lastName + '. I Love ' + skill + '.');


// Drill 4 – Boolean
let age = 25; // declaring age variable
let minAge = age >=18; // minimum age 
let maxAge = age<=30; // max age.
// alert function to view results 
alert(minAge);
alert(maxAge);

// If I wanted to push you one step deeper, I’d combine them like this:
let isAdultInRange = age >= 18 && age <= 30;
alert(isAdultInRange); // true if both conditions are true


// Drill 5 – Null / Undefined
let x; // a variable without assigned value. - undefined technically
let y = null; // null means empty, nothing, value is unknown 
alert(x); // undefined => because we haven't assigned any value to the x.
alert(y); // null => null, nothing, empty like your Girlfriends womb 😋
// checking there types 
alert(typeof x); // undefined = because we haven't assigned any value to the x
alert(typeof y); // object => null is not object its gotcha null bug.

// Drill 6 – Mixed Types
let a = 10, b = '10';
a == b; //// true (string gets converted to number, might mislead you)
a === b; //  false (strict, type mismatch)
alert(a);
alert(b);
alert(typeof b); // string,
alert(typeof a); // number

// == → loose equality, does type coercion ('10' → 10), returns true.
// === → strict equality, no type coercion, returns false because types differ.