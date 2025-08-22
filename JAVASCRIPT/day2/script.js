// This is a working example with proper semicolons
alert('hello world'); // semicolon ends the statement
alert('hello world2'); // semicolon ensures no merge with the next line
alert('hello world3'); // safe and predictable execution without errors

// BROKEN EXAMPLE: missing semicolon before array literal breaks code
// alert("Broken") 
// [1, 2].forEach(alert);
// Explanation: Without the semicolon, JS merges both lines => syntax error