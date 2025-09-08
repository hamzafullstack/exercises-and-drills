// 1) Declare and Assign
let greetings; //declared var without the assigned value
greetings = 'Hello'; // reassigned
let farewell = 'Good Bye.'; // declared and assigned
console.log(greetings + " " + farewell); // print

// Finished / exercise completed.

// 2) Reassign Value
let mood = 'Happy'; // declared mood with happy
mood = "Excited"; // Reassigned it to "Excited"..  Happy->Excited
console.log(mood); // Logged final value.

// FInished / Exercise Completed..

// 3) One per Line
let name = 'Alice';
let age = 30;
let city = 'Dubai';
console.log(name, age, city); // Alice 30 Dubai

// Finished / Exercise completed.

// 4) Invalid vs Valid Names — Identify Errors
// let 1stPlace = 'Gold'; // error - because var cant start with a number
// let my-Name = 'John'; // cant declared with - hyphens considered ,minus
let _status = 'Active'; // correct because you use underscore to declare var
let $ = 100; // correct because you can use $ to declare var in js

// Finished / Completed...

// 5) Case Sensitivity
let Score = 10; // Score s is capital
let score = 20; // score s is small
// in javascript variables are case sensitive. Score & score are two different variables..
console.log(Score, score); // 10, 20

// Finished / Exercise Completed...


// 6) Reserved Word Check
// let let = 5; // let is reversed variable name, we are not allowed to reversed name
let Let = 5; // correct we use case sensitvity here. still not recommanded.
// personally i dont recommand even using casesensitive reversed names

// summary//
// let let = 5 // error - incorrect
// let Let = 5; // valid but not recommanded by myself.

// Finished / Exercise Completed...

// Bonus (Optional)
// 7) Copy Value
let original = "First"; // declared the var orginal with first value
let copy = original; // copy var copied to the data of orginal
console.log(original, copy); // output; first first

// Finished / Completed...

// 8) Re-Declaration Error (Same Block)
let item = 'Book' // declared item and assigned book.
// let item = 'Pen'; // error - case sensitivity, item already declared cant be again
//summary
// in javascript we cant declare multiple vars with same name




