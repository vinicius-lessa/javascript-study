// Number Type Umbrella -----------------------------------

// Integers
const positiveInteger = 100; // typeof = number
const negativeInteger = -25; // typeof = number
const zero = 0; // typeof = number

// Floating-Point Numbers

const floatingPointNumber = 4.5; // typeof = number 
const anotherFloat = 89.56; // typeof = number
const oneMoreFloat = 16.462; // typeof = number

// Infinity and -Infinity
const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number

const negativeInfiniteNumber = -1 / 0;
console.log(negativeInfiniteNumber); // -Infinity
console.log(typeof negativeInfiniteNumber); // number

// NaN (Not-a-Number)
const notANumber = 0 / 0;
console.log(notANumber); // NaN
console.log(typeof notANumber); // number


// Prefix and Postfix Increment/Decrement --------------------
let a = 5;
console.log(a++); // 5
console.log(a); // 6

let b = 5;
console.log(++b); // 6
console.log(b); // 6

let c = 5;
console.log(c--); // 5
console.log(c); // 4

let d = 5;
console.log(--d); // 4
console.log(d); // 4


// Arithmetic Operations ----------------------------------
// Addition
const sum = 10 + 5; // 15

// Subtraction
const difference = 10 - 5; // 5

// Multiplication
const product = 10 * 5; // 50

// Division
const quotient = 10 / 5; // 2

// Modulus (Remainder)
const remainder = 10 % 3; // 1 (0.33 * 3) - Another way is to think how many times 3 fits in 10 (3 times) and what is left (1)

// Exponentiation
const power = 2 ** 3; // 8 (2 * 2 * 2) - It's the same of 2³ (same of Math.pow(2, 3))


// Parsing Numbers from Strings -----------------------

// parseInt() - Extracts an integer from a string
const intFromString = parseInt("42px");                 // 42
const anotherIntFromString = parseInt("   -15.67em");   // -15
const invalidIntFromString = parseInt("abc123");        // NaN
const onlyIntFromFloat = parseInt(3.99);                // 3 (same of Math.trunc() and num.toFixed(0))

// parseFloat() - Extracts a floating-point number from a string
const floatFromString = parseFloat("3.14abc");              // 3.14
const anotherFloatFromString = parseFloat("   -0.99xyz");   // -0.99
const invalidFloatFromString = parseFloat("xyz3.14");       // NaN

// Other Utilities ------------------------------------

// ToFixed() - Formats a number using fixed-point notation
const num = 5.6789;
const formattedNum = num.toFixed(2); // "5.68" (*STRING* representation with 2 decimal places)