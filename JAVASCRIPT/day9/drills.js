// JavaScript Operators | Practice Exercises. Based on the Basic Operators, Maths chapter from JavaScript.info
//  Solutions file.. Exercise details are in exercise.html file.
// Date: 31-08-2025 5:00 PM. Sunday

// Exercise 1: Terminology Drill
alert(5 * 2) // operand operator operand
//  5 and 2 is operand and the * is the operator
alert( 5 - 2 ); // 5 and 2 are operand - is operator.
alert(5 + 2); // 5 and 2 are operand + is the operator.
alert(6 / 3); // 6 and 3 are the operand / is operator
alert(8 ** 2); // 8 and 2 are the operand ** is operator.
alert( 7 % 2); // 7 and 2 are the operand % is operator.
// unary operators
alert(-5); // 5  operand | -  unary operator
alert(+10); // 10  operand | +  unary operator
alert(++x); // x  operand | ++  unary operator
alert(--y); // y  operand | --  unary operator

// Exercise 2: Arithmetic Operators Mastery
console.log(4+4); // 8 additon +
console.log(6-2); // 4 Subtraction -
console.log(7 * 2); // 14 multiplication *
console.log(8 / 3); // 2.6 division /
console.log(4 ** 2); // 16 Exponentiation **
console.log( 5 % 2); // 1 // Remainder %

// Exercise 3: Remainder Operator Challenges
let a = 5; // var contains a number as a value
let b = 2; // contains a number as a value
console.log(a % b); // 1. => remainder % after dividing 5 by 2
console.log(8 % 3); // 2. remainder after dividing 8 by 3
console.log(8 % 4); // 0. remainder after dividing 8 by 2
console.log(10 % 6); // 4. remainder after dividing 10 by 6
console.log(15 % 7); // 1. remainder after dividing 15 by 7
// If the dividend is smaller than the divisor (e.g., 3 ÷ 5), the divisor doesn't fit even once. 

// Exercise 4: Exponentiation Insights
console.log(2 ** 2); // 4 because 2 power 2 is 4. So 2 ** 2 = 2 × 2 = 4.
console.log(2 ** 3); // 8. 2p 3 = 8
console.log(2 ** 4); // 16
console.log(9 ** 0.5); //  square root
// When an exponent is \(0.5\), it is equivalent to taking the square root of the base number. 
// Mental tip:
// If the exponent > 1 → repeated multiplication
// If the exponent = 0.5 → square root
// If the exponent = 1/n → n-th root

// Exercise 5: Mixed Operators & Precedence
console.log(1 + 2 * 3); // 1 + (2 * 3) = 1 + 6 = 7
console.log((1 + 2) * 3); // 9. in parentheses addition get precedence, 1+2*3
console.log(9 / 2 * 3); // 13.5 left to right 9 / 2 = 4.5 | 4.5 * 3 = 13.5
console.log(9 / (2 * 3)); // 2*3=6 | 9/6=1.5
console.log(1 + 2 ** 3 / 2 - 1); // 2 ** 3 = 8 | 8 / 2 = 4  1 + 4 - 1
// BODMAS yaad rakh → Brackets → Orders (exponents) → Division → Multiplication → Addition → Subtraction.

// Exercise 6: Explore Operator Overlaps
// unary 
let uni = 1;
console.log(-uni); // -1 this is unary which get one operand
console.log(+uni); // unary plus does nothing but ensures number type
// binary | takes 2 operand
console.log(4 + 4); // binary addition
console.log(2 - 1); // binary substraction
console.log(7 / 2); // Binary division
console.log(3 * 2); // binary multiplication

// Type	Operator Examples	How many operands	Sample Output
// Unary	-, +, ++, --, !	        1	           -uni = -1
// Binary	+, -, *, /, %, **	    2	          4 + 4 = 8

// Exercise 7: Conceptual Application
// sparepart shop. / Addition.
let engineOil = 55; // var contains number
let brakePad = 67; // var contains number
let total = +engineOil + +brakePad; // sum, and convert input in number
console.log(`The total of your engine oil ${engineOil}AED and brake pad ${brakePad}AED is ${total} AED`) // log / template literals.

// substractions, calculator
let userInput = +prompt('Enter 1st number : ', 100); // input and convert to num
let userInput2 = +prompt('Enter 2nd number : ', 100); // input and cnvrt
let subtraction = userInput - userInput2; // subtraction operation performed
console.log(`The Result is: ${subtraction}`); // log / result.

// Multiplications, Pakistan Stock Market Portfolio
let angrooFirtilizer = 25;
let askariBank = '12'; // string
let mariPetroleum = 190;
let MeezanBank = 80;
let totalInvestment = +angrooFirtilizer + +askariBank + +mariPetroleum + +MeezanBank; // + = Number function
let bullRun = 2; 
totalPortfolio = totalInvestment * bullRun; // multiplication operation.
console.log(`your investment was : ${totalInvestment} and your current portfolio is : ${totalPortfolio}`);

// Division, Bill splitting among friends
let dinnerBill = 45; // declared variable as a bill amount
let input = +prompt('How many Friends were you there at dinner table: ', 100);
let split = +dinnerBill / input; // division operation
// Hamza, Sameer, and Ghafoor eat Beef pulao xd | yummmmmmy
console.log(`Your total Bill is ${dinnerBill} AED and You guys are ${input} Friends each of you have to pay ${split} AED`);

// I am tired..........................................FINISH.................................................

