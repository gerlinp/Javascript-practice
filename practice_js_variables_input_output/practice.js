// 1. Attach this file -- practice.js -- to the index.html file using a <script> tag

// 2. In this JavaScript file, add a prompt dialog to capture input from the user and store it in a variable
let wrd1 = prompt( "Please enter your first word");

// 3. Add a second a prompt dialog to capture input from the user and store it in a second variable
let wrd2 = prompt( "Please enter your second word");
// 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"

let wrd3 = `${wrd1.toUpperCase()} ${wrd2.toUpperCase()}`;
console.log(wrd3);
// 5. Create a fourth variable to store a number. The number should be the total number of characters in the third variable. 
let num = `${wrd3.length}`;
// 6. Add an alert dialog box that says "The string '[insert value of third variable here]' is X number of characters long." For example, if the third variable contained the string "SALLY FORTH" then the alert dialog should says "The string 'SALLY FORTH' is 11 characters long."

alert(`The string ${wrd3} is ${num} characters long.`);










