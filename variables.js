const age = 25;         // Constant variable - Value won't change
let name = "Vinícius";  // Most used - Block scoped variable
var isStudent = true;   // Oldest way - Function scoped variable

// Object destructuring - Extracting values from objects into variables
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

const { name: personName, age: personAge } = person;
console.log(personName); // Output: Alice
console.log(personAge);  // Output: 30


// Example of var vs let
function example() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 - accessible outside the if block!
}

// Compare with let:
function example2() {
    if (true) {
        let y = 10;
    }
    console.log(y); // ReferenceError: y is not defined
}