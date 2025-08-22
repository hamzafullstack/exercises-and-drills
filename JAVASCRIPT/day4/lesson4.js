// Lesson 4: Variables

// Constant - birthday never changes
const myBirthday = '15.02.2000';

// let variables - values can be changed later
let name = 'Ameer Hamza ';
let age = 25;
let favSkill = 'Coding'; // initial skill

// Reassigned skill (allowed because it's let)
favSkill = 'Gaming';

// String concatenation (we haven’t learned template literals yet)
let greetingName = name + 'loves ' + favSkill;
alert(greetingName);

// Show age
alert('Age: ' + age);

// Constant written in ALL_CAPS for fixed values
const COLOR_ORANGE = '#FFA500';

// Assign constant to another variable
let favoriteColor = COLOR_ORANGE;
alert('favorite color ' + favoriteColor);
