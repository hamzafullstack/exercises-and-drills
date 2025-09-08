// Contains solutions to exercises in exercise.html

// Exercise 1: Truthy or Falsy?
let accessCheck; // variable to asign boolean value
let userAge = +prompt('Enter your age to get access : ', 18); // ask input
if (userAge > 18){
    // if block
    accessCheck = true;
}else{
    // else Block
    accessCheck = false;
}
console.log(accessCheck); // Log / print

// Exercise 2: Nested Conditions & Braces Safety
let a = 10; // declare var a
let b = 7; // declare var b
// nested if statement Block
if (a > b) {
    if (a - b > 10) {
        alert("yes a is significantly bigger");
    } else {
        alert("a is bigger");
    }
} else {
    alert("a is not bigger");
}

// Exercise 3: Multi-Way Condition (if...else if...else)
// asking user to enter a prompt
let mark = +prompt('Enter your mark (0–100) show your grade : ', 100);
// Conditional Block of code | if else if and Else
if (mark >= 90){
    alert("A Grade");
}else if(mark >= 70){
    alert("B Grade")
}else if(mark >= 50){
    alert('C Grade');
}else{
    alert('D Grade');
}

// Exercise 4: Ternary Shortcut
// input from the user
let num = +prompt('Enter a number : ', 100);
// Conditional block with is Even logic
if (num % 2===0){
    alert('Even');
}else{
    alert('Odd')
}
// '?' mark operator | Ternary Operator
alert(num % 2===0 ? 'Even' : 'Odd'); // print Even or Odd

// Exercise 5: Mix Blocks with Ternary
// asking user to input a number
let n = +prompt("Enter a number : ", 100);
// conditional statement and logic
if(n > 0){
    alert('Positive')
}else if (n < 0){
    alert('Negative');
}else{
    alert('Zero');
}
//ternary operator in use..
alert(n > 0 ? 'Positive' : n < 0 ? 'Negative' : 'Zero');

// FINISHED............
console.log('Finished All Exercises...'); // log message