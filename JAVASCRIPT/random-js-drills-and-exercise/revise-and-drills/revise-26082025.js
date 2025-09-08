// hello world
alert('Hello World!'); // Hello World!
// code structure
// Statements can be separated with a semicolon.
alert('Hello'); alert('World!'); // hello World!
// More readable
alert('Hello');
alert('World!');
// Semicolons
alert('hello')
alert('world') // without ; work but not recommanded, in future cause bugs
// this work too but not recommanded
alert( 1 +
2+
2); // 5

// comments in js
// we use // to comment anything. or ctrl+/ to comment selected line or code
// nested comments are supported in javascript.


// The modern mode, "use strict"
'use strict'; // this code works the modern way.
// Ensure that “use strict” is at the top
alert('some code');
// "use strict" below is ignored--it must be at the top
"use strict"; // Only comments may appear above "use strict".
(function () {
    "use strict";
    console.log('hello world')
})()
// the modern javascript enable use strict automatically. So we don’t need to add the "use strict"

// variables in javascripts | let var and const.
let message;
message = 'hello'; // // store the string 'Hello' in the variable named message
// The string is now saved into the memory area associated with the variable.
alert(message); // shows the variable content

// the concise variant of defining a veriable
messageOne = 'Hello!'  // define the variable and assign the value
alert(messageOne);

// we can also declare variables like this
let user = 'Hamza', age = 25, userMessage = 'hello'; // not recommanded

// recommanded way to declare variable
let userTwo = 'javed';
let userTwoAge = 24;
let userTwoMessage = 'Hello Hamza';

// you can declare variables like this too.
let userThree = 'Amjad',
userThreeAge = 27,
userThreeMessage = 'Hello everyone';
// Technically, all these variants do the same thing. So, it’s a matter of personal taste and aesthetics.

// var instead of let
var newVar = 'Hamza'; // old method, var
alert(newVar);

// We can also change it as many times as we want: the data from variable
let newMessage = 'Javascript is hard'
newMessage = 'Javascript is easy'; //When the value is changed, the old data is removed from the variable:
alert(newMessage);

// We can also declare two variables and copy data from one into the other.
let Game = 'CSGO';
let newGame;
newGame = Game; // now two variables hold the same data
alert(Game); // CSGO
alert(newGame); // CSGO.. | copied data from Game
// Remember: declaring twice cause the syntax error.

// Constants
// To declare a constant (unchanging) variable, use const instead of let:
const myBirthDay = '16-06-2006';
// when coder is sure variable data wont change he uses the constant.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00