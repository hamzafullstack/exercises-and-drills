// JavaScript Comparisons Exercises solutions. Exercise details are in the exercise.html
// Date: 01-09-2025 5:50PM Monday.

// Exercise 1: Basic Numeric Comparisons
5 > 3; // true
5 < 3; // false
5 >= 5; // true
5 <= 4; // false.
5 != 5; // false

// Exercise 2: Lexicographical String Comparison
"apple" > "banana" // false because 'a' < 'b'
"ABC" < "abc" // true because 'A' < 'a' in Unicode
"Cat" > "Car" // true 't' > 'r'
"2" > "12" // true  string comparison: '2' > '1'
"Zoo" < "Ant" // false 'Z' > 'A' in Unicode

// Exercise 3: Mixed-type Comparisons & Type Coercion
"5" > 3 // true 
"5" == 5 // true
"05" == 5 // true
true == 1 // true
false == 0 // true
// camparison operator convert string to number,

// Exercise 4: Strict vs Loose Equality
0 == false // true
0 === false // false
"" == false // true
"" === false // false
null == undefined // true
null === undefined // false.

// Moral of the story:
// Use === in real projects → safer, predictable, no silent type conversions.
// == is tricky → only null == undefined is the one exception worth remembering.

// Exercise 5: Null/Undefined with Comparisons
null > 0 // false
null == 0 // false
null >= 0 // true
undefined > 0 // false
undefined == 0 // false

// Big Moral:
// null behaves inconsistently — in == vs numeric comparisons.
// undefined is even stricter: only equal to null, nothing else.
// Production me avoid null/undefined comparisons → always check explicitly (=== null / === undefined).

// Exercise 6: Boolean Truthiness in Comparisons
!!"" == false // true
!!"0" == true // true
"" == 0 // true
" " == 0 // true

// Moral of Story:
// !! is the truthiness check trick.
// Empty string → falsy.
// Non-empty string (even "0" or " ") → truthy.
// BUT when compared with numbers (==), type coercion gives surprises.

// Finished ---------> i am tired....