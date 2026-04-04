// Unary Operators in JavaScript
//  - Unary operators act on a single operand to perform operations like type conversion, value manipulation, or checking certain conditions.
//  - Common unary operators include the unary plus (+), unary negation (-) and NOT operator (!).

let str = "42";

let numPositive = +str; //  Unary Plus Operator

console.log(str);                // "42" (string)
console.log(numPositive);        // 42
console.log(typeof str);         // "string"
console.log(typeof numPositive); // "number"

let numNegative = -str;   // Unary Negation Operator
console.log(numNegative); // -42 (number)

// ! Operator ----------------------------------------

let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true

// Typeof Operator ----------------------------------------
//  The typeof operator returns a string indicating the type of the unevaluated operand.

console.log(typeof 42);      // "number"
console.log(typeof "Hello"); // "string"

// Void Operator ----------------------------------------
//  The void operator evaluates the given expression and then returns undefined, regardless of the original expression's value.

function returnValue() { return 42; }

console.log(returnValue()); // 42
console.log(void returnValue()); // undefined